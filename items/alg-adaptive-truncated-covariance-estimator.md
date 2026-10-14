---
id: alg-adaptive-truncated-covariance-estimator
kind: algorithm
title: Adaptive truncated covariance estimator
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-covariance-matrix-of-a-random-vector
  - def-matrix-variance-of-a-random-vector
  - alg-geometric-median-of-block-means
  - lem-measurable-minimum-norm-geometric-median-selection
  - def-countable-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by:
  - lem-adaptive-truncated-covariance-estimator-is-total
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: The pilot inherits the exact Countable Choice premise of the planned robust-mean selector; spectral truncation and finite-grid selection are choice-free.
sources:
  references:
    - title: "Stanislav Minsker and Xiaohan Wei, Estimation of the Covariance Structure of Heavy-Tailed Distributions, §2"
      url: "https://arxiv.org/pdf/1708.00502"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
dependency_level: 2
---

## Definition

Input a finite sample $X_1,\ldots,X_m\in\mathbb R^p$, confidence
parameter $\beta>1$, and positive finite scale bounds
$0<\sigma_{\min}\le\sigma_{\max}$. The computational domain requires
$k=\lfloor3.5\beta\rfloor+1\le m/2$. Statistical guarantees are stated
separately: for a clean iid finite-fourth-moment law, use the matrix variance
of [[def-matrix-variance-of-a-random-vector]] and a bracket containing
$\sigma_0$. The statistical conditions are not needed merely to evaluate this
finite-sample procedure.

Call [[alg-geometric-median-of-block-means]] on $(X_1,\ldots,X_m)$
with block count $k$ to obtain the pilot $\widehat\mu$. Use its consecutive
blocks in index order, of size $\lfloor m/k\rfloor+1$ for the first
$m-k\lfloor m/k\rfloor$ blocks and $\lfloor m/k\rfloor$ for the rest.
This uses the same sample and is not a sample split.

For a real symmetric matrix $A=Q\operatorname{diag}(\lambda_i)Q^T$, define
$\psi(A)=Q\operatorname{diag}(\psi(\lambda_i))Q^T$, where
$\psi(x)=\operatorname{sign}(x)\min(|x|,1)$. The real spectral theorem
makes this definition independent of the chosen orthonormal eigenbasis.
Define the finite grid and truncation thresholds
$$\sigma_j=2^j\sigma_{\min},\qquad J=\{j\in\mathbb Z:\sigma_{\min}\le\sigma_j<2\sigma_{\max}\},\qquad \theta_j=\frac1{\sigma_j}\sqrt{\frac\beta m}.$$
For every $j\in J$, form
$$\widehat\Sigma_{m,j} =\frac1{m\theta_j}\sum_{i=1}^m \psi\!\left(\theta_j(X_i-\widehat\mu)(X_i-\widehat\mu)^T\right).$$
Choose the smallest $j^*\in J$ such that
$$\|\widehat\Sigma_{m,k'}-\widehat\Sigma_{m,j^*}\|_{\rm op} \le6\sigma_{k'}\sqrt{\frac\beta m} \quad\text{for every }k'\in J,\ k'>j^*,$$
and output $\widehat\Sigma^*=\widehat\Sigma_{m,j^*}$.

This is the clean heavy-tail moment procedure. It makes no Huber
contamination or sample-replacement guarantee.
