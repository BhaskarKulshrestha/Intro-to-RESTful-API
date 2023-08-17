<h1>Introduction To REST and RESTfull API</h1>

*meaning of REST:REpresentational State Transfer*

![](https://raw.githubusercontent.com/Codecademy/articles/0b631b51723fbb3cc652ef5f009082aa71916e63/images/rest_api.svg)

**Example**

Imagine you're at a restaurant, and you want to order some food. You don't go into the kitchen and tell the chef exactly what ingredients to use and how to cook the meal. Instead, you sit at your table and tell the waiter what you want. The waiter then takes your order to the kitchen, the chef prepares the food, and the waiter brings it back to your table.

REST, which stands for "Representational State Transfer," is a bit like this waiter-chef interaction, but for computers on the internet. When you use a web browser or a mobile app to interact with a website or an online service, you're using REST.

In the world of computers, different software programs and devices need to communicate with each other over the internet. REST is a way for them to talk to each other, just like you talk to the waiter at a restaurant. Instead of ordering food, you might be asking for information or sending some data.

**Definition:**
REST, or Representational State Transfer, is an architectural style for designing networked applications. It is a set of constraints and principles that guide the design of web services and systems, emphasizing simplicity, scalability, and interoperability between different software applications on the internet. RESTful systems use standard HTTP methods (GET, POST, PUT, DELETE, etc.) to manipulate resources, which are identified by unique URLs. 

*REST is a architectural style for designing API's.
Alternatives of REST is **SOAP,GRAPH QL,FALCOR***

*REST is characterized by a few key principles:*

1. Client-Server Architecture: The system is divided into clients (user interfaces) and servers (data storage and processing). This separation allows for independent development and scalability of each component.

2. Statelessness: Each request from a client to the server must contain all the information needed to understand and fulfill the request. The server should not store any client state between requests. This simplifies server design and improves scalability.

3. Cacheability: Responses from the server can be marked as cacheable or non-cacheable, allowing clients to cache frequently used responses and reduce the need for repeated requests.

4. Uniform Interface: RESTful APIs have a uniform and well-defined set of actions (HTTP methods) that can be performed on resources (data). These methods include GET (retrieve), POST (create), PUT (update), and DELETE (remove), among others. Resources are uniquely identified using URIs (Uniform Resource Identifiers).

5. Layered System: The architecture can be composed of multiple layers, with each layer providing specific functionality. This allows for flexibility, as long as each layer adheres to the constraints of REST.

6. Code on Demand (Optional): Servers can optionally send executable code to clients, such as JavaScript, to enhance client functionality. However, this constraint is often not used in most traditional RESTful systems.

**Rules for making REST API's**
1. use HTTP request verbs
2. use specific pattern of Routes/Endoint URL's
   
**using HTTP request verbs**

- **POST GET PUT PATCH DELETE**
  
**GET:**

Get is similary as READ in database
```
app.get(function(req,res){

})
```
GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).

**POST:**

POST is similar to that of CREATE
```
app.post(function(req,res){

})
```
when creating a new resource, POST to the parent and the service takes care of associating the new resource with the parent, assigning an ID (new resource URI), etc.

**PUT and UPDATE:**

PUT and UPDATE does the same thing to UPDATE in the database.

- # HTTP Method Comparison: PUT vs. PATCH

| Feature             | PUT                           | PATCH                         |
|---------------------|-------------------------------|------------------------------|
| Purpose             | Update or create a resource   | Partially update a resource  |
| Idempotent          | Yes                           | Yes                          |
| Overwrite           | Replaces the entire resource  | Updates specific fields     |
| Partial Updates     | No                            | Yes                          |
| Payload Required    | Yes (entire resource)         | Yes (partial update)        |
| Concurrency Control | May cause conflicts           | Better suited for concurrency|
| Error Handling      | Replaces with provided data   | Updates only specified data |
| Safe                | No                            | No                           |
| Example Use Case    | Replacing an article          | Updating an article title   |

## Descriptions

- **Purpose**: `PUT` is used to update or create a resource on the server. `PATCH` is used to perform a partial update on a resource.

- **Idempotent**: Both `PUT` and `PATCH` are idempotent, meaning making the same request multiple times has the same effect as making it once.

- **Overwrite**: With `PUT`, the entire resource is replaced with the new data provided in the request. In contrast, `PATCH` updates only specific fields of the resource.

- **Partial Updates**: `PUT` does not support partial updates; it replaces the entire resource. `PATCH` is designed specifically for partial updates.

- **Payload Required**: Both `PUT` and `PATCH` require a payload (data) in the request body. However, `PUT` requires the payload to represent the entire resource, while `PATCH` requires a partial update.

- **Concurrency Control**: `PUT` may cause conflicts in concurrent update scenarios, especially when different clients update the same resource simultaneously. `PATCH` is better suited for handling concurrency, as it allows selective updates.

- **Error Handling**: In a `PUT` request, the server replaces the existing resource with the provided data. In a `PATCH` request, only specified fields are updated, reducing the risk of unintentional data loss.

- **Safe**: Neither `PUT` nor `PATCH` are considered safe methods, as they both result in modifications to the server's state.

- **Example Use Case**: A typical use case for `PUT` is replacing an entire article on a blog. `PATCH` could be used to update only the title of an article while leaving the content unchanged.


**DELETE**
```
app.delete(function(req,res){

})
```
it deletes or destroys a particular peice of data from database

**use specific pattern of Routes/Endoint URL's**
the pattern of routes or endpoint URLs plays a crucial role in creating a well-structured and intuitive API that aligns with the principles of REST. A consistent and meaningful URL structure helps developers understand and interact with the API more easily.

# RESTful API URL Design Guidelines

When designing the URL structure for a RESTful API, following these guidelines can help create a well-organized and intuitive API that adheres to REST principles.

1. **Use Nouns for Resources**:
   - Main resources should be represented using nouns.
   - Example: `/posts`, `/users`, `/comments`.

2. **Plural Nouns**:
   - Use plural nouns for resource names.
   - Example: `/posts` instead of `/post`.

3. **Hierarchical Structure**:
   - Reflect hierarchical relationships in URLs.
   - Example: `/posts/{post_id}/comments/{comment_id}`.

4. **Avoid Verbs in URLs**:
   - Use appropriate HTTP verbs (GET, POST, PUT, DELETE) to indicate actions.
   - Example: Use `/posts/{post_id}` with HTTP GET to retrieve a post.

5. **Query Parameters for Filtering**:
   - Utilize query parameters for filtering and sorting.
   - Example: `/posts?category=technology`.

6. **Hyphens or Underscores**:
   - Separate words in URLs using hyphens or underscores.
   - Example: `/user-profiles` or `/user_profiles`.

7. **Versioning**:
   - Include versioning in URLs to accommodate future changes.
   - Example: `/v1/posts` and `/v2/posts`.

8. **Descriptive and Meaningful**:
   - Make URLs clear and descriptive.
   - Avoid cryptic or unnecessary abbreviations.

9. **Singular Nouns for Singletons**:
   - Use singular nouns for resources representing single instances.
   - Example: `/user-profile` for an individual user's profile.

10. **Avoid Deep Nesting**:
    - Avoid excessive nesting of resources to prevent complexity.

11. **HTTP Status Codes**:
    - Use appropriate HTTP status codes to convey response outcomes.

12. **Consistency**:
    - Maintain uniformity in URL patterns throughout the API.

Following these guidelines contributes to the overall clarity and usability of your RESTful API, making it easier for developers to understand and interact with the resources it provides.

## IMPLEMENTING `GET`,`POST`,`DELETE` for all the articles

**Implementing `GET` method**
```
app.get("/articles",function(req,res){
    Article.find({})
    .then(found => {
      res.send(found);
    })
    .catch(err => {
      console.error(err);
    });
})
```

**Implementing`POST`method**

for implementing post method we use a tool called `postman`

- **POSTMAN**
Postman is an API(application programming interface) development tool which helps to build, test and modify APIs. Almost any functionality that could be needed by any developer is encapsulated in this tool.


```
app.post("/articles", function (req, res) {


    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save()
        .then(() => {
            res.send("Successfully added a new article.");
        })
        .catch((err) => {
            res.send(err);
        });
});

```
**Implementing `DELETE`method**
```
app.delete("/articles",function(req,res){
    Article.deleteMany({})
    .then(() => {
        res.send("Successfully deleted the articles.");
    })
    .catch((err) => {
        res.send(err);
    });
});
```

**Creating chainable routing usig express.js**

You can create chainable route handlers for a route path by using app.route(). Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos. For more information about routes, see: Router() documentation.

Here is an example of chained route handlers that are defined by using app.route().
```
app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
```

**Route Parameters:**
Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```
To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
```
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})
```

## IMPLEMENTING `GET`,`POST`,`DELETE` for specific articles

**Implementing `GET` method**
```
app.route("/articles/:articleTitle")
.get(function(req,res){
    Article.findOne({title:req.params.articleTitle})
    .then(found => {
        if (found) {
            res.send(found);
        } else {
            res.send("No articles were found");
        }
    })
    .catch(err => {
        console.error(err);
    });
});
```

**Implementing `PUT` method**
```
.put(async function(req, res) {
        await Article.replaceOne({ title: req.params.articleTitle }, {
          title: req.body.title,
          content: req.body.content
        })
          .then(() => {
            res.send("Successfully updated article.");
          })
          .catch((err) => {
            console.log(err);
          });
      });
```

*MY WAY:- i have first find the document with the given name and then delete it,now i make a new document and write the title as req.bod.title and content as req.body.content and then insert it into the database*

*<u>NOT RECOMMENDED</u> BECAUSE IT CHANGES THE _id VALUE IN THE DATABSE SO CERTAILY IF WE TRY TO ASCCESS WITH THE OLD _id WE CANNOT GET OUR ARTICLE*

```
.put(async function(req, res) {
        const article = await Article.findOneAndDelete({ title: req.params.articleTitle });

        if (!article) {
          return res.status(404).send("Article not found");
        }

        const newArticle = new Article({
          title: req.body.title,
          content: req.body.content,
        });

        newArticle.save()
          .then(() => {
            res.send("Successfully updated article");
          })
          .catch((err) => {
            console.log(err);
          });
      });
```

*Another Approach*
```
.put(async (req, res) => {
        try {
            await Article.replaceOne(
                { title: req.params.articleTitle },
                { title: req.body.title, content: req.body.content },
            );
            res.send("Successfully updated");
        } catch (err) { console.log(err); }
    });
```

**Implementing `PATCH` method**
```
.patch(function (req, res) {
        try {
          Article.updateOne(
            { title: req.params.articleTitle },
            { $set: req.body }
          ).then(function () {
            res.send("Successfully updated article");
          });
        } catch (err) {
          res.send(err);
        }
      });

```

**Implementing `DELETE` method**
```
.delete(function (req, res) {
    try {
      Article.deleteMany(
        { title: req.params.articleTitle }
      ).then(function () {
        res.send("Successfully Deleted thespecified article");
      });
    } catch (err) {
      res.send(err);
    }
});
```
