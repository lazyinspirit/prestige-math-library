---
id: lem-truncated-riesz-kernel-potential-bounded-on-lp
kind: lemma
title: "The truncated Riesz kernel is bounded on $L^p$ of a bounded set"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [thm-minkowski-integral-inequality, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-polar-coordinates-formula-for-lebesgue-measure, def-polar-surface-measure-on-the-unit-sphere, lem-euclidean-balls-have-positive-finite-lebesgue-measure, prop-measure-monotonicity, def-measure, def-l-p-space-as-a-quotient-by-null-functions, def-measurable-function-between-measurable-spaces, def-john-domain-and-john-constant, thm-intermediate-value, def-countable-choice, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-tonelli-and-fubini-for-completed-product-measures, thm-completion-measurable-functions-have-base-measurable-representatives, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-lebesgue-measure-under-dilations-and-reflections]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 5 §5.2, Lemma 5.15 and proof, printed p. 128, for the finite-measure potential bound; the present truncated-kernel argument uses Minkowski."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.8, display (3.14) and the Holder passage, printed pp. 68-69."
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge2$, let $z_0\in\mathbb R^n$, $\rho>0$, and let $\Omega\subseteq B(z_0,\rho)$ be measurable, $1\le p<\infty$ and $f\in L^p(\Omega;\mathbb K)$. Then $\big\|\int_\Omega|x-y|^{1-n}|f(y)|\,dy\big\|_{L^p(\Omega)}\le C(n)\,\rho\,\|f\|_{L^p(\Omega)}$. In particular, for a bounded John domain the John condition gives $\operatorname{diam}\Omega\le c|\Omega|^{1/n}$, so the bound holds with coefficient $C(n,c_J)|\Omega|^{1/n}$.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge2$; $z_0\in\mathbb R^n$, $\rho>0$; a measurable $\Omega\subseteq B(z_0,\rho)$; $1\le p<\infty$; $f\in L^p(\Omega;\mathbb K)$; and, for the final claim, a bounded John domain $\Omega$ with distinguished point $x_0$ and admissible constant $c_J\ge1$.

[F1] The polar surface measure is $\sigma(E)=n\lambda_n(\{r\omega:\omega\in E,\ 0<r\le1\})$ on Borel $E\subseteq S^{n-1}$ ([[def-polar-surface-measure-on-the-unit-sphere]]).

[F2] Polar coordinates: $\int_{\mathbb R^n}h\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}h(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$ for nonnegative Borel $h$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] Every Euclidean ball has positive finite Lebesgue measure ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F4] Minkowski's integral inequality: $\|\int_Y|F(\cdot,y)|\,d\nu(y)\|_{L^p(X)}\le\int_Y\|F(\cdot,y)\|_{L^p(X)}\,d\nu(y)$ for measurable $F$ with the right side finite ([[thm-minkowski-integral-inequality]]).

[F5] Tonelli-Fubini on completed sigma-finite products gives measurability and equality of the nonnegative iterated integrals ([[thm-tonelli-and-fubini-for-completed-product-measures]]). Lebesgue translation invariance gives $\|g(\cdot-z)\|_p=\|g\|_p$ ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F6] A measure is countably additive on pairwise disjoint measurable sets, and monotone under inclusion ([[def-measure]], [[prop-measure-monotonicity]]).

[F7] A John domain with admissible constant $c_J$ and point $x_0$ admits, for every $x\in\Omega$, a curve from $x$ to $x_0$ with $\operatorname{dist}(\gamma(t),\partial\Omega)\ge c_J^{-1}|x-\gamma(t)|$ ([[def-john-domain-and-john-constant]]).

[F9] Measurability is preimage measurability, and $L^p$ consists of almost-everywhere classes of measurable functions with finite norm ([[def-measurable-function-between-measurable-spaces]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F10] Countable Choice, used by the cited measure-theoretic interfaces ([[def-countable-choice]]).

[F11] Under Countable Choice, every completion-measurable real function has a base-measurable representative equal to it almost everywhere ([[thm-completion-measurable-functions-have-base-measurable-representatives]]); Lebesgue measure is the completion of Borel Lebesgue measure ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]). Applying this componentwise gives a finite Borel representative of every $L^p(\mathbb R^n;\mathbb K)$ class.

[F12] Under Countable Choice, reflection in the origin preserves Lebesgue measurability and measure ([[thm-lebesgue-measure-under-dilations-and-reflections]]).

## Proof

**Proof technique:** direct.

1.1 The truncated kernel has finite mass. Put $k(z):=|z|^{1-n}\mathbf 1_{B(0,2\rho)}(z)$ for $z\ne0$ and $k(0):=0$. By [F2] applied to the nonnegative Borel function $k$ and by [F1], [F3], $\|k\|_{L^1(\mathbb R^n)}=\int_{S^{n-1}}\int_0^{2\rho}t^{1-n}t^{n-1}\,dt\,d\sigma(\omega)=2\rho\,\sigma(S^{n-1})=2\rho\, n\,\lambda_n(B(0,1))=:C_0(n)\rho$, so $\|k\|_1$ is finite and equals a dimension-only multiple of $\rho$. [F1, F2, F3, F10, algebra]

1.2 John-domain volume control. Put $a:=\operatorname{dist}(x_0,\partial\Omega)>0$. The ball $B(x_0,a)$ lies in $\Omega$: a segment from $x_0$ to any point outside $\Omega$ first meets the boundary, so an outside point cannot be closer than $a$. Polar coordinates [F2] therefore give $|\Omega|\ge \sigma(S^{n-1})a^n/n$. Evaluating [F7] at the endpoint of the curve gives $|x-x_0|\le c_Ja$ for every $x\in\Omega$, hence $\operatorname{diam}\Omega\le2c_Ja\le2c_J(n/\sigma(S^{n-1}))^{1/n}|\Omega|^{1/n}$. [F2, F6, F7, algebra]

2.1 The convolution bound. For $g\in L^p(\mathbb R^n;\mathbb K)$, choose a finite Borel representative $g_0$ by [F11] (replace any infinite values on a Borel null set by zero). The function $F_0(x,z)=k(z)g_0(x-z)$ is Borel, hence measurable for the product of the Lebesgue sigma-algebras. The two Lebesgue spaces are sigma-finite, being exhausted by bounded balls of finite measure [F2, F3]. Translation invariance [F5] and step 1.1 give $\int\|F_0(\cdot,z)\|_p\,dz=\int k(z)\|g_0(\cdot-z)\|_p\,dz=\|k\|_1\|g\|_p<\infty$. Minkowski [F4] therefore shows that the absolute integral is finite almost everywhere and $\|Tg_0\|_p\le\|k\|_1\|g\|_p$, where $Tg_0(x)=\int k(z)g_0(x-z)\,dz$. This also defines $Tg$ for any Lebesgue representative $g$: for each fixed $x$, the exceptional set of $z$ is the translate and reflection $x-N$ of the null set $N$ where $g\ne g_0$, and has measure zero by reflection invariance [F12] and translation invariance [F5]. Thus the section integrals agree wherever finite, and the measurable almost-everywhere representative $Tg_0$ supplies $\|Tg\|_p\le\|k\|_1\|g\|_p$. [F2, F3, F4, F5, F11, F12, step 1.1, algebra]

2.2 In particular step 1.2 gives $\operatorname{diam}\Omega\le2c(n,c_J)|\Omega|^{1/n}$ with $c(n,c_J):=c_J(n/\sigma(S^{n-1}))^{1/n}$; taking a supremum does not require that a farthest point exist. [step 1.2, algebra]

3.1 The bound on $\Omega$ for a set inside a ball. Extend $f$ by zero to $\mathbb R^n$ and put $g:=|f|\mathbf 1_\Omega$, a measurable function with $\|g\|_{L^p(\mathbb R^n)}=\|f\|_{L^p(\Omega)}$ by [F9]. By translation and reflection invariance [F5, F12], the substitution $y=x-z$ gives $Tg(x)=\int k(x-y)g(y)\,dy$ wherever finite. Since $x,y\in\Omega\subseteq B(z_0,\rho)$ implies $|x-y|\le2\rho$, for almost every $x\in\Omega$ one has $Tg(x)=\int_\Omega|x-y|^{1-n}|f(y)|\,dy$: the kernel truncation in the convolution is inactive exactly on the pairs with $|x-y|<2\rho$. Hence, by step 2.1, $\big\|\int_\Omega|x-y|^{1-n}|f(y)|\,dy\big\|_{L^p(\Omega)}\le\|Tg\|_{L^p(\mathbb R^n)}\le\|k\|_{L^1}\|f\|_{L^p(\Omega)}\le C(n)\rho\|f\|_{L^p(\Omega)}$. [F5, F9, F12, step 2.1, given, algebra]

4.1 The John-domain form of the bound. Apply step 3.1 with $z_0:=x_0$ and $\rho:=2c(n,c_J)|\Omega|^{1/n}$, which is admissible by step 2.2 because then $\Omega\subseteq B(x_0,\rho)$. The resulting coefficient is $C(n)\rho=C(n,c_J)|\Omega|^{1/n}$. [step 3.1, step 2.2, algebra] ∎

## Source notes

Kinnunen proves Lemma 5.15 by Holder and Fubini, using the kernel integral estimate of Lemma 5.14; the proof above instead uses Minkowski's integral inequality for the truncated radial kernel, which gives the bound on every $L^p$ with the single constant $\|k\|_1=C(n)\rho$ and avoids interpolation. The John-domain volume estimate follows from the interior ball at the distinguished point and the endpoint John inequality.
