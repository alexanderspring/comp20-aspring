-Everything in this assignment was implemented in a correct and professional manner 
-The assignment took ~1 hour 
-I did not collaborate with anyone on this assignment 
-The examples from class and w3schools.com were referenced for implementation of the code. The links provided on the assignment page were referenced for answering the question below.

Additional question:
Is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not?

It is not possible to request data from a different origin due to the same-origin policy. The same origin policy states that requests must have the same URI scheme, hostname, and port number. This means that content from one origin will be unable to access/modify content from a different origin. This is vital when there may be a malicious script coming from one origin. If this policy was not in place, the malicious script could steal or modify content from the second origin, undermining your security. 