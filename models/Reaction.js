const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now(),

      // Getter method to format timestamp 
      get: function (date) {
        let dateSplit = date.toString().split(" ");
        return `${dateSplit[1]} ${dateSplit[2]}, ${dateSplit[3]} at ${dateSplit[4]}`;   // Output format: Apr 30, 2024 at 02:23:05
      }

    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

module.exports = reactionSchema;
