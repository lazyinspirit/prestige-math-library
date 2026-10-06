---
page: finite-abelian-categories-and-eilenberg-watts
title: "Finite Abelian Categories and Eilenberg–Watts"
status: published
items: [def-superfluous-subobject-and-projective-cover-in-an-abelian-category, lem-finite-module-duality-is-exact-with-commuting-bimodule-actions, lem-finite-support-families-of-finite-dimensional-vector-spaces-are-locally-finite, lem-projectives-covering-the-simple-objects-generate-every-finite-length-object, prop-finite-dimensional-module-categories-are-intrinsically-finite, thm-intrinsic-finite-category-hypotheses-give-a-finite-projective-generator, thm-finite-abelian-categories-are-finite-dimensional-module-categories, thm-finite-eilenberg-watts-for-right-exact-linear-functors, thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels, cor-finite-one-sided-exactness-is-equivalent-to-existence-of-the-corresponding-adjoint, cor-exact-finite-tensor-functors-have-right-projective-kernels, cor-finite-eilenberg-watts-is-a-biequivalence]
examples: []
---

This page develops the finite-module theory behind the intrinsic definition of a
finite $k$-linear abelian category. It begins with a general definition of
superfluous subobjects and projective covers in an abelian category, matching
the module notion already in the library, and with the exact contravariant
duality of finite-dimensional modules and their commuting bimodule actions.

From those tools it builds the finite categorical machinery: the category of
finite-support families of finite-dimensional vector spaces is locally finite
with enough projectives but has infinitely many simples and no generator, so
local finiteness plus projective covers is strictly weaker than finiteness; a
projective epimorphism onto each simple generates every finite-length object; and
the finite-dimensional module categories realise the intrinsic finiteness
conditions. The central realization theorem then shows that the intrinsic
hypotheses produce a finite projective generator $P$ with $A=\operatorname{End}_{\mathcal C}(P)^{\mathrm{op}}$ and an exact, fully faithful, essentially surjective module-model functor $\mathcal C(P,-)$ to $A\text{-}\mathrm{mod}$. A specified quasi-inverse requires supplied splitting data for essential surjectivity; the objectwise finite-presentation construction does not select those data simultaneously.

On the functor side the page proves the finite Eilenberg–Watts classification:
right exact $k$-linear functors are exactly the tensor functors of their
bimodule kernels, left exact functors are the Hom functors of the dual kernels,
one-sided exactness is equivalent to the existence of the corresponding adjoint,
exact tensor functors have projective kernels, and the whole classification is a
biequivalence of bicategories. Bimodules have agreeing $k$-scalar actions, and assertions forming functor categories use the explicit set-sized conventions of the items.
