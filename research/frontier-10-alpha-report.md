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

## Stage 0, second pass — re-check + batch 9 — **COMPLETE**

Appended to `research/frontier-10-alpha-step3-scaffold-review.md` under
`## Re-check (post-repair)`. The original verdicts were not rewritten.

**7 of 8 repairs resolved; 3 pairs still short, each by a named amount.**

| pair | verdict |
|---|---|
| `matrices-and-the-matrix-of-a-linear-map` | resolved |
| `the-structure-of-finite-abelian-groups` | resolved |
| `free-products-and-amalgamation` | resolved |
| `polynomial-rings-and-roots` | resolved |
| `fubini-and-change-of-variables` | resolved |
| `ramsey-theory` | resolved |
| `categories-functors-and-natural-transformations` | resolved |
| `group-actions-and-cayleys-theorem` | **still insufficient** (R2) |
| `gaussian-elimination-and-row-reduction` (new) | **insufficient** (R3) |
| `determinants-of-matrices-over-a-commutative-ring` (new) | **insufficient** (R4) |

Count correction to my own first-pass summary line: it said "five sufficient,
seven insufficient"; the table said four and eight, and the table is right. The
dispatch's "seven" is the number of pairs owing a *Beta repair* — pair 2 was
`insufficient` for F1 alone, which the owner's re-home resolved without a Beta
edit. Nothing was lost.

### F1 fully closed, verified the way it was found

Re-ran the dependency-resolution check that surfaced F1, with the re-home
applied: 579 in-run items against 2,895 mapped published items,
**0 unresolved dependencies and 0 forward references in every batch**.
`coverage-checklist.mjs`: 14 pages, 875 harvested results, 0 errors, 0 warnings.

### R1 — a step-4 blocker in the re-home that nobody owns

The receipt checked the moved items' dependency **orders** (all 5.3–24 < 46).
`validate-plan.mjs` also enforces `undeclared-prereq` against the **transitive
closure of declared `requires`**, and `rings-subrings-and-integral-domains`
declares only `divisibility-gcd-and-bezout`, whose 12-page closure omits
`finite-counting-and-binomial-coefficients` (order 20) — home of
`def-finite-cardinality`, `def-sum-over-a-finite-index-set`, `thm-product-rule`
and `thm-sum-rule`. Four `undeclared-prereq` errors the moment the re-home
lands. One-line remedy; `research/frontier-10-splice.mjs` unions `requires` for
in-run pages only, so it will not do this by itself.

The receipt's two open follow-ups both came back **clear**: no forward wikilinks
in either moved item, and no positional prose claim falsified — including the
source page's paragraph-1 summary sentence, which the move makes more apt rather
than false.

### R2, R3, R4 — what goes back

- **R2, batch 8.** Two of fifteen Conrad §6 declines name a home that does not
  exist ("the later permutation-group development", "the structural study of
  subgroup coverings"), and both are 3–4 line corollaries of theorems on the
  page: Theorem 6.6 from item 29 (Cauchy–Frobenius), Theorem 6.10 from item 17
  (`thm-conjugate-subgroups-are-counted-by-the-normalizer`). Theorem 6.9's reason
  ("not consumed by this pair") is not a permitted ground. Add 6.6 and 6.10
  (29 → 31 A items, no split); include 6.9 or rewrite its reason.
  Everything else on this pair landed, and **Beta-8's one disagreement is
  upheld** — my suggested citation of `ex-a-four-has-no-subgroup-of-order-six`
  would have been both a forward edge and a citation into a B-page leaf (order
  45 from order 43). Its self-contained replacement is correct.
- **R3, batch 9 / gaussian.** A page complete; B page has no witness for the
  explicit "over an infinite field" hypothesis of
  `cor-solution-count-trichotomy-over-an-infinite-field` ($x+y=0$ over
  $\mathbb F_2$ has exactly two solutions). Plus `canonical` disposition rows for
  LU factorisation and the rank normal form, which appear in no source's
  `contents` at all — rows, not items.
- **R4, batch 9 / determinants.** The cofactor/adjugate/Cramer deferral is
  **licensed by the plan**, not invented: order 84 is titled "The Determinant of
  a Linear Operator, Cofactors and Cramer's Rule". Ring-level source backing is
  genuine (New's MATH 146 works over a commutative ring throughout). Two asks: a
  witness that $\det$ is not additive, marking multilinearity's boundary; and the
  decline naming the nonexistent page `invertibility-and-adjugate` corrected to
  order 84.

The ring-versus-field boundary the dispatch asked me to check is **right**:
Beta-9 shipped `cor-invertible-matrix-has-unit-determinant` as the ring-level ⟹
half and `thm-real-square-matrix-invertible-iff-determinant-nonzero` as the real
specialisation, declining unprompted to state "nonzero" over a ring. The
ring-level converse needs the adjugate, which lives at order 84, and no in-run
consumer needs it. `symmetric-groups-and-the-sign-homomorphism` carries
everything the Leibniz route needs, cited at the exact items that consume it.

### Boundaries respected

Authored nothing. Edited no batch file, item, page or `plan-spec.json`. No
permission prompt raised; R1 recorded as a blocker instead.

## Stage 0, third pass — final re-check of the three repaired pairs — **COMPLETE**

Output: `## Final re-check` in
`research/frontier-10-alpha-step3-scaffold-review.md`.
Scope: batch 8 (R2) and batch 9's two pairs (R3, R4) only; the other eleven were
settled in the second pass and I reopened nothing.

**All three read `resolved`. Stage 0 is complete and step 4 may splice.**

| pair | verdict |
|---|---|
| `group-actions-and-cayleys-theorem` (R2) | resolved — non-blocking ledger correction L2 |
| `gaussian-elimination-and-row-reduction` (R3) | resolved |
| `determinants-of-matrices-over-a-commutative-ring` (R4) | resolved |

- **R2.** `thm-jordans-derangement-theorem` (A 31, after Cauchy–Frobenius) and
  `thm-conjugates-of-proper-subgroup-do-not-cover-finite-group` (A 18, after the
  normalizer count) are built at the positions I named, with Conrad §6 harvest
  rows naming the exact ids, `literature-derived`/`ai-altered` provenance, and
  proof contracts on the routes I gave — including the one-conjugate and
  trivial-subgroup boundaries. A page 29 → 31, 37 with the published items. All
  nine §6 headings now disposed.
- **R3.** `cex-solution-count-trichotomy-fails-over-a-finite-field` (B 8 → 9)
  marks the one explicitly hypothesised theorem on the page; both required
  `canonical` rows for LU and the rank normal form exist, in the `canonical`
  list rather than inflating a source's `contents`.
- **R4.** `fs-determinant-is-additive-on-matrices` (B 6 → 7) is the page's first
  `false-statement` and marks the one false inference multilinearity invites;
  `invertibility-and-adjugate` has 0 occurrences on disk and the decline now
  names `the-determinant-of-a-linear-operator` (84).

**L2, non-blocking, same class as L1.** Batch 8's Theorem 6.9 decline is now
checkable — and checking it, the named home `monoids-groups-and-subgroups` (24)
carries no index material; `def-index`, `thm-lagrange` and `cor-index-tower-finite`
live on `cosets-and-lagranges-theorem` (32). The substance of the reason is
correct and only the page id is wrong. It changes no item; I verify it at step 6
with the rest of the harvest-faithfulness check.

**R1 is closed as a step-4 blocker**, verified from disk rather than taken from
the dispatch: `research/frontier-10-splice.mjs` carries the
`rings-subrings-and-integral-domains` → `finite-counting-and-binomial-coefficients`
entry in `EXTRA_REQUIRES` and hard-errors if that page is absent from the spec,
which is the case that matters since no batch manifest contains it.

Verification this pass: full dependency resolution over 583 in-run items against
2,895 published items with the re-home applied — **0 unresolved, 0 forward
references**; `coverage-checklist.mjs` 14 pages / 877 results / 0 errors;
`gates.mjs --step 0` **CLEAR**; every decline reason in all nine ledgers
re-scanned for page-id claims, with no nonexistent home remaining; all four new
items read in full.

### Boundaries respected

Authored nothing. Edited no batch file, item, page or `plan-spec.json` — only
this report and my own scaffold review. No permission prompt raised.

## Stage 1 — step 4, propagation — not started

## Stage 2 — step 6, whole-level audit — not started

## Stage 3 — step 8, judge adjudication — not started
