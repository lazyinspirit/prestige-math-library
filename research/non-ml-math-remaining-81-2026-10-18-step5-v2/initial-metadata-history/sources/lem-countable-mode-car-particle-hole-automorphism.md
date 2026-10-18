---
id: lem-countable-mode-car-particle-hole-automorphism
kind: lemma
title: Particle-Hole Exchange Is an Automorphism of Countable-Mode CAR
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 7
deps:
  - def-countable-mode-car-algebra
  - def-finite-mode-car-algebra
  - lem-finite-mode-car-canonical-inclusions-are-isometric
  - thm-finite-mode-car-algebra-is-full-matrix-algebra
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.4 and 6.7"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §4.1"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Statement

There is a unique $*$-automorphism $\alpha$ of $\mathsf{CAR}_{\mathbb N}$ satisfying

$$ \alpha(a_j)=a_j^\dagger,\qquad \alpha(a_j^\dagger)=a_j\qquad(j\in\mathbb N). $$

It is involutive: $\alpha^2=I$.

## Facts & Assumptions
**Given:** The countable-mode CAR C*-algebra as the completion of its finite-mode stages and the canonical generators $a_j,a_j^\dagger$.

[F1] Each finite stage is the universal finite-mode C*-algebra with the CAR relations and its algebraic quotient presentation ([[def-finite-mode-car-algebra]], [[thm-finite-mode-car-algebra-is-full-matrix-algebra]]).

[F2] The finite stages embed isometrically and compatibly, and their union is dense in $\mathsf{CAR}_{\mathbb N}$ ([[def-countable-mode-car-algebra]], [[lem-finite-mode-car-canonical-inclusions-are-isometric]]).

## Proof

1.1 On a finite stage, exchange $a_j$ with $a_j^\dagger$. The first two CAR families are exchanged, while $\{a_i^\dagger,a_j\}-\delta_{ij}1$ is the same relation as $\{a_j,a_i^\dagger\}-\delta_{ji}1$ because $\delta_{ij}=\delta_{ji}$. The exchange also respects $*$, since $(a_j^\dagger)^*=a_j$. The quotient universal property in [F1] therefore gives a unital $*$-homomorphism $\alpha_n:\mathsf{CAR}_n\to\mathsf{CAR}_n$. Applying it twice fixes every generator, so $\alpha_n^2=I$ and $\alpha_n$ is an automorphism. [given, F1, construct]

2.1 For $m\le n$, the maps $\alpha_n\circ\iota_{m,n}$ and $\iota_{m,n}\circ\alpha_m$ agree on every generator of $\mathsf{CAR}_m$, hence agree on that stage by its universal property. The compatible automorphisms therefore define an automorphism $\alpha_0$ of the algebraic union. For $x$ in a finite stage, the universal norm there is the supremum of $\|\rho(x)\|$ over its unital representations; precomposition by the bijection $\alpha_n$ permutes those representations, so $\|\alpha_n(x)\|=\|x\|$. Thus $\alpha_0$ is isometric and extends continuously to the completion in [F2]. Its inverse extends from the compatible maps $\alpha_n^{-1}=\alpha_n$, and $\alpha^2=I$ because this holds on the dense union. [given, F1, F2, step 1.1, algebra] ∎

## Remarks

This exchange is a $*$-algebra automorphism. It makes no statement about implementation by a unitary in the Fock representation.
