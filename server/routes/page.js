const express = require("express");
const shopModel = require("../model/post");
const router = express.Router();
router.get("", (req, res) => {
  res.redirect("/shop");
});
// to sort by time .find().sort({createdAt : -1})
router.get("/shop", (req, res) => {
  
  shopModel
    .find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { shop: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// To post request from forms
router.post("/shop", (req, res) => {
  const shop = new shopModel(req.body);
  shop
    .save()
    .then((result) => {
      res.redirect("/shop");
    })
    .catch((err) => {
      console.log(err);
    });
});

//end
// to view more detailed on a particular goods
router.get("/shop/:id", (req, res) => {
  const id = req.params.id;
  shopModel
    .findById(id)
    .then((result) => {
      res.render("detail", { shops: result });
    })
    .catch((err) => {});
});
//end

// for delete
router.delete("/shop/:id", (req, res) => {
  const id = req.params.id;
  shopModel
    .findByIdAndDelete(id)
    .then((data) => {
      res.json({ redirect: "/shop" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
    });
});

router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/post", (req, res) => {
  res.render("post");
});

// router.post("/search", async (req, res) => {
//   let searchTerm = req.body.searchTerm;
//   const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

//   const data = await shopModel.find({
//     $or: [
//       { name: { $regex: new RegExp(searchNoSpecialChar, "i") } },
//       { price: { $regex: new RegExp(searchNoSpecialChar, "i") } },
//     ],
//   });

//   res.render("search", { data });
// });

// router.get('/edit-post/:id', authMiddleware, async (req, res) => {
//   try {

//     const locals = {
//       title: "Edit Post",
//       description: "Free NodeJs User Management System",
//     };

//     const data = await Post.findOne({ _id: req.params.id });

//     res.render('admin/edit-post', {
//       locals,
//       data,
//       layout: adminLayout
//     })

//   } catch (error) {
//     console.log(error);
//   }

// });

// /**
//  * PUT /
//  * Admin - Create New Post
// */
// router.put('/edit-post/:id', async (req, res) => {
//   try {

//     await Post.findByIdAndUpdate(req.params.id, {
//       title: req.body.title,
//       body: req.body.body,
//       updatedAt: Date.now()
//     });

//     res.redirect(`/edit-post/${req.params.id}`);

//   } catch (error) {
//     console.log(error);
//   }

// });

module.exports = router;
