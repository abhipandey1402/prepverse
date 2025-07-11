import { SQSClient } from "@aws-sdk/client-sqs";

export const sqsClient = new SQSClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

export const QUEUE_URLS = {
    SYNC_REQUEST: process.env.SQS_SYNC_REQUEST_URL!,
    SYNC_PROGRESS: process.env.SQS_SYNC_PROGRESS_URL!,
    SYNC_STATUS: process.env.SQS_SYNC_STATUS_URL!,
    AUTH_SUCCESS: process.env.SQS_AUTH_SUCCESS_URL!,
};
