# Frontier 29 — Step 8 closure recovery, group g, rejudge round 1

## Outcome

Handled all four exact current rejection tuples owned by group g: one
`confirmed_fatal`, two `confirmed_nonfatal`, and one `false_positive`. Only the
fatal Rice--Shapiro item was edited. No published item or other group's content
was changed, and no cross-group alert was needed.

## Exact outcomes

| item | context_sha256 | outcome | evidence and disposition |
|---|---|---|---|
| `cex-cook-levin-enumerates-all-branches` | `f83adb0a28c878949c2998cf70a644244e21d81cdb3f6d05bbeaff904348e3bf` | `confirmed_nonfatal` | The two cited constraint items name the cell, start, accept, and transition families, and their proof constructions generate those families cell-by-cell and window-by-window. Making the branch-free loop explicit is an immediate bridge. The item now refutes the actual enumeration slogan and its satisfying assignment records only the accepting branch, so no content changed. |
| `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs` | `282154623706b28e46cf048a766c42a56e2235fb3202de7a7aafe7fc990e3f9d` | `confirmed_nonfatal` | The quoted constraint lemma states the enforcement direction, while its displayed construction makes the converse check immediate: a legal accepting tableau satisfies the start literals, accept disjunction, and every clause forbidding an illegal local pattern. This is a one-line proof bridge, not a false implication or witness. No content changed. |
| `lem-majority-error-bound-from-chebyshev` | `d29a4237b879fb08625f7e2db4ca6c9c33ff0ffa2b5077163381f38b039ad3d5` | `false_positive` | In this library, `def-bernoulli-and-binomial-random-variables` defines Bernoulli variables through finite real random variables on finite probability spaces, and the family-independence definition places the variables on one common space. Their finite sum is therefore in the exact domain of `thm-chebyshev-inequality`. |
| `thm-rice-shapiro-positive-information-direction` | `2e1967f45e53c7a16d50f922276c304d9e2a7cc04711166588baded9e5aa5dcc` | `confirmed_fatal` | The theorem allows a recognizable language over any finite alphabet, but step 1.2 enumerated only binary words. For a nonbinary input alphabet the asserted staged union need not be `A`, so the later `L(N_x)=A` case was not established. The repair fixes `A`'s finite alphabet `Sigma` and dovetails over `Sigma*` in length-lexicographic order. |

All four adjudications were appended with their pre-edit guard hashes to
`research/frontier-29-judge-adjudications.jsonl`.

## Licensed repair and defect row

The exact fatal adjudication for
`thm-rice-shapiro-positive-information-direction` carries pre-edit guard hash
`2dbf7b561349c66c4cc28d08d1756c4c90a439dd6c62036f2da2f2f0ec7528c9`.
It licenses the single proof-step repair above. The matching defect row is
`frontier-29-A8R1-g-001`, appended through `tools/defect-ledger.mjs append`
from `research/frontier-29-alpha-g-step8-rejudge-round-1-ledger-rows.json`.
The repaired contract entry was regenerated in the batch-18 contract and the
merged proof contract was refreshed.

## Rejudge target

The only rejudge target is
`thm-rice-shapiro-positive-information-direction`. The engine owns the durable
cycle decision and any targeted judgment; this dispatch initiated no judge
cycle.

## Cross-group alerts

None. The rejection checks did not expose a defect in another group's item.

## Checks

- Focused precheck: the repaired item passed in stored `direct` phase form.
- Focused render check: the repaired file passed YAML, delimiter, and KaTeX
  validation.
- Focused strict proof-contract check: 1/1 item checked with zero errors and
  zero warnings.
- Batch-18 citation fidelity: 72 citations over 30 authored items; no missing
  quote and no widening candidate.
- Dependency check: exited successfully with no cycles, unresolved references,
  or draft item on a published page; it retained 375 pre-existing advisory
  warnings.
- Defect-ledger validation and exact adjudication coverage: 480 frontier-29
  rows checked with zero errors at validation time.
- Step-8 guard: all 126 whole-run changes were licensed by exact fatal
  adjudications or an allowed repair path.
- Step-8 scope check: seven groups and 755 items partitioned, zero cross-group
  alerts, and 29 open rejection rows owned outside this completed group at
  validation time.

No external source lookup was needed in this recovery round: the four decisions
were resolved by the current items and the exact local definitions and theorem
interfaces they cite.

## Blockers

None within group g. The remaining run-wide rejection rows reported by the
scope check are owned by other groups.
