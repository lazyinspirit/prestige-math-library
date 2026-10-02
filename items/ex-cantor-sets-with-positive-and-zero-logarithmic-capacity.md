---
id: ex-cantor-sets-with-positive-and-zero-logarithmic-capacity
kind: example
title: "Two Cantor sets with different logarithmic capacities"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-countable
  - thm-choice-implies-dependent-implies-countable-choice
  - def-logarithmic-capacity-compact-set
  - def-logarithmic-potential-and-energy
  - def-cantor-set
  - def-cantor-measure
  - thm-cantor-set-properties
  - thm-cantor-set-ternary-description
  - lem-cantor-cylinder-masses
  - prop-cantor-measure-is-a-singular-atomless-probability-measure
  - thm-layer-cake-formula-for-l-p-powers
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-product-measure-on-sigma-finite-spaces
  - thm-cauchy-schwarz-finite
  - thm-nested-interval-property
  - thm-recursion
  - def-measure-zero-and-content-zero
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, examples of sets of positive and zero capacity, printed pp. 170–172"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §3"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, Cantor sets and the capacity of thin sets"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $C\subseteq[0,1]$ be the middle-thirds Cantor
set with Cantor measure $\mu_c$ ([[def-cantor-set]], [[def-cantor-measure]]).
Then

$$I(\mu_c)\le 3\log 3<+\infty,\qquad\text{hence}\qquad \operatorname{cap}(C)\ge e^{-3\log 3}=\tfrac1{27}>0 .$$

Let $\ell_n:=e^{-4^n}$ for $n\ge1$ and let $K\subseteq[0,1]$ be the nested
binary Cantor set constructed as follows: $K_0=[0,1]$ is one closed cell, and
each level-$(n-1)$ cell $[a,a+s]$ is replaced by the two disjoint closed cells
$[a,a+\ell_n]$ and $[a+s-\ell_n,a+s]$, with $K_n$ the union of the resulting
$2^n$ cells and $K:=\bigcap_{n\ge0}K_n$. Then every Borel probability $\nu$ on
$K$ has $I(\nu)=+\infty$, so $V_K=+\infty$ and $\operatorname{cap}(K)=0$.

Both $C$ and $K$ are uncountable compact Lebesgue-null subsets of $[0,1]$.
Thus Lebesgue measure and cardinality alone do not determine logarithmic
capacity.

## Facts & Assumptions

**Given:** the Cantor set $C$ and its Cantor measure $\mu_c$, the number $\ell_n=e^{-4^n}$, the Axiom of Choice, and the capacity and energy conventions of [[def-logarithmic-capacity-compact-set]] and [[def-logarithmic-potential-and-energy]].

[F1] For a finite positive Borel measure $\nu$ of compact support and $R>\operatorname{diam}(\operatorname{supp}\nu)$ one has $I(\nu)=\iint k_R\,d\nu\,d\nu-\nu(\mathbb C)^2\log R$ with $k_R(z,w)=\log(R/|z-w|)$, and $V_K=\inf_{\nu\in P(K)}I(\nu)$ with $\operatorname{cap}(K)=e^{-V_K}$ when $V_K<+\infty$ and $0$ otherwise ([[def-logarithmic-potential-and-energy]], [[def-logarithmic-capacity-compact-set]]).

[F2] The Cantor set $C=\bigcap_nC_n$ is compact, uncountable and $\lambda_1(C)=0$; every $x\in C$ is $\Phi(a)=\sum_{k\ge0}a_k3^{-k-1}$ for a unique sequence $a$ with values in $\{0,2\}$, the first $m$ digits determine the level-$m$ basic interval $I_b=[\sum_{j=1}^m2b_j3^{-j},\sum_{j=1}^m2b_j3^{-j}+3^{-m}]$, and $b\mapsto\Phi((2b_k)_{k\ge0})$ is a bijection from $\{0,1\}^{\mathbb N}$ onto $C$ ([[def-cantor-set]], [[thm-cantor-set-ternary-description]], [[thm-cantor-set-properties]]).

[F3] Assume Countable Choice. The Cantor measure $\mu_c$ is a Borel probability measure with $\mu_c(\mathbb R\setminus C)=0$, it is atomless, and $\mu_c(I_b)=2^{-m}$ for every level-$m$ basic interval $I_b$ ([[def-cantor-measure]], [[prop-cantor-measure-is-a-singular-atomless-probability-measure]], [[lem-cantor-cylinder-masses]]).

[F4] Layer cake for $p=1$: for a measure space $(X,\mathcal A,\rho)$ and a measurable $f\ge0$ one has $\int_Xf\,d\rho=\int_0^\infty\rho(\{f>t\})\,dt$, both sides allowed to be $+\infty$ ([[thm-layer-cake-formula-for-l-p-powers]]).

[F5] The product measure $\mu_c\otimes\mu_c$ is a measure on $\mathbb R^2$ with $(\mu_c\otimes\mu_c)(A\times B)=\mu_c(A)\mu_c(B)$, and Tonelli's theorem computes integrals of nonnegative product-measurable integrands as iterated integrals ([[def-product-measure-on-sigma-finite-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] Finite Cauchy–Schwarz: $(\sum_{k<n}a_k)^2\le n\sum_{k<n}a_k^2$ for reals $a_k$ ([[thm-cauchy-schwarz-finite]]).

[F7] A nested sequence of closed bounded intervals whose lengths tend to $0$ has an intersection that is exactly one point ([[thm-nested-interval-property]]), and the recursive construction of the families $(K_n)$ is licensed by the recursion theorem ([[thm-recursion]]).

[F8] Under Countable Choice, the Axiom of Choice yields Countable Choice ([[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]); a subset of a countable set is countable ([[def-countable]]); and a set is Lebesgue-null when it is contained in the union of countably many intervals of arbitrarily small total length ([[def-measure-zero-and-content-zero]]).

## Verification

**Proof technique:** direct.

1.1 By [F3] and [F8] the Cantor measure $\mu_c$ is a Borel probability with $\mu_c(C)=1$ and no atoms, so $\mu_c\otimes\mu_c(\{(x,x):x\in C\})=\int\mu_c(\{x\})\,d\mu_c(x)=0$; by [F2] the set $C$ is compact and uncountable with $\lambda_1(C)=0$. [F2, F3, F8]

1.2 For every $m\ge0$ and every word $b\in\{0,1\}^m$ the level-$m$ basic interval $I_b$ has $\mu_c(I_b)=2^{-m}$, and by [F2] the intervals $I_b$, $b\in\{0,1\}^m$, are the digit cylinders and are pairwise disjoint. [F2, F3]

2.1 If $x=\Phi(a)$ and $y=\Phi(a')$ have different first $m$ digits, let $k<m$ be the first index with $a_k\ne a'_k$; then $|x-y|\ge2\cdot3^{-k-1}-\sum_{j>k}2\cdot3^{-j-1}=3^{-k-1}\ge3^{-m}$, so $\{|x-y|<3^{-m}\}$ is contained in the set where the first $m$ digits agree, that is, in $\bigcup_bI_b\times I_b$ with the $I_b$ of step 1.2. Hence $(\mu_c\otimes\mu_c)(\{|x-y|<3^{-m}\})\le\sum_{b\in\{0,1\}^m}\mu_c(I_b)^2=2^m\cdot2^{-2m}=2^{-m}$. [step 1.2, F2, F5]

2.2 The construction of the cells is licensed by [F7]. For $n=1$, $2\ell_1=2e^{-4}<1=\ell_0$; for $n\ge2$, $\ell_n=\ell_{n-1}^4$ and $\ell_{n-1}\le e^{-4}$, so $2\ell_n/\ell_{n-1}=2\ell_{n-1}^3\le2e^{-12}<1$. Thus the two children of each level-$(n-1)$ cell are disjoint closed intervals of length $\ell_n$ contained in it, and $(K_n)$ is a nested sequence of nonempty compact sets with $2^n$ cells of length $\ell_n$ at level $n$. Therefore $K=\bigcap_nK_n$ is compact and nonempty, and $\lambda_1(K)=0$ because the level-$n$ cells cover $K$ and their total length $2^n\ell_n=2^ne^{-4^n}\to0$. [step 1.1, F7, F8]

3.1 Since $\mu_c$ has total mass $1$ and support in $[0,1]$, [F1] gives $I(\mu_c)=\iint\log\frac1{|x-y|}\,d\mu_c(x)\,d\mu_c(y)$; applying [F4] on the product measure of [F5] and splitting the integral at $t=m\log3$, $I(\mu_c)=\int_0^\infty(\mu_c\otimes\mu_c)(\{|x-y|<e^{-t}\})\,dt\le\log3+\sum_{m\ge0}(\log3)\,(\mu_c\otimes\mu_c)(\{|x-y|<3^{-m}\})\le\log3+(\log3)\sum_{m\ge0}2^{-m}=3\log3<+\infty$, where step 2.1 bounds each dyadic piece. Therefore $V_C\le I(\mu_c)<+\infty$ and $\operatorname{cap}(C)=e^{-V_C}\ge e^{-3\log3}=\frac1{27}>0$. [step 2.1, F1, F4, F5]

3.2 For a Borel probability $\nu$ on $K$ put $m_{n,k}:=\nu(I_{n,k})$ for the $2^n$ level-$n$ cells $I_{n,k}$ of step 2.2; since $\nu$ is carried by $K\subseteq\bigcup_kI_{n,k}$ and the cells are pairwise disjoint, $\sum_km_{n,k}=1$, so by [F6] with the constant list $1$ one has $1=(\sum_km_{n,k})^2\le2^n\sum_km_{n,k}^2$, that is, $\sum_km_{n,k}^2\ge2^{-n}$. [step 2.2, F6]

4.1 With $\nu$, the cells $I_{n,k}$ and the masses $m_{n,k}$ of step 3.2, [F1] gives $I(\nu)=\iint\log\frac1{|x-y|}\,d\nu(x)\,d\nu(y)$ because $\nu$ is a probability on $[0,1]$; two points of one level-$n$ cell satisfy $|x-y|\le\ell_n$, so for $t<4^n$ the event of lying in the same level-$n$ cell is contained in $\{|x-y|<e^{-t}\}$ and hence $(\nu\otimes\nu)(\{|x-y|<e^{-t}\})\ge\sum_km_{n,k}^2\ge2^{-n}$; by [F4] and [F5], $I(\nu)\ge\sum_{n\ge1}\int_{4^{n-1}}^{4^n}2^{-n}\,dt=\sum_{n\ge1}(4^n-4^{n-1})2^{-n}=\frac34\sum_{n\ge1}2^n=+\infty$. [step 3.2, F1, F4, F5]

5.1 Every $\nu\in P(K)$ has $I(\nu)=+\infty$ by step 4.1, so the infimum $V_K$ is $+\infty$ and $\operatorname{cap}(K)=0$ by [F1]. [step 4.1, F1]

6.1 For each $b\in\{0,1\}^{\mathbb N}$ the cells $I_{n,b\restriction n}$ form a nested family of closed intervals with lengths $\ell_n\to0$, so by [F7] their intersection contains exactly one point $\varphi(b)\in K$; distinct infinite words differ at some level $n$, where their cells are disjoint, so $\varphi$ is injective. If $K$ were countable then its subset $\varphi(\{0,1\}^{\mathbb N})$ would be countable by [F8], and since $\{0,1\}^{\mathbb N}$ is in bijection with $C$ by [F2] and $C$ is uncountable, that is impossible; hence $K$ is uncountable. Thus $C$ has positive capacity and $K$ has zero capacity although both are uncountable compact Lebesgue-null sets. [step 1.1, step 3.1, step 2.2, step 5.1, F2, F7, F8] ∎

## Remarks

**Where the thin geometric decay is used.** In step 4.1 the level-$n$ cells have length $\ell_n=e^{-4^n}$, so the time window $(4^{n-1},4^n)$ in the layer-cake formula sees the whole level-$n$ cell mass; the divergent series $\sum_n3\cdot2^{n-1}$ is what forces $I(\nu)=+\infty$. The zero-capacity conclusion here uses the divergent weighted logarithmic windows, not merely summability of $\sum_n2^n\ell_n$ or decay faster than every exponential. For example, lengths $\ell_n=e^{-n^2}$ also decay faster than every exponential, but the equal-branch probability (the pushforward of $\mu_c$ under the binary coding map) has finite energy: pairs first separated at level $n$ have distance at least $\ell_{n-1}-2\ell_n$, with $\ell_0=1$, and have probability $2^{-n}$, while the diagonal has probability zero because the probability of agreeing through level $m$ is $2^{-m}\to0$. Thus their energy contribution is bounded by $2^{-n}((n-1)^2+C)$ for a fixed constant $C$, a summable series. The middle-thirds scaling likewise gives finite energy by step 3.1.

**Choice.** The statement assumes the Axiom of Choice, but the proof uses only Countable Choice, through the Cantor measure and cylinder-mass suppliers [F3] and the general conversion [F8]; with those suppliers granted, the construction of $K$, the layer-cake computations and the cardinality argument are choice-free.
