![Logo](https://i.imgur.com/1WBgK25.png)

# Mythic RP Framework

# Requirements 
- Xaamp (This is needed to 1 set of the database) https://www.apachefriends.org/download.html
- MongoDB (This runs the 2nd set of the database) https://www.mongodb.com/try/download/community
- Basic understanding of code
  
# SQL Instaliation
Run the SQL provided in xaamp, the mongo will build itself as the server starts

# NOTE:
This will not work out of the box, you will need to make modifications to the base to replace the WebAPI calls with whatever authentication source you're wanting to do. If you don't understand how to do that, go use ESX.

## Using Admin

In the MongoDB GUI, under the `_auth.users` collection, add a new dataset under the `groups` array called either `admin`, `owner`, or `staff`. If you're already in the server, soft or hard relog to retrieve the new permissions. 

To use the admin tool, run `/admin` or `/staff`.
