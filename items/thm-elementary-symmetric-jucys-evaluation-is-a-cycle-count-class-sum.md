---
id: thm-elementary-symmetric-jucys-evaluation-is-a-cycle-count-class-sum
kind: theorem
title: "Elementary symmetric Jucys-Murphy evaluations are cycle-count class sums"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cor-jucys-murphy-elements-commute-pairwise, def-jucys-murphy-elements-of-the-symmetric-group-algebra, def-elementary-symmetric-polynomials, def-permutation-support-disjoint-cycles-and-cycle-type, def-symmetric-group, thm-disjoint-cycle-decomposition]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
sources:
  scraped: []
  references:
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), Theorem 5.10, printed pp. 51-52, and section 3, printed pp. 18-25"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

For $n\ge1$ and $0\le s\le n$,
$$e_s(X_2,X_3,\dots,X_n)=\sum_{\substack{\rho\vdash n\\ \ell(\rho)=n-s}}C^{(n)}_\rho,$$
where the right-hand side is the sum of all permutations of $S_n$ with exactly
$n-s$ cycles (fixed points counted), grouped into conjugacy classes; it is zero
for $s>n-1$. In particular $e_0=1$, $e_1$ is the sum of all transpositions,
and $e_{n-1}$ is the sum of all $n$-cycles.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and the Jucys-Murphy elements $X_k=\sum_{j<k}(j\ k)\in\mathbb Z[S_n]$ ([[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]).

[F1] For $m\le n$ the element $X_k$ of $\mathbb Z[S_m]$ maps to $X_k$ under the inclusion $\mathbb Z[S_m]\hookrightarrow\mathbb Z[S_n]$; in particular $X_n=\sum_{j<n}(j\ n)$ ([[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]).

[F2] For $0\le k\le m$ the $k$-th elementary symmetric polynomial is $e_k(x_1,\dots,x_m)=\sum_{1\le i_1<\dots<i_k\le m}x_{i_1}\cdots x_{i_k}$, with $e_0=1$ and $e_k=0$ for $k>m$ ([[def-elementary-symmetric-polynomials]]).

[F3] The cycle type of a permutation of a finite $n$-element set is the family $c_1,\dots,c_n$ in which $c_k$ is the number of $k$-element orbits, fixed points being recorded as $1$-cycles; thus the cycle lengths form a partition $\rho\vdash n$ and the number of parts $\ell(\rho)$ is the total number of cycles, fixed points included. Cycles are written $(a_0\ a_1\ \dots\ a_{k-1})$ and a $k$-cycle fixes every point outside its support ([[def-permutation-support-disjoint-cycles-and-cycle-type]], [[def-symmetric-group]]).

[F4] Every permutation of a finite set is a product of pairwise disjoint cycles, uniquely up to reordering the factors and cyclically rotating the entries inside each factor; the identity is the empty product ([[thm-disjoint-cycle-decomposition]]).

[F5] The Jucys-Murphy elements commute pairwise, so polynomial substitution and the commutative recursion apply. ([[cor-jucys-murphy-elements-commute-pairwise]])

## Proof

**Proof technique:** induction on $n$.

1.1 Base case. For $n=1$ the list $X_2,\dots,X_n$ is empty, so $e_0=1$ by [F2], and the right-hand side for $s=0$ is the single class sum $C^{(1)}_{(1)}$ of the identity of $S_1$, whose cycle type $(1)$ has $\ell=1=n-0$; for $s\ge1$ the left-hand side is $e_s$ of no variables, hence $0$ by [F2], and no partition $\rho\vdash1$ has $\ell(\rho)=1-s\le0$. Thus the identity holds for $n=1$ and all $s$. [given, base, F2, F3]

1.2 Induction hypothesis. Let $n\ge2$ and assume that for all $0\le s\le n-1$ one has $e_s(X_2,\dots,X_{n-1})=\sum_{\rho\vdash n-1,\ \ell(\rho)=n-1-s}C^{(n-1)}_\rho$ in $\mathbb Z[S_{n-1}]$, the sum being $0$ when no such partition exists. [given, ih]

1.3 Recursion for elementary symmetric polynomials. For $m\ge1$ and $0\le s\le m$, splitting the $s$-element subsets of $\{1,\dots,m\}$ into those not containing $m$ and those containing $m$ gives $e_s(x_1,\dots,x_m)=e_s(x_1,\dots,x_{m-1})+x_me_{s-1}(x_1,\dots,x_{m-1})$ in any commutative ring, with the convention $e_{-1}=0$; the identity is trivial for $s=0$ as well. [F2, algebra]

2.1 First summand. For $0\le s\le n-1$, take $m=n-1$ and $x_i=X_{i+1}$ in step 1.3, using [F5] and use [F1] to identify $X_k$ in $\mathbb Z[S_{n-1}]$ with $X_k$ in $\mathbb Z[S_n]$: $e_s(X_2,\dots,X_{n-1})=\sum_{\rho\vdash n-1,\ \ell(\rho)=n-1-s}C^{(n-1)}_\rho$ by step 1.2. Each class sum $C^{(n-1)}_\rho$ is the sum of the permutations $\sigma\in S_{n-1}$ of cycle type $\rho$; regarded in $S_n$ such a $\sigma$ fixes $n$ and has one further cycle, namely $(n)$, so its cycle type in $S_n$ has $\ell(\rho)+1=n-s$ cycles; conversely every $\tau\in S_n$ with $\tau(n)=n$ and $n-s$ cycles restricts to a permutation of $S_{n-1}$ with cycle type $\rho$ and $\ell(\rho)=n-1-s$. Hence this summand equals the sum of all $\tau\in S_n$ with $\tau(n)=n$ and exactly $n-s$ cycles. [step 1.2, step 1.3, F1, F3, F5, algebra]

2.2 Second summand. For $s=0$ this summand is zero by $e_{-1}=0$. For $1\le s\le n-1$, with the same substitution, $X_ne_{s-1}(X_2,\dots,X_{n-1})=\bigl(\sum_{j<n}(j\ n)\bigr)e_{s-1}(X_2,\dots,X_{n-1})=\sum_{j<n}\sum_{\sigma}(j\ n)\sigma$, where $\sigma$ runs over the permutations of $S_{n-1}$ with exactly $n-s$ cycles and the second identity uses step 1.2 for $s-1$ and [F1]. For such a $\sigma$ and $j$, use [F4] to write $\sigma$ as a product of pairwise disjoint cycles and insert the fixed point $j$ as a $1$-cycle if necessary; if $(j\ c_1\ \dots\ c_b)$ is the cycle of $j$, then evaluating on the letters $j,c_1,\dots,c_b,n$ shows $(j\ n)\sigma$ replaces that factor by the single cycle $(n\ j\ c_1\ \dots\ c_b)$ and keep all other factors, so $(j\ n)\sigma$ moves $n$ and has the same number $n-s$ of cycles as $\sigma$. The map $(\sigma,j)\mapsto\tau:=(j\ n)\sigma$ is a bijection from these pairs onto the permutations $\tau\in S_n$ with $\tau(n)\ne n$ and $n-s$ cycles, with inverse $\tau\mapsto\bigl((\tau(n)\ n)\tau,\ \tau(n)\bigr)$: indeed $j:=\tau(n)$ lies in $\{1,\dots,n-1\}$, the product $(j\ n)\tau$ fixes $n$ and hence lies in $S_{n-1}$, and the two constructions invert one another because $(j\ n)^2=1$. Hence this summand is the sum of all $\tau\in S_n$ with $\tau(n)\ne n$ and exactly $n-s$ cycles, each occurring once. [step 1.2, F1, F3, F4, algebra]

3.1 Adding the two summands via step 1.3, every $\tau\in S_n$ with exactly $n-s$ cycles is counted exactly once, according to whether $\tau(n)=n$ or $\tau(n)\ne n$; grouping by cycle type and using [F3] gives $e_s(X_2,\dots,X_n)=\sum_{\rho\vdash n,\ \ell(\rho)=n-s}C^{(n)}_\rho$. For $s=0$ this reads $1=C^{(n)}_{(1^n)}$; for $s=1$ it sums the permutations with $n-1$ cycles, exactly the transpositions when $n\ge2$; when $n=1$ both the transposition sum and $e_1$ vanish; for $s=n-1$ it sums the permutations with a single cycle, the $n$-cycles. For $s>n-1$ the left-hand side is $e_s$ in the $n-1$ variables $X_2,\dots,X_n$, hence $0$ by [F2], and the right-hand side is an empty sum. [step 1.3, step 2.1, step 2.2, F2, F3, discharge-induction: step 1.1] ∎

## Remarks

- **The identity is integral.** Both sides lie in $\mathbb Z[S_n]$, and the proof uses only the compatibility of the $X_k$ with the subgroup chain and the elementary symmetric recursion; no representation theory, no characteristic-zero hypothesis, and no choice are used.

- **A check of the normalization.** For $n=1$ the sum for $s=0$ is the class of the identity, and for $n=2$ and $s=1$ it is the sum of the single transposition $C^{(2)}_{(2)}=X_2$; both match the asserted evaluations.
