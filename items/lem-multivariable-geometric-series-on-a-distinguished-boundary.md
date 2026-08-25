---
id: lem-multivariable-geometric-series-on-a-distinguished-boundary
kind: lemma
title: "The Cauchy kernel expands as an absolutely and uniformly convergent multi-indexed geometric series"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multivariable-power-series, def-balls-and-polydiscs-in-complex-euclidean-space, def-complex-series-power-series-and-absolute-convergence, thm-absolute-convergence-of-complex-series, thm-weierstrass-m-test-for-complex-function-series, def-complex-integer-powers, thm-geometric-series, lem-geometric-sequence-null, thm-nonnegative-series-bounded-partial-sums, def-finite-sum-in-a-commutative-monoid, lem-finite-sum-reindexing-and-fubini, thm-complex-numbers-form-a-field, lem-complex-conjugation-and-modulus-laws, rem-complex-euclidean-space-dictionary, def-uniform-convergence-of-complex-valued-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 2"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
    - title: "M. Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.1"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
pipeline_run: null
---

## Statement

Fix $m\ge1$, a point $a\in\mathbb C^m$, a polyradius $r$ and a real $\theta$ with
$0\le\theta<1$. For $\zeta\in\Gamma_r(a)$ and
$z\in\overline\Delta_{\theta r}(a)$, that is $|\zeta_k-a_k|=r_k$ and
$|z_k-a_k|\le\theta r_k$ for every $k<m$,

$$\prod_{k<m}\frac1{\zeta_k-z_k} =\sum_{\alpha}(z-a)^\alpha\prod_{k<m}(\zeta_k-a_k)^{-\alpha_k-1},$$

the multi-indexed series converging absolutely
([[def-multivariable-power-series]]). Each term is dominated by

$$M_\alpha:=\prod_{k<m}\frac{\theta^{\alpha_k}}{r_k},\qquad \sum_\alpha M_\alpha=\prod_{k<m}\frac1{r_k(1-\theta)},$$

independently of $\zeta$ and $z$, so the convergence is absolute and uniform in
the pair $(\zeta,z)$ over $\Gamma_r(a)\times\overline\Delta_{\theta r}(a)$.

## Facts & Assumptions

**Given:** $m\ge1$, $a\in\mathbb C^m$, a polyradius $r$, a real $\theta$ with $0\le\theta<1$, and points $\zeta\in\Gamma_r(a)$, $z\in\overline\Delta_{\theta r}(a)$; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] A multi-indexed series converges absolutely at $z$ when the series along one, equivalently every, bijection $\sigma:\mathbb N\to\mathbb N^m$ converges absolutely, its sum is then independent of $\sigma$, and its box partial sums over $B_N=\{\alpha:\alpha_k\le N\}$ converge to that sum ([[def-multivariable-power-series]]).

[L2] $\Delta_r(a)$, $\overline\Delta_r(a)$ and $\Gamma_r(a)$ are defined coordinatewise by $|z_k-a_k|<r_k$, $\le r_k$ and $=r_k$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[L3] A complex series converges absolutely when the real series of moduli converges ([[def-complex-series-power-series-and-absolute-convergence]]); an absolutely convergent complex series converges and every rearrangement has the same sum ([[thm-absolute-convergence-of-complex-series]]).

[L4] If $|f_n(x)|\le M_n$ on a set $X$ with $\sum M_n$ convergent, then $\sum f_n(x)$ converges absolutely for every $x$ and its partial sums converge uniformly on $X$ ([[thm-weierstrass-m-test-for-complex-function-series]], [[def-uniform-convergence-of-complex-valued-functions]]).

[L5] Negative integer powers are defined exactly for nonzero complex bases ([[def-complex-integer-powers]]).

[L6] For real $r'$ with $|r'|<1$, $\sum_k r'^k$ converges with sum $1/(1-r')$ ([[thm-geometric-series]]), and $(r'^k)$ is null ([[lem-geometric-sequence-null]]).

[L7] A nonnegative series converges exactly when its partial sums are bounded above ([[thm-nonnegative-series-bounded-partial-sums]]).

[L8] Sums over finite index sets in a commutative monoid are well posed; finite Cartesian-box sums factor by repeated finite Fubini, and distributivity in $\mathbb C$ permits the finite sum/product factorisations used below ([[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]], [[thm-complex-numbers-form-a-field]]).

[L9] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 For $k<m$ put $u_k=(z_k-a_k)/(\zeta_k-a_k)$, legitimate by [L2] and [L5] since $|\zeta_k-a_k|=r_k>0$; then $|u_k|\le\theta<1$ by [L2] and [L9], and $\zeta_k-z_k=(\zeta_k-a_k)(1-u_k)$ with $|1-u_k|\ge1-\theta>0$ by [L9]. [given, L2, L5, L9]

1.2 Each term satisfies $\bigl|(z-a)^\alpha\prod_{k<m}(\zeta_k-a_k)^{-\alpha_k-1}\bigr|=\prod_{k<m}\bigl(|z_k-a_k|^{\alpha_k}r_k^{-\alpha_k-1}\bigr)\le\prod_{k<m}\theta^{\alpha_k}/r_k=M_\alpha$, by [L2], [L8] and [L9]. [given, L2, L8, L9]

2.1 For $N\in\mathbb N$ the box sum of the majorants factors as $\sum_{\alpha\in B_N}M_\alpha=\prod_{k<m}\bigl(r_k^{-1}\sum_{j\le N}\theta^j\bigr)$ by [L8], which is at most $\prod_{k<m}(r_k(1-\theta))^{-1}$ by [L6]. Every finite subset of $\mathbb N^m$ lies in some $B_N$, so along any bijection $\sigma$ the partial sums of $\sum_n M_{\sigma(n)}$ are bounded by that number, and [L7] makes the series convergent; letting $N\to\infty$ in the factored identity and using [L6] gives $\sum_\alpha M_\alpha=\prod_{k<m}(r_k(1-\theta))^{-1}$. [step 1.2, L6, L7, L8]

2.2 The box partial sum factors: by [L8], $\sum_{\alpha\in B_N}(z-a)^\alpha\prod_{k<m}(\zeta_k-a_k)^{-\alpha_k-1}=\prod_{k<m}\Bigl(\frac1{\zeta_k-a_k}\sum_{j\le N}u_k^{\,j}\Bigr)=\prod_{k<m}\frac{1-u_k^{\,N+1}}{(\zeta_k-a_k)(1-u_k)}$, the last equality by the finite geometric identity $(1-u)\sum_{j\le N}u^j=1-u^{N+1}$ and step 1.1. [step 1.1, L5, L8, algebra]

3.1 By step 1.2 and step 2.1 the hypotheses of [L4] hold with the constants $M_\alpha$ on the set $\Gamma_r(a)\times\overline\Delta_{\theta r}(a)$, so the series converges absolutely at every such pair and its partial sums along $\sigma$ converge uniformly there; by [L1] and [L3] the sum is independent of $\sigma$ and the box partial sums converge to it. [step 1.2, step 2.1, L1, L3, L4]

3.2 By step 1.1 the target value is $\prod_{k<m}\bigl((\zeta_k-a_k)(1-u_k)\bigr)^{-1}$, so the difference from the box sum of step 2.2 has modulus at most $\prod_{k<m}\bigl(r_k(1-\theta)\bigr)^{-1}\cdot\bigl|1-\prod_{k<m}(1-u_k^{\,N+1})\bigr|$ by [L9]; since $|u_k^{\,N+1}|\le\theta^{N+1}$, [L9] and [L8] bound the second factor by $(1+\theta^{N+1})^m-1$, which tends to $0$ as $N\to\infty$ by [L6]. [step 1.1, step 2.2, L6, L8, L9]

4.1 Hence the box partial sums converge to $\prod_{k<m}(\zeta_k-z_k)^{-1}$, and by step 3.1 they also converge to the sum of the series; the two limits agree, which is the displayed expansion, with the majorant and the uniformity already recorded in steps 1.2 and 3.1. [step 3.1, step 3.2] ∎
