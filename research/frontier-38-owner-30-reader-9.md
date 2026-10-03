# Reader 9 — batch 9, frontier-38-owner-30

Independent Step 5a mathematical review completed. This report records reader conclusions and local checks, not a judge decision or certification.

## Opened inventory

- `library/representation-theory/the-hook-length-formula-and-rsk-correspondence.md` (A).
- `items/def-hook-arm-leg-and-hook-length.md` (complete carrier opened).
- `items/lem-standard-tableau-removal-recursion.md` (complete carrier opened).
- `items/lem-hook-product-change-under-corner-removal.md` (complete carrier opened).
- `items/lem-hook-product-branching-identity.md` (complete carrier opened).
- `items/thm-hook-length-formula.md` (complete carrier opened).
- `items/def-row-insertion-and-bumping-route.md` (complete carrier opened).
- `items/lem-row-bumping-route-monotonicity.md` (complete carrier opened).
- `items/lem-robinson-schensted-recording-tableau-is-standard.md` (complete carrier opened).
- `items/def-reverse-row-deletion.md` (complete carrier opened).
- `items/lem-row-insertion-and-reverse-deletion-are-inverse.md` (complete carrier opened).
- `items/thm-robinson-schensted-correspondence.md` (complete carrier opened).
- `items/lem-first-row-insertion-basic-subsequences.md` (complete carrier opened).
- `items/def-column-insertion-for-distinct-letters.md` (complete carrier opened).
- `items/lem-row-and-column-insertion-commute.md` (complete carrier opened).
- `items/lem-word-reversal-transposes-the-insertion-tableau.md` (complete carrier opened).
- `items/thm-schensted-longest-increasing-and-decreasing-subsequence-theorem.md` (complete carrier opened).
- `items/thm-rsk-correspondence-for-two-line-arrays.md` (complete carrier opened).
- `items/cor-rsk-symmetry-under-inversion.md` (complete carrier opened).
- `items/cor-sum-of-squares-of-standard-tableau-numbers.md` (complete carrier opened).
- `items/cor-involutions-are-counted-by-standard-tableaux.md` (complete carrier opened).
- `library/representation-theory/the-hook-length-formula-and-rsk-correspondence-examples.md` (B).
- `items/ex-hook-table-for-shape-three-two-one.md` (complete carrier opened).
- `items/ex-hook-lengths-for-row-column-and-hook-shapes.md` (complete carrier opened).
- `items/ex-rsk-insertion-and-reverse-deletion.md` (complete carrier opened).
- `items/ex-rsk-for-involutions.md` (complete carrier opened).
- `items/ex-empty-and-singleton-rsk-boundaries.md` (complete carrier opened).

Published suppliers opened completely: `def-partition-young-diagram-and-conjugate-partition`, `def-removable-and-addable-nodes-of-a-partition`, `def-young-tableau-standard-tableau-and-shape`, `lem-largest-entry-of-a-standard-tableau-is-removable`, `def-polynomial-ring-over-a-commutative-ring`, `def-polynomial-degree-leading-coefficient-and-monic`, `def-polynomial-evaluation-and-root`, `prop-polynomial-degree-laws-over-a-commutative-ring`, `thm-root-bound-for-polynomials-over-a-domain`, `def-semistandard-tableau-and-kostka-number`, `def-finite-symmetric-group-and-permutation-notation`. `thm-standard-polytabloid-basis` was opened through its statement and initial facts (lines 1–75); the dimension clause used here is its exact statement, not a fresh audit of the straightening proof.

Batch proof contracts opened for citation mappings, step inputs, boundary evidence and routine entries. No rendered evidence bundle was located in the run state or current batch artifacts.

## Repairs made

- `ex-hook-table-for-shape-three-two-one`, Verification 2.1: replaced the false general formula `3-j` by `lambda_i-j`. All six numerical hook values are correct. Also included the omitted unit in the five-box product for `(3,2)`. Evidence: opened hook definition and direct coordinate evaluation.
- `ex-hook-lengths-for-row-column-and-hook-shapes`, Example: the n=2 family member is `(1,1)`, not `(2)`. Verification 1.2: nonexistent columns have height 0, not 1. Evidence: opened partition/conjugation definition.
- `thm-rsk-correspondence-for-two-line-arrays`, Knuth source locator: Theorem 1, printed p. 714, equation (2.8), is `x <= x' iff s >= s' iff t' > t`; checked visually in the primary PDF, including its complete proof and the subsequent constructions.
- `ex-rsk-for-involutions`: the original title called sizes 3 and 4 the smallest nontrivial examples, omitting size 2; changed it to “RSK pairs for two nonidentity involutions.” Verification 2.2 inferred every shape from only three shapes; replaced that inference by the actual limited conclusion needed here, that P=Q does not force a row shape.

## Evidence and current decisions

The hook branching argument is checked directly: row-hook multiset complement, first-column factors, interpolation over Q, coefficient cancellation, noncorner zero factors, and empty/r=1 cases. The distinct-letter insertion/deletion route invariants and recording tableaux are checked before their consumers. First-row basic subsequences supply both LIS bounds; reversal via row/column commutation supplies LDS. The repeated-letter theorem supplies its own weak-row invariants and inverse proof and uses the source-layer/bump-array argument for transpose interchange.

Sources consulted: [Craven](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf), printed pp. 7–13 (PDF pp. 9–15); [Knuth](https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf), printed pp. 712–720 (PDF pp. 5–13); [Abram–Reutenauer](https://arxiv.org/pdf/2303.16026), Theorem 3.1 and Sections 2–7, including the shared occupied/empty trail cases. Web output for the latter omitted part of p. 8; that full page was subsequently read from the downloaded PDF.

Additional carrier repairs:

- `thm-hook-length-formula`, Statement: restricted the row/column endpoint clause to `n>=1`. The published partition definition excludes trailing zeros, so `(0)` is not a partition; the empty case remains explicitly separate and unchanged mathematically.
- `ex-rsk-insertion-and-reverse-deletion`, Craven source locator: corrected the displayed example from printed p. 11 to printed p. 12 (PDF p. 14), checked directly against the primary PDF.
- `thm-robinson-schensted-correspondence`, Craven locator: corrected “deletion Algorithm 1.14 and bijection Corollary 1.15” to bijection **Theorem 1.14**, whose proof gives deletion on pp. 12–13; Corollary 1.15 is the sum-of-squares consequence.
- `lem-hook-product-change-under-corner-removal`, Craven locator: clarified that the cited p. 9 discussion updates **first-column** hooks; it does not state that every other hook is unchanged. The item’s general row-and-column update is derived from coordinates in its own proof.

The eight edited carriers remain present and draft. Neither page prose nor published content was edited. No withdrawal is proposed. No judge record was present in these eight carriers at the removal check, and none remains.

## Contract reconciliation

Edited only `research/frontier-38-owner-30-batch-9.proof-contracts.json` within the assigned contract scope. Updated derivation claims for the repaired proof steps and the affected endpoint evidence. Four quotations of the hook-formula statement in the two hook examples and `ex-empty-and-singleton-rsk-boundaries` were refreshed after adding the explicit `n>=1` endpoint qualification.

Also corrected confirmed false auxiliary boundary evidence in the assigned contracts:

- `lem-hook-product-change-under-corner-removal`, `boundaries[case=degenerate]`: only hooks outside `R_x` stay unchanged, not all remaining hooks; steps 2.1–2.3 distinguish them.
- `lem-row-insertion-and-reverse-deletion-are-inverse`, `boundaries[case=one]`: insertion into a one-box tableau can visit **two** rows when the input is smaller. The corrected evidence separates both inequalities, following the opened insertion rule. Its item carrier did not need repair.
- `cor-sum-of-squares-of-standard-tableau-numbers` and `cor-involutions-are-counted-by-standard-tableaux`, `boundaries[case=endpoints]`: row and column supply two distinct summands only for `n>=2`; they coincide at `n=1`, and `n=0` has just the empty partition. Both item carriers already give correct boundary counts and were left unchanged.
- `ex-hook-table-for-shape-three-two-one`: corrected the boundary step locators for corners and the smaller-shape arithmetic.
- `ex-hook-lengths-for-row-column-and-hook-shapes`: empty input is outside the stated domain, so marked that case not applicable; corrected the endpoint evidence to the column and `n=2` steps.
- `ex-rsk-insertion-and-reverse-deletion`: `(2,2)` is the row-2 endpoint and column-2 bottom, not an endpoint of the first row or column; the corrected evidence names the actual first and final deletion steps.
- `ex-rsk-for-involutions`: size one is outside these examples; replaced the mistaken “smallest” boundary account, corrected the shape evidence, and attributed the reverse implication to the opened corollary’s injectivity proof rather than equal counts.
- `thm-rsk-correspondence-for-two-line-arrays`: replaced irrelevant hook-identity boilerplate in the zero-size evidence by the empty-array identity in step 5.1.

After reconciliation, a whitespace-normalized comparison found every contract quotation in its actual source carrier, and every contract derivation claim matches its current numbered paragraph. These comparisons check textual correspondence; mathematical licensing was checked separately against the opened suppliers.

## Verification

All eight changed items passed their individual commands:

`node tools/tsx-run.mjs tools/reflow.mts items/<id>.md`

`node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`

Reflow reported each carrier unchanged. All prechecks exited 0. After the final item edits and formatters, one batched command checked all eight explicit changed paths:

`node tools/proof-layout.mjs items/lem-hook-product-change-under-corner-removal.md items/thm-hook-length-formula.md items/thm-robinson-schensted-correspondence.md items/thm-rsk-correspondence-for-two-line-arrays.md items/ex-hook-table-for-shape-three-two-one.md items/ex-hook-lengths-for-row-column-and-hook-shapes.md items/ex-rsk-insertion-and-reverse-deletion.md items/ex-rsk-for-involutions.md`

Result: **8 items, 58 steps, 0 defects**, exit 0. No item was edited afterward.

Independent Python checks, using direct insertion/deletion algorithms and dynamic-programming subsequence lengths, passed:

- All **5,914** permutations of sizes 0–7: insertion/deletion recovery, inversion symmetry, word-reversal transposition, and LIS/LDS lengths.
- **1,504** distinct increasing-tableau/input triples of initial sizes 0–5: row/column commutation.
- All **5,005** lexicographically sorted arrays of lengths 0–6 over the 3-by-3 pair alphabet: semistandardness, inverse recovery, and transpose interchange.
- All **272** partitions of sizes 0–12: hook formula against an independent corner-count recursion, and exact rational branching sums.
- The displayed six-letter insertion tableaux and recording positions, the two involution pairs, and the four size-3 involutions were checked directly. Hook recomputation gave `(3,2,1)` hooks `[[5,3,1],[3,1],[1]]`, product 45, count 16; the three removals have products 24,20,24 and counts 5,6,5.

The first combined computation stopped in its hook check because my zero-based hook formula omitted `-1`. I corrected that checking script; the separately rerun full hook check passed. This was a checking-code error, not evidence of an additional library defect. Finite enumeration supplements the proof review and is not a proof of the general theorems.

## Page verdicts

- `the-hook-length-formula-and-rsk-correspondence` (A): **no unresolved mathematical defect found after repairs**. Its summary agrees with the proved content. The hook branching identity, hook formula, Robinson–Schensted bijection, reversal/Schensted theorem, repeated-letter correspondence and transpose symmetry have the needed suppliers or explicit local derivations. The complex Specht dimension clause uses the exact published basis statement.
- `the-hook-length-formula-and-rsk-correspondence-examples` (B): **no unresolved mathematical defect found after repairs**. Its prose accurately summarizes the computations and boundaries; prose was read only. The corrected example carriers give the same counts and RSK outputs described on the page.

## Remaining findings and limitations

No confirmed or suspected mathematical defect remains to route outside the permitted repair scope, and no blocker remains. No published supplier defect was found in the portions used. All 25 assigned carriers and both page bodies were opened; the relevant published definitions, lemmas and polynomial proof arguments were read before their assigned consumers. The published polytabloid-basis theorem was consulted for its exact statement and initial facts only; its full straightening proof and deeper dependency closure were not independently audited. Secondary bibliography locators (Chan, Martin, Etingof and Schensted) were not exhaustively checked against every PDF; the primary Craven, Knuth and Abram–Reutenauer sections identified above resolve the substantive uncertainties. No library-wide audit or judge acceptance is claimed.
