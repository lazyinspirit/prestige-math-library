# Step 3a reader report — batch 93

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-93`)  
Review date: 2026-10-21

## Scope and opened inventory

Reviewed the two assigned pages and all 13 assigned items, following their dependency order:

- A page: `knot-cobordism-maps-and-functoriality` — `library/knot-theory/knot-cobordism-maps-and-functoriality.md`.
- B page: `knot-cobordism-maps-and-functoriality-examples` — `library/knot-theory/knot-cobordism-maps-and-functoriality-examples.md`.
- Items: `def-barnatan-tangle-cobordism-category`; `def-decorated-link-cobordism-and-floer-target`; `lem-khovanov-frobenius-tqft-respects-barnatan-relations`; `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing`; `thm-carter-saito-movie-move-equivalence`; `def-knot-floer-cobordism-map`; `lem-knot-floer-cobordism-naturality-and-movie-invariance`; `def-khovanov-cobordism-map-up-to-sign`; `lem-barnatan-carter-saito-movie-moves-up-to-sign`; `thm-barnatan-khovanov-cobordism-functoriality-up-to-sign`; `thm-khovanov-and-knot-floer-cobordism-map-scope`; `ex-knot-kt-40-worked-cases`; `cex-knot-kt-40-boundary-case`.
- Additional local Frobenius suppliers examined for the relevant dependency claims: `def-khovanov-frobenius-algebra-and-cube-of-resolutions` and `lem-integral-khovanov-frobenius-algebra-defines-a-cobordism-functor`.

The batch manifest and page inventories agree on 11 A-page items and two B-page examples (13 total); the batch proof-contract file covers the same 13. The separate `batch-93.notes.md` authoring note says 14 items and 12 A-page items, which is stale and was not treated as authoritative.

## Page verdicts

- `knot-cobordism-maps-and-functoriality` (A): **Pass.** Its frontmatter-only page has the assigned 11-item inventory, retains its prerequisite metadata and `page_layout: compact-v1`, and has no summary body. No page edit was needed.
- `knot-cobordism-maps-and-functoriality-examples` (B): **Pass.** Its frontmatter-only page has the two assigned examples, retains its companion metadata and `page_layout: compact-v1`, and has no summary body. No page edit was needed.

## Repairs and evidence

Eight in-flight assigned items were repaired. No other-batch, B-page, published, or planning artifact was edited.

1. `items/def-barnatan-tangle-cobordism-category.md` — corrected the category construction: cobordisms first generate free abelian morphism groups, with bilinear composition, so the category before and after the local relations is **preadditive monoidal**, not additive. Bar-Natan, *Khovanov’s homology for tangles and cobordisms*, §3 and Definition 3.2 (arXiv `math/0410495v2`, printed pp. 1450–1453) distinguish the preadditive category from its later additive closure `Mat(C)`.
2. `items/lem-khovanov-frobenius-tqft-respects-barnatan-relations.md` — required the TQFT to be additive on morphism groups and stated that it factors as an additive symmetric monoidal functor through the preadditive quotient. Without Z-linearity, equality on the generators does not establish preservation of the integral linear combinations in the S/T/4Tu relations. Bar-Natan, Proposition 7.2 (printed pp. 1470–1471), verifies that this Frobenius TQFT respects those relations.
3. `items/def-decorated-link-cobordism-and-floer-target.md` — completed the doubly pointed Heegaard input by specifying the oriented surface convention, signed transverse intersections at `w,z`, complete meridian systems, and boundary-parallel arcs in the cut handlebodies. Zemke, *Link cobordisms and functoriality in link Floer homology*, Definition 3.1 (arXiv `1610.05207v3`, PDF pp. 10–11), gives the decorated Heegaard-surface and cut-handlebody conventions used to make this interface precise.
4. `items/def-knot-floer-cobordism-map.md` — made the triangle-count recipe specify strict strong admissibility at the marked `w` points, full-marked nonnegative multiplicities and coefficient exponents, the elementary-piece restriction of the fixed Spin-c structure, compatible regular end data, and the rank-zero point model. Ozsváth–Szabó, Definition 4.10 (arXiv `math/0101206`, PDF p. 36), supplies the strict coefficient bound; Zemke, §§2–3 and Remark 2.14 (arXiv `1610.05207v3`), supports the marked-point coloring and two-variable specialization. This defines the representative; the item continues to treat its naturality as a separate assertion.
5. `items/thm-carter-saito-movie-move-equivalence.md` — included planar isotopies in the finite move sequence, since the fifteen local Carter–Saito move types do not subsume ordinary planar isotopy. The proof already allowed planar isotopies between local events; the statement now matches that proof and the local movie calculus.
6. `items/lem-knot-floer-cobordism-naturality-and-movie-invariance.md` — qualified the product `S^3 × [0,1]` composition case: the extension sum is a singleton only when the piece structures are restrictions of the unique product Spin-c structure, and is empty otherwise. This follows directly from the restriction condition in the stated general gluing sum.
7. `items/thm-khovanov-and-knot-floer-cobordism-map-scope.md` — made the same compatibility qualification for the Floer composition clause and specified that Khovanov maps are identified in each morphism set under the action `f ↦ −f`. An orbit set under sign is not a quotient abelian group. Jacobsson, *An invariant of link cobordisms from Khovanov homology*, Theorem 2, §4.2 (arXiv `math/0206303`, PDF p. 24), gives the up-to-sign statement for isotopies in `R^3 × I`.
8. `items/thm-barnatan-khovanov-cobordism-functoriality-up-to-sign.md` — changed “morphism group quotient” to the precise quotient of each morphism set by the action `f ↦ −f`, and retained the noncanonical-sign qualification. The local statement and proof concern maps up to an overall sign, not an additive group quotient.

The sweep-around scope was checked against MWW, *Invariants of 4-manifolds from Khovanov–Rozansky link homology*, introduction and Theorem 1.1 (arXiv `1907.12194`): the source identifies sweep-around as an additional `S^3 × I` movie relation and states its map is the identity. Its §3 proof was not read in full; no claim here relies on it as a full proof. The authored local sweep proof was reviewed. A local exact matrix calculation at `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-quantum-original-repairs/spherical-sweep/check-four-rIII-matrices.py` checked four chain-map identities on 72 colored columns each, two front/back comparisons on 144 entries each, and monotonicity; each family had 80 nonzero coefficients.

## Validation

- Regenerated the assigned proof-contract entries for all 13 items; strict contract validation checked 13/13 with zero errors.
- Reflow and precheck passed for each of the eight changed items. The stale `verification.judge` records were removed as part of the repair workflow.
- The final required proof-layout run covered all eight changed item paths in one command: **8 items, 33 steps, 0 defects**.
- Strict contract validation emitted one nonfatal citation-density warning for `thm-barnatan-khovanov-cobordism-functoriality-up-to-sign`, step 11.1: “cites 4 of 6 declared facts while 5 other step(s) cite none.” I checked the step against the proof: step 11.1 invokes the movie-reduction and Euclidean-move facts, the degree fact, the established step 10.1 sweep identity, and the stated assumption; the other local equivalence facts are used and cited in earlier steps. I found no missing inference from this warning and left the proof unchanged.
- No test suite was run. The finite matrix calculation above was used as a mathematical computation.

## Defects not repaired and findings

No confirmed defect outside the authorized write scope remains. No withdrawal is proposed. The findings JSON therefore has an empty `findings` array.

## Blockers and coverage limits

There is no batch-local blocker. At the last recomputed run status (`2026-10-21T09:58:27.755Z`), batch 93 had not yet been counted in the running `3a-read` stage (92/109); the run also reported unrelated `3a-collect` blocker `collect-71 failed 3x` and `3a-split` blocker `split-83 failed 3x`. The Carter–Saito full article was not retrieved; its result was checked through the local proof/dependency chain and bibliographic/abstract evidence, not a full reading of that source. The recursive dependency closure contains 3,225 IDs; I reviewed assigned items and the direct/claim-bearing dependencies needed for this review, not that entire remote foundational closure.
