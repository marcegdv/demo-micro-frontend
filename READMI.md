Para poder instalar y ejecutar las 4 apps:

1) Entrar a cada carpeta "raíz"" de las apps, (ej: container, luego en micro-front-end-1, etc) y usar el comando ```npm i --force``` ya que el ejemplo usa dependencias que estan deprecadas.

2) Luego de instalar las dependencias, dentro de cada carpeta raíz de cada app, usar el comando ```npm run webpack``` para iniciar cada app.

Apps:
container - localhost:8080
micro-front-end-1: localhost:8081
micro-front-end-2: localhost:8082
react-microfrontend-3: localhost:8083

------------------------------------------------------------------

A modo de ejercicio, en la rama *resolver* hay un micro-frontend que no funciona porque esta mal configurado y no se muestra en la app contenedora.