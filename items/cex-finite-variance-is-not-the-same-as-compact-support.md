---
id: cex-finite-variance-is-not-the-same-as-compact-support
kind: counterexample
title: Finite variance is not compact support
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - cor-c-one-change-of-variables-for-l-one-functions
  - def-countable-choice
  - def-real-power
  - def-spatial-and-frequency-centres-and-variances
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - thm-l-one-l-two-agreement-of-fourier-transform
  - thm-heine-borel-rn
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-gaussian-integral
  - thm-support-measure-uncertainty-inequality
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
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
      locator: "§3 and §5, pp. 5–8 and 11–12 (comparison of the two hypothesis classes)"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 24, pp. 141–146"
---

## Statement refuted

Assume countable choice. Every nonzero $f\in L^2(\mathbb R^n;\mathbb C)$ with
finite second moments in both domains vanishes almost everywhere outside a
compact set, and so does $\widehat f$; equivalently, finite variance forces
compact support.

## Facts & Assumptions

**Given:** Countable choice, an integer $n\ge1$, a real $a>0$, and the Gaussian $f(x)=e^{-\pi a|x|^2}$.

[F1] Countable choice is assumed; it is the hypothesis carried by the Gaussian transform identity and the change-of-variables substitution below ([[def-countable-choice]]).

[F2] For every $t>0$ the Gaussian $e^{-\pi t|x|^2}$ is absolutely integrable with $\int_{\mathbb R^n}e^{-\pi t|x|^2}dx=t^{-n/2}$ and $L^1$ Fourier transform $t^{-n/2}e^{-\pi|\xi|^2/t}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]); every polynomial times a positive real Gaussian is absolutely integrable. For $L^1\cap L^2$ functions this integral transform represents the Plancherel transform ([[thm-l-one-l-two-agreement-of-fourier-transform]]); the one-dimensional Gaussian integral is $\int_{\mathbb R}e^{-s^2}ds=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F3] Complex $L^1$ change of variables: for the reflection $T(x)=-x$, which is a $C^1$ diffeomorphism with $|\det DT|=1$, one has $\int h(-x)dx=\int h(y)dy$ ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F4] Means and variances for a nonzero $L^2$ function with finite second moments are as in [[def-spatial-and-frequency-centres-and-variances]]; the support-measure hypothesis that is not satisfied here is the one of [[thm-support-measure-uncertainty-inequality]].

[F5] Compact subsets of $\mathbb R^n$ are bounded ([[thm-heine-borel-rn]]), and every box has its product-of-side-lengths Lebesgue measure under Countable Choice ([[thm-lebesgue-measure-of-a-box-of-every-kind]]). Thus a compact set is contained in a finite-measure cube, whereas $\mathbb R^n$ has infinite measure since it contains cubes $[-R,R]^n$ of measure $(2R)^n$ for all $R>0$.

## Counterexample

**Proof technique:** direct.

1.1 The Gaussian and its transform are strictly positive and integrable. $f(x)=e^{-\pi a|x|^2}>0$ for every $x$, $f$ is continuous and even, and by [F2] with $t=2a$, $\|f\|_2^2=\int_{\mathbb R^n}f^2=(2a)^{-n/2}<\infty$, so $f\in L^1\cap L^2$ and [F2] identifies its integral and Plancherel transforms, with $\widehat f(\xi)=a^{-n/2}e^{-\pi|\xi|^2/a}>0$ for every $\xi\in\mathbb R^n$. [F1, F2, given]

2.1 Finite second moments and vanishing means. By [F2] with $t=2a$ one has $\|f\|_2^2=(2a)^{-n/2}<\infty$, and since $|\widehat f(\xi)|^2=a^{-n}e^{-2\pi|\xi|^2/a}$, [F2] with $t=2/a$ gives $\|\widehat f\|_2^2=(2a)^{-n/2}<\infty$ as well. By [F2], $|x|^2e^{-2\pi a|x|^2}$ and $|\xi|^2a^{-n}e^{-2\pi|\xi|^2/a}$ are integrable polynomial multiples of positive Gaussians. Thus both second moments are finite. The functions $x\mapsto x_j|f(x)|^2$ and $\xi\mapsto\xi_j|\widehat f(\xi)|^2$ are odd in their $j$-th coordinate while $f$ and $\widehat f$ are even, so [F3] applied to the reflection $T(x)=-x$ shows that each of these integrals equals its own negative and hence vanishes; consequently both means are $0$ and the variances $V_x(f),V_\xi(f)$ of [F4] are finite. [F2, F3, F4, given, step 1.1]

3.1 No finite-measure support in either domain. Let $E\subseteq\mathbb R^n$ be measurable with $f=0$ almost everywhere on $\mathbb R^n\setminus E$. Since $f>0$ everywhere, the set where $f$ differs from $0$ inside $\mathbb R^n\setminus E$ is $\mathbb R^n\setminus E$ itself, so $\mathbb R^n\setminus E$ is null and $E$ has full measure, $|E|=\infty$; the same argument with the strictly positive transform $\widehat f$ shows that no measurable $F$ of finite measure can carry $\widehat f=0$ almost everywhere off it. By [F5], compact sets have finite measure, so neither function can have compact support. Consequently the counterexample has finite second moments and finite variances in both domains but neither it nor its transform is supported ($\mathrm{a.e.}$) on a set of finite measure, so finite variance does not force compact support, and the support-measure hypothesis of [F4] is not implied by the variance hypotheses. [F4, F5, given, step 1.1, step 2.1] ∎
