---
id: lem-nrqmx-yukawa-resolvent-kernel
kind: lemma
domain: mathematics
library: mathematics
title: Yukawa kernel of the free resolvent in three dimensions
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - thm-nrqmx-free-laplacian-form-domain
  - thm-plancherel
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-l-one-l-two-agreement-of-fourier-transform
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - lem-schwartz-space-is-dense-in-l-two
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-nrqmx-free-laplacian-form-domain: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms: mathematical-premise
  thm-l-one-l-two-agreement-of-fourier-transform: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Phan Thanh Nam, Functional Analysis II, lecture notes, Winter 2020-2021,
        Ludwig-Maximilians-Universität München
      url: https://www.math.lmu.de/~nam/LectureNotesFA2021.pdf
      locator: "Chapter 3, §3.3, printed pp.45-47: Fourier-side free resolvent and
        three-dimensional Yukawa kernel."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice and Countable Choice. On
$L^2(\mathbb R^3;\mathbb C)$ use
$\widehat f(\xi)=\int e^{-2\pi i x\cdot\xi}f(x)\,dx$ and the unitary
extension $\mathcal F_2$. For $\kappa>0$, let
$$G_\kappa(x)=\frac{e^{-\kappa|x|}}{4\pi|x|}\quad(x\ne0),$$
with any value at $x=0$. Then $G_\kappa\in L^1\cap L^2$, and
$$\widehat G_\kappa(\xi)=\frac1{4\pi^2|\xi|^2+\kappa^2}.$$
Consequently convolution by $G_\kappa$ is the bounded operator
$(-\Delta+\kappa^2)^{-1}$ on $L^2$, with its convolution integral interpreted
in the usual almost-everywhere $L^2$ sense.

## Statement references

[[thm-nrqmx-free-laplacian-form-domain]]

[[thm-plancherel]]

## Facts & Assumptions

**Given:** Choice and Countable Choice, the $2\pi$ Fourier convention, and
$\kappa>0$.

[A1] The Fourier transform extends unitarily to $L^2$ and maps weak derivatives
to multiplication by $2\pi i\xi_j$; the free operator is multiplication by
$4\pi^2|\xi|^2$ in Fourier space
([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-plancherel]],
[[thm-nrqmx-free-laplacian-form-domain]]).

[F1] The polar-coordinate formula for Lebesgue measure gives, for radial
$h(x)=h_0(|x|)\in L^1$ and $\rho=|\xi|>0$,
$\widehat h(\xi)=\frac{2}{\rho}\int_0^\infty r h_0(r)\sin(2\pi\rho r)\,dr$;
at $\xi=0$ it gives $4\pi\int_0^\infty r^2h_0(r)\,dr$
([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F2] Tonelli/Fubini applies to nonnegative or integrable functions on the
completed Euclidean product, and Schwartz functions are dense in $L^2$
([[thm-tonelli-and-fubini-for-completed-product-measures]],
[[lem-schwartz-space-is-dense-in-l-two]]).

[F3] Translations preserve Lebesgue measure
([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F4] For $h\in L^1\cap L^2$, its integral Fourier transform represents its
Plancherel transform almost everywhere; equivalently, their regular tempered
distributions agree under the fixed $2\pi$ convention
([[thm-l-one-l-two-agreement-of-fourier-transform]],
[[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).

## Proof

**Given:** [A1], [F1], [F2], [F3], [F4], and $\kappa>0$.

1.1 Spherical coordinates give $$\|G_\kappa\|_1=\int_0^\infty r e^{-\kappa r}\,dr=\kappa^{-2},\qquad \|G_\kappa\|_2^2=\frac1{4\pi}\int_0^\infty e^{-2\kappa r}\,dr =\frac1{8\pi\kappa}.$$ Thus both norms are finite; the point value at the origin does not affect the $L^p$ class. [given, algebra]

2.1 For $\rho=|\xi|>0$, [F1] and the elementary integral $\int_0^\infty e^{-\kappa r}\sin(ar)\,dr=a/(\kappa^2+a^2)$ for $a>0$ give $$\widehat G_\kappa(\xi)=\frac1{2\pi\rho}\int_0^\infty e^{-\kappa r}\sin(2\pi\rho r)\,dr =\frac1{\kappa^2+4\pi^2\rho^2}.$$ At $\xi=0$, direct integration gives $\widehat G_\kappa(0)=\int_0^\infty r e^{-\kappa r}\,dr=\kappa^{-2}$, the same formula. [F1, step 1.1, algebra]

2.2 Put $M=\|G_\kappa\|_1>0$ and $A(x)=\int G_\kappa(y)|f(x-y)|^2dy$. Tonelli and translation invariance [F2, F3] give $\int A(x)dx=M\|f\|_2^2$, so $A(x)<\infty$ for almost every $x$. For each such $x$, $\int G_\kappa(y)|f(x-y)|dy\le(M+A(x))/2<\infty$ by $2t\le1+t^2$, so define $b(x)=\int G_\kappa(y)f(x-y)dy$. Expanding the nonnegative integral $\int G_\kappa(y)|f(x-y)-b(x)/M|^2dy$ gives $0\le A(x)-|b(x)|^2/M$, hence $|b(x)|^2\le M A(x)$. Integrating yields $\|G_\kappa*f\|_2^2\le M^2\|f\|_2^2$. Therefore convolution is defined almost everywhere and gives a bounded operator on $L^2$. [F2, F3, step 1.1, algebra]

3.1 If $f$ is Schwartz, then $G_\kappa*f\in L^1$ by Fubini and translation invariance [F3], and lies in $L^2$ by step 2.2. Fubini in the ordinary Fourier integral gives the integral-transform identity $\widehat{G_\kappa*f}=\widehat G_\kappa\widehat f$. Since $G_\kappa*f\in L^1\cap L^2$, [F4] identifies its integral transform with its Plancherel transform almost everywhere; the same interface identifies $\widehat f$ with $\mathcal F_2f$ almost everywhere. Thus $\mathcal F_2(G_\kappa*f)=\widehat G_\kappa\mathcal F_2f$ as $L^2$ classes. Since $|\widehat G_\kappa(\xi)|\le\|G_\kappa\|_1$ by the integral definition of the Fourier transform, multiplication by $\widehat G_\kappa$ is bounded on $L^2$. Schwartz density and boundedness of convolution therefore extend the identity to all $f\in L^2$. [A1, F2, F3, F4, step 1.1, step 2.2, step 2.1, algebra]

4.1 By [A1], $-\Delta$ is the multiplier $4\pi^2|\xi|^2$. Therefore $(4\pi^2|\xi|^2+\kappa^2)^{-1}$ is the bounded inverse multiplier of $-\Delta+\kappa^2$; its product with the latter multiplier is $1$, and its range lies in the operator domain because $4\pi^2|\xi|^2/(4\pi^2|\xi|^2+\kappa^2)\le1$. Step 3.1 identifies the same multiplier for convolution, so convolution is exactly $(-\Delta+\kappa^2)^{-1}$. [A1, step 2.1, step 3.1, algebra] ∎
