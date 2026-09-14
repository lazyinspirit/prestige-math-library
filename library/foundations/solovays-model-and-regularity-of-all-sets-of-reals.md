---
page: solovays-model-and-regularity-of-all-sets-of-reals
title: "Solovay's Model and Regularity of All Sets of Reals"
status: draft
items: [def-solovay-levy-collapse-setup, lem-solovay-collapse-localizes-countable-ordinal-data, lem-solovay-absorption-factorization-and-homogeneity, def-solovay-hereditarily-ordinal-sequence-definable-model, def-l-of-the-reals-in-the-solovay-collapse-extension, thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability, lem-solovay-inner-model-is-closed-under-ambient-omega-sequences, thm-solovay-inner-model-satisfies-dependent-choice, lem-solovay-borel-code-and-regularity-absoluteness, lem-solovay-random-and-cohen-generics-are-large, lem-solovay-homogeneous-truth-has-borel-representatives, thm-every-solovay-model-set-of-reals-is-lebesgue-measurable, thm-every-solovay-model-set-of-reals-has-the-baire-property, lem-solovay-perfect-tree-of-mutually-generic-name-interpretations, thm-every-uncountable-solovay-model-set-of-reals-has-a-perfect-subset, lem-solovay-universal-measurability-transfers-to-euclidean-spaces, cor-solovay-model-has-no-vitali-or-bernstein-set, thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function, cor-solovay-model-has-no-banach-tarski-decomposition, thm-solovay-model-fails-full-choice, thm-solovay-l-of-the-reals-satisfies-zf-and-dependent-choice, thm-all-sets-of-reals-in-solovay-l-of-the-reals-have-regularity, lem-solovay-construction-is-uniformly-formalizable, thm-solovay-model-regularity-relative-to-an-inaccessible]
examples: []
---

Starting from an inaccessible cardinal in an ambient model of ZFC, the
construction first passes to its constructible inner ground; the inaccessible
is preserved there and every ground parameter has a canonical ordinal code.
The Levy collapse then localizes every real and countable ordinal sequence to a
small intermediate extension. Absorption and homogeneity turn definitions from
real and ordinal parameters into Borel descriptions modulo the null or meagre
ideal. The page keeps the ambient forcing argument separate from the internal
theory of the resulting models.

The principal inner model is $M=HOD(S)$, where $S$ is the class of countable
ordinal sequences. Its ZF axioms, real--ordinal definability, closure under
ambient omega-sequences, and Dependent Choice are proved before they are used.
Random and Cohen genericity yield Lebesgue measurability and the Baire property;
a mutually generic perfect tree yields the perfect-set property. An explicit
digit-interleaving argument transfers measurability from the real line to every
positive finite-dimensional Euclidean space.

The regularity theorems rule out Vitali and Bernstein sets, Hamel bases,
discontinuous additive real functions, and Banach--Tarski decompositions. Each
exclusion has its own calculation, including the countable side of the
Bernstein dichotomy and the positive-radius measure bound for a ball. Since AC
would produce a Bernstein set, $M$ satisfies DC but not full Choice.

The smaller inner model $L(\mathbb R)$ is treated independently. Its canonical
ordinal--real coding supplies DC, and the forcing argument is repeated for its
sets of reals rather than inherited from an unjustified identification with
$M$. The final proof-code transformer gives the one-way relative-consistency
implication from ZFC plus an inaccessible; it does not assert that either
target model internally has an inaccessible cardinal.
