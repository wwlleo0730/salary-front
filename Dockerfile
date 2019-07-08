FROM nginx:1.16-alpine

ADD dist/ /usr/share/nginx/html

ADD nginx.conf /etc/nginx/nginx.conf