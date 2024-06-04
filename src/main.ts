import { NestApplication, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Технологии разработки серверных приложений')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('Fyodor_Volk')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/dock/', app, document)

    await app.listen(PORT, ()=>console.log(`Server started on port = ${PORT}`))
}
start()