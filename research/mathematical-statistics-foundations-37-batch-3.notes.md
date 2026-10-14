# Batch 3 authoring notes — Loss, Risk and Decision Theory

## Design control and conflicts

The owner direction makes `research/plan-mathematical-statistics-track.md`, MSF-03 at L84, the controlling design. It gives the five planned items and their scope, including the stated hypotheses for the posterior-risk and randomization theorems. The requested MSF-03 mention in `research/plan-statistical-models-experiments-track.md` at L50 is a downstream category interface that lists only `def-loss-function-and-risk` and explicit risk comparisons; it is not a competing inventory or proof route. The controlling plan therefore governs, as directed by the owner.

`research/plan-spec.json` matches the assigned A/B page IDs, titles, kinds, category, orders, and declared page prerequisites. Its empty item arrays are pre-authoring projections, not an item-inventory conflict. The batch assignment adds two local helper lemmas needed to prove the planned theorems completely. The A definition of Bayes/minimax risk also makes the action space nonempty and specifies the product and Borel sigma-algebras, so the minimax rule class is nonempty and joint measurability has an exact meaning.

## Inventory, logical dependencies, and levels

The batch manifest has seven A items and four B items. The A items are:

| Level | Item |
|---:|---|
| 0 | `lem-finite-dimensional-integral-jensen-for-convex-loss` |
| 2 | `lem-prior-and-model-kernel-define-joint-law` |
| 3 | `def-loss-function-and-risk` |
| 4 | `def-risk-domination-and-admissibility` |
| 4 | `def-bayes-and-minimax-risk` |
| 4 | `thm-randomization-does-not-improve-convex-action-loss` |
| 5 | `thm-bayes-rule-minimizes-prior-risk` |

The B items are `ex-squared-error-risk-for-bernoulli-observation` (level 4), `ex-zero-one-loss-randomization-minimax` (level 5), `ex-data-rule-dominates-constant-rule` (level 5), and `cex-open-action-set-no-minimizer` (level 6). Their direct dependencies and item levels are in the batch manifest. The item graph across batches 1–3 has 27 items, no cycles, and no label errors. Both pages are below the 100-item cap.

The dispatched batch level is 2 with prerequisite batches 1 and 2; the supplied scheduling input was `d165107ef5fc480b2659948091c971e5577c7f55b976c525bd9cde1bcdc4d09e`. This batch's completed manifest differs from that pre-authoring input. The final read-only recomputation gives input hash `492e77133331727c674b41f4fa2bbd2326bd3137ea6985d474b77816790fb622` and still assigns batch 3 level 2 with prerequisites 1 and 2; `batch-dependency-levels.mjs check` reports the stored run schedule stale. The owner/engine must refresh scheduling metadata before a later transition. The full-run item-level check also encountered unrelated empty scaffold inventories and invalid dependency declarations. The scoped batches 1–3 level calculation passes; no other pair's files were changed.

The read-only Autopilot status remains at `1-scaffold`, with nothing in flight. At its latest snapshot it still lists batch 3 as missing; no engine transition or state edit was attempted.

## Supplier statements, proofs, and axiom use

I read the actual MSF-01 and MSF-02 bodies for `def-statistical-experiment`, `def-parametric-statistical-model`, `def-parameter-measurable-statistical-model-as-markov-kernel`, `def-statistic-and-estimator`, `def-randomized-procedure-as-a-markov-kernel`, and the complete `lem-procedure-action-law-is-measurable` proof. The parameter-kernel supplier requires eventwise measurability as well as probability-measure sections; the risk definition uses the actual iterated action-kernel integral and its proven measurability. The randomized-rule supplier does not assert an auxiliary-random-seed representation.

I also checked the actual expectation, measurable-space, product-sigma-algebra, kernel-integration, product-section, simple-approximation, monotone-convergence, null-integral, nonnegative-integral, convexity, separation, supporting-hyperplane, subgradient, RCD and disintegration supplier bodies and proofs used by the carriers. In particular, the disintegration theorem is for standard-Borel parameter/data spaces and states its Axiom-of-Choice assumption. The page-level conditional-expectation prerequisite and its definitions were read. The proof of the prior/model joint-law lemma uses event sections, kernel integration, countable additivity and monotone convergence; it does not assume a density or a common dominating measure.

No declared supplier is absent. The cross-batch dependency file records the actual MSF-01/MSF-02 page and item interfaces, with `open` status for independent review. That review status is not represented as acceptance.

The finite-dimensional integral-Jensen helper assumes AC and Countable Choice for its supporting-hyperplane/subgradient route; the randomization-removal theorem inherits those assumptions. Its boundary argument now handles a supporting functional that is nonnegative only on the full-measure support by applying the zero-integral theorem separately to its nonnegative positive and negative parts. The Bayes theorem assumes AC for standard-Borel disintegration and supplies a measurable posterior minimizer on one measurable full-measure set; it does not select a minimizer. The joint-law construction and finite worked examples are choice-free. No other axiom branch is used.

## Source reading and history

The A and B coverage entries record two independent full-text lecture-note treatments: Ryan Martin, *Lecture Notes on Advanced Statistical Theory*, complete §§5.1–5.3, PDF pp. 100–110, and Peter Hoff, *Statistical Decision Problems*, complete 13-page note with §§4.1–4.3 and §5 inspected, PDF pp. 7–13. Their URLs, locators, harvested headings, item mappings and dispositions are in `research/mathematical-statistics-foundations-37-batch-3.coverage.json`.

Martin's Theorem 5.2 is not used as printed: it omits hypotheses needed for the action expectation. The local statement supplies closed convex finite-dimensional actions, finite first moment, and the barycenter-in-action condition, and its proof uses the local integral-Jensen lemma. Hoff's §4.3 Theorem 1 has the same P2 expectation on both sides and is not used. Hoff's constant-estimator example is not a domination claim; the B page verifies domination directly in a two-point Bernoulli experiment. No source was dropped, no retrieval failed, and no recovery retry or owner escalation was needed. The two URLs were stamped on first retrieval; the final fetch check verified all four page-source entries (two URLs listed for each page).

## Scoped checks and readiness

- `precheck.mts`: all 8 proof-bearing items passed, 0 failures.
- Strict `proof-contract.mjs`: all 11 contracts passed, 0 errors and 0 warnings.
- `content-policy.mjs`: 11 items, 0 errors and 0 warnings.
- Focused `depcheck.mjs`: 11 assigned items; 683 prerequisite items and 132 pages in the checked closure; 0 errors and 0 warnings.
- `rendercheck.mjs`: both pages and all 11 items, 13 files, 0 errors and 0 warnings.
- `proof-layout.mjs` on all 11 items: 28 numbered steps, 0 defects.
- `coverage-checklist.mjs`: 2 pages and 28 harvested results, 0 errors and 0 warnings.
- Final `source-fetch-check.mjs`: 4/4 page-source entries fetch-verified and resolved.
- Scoped item dependency levels across batches 1–3: 27 items, 0 errors; the levels above match the manifest.
- Run-wide item/batch dependency checks remain blocked by unrelated scaffold state described above. No run transition or shared scheduling update was attempted.

All 11 items have complete declared prerequisites, placement, source dispositions and contracts, so their Step 1 records are `ready`. These construction records do not constitute independent mathematical approval or run-level gate acceptance.
