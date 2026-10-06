---
page: eilenberg-watts-theorem-and-natural-transformations
title: "Eilenberg–Watts Theorem and Natural Transformations"
status: draft
items: [def-additive-cocontinuous-module-functor, lem-additive-cocontinuous-module-functors-form-a-category, lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving, lem-evaluation-on-the-regular-module-has-a-commuting-right-action, lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural, lem-canonical-free-presentation-controls-eilenberg-watts-comparison, thm-eilenberg-watts-for-arbitrary-unital-rings, thm-natural-transformations-of-tensor-functors-are-bimodule-maps, cor-eilenberg-watts-is-an-equivalence-of-hom-categories, cor-cocontinuous-additive-module-functors-admit-right-adjoints, cor-exact-module-tensor-functors-correspond-to-right-flat-bimodules, lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums, lem-tensor-hom-adjunction-for-bimodules]
examples: []
---

This page develops the Eilenberg–Watts theorem for arbitrary unital rings, with
left modules throughout and no commutativity assumption. It begins by defining
the additive cocontinuous functors $A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$
and proving the schematic category laws and local smallness: every natural
transformation is determined by its component at the regular module, and
admissible components form a set for each fixed pair of functors. The categorical
notation is metatheoretic shorthand under the library's definable-class convention;
proper-class functors and transformation families are not treated as set-coded
objects or morphisms. It also characterizes cocontinuity as right exactness plus preservation of arbitrary
coproducts. Two local suppliers for the arbitrary-ring route record that
$M\otimes_A-$ is additive, right exact and direct-sum-preserving for every right
$A$-module $M$, and that the bimodule tensor–Hom adjunction
$T_M\dashv\operatorname{Hom}_B(M,-)$ holds over arbitrary unital rings.

On that base the page constructs, for an additive functor $F$, the $(B,A)$-bimodule
structure on $F(A)$, the canonical balanced comparison
$\tau_X:M\otimes_AX\to F(X)$ defined before any presentation is chosen, and its
naturality. Canonical free presentations then show $\tau$ is an isomorphism
whenever $F$ is right exact and coproduct-preserving, which yields the
Eilenberg–Watts theorem: up to natural isomorphism the additive cocontinuous
functors are exactly the tensor functors with bimodule kernels, the quasi-inverse
being $F\mapsto F({}_AA)$.

The remaining items classify and apply the theorem: natural transformations
between tensor functors correspond bijectively to bimodule maps with
$\eta_X=f\otimes1_X$; the classification is full, faithful and essentially
surjective, hence a schematic equivalence of categories; every additive cocontinuous
functor acquires a right adjoint $\operatorname{Hom}_B(M,-)$ by transferring the
unit and counit along $F\cong T_{F(A)}$; and a tensor functor is exact exactly
when its kernel is flat as a right module. The argument is choice-free, and the
exactness criterion makes no left-side projectivity claim.
