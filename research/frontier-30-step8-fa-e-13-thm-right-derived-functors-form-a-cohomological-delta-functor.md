# Final-adjudicator evidence: `thm-right-derived-functors-form-a-cohomological-delta-functor`

Disposition: `repaired`

Source status: `familiar`. No external verification was needed. The injective horseshoe construction, long exact cohomology sequence, comparison-extension homotopy invariance, and derived delta-functor construction are standard homological algebra familiar to the final adjudicator.

## Independent review

I inspected the current theorem and all nine direct dependencies; the A/B delta-functor page pair; the batch-10 manifest, notes, item and merged proof contracts, boundary/risk records; the Step-6/Step-7 evidence; both frozen judge rejections; both exact Alpha adjudications; and both Alpha repairs.

The first frozen rejection correctly found that naturality of a cohomology connector applies only after one has supplied a morphism of short exact cochain sequences; arbitrary horseshoes do not provide such a morphism automatically. Alpha's first repair adds the dual comparison induction. With horseshoe terms written as biproducts of their end resolutions, fixed comparison extensions on the ends determine diagonal blocks. Injectivity extends the off-diagonal correction degree by degree to kill the cochain-map defect. This constructs compatible middle maps and hence a morphism of the two short exact cochain sequences. The exact comparison-extension independence theorem makes the resulting end cohomology maps independent of the chosen extensions, and naturality of the cohomology connector then gives the required connecting squares.

The second frozen rejection correctly observed that the compressed injective-horseshoe statement itself mentions biproduct middle terms but does not explicitly state the short exact cochain sequence needed by long exact cohomology. Alpha's terminal proof supplies that missing inference from the projective horseshoe theorem: pass to the opposite abelian category, where the injective resolutions become projective resolutions. The projective theorem supplies a degreewise split short exact sequence of augmented complexes; translating back reverses the arrows and gives

$$0\to I^\bullet(A')\to H^\bullet(A)\to I^\bullet(A'')\to0$$

degreewise split. An additive functor preserves the biproduct splitting, so applying `F` gives a short exact sequence of cochain complexes in `B`. Long exact cohomology defines the connectors, the comparison theorem identifies the horseshoe middle cohomology with the fixed datum, and the dual comparison argument proves naturality. `[L1]` supplies additive functors, `[L6]` identifies the resulting structure as a cohomological delta functor, and `[L5]` gives `R_I^0F ~= F`. The abelian source/target and all-object resolution-data hypotheses are exactly those required by these interfaces.

## Independent metadata/contract repair

The mathematical item required no further edit. Its batch manifest omitted the projective horseshoe theorem used to derive the split sequence, the change-of-resolution theorem used to return to the fixed datum, and the comparison-extension independence lemma used in naturality. I added all three. Both proof contracts likewise omitted those citation rows and incorrectly said `[L4]` made arbitrary comparison choices cohomologically equal. I updated the risk records and regenerated the exact batch and merged contract entries. No dependency item was edited, so no owner-prerequisite-repair licence is required.

## Focused checks

- Item `precheck` passed.
- Strict batch-10 proof-contract validation selected on this item passed with zero errors and zero warnings.
- Citation fidelity and boundary audit produced no finding for this item.
- Item and page/manifest render checks passed.
- Repository dependency checking passed, with only unrelated repository-wide warnings.

