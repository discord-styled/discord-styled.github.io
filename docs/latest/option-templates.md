# 💗 Option templates

> This is new, comes since version `0.5.0`

Maybe you have more than one slash command using the same options, that's why discord-styled have Option Templates

## Creating a template

Let's create a template:

```py
# utils.py
from discord_styled.utils.slash import Options

my_options = Options()
```

Now let's add a name option to our template:

```py{5}
# utils.py
from discord_styled.utils.slash import Options

my_options = Options()
my_options.add("name", "Your name")
```
And finish your template:

:::: code-group
::: code-group-item NORMAL
```py{6}
# utils.py
from discord_styled.utils.slash import Options

my_options = Options()
my_options.add("name", "Your name")
my_options = my_options.template()
```
:::
::: code-group-item ALTERNATIVE
```py{4}
# utils.py
from discord_styled.utils.slash import Options

my_options = Options().add("name", "Your name")

# WARNING: Just use this one-line alternative if you're only adding one option
# to your template, if you have more options then use the normal way
```
:::
::::

And now go to your command file, import the `@options` decorator, import your template and use it

```py{2,3,6}
# init.py
from discord_styled.slash import options
from utils.py import my_options

@options(my_options)
@slash.slash(...)
```

And that's all!

## Adding more options

If you want to add more than one option you can:

```py
# utils.py
from discord_styled.slash import Options

my_options = Options()
my_options.add('name', 'Your name')
my_options.add('age', 'Your age', int)
my_options.add('email', 'Your email')
my_options = my_options.template()
```

::: tip FYI
The order/position of your options depends on the order in which you add your options, for example, the final position of my options will be: `name`, `age`, `email`
:::

## Using dictionaries

If you want you can add options to your templates from dictionaries:

```py
from discord_styled.utils.slash import Options

data = { 'name': 'rule', 'description': 'Number of the rule', 'type': int }
my_template = Options().add_from_dict(data)
```

### Adding more options

Or you can use a list of dictionaries but this time using the method `add_from_dicts()`:

```py
data = [
    { 'name': 'rule', 'description': 'Number of the rule', 'type': int },
    { 'name': 'notes', 'description': 'Wanna add some notes?' }
]
my_template = Options().add_from_dicts(data)
```

## Re-using templates

You can re-use a template to create more templates:

:::: code-group
::: code-group-item ADD() METHOD
```py
# utils.py
from discord_styled.utils.slash import Options

mother_template = Options()
mother_template.add('rule', 'Number of rule', int)

another_template = mother_template.add('notes', 'Wanna add some notes?')

another_one = mother_template
another_one.add('notes', 'Wanna add some notes?')
another_one.add('stars', 'Rate this system', int, False)
another_one = another_one.template()
```
:::
::: code-group-item DICTIONARIES
```py
from discord_styled.utils.slash import Options

mother_template = [{ 'name': 'rule', 'description': 'Number of rule', 'type': int }]

mother_template.append({ 'name': 'notes', 'description': 'Wanna add some notes?' })
another_template = Options().add_from_dicts(mother_template)

mother_template.append({ 'name': 'stars', 'description': 'Rate this system','type': int, 'required': False})
another_one = Options().add_from_dicts(mother_template)
```
:::
::::

## Reference

You can see the syntax, the parameters, types, all the information of the `Options` class in the [API Reference](./api/utils/options.md)