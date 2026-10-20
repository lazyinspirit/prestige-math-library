---
id: cex-wainwright-conditional-covariance-eigenvalue-bound
kind: counterexample
title: A unit-diagonal covariance can have conditional covariance below the reciprocal global eigenvalue bound
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Sparsity Recovery Using L1-Constrained Quadratic Programming (Lasso), 2009, §IV.A"
      url: "https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf"
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Recovery of Sparsity, 2006, Appendix D.6"
      url: "https://arxiv.org/pdf/math/0605740"
---

## Statement refuted

For every real symmetric positive-definite covariance matrix $\Sigma$ with unit diagonal, every coordinate set $S$ for which both $S$ and $S^c$ are nonempty and $\Sigma_{SS}$ is invertible, and constants $C_{\min}>0$, $D_{\max}<\infty$, $C_{\max}<\infty$, and $0<\epsilon\le1$ satisfying
$$\lambda_{\min}(\Sigma_{SS})\ge C_{\min},\qquad \lambda_{\max}(\Sigma)\le C_{\max},\qquad \|(\Sigma_{SS})^{-1}\|_\infty\le D_{\max},\qquad \|\Sigma_{S^cS}(\Sigma_{SS})^{-1}\|_\infty\le1-\epsilon,$$
the Schur conditional covariance
$$\Sigma_{S^c\mid S}:=\Sigma_{S^cS^c}-\Sigma_{S^cS}(\Sigma_{SS})^{-1}\Sigma_{SS^c}$$
satisfies $\lambda_{\min}(\Sigma_{S^c\mid S})\ge1/C_{\max}$. Here $\|M\|_\infty=\max_i\sum_j|M_{ij}|$.

## Statement references

[Wainwright 2006, Appendix D.6](https://arxiv.org/pdf/math/0605740)

[Wainwright 2009, §IV.A, equations (28)–(30)](https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf)

## Facts & Assumptions

**Given:** The matrix inequality stated above is proposed for all positive-definite unit-diagonal $\Sigma$ and admissible $S,C_{\max}$.

[A1] For a block matrix with invertible leading block, the expression $\Sigma_{S^cS^c}-\Sigma_{S^cS}(\Sigma_{SS})^{-1}\Sigma_{SS^c}$ is the Schur complement; here it is defined by the displayed formula.

## Counterexample

1.1 Fix any integer $s\ge1$, set $p=2s$, $S=\{1,\ldots,s\}$, and take $\Sigma=\begin{pmatrix}I_s&\frac34I_s\\[2pt]\frac34I_s&I_s\end{pmatrix}$ with $C_{\min}=1$, $C_{\max}=7/4$, $D_{\max}=1$, and $\epsilon=1/4$. The vectors $(u,u)$ and $(u,-u)$ have eigenvalues $7/4$ and $1/4$ for every $u\in\mathbb R^s$, and these subspaces span $\mathbb R^{2s}$; hence $\Sigma$ is positive definite with unit diagonal and maximum eigenvalue $C_{\max}$. Also $\Sigma_{SS}=I_s$, so its minimum eigenvalue is $C_{\min}$ and its inverse infinity norm is $D_{\max}$, while $\|\Sigma_{S^cS}\Sigma_{SS}^{-1}\|_\infty=3/4=1-\epsilon$. Thus all stated covariance hypotheses hold. [given, construct, algebra]

2.1 Substitution in [A1] gives $\Sigma_{S^c\mid S}=I_s-(3I_s/4)I_s^{-1}(3I_s/4)=7I_s/16$, so $\lambda_{\min}(\Sigma_{S^c\mid S})=7/16<4/7=1/C_{\max}$ since $49<64$. Direct block multiplication gives $\Sigma^{-1}=(16/7)\begin{pmatrix}I_s&-3I_s/4\\[2pt]-3I_s/4&I_s\end{pmatrix}$, whose lower-right block is $16I_s/7$, the inverse of the conditional covariance rather than the conditional covariance itself. Thus the proposed bound is false. [A1, step 1.1, algebra] ∎

## Source notes

For this block family, the lower-right block of $\Sigma^{-1}$ is $16I_s/7$, the inverse of $\Sigma_{S^c\mid S}$, not $\Sigma_{S^c\mid S}$ itself.
