# Options

Here we're gonna learn how to set options to our slash commands with `discord_styled`

So i have this slash command:

```py
@slash.slash(name="hi", description="Say hi to my bot!")
async def _hi(...)
```

## Creating an option

So, i want to create a `name` option for my command, check this out:

<CodeGroup>
  <CodeGroupItem title="STYLED" active>

```py
from discord_styled.slash import option

@option("name", "What's your name?")
@slash.slash(name="hi", description="Say hi to my bot!")
async def _hi(...)
```

  </CodeGroupItem>
  <CodeGroupItem title="BASE">

```py
from discord_slash.manage_commands import create_option

@slash.slash(name="hi", description="Say hi to my bot!", options=[
    create_option("name", "What's your name?", 3, True)
])
async def _hi(...)
```

  </CodeGroupItem>
</CodeGroup>

`STYLED` is how we do it with `discord_styled` and `BASE` is how used to create options with `discord_slash`. Amazing right?

## Creating many options

Now, it may not be the *great thing* BUT when we set more than one option, yeah, we see the diference:

<CodeGroup>
<CodeGroupItem title="STYLED" active>

```py
from discord_styled.slash import option

@option("name", "What's your name?")
@option("age", "What's your age?", 4)
@option("job", "What's your job?", required=False)
@slash.slash(name="hi", description="Say hi to my bot!")
async def _hi(...)
```
</CodeGroupItem>
<CodeGroupItem title="BASE">

```py
from discord_slash.manage_commands import create_option

@slash.slash(name="hi", description="Say hi to my bot!", options=[
    create_option("name", "What's your name?", 3, True),
    create_option("age", "What's your age?", 4, True),
    create_option("job", "What's your job?", 3, False)
])
async def _hi(...)
```
</CodeGroupItem>
</CodeGroup>

Much more clean and pretty.

## Reference

You can see the syntax, the parameters and their types, all the information of the `@option` decorator in the [API reference](api/slash.md#option-decorator)