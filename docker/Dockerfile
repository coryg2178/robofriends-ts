FROM node:hydrogen-alpine as base
WORKDIR /opt/app

# Install pnpm with corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Enable `pnpm add --global` on Alpine Linux by setting
# home location environment variable to a location already in $PATH
# https://github.com/pnpm/pnpm/issues/784#issuecomment-1518582235
ENV PNPM_HOME=/usr/local/bin

###################################################################
FROM base as build-app

ADD . ./
RUN pnpm install && pnpm build

###################################################################
FROM nginx:stable-alpine as deploy-app

COPY --from=build-app /opt/app/build /usr/share/nginx/html
