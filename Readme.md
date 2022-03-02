# Posterr
### For you run thw aplication you must install:
- node versio: node-v16.14.0-x64
- MySQL version mysql-installer-web-community-8.0.28.0 and Workbranch versio  8.0
### You must also config the following on MySQL:
- user MySQL: root
- password MySQL: root
- port: 3306
- schema name: Posterr
- Connection name: Posterr
### Following have a sugestions of routs to test the aplication:
- Postman: https://go.postman.co/workspace/My-Workspace~aee21ca7-5a25-419b-855d-8756daa4c565/collection/17989607-faa82d5b-4d08-4fc0-b9ce-5101d713f38d

# Planning
### Question:
- Could the "@ mentioning" be made from the post field? or will it have a field just to write "@ mentioning"?
- Will it have limits of "@ mentioning"?
- Can the user "@ mentioning" himself?
- Can "@ mentioning" be reposted?

### Solution
It would create a table just for "@ mentioning". The columns would be: User who made the "@ mentioning" (KeyUser), user who was "@ mentioning" (KeyUserMention), text (post), time of the "@ mentioning" (datetime).
The "@ mentioning" would work similar to the post, but with the user information who was "@ mentioning", I believe the frontend would have more work to re-render the information.

# Critique
`Reflect on this project, and write what you would improve if you had more time`

I can't imagine a social network with just the backend. For me, a social network application should be worked more on the frontend than on the backend, so what I would do if I had more time would be the frontend of the application.

`if this project were to grow and have many users and posts, which parts do you think would fail first?`

Surely the database would present the first problems. It's very little time to do enough tests, I was able to test only for features. I know the database could have been better, but I prioritized ease of implementation and understanding over time.

`In a real-life situation, what steps would you take to scale this product?`
As stated in the previous answer, I would work more on the database, because in any software the database is the heart.

`What other types of technology and infrastructure might you need to use?`
I would study more on the subject, seek advice and apply best practices. I would do tireless performance and usability tests. Even more knowing the world of technology where every day a new one appears. However, with the technologies known today and knowing that the main thing for a software is the database, I would invest in a NoSQL database to speed up queries.