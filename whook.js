function deleteWebhook() {
  // Replace the following variable with your own webhook URL
  const webhookUrl = document.getElementById("webhook-input").value;

  // Define the webhook message
  const webhookMessage = {
    embeds: [
      {
        type: "rich",
        title: "Hi from Appolon.dev",
        description: "Nice webhook kid",
        color: 0x025858,
        image: {
          url: "https://cdn.discordapp.com/attachments/1063194194279145512/1086349400093241444/images.jpg",
          height: 0,
          width: 0
        },
        footer: {
          text: "Appolon.dev  |  Appolon#2523",
          icon_url: "https://cdn.discordapp.com/attachments/1063194194279145512/1084183202811355177/favicon.png"
        },
        url: "https://Appolon.dev",
        fields: [
          {
            name: "Are you sure you want to delete the webhook?",
            value: "This action is irreversible and cannot be undone.",
            inline: false
          }
        ],
        actions: [
          {
            type: "button",
            label: "Yes, delete it",
            style: "danger",
            custom_id: "delete-webhook-yes"
          },
          {
            type: "button",
            label: "No, cancel",
            style: "primary",
            custom_id: "delete-webhook-no"
          },
          {
            type: "button",
            label: "What is a webhook?",
            style: "secondary",
            url: "https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"
          }
        ]
      }
    ]
  };

  // Send the webhook message using fetch
  fetch(webhookUrl, {
    method: 'POST',
    headers: {a
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(webhookMessage)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    console.log('Webhook deleted successfully');
  })
  .catch(error => {
    console.error('Error deleting webhook:', error);
  });
}
