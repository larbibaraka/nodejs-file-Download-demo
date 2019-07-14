const PDFDocument = require('pdfkit');
const fs = require('fs');
const blobStream  = require('blob-stream');
const downloadFile = (req, res, next) => {
    doc = new PDFDocument;
    // doc.pipe(fs.createWriteStream('output.pdf'));
    const stream = doc.pipe(blobStream());

    // PDF Creation logic goes here
    doc.end();

  

    res.render('file');
}

module.exports = downloadFile;