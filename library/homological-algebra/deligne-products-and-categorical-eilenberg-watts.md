---
page: deligne-products-and-categorical-eilenberg-watts
title: "Deligne Products and Categorical Eilenberg–Watts"
status: draft
items: [lem-finite-vector-space-copowers-in-a-linear-abelian-category, def-deligne-product-of-finite-linear-categories, lem-bilinear-right-exact-functors-are-determined-by-the-pair-of-regular-modules, thm-finite-deligne-products-exist-by-tensor-product-algebras, lem-opposite-deligne-product-identifies-with-finite-bimodules, thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories, lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps, cor-kernel-composition-and-transformations-use-balanced-tensor-products, def-left-and-right-nakayama-functors-by-finite-kernel-calculus, lem-nakayama-kernels-give-well-defined-adjoint-functors, prop-left-to-right-exact-equivalence-sends-identity-to-nakayama, prop-projective-nakayama-pairing-and-symmetric-algebra-specialization]
examples: []
---

Functor categories are formed on chosen small representatives of the finite
categories. Algebraic notation such as $(\mathcal B,\mathcal A)$-bimodules
and $\otimes_{\mathcal A}$ refers to the algebras in supplied module models.
The Deligne-product existence construction uses the Axiom of Choice for its
set-indexed presentation and universal-object data; finite pointwise
computations do not require additional choice.

This page develops the finite theory of Deligne's tensor product of linear
categories and the categorical Eilenberg–Watts calculus built on it. It begins
with the finite vector-space copower: for a finite-dimensional vector space $V$
and an object $Y$ of a $k$-linear abelian category, the functor
$Z\mapsto\operatorname{Hom}_k(V,\mathcal C(Y,Z))$ is representable by a finite
biproduct of copies of $Y$, independent of the chosen basis up to a unique
compatible isomorphism. Given a supplied family of universal representing
data, the copowers are functorial in both variables.

The Deligne product $\mathcal C\boxtimes\mathcal D$ is then defined by its
universal property: restriction along the bilinear bifunctor $\boxtimes$, right
exact in each variable, is an equivalence between right exact functors out of
the product and bifunctors right exact in each variable, on categories of
functors with all natural transformations. For finite categories the product is
constructed concretely as the module category of the tensor-product algebra
$R\otimes_kS$, with $X\boxtimes Y=X\otimes_kY$; a bilinear right exact functor is
determined by its value at $(R,S)$, from which it is rebuilt on finite
presentations. The opposite product is identified with the finite bimodules,
$\mathcal A^{\mathrm{op}}\boxtimes\mathcal B\simeq(\mathcal B,\mathcal A)$-bimod,
with $\bar a\boxtimes b\mapsto b\otimes_ka^{*}$.

On that identification the page proves the categorical Eilenberg–Watts triangle
$\operatorname{Lex}(\mathcal A,\mathcal B)\simeq
\mathcal A^{\mathrm{op}}\boxtimes\mathcal B\simeq
\operatorname{Rex}(\mathcal A,\mathcal B)$, with the functors
$\Phi^{l}(M)=\operatorname{Hom}_{\mathcal A}(M^{*},-)$ and
$\Phi^{r}(M)=M\otimes_{\mathcal A}-$ and their quasi-inverses given by explicit
ends and coends whose universal wedges and cowedges are computed in the
bimodule model; composition of kernels is the balanced tensor product. The
closing items define the Nakayama functors $N^{r}=\Gamma^{rl}(1)$ and
$N^{l}=\Gamma^{lr}(1)$, compute them as $A^{*}\otimes_A-$ and
$\operatorname{Hom}_A(A^{*},-)$, prove the adjunction $N^{r}\dashv N^{l}$ and
the intrinsic (co)end formulas, show that the Lex-to-Rex equivalence sends the
identity to the Nakayama functor, which need not be isomorphic to the
identity, and record the
projective Nakayama pairing together with the conditional symmetric-algebra
specialization $N^{r}\cong N^{l}\cong1$ when $A^{*}\cong A$.
