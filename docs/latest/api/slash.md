# `discord_styled.slash` module

The slash module help us to handle slash commands structure

## `@option` decorator

Creates option used for creating slash command.

```py
@option(name: str,
        description: str,
        type: Union[int, type],
        required: int = True,
        choices: list = [])
```
**name** - Name of the option. <br>
**description** - Description of the option. <br>
**type** - Type of the option.

- Choices:
  - `3` - String
  - `4` - Integer
  - `5` - Boolean
  - `6` - User
  - `7` - Channel
  - `8` - Role
  - `9` - Mentionable (Users and roles)
  - `10` - Number
  
**required** - Whether this option is required. <br>
**choices** - Choices of the option. Can be empty.