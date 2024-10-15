// Main payload structure
interface ChainhookPayload {
    apply: ApplyEvent[];
}

interface ApplyEvent {
    transactions: Transaction[];
}

interface Transaction {
    metadata: TransactionMetadata;
}

interface TransactionMetadata {
    description: string;
    execution_cost: any;
    fee: number;
    kind: TransactionKind;
    nonce: number;
    position: { index: number };
    raw_tx: string;
    receipt: ReceiptData
    success: boolean
}

interface ReceiptData {
    contract_calls_stacks: any[]
    events: ContractEvent[]
}

interface ContractEvent {
    data: any
    position: any
    type: string
}

interface TransactionKind {
    data: {
        args: any[]
        contract_identifier: string
        method: string
    }
    type: string
}

export async function POST(request: Request) {
    const chainhookPayload: ChainhookPayload = await request.json()
    for (const a of chainhookPayload.apply) {
        for (const tx of a.transactions) {
            try {
                if (tx.metadata.success) {
                    // let builder = new EmbedBuilder()
                    // // send message to discord
                    // builder.setAuthor({ name: `Charisma Event`, icon_url: 'https://charisma.rocks/dmg-logo.png', url: 'https://charisma.rocks/players' })
                    // builder.setTitle('New Event')
                    // builder.setThumbnail({ url: 'https://charisma.rocks/dmg-logo.gif' })

                    for (const event of tx.metadata.receipt.events) {
                        // builder = await handleContractEvent(event, builder)
                        console.log(event)
                    }

                    // hook.addEmbed(builder.getEmbed());
                    // await hook.send();
                }

            } catch (error) {
                console.error(error)
            }
            // response = {}
        }
    }
    return Response.json({ success: true })
}