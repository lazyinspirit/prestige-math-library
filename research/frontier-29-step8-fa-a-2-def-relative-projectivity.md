# Final-adjudicator evidence: `def-relative-projectivity`

Disposition: `accepted-after-review`

Source status: `familiar`. No external verification was needed. Relative projectivity for finite-group modules, induction from the trivial subgroup, free modules indexed by a basis, and the Choice boundary for arbitrary free-module projectivity are familiar standard module-theoretic facts.

## Independent review

I inspected the current definition and its two current direct dependencies, the modular-representations A/B pages, the batch-2 manifest and coverage notes, the proof-contract corpus, the Step-6 reader/refuter evidence, the Step-7 group context, both frozen judge rejections, both Alpha adjudications, and both repairs. This definition has no proof-like section and is correctly outside the proof-contract scope, so it has no item-level `risk_review`. The Step-6 reader and Step-7 group records contain no separate finding against it. The strict batch proof-contract check nevertheless verifies the regenerated downstream quotation of this definition in Higman's criterion.

The first judge correctly rejected the original closing sentence: if $W$ is infinite-dimensional, then induction from the trivial subgroup is generally an infinite-rank rather than finite-rank free module. Alpha's first repair replaced the false finite-rank assertion by a direct sum indexed by a basis. The second judge correctly found that this still presumed a basis and the finite-group/field setting without stating them. Alpha's second repair now fixes a finite group $G$, a subgroup $H$, a field $k$, and a $kG$-module $M$, and states the Axiom of Choice before using a basis and the free-summand characterization.

The repaired comparison with ordinary projectivity is correct. When $H=1$, Choice supplies a basis $B$ of the $k$-vector space $W$, and finite-group induction gives
$\operatorname{Ind}_1^G W\cong kG\otimes_k W\cong\bigoplus_B kG$.
Thus a relatively $1$-projective module is a direct summand of a free $kG$-module and is projective by `thm-projective-module-characterizations` under its stated Choice boundary. Conversely, that theorem realizes any projective $kG$-module as a summand of $(kG)^{(I)}$, while distributivity of tensor product over direct sums gives
$(kG)^{(I)}\cong\operatorname{Ind}_1^G(k^{(I)})$.
This proves the claimed equivalence, permits arbitrary rank, and does not silently impose finite-dimensionality on $M$ or $W$.

The core definition—being a direct summand of a module induced from $H$—is the standard page convention and has the correct variance. The current dependency metadata names exactly the ordinary-projectivity definition and the free-summand characterization now cited by the repaired text. The batch manifest's older preservation-proposition edge is no longer used; the current dependency replacement is the narrower, load-bearing edge, and the repository dependency check accepts it. No run-local direct dependency itself was changed by this final review.

## Focused checks

- `node tools/tsx-run.mjs tools/precheck.mts items/def-relative-projectivity.md` exited 0 (there is no proof body to check).
- `node tools/rendercheck.mjs items/def-relative-projectivity.md` exited 0.
- `node tools/proof-contract.mjs research/frontier-29-batch-2.proof-contracts.json --strict` checked all 56 scoped proof-bearing items with 0 errors and 0 warnings.
- `node tools/depcheck.mjs --quiet` exited 0 and reported no cycles, unresolved references, or draft items on published pages.
- The exact current judge hash computation returned context SHA-256 `76b1132e44ba4b67beabf0b23be0023ff279b97726edb8d782485fb248d53a68` and item SHA-256 `cd63be48330cbc8702dc91ee391687ccc6976d8ac88a396bd67eb4512c1c8950`.

No item, dependency, contract, or metadata repair is required.
