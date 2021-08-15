# Permissions

When we are creating slash commands we sometimes need to restrict access to them, we can set permissions on our commands.

Let's imagine I have a `/ban` command and I want that command to be usable only by members with the `@mod` role.

### Deny `@everyone`

First, we need to deny permission to all members on my guild, my guild's id is `123`:

<CodeGroup>
   <CodeGroupItem title="STYLED">

```py
from discord_styled.permissions import deny_all

@slash.slash(...)
@deny_all(123)
```

   </CodeGroupItem>
   <CodeGroupItem title="BASE">

```py
from discord_slash.utils.manage_commands import create_permission, SlashCommandPermissionType

@slash.slash(..., permissions = {
    123: [
        create_permission(123, SlashCommandPermissionType.ROLE, False)
    ]
})
```

   </CodeGroupItem>
</CodeGroup>

Cool, isn't it?

### Deny `@everyone` on many guilds

Now, let's imagine that I have this bot in 3 of my servers, their ids are `123`, `456` and `789`. This would be a total disaster with `discord_slash` BUT, we're lucky to have `discord_styled`:

<CodeGroup>
   <CodeGroupItem title="STYLED">

```py
from discord_styled.permissions import deny_all

@slash.slash(...)
@deny_all([123, 456, 789])
```

   </CodeGroupItem>
   <CodeGroupItem title="BASE">

```py
from discord_slash.utils.manage_commands import create_permission, SlashCommandPermissionType

@slash.slash(..., permissions = {
    123: [
        create_permission(123, SlashCommandPermissionType.ROLE, False)
    ],
    456: [
        create_permission(456, SlashCommandPermissionType.ROLE, False)
    ],
    789: [
        create_permission(789, SlashCommandPermissionType.ROLE, False)
    ]
})
```

   </CodeGroupItem>
</CodeGroup>

## Roles

### Allow roles

So, we already denied permissions for `@everyone`, now we need to allow permissions for my `@mod` role which has a `555` id:

<CodeGroup>
   <CodeGroupItem title="STYLED">

```py
from discord_styled.permissions import deny_all

@slash.slash(...)
@deny_all(123)
@allow_roles(123, [555])
```

   </CodeGroupItem>
<CodeGroupItem title="BASE">

```py
from discord_slash.utils.manage_commands import create_permission, SlashCommandPermissionType

@slash.slash(..., permissions = {
    123: [
        create_permission(123, SlashCommandPermissionType.ROLE, False),
        create_permission(555, SlashCommandPermissionType.ROLE, True)
    ]
})
```

   </CodeGroupItem>
</CodeGroup>

> Remember, `[555]` is my list of role ids i want to allow permissions to, if i want to add more role ids i can do it and set a list like this `[555, 222,...]`.

### Only allow these roles

In my command i have two decorators `@deny_all` and `@allow_roles`, `discord_styled` has a special decorator which is a mix of these two:

```py
from discord_styled.permissions import deny_all, allow_roles, only_allow_roles

# this:

@slash.slash(...)
@only_allow_roles(123, [555])

# is the same as:

@slash.slash(...)
@deny_all(123)
@allow_roles(123, [555])
```

### Deny roles

Also, if we want to deny permissions for a set of roles, we have to do something like this:

<CodeGroup>
   <CodeGroupItem title="STYLED">

```py
from discord_styled.permissions import deny_roles

@slash.slash(...)
@deny_roles(123, [555, 222])
```

   </CodeGroupItem>
   <CodeGroupItem title="BASE">

```py
from discord_slash.utils.manage_commands import create_permission, SlashCommandPermissionType

@slash.slash(..., permissions = {
    123: [
        create_permission(555, SlashCommandPermissionType.ROLE, False),
        create_permission(222, SlashCommandPermissionType.ROLE, False)
    ]
})
```

   </CodeGroupItem>
</CodeGroup>

> Remember, `[555, 222]` is my list of role ids i want to deny permissions to, you can put any role ids you want in the list.

## Users

So, we ended with the roles part, now we can set up permissions for users too

### Allow users

If I only want a group of users to be able to use my command I can do something like this:

<CodeGroup>
   <CodeGroupItem title="STYLED">

```py
from discord_styled.permissions import deny_all, allow_users

@slash.slash(...)
@deny_all(123)
@allow_users(123, [555, 222])
```

   </CodeGroupItem>
   <CodeGroupItem title="BASE">

```py
from discord_slash.utils.manage_commands import create_permission, SlashCommandPermissionType

@slash.slash(..., permissions = {
    123: [
        create_permission(123, SlashCommandPermissionType.ROLE, False),
        create_permission(555, SlashCommandPermissionType.USER, True),
        create_permission(222, SlashCommandPermissionType.USER, True)
    ]
})
```

   </CodeGroupItem>
</CodeGroup>

### Allow users on many guilds

And if my bot is on three of my servers, I can allow permissions for my folks in all of them:

<CodeGroup>
   <CodeGroupItem title="STYLED">

```py
from discord_styled.permissions import deny_all, allow_users

@slash.slash(...)
@deny_all([123, 456, 789])
@allow_users([123, 456, 789], [555, 222])
```

   </CodeGroupItem>
   <CodeGroupItem title="BASE">

```py
from discord_slash.utils.manage_commands import create_permission, SlashCommandPermissionType

@slash.slash(..., permissions = {
    123: [
        create_permission(123, SlashCommandPermissionType.ROLE, False),
        create_permission(555, SlashCommandPermissionType.USER, True),
        create_permission(222, SlashCommandPermissionType.USER, True)
    ],
    456: [
        create_permission(456, SlashCommandPermissionType.ROLE, False),
        create_permission(555, SlashCommandPermissionType.USER, True),
        create_permission(222, SlashCommandPermissionType.USER, True)
    ],
    789: [
        create_permission(789, SlashCommandPermissionType.ROLE, False),
        create_permission(555, SlashCommandPermissionType.USER, True),
        create_permission(222, SlashCommandPermissionType.USER, True)
    ]
})
```

   </CodeGroupItem>
</CodeGroup>

> Please note that `[123, 456, 789]` is my list of guild ids is want to set permissions, and `[555, 222]` is the list of user ids i want to allow permissions to.

### Only allow these users

But for `discord_styled` even that looks ugly, so let's use a special decorator that mix `@deny_all` and `@allow_users`

<CodeGroup>
   <CodeGroupItem title="STYLED">

```py
from discord_styled.permissions import only_allow_users

@slash.slash(...)
@only_allow_users([123, 456, 789], [555, 222])
```

   </CodeGroupItem>
   <CodeGroupItem title="BASE">

```py
from discord_slash.utils.manage_commands import create_permission, SlashCommandPermissionType

@slash.slash(..., permissions = {
    123: [
        create_permission(123, SlashCommandPermissionType.ROLE, False),
        create_permission(555, SlashCommandPermissionType.USER, True),
        create_permission(222, SlashCommandPermissionType.USER, True)
    ],
    456: [
        create_permission(456, SlashCommandPermissionType.ROLE, False),
        create_permission(555, SlashCommandPermissionType.USER, True),
        create_permission(222, SlashCommandPermissionType.USER, True)
    ],
    789: [
        create_permission(789, SlashCommandPermissionType.ROLE, False),
        create_permission(555, SlashCommandPermissionType.USER, True),
        create_permission(222, SlashCommandPermissionType.USER, True)
    ]
})
```

   </CodeGroupItem>
</CodeGroup>

### Deny users

If we want to deny permissions to a group of users we have to do something like this:

<CodeGroup>
   <CodeGroupItem title="STYLED">

```py
from discord_styled.permissions import deny_users

@slash.slash(...)
@deny_users(123, [555, 222])
```

   </CodeGroupItem>
   <CodeGroupItem title="BASE">

```py
from discord_slash.utils.manage_commands import create_permission, SlashCommandPermissionType

@slash.slash(..., permissions = {
    123: [
        create_permission(555, SlashCommandPermissionType.USER, False),
        create_permission(222, SlashCommandPermissionType.USER, False)
    ]
})
```

   </CodeGroupItem>
</CodeGroup>

If you want these permissions for many guilds just set a list of guild ids:

```py
@deny_users([123, 456,...], [555, 222])
```

## Reference

If you want to learn all about permissions decorators, parameters, types, go to the [API Reference](api/permissions.md)