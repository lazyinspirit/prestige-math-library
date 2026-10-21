# Step 3a reader report — batch 52

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-52`)  
Scope: batch `52`

## Opened inventory

Assigned pages:

- `library/inverse-problems/open-frontiers-in-learned-inverse-problems.md`
- `library/inverse-problems/open-frontiers-in-learned-inverse-problems-examples.md`

Assigned items, reviewed in manifest order. All have empty `deps` and
`justified_by`, so no item suppliers were needed:

- `op-ip-calibration-under-score-and-solver-error`
- `op-ip-neural-operator-sample-complexity-for-inverse-maps`
- `ex-ip-score-coverage-baseline-gaussian-sequence`
- `ex-ip-score-coverage-unbounded-truth-prior-bias`
- `ex-ip-operator-shift-stable-scalar-risk`
- `ex-ip-operator-shift-vanishing-singular-value`
- `ex-ip-diffusion-two-mode-finite-sample-weights`
- `ex-ip-diffusion-finite-budget-misses-rare-mode`
- `ex-ip-neural-inverse-mesh-truncation-modulus`
- `ex-ip-neural-inverse-finite-samples-need-class-control`
- `ex-ip-integrated-score-error-misses-euler-grid-times`
- `ex-ip-robust-ellipsoid-minimax-shift-rate`
- `ex-ip-ideal-score-error-allows-unbounded-euler-wasserstein`
- `ex-ip-coordinate-free-fno-inverse-risk-obstruction`

I also reviewed the batch-52 proof contracts. Their derivations matched the
current proof steps; the assigned examples' Gaussian, tail, Wasserstein,
truncation, sign-testing, score-spike, and translation-equivariance arguments
were independently checked. The A page's eight `requires` entries are metadata
only: the assigned pages have no prose claims or summaries requiring those
pages as mathematical suppliers.

## Defects and edit

The Szabó–van der Vaart–van Zanten locator incorrectly associated the
unrestricted-coverage counterexample with Theorems 3.6 and 3.9. In the paper,
Theorem 3.1 supplies the vanishing-coverage example, Theorem 3.6 gives coverage
over polished-tail truths, and Theorem 3.9 controls credible-set radius on
self-similar classes ([arXiv:1310.4489v5](https://arxiv.org/pdf/1310.4489v5), §3).
I corrected the locator in:

- `items/op-ip-calibration-under-score-and-solver-error.md`
- `items/ex-ip-integrated-score-error-misses-euler-grid-times.md`

The cited results are contextual references, not premises in the local proofs.
No mathematical statement or proof changed, and no proof-contract derivation
was affected. Neither edited item had a `verification.judge` record.

Checks after the edits:

- `node tools/tsx-run.mjs tools/reflow.mts items/op-ip-calibration-under-score-and-solver-error.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/op-ip-calibration-under-score-and-solver-error.md` — 0 checked, 0 failing; definition/open-problem proof is not applicable.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-ip-integrated-score-error-misses-euler-grid-times.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-ip-integrated-score-error-misses-euler-grid-times.md` — 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/op-ip-calibration-under-score-and-solver-error.md items/ex-ip-integrated-score-error-misses-euler-grid-times.md` — 2 items, 5 steps, 0 defects.

No other defect was confirmed. All assigned statements are uninterrupted by
hyperlinks, proof steps have the required paragraph and tag layout, and no
TikZ/tikzcd diagrams occur in the assigned scope.

## Page verdicts

- `open-frontiers-in-learned-inverse-problems` — pass. Draft A-page frontmatter only; inventory contains the two assigned open problems, status is preserved, `page_layout: compact-v1` is present, and the body is empty.
- `open-frontiers-in-learned-inverse-problems-examples` — pass. Draft B-page frontmatter only; inventory contains all twelve assigned examples, its `requires` entry points to the assigned A page, status is preserved, `page_layout: compact-v1` is present, and the body is empty.

## Source checks and limits

I checked the cited statements and locators against the primary source texts,
including Knapik–van der Vaart–van Zanten, §4, Theorem 4.2; the corrected
Szabó–van der Vaart–van Zanten §3 results; Giné–Nickl, §§6.4 and 8.3; and
Narnhofer et al., §3, Proposition 3.5. For the neural-operator references I
checked Reinhardt–Wang–Zech, Theorems 5–6 and §3; de Hoop et al., Theorem 4.8;
and Kovachki et al., §§1.1 and 4.4. The inverse-problem background locators in
Bal and InverseBench, §§4.3–5 and Appendix C, were also checked. For the
remaining sampler references I checked Burns–Fridovich-Keil, §4.1, §§5–6 and
Appendix C; Daras et al., §2.4 and §§3.3–3.4; Blechschmidt et al., §§3.3–3.4
and §5; and Prince, Chapter 18's reverse-process, sampling, and faster-sampling
sections.
These sources are not used to fill proof gaps: the local example arguments are
self-contained. I checked the cited theorem/section statements relevant to the
locators, not every cited paper's complete proof.

## Blocker

There is no batch-52 content blocker. The live autopilot status remains
`running`, with no work in flight; it reports an unrelated `3a-split` blocker
because `split-30` failed three times. This does not block the batch-52 reader
review.
