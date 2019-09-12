/**

 * Track the trade of a commodity from one trader to another

 * @param {org.acme.mynetwork.ToGovt} trade - the trade to be processed

 * @transaction

 */

async function tradeCommodity(trade) {
    trade.statew.quantity=trade.statew.quantity+trade.qun;



  let assetRegistry = await getAssetRegistry('org.acme.mynetwork.stateW');

  await assetRegistry.update(trade.statew);

}