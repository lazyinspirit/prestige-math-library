# FA evidence — queue b/10

Decision: accepted-after-review. Source status: familiar.
Item: `lem-the-kunneth-cross-product-map-is-well-defined-and-natural`.

I checked the current lemma, its direct cross-product definition, the tensor-total-complex definition, original and final Terra rejections, Sol's adjudication, and the batch-9 contract. The A/B page context and notes fix commutative coefficients here, a direct-sum tensor totalization, and the Koszul differential. The published chain-complex convention is Z-indexed. The original ill-typed coefficient objection is repaired: R is now commutative and both complexes are R-module complexes.

The final objection is solely that the displayed degree n has no explicit quantifier. In the conventional notation of this page, the degree of a graded map is an arbitrary integer, as in the immediately preceding Hom and tensor-complex definitions. There is no fixed special degree or existential assertion to confuse it with. Read at any n in Z, the proof gives precisely the displayed component; the mathematical claim and proof are correct. No library rule requires explicit universal quantifiers on every displayed graded parameter.

Independent calculation: if x,y are cycles, d(x tensor y)=0. If x changes by da, the difference is d(a tensor y); if y changes by db, it is (-1)^p d(x tensor b). Changing both can be done successively. The induced pairing is R-bilinear and balanced, hence factors through H_p(C) tensor_R H_q(D). Summing the component maps gives the direct-sum map because each input has finite support. No convergence assumption or free/PID hypothesis is required. Chain maps send cycles to cycles and commute with both tensor factors, proving naturality. This works for arbitrary integer degrees, zero groups, and unbounded complexes with direct-sum totalization; the parenthetical finite-diagonal wording of the tensor definition does not change its explicit direct-sum formula.

This elementary signed tensor calculation is familiar, with no external verification needed. Exact local locators: `def-homology-cross-product-for-tensor-complexes`, Definition; `def-tensor-product-total-complex-of-chain-complexes`, displayed formula; `def-chain-complex-in-an-abelian-category`, Z-indexed family. The contract's two routine calculations agree with the current argument; no separate item risk_review is prescribed. No edit, dependency licence, judge verdict or pass stamp is needed.

Next action: focused precheck and terminal acceptance; begin position 11 only after recorder acceptance.

Context refresh at position 11: the independently repaired Kunneth Tor-map peer now states its integer degree explicitly. Its construction and the added freeness citation preserve the same natural surjection interface. I checked that this peer change leaves this earlier item and its direct dependencies unchanged and does not affect its proof; reseal the same decision for the updated A/B context.

Context refresh after position 24: The cohomological UCT splitting now explicitly quantifies R,C,G,n and displays the same exact sequence; its section is [f q pi] for a chosen cycle projection. This does not alter the earlier evaluation formula, cross-product, Tor projection, or the shear obstruction to a natural splitting. Those proofs remain independent of any such choice. Own item bytes are unchanged. Reseal the same decision.
