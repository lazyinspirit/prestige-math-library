---
id: lem-finite-mode-car-canonical-inclusions-are-isometric
kind: lemma
title: Canonical Finite-Mode CAR Inclusions Are Isometric
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 5
deps:
  - def-finite-mode-car-algebra
  - lem-finite-mode-car-occupation-matrix-units
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
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §6.4"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §4.2"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Statement

For $n\ge0$, let $\iota_n:\mathsf{CAR}_n\to\mathsf{CAR}_{n+1}$ be the unique unital $*$-homomorphism sending each of the first $n$ annihilation and creation generators to the generator with the same index. Here $\mathsf{CAR}_n$ is the universal finite-mode C*-algebra of [[thm-finite-mode-car-algebra-is-full-matrix-algebra]]. Then $\iota_n$ is isometric and injective. Under the occupation-basis identifications $\mathcal F_{n+1}\cong\mathcal F_n\otimes\mathbb C^2$, it is represented by $A\mapsto A\otimes I_2$.

## Facts & Assumptions
**Given:** An integer $n\ge0$ and the finite-mode C*-algebras $\mathsf{CAR}_n,\mathsf{CAR}_{n+1}$.

[F1] The finite-mode C*-algebra is universal for the finite CAR relations and is represented faithfully on $\mathcal F_n$ as $M_{2^n}(\mathbb C)$ ([[thm-finite-mode-car-algebra-is-full-matrix-algebra]]).

[F2] In the occupation basis, the first $n$ annihilation and creation operators act by the toggle formulas in the finite-mode matrix-unit construction ([[lem-finite-mode-car-occupation-matrix-units]]).

[F3] The algebraic finite-mode presentation has the quotient universal property for tuples satisfying the CAR ([[def-finite-mode-car-algebra]]).

## Proof

1.1 The first $n$ generators in $\mathsf{CAR}_{n+1}$ satisfy the $n$-mode CAR relations. The quotient universal property in [F3], followed by the finite-mode C*-completion in [F1], therefore gives the unique unital $*$-homomorphism $\iota_n$ with the stated generator values. [given, F1, F3, construct]

1.2 Identify $e_S\otimes e_\varepsilon$ with $e_{S\cup(\{n+1\}\text{ if }\varepsilon=1)}$, where $S\subseteq\{1,\ldots,n\}$ and $\varepsilon\in\{0,1\}$. For $j\le n$, the number of occupied indices below $j$ is unchanged by the last occupation bit. The formulas in [F2] therefore give $c_j^{(n+1)}=c_j^{(n)}\otimes I_2$ and $(c_j^\dagger)^{(n+1)}=(c_j^\dagger)^{(n)}\otimes I_2$. By multiplication and linearity, the representation of $\iota_n(x)$ is $\pi_n(x)\otimes I_2$ for every $x\in\mathsf{CAR}_n$. [given, F2, algebra]

2.1 For any $A\in M_{2^n}(\mathbb C)$ and $(x_0,x_1)\in\mathbb C^{2^n}\oplus\mathbb C^{2^n}$, $\|(A\otimes I_2)(x_0,x_1)\|_2^2=\|Ax_0\|_2^2+\|Ax_1\|_2^2\le\|A\|^2(\|x_0\|_2^2+\|x_1\|_2^2)$, so $\|A\otimes I_2\|\le\|A\|$. Conversely, vectors $(x,0)$ with $\|x\|_2\le1$ give $\|A\otimes I_2\|\ge\|A\|$. By [F1] and step 1.2, $\|\iota_n(x)\|=\|\pi_n(x)\otimes I_2\|=\|\pi_n(x)\|=\|x\|$. Thus $\iota_n$ is isometric and therefore injective; the argument includes $n=0$. [given, F1, step 1.2, algebra] ∎

## Remarks

The embeddings use the fixed ordering in which the new mode is appended last. No choice principle is used.
