import analytics from "@/app/analyticsInstance"

export const handleEvent = async (event: any) => {
    switch (event.type) {
        case 'STXTransferEvent':
            analytics.track({
                userId: event.data.sender,
                event: 'STX Transferred',
                properties: event.data
            });
            break;

        case 'FTTransferEvent':
            analytics.track({
                userId: event.data.sender,
                event: 'Fungible Token Transferred',
                properties: event.data
            });
            break;

        case 'FTMintEvent':
            analytics.track({
                userId: event.data.recipient,
                event: 'Fungible Token Minted',
                properties: event.data
            });
            break;

        case 'FTBurnEvent':
            // Add logic for FTBurnEvent
            break;

        case 'NFTTransferEvent':
            // Add logic for NFTTransferEvent
            break;

        case 'NFTMintEvent':
            // Add logic for NFTMintEvent
            break;

        case 'NFTBurnEvent':
            // Add logic for NFTBurnEvent
            break;

        case 'SmartContractEvent':
            let userId;
            switch (event.data.contract_identifier) {
                case 'SP2ZNGJ85ENDY6QRHQ5P2D4FXKGZWCKTB2T0Z55KS.univ2-core':
                    userId = event.data.value.user
                    break;
                default:
                    break;
            }
            analytics.track({
                userId,
                event: 'Smart Contract Printed',
                properties: event.data
            });
            break;

        default:
            // Add logic for unknown event types
            break;
    }
}
