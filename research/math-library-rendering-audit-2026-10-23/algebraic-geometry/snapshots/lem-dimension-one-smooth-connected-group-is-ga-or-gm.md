---
id: lem-dimension-one-smooth-connected-group-is-ga-or-gm
kind: lemma
title: "One-dimensional smooth connected affine groups over perfect fields are additive groups or tori"
dependency_level: 7
deps:
  - def-axiom-of-choice
  - cor-tori-correspond-to-torsion-free-character-lattices
  - def-affine-scheme
  - def-dimension-noetherian-topological-space
  - def-group-of-multiplicative-type-and-torus
  - def-group-scheme-over-a-field
  - def-smooth-morphism-schemes
  - lem-nonaffine-connected-group-geometrically-connected
  - thm-unipotent-group-triangular-criterion
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Proposition 14.25, printed p. 286; Corollary 14.53, printed p. 297; Theorem 16.13 and Corollaries 16.15-16.16, printed pp. 328-329
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Section 2.3, Theorem 58, p. 25, with Section 2.1, Proposition 37, pp. 19-20
---
## Statement

Assume the Axiom of Choice inherited from the torus-splitting and geometric suppliers ([[def-axiom-of-choice]]).

Let $k$ be a perfect field and let $G$ be a smooth connected affine algebraic group of dimension one over $k$ ([[def-affine-scheme]], [[def-smooth-morphism-schemes]], [[def-affine-scheme]]). Then either $G$ becomes isomorphic to $\mathbf G_m$ over a finite separable extension of $k$, or it becomes isomorphic to $\mathbf G_a$ over a finite purely inseparable extension of $k$. Over an algebraically closed field, $\mathbf G_a$ and $\mathbf G_m$ are the only connected affine group varieties of dimension one; an elliptic curve shows that affineness cannot be dropped.

## Facts & Assumptions
**Given:** AC, a perfect field $k$ and a smooth connected affine algebraic group $G$ of dimension one over $k$.

[F1] A smooth connected algebraic group of dimension $1$ is commutative; more generally the commutative structure theory provides, for a smooth connected commutative affine group $H$, a largest subgroup $H_s$ of multiplicative type and a largest unipotent subgroup $H_u$, with $H/H_s$ unipotent, $H/H_u$ of multiplicative type, and $\dim H=\dim H_s+\dim H_u$. Over a perfect field the commutative structure theorem gives $H\cong H_s\times H_u$, and when $H$ is smooth connected both factors are smooth connected (Milne Theorem 16.13(b) and Corollary 16.15). (Milne, *Algebraic Groups*, Proposition 14.25 and Sections 16.13-16.15; the local library develops the multiplicative-type dictionary in [[def-group-of-multiplicative-type-and-torus]] but not this structure theorem.)

[F2] A smooth connected unipotent group of dimension one over an algebraically closed field is isomorphic to $\mathbf G_a$; over a perfect field such a group becomes isomorphic to $\mathbf G_a$ over a finite purely inseparable extension. (Milne, *Algebraic Groups*, Corollary 14.53 and Corollary 16.16; with [[thm-unipotent-group-triangular-criterion]] for the identification of unipotence.)

[F3] Assuming AC through the Galois character-module supplier, a one-dimensional torus over $k$ is split by a finite separable extension, and after splitting is isomorphic to $\mathbf G_m$; the character module of a torus is a free abelian group of finite rank. ([[cor-tori-correspond-to-torsion-free-character-lattices]], [[def-group-of-multiplicative-type-and-torus]])

[F4] Assuming AC, a connected finite-type group scheme is geometrically connected. Thus a smooth connected zero-dimensional group has a single reduced geometric point and is identified with the trivial group by its identity section. ([[lem-nonaffine-connected-group-geometrically-connected]])

## Proof

**Given:** AC, a perfect field $k$ and a smooth connected affine group $G$ of dimension one over $k$.

1.1 By [F1] the group is commutative and, since $k$ is perfect, has the product decomposition $G\cong G_s\times G_u$ into smooth connected multiplicative-type and unipotent factors. Their dimensions add to one, so one has dimension zero. A smooth connected zero-dimensional group over $k$ is trivial: it is geometrically connected by the group identity-component property, and finite étale, so its geometric fibre is a single reduced point and its identity section identifies it with $\operatorname{Spec}k$. Hence either $G=G_s$ or $G=G_u$. This does not assert that arbitrary zero-dimensional unipotent group schemes are trivial. [F1, F4]

2.1 If $G=G_s$, then $G$ is a smooth connected one-dimensional group of multiplicative type, hence a one-dimensional torus: its character module is free of rank one by [F3], and a one-dimensional torus is split by a finite separable extension, over which it becomes $\mathbf G_m$. This is the first alternative of the statement. [F3, step 1.1]

2.2 If $G=G_u$, then $G$ is smooth, connected, unipotent and one-dimensional; by [F2] it is isomorphic to $\mathbf G_a$ over an algebraic closure, and over the perfect field $k$ it becomes isomorphic to $\mathbf G_a$ over a finite purely inseparable extension. This is the second alternative. [F2, step 1.1]

3.1 Together, [step 2.1] and [step 2.2] prove that every smooth connected affine one-dimensional group is of one of the two described forms, and over an algebraically closed field the two alternatives read $G\cong\mathbf G_m$ or $G\cong\mathbf G_a$. An elliptic curve $E$ over $k$ is a smooth connected group of dimension one that is proper and not affine, so it is not covered by the alternatives; this shows affineness is needed. [step 2.1, step 2.2] ∎ 