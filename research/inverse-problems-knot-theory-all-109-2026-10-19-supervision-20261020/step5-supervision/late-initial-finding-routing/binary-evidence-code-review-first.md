# Independent FIRST: raw-byte evidence fix

**PASS — no defects found in the bounded patch.**

The central file-evidence comparisons now hash raw bytes. Generic text/JSON digest semantics and metadata-history, source/context, native ownership and certification guards remain unchanged. Original PDF/report pins are preserved.

Independently ran2 focused lifecycle/tampering tests and27 historical-evidence/central-consumer tests: **29/29 pass**. A changed binary byte is rejected even when UTF8 decoding produces identical text.

Exact three-file code bindings and reading limits are in the JSON. This is code review only; no actual PDF rehash, collection, mathematical acceptance, native coverage or runtime change was performed. Root can reattempt the ordinary collection with all original evidence unchanged.
