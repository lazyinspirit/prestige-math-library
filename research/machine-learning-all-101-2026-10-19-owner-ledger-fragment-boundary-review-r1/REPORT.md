# APPROVE — cycle 1 independent operational review

Approve exactly the frozen proposal manifest SHA-256 `6b4d97fb121ca4cedda3b4bc547f04ef7cc7ca486e7661206523feabc8d00dcd` and these installation bytes:

| File | Proposed SHA-256 |
|---|---|
| tools/step6-ledger-fragment.mjs | e80919cf83959ec00da92dc88a1fe1ba04b89967452cf843ee4201ab04ef63bf |
| tools/step6-ledger-fragment.test.mjs | 27a186e41dc975341da1b2cbf107b636f3eaee5c98564a0439e30488b9784df3 |
| tools/STEP6-REBUILD.md | 5541a1bf7e9c8fda5c7f8173c8989532802bdc434e9f5f86ba4c5bf10ff47163 |

No blocking findings. The cause is confirmed independently: V1's terminal table split emits a zero-width empty record after LF. V2 adapts V1's records for foreign slices. The append turns EOF into a paragraph boundary and removes that phantom from the parsed inventory, tripping the otherwise-correct strict residual comparison. Actual HEAD and index each reproduce 16,892 original foreign records versus 16,891 real records, with the last original record start=end=5330213 and text empty. The candidate excludes only a zero-width record at the foreign slice's end. Real whitespace and CR rows remain represented. V1 is untouched.

This is the smallest safe parser-adapter repair. No ownership classifier, marker authentication, authority schema, receipt provenance check, addition-only restriction, inverse reconstruction, residual equality or transaction guard changes. The production diff is one conditional filter plus explanatory comments. No source, native history, current evidence, policy or control rewrite is proposed. The accompanying documentation accurately describes the boundary rule. This approval grants no mathematical acceptance or commit/publication coverage.

Verified evidence:

- All manifest-listed proposed files and evidence hashes match the freeze; all three live baseline hashes match their manifest guards.
- Candidate suite passes 32/32, including the existing real temporary-Git transaction with distinct HEAD/index/working foreign content and preserved foreign staging. The same proposed tests against original production code pass 30/32 and fail the two intended boundary regressions.
- The authentic-input probe was inspected and rerun read-only. Both implementations authenticate all 265 real blocks from 264 claims and genuine repair receipt chains. Both original HEAD/index compositions fail with the reported residual error; both candidate compositions preserve exact target order, foreign residuals, inverse bytes and idempotent retry.
- My independently authored matrix checks 128 BOM/Unicode/table/ending combinations. V1 records remain identical in all 128; every real foreign record and span remains identical in all 128. Exact composition and inverse preservation pass for 112; the remaining 16 reject real residual changes. Six independent tamper cases reject body/marker/duplicate/ownership/receipt mutation.
- An independent Buffer-based direct append oracle matches the candidate result for each actual Git base, including Unicode byte offsets. Both result hashes are `fe3d1f16cd7415ee2e99b5ef166190836c1743498baa4daebb39012c9b387be0`. Actual HEAD and index currently have equal ledger bytes; their separate preservation was also exercised with distinct bases in the transaction suite.

Actual checked HEAD is `deecdd0891f4837d017620b5e3180e709aa4fa6d`; index ledger blob is `01c6d945cea28048597f6c9ffff847a0c25020f3`; working ledger SHA-256 is `0c0ea26b4ddc6c139adcc43c1dd44d3e3d079255ebda207eebdd04018f9ab36a`. Native state remains paused at `5.8-gate`, with no open dispatches. The four intended helper authority/application files remain absent. Review writes are confined to this review directory and disposable temporary test fixtures; no root --apply helper, live installation, gate, commit, push or publish was executed.

Root retains installation/CAS, controller reload and recertification duties. Apply only against matching live baseline hashes; any changed proposal bytes require review. This focused approval does not replace current authority sealing, fresh preparation or the required native gate battery.
