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

After `owner-create`, changed carriers require the existing explicit
`owner-recertify` command, including changes before the first whole-stage
certification, and a research report naming the run, item, and exact
current raw item, manifest and contract hashes. That receipt links the immutable
owner creation origin instead of inventing a native author result. Until it is
recorded and certification refreshed, currency checks fail.

A valid immutable owner creation origin is sufficient for this explicit
recertification even when no prior whole-stage certificate exists. For example,
a genuine owner-created prerequisite may initially have an open contract risk
review. After the owner personally adjudicates its proof and marks the actual
review complete, the changed contract hash requires a current research report
and `owner-recertify` before the first `certify`. The command validates the
original creation and all source provenance, binds every current carrier, and
preserves the original home and batch. Its receipt contains `owner_creation`
and no native `author_result` or native-bootstrap basis. Missing or tampered
origins, changed source evidence without a valid archive, a different home or
batch, and stale current reports fail closed. This does not waive the initial
mathematical review or certify the whole stage automatically. A later native
Step-7/8 promotion still requires its genuine dispatch and item-specific stage
delta; its `origin_step: 5` recursively validates this original owner evidence.
Every downstream scope, coverage, guard and judge-stamp consumer uses the
shared validating loader. Original source artifacts must remain byte-stable unless the supported exact-byte
archive command below preserves their bound historical bytes before mutation.
Changed source evidence without that archive remains an error, never implicit
reauthorization.

## Historical source archive before a genuine owner resolution

A genuine canonical decision file can be mutable while an owner creation origin
binds its historical escalation bytes. Before updating that canonical decision,
explicitly preserve the exact current original bytes for each affected origin:

```sh
node tools/auditor-created-items.mjs owner-source-archive --run RUN --step 5 --id ITEM --source research/ORIGINAL_SOURCE.json --owner-identity /root --reason "Actual reason for preserving historical escalation before owner resolution"
```

This narrowly supersedes the source-path-must-never-change rule only for the
exact source bound by the immutable Step-5 owner creation origin. The command
requires the source's current raw SHA256 to equal the origin's original source
hash. It writes an immutable raw-byte archive and owner receipt under
`research/`, using exclusive creation and read-only permissions. The receipt
binds run, step, item, the unchanged origin path and raw hash, original source
path and hash, archive path and the identical raw hash, actual observation time,
owner identity and reason. It refuses archival after source mutation; it cannot
recover missing historical bytes or bless changed evidence.

The shared provenance loader resolves an explicitly valid archive against that
exact immutable origin/source binding. It rejects changed archive bytes,
cross-run/item receipts, altered origin links, different original source paths,
and mismatching hashes. Without an archive receipt, strict original-source hash
validation remains mandatory. A corrupt archive never falls back to the current
source. The immutable creation origin, native dispatch histories and historical
evidence remain unchanged; actual canonical owner resolutions may then update
the genuine mutable decision file. This archive grants no current mathematical
acceptance, carrier currency, native authorship or gate bypass; changed item,
manifest and contract carriers retain their existing recertification rules.

## Missing historical definition manifest projection

For a genuinely Step-3-created definition whose Step-5 item and manifest both
changed, an owner can explicitly authorize a current-content review when the
old manifest projection cannot be recovered. This grants no general manifest
exemption and never labels the unknown change metadata-only. The existing
Step-3 origin, immutable Step-5 home/batch and before hash, successful native
Step-5 review context, and current owner receipt all remain mandatory.

The research evidence uses the existing fenced `step5-manifest-repair` JSON
with policy `step5-manifest-repair-evidence-v1` and
`repair_kind: "current-definition-manifest-review"`. Supply the run, step 5,
id, page, batch, immutable `baseline_manifest_sha256`, current
`current_manifest_sha256`, full `current_manifest_entry`, and
`current_carriers` with exact raw item/manifest/contract hashes. Omit
`baseline_manifest_entry` and set `historical_delta_unknown: true`. Supply
`owner_authorization: { "owner": true, "reason": "Actual explicit authority" }`
and `sources: [{ "path": "research/ACTUAL_REPORT", "sha256": "RAW_HASH" }]`.
Source files must be hash-bound and collectively name run, id and exact
authority reason.

`review` must affirm `current_item_and_contract_checked`,
`current_manifest_matches_item`, `no_unresolved_defect`, and
`current_definition_and_direct_consumers_checked`; its `direct_consumers` must
be the sorted complete current list of item dependencies or exact wikilinks to
the definition. Item frontmatter and manifest sources/deps must agree. Record
the actual review of the definition, suppliers, metadata and consumer uses;
never infer it from successful local tools. The resulting owner receipt has
basis `initial-step5-current-definition-manifest-review` and retains
`historical_delta_unknown: true`. Its native result supplies review context,
not attribution of the unknown late changes.

## Exact ball-lemma current review

The separate `current-ball-lemma-manifest-review` branch is authorized only for
`lem-euclidean-balls-are-bounded-c-one-domains`, with item and manifest kind
`lemma`. It preserves every definition-branch requirement on origin, immutable
baseline/home, current metadata, explicit owner authority, source hashes and
complete direct-consumer inventory. Set
`review.current_proof_suppliers_and_direct_consumers_checked: true` after
actually reviewing the full proof, exact suppliers and all consumer uses.
Other lemma/theorem subjects are not eligible under this authorization.

It additionally requires `proof_checks` links for `precheck`, `rendercheck`,
and `strict-contract`, each `{ "path": "research/ACTUAL_CHECK.json",
"sha256": "RAW_FILE_HASH" }`. Each hashed check record must contain
`version: 1`, the same run, `step: 5`, exact id and kind, actual `observed_at`,
`exit_code: 0`, actual argv naming the corresponding tool and exact subject,
and `current_carriers` binding the raw item, canonical manifest and contract
hashes. Strict contract argv must include `--strict`, `--items`, the exact id
and its owning batch contract. Record actual stdout/stderr and preserve failed
attempts separately; these are local checks, never independent audits.
The owner receipt uses basis
`initial-step5-current-ball-lemma-manifest-review` and retains
`historical_delta_unknown: true`, without inventing native authorship or an
old manifest projection. Existing definition receipts keep their distinct basis.

## Current proof and manifest review with an unknown historical projection

For a genuinely Step-3-created proof item whose Step-5 manifest changed,
`current-proof-manifest-review` supports an explicit owner review when
the original manifest projection is unavailable. It is available to lemmas,
theorems, propositions and corollaries with a current supplied proof. Definitions
retain the separate `current-definition-manifest-review` branch. This is neither
a metadata-only classification nor a claim that a native worker authored the
current bytes.

Use the existing fenced `step5-manifest-repair` JSON, policy
`step5-manifest-repair-evidence-v1`, with run, step 5, id, unchanged page/batch,
`baseline_manifest_sha256`, `current_manifest_sha256`, full exact
`current_manifest_entry`, and `current_carriers` containing all six keys:
`guard_sha256`, `judge_sha256`, `item_file_sha256`, `manifest_sha256`,
`contract_sha256`, `step5_subject_sha256`. Set
`repair_kind: "current-proof-manifest-review"`, `historical_delta_unknown: true`,
and omit `baseline_manifest_entry`.

`owner_authorization` must contain `owner: true`, `owner_identity: "/root"`, and
the actual authority reason. Hash-bound immutable research `sources` must
collectively contain the run, item and exact authority reason and substantiate
the actual owner review. Never fabricate source reading. The genuinely
successful completed native Step-5 dispatch supplies only eligible stage/batch
context; the explicit owner receipt supplies current repair evidence. Genuine
Step-3 origin, immutable Step-5 baseline membership and unchanged home/batch
remain required.

The `review` object must affirm `current_item_and_contract_checked`,
`current_manifest_matches_item`, `no_unresolved_defect`,
`current_proof_suppliers_and_direct_consumers_checked`, `current_proof_checked`,
`current_suppliers_checked`, and `current_direct_consumers_checked`. Supply
sorted complete `suppliers` from current `deps` plus `justified_by`, and sorted
complete `direct_consumers` from actual item dependencies, `justified_by`, and
exact wikilinks, including display-labelled links. Supply sorted
`context_items: [{ "id": "ACTUAL_CONTEXT_ITEM", "guard_sha256": "CURRENT_HASH" }]`
for the complete union of suppliers and consumers. These hash bindings preserve
the exact current mathematical context independently of verification stamps.
Record the actual full proof, supplier and every consumer-use review; local
checks alone do not establish those affirmations. The current manifest must
match the current source's kind, deps, justified_by and sources, and any title
or proved_here metadata it supplies.

`proof_checks` requires hash-bound research receipts for `precheck`,
`rendercheck` and `strict-contract`, with the same exact version/run/step/id,
actual observation time, exit code, argv, and item/range targeting described
for the ball-lemma branch. For this generic branch every check's
`current_carriers` must bind all six current hashes. Each check must actually
pass on stable content; retain failed attempts separately. None is an
independent audit or a substitute for personal proof review.

After writers drain and the owner has completed that review and those checks,
use the ordinary `owner-recertify` command with this evidence and the actual
reason, then the ordinary whole-stage `certify`. The resulting receipt retains
`basis: "initial-step5-current-proof-manifest-review"` and
`historical_delta_unknown: true`; certification preserves `origin_step: 3`.
Missing origins, changed baseline/home, incomplete current hashes, altered
source/check receipts, omitted suppliers/consumers or changed mathematical
context fail closed. Existing native write-window routes remain unchanged.

When the actual item bytes are unchanged from the immutable Step-5 baseline,
this same explicit full-review branch can cover a changed manifest (and any
current contract maintenance). Set `current_item_unchanged: true` in the evidence.
The tool verifies exact baseline/current raw item equality and records that
same truthful flag in the owner receipt. A real manifest delta, genuine original
Step-3 provenance, unchanged baseline home, completed native Step-5 context,
all six current hashes, full proof/supplier/consumer review and actual focused
checks remain mandatory. Historical manifest differences stay unknown; this
neither labels them metadata-only nor attributes a current item write to a
native worker. No artificial source edit is required. A no-delta subject cannot
enter this branch, and ordinary contract-only, known source-reference delta,
existing definition/special proof branches and Step-7 rules remain unchanged.
