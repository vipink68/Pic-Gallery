
const { MongoClient } = require('mongodb');

async function main() {
const uri = "mongodb+srv://vipin668college:kUJyfclmPejsKwiL@cluster0.digfi79.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
try{

    await client.connect();
    // to insert one document in database
    // await createListing(client, {
    //   name: "admin1",
    //   email: "admin123@gmail.com",
    //   password: "admin@123"
    // })

    //to insert more than one document in database
    await createMultipleListings(client,[
      {
        username: "user1",
        age: 26,
        city: "lucknow",
        email: "user1@gmail.com"
      },
      {
        username: "user2",
        age: 23,
        city: "delhi",
        email: "user1@gmail.com"
      },
      {
        username: "user3",
        age: 24,
        city: "kolkata",
        email: "user1@gmail.com"
      },
      {
        username: "user4",
        age: 22,
        city: "punjab",
        email: "user1@gmail.com"
      },
      {
        username: "user5",
        age: 21,
        city: "tamilnadu",
        email: "user1@gmail.com"
      }

    ]);
    
  } catch (e){
    console.error(e)
  } finally {
    await client. close();
  }
}
main().catch(console.error);

async function createMultipleListings(client, newListings){
    const result = await client.db("picgallery").collection("users").insertMany(newListings);

    // console.log(`${result.insertedCount} new Listings created with following id(s): `);
    // console.log(result.insertedIds);
  }

async function createListing(client, newListing) {
  const result  = await client.db("picgallery").collection("users").insertOne(newListing);
console.log(`New Listing created with the following id: ${result.insertedId}`);
}


async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => {
    console.log(`- ${db.name}`);
  })
}


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://vipin668college:kUJyfclmPejsKwiL@cluster0.digfi79.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
