---
id: cex-small-eigengap-allows-fixed-angle-rotation
kind: counterexample
title: "A vanishing eigengap allows a fixed eigenvector rotation"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - thm-local-leading-eigenvector-stability-under-eigengap
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
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
  role: counterexample
sources:
  references:
    - title: "Online Bayesian Data Analysis, Lecture Notes 8: Learning Signal Representations (11 April 2016)"
      url: "https://cims.nyu.edu/~cfgranda/pages/OBDA_spring16/material/learning_representations.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis, Lecture 8: Principal Component Analysis"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-8.pdf"
---

## Statement refuted

The following uniform claim is false: among all real symmetric matrices with
a simple leading eigenvalue, an operator-norm perturbation tending to zero
forces the leading eigenvector line to rotate by an angle tending uniformly
to zero, without any lower bound on the eigengap.

## Witness construction

For every $\delta>0$, take
$$A_\delta=\begin{pmatrix}1+\delta&0\\0&1\end{pmatrix},\qquad E_\delta=\begin{pmatrix}0&\delta/4\\\delta/4&0\end{pmatrix}.$$
The unperturbed leading line is $\operatorname{span}(e_1)$ and the gap is
$g_\delta=\delta$. The perturbation norm is $\delta/4\to0$, but the
perturbed leading line makes the fixed positive angle
$\arctan(\sqrt5-2)$ with $\operatorname{span}(e_1)$, independent of $\delta$.
Thus an absolute perturbation bound alone cannot give uniform eigenspace
stability as the gap vanishes.

## Facts & Assumptions

**Given:** A real parameter $\delta>0$, the matrices $A_\delta,E_\delta$
above, and the false uniform claim stated in `## Statement refuted`.

[F1] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]:
the operator norm is the maximum of $\|Eu\|_2$ over unit vectors.

[F2] [[thm-local-leading-eigenvector-stability-under-eigengap]]: when
$\epsilon<g/2$, the sign-free sine-angle is bounded by
$\epsilon/(g-\epsilon)$.

## Refutation

**Proof technique:** direct.

1.1 The eigenvalues of $A_\delta$ are $1+\delta$ and $1$, so its leading line is $\operatorname{span}(e_1)$ and its gap is $g_\delta=\delta$. Also $E_\delta^{\mathsf T}E_\delta=(\delta/4)^2I_2$, whence [F1] gives $\|E_\delta\|_{\mathrm{op}}=\delta/4$. [F1, given, algebra]

1.2 The characteristic polynomial of $A_\delta+E_\delta=\begin{pmatrix}1+\delta&\delta/4\\\delta/4&1\end{pmatrix}$ has roots $1+\delta/2\pm\sqrt{(\delta/2)^2+(\delta/4)^2} =1+\delta/2\pm\sqrt5\,\delta/4$, so the larger root is the leading eigenvalue. If $(x,y)^{\mathsf T}$ is its leading eigenvector, the first row of the eigenvalue equation gives $y/x=4(\lambda_1(A_\delta+E_\delta)-1-\delta)/\delta=\sqrt5-2$. Thus its line makes angle $\arctan(\sqrt5-2)>0$ with $\operatorname{span}(e_1)$, independently of $\delta$. [given, algebra]

2.1 Letting $\delta\downarrow0$ makes $\|E_\delta\|_{\mathrm{op}}\to0$ by step 1.1 while the angle in step 1.2 stays fixed and positive, contradicting the proposed uniform claim. Here $\epsilon_\delta=g_\delta/4<g_\delta/2$, so [F2] still applies; its gap-dependent bound is consistent with the example. [F2, step 1.1, step 1.2] ∎