---
id: ex-jacobian-of-a-pointed-genus-one-curve
kind: example
title: The Jacobian of a Pointed Genus-One Curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter III §§2 and 6, printed pp. 91–92 and 103–108"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 10
deps:
  - def-algebraic-curve-over-field
  - def-pointed-abel-jacobi-map-of-curve
  - thm-abel-jacobi-universal-property-for-pointed-curve
  - lem-generic-degree-g-divisor-has-unique-effective-representative
  - thm-jacobian-has-canonical-principal-polarization
  - thm-full-riemann-roch-divisor
  - cor-birational-smooth-proper-curves-isomorphic
  - thm-effective-divisor-symmetric-power-projective
  - def-axiom-of-choice
---

## Example

Let $C/k$ be a smooth, proper, geometrically connected curve of genus $1$ with $P\in C(k)$. Its pointed Abel–Jacobi map $u_P:Q\mapsto[\mathcal O_C(Q-P)]$ identifies $C$ with its Jacobian $J_C$. For every abelian variety $A/k$, each morphism $f:C\to A$ with $f(P)=0_A$ factors uniquely as a homomorphism $J_C\to A$ composed with $u_P$. The canonical principal polarization is represented by the degree-one divisor $\{0_{J_C}\}$.

## Example references

[Milne, Jacobian of a pointed curve and principal polarization, Ch. III §§2 and 6](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** AC, a smooth proper geometrically connected genus-one curve $C/k$, and a rational point $P\in C(k)$.

[A1] AC is required by the generic-divisor and Jacobian suppliers. [[def-axiom-of-choice]]

[A2] The Axiom of Choice also gives Dependent Choice: for a serial relation on a nonempty set, choose one successor for each element and iterate the resulting function from the prescribed starting point. [A1]

[F1] For a general degree-one divisor on a genus-one curve, the effective representative is unique and the Abel map is birational; a birational morphism between smooth proper curves is an isomorphism. [[lem-generic-degree-g-divisor-has-unique-effective-representative]] [[cor-birational-smooth-proper-curves-isomorphic]]

[F2] The pointed universal property says every morphism from $C$ to an abelian variety sending $P$ to the identity factors uniquely through a homomorphism from $J_C$. [[thm-abel-jacobi-universal-property-for-pointed-curve]]

[F3] In genus one the degree-zero effective divisor scheme is the point $C^{(0)}=\operatorname{Spec}k$, whose Abel image is the origin; its associated line bundle is ample and induces the canonical principal polarization. [[thm-effective-divisor-symmetric-power-projective]] [[thm-jacobian-has-canonical-principal-polarization]]

## Proof

**Proof technique:** use the unique degree-one effective representative to prove the Abel map is birational, then invoke the pointed universal property and the genus-one theta divisor.

1.1 The map $u_P$ differs from the degree-one Abel map by tensoring every class with $\mathcal O_C(-P)$, an isomorphism from $\operatorname{Pic}^1_{C/k}$ to $J_C$. Thus [F1] makes $u_P$ birational. Both source and target are smooth proper geometrically integral curves, so [F1] implies that $u_P$ is an isomorphism. [A1, F1, given, algebra]

1.2 Apply the pointed universal property [F2] to any morphism $f:C\to A$ with $f(P)=0_A$. It supplies a unique homomorphism $h:J_C\to A$ satisfying $f=h\circ u_P$. [F2, given]

2.1 Since $g=1$, the degree-zero effective divisor is empty, and its Abel image is $\{0_{J_C}\}$ by [F3]. The canonical polarization theorem makes this point divisor ample and identifies its Mumford map with the canonical principal polarization. [A2, F3, step 1.1] ∎

## Axiom use

AC supplies DC by [A2] and is inherited through [F1] and the Jacobian construction. The factorization and theta-divisor identifications use no further choice.
