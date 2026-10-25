# Local repair checks

`record-local-repair.mjs` records completed independent adjudications with actual
per-item precheck, rendercheck and final proof-layout evidence. It does not grant
a new publication or whole-item proof audit. Publication status is preserved.

For a legacy counterexample without a phase proof, a title-only repair can use
the precheck's actual structured `not-applicable` result. The policy requires
the same counterexample kind, no phase-proof headings or numbered steps, and
byte-identical content outside the single-line title and verification block.
Body or dependency edits do not qualify. JSON must identify exactly the current
item, with one file, zero checked proofs and zero failures. The recorder marks
this case `verification.precheck: n/a`, never `pass`.

`recover-title-counterexample-checks.mjs` is restricted to the two identified
historical receipts. It archives their exact previous bytes, reruns actual
checks, preserves the mathematical content and records the recovery. It does
not forge phase proofs or alter kinds, claims, ledger content or status.

Validation: the policy suite includes acceptance of this narrow case and
rejection of changed bodies, dependencies, phase proofs, unstructured checks,
wrong-item JSON and failed JSON. The actual run on 2026-10-24 passed 113 tests.
