-Everything in this assignment was implemented in a correct and professional manner 
-The assignment took ~1 hour
-I did not collaborate with anyone on this assignment 
-Class examples and w3schools.com were used as instructional tools for the code implementation. Provided links were used as references for the additional question.

Additional question: Is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not?

It is not possible due to the same origin policy. The same origin policy prevents modification of content from different origins. Requests must have the same URI scheme, hostname, and port number. This is key when it comes to security. If the same origin policy did not exist, hackers could implement malicious scripts from one origin that would modify/access content from another origin.
 