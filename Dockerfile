FROM alpine

RUN apk update && apk add nodejs

COPY ./http-nativo.js ./

CMD ["node", "http-nativo.js"]

EXPOSE 3000