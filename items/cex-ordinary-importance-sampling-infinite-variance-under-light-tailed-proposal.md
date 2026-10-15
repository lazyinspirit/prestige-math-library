---
id: cex-ordinary-importance-sampling-infinite-variance-under-light-tailed-proposal
kind: counterexample
title: A light-tailed proposal can give ordinary importance sampling infinite variance
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - thm-integration-against-a-density
  - alg-importance-sampling
  - thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment
  - def-moments-variance-and-covariance
  - thm-change-of-variables-for-expectation
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-ordinary-importance-sampling-is-unbiased
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
generation:
  role: counterexample
---

## Statement refuted

Full proposal support and finite target variance of $f$ are sufficient for ordinary importance sampling to have finite estimator variance.

## Facts & Assumptions

**Given:** The claim in “Statement refuted.”

[F1] [[alg-importance-sampling]]: Ordinary importance sampling averages $Y_i=f(X_i)\tilde p(X_i)/(Z_pq(X_i))$ over IID proposal draws.

[F2] [[thm-change-of-variables-for-expectation]]: For a nonnegative measurable function of a random element with law $Q$, expectation equals its integral against $Q$.

[F3] [[thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment]]: Its finite-variance formula assumes $\mathbb E_Q[Y_1^2]<\infty$ and makes no finite-variance claim when that moment is infinite.

[F4] [[def-moments-variance-and-covariance]]: For square-integrable real $Y$, $\operatorname{Var}(Y)=\mathbb E[(Y-\mathbb EY)^2]$; finite variance therefore requires a finite centered second moment.

[F5] [[thm-ordinary-importance-sampling-is-unbiased]]: Under its support and integrability hypotheses, the ordinary importance sampling estimate has expectation $\int f\,d\pi$.

[F6] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: If nonnegative measurable $u\le v$, then $\int u\,d\mu\le\int v\,d\mu$, including infinite integrals.

[F7] [[thm-integration-against-a-density]]: for a nonnegative measurable density $r$ and nonnegative measurable $h$, $\int h\,d(r\,d\mu)=\int hr\,d\mu$, including infinite values.

## Counterexample

1.1 On $\mathbb R$ with Lebesgue measure, take target density $p(x)=\tilde p(x)=\tfrac12e^{-|x|}$, proposal density $q(x)=e^{-2|x|}$, and $f(x)=1$. Direct integration gives $\int p=\tfrac12(\int_{-\infty}^0e^x\,dx+\int_0^\infty e^{-x}\,dx)=1$ and $\int q=2\int_0^\infty e^{-2x}\,dx=1$. Also $q(x)>0$ for every $x$, while $f=1$ has target mean $1$ and variance $0$. [given, algebra]

2.1 Use [F7] with density $r=q$ for integration against $Q$. For every $x$, the importance weight is $W(x)=p(x)/q(x)=\tfrac12e^{|x|}$. By [F2], $\mathbb E_QW=\int_{\mathbb R}p(x)\,dx=1$ and $\mathbb E_Q[W^2]=\int_{\mathbb R}\frac14e^{2|x|}e^{-2|x|}\,dx=\int_{\mathbb R}\frac14\,dx=\infty$. The proposal has full target support, but the finite-second-moment hypothesis in [F3] fails. [F1, F2, F3, step 1.1, algebra, F7]

3.1 By [F5], the ordinary estimate $\bar W_n=n^{-1}\sum_iW_i$ has mean $1$. For each finite $n$, nonnegativity gives $\bar W_n\ge W_1/n$, hence $W_1^2/n^2\le\bar W_n^2$. Monotonicity [F6] and step 2.1 imply $\mathbb E_Q[\bar W_n^2]\ge n^{-2}\mathbb E_Q[W_1^2]=\infty$. If its centered second moment were finite, the inequality $x^2\le2(x-1)^2+2$ would imply $\mathbb E_Q[\bar W_n^2]<\infty$, a contradiction. Thus the centered second moment is infinite, so the estimate does not have finite variance under [F4]. This refutes the sufficiency claim. [F1, F4, F5, F6, step 2.1, algebra] ∎
