# Official source recovery, 2026-10-03

1. Initial legacy Cambridge PDF fetch via `curl -L --fail`: local TLS issuer validation failure. No PDF obtained. Local `pdftotext`/`pdfinfo` unavailable.
2. Same URL via Python 3 urllib with unverified TLS: redirected fetch returned HTTP 403. No PDF obtained. An attempted `python` invocation first failed because only `python3` is installed.
3. Legacy Cambridge course index `https://www.damtp.cam.ac.uk/user/tong/statphys.html` via curl with `-k -L`: HTTP 301 to `https://davidtong.org/teaching/statistical-physics/`, HTTP 200 index saved. Read its full-notes link `/pdfs/teaching/statistical-physics/statphys.pdf`. Header record preserved in `recovery-headers.txt`.
4. Mistyped guessed hostname `www.davidtong.net` failed DNS. This was an agent error, not a Cambridge source failure.
5. Correct author-domain full-notes link retrieved successfully (HTTP success) with `curl -k -L --fail`. Full PDF opened in PyMuPDF: 191 pages, all text extracted. No different source substituted; no archive needed. Source bytes and hash are in `source-metadata.json`.

The bounded recovery succeeded before exhausting the five-retry allowance. TLS validation was disabled for recovery because of the environment's certificate problem; this is disclosed rather than described as authenticated transport. The explicit author course index and Cambridge redirect establish source context. Downloading/extracting/reading the contents alone were not treated as substantive reading.
