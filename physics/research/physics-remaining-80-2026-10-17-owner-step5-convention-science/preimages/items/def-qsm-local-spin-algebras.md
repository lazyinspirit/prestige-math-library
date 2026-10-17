---
id: def-qsm-local-spin-algebras
kind: definition
title: Local spin matrix algebras and their factor inclusions
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
- lem-qsm-integer-lattice-countable
- def-natural-numbers
- def-nat-order
- def-finite-cardinality
- def-nat-power
- def-int-order
- def-int-operations
- thm-int-ordered-ring
- lem-qsm-matrix-state-calculus
- lem-qsm-finite-matrix-cstar-and-state-duality
dependency_roles:
  lem-qsm-integer-lattice-countable: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-nat-order: mathematical-premise
  def-finite-cardinality: mathematical-premise
  def-nat-power: mathematical-premise
  def-int-order: mathematical-premise
  def-int-operations: mathematical-premise
  thm-int-ordered-ring: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§3.2.2–3.2.3, pp. 55–57
    url: https://arxiv.org/pdf/1311.2717
  - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 3 §1, pp. 25–26
    url: https://arxiv.org/pdf/math-ph/0107009
---

## Definition

Fix an integer dimension $d\ge1$, the countable site set $\Gamma=\mathbb{Z}^d$ of [[lem-qsm-integer-lattice-countable]], and one finite spin dimension $q\ge1$, where $q$ is a positive integer (so $q\in\mathbb N$ and $1\le q$, by [[def-natural-numbers]] and [[def-nat-order]]). For $n\in\mathbb Z$, define $|n|=n$ if $0\le n$ and $|n|=-n$ if $n<0$, using the integer order and additive inverse of [[def-int-order]] and [[def-int-operations]]. Totality and compatibility of the integer order with addition ([[thm-int-ordered-ring]]) give $0\le|n|$ and $-|n|\le n\le|n|$. Adding these bounds for $m,n\in\mathbb Z$ gives $|m+n|\le|m|+|n|$. Equip $\Gamma$ with the max-coordinate metric $d_\infty(x,y)=\max_{1\le r\le d}|x_r-y_r|$; the maximum exists because the coordinate set is finite and nonempty, symmetry and separation hold coordinatewise, and the absolute-value triangle inequality gives $|x_r-z_r|\le|x_r-y_r|+|y_r-z_r|$ for every coordinate, hence the triangle inequality for $d_\infty$. A **finite region** is a finite subset $\Lambda\subseteq\Gamma$; its cardinality is $|\Lambda|$ ([[def-finite-cardinality]]).

For a finite region $\Lambda$, let $S_\Lambda=\{1,\ldots,q\}^{\Lambda}$ be the set of spin configurations on $\Lambda$. Induction on $|\Lambda|$ gives $|S_\Lambda|=q^{|\Lambda|}$: the empty region has one configuration, and for $x\in\Lambda$ the restriction map $s\mapsto(s|_{\Lambda\setminus\{x\}},s(x))$ is a bijection $S_\Lambda\to S_{\Lambda\setminus\{x\}}\times\{1,\ldots,q\}$, so adjoining one site multiplies the number of configurations by $q$, according to the recursion defining natural-number powers in [[def-nat-power]]. Let $\mathcal H_\Lambda$ be the vector space of functions $f:S_\Lambda\to\mathbb C$ with inner product $\langle f,g\rangle=\sum_{s\in S_\Lambda}f(s)\overline{g(s)}$. For each $s\in S_\Lambda$, let $e_s$ be the indicator function of $\{s\}$; these vectors form an orthonormal basis. For $\Lambda=\varnothing$, $S_\Lambda$ is a singleton and $\mathcal H_\Lambda\cong\mathbb C$. The **local spin matrix algebra** is

$$\mathcal A_\Lambda:=\mathcal B(\mathcal H_\Lambda)\cong M_{q^{|\Lambda|}}(\mathbb C),$$

Here $\mathcal B(\mathcal H_\Lambda)$ denotes all complex-linear endomorphisms of the finite-dimensional Hilbert space; they are bounded. The algebra has composition, Hilbert adjoint, identity $I_\Lambda$, and induced operator norm

$$\|T\|:=\sup_{\|\xi\|=1}\|T\xi\|.$$

The **finite local trace** is $\operatorname{Tr}_\Lambda(T):=\sum_{s\in S_\Lambda}\langle T e_s,e_s\rangle$ in the displayed configuration basis $(e_s)$. This is the usual finite-matrix trace; basis independence and its cyclic/unitary identities are supplied by [[lem-qsm-matrix-state-calculus]].

If $\Lambda\subseteq\Lambda'$, restriction of configurations gives the canonical factorization $\mathcal H_{\Lambda'}\cong\mathcal H_\Lambda\otimes\mathcal H_{\Lambda'\setminus\Lambda}$, with sites ordered lexicographically. The **factor inclusion** is the unital $*$-homomorphism $\iota_{\Lambda,\Lambda'}:\mathcal A_\Lambda\to\mathcal A_{\Lambda'}$ given by $T\mapsto T\otimes I_{\Lambda'\setminus\Lambda}$. A **localization region** for $T$ is any finite $\Lambda$ for which $T\in\mathcal A_\Lambda$ under these inclusions; a localization region need not be minimal.

The ordinary operator norm makes each local matrix algebra a nonzero unital complete C*-algebra, and every positive normalized complex-linear functional is uniquely a trace pairing with a density matrix, by [[lem-qsm-finite-matrix-cstar-and-state-duality]]. This includes the empty region, whose Hilbert space is $\mathbb C$. This definition does not posit an infinite-dimensional tensor-product Hilbert space.
