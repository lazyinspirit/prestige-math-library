---
id: ex-ip-mesh-sequence-small-singular-values
kind: example
title: Vanishing data errors with persistent small-singular-value reconstruction error
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-error-budget-for-computed-inversion
  - lem-finite-rank-operators-are-compact
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2, Chapter 8"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap5.pdf"
    - title: "Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Chapter 3"
      url: "https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/ip_function_spaces.html"
---

## Example

For every integer $n\ge1$, let $X_n=Y_n=\mathbb R^n$ with the Euclidean
inner product and let
$$A_n=A_{h,n}=\operatorname{diag}(1,1/2,\ldots,1/n).$$
Set $x_n^\dagger=0$, exact data $y_n=A_nx_n^\dagger=0$, noise
$e_n=(0,\ldots,0,1/n)$, noise bound $\delta_n=1/n$, and regularization
coefficient $\lambda_n=n^{-4}$. The observed data are
$y_{n,\delta}=y_n+e_n$, and the returned output is the exact Tikhonov output
$$\widetilde x_n=(A_n^*A_n+\lambda_n I)^{-1}A_n^*y_{n,\delta}.$$
The smallest singular value of $A_n$ is $1/n$, while
$\|e_n\|=\delta_n\to0$. Nevertheless
$$\|\widetilde x_n-x_n^\dagger\|=\frac{n^2}{n^2+1}\longrightarrow1.$$
At each resolution the discrete operator equals the forward operator and the
discretized datum is formed exactly before adding noise, so the operator,
pre-inversion, and algebraic-solve channels vanish; only data perturbation
remains. Thus vanishing noise alone does not force vanishing reconstruction
error when the retained singular values shrink and $\lambda_n$ is chosen as
above.

## Example references

[[def-ip-error-budget-for-computed-inversion|Five-channel error-budget convention]]

[Clason, Regularization of Inverse Problems, Theorem 8.8 and its proof](https://arxiv.org/pdf/2001.00617v2)

[Hansen, Introduction to Inverse Problems, Chapter 5, slides 4–6](https://people.compute.dtu.dk/pcha/DIP/chap5.pdf)

[Van Leeuwen and Brune, 10 Lectures on Inverse Problems and Imaging, §3.4.1](https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/ip_function_spaces.html)

## Facts & Assumptions

**Given:** For each $n\ge1$, the real finite-dimensional spaces $X_n=Y_n=\mathbb R^n$, the diagonal map $A_n=A_{h,n}$, $x_n^\dagger=0$, $y_n=0$, $e_n=(0,\ldots,0,1/n)$, $\delta_n=1/n$, and $\lambda_n=n^{-4}$.

[F1] [[def-ip-error-budget-for-computed-inversion]]: The budget uses $y=Ax^\dagger$, $y_\delta=y+e$, $y_{h,\delta}=A_hx^\dagger+e$, $d_h=(A-A_h)x^\dagger$, and the five bias, data, operator, pre-inversion, and solve vectors; its shifted normal operators are assumed bijective.

[F2] [[lem-finite-rank-operators-are-compact]]: Every bounded linear operator whose range has a finite ordered basis is compact.

## Verification

**Given:** The finite matrices and data in the Example, with the standard coordinate vectors $q_1,\ldots,q_n$ in $\mathbb R^n$.

1.1 The map $A_n$ is bounded and has range $\mathbb R^n$, which has the finite ordered basis $q_1,\ldots,q_n$. Hence $A_n$ is compact by [F2]. Its adjoint is $A_n^*=A_n$, and $A_n^*A_n+\lambda_nI$ is diagonal with positive entries $j^{-2}+n^{-4}$ for $1\le j\le n$; therefore the adjoints and bijective shifted normal operator required by [F1] are supplied in this finite model. [given, F1, F2, construct, algebra]

2.1 Let $q_n$ be the last coordinate vector. Then $e_n=q_n/n$, $A_n^*y_{n,\delta}=q_n/n^2$, and $(A_n^*A_n+\lambda_nI)q_n=(n^{-2}+n^{-4})q_n$. Solving this one diagonal coordinate gives $\widetilde x_n=\frac{n^2}{n^2+1}q_n$. [given, F1, step 1.1, algebra]

3.1 Since $x_n^\dagger=y_n=0$ and $A_{h,n}=A_n$, the bias, pre-inversion, and operator channels are zero. Since $\widetilde x_n$ is the exact discrete Tikhonov output, the solve channel is zero. The only nonzero channel is the data vector $R_{\lambda_n}y_n-R_{\lambda_n}y_{n,\delta}=-\widetilde x_n$. Therefore $\|\widetilde x_n-x_n^\dagger\|=n^2/(n^2+1)$, while $\delta_n=1/n\to0$ and the smallest singular value is $1/n\to0$. [given, F1, step 2.1, algebra]

4.1 The scalar data-noise allowance in the general budget is $\delta_n/(2\sqrt{\lambda_n})=n/2$, so it does not force the exact errors in step 3.1 to tend to zero. The sequence has resolved forward data at every level and asserts no convergence theorem for a fixed infinite-dimensional discretization. [given, step 3.1, algebra] ∎
