## External Interface testing

Area to check that ExternalInterface works, and to show this working for some simple AS/JS cases.

To build:
```
%ROYALE_HOME%\js\bin\mxmlc src\index.mxml
```

To test, add the below lines into the head section of generated index.html file
```
<script type="text/javascript">
function addNumbers(num1, num2)
{
  return num1 + num2;
}
function asyncCall()
{
  setTimeout(function() {
    document.getElementById("TestExtInt").callIntoRoyale("This worked");
  }, 2000);
}
</script>
```

Note that at the time of writing, there's a bug in the Royale compiler such that "ExternalInterface.call"
is not correctly transpiled to include the package name "mx.external." - that will need to be added
manually within the generated index.js file.



