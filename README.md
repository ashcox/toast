# Toast

A simple jQuery plugin to provide a notification in the bottom-left or bottom-right hand-side of the screen.


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
| id | Adds an ID to the toast | "jquery-toast" |
| content| string or HTML | "Hi, I'm a Toast!" |
| delay | How long you want the toast to appear before being removed in milliseconds | 5000 |
| type | notify, warn, error, success, log | log |
| action | show, reorder, remove | show |

**Note**

The remove 'action' property also accepts an id argument so you can remove a specific toast, otherwise it will check all toasts that are pending removal.
