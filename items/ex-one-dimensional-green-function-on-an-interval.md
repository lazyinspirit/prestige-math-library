---
id: ex-one-dimensional-green-function-on-an-interval
kind: example
title: "One-dimensional Dirichlet Green kernel on an interval"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: "https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.4 Problem 5.21, printed p. 129 (PDF p. 142); this is an exercise prompt, not a supplied formula or proof"
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.6 equation (2.13), printed p. 33 (PDF p. 39), and the one-dimensional potential discussion, printed p. 40 (PDF p. 46)"
deps:
  - def-countable-choice
  - def-fundamental-solution-of-a-constant-coefficient-operator
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-max-min
  - def-test-function-space-d-of-an-open-set
  - def-distributional-derivative
  - def-dirac-delta-and-its-derivatives
  - thm-integration-by-parts
  - thm-continuous-implies-integrable
  - thm-additivity-over-subintervals
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-continuous-preimages-of-borel-sets-are-borel
  - def-borel-and-lebesgue-measurable-function-on-rn
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-locally-integrable-function-on-r-n
  - def-regular-distribution-from-a-locally-integrable-function
  - thm-locally-integrable-functions-embed-in-distributions
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice. For $a<b$ and $x,y\in(a,b)$, the one-dimensional Dirichlet kernel for $-d^2/dx^2$ is $G(x,y)=((\min\{x,y\}-a)(b-\max\{x,y\}))/(b-a)$. It is symmetric, nonnegative, vanishes at $a,b$, and its $x$-derivative has jump $\partial_xG(y+,y)-\partial_xG(y-,y)=-1$, so $-\partial_x^2G(\cdot,y)=\delta_y$ in $\mathcal D'(a,b)$. Its difference from $-|x-y|/2$ is affine in $x$. The stated Countable Choice assumption is used for the named Lebesgue-measure and regular-distribution interfaces below; no full Axiom of Choice is used.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, let $a<b$, fix $y\in(a,b)$, and put $L=b-a>0$. The differential operator is $-d^2/dx^2$.

[A1] Countable Choice is written $\mathrm{AC}_\omega$ ([[def-countable-choice]]). It enters through the Borel-to-Lebesgue, finite-interval measure, Riemann-to-Lebesgue, and published locally-integrable-to-distribution interfaces used in steps 2.2, 3.2 and 6.1. The piecewise slope and integration-by-parts calculations themselves make no choice.

[F1] For two real numbers the minimum and maximum select the lesser and greater values ([[def-max-min]]).

[F2] The one-dimensional normalized kernel is $\Phi_1(x)=-|x|/2$; the assigned Laplace definition separately verifies $-\Phi_1''=\delta_0$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]). A fundamental solution of $L$ is a distribution $E$ with $LE=\delta_0$, and its translated distribution has source $\delta_y$ ([[def-fundamental-solution-of-a-constant-coefficient-operator]]).

[F3] A test function on $(a,b)$ has compact support in that open interval, so its zero extension is smooth on $\mathbb R$ and it vanishes near both endpoints ([[def-test-function-space-d-of-an-open-set]]).

[F4] The distributional second derivative satisfies $\langle\partial_x^2T,\varphi\rangle=\langle T,\varphi''\rangle$ ([[def-distributional-derivative]]).

[F5] The Dirac distribution satisfies $\delta_y(\varphi)=\varphi(y)$ ([[def-dirac-delta-and-its-derivatives]]).

[F6] If $u,v$ are differentiable on a closed interval and their derivatives are integrable, integration by parts gives $\int u v'=[uv]-\int u'v$ ([[thm-integration-by-parts]]). The statement is real-valued; apply it to the real and imaginary parts of a complex test separately.

[F7] A continuous real function on a closed bounded interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

[F8] The Riemann integral is additive over adjacent subintervals ([[thm-additivity-over-subintervals]]).

[F9] Under $\mathrm{AC}_\omega$, every bounded Riemann-integrable function on a closed bounded interval is Lebesgue integrable there with the same integral ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F10] A continuous map has Borel preimages of Borel sets, and under $\mathrm{AC}_\omega$ Borel functions on $\mathbb R$ are Lebesgue measurable ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-borel-and-lebesgue-measurable-function-on-rn]]).

[F11] Under $\mathrm{AC}_\omega$, the interval $[a,b]$ is measurable and $\lambda_1([a,b])=b-a$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]). The nonnegative integral is monotone and positively homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F12] A measurable complex function is integrable when its absolute value has finite integral ([[def-integrable-real-and-complex-functions-and-their-integrals]]); local integrability is defined by finite absolute integrals on balls or, on an open set, on each compact subset ([[def-locally-integrable-function-on-r-n]], [[def-regular-distribution-from-a-locally-integrable-function]]).

[F13] A locally integrable function defines the regular functional $\langle u_f,\varphi\rangle=\int f\varphi$ ([[def-regular-distribution-from-a-locally-integrable-function]]).

[F14] Under $\mathrm{AC}_\omega$, this regular functional is a distribution ([[thm-locally-integrable-functions-embed-in-distributions]]).

## Proof

**Proof technique:** direct.

1.1 Let $G_y(x)=G(x,y)$ on $(a,b)$ and extend it by zero off $(a,b)$, including the endpoint values. By [F1], its branches on $[a,y]$ and $[y,b]$ are $(x-a)(b-y)/L$ and $(y-a)(b-x)/L$. They agree at $x=y$, both giving $(y-a)(b-y)/L$, and vanish at $a,b$, so the extension is continuous and compactly supported. Swapping $x,y$ leaves the min/max formula unchanged. Both factors are nonnegative on either branch, and their sum is at most $L$, so their product is at most $L^2/4$; hence $G_y$ is symmetric, nonnegative, bounded by $L/4$, and $G_y(y)>0$. [given, F1, algebra]

2.1 On $x<y$ and $x>y$, respectively, the affine branches from step 1.1 have one-sided derivatives $s_-:=\partial_xG(y-,y)=(b-y)/L$ and $s_+:=\partial_xG(y+,y)=-(y-a)/L$. Therefore $s_+-s_-=-((y-a)+(b-y))/L=-1$. [step 1.1, algebra]

2.2 The continuous compactly supported extension $G_y$ is Borel by [F10] and hence Lebesgue measurable under [A1]. It is supported in $[a,b]$ and bounded by $L/4$ by step 1.1. By [F11], $\int_{\mathbb R}|G_y|\,d\lambda_1\le(L/4)\lambda_1([a,b])=L^2/4<\infty$. Thus it is integrable and its restriction is locally integrable on $(a,b)$ by [F12] and monotonicity of the nonnegative integral. This is the exact measure-side use of $\mathrm{AC}_\omega$. [A1, F10, F11, F12, step 1.1, algebra]

3.1 By [F2], the one-dimensional free-space fundamental profile translated to $y$ is $-|x-y|/2$. For $x<y$, $G_y(x)+|x-y|/2$ is affine with slope $s_- -1/2$; for $x>y$ it is affine with slope $s_+ +1/2$. Step 2.1 makes those slopes equal, and step 1.1 gives continuity at $y$, so the two pieces form one affine function on $(a,b)$. [F2, step 1.1, step 2.1, algebra]

3.2 The locally integrable function $G_y$ defines the regular functional $T_y(\varphi)=\int_{(a,b)}G_y(x)\varphi(x)\,dx$ by [F13], and [F14] makes $T_y$ a distribution under $\mathrm{AC}_\omega$. No full Axiom of Choice is used. [A1, F13, F14, step 2.2]

4.1 Fix a real-valued $\varphi\in\mathcal D(a,b)$. By [F3], $\varphi$ vanishes near $a$. On $[a,y]$, apply [F6] first with $u=G_y,v=\varphi'$ and then with $u=s_-,v=\varphi$; the functions and derivatives involved are continuous and integrable by [F7]. This gives $\int_a^yG_y\varphi''=[G_y\varphi']_a^y-s_-[\varphi]_a^y=G_y(y)\varphi'(y)-s_-\varphi(y)$. [F3, F6, F7, step 3.2, step 2.1]

5.1 Since $\varphi$ also vanishes near $b$, the same two applications of [F6] on $[y,b]$, with slope $s_+$, give $\int_y^bG_y\varphi''=[G_y\varphi']_y^b-s_+[\varphi]_y^b=-G_y(y)\varphi'(y)+s_+\varphi(y)$. [F3, F6, F7, step 4.1, step 2.1]

6.1 By [F8], the two Riemann integrals from steps 4.1 and 5.1 sum to the Riemann integral on $[a,b]$; by [F9] and [A1], this equals the Lebesgue integral that gives $T_y(\varphi'')$, since $\varphi$ vanishes near the endpoints. The terms at $y$ cancel, and step 2.1 gives $T_y(\varphi'')=(s_+-s_-)\varphi(y)=-\varphi(y)$. Apply this real calculation to the real and imaginary parts of a complex test. By [F4], [F5] and [F13], $\langle-\partial_x^2T_y,\varphi\rangle=-\langle T_y,\varphi''\rangle=\varphi(y)=\langle\delta_y,\varphi\rangle$. Thus $-\partial_x^2G(\cdot,y)=\delta_y$ in $\mathcal D'(a,b)$. [A1, F4, F5, F8, F9, F13, step 2.1, step 4.1, step 5.1] ∎

## Source notes

Hunter, §2.6 equation (2.13), printed p. 33 (PDF p. 39), gives the free-space one-dimensional profile $\Gamma(x)=-|x|/2$; the discussion on printed p. 40 (PDF p. 46) writes the corresponding whole-line potential for $-u''=f$. Teschl, §5.4 Problem 5.21, printed p. 129 (PDF p. 142), asks the reader to find the Green function for an interval but supplies neither its formula nor a solution. The piecewise Dirichlet formula, its endpoint and symmetry checks, and the distributional jump computation above are derived directly; the sources supply context and normalization, not this proof.
