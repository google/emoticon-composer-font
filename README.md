# Emoticon Composer
Emoticon Composer is an experimental font which allows one to create custom emoticons by composing
several characters over one another based on facial subcomponents.

Typing 'Aa' in the top-left field will display a face. Appending '2' at the end adds a composed set of eyebrows. Entering 'Aaf' will add a mustache above the character's mouth. Then you can also play with different font properties like size and weight.

This project contains two parts:

## Fonts
`fonts/emoticon-composer.glyphs` is the font source file, which contains all of the characters
and Unicode mappings. This is built in the application [Glyphs](https://glyphsapp.com/). It
exports to `fonts/emoticon-composer-Regular.ttf`.

## Emoticon Composer App
The Emoticon Composer website which provides a set of buttons in an editor to let you dynamically
put together characters and adjust text properties such as text size and bold/italics.

To try this out, you can clone the project and open `index.html`.

# License
See `LICENSE`.
