---
page: tensor-coherence-and-algebraic-descent
title: "Tensor Coherence and Algebraic Descent"
status: draft
items: []
examples: []
---

A formula involving tensors becomes mathematics only after it descends from a multilinear map. The opening page proves the coherence and descent tools that later sources usually suppress. Scalars are a field k for the Hopf branch; the Hecke branch will explicitly introduce its universal commutative coefficient rings. No infinite tensor expansion or implicit completion is permitted.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-scalar-and-tensor-conventions.** Fix algebraic tensors, left-associated tensor powers, the empty tensor k, opposite algebra, and finite-sum notation. These use the published tensor and algebra definitions; parentheses are removed only after the next coherence lemma.

**lem-hh-tensor-coherence-on-elementary-tensors.** Verify associator naturality, the pentagon, unit triangle and symmetry hexagon on pure tensors; spanning then proves each diagram. This is a concrete proof for vector spaces, not an appeal to general coherence.

**lem-hh-tensor-injections-quotients-and-kernels-over-a-field.** Prove tensoring an injection is injective and ker(p⊗q)=U⊗W+V⊗Z for quotient maps p:V→V/U,q:W→W/Z. Extend finite bases locally; arbitrary complements use explicit AC and def-axiom-of-choice.

**lem-hh-coefficient-extension-and-finite-tensor-separation.** Assuming AC only for infinite ambient spaces, extend a given finite independent family to a basis and extend its coordinate maps by zero on the complement. For Σv_i⊗w_i with the v_i independent, contraction by these maps recovers each w_i, proving evaluation separation. In finite ambient dimension ordinary finite basis extension suffices without AC. This is the exact infinite-dual/rational-coaction justifier and records where Choice enters.

**lem-hh-finite-tensor-duality-and-canonical-coevaluation.** Construct V*⊗W*→(V⊗W)*, prove it is an isomorphism for finite dimensions by product dual bases, and identify Σv_i⊗v_i* with id_V independently of basis. Infinite full-dual surjectivity is not claimed.

**lem-hh-free-associative-ring-and-relations-descent.** Construct R⟨S⟩ as the free R-module on finite words for commutative R, including the empty word; concatenation is associative. Prove its universal property, two-sided generated-ideal description and quotient algebra universal property. This extends the published field tensor-algebra supplier to Hecke coefficient rings.

**lem-hh-universal-presentations-and-base-change.** Prove presentation base change by explicit mutually inverse generator maps: S⊗R R⟨X⟩ identifies with S⟨X⟩ on the word bases, and (S⊗R A)/(image S⊗R I) identifies with S⊗R(A/I) by its balanced-map universal property. This proves the needed right exactness locally without flatness. Tensor an explicitly proved universal basis isomorphism and its inverse to transport the basis to every commutative specialization.

**lem-hh-finite-polynomial-and-localization-constructions.** Construct multivariate polynomial and Laurent rings from finitely supported monomials over a commutative coefficient ring. Prove the universal properties by substitution of finite sums. When the coefficient ring is a domain (in particular Z or Q), ordered exponent leading terms prove the polynomial/Laurent rings are domains; construct their fraction fields from equivalence classes of numerator/denominator pairs and check operations. No domain assertion is made over a ring with zero divisors. Only finitely many variables are needed: the Coxeter generator set is finite even when W is infinite.

**lem-hh-finite-matrix-and-module-preliminaries.** Supply Gaussian elimination, determinant/adjugate identities, and invariance of finite matrix rank under field extension by minors. A square spanning family in a finite free module has a coordinate matrix with a right inverse, hence unit determinant and is a basis. For finite-dimensional algebra modules, strict submodule chains reduce vector dimension; choose a maximal proper submodule by maximal finite dimension to build a finite composition series. Prove a submodule of a finite direct sum of simples splits by induction on the number of summands, without arbitrary Choice. A nilpotent endomorphism has trace zero using its kernel filtration and a finite adapted basis. These finite facts supply HH-14 and later density/dimension arguments without silently appealing to Wedderburn or infinite module decomposition. The published module/simple/semisimple definitions supply terminology; their arbitrary-module complement theorem is not used. The finite splitting proof writes a submodule of S⊕M either as S⊕(N∩M), or as a graph over its projected, inductively split image in M.

**lem-hh-regular-module-detects-linear-and-tensor-identities.** Prove faithful left-regular evaluation at 1 and its tensor powers detect equality of algebra elements. A multilinear identity checked on spanning pure tensors holds globally; a quotient identity requires prior descent.

## Reading and applications

Prerequisite pages: [[tensor-products-of-modules]], [[modules-and-module-homomorphisms]], [[ideals-and-quotient-rings]], [[dual-spaces-bilinear-forms-and-inertia]], [[linear-independence-bases-and-dimension]], [[linear-maps-rank-nullity-and-quotient-spaces]], [[chain-conditions-and-semisimple-modules]], [[relations-functions-and-quotients]]. The companion [[tensor-coherence-and-algebraic-descent-examples]] develops the calculations and failures needed to test these constructions.
