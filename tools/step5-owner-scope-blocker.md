# Step-5 explicit native scope-blocker supplement

`loadOwnerSupplement` in `tools/step5-workflow.mjs` accepts a separate
`version: 2`, `kind: "step5-owner-scope-blocker-supplement"` variant at the existing
`research/RUN-step5-v2/PHASE-ROUND-owner-supplement.json` path. Version 1's
uncertain-blocker predicate and all ordinary repair and collection gates remain
unchanged. This variant applies only to an original successful Sol 6.1/high
adjudication whose report honestly left an assigned confirmed-fatal defect open
because the necessary direct algorithm/definition supplier was outside its scope.

The original report must have no `completion` field or blockers, an unchanged
`unaffected`, non-uncertain review, the original confirmed-fatal decision, and
exactly one matching canonical `record-open-finding` proposal with `status: open`,
`severity: fatal`, the same `defect_type`, and its supplier ID. Its
`repair_notes.status` is `blocked_by_assigned_file_scope`, `repair_complete` is
false, and `minimal_supplier_repair` gives `path`, `section: Definition`, distinct
`source_excerpt`/`proposed_replacement`, and `justification`. Do not modify the
original report to fit this schema.

The supplement retains the existing fields:

- `run`, `phase` (`initial` or `repeat`), numeric `round`, string `unit`,
  `pack_sha256`, exact original `rejection` tuple;
- `authorized_by: owner`, `reviewed_by: root`, concrete `authorization` of at
  least 40 characters, and ISO `completed_at` after native completion;
- `original_report: {path, sha256}` and `dispatch: {path, sha256}` using absolute
  native report/result paths and SHA-256 of their exact file bytes;
- nonempty `supporting_evidence` mapping research paths to raw-byte SHA-256;
- `scope`, `reviews`, one original-classification-preserving `decisions` entry,
  and `source_reading` as described below.

Version 2 additionally requires:

- `required_supplier`: the exact supplier ID in the original open finding;
- `open_finding_sha256`: SHA-256 of `JSON.stringify(originalFinding)`;
- `minimal_supplier_repair_sha256`: SHA-256 of
  `JSON.stringify(originalReport.repair_notes.minimal_supplier_repair)`;
- `original_attempt: {path, sha256}` binding the exact original
  `.attempt-N.result.json` (identical in content to the bound result), and
  `dispatch_prompt: {path, sha256}` binding its original native prompt;
- `creation_state: {path, sha256}` binding an immutable archived runtime state
  under `research/`;
- `expected_review_ids`: sorted, unique exact review inventory recomputed from
  the repaired supplier and assigned blocker, plus every current frontier direct
  consumer of each actually changed Statement/Definition. Continue recursively
  only when a consumer's own Statement/Definition changes.

Both the live and archived creation states must be drained, at the exact native
adjudication stage, with the matching successful original dispatch attempt. The
creation archive must be paused and bind the exact `step5-wave-evidence` failure
`confirmed defect not repaired ID`. Live state may resume and retire that blocker
for native gate retry. The archive does not authorize another dispatch or
controller transition; ordinary owner gate permission remains required.

`scope` contains one `{id, role: blocker, reason}` and exactly one
`{id: required_supplier, role: prerequisite, reason}`. Every other entry has
`role: direct-consumer`, an actual changed/direct supplier in `supplier`, and
an item-specific `consumed_clause`. Every reason and consumed clause has at least
40 characters. Scope IDs must equal `expected_review_ids`; all are existing draft
frozen-frontier subjects. The prerequisite must actually supply the blocker.
The blocker must declare that prerequisite in `deps`. Its Definition and carrier,
and the blocker's own carrier, must genuinely change
from the frozen assignment. A supplier-only change cannot waive the blocker's
own repair requirement. Outside consumers retain ordinary maintenance ownership.

Every scope ID has one genuine current root review, with `reviewed_by: root`,
`disposition: repaired|unaffected`, `uncertain: false`, a substantive `reason`,
nonempty `source_urls`, `familiar`, and exact current `post_sha256`,
`review_context_sha256`, `item_sha256`, and `context_sha256`. The first two hashes
come from `step5-workflow.mjs review-contexts`; the latter two use the current
judge context. Reviews and the root decision cite URLs present in
`source_reading`, whose entries require HTTPS `url`, `full_text_reviewed: true`,
and concrete `reason` and `read_extent` of at least 40 characters each. Record
actual complete relevant proof reading and actual current mathematical reviews.

Collection preserves native reviews, decisions, downstream inventory and ledger
proposals separately. Version 2 also preserves the native repair notes and exact
finding/proposal digests as `native_scope_blocker`. Root reviews are separately
attributed; the original fatal outcome/type and fatal counts remain. There is no
new native execution or judge credit, no waiver of carrier changes, and no
replacement for recertification, rejudgment, consumer maintenance or later gates.

## Completed native repair with a separate open result supplier

A distinct `version: 3`, `kind: "step5-owner-extra-supplier-supplement"` variant
uses the same supplement path and common root authorization, identity,
report/result/attempt/prompt, current review, decision and full-text source-reading
fields. Versions 1 and 2 keep their existing conditions. Version 3 applies when
the genuine native assigned repair is complete but its report separately routes
one explicit fatal open finding about an unassigned direct proved supplier.

Version 3 requires `required_supplier`, zero-based `open_finding_index`, and
`open_finding_sha256` binding the complete literal original
`ledger_updates[open_finding_index]` with SHA-256 of `JSON.stringify`. The native
entry must be the report's sole canonical `record-open-finding`, with
`id: required_supplier`, `status: open`, `severity: fatal`, valid fatal type,
`uncertain: false`, and substantive literal `source_excerpt`, `affected_use`,
`minimality` and `route`. The original assigned confirmed-fatal decision stays
unchanged in outcome/type; its original review must say `repaired` with a changed
carrier hash, and native `repair_notes` must say `assigned_repair_complete` and
`repair_complete: true`. Neither native report nor pack is rewritten.

Additional bindings are `creation_state: {path, sha256}` and
`supplier_before: {path, sha256}`, both immutable research archives. The creation
state must show the exact native stage paused and drained, the same successful
original dispatch attempt, null stage `gatesPassedAt` and `doneAt`, and no
stage-local gate-failure blocker. This is the original pre-gate boundary;
no failed gate is required. Live collection retains exact stage, drained writers
and successful original-attempt guards while allowing native resume. Ordinary
owner gate authorization and every native gate remain required.

The supplier preimage must match both the frozen pack's guard and Statement
hash, and its Statement must contain the exact native defective `source_excerpt`.
The current supplier must genuinely change its Statement and carrier, remove
that excerpt, and contain an actual numbered Proof. Its kind must be theorem,
lemma, proposition or corollary; open problems and source-only substitutes cannot
supply this route. The originally assigned consumer must declare the supplier in
`deps` and retain a genuine carrier repair from the pack baseline.

Use one `scope` entry with `role: assigned-consumer` for the original assigned
subject, exactly one `role: prerequisite` for `required_supplier`, and
`role: direct-consumer` for the remaining affected subjects. `expected_review_ids`
and scope must equal the exact sorted current inventory, recursively propagating
through every actual Statement/Definition change from the frozen pack. Every
entry receives a genuine current root mathematical review with all four current
hashes and the common full-text reading evidence. A later consumer proof repair
may make its original native review stale; the root's current review is distinctly
attributed and the original observation stays intact. Necessary supplier and
consumer repair ownership remains with the actual supplier repairer.

Collection retains the original separate finding and native repair notes in
`native_extra_supplier_finding`, and records the supplier in
`owner_resolution.extra_supplier`. This grants no new native execution, judge
verdict or fatal classification; the original fatal count and all repair,
consumer maintenance, rejudgment and certification obligations remain.
