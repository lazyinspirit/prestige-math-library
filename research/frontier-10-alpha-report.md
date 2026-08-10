# `frontier-10` — Alpha report

Alpha-frontier-10. Claude Opus 5, `xhigh`, build `alpha` role (owner,
2026-08-10). Kept current across stages; append, do not rewrite history.

## Stage 0 — step 3, scaffold breadth and depth review — **COMPLETE**

Output: `research/frontier-10-alpha-step3-scaffold-review.md`.
Scope: batches 1–8, twelve A/B pairs. Batch 9 excluded by dispatch; it gets its
own Stage-0 check when it lands.

**Result: 5 `sufficient`, 7 `insufficient`. No finding requires a page split.**

| pair | verdict |
|---|---|
| `symmetric-groups-and-the-sign-homomorphism` | sufficient |
| `matrices-and-the-matrix-of-a-linear-map` | insufficient |
| `the-structure-of-finite-abelian-groups` | insufficient |
| `free-products-and-amalgamation` | insufficient |
| `polynomial-rings-and-roots` | insufficient |
| `bounded-variation-and-riemann-stieltjes` | sufficient |
| `improper-integrals` | sufficient |
| `fubini-and-change-of-variables` | insufficient |
| `ramsey-theory` | insufficient |
| `plane-graphs-euler-and-the-five-colour-theorem` | sufficient |
| `categories-functors-and-natural-transformations` | insufficient |
| `group-actions-and-cayleys-theorem` | insufficient |

### The three findings that matter most

1. **F1, run-wide.** `def-finite-sum-in-a-commutative-monoid` and
   `lem-finite-sum-reindexing-and-fubini` are published at **order 203**, and
   batches 1, 3 and 8 cite them from orders 78, 52 and 42 — seven forward
   references, four of them on landmark theorems, none noticed by any Beta or
   gate. Batch 3's notes assert "Forward references kept: none", which is false
   against disk. Batch 8's two edges are avoidable immediately (redirect to the
   order-20 `def-sum-over-a-finite-index-set` it already cites). Batches 1, 3
   and 9 genuinely need a commutative-monoid-valued sum, and the clean remedy
   touches published content, so it is an **owner decision recorded as a
   blocker**.
2. **Batch 8 repeats the frontier-9 failure shape one section further on.**
   Conrad's *Group Actions* §6 is in the batch's own ledger and was not read; it
   carries Theorem 6.8 (Poincaré) and Corollary 6.4, both of which follow from
   machinery this page already builds. Two A items to add (27 → 29, no split),
   plus explicit dispositions for §6's remaining results.
3. **Three declines are invalidated by this run's own scope** — batch 3's
   "finite subgroups of units are cyclic" (batch 2 lands at order 40 < 52), and
   batch 7's Riehl Example 1.5.12 and determinant natural transformation (batch
   1 at 78 and batch 9 at 82, both far below 359).

### D2, routed to me explicitly

**Beta-7's claim survives scrutiny and the split does not fire.** I extracted
Riehl Ch. 1 and compared every numbered item against the 91 recorded rows;
§§1.1–1.5 and 1.7 are complete, the single unrecorded numbered item
(Definition 1.4.3) is scaffolded anyway as A item 43, and nothing was trimmed to
reach 60. **Both of my batch-7 additions are B-page items**, so the A page stays
at 60 and the D2 contingency split stays unarmed.

### Boundaries respected

Authored nothing. Edited no batch file, item, page or `plan-spec.json`. No
permission prompt raised; two blockers recorded instead (F1's owner decision,
and the not-yet-created `research/frontier-10-published-amendments.md`, which is
correctly deferred to the publishing commit).

### Verification method

Sources extracted and compared row-by-row against `coverage.json`: Brosnan
§3.14, Judson Ch. 14 structure, Conrad *Group Actions* (all six sections),
Conrad *Decomposition of Finite Abelian Groups*, Milne *Group Theory* Ch. 4,
Riehl *Category Theory in Context* Ch. 1, Diestel *Graph Theory* Ch. 4. Every
scaffolded dependency edge resolved from disk against `plan-spec.json` and
`library/`, and compared for reading order — that check is what surfaced F1.
`coverage-checklist.mjs` re-run over all twelve ledgers: 720 results, 0 errors,
0 warnings, confirming every finding above is invisible to the gate.

### Next action

Await the orchestrator's routing of findings to Beta-1, -2, -3, -5, -6, -7, -8
(batch 4 gets a non-blocking ledger correction; batch 9 gets two additional
determinant interfaces). **Re-check every `insufficient` pair before step 4
splices**, and run Stage 0 on batch 9 when it lands.

## Stage 1 — step 4, propagation — not started

## Stage 2 — step 6, whole-level audit — not started

## Stage 3 — step 8, judge adjudication — not started
