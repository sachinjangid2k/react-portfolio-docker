FROM Ubuntu:latest
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
EXPOSE 3000
CMD [ "npm","run","dev" ]