---
page: higher-categorical-symmetry-and-defect-algebras
title: Higher Categorical Symmetries and Defect Algebras
status: draft
items:
- def-finite-semisimple-module-category-over-fusion-category
- def-g-graded-two-vector-space
- def-modc-weighted-rt-background-interface
- def-separable-algebra-and-bimodule-in-fusion-category
- def-weak-linear-two-category
- lem-canonical-fusion-category-algebra-is-frobenius
- lem-modc-surjective-orbit-tangents-give-finite-orbits
- lem-separability-contracts-normalized-categorical-hochschild-complex
- def-finite-semisimple-two-category
- def-modc-relative-deligne-product
- def-monoidal-weak-two-category
- def-opposite-algebra-in-braided-fusion-category
- lem-canonical-fusion-algebra-modules-and-tensor-sliding
- lem-modc-internal-end-reconstruction-and-eilenberg-watts
- lem-modc-module-category-rank-bound
- lem-modc-module-functors-have-adjoints-and-separable-monads-split
- lem-relative-tensor-product-from-separability-idempotent
- lem-separable-algebra-module-and-bimodule-categories-are-finite-semisimple
- thm-braided-category-tensor-product-algebra-structure
- def-four-cocycle-twisted-monoidal-structure-on-2vect-g
- def-fusion-two-category
- lem-braided-tensor-product-of-separable-algebras-is-separable
- lem-fusion-category-global-dimension-is-nonzero
- thm-separable-bimodule-relative-tensor-is-associative
- lem-canonical-fusion-category-algebra-is-separable
- lem-modc-separable-algebra-object-duals
- thm-four-cocycle-2vect-g-is-fusion-two-category
- thm-three-cochain-gauge-equivalence-2vect-g
- lem-modc-module-deformation-complex-contracts
- lem-modc-module-functor-categories-are-finite-semisimple
- lem-modc-bounded-rank-structure-varieties-have-finitely-many-orbits
- thm-modc-module-categories-are-separable-algebra-modules
- thm-modc-relative-deligne-product-is-algebra-tensor-product
- thm-modc-of-braided-fusion-category-is-fusion-two-category
examples: []
---

This page develops the algebraic structure behind higher symmetries and defect composition. It defines weak linear and fusion 2-categories, constructs the finite-group model $2\mathrm{Vect}^{\omega}_G$, proves its 4-cocycle coherence and identity-on-grading cochain gauge, and gives a separability-projector construction of relative tensor products for bimodules. The general $\operatorname{Mod}(\mathcal C)$ theorem is proved for braided fusion categories over algebraically closed fields of characteristic zero, with AC through the stated classical algebraic geometry suppliers. Its local chain constructs nonpivotal canonical-algebra separability, Eilenberg–Watts, finite semisimple hom categories, adjoints, monad splittings, both object duals, relative products and coherence, explicit fusion-data rank bounds, normalized deformation contraction, and finite-type open-orbit finiteness. All carriers remain draft.

## Reading prerequisite

The plan places this page after [[modular-categories-verlinde-and-tqft]]. That is a reading route. The finite-group 2-vector-space model is independent of modularity. The algebraic $\operatorname{Mod}(\mathcal C)$ construction applies to a braided fusion category $\mathcal C$; it uses braiding to define the tensor product. The batch manifest records the actual item dependencies separately.

## Composition and anomaly data

In a selected 2+1D defect theory, surface labels may be modeled by objects, line junctions by 1-morphisms, and point junctions by 2-morphisms. Tensor product of objects and categorical composition of 1-morphisms have different source and target types. A braided fusion 2-category concerns additional data in a specified 3+1D setting; the 2+1D algebraic construction here does not classify those theories.

For finite $G$, the scalar class $[\omega]\in H^4(G;\mathbb C^\times)$ obstructs removing the pentagonator by the identity-on-grading cochain gauge defined on this page. This is an algebraic obstruction for the stated model. It is distinct from the Maslov/framing correction in the PA-47 surgery construction, and neither alone classifies physical anomalies.

## Weighted RT background

The full PA-47 weighted state-space, bordism-map and factorization interface is recorded in [[def-modc-weighted-rt-background-interface]]. Its actual supplier [[thm-weighted-rt-tqft-and-factorization]] proves the complete marked weighted RT functor, with positive weight action, exact cap-reference correction and both geometric sewing inverses. The algebraic Mod(C) theorem above has no logical dependency on RT data; this separate background supplies no canonical physical realization or phase classification.

## Modeling boundary

The October 2, 2026 preprint [Kobayashi, Prem, and Yu](https://arxiv.org/abs/2610.03864) is retained as dated research context only. Its abstract claims a general construction; its introduction restricts the main realization result to two stated families, says the proposed mixed-state Ansatz is not proved, and disclaims a classification of mixed-state phases. This batch has read only the abstract and introduction, not the proofs, and uses none of the claims as a premise. A physical identification of algebraic objects with defects requires a specified field theory, boundary interpretation, and dimensional setting. A unitary refinement likewise needs compatible dagger data, positive traces, and unitary coherence maps; the general complex-linear results here do not assert those extra structures.

Companion worked examples: [[higher-categorical-symmetry-and-defect-algebras-examples]].

The algebra model uses left algebra modules. An $A$-$B$ bimodule acts from left $B$-modules to left $A$-modules, so the model identifies the module $2$-category with the $1$-morphism-opposite of the stated algebra bicategory. Tensor multiplication uses the positive middle braiding; the right-to-left action conversion uses its specified inverse. The negative opposite gives a left algebra-bicategory dual and the positive opposite gives a right dual, with their roles exchanged after reversing $1$-morphisms. No pivotal or unitary enhancement is assumed.

