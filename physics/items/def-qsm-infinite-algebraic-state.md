---
id: def-qsm-infinite-algebraic-state
kind: definition
title: Infinite algebraic state and finite-region restrictions
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
- def-qsm-quasilocal-spin-algebra
- def-qsm-local-spin-algebras
- lem-qsm-quasilocal-completion
- lem-qsm-matrix-state-calculus
- def-countable-choice
- lem-qsm-finite-matrix-cstar-and-state-duality
- def-state-on-a-c-star-algebra
dependency_roles:
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  def-state-on-a-c-star-algebra: mathematical-premise
dependency_level: 6
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
  - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§2.4–2.5, pp. 34–40
    url: https://arxiv.org/pdf/1311.2717
  - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §4, pp. 6–8
    url: https://arxiv.org/pdf/math-ph/0107009
---

## Definition

Let $\mathcal A$ be the unital quasi-local spin C*-algebra of [[def-qsm-quasilocal-spin-algebra]], whose C*-structure uses Countable Choice as in [[lem-qsm-quasilocal-completion]]. An **infinite algebraic state** is a bounded complex-linear functional $\omega:\mathcal A\to\mathbb C$ satisfying $\omega(I)=1$ and $\omega(A^*A)\ge0$ for every $A\in\mathcal A$.

For each finite region $\Lambda\subseteq\mathbb Z^d$, the restriction $\omega|_{\mathcal A_\Lambda}$ is a finite-matrix state. By [[lem-qsm-finite-matrix-cstar-and-state-duality]], every positive normalized functional on a finite matrix algebra is represented by a unique density matrix. Define its **local density matrix** $\rho_\Lambda$ by

$$\omega(A)=\operatorname{Tr}_{\Lambda}(\rho_\Lambda A)\qquad(A\in\mathcal A_\Lambda),$$

where $\rho_\Lambda=\rho_\Lambda^*\ge0$ and $\operatorname{Tr}_{\Lambda}\rho_\Lambda=1$. For $\Lambda\subseteq\Lambda'$, put $\Delta=\Lambda'\setminus\Lambda$ and use the configuration-basis factorization $\mathcal H_{\Lambda'}\cong\mathcal H_\Lambda\otimes\mathcal H_\Delta$ of [[def-qsm-local-spin-algebras]]. If $T\in\mathcal A_{\Lambda'}$, define its **partial trace over $\Delta$**, $\operatorname{Tr}_\Delta(T)\in\mathcal A_\Lambda$, by its matrix coefficients

$$\langle \operatorname{Tr}_\Delta(T)e_s,e_{s'}\rangle:=\sum_{t\in S_\Delta}\langle T(e_s\otimes e_t),e_{s'}\otimes e_t\rangle\qquad(s,s'\in S_\Lambda),$$

where $e_s$ and $e_t$ are the configuration basis vectors of $\mathcal H_\Lambda$ and $\mathcal H_\Delta$. The finite sums depend linearly on $T$, so they define a linear map $\mathcal A_{\Lambda'}\to\mathcal A_\Lambda$ with a unique output matrix for each $T$. Expanding both configuration-basis traces gives its pairing identity

$$\operatorname{Tr}_\Lambda\!\left(A\operatorname{Tr}_\Delta(T)\right)=\operatorname{Tr}_{\Lambda'}\!\left((A\otimes I_\Delta)T\right)\qquad(A\in\mathcal A_\Lambda),$$

with the common value given by

$$\sum_{s,s'\in S_\Lambda}\sum_{t\in S_\Delta}\langle A e_{s'},e_s\rangle\langle T(e_s\otimes e_t),e_{s'}\otimes e_t\rangle.$$

The pairing identity determines this matrix uniquely: if $D\in\mathcal A_\Lambda$ pairs to zero with every $A$, taking the configuration-basis matrix units $A=E_{ji}$ gives $\operatorname{Tr}_\Lambda(E_{ji}D)=\langle D e_j,e_i\rangle=0$ for every $i,j$, so $D=0$. The local densities are **consistent** when $\operatorname{Tr}_{\Lambda'\setminus\Lambda}(\rho_{\Lambda'})=\rho_\Lambda$. No density operator on a globally chosen Hilbert space is part of this definition.

This agrees with the canonical state convention of [[def-state-on-a-c-star-algebra]]: the finite restrictions have norm one by [[lem-qsm-finite-matrix-cstar-and-state-duality]], giving $|\omega(A)|\le\|A\|$ on the dense local algebra and hence on its completion; evaluation at the norm-one identity gives $\|\omega\|=1$. Conversely a canonical state has local restrictions with density matrices of trace one, since the finite norm formula and continuity on the dense local algebra imply $\|\omega\|=\omega(I)$. No global density representation is asserted.
