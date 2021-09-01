# `discord_styled.utils.options`

Module with utility functions for slash commands

## Options

Class, creates a slash command option options template

```py
Options()
```

### Methods

---

### template()

Get the final template (list of options).
> Please, don't run this method until you have added all your options.

```py
template()
```

#### Returns
- **`list`** - List of options

### add()

Adds an option to the template

```py
add(name:str, description:str, type:Union[type, int]=3, required:bool=True, choices:list=[])
```

#### Parameters
- **name(`str`)** - Name of the option
- **description(`str`)** - Description of the option
- **type(`Union[type, int]`)** - Type of the option. Defaults to `3`.
- **required(`bool`)** - Whether the option is required or not. Defaults to `True`.
- **choices(`list`)** - List of choices. Defaults to `[]`.

#### Returns
- **`list`** - List of options

### add_from_dict()

Adds an option from a python dictionary

```py
add_from_dict(option:dict)
```

#### Parameters
- **options(`dict`)** - Option's dictionary. The key names and value types are the same as those of the [add() method](#parameters)

#### Returns
- **`list`** - List of options

### add_from_dicts()

Adds options from a list of python dictionaries

```py
add_from_dicts(options:list[dict])
```

#### Parameters
- **options(`list[dict]`)** - List of python dictionaries

#### Returns
- **`list`** - List of options