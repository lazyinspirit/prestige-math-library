---
id: thm-finite-order-modified-energy-bound
kind: theorem
title: Finite-order modified energy control on a compact tube
status: published
origin: pipeline
dependency_level: 6
deps:
  - lem-finite-modified-hamiltonian-exists
  - lem-finite-modified-hamiltonian-close-to-original
  - lem-one-step-modified-energy-defect
  - thm-local-symplectic-euler-and-leapfrog-trajectory-errors
  - thm-implicit-midpoint-branch-symplectic-order-and-error
forward_refs:
  - def-exact-split-flows-lie-strang-and-bracket
  - def-regular-classical-rattle-step-map
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 3: Backward error analysis"
      url: "https://www.unige.ch/~hairer/poly_geoint/week3.pdf"
      locator: "PDF pp. 5–7 and 13"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 42–44"
---

## Statement

Let $Q\subseteq\mathbb R^d$ be open and star-shaped about a point $q_*\in Q$, meaning $q_*+t(q-q_*)\in Q$ for every $q\in Q$ and $t\in[0,1]$. Let $M$ be real symmetric positive-definite, $U=Q\times\mathbb R^d$, and $H(q,p)=\tfrac12p^TM^{-1}p+V(q)$ with $V\in C^\infty(Q)$. Choose one of this page's fixed-step methods: kick-then-drift symplectic Euler with $r=1$, or local leapfrog or an admitted implicit midpoint branch with $r=2$. Fix a finite truncation order $N\ge r$ and choose $h_0\in(0,1]$ small enough for the selected map and comparison flow branches. For one step size $0<h\le h_0$, let $z_{k+1}=\Phi_h(z_k)$ for $k=0,\ldots,n-1$, with $n\in\mathbb N_0$. Assume every numerical endpoint, every method stage, every truncated modified-flow comparison segment, and every segment used to compare $H$ with $H_h^{[N]}$ lies in one compact tube $K\Subset U$. Then there are constants $C_0,C_1$, independent of $h,n$, such that
$$|H(z_n)-H(z_0)|\le 2C_0h^r+C_1n h^{N+1}.$$
The bound holds only while the stated compact-tube and domain hypotheses hold; if $nh\le T$, its accumulated defect term is at most $C_1T h^N$. It asserts neither exact conservation of $H$ by the numerical method nor convergence of an infinite modified series.

## Facts & Assumptions

**Given:** A smooth Hamiltonian, one selected page method and its order $r$, a fixed $N\ge r$, a fixed step $0<h\le h_0\le1$, and a trajectory satisfying the compact-tube hypotheses.

[A1] The finite modified Hamiltonian exists globally on the star-shaped phase domain. [[lem-finite-modified-hamiltonian-exists]]

[F1] On the compact tube, $|H_h^{[N]}-H|\le C_0h^r$. [[lem-finite-modified-hamiltonian-close-to-original]]

[F2] Each numerical step changes the finite modified Hamiltonian by at most $C_1h^{N+1}$. [[lem-one-step-modified-energy-defect]]

[F3] Symplectic Euler has order one, while leapfrog and the admitted implicit midpoint branch have order two under their respective tube and branch conditions. [[thm-local-symplectic-euler-and-leapfrog-trajectory-errors]], [[thm-implicit-midpoint-branch-symplectic-order-and-error]]

## Proof

**Proof technique:** telescope the modified energy and compare its endpoints with the original energy.

1.1 For the selected method, [F3] fixes the order $r$ of the finite modification. For each $k<n$, [A1] and [F2] then give $|H_h^{[N]}(z_{k+1})-H_h^{[N]}(z_k)|\le C_1h^{N+1}$. The triangle inequality over the $n$ consecutive increments yields $|H_h^{[N]}(z_n)-H_h^{[N]}(z_0)|\le C_1n h^{N+1}.$ [A1, F2, F3, given, algebra]

2.1 Add and subtract the modified Hamiltonian at both endpoints: $H(z_n)-H(z_0)=(H-H_h^{[N]})(z_n)+(H_h^{[N]}(z_n)-H_h^{[N]}(z_0))+(H_h^{[N]}-H)(z_0).$ Applying [F1] to the first and third terms and step 1.1 to the middle term gives the stated bound. [F1, step 1.1, algebra] ∎

## Remarks

Symplecticity, reversibility, exact invariants, and modified-energy control are separate properties. This result concerns only the unconstrained maps specified above. Lie and Strang splitting are treated at [[def-exact-split-flows-lie-strang-and-bracket|the exact split-flow compositions]], while constrained integration is treated at [[def-regular-classical-rattle-step-map|the classical RATTLE step]]; no claim here transfers to those methods.

