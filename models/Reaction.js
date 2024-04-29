const reactionSchema = new Schema({
    reactionId: Schema.Types.ObjectId,
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp, 'mm/dd/yyyy HH:MM:ss')
    }
  });