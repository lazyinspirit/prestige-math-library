# frontier-23 reader-7 report

Date: Saturday, August 29, 2026.

## Opened scope

- Control and instructions: `CLAUDE.md`, `README.md`, `briefs/reader.md`, `research/frontier-23-reader.task.md`, `research/frontier-23-dispatch/reader-reader-7.prompt.md`, and live run state via `node tools/autopilot/bin/autopilot.mts status`.
- Batch artifacts: `research/frontier-23-batch-7.pages.json`, `research/frontier-23-batch-7.coverage.json`, `research/frontier-23-batch-7.notes.md`, `research/frontier-23-batch-7.proof-contracts.json`, and `research/frontier-23-step6-hash-7-pre.json`.
- Design and prerequisite pages: the CA-12 and CA-18 sections of `research/plan-complex-analysis-track.md`, plus `library/complex-analysis/the-riemann-sphere-and-mobius-transformations.md`, `library/complex-analysis/the-winding-number-and-the-global-cauchy-theorem.md`, `library/complex-analysis/the-identity-theorem-and-the-open-mapping-theorem.md`, `library/complex-analysis/normal-families-and-montels-theorem.md`, `library/real-analysis/the-logarithm-and-general-powers.md`, `library/real-analysis/roots-and-rational-powers.md`, and `library/real-analysis/absolute-convergence-and-rearrangement.md`.
- Assigned pages: `library/complex-analysis/conformal-mapping-branches-and-the-schwarz-lemma.md`, `library/complex-analysis/conformal-mapping-branches-and-the-schwarz-lemma-examples.md`, `library/complex-analysis/infinite-products-and-weierstrass-factorisation.md`, and `library/complex-analysis/infinite-products-and-weierstrass-factorisation-examples.md`.
- Assigned items: all 61 batch-7 manifest items under `items/`, namely the 23 A-page and 10 B-page items for CA-12 together with the 20 A-page and 8 B-page items for CA-18.
- Direct published dependency items opened for verification: `def-complex-logarithms-principal-logarithm-and-complex-powers`, `def-continuous-argument-and-holomorphic-logarithm-branches`, `cor-principal-logarithm-is-holomorphic-on-the-slit-plane`, `def-complex-integer-powers`, `def-real-power`, `thm-kernel-and-fibres-of-complex-exponential`, `thm-complex-exponential-addition-and-real-extension`, `def-biholomorphic-map`, `def-mobius-transformation`, `thm-mobius-transformations-biholomorphic-sphere`, `thm-maximum-modulus-principle-with-boundary-and-infinity-control`, `thm-local-maximum-modulus-principle`, `thm-removable-singularity-characterizations`, `thm-chain-rule-for-complex-derivatives`, `thm-algebra-of-complex-derivatives`, `thm-weierstrass-convergence-holomorphic-functions`, `thm-zero-order-factorization-holomorphic-function`, `thm-holomorphic-logarithms-homologically-simply-connected-domains`, `prop-star-shaped-plane-domains-are-homologically-simply-connected`, `thm-entire-polynomial-growth-is-polynomial`, `thm-complex-sine-and-cosine-zero-sets`, `thm-complex-trigonometric-and-hyperbolic-power-series`, `thm-cauchy-integral-formula-circle`, `def-meromorphic-function-complex-domain`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-liouville-bounded-entire-function`, `thm-infinite-product-criterion`, and `thm-p-series-rational`.

## Edits kept

- `items/lem-unit-disc-estimate-for-weierstrass-elementary-factors.md`
  Replaced the invalid half-disc continuation argument with a direct derivative-and-integral proof of the sharp bound `|1-E_p(w)| <= |w|^(p+1)` on `|w| <= 1`, and corrected the dependency list to the rules actually used.
- `items/thm-canonical-product-convergence-from-exponent-sum.md`
  Tightened the compact-disc estimate to use the repaired sharp elementary-factor bound.
- `items/thm-weierstrass-product-theorem-on-the-complex-plane.md`
  Replaced the impossible `n^{p_n+1}|a_n|^{-(p_n+1)} <= 2^{-n}` choice with the standard witness `p_n = n` and a normal-convergence proof on each compact disc.
- `items/thm-zero-exponent-is-bounded-by-entire-order.md`
  Inserted the missing removal of the zero at the origin before applying Jensen, so the cited corollary is now used under its actual hypothesis `g(0) != 0`.
- `items/fs-every-zero-sequence-admits-a-genus-zero-canonical-product.md`
  Replaced the unsupported converse citation with a direct witness at `z = -1`, using `E_0(w) = 1-w`, the harmonic-series divergence, and the published infinite-product criterion.
- `research/frontier-23-batch-7.proof-contracts.json`
  Regenerated the five affected contract entries after the item repairs and reflow pass.

No assigned A-page prose change was needed.

## Confirmed defects repaired

1. `lem-unit-disc-estimate-for-weierstrass-elementary-factors` claimed a full closed-unit-disc estimate from a bound proved only on `|w| <= 1/2`; the continuation step was not justified.
2. `thm-weierstrass-product-theorem-on-the-complex-plane` chose exponents from an inequality that need not be satisfiable when `|a_n| < n`, so its convergence witness was invalid.
3. `thm-zero-exponent-is-bounded-by-entire-order` applied Jensen's zero-counting corollary directly to `f` even when `f(0) = 0`, violating the cited theorem's hypothesis.
4. `fs-every-zero-sequence-admits-a-genus-zero-canonical-product` cited the one-way canonical-product convergence theorem as though it also supplied the converse.
5. `thm-canonical-product-convergence-from-exponent-sum` carried the stale weaker estimate after the repaired elementary-factor lemma.

No uneditable in-flight-item, page, or published-dependency defect remained after those repairs on the opened scope.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-unit-disc-estimate-for-weierstrass-elementary-factors.md items/thm-canonical-product-convergence-from-exponent-sum.md items/thm-weierstrass-product-theorem-on-the-complex-plane.md items/thm-zero-exponent-is-bounded-by-entire-order.md items/fs-every-zero-sequence-admits-a-genus-zero-canonical-product.md`
  Result: all 5 changed files reflowed to canonical form.
- `node tools/regen-contract-entries.mjs research/frontier-23-batch-7.proof-contracts.json lem-unit-disc-estimate-for-weierstrass-elementary-factors thm-canonical-product-convergence-from-exponent-sum thm-weierstrass-product-theorem-on-the-complex-plane thm-zero-exponent-is-bounded-by-entire-order fs-every-zero-sequence-admits-a-genus-zero-canonical-product`
  Result: regenerated all 5 targeted entries.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-unit-disc-estimate-for-weierstrass-elementary-factors.md items/thm-canonical-product-convergence-from-exponent-sum.md items/thm-weierstrass-product-theorem-on-the-complex-plane.md items/thm-zero-exponent-is-bounded-by-entire-order.md items/fs-every-zero-sequence-admits-a-genus-zero-canonical-product.md`
  Result: pass, `5 checked, 0 failing`.
- Full authored-batch precheck via `tools/precheck.mts` over all 49 proof-bearing batch-7 items.
  Result: pass, `49 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-23-batch-7.proof-contracts.json --strict`
  Result: pass, `0 error(s), 0 warning(s), 49/49 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-7.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: pass, `128 citation(s) over 49 authored item(s)`, with no quote mismatches and no widening candidates.
- `node tools/rendercheck.mjs library/complex-analysis/conformal-mapping-branches-and-the-schwarz-lemma.md library/complex-analysis/conformal-mapping-branches-and-the-schwarz-lemma-examples.md library/complex-analysis/infinite-products-and-weierstrass-factorisation.md library/complex-analysis/infinite-products-and-weierstrass-factorisation-examples.md items/lem-unit-disc-estimate-for-weierstrass-elementary-factors.md items/thm-canonical-product-convergence-from-exponent-sum.md items/thm-weierstrass-product-theorem-on-the-complex-plane.md items/thm-zero-exponent-is-bounded-by-entire-order.md items/fs-every-zero-sequence-admits-a-genus-zero-canonical-product.md`
  Result: pass, `OK — 9 file(s)`.
- `git diff --check -- items/lem-unit-disc-estimate-for-weierstrass-elementary-factors.md items/thm-canonical-product-convergence-from-exponent-sum.md items/thm-weierstrass-product-theorem-on-the-complex-plane.md items/thm-zero-exponent-is-bounded-by-entire-order.md items/fs-every-zero-sequence-admits-a-genus-zero-canonical-product.md research/frontier-23-batch-7.proof-contracts.json`
  Result: pass.

## Page verdicts

- `conformal-mapping-branches-and-the-schwarz-lemma`
  Sufficient on the opened scope. I found no confirmed uneditable defect in the A-page summary or its 23 assigned items after checking the cited branch, automorphism, and model-domain dependencies.
- `conformal-mapping-branches-and-the-schwarz-lemma-examples`
  Sufficient on the opened scope. The examples and counterexamples track the page's branch and conformality conventions correctly.
- `infinite-products-and-weierstrass-factorisation`
  Sufficient after repair on the opened scope. The Weierstrass-product, zero-exponent, and elementary-factor estimates now respect their stated hypotheses and support the later factorisation machinery.
- `infinite-products-and-weierstrass-factorisation-examples`
  Sufficient after repair on the opened scope. The repaired genus-zero counterexample now uses an honest pointwise witness instead of an unsupported converse citation.

## Blockers

- None in the opened batch-7 scope.
- No uneditable published-dependency defect remains.
