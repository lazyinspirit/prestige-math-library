---
id: rem-qft-cutoff-vs-continuum-interaction
kind: remark
domain: mathematics
title: Fixed finite-mode results do not establish a continuum limit
status: draft
origin: pipeline
dependency_level: 5
deps: [def-qft-regulated-polynomial-hamiltonian, thm-qft-self-adjoint-regulated-interaction, def-countable-choice]
dependency_roles:
  def-qft-regulated-polynomial-hamiltonian: mathematical-premise
  thm-qft-self-adjoint-regulated-interaction: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §2.3, pp.76–83"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "§2.3, printed pp.76–83: quadratic-form construction for a fixed operator domain and Hilbert space."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapter 8, pp.48–50"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Chapter 8, printed pp.48–50: compactness and spectral conclusions for a fixed confining operator."
---

## Statement

In [[def-qft-regulated-polynomial-hamiltonian]], the regulator is one fixed
finite mode count $N$ and one fixed polynomial on $\mathbb R^N$. The self-adjoint
and compact-resolvent conclusions of
[[thm-qft-self-adjoint-regulated-interaction]] concern that fixed Hilbert space
and form realization. They assert no continuum or infinite-volume limit. Here
“continuum limit” means a limit of a specified family of finite-regulator
objects as a cutoff parameter changes, together with an identified comparison
space and convergence notion. No such family or convergence structure is part
of the two cited items. This scope note does not assert that a continuum limit
does not exist.

## Facts & Assumptions

**Given:** the fixed finite-mode data and its selected self-adjoint realization.

[A1] [[def-countable-choice]]: the selected finite-mode realization is constructed under Countable Choice.

[F1] [[def-qft-regulated-polynomial-hamiltonian]]: $N$ is a fixed finite integer and the datum defines one $L^2(\mathbb R^N)$ space and one polynomial differential expression; no limit in $N$ is included.

[F2] [[thm-qft-self-adjoint-regulated-interaction]]: the self-adjointness, lower bound, compact resolvent, and ground eigenvalue concern the fixed form realization on that $L^2(\mathbb R^N)$.

## Proof

**Proof technique:** direct.

**Given:** [F1] and [F2].

1.1 The hypotheses in [F1] specify a single integer $N$, a single coordinate space $\mathbb R^N$, and a single potential $V$; they contain no indexed family with varying cutoff. [A1, F1, definition]

1.2 A convergence assertion for varying cutoffs requires at least a family of objects, a common comparison space or maps between the spaces, and a convergence relation. Neither those data nor a limiting object occur in [F1] or [F2]. Therefore the theorems establish only the stated fixed-$N$ operator properties. The absence of those hypotheses is not a proof of nonexistence of a limit in a separately specified model. [A1, F1, F2, step 1.1, definition] ∎
