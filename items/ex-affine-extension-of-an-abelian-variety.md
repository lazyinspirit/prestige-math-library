---
id: ex-affine-extension-of-an-abelian-variety
kind: example
title: "A split affine extension of an abelian variety"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-proper-geometrically-integral-affine-scheme-is-point, thm-affine-closed-immersions-quotient-rings, thm-fibre-products-of-schemes-exist, lem-nonaffine-fppf-descent-of-scheme-morphisms]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Chapter 8 split affine-abelian extension framework"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Section 5.4"
      url: https://arxiv.org/pdf/1509.03059
---

## Example

Assume the Axiom of Choice. Let $A$ be an abelian variety over $k$, and let $G=A\times_k\mathbf G_m$, where $\mathbf G_m=\operatorname{Spec}k[t,t^{-1}]$ with multiplication of invertible coordinates. Coordinatewise multiplication gives a split extension
$$1\longrightarrow\mathbf G_m\longrightarrow G\xrightarrow{q}A\longrightarrow1.$$
The kernel is an affine smooth connected normal subgroup scheme, and $A$ represents the fppf quotient sheaf $G/\mathbf G_m$. If $\dim A>0$, then $G$ is nonaffine. This example works over an arbitrary field; it does not assume the perfect-field uniqueness theorem.

## Verification

**Given:** AC, an abelian variety $A/k$, and the product $G=A\times_k\mathbf G_m$.

[F1] An abelian variety is a group variety. ([[def-abelian-variety-over-a-field]])

[F2] Under AC a proper geometrically integral affine scheme is a point. In particular an abelian variety of positive dimension is nonaffine. ([[lem-proper-geometrically-integral-affine-scheme-is-point]])

[F3] Fibre products of schemes exist, and a closed subscheme of an affine scheme is affine. ([[thm-fibre-products-of-schemes-exist]], [[thm-affine-closed-immersions-quotient-rings]])

[F4] Represented scheme functors are sheaves for the fppf topology. ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]])

1.1 The group laws on $A$ and $\mathbf G_m$ give the group laws on their product. The latter group's affine Hopf formulas are $t\mapsto t\otimes t$, $t\mapsto t^{-1}$, and $t\mapsto1$, so the group laws are regular. The projection $q(a,t)=a$ is a homomorphism, split by $a\mapsto(a,1)$, and its scheme-theoretic kernel is $\{e_A\}\times\mathbf G_m$. It is normal because conjugation in the product preserves this factor. It is affine by its displayed spectrum, smooth because it is an open subscheme of the affine line, and geometrically connected because $K[t,t^{-1}]$ is a domain for every field extension $K/k$. [F1, F3, given, algebra]

2.1 For every $k$-scheme $T$, $q:G(T)=A(T)\times\Gamma(T,\mathcal O_T)^\times\to A(T)$ is onto, and two elements have the same image exactly when they differ by the action of a unique $\mathbf G_m(T)$ element. Thus the presheaf quotient is already the represented functor $A(-)$, naturally in $T$; by [F4], its fppf sheafification is the same represented functor. This proves the asserted scheme quotient. [F4, step 1.1, construct]

3.1 The section $A\times\{1\}\subset G$ is closed since $\{1\}\subset\operatorname{Spec}k[t,t^{-1}]$ is defined by $t-1$. If $G$ were affine, [F3] would make that copy of $A$ affine. For $\dim A>0$ this contradicts [F2]. Hence $G$ is a nonaffine algebraic group in that case. AC is carried through [F2]. [F2, F3, step 1.1, step 2.1] ∎
