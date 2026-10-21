# Raw-byte Step5 evidence fix

The original unit3 report binds a721033-byte Zenodo PDF with raw SHA25606bba7a8f202569c6a708ff2478601c9b5fc9ee8132560c2c73e18b87a3d19ad. The actual unchanged PDF matches it. UTF-8 decoding before hashing instead produces e2655293139177fd8b28f6a49d39de93ccdad8779285059cfcbc5d6412f73c59. This is a mechanical evidence-hashing error, not a new proof or metadata gap.

The production change is a dedicated raw file digest helper used by the central evidence verifier and both live supporting-evidence comparisons. Existing string/JSON payload digest and all historical metadata/ledger fallback guards remain unchanged. Certification issuance/reuse and central verification already delegate to the central verifier, so they inherit exact binary authentication.

The new test is in the existing tools/autopilot/test/step5-workflow.test.mts: `binary PDF evidence keeps exact raw bytes through collection, certification and cached verification`. It exercises complete fixture collection/certification/reuse, verifies non-ASCII UTF-8 JSON and object payload digest preservation, then changes a raw byte while preserving decoded text. Every reuse path rejects that change. Three focused workflow tests and27 exact-history/central-consumer regressions pass.

The adjacent JSON pins the exact three changed files. Independent FIRST passed with the exact three file bindings and29/29 independently run tests; no repair was requested. No actual collection, native execution, gate, certificate, source, PDF, report, receipt or runtime state was changed. Reading PDF bytes for SHA attestation claims no PDF content reading or mathematical review.
