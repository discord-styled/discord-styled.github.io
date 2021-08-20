# `discord_styled.utils.permissions`

Module with utility functions for slash command permissions

## `Permissions`

Class, creates a slash command permissions template

```py
Permissions(self, guild_id:Union[int, list[int]])
```
**guild_id** - List of guild ids

### Methods

---

### everyone_permission()
Allow or deny permissions for @everyone

```py
everyone_permission(allow:bool=False)
```

#### Parameters
- **allow (`bool, optional`)** - Whether to allow or deny permission. Defaults to `False`.

### allow_roles() <br>
Allow or deny permissions for a list of role ids

```py
allow_roles(roles:list[int], allow:bool=True)
```

#### Parameters
- **roles (`list[int]`)** - List of role ids
- **allow (`bool, optional`)** - Whether to allow or deny permission. Default to `True`.

### allow_only_roles()
Deny permissions to @everyone and allow them to a list of role ids.

```py
only_allow_roles(roles:list[int])
```

#### Parameters
- **roles (`list[int]`)** - List of role ids

### deny_roles()
Deny permissions to a list of role ids, same as `allow_roles(..., False)`.

```py
deny_roles(roles:list[int])
```

#### Parameters
- **roles (`list[int]`)** - List of role ids

### allow_users()
Allow or deny permissions to a list of user ids

```py
allow_users(users:list[int], allow:bool=True)
```

#### Parameters
- **users (`list[int]`)** - List of role ids
- **allow (`bool, optional`)** - Whether to allow or deny permission. Defaults to `True`.

### allow_only_users()
Deny permissions to @everyone and allow them to a list of user ids

```py
allow_only_users(users:list[int])
```

#### Parameters
- **users (`list[int]`)** - List of role ids

### deny_users()
Deny permissions to a list of user ids, same as `allow_users(..., False)`.

```py
deny_users(users:list[int])
```

#### Parameters
- **users (`list[int]`)** - List of role ids