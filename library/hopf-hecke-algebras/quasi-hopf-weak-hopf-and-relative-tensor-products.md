---
page: quasi-hopf-weak-hopf-and-relative-tensor-products
title: "Quasi-Hopf, Weak Hopf, and Relative Tensor Products"
status: draft
items: [def-quasi-bialgebra-and-quasi-hopf-algebra, def-weak-bialgebra-and-weak-hopf-algebra, thm-quasi-bialgebra-modules-form-a-monoidal-category, lem-weak-bialgebra-source-and-target-bases, rem-quasi-and-weak-hopf-extensions-change-different-axioms, prop-weak-bialgebra-module-tensor-product-is-delta-one-image]
examples: []
---

This page gives two separate extensions of ordinary bialgebra structure. A quasi-bialgebra retains a unital algebra coproduct and counit but replaces strict coassociativity by a reassociator satisfying the pentagon; its module category uses that reassociator as the associator. A weak bialgebra keeps a coassociative coproduct and multiplicative coproduct map, while weakening the unit and counit axioms; its counital base algebras determine the relative tensor product of modules.

## Quasi-bialgebra convention

[[def-quasi-bialgebra-and-quasi-hopf-algebra]] fixes the conjugation direction, pentagon, normalization, and quasi-antipode conventions. [[thm-quasi-bialgebra-modules-form-a-monoidal-category]] proves the module tensor action, associator, unit maps, pentagon, and triangle directly. The quasi-antipode data are an additional structure; a quasi-bialgebra need not be quasi-Hopf.

## Weak base and relative tensor product

[[def-weak-bialgebra-and-weak-hopf-algebra]] fixes the weak unit, weak counit, antipode, and counital-map conventions. [[lem-weak-bialgebra-source-and-target-bases]] proves that the source and target counital images are commuting base algebras and constructs the separability idempotent. [[prop-weak-bialgebra-module-tensor-product-is-delta-one-image]] proves that $V\otimes_{H_t}W$ is naturally the image of the idempotent $\Delta(1)$ on $V\otimes_kW$, with $H_t$ as tensor unit.

## Distinct structural changes

[[rem-quasi-and-weak-hopf-extensions-change-different-axioms]] records which bialgebra axioms change in each branch. The examples and counterexample are on the [companion page](quasi-hopf-weak-hopf-and-relative-tensor-products-examples.md).

## Scope

All tensor products here are algebraic over the stated field. The page does not assert a reconstruction theorem, a classification of quasi-Hopf or weak-Hopf algebras, or a physical realization of a generalized symmetry. The ordinary bialgebra module-action coherence result [[thm-hh-bialgebra-module-tensor-coherence]] assumes a coassociative coproduct and unital algebra maps $\Delta$ and $\varepsilon$, as well as the other stated bialgebra axioms.
