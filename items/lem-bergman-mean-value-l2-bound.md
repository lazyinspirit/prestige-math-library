---
id: lem-bergman-mean-value-l2-bound
kind: lemma
title: The mean-value $L^2$ bound for holomorphic functions on a polydisc
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 0
proof_strategy: direct
deps:
  - def-holomorphic-function-in-several-complex-variables
  - cor-complex-differentiability-implies-continuity
  - prop-holomorphic-functions-are-continuous-and-separately-holomorphic
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - cor-holomorphic-mean-value-property
  - rem-complex-euclidean-space-dictionary
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - def-polar-surface-measure-on-the-unit-sphere
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - def-countable-choice
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: "§1.2, Exercise 1.2.10, printed p. 26 (PDF p. 25): the mean-value formula over a polydisc centered at its center; the text poses this as an exercise and gives no proof, which is supplied locally here."
    - title: Zbigniew Błocki, The Bergman Kernel and Metric
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: "§1, printed p. 1 (PDF p. 1): the opening subharmonic mean-value inequality for |f|² on Euclidean balls; this independently supports the one-variable local estimate, while the polydisc product step is proved here."
---

## Facts & Assumptions

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ is the principle defined by [[def-countable-choice]]. It is the only choice assumption below; the polar-measure and product-Lebesgue suppliers used here state it explicitly.

[F1] If $g$ is holomorphic on $D(b,R)$ and $0<s<R$, then $g(b)=(2\pi)^{-1}\int_0^{2\pi}g(b+s e^{i\theta})\,d\theta$ ([[cor-holomorphic-mean-value-property]]).

[F2] The chart surface measure of $S^1$ agrees with its polar surface measure; under the angular chart $\omega=e^{i\theta}$ its density is $d\theta$, so $\sigma(S^1)=2\pi$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F3] For every nonnegative Borel $h$ on $\mathbb R^2$, polar coordinates give $\int h\,d\lambda_2=\int_0^\infty\int_{S^1}h(s\omega)s\,d\sigma(\omega)\,ds$ ([[def-polar-surface-measure-on-the-unit-sphere]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F4] Lebesgue measure is translation invariant on measurable sets ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F5] Every nonnegative measurable function is the increasing limit of nonnegative simple functions, and increasing limits pass through the Lebesgue integral; thus the setwise translation invariance in [F4] extends from indicators and simple functions to nonnegative Borel integrals ([[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]], [[thm-monotone-convergence-for-the-integral]]).

[F6] Borel sets in a finite Euclidean product are product-measurable; Tonelli permits iterated integration of nonnegative product-measurable functions, and the finite product of planar Lebesgue measures agrees with Euclidean Lebesgue measure under $\mathbb R^{2m}\cong(\mathbb R^2)^m$ ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).

[F7] A holomorphic function is continuous, hence $|f|^2$ is Borel ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]); the one-variable case is also supplied by [[cor-complex-differentiability-implies-continuity]].

[F8] Restricting the complex linear derivative in the definition of holomorphy to a coordinate line shows that every coordinate slice of a holomorphic function is holomorphic ([[def-holomorphic-function-in-several-complex-variables]]).

[F9] A polydisc is the product of its coordinate discs, and $\mathbb C^m$ is identified with $\mathbb R^{2m}$ with the corresponding Lebesgue convention ([[def-balls-and-polydiscs-in-complex-euclidean-space]], [[rem-complex-euclidean-space-dictionary]]).

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $m\ge1$, let $\Omega\subseteq\mathbb C^m$ be open, let $a\in\Omega$, and let $\mathbf r=(r_0,\ldots,r_{m-1})$ be a polyradius with each $r_k>0$ such that $\overline\Delta_{\mathbf r}(a)\subseteq\Omega$. If $f$ is holomorphic on $\Omega$, then

$$|f(a)|^2\le\frac{1}{\lambda_{2m}(\Delta_{\mathbf r}(a))}\int_{\Delta_{\mathbf r}(a)}|f|^2\,d\lambda_{2m},\qquad \lambda_{2m}(\Delta_{\mathbf r}(a))=\pi^m\prod_{k<m}r_k^2,$$

where $\lambda_{2m}$ is Lebesgue measure under $\mathbb C^m\cong\mathbb R^{2m}$. In particular, for a common radius $r$ the coefficient is $(\pi r^2)^{-m}$.

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}_\omega$, $m\ge1$, the open set $\Omega$, the point $a$, the positive polyradius $\mathbf r$, and the holomorphic function $f$ from the statement.

1.1 For a one-variable holomorphic $g$ on $D(b,\rho)$ and each $0<s<\rho$, [F1] gives the circular mean of $g$ as $g(b)$. Expanding the nonnegative integral of $|g(b+s e^{i\theta})-g(b)|^2$ and using that mean identity yields $|g(b)|^2\le(2\pi)^{-1}\int_0^{2\pi}|g(b+s e^{i\theta})|^2\,d\theta$. [F1, algebra]

2.1 By [F2], the angular measure in step 1.1 is the polar surface measure with total mass $2\pi$. The function $h(x)=|g(b+x)|^2$ for $x\in D(0,\rho)$ and $h(x)=0$ otherwise is nonnegative Borel by [F7]. Apply [F3] to $h$, using translation invariance [F4]–[F5]. Integrating the circle inequality in step 1.1 against $2s\,ds/\rho^2$ for $0<s<\rho$ gives $|g(b)|^2\le\frac{1}{\pi\rho^2}\int_{D(b,\rho)}|g(z)|^2\,d\lambda_2(z)$; the same polar formula applied to the indicator of the disc gives $\lambda_2(D(b,\rho))=\pi\rho^2$. [step 1.1, F2, F3, F4, F5, F7, A1, algebra]

3.1 Let $D_k=D(a_k,r_k)$. By [F6] and [F9], the measure of their product is the product of their planar measures, so step 2.1 gives $\lambda_{2m}(\Delta_{\mathbf r}(a))=\prod_{k<m}\pi r_k^2$. [step 2.1, F6, F9, A1]

4.1 For $0\le k\le m$, let $I_k$ be the integral of $|f(z_0,\ldots,z_{k-1},a_k,\ldots,a_{m-1})|^2$ over $D_0\times\cdots\times D_{k-1}$ with product planar measure, with $I_0=|f(a)|^2$. For each fixed tuple of the first $k$ coordinates, [F8] shows that the resulting one-variable slice is holomorphic on $D(a_k,r_k)$. The estimate of step 2.1 applies to that slice; integrating over the preceding discs and using [F6] gives $I_k\le(\pi r_k^2)^{-1}I_{k+1}$. Iterating for $k=0,\ldots,m-1$ and using [F6], [F7] and [F9] to identify $I_m$ with the integral in the statement gives $|f(a)|^2\le(\prod_{k<m}\pi r_k^2)^{-1}\int_{\Delta_{\mathbf r}(a)}|f|^2\,d\lambda_{2m}$. Step 3.1 identifies the coefficient with $1/\lambda_{2m}(\Delta_{\mathbf r}(a))$, completing the proof. [step 2.1, step 3.1, F6, F7, F8, F9, A1, given] ∎
