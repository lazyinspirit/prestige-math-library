---
id: ex-covariance-and-correlation-pca-differ-after-rescaling
kind: example
title: "Rescaling can change covariance-PCA directions"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-covariance-and-correlation-principal-component-analysis
  - def-covariance-matrix-of-a-random-vector
  - thm-pca-leading-direction-maximizes-variance
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Online Bayesian Data Analysis, Lecture Notes 8: Learning Signal Representations (11 April 2016)"
      url: "https://cims.nyu.edu/~cfgranda/pages/OBDA_spring16/material/learning_representations.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis, Lecture 8: Principal Component Analysis"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-8.pdf"
---

## Example

Let $(U,V)$ be uniform on $\{-1,1\}^2$ and set
$X=(3U,U+\sqrt3V)^{\mathsf T}$. Then
$$\operatorname{Cov}(X)=\begin{pmatrix}9&3\\3&4\end{pmatrix},\qquad R=D^{-1}\operatorname{Cov}(X)D^{-1}=\begin{pmatrix}1&1/2\\1/2&1\end{pmatrix}.$$
The leading correlation-PCA line is $\operatorname{span}(1,1)$, while this
line is not an eigenline of the covariance matrix. The two PCA conventions
therefore give different leading directions for the same data after
standardization.

## Facts & Assumptions

**Given:** A four-point probability space
$\Omega=\{-1,1\}^2$ with probability $1/4$ at each point,
$U(u,v)=u$, $V(u,v)=v$, and $X=(3U,U+\sqrt3V)^{\mathsf T}$.

[F1] [[def-covariance-matrix-of-a-random-vector]]: covariance entries are
expectations of centered coordinate products.

[F2] [[def-covariance-and-correlation-principal-component-analysis]]:
correlation-PCA divides centered coordinates by their positive standard
deviations.

[F3] [[thm-pca-leading-direction-maximizes-variance]]: the leading
eigenspace is the maximizing line for projected variance.

## Verification

**Proof technique:** direct.

1.1 On this four-point space, $\mathbb E U=\mathbb E V=0$, $\mathbb E U^2=\mathbb E V^2=1$, and $\mathbb E[UV]=0$ because two points have $UV=1$ and two have $UV=-1$. Thus $\mathbb E X=0$, $\operatorname{Var}(3U)=9$, $\operatorname{Var}(U+\sqrt3V)=1+3=4$, and $\operatorname{Cov}(3U,U+\sqrt3V)=3$. This gives the stated covariance matrix. [F1, given, algebra]

2.1 The positive standard-deviation matrix is $D=\operatorname{diag}(3,2)$, so [F2] gives $D^{-1}\operatorname{Cov}(X)D^{-1} =\begin{pmatrix}1&1/2\\1/2&1\end{pmatrix}$. This matrix sends $(1,1)^{\mathsf T}$ to $\tfrac32(1,1)^{\mathsf T}$ and $(1,-1)^{\mathsf T}$ to $\tfrac12(1,-1)^{\mathsf T}$; hence its leading line is $\operatorname{span}(1,1)$. [F2, step 1.1, algebra]

3.1 The covariance matrix has characteristic roots $(13\pm\sqrt{61})/2$, so its leading eigenspace is a line. It sends $(1,1)^{\mathsf T}$ to $(12,7)^{\mathsf T}$, which is not a scalar multiple of $(1,1)^{\mathsf T}$. Thus the correlation-PCA leading line is not the covariance-PCA leading line, and [F3] identifies each as the maximizing line for its own projected variance. [F1, F3, step 1.1, step 2.1, algebra] ∎