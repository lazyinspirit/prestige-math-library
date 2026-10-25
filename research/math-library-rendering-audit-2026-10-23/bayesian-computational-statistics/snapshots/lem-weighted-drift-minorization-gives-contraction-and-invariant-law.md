---
dependency_level: 1
id: lem-weighted-drift-minorization-gives-contraction-and-invariant-law
kind: lemma
title: Global drift and one-step minorization give weighted contraction and a unique invariant law
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-measure-kernel-and-probability-kernel
  - def-v-weighted-total-variation-distance
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - thm-jordan-decomposition-for-signed-measures
  - prop-jordan-parts-and-total-variation-formulas-for-signed-measures
  - thm-finite-total-variation-signed-measures-are-complete
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-measurability-of-integration-against-a-kernel
  - lem-finite-products-of-probability-kernels
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
proof_strategy: direct
axiom_use: "AC obtains Hahn/Jordan decompositions of arbitrary signed measures in steps 1.1 and 5.1 through the local Jordan theorem. Finite products and canonical norm limits require no further choice or path-space construction."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Martin Hairer and Jonathan C. Mattingly, Yet another look at Harris' ergodic theorem for Markov chains"
      url: "https://arxiv.org/pdf/0810.2777"
      locator: "Assumptions 1-2, Theorems 1.3 and 3.1-3.2; pp. 2-6, including the complete weighted contraction and invariant existence proofs."
---

## Statement

Assume AC. Let $K$ be a Borel probability kernel on $\mathbb R^d$, $d\ge1$, and let $V:\mathbb R^d\to[1,\infty)$ be finite and Borel. Suppose
$$KV\le aV+b,\qquad 0<a<1,\quad 0\le b<\infty.$$
Suppose that for some $R>\max\{2,2b/(1-a)\}$ the set $D=\{V\le R\}$ is nonempty and there are a probability $\nu$ and $\epsilon_0>0$ such that
$$K(x,A)\ge\epsilon_0\nu(A)\qquad(x\in D,\ A\text{ Borel}).$$
Then $K$ has a unique invariant probability $\pi$, uniqueness being among all Borel probabilities, and $\pi V\le b/(1-a)<\infty$. There are $C<\infty$ and $0<r<1$ such that for all finite-$V$-moment probabilities $\mu,\lambda$ and $n\ge0$,
$$\|\mu K^n-\lambda K^n\|_V\le Cr^n\|\mu-\lambda\|_V.$$
In particular,
$$\|K^n(x,\cdot)-\pi\|_V\le Cr^n\bigl(V(x)+\pi V\bigr).$$
The norm is that of [[def-v-weighted-total-variation-distance]]. Explicitly, put
$$\epsilon=\min\{\epsilon_0,1/2\},\quad\beta=\frac{\epsilon}{2(b+1)},\quad a'=a+\frac{2b}{R},\quad C=\frac{1+\beta}{\beta},$$
$$r=\max\left\{\frac{2+\beta a'R}{2+\beta R},\ 1-\frac{2(\epsilon-\beta b)}{2+\beta R}\right\}.$$
The same contraction holds for finite signed $\eta$ with $\eta(\mathbb R^d)=0$ and $\int V\,d|\eta|<\infty$, with $\mu-\lambda$ replaced by $\eta$.

## Facts & Assumptions

**Given:** The kernel, finite weight, global drift and one-step sublevel minorization in the Statement.

[A1] AC, [[def-axiom-of-choice]], is assumed for the general signed-measure Jordan existence clause below.

[F1] [[thm-jordan-decomposition-for-signed-measures]] gives a Hahn partition and mutually singular positive parts under AC; [[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]] identifies $|\eta|=\eta^++\eta^-$.

[F2] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]] constructs measures by nonnegative measurable densities; [[thm-monotone-convergence-for-the-integral]] extends integration identities from simple functions.

[F3] [[thm-finite-total-variation-signed-measures-are-complete]] gives completeness of finite signed measures in the norm $|\eta|(\mathbb R^d)$.

[F4] [[def-measure-kernel-and-probability-kernel]] and [[thm-measurability-of-integration-against-a-kernel]] give measurable kernel integrals.

[F5] [[lem-finite-products-of-probability-kernels]] gives finite probability products; [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] gives their marginal integration identities.

[F6] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]] defines $\mu K$ and invariance. [[thm-dominated-convergence]] applies to bounded measurable kernel evaluations under any probability.

[F7] [[def-v-weighted-total-variation-distance]] uses the supremum over all Borel $|f|\le V$, without the event-distance factor of one half.

## Proof

**Given:** The hypotheses and facts [A1], [F1]–[F7].

1.1 Put $w=1+\beta V$ and, for finite signed $\eta$ with $\int w\,d|\eta|<\infty$, define $\|\eta\|_w=\sup_{|f|\le w}|\eta f|$. Obtain a Hahn partition $P,N$ by [F1]. The upper bound $|\eta f|\le\int w\,d|\eta|$ and the test $f=w(1_P-1_N)$ give $\|\eta\|_w=\int w\,d|\eta|$. Multiplication $T\eta=w\eta$ is an isometry onto the ordinary finite-total-variation signed measures: define it by multiplying the Jordan parts, and note that the same partition is Hahn, so $|T\eta|=w|\eta|$. Conversely, for any finite signed $\zeta$, multiplication by $w^{-1}$ gives $|w^{-1}\zeta|=w^{-1}|\zeta|$ and is inverse to $T$. The density integration identities follow first for indicators and simple functions, then by monotone convergence. Thus [F3] makes the finite-$w$-moment signed-measure space complete. Also $\beta V\le w\le(1+\beta)V$. [A1, F1, F2, F3, F7, construct, algebra]

2.1 Define $\eta K=\eta^+K-\eta^-K$. Each positive part acts by integration of the kernel evaluations. Countable additivity follows by monotone convergence. The inequality $|\eta K|\le|\eta|K$ follows by bounding the variation sum on every countable measurable partition by the corresponding positive measure $|\eta|K$. The drift gives $Kw\le1+\beta aV+\beta b\le(1+\beta b)w$, so $\eta K$ has finite $w$ moment whenever $\eta$ does. Kernel integration is Borel and finite for $|f|\le cw$, and $(\eta K)f=\eta(Kf)$, by the indicator identity and monotone convergence applied separately to positive and negative parts. Total mass is preserved. [F1, F2, F4, F6, step 1.1, given, algebra]

3.1 The constants satisfy $0<a'<1$ and $0<\beta b<\epsilon$ if $b>0$, while $\beta b=0<\epsilon$ if $b=0$. Both displayed component rates are in $(0,1)$. Fix Borel $|f|\le w$, and write $S=V(x)+V(y)$. If $S\ge R$, then $|Kf(x)-Kf(y)|\le Kw(x)+Kw(y)\le2+\beta(aS+2b)\le2+\beta a'S$. Since $s\mapsto(2+\beta a's)/(2+\beta s)$ is decreasing for $s\ge R$, this gives $|Kf(x)-Kf(y)|\le r(2+\beta S)$. [given, step 2.1, algebra]

4.1 If $S<R$, both states are in $D$. The residual probabilities $H_x=(K(x,\cdot)-\epsilon\nu)/(1-\epsilon)$ are well defined there. Fixing one point of the nonempty $D$, the minorization and finite $KV$ give $\epsilon\nu V\le KV(x_D)<\infty$. Consequently $\nu f$ is finite, and the common term $\epsilon\nu f$ cancels from $Kf(x)-Kf(y)$. Thus $|Kf(x)-Kf(y)|\le(1-\epsilon)(H_xw+H_yw)\le2(1-\epsilon)+\beta(aS+2b)\le(2+\beta S)-2(\epsilon-\beta b)\le r(2+\beta S)$. The residual evaluations are Borel on $D$, so these are legitimate kernel integrations; no selected optimal coupling is involved. [F2, F4, step 2.1, step 3.1, given, construct, algebra]

5.1 Let $\eta$ have zero mass and finite $w$ norm. If $\eta\ne0$, its Jordan masses agree at some $m>0$; put $p=\eta^+/m$ and $q=\eta^-/m$. They concentrate on disjoint Hahn sets. Integration of steps 3.1 and 4.1 against $p\otimes q$ gives, for every $|f|\le w$, $|(\eta K)f|=m|\int(Kf(x)-Kf(y))p(dx)q(dy)|\le mr\int(w(x)+w(y))p(dx)q(dy)=r\|\eta\|_w$. Every integral is finite by the finite moments and step 2.1. For $\eta=0$ the inequality is immediate. Taking the supremum and iterating, using preservation of mass and moments, proves $\|\eta K^n\|_w\le r^n\|\eta\|_w$. Norm comparison in step 1.1 yields $\|\eta K^n\|_V\le Cr^n\|\eta\|_V$, including differences of the stated probabilities. [A1, F1, F5, F7, step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 Fix $x_0\in\mathbb R^d$ and set $\mu_n=\delta_{x_0}K^n$. The difference $\mu_1-\mu_0$ has finite $w$ norm, and step 5.1 gives $\|\mu_{n+1}-\mu_n\|_w\le r^n\|\mu_1-\mu_0\|_w$. The geometric tail sum makes $(\mu_n)$ Cauchy, so step 1.1 gives a signed-measure limit $\pi$ with finite $w$ norm. Norm convergence implies $\pi(A)=\lim_n\mu_n(A)\ge0$ for every Borel $A$ and $\pi(\mathbb R^d)=1$. Thus $\pi$ is a probability and $\pi V<\infty$. Step 5.1 gives $\|\mu_nK-\pi K\|_w\le r\|\mu_n-\pi\|_w\to0$; since $\mu_nK=\mu_{n+1}\to\pi$, it follows that $\pi K=\pi$. Finally drift iteration gives $\mu_nV\le a^nV(x_0)+b(1-a^n)/(1-a)$. Because $\beta V\le w$, norm convergence gives $\mu_nV\to\pi V$, whence $\pi V\le b/(1-a)$. [F6, step 1.1, step 2.1, step 5.1, construct, algebra]

7.1 Apply step 5.1 to $\delta_x-\pi$. Its $V$ norm is at most $V(x)+\pi V$, giving the pointwise asserted bound. If $\lambda$ is any invariant probability, without a moment assumption, then for each Borel $A$ the pointwise convergence $K^n(x,A)\to\pi(A)$ and $0\le K^n(x,A)\le1$ give $\lambda(A)=\int K^n(x,A)\lambda(dx)\to\pi(A)$ by dominated convergence. Thus $\lambda=\pi$. Together with steps 5.1 and 6.1 this proves all assertions. [F4, F6, F7, step 5.1, step 6.1, algebra] ∎

## Remarks

This is a weighted signed-measure contraction and an invariant-law construction. Minorization is needed only on one sufficiently large sublevel. For a family of kernels its constants depend on the drift and minorization constants; no uniformity over an additional discretization parameter is asserted.
