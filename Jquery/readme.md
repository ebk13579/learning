# jQuery   

https://www.sololearn.com/Play/jQuery/


## Get & Set Attribute Values --- attr()  

We can manipulate attributes assigned to HTML elements easily through jQuery.
href, src, id, class, style are all examples of HTML attributes.

The attr() method is used for getting the value of an attribute.

The attr() method also allows us to set a value for an attribute by specifying it as the second parameter. 


$("a").attr("href", "http://www.jquery.com");

  
$("img").attr("src", "1.jpg");



## Removing Attributes   

.removeAttr()





## Get & Set Content  

There are several methods for manipulating the content of HTML elements via jQuery. 
The html() method is used to get the content of the selected element, including the HTML markup. 

The same html() and text() methods can be used to change the content of HTML elements. 
The content to be set is provided as a parameter to the method,




.html()

.text()


val()

We have seen in the previous lesson how we can manipulate the content of HTML elements using the text() and html() methods.
Another useful method is the val() method, which allows us to get and set the values of form fields, such as textboxes, dropdowns, and similar inputs. 

Similarly, you can set the value for the field by providing it as a parameter to the val() method.


The following jQuery methods are available to get and set content and attributes of selected HTML elements:

text() sets or returns the text content of selected elements.
html() sets or returns the content of selected elements (including HTML markup).
val() sets or returns the value of form fields.
attr() sets or returns the value of attributes.
removeAttr() removes the specified attribute.





## Adding Content  --- append(), prepend(), after(), before()  

As we have seen in the previous lessons, the html() and text() methods can be used to get and set the content of a selected element. However, when these methods are used to set content, the existing content is lost.

jQuery has methods that are used to add new content to a selected element without deleting the existing content: 

append() inserts content at the end of the selected elements.
prepend() inserts content at the beginning of the selected elements.
after() inserts content after the selected elements.
before() inserts content before the selected elements.


追加内容

1. 内部

append()  
    inserts content at the end of the selected elements.
prepend()  
    inserts content at the beginning of the selected elements.

2. 外部  

after()  
    inserts content after the selected elements.
before()  
    inserts content before the selected elements.































