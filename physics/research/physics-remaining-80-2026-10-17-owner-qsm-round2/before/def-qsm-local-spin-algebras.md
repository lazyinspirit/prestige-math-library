---
id: def-qsm-local-spin-algebras
kind: definition
title: Local spin matrix algebras and their factor inclusions
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [lem-qsm-integer-lattice-countable, lem-qsm-matrix-state-calculus]
dependency_roles:
  lem-qsm-integer-lattice-countable: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§3.2.2–3.2.3, pp. 55–57
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 3 §1, pp. 25–26
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
---

## Definition

Fix an integer dimension $d\ge1$, the countable site set $\Gamma=\mathbb{Z}^d$ of [[lem-qsm-integer-lattice-countable]], and one finite spin dimension $q\ge1$. Equip $\Gamma$ with the max-coordinate metric $d_\infty(x,y)=\max_{1\le r\le d}|x_r-y_r|$; symmetry and separation hold coordinatewise, and the triangle inequality follows from $|x_r-z_r|\le|x_r-y_r|+|y_r-z_r|$ for every coordinate. A **finite region** is a finite subset $\Lambda\subseteq\Gamma$; its cardinality is $|\Lambda|$.

For a finite region $\Lambda$, let $S_\Lambda=\{1,\ldots,q\}^{\Lambda}$ be the set of spin configurations on $\Lambda$ and let $\mathcal H_\Lambda$ be the vector space of functions $f:S_\Lambda\to\mathbb C$ with inner product $\langle f,g\rangle=\sum_{s\in S_\Lambda}f(s)\overline{g(s)}$. For each $s\in S_\Lambda$, let $e_s$ be the indicator function of $\{s\}$; these vectors form an orthonormal basis. For $\Lambda=\varnothing$, $S_\Lambda$ is a singleton and $\mathcal H_\Lambda\cong\mathbb C$. The **local spin matrix algebra** is

$$\mathcal A_\Lambda:=\mathcal B(\mathcal H_\Lambda)\cong M_{q^{|\Lambda|}}(\mathbb C),$$

Here $\mathcal B(\mathcal H_\Lambda)$ denotes all complex-linear endomorphisms of the finite-dimensional Hilbert space; they are bounded. The algebra has composition, Hilbert adjoint, identity $I_\Lambda$, and induced operator norm

$$\|T\|:=\sup_{\|\xi\|=1}\|T\xi\|.$$

The **finite local trace** is $\operatorname{Tr}_\Lambda(T):=\sum_{s\in S_\Lambda}\langle T e_s,e_s\rangle$ in the displayed configuration basis $(e_s)$. This is the usual finite-matrix trace; basis independence and its cyclic/unitary identities are among the conditional finite-matrix clauses recorded for [[lem-qsm-matrix-state-calculus]].

If $\Lambda\subseteq\Lambda'$, restriction of configurations gives the canonical factorization $\mathcal H_{\Lambda'}\cong\mathcal H_\Lambda\otimes\mathcal H_{\Lambda'\setminus\Lambda}$, with sites ordered lexicographically. The **factor inclusion** is the unital $*$-homomorphism $\iota_{\Lambda,\Lambda'}:\mathcal A_\Lambda\to\mathcal A_{\Lambda'}$ given by $T\mapsto T\otimes I_{\Lambda'\setminus\Lambda}$. A **localization region** for $T$ is any finite $\Lambda$ for which $T\in\mathcal A_\Lambda$ under these inclusions; a localization region need not be minimal.

The intended finite matrix convention is the ordinary operator norm and trace. The inspected draft [[lem-qsm-matrix-state-calculus]] proves finite-dimensional Hermitian spectral and some trace/density identities for an already supplied density matrix, but its current statement does not establish the operator-norm C*-identity or the converse representation of every positive normalized functional by a density matrix. Later conditional items name those additional clauses explicitly; the exact interface gap is recorded in batch-38 dependency evidence. This definition does not posit an infinite-dimensional tensor-product Hilbert space.

