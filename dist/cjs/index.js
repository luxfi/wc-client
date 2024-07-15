"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const wc_core_1 = tslib_1.__importDefault(require("@luxfi/wc-core"));
const cryptoLib = tslib_1.__importStar(require("@luxfi/wc-iso-crypto"));
class WalletConnect extends wc_core_1.default {
    constructor(connectorOpts, pushServerOpts) {
        super({
            cryptoLib,
            connectorOpts,
            pushServerOpts,
        });
    }
}
exports.default = WalletConnect;
//# sourceMappingURL=index.js.map