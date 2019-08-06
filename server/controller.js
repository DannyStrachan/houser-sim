module.exports = {
  getListings(req, res) {
    const db = req.app.get("db");
    db.get_listings()
      .then(dbRes => res.status(200).send(dbRes))
      .catch(err => res.status(500).send(`Couldn't add...`, err));
  },
  addListing(req, res) {
    const db = req.app.get("db");
    let { name, address, city, state, zip, image, mortgage, rent } = req.body;
    db.add_listing([name, address, city, state, +zip, image, +mortgage, +rent ])
      .then(res.status(200).send("Added Listing!"))
      .catch(err => res.status(500).send("Add Listing Failed!", err));
  },
  deleteListing(req, res) {
    let { id } = req.params;
    const db = req.app.get("db");
    db.delete_listing(id)
      .then(res.status(200).send("Deleted Listing!"))
      .catch(err => res.status(500).send("Delete Failed!", err));
  }
};
