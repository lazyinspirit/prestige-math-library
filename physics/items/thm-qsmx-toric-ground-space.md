---
id: thm-qsmx-toric-ground-space
kind: theorem
title: Commuting stabilizers and topological degeneracy
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-toric-cellular-hamiltonian
  - cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-toric-cellular-hamiltonian: mathematical-premise
  cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: Pure finite-dimensional mathematics for the stated unperturbed Hamiltonian; no empirical realization or perturbation stability claim.
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons
      url: https://arxiv.org/pdf/quant-ph/9707021
      locator: §1, equations (1)–(4), PDF pp. 2–5; stabilizer relations, ground dimension, and gap.
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §§9.6–9.7, PDF pp. 16–21; topological degeneracy, toric stabilizers, and pair-excitation cost.
---

## Statement

Assume the Axiom of Choice. Let $K$ be a finite cellulation of a closed, connected, orientable surface of genus $g\ge0$, with the incidence and Hamiltonian conventions of the toric-code definition. For positive couplings $J_v,K_f$, the Hamiltonian is positive and frustration free, meaning its positive penalty terms have a common nonzero vector in their kernels. Its ground-space dimension is $2^{2g}$. Define its spectral gap as the least positive eigenvalue of $H_K$, or $+\infty$ if there is no positive eigenvalue. This gap is at least $2m$, where $m=\min(\{J_v:v\in V\}\cup\{K_f:f\in F\})>0$, and in particular is at least $m$. On a uniform $L\times L$ square torus with $L\ge3$ and couplings $J_v=J>0$, $K_f=K>0$, the exact gap is $2\min(J,K)$.

## Statement references

[A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” §1](https://arxiv.org/pdf/quant-ph/9707021)

[John Preskill, *Lecture Notes for Physics 219: Quantum Computation*, §§9.6–9.7](https://www.preskill.caltech.edu/ph219/topological.pdf)

## Facts & Assumptions

**Given:** A finite edge-qubit cellulation $K$ of a closed, connected, orientable genus-$g$ surface, positive couplings, and the adopted Axiom of Choice.

[A1] The Axiom of Choice: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]). It is used here only through the surface Euler-characteristic corollary [F2].

[F1] [[def-qsmx-toric-cellular-hamiltonian]]: $A_v=X(\partial_1^Tv)$ and $B_f=Z(\partial_2f)$ are self-adjoint involutions, $\partial_1\partial_2=0$, the primal and dual graphs are connected, and the Hamiltonian is the sum of the corresponding positive penalty terms.

[F2] [[cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g]]: under [A1], the finite cell count satisfies $|V|-|E|+|F|=2-2g$.

## Proof
1.1 Since $\partial_1\partial_2=0$, the supports of $A_v$ and $B_f$ overlap in even parity, so they commute. Each is a self-adjoint involution; hence $(I-A_v)/2$ and $(I-B_f)/2$ are commuting orthogonal projections. Multiplication by the positive coefficients makes each summand positive semidefinite. [given, F1, algebra]

1.2 The product of all vertex operators is $I$, because each edge has two endpoint incidences counted modulo two. The product of all face operators is $I$, because the closed surface has two incident face sides at each edge. Therefore any simultaneous joint eigenvalue assignment has an even number of violated vertex constraints and an even number of violated face constraints. [F1, algebra]

1.3 The image of $\partial_1$ is the even-parity subspace of $\mathbb F_2^V$: every edge boundary has even parity, while for a fixed vertex $v_0$, a path to each $v\ne v_0$ has boundary $v+v_0$, and these vectors span that subspace. Thus $\operatorname{rank}\partial_1=|V|-1$. A vertex coefficient vector lies in $\ker\partial_1^T$ exactly when it is orthogonal to this even-parity subspace; this orthogonal complement consists of the constant vectors and has dimension one. Rank-nullity gives $\operatorname{rank}\partial_1^T=|V|-1$, the number of independent vertex stabilizers. A face 2-chain is in $\ker\partial_2$ exactly when its coefficients agree across adjacent faces; dual-graph connectedness makes this kernel the one-dimensional constant subspace, so $\operatorname{rank}\partial_2=|F|-1$, the number of independent face stabilizers. Hence the combined stabilizer group has rank $r=|V|+|F|-2$. [F1, algebra]

2.1 Choose independent generators $S_1,\ldots,S_r$ from those commuting involutions and set $\Pi=2^{-r}\prod_{j=1}^r(I+S_j)$. This is an orthogonal projection. Independence of the vertex and face support vectors implies that its $2^r$ Pauli terms are distinct and only the all-identity term is the identity matrix. Every other Pauli term has trace zero because at least one tensor factor is $X$, $Z$, or $XZ$, each of which has trace zero. Thus $\operatorname{Tr}\Pi=2^{-r}2^{|E|}>0$, so the common $+1$ eigenspace is nonzero and has dimension $2^{|E|-r}$. Each penalty is an orthogonal projection by step 1.1, and for every $\psi$ the quadratic form is $\langle\psi,H_K\psi\rangle=\sum_{v\in V}J_v\left\|\frac{I-A_v}{2}\psi\right\|^2+\sum_{f\in F}K_f\left\|\frac{I-B_f}{2}\psi\right\|^2$. Positivity of every coupling makes this quantity zero exactly when every penalty annihilates $\psi$, equivalently when every stabilizer has eigenvalue $+1$. Thus $\ker H_K$ is the common $+1$ eigenspace, the Hamiltonian is frustration free, and its ground space has dimension $2^{|E|-r}$. [F1, step 1.1, step 1.3, algebra]

2.2 Put $m=\min(\{J_v\}\cup\{K_f\})$. The commuting self-adjoint penalty projections have a common orthonormal eigenbasis: diagonalize one projection and restrict the remaining commuting projections to each invariant eigenspace, iterating over the finite family. Thus every eigenvalue of $H_K$ occurs on a joint eigenvector. Outside the ground space, such a vector violates at least one constraint; by the two product identities of step 1.2, at least two constraints of that same type are violated. Each contributes at least $m$, so every excited eigenvalue is at least $2m$ above the ground energy zero. If the orthogonal complement of the ground space is zero, the stated $+\infty$ convention applies. [given, step 1.2, algebra]

3.1 The dimension found in step 2.1 is $2^{|E|-|V|-|F|+2}$. By [F2], under [A1], $|V|-|E|+|F|=2-2g$, so $|E|-|V|-|F|+2=2g$. Therefore the ground-space dimension is $2^{2g}$. [A1, F2, step 2.1, algebra]

4.1 On the uniform square torus, applying $Z$ on one edge to any ground vector flips exactly the two distinct endpoint vertex eigenvalues and no face eigenvalue, giving an excited vector of energy $2J$. Applying $X$ on one edge flips exactly the two adjacent face eigenvalues and no vertex eigenvalue, giving an excited vector of energy $2K$. The lower bound of step 2.2 is $2\min(J,K)$, and one of these two constructions attains it. Thus the exact first-excitation cost is $2\min(J,K)$. [F1, step 2.2, construct] ∎

## Remarks

The gap statement concerns the exact finite commuting-projector Hamiltonian. No perturbation-stability, thermodynamic-limit, or empirical claim is asserted.
