---
id: fs-inner-regularity-on-open-sets-implies-inner-regularity-on-all-borel-sets
kind: false-statement
title: "Inner regularity on open sets implies inner regularity on all Borel sets"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radon-measure-on-an-lch-space, def-regular-borel-measure-on-an-lch-space]
proof_strategy: direct
sources:
  references:
    - title: "Directorate of Distance Education, Real Analysis Block 2"
      url: "https://web.archive.org/web/20231015075405if_/https://cdoe.nbu.ac.in/doc/slm/SEM2/PG/Mathematics/MSC-Maths-Sem-II-DEMATH2SCORE%201-Real%20Analysis-Block%202.pdf"
    - title: "Donald L. Cohn, Measure Theory, Appendix D, Theorem D.37 (Baire category)"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

On a locally compact Hausdorff space, a Borel measure that is finite on compact sets, outer regular on Borel sets, and inner regular on open sets must be compact-inner-regular on every Borel set.

## Facts & Assumptions

**Given:** Work with Countable Choice. Put $A=\{0\}\times\mathbb R$, $D=\{(1/n,m/n^2):m,n\in\mathbb N_{>0}\}$, and $X=A\cup D$. Declare each point of $D$ isolated and declare the following sets, for $N\ge1$, to be a neighbourhood basis at $(0,y)$:
$$W_N(y)=\{(0,y)\}\cup\{(1/n,m/n^2)\in D:n>N,\ |m/n^2-y|<1/n\}.$$
In particular a basic neighbourhood contains exactly one axis point. Define $\mu(E)=\sum_{(1/n,m/n^2)\in E\cap D}n^{-3}$ for every subset $E$ of $X$, and $M(E)=\inf_{E\subseteq U\text{ open}}\mu(U)$.

[A1] The Baire category theorem for the ordinary complete interval $[1,2]$ says that a countable closed cover has a member with nonempty relative interior.

## Refutation

**Proof technique:** direct counterexample.

1.1 These sets define a Hausdorff topology: wedges with different centres become disjoint after truncation, and isolated points can be removed by truncation. Each $W_N(y)$ is compact, since any neighbourhood of its centre leaves only finitely many of its atoms uncovered. Thus $X$ is locally compact. The axis is closed and discrete; each subset of it is closed in $X$, so every subset of $X$ is Borel. At level $n$ a wedge contains at most $2n+1$ atoms, giving $\mu(W_N(y))\le\sum_{n>N}(2n+1)n^{-3}\to0$. In particular $\mu$ is locally finite. [given]

1.2 For a subset $S\subseteq A$, if an open $U\supseteq S$ has finite $\mu$-mass, deleting finitely many atoms from $U$ makes its mass arbitrarily small without losing $S$. Hence $M(S)$ is either zero or infinity. The family $\mathcal I=\{S\subseteq A:M(S)=0\}$ is closed under subsets and countable unions: cover its $j$th member by an open set of mass less than $\varepsilon 2^{-j-1}$, for $j\ge0$, and take their union. Thus $\nu(S)=0$ on $\mathcal I$ and $\nu(S)=\infty$ otherwise is a countably additive measure on the axis. [given, construct]

1.3 Let $U\supseteq A$ be open and set $B_N=\{y\in[1,2]:W_N(y)\subseteq U\}$. Each $B_N$ is closed in $[1,2]$: its complement is the union, over missing atoms with $n>N$, of the open intervals $|m/n^2-y|<1/n$. The $B_N$ increase and cover $[1,2]$. By Baire some $B_N$ contains a nondegenerate interval $I\subseteq[1,2]$. All atoms with $n>N$ and $m/n^2\in I$ belong to $U$, so $\mu(U)\ge\sum_{n>N}(|I|n^2+O(1))n^{-3}=\infty$. Hence $M(A)=\infty$. [A1, given]

2.1 For every $E\subseteq X$ one has $M(E)=\mu(E\cap D)+\nu(E\cap A)$. Indeed the lower bounds follow by monotonicity; when $\nu(E\cap A)=0$, adjoin an arbitrarily small open cover of $E\cap A$ to the open set $E\cap D$. The infinite cases follow directly from the lower bounds. Consequently $M$ is a Borel measure. For open $U$, $M(U)=\mu(U)$ by the defining infimum. The same infimum makes $M$ outer regular. [step 1.2, given]

3.1 Every compact set has finite $M$-mass by a finite cover of finite-mass basic neighbourhoods. Also $M(\{d\})=\mu(\{d\})$ for $d\in D$, so finite sets of atoms inside an open $U$ have masses with supremum $\mu(U)=M(U)$. This proves compact inner regularity on opens. A compact subset of the closed discrete axis is finite, and each axis singleton has $M$-mass zero by the wedge estimate; therefore every compact subset of $A$ has mass zero. [step 1.1, step 2.1]

4.1 We have $M(A)=\infty>0=\sup_{K\subseteq A\text{ compact}}M(K)$, although $M$ satisfies all the claimed premises. This refutes the implication, preserving the page's distinction between Radon and all-Borel regularity. [step 3.1, step 1.3] ∎
