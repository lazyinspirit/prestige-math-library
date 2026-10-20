---
id: ex-kernel-ridge-nystrom-exact-range
kind: example
title: Exact Nyström capture gives the exact kernel ridge fit
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-regularized-kernel-prediction-system
  - def-psd-nystrom-approximation
  - thm-psd-nystrom-order-and-exactness
  - thm-kernel-ridge-gram-perturbation-bound
justified_by: []
proof_strategy: direct finite verification
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  task: Verify the exact Nyström and kernel-ridge fit when the sketch captures the full Gram range.
verification:
  precheck: pass
sources:
  references:
    - title: 'Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §14.2'
      url: https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf
      locator: Nyström projection formula (14.1), printed pp. 62–63.
---

## Example

Let $K=\operatorname{diag}(4,1)$, $S=I_2$, $y=(p,q)^T$, and $\tau>0$. The Nyström matrix is $\widetilde K=K$, and the original and sketched coefficient vectors and fitted vectors are both $((4+\tau)^{-1}p,(1+\tau)^{-1}q)^T$ and $(4(4+\tau)^{-1}p,(1+\tau)^{-1}q)^T$, respectively.

## Example references

[[def-psd-nystrom-approximation|The Nyström matrix is $KS(S^TKS)^\dagger S^TK$.]]

[[thm-psd-nystrom-order-and-exactness|A Nyström matrix is exact when the sketch captures the range of the Gram matrix.]]

[[thm-kernel-ridge-gram-perturbation-bound|A zero Gram-matrix perturbation gives identical coefficients and training fits.]]

## Facts & Assumptions

**Given:** $K=\operatorname{diag}(4,1)$, $S=I_2$, $y=(p,q)^T$, and $\tau>0$.

[A1] The finite matrix, sketch, response, and shift are those stated in the Example.

[F1] [[def-psd-nystrom-approximation]]: $\widetilde K=KS(S^TKS)^\dagger S^TK$.

[F2] [[thm-psd-nystrom-order-and-exactness]]: if $\operatorname{Ran}(KS)=\operatorname{Ran}(K)$, then $\widetilde K=K$.

[F3] [[def-regularized-kernel-prediction-system]]: for $G\succeq0$, $a_G=(G+\tau I)^{-1}y$ and $u_G=Ga_G$.

[F4] [[thm-kernel-ridge-gram-perturbation-bound]]: a Gram perturbation of norm $\delta$ gives coefficient error at most $\delta\lVert y\rVert_2/\tau^2$ and fitted-vector error at most $\delta\lVert y\rVert_2/\tau$.

## Verification

**Given:** The matrix and sketch in [A1].

1.1 Since $S=I_2$, $KS=K$, hence $\operatorname{Ran}(KS)=\operatorname{Ran}(K)$. By [F2], the Nyström matrix equals $K$. [given, A1, F1, F2, algebra]

2.1 The shifted matrix is $K+\tau I_2=\operatorname{diag}(4+\tau,1+\tau)$, so its inverse gives $a_K=((4+\tau)^{-1}p,(1+\tau)^{-1}q)^T$ and multiplication by $K$ gives the displayed fitted vector. Step 1.1 makes the same calculations apply to $\widetilde K$, while [F4] with $\delta=0$ confirms both errors vanish. [given, F3, F4, step 1.1, algebra] ∎
