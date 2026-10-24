---
id: thm-metric-approximation-error-decomposition
kind: theorem
title: "Metric approximation error decomposes along a finite reference chain"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-exact-inferential-target-and-approximation-chain
  - def-metric-space
  - def-statistical-and-computational-error-ledger
  - thm-error-ledger-mse-covariance-identity
  - thm-pathwise-error-ledger-decomposition
justified_by: []
proof_strategy: direct
axiom_use: "None. The proof is a finite induction using only the metric triangle inequality and scalar algebra."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Anthony Davison and David Hinkley, Bootstrap Methods and Their Application (1997), Chapter 2 §2.5"
      url: "https://api.pageplace.de/preview/DT0400.9781107266384_A23760363/preview-9781107266384_A23760363.pdf"
      locator: "Chapter 2, §§2.5.1–2.5.2; decomposition of estimation and computation errors along specified reference stages."
    - title: "Alison L. Gibbs and Francis E. Su, On Choosing and Bounding Probability Metrics, International Statistical Review 70(3), 419–435 (2002)"
      url: "https://math.hmc.edu/su/wp-content/uploads/sites/10/2019/06/ON-CHOOSING-AND-BOUNDING-PROBABILITY.pdf"
      locator: "Complete 21-page article, §§1–3; probability metrics and finite triangle bounds."
---

## Statement

Let $(\mathcal M,d)$ be a metric space, let $m\ge0$ be an integer, and take $T_0,T_1,\ldots,T_m,\widehat T\in\mathcal M$. Then
$$d(T_0,\widehat T)\le\sum_{j=1}^{m}d(T_{j-1},T_j)+d(T_m,\widehat T),$$
where the sum is empty when $m=0$. If $m\ge1$ and $T_1$ is the exact target from [[def-exact-inferential-target-and-approximation-chain]], the first term is the declared reference-to-target discrepancy and subsequent terms quantify adjacent approximation changes in the same metric. The scalar identity and absolute bound of [[thm-pathwise-error-ledger-decomposition]] are exact telescoping statements. No independence or default variance-addition rule follows; the MSE identity in [[thm-error-ledger-mse-covariance-identity]] retains total bias and covariance terms.

## Facts & Assumptions

**Given:** A metric space $(\mathcal M,d)$, an integer $m\ge0$, and points $T_0,\ldots,T_m,\widehat T\in\mathcal M$.

[F1] A metric is symmetric and satisfies $d(x,z)\le d(x,y)+d(y,z)$. [[def-metric-space]]

[F2] Scalar ledger stages are adjacent signed differences on one stated scale; the definition alone asserts no independence, centering, or unbiasedness. [[def-statistical-and-computational-error-ledger]]

[F3] A finite scalar ledger chain satisfies the signed telescoping identity and its absolute-value bound without an independence assumption. [[thm-pathwise-error-ledger-decomposition]]

[F4] For square-integrable scalar error terms, the MSE of their sum includes squared total bias and covariance terms; summing component variances alone is generally not the identity. [[thm-error-ledger-mse-covariance-identity]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 We prove by induction on $m$ that $d(T_0,T_m)\le\sum_{j=1}^{m}d(T_{j-1},T_j)$. For $m=0$ both sides are zero; for $m=1$ this is equality. If it holds through $m$, then the triangle inequality [F1] gives $d(T_0,T_{m+1})\le d(T_0,T_m)+d(T_m,T_{m+1})\le\sum_{j=1}^{m+1}d(T_{j-1},T_j)$. [given, F1, induction, algebra]

2.1 Apply the triangle inequality once more to $T_0,T_m,\widehat T$ and then step 1.1 to bound $d(T_0,\widehat T)$ by the displayed sum. For a scalar chain, [F2] specifies the same-scale adjacent errors and [F3] gives their exact signed telescope; when the terms are square-integrable, [F4] explains why squaring them retains bias and covariance terms rather than giving an automatic variance sum. [F2, F3, F4, step 1.1, algebra] ∎

