let AWS = require('aws-sdk');
let Swagger = require('swagger-client');
const s3 = new AWS.S3();
Swagger.http({
    url: `https://api.uat.fintechmart.online/kyck-api/1.0/KYCKIndo/users`,
    method: 'post',
    query: {},
    headers: { "X-Authorization": "bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJSNTF3R2d5clZxbjhjT05aX244UGpLTEI4VmpheGtjOWxWR2dUd3pMNG9VIn0.eyJqdGkiOiI1NmFkOWZmOC00M2VlLTQ4MTQtYmI4OC1lZTU1NTZiNjllZjAiLCJleHAiOjE1NDc0NTI3MzksIm5iZiI6MCwiaWF0IjoxNTQ3NDUwOTM5LCJpc3MiOiJodHRwczovL3Nzby51YXQuZmludGVjaG1hcnQub25saW5lL2F1dGgvcmVhbG1zL0FGSU4tUmVhbG0iLCJhdWQiOiJhcGktc2FuZGJveC1taWNyb3NlcnZpY2UiLCJzdWIiOiI2MDYzMDM3OC00ZTRlLTRjNjctOGQzNi1hYzA2NDU3MDc4NWIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhcGktc2FuZGJveC1taWNyb3NlcnZpY2UiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiJjYTYwMTU4OS1mY2MxLTQyZmMtYTY2ZS1jOWIwMjNlMzE1YjMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImJhbmstcm9sZXMiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiYXBpLXNhbmRib3gtdXNlciIsImJhbmstcm9sZSIsIm9yZy1hZG1pbi1yb2xlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYXBpLXNhbmRib3gtbWljcm9zZXJ2aWNlIjp7InJvbGVzIjpbIm9yZy1hZG1pbiIsInVzZXIiXX0sImRhc2hib2FyZC1tZXRyaWNzLW1pY3Jvc2VydmljZSI6eyJyb2xlcyI6WyJvcmctYWRtaW4iLCJ1c2VyIl19LCJhcGktZ2F0ZXdheS1taWNyb3NlcnZpY2UiOnsicm9sZXMiOlsicGxhbi9reWNrLWFwaS9wcmV2aWV3YWNjZXNzIiwiYXBpL2t5Y2stYXBpLzEuMCJdfSwiYXBpLXNhbmRib3gtbWljcm9mcm9udGVuZCI6eyJyb2xlcyI6WyJ1c2VyIl19LCJmb3J1bS1taWNyb3NlcnZpY2UiOnsicm9sZXMiOlsib3JnLWFkbWluIiwidXNlciJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19LCJhZmluLXBsYXRmb3JtLWJhY2tlbmQiOnsicm9sZXMiOlsib3JnLWFkbWluIiwiYmFuay1jbGllbnQtcm9sZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJvcmdhbml6YXRpb25OYW1lIjoicmVsaWdpb3VzLmNvbSIsImNvbXBhbnlUeXBlIjoiYmFuayIsImNvbXBhbnlOYW1lIjoiIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaHNpZ2lyaWdlQHJlbGlnaW91cy5jb20iLCJnaXZlbl9uYW1lIjoiSGFuc2kiLCJwZXJzb25QYXJ0eUlkIjoiMTQ1OSIsIm9yZ2FuaXphdGlvblR5cGUiOlsiL3JlbGlnaW91cy5jb20iXSwiZ3JvdXBPcmdhbml6YXRpb25JZCI6WyIvcmVsaWdpb3VzLmNvbSJdLCJwZXJzb25Pcmdhbml6YXRpb25JZCI6IjE0NTgiLCJuYW1lIjoiSGFuc2kgU2lnaXJpZ2UiLCJmYW1pbHlfbmFtZSI6IlNpZ2lyaWdlIiwiZW1haWwiOiJoc2lnaXJpZ2VAcmVsaWdpb3VzLmNvbSJ9.EgU0BQkceb9rwRL8-zUHhLhj0-ShKooLyMMIBrbiFP-sGRBsO4YGeEhQQbrbW-nHAzjXLaNP1SVjpsvCtlMrvKARMGDoN52lehN4e7kHVZmIjoJ2aTmOSizcXr5i-T6HElBRvuQaoiyyZk4XswmbSbCkpwl9OyILVeZyTpTq7HQD-ACEeb5fd3JF3joJwEChNhXR8uy-Lsw11zs-0EQjOe68qDTaW9v2xWbWejtJTqZ8uAooNZpLzBIJStCvxI0j-39iJ6e54K8nMvyag8-7rMeQyGtlyOVYc-SFqmq_OU0Y9m9OqZ55hLZzF0qIxzs06L0PO8pP694M8vP6DQRPdw", "Accept": "application/json", "Content-Type": "application/json" },
    body: {
"emailId": "hsigirige@religious.com",
"password": "FWftq@1863"
}
}).then((response) => {
    // your code goes here
}).catch((err) => {
    // error handling goes here
});

exports.handler = function (event, context, callback) {

    s3.putObject({
        "Body": decodedImage,
        "Bucket": "upload-to-s3-sample",
        "Key": filePath
    })
        .promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
                VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });
    callback(null, { "message": "Successfully executed" });
}