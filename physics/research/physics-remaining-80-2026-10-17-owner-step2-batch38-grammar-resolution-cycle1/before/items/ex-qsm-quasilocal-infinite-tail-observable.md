---
id: ex-qsm-quasilocal-infinite-tail-observable
kind: example
title: A norm-convergent observable with no finite localization region
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [def-int-order, thm-int-ordered-ring, def-integers, def-int-operations, def-natural-numbers, lem-nat-order-is-membership, def-qsm-local-spin-algebras, lem-qsm-local-spin-inclusions-isometric, def-qsm-quasilocal-spin-algebra, lem-qsm-quasilocal-completion]
dependency_roles:
  def-int-order: mathematical-premise
  thm-int-ordered-ring: mathematical-premise
  def-integers: mathematical-premise
  def-int-operations: mathematical-premise
  def-natural-numbers: mathematical-premise
  lem-nat-order-is-membership: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-local-spin-inclusions-isometric: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
dependency_level: 6
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §1.2 and §3.2.2–3.2.3, pp. 5–6 and 55–57
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 3 §1, pp. 25–26
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
---

## Statement

Take $d=1$ and $q=2$. For $n\ge1$, let $Z_n$ be the one-site Pauli matrix $Z=\operatorname{diag}(1,-1)$ embedded at site $n\in\mathbb Z$. The sequence

$$H_N:=\sum_{n=1}^N2^{-n}Z_n$$

converges in norm in the quasi-local algebra to an element $H$. This element is self-adjoint but has no finite localization region. Thus norm completion adds observables that are not strictly local.

## Facts & Assumptions

**Given:** $d=1$, $q=2$, the local algebras and factor inclusions, and the norm completion $\mathcal A$.

[F1] A localization region for $d=1$ is a finite subset $\Lambda\subseteq\mathbb Z$ ([[def-qsm-local-spin-algebras]]). Integer addition and $1$ are defined by [[def-int-operations]], the integer order is defined by [[def-int-order]], and it is a total order compatible with addition by [[thm-int-ordered-ring]].

[F2] The integer $1=[(1,0)]$ is positive: by [[def-int-order]] this is equivalent to $0<1$ in $\mathbb N$, which holds because $1=\sigma(0)=\{0\}$ ([[def-int-operations]], [[def-integers]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]).

[F3] Each one-site Pauli matrix $Z$ is self-adjoint and has operator norm one; the factor inclusions are isometric ([[def-qsm-local-spin-algebras]], [[lem-qsm-local-spin-inclusions-isometric]]).

[F4] $\mathcal A_{\mathrm{loc}}$ is dense in its norm completion $\mathcal A$, multiplication and adjoint extend continuously, and disjoint local factors commute ([[def-qsm-quasilocal-spin-algebra]], [[lem-qsm-quasilocal-completion]]).

## Proof

**Proof technique:** direct.

**Given:** The sequence $(H_N)$ and facts [F1]–[F3].

1.1 Fix any finite region $\Lambda\subseteq\mathbb Z$. Enumerate the finite set $F:=\Lambda\cap\{n\in\mathbb Z:0<n\}$ as $n_1,\ldots,n_r$, and put $S:=\sum_{j=1}^{r}n_j$, taking $S=0$ when $r=0$. By induction on the number of terms, every finite sum of positive integers is nonnegative: the empty sum is $0$, and if a partial sum $R\ge0$ then adding a positive integer $n$ gives $R+n>R\ge0$, since $0<n$ translates to $R+0\le R+n$ by [F1], and equality would cancel $R$ in the additive group $\mathbb Z$ to give $0=n$. If $k\in F$, write $S=k+R$, where $R$ is the sum of the remaining positive terms; the same induction gives $R\ge0$, and order-compatibility yields $S\ge k$. Set $m:=S+1$. Since $1>0$ by [F2] and $S\ge0$, order-compatibility gives $m>S\ge0$, so $m>0$. If $m\in\Lambda$, then $m\in F$ and the preceding bound gives $S\ge m$, contradicting $m>S$. Thus every finite region omits a positive integer site. [given, F1, F2, construct, algebra]

2.1 If $M>N$, the triangle inequality and isometric inclusions give $\|H_M-H_N\|\le\sum_{n=N+1}^{M}2^{-n}<2^{-N}$. Thus $(H_N)$ is Cauchy in $\mathcal A_{\mathrm{loc}}$ and converges to some $H\in\mathcal A$ by completion. Since each $H_N$ is self-adjoint and the adjoint extends continuously, $H^*=H$. [given, F3, F4, algebra]

3.1 Fix $k\ge1$ and let $X_k$ be the Pauli $X$ at site $k$. For $N\ge k$, every $Z_n$ with $n\ne k$ commutes with $X_k$ by disjoint locality, while direct multiplication gives $[Z,X]=ZX-XZ=2iY$, where $Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$ and $Y^*Y=I$. Hence $[H_N,X_k]=2^{-k}(2iY)_k$ for all $N\ge k$. By continuity of multiplication and norm convergence, $[H,X_k]=2^{1-k}iY_k$, whose norm is $2^{1-k}>0$. [F3, F4, step 2.1, algebra]

4.1 If $H$ had a finite localization region $\Lambda$, step 1.1 supplies $k\ge1$ outside $\Lambda$. Then [F4] would give $[H,X_k]=0$, contradicting step 3.1. Therefore $H$ has no finite localization region. [F1, F4, step 1.1, step 3.1] ∎
