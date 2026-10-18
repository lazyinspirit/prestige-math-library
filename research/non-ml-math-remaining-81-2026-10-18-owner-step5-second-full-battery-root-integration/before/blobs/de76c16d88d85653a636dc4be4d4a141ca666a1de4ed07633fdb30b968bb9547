---
id: thm-finite-mode-car-algebra-is-full-matrix-algebra
kind: theorem
title: The Finite-Mode CAR Algebra Is a Full Matrix Algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 4
deps:
  - def-finite-mode-car-algebra
  - lem-finite-mode-car-occupation-matrix-units
  - thm-finite-mode-car-clifford-majorana-isomorphism
  - thm-clifford-pbw-basis-and-associated-graded
  - lem-matrix-algebra-is-a-c-star-algebra
  - def-c-star-algebra
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.2–6.5"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1–4.2"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Statement

For every integer $n\ge0$, the universal finite-mode CAR $*$-algebra $\mathsf{CAR}^{\mathrm{alg}}_n$ of [[def-finite-mode-car-algebra]] is $*$-isomorphic to $\operatorname{End}(\mathcal F_n)\cong M_{2^n}(\mathbb C)$ under the occupation representation of [[lem-finite-mode-car-occupation-matrix-units]], where $\operatorname{End}(\mathcal F_n)$ denotes all complex-linear endomorphisms under composition. Give this matrix algebra the operator norm and conjugate-transpose involution; it is a C*-algebra in the sense of [[def-c-star-algebra]]. Every unital $*$-representation on a nonzero Hilbert space is unitarily identified with the matrix action on the occupation coordinate tensored with the identity on one Hilbert space, and is therefore isometric. Consequently the universal C*-norm, the supremum of operator norms over these representations, equals the matrix norm, so the universal C*-completion is the same full matrix algebra.

## Facts & Assumptions
**Given:** An integer $n\ge0$, the finite-mode algebra $\mathsf{CAR}^{\mathrm{alg}}_n$, the ordered basis of $\mathbb C^{2n}$ used for its Clifford comparison, and the occupation representation on $\mathcal F_n$.

[F2] The Majorana maps give a $*$-isomorphism $\mathrm{Cl}^+(\mathbb C^{2n},Q)\cong\mathsf{CAR}^{\mathrm{alg}}_n$ ([[thm-finite-mode-car-clifford-majorana-isomorphism]]).

[F3] For a $2n$-dimensional complex quadratic space and a fixed ordered basis, the plus-$Q$ Clifford algebra has the $2^{2n}$ ordered square-free monomials as a basis ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F4] The occupation representation maps onto $\operatorname{End}(\mathcal F_n)$, with $E_{S,T}e_U=\delta_{T,U}e_S$ ([[lem-finite-mode-car-occupation-matrix-units]]).

[F5] For $m\ge1$, $M_m(\mathbb C)$ with conjugate transpose and the operator norm is a unital complex C*-algebra ([[lem-matrix-algebra-is-a-c-star-algebra]]).

[F6] A complex C*-algebra is a complete complex normed associative algebra with a conjugate-linear involution reversing multiplication and satisfying $\|x^*x\|=\|x\|^2$ ([[def-c-star-algebra]]).

## Proof

1.1 By [F2] the vector-space dimension of $\mathsf{CAR}^{\mathrm{alg}}_n$ is the dimension of $\mathrm{Cl}^+(\mathbb C^{2n},Q)$. Applying [F3] with $2n$ basis vectors gives $\dim_{\mathbb C}\mathsf{CAR}^{\mathrm{alg}}_n=2^{2n}=4^n$, including $n=0$. [given, F2, F3, algebra]

2.1 The occupation representation in [F4] is a surjective $*$-homomorphism onto $\operatorname{End}(\mathcal F_n)$. Since $\mathcal P_n$ has $2^n$ elements, $\dim_{\mathbb C}\operatorname{End}(\mathcal F_n)=(2^n)^2=4^n$. By step 1.1, the source also has dimension $4^n$, so the kernel has dimension zero. Thus the occupation representation is a $*$-isomorphism. [given, F4, step 1.1, algebra]

3.1 Put $m=2^n$ and identify $\mathsf{CAR}^{\mathrm{alg}}_n$ with $M_m(\mathbb C)$ by step 2.1. In any unital $*$-representation $\rho$ on a nonzero Hilbert space $K$, the projections $P_S=\rho(E_{S,S})$ are pairwise orthogonal and sum to $I$. Set $K_0=P_\varnothing K$. The map $U_S=\rho(E_{S,\varnothing})|_{K_0}:K_0\to P_SK$ is unitary because the matrix-unit relations give $U_S^*U_S=I_{K_0}$ and $U_SU_S^*=P_S$. Hence $U:\bigoplus_{S\in\mathcal P_n}K_0\to K$, $U((\xi_S)_S)=\sum_SU_S\xi_S$, is unitary and carries each $\rho(E_{S,T})$ to the standard matrix unit on the subset coordinate with identity multiplicity on $K_0$. [F4, step 2.1, construct]

4.1 The space $K_0$ is nonzero: if $y\in P_SK$, then $y=\rho(E_{S,\varnothing})\rho(E_{\varnothing,S})y$, and $\rho(E_{\varnothing,S})y\in K_0$; if $K_0=0$, this forces every $P_SK=0$, contradicting $\sum_SP_S=I$ and $K\ne\{0\}$. Under the unitary in step 3.1, $A=(A_{S,T})$ acts on $\bigoplus_SK_0$ as $A\otimes I_{K_0}$. For each vector $(\xi_T)_T$, its finitely many coordinates span a finite-dimensional subspace of $K_0$; expand them in a finite orthonormal basis and apply the scalar matrix norm bound to obtain $\|A\otimes I_{K_0}\|\le\|A\|$. Conversely, for a unit vector $\eta\in K_0$, vectors $(x_S\eta)_S$ give $\|A\otimes I_{K_0}\|\ge\|A\|$ after taking the supremum over unit $x\in\mathbb C^m$. Thus every unital representation is isometric. [F5, step 3.1, algebra]

5.1 The identity representation on $\mathbb C^m$ is one of the representations in the universal supremum, and step 4.1 shows every unital representation has the same matrix operator norm. The universal norm is therefore finite and equals the matrix operator norm. By [F5] and the C*-axioms in [F6], this is a complete C*-norm, so the algebraic isomorphism of step 2.1 already identifies the universal C*-completion with $M_m(\mathbb C)$. For $n=0$, $m=1$ and the same argument gives $\mathbb C$. [given, F5, F6, step 2.1, step 4.1, algebra] ∎

## Remarks

The proof uses only finite-dimensional matrix units and finite Gram–Schmidt. No choice axiom or infinite-dimensional representation classification is used.
