# Step 3a reader report — batch 2

Run: non-ml-math-remaining-81-2026-10-18  
Role: reader  
Coverage: batch 2

## Opened inventory

The assigned manifest contains two published pages and 43 assigned published item carriers.

Pages opened:

- A page: library/real-analysis/monotone-functions-and-discontinuities.md (page ID monotone-functions-and-discontinuities).
- B page: library/real-analysis/monotone-functions-and-discontinuities-examples.md (page ID monotone-functions-and-discontinuities-examples).

A-page items opened (32):

def-monotone-function, def-classification-of-discontinuities, def-oscillation, def-dirichlet-and-thomae-functions, def-intermediate-value-property, def-semicontinuity, lem-baire-category-in-a-closed-interval, def-baire-class-one, def-additive-function, lem-hamel-basis-exists, thm-monotone-one-sided-limits-exist, thm-continuous-injection-on-an-interval-is-strictly-monotone, cor-cantor-function-is-continuous, thm-continuity-iff-oscillation-zero, lem-oscillation-superlevel-sets-are-closed, fs-intermediate-value-property-implies-continuity, thm-semicontinuity-level-set-characterisation, lem-additive-is-q-linear, thm-monotone-discontinuities-are-jumps, thm-continuous-inverse, rem-cantor-function-increases-only-on-a-null-set, thm-discontinuity-set-is-f-sigma, thm-dirichlet-and-thomae-continuity-sets, thm-semicontinuous-evt, lem-additive-bounded-above-on-an-interval-is-linear, thm-froda, thm-continuity-set-realisation, cor-no-function-is-continuous-exactly-on-q, thm-baire-one-continuity-points, thm-cauchy-functional-equation-regularity, thm-monotone-with-prescribed-discontinuity-set, fs-additive-implies-linear.

B-page items opened (11):

ex-locally-unbounded-finite-everywhere, ex-cantor-function-maps-a-null-set-onto-the-unit-interval, ex-thomae-values-and-oscillation-computed, ex-continuous-inverse-gives-the-nth-root, cex-upper-semicontinuous-need-not-attain-its-infimum, cex-continuous-injection-on-a-non-interval-need-not-be-monotone, ex-indicator-of-q-is-baire-class-two-not-one, ex-monotone-function-discontinuous-exactly-at-the-rationals, ex-froda-is-sharp, ex-hamel-basis-additive-function, ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous.

Items were reviewed by dependency level, suppliers before assigned consumers. I also opened the relevant definition/statement and cited Facts & Assumptions sections of all 109 unique external direct dependencies in the manifest. These included:

cor-archimedean-reciprocal, cor-continuous-image-of-an-interval-is-an-interval, cor-every-vector-space-has-a-basis, cor-gcd-quotients-coprime, cor-q-is-meager-and-not-g-delta, def-axiom-of-choice, def-bounded-set, def-canonical-natural, def-cantor-function, def-cantor-set, def-common-divisor-and-gcd, def-complete-ordered-field, def-continuity-real, def-coprime, def-countable, def-equinumerous, def-extended-reals, def-f-sigma-g-delta, def-field, def-finite-sum, def-function-limit, def-infimum, def-injection-surjection-bijection, def-integer-power, def-integers, def-interior-closure-boundary-r, def-internal-direct-sum, def-interval, def-limit-point-r, def-linear-basis, def-linear-combination-and-span, def-linear-independence, def-linear-subspace, def-max-min, def-measure-zero-and-content-zero, def-metric-ball, def-metric-interior-closure-boundary, def-metric-space, def-monotone-sequence, def-natural-numbers, def-neighbourhood-r, def-nowhere-dense-meager, def-one-sided-limits, def-open-and-closed-in-r, def-open-cover-r, def-ordered-field, def-rational-power, def-real-limit, def-real-order, def-sequence, def-series, def-subfield, def-sum-of-linear-subspaces, def-vector-space, lem-coprime-divides-product, lem-countable-iff-surjection-from-n, lem-dependent-iff-a-vector-lies-in-the-span-of-the-others, lem-direct-sum-criterion, lem-extended-reals-complete, lem-finite-set-has-max, lem-finite-sum-laws, lem-function-limit-unique, lem-gcd-basic-values, lem-inf-epsilon, lem-int-embeds-rat, lem-integer-multiples-agree-with-canonical-natural, lem-integer-part, lem-limit-unique, lem-metrics-on-rn, lem-monotone-with-interval-image-is-continuous, lem-nat-embeds-int, lem-nondegenerate-interval-is-not-null, lem-of-abs-value, lem-of-naturals-positive, lem-of-triangle-inequality, lem-power-monotone, lem-q-and-irrationals-dense-r, lem-rat-embeds-dense, lem-restriction-of-scalars, lem-series-tail-invariance, lem-span-is-the-set-of-linear-combinations, lem-span-monotone-and-idempotent, lem-span-of-a-single-vector, lem-subset-of-countable, lem-sum-is-span-of-union, lem-sup-epsilon, thm-algebra-of-continuous-functions, thm-baire-category-r, thm-cantor-function-properties, thm-cantor-set-properties, thm-closure-characterisations-r, thm-composition-of-continuous-functions, thm-connected-subsets-of-r-are-intervals, thm-continuity-preimage-characterisation, thm-geometric-series, thm-induction-principle, thm-infimum-property, thm-intermediate-value, thm-metric-closure-characterisation, thm-nonnegative-series-bounded-partial-sums, thm-nth-roots-exist, thm-of-archimedean, thm-open-set-algebra-r, thm-r-uncountable, thm-rationals-countable, thm-two-sided-limit-iff-both-one-sided, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-well-ordering-principle, thm-zorn.

I additionally opened lem-nat-nonzero-is-successor to verify the natural-number fact needed at the unlicensed step below. This result is not in that assigned theorem’s dependency closure.

## Defects not edited

All affected item carriers have status published. The reader instructions prohibit editing published content, so these confirmed defects are reported for the owner.

1. def-dirichlet-and-thomae-functions, Definition / “The least denominator is the denominator in lowest terms”: the assertion that q(x)/d is a natural number at least 1 follows from d|q(x) only after showing the integer quotient is positive and identifying it with a natural. The argument needed is to write q(x)=dk, use q(x)>0 and d>0 to obtain k≥1, then use the natural embedding. The displayed text does not supply that sign argument.

2. def-dirichlet-and-thomae-functions, same Definition paragraph: the sentence that the integer quotient agrees with real division cites lem-of-naturals-positive. That item states positivity and arithmetic identities for canonical naturals, not compatibility of integer quotient with field division. Derive the equality from the quotient identity and the canonical ring/field embeddings, or cite a source that states the division compatibility.

3. def-baire-class-one, Definition / “The class is strictly larger than the continuous functions”: the indicator of a single point is asserted to be Baire class one without an approximating sequence. For a∈[0,1], the continuous functions φ_n(x)=max(0,1−n|x−a|) converge pointwise to the indicator of {a}; add this witness and the direct discontinuity check.

4. thm-discontinuity-set-is-f-sigma, Proof step 2.1: after choosing a natural m≥1, the proof writes m=n+1. This requires every nonzero natural to be a successor, which is not stated in the item’s dependencies or proof. The published lemma lem-nat-nonzero-is-successor states exactly the needed fact; add it to deps and cite it, or prove the predecessor step.

5. fs-intermediate-value-property-implies-continuity, Refutation step 4.2: y is not introduced or quantified when step 2.3 is invoked to produce c with g(c)=y. Step 2.3 provides a point for every y∈[0,1/2], and step 5.1 later needs this universal assertion for an arbitrary intermediate value. State the quantifier before the endpoint cases.

6. thm-dirichlet-and-thomae-continuity-sets, Proof step 4.2: y is not introduced or quantified when step 2.3 is invoked to produce c with g(c)=y. Step 2.3 provides a point for every y∈[0,1/2]; make that scope explicit before the endpoint cases.

No item or page content was edited. Since no item was changed, no reflow, precheck, or proof-layout command was applicable.

## Page verdicts

- monotone-functions-and-discontinuities: pass. The page summary’s claims, scope, and caveats agree with the assigned item statements reviewed. No page-prose defect identified.
- monotone-functions-and-discontinuities-examples: pass. The examples index matches the 11 assigned B-page items. Its body contains no summary prose requiring a separate correction.

## Blocker and coverage

There was no workflow blocker. Repair was out of scope because the assigned carriers are published; the six findings above remain for the owner. I reviewed the relevant statements/definitions and cited Facts & Assumptions in the 109 external direct suppliers, but did not independently audit their full proof bodies or transitive dependency proofs. No defect is claimed in those external suppliers. No internet search was needed for the familiar real-analysis and algebra claims reviewed.

