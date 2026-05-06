FROM node:20-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3059
ENV PORT=3059
ENV HOSTNAME="0.0.0.0"
CMD ["npm", "start"]
