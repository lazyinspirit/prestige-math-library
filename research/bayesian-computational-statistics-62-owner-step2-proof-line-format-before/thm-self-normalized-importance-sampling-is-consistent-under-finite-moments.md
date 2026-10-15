---
id: thm-self-normalized-importance-sampling-is-consistent-under-finite-moments
kind: theorem
title: Self-normalized importance sampling is strongly consistent under finite first moments
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - thm-integration-against-a-density
  - def-integrable-real-and-complex-functions-and-their-integrals
  - alg-self-normalized-importance-sampling
  - thm-change-of-variables-for-expectation
  - thm-iid-monte-carlo-mean-consistency
  - lem-measurable-functions-preserve-independence
  - def-identically-distributed-and-iid-random-variables
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - cor-integral-over-a-null-set-vanishes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Quan Zhou, STAT 689 Unit 1: Introduction, Rejection and Importance Sampling, §1.3, Theorem 1.3"
      url: "https://zhouquan34.github.io/Sampling/STAT689_Unit1_QuanZhou.pdf"
    - title: "Thomas B. Schön and Fredrik Lindsten, Learning of dynamical systems: Particle filters and Markov chain methods, Chapter 4 §4.3.3"
      url: "https://www.ida.liu.se/divisions/stima/fokurser/smc2025/material/SMC2017.pdf"
    - title: "Tuan Anh Le, Importance Sampling, §Consistency of The Estimator"
      url: "https://www.tuananhle.co.uk/notes/is.html"
    - title: "Monte Carlo Methods course notes, Chapter 6 §6.2"
      url: "https://archive.math.arizona.edu/tgk/mc/book_chap6.pdf"
---

## Statement

Let $(\mathsf X,\mathcal X,\mu)$ be a measure space, $\tilde p\ge0$ a measurable target density with $Z_p=\int\tilde p\,d\mu\in(0,\infty)$, $\pi(dx)=\tilde p(x)\mu(dx)/Z_p$, and $q\ge0$ a measurable proposal probability density with $Q(dx)=q(x)\mu(dx)$. Assume $q>0$ $\pi$-almost everywhere. Let $X_1,X_2,\ldots$ be IID with law $Q$, put $W_i=\tilde p(X_i)/q(X_i)$ for $q(X_i)>0$ and $W_i=0$ otherwise, and let $f:\mathsf X\to\mathbb R$ be measurable. Suppose
$$\mathbb E_QW_1=Z_p\in(0,\infty),\qquad \mathbb E_Q[W_1|f(X_1)|]<\infty.$$
Then the self-normalized estimate in [[alg-self-normalized-importance-sampling]] satisfies
$$\hat\theta_{\mathrm{SN},n}\longrightarrow\theta:=\int f\,d\pi\quad\text{almost surely}.$$
On a finite prefix where all observed weights vanish, the algorithm's no-estimate status is interpreted as the value $0$ for this convergence statement; almost surely that fallback is eventually unnecessary.

## Facts & Assumptions

**Given:** The target, proposal, support, integrability, and IID sampling assumptions in the Statement.

[F1] [[alg-self-normalized-importance-sampling]]: The estimate is $\sum_iW_if(X_i)/\sum_iW_i$ when the denominator is positive, with a no-estimate status when all weights vanish.

[F2] [[thm-change-of-variables-for-expectation]]: For a random element with law $Q$, an integrable measurable function $g$ has expectation $\mathbb E_Qg=\int g\,dQ$; it also gives the same identity for nonnegative measurable $g$.

[F3] [[lem-measurable-functions-preserve-independence]]: Applying measurable coordinatewise maps to an independent family preserves independence.

[F4] [[def-identically-distributed-and-iid-random-variables]]: IID means mutual independence and a common law; no moment condition is included in the definition.

[F5] [[thm-iid-monte-carlo-mean-consistency]]: For real IID $Y_i$ with finite first absolute moment, their sample mean converges almost surely to $\mathbb EY_1$.

[F6] [[thm-composition-with-borel-functions-preserves-measurability]] and [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: The reciprocal on $q>0$, extended by $0$ on $q\le0$, its absolute value, and the resulting products with $\tilde p$ and $f$ are measurable.

[F7] [[cor-integral-over-a-null-set-vanishes]]: A nonnegative measurable function has integral zero over a measurable null set.

[F8] [[thm-integration-against-a-density]]: for a nonnegative measurable density $r$ and nonnegative measurable $h$, $\int h\,d(r\,d\mu)=\int hr\,d\mu$, including infinite values. [[def-integrable-real-and-complex-functions-and-their-integrals]]: an absolutely integrable real function has integral equal to the finite difference of the integrals of its positive and negative parts.

## Proof

**Given:** Use $W_i$ and $\hat\theta_{\mathrm{SN},n}$ from the Statement and [[alg-self-normalized-importance-sampling]].

1.1 Use [F8] with density $r=q$ for integration against $Q$ and with $r=\tilde p/Z_p$ for integration against $\pi$. By [F6], the functions $w(x)=\tilde p(x)/q(x)$ on $q>0$ (with value $0$ on $q=0$) and $v(x)=w(x)f(x)$ are measurable. The support condition gives $\pi(\{q=0\})=0$. For each $i$, $X_i$ has law $Q$, so the given finite first moment applies to its weight and integrand. By [F2],
$$\mathbb E_Q[W_i|f(X_i)|]=\int_{\{q>0\}}\frac{\tilde p(x)|f(x)|}{q(x)}q(x)\,d\mu(x)=\int_{\{q>0\}}\tilde p|f|\,d\mu.$$
The given finite moment therefore implies $\int_{\{q>0\}}\tilde p|f|\,d\mu<\infty$. Since $\pi(\{q=0\})=0$, [F7] gives $\int_{\{q=0\}}|f|\,d\pi=0$, and thus $\int_{\{q=0\}}\tilde p|f|\,d\mu=Z_p\int_{\{q=0\}}|f|\,d\pi=0$. Hence $\int_{\mathsf X}\tilde p|f|\,d\mu<\infty$ and $\theta=\int f\,d\pi$ is well-defined. For any real measurable $h$ whose absolute integral is finite against $r\,d\mu$, apply [F8] separately to $h^+=\max(h,0)$ and $h^-=\max(-h,0)$: both product integrals are finite because $h^\pm\le|h|$. Subtracting their finite identities yields $\int h\,d(r\,d\mu)=\int hr\,d\mu$, since $(hr)^\pm=h^\pm r$ for $r\ge0$ (with the density convention $0\cdot\infty=0$). The integrable case of [F2] now gives
$$\mathbb E_QV_i=\int_{\{q>0\}}\frac{\tilde p(x)f(x)}{q(x)}q(x)\,d\mu(x)=\int_{\{q>0\}}\tilde p f\,d\mu=\int_{\mathsf X}\tilde p f\,d\mu=Z_p\theta,$$
where the omitted signed integral is zero because its absolute integral over $\{q=0\}$ is zero. Likewise, the nonnegative case of [F2] gives $\mathbb E_QW_i=\int_{\{q>0\}}\tilde p\,d\mu=Z_p$, since $\int_{\{q=0\}}\tilde p\,d\mu=Z_p\pi(\{q=0\})=0$. All these expectations agree across $i$ by the common law of the $X_i$. [given, F2, F6, F7, algebra, F8]

1.2 Applying [F3] separately to the measurable maps $w$ and $v$ shows that each family $(W_i)$ and $(V_i)$ is independent. Each family has a common law because every $X_i$ has law $Q$ and the same map is applied to each draw. Thus both sequences are IID as in [F4], and [F5] gives $n^{-1}\sum_iW_i\to Z_p$ and $n^{-1}\sum_iV_i\to Z_p\theta$ almost surely. [given, F3, F4, F5]

2.1 On the probability-one event from step 1.2, the denominator average is eventually greater than $Z_p/2>0$, so the ratio is eventually defined and $\hat\theta_{\mathrm{SN},n}=\frac{n^{-1}\sum_iV_i}{n^{-1}\sum_iW_i}\longrightarrow\frac{Z_p\theta}{Z_p}=\theta$. The numerical zero interpretation for any preceding finite prefix with zero denominator is the convention stated in this theorem; the algorithm itself returns the no-estimate status in [F1]. [F1, step 1.2, given, algebra] ∎
