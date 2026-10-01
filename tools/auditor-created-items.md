# Stage creation provenance

`auditor-created-items.mjs` preserves immutable baseline exclusion and native
successful-dispatch policies. The explicit Step-5 owner creation class records
actual authorship by an owner-spawned repair agent resolving an owner-held
escalation. It is an owner attestation, not a native dispatch result, independent
review, adjudication, judgment, or certificate of successful local checks.
Existing native and Step-3 origin validation remains mandatory.

After integrating the actual new item, manifest entry and contract entry, the
owner prepares a JSON attestation from retained evidence and records it with:

```sh
node tools/auditor-created-items.mjs owner-create --run RUN --step 5 --id ITEM --evidence research/ATTESTATION.json
```

The command validates and copies it to the immutable canonical origin file
`research/RUN-step5-owner-creation-ITEM.json`. It refuses to replace a different
origin. Recording alone does not run certification or advance the workflow.
The ordinary stage certification command consumes this class explicitly,
recording `evidence_class: "owner-spawned-creation"` and a raw-file hash link in
`owner_creation`; it records no `author_result` for this class.

Attestation fields are restricted to the following schema (placeholders must
be replaced with actual evidence; this is not a live receipt):

```json
{
  "version": 1,
  "policy": "owner-spawned-step5-creation-v1",
  "evidence_class": "owner-spawned-creation",
  "run": "RUN",
  "step": 5,
  "id": "ITEM",
  "page": "PAGE",
  "batch": "BATCH",
  "owner": true,
  "owner_identity": "/root",
  "author": {
    "identity": "/root/ACTUAL_REPAIR_TASK",
    "timeline": {
      "mode": "unknown",
      "after_baseline": true,
      "reason": "Actual reason the precise author interval is unavailable"
    }
  },
  "attested_at": "ACTUAL_CURRENT_ATTESTATION_TIME",
  "reason": "Actual prerequisite creation reason",
  "owner_held_escalation": "ACTUAL_ESCALATION_ID",
  "baseline_sha256": "SHA256_OF_JSON_STRINGIFY_PARSED_IMMUTABLE_BASELINE",
  "carriers": {
    "guard_sha256": "CURRENT_HASH",
    "judge_sha256": "CURRENT_HASH",
    "item_file_sha256": "CURRENT_HASH",
    "manifest_sha256": "CURRENT_HASH",
    "contract_sha256": "CURRENT_HASH",
    "step5_subject_sha256": "CURRENT_HASH"
  },
  "sources": [
    { "role": "assignment", "path": "research/ACTUAL_ASSIGNMENT", "sha256": "RAW_FILE_HASH" },
    { "role": "escalation", "path": "research/ACTUAL_ESCALATION", "sha256": "RAW_FILE_HASH" },
    { "role": "authorship", "path": "research/ACTUAL_AUTHOR_REPORT", "sha256": "RAW_FILE_HASH" }
  ]
}
```

A source may serve multiple roles when its actual contents support them. The
source files must resolve within `research/`, match their raw SHA256 hashes,
and collectively name the run, item, author task and escalation. The owner must
verify that these artifacts actually substantiate the assignment, escalation
and authorship; string presence alone does not establish that factual claim.
Never fabricate an assignment report, exact historical time, or check result.
The item must be absent from both the immutable baseline manifest inventory
and its filesystem inventory. The origin also binds that baseline digest.

If actual author times are available, use `timeline` with `mode: "known"`,
`started_at` and `ended_at`; they must fall after the baseline and before the
attestation, in order. Unknown times remain explicitly unknown. `attested_at`
is the owner's observation time, not a creation timestamp. File mtimes are not
used to infer this class's author interval.

Carrier hashes use `itemHashGuard`/`itemHashJudge` from `item-hash.mjs`, raw item
bytes for `item_file_sha256`, and recursively key-sorted compact JSON for the
manifest and contract projections. The manifest projection is the exact item
entry plus `__step6_page_id`; the contract projection is `contracts[ITEM]`, or
JSON null when absent. The subject hash uses the sorted object with
`item_sha256` (raw item hash), `manifest_sha256`, and `contract_sha256`.
Baseline digest uses `JSON.stringify` of the parsed baseline, without sorting.

After certification, changed carriers require the existing explicit
`owner-recertify` command and a research report naming the run, item, and exact
current raw item, manifest and contract hashes. That receipt links the immutable
owner creation origin instead of inventing a native author result. Until it is
recorded and certification refreshed, currency checks fail. A later native
Step-7/8 promotion still requires its genuine dispatch and item-specific stage
delta; its `origin_step: 5` recursively validates this original owner evidence.
Every downstream scope, coverage, guard and judge-stamp consumer uses the
shared validating loader. Original source artifacts must remain byte-stable;
changed source evidence is an error, never implicit reauthorization.
