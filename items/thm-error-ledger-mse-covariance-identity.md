---
id: thm-error-ledger-mse-covariance-identity
kind: theorem
title: "MSE of a sum of error components includes covariance terms"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-moments-variance-and-covariance
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-factorization-of-expectations-for-independent-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Anthony Davison and David Hinkley, Bootstrap Methods and Their Application, Chapter 2 §2.5.1–§2.5.2"
      url: "https://api.pageplace.de/preview/DT0400.9781107266384_A23760363/preview-9781107266384_A23760363.pdf"
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §§17.1 and 17.4 and end notes"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Statement

Let $E_1,\ldots,E_m$ be square-integrable real random variables on one probability space, where $m\ge1$. Write $b_j=\mathbb E E_j$. Then
$$\mathbb E\left[\left(\sum_{j=1}^{m}E_j\right)^2\right]=\left(\sum_{j=1}^{m}b_j\right)^2+\sum_{j=1}^{m}\operatorname{Var}(E_j)+2\sum_{1\le j<k\le m}\operatorname{Cov}(E_j,E_k).$$
The correction to the sum of component variances is exactly $(\sum_j b_j)^2+2\sum_{j<k}\operatorname{Cov}(E_j,E_k)$. Thus the mean square equals the sum of component variances exactly when this combined correction is zero. In particular, if the total bias is zero, pairwise independence suffices.

## Facts & Assumptions

**Given:** A probability space and a finite family of square-integrable real random variables $E_1,\ldots,E_m$, with $m\ge1$. Prove the formula and its pairwise-independent special case.

[F1] For a square-integrable random variable $X$, $\operatorname{Var}(X)=\mathbb E[(X-\mathbb E X)^2]$; for square-integrable $X,Y$, $\operatorname{Cov}(X,Y)=\mathbb E[(X-\mathbb E X)(Y-\mathbb E Y)]$. ([[def-moments-variance-and-covariance]])

[F2] The Lebesgue integral is linear on $L^1$: finite sums of integrable functions are integrable and their integrals add. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F3] For independent real random variables and integrable coordinate functions, the expectation of their product factors into the product of expectations. ([[thm-factorization-of-expectations-for-independent-variables]])

## Proof

1.1 Since $|E_j|\le 1+E_j^2$ and $\mathbb E E_j^2<\infty$, each $E_j$ is integrable. For $S=\sum_{j=1}^{m}E_j$, [F2] gives $\mathbb E S=\sum_{j=1}^{m}b_j$. [given, F2, algebra]

2.1 Put $C_j=E_j-b_j$. By step 1.1, $S-\mathbb E S=\sum_{j=1}^{m}C_j$. [step 1.1, algebra]

3.1 Expanding the finite square gives $(S-\mathbb E S)^2=\sum_j C_j^2+2\sum_{j<k}C_jC_k$. Each cross product is integrable because $2|C_jC_k|\le C_j^2+C_k^2$. [step 2.1, algebra]

4.1 Taking expectations in step 3.1, using [F2] and [F1], yields $\operatorname{Var}(S)=\sum_j\operatorname{Var}(E_j)+2\sum_{j<k}\operatorname{Cov}(E_j,E_k)$. [step 3.1, F1, F2]

5.1 Since $\mathbb E(S-\mathbb E S)=0$, expansion of $S^2=((S-\mathbb E S)+\mathbb E S)^2$ gives $\mathbb E S^2=\operatorname{Var}(S)+(\mathbb E S)^2$; substitute step 4.1 and step 1.1 to obtain the stated formula. Subtracting $\sum_j\operatorname{Var}(E_j)$ shows that equality with the variance sum holds exactly when $(\sum_j b_j)^2+2\sum_{j<k}\operatorname{Cov}(E_j,E_k)=0$. [step 1.1, step 4.1, F1, algebra]

6.1 In the pairwise-independent case, apply [F3] to the coordinate functions $x\mapsto x-b_j$ and $y\mapsto y-b_k$; their means are zero, so every covariance in step 5.1 is zero. If all components are also centered, the squared-total-bias term is zero as well. [given, F3, step 5.1, algebra] ∎
