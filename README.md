![Logo](https://i.imgur.com/uv0El0Z.jpeg)

# Mythic RP Framework

# Requirements 
- [Xaamp](https://www.apachefriends.org/download.html) (This is needed to 1 set of the database) 
- [MongoDB](https://www.mongodb.com/try/download/community) (This runs the 2nd set of the database)
- Basic understanding of code
  
# SQL Instaliation
Run the SQL provided in xaamp, the mongo will build itself as the server starts

# NOTE:
This will not work out of the box, you will need to make modifications to the base to replace the WebAPI calls with whatever authentication source you're wanting to do. 

## Using Admin

In the MongoDB Compass, inside of the "auth" database under users, find yourself (or whoever you want to give admin too) and add a new dataset under the groups array called either admin, owner, or staff. If you're already in the server, soft or hard relog to retrieve the new permissions.

To use the admin tool, run `/admin` or `/staff`.
