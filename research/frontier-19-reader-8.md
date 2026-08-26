# frontier-19 reader-8

Date: Tuesday, August 25, 2026.
Batch: `research/frontier-19-batch-8.pages.json`
Pages audited: `isolated-singularities-and-laurent-series`, `isolated-singularities-and-laurent-series-examples`, `harmonic-functions-and-the-poisson-integral`, `harmonic-functions-and-the-poisson-integral-examples`

## Edited items and pages

- `items/thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions.md`
  Repaired the division-by-`(z-a)` steps in 4.1 and 6.1: the old proof cited the removable-singularity theorem where a zero-factorization argument was required, and it did not license harmonicity of the final extension. Added the exact factorization / holomorphicity / harmonicity dependencies and rewrote the affected steps.
- `items/cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane.md`
  Repaired step 2.1: the old proof claimed a holomorphic map into the unit circle is locally constant "by continuity". Replaced that with an open-mapping argument for `G(z)=exp(F(z))/z`, then derived the forbidden continuous logarithm from the resulting constant ratio.
- `items/ex-harnack-inequality-for-a-poisson-kernel.md`
  Repaired the witness. The old text wrote `u_r(re^{i\phi})=P_r(\phi)`, which only defined values on one circle and conflated the fixed radius with the running point. Replaced it with the genuine disc-wide harmonic witness `u(z)=P(z,1)` and verified that it attains both Harnack extremals.
- `items/thm-residue-pole-derivative-formula.md`
  Repaired a citation defect in step 1.1 by declaring and citing `cor-residue-contour-integral-formula`, which is the formula actually used there.
- `items/thm-local-holomorphic-potential-for-harmonic-functions.md`
  Repaired step 3.1 so the zero-Cauchy-Riemann holomorphicity claim is backed by an exact citation to `thm-continuous-partials-and-cauchy-riemann-imply-holomorphic`.
- `items/thm-harmonic-conjugate-on-homologically-simply-connected-domains.md`
  Repaired the same zero-Cauchy-Riemann citation gap in step 3.1.
- `research/frontier-19-batch-8.proof-contracts.json`
  Regenerated `citations` and `derivations` for the six touched proof-bearing items, then rewrote the touched boundary rows so those entries point to real steps instead of scaffold boilerplate.
- No assigned page file changed. Both A-page summaries and both B-page shells were read and left unchanged.

## Confirmed defects

### Fatal

1. Subject: `items/thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions.md`
   Location: steps 4.1 and 6.1
   Defect: `citation-inaccurate` / `unlicensed-inference`
   Evidence: the pre-repair proof divided by `(z-a)` using only the bounded removable-singularity theorem, but that theorem does not by itself license holomorphic extension of `(h-c)/(z-a)` or `h/(z-a)`; the final sentence also asserted harmonicity of `Re G+b` without an exact dependency. The repaired proof now factors zeros with `thm-zero-order-factorization-holomorphic-function`, cites the CR-to-holomorphic theorem for the zero-gradient argument, and cites the published holomorphic-component theorem for harmonicity.
   Severity: `fatal`

2. Subject: `items/cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane.md`
   Location: step 2.1
   Defect: `false-claim` / `unlicensed-inference`
   Evidence: the pre-repair proof said the holomorphic map `exp(F(z))/z` is locally constant "by continuity" because its modulus is `1`. Continuity does not imply local constancy. The repaired proof now uses `thm-open-mapping-theorem-holomorphic-functions` to force the map to be constant.
   Severity: `fatal`

3. Subject: `items/ex-harnack-inequality-for-a-poisson-kernel.md`
   Location: Statement and steps 1.1-2.1
   Defect: `ill-formed`
   Evidence: the pre-repair witness was written as `u_r(re^{i\phi})=P_r(\phi)`, which only defined values on a single circle and reused `r` both as a fixed parameter and as the point radius. That does not define a harmonic function on the disc, so the sharpness claim was not actually witnessed. The repaired item now uses the disc-wide function `u(z)=P(z,1)`.
   Severity: `fatal`

### Nonfatal

4. Subject: `items/thm-residue-pole-derivative-formula.md`
   Location: step 1.1
   Defect: `citation-inaccurate`
   Evidence: the step invoked the normalized residue contour formula but only declared the residue-definition item and the higher-derivative Cauchy formula. The repaired proof adds and cites `cor-residue-contour-integral-formula`.
   Severity: `nonfatal`

5. Subject: `items/thm-local-holomorphic-potential-for-harmonic-functions.md`
   Location: step 3.1
   Defect: `citation-inaccurate`
   Evidence: the step concluded holomorphicity from vanishing first partials without an exact citation to the Cauchy-Riemann implication theorem. The repaired item now declares that fact explicitly as `[L4]`.
   Severity: `nonfatal`

6. Subject: `items/thm-harmonic-conjugate-on-homologically-simply-connected-domains.md`
   Location: step 3.1
   Defect: `citation-inaccurate`
   Evidence: same issue as the local-potential theorem: the zero-gradient holomorphicity claim was present but uncited. The repaired item now declares the exact published theorem as `[L4]`.
   Severity: `nonfatal`

## Counts and page verdicts

- Assigned item files opened: `65`
- Cited dependency item files opened: `49`
- Total item files opened: `114`
- Assigned page files opened: `4`

Page verdicts:

- `library/complex-analysis/isolated-singularities-and-laurent-series.md`: clean; no page-prose defect found.
- `library/complex-analysis/isolated-singularities-and-laurent-series-examples.md`: clean.
- `library/complex-analysis/harmonic-functions-and-the-poisson-integral.md`: clean; no page-prose defect found.
- `library/complex-analysis/harmonic-functions-and-the-poisson-integral-examples.md`: clean.

## Verification and blockers

- Ran `node tools/tsx-run.mjs tools/reflow.mts` and `node tools/tsx-run.mjs tools/precheck.mts` on all six changed proof-bearing items:
  `thm-local-holomorphic-potential-for-harmonic-functions`,
  `thm-harmonic-conjugate-on-homologically-simply-connected-domains`,
  `thm-residue-pole-derivative-formula`,
  `cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane`,
  `ex-harnack-inequality-for-a-poisson-kernel`,
  `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions`.
  All six pass `precheck`.
- Regenerated the touched proof-contract entries and rechecked them; the repaired entries no longer emit strict-contract errors.
- Residual blocker: `node tools/tsx-run.mjs tools/proof-contract.mjs research/frontier-19-batch-8.proof-contracts.json --strict` is still red at `118 error(s)` on Tuesday, August 25, 2026. The remaining failures are pre-existing untouched boundary rows plus two untouched example-entry mismatches elsewhere in the batch. I did not widen this reader pass into a full batch-wide contract rewrite.
- No published-content defect, authority blocker, or cross-batch page-edit issue remains from this pass.
