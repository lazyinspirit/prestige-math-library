# Final-adjudicator evidence: `prop-satellites-give-the-first-derived-functor`

Disposition: `accepted-after-review`

Source status: `familiar`. No external verification was needed. The characterization of first satellites as degree-one terms of universal delta functors and their comparison with derived functors is standard homological algebra familiar to the final adjudicator.

## Independent review

I inspected the current proposition and all five direct dependencies; the A/B delta-functor page pair; the batch-10 manifest, notes, item and merged proof contracts, boundary/risk records; the Step-6/Step-7 evidence; both frozen judge rejections; both exact Alpha adjudications; and both Alpha repairs.

The first frozen rejection correctly found that supplied resolution data alone did not satisfy the hypotheses of the derived-functor universality theorem: the source must have enough projectives or enough injectives, and data restricted to an arbitrary class would not support the ambient effacement argument. Alpha's first repair now assumes the relevant enough-objects hypothesis in each branch and requires the supplied resolution datum on every object of `A`.

The second frozen rejection correctly found that the original proposition did not state the abelian source and target hypotheses required by every cited derived- and delta-functor theorem. Alpha's terminal repair adds that `A` and `B` are abelian categories before introducing the additive functor.

Under the repaired hypotheses, `[L1]` makes `L^P F` universal in the right-exact/projective branch and `R_I F` universal in the left-exact/injective branch. `[L4]` supplies their natural degree-zero identifications with `F`. The given `S` or `T` is already assumed universal and is equipped with its chosen degree-zero identification. The unique-isomorphism corollary therefore produces an isomorphism of the entire delta functors with the prescribed degree-zero component; taking degree one gives `S_1 ~= L_1^P F` and `T^1 ~= R_I^1 F` naturally. Calling those degree-one terms the first satellites is explicitly the convention adopted by the proposition, so the statement does not claim a different concrete satellite construction.

The Axiom of Dependent Choice matches the invoked derived-functor theorems. The batch strategy, dependency list, proof contracts, and risk record all match the terminal item. No item, dependency, contract, or metadata repair is required.

## Focused checks

- Item `precheck` passed.
- Strict batch-10 proof-contract validation selected on this item passed with zero errors and zero warnings.
- Citation fidelity and boundary audit passed.
- Item and page/manifest render checks passed.
- Repository dependency checking passed, with only unrelated repository-wide warnings.

