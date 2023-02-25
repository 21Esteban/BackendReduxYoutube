export const videoValid = {
    body: {
      type: "object",
      required: ["title", "views", "videoId","linkImg","category","channelName","channelLinkImg"],
      properties: {
        title: {
          type: "string",
        },
        views: {
          type: "string",
        },
        videoId: {
          type: "string",
        },
        linkImg: {
            type: "string",
          },
          category: {
            type: "string",
          },
          channelName: {
            type: "string",
          },
          channelLinkImg: {
            type: "string",
          },

      },
    },
  };