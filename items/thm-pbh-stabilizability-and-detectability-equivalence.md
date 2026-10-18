---
id: thm-pbh-stabilizability-and-detectability-equivalence
kind: theorem
title: "Closed-region PBH rank tests characterize continuous and discrete
  stabilizability and detectability"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-lqr-stabilizability-and-detectability
  - lem-stabilizability-and-detectability-pbh-necessary-conditions
  - lem-reachable-decomposition-and-state-feedback-pole-placement
  - lem-characteristic-polynomial-of-block-triangular-matrix
  - thm-row-rank-equals-column-rank
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Karl J. Åström and Richard M. Murray, Feedback Systems: An Introduction
        for Scientists and Engineers"
      url: "https://faculty.sites.iastate.edu/tesfatsi/archive/tesfatsi/FeedbackSyste\
        ms.AstromMurray.pdf"
      locator: "Version 2.11b complete book; §6.1, pp.167–174, reachability; §6.2,
        pp.175–181, SISO state-feedback pole placement; §7.2, pp.207–208,
        observer duality. The local proof establishes the multi-input
        equivalences."
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§2.3 controllability and §5.1 DARE stabilizability/detectability
        context. The local proof establishes the closed-region PBH
        equivalences."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $F\in\{\mathbb R,\mathbb C\}$ and let $A\in F^{n\times n}$, $B\in F^{n\times m}$ and $C\in F^{p\times n}$ have the domains in [[def-lqr-stabilizability-and-detectability]]. All rank tests below are over $\mathbb C$, including for real matrices.

- $(A,B)$ is continuously stabilizable if and only if $\operatorname{rank}_{\mathbb C}[\lambda I-A\ \ B]=n$ for every $\lambda$ with $\operatorname{Re}\lambda\ge0$.
- $(A,B)$ is discretely stabilizable if and only if that horizontal rank is $n$ for every $\lambda$ with $|\lambda|\ge1$.
- $(A,C)$ is continuously detectable if and only if $\operatorname{rank}_{\mathbb C}\begin{bmatrix}\lambda I-A\\C\end{bmatrix}=n$ for every $\lambda$ with $\operatorname{Re}\lambda\ge0$.
- $(A,C)$ is discretely detectable if and only if that vertical rank is $n$ for every $\lambda$ with $|\lambda|\ge1$.

Whenever the converse direction constructs a feedback or injection, its entries lie in the original field $F$. The boundary $\operatorname{Re}\lambda=0$ or $|\lambda|=1$ is included in each forbidden region. These are exact finite-dimensional tests; a small equation residual or approximate eigenvalue does not imply them.

## Facts & Assumptions

**Given:** The finite matrices and the existential continuous/discrete stabilizability and detectability definitions of [[def-lqr-stabilizability-and-detectability]].

[F1] [[def-lqr-stabilizability-and-detectability]]: stabilizability means existence of a same-field $K$ with $A-BK$ Hurwitz or Schur stable; detectability means existence of a same-field $L$ with $A-LC$ Hurwitz or Schur stable.

[F2] [[lem-stabilizability-and-detectability-pbh-necessary-conditions]]: each of the four existential stability hypotheses implies its horizontal or vertical rank test on the corresponding closed region.

[F3] [[lem-reachable-decomposition-and-state-feedback-pole-placement]]: the horizontal rank test for all complex $\lambda$ is equivalent to the uncontrollable block having no eigenvalue there, and a reachable block admits arbitrary same-field pole assignment.

[F4] [[lem-characteristic-polynomial-of-block-triangular-matrix]]: the characteristic polynomial of a block-triangular matrix is the product of the diagonal-block characteristic polynomials.

[F5] [[thm-row-rank-equals-column-rank]]: the rank of a finite complex matrix equals the rank of its adjoint, so vanishing of the left nullspace is equivalent to full row rank.

## Proof

1.1 Necessity in all four assertions is exactly [F2]. This proves the forward implications from stabilizability or detectability to the stated rank tests, including every point on each closed boundary. [F2]

1.2 Fix either forbidden closed region $\Omega=\{\lambda:\operatorname{Re}\lambda\ge0\}$ or $\Omega=\{\lambda:|\lambda|\ge1\}$. Suppose the horizontal rank test holds for all $\lambda\in\Omega$, and apply [F3] to $(A,B)$ over the original field $F$. The uncontrollable block $A_u$ has no eigenvalue in $\Omega$, so its eigenvalues lie in the open left half-plane or open unit disk, respectively. Assign the reachable block repeated pole $-1$ or $0$ by [F3], obtaining $K_r$. With its decomposition matrix $P$, set $K=[K_r\ 0]P^{-1}$; if $r=0$ take $K=0$, and if $r=n$ omit the empty trailing block. Then $P^{-1}(A-BK)P=\begin{bmatrix}A_r-B_rK_r&D\\0&A_u\end{bmatrix}$. By [F4] its eigenvalues are the assigned stable poles and those of $A_u$, with multiplicity; hence $A-BK$ is Hurwitz or Schur stable, and $K\in F^{m\times n}$. [F1, F3, F4, given, algebra]

2.1 For every $\lambda\in\mathbb C$, $\operatorname{rank}_{\mathbb C}[\bar\lambda I-A^*\ \ C^*]=\operatorname{rank}_{\mathbb C}\begin{bmatrix}\lambda I-A\\C\end{bmatrix}$ because these matrices are adjoints and [F5] applies. Each forbidden region is invariant under conjugation, so its vertical test for $(A,C)$ is the horizontal test for $(A^*,C^*)$. Step 1.2 supplies $J\in F^{p\times n}$ with $A^*-C^*J$ Hurwitz or Schur stable. Its adjoint $A-J^*C$ has conjugate eigenvalues with the same real parts and moduli, so $L=J^*\in F^{n\times p}$ is the required injection. This proves both detectability converses, including their boundary cases. [F1, F5, step 1.2, algebra] ∎
