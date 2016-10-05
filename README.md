# TimeSpan.js
A tiny timespan plugin with jquery support.

## How to use without jQuery:
```html
<div class="timespan-container-simple">00:00:00</div>
```
```javascript
setInterval(function(){
    $('.timespan-container-simple').each(function(index, element){
        var ts = new TimeSpan($(element).text());
        ts.addSecond();
        $(element).text(ts.toString());
    });
}, 1000);
```

## And using jQuery:
```html
<div class="timespan-container-plugin">00:00:00</div>
```
```javascript
$('.timespan-container-plugin').timeSpan();
```
