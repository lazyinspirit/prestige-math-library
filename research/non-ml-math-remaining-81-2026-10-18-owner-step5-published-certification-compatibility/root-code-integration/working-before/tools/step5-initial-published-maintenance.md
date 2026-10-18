# Initial published maintenance history

This optional bridge handles an existing scope mismatch: published carriers are
excluded from initial adjudication assignments, while immutable original
`frontier_ids` still contain selected published IDs. A necessary ordinary
published repair must not be fabricated into a native adjudication/review to
satisfy that old subject inventory.

The bridge authenticates historical publication and actual current corrections
only. It supplies no native review, decision, audit, judge verdict, mathematical
acceptance, publication, certification or gate waiver. Original packs, baselines,
frontiers, rejected tuples, all reports/results/attempts and review contexts are
unchanged. Every actual draft consumer still owes normal current native review.

## Immutable receipt and creation

Root supplies an explicit research request and invokes, only at the actual
paused/drained `5.1-adjudicate` owner hold:

```
node tools/step5-workflow.mjs record-initial-published-maintenance --run RUN --authorization research/ACTUAL_REQUEST.json
node tools/step5-workflow.mjs check-initial-published-maintenance --run RUN
```

The recorder requires no initial collection or first impact pack/dispatch to
exist. It captures exact actual runtime `state.json`, native
`owner-gate-request.json`, and owner-request bytes itself under
`research/RUN-step5-v2/initial-published-maintenance/`. Caller-provided creation
archives and future dates are rejected. It writes the nonoverwriting receipt
`research/RUN-step5-v2/initial-1-owner-published-maintenance.json` only after all
validation and boundary rechecks.

The request has `version:1`, `kind:owner-initial-published-maintenance`, `run`,
`phase:initial`, `round:1`, `authorized_by:owner`, `owner_identity:/root`, actual
`recorded_at`, `owner_gate_request_id`, original frozen `original_count`, a
concrete `reason` of at least 80 trimmed characters, `historical_only:true`,
`current_review_granted:false`, `native_execution_coverage_adopted:false`,
`bindings`, nonempty `entries`, `manifests`, `metadata_carriers`,
`claims_snapshot_file` and `ledger_snapshot_file`. No count is hardcoded.

`bindings` gives raw SHA-256 values for regular nonsymlink research evidence:
original frontier/baseline/Step4 verdicts/initial pack; every original report and
successful stable result; every nonempty unit's matching immutable attempt,
prompt and log; source before/current snapshots; old/new receipts and their
original before files; root scientific evidence; and all metadata/claim/ledger
snapshots. The recorder adds its creation archives. Do not bind mutable shared
canonical manifests, claims or the whole published ledger directly: bind durable
snapshots. Native logs authenticate only the actual structured last message and
identity; this grants no source-reading coverage and consumes no session journal.

All original units must match the frozen pack, original batches and successful
creation-state dispatches. Nonempty units require actual Sol6.1/high Codex clean
completion, exact stable/immutable result bytes, prompt/output identity, full
attempt identity and timestamps. Mechanical zero-work units remain explicitly
nonmathematical and have no invented reader or decision.

`manifests` covers every original batch exactly, using
`{path:"research/RUN-batch-N.pages.json",archive:"research/ACTUAL_CURRENT_SNAPSHOT",sha256:"RAW_HASH"}`.
Creation/current collection compares these to actual live bytes; historical
reuse retains the snapshots when later native work legitimately changes a
manifest. Their original per-batch item inventories remain frozen.

## Ordinary recorded successors

Each default `recorded-successor` entry (the type may be omitted) contains:

```
{
  "id": "EXISTING_PUBLISHED_ID",
  "before_file": "research/EXACT_INITIAL_BEFORE.md",
  "current_file": "research/EXACT_CURRENT_SUCCESSOR.md",
  "prior_receipt": {"path":"research/ORIGINAL_RECEIPT.json","sha256":"RAW_HASH"},
  "current_receipt": {"path":"research/NEW_DISTINCT_RECEIPT.json","sha256":"RAW_HASH"},
  "original_claim": {"EXACT":"UNCHANGED ORIGINAL CLAIM OBJECT"},
  "root_repair_file": "research/ACTUAL_ROOT_CONFIRMATION.json",
  "consumer_dispositions_file": "research/ACTUAL_SAME_OWNER_CONSUMER_CHECKS.json"
}
```

Both endpoints retain ID/kind/published/proved status. Before must match the
initial pack and baseline guard and original interface hash. Current must be a
real mathematical change. The item was never assigned in the original native
initial wave. Entries may also cover necessary existing published suppliers or
consumers outside the frozen subject list, provided their original carrier is
in the actual full initial snapshot. They acquire no native subject ownership.

The unchanged published-repair policy must accept **both** original and current
endpoints. Keep the original receipt file and original canonical ledger marker
unchanged; create a distinct new receipt and append a distinct marker. The new
receipt preserves original claim/group/pre-hash and includes
`previous_repair:{path,sha256}` exactly equal to the entry's prior reference.
It also binds actual scientific evidence:

```
"owner_maintenance": {
  "root_repair": {"path":"research/ACTUAL_ROOT_CONFIRMATION.json","sha256":"RAW_HASH"},
  "consumer_dispositions": {"path":"research/ACTUAL_CONSUMER_CHECKS.json","sha256":"RAW_HASH"}
}
```

All ordinary publication provenance, original claim, before/current guard,
ledger, actual current precheck/rendercheck and timing checks remain mandatory.
No audit/verified/judge/source-review stamp may be added or refreshed. Removing
stale stamps is allowed. The archived ledger contains exact retained old/new
marker blocks; later unrelated appends do not refresh or invalidate them.

Root confirmation is version 1 with `run`, `id`, `authorized_by:owner`,
`reviewed_by:root`, actual `repairer:/root/SCIENTIFIC_OWNER`,
`confirmed_defect:true`, actual `reviewed_at`, exact before/current raw hashes,
`native_execution_coverage_adopted:false` and a concrete reason of at least 80
trimmed characters. Actual current local checks follow that confirmation.

Consumer evidence is version 1 with `run`, `supplier`, the same scientific
`reviewer`, `full_affected_scope_checked:true`,
`native_execution_coverage_adopted:false` and `items`. Each item has `id`,
`disposition:sound|repair-proposed|repaired`, and concrete `affected_use`/`reason`
of at least 40 trimmed characters. At current creation, every old/current direct
consumer of a changed public interface must be present. The scientific owner
still traces actual additional indirect effects and records them honestly;
metadata cannot establish mathematical correctness. Do not preapply draft
consumer edits to evade their ordinary native ownership.

## First ordinary repair of an audited necessary example consumer

Only the separately typed `origin_kind:first-recorded-consumer-repair` branch
admits a before carrier without a prior recorded repair. It is limited to an
existing audited **example**, with its entire Example/Statement/Definition public
sections and title unchanged. Its before carrier must equal a full authentic
ancestor root Git publication committed before its fresh ordinary pre-edit
claim, as well as the initial/baseline source guard. It cannot introduce a prior
repair that never happened.

Replace `prior_receipt` with
`prior_publication:{commit:"FULL_COMMIT",path:"items/ID.md",before_raw_sha256:"RAW_HASH"}`.
The new ordinary receipt uses this exact before archive/claim/pre-hash, supplies
`prior_publication_commit`, and binds the same object as `previous_publication`;
`previous_repair` is absent. Existing ordinary policy must accept the real first
repair through the genuine original audit. All current checks, evidence and
claim guards above remain mandatory.

`consumer_of` names a supplier maintained by the default successor branch in the
same receipt, its exact original selected-published Luna rejection object, literal
before/current use excerpts of at least 40 characters, and a concrete necessity
reason of at least 80 characters. Both consumer endpoints must explicitly depend
on that supplier. The supplier is in the original frontier with its unchanged
original Luna `keep:false`; the child and supplier share the actual scientific
repairer, and the supplier's consumer evidence identifies this child as
`repair-proposed` or `repaired`. No native child finding or rejection is invented.
This narrow branch does not authorize arbitrary first repairs or new publication.

## Source-backed metadata and historical native reviews

`metadata_carriers` is an explicit array (possibly empty) of
`{path,before_file,current_file}` for changed current batch manifests. Only
source-backed title/deps/justified_by/dependency_level mirrors for the listed
published endpoints may differ. Full item/page inventories and all other fields
remain unchanged. Every current published row is checked against its complete
source mirror, so an omitted dependency change cannot hide behind another
corrected field. Existing native supporting hashes resolve to their authenticated
old manifest archive, never rewritten reports or refreshed old evidence.

Only a sealed, validated bridge passed by native collection can exclude these
exact current published guards from the inappropriate draft repair/adjudication
counter. Its exclusion set cannot be enlarged by mutating returned objects.
Unknown changed published subjects, deletions, status changes or invalid lineage
still fail the original validation. Default behavior with no receipt is unchanged.

Collection's `post` remains actual current input. Original consumer reviews and
contexts remain exact historical native rows. Existing external supplier
change/restatement/impact computation and normal `prepareImpact` route draft
consumers into actual 5.2 review. Existing context closure requeues every stale
review before certification. Proof-only changes preserve valid v3 interface
contexts; changed supplier interfaces do not. No old review hash is recomputed.
The original published items remain outside native certification/Sol judgment.

## Optional empty justification mirrors

For the optional SCHEMA field `justified_by` only, an absent value and an empty array denote the same empty edge set. Current published manifest mirrors may retain their existing `justified_by: []` when the actual source omits it, or omit it when the actual source explicitly has an empty array. No source field needs to be added just for presence equality.

An explicitly recorded manifest empty/absent normalization remains limited to authenticated published IDs and source-backed empty endpoints; its exact old/current raw archives are preserved. Nulls, strings, objects and nonempty arrays receive no empty normalization. Every other mirrored field, native historical byte/hash, source, receipt, original claim and ordinary publication guard remains exact.
