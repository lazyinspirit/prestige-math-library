---
id: lem-smooth-integral-functionals-approximate-on-compact-function-sets
kind: lemma
title: "Smooth integral functionals approximate bounded functionals on compact sets"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains
  - def-countable-choice
  - lem-finite-ambient-partitions-for-euclidean-boundary-integration
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Kovachki et al., Neural Operator, Lemmas 28–31"
      url: "https://arxiv.org/pdf/2108.08481"
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$ be a bounded Lipschitz domain, and let $X=L^p(D)$, $X=W^{m,p}(D)$, or $X=C^m(\bar D)$, where $1\le p<\infty$ and $m\ge0$ wherever applicable. For every bounded linear functional $L:X\to\mathbb R$, every compact $K\subset X$, and every $\varepsilon>0$, there is $\kappa\in C_c^\infty(D)$ such that
$$\sup_{a\in K}\left|L(a)-\int_D\kappa(y)a(y)\,dy\right|<\varepsilon.$$

The input function in this integral is its zeroth derivative. The conclusion is compact-uniform, without an assertion of operator-norm density of these functionals.

## Statement references

[Kovachki et al., Appendix C, Lemmas 28–31; the present compact-set proof uses inward smoothing](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** $D,X,L,K,\varepsilon$ as in the Statement.

[F1] The inward smoothing construction supplies $S_ta(x)=\int_Dk_t(x,y)a(y)\,dy$, where $k_t$ is ambient smooth, has fixed compact support in $x$, and $S_ta\to a$ uniformly on each compact subset of $X$. Its explicit kernel is $k_t(x,y)=\sum_j\psi_j(x)\rho_t(x+tv_j-y)$ ([[lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains]]).

[F2] All listed $X$ embed continuously into $L^1(D)$; this follows directly from Hölder's inequality on the bounded domain, or the sup norm in the continuous case. Countable Choice is used by the local smoothing supplier ([[def-countable-choice]]).

[F3] The finite normalized-bump construction gives an ambient smooth cutoff equal to one near any compact subset of an open set, taking values between zero and one and compactly supported in that open set ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]).

## Proof

1.1 Empty $K$ or $L=0$ is handled by $\kappa=0$. Otherwise [F1] permits choosing $t>0$ with $\sup_K\|S_ta-a\|_X<\varepsilon/(2\|L\|)$. For fixed $t$, the map $y\mapsto k_t(\cdot,y)|_D$ is ambient $C^\infty$ with values in $X$: every mixed $x$ and $y$ derivative is uniformly continuous on compact products, so the ordinary finite-dimensional Taylor remainders in $y$, uniformly for $x$ derivatives through order $m$, tend to zero in the $C^m$ norm and hence in the $X$ norm. Thus $\kappa_t(y)=L(k_t(\cdot,y)|_D)$ is ambient smooth, with $D_y^\alpha\kappa_t=L(D_y^\alpha k_t(\cdot,y)|_D)$. It is bounded on $\bar D$. [given, F1, F2, choose, construct]

1.2 Compactness of $K$ in $X$ implies its compactness in $L^1(D)$ by [F2]. Given $\theta>0$, take a finite $\theta/2$ net $a_1,\ldots,a_s$ in that $L^1$ image. By integrability and an exhaustion of $D$ by compact subsets, there is one compact $F\subset D$ with $\int_{D\setminus F}|a_i|<\theta/2$ for all $i$. Therefore $\sup_{a\in K}\int_{D\setminus F}|a|<\theta$. Choose a smooth cutoff $0\le\zeta\le1$, compactly supported in $D$, equal to one on $F$; use [F3] for the one-set open cover $\{D\}$ of $F$. Then $\sup_K\int_D(1-\zeta)|a|<\theta$. This uses a finite net and finitely many integrable tails, including at $p=1$; it requires no $L^\infty$ approximation of a dual coefficient. [F2, F3, choose, construct, algebra]

2.1 For each $a\in X$, one has $L(S_ta)=\int_D\kappa_t(y)a(y)\,dy$. To justify the identity without assuming a vector-integration theorem, partition a box containing $D$ into cells of diameter tending to zero and replace $k_t(\cdot,y)$ on each cell by $k_t(\cdot,y_l)$. Uniform continuity of every $x$ derivative through order $m$ makes the error in $X$ at most $c_X\eta\|a\|_1$, where $\eta\to0$ is the uniform kernel derivative error and $c_X$ converts a $C^m$ bound to an $X$ bound. Applying bounded $L$ to the finite sums is legitimate by linearity. Their scalar integral errors are at most $\|L\|c_X\eta\|a\|_1$ as well, so passing to the limit proves the identity. Consequently $\sup_K|L(a)-\int_D\kappa_ta|<\varepsilon/2$. [step 1.1, F1, F2, construct, algebra]

3.1 If $\|\kappa_t\|_{L^\infty(D)}=0$, choose $\kappa=0$. Otherwise use step 1.2 with $\theta=\varepsilon/(2\|\kappa_t\|_\infty)$ and set $\kappa=\zeta\kappa_t\in C_c^\infty(D)$. The cutoff error satisfies $\sup_K|\int_D(\kappa_t-\kappa)a|\le\|\kappa_t\|_\infty\sup_K\int_D(1-\zeta)|a|<\varepsilon/2$. Combining with step 2.1 proves the claim. [step 2.1, step 1.2, construct, algebra] ∎
