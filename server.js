const express = require("express");
const app = express();

const USER = {
  name: "John Smith",
  id: 101,
  entries: [
    {
      id: 1,
      title: "Morning Reflections",
      mood: 4,
      category: "wellness",
      body: "Started the day with a refreshing meditation session. Feeling balanced and ready to tackle the day.",
      timestamp: "2025-03-04T08:30:00Z",
    },
    {
      id: 2,
      title: "Project Breakthrough",
      mood: 5,
      category: "work",
      body: "Finally solved that tricky bug! Turns out it was a missing semicolon all along. Feeling accomplished.",
      timestamp: "2025-03-03T14:15:00Z",
    },
    {
      id: 3,
      title: "Weekend Hike",
      mood: 5,
      category: "life",
      body: "Went on an amazing hike with friends. The view from the top was breathtaking. Definitely need to do this more often.",
      timestamp: "2025-03-02T10:45:00Z",
    },
    {
      id: 4,
      title: "Tough Day at Work",
      mood: 2,
      category: "work",
      body: "Meetings all day and still so much left to do. Feeling a bit overwhelmed but pushing through.",
      timestamp: "2025-02-29T18:00:00Z",
    },
    {
      id: 5,
      title: "Self-Care Evening",
      mood: 5,
      category: "wellness",
      body: "Took a long bath, read a book, and drank some chamomile tea. A perfect way to unwind after a busy week.",
      timestamp: "2025-02-28T21:30:00Z",
    },
  ],
};

app.get("/", (req, res) => {
  res.render("home.ejs", {
    user: USER,
  });
});
app.get("/entries", (req, res) => {
  res.render("entries.ejs", {
    USER: USER,
  });
});
app.get("/entries/new", (req, res) => {
  res.render("new.ejs");
});
app.get("/entries/:category", (req, res) => {
  const category = String(req.params.category).toLowerCase();
  let entries = USER.entries.filter((item) => {
    return item.category === category;
  });
  res.render("category.ejs", {
    category,
    entries,
  });
});
app.put("/entries/:entryID", (req, res) => {
  res.render("entries.ejs", {
    USER: USER,
  });
});
app.delete("/entries/:entryID", (req, res) => {
  res.render("entries.ejs", {
    USER: USER,
  });
});

app.listen(8000);
