# Frequently Asked Questions

## This is an alternative to `discord-interactions`?

**NOPE.** This is an "extension" library to `discord-interactions`, we bring a set of tools (functions, decorators, etc.) that makes easier to use the well known library.

So you can't use `interactions-styled` to work with Discord interactions directly.

## Why my permissions don't work?

If you're using `discord_styled.permissions` decorators and don't work properly check if they are in the right position on your code, you always need to put permissions decorators below your slash command declaration:

```py
# CORRECT:

@slash.slash(...)
@deny_all(...)
async def...

# INCORRECT:

@deny_all(...)
@slash.slash(...)
async def...
```

## Why my options don't work?

If you're using `@option` decorator and don't work properly check if it's in the right position on your code, you always need to put options on top of your slash command declaration:

```py
# CORRECT:

@option(...)
@slash.slash(...)
async def...

# INCORRECT:

@slash.slash(...)
@option(...)
async def...
```

## 💬 If you have more questions...

You can contact me on Discord, I'm gammx#0001, you can find me on the [discord-interactions server](https://discord.gg/KkgMBVuEkx) too

if you like this lib:
- You can join [interactions-styled server](https://discord.gg/kNYjuz2Jjv) to know all the news or ask something about the lib.
- Give us a :star: on [interactions-styled github repo](https://github.com/discord-interactions-styled/discord-interactions-styled).
- You can support by making pull requests, create issues, feature requests, or editing this documentation pages if I made some mistakes.

Made with :heart: for the community.