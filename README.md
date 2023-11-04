
# multi-cluster-aws-rds


This project is an **AWS Cloudformation Deployment Demo** using EKS and the [multi-k8s](https://github.com/StephenGrider/multi-k8s) image by [Stephen Grider](https://www.linkedin.com/in/stephengrider/). The EKS application is a react application for a Fibionacci calculator. 


EKS cluster contains the following deployments and services: 

- **Server**
- **Client**
- **Worker**
- **Nginx Ingress**

Additionaly to EKS, the following AWS Services are deployed and conected to the EKS deployments 

- **Postgres RDS Database**
- **Elasticache Redis Node**

![App Screenshot](https://raw.githubusercontent.com/braulioarredondo/multi-cluster-aws/master/images/app.png)


## Arquitecture

Deployment uses the next instances types and sizes for the infrastructure.

| Resource |    Number     | Type/Size               |
| :-------- | :------- | :------------------------- |
| **VPC** | `1` | **/16** |
| **Public Subnet** | `2` | **/20** |
| **Private Subnet** | `2` | **/20** |
| **Persistent Subnet** | `2` | **/20** |
| **EC2 Instance** | `3` | **t3.small** |
| **RDS Instance** |`1` | **db.t3.micro** |
| **Elasticache Node** |`1`| **cache.t2.micro** |





## Deployment

Repo includes Github Actions to deploy the application using the provided Cloudformation template.

If you'll fork or use the Github Actions template please provide the following variables.

`DOCKER_USERNAME` (secret)

`DOCKER_PASSWORD` (secret)

`AWS_ACCESS_KEY_ID` (secret)

`AWS_SCRET_ACCESS_KEY` (secret)  

`PGPASSWORD`(secret)

Workflow builds and tests the docker images, create a cloudformation stack and finally deploy the application inside the EKS cluster. 

![Workflow](https://raw.githubusercontent.com/braulioarredondo/multi-cluster-aws-rds/master/images/workflow.png)
## Cloudformation Designer

![Designer](![Workflow](https://raw.githubusercontent.com/braulioarredondo/multi-cluster-aws-rds/master/images/multi-cluster-rds.png))


## 🛠 Skills
Javascript, AWS, IAC, CloudFormation, Docker, EKS, K8s


## 🔗 Links
[![website](https://img.shields.io/badge/Braulio_Arredondo-black?style=for-the-badge&logo=read.cv)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/braulio-arredondo)



## Authors

- [@braulioarredondo](https://www.github.com/braulioarredondo)