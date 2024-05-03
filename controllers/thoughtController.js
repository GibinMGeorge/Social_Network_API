const { Thought, User } = require('../models');

const thoughtController = {
  // Get all thoughts
  getThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // Get single thought by ID
  getSingleThought: async (req, res) => {
    const { thoughtId } = req.params;
    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // Create a new thought
  createThought: async (req, res) => {
    const { thoughtText, username } = req.body;
    try {
      // Check if the user exists
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const thought = await Thought.create({ thoughtText, username });
      user.thoughts.push(thought._id);
      await user.save();
      res.status(201).json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

    // Delete Thought
    async deleteThought(req, res) {
      try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
  
        if (!thought) {
          res.status(404).json({ message: 'No thought with the ID' });
        }
  
        res.json({ message: 'Thought deleted!' });
  
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },

    // Add reaction
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with the ID' });
      }

      res.json(thought);

    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Remove reaction
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with the ID' });
      }

      res.json(thought);

    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
};


module.exports = thoughtController;
