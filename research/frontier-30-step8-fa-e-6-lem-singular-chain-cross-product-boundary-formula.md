# Final-adjudicator evidence: `lem-singular-chain-cross-product-boundary-formula`

Disposition: `repaired`

Source status: `familiar`. No external verification was needed. The Eilenberg-Zilber shuffle cross product, cancellation of internal faces, and graded Leibniz boundary sign are standard singular-homology calculations familiar to the final adjudicator.

## Independent review

I inspected the current lemma and both direct definitions; the A page `singular-chains-and-singular-homology` and B companion; the batch-11 manifest, coverage, notes, item and merged proof contracts, boundary record, and risk review; the Step-6/Step-7 records; both frozen judge rejections; both exact Alpha adjudications; and both Alpha repairs.

The first frozen rejection correctly found that the original proof misclassified faces of a shuffle simplex: a simplicial boundary deletes a path vertex, and an internal vertex deletion whose adjacent steps have different directions is a diagonal face shared by two adjacent shuffles. Alpha's first repair correctly pairs those faces; swapping the adjacent horizontal and vertical steps reverses the shuffle sign while leaving the boundary position unchanged, so the paired internal faces cancel. The uncancelled boundary faces are the horizontal and vertical product-boundary faces. Their signs are respectively `(-1)^i` and `(-1)^{p+j}`, producing

$$\partial(\sigma\times\tau)=\partial\sigma\times\tau+(-1)^p\sigma\times\partial\tau.$$

The second frozen rejection correctly observed that the former universal shuffle-chain identity was undefined at `p=0` or `q=0`, because it named `EZ_{-1,q}` or `EZ_{p,-1}`. Alpha's terminal proof now handles both cases first. When `p=0`, the unique shuffle is the product of a point simplex with `tau`, so its faces are precisely the products with the faces of `tau`; the `partial sigma` term is zero. The analogous direct face computation handles `q=0`. Only after these cases does step 3.1 assume `p,q>0` and use the lower-dimensional shuffle chains. The simultaneous `p=q=0` case is included and gives zero on both sides. Bilinearity then extends the generator calculation to arbitrary integral chains.

## Independent metadata/contract repair

The mathematical item required no further change. Its batch strategy still described the rejected “omitted step” partition and omitted internal cancellation and the direct zero cases. Both proof contracts still contained the pre-terminal derivations: they omitted the new step 2.1, called the cancellation step 2.1 instead of 2.2, and did not list the zero-case input to step 3.1. I updated the strategy and risk record and regenerated the exact batch and merged contract entries. No dependency item was changed, so no owner-prerequisite-repair licence is required.

## Focused checks

- Item `precheck` passed.
- Strict batch-11 proof-contract validation selected on this item passed with zero errors and zero warnings.
- Citation fidelity and boundary audit passed.
- Item and page/manifest render checks passed.
- Repository dependency checking passed, with only unrelated repository-wide warnings.

