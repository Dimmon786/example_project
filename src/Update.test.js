const { update, MSGS, model } = require ('./Update');

test('updates', () => {
  const currentTime = update(MSGS.UPDATE_MODEL, model);
  const updateRandomNuber = update(MSGS.UPDATE_RANDOM_NUMBER, model); 

  expect(currentTime).toHaveProperty('currentTime');
  expect(updateRandomNuber).toBe(Math.random());
});
