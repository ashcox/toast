# Toast.js 

A lightweight yet customizable jQuery notification plugin which helps you create and display temporary or sticky toast messages like Android.

Featured on [jqueryscript.net](https://www.jqueryscript.net/) as one of the [top 35](https://www.jqueryscript.net/blog/Best-Toast-Notification-jQuery-Plugins.html) jQuery Toast plugins of 2017 :smile:


## Demo

Demo:
https://www.doublesidedstickytape.co.uk/github/toast/

![alt text](https://www.doublesidedstickytape.co.uk/github/toast/toast.PNG "Toast examples")


## Example usage
```html
<!DOCTYPE html>
<html>
<head>
    <title>Toast</title>
    <link rel="stylesheet" type="text/css" href="jquery-toast.css">
</head>
<body>

    <h1>Toast!</h1>
    <script src="jquery-3.2.1.min.js"></script>
    <script src="jquery-toast.js"></script>
    <script>
    
      // default
      $.fn.toast({ delay: 0 });
    
      // notify
      $.fn.toast({ id: 'notify', content: 'Notify', type: 'notify', delay: 5000})
    
      // warm
      $.fn.toast({ id: 'warn', content: 'Warn', type: 'warn', delay: 6000})
    
      // error
      $.fn.toast({ id: 'error', content: 'Error', type: 'error', delay: 7000})
    
      // success
      $.fn.toast({ id: 'success', content: 'Success', type: 'success', delay: 8000})
      
      // log
      $.fn.toast({ id: 'log', content: 'Log', type: 'log', delay: 9000});
      
    </script>
</body>
</html>
```


## Options

| Option | Description | Default |
| :- | :- | :-|
| action | show, reorder, remove | "show" |
| content| string or HTML | "Hi, I'm a Toast!" |
| delay | How long you want the toast to appear before being removed in milliseconds | 5000 |
| id | Adds an ID to the toast | "jquery-toast" |
| position | bottom-left or bottom-right side of screen | "bottom-left" |
| type | notify, warn, error, success, log | "log" |

**Note**

* The remove 'action' property also accepts an id argument so you can remove a specific toast, otherwise it will check all toasts that are pending removal.
* Specifying a different ID for each toast will bring create a new toast element. Using an existing toast ID will replace the currently active toast.


## Browser compatibility

I've tested with the following browsers:

* Chrome
* IE9+
* Firefox
* Opera
* Safari
