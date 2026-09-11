# Frontier-22 published Kolmogorov-extension audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 | Disposition |
|---|---|---|
| `def-product-sigma-algebra-and-finite-product-sigma-algebras` | `cc9118d985953d22d1a9577d80e2bcb623d3f27a9b571b3b5a6537cf69824c7c` | U-P to clear |
| `def-coordinate-maps-and-cylinder-sigma-algebra` | `9cf7710c932fa622ce510c8752fe7f0f99817cd0265a4d886b3e0a151485286c` | U-P to clear |
| `def-consistent-family-of-finite-dimensional-distributions` | `8d0b9a8d5b3dfc39c2423a3dfde0368829675a08f77fefa0f2fb6b6e3da09eb5` | U-P to clear |
| `def-standard-borel-space` | `0290a2b8b809df65d5847d635a881022b6876edf23cd7807519e4aa805b677b2` | U-P to clear |
| `lem-finite-products-of-standard-borel-spaces-are-standard-borel` | `12e5c3beeac81818f0a4fd3377cda9e3c8a2ed9ec4811786930b935bd11e4604` | U-P to clear |
| `lem-finite-coordinate-cylinder-sets-form-an-algebra` | `c6e573aa79fa4311fbbeb22acbd1859ea06a6c7e865508403c80a7ae5999d33b` | U-P to clear |
| `lem-finite-coordinate-cylinders-form-a-pi-system` | `840434a28a3ae5d4a76133825bf9743703ec404ec4dba37236b2561e002a5eb2` | clear |
| `lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined` | `d34a3f033a0c0e195def8ed59b2aa979b0abdd20c1c54a637e5cd71667fe804d` | clear |
| `thm-borel-probability-measures-on-polish-spaces-are-inner-regular` | `94f9b181cffe1e706b1f6aa601ad0234b790a09f95f0658ba96768a87ad8af0f` | U-P to clear |
| `thm-caratheodory-extension-theorem` | `6796cda3641e2da9a707feea48617a01401ec8f4740ea7db84d845a67331ae61` | clear |
| `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` | `a73a3887413fcdd5825e0b0ac475adc43ab0cd223f7f9cee81bedb75ff737c3d` | U-P to clear |

All eleven complete targets and the clauses used by the current arbitrary-index
coordinate pullback were read. Every exact ID, alias field, finite-product
enumeration, cylinder algebra/pi-system, common-support premeasure,
Polish-presentation selection, compact approximation, diagonal subsequence,
inactive-coordinate choice and Caratheodory extension mechanism was searched
across the whole canonical ledger. Eight items each had one U-P row; three were
unclassified. Each moves or enters exactly once.

## Product and cylinder interfaces

The binary, empty and recursively finite product sigma-algebras are coherent.
For an unordered finite support, coordinate generators give the same sigma
algebra under every enumeration. Pulling two cylinder bases to their finite
union proves both algebra closure and binary-intersection closure, with the
empty-support cylinders supplying the empty set and whole product.

Consistency under finite coordinate restriction makes the cylinder law
independent of its displayed support. The proof's fixed point in the full
product turns equality of lifted cylinders into equality of finite bases, and
one common finite support proves finite additivity. The Kolmogorov theorem's
input implies every coordinate space is nonempty because a probability law on
each singleton support exists; full AC then supplies a point in their product.
Thus the premeasure lemma's nonempty-product hypothesis is met.

The standard-Borel definition retains the measurable structure without
selecting a topology. Finite choice of presentations is enough for a finite
product, whose product Polish topology has exactly the finite product Borel
sigma-algebra. The main theorem uses full AC once to choose compatible
coordinate presentations for the whole set-indexed family.

## Tightness, extension and uniqueness

The inner-regularity proof selects finite dense-ball unions with summable loss.
Their closed intersection is totally bounded and complete, hence compact.
Distance-to-the-complement cores handle open sets, and the lambda-system
argument extends compact inner/open outer approximation to all Borel sets.
Countable choice is stated and covers the simultaneous approximants.

The Caratheodory theorem is a correct wrapper around its published induced
outer-measure, source-algebra measurability and agreement clauses. It states
countable choice explicitly. The current main theorem assumes full AC, so this
hypothesis is propagated.

For decreasing cylinders of uniformly positive mass, enlarge supports along
the countable active-coordinate union and choose compact bases with summable
loss. Every finite intersection has positive mass. Points in those finite
intersections admit successive compact-coordinate subsequences; the diagonal
limits are compatible under the fixed coordinate projections and lie in every
compact base. AC fills inactive coordinates, contradicting empty intersection.
This proves premeasure continuity. Caratheodory gives existence and the
cylinder pi-system plus total mass gives uniqueness exactly on the generated
cylinder sigma-algebra.

Classification: eight U-P-to-clear moves and three new bounded clears. No
repair, new axiom, supplier or Phase-2 pair is needed.

## Current frontier impact

`lem-lc-random-coordinate-product-measure-pullback` uses the arbitrary-index
standard-Borel extension theorem under explicit ZFC and then the separately
cleared finite-measure uniqueness lemma. These published interfaces are
adequate; no current frontier blocker arises on this branch.

## Limits

This audit is bounded to the eleven targets and the exact extension/pullback
interfaces. It does not audit every outer-measure supplier or the draft's other
large-cardinal arguments. No published or draft item was edited, no external
source was newly consulted, and no independent judgment or exhaustive
discovery claim is made.
