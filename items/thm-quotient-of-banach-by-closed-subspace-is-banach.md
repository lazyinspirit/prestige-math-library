---
id: thm-quotient-of-banach-by-closed-subspace-is-banach
kind: theorem
title: "A quotient of a Banach space by a closed subspace is Banach"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-banach-space, def-countable-choice, def-quotient-seminorm,
       thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed,
       thm-banach-series-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $X$ be a Banach space and let $M \le X$ be a closed linear subspace. Then
$X/M$ is Banach for the quotient norm.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a Banach space $X$, a closed linear subspace $M \le X$, and a Cauchy sequence $(\xi_n)$ in $X/M$.

[L0] Countable Choice is assumed ([[def-countable-choice]]).

[L1] A Banach space is complete for its norm metric ([[def-banach-space]]).

[L2] The quotient norm is $\|x+M\|_{X/M} = \inf_{m \in M}\|x+m\|$ ([[def-quotient-seminorm]]).

[L3] Because $M$ is closed, the quotient seminorm is a norm on $X/M$ ([[thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed]]).

[L4] In a Banach space, every absolutely convergent series converges ([[thm-banach-series-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Since $(\xi_n)$ is Cauchy in $X/M$, choose a strictly increasing sequence $(n_k)$ such that $\|\xi_{n_{k+1}}-\xi_{n_k}\|_{X/M} < 2^{-k}$ for every $k \ge 0$. [given, choose]

2.1 For each $k$, choose $u_k \in X$ representing $\xi_{n_{k+1}}-\xi_{n_k}$ and satisfying $\|u_k\| < 2^{-k}+2^{-2k}$. This is possible by [L0], [L2], and step 1.1. [L0, step 1.1, L2, choose]

3.1 The series $\sum_k u_k$ is absolutely convergent because $\sum_k(2^{-k}+2^{-2k})$ converges. Since $X$ is Banach, [L4] gives a vector $u \in X$ with $\sum_k u_k = u$. [step 2.1, L1, L4]

4.1 Let $s_j := \sum_{k=0}^{j-1}u_k$. Because each $u_k$ represents $\xi_{n_{k+1}}-\xi_{n_k}$, the coset $q(s_j)$ equals $\xi_{n_j}-\xi_{n_0}$. Therefore $\xi_{n_j} = \xi_{n_0}+q(s_j)$. Since $s_j \to u$ in $X$, the tails satisfy $\|u-s_j\| \to 0$, and [L2] gives $\|q(u)-q(s_j)\|_{X/M} \le \|u-s_j\|$. Hence $\xi_{n_j} \to \eta := \xi_{n_0}+q(u)$ in $X/M$. [step 3.1, L2]

5.1 The whole sequence $(\xi_n)$ converges to $\eta$. Given $\varepsilon > 0$, choose $J$ so that $\|\xi_n-\xi_m\|_{X/M}<\varepsilon/2$ for all $m,n \ge J$, and also choose $k$ with $n_k \ge J$ and $\|\xi_{n_k}-\eta\|_{X/M}<\varepsilon/2$ from step 4.1. Then for every $n \ge J$,

$$\|\xi_n-\eta\|_{X/M} \le \|\xi_n-\xi_{n_k}\|_{X/M} + \|\xi_{n_k}-\eta\|_{X/M} < \varepsilon.$$

So $(\xi_n)$ converges in $X/M$. [step 4.1, given, choose]

6.1 Every Cauchy sequence in $X/M$ converges, so $X/M$ is Banach by [L1]. [step 5.1, L1, L3] ∎
