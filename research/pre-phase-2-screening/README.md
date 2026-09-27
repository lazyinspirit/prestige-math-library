# Pre-Phase-2 direct prerequisite screening evidence

The governing [plan](../pre-phase-2-prerequisite-screening-plan.md) records the
owner's current scope: prioritize historically published items that could
directly consume newly built Phase-2 items, report the candidate count, then
pause. Later screening of selected items can also flag other potential fatal
defects. Flags require exact mathematical evidence and remain potential until
audited. No mathematical content, dependency metadata, page, publication stamp
or workflow state is edited.

## Inventories

- [census.jsonl](census.jsonl): all 15,014 items published at baseline
  `52bba95d9bd8ede09e96f4b024d634cca38b0100`, with historical and current hashes,
  current homes and initial ledger classification. All remain published.
- [suppliers.jsonl](suppliers.jsonl): all 5,028 post-boundary publications,
  plus 49 explicitly labelled pre-existing context items. Sixteen entries are
  explicitly not proved and cannot be used as proof supply. Contracts,
  assumptions, aliases, reference fields and full-body retrieval fallbacks are
  included; inventory membership is not proof certification.
- [supplier reconciliation](supplier-reconciliation.md): history and exact
  origins of 369 publications missed by the final manifest/run selection.
- [inventory-summary.json](inventory-summary.json): machine-counted inventory
  totals. Quoted YAML publication statuses are included.

## Screening and coverage

[high-risk-phase2-candidates.jsonl](high-risk-phase2-candidates.jsonl) is the
current priority worklist of 1,017 historically published items. Its
[summary](high-risk-phase2-summary.json) gives the exact counts and retrieval
rule; [builder](build-high-risk-candidates.py) reproduces both. The worklist
uses exact links and distinctive concept matches to newly published items.
Membership is not a defect verdict and omission is not mathematical clearance.
The older `pending-topic-batches.json` covers the whole census and is no longer
the active worklist.

[coverage-summary.json](coverage-summary.json) and [coverage.tsv](coverage.tsv)
distinguish finalized, bounded screening receipts from pending census items.
The census's original `screening_status: pending` is its initial snapshot;
use the coverage files for subsequent dispositions. A no-candidate receipt is
limited to its stated reading scope, not a mathematical certification.
The broader fatal-screening count is separate: earlier prerequisite-only pilots
do not retrospectively receive the expanded screening label.

[pending-topic-batches.json](pending-topic-batches.json) assigns every pending
item once, in page/topic batches of at most 25. Items with multiple homes receive
one owner. The 96 historically published items without current page homes are
retained in the census and worklist. A missing current home is not exclusion.
These are research worklists, not build-engine dispatches.

Search aids are explicitly **not** classification evidence:

- `direct-reference-signals.jsonl`: body/declared references to catalogue items;
  contextual old suppliers are distinguished from post-boundary publications.
- `anonymous-invocation-signals.jsonl`: a narrow pattern search for unnamed
  mathematical inputs in proof text outside the initial active index.
- `recorded-prerequisite-signals.jsonl`: declared uses of explicitly unproved
  records outside the initial active index. Orientation and adequate existing
  implicit suppliers must be distinguished from actual missing prerequisites.

No search hit automatically enters U-P and no search miss clears an item.
Existing confirmed findings are not downgraded into U-P to inflate discovery.
Historical indirect-impact rows are preserved; this scan adds no such rows.

## Reproduction and continuation

Run from the repository root:

```bash
python3 research/pre-phase-2-screening/build-inventories.py
python3 research/pre-phase-2-screening/build-signals.py
python3 research/pre-phase-2-screening/build-high-risk-candidates.py
python3 research/pre-phase-2-screening/reconcile-receipts.py
```

The scripts write only this evidence directory. The inventory builder preserves
the initial census classes and refuses to overwrite a census whose bound
consumer content has changed. Later changed content requires a new snapshot.
The receipt reconciler verifies literal passages, consumer and supplier hashes,
historical eligibility, ledger uniqueness and published status before rebuilding
coverage. Add new finalized receipt files to its explicit source list; do not
count assignments, partial readings or source searches as completed receipts.

Candidate mathematical evidence belongs in the existing
[canonical ledger](../published-consumer-supplier-ledger.md), with one active
row per item. Operational coverage and pending work stay here. Reconcile a
candidate only after checking the exact proposed direct use and any adequate
local or published justification. Source reading must state its actual scope.
