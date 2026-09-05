# Final-adjudicator evidence: `lem-extend-a-degree-zero-transformation-through-one-dimension-shift`

Disposition: `repaired`

Source status: `familiar`. No external verification was needed. The classical effacement proof extending a partial morphism of delta functors one degree at a time is standard homological algebra familiar to the final adjudicator.

## Independent review

I inspected the current lemma and all five direct dependencies; the A/B delta-functor page pair; the batch-10 manifest, notes, item and merged proof contracts, boundary records, and risk review; the Step-6/Step-7 evidence; both frozen judge rejections; both exact Alpha adjudications; and both Alpha repairs.

The first frozen rejection correctly found that the earlier cohomological characterization was ill typed: the map induced by `u^n` ends in a cokernel, not directly in `T^{n+1}(A)`. Alpha's first repair supplies the missing maps. Exactness makes the connector `partial_S^n` induce an isomorphism

$$q_S:\operatorname{coker}(S^n(I)\to S^n(C))\xrightarrow{\sim}S^{n+1}(A)$$

because the chosen effacement makes `S^{n+1}(A) -> S^{n+1}(I)` zero. Naturality of `u^n` gives the induced cokernel map, and exactness makes `partial_T^n` factor as `q_T`. Thus `q_T overline{u}^n q_S^{-1}` is well typed and is the unique map satisfying the displayed equation. This also covers `n=0`, since the relevant connecting map has degree zero and the dimension-shift lemma is applied at positive degree `n+1`.

In the homological case, `T_n(p)=0` makes `partial_n^T` monic. Compatibility and naturality of the already defined degree-`n-1` component show that `u_{n-1}(K) partial_n^S` is killed by `T_{n-1}(K)->T_{n-1}(P)`, hence lies in the image of `partial_n^T`; this gives existence, and monicity gives uniqueness. Applying the same equation to a covered ladder and cancelling the monic connector proves the stated local naturality. The lemma correctly leaves independence of the chosen effacement to the following item.

The second frozen rejection correctly observed that the former title promised extension from degree-zero data even when `n>1` requires a pre-existing compatible partial family. Alpha's current title, “A partial morphism of delta functors extends through one dimension shift,” accurately scopes the result.

## Independent metadata/contract repair

The terminal mathematical item needed no change, but the batch manifest still carried the rejected title and described the input as only degree-zero data. I synchronized its title and strategy with the actual partial-family hypothesis and local covered-ladder conclusion. The batch and merged proof contracts likewise used the rejected old title throughout their boundary explanations; I updated those direct records. Their citations, derivations, checked nonempty-choice boundary, and risk review already match the current proof. No dependency item was changed, so no owner-prerequisite-repair licence is required.

## Focused checks

- Item `precheck` passed.
- Strict batch-10 proof-contract validation selected on this item passed with zero errors and zero warnings.
- Citation fidelity and boundary audit passed.
- Item and page/manifest render checks passed.
- Repository dependency checking passed, with only unrelated repository-wide warnings.

