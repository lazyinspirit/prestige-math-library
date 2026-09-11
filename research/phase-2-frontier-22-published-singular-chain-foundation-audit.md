# Frontier-22 published singular-chain foundation audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-singular-simplex-and-singular-chain-group-with-coefficients` | `cd8a86eb62beee9db5b8014dca4361f9a8be0941ca1ef2c19877e18af694a90a` |
| `def-singular-boundary-operator` | `0f4ce68115e39a03597f4923b465a9c4b1deee5b30a2bd563fafa6da6e7e5b2b` |
| `thm-the-singular-boundary-squares-to-zero` | `d46e9dd7e32e0fe61a1cfd4190230804692f250b1bbe4687f3b18013ba0ad184` |
| `def-singular-chain-complex-and-singular-homology` | `ab9105ec1a6341a3647a56174aca8cfed6e74d1d603c13536169dcd49310140a` |
| `def-induced-singular-chain-map` | `0d12962bcdde6a59c3a3d36a8a910705271553f3db0f3bca4c95d2dbbdb4bb1b` |
| `lem-induced-singular-chain-maps-commute-with-boundaries` | `a3c6db445f493941d7115fa1caff04cd762bf48f3f353f6bffeb72167f77cba5` |
| `prop-singular-chains-and-homology-are-covariantly-functorial` | `c3962fd7e949db3a1c44d5b6e378dd7a212baabb03b80910854574afa4e178a0` |
| `def-singular-chain-cross-product-on-generators` | `e44497ad2842c0222f261d74c8acc39de9b3af26e11db05fac36f064f16c8f2b` |
| `lem-singular-chain-cross-product-boundary-formula` | `47c9d865064415813450552ad69187d4b386d713f14fbd7b6e46ad42fa774b6a` |
| `prop-singular-chain-cross-products-are-natural` | `4ef138e247fc93453f274fc4b619379a45b11917d0834e12db75862bff79b40b` |

All ten complete targets and their exact simplex, tensor-coefficient, face-map,
homology and product-topology clauses were read. Every exact ID was searched in
the complete canonical ledger and in each classification section. Singular
chain group with coefficients, boundary-square, induced-chain-map,
covariant-functoriality, shuffle cross product, Koszul boundary sign and
naturality mechanisms were also searched. None of the ten targets had a
classification row or item-specific defect finding. Two prior exact-ID mentions
are supplier checks in separate bounded audits and do not classify these items.

## Bounded dispositions

Singular simplices are continuous maps from the standard simplex. Integral
chains are finite formal sums, and general abelian coefficients are attached by
tensoring rather than by selecting a basis of the coefficient group. The
alternating face formula extends linearly, with the degree-zero and negative
terms set to zero. The cosimplicial identity pairs every codimension-two face
with the opposite sign, proving the boundary squares to zero for integral and
tensor-extended coefficients. Kernels, images and cokernels then give the stated
singular chain complex and homology groups.

Postcomposition sends every simplex to a simplex and commutes termwise with all
face restrictions. It therefore gives a chain map. Identity and composition
hold on generators and extend linearly; the published homology functoriality
supplier transfers them to homology.

The shuffle definition gives a finite signed triangulation chain in the product
simplex. Interior faces cancel between shuffles differing by one adjacent
horizontal/vertical interchange. The remaining first-factor faces have their
ordinary boundary signs and second-factor faces acquire the preceding degree
sign `(-1)^p`. The point-factor cases agree with the same formula. Postcomposing
each shuffle simplex proves naturality directly. No selection principle is
used.

Classification: ten new bounded no-repair-needed dispositions. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies the ten complete targets and the exact integral-coefficient
cross-product clauses used by the active cohomology/Kunneth drafts. It does not
certify the later Eilenberg-Zilber equivalence, arbitrary relative constructions
or every singular-homology consumer. No external source was newly consulted,
no published item was edited, and no independent judgment or exhaustive
discovery claim is made.
