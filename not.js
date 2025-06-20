*/

const response = {
  "data": {
    "processAppleReceipt": {
      "__typename": "SubscriptionResult",
      "error": 0,
      "subscription": {
        "__typename": "AppStoreSubscription",
        "status": "active",
        "originalPurchaseDate": "2024-09-19T09:27:35.000Z",
        "originalTransactionId": "570001185968888",
        "expirationDate": "9999-12-31T23:59:59.000Z",
        "productId": "com.gingerlabs.Notability.pro_subscription",
        "tier": "pro",
        "refundedDate": null,
        "refundedReason": null,
        "isInBillingRetryPeriod": false,
        "gracePeriodExpiresAt": null,
        "expirationIntent": "CUSTOMER_CANCELLED",
        "overDeviceLimit": false,
        "user": null
      },
      "isClassic": false
    }
  }
};

$done({ body: JSON.stringify(response) });