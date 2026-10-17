---
id: lem-qsm-spin-state-compactness
kind: lemma
title: Sequential compactness of the quasi-local spin state space
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [lem-qsm-consistent-local-states, def-qsm-local-spin-algebras, def-qsm-quasilocal-spin-algebra, lem-qsm-quasilocal-completion, lem-qsm-matrix-state-calculus, def-countable-choice, def-countable, lem-countable-iff-surjection-from-n, lem-finite-powers-of-countable-sets-are-countable, thm-countable-union-of-countable, thm-rationals-countable, thm-nested-interval-property, thm-recursion, lem-qsm-integer-lattice-countable, def-qsm-infinite-algebraic-state]
dependency_roles:
  lem-qsm-consistent-local-states: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
  def-countable: mathematical-premise
  lem-countable-iff-surjection-from-n: mathematical-premise
  lem-finite-powers-of-countable-sets-are-countable: mathematical-premise
  thm-countable-union-of-countable: mathematical-premise
  thm-rationals-countable: mathematical-premise
  thm-nested-interval-property: mathematical-premise
  thm-recursion: mathematical-premise
  lem-qsm-integer-lattice-countable: mathematical-premise
  def-qsm-infinite-algebraic-state: mathematical-premise
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§2.4 and 3.2.3, pp. 34–36 and 55–57
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §4 and Chapter 3 §1, pp. 6–8 and 25–26
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the countable union of finite regions and the finite-dimensional state/density interface explicitly stated in Facts [F3]. Let $\Gamma=\mathbb Z^d$, $d\ge1$, and $q\ge1$ be as in [[def-qsm-local-spin-algebras]]. For every sequence of algebraic states $\omega_n$ on the quasi-local spin algebra $\mathcal A$, there is a subsequence $\omega_{n_k}$ and an algebraic state $\omega$ such that $\omega_{n_k}(A)\to\omega(A)$ for every $A\in\mathcal A$. Thus the state space is sequentially compact in the pointwise topology, meaning convergence on every fixed observable. The conclusion concerns functional values; it does not assert convergence of global density matrices or a global trace-class representation.

## Facts & Assumptions

**Given:** Countable Choice, the finite local algebras and norm completion of [[def-qsm-local-spin-algebras]] and [[def-qsm-quasilocal-spin-algebra]], and a sequence of algebraic states $\omega_n$ on $\mathcal A$.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] $\Gamma=\mathbb Z^d$ is at most countable; its finite powers are at most countable; countable unions of at most countable sets are at most countable under [A1] ([[def-qsm-local-spin-algebras]], [[lem-qsm-integer-lattice-countable]], [[lem-finite-powers-of-countable-sets-are-countable]], [[thm-countable-union-of-countable]]).

[F2] Every nonempty at most countable set is a surjective image of $\mathbb N$; finite powers of $\mathbb Q$ are at most countable, and $\mathbb Q$ is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-finite-powers-of-countable-sets-are-countable]], [[thm-rationals-countable]]).

[F3] The draft [[lem-qsm-matrix-state-calculus]] currently proves spectral calculus and trace identities for an already supplied density matrix. The uses below additionally require that every positive normalized functional on a finite local matrix algebra has a unique positive trace-one density matrix and that this functional has norm one. Those converse and norm-one clauses are not in the inspected draft statement, so they remain explicit conditional inputs with that exact finite-dimensional scope.

[F4] Countable Choice is the exact hypothesis of the countable-union result used in [F1]; the other countability and enumeration results in [F1]–[F2] are choice-free ([[thm-countable-union-of-countable]], [[lem-countable-iff-surjection-from-n]]).

[F5] Nested closed real intervals with lengths tending to zero have a unique common point ([[thm-nested-interval-property]]); recursion on $\mathbb N$ defines a sequence from a deterministic rule ([[thm-recursion]]).

[F6] A state is a normalized positive functional, its finite restrictions are consistent, and a consistent family of local densities extends uniquely to a state on the norm completion ([[def-qsm-infinite-algebraic-state]], [[lem-qsm-consistent-local-states]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice [A1], facts [F1]–[F6], and the sequence $\omega_n$.

1.1 For each $m\in\mathbb N$, let $R_m$ be the set of ranges of all $m$-tuples in $\Gamma^m$, including tuples with repeated entries. Since $\Gamma^m$ is at most countable by [F1], a surjection $\mathbb N\to\Gamma^m$ composed with the range map shows $R_m$ is at most countable by [F2]. Every finite region is the range of a tuple of its cardinality, with the empty region the range of the unique $0$-tuple. Thus all finite regions form the countable union $\bigcup_m R_m$, which is at most countable by [F1] and [A1]. For each region $\Lambda$, rational real and imaginary matrix entries give a countable subset of $\mathcal A_\Lambda$: it is a finite Cartesian power of $\mathbb Q$, so [F1]–[F2] apply. These matrices are norm dense: for a $D_\Lambda\times D_\Lambda$ error matrix $E$ whose entries have modulus at most $\delta$, Cauchy–Schwarz gives $\|Ev\|_2^2\le\sum_{i,j}|E_{ij}|^2\|v\|_2^2\le D_\Lambda^2\delta^2\|v\|_2^2$, so $\|E\|_{\mathrm{op}}\le D_\Lambda\delta$. A second countable union, using [A1], therefore gives a countable norm-dense set $D$ in $\mathcal A_{\mathrm{loc}}$, hence in its completion $\mathcal A$. [A1, F1, F2, construct]

1.2 By [F2], choose a surjection $s:\mathbb N\to D$ and enumerate its values as $D_1,D_2,\ldots$. For each fixed $j\ge1$, the scalar sequence $z_n^{(j)}:=\omega_n(D_j)$ is bounded: $D_j$ is local, and the conditional finite-dimensional state/density interface [F3] gives $|\omega_n(D_j)|\le\|D_j\|$. The same estimate extends each $\omega_n$ from the dense local algebra to all of $\mathcal A$, so $\|\omega_n\|=1$ by normalization. [given, F2, F3]

1.3 We specify a deterministic convergent-subsequence rule for any bounded complex sequence $z_n$. Choose $M>0$ with $z_n\in[-M,M]^2$ under $\mathbb C\cong\mathbb R^2$. Subdivide the current closed square into its four closed equal subsquares in fixed lexicographic order; at least one contains infinitely many terms, and the rule takes the first such square. At the first stage choose the least index whose term lies in that square; at every later stage choose the least index exceeding the previous one whose term lies in the selected square. Writing the nested squares as $I_j\times J_j$, their closed coordinate intervals are nested and have lengths tending to zero. [F5] gives unique $x\in\bigcap_j I_j$ and $y\in\bigcap_j J_j$, so $(x,y)$ is the unique common point of the squares. The subsequence terms after stage $j$ lie in the $j$th square, whose diameter tends to zero, hence converge to $(x,y)$. Every choice in this rule is determined by a finite ordering or a least natural index; it uses no additional choice axiom. [given, F5, construct]

2.1 Apply the deterministic rule of step 1.3 recursively to the coordinate sequences $z_n^{(j)}$ along nested subsequences for $j\ge1$. More precisely, start with $i_0(n)=n$; at stage $j$, write the resulting subsequence as $i_j(n)=i_{j-1}(s_j(n))$ with $s_j$ strictly increasing, so $s_j(j)\ge j$. By [F5] and recursion, these maps are defined for every positive $j$. Put $r_j=i_j(j)$ for $j\ge1$. For $j\ge2$, $r_j=i_{j-1}(s_j(j))\ge i_{j-1}(j)>i_{j-1}(j-1)=r_{j-1}$, so $(r_j)_{j\ge1}$ is increasing. For fixed $m\ge1$ and $j\ge m$, nestedness gives $r_j=i_m(t_{m,j})$ where $t_{m,j}\ge j$; hence these are tails of the convergent coordinate subsequence selected at stage $m$, and $\omega_{r_j}(D_m)$ converges. [step 1.3, F4, F5, construct]

3.1 For any $A\in\mathcal A_{\mathrm{loc}}$ and $\varepsilon>0$, choose $D_m$ with $\|A-D_m\|<\varepsilon/4$ by density. Since each $\omega_{r_j}$ has norm one,
$$|\omega_{r_j}(A)-\omega_{r_k}(A)|\le2\|A-D_m\|+|\omega_{r_j}(D_m)-\omega_{r_k}(D_m)|.$$
The last term tends to zero as $j,k\to\infty$ by step 2.1. Thus $\omega_{r_j}(A)$ is Cauchy and converges for every local $A$. Define $\omega_0(A):=\lim_j\omega_{r_j}(A)$ on $\mathcal A_{\mathrm{loc}}$. For local $A,B$ and $\lambda\in\mathbb C$, the equalities $\omega_{r_j}(A+\lambda B)=\omega_{r_j}(A)+\lambda\omega_{r_j}(B)$ pass to the limit, and $\omega_0(I)=1$. For every local $X$, $\omega_0(X^*X)=\lim_j\omega_{r_j}(X^*X)\ge0$. Finally $|\omega_0(A)|=\lim_j|\omega_{r_j}(A)|\le\|A\|$. Thus $\omega_0$ is a bounded normalized positive functional on $\mathcal A_{\mathrm{loc}}$. [step 2.1, F3, algebra]

4.1 On each finite region $\Lambda$, write $\rho_\Lambda^{(j)}$ for the density of $\omega_{r_j}|_{\mathcal A_\Lambda}$. For each matrix unit $E_{ab}$, its entries are rational, so $E_{ba}\in D$; the trace-pairing formula gives $(\rho_\Lambda^{(j)})_{ab}=\omega_{r_j}(E_{ba})$. Thus every matrix coefficient converges by step 2.1. The entrywise limit $\rho_\Lambda$ is Hermitian and trace one because these are finite linear equalities; for every vector $v$, $\langle\rho_\Lambda v,v\rangle=\lim_j\langle\rho_\Lambda^{(j)}v,v\rangle\ge0$, so it is positive. Every partial-trace consistency equation is a finite linear equation in these entries and therefore passes to the limit. Hence $\{\rho_\Lambda\}$ is a consistent family. [F3, step 2.1, step 3.1]

5.1 By [F6], the consistent family of step 4.1 extends to a unique state $\omega$ on $\mathcal A$, and $\omega|_{\mathcal A_{\mathrm{loc}}}=\omega_0$. For any $A\in\mathcal A$ and $\varepsilon>0$, choose local $B$ with $\|A-B\|<\varepsilon/4$. Then
$$|\omega_{r_j}(A)-\omega(A)|\le2\|A-B\|+|\omega_{r_j}(B)-\omega(B)|,$$
whose right side is eventually less than $\varepsilon$ by step 3.1. Therefore $\omega_{r_j}(A)\to\omega(A)$ for every $A\in\mathcal A$, proving sequential compactness in the pointwise topology. [F1, F6, step 3.1, step 4.1] ∎

