# Fate Accelerated Development Server

For use with the [Fate Accelerated Character Manager](https://github.com/GideonBrimleaf/fate_character_generator) project in development mode. This prevents the need for two separate connections to Firebase.

## Running the Project

### `npm install`

Download the dependencies

### `npm run server:dev`

This should run the characters at `localhost:8080/characters` - the front end is expecting this url. 

As you run the character manager - this will overwrite the `characters.json` file.  If you need to reset you can simply copy and paste in the `characters_seed.json` file to reset the file.