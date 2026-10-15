---
id: ex-coordinate-update-normalizer-can-diverge-despite-admissibility
kind: example
title: "An admissible mean-field density can have no normalized coordinate update"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-coordinate-ascent-variational-inference
  - def-variational-family-and-elbo
  - thm-monotonicity-of-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-integral-logarithm
  - cor-integral-logarithm-agrees-with-natural-logarithm
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

There are a finite-evidence target $\gamma$ and an admissible product density $q$ for which the expected-log coordinate function is identically zero on a countably infinite counting space. Its exponential therefore has infinite normalizer, so the coordinate update is unavailable.

## Facts & Assumptions

**Given:** The finite product space and densities constructed in the Verification.

[F1] [[def-variational-family-and-elbo]]: an admissible $q$ is a probability density supported by $\pi=\gamma/Z$ with $\int q(|\log\gamma|+|\log q|)<\infty$.

[F2] [[alg-coordinate-ascent-variational-inference]]: the coordinate factor is proportional to $e^{h(n)}$, and a usable update requires $0<\sum_n e^{h(n)}<\infty$.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative sums and product integrals may be evaluated by iterated integration.

[F4] [[def-integral-logarithm]] and [[cor-integral-logarithm-agrees-with-natural-logarithm]]: for $x>0$, $\log x=\int_1^x dt/t$.

[F5] [[thm-monotonicity-of-the-integral]]: pointwise bounds on integrable functions over $[a,b]$ pass to corresponding bounds on their integrals.


## Verification

**Given:** Let $\mathbb N=\{1,2,\ldots\}$, let $\mu_X$ be counting measure, and let $\mu_Y(\{m\})=w_m$ be the atomic measure defined below.

1.1 Put $r_n=2^{-n}$, $b_n=-2\log(n+1)$, $a_n=-(1-r_n)b_n/r_n=2(2^n-1)\log(n+1)>0$, and $w_m=e^{-2a_m}$. Define $\gamma(n,m)=e^{a_n}$ when $m=n$ and $\gamma(n,m)=e^{b_n}=(n+1)^{-2}$ otherwise. By [F3],
$Z=\sum_m e^{-2a_m}\left(e^{a_m}+\sum_{n\ne m}(n+1)^{-2}\right)$. For every $m$, $a_m\ge2\log(m+1)>0$, so $e^{-a_m}\le(m+1)^{-2}$. Also $\sum_n(n+1)^{-2}<\infty$ because $(n+1)^{-2}\le[n(n+1)]^{-1}=1/n-1/(n+1)$. Hence $0<Z\le\sum_m e^{-a_m}+\left(\sum_m e^{-2a_m}\right)\left(\sum_n(n+1)^{-2}\right)<\infty$. [F3, F4, algebra]

2.1 Give the $X$-factor masses $q_X(n)=r_n$ and the $Y$-factor density $q_Y(m)=r_m/w_m$ relative to $\mu_Y$. Each factor has total mass $\sum_n r_n=1$, so $q(n,m)=r_nr_m/w_m$ is a product probability density by [F3]. It is positive wherever $\gamma$ is positive, so it satisfies the support condition in [F1]. [F1, F3, step 1.1]

3.1 For fixed $n$, the expectation of $\log\gamma(n,Y)$ under $q_Y$ is $r_na_n+(1-r_n)b_n=0$. Its absolute expectation is $r_na_n+(1-r_n)|b_n|=2(1-r_n)|b_n|\le4\log(n+1)$. Therefore $\int q|\log\gamma|d\mu\le4\sum_n2^{-n}\log(n+1)<\infty$. For $n\ge1$, [F4] and [F5] give $\log(n+1)=\int_1^{n+1}dt/t\le n$, since $0<1/t\le1$ on $[1,n+1]$. Also, for $n\ge4$ one has $n\le2^{n/2}$ by induction, so $n2^{-n}\le2^{-n/2}$ and the tail is bounded by a convergent geometric series. [F3, F4, F5, step 2.1, algebra]

4.1 Since $\log q(n,m)=-n\log2-m\log2+2a_m$, the triangle inequality gives $\int q|\log q|d\mu\le2\log2\sum_n n2^{-n}+2\sum_m2^{-m}a_m$. The first series is finite by the same geometric bound as in step 3.1, and $2^{-m}a_m=2(1-2^{-m})\log(m+1)\le2\log(m+1)$ makes the second finite by that bound. Thus [F1] holds and $q$ is admissible. [F1, step 3.1, algebra]

5.1 For the $X$-coordinate update with $q_Y$ fixed, step 3.1 gives $h(n)=E_{q_Y}\log\gamma(n,Y)=0$ for every $n$. Therefore the update normalizer in [F2] is $\sum_{n=1}^\infty e^{h(n)}=\sum_{n=1}^\infty1=\infty$. The expected log is finite and the current product is admissible, but no normalized coordinate factor exists. [F2, step 3.1, algebra] ∎
