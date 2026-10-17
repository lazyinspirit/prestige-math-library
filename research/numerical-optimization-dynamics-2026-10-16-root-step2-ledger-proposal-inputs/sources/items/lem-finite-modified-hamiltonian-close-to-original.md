---
id: lem-finite-modified-hamiltonian-close-to-original
kind: lemma
title: A fixed finite modified Hamiltonian is close to the original energy
status: draft
origin: pipeline
dependency_level: 4
deps: [lem-finite-modified-hamiltonian-exists]
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
      locator: "PDF pp. 5–7"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 42–44"
---

## Statement

For a fixed $N\ge r$ and compact $K\Subset U$, let $H_h^{[N]}=H+\sum_{j=r}^Nh^jH_j$ be the finite modified Hamiltonian constructed in [[lem-finite-modified-hamiltonian-exists]]. Then for $0<h\le1$,
$$\sup_{z\in K}|H_h^{[N]}(z)-H(z)|\le C_0h^r,\qquad C_0:=\sum_{j=r}^N\sup_{z\in K}|H_j(z)|<\infty.$$

## Facts & Assumptions

**Given:** A fixed finite truncation and compact $K\Subset U$.

[F1] The coefficients $H_j$ are smooth on $U$ and the modified Hamiltonian is the finite polynomial $H+\sum_{j=r}^Nh^jH_j$. [[lem-finite-modified-hamiltonian-exists]]

## Proof

**Proof technique:** bound the finite coefficient sum.

1.1 Each $H_j$ is continuous on compact $K$, so its supremum $M_j=\sup_K|H_j|$ is finite. By [F1], $|H_h^{[N]}(z)-H(z)|\le\sum_{j=r}^Nh^jM_j\le h^r\sum_{j=r}^NM_j$ for $0<h\le1$, because $h^j\le h^r$ when $j\ge r$. [F1, given, algebra]

2.1 Taking the supremum over $z\in K$ proves the displayed estimate with $C_0=\sum_{j=r}^NM_j$. [step 1.1] ∎
