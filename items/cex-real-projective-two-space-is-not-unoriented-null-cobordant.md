---
id: cex-real-projective-two-space-is-not-unoriented-null-cobordant
kind: counterexample
title: The real projective plane is not unoriented null-cobordant
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-null-cobordant-closed-manifold
  - def-unoriented-and-oriented-bordism-groups
  - prop-boundaries-have-zero-stiefel-whitney-numbers
  - def-stiefel-whitney-number-of-a-closed-manifold
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - def-real-projective-bundle-and-tautological-line
  - def-tautological-degree-one-class-on-a-real-projective-bundle
  - thm-mod-two-real-projective-bundle-theorem
  - prop-first-stiefel-whitney-class-classifies-orientability
  - thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension
  - ex-real-projective-space-is-orientable-exactly-in-odd-dimension
  - cor-poincare-duality-gives-a-nonsingular-cup-pairing
  - def-fundamental-class-of-a-compact-oriented-manifold
  - prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise
  - def-kronecker-evaluation-pairing
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Page 51, $w_1(P^n)\\neq0$ and $w_1^n[P^n]\\neq0$ for even $n$; Theorem 4.9, printed pp.52-53"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Proposition 1.32, the independent proof that $\\mathbb{RP}^2$ does not bound, printed pp.11-12"
---

## Statement refuted

It is false that the real projective plane is null-cobordant: there is no
compact smooth $3$-manifold whose boundary is $\mathbb{RP}^2$, so not every
closed surface bounds. The counterexample computes the Stiefel-Whitney number
$$w_1^{2}[\mathbb{RP}^2]=\langle w_1(T\mathbb{RP}^2)^2,[\mathbb{RP}^2]\rangle=1$$
and concludes that the class of $\mathbb{RP}^2$ is a nonzero element of
$\Omega_2^{O}$ ([[def-unoriented-and-oriented-bordism-groups]]).

## Facts & Assumptions

**Given:** The real projective plane $\mathbb{RP}^2$ with its smooth structure and tangent bundle, the trivial real rank-three bundle over a point, and AC ([[def-axiom-of-choice]]) for the Stiefel-Whitney class construction.

[F1] $\mathbb{RP}^2$ is the projectivisation $P(E)$ of the trivial rank-three real bundle $E$ over a point, with tautological degree-one class $x=x_E\in H^1(\mathbb{RP}^2;\mathbb F_2)$; the mod-two projective bundle theorem makes $H^*(\mathbb{RP}^2;\mathbb F_2)$ a free module over $H^*(\mathrm{pt};\mathbb F_2)=\mathbb F_2$ with basis $1,x,x^2$ and unique monic relation $x^3+c_1x^2+c_2x+c_3=0$ with $c_i\in H^i(\mathrm{pt})=0$ for $i>0$; hence $x^3=0$, $x\neq0$ and $x^2\neq0$ ([[def-real-projective-bundle-and-tautological-line]], [[def-tautological-degree-one-class-on-a-real-projective-bundle]], [[thm-mod-two-real-projective-bundle-theorem]]).

[F2] A numerable real bundle $E$ has $w_1(E)=0$ exactly when $E$ is orientable, and for a closed $n$-manifold with $n\ge2$ an orientation of the tangent determinant lines is equivalent to an atlas with positive transition Jacobians; $\mathbb{RP}^2$ is not orientable ([[prop-first-stiefel-whitney-class-classifies-orientability]], [[thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension]], [[ex-real-projective-space-is-orientable-exactly-in-odd-dimension]]).

[F3] $\mathbb{RP}^2$ is a connected closed smooth surface (any two lines are joined by the projectivization of a path in the sphere), hence an admissible base whose tangent bundle is numerable, and it carries the canonical mod-two fundamental class $[M]\in H_2(\mathbb{RP}^2;\mathbb F_2)$ of its canonical mod-two orientation ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]], [[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]], [[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F4] For a connected closed $2$-manifold the pairing $H^2(M;\mathbb F_2)\times H^0(M;\mathbb F_2)\to\mathbb F_2$, $\langle a\smile b,[M]\rangle$, is perfect, $H^0(M;\mathbb F_2)=\mathbb F_2\cdot1$, and the Kronecker evaluation is $\mathbb F_2$-bilinear ([[cor-poincare-duality-gives-a-nonsingular-cup-pairing]], [[def-kronecker-evaluation-pairing]]).

[F5] A Stiefel-Whitney number of a closed smooth $n$-manifold is $w^I[M]=\langle w^I(TM),[M]\rangle$ for a degree-$n$ monomial, and a closed manifold with at least one nonzero Stiefel-Whitney number is not null-cobordant ([[def-stiefel-whitney-number-of-a-closed-manifold]], [[prop-boundaries-have-zero-stiefel-whitney-numbers]], [[def-null-cobordant-closed-manifold]]).

## Counterexample

1.1 (The mod-two cohomology of $\mathbb{RP}^2$.) Model $\mathbb{RP}^2$ as the projectivisation of the trivial rank-three bundle over a point. By [F1], $H^*(\mathbb{RP}^2;\mathbb F_2)$ is free over $\mathbb F_2$ with basis $1,x,x^2$, where $x$ is the tautological degree-one class, and the only relation is $x^3=0$; in particular $x\neq0$ and $x^2\neq0$, and $H^1(\mathbb{RP}^2;\mathbb F_2)=\mathbb F_2\cdot x$ has exactly two elements. [F1]

2.1 ($w_1(T\mathbb{RP}^2)=x\neq0$.) Suppose $w_1(T\mathbb{RP}^2)=0$. The tangent bundle of a closed smooth manifold is numerable over an admissible base by [F3], so by [F2] the vanishing of $w_1$ would make $T\mathbb{RP}^2$ orientable, and for the closed surface $\mathbb{RP}^2$ the orientation of the tangent determinant lines would give an atlas with positive transition Jacobians, making $\mathbb{RP}^2$ orientable. This contradicts [F2], since $\mathbb{RP}^2$ is not orientable. Hence $w_1(T\mathbb{RP}^2)\neq0$; by step 1.1 it is the unique nonzero element, $w_1(T\mathbb{RP}^2)=x$. [F2, F3, step 1.1]

3.1 ($w_1^{2}[\mathbb{RP}^2]=1$.) By step 2.1, $w_1(T\mathbb{RP}^2)^2=x^2$, and $x^2\neq0$ by step 1.1. Apply [F4] with $M=\mathbb{RP}^2$: the pairing $H^2\times H^0\to\mathbb F_2$ is perfect and $H^0=\mathbb F_2\cdot1$, so the adjoint map $a\mapsto\langle a\cdot1,[\mathbb{RP}^2]\rangle=\langle a,[\mathbb{RP}^2]\rangle$ is an isomorphism $H^2(\mathbb{RP}^2;\mathbb F_2)\to\mathbb F_2$; a nonzero class therefore has evaluation $1$. Hence $w_1^{2}[\mathbb{RP}^2]=\langle x^2,[\mathbb{RP}^2]\rangle=1\neq0$. [F3, F4, step 1.1, step 2.1]

4.1 (Conclusion: $\mathbb{RP}^2$ is not null-cobordant.) The Stiefel-Whitney number $w_1^{2}[\mathbb{RP}^2]=1$ is nonzero, so by [F5] the closed surface $\mathbb{RP}^2$ is not null-cobordant: it is not the boundary of any compact smooth $3$-manifold, and in particular not every closed surface bounds. Therefore the cobordism class of $\mathbb{RP}^2$ is a nonzero element of $\Omega_2^{O}$, and the claim that $\mathbb{RP}^2$ is null-cobordant is refuted. [F5, step 3.1] ∎
