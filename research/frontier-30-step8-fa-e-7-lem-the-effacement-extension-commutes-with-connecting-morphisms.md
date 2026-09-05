# Final-adjudicator evidence: `lem-the-effacement-extension-commutes-with-connecting-morphisms`

Disposition: `repaired`

Source status: `familiar`. No external verification was needed. The projective/injective ladder argument used to prove compatibility of effacement extensions with connecting morphisms is standard delta-functor theory familiar to the final adjudicator.

## Independent review

I inspected the current lemma and all four direct dependencies; the A/B delta-functor page pair; the batch-10 manifest, notes, item and merged proof contracts, boundaries, and risk review; the Step-6/Step-7 evidence; both frozen judge rejections; both exact Alpha adjudications; and both Alpha repairs.

The first frozen rejection correctly required an actual compatible ladder rather than assuming that objectwise effacements automatically fit together. Alpha's first repair supplied such constructions. In the terminal homological proof, for

$$0\to A'\to A\to A''\to0$$

and an effacement `P ->> A''`, projectivity of `P` lifts that epimorphism to `P -> A`; restricting the lift to its kernel gives `K -> A'`. This is a morphism from the effacement sequence to the given sequence. Effacement independence permits this ladder-compatible choice. Naturality of the source and target connectors, the defining equation for the one-step component, and naturality of the existing degree-`n-1` component then give exactly

$$\partial^T u_n(A'')=u_{n-1}(A')\partial^S.$$

Dually, an injective effacement `A' -> I` extends across `A' -> A`, inducing `A'' -> C` and hence a morphism from the given sequence to the effacement sequence. The defining cokernel equation from the one-step lemma and naturality of the connectors and `u^n` give

$$u^{n+1}(A')\partial^S=\partial^T u^n(A'').$$

Thus both connecting squares commute, and the cited independence lemma removes dependence on the selected compatible effacements.

The second frozen rejection correctly found that the prior text attributed nonexistent “defining kernel or cokernel equations” to the bare dimension-shift lemmas. Alpha's terminal repair instead takes the actual defining equations from `[L1]`, constructs both ladders explicitly, and performs the connector calculation directly. `[L3]` now serves only as background for the monicity/epicity underlying the one-step construction; the proof no longer asks it to supply the equations.

## Independent contract repair

The item and manifest needed no further mathematical change, but both proof contracts were still the pre-terminal version: their citation uses pointed `[L1]` and `[L3]` only to step 2.1, while the current proof uses them in steps 1.1 and 1.2; their derivations described obsolete dominating 3×3 constructions and repeated the rejected attribution to `[L3]`. I updated the risk records and regenerated both exact contract entries from the current proof. No dependency item was edited, so no owner-prerequisite-repair licence is required.

## Focused checks

- Item `precheck` passed.
- Strict batch-10 proof-contract validation selected on this item passed with zero errors and zero warnings.
- Citation fidelity and boundary audit passed.
- Item and page/manifest render checks passed.
- Repository dependency checking passed, with only unrelated repository-wide warnings.

