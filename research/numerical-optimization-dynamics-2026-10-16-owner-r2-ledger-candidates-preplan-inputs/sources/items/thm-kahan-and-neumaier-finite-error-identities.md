---
id: thm-kahan-and-neumaier-finite-error-identities
kind: theorem
title: "Kahan and Neumaier summation satisfy explicit finite data-dependent error bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-kahan-compensated-summation
  - alg-neumaier-compensated-summation
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Higham, The Accuracy of Floating Point Summation"
      url: https://nhigham.com/wp-content/uploads/2023/10/high93s.pdf
    - title: "Ogita, Rump, and Oishi, Accurate Sum and Dot Product"
      url: https://www.tuhh.de/ti3/paper/rump/OgRuOi05.pdf
---

## Statement

For successfully processed real inputs $x_1,\ldots,x_n$, let $\epsilon_i^y,\epsilon_i^s,\epsilon_i^d,\epsilon_i^c$ be the signed errors in the four Kahan operations. Then
$$s_n-\sum_{i=1}^n x_i=\sum_{i=1}^n\epsilon_i^y+\epsilon_n^s-\sum_{i=1}^{n-1}(\epsilon_i^d+\epsilon_i^c),$$
hence
$$|s_n-\sum_i x_i|\le u\sum_i|x_i-c_{i-1}|+u|s_{n-1}+y_n|+u\sum_{i<n}(|s_i-s_{i-1}|+|d_i-y_i|).$$
For Neumaier, let $\epsilon_i^t,\epsilon_i^q,\epsilon_i^a,\epsilon_i^c$ be the signed errors at the actually executed operations and $\epsilon^f$ the final rounding error. Then
$$\widehat s-\sum_i x_i=\sum_i(\epsilon_i^t+\epsilon_i^q+\epsilon_i^a+\epsilon_i^c)+\epsilon^f.$$
For each $i$, define $P_i$ by the branch-specific expression below. Then
$$|\widehat s-\sum_i x_i|\le u\sum_iP_i+u|s_n+c_n|,$$
where the final term accounts for the last rounded addition. These are finite data-dependent bounds, not uniform relative-error claims.

$$P_i=|s_{i-1}|+|x_i|+ \begin{cases}|s_{i-1}|+|t_i|,&|s_{i-1}|\ge|x_i|,\\|x_i|+|t_i|,&|s_{i-1}|<|x_i|\end{cases} +\begin{cases}|q_i|+|x_i|,&|s_{i-1}|\ge|x_i|,\\|q_i|+|s_{i-1}|,&|s_{i-1}|<|x_i|\end{cases} +|c_{i-1}|+|a_i|.$$
## Facts & Assumptions
**Given:** the successful recurrences and operationwise relative-error model.

[F1] [[alg-kahan-compensated-summation]]: its four rounded operations are y_i, s_i, d_i, and c_i in the stated order.

[F2] [[alg-neumaier-compensated-summation]]: each step forms t_i, a branch-dependent q_i and a_i, updates c_i, then rounds the final s_n+c_n.

[F3] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: every successful operation error has magnitude at most u times the absolute operand magnitude.

## Proof

1.1 For Kahan write y_i=x_i-c_{i-1}+epsilon_i^y and s_i=s_{i-1}+y_i+epsilon_i^s. Then d_i=s_i-s_{i-1}+epsilon_i^d and c_i=d_i-y_i+epsilon_i^c=epsilon_i^s+epsilon_i^d+epsilon_i^c. [given, F1, F3, algebra]

1.2 In either Neumaier branch exact algebra gives t_i+a_i=s_{i-1}+x_i+epsilon_i^t+epsilon_i^q+epsilon_i^a: substitute q_i=s_{i-1}-t_i in the first branch or q_i=x_i-t_i in the second, including their signed rounding errors. The compensation update adds epsilon_i^c. Summing s_i+c_i-(s_{i-1}+c_{i-1}) telescopes, and the final rounded return adds epsilon^f. [given, F2, F3, algebra]

2.1 Summing s_i-s_{i-1}=x_i-c_{i-1}+epsilon_i^y+epsilon_i^s and substituting the formula for c_{i-1} cancels epsilon_i^s for i<n and gives the displayed Kahan identity. Bounding the remaining local errors by [F3] yields its stated finite bound. [step 1.1, F3, algebra]

3.1 Taking absolute values and applying [F3] gives exactly uP_i for the four executed operations in iteration i; the final operation contributes u|s_n+c_n|. This proves the displayed Neumaier bound. No step divides by the exact sum, so no uniform relative bound follows. [step 1.2, F3, algebra] ∎