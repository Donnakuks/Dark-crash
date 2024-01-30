FROM quay.io/hermit/hermit-ser:latest

RUN git clone https://github.com/Ultar12/hermit-md /root/hermit-md
WORKDIR /root/hermit-md/
RUN yarn install --network-concurrency 1
EXPOSE 1337
CMD ["npm", "start"]
