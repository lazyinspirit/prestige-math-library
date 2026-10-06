---
page: lie-algebras-and-infinitesimal-group-schemes
title: "Lie Algebras and Infinitesimal Group Schemes"
status: published
requires: [group-schemes-of-finite-type-over-a-field,
           affine-group-schemes-hopf-algebras-and-rational-representations,
           kahler-differentials-conormal-sequences-and-infinitesimal-lifting]
items: [def-lie-algebra-of-a-group-scheme,
        lem-lie-algebra-tangent-space-and-functoriality,
        lem-adjoint-representation-of-an-affine-group-scheme,
        lem-lie-algebra-of-the-general-linear-group,
        thm-lie-bracket-and-adjoint-action-from-infinitesimals,
        lem-invariant-differentials-of-a-group-scheme,
        lem-differentials-generating-a-free-direct-summand-are-nonzerodivisors,
        lem-free-differentials-imply-regular-in-characteristic-zero,
        thm-smoothness-over-characteristic-zero-via-free-differentials,
        thm-cartier-smoothness-for-affine-groups-in-characteristic-zero]
examples: []
---

The Lie algebra of a group scheme of finite type over a field is its tangent
space at the identity, recorded in the two equivalent forms used throughout:
the dual of the cotangent space $\mathfrak m_e/\mathfrak m_e^2$ and the kernel
of reduction on points over the dual numbers. A local lemma proves that this
kernel is an $R$-module $\mathfrak g\otimes_kR$ under addition, that the
identifications are natural, and that a morphism of group schemes induces a
linear map $\operatorname{Lie}(f)$ that is injective on closed immersions.

On the affine side the conjugation action of the group on its Lie algebra gives
the adjoint representation $\operatorname{Ad}:G\to\operatorname{GL}_{\mathfrak g}$,
with the exponential identity $x\,e^{\varepsilon X}x^{-1}=e^{\varepsilon\operatorname{Ad}(x)X}$;
differentiating it defines $\operatorname{ad}=\operatorname{Lie}(\operatorname{Ad})$
and the bracket $[X,Y]=\operatorname{ad}(X)Y$, which is proved to satisfy the
Lie algebra axioms and to be functorial, with the matrix commutator on
$\operatorname{GL}_n$ as the explicit model. The matrix-group finite-type assertions and bracket uniqueness inherit the
Axiom of Choice from their suppliers; the smoothness arguments below also
inherit Choice from their regularity suppliers.

The infinitesimal side is prepared by the invariant-differentials lemma:
$\Omega_{G/k}$ is free, isomorphic to $f^*e^*\Omega_{G/k}$. From freeness of
the differentials the page proves the characteristic-zero smoothness criterion
and Cartier's theorem that every affine group scheme of finite type over a
field of characteristic zero is smooth, hence every local ring regular and the
group reduced; in positive characteristic the examples page exhibits the
failure.
