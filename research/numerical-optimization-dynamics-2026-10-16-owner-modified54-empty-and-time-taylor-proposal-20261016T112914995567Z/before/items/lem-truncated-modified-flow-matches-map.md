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
$$\sup_{z\in K}\|\Phi_h(z)-\varphi_h^{[N]}(z)\|\le C_N|h|^{N+2}\qquad(|h|\le h_0).$$
The constants depend on the fixed truncation order and the compact derivative bounds; no uniformity as $N\to\infty$ is claimed.

## Facts & Assumptions

**Given:** Fixed finite $N$, the smooth method and finite modified vector field, and the compact tube and comparison-segment assumptions.

[A1] The method has a smooth local branch of the required finite regularity on $K'$. For implicit midpoint this follows from its smooth defining equation and invertible branch derivative. [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]

[F1] The Taylor coefficients of the method and the finite modified-flow recursion agree through degree $N+1$. [[lem-finite-modified-hamiltonian-exists]]

[F2] A local $C^1$ flow exists for a smooth vector field; its integral equation is $u(t)=z+\int_0^tX_h^{[N]}(u(s))ds$. [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]

[F3] Taylor's remainder is bounded by the supremum of the corresponding derivative on the compact comparison tube. [[thm-multivariable-taylor-formula-with-lagrange-remainder]]

## Proof

**Proof technique:** identical finite Taylor coefficients and uniform compact remainders.

1.1 By [F1], the coefficients of $\Phi_h(z)$ and $\varphi_h^{[N]}(z)$ at every power from $h^0$ through $h^{N+1}$ agree for each $z\in K$. [F1, given]

1.2 The method is a finite composition of smooth shears, or the smooth midpoint branch from [A1]; hence its $h$-derivatives through order $N+2$ are bounded on the compact tube. For the modified flow, differentiate the integral equation in [F2] repeatedly in time: the first derivative is $X_h^{[N]}(u)$, and each next derivative is a finite sum of products of derivatives of $X_h^{[N]}$ and previously obtained derivatives of $u$. Since the field is smooth and the comparison path lies in $K'$, induction gives a uniform bound through order $N+2$. [A1, F2, given, induction]

2.1 Apply [F3] to both maps with those derivative bounds. Their remainders after degree $N+1$ are each at most a constant times $|h|^{N+2}$, uniformly on $K$. The coefficients through degree $N+1$ cancel by step 1.1, so the difference is bounded by the sum of those remainders. [F1, F3, step 1.1, step 1.2, algebra] ∎
