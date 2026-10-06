---
id: ex-heat-flow-of-an-indicator-function
kind: example
title: "The heat flow of an interval indicator is a difference of Gaussian tails"
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - def-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - prop-indicator-function-is-measurable-iff-its-set-is-measurable
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-derivative-of-exponential
  - thm-gaussian-integral
  - thm-heat-cauchy-solution-for-lp-data
  - cor-primitives-of-a-continuous-function
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading, followed by recorded Step 7 current repair argument acceptance. The repair receipt records local author review; no independent repair audit is claimed. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-3.md"
      - "research/frontier-38-owner-30-alpha-batch-3-5a.md"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u3.json"
    content_sha256: "90e7c5a6bccf4d7f8d584794273ee5d119140e657f3b02c2eb025f7ba4ca24b2"
  precheck: pass
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.1.2, printed p. 102, formula (3.1.12) (the error-function form of the cumulative solution, for the half-line indicator)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152, formula (6.37)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Theorem 1.1 and equation (1.1.12), pp. 5–6"
---

## Example

Assume Countable Choice. Let $n=1$ and let $f=\mathbf 1_{(a,b)}$ for real $a<b$. Then
$f\in L^p(\mathbb R)$ for every $1\le p\le\infty$ and, for every $t>0$ and
$x\in\mathbb R$,
$$H_tf(x)=\Phi\!\Bigl(\frac{b-x}{\sqrt{2t}}\Bigr)-\Phi\!\Bigl(\frac{a-x}{\sqrt{2t}}\Bigr),$$
where $\Phi(u)=(2\pi)^{-1/2}\int_{-\infty}^{u}e^{-s^2/2}\,ds$ is the standard
normal distribution function. In particular $H_tf$ is $C^\infty$ on
$\mathbb R$ and strictly positive at every point for every $t>0$, while $f$ is
discontinuous.

## Facts & Assumptions

**Given:** Countable Choice, real $a<b$, $t>0$ and $x\in\mathbb R$.

[A1] Countable Choice is the hypothesis carried by the evolution and change-of-variables suppliers below ([[def-countable-choice]]).

[F1] For $t>0$ the heat kernel is $\Gamma(z,t)=(4\pi t)^{-1/2}e^{-z^2/(4t)}>0$, with unit mass ([[def-heat-kernel]], [[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F2] The indicator of a measurable set is measurable ([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]]), so $f=\mathbf 1_{(a,b)}$ is bounded and measurable, and for bounded measurable data $H_tf$ is the everywhere-defined absolutely convergent convolution $x\mapsto\int_{\mathbb R}\Gamma(x-y,t)f(y)\,dy$ ([[def-heat-evolution-of-initial-data]]); for $1\le p<\infty$ the class $H_tf$ also obeys the finite-$p$ theory ([[thm-heat-cauchy-solution-for-lp-data]]).

[F3] For a $C^1$ diffeomorphism $T:U\to V$ of open sets and nonnegative measurable $\psi$, $\int_V\psi(y)\,dy=\int_U\psi(T(s))|\det DT(s)|\,ds$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F4] $\int_{-\infty}^{\infty}e^{-u^2}\,du=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F5] The standard normal density $\varphi(s)=(2\pi)^{-1/2}e^{-s^2/2}$ is $C^\infty$ on $\mathbb R$: it is a scalar multiple of the composite of the quadratic map with the exponential, which is $C^\infty$ by [[thm-derivative-of-exponential]] and [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]].

[F6] For continuous real $\psi$ on an interval $I$ with at least two elements and $0\in I$, the function $G(u)=\int_0^u\psi(s)\,ds$ is differentiable with $G'=\psi$ ([[cor-primitives-of-a-continuous-function]], existence clause).

## Verification

**Proof technique:** direct.

1.1 Membership and setup: by [F2] the class $f=\mathbf 1_{(a,b)}$ is bounded and measurable with $\int_{\mathbb R}|f|^p=b-a$ for every $1\le p<\infty$ and $\|f\|_\infty=1$, so $f$ lies in every $L^p(\mathbb R)$, $1\le p\le\infty$; $H_tf$ is the everywhere-defined representative $H_tf(x)=(4\pi t)^{-1/2}\int_a^be^{-(x-y)^2/(4t)}\,dy$ of [F2]. [A1, F2, given, algebra]

1.2 Smoothness and strict positivity of $\Phi$: for every real $u$ the identity $\Phi(u)=\frac12+\int_0^u\varphi(s)\,ds$ holds with $\varphi$ as in [F5], because $\varphi$ is even and has total mass $\sqrt{2\pi}(2\pi)^{-1/2}=1$ by [F4]; the fundamental theorem [F6] gives $\Phi'=\varphi>0$ for every real $u$, while [F5] and induction give $\Phi^{(m)}=\varphi^{(m-1)}$ for every $m\ge1$, so $\Phi$ is $C^\infty$ and strictly increasing on $\mathbb R$. [F4, F5, F6, given, algebra]

2.1 Substitution: the map $s\mapsto y=x+\sqrt{2t}\,s$ is a $C^1$ diffeomorphism of $\mathbb R$ onto itself with $dy=\sqrt{2t}\,ds$ and $(x-y)^2/(4t)=s^2/2$, so the nonnegative-function substitution [F3] turns the interval $a<y<b$ into $(a-x)/\sqrt{2t}<s<(b-x)/\sqrt{2t}$ and gives $H_tf(x)=(4\pi t)^{-1/2}\sqrt{2t}\int_{(a-x)/\sqrt{2t}}^{(b-x)/\sqrt{2t}}e^{-s^2/2}\,ds=\Phi\bigl((b-x)/\sqrt{2t}\bigr)-\Phi\bigl((a-x)/\sqrt{2t}\bigr)$, since $(4\pi t)^{-1/2}\sqrt{2t}=(2\pi)^{-1/2}$. [step 1.1, F1, F3, given, algebra]

2.2 Consequences: since $a<b$ implies $(a-x)/\sqrt{2t}<(b-x)/\sqrt{2t}$, strict monotonicity of $\Phi$ in step 1.2 gives $H_tf(x)=\Phi(\cdot)-\Phi(\cdot)>0$ at every $x$, and the affine maps $x\mapsto(a-x)/\sqrt{2t}$ and $x\mapsto(b-x)/\sqrt{2t}$ are $C^\infty$, so the composite $H_tf$ is $C^\infty$ on $\mathbb R$ by the closure of smooth maps under composition in [F5]; the indicator $f$ is discontinuous at $a$ and $b$. [step 1.2, F5, given, algebra]

3.1 Steps 1.1, 2.1 and 2.2 give the membership $f\in L^p$ for all $1\le p\le\infty$, the displayed difference-of-Gaussian-tails formula, strict positivity of $H_tf$ at every point of every positive time, and smoothness of $H_tf$ despite the discontinuity of $f$. [step 1.1, step 2.1, step 2.2, given] ∎
