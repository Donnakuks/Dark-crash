ENV APP_DIR=/root/hermit-md
ENV APP_NAME=hermit-md
RUN git clone https://github.com/A-d-i-t-h-y-a-n/$APP_NAME $APP_DIR
WORKDIR $APP_DIR
RUN yarn install --network-concurrency 1

# Runtime stage
FROM alpine:latest
ENV APP_DIR=/root/hermit-md
ENV APP_NAME=hermit-md
LABEL maintainer="A-d-i-t-h-y-a-n"
LABEL version="1.0"
LABEL description="A markdown editor based on Hermit"
COPY --from=builder $APP_DIR /$APP_DIR
WORKDIR $APP_DIR
CMD ["node", "index.js"]
