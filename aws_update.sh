aws s3 sync --acl public-read --sse --delete dist/ s3://chordanalytics.ca
# aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DIST_ID_CHORD} --paths '/*'
