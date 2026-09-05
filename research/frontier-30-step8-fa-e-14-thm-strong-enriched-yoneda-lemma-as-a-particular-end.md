# Final-adjudicator evidence: `thm-strong-enriched-yoneda-lemma-as-a-particular-end`

Disposition: `repaired`

Source status: `familiar`. No external verification was needed. The strong enriched Yoneda lemma, its enriched-wedge formulation, and the internal-hom transposition used to derive it from weak enriched Yoneda are standard enriched-category theory familiar to the final adjudicator.

## Independent review

I inspected the current theorem and all four direct dependencies; the A/B enriched-category page pair; the batch-9 manifest, coverage, notes, item and merged proof contracts, boundary/risk records; the Step-6/Step-7 context; both frozen judge rejections; both exact Alpha adjudications; and both Alpha repairs.

The first frozen rejection correctly found that ordinary wedges over the underlying category impose only global-element naturality and do not in general encode enriched naturality. Alpha's first repair replaces them by enriched wedges. For any `X in V`, an enriched wedge into the diagram `A |-> [A(K,A),F A]` is a family

$$X\otimes\mathcal A(K,A)\longrightarrow F A$$

satisfying the enriched dinaturality equations. Internal-hom transposition identifies this data with the components and enriched naturality equations of

$$\mathcal A(K,-)\Longrightarrow[X,F-].$$

The self-enrichment composition makes `[X,-]` an enriched functor, so `[X,F-]` is well typed. Weak enriched Yoneda then identifies these transformations with

$$\mathcal V(\mathbf 1,[X,F K])\cong\mathcal V(X,F K),$$

naturally in `X`. Thus `F K` represents the enriched-wedge functor, which is precisely the claimed particular enriched end. This is an ordinary representing statement in the underlying category of `V` for the correctly enriched wedge data; it does not collapse the enriched dinaturality equations to underlying-arrow equations.

The second frozen rejection correctly applied the page's foundations: local smallness controls hom collections but does not make the object collection of `V` a set, while the cited self-enrichment theorem requires a set of objects. Alpha's terminal repair adds that exact hypothesis to both the Statement and Given data. Symmetry and right closedness supply the needed self-enrichment/transpositions, and local smallness makes the external hom collections used by weak Yoneda honest sets. Because `K in A`, the indexing category is nonempty in this statement; no empty-source end case is hidden. The proof constructs only this one end and correctly makes no completeness or whole-functor-category claim.

## Independent metadata/contract repair

The mathematical item required no further change. Its batch manifest still cited the ordinary `def-end-and-coend` interface rejected in round 1, even though the terminal item deliberately defines the enriched-wedge universal property inline. It also omitted the internal-hom evaluation and unit theorems actually used as `[L2]`. I synchronized the manifest to the four current dependencies.

The proof-contract risk records omitted the terminal set-object hypothesis. I updated them to distinguish right closedness, local smallness, and set-sized self-enrichment. I also corrected the `one` boundary row: the tensor unit is structural monoidal data, not a numeric or singleton parameter giving a separate value-one case. The contract's citations and derivations already match the current proof and current dependency statements. No dependency item was edited, so no owner-prerequisite-repair licence is required.

## Focused checks

- Item `precheck` passed.
- Strict batch-9 proof-contract validation selected on this item passed with zero errors and zero warnings.
- Citation fidelity produced no missing quote or widening finding for this item.
- The boundary record now correctly treats the structural tensor unit as outside the numeric `one` axis; the batch heuristic's `empty` signal is inapplicable because the statement fixes `K in A`.
- Item and page/manifest render checks passed.
- Repository dependency checking passed, with only unrelated repository-wide warnings.

