---
id: def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
kind: definition
title: Fundamental solution for the positive operator minus Laplacian
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §2.6 equations (2.12)–(2.13), printed p. 33
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: §5.3 equations (5.22)–(5.26), printed pp. 117–118
status: published
origin: pipeline
proof_strategy: direct
deps: ["def-fundamental-solution-of-a-constant-coefficient-operator", "def-polar-surface-measure-on-the-unit-sphere", "lem-euclidean-chart-measure-agrees-with-polar-surface-measure", "def-countable-choice", "thm-polar-coordinates-formula-for-lebesgue-measure", "lem-euclidean-balls-have-positive-finite-lebesgue-measure", "cor-volume-of-the-unit-n-ball", "def-regular-distribution-from-a-locally-integrable-function", "def-distributional-derivative", "def-dirac-delta-and-its-derivatives", "def-laplacian-of-a-c2-function", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null"]
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume Countable Choice and $n\ge2$. With $\omega_{n-1}=|S^{n-1}|>0$ in the published chart/polar convention, set $\Phi(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ for $n\ge3$ and $\Phi(x)=-(2\pi)^{-1}\log|x|$ for $n=2$, $x\ne0$. Extend it as a locally integrable function at the pole. The one-dimensional analogue is $-\tfrac12|x|$; the subsequent $n\ge2$ Green theory does not silently include it.

## Definition

The kernel candidate for the operator $-\Delta$ is
$$\Phi_n(x)=\begin{cases}\dfrac{|x|^{2-n}}{(n-2)\omega_{n-1}},&n\ge3,\\[4pt]-\dfrac{1}{2\pi}\log|x|,&n=2,\end{cases}\qquad x\ne0.$$
Its value at $0$ may be assigned arbitrarily; the resulting measurable function is interpreted through its locally integrable class. Here $\omega_{n-1}$ is the chart surface measure, which agrees with the polar measure $\sigma$. In dimension one put $\Phi_1(x)=-|x|/2$. This fixes the positive-minus-Laplacian sign convention; the later distributional theorem proves $-\Delta\Phi_n=\delta_0$ for $n\ge2$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, let $n\ge2$, and use the published chart/polar convention for surface measure and Lebesgue polar coordinates. The one-dimensional profile is considered separately.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] The chart surface measure agrees with the polar measure and satisfies $|S^{n-1}|=n|B_1|$. ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F2] Every Euclidean ball of positive radius has positive finite Lebesgue measure under Countable Choice. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F3] The unit ball volume is $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$, hence $|B_1|=\pi$ in dimension two. ([[cor-volume-of-the-unit-n-ball]]).

[F4] For nonnegative Borel $q$, polar integration gives $\int_{\mathbb R^n}q(x)\,dx=\int_0^\infty\int_{S^{n-1}}q(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F5] A distribution $E$ is a fundamental solution of a constant-coefficient operator $L$ when $LE=\delta_0$. ([[def-fundamental-solution-of-a-constant-coefficient-operator]]).

[F6] A locally integrable function defines the regular functional $\langle u_f,\varphi\rangle=\int f\varphi$. ([[def-regular-distribution-from-a-locally-integrable-function]]).

[F7] Distributional second derivatives act by the signed test derivative formula. ([[def-distributional-derivative]]).

[F8] The Dirac distribution satisfies $\delta_0(\varphi)=\varphi(0)$. ([[def-dirac-delta-and-its-derivatives]]).

[F9] The Laplacian is the divergence of the gradient, with $\Delta f=\sum_i\partial_i^2f$. ([[def-laplacian-of-a-c2-function]]).

[F10] Under Countable Choice, every singleton in $\mathbb R^n$ is Lebesgue null. ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], $\omega_{n-1}=n|B_1|$ is finite and strictly positive. In dimension two, [F3] gives $|B_1|=\pi$, so $\omega_1=2\pi$ and the logarithmic coefficient in the Statement is exactly $1/\omega_1$. The operator sign is $L=-\Delta$ using the definition [F9]. This uses the Countable Choice assumption [A1] through the measure convention. [given, A1, F1, F2, F3, F9]

1.2 In dimension one, $\int_{-R}^{R}|\Phi_1(x)|\,dx=R^2/2$, so $\Phi_1$ is locally integrable. For a test $\varphi$, [F7] gives $\langle-\Phi_1'',\varphi\rangle=-\int_{\mathbb R}\Phi_1(x)\varphi''(x)\,dx$. The slopes of $\Phi_1$ are $+1/2$ to the left of zero and $-1/2$ to the right; integrating by parts separately on the two half-lines, the compact-support endpoint terms vanish and $\int_{\mathbb R}\Phi_1\varphi''=-\varphi(0)$, so the negative integral equals $\varphi(0)=\delta_0(\varphi)$ by [F8]. Thus $-\Phi_1''=\delta_0$ and [F5] identifies it as the one-dimensional fundamental-solution analogue for $L=-d^2/dx^2$. [given, F5, F6, F7, F8, algebra]

2.1 Let $0<R\le1$. For $n\ge3$, [F4] gives $\int_{B_R}|\Phi_n(x)|\,dx=\frac1{n-2}\int_0^R r\,dr=\frac{R^2}{2(n-2)}<\infty$. For $n=2$, using $\omega_1=2\pi$ from step 1.1, it gives $\int_{B_R}|\Phi_2(x)|\,dx=\int_0^R r(-\log r)\,dr=-\frac{R^2}{2}\log R+\frac{R^2}{4}<\infty$. The polar integration use [F4] also assumes [A1]. [step 1.1, A1, F4]

3.1 The formulas are continuous away from zero, so they are integrable on every compact set avoiding the pole. Step 2.1 proves integrability in a neighborhood of the pole; hence $\Phi_n\in L^1_{\mathrm{loc}}(\mathbb R^n)$. By [F10], changing its value at the single point zero does not change its almost-everywhere class, and [F6] defines the corresponding regular functional. [step 2.1, F6, F10]

4.1 The zero-dimensional case is outside the stated $n\ge2$ kernel and has no unit-sphere convention used here. The polar endpoint $r=0$ is included as an improper integral in step 2.1; away from zero the kernel is smooth. Countable Choice is used only through [F1], [F2], and [F4]; no full Axiom of Choice is used. [step 1.1, step 1.2, step 2.1, step 3.1, A1, cases] ∎

## Source notes

Hunter §2.6 equations (2.12)–(2.13), printed p. 33; Teschl §5.3 equations (5.22)–(5.26), printed pp. 117–118. The one-dimensional formula is checked directly by its slope jump; for $n\ge2$ the distributional Dirac identity is proved later rather than assumed in this definition.
