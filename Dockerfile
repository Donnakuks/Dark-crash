RUN timeout 30 git clone https://github.com/A-d-i-t-h-y-a-n/hermit-md /root/hermit-md
WORKDIR /root/hermit-md/
RUN yarn install --network-concurrency 1
EXPOSE 3000
CMD ["bundle", "exec", "thin", "start", "-p", "$PORT"]
