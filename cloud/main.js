Parse.Cloud.define('hello', async (request) => {
  return 'Hello from Parse Cloud Code!';
});

// 在創建 GameScore 之前的 hook
Parse.Cloud.beforeSave('GameScore', async (request) => {
  const score = request.object.get('score');
  if (score < 0) {
    throw new Parse.Error(Parse.Error.INVALID_VALUE, '分數不能小於零');
  }
});

// 在創建 GameScore 之後的 hook
Parse.Cloud.afterSave('GameScore', async (request) => {
  console.log('新的遊戲分數已儲存：', request.object.get('score'));
});

// 全域的 beforeSave hook
Parse.Cloud.beforeSave('*', async (request) => {
  console.log(`正在儲存 ${request.object.className} 類別的資料`);
});
