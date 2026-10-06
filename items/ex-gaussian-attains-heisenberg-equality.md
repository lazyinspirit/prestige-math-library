---
id: ex-gaussian-attains-heisenberg-equality
kind: example
title: The Gaussian attains equality in the Heisenberg inequality
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - cor-c-one-change-of-variables-for-l-one-functions
  - cor-dimensional-heisenberg-uncertainty-inequality
  - def-countable-choice
  - def-real-power
  - def-spatial-and-frequency-centres-and-variances
  - lem-complex-lp-completeness-density-and-inner-product
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - thm-differentiation-under-the-integral-sign
  - thm-gaussian-integral
  - thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
  - thm-l-one-l-two-agreement-of-fourier-transform
  - thm-plancherel
  - thm-real-power-continuity-and-derivatives
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§3, pp. 5–8 (the Gaussian computation of the variances)"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 24, Example 24.5 and Remark 24.6, pp. 144–146"
---

## Example

Assume countable choice. Let $n\ge1$ and $a>0$ and $f(x):=e^{-\pi a|x|^2}$. Then
$\|f\|_2^2=(2a)^{-n/2}$, the means of $|f|^2$ and of $|\widehat f|^2$ are
$0$, and
$$V_x(f)=\frac{n}{4\pi a},\qquad V_\xi(f)=\frac{na}{4\pi},$$
so $V_x(f)V_\xi(f)=\frac{n^2}{16\pi^2}$ and
$\sqrt{V_x(f)}\sqrt{V_\xi(f)}=\frac{n}{4\pi}$; hence $f$ attains equality in
[[cor-dimensional-heisenberg-uncertainty-inequality]], and FA-23's equality
family $c\exp(-\lambda|x-x_0|^2/2)\exp(2\pi ib_0\cdot x)$ is realised with
$c=1$, $\lambda=2\pi a$, and $x_0=b_0=0$.

## Facts & Assumptions

**Given:** Countable choice ([[def-countable-choice]]), an integer $n\ge1$, $a>0$, and $f(x)=e^{-\pi a|x|^2}$, whose membership in $L^1\cap L^2$, finite moments, and zero means are verified below; the variances use [[def-spatial-and-frequency-centres-and-variances]].

[F1] Countable choice is assumed; it is the hypothesis carried by the Gaussian transform identity, the parameter differentiation, the reflection substitution and Plancherel below ([[def-countable-choice]]).

[F2] For every $t>0$ the Gaussian $e^{-\pi t|x|^2}$ is absolutely integrable with $\int_{\mathbb R^n}e^{-\pi t|x|^2}dx=t^{-n/2}$ and $L^1$ transform $t^{-n/2}e^{-\pi|\xi|^2/t}$; every polynomial times a positive real Gaussian is absolutely integrable ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]); the one-dimensional Gaussian integral is $\int_{\mathbb R}e^{-s^2}ds=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F3] Differentiation under the integral sign: if $f(x,t)$ is integrable in $x$ for every $t$ in an open interval, differentiable in $t$ for almost every $x$, and the $t$-derivative is measurable in $x$ with $|\partial_tf(x,t)|\le g(x)$ for an integrable $g$ and all $t$, then $t\mapsto\int f(x,t)dx$ is differentiable with derivative $\int\partial_tf\,dx$ ([[thm-differentiation-under-the-integral-sign]]).

[F4] Complex $L^1$ change of variables for the reflection $T(x)=-x$ ($|\det DT|=1$): $\int h(-x)dx=\int h(x)dx$ ([[cor-c-one-change-of-variables-for-l-one-functions]]). Complex $L^2$ carries $\|\cdot\|_2$ and Cauchy–Schwarz ([[lem-complex-lp-completeness-density-and-inner-product]]), and for $g\in L^1\cap L^2$ the integral transform represents its Plancherel transform ([[thm-l-one-l-two-agreement-of-fourier-transform]]), so $\|\widehat g\|_2=\|g\|_2$ ([[thm-plancherel]]).

[F5] The power function $t\mapsto t^{\alpha}$ on $(0,\infty)$ is differentiable with derivative $\alpha t^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]], [[def-real-power]]); in particular $\frac{d}{dc}(2c)^{-n/2}=-n(2c)^{-n/2-1}$.

[F6] The Fourier characterization identifies the $L^2$ classes with $\langle\xi\rangle\widehat f\in L^2$ as $H^1=W^{1,2}$ under the regular-distribution embedding ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], Statement 1 and Proof step 1.3 at $k=1$).

## Verification

**Proof technique:** direct.

1.1 Norm, transform, evenness and vanishing means. By [F2] with $t=2a$, $\|f\|_2^2=\int e^{-2\pi a|x|^2}dx=(2a)^{-n/2}<\infty$, and $\widehat f(\xi)=a^{-n/2}e^{-\pi|\xi|^2/a}$, so $\|\widehat f\|_2^2=a^{-n}\int e^{-2\pi|\xi|^2/a}d\xi=(2a)^{-n/2}$ by [F2] with $t=2/a$ and [F4]. Both $f$ and $\widehat f$ are even and strictly positive. The functions $x\mapsto x_j|f(x)|^2$ and $\xi\mapsto\xi_j|\widehat f(\xi)|^2$ are odd in their $j$-th coordinate, so by [F4] (reflection) each integral equals its own negative; since they are integrable by [F2] and the remark above, both vanish. Hence both means are $0$, and the variances are the uncentred second moments divided by $(2a)^{-n/2}$. [F1, F2, F4, given]

2.1 Second moments and variances. Differentiating the identity $\int_{\mathbb R^n}e^{-2\pi c|x|^2}dx=(2c)^{-n/2}$ in the parameter $c>0$ ([F2] with $t=2c$, [F5]) is legitimate by [F3]: on an open neighbourhood with closure contained in $(0,\infty)$ the derivative $-2\pi|x|^2e^{-2\pi c|x|^2}$ is dominated by $2\pi|x|^2e^{-2\pi c_0|x|^2}$ for a positive lower bound $c_0$ of that interval, which is integrable by [F2]. Hence for every $c>0$ $$\int_{\mathbb R^n}|x|^2e^{-2\pi c|x|^2}dx=\frac1{2\pi}\,n(2c)^{-n/2-1}=\frac{n}{4\pi c}(2c)^{-n/2}.$$ With $c=a$ and step 1.1 this gives $\int|x|^2|f|^2=\frac{n}{4\pi a}\|f\|_2^2$, hence $$V_x(f)=\frac{\int|x|^2|f|^2}{\|f\|_2^2}=\frac{n}{4\pi a}.$$ Next, $|\widehat f(\xi)|^2=a^{-n}e^{-2\pi|\xi|^2/a}=a^{-n}e^{-2\pi c|\xi|^2}$ with $c=1/a$, so the same identity gives $\int|\xi|^2|\widehat f|^2d\xi=a^{-n}\frac{na}{4\pi}(2/a)^{-n/2}=\frac{na}{4\pi}(2a)^{-n/2}=\frac{na}{4\pi}\|\widehat f\|_2^2$ by step 1.1, and therefore $$V_\xi(f)=\frac{\int|\xi|^2|\widehat f|^2}{\|\widehat f\|_2^2}=\frac{na}{4\pi}.$$ [F2, F3, F5, step 1.1]

3.1 Equality. By step 2.1, $\int(1+|\xi|^2)|\widehat f|^2<\infty$, so [F4, F6] give $f\in H^1$; the finite spatial moment is also verified there. Hence the domain of the cited Heisenberg corollary is satisfied. Steps 1.1 and 2.1 give $\||x|f\|_2^2=\frac{n}{4\pi a}\|f\|_2^2$ and $\||\xi|\widehat f\|_2^2=\frac{na}{4\pi}\|f\|_2^2$, hence $$\||x|f\|_2\||\xi|\widehat f\|_2=\|f\|_2^2\sqrt{\frac{n}{4\pi a}}\sqrt{\frac{na}{4\pi}}=\frac{n}{4\pi}\|f\|_2^2,$$ so the inequality of [[cor-dimensional-heisenberg-uncertainty-inequality]] is an equality. The product of variances is $\frac{n}{4\pi a}\cdot\frac{na}{4\pi}=\frac{n^2}{16\pi^2}$ and its square root is $\frac{n}{4\pi}$. Finally the entire family $c\exp(-\lambda|x-a_0|^2/2)\exp(2\pi ib_0\cdot x)$ of the published Heisenberg theorem contains $f$ at $c=1$, $\lambda=2\pi a$, $a_0=b_0=0$. [F4, F6, step 1.1, step 2.1] ∎
