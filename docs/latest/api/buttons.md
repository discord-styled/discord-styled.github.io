# `discord_styled.buttons`

The buttons package help us with all the button components stuff

## `button()`

Function to create a button. Needs to go within an action row.

```py
button(style:Union[int, str, ButtonStyle]="PRIMARY", label:Union[str, None]=None,
emoji:Union[Emoji, PartialEmoji, str, None]=None, custom_id:Union[str, None]=None,
url:Union[str, None]=None, disabled:bool=False)
```
**style** - Style of the button

- String choices:
  - `"PRIMARY"`
  - `"BLUE"`
  - `"BLURPLE"`
  - `"SECONDARY"`
  - `"URL"`
  - `"GRAY"`
  - `"GREY"`
  - `"SUCCESS"`
  - `"GREEN"`
  - `"DANGER"`
  - `"RED"`
  
**label** - Label of the button <br>
**emoji** - Emoji of the button <br>
**custom_id** - Id of the button. Needed for non-link buttons.<br>
**url** - URL of the button. Needed for link buttons. <br>
**disabled** - Whether the button is disabled or not.

## `buttons()`

Function, creates an action row for buttons

```py
buttons(*button_list:list[dict])
```

**button_list** - List of buttons to go within the action row

## `wait_button()`

Function, Waits for a button interaction. Alternative to `wait_for_component`.

```py
wait_button(client:discord.Client, buttons:Union[str, dict, list], messages:Union[Message, int, list, None]=None, check=None, timeout=None)
```

**client** - The client/bot object. <br>
**buttons** - Custom ID to check for, or button dict (buttons or button) or list of previous two. <br>
**messages** - The message object to check for, or the message ID or list of the previous two. <br>
**check** - Optional check function. Must take `ComponentContext` as the first parameter. <br>
**timeout** - The number of seconds to wait before timing out and raising `asyncio.TimeoutError`.