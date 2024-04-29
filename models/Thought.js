const thoughtSchema = new Schema({
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp, 'mm/dd/yyyy HH:MM:ss')
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  });
  
  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  