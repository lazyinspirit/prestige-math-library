# Final-adjudicator evidence: `lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts`

Disposition: `repaired`

Source status: `familiar`. No external verification was needed. The horseshoe comparison construction, comparison-map uniqueness up to chain homotopy, and naturality of the homology connecting map are standard homological algebra familiar to the final adjudicator.

## Independent review

I inspected the current lemma and all six direct dependencies; the A/B delta-functor page pair; the batch-10 manifest, notes, item and merged proof contracts, boundary/risk records; the Step-6/Step-7 evidence; both frozen judge rejections; both exact Alpha adjudications; and both Alpha repairs.

The first frozen rejection correctly required existence of a compatible comparison between arbitrary chosen horseshoe middle resolutions. Alpha's first repair supplies the standard construction. Degreewise identify each horseshoe middle term with the biproduct of its end terms. Starting with the fixed comparison lifts on the end resolutions, take the diagonal block maps and solve for an off-diagonal correction. The chain-map defect lands in the relevant cycle kernel by the preceding-degree equation; projectivity of the right-hand resolution term and exactness of the target left resolution lift that defect. Induction gives a middle chain map for which both side squares commute, hence a morphism of short exact sequences of complexes. Applied to the identity map of the original short exact sequence, this compares any two horseshoe choices.

The second frozen rejection correctly distinguished two different uniqueness statements. The fixed-side horseshoe theorem `[L2]` says that middle comparison maps are homotopic only after the two side lifts are fixed. It cannot control changing those end lifts. Alpha's terminal repair adds `[L6]`, the general projective comparison theorem: old and new comparison lifts on each end resolution, because they lift the same object map, are chain-homotopic. Applying the additive functor preserves the homotopy equation, so `[L5]` gives identical maps on end homology. For either fixed pair of side lifts, `[L2]` separately controls the middle comparison. Finally `[L4]` makes the connecting morphism natural for each resulting ladder. These facts prove both the stated horseshoe independence and transport-lift independence without conflating the two theorems.

## Independent metadata/contract repair

The mathematical item required no further edit. Its batch manifest still omitted the horseshoe existence theorem `[L3]` and the newly cited end-lift comparison theorem `[L6]`, and its strategy did not distinguish end lifts from middle maps. I synchronized that manifest entry. Both proof contracts omitted `[L6]` and retained the exact rejected derivation asserting that `[L2]` controlled all comparison lifts. I updated the risk records and regenerated the batch and merged contract entries. No dependency item was changed, so no owner-prerequisite-repair licence is required.

## Focused checks

- Item `precheck` passed.
- Strict batch-10 proof-contract validation selected on this item passed with zero errors and zero warnings.
- Citation fidelity and boundary audit passed.
- Item and page/manifest render checks passed.
- Repository dependency checking passed, with only unrelated repository-wide warnings.

