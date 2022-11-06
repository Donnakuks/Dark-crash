FROM quay.io/hermit/hermit-ser:latest

RUN git clone https://github.com/Aze-xz/hermit-md /root/hermit-md
WORKDIR /root/hermit-md/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js", "--max_old_space_size=2560"]
