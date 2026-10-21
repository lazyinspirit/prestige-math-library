# Stage creation provenance

`auditor-created-items.mjs` preserves immutable baseline exclusion and native
successful-dispatch policies. The explicit Step-3 owner creation class records
actual authorship by an owner-spawned repair agent resolving an owner-held
escalation. It is an owner attestation, not a native dispatch result, independent
review, adjudication, judgment, or certificate of successful local checks.
Existing native and Step-3 origin validation remains mandatory.

## Native origin before the first certificate

When a genuine native Step-3 author creates a helper and an owner repairs it
before the first certification, preserve native birth separately from current
repair. Do not relabel the creator, reset mtimes, restore old mathematical
content, or run certification early to obtain provenance. The metadata command
below does not run a gate or create an auditor-created certification:

```sh
node tools/auditor-created-items.mjs native-origin --run RUN --step 3 --id ITEM --evidence research/ORIGIN-EVIDENCE.json
```

The registration evidence uses the following fields. Every marker is an
existing research file with its actual raw SHA256. The tool, rather than the
caller, derives `recorded_at` and `native_write_binding`:

```json
{
  "version": 1,
  "policy": "native-created-step3-origin-evidence-v1",
  "run": "RUN",
  "step": 3,
  "id": "ITEM",
  "owner_identity": "/root",
  "reason": "Concrete reason for preserving native creation before later owner maintenance",
  "native_execution_credit": false,
  "mathematical_acceptance": false,
  "baseline_sha256": "JSON_STRINGIFY_PARSED_STEP3_BASELINE_HASH",
  "page": "ORIGINAL_PAGE",
  "batch": "ORIGINAL_BATCH",
  "author_result": "alpha-ACTUAL_LABEL.attempt-N.result.json",
  "author_evidence": {
    "result": {"path": "research/RUN-dispatch/ACTUAL.result.json", "sha256": "RAW_HASH"},
    "prompt": {"path": "research/RUN-dispatch/ACTUAL.prompt.md", "sha256": "RAW_HASH"},
    "log": {"path": "research/RUN-dispatch/ACTUAL.log", "sha256": "RAW_HASH"}
  },
  "native_item": {"path": "research/ACTUAL-NATIVE-PREIMAGE.md", "sha256": "RAW_HASH"},
  "native_manifest": {"path": "research/ACTUAL-NATIVE-MANIFEST.json", "sha256": "RAW_HASH"},
  "native_contract": {"path": "research/ACTUAL-NATIVE-CONTRACT.json", "sha256": "RAW_HASH"},
  "native_metadata_capture": {"path": "research/ACTUAL-CAPTURE.json", "sha256": "RAW_HASH"},
  "carriers": {
    "guard_sha256": "ORIGINAL_GUARD_HASH",
    "judge_sha256": "ORIGINAL_JUDGE_HASH",
    "item_file_sha256": "ORIGINAL_RAW_HASH",
    "manifest_sha256": "ORIGINAL_ITEM_MANIFEST_PROJECTION_HASH",
    "contract_sha256": "ORIGINAL_CONTRACT_ENTRY_HASH",
    "step3_subject_sha256": "ORIGINAL_SUBJECT_HASH"
  },
  "replay": {
    "policy": "literal-python-item-writer-v1",
    "writer_script": "/tmp/ACTUAL-WRITER.py",
    "transform_script": "/tmp/ACTUAL-TRANSFORM.py"
  }
}
```

All original baseline and filesystem exclusion checks apply. The native result
must be a successfully completed, unaborted immutable Step-3 author attempt,
with its authentic prompt, batch coverage and unchanged result/prompt/log bytes.
`author_result` remains that native filename, never an owner task identity.
Original home and batch cannot move through this route. The native manifest and
contract must be retained archives, not the mutable canonical paths. Their
per-item projections supply the six original hashes under the ordinary hash
definitions above. A real metadata capture has `captured_at` and
`sources: [{source, archive, raw_sha256, owner_modified_source: false,
source_stat_at_capture: {mtime_utc}}]`. Each original canonical metadata source
and archive must match the expected run/batch filename and its retained hash;
the actual captured mtime must lie in the authenticated native interval (with
the existing 1.5-second start tolerance). Capture time is after native completion
and before registration. Missing original item mtimes are not reconstructed.

The source preimage is authenticated by restricted **static** replay of the
actual successful write commands in that exact native log. Python 3 in isolated
mode parses the shell wrapper and Python AST; it never executes or imports log
code. The supported emitter is a literal `item(i,title,deps,body,level)` function
that concatenates a literal frontmatter f-string and body, then writes
`(base/(i+'.md')).write_text(t)` with `base=Path('items')`. Only literal
constants, names bound to scalar constants, lists, string concatenation, plain
f-string substitution and a literal separator's `join` are evaluated. A later
optional `edit(id, lambda t: ...)` supports only chained literal replacements
and the precisely recognized finite `dep` list insertion. Both scripts must
occur in unique successful `cat`-heredoc/`python3` commands; transforms must
follow creation. The reconstructed full raw item must equal the retained
preimage exactly. Other script shapes fail closed; this is not a generic Python
interpreter or a source-reading attestation. Only evidence markers, source
hashes and command hashes are stored; transcripts and scripts are not copied.

Registration writes the immutable canonical
`research/RUN-step3-native-origin-ITEM.json`, policy
`native-created-step3-origin-v1`. Different existing origins are refused.
The recorder changes no source, baseline, dispatch, timestamp or certificate.

Registration and first Step-3 closure require the operational native log and
exact static replay. The version-3 `step3-close` receipt now declares
`native_origin_evidence_policy: "native-created-step3-origin-freeze-v1"`.
After its ordinary native currency checks, close replays every registered
origin and freezes the immutable origin receipt's raw hash, the baseline,
original item/manifest/contract/metadata-capture archives, and native result
and prompt. It does not freeze or copy the transcript. Existing origin receipts
remain byte-identical.

When the log is present, every origin load still checks its exact hash and
replays it. When it is absent after a scoped clone, a load requires that exact
version-3 closed receipt and policy, every retained marker and raw origin hash
in its frozen artifact map, and the engine's successful
`tool-step3-close.result.json` (`written_by: "autopilot"`, matching run,
tool/label/all coverage and completion no earlier than closure). All original
identity, baseline, source projection and native result/prompt checks still
apply. The loader checks these pins directly without recursively invoking
closure verification. Missing or unsealed evidence fails; this gives no new
native execution or mathematical acceptance credit. Closure verification
reconstructs the same exact source-only evidence set, detecting added,
removed or changed origins and retained markers.
Native result files may retain absolute prompt/log paths from the original
workspace. A relocated clone recognizes these only through that same frozen
origin and exact result/prompt markers, with the canonical path suffixes and
common original directory prefix checked. Unsealed author-result path checks
are unchanged; no result or operational path is rewritten.

After actual outside repair and metadata integration, use ordinary
`owner-recertify` before the first whole-stage certificate. Its research JSON
uses policy `native-created-step3-current-repair-v1` with version 1, matching
run/step 3/id, `owner_identity: "/root"`, a substantive `reason`,
`native_execution_credit: false`, `mathematical_acceptance: false`, the exact
`native_origin: {path, sha256}`, and `current_carriers` containing all six
actual current hashes. Supply
`review: {completed: true, no_unresolved_defect: true,
current_proof_suppliers_and_direct_consumers_checked: true}` only after that
review has genuinely happened. This is owner repair review, never a claim that
the original native worker reviewed changed bytes.

`repairs` is a nonempty ordered list of actual
`{author_identity, before_raw_sha256, after_raw_sha256, evidence: {path, sha256}}`
records. The chain begins at the authenticated native preimage and ends at the
current raw item; intermediate root normalization is a separate attributed
link. Each immutable report must name the run, item, actual `/root` or
`/root/TASK` author and both raw hashes. Contract-only maintenance may retain
equal source hashes but still requires current six-carrier binding and actual
review. Do not credit one repairer with another writer's work. Later maintenance
uses a new current-carrier recertification, retaining the original native origin
and a complete truthful repair chain.

The ordinary certifier and shared loader validate this origin and owner
recertification while preserving the native `author_result` and immutable
result/prompt evidence. A changed source, manifest or contract requires current
recertification, including before the first certification. Only this
authenticated original write reconstruction replaces the obsolete live-mtime
inference; no other native-origin or current-carrier check is relaxed. Existing
certification, independent review, judgment and full gate duties remain due.

After integrating the actual new item, manifest entry and contract entry, the
owner prepares a JSON attestation from retained evidence and records it with:

```sh
node tools/auditor-created-items.mjs owner-create --run RUN --step 3 --id ITEM --evidence research/ATTESTATION.json
```

The command validates and copies it to the immutable canonical origin file
`research/RUN-step3-owner-creation-ITEM.json`. It refuses to replace a different
origin. Recording alone does not run certification or advance the workflow.
The ordinary stage certification command consumes this class explicitly,
recording `evidence_class: "owner-spawned-creation"` and a raw-file hash link in
`owner_creation`; it records no `author_result` for this class.

Attestation fields are restricted to the following schema (placeholders must
be replaced with actual evidence; this is not a live receipt):

```json
{
  "version": 1,
  "policy": "owner-spawned-step3-creation-v1",
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
    "step3_subject_sha256": "CURRENT_HASH"
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
entry plus `__step4_page_id`; the contract projection is `contracts[ITEM]`, or
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
Step-5/8 promotion still requires its genuine dispatch and item-specific stage
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
node tools/auditor-created-items.mjs owner-source-archive --run RUN --step 3 --id ITEM --source research/ORIGINAL_SOURCE.json --owner-identity /root --reason "Actual reason for preserving historical escalation before owner resolution"
```

This narrowly supersedes the source-path-must-never-change rule only for the
exact source bound by the immutable Step-3 owner creation origin. The command
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

For a genuinely Step-3-created definition whose Step-3 item and manifest both
changed, an owner can explicitly authorize a current-content review when the
old manifest projection cannot be recovered. This grants no general manifest
exemption and never labels the unknown change metadata-only. The existing
Step-3 origin, immutable Step-3 home/batch and before hash, successful native
Step-3 review context, and current owner receipt all remain mandatory.

The research evidence uses the existing fenced `step3-manifest-repair` JSON
with policy `step3-manifest-repair-evidence-v1` and
`repair_kind: "current-definition-manifest-review"`. Supply the run, step 3,
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
basis `initial-step3-current-definition-manifest-review` and retains
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
`initial-step3-current-ball-lemma-manifest-review` and retains
`historical_delta_unknown: true`, without inventing native authorship or an
old manifest projection. Existing definition receipts keep their distinct basis.

## Current proof and manifest review with an unknown historical projection

For a genuinely Step-3-created proof item whose Step-3 manifest changed,
`current-proof-manifest-review` supports an explicit owner review when
the original manifest projection is unavailable. It is available to lemmas,
theorems, propositions and corollaries with a current supplied proof. Definitions
retain the separate `current-definition-manifest-review` branch. This is neither
a metadata-only classification nor a claim that a native worker authored the
current bytes.

Use the existing fenced `step3-manifest-repair` JSON, policy
`step3-manifest-repair-evidence-v1`, with run, step 3, id, unchanged page/batch,
`baseline_manifest_sha256`, `current_manifest_sha256`, full exact
`current_manifest_entry`, and `current_carriers` containing all six keys:
`guard_sha256`, `judge_sha256`, `item_file_sha256`, `manifest_sha256`,
`contract_sha256`, `step3_subject_sha256`. Set
`repair_kind: "current-proof-manifest-review"`, `historical_delta_unknown: true`,
and omit `baseline_manifest_entry`.

`owner_authorization` must contain `owner: true`, `owner_identity: "/root"`, and
the actual authority reason. Hash-bound immutable research `sources` must
collectively contain the run, item and exact authority reason and substantiate
the actual owner review. Never fabricate source reading. The genuinely
successful completed native Step-3 dispatch supplies only eligible stage/batch
context; the explicit owner receipt supplies current repair evidence. Genuine
Step-3 origin, immutable Step-3 baseline membership and unchanged home/batch
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
`basis: "initial-step3-current-proof-manifest-review"` and
`historical_delta_unknown: true`; certification preserves `origin_step: 3`.
Missing origins, changed baseline/home, incomplete current hashes, altered
source/check receipts, omitted suppliers/consumers or changed mathematical
context fail closed. Existing native write-window routes remain unchanged.

When the actual item bytes are unchanged from the immutable Step-3 baseline,
this same explicit full-review branch can cover a changed manifest (and any
current contract maintenance). Set `current_item_unchanged: true` in the evidence.
The tool verifies exact baseline/current raw item equality and records that
same truthful flag in the owner receipt. A real manifest delta, genuine original
Step-3 provenance, unchanged baseline home, completed native Step-3 context,
all six current hashes, full proof/supplier/consumer review and actual focused
checks remain mandatory. Historical manifest differences stay unknown; this
neither labels them metadata-only nor attributes a current item write to a
native worker. No artificial source edit is required. A no-delta subject cannot
enter this branch, and ordinary contract-only, known source-reference delta,
existing definition/special proof branches and Step-5 rules remain unchanged.

## Historical proof-context archives

A generic Step-3 current-proof recertification binds the guard hashes of its
suppliers and direct consumers. A later legitimate edit to those context items
must not erase the original proof review. Root may preserve retained actual
before-file bytes using an immutable sidecar:

```sh
node tools/auditor-created-items.mjs owner-context-archive --run RUN --step 3 --id SUBJECT --certification research/RUN-step3-auditor-certifications.json --context-id CONTEXT --source research/ACTUAL-BEFORE.md --owner-identity /root --reason "Actual reason for preserving the originally reviewed context"
```

Registration requires an existing generic proof-review owner receipt bound by
the actual certification row, its unchanged hash-bound evidence, and exactly one
context guard for `CONTEXT` in that evidence. Retained raw bytes must have that
item ID and guard. The command copies those bytes and the exact certification
bytes into read-only, exclusively created `research/` archives and records a
read-only sidecar binding run, subject, original receipt/evidence hashes,
certification hash, context ID/guard and archived raw hash. It never rewrites the
original certification, receipt, evidence, item or baseline. The sidecar's time
is the present archival observation, not the historical edit or review time.
Different existing archive bytes, outside paths, missing original links and
any tampered binding fail closed.

Existing archive filenames remain unchanged when their longest sidecar basename
fits the filesystem's 255-byte limit. Longer subject/context combinations use a
compact deterministic SHA256 stem derived from the full run, subject, original
owner-receipt hash and context ID. The receipt retains every full identity and
hash binding and full run prefix; shortening the filename changes no validation or
archival authority. An oversized run identifier is refused rather than truncating
the prefix used by scoped closeout ownership.

Only historical owner-receipt validation may use this sidecar when a live
context guard differs. Every other original provenance, home, carrier,
source and check requirement remains active. Ordinary current recertification
still requires live context guards and cannot use an old context archive as
current proof acceptance. After an actual new review, root records fresh
current evidence and recertifies changed carriers normally. This mechanism
preserves historical context; it creates no native result, mathematical
judgment, creation origin or gate waiver.

## Explicit native66 replay origin (version2 opt-in)

`native-created-step3-origin-evidence-replay-v2` records only the exact
`machine-learning-all-101-2026-10-19` native Alpha66 birth of
`lem-diffusion-objective-estimator-expectation`. It writes origin receipt
`native-created-step3-origin-replay-v2`, version2. Other runs/items/logs do not
match this case-bound policy. Version1 and its original actual-mtime capture
requirements remain unchanged. This route is provenance, never proof review,
mathematical acceptance, extra native coverage, or owner-created attribution.

Use the ordinary native-origin command with version2 and the usual baseline,
authentic successful immutable author result/prompt/log, original item and
complete metadata archives, original page/batch and six-carrier fields. Omit
`replay` and `native_metadata_capture`; do not construct fictitious old stats.
Instead supply `metadata_replay`:

```
{policy:"native66-heredoc-selected-metadata-v1",
 historical_manifest_mtime:"unavailable; exact native writes and root byte-identical restore used instead",
 restoration:{path,sha256}, manifest_before_restore:{path,sha256},
 source_inputs:[{id:SUPPLIER_ID,archive:{path,sha256}}, ...six actual suppliers]}
```

The complete original native log and four exact native source/metadata command
hashes are pinned. Restricted static shell/AST parsing reconstructs the literal
heredoc, both literal replacement chains, authored manifest entry and ENTIRE
helper contract. No logged Python/shell code is executed. The final derivation,
citation-use and boundary rebuild is reproduced. Citation strings are extracted
from the separately bound supplier archives and must also match successful
native supplier-read output before creation, with actual source/section identity.
The COMPLETE section is independently extracted between native source/section
boundaries and must equal the archived section; substring/truncated/cross-source
quotes cannot establish provenance. Exact immutable native result and original
batch66/page identities are independently pinned.
The claimed contract is only the comparison target, never replay input.

The F2 correction's compound command really exited1 because its later read-only
precheck rejected phase numbering. Its earlier straight-line literal writes and
exact `unchanged` reflow output are retained separately. The final native job
and later correction commands succeeded. This is not a false claim that each
compound command succeeded. A changed/ambiguous/incomplete/later command stream
fails the complete-log pin.

Native manifest/contract selected projections and full item bytes must equal
the retained archives and all six declared hashes. Complete metadata files are
retained, but no historical replay claim is made about their unrelated rows.
The genuine root restoration receipt must bind the exact whole manifest bytes
to its preserved pre-preparation archive and explicit byte-identical restore,
after native completion and before origin registration. Missing original
manifest mtime stays unavailable. Native source/metadata write provenance,
baseline exclusion and exact current initial item/manifest/contract linkage
replace that one unavailable timing basis for this opt-in case only.

Registration requires current selected carriers still equal the authenticated
birth carriers. Later actual outside changes use ordinary explicit owner
recertification, preserving native author identity and the complete truthful
repair chain. Initial/closure replay still requires the operational native log;
closure freezes origin, baseline, all metadata/source/quote/restore archives and
result/prompt markers. Frozen-log relocation handling is unchanged. Neither
origin registration nor recertification replaces native certification/gates.

The case-specific durable replay tests require the original operational log
and intentionally skip that operational fixture when the log is absent. Once
a real origin exists, they prefer its immutable native_item/native_manifest/
native_contract and six source-input archives over live source/carrier files;
later native Step4/5 edits cannot silently redefine the birth fixture. A
separate synthetic version1 native-window timing regression always runs.

Before live registration, `NATIVE66_IMMUTABLE_TEST_ORIGIN=PATH` can exercise
that same immutable-archive fixture branch using a prepared evidence JSON;
it is a test-only input and never overrides an existing real origin.
