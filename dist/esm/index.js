import Connector from "@luxwallet/wc-core";
import * as cryptoLib from "@luxwallet/wc-iso-crypto";
class WalletConnect extends Connector {
    constructor(connectorOpts, pushServerOpts) {
        super({
            cryptoLib,
            connectorOpts,
            pushServerOpts,
        });
    }
}
export default WalletConnect;
//# sourceMappingURL=index.js.map