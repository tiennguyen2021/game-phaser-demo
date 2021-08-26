### rock-paper-scissor

## Usage
- Running in local
npm start 
- Build
npm run build

## Game Flow
0. join game ( from app )
    - API: 
        + join game

1. Lobby
    - API
        + new game 
            * random
            * friend
        + Buy more plays
        + Shop
        + History
    - View
        + Banner
        + Menu
        + Base data: number of plays, gold, pieces

2.  Waiting for a match ( random matching )    
    - API
        + Back to lobby
    - View
        + Loading
        + User Info
        + Instructor
        + Back to lobby
        + sound config ( always show from now )

3.  Game scene: prepare
    - API
        + skills: 
            * Double gold
            * win first battle
    - View 
        + users info
        + skills: double gold, win first battle
        + timeline

4.  Game scene: playing
    - API
        + select option
    - View
        + user status: 
            * selected option
            * results
        + battle: 
            * anim start
            * options
            * timeline
            * anim play
            * anim result: win, lose, draw

5.  Game scene: finish
    - API
        + Back to lobby
    - View
        + Match result

## API
+ Join game request => user info 
+ Buy more plays
+ Shopping
+ History
+ new game request ( friendID || random ) => rival info 
+ skills request
+ send selected option
+ match result
+ Leave game

## Architecture
+ MVP
+ Event
+ Entity as Component
