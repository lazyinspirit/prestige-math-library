---
id: thm-picard-degree-one-component-is-a-jacobian-torsor
kind: theorem
title: The Degree-One Picard Component Is an fppf Torsor under the Jacobian
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-picard-degree-one-torsor-under-jacobian
  - def-nonabelian-fppf-h1-as-torsors
  - def-jacobian-of-smooth-proper-curve
  - def-degree-components-of-relative-picard-sheaf-for-curve
  - def-algebraic-curve-over-field
  - lem-nonempty-smooth-scheme-finite-separable-point
  - cor-degree-descends-picard-curve
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §1, printed pp. 85–90
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Statement

Assume the Axiom of Choice. Let $C$ be a smooth, proper, geometrically connected curve over a field $k$, and let $J_C=\operatorname{Pic}^0_{C/k}$ be its Jacobian. Then the tensor-product right action makes $\operatorname{Pic}^1_{C/k}$ an fppf torsor under $J_C$. Equivalently, $\operatorname{Pic}^1_{C/k}$ is fppf-locally nonempty and the action map $\operatorname{Pic}^1_{C/k}\times J_C\to\operatorname{Pic}^1_{C/k}\times\operatorname{Pic}^1_{C/k}$, $(L,M)\mapsto(L,L\otimes M)$, is an isomorphism.

## Statement references

[Milne, Picard torsors and degree components, Ch. III §1](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, Jacobian torsors, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a smooth proper geometrically connected curve $C/k$, and its Jacobian $J_C=\operatorname{Pic}^0_{C/k}$.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] A nonempty smooth finite-type scheme over a field has a closed point with finite separable residue field. [[lem-nonempty-smooth-scheme-finite-separable-point]]

[F2] $\operatorname{Pic}^d_{C/k}$ is the fppf subfunctor of classes having geometric-fiber degree $d$, degree is locally constant, and the Jacobian represents the degree-zero component. [[def-degree-components-of-relative-picard-sheaf-for-curve]] [[cor-degree-descends-picard-curve]] [[def-jacobian-of-smooth-proper-curve]]

[F3] Tensor product adds degrees, so a degree-one class tensored with a degree-zero class remains in $\operatorname{Pic}^1$; the inverse of a degree-zero line-bundle class is its dual. [[def-picard-degree-one-torsor-under-jacobian]]

[F4] An fppf torsor is locally isomorphic to its acting group with the regular action, equivalently it is locally nonempty and its action map to the product with itself is an isomorphism. [[def-nonabelian-fppf-h1-as-torsors]]

## Proof

**Given:** The curve, its Jacobian, and the right tensor-product action.

1.1 By [F1], choose a closed point $P\in C$ with finite separable residue extension $K/k$. The morphism $\operatorname{Spec}K\to\operatorname{Spec}k$ is faithfully flat and of finite presentation, hence an fppf cover. Over $K$, the line bundle $\mathcal O_{C_K}(P)$ has degree one, so $\operatorname{Pic}^1_{C/k}$ becomes nonempty after this fppf cover. [A1, F1, construct]

1.2 For any test scheme $T$ and any two degree-one classes $L_1,L_2\in\operatorname{Pic}^1_{C/k}(T)$, their quotient $L_2\otimes L_1^{-1}$ has degree zero and therefore belongs to $J_C(T)$ by [F2]–[F3]. It is the unique class $M$ satisfying $L_1\otimes M=L_2$, since tensoring by $L_1^{-1}$ recovers $M$. Hence the action map in the Statement has inverse $(L_1,L_2)\mapsto(L_1,L_2\otimes L_1^{-1})$ on every test scheme, and is an isomorphism of fppf sheaves. [F2, F3, construct]

2.1 Step 1.1 gives fppf-local nonemptiness, and step 1.2 gives the torsor action isomorphism. These are precisely the torsor conditions in [F4], so $\operatorname{Pic}^1_{C/k}$ is an fppf $J_C$-torsor. The Axiom of Choice is used only through [F1]. [A1, F1, F4, step 1.1, step 1.2] ∎

## Axiom use

The Axiom of Choice is assumed and is consumed through the finite-separable-point result [F1]. The tensor-product calculations and the uniqueness of the difference class use no further choice.
