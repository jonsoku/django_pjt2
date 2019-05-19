##  backend
        <Django 실행>

        pip3 install pip --upgrade

        pip3 install pipenv

        pip3 install djangorestframework

        pip3 install django-cors-headers

        pip3 install

        cd backend

        python manage.py runserver 0.0.0.0:80 –noreload

##  frontend
        <React 실행>

        cd frontend

        sudo apt-get update

        sudo apt-get install nodejs npm

        npm config set strict-ssl false (나중에 true로..)

        npm install -g yarn

        ln -s /usr/bin/nodejs /usr/local/bin/node

        sudo npm cache clean -f

        sudo npm install -g n

        sudo n stable

        yarn install

        yarn run build

        yarn start

## backend/djangoreactapi/settings.py
    ALLOWED_HOSTS = ['127.0.0.1', '.pythonanywhere.com']

    ########################################################################
    ########################################################################
    # 요놈이 중요하다...Access-Control-Allow-Credentials 에러 관련
    CORS_ALLOW_CREDENTIALS = True
    CORS_ORIGIN_WHITELIST = (
        'http://localhost:3000',
    )
    CSRF_COOKIE_NAME = "csrftoken"
    REST_FRAMEWORK = {
        'DEFAULT_PERMISSION_CLASSES': [
            'rest_framework.permissions.AllowAny',
        ]
    }
    ########################################################################
    ########################################################################