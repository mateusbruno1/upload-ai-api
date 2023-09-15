import { fastify } from "fastify";
import { createTranscriptionRoute } from "./routes/create-trascription";
import { generateAiCompletionRoute } from "./routes/generate-ai-completion";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { fastifyCors } from "@fastify/cors";
const app = fastify();
app.register(fastifyCors, {
  origin: "*",
});
app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAiCompletionRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server runnig");
  });
