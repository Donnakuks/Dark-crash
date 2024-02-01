RUN timeout 120 git clone https://github.com/A-d-i-t-h-y-a-n/hermit-md /root/hermit-md
WORKDIR /root/hermit-md/
RUN gem install bundler
RUN export PATH=$PATH:/usr/local/bundle/bin
RUN yarn install --network-concurrency 1
EXPOSE 80
CMD ["bundle", "exec", "thin", "start", "-p", "$PORT"]
