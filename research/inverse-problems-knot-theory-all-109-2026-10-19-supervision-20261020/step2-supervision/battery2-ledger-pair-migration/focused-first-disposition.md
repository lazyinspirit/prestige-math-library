# Battery2 — two native ledger pair migrations

My earlier proposal incorrectly treated relation type as part of the ledger identity. The native collector's key is `[kind, consumer, supplier]`, and its duplicate rejection is correct. No validator change is proposed.

The guarded candidate changes only the two batch91 pairs from `cex-knot-kt-38-boundary-case` and `ex-knot-kt-38-worked-cases` to `def-knot-floer-filtration-and-tau`. Each pair retains one current row at its original location, using the already root-adopted deps review, status and acceptance evidence. Its current declarations point to the actual canonical and manifest `#deps` fields.

Both complete original review objects—historical forward review and subsequent root-adopted deps review—are preserved verbatim as inline `historical_review_records[].original`. The full44-row preimage is also archived in this research packet. The two redundant top-level records are consolidated, yielding42 top-level rows. All unrelated row values remain unchanged. A direct structural comparison confirms unique native keys in the candidate; no gate was run.

`root-apply-exact-preimage.py` is root-only and unexecuted. It refuses a changed ledger preimage. Root should apply only after its focused review and the full battery drain. No ledger, canonical source, level, hash, state, review counter or engine control was written by this lane.

The metadata proposal script is also corrected: it now matches the native pair key, refuses duplicate current pairs, and holds an existing pair that needs a history-preserving role migration. It never resolves a role change by appending a second pair record. Syntax check passed; plan/apply were not run for this correction.
