# Buttons

Here we're gonna learn how to use buttons in the styled way *hell yeah*

## Creating a button

I just want a simple blue button with a message saying "Hi!", watch:

<CodeGroup>
  <CodeGroupItem title="STYLED">

```py
from discord_styled.buttons import buttons, button

my_buttons = buttons(
    button(label="Hi!")
)
```

  </CodeGroupItem>
  <CodeGroupItem title="BASE">

```py
from discord_slash.utils.manage_components import create_button, create_actionrow
from discord_slash.model import ButtonStyle

my_buttons = create_actionrow(
    create_button(style=ButtonStyle.primary, label="Hi!")
)
```

  </CodeGroupItem>
</CodeGroup>

### More complex

Let's create three buttons, different colors, custom ids and labels

<CodeGroup>
  <CodeGroupItem title="STYLED">

```py
from discord_styled.buttons import buttons, button

my_buttons = buttons(
    button(label="Blue button!", custom_id="blue"),
    button(style="green", label="Green!", custom_id="green"),
    button(style="red", label="And Red!", custom_id="red")
)
```

  </CodeGroupItem>
  <CodeGroupItem title="BASE">

```py
from discord_slash.utils.manage_components import create_button, create_actionrow
from discord_slash.model import ButtonStyle

my_buttons = create_actionrow(
    create_button(style=ButtonStyle.primary, label="Blue button!", custom_id="blue"),
    create_button(style=ButtonStyle.green, label="Green!", custom_id="green"),
    create_button(style=ButtonStyle.red, label="And Red!", custom_id="red")
)
```

  </CodeGroupItem>
</CodeGroup>

### Sending the message

If you've already read the `discord-interactions` documentation, you should know we just have to do the following:

```py
await ctx.send("My message", components=[my_buttons])
```

## Responding

When responding, you have 3 choices in how you handle interactions, BUT, `discord_styled` only supports styled solutions for the `wait_for` way

> I'm pretty sure Global event and Component callbacks (I love this one) are really, really well-made so, let's leave these functions in peace for now...

### Wait for interaction

This is the way how we do it:

<CodeGroup>
  <CodeGroupItem title="STYLED">

```py
from discord_styled.buttons import wait_button

await ctx.send("My message", components=[my_buttons])

button_ctx = await wait_button(bot, my_buttons)
await button_ctx.edit_origin(content="Let's gooo!")
```

  </CodeGroupItem>
  <CodeGroupItem title="BASE">

```py
from discord_slash.utils.manage_components import wait_for_component

await ctx.send("My message", components=[my_buttons])

button_ctx = await wait_for_component(bot, components=my_buttons)
await button_ctx.edit_origin(content="Let's gooo!")
```

  </CodeGroupItem>
</CodeGroup>

## Reference

To know all about `discord_styled.buttons` functions, parameters, types, go to the [API Reference](api/buttons.md)

## More about buttons

If you want to know more about button components, I mean, you should've already read this documentation, BUT as a reminder, read [discord-interactions docs](https://discord-py-slash-command.readthedocs.io/en/latest/components.html)