---
id: ex-kde-boundary-bias
kind: example
title: "Gaussian KDE boundary bias for a uniform density"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-density-target-and-kernel-density-estimator
  - lem-kde-evaluation-is-a-measurable-statistic
  - thm-change-of-variables-for-expectation
  - thm-integration-against-a-density
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - lem-plane-gaussian-integral-in-polar-coordinates
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, PDF pp. 1–3"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels, Advanced Topics in Statistical Learning, Spring 2024, §3.1, PDF pp. 5–7"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Example

In one dimension, choose the Borel density version $f=\mathbf1_{[0,1]}$ and
the standard Gaussian kernel
$K(u)=(2\pi)^{-1/2}e^{-u^2/2}$. At the support boundary $x=0$,
$$\mathbb E\widehat f_h(0)=\int_{-1/h}^{0}K(u)du\longrightarrow\frac12 \qquad(h\downarrow0),$$
while the chosen target value is $f(0)=1$. Hence the uncorrected estimator
has limiting bias $-1/2$ at the boundary. The smoothness hypotheses of the
pointwise second-order bias theorem fail at $x=0$.

## Facts & Assumptions

**Given:** $d=1$, iid observations with chosen density version $f=\mathbf1_{[0,1]}$, kernel $K(u)=(2\pi)^{-1/2}e^{-u^2/2}$, bandwidth $h>0$, and evaluation point $x=0$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The estimator is $\widehat f_h(x)=(nh)^{-1}\sum_iK((x-X_i)/h)$ ([[def-density-target-and-kernel-density-estimator]]).

[F2] Expectation is integration against the sample law, which has density $f$ ([[thm-change-of-variables-for-expectation]], [[thm-integration-against-a-density]]).

[F3] Expectation is linear on integrable variables ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F4] The nonnegative plane Gaussian integral is $\int_{\mathbb R^2}e^{-(x^2+y^2)}d(x,y)=\pi$ ([[lem-plane-gaussian-integral-in-polar-coordinates]]).

[F5] Tonelli factors nonnegative product integrals ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] Nonnegative integrals pass through increasing limits ([[thm-monotone-convergence-for-the-integral]]).

[F7] Under $\mathrm{AC}_\omega$, affine C$^1$ substitutions obey nonnegative change of variables ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F8] Under $\mathrm{AC}_\omega$, a one-dimensional box has Lebesgue measure equal to its length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Verification


1.1 The function $f=\mathbf1_{[0,1]}$ is a Borel density version: [F8] gives $\lambda_1([0,1])=1$. Put $I=\int_{\mathbb R}e^{-t^2}dt$. Tonelli [F5] and [F4] give $I^2=\pi$, so $I=\sqrt\pi$. Scaling with [F7] shows $\int_{\mathbb R}(2\pi)^{-1/2}e^{-t^2/2}dt=1$. Since this kernel is even, $\int_{-\infty}^0K(u)du=1/2$. [given, A1, F4, F5, F7, F8, algebra]

2.1 By [F1]–[F3] and the density formula, each summand is integrable because $K$ is bounded and the sample law is a probability measure. Thus $\mathbb E\widehat f_h(0) =h^{-1}\int_0^1K(-t/h)dt.$ Apply [F7] on $\mathbb R$ to $T(u)=-hu$ and $g(t)=\mathbf1_{[0,1]}(t)K(-t/h)$. It gives $\int_0^1K(-t/h)dt =h\int_{-1/h}^{0}K(u)du,$ so the displayed expectation equals $\int_{-1/h}^{0}K(u)du$. [given, A1, F1, F2, F3, F7, step 1.1]

3.1 Along any sequence $h_m\downarrow0$, the intervals $[-1/h_m,0]$ increase to $(-\infty,0]$. Monotone convergence [F6] and the half-mass calculation in step 1.1 give $\int_{-1/h_m}^{0}K(u)du\longrightarrow \int_{-\infty}^{0}K(u)du=\frac12.$ [step 1.1, F6, step 2.1]

4.1 The density version was chosen with $f(0)=1$, so step 3.1 gives $\mathbb E\widehat f_h(0)-f(0)\to-1/2$. The selected density is discontinuous at $0$, so this calculation does not satisfy the smooth interior-point theorem's hypotheses. [given, step 3.1, algebra] ∎


## Remarks

The change of variables $u=-t/h$ sends the support interval $0\le t\le1$
to $-1/h\le u\le0$. The picture shows the Gaussian kernel in this
rescaled coordinate for the illustrative bandwidth $h=1/2$; the shaded
area is $\mathbb E\widehat f_h(0)$, not the target value $f(0)$.

```tikz
\begin{tikzpicture}[x=1cm,y=5cm]
  \fill[blue!20] (-2,0) -- plot[domain=-2:0,samples=50] (\x,{exp(-\x*\x/2)/sqrt(2*pi)}) -- (0,0) -- cycle;
  \draw[->] (-3.4,0) -- (3.5,0) node[right] {$u$};
  \draw[->] (0,0) -- (0,0.51) node[above] {$K(u)$};
  \draw[thick,blue] plot[domain=-3.2:3.2,samples=100] (\x,{exp(-\x*\x/2)/sqrt(2*pi)});
  \draw[dashed] (-2,0) -- (-2,{exp(-2)/sqrt(2*pi)});
  \draw (-2,0.008) -- (-2,-0.008) node[below] {$-1/h=-2$};
  \node[below right] at (0,0) {$0$};
  \node at (-1.0,0.11) {$\int_{-1/h}^{0} K(u)\,du$};
\end{tikzpicture}
```

As $h\downarrow0$, the left endpoint moves to $-\infty$, while the right
endpoint stays at $0$. Thus the shaded mass increases to the Gaussian
left-half mass $1/2$, whereas the chosen density version has $f(0)=1$.
The verification above establishes these facts independently of the picture.
