---
id: thm-wainwright-lower-signed-support-threshold
kind: theorem
title: Wainwright's planned lower threshold for signed Lasso support recovery
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-linear-regression-objectives
  - cex-wainwright-conditional-covariance-eigenvalue-bound
  - def-multivariate-normal-law
  - def-axiom-of-choice
aliases: []
proof_strategy: direct
axiom_use: "AC is explicitly assumed for the finite-dimensional Gaussian model construction. No completed proof is supplied pending owner reconciliation of the source defect."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: fail
sources:
  references:
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Recovery of Sparsity, 2006, Theorem 1(a), §3.4, and Appendix D.6"
      url: "https://arxiv.org/pdf/math/0605740"
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Sparsity Recovery Using L1-Constrained Quadratic Programming (Lasso), 2009, §IV.A"
      url: "https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf"
---

## Statement

Assume the Axiom of Choice. Wainwright's planned lower-threshold claim is the following: along a sequence of real Gaussian linear models with $S=\{j:\beta_j^*\ne0\}$, $s=|S|$, $N=p-s$, $s,n-s,N\to\infty$, and independent observations
$$y_i=x_i^{\mathsf T}\beta^*+w_i,\qquad x_i\sim N_p(0,\Sigma),\quad w_i\sim N(0,\sigma^2),$$
where $X$ has rows $x_i^{\mathsf T}$, $y=(y_i)$, design and noise are independent, there is no separate intercept, and $\Sigma$ has unit diagonal. Suppose constants $C_{\min}>0$, $C_{\max}<\infty$, $D_{\max}<\infty$, and $0<\epsilon\le1$ satisfy
$$\lambda_{\min}(\Sigma_{SS})\ge C_{\min},\qquad \lambda_{\max}(\Sigma)\le C_{\max},\qquad \|(\Sigma_{SS})^{-1}\|_\infty\le D_{\max},\qquad \|\Sigma_{S^cS}(\Sigma_{SS})^{-1}\|_\infty\le1-\epsilon,$$
with $\|M\|_\infty=\max_i\sum_j|M_{ij}|$. Define
$$\theta_\ell=\frac{\bigl(\sqrt{C_{\max}}-\sqrt{C_{\max}-1/C_{\max}}\bigr)^2}{C_{\max}(2-\epsilon)^2}.$$
For every fixed $\nu>0$ and every positive non-increasing sequence $\lambda_n$, if $n<2(\theta_\ell-\nu)s\log N+s+1$, then the probability that there exists an optimizer with $\operatorname{sgn}(\widehat\beta)=\operatorname{sgn}(\beta^*)$ for $\|y-X\beta\|_2^2/(2n)+\lambda_n\|\beta\|_1$ tends to zero.

## Statement references

[Wainwright 2006, Theorem 1(a)](https://arxiv.org/pdf/math/0605740)

[Wainwright 2009, §IV.A, lower-threshold interface](https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf)

## Escalation

No proof of this lower-threshold claim is supplied. In Wainwright 2006, §3.4, the proof of Theorem 1(a) invokes Appendix D.6, which asserts $\Sigma_{S^c\mid S}=[\Sigma^{-1}]_{S^cS^c}$ and then uses $\lambda_{\min}(\Sigma_{S^c\mid S})\ge1/C_{\max}$. The correct block-inverse relation for positive-definite $\Sigma$ is $[\Sigma^{-1}]_{S^cS^c}=(\Sigma_{S^c\mid S})^{-1}$; [[cex-wainwright-conditional-covariance-eigenvalue-bound]] gives a matrix family satisfying the planned covariance hypotheses but violating the stated eigenvalue bound. This invalidates that proof step, but by itself does not show the lower-threshold conclusion is false. Wainwright 2009 §IV.A instead defines a conditional-covariance eigenvalue parameter $\rho_\ell(\Sigma_{S^c\mid S})$ in its threshold interface. The owner must decide whether to supply an independent proof under the planned constant or adopt a corrected threshold and exact hypotheses; do not treat the lower claim as ready until that reconciliation is complete.
