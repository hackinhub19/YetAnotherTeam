/**
 * Track the trade of a commodity from one trader to another
 * @param {org.acme.mynetwork.CreateGtokens} tokens - the trade to be processed
 * @transaction
 */

async function tokenCommodityCreate(tokens) {
  
   
    tokens.treasuryVault.quantity = tokens.treasuryVault.quantity + tokens.gToken;

   let assetRegistry = await getAssetRegistry('org.acme.mynetwork.TreasuryVault');
  await assetRegistry.update(tokens.treasuryVault);
}

/**
* Track the trade of a commodity from one trader to another
* @param {org.acme.mynetwork.ToGovernment} trade - the trade to be processed
* @transaction
*/

async function tradeCommodityToGovernment(trade) {

trade.stateVault.quantity = trade.stateVault.quantity + trade.gToken;
    trade.treasuryVault.quantity = trade.treasuryVault.quantity - trade.gToken;

  let assetRegistry = await getAssetRegistry('org.acme.mynetwork.StateVault');
  await assetRegistry.update(trade.stateVault);
   assetRegistry = await getAssetRegistry('org.acme.mynetwork.TreasuryVault');
  await assetRegistry.update(trade.treasuryVault);


}
/**
* Track the trade of a commodity from one trader to another
* @param {org.acme.mynetwork.ToContractor} pay - the trade to be processed
* @transaction
*/

async function tradeCommodityToContractor(pay) {
  pay.contractorVault.quantity = pay.gToken + pay.contractorVault.quantity;
  pay.stateVault.quantity = pay.stateVault.quantity - pay.gToken;
  let assetRegistry = await getAssetRegistry('org.acme.mynetwork.ContractorVault');
  await assetRegistry.update(pay.contractorVault);
  assetRegistry = await getAssetRegistry('org.acme.mynetwork.StateVault');
  await assetRegistry.update(pay.stateVault);
}

/**
* Track the trade of a commodity from one trader to another
* @param {org.acme.mynetwork.ToVendor} shop - the trade to be processed
* @transaction
*/

async function tradeCommodityToVendor(shop) {
  shop.vendorVault.quantity = shop.gToken + shop.vendorVault.quantity;
  shop.contractorVault.quantity = shop.contractorVault.quantity - shop.gToken;
  let assetRegistry = await getAssetRegistry('org.acme.mynetwork.VendorVault');
  await assetRegistry.update(shop.vendorVault);
  assetRegistry = await getAssetRegistry('org.acme.mynetwork.ContractorVault');
  await assetRegistry.update(shop.contractorVault);
}

/**
* Track the trade of a commodity from one trader to another
* @param {org.acme.mynetwork.ToTreasuryFromVendor} shop - the trade to be processed
* @transaction
*/

async function tradeCommodityToTreasuryFromVendor(shop) {
  shop.vendorVault.quantity = shop.vendorVault.quantity - shop.gToken ;
  shop.treasuryVault.quantity = shop.treasuryVault.quantity + shop.gToken;
  let assetRegistry = await getAssetRegistry('org.acme.mynetwork.VendorVault');
  await assetRegistry.update(shop.vendorVault);
  assetRegistry = await getAssetRegistry('org.acme.mynetwork.TreasuryVault');
  await assetRegistry.update(shop.treasuryVault);
}

/**
* Track the trade of a commodity from one trader to another
* @param {org.acme.mynetwork.ToTreasuryFromContractor} shop - the trade to be processed
* @transaction
*/

async function tradeCommodityToTreasuryFromContractor(shop) {
  shop.contractorVault.quantity = shop.contractorVault.quantity - shop.gToken ;
  shop.treasuryVault.quantity = shop.treasuryVault.quantity + shop.gToken;
  let assetRegistry = await getAssetRegistry('org.acme.mynetwork.ContractorVault');
  await assetRegistry.update(shop.contractorVault);
  assetRegistry = await getAssetRegistry('org.acme.mynetwork.TreasuryVault');
  await assetRegistry.update(shop.treasuryVault);
}

