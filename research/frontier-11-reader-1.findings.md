# frontier-11 Step-6 independent-reader findings — reader 1, batch 2

- Date: 2026-08-12
- Role: independent reader-1
- Scope: the-fundamental-theorems-of-calculus (239) and examples; arc-length-and-rectifiable-curves (181) and examples

## Verdict

I read all 38 items in the assigned batch scaffold, all four assigned page files, every numbered proof step, every labeled fact, and every direct dependency source item. I also read and checked the new Koch item built for D16. That makes 39 current page items: 35 original proof-bearing items, three remarks/definitions without proofs, and the new proof-bearing counterexample.

I found nine fatal defects and four nonfatal defects. All item-level defects were repaired. Eight fatal defects were unsupported or incorrect proof/citation moves in existing items; the ninth was the D16 omission of the buildable Koch nonrectifiability result. No mathematical defect remains knowingly unfixed in an assigned item.

One repair changes an existing item's claim and therefore requires explicit Alpha attention: ex-sparse-spikes-ftc-conclusion-at-a-discontinuity previously defined \(f(0)=1\) and claimed \(F'(0)\ne f(0)\), contrary to the item's title and scaffold purpose. It now defines spikes only at \(2^{-n}\), \(n\ge0\), so \(f(0)=0\), and proves \(F'(0)=f(0)=0\) at a discontinuity. This was not a silent change. It restores the intended example that the FTC conclusion can hold at a discontinuity.

The batch is mathematically ready for Alpha's reread, but its immutable step-4 artifacts are stale after the authorized item repairs and D16 build. The exact reconciliation required is recorded below. I did not edit any forbidden frontier-11-batch artifact or plan-spec.json.

## Named check D16 — Koch snowflake, Hausdorff dimension, and Schwarz lantern

### Koch nonrectifiability

**Classification: fatal coverage omission; fixed by building the result.**

The suggested lower-semicontinuity argument does not work. The on-disk theorem thm-arc-length-is-lower-semicontinuous-under-uniform-convergence states

\[
L(\kappa)\le \liminf_n L(\kappa_n).
\]

For \(L(\kappa_n)=(4/3)^n\to+\infty\), this gives only \(L(\kappa)\le+\infty\), which is vacuous. It gives no lower bound on \(L(\kappa)\).

The result is nevertheless buildable at reading order 181. I added items/cex-the-koch-curve-is-not-rectifiable.md and placed it on library/real-analysis/arc-length-and-rectifiable-curves-examples.md. The proof:

1. constructs the polygonal Koch approximants with an explicit \(60^\circ\) rotation;
2. proves that the \(n\)-th approximant has \(4^n\) edges of length \(3^{-n}\), hence length \((4/3)^n\);
3. proves a uniform Cauchy estimate and obtains a continuous uniform limit;
4. uses the persistent level-\(n\) vertices as partitions of the limit path, whose polygonal sums are exactly \((4/3)^n\);
5. concludes from the defining supremum that the limit has infinite length;
6. transfers nonrectifiability to the three-copy Koch snowflake boundary.

All dependencies of this proof are available no later than the assigned arc-length pair, and fwdcheck reports no forward-reference error. The external source was checked against [M. Ghomi's Curves and Surfaces, Lecture Notes 1, Exercise 9](https://ghomi.math.gatech.edu/Classes/Math497C/LectureNotes1.pdf), which describes the Koch curve as the limit of the polygonal construction, records the \((4/3)^i\) lengths, and identifies nonrectifiability as the conclusion. The local proof supplies the persistent-partition argument that the source leaves as an exercise.

### Hausdorff dimension

**Disposition: not buildable at this reading order; not added.**

I searched the on-disk reading order, items, and pages for Hausdorff measure, Hausdorff content, Hausdorff dimension, and self-similar dimension machinery. There is no proved definition or theorem supplying any of them. The only directly relevant item found, items/rem-weierstrass-graph-hausdorff-dimension.md, has proved_here: false and expressly says that Hausdorff measure and dimension are out of reach and that no page may cite its formula as established.

A proof of the Koch curve's Hausdorff dimension would require, at minimum:

- definitions of Hausdorff \(s\)-content, Hausdorff \(s\)-measure, and Hausdorff dimension;
- the upper-bound covering argument; and
- a lower-bound theorem, such as the self-similar-set dimension theorem under an open-set/separation condition or a suitable mass-distribution principle.

None is present. The absence is specific to the required machinery, not inferred merely from the topic's name.

### Schwarz lantern

**Disposition: not buildable at this reading order; not added.**

I searched plan-spec.json, the item corpus, and the library pages for a definition or theorem about polyhedral, triangulated, parametrized, or smooth surface area. The plan contains no surface-area entry, and no on-disk item defines the quantity compared in the Schwarz lantern.

A valid Schwarz-lantern item would require, at minimum:

- a definition of the area of a triangulated/polyhedral surface;
- a definition or established formula for the smooth cylinder's surface area; and
- enough geometric comparison machinery to calculate the lantern triangulations and state precisely what kind of convergence fails to preserve area.

Arc length and lower semicontinuity of curve length do not license a surface-area claim. This is therefore a verified missing-machinery disposition.

## Named check B3 — Apostol numbering

**Result: all five locators verified; no citation edit required.**

The previously inaccessible full text was available in this pass at a [Studylib copy of Apostol's Mathematical Analysis](https://studylib.net/doc/27468305/mathematical-analysis-by-tom-a.-apostol--z-lib.org-) and at the [batch's original Studylib URL](https://studylib.net/doc/27619444/mathematical-analysis-2e-apostol). Direct inspection confirmed:

- Definition 6.16: rectifiability is boundedness of inscribed-polygon lengths, and arc length is their supremum;
- Theorem 6.17: a curve is rectifiable exactly when its coordinate functions have bounded variation, with the stated comparison inequalities;
- Theorem 6.18: arc length is additive across a subdivision point;
- Theorem 6.19: the arc-length function is increasing and continuous, and is strictly increasing when the curve is constant on no subinterval;
- Theorem 6.20: two one-to-one paths are equivalent exactly when they have the same graph.

Thus the batch-2 harvest rows using Apostol 6.16–6.20 have accurate internal numbering and content. The local converse used in the strictness discussion of the arc-length-function lemma is elementary and proved locally; it is not being attributed to a stronger Apostol statement.

## Fatal item defects fixed

### F1 — ex-sparse-spikes-ftc-conclusion-at-a-discontinuity

The old Counterexample defined \(f(0)=1\), then concluded \(F'(0)=0\ne f(0)\). That disproved the FTC equality, while the title and assigned scaffold called for an example where the equality holds at a discontinuity.

**Fix and exact effect:** removed \(0\) from the spike set, indexed the retained spikes as \(2^{-n}\) for \(n\ge0\), updated the Darboux-cover proof to include the endpoint spike \(1\), and changed the conclusion to \(F'(0)=f(0)=0\). The function remains discontinuous at \(0\), bounded, and Riemann integrable with integral zero on every subinterval. This is the claim-changing repair highlighted in the Verdict.

### F2 — thm-integration-by-parts-with-interior-derivatives

Old Fact L2 attributed both product integrability and continuous-function integrability to cor-integrability-of-absolute-values-products-and-lattice-operations. That source assumes its factors are already Riemann integrable and does not prove continuous functions integrable.

**Fix and exact effect:** added thm-continuous-implies-integrable and split L2's two clauses across their actual sources. The proof's integrability hypotheses are now licensed; the theorem statement is unchanged.

### F3 — thm-substitution-with-riemann-integrable-inner-derivative

The same inaccurate attribution occurred in L3: the product-integrability corollary did not supply continuous-function integrability.

**Fix and exact effect:** added thm-continuous-implies-integrable and cited it for the continuous factor. The substitution statement and algebra are unchanged.

### F4 — thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators

The same source mismatch occurred in L2 while forming the ordinary Riemann integrand for the \(C^1\) integrator reduction.

**Fix and exact effect:** added thm-continuous-implies-integrable and cited it for continuous-function integrability; retained the product corollary for the product step. No claim changed.

### F5 — thm-differentiation-under-the-integral-sign-on-a-compact-rectangle

Old L2 cited thm-heine-cantor-r for uniform continuity on \([a,b]\times[c,d]\). The cited theorem's Statement concerns compact subsets of \(\mathbb R\), whereas the proof needs a compact subset of \(\mathbb R^2\).

**Fix and exact effect:** replaced that citation with thm-heine-borel-rn for compactness of the closed rectangle and thm-heine-cantor-metric for uniform continuity of a continuous map on a compact metric space. The differentiation theorem is unchanged.

### F6 — lem-arc-length-function-is-continuous-and-nondecreasing

Step 2.1 used

\[
\operatorname{Var}_{[u,v]}(\gamma_j)=V_j(v)-V_j(u)
\]

without a cited additivity theorem. The coordinate-BV criterion alone does not state this identity.

**Fix and exact effect:** added lem-variation-additive-on-subintervals and expanded L2 to derive the displayed identity. This licenses the continuity estimate without changing the lemma.

### F7 — thm-every-rectifiable-path-has-an-arc-length-parametrization

Old L2 stated only that a zero-length path is constant, but step 3.1 used the stronger chord bound on every subpath.

**Fix and exact effect:** restated the full cited corollary in L2: every chord is at most the corresponding subpath length, with the zero-length consequence included. The construction and claim are unchanged.

### F8 — cex-graph-of-x-sin-one-over-x-is-not-rectifiable

The old partition used \(x_0=2/\pi\) and the endpoint \(1\), but no cited fact established \(2/\pi\le1\). Thus the displayed list was not licensed as a partition of \([0,1]\).

**Fix and exact effect:** chose \(K\) with \(x_K\le1\), used the partition \(0,x_N,\ldots,x_K,1\), and invoked unbounded harmonic tails rather than a sum beginning at \(k=0\). The nonrectifiability claim is unchanged.

### F9 — cex-the-koch-curve-is-not-rectifiable

The buildable D16 result was absent.

**Fix and exact effect:** added the item and page entry described in the D16 section. This adds a new claim to the batch rather than changing an existing one.

## Nonfatal defects fixed

### N1 — ex-bounded-discontinuous-derivative-that-is-riemann-integrable

The proof used convergence of the oscillating-point sequence to zero without a dependency that states the reciprocal Archimedean limit in \(\mathbb R\).

**Fix:** added cor-archimedean-reciprocal, stated the exact limit in L4, and renumbered the following facts. No claim changed.

### N2 — cex-arc-length-is-not-continuous-under-uniform-convergence

L3 cited ex-one-over-n-null, whose Statement is a rational null-sequence example, for convergence in the real-valued uniform norm.

**Fix:** replaced it with the real statement cor-archimedean-reciprocal. The sawtooth construction and conclusion are unchanged.

### N3 — thm-rectifiable-iff-coordinate-functions-have-bounded-variation

Old L1 made the coordinate inequalities \(|x_j|\le\lVert x\rVert_2\le\sum_j|x_j|\) appear to be clauses of the cited norm sources, although those exact comparisons were not stated there.

**Fix:** added lem-standard-basis-of-f-n and derived both comparisons in the proof from the standard-basis expansion, Cauchy–Schwarz, homogeneity, and the triangle inequality. The equivalence and constants are unchanged.

### N4 — cex-ae-zero-derivative-does-not-determine-endpoint-change

The closing prose said that an almost-everywhere derivative identity cannot replace “the continuity and integrability hypotheses,” although the example's primitive is continuous and the zero derivative is integrable. The actual missing input is a theorem strong enough to recover endpoint change from an almost-everywhere derivative identity.

**Fix:** reworded the conclusion to say exactly that even continuity of the primitive and integrability of the a.e. derivative do not make the identity sufficient. No mathematical claim or construction changed.

## Every assigned item read

“Clean” means that I read the full item, checked every proof step and every cited dependency clause, and found no item-specific defect. “Clean after fix” points to the repair above.

### the-fundamental-theorems-of-calculus — 10/10 read

- rem-ftc-roadmap — clean.
- cor-ftc-integral-function-differentiable-almost-everywhere — clean.
- thm-newton-leibniz-with-interior-derivative — clean.
- cor-newton-leibniz-with-finitely-many-exceptional-points — clean.
- thm-newton-leibniz-with-a-countable-exceptional-set — clean.
- thm-integration-by-parts-with-interior-derivatives — clean after F2.
- thm-substitution-with-riemann-integrable-inner-derivative — clean after F3.
- thm-one-sided-ftc-at-points-with-one-sided-limits — clean.
- thm-differentiation-under-the-integral-sign-on-a-compact-rectangle — clean after F5.
- thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators — clean after F4.

### the-fundamental-theorems-of-calculus-examples — 6/6 read

- ex-bounded-discontinuous-derivative-that-is-riemann-integrable — clean after N1.
- cex-volterra-bounded-derivative-not-riemann-integrable — clean.
- ex-dense-jump-integrand-with-dense-nondifferentiability — clean.
- ex-thomae-integral-function-differentiates-through-dense-discontinuities — clean.
- ex-sparse-spikes-ftc-conclusion-at-a-discontinuity — clean after F1; claim-changing repair flagged above.
- cex-ae-zero-derivative-does-not-determine-endpoint-change — clean after N4.

### arc-length-and-rectifiable-curves — 15/15 read

- def-path-polygonal-length-and-rectifiability-in-rn — clean.
- cor-chord-length-is-at-most-arc-length — clean.
- lem-polygonal-length-is-monotone-under-refinement — clean.
- thm-rectifiable-iff-coordinate-functions-have-bounded-variation — clean after N3.
- thm-arc-length-is-additive-over-subintervals — clean.
- thm-arc-length-is-invariant-under-monotone-reparametrization — clean.
- prop-arc-length-under-lipschitz-maps-and-euclidean-similarities — clean.
- thm-arc-length-is-lower-semicontinuous-under-uniform-convergence — clean; its inequality direction is central to the D16 correction.
- thm-c1-paths-have-length-equal-to-the-integral-of-speed — clean.
- cor-length-of-the-graph-of-a-c1-function — clean.
- cor-piecewise-c1-paths-have-additive-speed-integral-length — clean.
- def-arc-length-function — clean.
- lem-arc-length-function-is-continuous-and-nondecreasing — clean after F6.
- thm-every-rectifiable-path-has-an-arc-length-parametrization — clean after F7.
- cor-regular-c1-paths-have-c1-unit-speed-parametrizations — clean.

### arc-length-and-rectifiable-curves-examples — 7/7 scaffold items plus one D16 build

- ex-line-segment-and-polygonal-path-length — clean.
- ex-unit-circle-arc-has-length-theta — clean.
- cex-graph-of-x-sin-one-over-x-is-not-rectifiable — clean after F8.
- ex-v-shaped-path-is-rectifiable-but-not-c1 — clean.
- cex-the-same-trace-can-have-different-path-lengths — clean.
- cex-arc-length-is-not-continuous-under-uniform-convergence — clean after N2.
- ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous — clean.
- cex-the-koch-curve-is-not-rectifiable — new D16 item; full proof and dependencies checked after construction, clean after F9.

## Page files read

- library/real-analysis/the-fundamental-theorems-of-calculus.md — clean, including all page-level dependency prose.
- library/real-analysis/the-fundamental-theorems-of-calculus-examples.md — clean.
- library/real-analysis/arc-length-and-rectifiable-curves.md — clean, including all page-level dependency prose.
- library/real-analysis/arc-length-and-rectifiable-curves-examples.md — added only the Koch item to the examples list; otherwise clean.

## Dependency items inspected

Fourteen direct dependencies are themselves assigned items and are covered in the item-by-item list above:

- cor-chord-length-is-at-most-arc-length
- cor-piecewise-c1-paths-have-additive-speed-integral-length
- def-arc-length-function
- def-path-polygonal-length-and-rectifiability-in-rn
- lem-arc-length-function-is-continuous-and-nondecreasing
- lem-polygonal-length-is-monotone-under-refinement
- prop-arc-length-under-lipschitz-maps-and-euclidean-similarities
- thm-arc-length-is-additive-over-subintervals
- thm-arc-length-is-invariant-under-monotone-reparametrization
- thm-arc-length-is-lower-semicontinuous-under-uniform-convergence
- thm-c1-paths-have-length-equal-to-the-integral-of-speed
- thm-newton-leibniz-with-interior-derivative
- thm-one-sided-ftc-at-points-with-one-sided-limits
- thm-rectifiable-iff-coordinate-functions-have-bounded-variation

I also opened and checked all 84 current direct dependencies outside the assigned pages:

- cor-archimedean-reciprocal
- cor-cantor-function-is-continuous
- cor-countably-many-discontinuities-integrable
- cor-integrability-of-absolute-values-products-and-lattice-operations
- cor-mean-value-theorem
- cor-trigonometric-parity-and-pythagorean-identity
- cor-vector-valued-ftc-and-lipschitz-bound
- def-absolutely-continuous-function
- def-bounded-variation-and-total-variation
- def-cantor-function
- def-cantor-set
- def-complete-ordered-field
- def-continuity-real
- def-countable
- def-darboux-integral
- def-darboux-sums
- def-derivative
- def-dirichlet-and-thomae-functions
- def-euclidean-inner-product
- def-extended-reals
- def-fat-cantor-set
- def-isometry-and-metric-embedding
- def-limsup-liminf
- def-lipschitz-holder-contraction
- def-monotone-function
- def-norm-and-normed-space
- def-one-sided-limits
- def-oriented-integral
- def-oscillation
- def-p-norms-on-rn
- def-partition-and-refinement
- def-pi-via-first-positive-cosine-zero
- def-pointwise-uniform-and-uniformly-cauchy-convergence
- def-the-integral-function
- def-vector-valued-derivative-and-integral
- def-vector-valued-functions-limits-and-continuity
- lem-countable-iff-surjection-from-n
- lem-extended-reals-complete
- lem-geometric-sequence-null
- lem-integral-elementary-bounds
- lem-jumps-of-the-variation-function
- lem-q-and-irrationals-dense-r
- lem-standard-basis-of-f-n
- lem-subset-of-countable
- lem-uniform-integral-error-bound
- lem-variation-additive-on-subintervals
- thm-additivity-over-subintervals
- thm-algebra-of-derivatives
- thm-cantor-function-properties
- thm-cantor-set-properties
- thm-cantor-set-ternary-description
- thm-cauchy-schwarz-and-the-euclidean-norm
- thm-chain-rule
- thm-componentwise-limits-and-continuity
- thm-continuous-implies-integrable
- thm-darboux-equals-riemann
- thm-derivative-of-an-inverse
- thm-dirichlet-and-thomae-continuity-sets
- thm-fat-cantor-set-has-positive-measure
- thm-ftc-first-part
- thm-ftc-second-part
- thm-heine-borel-rn
- thm-heine-cantor-metric
- thm-heine-cantor-r
- thm-jordan-decomposition-for-bv-functions
- thm-lebesgue-criterion
- thm-linearity-of-the-integral
- thm-monotone-implies-integrable
- thm-monotone-with-prescribed-discontinuity-set
- thm-monotonicity-of-the-integral
- thm-nested-interval-property
- thm-nonnegative-series-bounded-partial-sums
- thm-norm-inequality-for-the-vector-valued-integral
- thm-of-square-roots
- thm-p-series-rational
- thm-quarter-turn-values-and-shift-formulas
- thm-rationals-countable
- thm-recursion
- thm-riemann-criterion
- thm-riemann-stieltjes-c1-integrator-reduction
- thm-sine-and-cosine-derivatives
- thm-the-integral-function-is-lipschitz
- thm-uniform-cauchy-criterion-real-functions
- thm-uniform-limit-continuous-real-functions

No remaining labeled fact in an assigned item says more than its cited source Statement after the repairs above.

## Artifact reconciliation required

The dispatch forbids edits to research/frontier-11-batch-* artifacts and plan-spec.json, so I intentionally left the following non-item state for Alpha/orchestrator:

1. research/frontier-11-batch-2.proof-contracts.json is stale after the repairs. Its strict check reports 24 errors. The affected contract interfaces are:
   - thm-integration-by-parts-with-interior-derivatives L2;
   - thm-substitution-with-riemann-integrable-inner-derivative L3;
   - thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators L2;
   - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle L2;
   - ex-bounded-discontinuous-derivative-that-is-riemann-integrable L4–L6 after fact renumbering;
   - thm-rectifiable-iff-coordinate-functions-have-bounded-variation L1;
   - lem-arc-length-function-is-continuous-and-nondecreasing L2; and
   - cex-arc-length-is-not-continuous-under-uniform-convergence L3.
2. The same contract should be semantically refreshed for the changed sparse-spikes proof, the repaired \(x\sin(1/x)\) partition, and the expanded chord-bound fact in the arc-length-parametrization theorem, even where the strict checker does not detect the prose change.
3. The new Koch item is absent from the frozen batch-2 contracts, manifest/pages artifact, coverage artifact, notes, and plan-spec.json. Those artifacts must be synchronized in an authorized later step. The live page file already contains the item.

These are artifact handoffs, not unresolved mathematical defects in the current item text.

## Validation

The following checks passed:

- precheck on all 13 changed or new items;
- citecheck on all 13 changed or new items, with zero warnings;
- prosecheck on those 13 items and the changed page, with zero errors or warnings;
- rendercheck on those 13 items and the changed page, including YAML and KaTeX;
- validate-plan.mjs on the current plan-spec.json;
- fwdcheck.mjs;
- extcheck.mjs; and
- git diff --check on all tracked batch edits.

The global depcheck has exactly four errors, all outside this batch: the four approved split-state complex-number items still homed on the protected the-complex-exponential-and-eulers-formula page are published without audited/verified metadata. No batch-2 item, including the new Koch item, appears in those errors. I did not touch the protected page or those out-of-scope items.

The strict batch proof-contract check fails for the expected stale-artifact reasons listed above. I did not run tools/gates.mjs, as directed.

## Wrong but not changed; blockers

- I found no remaining mathematical or citation defect in an assigned item that I believe is wrong but left unchanged.
- I did not build the Hausdorff-dimension or Schwarz-lantern results because the verified prerequisite machinery is absent; their exact dispositions appear under D16.
- I did not reconcile the stale batch artifacts or plan because the dispatch expressly prohibits those edits.
- I did not repair the four global depcheck errors because they are outside batch 2 and the relevant page is expressly protected.
- No permission or sandbox blocker was encountered, and no permission prompt was requested.
