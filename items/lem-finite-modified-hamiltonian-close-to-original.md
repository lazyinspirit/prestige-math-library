---
id: lem-finite-modified-hamiltonian-close-to-original
kind: lemma
title: A fixed finite modified Hamiltonian is close to the original energy
status: draft
origin: pipeline
dependency_level: 4
deps: [lem-finite-modified-hamiltonian-exists, thm-extreme-value-metric]
justified_by: []
forward_refs: []
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
      locator: "PDF pp. 5–7"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 42–44"
---

## Statement

For a fixed $N\ge r$ and compact $K\Subset U$, let $H_h^{[N]}=H+\sum_{j=r}^Nh^jH_j$ be the finite modified Hamiltonian constructed in [[lem-finite-modified-hamiltonian-exists]]. Define $M_j=0$ if $K=\varnothing$, and otherwise $M_j:=\max_{z\in K}|H_j(z)|$. Put $C_0:=\sum_{j=r}^N M_j$. Then $C_0$ is finite and nonnegative, and for $0<h\le1$,
$$|H_h^{[N]}(z)-H(z)|\le C_0h^r\qquad(z\in K).$$
The least nonnegative upper bound for these pointwise errors is also at most $C_0h^r$. If $K\ne\varnothing$, this is exactly
$$\sup_{z\in K}|H_h^{[N]}(z)-H(z)|\le C_0h^r,\qquad C_0=\sum_{j=r}^N\sup_{z\in K}|H_j(z)|.$$
If $K=\varnothing$, the pointwise assertion is vacuous and its least nonnegative upper bound is $0=C_0$; no real supremum of an empty set is used.

## Facts & Assumptions

**Given:** A fixed finite truncation and compact $K\Subset U$.

[F1] The coefficients $H_j$ are smooth on $U$ and the modified Hamiltonian is the finite polynomial $H+\sum_{j=r}^Nh^jH_j$. [[lem-finite-modified-hamiltonian-exists]]

[F2] A continuous real-valued function on a nonempty compact metric space attains a finite maximum, equal to its real supremum. [[thm-extreme-value-metric]]

## Proof

**Proof technique:** separate the empty set and bound the finite coefficient sum.

1.1 If $K=\varnothing$, every $M_j=0$ and hence $C_0=0$. The pointwise estimate has no instances, and every nonnegative real is a uniform upper bound for the empty error family, so its least such bound is $0$. Assume henceforth $K\ne\varnothing$. By [F1], every $H_j$ is continuous; [F2] applied to $|H_j|$ gives its finite nonnegative maximum $M_j$ on $K$, equal to the corresponding supremum. Their finite sum $C_0$ is therefore finite and nonnegative. [F1, F2, given, algebra]

2.1 For $z\in K$, [F1] and step 1.1 give $|H_h^{[N]}(z)-H(z)|\le\sum_{j=r}^N h^jM_j\le h^r\sum_{j=r}^NM_j=C_0h^r$ for $0<h\le1$, since every $j\ge r$ has $h^j\le h^r$. The error function is continuous on nonempty compact $K$, so [F2] also gives its attained maximum and ordinary real supremum, both bounded by this same right-hand side. Its nonnegative maximum is its least nonnegative upper bound. Together with the empty branch in step 1.1, this proves every stated case without an empty real supremum. [F1, F2, step 1.1, given, algebra] ∎
