---
id: lem-uniform-right-censoring-risk-set-convergence
kind: lemma
title: Uniform convergence of the empirical right-censoring risk set
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-nelson-aalen-kaplan-meier-greenwood-estimators
  - def-identically-distributed-and-iid-random-variables
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "R. M. Dudley, Uniform Central Limit Theorems, Theorem 1.3, PDF pp. 1–2"
      url: "https://assets.cambridge.org/97805217/38415/excerpt/9780521738415_excerpt.pdf"

---

## Statement

Let $U_1,U_2,\ldots$ be IID real-valued observed times. For every positive integer $n$, define $\bar Y_n(u)=n^{-1}\sum_{i=1}^n\mathbf 1\{U_i\ge u\}$ and $s_0(u)=P(U_i\ge u)$. For every finite $t\ge0$,
$$\sup_{0\le u\le t}|\bar Y_n(u)-s_0(u)|\to_P0,\qquad E\left[\sup_{0\le u\le t}|\bar Y_n(u)-s_0(u)|^2\right]\to0.$$

## Facts & Assumptions

**Given:** The observed times $U_i$ are IID real random variables; $Y_i(u)=\mathbf 1\{U_i\ge u\}$.

[F1] The at-risk process is $Y_i(u)=\mathbf 1\{U_i\ge u\}$. ([[def-nelson-aalen-kaplan-meier-greenwood-estimators]])

[F2] IID means a common law and mutual independence across the whole subject family. ([[def-identically-distributed-and-iid-random-variables]])

## Proof

1.1 Put $V_i=-U_i$, let $F(x)=P(V_i\le x)$, and let $F_n(x)=n^{-1}\sum_{i=1}^n\mathbf 1\{V_i\le x\}$. Then $\bar Y_n(u)=F_n(-u)$ and $s_0(u)=F(-u)$. Both CDFs are right-continuous, so their supremum error over $\mathbb R$ is the supremum over rational $x$; over $[-t,0]$ it is the supremum over $(\mathbb Q\cap[-t,0))\cup\{0\}$ (with $\{0\}$ alone when $t=0$). Thus both suprema are measurable. Fix $0<\varepsilon<1$. Choose the finitely many distinct quantiles $x_k=\inf\{x:F(x)\ge k\varepsilon\}$ for $1\le k<1/\varepsilon$, together with $x_0=-\infty$ and $x_{m+1}=+\infty$, where $m$ is the number of distinct finite cutpoints. Between consecutive distinct quantiles $x_j<x_{j+1}$, the quantile construction gives $F(x_{j+1}-)-F(x_j)\le\varepsilon$; any jump at a cutpoint is isolated as its singleton point. At each finite cutpoint, both $F_n(x_j)$ and $F_n(x_j-)$ converge in probability to their expectations by Chebyshev's inequality applied to the IID indicators $\mathbf 1\{V_i\le x_j\}$ and $\mathbf 1\{V_i<x_j\}$. For $x\in(x_j,x_{j+1})$, monotonicity gives $F_n(x_j)\le F_n(x)\le F_n(x_{j+1}-)$ and $F(x_j)\le F(x)\le F(x_{j+1}-)$; hence $|F_n(x)-F(x)|$ is at most the largest one-sided endpoint error plus $\varepsilon$. At singleton cutpoints, direct endpoint convergence applies. Taking the maximum over the finite partition, then $n\to\infty$ and $\varepsilon\downarrow0$, proves the first convergence. [F1, F2, algebra]

2.1 Let $Z_n=\sup_{0\le u\le t}|\bar Y_n(u)-s_0(u)|$. Since $Z_n\le1$, for every $\eta>0$, $E[Z_n^2]\le\eta^2+P(Z_n>\eta)$. Step 1.1 makes the second term tend to zero; then letting $\eta\downarrow0$ proves the expected-square convergence. [step 1.1, algebra] ∎
