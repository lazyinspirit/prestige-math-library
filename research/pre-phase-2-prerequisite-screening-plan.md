# Pre-Phase-2 published direct-consumer screening

## Current owner direction — 2026-09-23

The owner has resumed screening and authorized ten GPT-6 Sol (high) reviewers to
audit all 1,017 selected items for fatal mathematical defects, including missing
prerequisites, invalid proofs, and inadequate or incorrect citations. They may
repair an assigned item locally when the repair is mathematically secure. An
uncertain or substantial defect is classified U-P in the canonical ledger.
For an actual or expected change to an original statement, classify its
downstream published consumers U-P as well. The root reviewer coordinates
ledger and downstream edits; reviewers own disjoint candidate item files and
write receipts. This direction supersedes the earlier pause and read-only
screening scope below.

## Completion checkpoint — 2026-09-23

All ten shards completed their assigned review: 1,017 unique ordered receipts
and ten final shard reports. The canonical ledger and all downstream impact
rows are reconciled. The [final review](pre-phase-2-screening/sol10-assignments/final-review.md)
records findings, repairs, current tallies, checks and the remaining
independent-certification gate. The earlier pause checkpoint below is retained
as historical selection evidence; it is no longer the active instruction.

The frozen candidate list is divided into ten disjoint, size-balanced shards in
`pre-phase-2-screening/sol10-assignments/`. Each reviewer must read `CLAUDE.md`
and `README.md`, inspect the item's exact statement and proof, verify any
needed supplier contract, and use authoritative sources where uncertainty
remains. Logical validity controls the decision. A search match alone is not a
defect. Record the item ID, exact evidence, disposition, changes, source scope,
and any statement-change/downstream concern. Local repairs must pass relevant
prechecks; changed content must not retain stale certification claims.

Prioritize pre-Phase-2 published items that could directly consume newly built
Phase-2 items. Do not scan the entire historical published census. Identify the
higher-risk candidate pool, report its size, then pause for the owner's next
instruction. Do not propagate to indirect consumers. The earlier request to
flag other potential fatal defects applies when a selected item's mathematical
content is eventually screened; this selection step makes no defect verdict.
Mathematical items, pages, dependencies, publication state and build state
remain read-only.

## Boundary and source inventories

The first Phase-2 scope-ledger baseline is commit
`52bba95d9bd8ede09e96f4b024d634cca38b0100`. Its published census has
15,014 items, all still published in the frozen current snapshot. The
post-boundary catalogue has 5,028 newly published items, including 369 recovered
outside the final manifest/run selection, and 49 separately labelled
preexisting published context items. The latter are not counted as new suppliers.
See `pre-phase-2-screening/inventory-summary.json`, `census.jsonl`, and
`suppliers.jsonl` for provenance and exact content hashes.

## Priority selection — completed

`pre-phase-2-screening/build-high-risk-candidates.py` uses the frozen census and
catalogue to produce `high-risk-phase2-candidates.jsonl` and
`high-risk-phase2-summary.json`. It selects a historical published item if it:

1. Declares or cites a newly published Phase-2-era item directly; or
2. Shares at least two distinctive supplier-ID terms with a newly published
   item in the same subject category, or three such terms across categories; or
3. Uses one exceptionally rare supplier-ID term in its title or a named proof
   invocation.

A distinctive term occurs in at most 100 historical items; an exceptionally
rare term in at most five. The matching text is the current title and
mathematical body through the proof, excluding remarks and source orientation.
Declared links are handled exactly and separately. The script validates the
current hash and publication status of every historical item before selecting.
The complete selection rule and each match are in the generated artifacts.

**Result: 1,017 unique candidates** out of 15,014 historically published items.
Forty have explicit references to newly published items. Another 977 enter by
concept matching; 25 of the 40 explicit-reference items also match concepts.
Thirty-two selected items already have bounded screening receipts from the
previous broad scan, leaving 985 selected items without a finalized receipt.
These are retrieval priorities, not proof-gap judgments. A search miss does not
certify that an omitted item cannot use a new supplier.

## Earlier screening history

Before the owner narrowed scope, 228 bounded receipts were validated across the
full census and five new U-P rows were entered into the canonical
`published-consumer-supplier-ledger.md` (current counts: U-P 1,365; U-C 0;
A-R 200; A-P 331). Those receipts keep their recorded scope. The prior
full-census worklist in `pending-topic-batches.json` is historical evidence,
not the active selection. Interrupted Terra assignments were not counted as
completed receipts or reconciled as new ledger findings.

## Pause checkpoint

Candidate identification and validation are complete. No selected-item
mathematical screening is authorized before the next owner instruction. When
resumed, use the saved candidate list, inspect each item's direct mathematical
use and relevant supplier contract, and preserve existing classifications.
Do not treat lexical matches as proof defects or add indirect consumers.
