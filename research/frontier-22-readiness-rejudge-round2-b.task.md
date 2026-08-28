# Step 10 readiness recovery — group b post-repair adjudication, round 2

Resume the group-b adjudication you just completed. The exact current pending
set is `research/frontier-22-readiness-rejudge-round2-closure.json`: seven
`unadjudicated_rows`, all on batch 2 and all produced by the targeted
post-repair Terra replay.

For each exact tuple, read the current item, the matching judge row, and every
cited dependency needed to decide it. Append exactly one guarded outcome to
`research/frontier-22-judge-adjudications.jsonl`. Repair only
`confirmed_fatal` batch-2 items, keep every run-owned status `draft`, remove
stale judge stamps, synchronize batch-2 and merged proof contracts, and append
defect-ledger rows through the normal interface. Do not alter the canonical
judge-closure receipt and do not rejudge.

The seven objections concern: the missing reverse minimal-prime argument, two
undeclared `k`-is-a-field assumptions, two missing prime-radical hypotheses,
the missing first-uniqueness dependency for isolated components, and one
proof-step citation tag. Decide each independently; do not assume the last is
nonfatal merely because it is a tag objection.

Run focused precheck/render/strict-contract/citation/risk checks and
`git diff --check`. Write a new report at
`research/frontier-22-alpha-b-readiness-rejudge-round2.md` with all seven
outcomes and the exact repaired ids needing replay.
