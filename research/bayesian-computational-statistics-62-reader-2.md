# Step 3a reader report — batch 2

Run: `bayesian-computational-statistics-62`  
Role: `reader-2`

## Opened inventory

- Assigned pages: `euler-maruyama-scheme-and-conditions` and `euler-maruyama-scheme-and-conditions-examples`.
- Assigned items, reviewed in dependency order: `alg-euler-maruyama`; `lem-square-integrable-predictable-step-ito-integral-is-finite-sum`; `def-euler-maruyama-step-process-and-continuous-interpolation`; `lem-euler-maruyama-one-step-moment-and-increment-estimates`; `thm-euler-maruyama-uniform-moment-and-increment-bounds`; `ex-euler-maruyama-additive-noise-constant-coefficients`; `ex-euler-maruyama-superlinear-drift-outside-global-lipschitz-contract`.
- Published item dependencies opened: `def-axiom-of-choice`, `def-d-dimensional-brownian-motion`, `def-progressively-measurable-and-predictable-process`, `def-elementary-predictable-brownian-integrand`, `def-ito-integral-of-an-elementary-predictable-process`, `def-ito-integral-for-square-integrable-predictable-processes`, `thm-ito-integral-process-has-a-continuous-martingale-version`, `thm-monotone-convergence-for-the-integral`, `lem-rat-embeds-dense`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`, `def-multivariate-normal-law`, `def-standard-normal-and-normal-laws`, and `lem-exponential-dominates-one-plus-x`.
- Additional SDE-interface dependencies opened to check the additive-noise example and its strong-solution supplier: `def-ito-sde-and-strong-solution` (batch 1, current-run draft), `def-continuous-brownian-ito-process`, `def-locally-square-integrable-predictable-brownian-integrand`, `lem-adapted-continuous-processes-are-progressively-measurable`, and `def-law-modification-and-indistinguishability-of-processes`.
- The required page `forward-ito-sde-well-posedness` was opened at `library/probability/forward-ito-sde-well-posedness.md` for page-order context. Its other listed results were not audited because batch 2's mathematical claims do not use them.
- Reviewed `research/bayesian-computational-statistics-62-batch-2.proof-contracts.json` against the current item text, including citations, derivation mappings, boundary cases, and example contracts.

## Review and edits

No assigned item or page prose was edited. The seven item claims, definitions, proofs, examples, and the two page summaries were checked against their stated hypotheses and the opened suppliers. The Euler recursion, finite-sum Itô identity, coefficient and endpoint conventions, one-step bounds, uniform moment estimate, interpolation increment estimate, and both examples are supported by the authored mathematics. The proof-contract citations and step mappings match the current batch text. No changes were made, so item reflow, precheck, proof-layout, and contract/judge maintenance were not applicable.

## Uneditable finding

- Historical concern in `def-ito-sde-and-strong-solution`, at its `## Definition` paragraph beginning “For an adapted continuous candidate (X)”: the version read during review used (b(s,X_s)) and σ(s,X_s) in pathwise and localized Itô integrals without declaring or establishing their measurability classes. Its then-declared `def-progressively-measurable-and-predictable-process` dependency established predictable ⇒ progressive, but not adapted-continuous ⇒ predictable/progressive. The localized Itô interface requires predictable diffusion integrands. The local published lemma `lem-adapted-continuous-processes-are-progressively-measurable` supplies the adapted-continuous result after the SDE definition's everywhere-continuous normalization; the Borel coefficient compositions also need to be identified as progressive/predictable. A later read found that the current source now declares the lemma in `deps`. Since the source changed after the reviewed version and no immutable pre-reader snapshot binds the earlier bytes, this finding is retained as historical evidence only; it does not assert that the current bytes still have the defect. This is a current-run draft in batch 1 and is outside this assignment. The assigned consumer is `ex-euler-maruyama-additive-noise-constant-coefficients`.

## Page verdicts

- `euler-maruyama-scheme-and-conditions`: the item inventory and Objective accurately summarize the recursion, interpolation, finite-sum extension, moment assumptions, and stated limits of the bounds. No page defect found.
- `euler-maruyama-scheme-and-conditions-examples`: the Objective accurately describes both examples. No page-summary defect found; the additive-noise example's use of the SDE definition is covered by the uneditable finding above.

## Blocker and coverage note

No workflow blocker. One historical out-of-scope batch 1 supplier concern is returned in the findings JSON with `observed_source: null`: the supplier changed after review, and no immutable pre-reader source copy is available to bind the earlier bytes. The required SDE page summary was read for context, but its other items were not independently reviewed because they are not needed to verify batch 2's claims. No external source search was needed for the mathematics reviewed; the checked derivations were supported by the local suppliers or short elementary calculations.
