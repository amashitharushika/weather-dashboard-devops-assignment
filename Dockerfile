# --- Stage 1: Build Stage ---
# Use a small, secure OS (Alpine Linux)
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first (optimizes cache)
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# --- Stage 2: Production Stage ---
# Start fresh to keep the image small
FROM node:18-alpine

WORKDIR /app

# Security: Create a non-root user 'appuser'
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy files from the builder stage
COPY --from=builder /app .

# Change ownership to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to the secure user
USER appuser

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]

