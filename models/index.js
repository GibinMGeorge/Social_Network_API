const User = model('User', userSchema);
const Thought = model('Thought', thoughtSchema);

module.exports = { User, Thought };