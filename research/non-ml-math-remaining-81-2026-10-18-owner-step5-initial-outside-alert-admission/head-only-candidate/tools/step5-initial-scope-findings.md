# Native initial-scope finding work requests

`step5-initial-scope-findings.mjs` is an optional, explicit owner route for a genuine original Step5.1 `record-open-finding` about an existing draft original-frontier item which is not otherwise selected for Step5.2 work. Admission grants an assignment for actual current review and smallest necessary repair. It grants no mathematical acceptance, independent review, judge verdict, adjudication decision, extra review round, new item, published repair authority, threshold change, or gate exemption. Unrequested native findings do not automatically become repair targets.

The registry is `research/RUN-step5-initial-scope-findings.json`. Only the recorder creates it, before the first impact pack or impact dispatch, at a paused, drained `5.1-adjudicate` boundary. The recorder archives the actual current runtime state and exact native owner request bytes under `research/RUN-step5-v2/initial-scope-findings/{creation-state,owner-request}.json`, binds their raw bytes, and rejects a caller-supplied creation archive. Creation does not require a collection that has not yet run. It preserves all original handoffs; genuine mechanical zero-work units retain their nonmathematical meaning.

Owner request schema, before root supplies actual bindings:

```json
{
  "version": 1,
  "kind": "owner-confirmed-native-initial-scope-findings",
  "run": "RUN",
  "authorized_by": "owner",
  "owner_identity": "/root",
  "native_coverage_adopted": false,
  "recorded_at": "ACTUAL_REQUEST_DATE",
  "original_count": 0,
  "bindings": {"research/ACTUAL_FILE": "ACTUAL_RAW_SHA256"},
  "entries": [{
    "id": "ORIGINAL_DRAFT_ID",
    "batch": "ORIGINAL_AND_CURRENT_UNIQUE_OWNER",
    "unit": "ORIGINAL_NATIVE_INITIAL_UNIT",
    "open_finding_index": 0,
    "finding": {"EXACT": "ORIGINAL_INDEXED_REPORT_FINDING_OBJECT"},
    "output_finding_index": 0,
    "output_finding": {"EXACT": "ORIGINAL_FINAL_OUTPUT_FINDING_OBJECT"},
    "route": "frontier-owner",
    "current_guard_sha256": "ACTUAL_CURRENT_ITEM_GUARD",
    "source_read": {
      "native_log_record": "EXACT_SUCCESSFUL_EXEC_RECORD_FROM_ORIGINAL_NATIVE_LOG",
      "source_excerpt": "EXACT_SOURCE_TEXT_IN_ITS_RETURNED_OUTPUT_AND_CURRENT_ITEM"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "ACTUAL_INDIVIDUAL_REVIEW_DATE",
      "reason": "ACTUAL_CURRENT_ROOT_REASON_AT_LEAST_40_CHARACTERS",
      "evidence_file": "research/ACTUAL_ROOT_REVIEW_EVIDENCE",
      "proposed_edits": [{"source_excerpt": "EXACT_UNIQUE_CURRENT_TEXT", "proposed_replacement": "EXACT_PROPOSED_TEXT"}]
    }
  }]
}
```

The sample is deliberately incomplete and must not be installed as a registry. Use `candidate_patch_file` with a bound nonempty research patch instead of `proposed_edits` when appropriate. Never invent a source-read observation, a review date, an earlier source excerpt, a missing native status, or an old acceptance.

`bindings` contains actual raw hashes for: original `frontier.json`, `baseline.json`, `step4-verdicts.json`, `initial-1.json`; every original initial report and genuine stable successful result; every worker result's exact immutable `.attempt-N.result.json`; all current run manifests (to establish unique current ownership); selected units' immutable prompt and log; and every individual root evidence/patch file. All bindings resolve to regular nonsymlink files physically inside research. The recorder adds its actual creation archives. The root owns hash computation and review. There is no Luna-keep prerequisite: the frozen verdict ledger is historical input, not work admission authority.

All original initial units must remain present, with exact identity and initial-pack input digest. Worker executions require original Sol6.1/high Codex success, clean completed terminal summaries and stable result bytes identical to their immutable successful attempts. Selected-unit prompt headers must identify the run, role, label, covers, output report and frozen input digest. Their immutable log's final `codex` JSON before `tokens used` must have the correct native report identity. Final output summaries and saved reports can differ in detail: each exact indexed raw finding is retained separately, with matching item/action/frontier-owner intent/uncertainty. Routes must be identical except for the authenticated historical pair: saved report `Owner / owning frontier lane; item outside this assignment.` and final output `Owner / owning frontier lane; outside this assignment.`. This one pair preserves the same owning-frontier work route; both complete raw objects must still exactly match their separately bound report/output objects. No native object or owner request is rewritten. Do not require fictitious equality between a short native final summary and the full saved report.

The full saved finding must name `canonical-defect-ledger`, `record-open-finding`, fatal or nonfatal severity, `uncertain:false`, and the owning frontier route. The historical route strings `Owner / owning frontier lane; item outside this assignment.` and `Owner / owning frontier lane; item outside this assignment, not separate outside-frontier maintenance.` are recognized only as frontier-owner routing aliases; their exact original text stays in the finding object. The exact historical route spelling `frontier-owner; outside unit N assignment` is also recognized only when N is a positive decimal unit number equal to the authenticated native initial unit for that finding. The original report/output objects retain the entire route string. A mismatched unit, altered punctuation, noncanonical number, arbitrary suffix or outside-frontier route is not admitted. An existing status must be `open`; absent status, defect_type or source_excerpt is not synthesized. No count-of-open-findings restriction is imposed. A successful original native source-read record must return a literal excerpt still present in the root-guarded current draft carrier. Individual root confirmation follows the actual native completion and supplies current exact edits or a bound patch.

After root installs the reviewed adapter at the authorized paused/drained boundary, the native owner route is:

```bash
node tools/step5-workflow.mjs record-initial-scope-findings --run RUN --authorization research/ACTUAL_OWNER_REQUEST.json
node tools/step5-workflow.mjs check-initial-scope-findings --run RUN
```

The read-only check can run at paused/drained5.1. Ordinary `prepareImpact` first runs the existing native `collect(initial,1)` and then validates the registry against the actual collection's initial-pack, report and stable-result bindings. This is a separate check from creation: do not bind a collection that does not exist yet. Actual planning is allowed at drained `5.2-impact` even when unpaused; the authenticated archived creation boundary supplies the earlier pause requirement. An active writer or earlier impact freeze/dispatch fails closed.

Only explicit request IDs are unioned into the ordinary ordered/disjoint repair targets. The frozen pack carries them separately as `initial_scope_findings`; it preserves the original `reader_concerns` array. Both admissions' supporting evidence pass through `frozenSupportingEvidence`, merging without replacement and archiving mutable manifest preimages through the established route. Tasks cite original native findings and current root work instructions and require ordinary current review, with no new adjudication decisions.

The first genuine Step5.2 owner lane for each admitted item is also recorded in the existing combined `reader_concern_owners` map. The origin loop sees the separate finding array as well as reader concerns; it preserves authentic first-owner session origins and subsequent same-reviewer consumer obligations. `readerConcernSession` already uses this combined map; it needs no change. No Step4 reader concern or original reader evidence is fabricated.

After the first impact pack freezes, ordinary pack reuse checks the registry's exact raw binding and rejects addition, deletion, mutation or symlink substitution. Current repair collections also verify its frozen input evidence through the existing machinery. No later registry expansion is allowed. Existing source currency, propagation, worker execution, consumer maintenance, certification, rejudgment, fatal threshold and final gate requirements remain in force. Root must install/reload only at a paused/drained5.1 boundary, independently review code and bind the actual inputs, then use the ordinary native workflow.

## Opt-in version 2: structured initial outside-lane alerts

Version 1 and its exact open-finding/default guards are unchanged. Version 2
may retain those entries and additionally admit an entry with
`origin_kind: "native-outside-lane-alert"`. This branch supplies work only; it
never turns a native alert into a canonical open finding, severity, adjudication
decision, acceptance or native full-reading observation.

Replace the open-finding fields for this typed entry with `outside_alert_index`,
`alert`, `output_alert_index`, and `output_alert`. They preserve the two exact
objects at `repair_notes.outside_lane_alerts[INDEX]` in the original saved report
and authenticated successful immutable execution's final structured message.
The saved object has exactly `id`, `path`, `route`, `affected_use`, and `reason`.
The final object has those fields, optionally omitting `path`; a present path
must match. Both routes must literally be `frontier owner`, both IDs must name
the requested original draft item, and the full path must be `items/ID.md`.
Both affected-use and reason texts must contain at least 40 trimmed characters.
No string-alert conversion, arbitrary routes, guessed output, absent report,
or canonical-finding fields are allowed.

The item must be absent from every original initial assignment and remain at
its exact original baseline/initial/current mathematical guard. Original and
current unique manifest ownership and the exact original Luna `keep:true` verdict
remain mandatory; it is never rewritten as a reject. Root supplies
`owner_review.outside_alert_correspondence` with `confirmed_same_alert:true`,
literal `report_excerpt` and `output_excerpt` (at least 20 characters each in
the respective affected-use/reason fields), and an individual explanation of
at least 80 trimmed characters. Short native final summaries are retained
verbatim rather than inflated to equal the saved report.

This branch deliberately does not claim native full-source reading. Its
`source_read` has `mode:"owner-current-source-confirmation"`,
`native_full_read_adopted:false`, a bound `before_file` containing the complete
exact current raw source, its `before_raw_sha256`, and a literal
`source_excerpt` of at least 20 characters present in that source. Root's actual
individual full-source confirmation adds `full_current_source_read:true` and
`source_raw_sha256` to `owner_review`, alongside the existing dated root
confirmation, bound evidence and reason. Native-log record/span fields are
not accepted in this branch. Root supplies nonempty exact `proposed_edits`;
a candidate patch alone does not suffice. The source is still unchanged at
registry admission. No repair or mathematical acceptance is preapplied.

All versions retain every original native handoff, frozen frontier, baseline,
verdict and current manifest binding; exact Sol6.1/high immutable result, prompt
and final-output authentication; paused/drained 5.1 recorder-created archives;
first-impact-freeze and dispatch exclusion; actual initial collection binding;
and frozen-registry currency. Normal native 5.2 current review/repair, owner
session origins, consumer propagation, certification, Sol judgment and gates
remain due. The typed entry travels in the same separate
`initial_scope_findings` work array, never as a fabricated Step4 reader concern
or a rewritten initial decision.

Version 2 additionally recognizes only the observed unclassified open-finding
shape with `origin_kind:"native-open-finding"`. Keep `open_finding_index`,
`finding`, `output_finding_index` and `output_finding`, each preserving the exact
indexed original report/output object. The saved object has exactly `ledger`,
`action`, `id`, `route`, `locus`, `finding`, `minimality`, `uncertain`,
`source_urls` and `familiar`; the output may omit only `locus`. Require
`canonical-defect-ledger`, `record-open-finding`, `frontier-owner`, matching ID,
`items/ID.md#Definition` locus, `uncertain:false`, `familiar:true` and empty
`source_urls`. Finding/minimality texts are at least 40 trimmed characters.
Native severity and reason are absent and must not be synthesized.

The individual root review instead supplies `open_finding_correspondence`
with `confirmed_same_finding:true`, exact report/output excerpts and an
explanation under the same literal/length guards as the alert witness. Its
separate `classification` has `severity:"fatal"` or `"nonfatal"`,
`defect_type:"logic"` and an actual root reason of at least 40 trimmed
characters. This classification is a current root work request, never a
rewritten native finding or adjudication decision.

Both typed branches are limited to unassigned unchanged original-frontier draft
definitions with the original Luna keep verdict. Both require exact full
current-source snapshots, root full-source confirmation and literal edits as
above. A version-2 entry without `origin_kind` retains only the unchanged
version-1 native open-finding branch; other type values are rejected.
