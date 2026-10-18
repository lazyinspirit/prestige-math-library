# Explicit left dual construction: proposed proof carrier

Use first the corrected opposite tensorator in convention-and-separability.md. Write O=Aop with multiplication m c^-1 and K=A⊗O, L=O⊗A, both with positive braided tensor multiplication. All associations below are the canonical ones of C; the ordinary associator pentagon ensures the displayed expressions with brackets restored are equal. Denote the iterated multiplication of A by μ_r. For a permutation π let `n_π` mean its negative permutation braid: interchange adjacent U,V by `c_{V,U}^{-1}: UV→VU`, using any reduced expression for π. Independence of reduced expression follows from commuting disjoint crossings and the inverse braid relation, itself obtained by naturality and the two inverse hexagons. No symmetric-braiding relation is used.

The proposed lemma supplies a LEFT dual, with e:O⊗A→1 and i:1→A⊗O. This orientation must be stated: a separate right dual can be obtained by repeating the construction with the inverse braiding and positive opposite, not by silently identifying the two opposites.

Take e to be underlying A with left L-action

`λ=μ_3 c_{A⊗A,A}^{-1}: A⊗(A⊗A)→(A⊗A)⊗A→A`.

Take i to be underlying A with right K-action

`ρ=μ_3 c_{A,A⊗A}^{-1}: (A⊗A)⊗A→A⊗(A⊗A)→A`.

Thus the opposite input moves to the far right in λ and to the far left in ρ. These actions are associative: expand the product of L or K, expand the two inverse crossings past products by the inverse hexagons, and use naturality to move crossings before multiplication. In each action equation the positive crossing in the tensor product algebra cancels the adjacent inverse crossing introduced by the opposite multiplication. What remains is the same negative permutation followed by μ_5. In ordinary word notation both sides for λ on `(a,b,c,d,x)` have word `b d x c a`, and both sides for ρ on `(x,a,b,c,d)` have word `d b x a c`; these words specify the resulting permutation, not an elementwise assumption about C. All residual crossings are negative and have precisely the inversions of these permutations. Units cancel by braiding naturality with η and the unit equations. This proves that the displayed maps really are bimodules.

The first snake is `(i⊗1_A)⊗_{A⊗O⊗A}(1_A⊗e)`. Its raw underlying tensor has four A slots `(u,v;w,z)`. Define the cusp to the regular A-bimodule by

`P_A=μ_4 n_[2,4,1,3]`,

that is `u v w z→v u w z→v u z w→v z u w`, all three interchanges negative. Its inverse is the composite `A→A^4→snake` inserting `(η,1_A;η,η)`. Check balance on the seven slots `(u,v,a,b,c,w,z)`: acting on the right of i⊗1_A or on the left of 1_A⊗e and then applying P_A both yield

`μ_7 n_[2,5,7,4,1,3,6]`,

with resulting word `v c z b u a w`. To verify this equality, expand the tensor-bimodule action's positive shuffle, λ, ρ, and the opposite product, use naturality to move every crossing before μ, and cancel adjacent positive/inverse pairs. The remaining negative crossings are, respectively, the pairs `(u,v),(u,b),(a,b),(u,c),(a,c),(b,c),(u,z),(a,z),(b,z),(w,z)`, exactly the ten inversions of the displayed permutation. Source and target A-linearity similarly reduce to the negative shuffles with words `a v z u w` and `v z u w a`; no crossing with the external action survives. Hence P_A descends to an A-A-bimodule map.

The two inverse equations are actual balanced-map equations. P_A after unit insertion is 1_A. Conversely, on q(u,v;w,z), transfer the first algebra slot w from the second bimodule through the balancing relation, then transfer the resulting first slot uw through the middle opposite algebra, then transfer the resulting second evaluation slot zuw through the last algebra. The outcome is q(1,vzuw;1,1). In C these three transfers mean exactly the three inverse crossings defining n_[2,4,1,3]; multiplication naturality and the unit identities supply the displayed word order. Thus q equals `s_A P_A q`; q is a split epimorphism by the separability-idempotent construction, so `s_A P_A=id`. This proves the first cusp is invertible, not merely a surjection on generators.

The second snake is `(1_O⊗i)⊗_{O⊗A⊗O}(e⊗1_O)`. On its raw four slots `(u,v;w,z)` define

`P_O=μ_4 n_[4,2,3,1]`,

whose word is `z v w u`, with all five inversion crossings negative. The inverse inserts `(η,η;η,1_A)`. On seven slots `(u,v,b,c,d,w,z)` both middle-action composites reduce to

`μ_7 n_[7,5,2,4,6,3,1]`,

word `z d v c w b u`. The sixteen remaining negative crossings are the inversions of that permutation: z crosses u,v,b,c,d,w; d crosses u,v,b,c; v crosses u; c crosses u,b; w crosses u,b; b crosses u (sixteen in total). The source and target O-actions reduce to μ_5 with the corresponding negative crossing from m_O, proving O-O-linearity. P_O s_O=id follows from units. For the reverse composite, use successively balance in the first O-slot, the central A-slot, and the last O-slot: the word representatives become `(1,v;wu,z)`, `(1,vwu;1,z)`, `(1,1;1,zvwu)`. Restoring the negative crossings gives exactly n_[4,2,3,1]; hence `s_O P_O q=q`, and split epimorphy of q yields the inverse equation.

Consequently e,i have both invertible cusp 2-morphisms and establish the required left dual. There is no use of a diagram. The unit insertions and action maps commute with reassociation since both are the maps preserving the common balanced tensor. Douglas–Reutter's fusion definition asks for these two cusps; its additional pivotal/swallowtail structures are not asserted by this proof. A request for swallowtail coherence beyond this object-dual contract requires separate data and verification.

## Review limitations

The permutation and crossing enumerations above are a candidate direct verification, independently checked in noncommutative ordinary algebra words and in graded braided algebras with bicharacter braiding. They still need owner line-by-line checking against the exact tensor-bimodule shuffle convention used in integration. In particular, this note does not count as an owner audit or complete publication stamp.
