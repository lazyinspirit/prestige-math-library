---
id: def-qsm-infinite-algebraic-state
kind: definition
title: Infinite algebraic state and finite-region restrictions
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [def-qsm-quasilocal-spin-algebra, lem-qsm-quasilocal-completion, lem-qsm-matrix-state-calculus, def-countable-choice]
dependency_roles:
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
dependency_level: 5
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§2.4–2.5, pp. 34–40
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §4, pp. 6–8
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
---

## Definition

Let $\mathcal A$ be the unital quasi-local spin C*-algebra of [[def-qsm-quasilocal-spin-algebra]], whose C*-structure uses Countable Choice as in [[lem-qsm-quasilocal-completion]]. An **infinite algebraic state** is a bounded complex-linear functional $\omega:\mathcal A\to\mathbb C$ satisfying $\omega(I)=1$ and $\omega(A^*A)\ge0$ for every $A\in\mathcal A$.

For each finite region $\Lambda\subseteq\mathbb Z^d$, the restriction $\omega|_{\mathcal A_\Lambda}$ is a finite-matrix state. Conditional on the missing converse clause in the inspected draft [[lem-qsm-matrix-state-calculus]]—that every positive normalized functional on a finite matrix algebra is represented by a unique positive trace-one density matrix—define its **local density matrix** $\rho_\Lambda$ by

$$\omega(A)=\operatorname{Tr}_{\Lambda}(\rho_\Lambda A)\qquad(A\in\mathcal A_\Lambda),$$

where $\rho_\Lambda=\rho_\Lambda^*\ge0$ and $\operatorname{Tr}_{\Lambda}\rho_\Lambda=1$. For $\Lambda\subseteq\Lambda'$, the local densities are **consistent** when $\operatorname{Tr}_{\Lambda'\setminus\Lambda}(\rho_{\Lambda'})=\rho_\Lambda$, with partial trace characterized by its pairing against every $A\otimes I_{\Lambda'\setminus\Lambda}$. No density operator on a globally chosen Hilbert space is part of this definition.

The draft supplier does state the trace pairing and identities for a density matrix already given, but does not establish that every finite local state has such a density matrix. Thus local-density claims remain conditional on that exact converse interface; the draft's separate status and proof limitations are recorded in batch-38 dependency evidence.

