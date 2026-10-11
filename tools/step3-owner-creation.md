# Historical owner-created authoring claims

This documents the retained immutable Step-3b authoring origin and claim-resolution API for historical eight-step runs. These receipts cannot supply execution coverage for the current six-step workflow. New runs follow WORKFLOW.md and preserve genuine prior history.

An accepted later Statement or Definition correction may resolve a stale
owner-created claim without rewriting its creation origin. The native command
records a separate immutable resolution:

```bash
node tools/step3-owner-creation.mjs check-claim --run RUN --id ITEM --evidence research/EVIDENCE.json
node tools/step3-owner-creation.mjs resolve-claim --run RUN --id ITEM --evidence research/EVIDENCE.json
```

`check-claim` is read-only evidence validation, not a gate or mathematical audit.
`resolve-claim` derives the actual recording time; it never replaces the
original creation receipt, baseline, author identity or author timeline. The
item's ID, kind, title, page and batch must remain unchanged. Changing those
identities needs a separate owner recovery plan; this claim-correction command
does not authorize rehoming or reclassification.

The version-1 evidence has policy
`owner-held-step3-creation-claim-resolution-evidence-v1`, matching `run` and
`id`, `owner: true`, the original `owner_identity`, a concrete `reason` of at
least 40 characters, and the following exact fields:

- `authorization`: a `{path, sha256}` marker for explicit matching-run owner
  authority with `authorized_by: "owner"` and a nonempty `authorization`.
- `origin`: a marker for the unchanged native owner-creation receipt.
- `original_item` and `original_manifest`: research archive markers from which
  the original claim and authored-byte hashes are reconstructed by the native
  claim algorithm. A manifest may be the full archived native batch file or a
  `{page, batch, item}` claim projection. All original baseline exclusion,
  timeline and assignment/authorship/escalation source guards still apply.
- `current_claim_sha256` and `current_item_file_sha256`: exact current accepted
  claim and full authored-file hashes, independently derived by the command.
- `supplier_review`: a marker for the actual lead's exact whole-current
  supplier/consumer acceptance. Supported typed review rows are an eligible
  `SUFFICIENT_WHOLE_ACTUAL_SUPPLIER_AND_CONSUMER` in `current_subject_decisions`,
  an unheld `SUFFICIENT_WHOLE_ACTUAL_REVIEW_CURRENT_INPUTS_BOUND` in
  `original_subjects`, or an unheld `expanded_current_whole_accepted_subjects`
  row bound to its retained whole-actual review packet. Each must identify this
  exact subject and full current source hash; source citations and format
  passes do not qualify. Every current declared logical supplier must have an
  exact current raw-byte guard in the actual reviewer packet, either the
  path-keyed `current_actual_direct_supplier_guards` map or the subject row
  `current_direct_supplier_guards` map. Missing, conflicting or stale guards
  reject registration; ordinary owner bookkeeping cannot create mathematical
  acceptance for new inputs. Explicit unresolved owner holds, reopen requests
  and review escalations anywhere in the actual transitive proof-input context
  also block recording, even when historical whole-review hashes still match.
- `consumers`: unique `{id, item_file_sha256, review}` records. Every actual
  direct dependency or citation consumer must occur with its current source
  hash and actual whole-current review. Additional affected indirect consumers
  must be reachable from the supplier and carry the same guards. This records
  completed consumer maintenance; it cannot waive an unfinished cone.
- `owner_decision`: a marker for an actual ordinary current version-2 owner
  `repaired` bookkeeping receipt. Its current full proof-input hash must match
  independently. Resolution is creation continuity, not mathematical acceptance.
- `previous_resolution`: `null` for the first correction, otherwise a marker
  linking the complete existing immutable resolution chain. Branches,
  replacements, synthetic predecessors and cyclic links are refused. Loading
  requires the complete chain tip; reverting to the original or an older
  resolved claim cannot resurrect its old creation acceptance.

The API freezes the current item, claim projection, owner bookkeeping,
authorization and mathematical acceptance evidence under content-addressed
research archives. The record also freezes recursively retained whole-review
packets as exact-byte `review_archives` with original marker identities; loading
historical evidence uses those archives and rejects missing, stale or cyclic
links without depending on subsequent shared reviewer rewrites. Its resolution record is keyed by the corrected claim hash;
identical registration reuses existing bytes and time. All origin and archive
hashes remain checked on loading. Later proof-only repairs retain the separate
ordinary current owner-decision requirement; another claim correction needs a
new linked resolution. The certifier continues to return the original owner
creation class and never grants native auditor-creation provenance.

Drain writers and finish actual supplier and consumer review before recording.
After resolution and final metadata synchronization, refresh ordinary current
bookkeeping on a fresh stable context and run the normal complete gate battery.
No scope, dispatch history, repair counter or gate stamp is reset.
