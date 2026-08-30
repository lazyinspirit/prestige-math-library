# frontier-24 reader-6 report

Date: Saturday, August 29, 2026.
Batch: `6`
Run: `frontier-24`

## Opened scope

- Control and instructions: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-24-reader.task.md`, `research/frontier-24-dispatch/reader-reader-6.prompt.md`, and live run state via `node tools/autopilot/bin/autopilot.mts status`.
- Batch artifacts: `research/frontier-24-batch-6.pages.json`, `research/frontier-24-batch-6.coverage.json`, `research/frontier-24-batch-6.notes.md`, and `research/frontier-24-batch-6.proof-contracts.json`.
- Assigned pages: `library/complex-analysis/mittag-leffler-and-runges-theorem.md`, `library/complex-analysis/mittag-leffler-and-runges-theorem-examples.md`, `library/complex-analysis/the-gamma-function.md`, and `library/complex-analysis/the-gamma-function-examples.md`.
- Assigned items:
  - `mittag-leffler-and-runges-theorem`: `def-principal-part-at-an-isolated-point`, `def-rational-approximation-with-a-runge-pole-set`, `def-pole-pushing-along-a-chain-of-discs`, `lem-grid-cycle-for-runge-approximation`, `lem-cauchy-riemann-sums-give-rational-approximation`, `lem-runge-pole-pushing-lemma`, `thm-runge-approximation-with-prescribed-poles`, `cor-runge-polynomial-approximation`, `def-runge-approximation-on-a-plane-domain`, `thm-runge-approximation-on-plane-domains`, `thm-mittag-leffler-theorem-on-the-plane`, `thm-mittag-leffler-theorem-on-plane-domains`, `thm-mittag-leffler-expansion-of-pi-cotangent`, `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared`, `thm-zero-divisor-theorem-on-plane-domains`, `cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients`, `cor-meromorphic-functions-on-a-domain-form-a-field`, `rem-choice-strength-of-runge-and-mittag-leffler`.
  - `mittag-leffler-and-runges-theorem-examples`: `ex-one-over-z-not-polynomially-approximable-on-unit-circle`, `ex-pole-pushing-along-three-discs`, `ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared`, `ex-mittag-leffler-function-with-double-poles-at-the-integers`, `fs-runge-gives-polynomial-approximation-on-any-compact-set`, `cex-annulus-needs-a-pole-in-each-bounded-complementary-component`, `fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts`.
  - `the-gamma-function`: `def-euler-gamma-function`, `lem-gamma-integral-converges-locally-uniformly`, `thm-euler-gamma-function-is-holomorphic`, `thm-complex-gamma-restricts-to-the-real-gamma-function`, `thm-gamma-functional-equation`, `cor-gamma-factorial-values`, `thm-gamma-meromorphic-continuation`, `thm-euler-limit-formula-for-gamma`, `thm-gamma-weierstrass-product`, `cor-gamma-function-has-no-zeros`, `thm-euler-reflection-formula`, `cor-gamma-one-half-value`, `def-euler-beta-function`, `thm-beta-gamma-identity`, `thm-gauss-multiplication-formula`, `thm-legendre-duplication-formula`, `thm-stirling-formula-gamma`, `def-hankel-contour-and-power-branch`, `thm-hankel-representation-for-reciprocal-gamma`, `fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma`.
  - `the-gamma-function-examples`: `ex-gamma-values-at-half-integers-and-negative-half-integers`, `ex-residue-of-gamma-at-minus-two`, `ex-beta-one-half-one-half-equals-pi`, `ex-reflection-formula-at-one-half`, `ex-stirling-approximation-to-ten-factorial`, `cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values`, `fs-gamma-is-entire`.
- Required page dependencies opened: `library/complex-analysis/infinite-products-and-weierstrass-factorisation.md`, `library/complex-analysis/the-riemann-sphere-and-mobius-transformations.md`, `library/complex-analysis/the-residue-theorem.md`, `library/real-analysis/improper-integrals.md`, `library/complex-analysis/analyticity-liouville-and-morera.md`, and `library/measure-theory/product-measures-and-the-fubini-tonelli-theorems.md`.
- Direct dependency items opened for verification: `cor-complex-trigonometric-and-hyperbolic-derivatives`, `cor-real-gamma-one-half-is-root-pi`, `def-complex-trigonometric-and-hyperbolic-functions`, `def-meromorphic-function-complex-domain`, `def-null-homologous-and-homologous-complex-cycles`, `def-real-gamma-function-by-the-euler-integral`, `def-tangent-cotangent-secant-cosecant`, `lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set`, `thm-complex-sine-and-cosine-zero-sets`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-euler-mascheroni-constant-and-harmonic-asymptotic`, `thm-fundamental-theorem-for-complex-line-integrals`, `thm-global-cauchy-integral-formula-homology`, `thm-heine-cantor-metric`, `thm-holomorphic-parameter-riemann-integral`, `thm-identity-theorem-holomorphic-functions`, `thm-integration-by-parts`, `thm-laurent-regular-principal-decomposition`, `thm-liouville-bounded-entire-function`, `thm-polygonal-jordan-curve`, `thm-real-beta-gamma-identity`, `thm-real-gamma-euler-integral-convergence`, `thm-real-stirling-formula`, `thm-removable-singularity-characterizations`, `thm-sine-has-its-weierstrass-product`, `thm-tangent-cotangent-secant-cosecant-derivatives-and-periods`, `thm-weierstrass-convergence-holomorphic-functions`, `thm-weierstrass-m-test-for-complex-function-series`, and `thm-winding-number-chain-laws`.

## Edits kept

- `items/cor-partial-fraction-expansion-of-pi-squared-cosecant-squared.md`
  - Replaced the incorrect differentiation citation to the M-test with the actual Weierstrass holomorphic-convergence theorem, and rewrote the proof through holomorphic partial sums and derivative convergence.
- `items/thm-zero-divisor-theorem-on-plane-domains.md`
  - Removed the false claim that Runge supplied an entire approximant, replaced it with a rational approximant holomorphic on `\Omega`, and dropped the stale Weierstrass-product dependency from the item frontmatter.
- `items/thm-euler-gamma-function-is-holomorphic.md`
  - Rewrote the proof through the truncation sequence `\Gamma_n` and added the missing locally-uniform-limit citation that justifies holomorphy of the improper integral limit.
- `items/thm-beta-gamma-identity.md`
  - Repaired the holomorphy argument: the old proof treated an unjustified Gamma quotient as holomorphic. The new proof proves holomorphy of Beta by truncation, then applies the identity theorem to the product identity `\Gamma(p+q)B(p,q)=\Gamma(p)\Gamma(q)`.
- `items/thm-gamma-meromorphic-continuation.md`
  - Promoted the continuation formula already used in the proof into the statement and made the proof explicitly track that formula on each shifted half-plane.
- `items/thm-euler-limit-formula-for-gamma.md`
  - Repaired the invalid extension step from `\operatorname{Re}z>0` to the full pole-free plane. The new proof shifts compact sets into the right half-plane, uses the finite-`n` recurrence for the approximants, and then invokes the explicit continuation formula from the repaired meromorphic-continuation theorem.
- `items/thm-gamma-weierstrass-product.md`
  - Corrected the reciprocal-limit algebra sign error, added the missing harmonic-number dependency, and rewrote the product-normalization step so the continuation to all `z` is honest.
- `items/thm-euler-reflection-formula.md`
  - Replaced the incorrect one-line reindexing argument for `1/\Gamma(1-z)` with the correct finite-product calculation and harmonic-number normalization.
- `items/ex-pole-pushing-along-three-discs.md`
  - Fixed the explicit witness: the original radii put the claimed chain points on open-disc boundaries, so the displayed data were not actually a pole-pushing chain. The new example uses radii `3/4` and the chain `2 -> 5/2 -> 3 -> 7/2 -> \infty`.
- `items/ex-beta-one-half-one-half-equals-pi.md`
  - Added the missing citation for `\Gamma(1)=1`.
- `items/ex-stirling-approximation-to-ten-factorial.md`
  - Corrected the numerical leading-term approximation from `3.99\times10^6` to `3.60\times10^6`.
- `research/frontier-24-batch-6.proof-contracts.json`
  - Regenerated all `44` proof-bearing entries after the item repairs so the contracts, citations, and proof-step inventories match the current bytes.

The page bodies remained unchanged. The B-page prose stayed untouched.

## Confirmed defects repaired

1. `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared` cited the wrong theorem for termwise differentiation.
2. `thm-zero-divisor-theorem-on-plane-domains` claimed an entire Runge approximant even though the cited theorem only guarantees rational functions holomorphic on the domain.
3. `thm-euler-gamma-function-is-holomorphic` omitted the load-bearing locally uniform limit theorem.
4. `thm-beta-gamma-identity` treated an unproved Gamma quotient as holomorphic and so did not justify the identity-theorem step.
5. `thm-gamma-meromorphic-continuation` used an uncatalogued continuation formula that the repaired limit-formula proof genuinely needs.
6. `thm-euler-limit-formula-for-gamma` had an invalid meromorphic-extension step after the right-half-plane argument.
7. `thm-gamma-weierstrass-product` had a real algebraic sign error in the reciprocal limit and was missing the harmonic-number normalization dependency.
8. `thm-euler-reflection-formula` used an incorrect compressed derivation of the product for `1/\Gamma(1-z)`.
9. `ex-pole-pushing-along-three-discs` gave discs that did not contain the claimed chain points as interior points.
10. `ex-beta-one-half-one-half-equals-pi` used `\Gamma(1)=1` without carrying the needed citation.
11. `ex-stirling-approximation-to-ten-factorial` reported the wrong numerical approximation.

No uneditable in-flight-item, page, or published-dependency defect remained on the opened current bytes after those repairs.

## Report-only drift outside edit scope

- `research/frontier-24-batch-6.pages.json:131-137` still records `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared` with only the cotangent dependency, not the repaired Weierstrass-convergence dependency.
- `research/frontier-24-batch-6.pages.json:140-147` still records the dropped Weierstrass-product dependency for `thm-zero-divisor-theorem-on-plane-domains`.
- `research/frontier-24-batch-6.pages.json:287-294` still omits the added Weierstrass-convergence dependency for `thm-euler-gamma-function-is-holomorphic`.
- `research/frontier-24-batch-6.pages.json:339-346` still lists the pre-repair dependency set for `thm-euler-limit-formula-for-gamma`; the current item instead depends on `thm-gamma-meromorphic-continuation` and `thm-beta-gamma-identity`.
- `research/frontier-24-batch-6.pages.json:349-355` still omits the added harmonic-asymptotic dependency for `thm-gamma-weierstrass-product`.
- `research/frontier-24-batch-6.pages.json:367-373` still omits the added harmonic-asymptotic dependency for `thm-euler-reflection-formula`.
- `research/frontier-24-batch-6.pages.json:393-400` still records `thm-beta-gamma-identity` with only the two definitional dependencies, not the repaired holomorphy and identity-theorem closure.
- `research/frontier-24-batch-6.pages.json:490-496` still omits the added `cor-gamma-factorial-values` dependency for `ex-beta-one-half-one-half-equals-pi`.

I left those manifest rows untouched because this dispatch is licensed to repair in-flight items and A-page prose, not batch-manifest metadata.

## Boundary-audit candidates read and discharged

- The `boundary-audit` candidates on `lem-cauchy-riemann-sums-give-rational-approximation`, `lem-runge-pole-pushing-lemma`, `thm-runge-approximation-with-prescribed-poles`, `thm-mittag-leffler-expansion-of-pi-cotangent`, `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared`, `ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared`, `thm-euler-limit-formula-for-gamma`, `thm-gamma-weierstrass-product`, `thm-euler-reflection-formula`, `thm-gauss-multiplication-formula`, and `thm-stirling-formula-gamma` were all reopened and checked by hand.
- I did not confirm an underlying defect in those candidates. The flagged denominators are excluded by the written hypotheses (`z\notin\mathbb Z`, `a\notin i\mathbb Z`, `m\ge1`, `n\ge1`, or compact sets already avoiding the pole set), and the flagged sum/product families are fixed nonempty index sets rather than omitted empty-family branches.

## Page verdicts

- `mittag-leffler-and-runges-theorem`
  - Sufficient on the current bytes after the two A-item repairs. The termwise differentiation and zero-divisor arguments now match the actual cited machinery.
- `mittag-leffler-and-runges-theorem-examples`
  - Sufficient on the current bytes after the repaired three-disc witness. The other examples and counterexamples remain compatible with the A-page.
- `the-gamma-function`
  - Sufficient on the current bytes after the six A-item repairs. The Gamma holomorphy, Beta-Gamma, continuation, limit-product, and reflection chain is now mathematically coherent on the current disk state.
- `the-gamma-function-examples`
  - Sufficient on the current bytes after the two example repairs. The numerical Stirling check and the Beta example now match the repaired A-page results.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-zero-divisor-theorem-on-plane-domains.md items/cor-partial-fraction-expansion-of-pi-squared-cosecant-squared.md items/thm-euler-gamma-function-is-holomorphic.md items/thm-beta-gamma-identity.md items/thm-gamma-meromorphic-continuation.md items/thm-euler-limit-formula-for-gamma.md items/thm-gamma-weierstrass-product.md items/thm-euler-reflection-formula.md items/ex-pole-pushing-along-three-discs.md items/ex-stirling-approximation-to-ten-factorial.md items/ex-beta-one-half-one-half-equals-pi.md`
  - Result: all `11` repaired items reflowed cleanly.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-zero-divisor-theorem-on-plane-domains.md items/cor-partial-fraction-expansion-of-pi-squared-cosecant-squared.md items/thm-euler-gamma-function-is-holomorphic.md items/thm-beta-gamma-identity.md items/thm-gamma-meromorphic-continuation.md items/thm-euler-limit-formula-for-gamma.md items/thm-gamma-weierstrass-product.md items/thm-euler-reflection-formula.md items/ex-pole-pushing-along-three-discs.md items/ex-stirling-approximation-to-ten-factorial.md items/ex-beta-one-half-one-half-equals-pi.md`
  - Result: pass, `11 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-24-batch-6.proof-contracts.json <all 44 ids in the contract scope>`
  - Result: regenerated `44`, skipped `0`.
- `node tools/tsx-run.mjs tools/precheck.mts <full batch-6 item scope>`
  - Result: pass, `44 checked, 0 failing`.
- `node tools/coverage-checklist.mjs research/frontier-24-batch-6.coverage.json --require-destination`
  - Result: pass, `coverage-checklist: 2 page(s), 50 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-24-batch-6.proof-contracts.json --strict`
  - Result: pass, `proof-contract: 0 error(s), 0 warning(s), 44/44 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-24-batch-6.proof-contracts.json --fail-on-missing-quote`
  - Result: pass, `96 citation(s) over 44 authored item(s)`, with no quote failures and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-24-batch-6.proof-contracts.json`
  - Result: completed with `352` rows, `349` marked `not_applicable`, no template-reuse cluster, and only the human-reviewed candidate notices summarized above.
- `node tools/content-policy.mjs research/frontier-24-batch-6.pages.json`
  - Result: pass, `52 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/rendercheck.mjs items/thm-zero-divisor-theorem-on-plane-domains.md items/cor-partial-fraction-expansion-of-pi-squared-cosecant-squared.md items/thm-euler-gamma-function-is-holomorphic.md items/thm-beta-gamma-identity.md items/thm-gamma-meromorphic-continuation.md items/thm-euler-limit-formula-for-gamma.md items/thm-gamma-weierstrass-product.md items/thm-euler-reflection-formula.md items/ex-pole-pushing-along-three-discs.md items/ex-stirling-approximation-to-ten-factorial.md items/ex-beta-one-half-one-half-equals-pi.md library/complex-analysis/mittag-leffler-and-runges-theorem.md library/complex-analysis/mittag-leffler-and-runges-theorem-examples.md library/complex-analysis/the-gamma-function.md library/complex-analysis/the-gamma-function-examples.md`
  - Result: pass, `OK — 15 file(s)`.
- `git diff --check`
  - Result: pass.

## Blockers

- No mathematical blocker remains in the opened batch-6 scope.
- The only remaining issue is the report-only manifest drift listed above, which this dispatch was not licensed to rewrite.
