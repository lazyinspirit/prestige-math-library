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

All original initial units must remain present, with exact identity and initial-pack input digest. Worker executions require original Sol6.1/high Codex success, clean completed terminal summaries and stable result bytes identical to their immutable successful attempts. Selected-unit prompt headers must identify the run, role, label, covers, output report and frozen input digest. Their immutable log's final `codex` JSON before `tokens used` must have the correct native report identity. Final output summaries and saved reports can differ in detail: each exact indexed raw finding is retained separately, with matching item/action/frontier-owner intent/uncertainty. When both routes are present, they must be identical except for the authenticated historical pair: saved report `Owner / owning frontier lane; item outside this assignment.` and final output `Owner / owning frontier lane; outside this assignment.`. This one pair preserves the same owning-frontier work route; both complete raw objects must still exactly match their separately bound report/output objects. No native object or owner request is rewritten. Do not require fictitious equality between a short native final summary and the full saved report.

An original final-output finding may omit `route`, `uncertain`, or both. Such an abbreviated object remains admissible only with the same exact item, ledger and action as the definite full saved finding, an actual `reason` of at least 40 characters after trimming, and an individual root correspondence witness. A present `uncertain` must be `false`; a present route must satisfy the unchanged route-pair rule. An explicit conflict is never treated as an omission. Do not insert missing fields into the native summary. For this branch, `owner_review.summary_correspondence` must contain `confirmed_same_finding:true`, `report_excerpt`, `output_excerpt`, and a concrete `reason` of at least 80 characters after trimming explaining the same issue and its actual source-read observation. Both excerpts must be at least 20 characters: the first must occur literally in the full finding's `reason`, `affected_use` or `minimality`, and the second in the actual summary's `reason`. The existing dated individual root confirmation, bound review evidence and current source observation remain mandatory. This is owner-confirmed work admission from two authentic records, never native review acceptance or an inference that omitted metadata proves certainty.

The full saved finding must name `canonical-defect-ledger`, `record-open-finding`, fatal or nonfatal severity, `uncertain:false`, and the owning frontier route. The historical route strings `Owner / owning frontier lane; item outside this assignment.` and `Owner / owning frontier lane; item outside this assignment, not separate outside-frontier maintenance.` are recognized only as frontier-owner routing aliases; their exact original text stays in the finding object. The exact historical route spelling `frontier-owner; outside unit N assignment` is also recognized only when N is a positive decimal unit number equal to the authenticated native initial unit for that finding. The original report/output objects retain the entire route string. A mismatched unit, altered punctuation, noncanonical number, arbitrary suffix or outside-frontier route is not admitted. An existing status must be `open`; absent status, defect_type or source_excerpt is not synthesized. No count-of-open-findings restriction is imposed. A successful original native source-read record must return a literal excerpt still present in the root-guarded current draft carrier. Individual root confirmation follows the actual native completion and supplies current exact edits or a bound patch.

The exact historical spelling `frontier owner, batch N; outside this dispatch item assignment` is recognized only when N is a positive decimal batch number equal to the entry's authenticated unique original/current frontier owner batch. It is not compared to the dispatch unit, and a different batch is not admitted. This alias changes only the saved-finding route guard; exact native report/output authentication remains mandatory. An abbreviated final-output finding lacking metadata needs the separate individual root correspondence witness just described and is not admitted by this alias alone.

To avoid copying a native command/output transcript into a new request, `source_read` may use `native_log_span:{"start_byte":0,"end_byte":0,"sha256":"ACTUAL_SPAN_SHA256"}` instead of `native_log_record`; the zero offsets here are placeholders and are invalid. The two formats are mutually exclusive. Offsets are safe integers into the authenticated original unit log's UTF-8 bytes, with an exclusive end, positive span length and no split UTF-8 character. The validator reconstructs the span from that bound log and verifies its exact hash; no caller-selected log path is accepted. A span may end just after the literal source excerpt. The reconstructed text must still begin with the original `exec` record, identify the actual item source in its command, contain the original successful-execution marker, and return the literal excerpt that is also present in the current guarded source. The legacy literal-record format retains those same checks. No command in either form is executed during this observation check.

After root installs the reviewed adapter at the authorized paused/drained boundary, the native owner route is:

```bash
node tools/step5-workflow.mjs record-initial-scope-findings --run RUN --authorization research/ACTUAL_OWNER_REQUEST.json
node tools/step5-workflow.mjs check-initial-scope-findings --run RUN
```

The read-only check can run at paused/drained5.1. Ordinary `prepareImpact` first runs the existing native `collect(initial,1)` and then validates the registry against the actual collection's initial-pack, report and stable-result bindings. This is a separate check from creation: do not bind a collection that does not exist yet. Actual planning is allowed at drained `5.2-impact` even when unpaused; the authenticated archived creation boundary supplies the earlier pause requirement. An active writer or earlier impact freeze/dispatch fails closed.

Only explicit request IDs are unioned into the ordinary ordered/disjoint repair targets. The frozen pack carries them separately as `initial_scope_findings`; it preserves the original `reader_concerns` array. Both admissions' supporting evidence pass through `frozenSupportingEvidence`, merging without replacement and archiving mutable manifest preimages through the established route. Tasks cite original native findings and current root work instructions and require ordinary current review, with no new adjudication decisions.

The first genuine Step5.2 owner lane for each admitted item is also recorded in the existing combined `reader_concern_owners` map. The origin loop sees the separate finding array as well as reader concerns; it preserves authentic first-owner session origins and subsequent same-reviewer consumer obligations. `readerConcernSession` already uses this combined map; it needs no change. No Step4 reader concern or original reader evidence is fabricated.

After the first impact pack freezes, ordinary pack reuse checks the registry's exact raw binding and rejects addition, deletion, mutation or symlink substitution. Current repair collections also verify its frozen input evidence through the existing machinery. No later registry expansion is allowed. Existing source currency, propagation, worker execution, consumer maintenance, certification, rejudgment, fatal threshold and final gate requirements remain in force. Root must install/reload only at a paused/drained5.1 boundary, independently review code and bind the actual inputs, then use the ordinary native workflow.
