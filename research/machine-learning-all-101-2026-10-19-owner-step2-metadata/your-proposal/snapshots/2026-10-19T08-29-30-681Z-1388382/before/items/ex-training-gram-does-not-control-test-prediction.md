---
id: ex-training-gram-does-not-control-test-prediction
kind: example
title: A training Gram matrix does not determine a test prediction
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
  - def-regularized-kernel-prediction-system
  - def-psd-nystrom-approximation
  - thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective
justified_by: []
proof_strategy: direct finite verification
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  task: Construct two PSD kernels with the same training Gram matrix and different cross-kernel test predictions.
verification:
  precheck: pass
sources:
  references:
    - title: 'Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §19.1.6'
      url: https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf
      locator: The finite kernel predictor at a new input, printed p. 87.
---

## Example

On the two-point set $\{x,z\}$, put $\phi_0(x)=e_1$, $\phi_0(z)=e_2$, $\phi_1(x)=e_1$, and $\phi_1(z)=(1/2,\sqrt3/2)^T$, where $e_1,e_2$ are the standard basis vectors of $\mathbb R^2$. For $j\in\{0,1\}$, define $k_j(s,t)=\phi_j(s)^T\phi_j(t)$ and let $\mathcal H_j=\{f_v:v\in\mathbb R^2\}$, where $f_v(t)=v^T\phi_j(t)$ and $\langle f_v,f_w\rangle_{\mathcal H_j}=v^Tw$. Each feature pair is linearly independent, so this defines a real Hilbert space of functions; its kernel sections are $k_j(\cdot,s)=f_{\phi_j(s)}$ and reproduce evaluation. Thus $\mathcal H_j$ is an actual real RKHS for $k_j$, and the corresponding matrices in the order $(x,z)$ are $G_0=\begin{pmatrix}1&0\\0&1\end{pmatrix}$ and $G_1=\begin{pmatrix}1&1/2\\1/2&1\end{pmatrix}$. With the single training point $x$, response $y=1$, and shift $\tau>0$, both training Gram matrices are $[1]$ and both coefficient vectors equal $1/(1+\tau)$. The two exact test predictions $k_j(z,x)a_j$ are $0$ and $1/(2(1+\tau))$, respectively.

For a rank-one Nyström approximation of $G_0$, use the sketch $S=(1,1/10)^T$. The Nyström matrix is

$$\widetilde K=G_0S(S^TG_0S)^\dagger S^TG_0=\begin{pmatrix}100/101&10/101\\10/101&1/101\end{pmatrix}.$$

With training point $x$, response $1$, and $\tau=1$, the exact test prediction for $G_0$ is $0$, whereas the Nyström coefficient is $\widetilde a=(100/101+1)^{-1}=101/201$ and its test prediction is $\widetilde K_{zx}\widetilde a=10/201$. The training Gram error is $1/101$, and the training fitted-value error is $|1/2-100/201|=1/402$, while the test-prediction error is $10/201$.

## Example references

[[def-regularized-kernel-prediction-system|The training coefficient solves the shifted Gram system.]]

[[def-psd-nystrom-approximation|The Nyström matrix is formed by the positive-semidefinite compression formula.]]

[[thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective|The training coefficient gives the unique RKHS minimizer for each PSD kernel.]]

## Facts & Assumptions

**Given:** The two-point set, feature vectors, RKHS constructions, Gram matrices, training points, responses, shifts, and rank-one Nyström sketch in the Example.

[A1] The feature maps, finite RKHSs, matrices $G_0,G_1$, training input $x$, test input $z$, responses, shifts, and sketch are exactly those stated in the Example.

[F1] [[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]: a real kernel is positive semidefinite when it is symmetric and every finite Gram quadratic form is nonnegative; an RKHS has reproducing kernel sections.

[F2] [[def-regularized-kernel-prediction-system]]: the coefficient for a training Gram matrix $K$ is $(K+\tau I)^{-1}y$.

[F3] [[def-psd-nystrom-approximation]]: for a PSD matrix $K$ and a finite sketch $S$, the Nyström matrix is $KS(S^TKS)^\dagger S^TK$.

[F4] [[thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective]]: for a real RKHS kernel, training list length $n$, and $\lambda>0$, the coefficient with $\tau=n\lambda$ gives the unique minimizer of the corresponding mean-square RKHS objective.

## Verification

**Given:** The matrices and training setup in [A1].

1.1 For each $j$, the feature vectors $\phi_j(x),\phi_j(z)$ are linearly independent. Hence $v\mapsto f_v$ is injective, the stated inner product makes $\mathcal H_j$ a complete two-dimensional real inner-product space, and $k_j(\cdot,s)=f_{\phi_j(s)}$ satisfies $\langle f_v,k_j(\cdot,s)\rangle_{\mathcal H_j}=v^T\phi_j(s)=f_v(s)$. For any finite list $(t_i)$ in $\{x,z\}$ and real coefficients $(c_i)$, $\sum_{i,j}c_ic_jk_j(t_i,t_j)=\lVert\sum_i c_i\phi_j(t_i)\rVert_2^2\ge0$. Thus each $k_j$ is a positive-semidefinite kernel with the displayed Gram matrix and an explicitly specified real RKHS. [given, A1, F1, algebra]

2.1 For the training list consisting of $x$, both training Gram matrices equal $[1]$. By [F2], both shifted systems give coefficient $1/(1+\tau)$ and training fitted value $1/(1+\tau)$. The list length is $n=1$, so setting $\lambda=\tau>0$ gives $\tau=n\lambda$; the actual RKHSs established in step 1.1 let [F4] identify these coefficients with the unique kernel-ridge minimizers. The exact test predictions are $k_0(z,x)/(1+\tau)=0$ and $k_1(z,x)/(1+\tau)=1/(2(1+\tau))$. [given, A1, F2, F4, step 1.1, algebra]

3.1 Since $G_0S=(1,1/10)^T$ and $S^TG_0S=101/100$, [F3] gives the displayed rank-one matrix $\widetilde K$. Its training entry is $100/101$, so [F2] gives $\widetilde a=(100/101+1)^{-1}=101/201$ at $\tau=1$. The approximate test prediction is $(10/101)(101/201)=10/201$; the exact prediction under $G_0$ is zero. The training fitted-value difference is $|1/2-(100/101)(101/201)|=|1/2-100/201|=1/402$, while the test-prediction difference is $10/201$. [given, A1, F2, F3, step 2.1, algebra] ∎
