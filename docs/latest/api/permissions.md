# `discord_styled.permissions`

The permissions package help us to handle slash commands permissions

## `@deny_all`

Decorator to deny permissions for `@everyone`

```py
@deny_all(guild_id: Union[int, list[int]])
```

**guild_id** - Guild id(s) to apply permissions

## `@allow_roles`

Decorator to allow permissions for a list of roles

```py
@allow_roles(guild_id: Union[int, list[int]], roles: list[int])
```
**guild_id** - Guild id(s) to apply permissions <br>
**roles** - List of role ids to appy permissions

## `@deny_roles`

Decorator to deny permissions for a list of roles

```py
@deny_roles(guild_id: Union[int, list[int]], roles: list[int])
```

**guild_id** - Guild id(s) to apply permissions <br>
**roles** - List of role ids to appy permissions

## `@only_allow_roles`

Decorator to deny permissions for `@everyone` and allow them to a list of roles. Like a mix of `@deny_all` and `@allow_roles`

```py
@only_allow_roles(guild_id: Union[int, list[int]], roles: list[int])
```

**guild_id** - Guild id(s) to apply permissions <br>
**roles** - List of role ids to appy permissions

## `@allow_users`

Decorator to allow permissions for a list of users

```py
@allow_roles(guild_id: Union[int, list[int]], users: list[int])
```
**guild_id** - Guild id(s) to apply permissions <br>
**users** - List of user ids to appy permissions

## `@deny_users`

Decorator to deny permissions for a list of users

```py
@deny_roles(guild_id: Union[int, list[int]], users: list[int])
```

**guild_id** - Guild id(s) to apply permissions <br>
**users** - List of user ids to appy permissions

## `@only_allow_users`

Decorator to deny permissions for `@everyone` and allow them to a list of users. Like a mix of `@deny_all` and `@allow_users`

```py
@only_allow_users(guild_id: Union[int, list[int]], users: list[int])
```

**guild_id** - Guild id(s) to apply permissions <br>
**users** - List of user ids to appy permissions