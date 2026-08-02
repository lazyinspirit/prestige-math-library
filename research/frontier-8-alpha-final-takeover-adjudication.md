# Frontier 8 — final late-rejudge Alpha takeover

## Scope and method

This supplementary Alpha pass reviewed every previously unadjudicated unique
`{id, model, context_sha256}` rejection in the final pair-wide rejudge ledger:
28 exact candidate triples. Retry rows with the same triple were deliberately
adjudicated once. Each outcome was checked against the current item and cited
dependency text before appending to
`research/frontier-8-judge-adjudications.jsonl`. No content, contract, plan,
page, judge configuration, publication state, or Git state was changed.

## Outcomes

| outcome | count |
| --- | ---: |
| confirmed fatal | 1 |
| confirmed nonfatal | 24 |
| false positive | 3 |

The 30-second policy was applied: the 24 nonfatal outcomes are real local
fidelity or proof-support issues, but each is closable by a competent reader
within that threshold and does not make its statement false.

## Blocking fatal

- `thm-baire-category-for-complete-metric-spaces` — Terra,
  `4fe0e9420141f1c047c6ec75dec6bcb02f84afdb32fc32b06fc433c3fc906ba9`.
  Its public title says that *a complete metric space* cannot be the stated
  countable union. `def-metric-space` permits the empty metric space and
  `def-complete-metric-space` makes it complete; taking every closed set to be
  empty refutes the title. The item's Statement correctly assumes nonemptiness.
  This is therefore a fatal, overstrong public title, not merely a proof gap.

Per the final-adjudication instruction, I stopped before any repair or receipt
work. The parent must authorize and run the repair/rejudge sequence before
Step-10 closure can continue.

## Fresh-pair rejudge after the authorized title repair

The complete `approximation-and-compactness-in-ck` A/B pair (29 items in this
revision) was rejudged concurrently under newly hash-attested, identical
DeepSeek V4 Pro and Terra contexts. Alpha then adjudicated all 25 new exact
rejection triples: 2 fatal, 22 nonfatal, and 1 false positive. The two fatal
rows are the same defect detected independently by both judges:

- `thm-baire-category-for-complete-metric-spaces`, new hash
  `792802a0a88ea37e8dc4b53346f6ebfa8d62b20be1a83d86a4d5a9d0bf7b7df2`.
  Its Statement still omits the Axiom of Dependent Choice while Step 2.1 uses
  it. `def-dependent-choice` explicitly says that no theorem assumes DC
  silently. Thus the just-fixed nonempty title is now correct, but the public
  theorem remains overstrong in the library's declared foundational setting.

The Baire title repair impact receipt was independently completed and validated:
`research/frontier-8-final-baire-title-impact-audit.json`. I stopped again
before a further repair, as required by the frozen-context sequence.

## Fresh-pair rejudge after the authorized Baire/DC repair

The same complete 29-item A/B pair was again rejudged with both lanes on fresh,
identical hash-attested contexts. Alpha adjudicated all 28 new exact rejection
triples: 2 fatal, 25 nonfatal, and 1 false positive. The two fatal rows are the
same propagated defect, independently detected by Terra and DeepSeek:

- `thm-nowhere-differentiable-functions-are-dense-in-c01`, hash
  `61eaf117343301f1fc74781c2225189a2a589d8bae7f352a87c8491e2b1ee8d2`.
  Its load-bearing Fact L5 now cites Baire under DC, but its own public title,
  Statement, and Given do not assume DC. It therefore asserts a choice-free
  result from a conditional dependency.

The DC-repair impact template remains unresolved only for that exact consumer,
as documented in `research/frontier-8-final-baire-dc-impact-finding.md`. No
repair was made after this frozen judge/adjudication pass.

## Final closure after the authorized propagated-DC repair

The exact consumer was then repaired by a fresh Beta author under the frozen
post-Baire/DC context, and the complete 29-item A/B pair was rejudged again in
both hash-attested lanes. Alpha adjudicated every current rejection triple
from that final rejudge: 30 in total, comprising 29 `confirmed_nonfatal` and
1 `false_positive`. No current fatal adjudication remains.

The two interface-change impact receipts now validate:

- `research/frontier-8-final-baire-dc-impact-audit.json` records the repaired
  dependent choice consumer.
- `research/frontier-8-final-nowhere-dc-impact-audit.json` records that the
  propagated correction has no further affected public consumer.

Final deterministic closure checks passed on current disk:

- `spine-audit` validated the unchanged receipt (66 proof-bearing items in
  the top 100 transitive consumer cones).
- `level-coverage --verify-current-context` validated all 227 scoped items,
  190 proof contracts, 860 manifest relationships, and 227 complete paired
  judge contexts.
- `risk-report --require-reviewed` passed after Alpha recorded the completed
  high-risk review of
  `ex-distance-functions-form-a-compact-family-in-c01` in its proof contract.

The audit-coverage receipt now explains all 41 authored-versus-planned
dependency deltas and contains Alpha's current-disk attestation. No
mathematical content was changed during this final closure stage.
