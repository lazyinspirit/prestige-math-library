# Reader 15 — batch 15, frontier-42-coxeter-32

Independent Step 5a review completed. This report records mathematical reading and local repairs, not a judge verdict or certification. The live engine status was recomputed from `.autopilot/frontier-42-coxeter-32`: Step 5a is active; the assigned items are current-run drafts. No subagents, publication changes, plan edits, gate transitions or withdrawal were used.

## Opened inventory

Read the complete assigned page prose:

- `library/coxeter-groups/short-loop-polygons-and-quantitative-energy-decrease.md` — A.
- `library/coxeter-groups/short-loop-polygons-and-quantitative-energy-decrease-examples.md` — B, read-only prose.

Read all thirteen current assigned items, checking definitions, statements, facts, proofs/verifications, computations and remarks. The suppliers were traced before completing the mathematical checks on their consumers; the local-geodesic lemma is needed before the midpoint lemma, despite its late position in the page list.

- `items/def-cg-short-loop-homotopy-and-nonshrinkability.md`
- `items/def-cg-cyclic-small-mesh-polygon-and-midpoint-energy.md`
- `items/lem-cg-cat-one-short-and-closed-local-geodesics.md`
- `items/lem-cg-polygon-midpoint-drop-and-equality.md`
- `items/lem-cg-finite-spherical-comparison-disks-and-radius-estimates.md`
- `items/lem-cg-local-cat-one-products-from-sine-comparison.md`
- `items/lem-cg-comparison-product-perturbation-and-degenerate-limits.md`
- `items/lem-cg-uniform-energy-decrement-and-short-class-closedness.md`
- `items/lem-cg-bowditch-quantitative-short-loop-control.md`
- `items/ex-cg-midpoint-iteration-on-a-spherical-triangle.md`
- `items/ex-cg-equally-spaced-points-on-a-short-circle-are-stationary.md`
- `items/ex-cg-null-homotopy-versus-short-loop-shrinkability.md`
- `items/ex-cg-zero-length-boundary-of-the-energy-criterion.md`

Opened the core supplier definitions and relevant proofs, with special attention to actual hypotheses and comparison domains:

- `items/def-cg-cat-zero-cat-one-and-local-geodesic.md`
- `items/def-cg-euclidean-cone-and-spherical-join-metrics.md`
- `items/lem-cg-comparison-convexity-and-model-spaces.md`
- `items/lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity.md`
- `items/thm-cg-compact-local-cat-one-short-circle-criterion.md`
- `items/thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion.md`
- `items/thm-cg-cone-join-metric-and-local-product-chart.md`
- `items/lem-cg-alexandrov-comparison-triangle-gluing.md` — Statement, Facts and complete numbered proof, used to trace the compact short-circle criterion's patchwork and angle comparisons.

Opened the following elementary supplier Statement/Definition sections, rather than auditing their complete recursive proof closures:

- `items/cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets.md`
- `items/cor-connected-subsets-of-the-line.md`
- `items/cor-inner-product-induces-a-norm.md`
- `items/cor-mean-value-theorem.md`
- `items/cor-monotone-converges-iff-bounded.md`
- `items/cor-pi-is-the-first-positive-sine-zero.md`
- `items/cor-sin-x-over-x-limit.md`
- `items/def-axiom-of-choice.md`
- `items/def-derivative.md`
- `items/def-euclidean-spheres-and-closed-balls.md`
- `items/def-geodesic-and-geodesic-metric-space.md`
- `items/def-higher-derivatives-and-smoothness.md`
- `items/def-interval.md`
- `items/def-metric-ball.md`
- `items/def-metric-compactness.md`
- `items/def-metric-compactness-variants.md`
- `items/def-metric-continuity.md`
- `items/def-metric-convergence.md`
- `items/def-metric-space.md`
- `items/def-pointwise-uniform-and-uniformly-cauchy-convergence.md`
- `items/def-principal-inverse-sine-and-cosine.md`
- `items/def-real-and-complex-inner-product-space.md`
- `items/def-real-limit.md`
- `items/def-upper-bound.md`
- `items/lem-closed-subset-of-a-compact-space-is-compact.md`
- `items/lem-metric-reverse-triangle.md`
- `items/lem-metrics-on-rn.md`
- `items/thm-algebra-of-derivatives.md`
- `items/thm-cauchy-schwarz-in-an-inner-product-space.md`
- `items/thm-chain-rule.md`
- `items/thm-compact-implies-the-other-compactness-forms.md`
- `items/thm-continuous-image-of-a-compact-space-is-compact.md`
- `items/thm-derivative-of-an-inverse.md`
- `items/thm-extreme-value-metric.md`
- `items/thm-fermat-interior-extremum.md`
- `items/thm-finite-products-of-compact-spaces.md`
- `items/thm-heine-borel-rn.md`
- `items/thm-heine-cantor-metric.md`
- `items/thm-lebesgue-number-lemma.md`
- `items/thm-principal-inverse-sine-and-cosine-derivatives.md`
- `items/thm-second-derivative-test.md`
- `items/thm-sine-and-cosine-addition-formulas.md`
- `items/thm-sine-and-cosine-derivatives.md`
- `items/thm-sine-cosine-signs-monotonicity-and-ranges.md`

Task evidence opened: the batch page manifest, the batch proof contracts (targeted rows and exact supplier quotations), and cross-batch supplier mappings. These were checked against current items rather than treated as mathematical verdicts. The original manifest/full-status outputs were truncated; the manifest inventory was subsequently extracted without relying on missing output.

## Authoritative source reading

Downloaded the complete author-hosted Bowditch preprint from <https://www.bhbowditch.com/papers/bhb-catone.pdf>. The web opener failed, but direct download succeeded. Its 27 scanned sheets contain no extracted text; read sheets 10–16 as rendered images, covering printed pp. 19–32. Relevant locators actually read:

- Printed pp. 19–20, Theorem 3.1.5, Theorem 3.1.6, Corollary 3.1.7 and Proposition 3.2.1: monotone versus short homotopy, compact-loop alternative and Cartesian product comparison. Proposition 3.2.1 uses the model product of two round spheres; the item gives a local differential-comparison proof rather than relying on the preprint's smooth-manifold assertion.
- Printed pp. 21–24, Lemmas 3.3.1–3.3.7, Proposition 3.3.8 and Lemmas 3.3.9–3.3.10: energy/length bounds, equality, convergence and openness of the basin, bounded iteration, the uniform decrement and radius estimate.
- Printed pp. 25–28, the complete relevant finite-disk argument through Lemmas 3.3.11–3.3.14: intrinsic quadrilateral separation, comparison-cell topology, distance domination, interior cone angles, global CAT(1), boundary midpoint angles, and the perturbation argument.
- Printed pp. 29–32, Theorem 3.3.15 and Lemmas 3.4.1–3.4.7, followed by the proof of the compact-loop alternative on p. 32: closedness in the short piece, polygonal transfer, midpoint shortening and exclusion of closed local geodesics from the constant class. Only the beginning of Lemma 3.4.8 on p. 32 was inspected; its continuation is not evidence used here.

Bridson–Haefliger and Davis were cited in the items but their full texts were not independently read in this review. The corresponding local supplier statements and arguments were opened as listed above.

## Repairs and mathematical evidence

1. `lem-cg-cat-one-short-and-closed-local-geodesics`: step 2.2 compared an absolute parameter with pi (`u_0+epsilon<min(t,pi)`), which fails for intervals translated beyond pi. The extension now bounds the elapsed arclength `u_0+epsilon-s<pi`, with the positive margin justified by `u_0<t` and `t-s<=pi`. It also explains why a length-minimizing unit-speed path preserves every subdistance; F4 now explicitly cites Heine–Borel compactness and the Lebesgue-number subdivision instead of attributing compactness to the interval definition. Statement (ii), F1/F4/F7, step 3.1 and the conclusion now match the current supplier definition's arbitrary constant speed: distances are `lambda|s-t|`, zero speed is constant, and arbitrary-interval length is explicitly the supremum over compact restrictions. Empty/one-point intervals and translated parametrizations are included. The original unit-speed equality would be false for a speed-zero path under the live supplier definition.

2. `lem-cg-polygon-midpoint-drop-and-equality`: step 1.3 invoked a global CAT(1) continuity theorem directly in a merely locally CAT(1) ambient space. The repaired proof fixes a common CAT(1) ball containing both endpoint pairs and identifies its segments with the midpoint segments by uniqueness. Step 2.1 explicitly matches the sup metric with the finite product topology. Statement (v) and step 3.2 handle a zero-length iterate as a constant fixed tuple before using a positive-radius ball, respecting the declared ball convention. Step 4.2 now treats empty compact energy bands and places every edge of an equality curve in the convex small CAT(1) ball; the closed-local-geodesic diameter theorem is applied inside that CAT(1) ball, not to the whole locally CAT(1) ambient space. This supplies the previously omitted hypothesis of the contradiction.

3. `lem-cg-local-cat-one-products-from-sine-comparison`: step 8.1 now constructs a closed small CAT(1) product ball, meeting the local-CAT definition. Added exact calculus prerequisites in F11/deps for the interior minimum, second-derivative sign, higher smoothness, derivative algebra, inverse derivatives and the mean-value theorem. Steps 1.1–4.1 now explain the common refinement of length partitions, the equality case forcing proportional component speeds, the positivity of `u-sin(u)cos(u)` and `sin(u)-u cos(u)`, and the differentiability domain of the radial functions. These close prerequisite gaps in the sine-comparison calculation; no curvature-tensor assertion is substituted for the argument.

4. `lem-cg-finite-spherical-comparison-disks-and-radius-estimates`: Statement (iv) now explicitly requires `0<L(x)<2pi`; without it the defined eta/mu can lie outside the separation constant's domain. Statement (ii)/step 1.2 distinguish degenerate comparison triangles from mere equality of radial distances, and handle zero comparison angles directly. Step 4.1 previously cited an Euclidean polyhedral link theorem as a piecewise-spherical link criterion, which that theorem's statement does not supply. The repaired argument constructs the spherical vertex chart using the singleton join with its circle/interval link, the join–product cone isometry, and the proved Euclidean cone criterion; it explains the smaller induced-metric balls and boundary angles greater than pi. Added the exact join definition and join–product supplier to deps. Step 6.1 now writes the midpoint cosine contradiction that excludes a radial maximum in a boundary segment interior. Bowditch's Lemmas 3.3.12–3.3.14 confirm the intended finite-disk route; the local spherical chart is proved here from the opened suppliers.

5. `lem-cg-comparison-product-perturbation-and-degenerate-limits`: the Statement now names the original tuple and requires `x in C^0_h(n)` and `0<L(x)<2pi`; these were present only in Given, while Statement (i) claimed a basin conclusion for the perturbation. Step 1.1 cites bounded monotone convergence and shows the regular-polygon scale tends to zero. The componentwise length inequalities, strict Euclidean face triples, preserved edge lower bound and finite-index limiting argument were checked; no squared-additive length identity is asserted.

6. `lem-cg-uniform-energy-decrement-and-short-class-closedness`: the displayed definition now explicitly chooses half the minimum, rather than naming the full minimum while describing it as half. Step 2.1 uses the valid cyclic bound `k<=n-1`, so `2 sqrt(k Delta)<=n sqrt(Delta)` for every `n>=3`; the former stated intermediate estimate with `k<=n` did not establish that bound for all n. Step 1.4 explains persistence of straight equilateral tuples under the half-edge shift using short local geodesics in uniform CAT(1) balls. Step 4.1 supplies the actual endpoint bounds on the chosen minorant via `delta<=mu/2`. Endpoint wording refers to this explicit guaranteed minorant, rather than claiming that the mere vanishing of a lower bound proves a fact about every actual deficit.

7. `lem-cg-bowditch-quantitative-short-loop-control`: step 1.4 handles constant loops before introducing the ball of radius `L/4`, and explains the induced local CAT(1) balls in the convex compact subspace K. Step 3.1 explicitly cites bounded monotone convergence for lengths and energies, with positivity of the length limit justified by nonmembership in the basin. Checked the fixed fine sampling, normalized polygon-loop continuity, length-controlled suffix replacement, midpoint-slide contraction, closed-geodesic limit and radius-ball contraction. The equivalence of basin membership with arbitrary short-loop shrinkability is proved by its closed-geodesic limit argument, not merely by the fixed-polygon homotopy clause in the Statement.

8. `ex-cg-midpoint-iteration-on-a-spherical-triangle`: retained the correct computed recursion `cos(s_{k+1})=(1+3 cos(s_k))/(2+2 cos(s_k))`. Step 4.1 now supplies a geometric rate, which the title promised but the original proof established only as convergence: `sin(s_k/2)<=2^{-k/2}sin(s_0/2)` gives `s_k<=C2^{-k/2}` by the opened sine-limit supplier. Added the addition-formula, sine-limit and bounded-monotone-convergence prerequisites. The center calculation and strict energy drop were checked.

9. `ex-cg-equally-spaced-points-on-a-short-circle-are-stationary`: made the epsilon range explicit so the chosen uniform radius exceeds the mesh. Steps 1.1/3.1 now use the actual minimizing criterion `2ell/n<ell/2` for a consecutive triple, rather than the irrelevant bound `2ell/n<2pi`. Step 3.2 proves `m=ell` from the two distinct antipodal arcs and uniqueness below `ell/2`, before applying the minimum-circle theorem. The tuple rotates, while its energy and length are stationary; the displayed title correctly speaks of stationary energy.

10. `ex-cg-null-homotopy-versus-short-loop-shrinkability`: step 1.2 supplies the omitted latitude-length computation using the exact short increment `2 arcsin(cos(phi)sin(|u|/2))`, its derivative at zero and the metric partition definition of length. It proves length on every angular subinterval and hence normalization and uniform-plus-length continuity. Statement (iii) previously assigned a loop directly to the tuple-only basin; it now states the well-defined winding-number classification. Step 1.3 explains the zero-winding lifted contraction and homotopy invariance of the integral endpoint displacement. Added the exact metric-length and derivative suppliers.

11. `ex-cg-zero-length-boundary-of-the-energy-criterion`: replaced the claim that the basin "must" be defined by its limit with the actual equivalent descriptions: limiting zero length and an eventual iterate below `l/2`. Distinguished the chosen minorant's vanishing from a claim about every deficit. The preserved proof computes its two endpoint bounds, handles collapsed edges by variance, and justifies repeated-vertex deletion using the same normalized loop. Adopted precheck's reordered/renumbered canonical steps: collapsed edges are 1.4, the basin criterion is 2.1, and the conclusion is 3.1.

Updated affected rows of `research/frontier-42-coxeter-32-batch-15.proof-contracts.json`: regenerated the eleven repaired items' citations and derivations from final text; refreshed affected supplier quotes in the other assigned contracts; updated the specific boundary evidence and local repair notes. Removed stale `verification.judge` records wherever present in repaired items; the final repaired files have none. No mathematical acceptance stamp was added. The two assigned definitions were read and left unchanged.

## Outside-scope observations and remaining defects

Initially observed three defects in the batch-11 supplier `lem-cg-comparison-convexity-and-model-spaces`: step 2.4 assumed a spherical realization to justify the inverse-cosine range when constructing that realization; step 3.3 incorrectly said the sine-interpolation coefficients sum to one; step 6.2 incorrectly used `2ell/3<pi` for every `ell<2pi`. Before handoff, the other batch's reader corrected all three. Reopened and checked those exact current passages: side inequalities now prove the inverse-cosine range; the coefficient sum is `cos(t-theta/2)/cos(theta/2)>=1`; and the cosine difference is `-2 sin(ell/2)sin(ell/6)<0`. These current arguments close the observed gaps. The historical observations are retained here, not routed as remaining defects. The original bytes were not preserved in an immutable snapshot by this reader, so no producer pre/current hash claim is made for them.

Two confirmed defects remain in the read-only B-page prose; they are the two JSON findings:

- Second prose paragraph, spherical-triangle sentence: `arccos(cos(s)/cos(s/2))` is not the midpoint triangle's side. The opened computation gives `arccos((1+3cos(s))/(2+2cos(s)))`; the former expression is the opposite vertex-to-side-midpoint distance. Replace the page's side/factor claim with the actual recursion.
- Same paragraph, short-circle sentence: a tuple shifted by `ell/(2n)` is not a stationary tuple. Its length and energy are stationary. Qualify the summary as stationary energy/length or rotation invariance.

The B-page prose was left unchanged as required. Both are defective computations/statements, not short proof omissions, and are marked fatal for routing.

## Page verdicts and handoff

- A page: review completed with the local item repairs above. No remaining assigned-item or A-prose defect identified in the material read. The quantitative claims retain their exact basin and short-length restrictions; no proposed withdrawal.
- B page: hold for correction of the two summary statements by the authorized lead. All four example items were reviewed and repaired as detailed above.

No unresolved mathematical blocker identified within the material actually checked. The two B-summary repairs remain for Step 5b. This review is not an exhaustive recursive audit of every transitive supplier. Live batch-11 edits required targeted rereading; source reading is limited to the exact Bowditch pages listed above.

## Local validation

For every repaired item ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` followed by `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`; final results are eleven passes. Reflow reported unchanged layout. The zero-length example first returned REPAIR, and its canonical reordering was adopted before a passing rerun. These are format checks, not independent mathematical audits.

The final post-edit layout run used one batched `node tools/proof-layout.mjs` command listing all eleven changed paths: **11 items, 91 steps, 0 defects**. The regenerated batch contract check `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-15.proof-contracts.json --strict` returned **0 errors, 0 warnings, 13/13 items checked**. One boundary evidence sentence first failed the locator check; it was anchored to Statement (i)–(iii) and step 1.3 and the final check passed. Scoped render validation on all eleven repaired items returned OK (all mathematics parsed by KaTeX and all YAML parsed by the renderer). The final short-geodesic citation addition was followed by reflow, a passing precheck, contract regeneration and a passing contract check, and a passing one-file render check. The batched layout check was refreshed after that last item edit.
