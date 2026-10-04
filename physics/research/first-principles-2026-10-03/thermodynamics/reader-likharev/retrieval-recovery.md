# Retrieval recovery record

All outcomes below are actual session requests; individual failed-request timestamps were not separately captured. Byte-identical failed HTML was not used as a textbook.

1. Guessed commcms/physics/_pdfs/graduate/EGP/Statistical%20Mechanics.pdf:404,90,395bytes.
2. Guessed faculty_pages/likharev and SM.pdf/EGP-SM.pdf:404.
3. Guessed people/Faculty/Likharev and lowercase variant:404.
4. Search-engine HTML request returned202 without usable results.
5. Guessed people/faculty/Likharev.php and lowercase:404; actual faculty.html:200, discovered _profiles/likharevk.html.
6. Current official profile:200; linked author site and institutional EGP catalogue.
7. Institutional catalogue and egp/5/:200, identifying full SM and six chapter downloads.
8. Initial catalogue full-PDF endpoint:403,5,711bytes. Raw failed response preserved as failed-institutional-download.html; retrieval.json describes that failed attempt and must not be counted as PDF retrieval.
9. Five bounded recovery requests after initial PDF failure:download=1→403;filename=1/type=additional→403;httpsredir=1→403;HTTP→HTTPS403;legacy profile/SM.pdf→404. No recovered institutional PDF.
10. Author you.stonybrook.edu page failed connection. Legacy physics.sunysb and guessed Google downloads requests were started in a discarded-output process; no outcome from those requests is used as evidence.
11. Complete LibreTexts six-chapter adaptation:200;50leaf originals retrieved;manifest records successful requests, hashes,UTC. Reading was performed after retrieval.
12. Author Google site root:200; actual merged-file page:200; embedded folder:200; public Drive file identified;official author PDF download:200,2,138,247bytes. Final official provenance in author-retrieval.json. Title-page version differs from LibreTexts and institutional catalogue.

Raw originals/extractions/images are ignored local files; report and metadata are durable research. No source-fetch-check stamps, engine transitions, or production-ready receipts were generated.
