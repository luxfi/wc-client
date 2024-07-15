import Connector from "@luxfi/wc-core";
import * as cryptoLib from "@luxfi/wc-iso-crypto";
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