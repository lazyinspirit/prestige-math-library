---
id: thm-forced-three-dimensional-kirchhoff-duhamel-formula
kind: theorem
title: "The forced three-dimensional version as a retarded potential"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
proof_strategy: direct
deps: [thm-wave-duhamel-principle, thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, lem-wave-formulas-attain-the-cauchy-data, def-spherical-mean-of-space-dependent-data, lem-sphere-and-ball-measures-scale, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-countable-choice, cor-volume-of-the-unit-n-ball, thm-real-gamma-functional-equation, cor-real-gamma-one-half-is-root-pi, thm-polar-coordinates-formula-for-lebesgue-measure, thm-algebra-of-derivatives, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, cor-euclidean-closed-balls-and-spheres-are-compact, thm-extreme-value-metric]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.2, printed p. 284, time-delayed potential (9.1.13) with (9.1.11)–(9.1.12)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed p. 172, Corollary 7.3 and the retarded form (7.11)–(7.13)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1.1, printed pp. 211–212: the wave equation with an external force term"
---


## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$ and let $f$ be continuous on $\mathbb R^3\times[0,\infty)$ with $f(\cdot,t)\in C^2(\mathbb R^3)$ and compactly supported in $x$ for each $t$. Assume that $\nabla_xf$ and every second spatial partial derivative $\partial_{x_i}\partial_{x_j}f$ are jointly continuous in $(x,t)$; no time derivatives of $f$ are required. Then the Duhamel construction gives a classical solution of $u_{tt}=c^2\Delta u+f$ with zero Cauchy data, namely
$$u(x,t)=\frac{1}{4\pi c^2}\int_{B_{ct}(x)}\frac{f\bigl(y,\,t-|y-x|/c\bigr)}{|y-x|}\,dy\qquad(t>0),$$
the retarded potential over the backward light cone of $(x,t)$. In particular the value uses $f$ only on $\{(y,s):0\le s\le t,\ |y-x|=c(t-s)\}$, and the radius factor is $1/(4\pi c^2)$.

## Facts & Assumptions

**Given:** Countable Choice, $c>0$, a source $f$ of the stated class, and the launched Kirchhoff solutions with zero displacement.

[F1] For admissible sources the Duhamel principle gives the forced solution as $u(x,t)=\int_0^tW[f(\cdot,s)](x,t-s)\,ds$, where $W[g]$ is the homogeneous solution with zero displacement and velocity datum $g$ ([[thm-wave-duhamel-principle]]).

[F2] In three dimensions $W[g](x,\tau)=\tau M_g(x,c\tau)$, and the mean is the normalised sphere integral with $|S^2|=\omega_2=4\pi$: $M_g(x,\rho)=\frac{1}{\omega_2}\int_{S^2}g(x+\rho z)\,d\sigma(z)=\frac{1}{4\pi c^2\tau^2}\int_{\partial B_{c\tau}(x)}g\,dS$, where $\omega_2=3V_3=4\pi$ follows from $V_3=\pi^{3/2}/\Gamma(5/2)$ and the Gamma values ([[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]], [[lem-wave-formulas-attain-the-cauchy-data]], [[lem-sphere-and-ball-measures-scale]], [[cor-volume-of-the-unit-n-ball]], [[thm-real-gamma-functional-equation]], [[cor-real-gamma-one-half-is-root-pi]]).

[F3] Under Countable Choice, $\int_{\mathbb R^3}F\,d\lambda_3=\int_0^\infty\int_{S^2}F(\rho z)\rho^{2}\,d\sigma(z)\,d\rho$ for every Borel $F\ge0$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F4] Sums, products, constant multiples of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]); the substitution $\rho=c(t-s)$ is an orientation-reversing change of the integration variable.

## Proof

1.1 Duhamel form. By [F1] the solution is $u(x,t)=\int_0^tW[f(\cdot,s)](x,t-s)\,ds$, and by [F2] the launched solution is $W[f(\cdot,s)](x,\tau)=\tau M_{f(\cdot,s)}(x,c\tau)$; substituting $\tau=t-s$ gives $u(x,t)=\int_0^t(t-s)\,M_{f(\cdot,s)}\bigl(x,c(t-s)\bigr)\,ds$. [F1, F2]

1.2 Sphere-integral form. Writing the mean over $S^2$ as the normalised integral with $\omega_2=4\pi$ from [F2], $u(x,t)=\frac{1}{4\pi}\int_0^t(t-s)\int_{S^2}f\bigl(x+c(t-s)z,\,s\bigr)\,d\sigma(z)\,ds$; substituting $\rho=c(t-s)$, so $s=t-\rho/c$, $(t-s)=\rho/c$ and $ds=-d\rho/c$, gives $u(x,t)=\frac{1}{4\pi c^2}\int_0^{ct}\rho\int_{S^2}f\bigl(x+\rho z,\,t-\rho/c\bigr)\,d\sigma(z)\,d\rho$. [F2, F4, algebra]

2.1 Ball form. The source is bounded on the compact backward cone by [[thm-extreme-value-metric]] and [[cor-euclidean-closed-balls-and-spheres-are-compact]]. The weight $|y-x|^{-1}$ is integrable on $B_{ct}(x)$, since [F3] gives its integral as $4\pi\int_0^{ct}\rho\,d\rho<\infty$. Give the integrand any value at $y=x$, a null singleton. Apply [F3] separately to the positive and negative parts after translating by $x$ ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]). This gives $\int_{B_{ct}(x)}f(y,t-|y-x|/c)|y-x|^{-1}dy=\int_0^{ct}\rho\int_{S^2}f(x+\rho z,t-\rho/c)\,d\sigma(z)\,d\rho$. Multiplication by $1/(4\pi c^2)$ identifies this with step 1.2. [F3, step 1.2, algebra]

3.1 The integrand is evaluated at $|y-x|=c(t-s)$ with $s=t-|y-x|/c\in[0,t]$, that is on the backward light cone of $(x,t)$, and the coefficient is $1/(4\pi c^2)$; this is the retarded potential. [F1, algebra] ∎
