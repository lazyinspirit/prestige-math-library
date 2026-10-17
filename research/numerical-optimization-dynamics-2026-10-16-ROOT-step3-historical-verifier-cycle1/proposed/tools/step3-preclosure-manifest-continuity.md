# Historical downstream manifests before first Step3 closure

This policy preserves exact historical routing manifests alongside current completed native authoring carriers. It supplies no source edit permission, historical reader observation, mathematical acceptance or new native coverage.

The implementation lives in `step3-manifest-history.mjs`, `step3-owner-downstream-consumer-routes.mjs`, and `step3-close.mjs`.

## Strict new record

Root creates `research/R-step3-owner-preclosure-manifest-continuities.json` only after final manifest bytes stabilize. Its envelope is:

- version 1; kind `owner-step3-preclosure-manifest-evidence-v1`; exact run;
- authorized_by `owner`; owner_identity `/root`; historical_only true;
- mathematical_acceptance false; native_coverage_adopted false;
- genuine recorded_at and substantive reason (at least80characters);
- nonempty entries with unique `(route_index,field)` tuples.

Each entry contains `route_index`, `field` (`manifest` or `consumer_manifest`), substantive `reason`, `original` (the UNCHANGED route reference), `route_registry` (actual original canonical registry path/rawSHA), `route_entry_sha256` (existing canonical sorted-object route hash, not raw JSON field-order hash), `archive`, `preimage_origin`, `current` (canonical path/currentSHA), `current_archive`, `native_result`, `native_report`, and `current_metadata_evidence`. All references have `{path,sha256}`. Every archive/evidence path must be a regular nonsymlink own-run research file with no `..` path segment, even if normalization would stay inside the repository. Root supplies actual hashes and timestamps; this proposal creates no sealed evidence.

The authenticated preimage origins for the current run are the FULL original manifests at `research/numerical-optimization-dynamics-2026-10-16-owner-step2-three-errors-final-binding-before/manifests/numerical-optimization-dynamics-2026-10-16-batch-{6,20,36}.pages.json`. Root's `ROOT-original-downstream-manifest-search.json` authenticates their original route SHAs. Five entries are needed: index0/manifest (batch6), index1/manifest, index2/manifest, index3/manifest (batch20), index4/manifest (batch36). Full-byte archives may be shared for three batch20 entries. No original entry or finding binding changes.

`current_metadata_evidence` is a NEW truthfully dated root reconciliation record, not a rewrite of historical native authority. It has version1, kind `owner-step3-current-manifest-reconciliation`, exact run, owner_identity `/root`, mathematical_acceptance false, native_coverage_adopted false, `bindings:{canonicalManifestPath:CURRENT_SHA}`, `original_bindings:{canonicalManifestPath:ORIGINAL_ROUTE_SHA}`, exact `native_result:{path,sha256}`, actual `recorded_at`, and substantive `reason` explaining actual manifest deltas and root reconciliation. Its date must be at/after successful native completion and at/before continuity registration. Root may put actual existing operation/receipt pointers in additional fields; original publication/native histories remain untouched. The record does not assert that Alpha authored root's later metadata.

The immutable native result must be the actual successful `alpha-3a-batch-B.attempt-N.result.json`, with exact run/alpha role/label, both zero exit codes, not timedout, actual terminal_summary.task_completed true, task_aborted false and final_response_present true, batch cover, ordered actual start/end dates and completion before registration. Its final response must name the exact nonempty hash-bound current native report. For this run the actual completed attempts are6attempt2,20attempt1,36attempt1. Root must not repoint a stable result alias and call it immutable.

## What the implementation verifies

Original full archive bytes equal the authenticated original SHA and durable original capture. Current full archive equals current live bytes and its sealed currentSHA. Historical/current page IDs, category, kind (where present), and each page's exact item-ID inventory are equal, with duplicates rejected. Missing category/kind normalize to null; any actual value change rejects. The existing current ownership/draft/run/directdependency checks remain in the downstream loader and closure path; neither the original null consumer nor original unbound observation is reconstructed. Original reader/refuter native-result and structured-tail checks are unchanged.

Validation now obtains the exact full-registry index from the existing entry binding, rather than adding a field to that entry. It passes that index into the history helper for both original manifest references. Only the explicit new helper option admits new typed preclosure continuity; default callers retain old postclosure/certifiedStep5 branches byte-for-byte. Invalid matching new evidence throws, never silently falls back.

## Closure compatibility

New close receipts carry `manifest_evidence_policy: owner-step3-preclosure-manifest-evidence-v1`. Only that marker opts into the extra registry/provenance/result/report/current/archive evidence. Unknown or version2 markers reject. Unmarked old v2/v3 receipts retain their old artifact-set behavior; no fallback changes an unmarked historical closure into the new policy.

For a new continuity, the current canonical manifest path binds CURRENT bytes, while the historical original SHA binds its archive path. This avoids asserting that a historical SHA describes a changed live file. Every new provenance reference and the continuity registry are frozen in the marked artifact set. Neither close checks, stageIDs nor ordinary currency/splice prerequisites are altered. Do not run close before the ordinary native battery.

Close and ordinary preclosure routing remain strict about the actual current manifest: its full bytes must equal the captured current archive. Neither the continuity registry nor a frozen close receipt may be rewritten after closure.

Later `step3-close verify` authenticates history separately. Only an already marked original version-3 closure supplies the exact frozen artifact map. Every continuity registry and original reference must remain in that same sealed map with its original digest. Each canonical manifest artifact slot is reconstructed from its existing hash-bound closure-time current archive; this is a historical binding, never a claim that its old digest describes later live bytes. The full original/historical identity, native Alpha completion and root reconciliation checks still apply to those archived captures. No new postclosure archive, certificate or repair route may enlarge the frozen artifact set. All other artifacts retain their ordinary exact-current-byte verification, and the exact artifact-set and ledger checks remain unchanged.

The later live manifest is retained separately for actual target membership, unique current ownership/draft/run and direct-dependency checks in the downstream loader. This verifies historical closure without adopting a current source review or licensing any later mathematical or metadata repair. Unmarked receipts and close/default preclosure callers retain their original behavior.

The orchestrator supplies the exact registry and current reconciliation captures after reviewing source history, then runs the ordinary full native battery. Current hashes and closure remain orchestrator-owned.
