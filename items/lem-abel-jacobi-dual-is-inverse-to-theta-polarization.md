---
id: lem-abel-jacobi-dual-is-inverse-to-theta-polarization
kind: lemma
title: Pullback along Abel–Jacobi Inverts the Theta Mumford Map
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-pointed-abel-jacobi-map-of-curve
  - def-jacobian-of-smooth-proper-curve
  - thm-picard-zero-represented-by-jacobian
  - lem-generic-theta-translate-pullback-is-degree-g-divisor
  - lem-abel-jacobi-poincare-bundle-is-theta-correspondence
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
  - thm-abelian-variety-dual-and-polarization
  - def-polarization-of-an-abelian-variety
  - lem-nonaffine-group-monomorphism-closed-immersion
  - def-axiom-of-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §6, Lemmas 6.8–6.9, printed pp. 106–108
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Brian Conrad, Abelian Varieties, Stanford Math 249C course notes, §3.4, printed pp. 32–35
      url: https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Let $C/\bar k$ be a smooth, proper, geometrically connected curve of genus $g\ge1$, choose $P\in C(\bar k)$, and let $J=\operatorname{Pic}^0_{C/\bar k}$ with pointed Abel–Jacobi map $u_P$. Let $\Theta_P$ be the reduced image of $C^{(g-1)}$ under $D\mapsto[\mathcal O_C(D-(g-1)P)]$, taking $\Theta_P=\{0\}$ when $g=1$, put $L'=\mathcal O_J([-1]^*\Theta_P)$, and let $\lambda=\varphi_{L'}:J\to\widehat J$. Let $\mathcal P$ be the normalized Poincare line bundle on $J\times\widehat J$, and define $\widehat u:\widehat J\to J$ by the $P$-rigidified family $(u_P\times\operatorname{id})^*\mathcal P$ on $C\times\widehat J$. Then $\widehat u\circ[-1]\circ\lambda=\operatorname{id}_J$, so $\lambda$ is an isomorphism.

## Statement references

[Milne, inverse-map argument for Jacobian autoduality, Ch. III §6, Lemmas 6.8–6.9](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Conrad, finite-type group monomorphisms, §3.4](https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf)

## Facts & Assumptions

**Given:** AC and DC, the pointed curve and Jacobian in the Statement, the normalized Poincare bundle, and the theta line bundle.

[A1] AC and DC are the choice principles consumed by the dual-abelian-variety and group-monomorphism suppliers. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] The theta correspondence identifies $(u_P\times[-1])^*\Lambda(L')$ with the normalized universal degree-zero line bundle $\mathcal M_P$ on $C\times J$. [[lem-abel-jacobi-poincare-bundle-is-theta-correspondence]]

[F2] The Mumford map is characterized by $(\operatorname{id}_J\times\lambda)^*\mathcal P\cong\Lambda(L')$, and $\widehat u$ is the classifying morphism for pulling the normalized Poincare family back along $u_P$. The identity map of $J$ classifies $\mathcal M_P$. [[def-polarization-of-an-abelian-variety]] [[thm-abelian-variety-dual-and-polarization]] [[thm-picard-zero-represented-by-jacobian]]

[F3] A homomorphism of separated finite-type group schemes with trivial scheme-theoretic kernel is a closed immersion. A closed immersion between geometrically integral varieties of the same dimension, with target connected, is an isomorphism if its image has full dimension. [[lem-nonaffine-group-monomorphism-closed-immersion]] [[thm-abelian-variety-dual-and-polarization]]

## Proof

**Proof technique:** identify the pullback family from the theta correspondence with the universal Poincare family, then use the resulting left inverse and equal dimensions.

1.1 By [F1], $(u_P\times[-1])^*\Lambda(L')\cong\mathcal M_P$. By [F2], $\Lambda(L')\cong(\operatorname{id}_J\times\lambda)^*\mathcal P$. Pulling this identity back along $u_P\times\operatorname{id}_J$ gives $(u_P\times[-\lambda])^*\mathcal P\cong\mathcal M_P.$ The left side is the family classified by $\widehat u\circ[-1]\circ\lambda:J\to J$, while $\mathcal M_P$ is classified by $\operatorname{id}_J$; representability and the normalized universal property therefore give $\widehat u\circ[-1]\circ\lambda=\operatorname{id}_J$. [F1, F2, given, construct]

2.1 The identity in step 1.1 makes $[-1]\circ\lambda$ a monomorphism: if its composites with two test morphisms agree, composing with $\widehat u$ makes those test morphisms equal. Its scheme-theoretic kernel is therefore trivial, and [F3] makes it a closed immersion. Its image has dimension $g$ because it is isomorphic to $J$, while $\widehat J$ is geometrically connected and has dimension $g$ by [F2]. A proper closed subset of the integral variety $\widehat J$ has dimension less than $g$, so this closed immersion has full image and is an isomorphism. Composing with inversion shows that $\lambda$ is an isomorphism. [A1, F2, F3, step 1.1] ∎

## Axiom use

AC and DC are inherited through the dual/Poincare construction [F2] and the closed-immersion supplier [F3]. The comparison and left-inverse argument use no further choice.
