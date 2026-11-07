---
id: thm-abel-jacobi-universal-property-for-pointed-curve
kind: theorem
title: Universal Property of the Pointed Abel–Jacobi Map
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-pointed-abel-jacobi-map-of-curve
  - def-jacobian-of-smooth-proper-curve
  - thm-picard-zero-represented-by-jacobian
  - lem-generic-degree-g-divisor-has-unique-effective-representative
  - thm-effective-divisor-symmetric-power-projective
  - thm-full-riemann-roch-divisor
  - thm-genus-zero-point-implies-projective-line
  - lem-morphism-from-projective-line-to-abelian-variety-is-constant
  - lem-nonaffine-finite-galois-descent-of-morphisms
  - thm-fundamental-theorem-of-finite-galois-theory
  - thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends
  - thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §6, Proposition 6.1, printed p. 104
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Statement

Assume the Axiom of Choice. Let $C/k$ be a smooth, proper, geometrically connected curve with a rational point $P$, let $J_C$ be its Jacobian, and let $u_P:C\to J_C$ be the pointed Abel–Jacobi map. For every abelian variety $A/k$ and every morphism $f:C\to A$ with $f(P)=0_A$, there is a unique homomorphism of abelian varieties $h:J_C\to A$ such that $f=h\circ u_P$.

## Statement references

[Milne, universal property, Proposition 6.1, p. 104](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, Jacobian of a curve, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Diagram

The triangle records the factorization claimed in the Statement: $u_P$ is the fixed pointed Abel–Jacobi morphism, $f$ is the supplied pointed morphism, and $h$ is the unique homomorphism whose composite with $u_P$ equals $f$.

```tikzcd
C \arrow[r,"u_P"] \arrow[dr,"f"'] & J_C \arrow[d,"h"]\\
& A
```

## Facts & Assumptions

**Given:** The Axiom of Choice, the pointed curve $(C,P)$, its Jacobian $J_C$, an abelian variety $A/k$, and a morphism $f:C\to A$ with $f(P)=0_A$.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[A2] The Axiom of Choice also gives Dependent Choice: for a serial relation on a nonempty set, choose one successor for each element and iterate the resulting function from the prescribed starting point. [A1]

[F1] The degree-$g$ Abel map $\alpha:C^g\to J_C$, $(Q_1,\ldots,Q_g)\mapsto\sum_i u_P(Q_i)$, is dominant, and its general fiber consists of the $g!$ orderings of a divisor with distinct support. [[def-pointed-abel-jacobi-map-of-curve]] [[thm-effective-divisor-symmetric-power-projective]] [[lem-generic-degree-g-divisor-has-unique-effective-representative]]

[F2] A finite Galois-invariant morphism from the generic point of a finite Galois extension descends to the fixed field. [[lem-nonaffine-finite-galois-descent-of-morphisms]] [[thm-fundamental-theorem-of-finite-galois-theory]]

[F3] A rational map from a smooth proper variety to an abelian variety extends uniquely to a morphism. [[thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends]]

[F4] A morphism from a connected pointed algebraic group to an abelian variety that sends identity to identity is a group homomorphism. [[thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism]]

[F5] Every degree-$g$ line bundle on a smooth proper curve has a nonzero section, since Riemann–Roch gives $h^0(L)-h^0(\omega_C\otimes L^{-1})=1$. [[thm-full-riemann-roch-divisor]]

[F6] A genus-zero smooth proper curve with the degree-one divisor $P$ is $\mathbb P^1_k$, every morphism $\mathbb P^1_k\to A$ to an abelian variety is constant, and the Jacobian is a smooth proper geometrically connected group of dimension $g$. [[thm-genus-zero-point-implies-projective-line]] [[lem-morphism-from-projective-line-to-abelian-variety-is-constant]] [[thm-picard-zero-represented-by-jacobian]]

## Proof

**Proof technique:** direct: descend the symmetric sum of $f$ along the generic Galois quotient of the degree-$g$ Abel map, extend the resulting rational map, and use generation by the Abel image for uniqueness.

1.1 If $g=0$, [F6] identifies $C$ with $\mathbb P^1_k$, so [F6] makes $f$ constant; because $f(P)=0_A$, it is the zero morphism. By [F6], $J_C$ is a smooth proper geometrically connected group of dimension zero. Its identity is a $k$-point, and a zero-dimensional smooth geometrically connected finite-type scheme with a rational point is $\operatorname{Spec}k$; thus there is exactly one homomorphism $J_C\to A$, and it factors $f$. This proves existence and uniqueness when $g=0$. Assume henceforth $g\ge1$. [A2, F6, given, construct, algebra]

2.1 Let $\alpha:C^g\to J_C$ be the morphism in [F1] and let $L=k(C^g)$, $K=k(J_C)$. By [F1], $\alpha$ is generically finite of degree $g!$ and the coordinate-permutation action of $S_g$ is faithful on $L$. The invariant subfield $L^{S_g}$ therefore has degree $g!$ in $L$ by [F2]. Since $\alpha$ is invariant under permutations, $\alpha^*K\subseteq L^{S_g}$; both subfields have index $g!$, so $\alpha^*K=L^{S_g}$ and $L/K$ is Galois with group $S_g$. [F1, F2, step 1.1]

3.1 Define $\widetilde f:C^g\to A$ by $\widetilde f(Q_1,\ldots,Q_g)=\sum_i f(Q_i)$. It is invariant under coordinate permutations because addition on $A$ is commutative. Thus its generic-point morphism $\operatorname{Spec}L\to A$ is Galois invariant and descends by [F2] to a $K$-point of $A$, that is, to a rational map $\psi:J_C\dashrightarrow A$. By [F3], $\psi$ extends uniquely to a morphism $h:J_C\to A$. On $C^g$ the morphisms $h\circ\alpha$ and $\widetilde f$ agree at the generic point by construction; since both are morphisms to the separated variety $A$, they agree everywhere. Evaluating at $(Q,P,\ldots,P)$ gives $h(u_P(Q))=f(Q)$, so $h(0)=0$. [A1, F1, F2, F3, given, step 2.1]

4.1 By [F4], the pointed morphism $h:J_C\to A$ is a homomorphism. For uniqueness, let $h'$ be another homomorphism with $h'\circ u_P=f$. For every $(Q_1,\ldots,Q_g)\in C^g$, the homomorphism property gives $h'(\alpha(Q_1,\ldots,Q_g))=\sum_i f(Q_i)=h(\alpha(Q_1,\ldots,Q_g))$. The map $\alpha$ is surjective: for any geometric point $a\in J_C$, the corresponding degree-zero class tensored with $\mathcal O_C(gP)$ has degree $g$ and is effective by [F5], so $a$ is a sum of $g$ Abel images. Thus $h'=h$ on all geometric points of the reduced variety $J_C$ and hence as morphisms. [F1, F4, F5, step 3.1] ∎

## Axiom use

The Axiom of Choice supplies Dependent Choice by [A2] and is used through the generic-divisor, rational-map extension, and pointed-group suppliers [F1], [F4], and [F5]. The finite Galois descent and uniqueness arguments require no additional choice.
