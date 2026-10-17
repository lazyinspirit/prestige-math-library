---
id: lem-truncated-modified-flow-matches-map
kind: lemma
title: A fixed finite modified flow matches its method map to the stated Taylor order
status: draft
origin: pipeline
dependency_level: 4
deps:
  - lem-finite-modified-hamiltonian-exists
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-extreme-value-metric
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 3: Backward error analysis"
      url: "https://www.unige.ch/~hairer/poly_geoint/week3.pdf"
      locator: "PDF pp. 1–7"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 41–44"
---

## Statement

Fix an integer $N\ge r$ and a compact set $K\Subset U$ for which the method maps and their selected branches are defined on a neighborhood. Let $H_h^{[N]}$ and $X_h^{[N]}$ be the finite modified Hamiltonian and vector field from [[lem-finite-modified-hamiltonian-exists]], and let $\varphi_h^{[N]}$ be the time-$h$ flow of $X_h^{[N]}$. If the method, the comparison flow, and all Taylor segments remain in a compact $K'\Subset U$, then there are $h_0,C_N>0$ such that
$$E_K(h)\le C_N|h|^{N+2}\qquad(|h|\le h_0),$$
where $E_K(h)=0$ if $K=\varnothing$, and otherwise
$$E_K(h):=\max_{z\in K}\|\Phi_h(z)-\varphi_h^{[N]}(z)\|.$$
For nonempty $K$, this maximum exists by continuity on the compact set and equals the ordinary real supremum. In both cases $E_K(h)$ is the least nonnegative upper bound for the pointwise errors on $K$: for empty $K$ every nonnegative real is an upper bound and $0$ is the least. This convention does not assign a real supremum to an empty subset of $\mathbb R$.
The constants depend on the fixed truncation order and the compact derivative bounds; no uniformity as $N\to\infty$ is claimed.

## Facts & Assumptions

**Given:** Fixed finite $N$, the smooth method and finite modified vector field, and the compact tube and comparison-segment assumptions.

[A1] The method has a smooth local branch of the required finite regularity on $K'$. For implicit midpoint this follows from its smooth defining equation and invertible branch derivative. [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]

[F1] The Taylor coefficients of the method and the finite modified-flow recursion agree through degree $N+1$. [[lem-finite-modified-hamiltonian-exists]]

[F2] A local $C^1$ flow exists for a smooth vector field; its integral equation is $u(t)=z+\int_0^tX_h^{[N]}(u(s))ds$. [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]

[F3] Scalar Taylor expansion along a real segment gives a derivative-controlled finite-order remainder; componentwise bounds give a Euclidean remainder bound. [[thm-multivariable-taylor-formula-with-lagrange-remainder]]

[F4] A continuous real-valued function on a nonempty compact metric space has a finite attained maximum, equal to its real supremum. [[thm-extreme-value-metric]]

## Proof

**Proof technique:** fixed-parameter time Taylor expansion, finite coefficient regrouping, and compact uniform bounds.

1.1 If $K=\varnothing$, its pointwise error family is empty, so every nonnegative real bounds it and $0$ is the least such bound. Thus $E_K(h)=0$ satisfies the estimate, for example with $h_0=C_N=1$. Assume henceforth $K\ne\varnothing$. For each admitted fixed $h$, [A1] and [F2] make the method and time-$h$ flow continuous in their initial state. By [F4] their error norm attains a finite nonnegative maximum on $K$; its maximum is its least nonnegative upper bound and its ordinary real supremum. [A1, F2, F4, given, algebra]

1.2 The method is a finite composition of smooth shears, or the smooth implicit branch in [A1]. For sufficiently small $h_0\le1$, its derivatives with respect to the step parameter through order $N+2$ are bounded on the compact admitted comparison set. Applying [F3] to each component therefore gives $\Phi_h(z)=z+\sum_{q=1}^{N+1}h^q d_q(z)+R_{\Phi}(h,z)$ with $\|R_{\Phi}(h,z)\|\le C_{\Phi}|h|^{N+2}$ uniformly on $K$. The coefficients $d_q$ are those in [F1]. [A1, F1, F3, F4, given, algebra]

1.3 Hold $h$ fixed and put $X_h=X_H+\sum_{j=r}^{N}h^jX_j$. Along its trajectory $u_h(t,z)$, the integral equation in [F2] gives $\partial_tu_h=X_h(u_h)$. Repeated differentiation in $t$ gives $\partial_t^q u_h=B_q(h,u_h)$, where $B_1(h,w)=X_h(w)$ and $B_{q+1}(h,w)=D_wB_q(h,w)X_h(w)$. Each $B_q$ is a finite polynomial in $h$ with smooth coefficient functions of $w$, because $X_h$ is such a polynomial by [F1]. For $|h|\le h_0\le1$ these coefficient functions and the required derivatives are uniformly bounded on the compact tube $K'$ by [F4]. Thus the time derivatives through $q=N+2$ are uniformly bounded on the stipulated trajectories. Apply [F3] in the time variable, with parameter $h$ fixed, between $t=0$ and $t=h$ (also for negative $h$). It gives $\varphi_h^{[N]}(z)=z+\sum_{q=1}^{N+1}h^q B_q(h,z)/q!+R_u(h,z)$, where $\|R_u(h,z)\|\le C_u|h|^{N+2}$ uniformly on $K$. No derivative of the flow with respect to the field parameter $h$ is used. [F1, F2, F3, F4, given, induction, algebra]

2.1 Expand the finitely many polynomials $B_q(h,z)$ in step 1.3 and collect equal powers of $h$. Every term of degree at least $N+2$ is bounded by a fixed constant times $|h|^{N+2}$ for $|h|\le1$, because there are finitely many such terms and their coefficient functions are bounded on the compact tube. The recursion in [F1] (its coefficient construction) identifies all collected coefficients through degree $N+1$ with the method coefficients $d_q$ in step 1.2. Subtracting the two expansions leaves only their uniform remainders and the discarded higher-degree polynomial terms. Consequently $\|\Phi_h(z)-\varphi_h^{[N]}(z)\|\le C_N|h|^{N+2}$ for all $z\in K$, after increasing $C_N$ to a positive constant. Taking the attained maximum from step 1.1 proves the asserted estimate; step 1.1 already covers empty $K$. [F1, F4, step 1.1, step 1.2, step 1.3, algebra] ∎
