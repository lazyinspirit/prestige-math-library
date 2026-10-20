# Step 3a reader report — batch 98

Run: `machine-learning-all-101-2026-10-19`  
Review date: 2026-10-20  
Role: reader (`reader-98`)

## Opened inventory

Assigned pages:

- `library/machine-learning/monotone-risk-calibration-and-deployment-guarantees.md`
- `library/machine-learning/monotone-risk-calibration-and-deployment-guarantees-examples.md`

Assigned items, reviewed in supplier-before-consumer order:

1. `def-finite-nested-decision-family-and-bounded-risk`
2. `alg-finite-grid-conformal-risk-control`
3. `thm-finite-grid-conformal-risk-control`
4. `thm-finite-grid-monotone-envelope-risk-control`
5. `rem-marginal-risk-control-and-adaptive-reuse`
6. `ex-zero-loss-finite-grid-risk-control`
7. `ex-finite-grid-risk-control-fallback`
8. `cex-nonmonotone-finite-grid-risk-control`
9. `ex-multilabel-false-negative-risk-control`

Item suppliers opened to verify the assigned claims:

- `def-random-element-and-real-random-variable`
- `def-exchangeable-random-elements`
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`
- `def-law-or-distribution-of-a-random-element`
- `def-regular-conditional-distribution`
- `def-conditional-expectation-given-a-sigma-algebra`
- `cor-expectation-linearity-monotonicity-and-modulus-bound`
- `thm-monotone-convergence-for-the-integral`
- `thm-split-conformal-marginal-coverage`
- Direct proof support for `cor-expectation-linearity-monotonicity-and-modulus-bound`: `thm-linearity-of-the-lebesgue-integral-on-l-one`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-integral-triangle-inequality`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, and `prop-closure-properties-of-measurable-functions-used-by-the-integral`.

The two page prerequisites listed by the assigned A-page were opened for dependency identification: `library/mathematical-statistics/conformal-prediction-and-exchangeable-ranks.md` and `library/machine-learning/predictive-calibration-and-uncertainty-under-shift.md`. They are outside batch 98 and receive no page verdict here.

The current batch proof contract was checked. Its scope contains the same nine assigned items, and the listed fact citations and proof-step derivations match the authored items. No contract change was needed.

## Mathematical review

- **Finite nested-family definition — sound.** It fixes a finite deterministic ordered grid, bounded measurable row vectors, joint row exchangeability, loss monotonicity, endpoint safety, and the marginal risk convention without conflating loss nesting with literal inclusion of prediction sets.
- **Finite-grid algorithm — sound and complete.** Its inputs, threshold formula, first-pass branch, maximum-grid fallback, output, and finite bound on the number of tests are explicit. The distinction between procedure instructions and theorem hypotheses is stated.
- **Finite-grid risk theorem — sound.** The full-sample averages are Borel, endpoint safety makes the full-sample selected index nonempty, and any calibration pass implies that this index is no later than the selected calibration index. Monotonicity then bounds the selected test loss by the loss at the symmetric full-sample index. The selected full-sample losses are exchangeable and have equal finite expectations; their average is at most the target. The conditional extension applies this argument under almost-everywhere exchangeable regular conditional sections, then identifies the kernel integral as a conditional-expectation version using bounded simple approximations and monotone convergence.
- **Monotone-envelope theorem — sound.** The finite tail maxima are measurable, bounded, exchangeable under the common row map, nonincreasing on the grid, and unchanged at the endpoint. The finite-grid theorem controls the envelope loss, which pointwise dominates the original selected loss. The conditional argument preserves the same hypotheses under each eligible conditional section.
- **Marginal-risk remark — sound and appropriately qualified.** The two-state illustration has mean risk `1/4` and exceeds `1/4` with probability `1/2`, so expected-risk control alone gives no high-probability guarantee. The remark distinguishes marginal risk, conditional risk under additional sectionwise hypotheses, split-conformal coverage, probability calibration, feature/subgroup conditioning, nonmonotone envelopes, and distribution shift without asserting unsupported guarantees.
- **Zero-loss example — sound.** Every threshold equals `B/(n+1)`; the stated pass/fallback boundary and zero selected loss follow directly.
- **Fallback example — sound.** Nonnegative calibration losses make every threshold at least `B/(n+1)`, so the strict target inequality forces fallback; endpoint safety bounds the test loss and its expectation.
- **Nonmonotone counterexample — sound.** The two row types are iid and hence exchangeable, have endpoint loss `3/4`, and produce the stated branches. The expected test loss is `(1/10)(9/10)+(9/10)(3/4)=153/200>3/4`.
- **Multilabel example — sound.** The measurable threshold sets increase with the grid, the nonempty-label false-negative loss decreases and remains in `[0,1]`, and the terminal threshold `1` includes every class, including the stated empty-label convention. The risk theorem therefore applies.

The authored `Definition`, `Statement`, `Statement refuted`, `Example`, and remark prose sections contain no hyperlinks interrupting the claim; links occur in their immediately following reference sections. Neither assigned page has a Markdown body. No diagrams occur in the assigned pages or items.

## Source checks

- Angelopoulos et al., [*Conformal Risk Control*, arXiv:2208.02814v4](https://arxiv.org/pdf/2208.02814v4): §1.1, equation (4), gives the B-corrected calibration threshold and maximum-grid fallback; §2.1, Theorem 1 and proof, gives the expected-risk bound for monotone losses; §2.4, Corollary 1, gives the monotone-envelope extension; §3.2 gives the multilabel false-negative example; §4.1 discusses distributional shift.
- Angelopoulos, Barber, and Bates, [*Theoretical Foundations of Conformal Prediction*, arXiv:2411.11824v5](https://arxiv.org/pdf/2411.11824): Chapter 2, Definition 2.1 and §2.1 (printed pp. 11–13), define exchangeability by invariance in distribution under permutations and explain that exchangeability need not mean independence. Chapter 4 §§4.1–4.3 address training-conditional and feature-conditional coverage, matching the remark’s distinctions.
- Shafer and Vovk, [“A Tutorial on Conformal Prediction,” JMLR 9 (2008)](https://www.jmlr.org/papers/volume9/shafer08a/shafer08a.pdf): §3.1 defines finite exchangeability by permutation invariance and distinguishes it from independence.

## Edits, findings, and page verdicts

- **Edits:** none. No material repair was required, so no proof contract or `verification.judge` record changed. No reflow, precheck, or proof-layout command was run because no item was edited.
- **Uneditable defects:** none found in the assigned pages or items.
- **A-page `monotone-risk-calibration-and-deployment-guarantees`: PASS.** YAML frontmatter only; title, draft status, page requirements, item inventory, and `page_layout: compact-v1` agree with the batch manifest.
- **B-page `monotone-risk-calibration-and-deployment-guarantees-examples`: PASS.** YAML frontmatter only; title, draft status, companion requirement, examples inventory, empty `items` list, and `page_layout: compact-v1` agree with the batch manifest.
- **Blocker:** none.

At the status check, the active run was in `3a-read`, with batch 98 listed among the uncovered batches; there was no worker in flight. The run also showed unrelated collection blockers for batches 57 and 91.
