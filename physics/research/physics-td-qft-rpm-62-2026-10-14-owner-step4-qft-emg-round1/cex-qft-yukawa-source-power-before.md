---
id: cex-qft-yukawa-source-power
kind: counterexample
title: Radial Yukawa source power fails the homogeneous equation
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, arXiv:1904.04051v2 (2019)"
      url: https://arxiv.org/pdf/1904.04051
      locator: "PDF pp. 10–11, equations (12) and (14): the displayed Yukawa kernel has radial power |x|^{-2}, and its convolution is described as a solution of the screened field equation. This counterexample checks only the off-origin differential expression and makes no distributional normalization claim."
    - title: "Fiorenzo Bastianelli, Relativistic quantum mechanics, lecture notes (a.a. 2021/22)"
      url: https://www-th.bo.infn.it/people/bastianelli/1-Relativistic-quantum-mechanics-21-22.pdf
      locator: "PDF pp. 7–8: the static point-source Klein–Gordon equation and its Fourier-derived e^{-mr}/r Yukawa solution. The local counterexample independently differentiates the distinct r^{-2} expression and makes no claim about the distribution at the origin."
    - title: "Robert G. Littlejohn, Notes 34: Time-Dependent Perturbation Theory, Physics 221B, University of California, Berkeley (2021–22)"
      url: https://bohr.physics.berkeley.edu/classes/221/notes/tdpt.pdf
      locator: "§20, printed pp. 28–29 (PDF pp. 28–29), equations (116)–(119): the Yukawa radial profile is e^{-κr}/r and its distributional Klein–Gordon source is supported at the origin. The local counterexample establishes the distinct r^{-2} residual directly for r>0."
---

## Statement refuted

For every $\mu\ge0$, the function
$$u_\mu(x):=\frac{e^{-\mu|x|}}{|x|^2}\qquad(x\in\mathbb R^3\setminus\{0\})$$
solves the homogeneous screened equation
$$(\Delta-\mu^2)u_\mu=0$$
at every point of $\mathbb R^3\setminus\{0\}$, where
$\Delta:=\partial_1^2+\partial_2^2+\partial_3^2$ is the Euclidean Laplacian.
The cited source uses the same off-origin Yukawa radial expression up to a
constant factor; no distributional statement at the origin is included here.

## Facts & Assumptions

**Given:** $\mu\ge0$, $x\in\mathbb R^3\setminus\{0\}$, $r:=|x|>0$, and the
Euclidean Laplacian specified in the refuted statement.

[A1] The refuted claim is the pointwise identity
$(\Delta-\mu^2)u_\mu(x)=0$ for every $x\ne0$.

## Counterexample

1.1 For any twice differentiable radial function $w(x)=q(r)$ on $r>0$,
$\partial_jw=q'(r)x_j/r$ and
$$\sum_{j=1}^3\partial_j^2w=q''(r)\sum_{j=1}^3\frac{x_j^2}{r^2}+q'(r)\sum_{j=1}^3\left(\frac1r-\frac{x_j^2}{r^3}\right)=q''(r)+\frac2r q'(r).$$
Thus the radial Laplacian formula follows directly from the chain rule on
$\mathbb R^3\setminus\{0\}$. [given, algebra]

2.1 For $q(r)=e^{-\mu r}r^{-2}$, differentiation gives
$$q'(r)=e^{-\mu r}\left(-\frac\mu{r^2}-\frac2{r^3}\right),\qquad q''(r)=e^{-\mu r}\left(\frac{\mu^2}{r^2}+\frac{4\mu}{r^3}+\frac6{r^4}\right).$$
Substituting into step 1.1 yields
$$(\Delta-\mu^2)u_\mu(x)=2e^{-\mu r}\left(\frac\mu{r^3}+\frac1{r^4}\right)>0\qquad(r>0),$$
including $\mu=0$. This contradicts [A1] at every point off the origin.
[A1, step 1.1, algebra]

3.1 For comparison, set $v_\mu(x)=e^{-\mu r}/r$ for $r>0$. Direct
differentiation gives
$$v_\mu'(r)=e^{-\mu r}\left(-\frac\mu r-\frac1{r^2}\right),\qquad v_\mu''(r)=e^{-\mu r}\left(\frac{\mu^2}r+\frac{2\mu}{r^2}+\frac2{r^3}\right).$$
Using step 1.1, the terms $2\mu/r^2+2/r^3$ cancel against $2v_\mu'/r$,
leaving $\Delta v_\mu=\mu^2v_\mu$ on $r>0$. Thus the $r^{-1}$ power
passes the off-origin homogeneous check, but this does not prove its full
distributional Green-function normalization. [step 1.1, algebra] ∎
