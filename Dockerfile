# Build Stage
FROM ubuntu:latest as build
WORKDIR /app
COPY package*.json ./
RUN apt-get update && \
    apt-get install -y curl gnupg2 && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
RUN node -v && npm -v
RUN npm install
COPY . .
RUN npm run build

# Final Stage
#FROM gcr.io/distroless/nodejs18-debian12
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"] 
