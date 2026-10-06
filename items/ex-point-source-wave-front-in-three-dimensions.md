---
id: ex-point-source-wave-front-in-three-dimensions
kind: example
title: "A point source produces a uniform expanding sphere"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
proof_strategy: direct
deps: [thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, lem-wave-formulas-attain-the-cauchy-data, def-spherical-mean-of-space-dependent-data, lem-sphere-and-ball-measures-scale, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-countable-choice, thm-linear-change-of-variables-for-lebesgue-measure, thm-heine-cantor-metric, cor-euclidean-closed-balls-and-spheres-are-compact, lem-first-moment-of-the-unit-sphere-vanishes, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, lem-smooth-bump-between-concentric-euclidean-balls, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
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
      locator: "§9.1.1–9.1.2, printed pp. 281–283: the sphere integral (9.1.4) and the interpretation as a wave front"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A (UC Berkeley, 19 March 2024)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "Chapter 7, printed pp. 108–110: the forward cone-supported kernel $\\delta_0(t^2-|x|^2)$ and its surface measure"
---


## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$ and fix $t>0$. Choose a nonnegative $\rho\in C_c^\infty(B_1(0))$ with $\int\rho=1$ (normalise a nonnegative bump from [[lem-smooth-bump-between-concentric-euclidean-balls]]), and put $\rho_\varepsilon(y):=\varepsilon^{-3}\rho(y/\varepsilon)$. Then $\rho_\varepsilon$ is a smooth unit-mass velocity datum supported in $B_\varepsilon(0)$, and the Kirchhoff solution with $u_0=0$ is $u_\varepsilon(x,t)=t\,M_{\rho_\varepsilon}(x,ct)$. As $\varepsilon\downarrow0$, for every continuous test function $\varphi$,
$$\int_{\mathbb R^3}\varphi(x)\,u_\varepsilon(x,t)\,dx\longrightarrow t\,\frac{1}{4\pi}\int_{S^2}\varphi(ct\omega)\,d\sigma(\omega),$$
so the limiting mass spreads uniformly over the sphere of radius $ct$: the point source at the origin produces, at time $t$, the uniform probability measure on the expanding sphere, scaled by $t$. Equivalently the limiting surface density is $t/(4\pi c^2t^2)$ per unit area, whose total against the area $4\pi c^2t^2$ is $t$.

## Facts & Assumptions

**Given:** Countable Choice, $c>0$, $t>0$, a nonnegative $\rho\in C_c^\infty(B_1(0))$ with unit integral, the rescaled datum $\rho_\varepsilon(y)=\varepsilon^{-3}\rho(y/\varepsilon)$, and a continuous test function $\varphi$.

[F1] With $u_0=0$ the Kirchhoff solution is $u_\varepsilon(x,t)=t\,M_{\rho_\varepsilon}(x,ct)$, a $C^2$ solution attaining the data ([[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]], [[lem-wave-formulas-attain-the-cauchy-data]]).

[F2] The spherical mean is the normalised sphere integral, $M_{\rho_\varepsilon}(x,ct)=\frac{1}{4\pi c^2t^2}\int_{\partial B_{ct}(x)}\rho_\varepsilon(y)\,dS(y)$ ([[def-spherical-mean-of-space-dependent-data]], [[lem-sphere-and-ball-measures-scale]] with $\omega_2=4\pi$).

[F3] For integrable $F$ on the product of a compact set with $\mathbb R^3$, the order of integration may be interchanged ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] The map $\Psi(y):=\int_{\partial B_{ct}(y)}\varphi\,dS$ is continuous near $0$: parameterizing it as $(ct)^2\int_{S^2}\varphi(y+ct\omega)\,d\sigma(\omega)$, uniform continuity of $\varphi$ on a compact ball gives continuity. Also $\int\rho_\varepsilon=1$ by linear change of variables and $\left|\int\rho_\varepsilon(y)\Psi(y)dy-\Psi(0)\right|\le\sup_{|y|\le\varepsilon}|\Psi(y)-\Psi(0)|\to0$; the sphere scaling at $y=0$ is [[lem-sphere-and-ball-measures-scale]]. The change of variables and compactness and uniform-continuity inputs are [[thm-linear-change-of-variables-for-lebesgue-measure]], [[cor-euclidean-closed-balls-and-spheres-are-compact]] and [[thm-heine-cantor-metric]], respectively.

## Verification

1.1 Fubini on a fixed product. By [F1], $I_\varepsilon:=\int\varphi(x)u_\varepsilon(x,t)dx=\frac{t}{4\pi}\int_{\mathbb R^3}\int_{S^2}\varphi(x)\rho_\varepsilon(x+ct\omega)\,d\sigma(\omega)dx$. The integrand vanishes unless $|x|\le ct+\varepsilon$, where $\varphi$ is bounded; the absolute integrand is bounded by $C\|\rho_\varepsilon\|_\infty\mathbf 1_{\overline B_{ct+\varepsilon}(0)\times S^2}$, with $C=\sup_{|x|\le ct+\varepsilon}|\varphi(x)|<\infty$. This majorant is integrable because the product rectangle has finite measure. Thus [F3] applies to the fixed product $\mathbb R^3\times S^2$. Set $y=x+ct\omega$ in the inner Euclidean integral, then reflect $\omega\mapsto-\omega$ using [[lem-first-moment-of-the-unit-sphere-vanishes]]. This gives $I_\varepsilon=\frac{t}{4\pi}\int\rho_\varepsilon(y)\int_{S^2}\varphi(y+ct\omega)\,d\sigma(\omega)dy=\frac{t}{4\pi c^2t^2}\int\rho_\varepsilon(y)\Psi(y)dy$, with the last equality supplied by sphere-measure scaling [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]. [F1, F2, F3, F4, algebra]


2.1 By [F4], $\int\rho_\varepsilon\Psi\to\Psi(0)$. Therefore $I_\varepsilon\to\frac{t}{4\pi c^2t^2}\int_{\partial B_{ct}(0)}\varphi\,dS=\frac{t}{4\pi}\int_{S^2}\varphi(ct\omega)\,d\sigma(\omega)$. The limiting measure has total mass $t$ and constant surface density $t/(4\pi c^2t^2)$; dividing the measure by $t$ gives the uniform probability measure on that sphere. [F4, step 1.1, algebra] ∎
