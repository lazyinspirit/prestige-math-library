Research-only exact historical-ledger metadata projection. Canonical sources, ledger, native decisions, registries and state are untouched.

The sole production-code delta is tools/defect-ledger-historical-metadata.mjs. Existing machine-learning run/pins/projection behavior remains unchanged. The inverse-problems branch uses source-defined finite ipExpected interpretations for exactly nine IDs/ten fields, independently of the root-only ipPins digest table. Root supplied every actual digest in ../mapping.root-pinned.json: SHA256(JSON.stringify(full original row)), neither sorted object hash nor raw-line hash. Author did not invent pins. No runtime registry or environment/test bypass is introduced.

A row must match exact run, recognized ID, root-supplied full-row digest and expected before-values. Otherwise it is returned untouched for the ordinary strict validator. On match only the ten explicitly approved source-defined location/repair_cost/subclass values are projected. Raw rows, native IDs/evidence/disposition/severity/repair history and every other semantic field remain unchanged. The normal-form values already belong to existing enums; no schema or enum is broadened.

The unchanged defect-ledger.mjs copy is only a test carrier. Its validate path already calls historicalMetadataRow; append still calls strict validateRow directly and receives NO historical compatibility. No new append permission is added. No actual ledger append/normalization/validation transition was invoked. CLI tests operate on isolated temporary ledgers and tool copies.

Focused tests cover each of the nine exact original rows, all ten approved differences, entire selected-row strict validation with unchanged raw bytes, unpinned32 cost, changed evidence/location/severity, unexpected field, new run/ID, reordered JSON keys, missing/wrong digest, strict append rejection, already-valid default behavior and an existing machine-learning exact pin.22/22 pass in tests.tap.

before/ holds exact current preimages. Root owns canonical installation after independent review. This candidate grants no mathematical acceptance, new audit coverage, repair/source permission, closure or gate result.
