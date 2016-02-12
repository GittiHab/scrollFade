# JQuery Scroll Fade Plugin
Apply this plugin to an html element and it will either fade in or out when you scroll.

## Usage
Include JQuery
Include `scrollFade.js` or `scrollFade.min.js` (recommended, if you don't want to make changes)


There are two methods you can use:

* `$(el).scrollFadeIn(offset, start)`
* `$(el).scrollFadeOut(offset, start)`

The `offset` and `start` values are optional. `offset` is the fade out way (duration): if you scroll the number of pixels set in it, the element will be faded in or out. Default: 500.

The `start` value tells when the fading should start. If you have an element which is outside the viewport on page load it might be clever to set the offset, so it fades in/out while the user can see it. Default: 0.


### Example Usage

    $(document).ready(function () {
        $('#fadeIn').scrollFadeOut(500);
    });

## License
This code is published under the Apache 2.0 license.
