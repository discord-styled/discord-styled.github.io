# ✨ Permission Templates

> This is new, comes since version `0.4.0`

If your bot is on two or more servers and you want to apply the same permissions to a set of commands you can be a prisoner of this terrible monster:

```py
# init.py
from discord_styled.permissions import only_allow_roles

@slash.slash(...)
@only_allow_roles([1234567890, 1234567891], [1234567892, 1234567893])
async def...

@slash.slash(...)
@only_allow_roles([1234567890, 1234567891], [1234567892, 1234567893])
async def...

@slash.slash(...)
@only_allow_roles([1234567890, 1234567891], [1234567892, 1234567893])
async def...
```

## Creating a template

To avoid this problem let's create a templeate, first create a file called `utils.py`, now let's add the following code:

<CodeGroup>
<CodeGroupItem title="NORMAL">

```py
# utils.py
from discord_styled.utils.permissions import Permissions

my_permissions = Permissions([1234567890, 1234567891])
my_permissions.only_allow_roles([1234567892, 1234567893])
my_permissions = my_permissions.permissions
```

</CodeGroupItem>
<CodeGroupItem title="ALTERNATIVE">

```py
# utils.py
from discord_styled.utils.permissions import Permissions

my_permissions = Permissions([1234567890, 1234567891]).only_allow_roles([1234567892, 1234567893])
```

</CodeGroupItem>
</CodeGroup>

> Only use the alternative way if you're going to use just one function of the class

## Applying a template

Now go to your `init.py` (or the file which your command is), import your template and use it:

<CodeGroup>
<CodeGroupItem title="NOW">

```py
# init.py
from discord_styled.permissions import permissions
from utils import my_permissions

@slash.slash(...)
@permissions(my_permissions)
async def...

@slash.slash(...)
@permissions(my_permissions)
async def...

@slash.slash(...)
@only_allow_roles(my_permissions)
async def...
```

</CodeGroupItem>
<CodeGroupItem title="BEFORE">

```py
# init.py
from discord_styled.permissions import only_allow_roles

@slash.slash(...)
@only_allow_roles([1234567890, 1234567891], [1234567892, 1234567893])
async def...

@slash.slash(...)
@only_allow_roles([1234567890, 1234567891], [1234567892, 1234567893])
async def...

@slash.slash(...)
@only_allow_roles([1234567890, 1234567891], [1234567892, 1234567893])
async def...
```

</CodeGroupItem>
</CodeGroup>

Amazing, right? Now you can create your templates and avoid ugly and repetitive code.

## Reference

If you want to know all about the Permissions class methods, parameters and types go to the [API Reference](./api/utils/permissions.md)