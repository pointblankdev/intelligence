import analytics from "@/app/analyticsInstance"

export const handleEvent = async (event: any) => {


    if (event.type === 'STXTransferEvent') {

    }

    else if (event.type === 'FTTransferEvent') {
        analytics.track({
            userId: event.data.sender,
            event: 'Fungible Token Transferred',
            properties: event.data
        })
    }

    else if (event.type === 'FTMintEvent') {
        analytics.track({
            userId: event.data.recipient,
            event: 'Fungible Token Minted',
            properties: event.data
        })
    }

    else if (event.type === 'FTBurnEvent') {
        // analytics.track({
        //     userId: event.data.recipient,
        //     event: 'Fungible Token Burned',
        //     properties: event.data
        // })
    }

    else if (event.type === 'NFTTransferEvent') {

    }

    else if (event.type === 'NFTMintEvent') {

    }

    else if (event.type === 'NFTBurnEvent') {

    }

    else if (event.type === 'SmartContractEvent') {


    }

    else {


    }
}