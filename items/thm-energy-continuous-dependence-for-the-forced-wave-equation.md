---
id: thm-energy-continuous-dependence-for-the-forced-wave-equation
kind: theorem
title: "Energy continuous dependence for the forced wave equation"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-countable-choice, lem-local-wave-energy-conservation-law, cor-cauchy-schwarz-inequality-for-l-two, def-wave-equation-cauchy-data-and-wave-speed, def-wave-energy-and-energy-flux, thm-monotonicity-from-the-derivative, thm-chain-rule-for-total-derivatives, thm-real-power-continuity-and-derivatives, thm-ftc-first-part, thm-continuous-implies-integrable, thm-darboux-equals-riemann, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed pp. 176–178, (7.27) and Theorem 7.12: homogeneous energy and cone estimates; the forced estimate here is derived from the explicitly assumed identity for E prime"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.5, printed p. 293, Remark 9.2.2: the energy approach also gives stability of solutions"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1.1, printed p. 212: the $L^2$-energy estimate obtained from the differential energy identity"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$,
$T>0$ and let $u\in C^2$ solve the forced equation $\Box_cu=f$ either on
$\mathbb R^n\times[0,T)$ or on $U\times[0,T)$ with $U$ a bounded $C^1$ domain
and homogeneous Dirichlet boundary data; assume the total energy
$E(t)=\int_\Omega e(x,t)\,dx$ (with $\Omega=\mathbb R^n$, respectively
$\Omega=U$) is finite and continuous on $[0,T)$, differentiable on $(0,T)$ with
the energy identity

$$E'(t)=(f(t),u_t(t)):=\int_\Omega f(x,t)u_t(x,t)\,dx,$$

which is what differentiating the energy and inserting
[[lem-local-wave-energy-conservation-law]] with vanishing boundary flux gives,
and assume that $t\mapsto\|f(t)\|_2$ is continuous on $[0,T)$
([[cor-cauchy-schwarz-inequality-for-l-two]]). Then for every $t\in[0,T)$

$$\sqrt{2E(t)}\le\sqrt{2E(0)}+\int_0^t\|f(s)\|_2\,ds,\qquad\text{hence}\qquad E(t)^{1/2}\le E(0)^{1/2}+\int_0^t\|f(s)\|_2\,ds .$$

This is stability of the classical solution with the sharp $L^1_tL^2_x$ forcing
constant, not only conservation; the second display uses
$1/\sqrt2\le1$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a finite continuous energy
$E:[0,T)\to[0,\infty)$ with $E'(t)=(f(t),u_t(t))$ on $(0,T)$ and
$E(t)=\tfrac12\|u_t(t)\|_2^2+\tfrac{c^2}2\|Du(t)\|_2^2$; a continuous map
$t\mapsto\|f(t)\|_2$. Write $w(t):=\|f(t)\|_2$.

[F1] Cauchy–Schwarz in $L^2$: $|\int gh\,d\mu|\le\|g\|_2\|h\|_2$ for
$g,h\in\mathcal L^2(\mu)$.
([[cor-cauchy-schwarz-inequality-for-l-two]])

[F2] Monotonicity from the derivative: a function continuous on an interval
that is differentiable at every interior point with derivative $\le0$ there is
nonincreasing.
([[thm-monotonicity-from-the-derivative]])

[F3] Chain rule for composites of totally differentiable maps.
([[thm-chain-rule-for-total-derivatives]])

[F4] For every real $\alpha$, $s\mapsto s^\alpha$ is continuous on
$(0,\infty)$ and differentiable there with derivative $\alpha s^{\alpha-1}$.
([[thm-real-power-continuity-and-derivatives]])

[F5] First fundamental theorem: the integral function of a function
continuous at a point has derivative equal to the integrand there.
([[thm-ftc-first-part]])

[F6] Continuous functions on a closed bounded interval are integrable, and on
such an interval Darboux, Riemann and Lebesgue integrals of a continuous
function agree.
([[thm-continuous-implies-integrable]],
[[thm-darboux-equals-riemann]],
[[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]])

## Proof

1.1 The regularised energy: for $\varepsilon>0$ define $\varphi_\varepsilon(t):=\sqrt{2E(t)+\varepsilon^2}$ on $[0,T)$. The radicand is positive, so by the chain rule [F3] and the power rule [F4] with $\alpha=\tfrac12$, the function $\varphi_\varepsilon$ is continuous on $[0,T)$ and differentiable on $(0,T)$ with $\varphi_\varepsilon'(t)=\frac{2E'(t)}{2\sqrt{2E(t)+\varepsilon^2}}=\frac{(f(t),u_t(t))}{\varphi_\varepsilon(t)}$. [given, F3, F4, algebra]

2.1 An upper bound for the derivative: by Cauchy–Schwarz [F1], $(f(t),u_t(t))\le|(f(t),u_t(t))|\le\|f(t)\|_2\|u_t(t)\|_2$, and since $2E(t)=\|u_t(t)\|_2^2+c^2\|Du(t)\|_2^2\ge\|u_t(t)\|_2^2$ we have $\|u_t(t)\|_2\le\sqrt{2E(t)}\le\varphi_\varepsilon(t)$; hence $\varphi_\varepsilon'(t)\le\|f(t)\|_2=w(t)$ for every $t\in(0,T)$. [given, step 1.1, F1, algebra]

3.1 Monotonicity of the defect: the function $W(t):=\int_0^tw(s)\,ds$ is, by the continuity of $w$ and [F6], the integral function of a continuous integrand, so by [F5] it is differentiable with $W'=w$; hence $\psi:=\varphi_\varepsilon-W$ is continuous on $[0,T)$, differentiable on $(0,T)$, and $\psi'=\varphi_\varepsilon'-w\le0$ there by step 2.1; [F2] makes $\psi$ nonincreasing, so for every $t\in[0,T)$ one has $\varphi_\varepsilon(t)\le\varphi_\varepsilon(0)+\int_0^tw(s)\,ds=\sqrt{2E(0)+\varepsilon^2}+\int_0^t\|f(s)\|_2\,ds$. [given, step 2.1, F2, F5, F6, algebra]

4.1 Letting $\varepsilon\downarrow0$: by the continuity of the square root [F4] and $0\le E(t)<\infty$, $\varphi_\varepsilon(t)\to\sqrt{2E(t)}$ and $\varphi_\varepsilon(0)\to\sqrt{2E(0)}$, so the inequality of step 3.1 passes to the limit and gives $\sqrt{2E(t)}\le\sqrt{2E(0)}+\int_0^t\|f(s)\|_2\,ds$; dividing by $\sqrt2\ge1$ gives $E(t)^{1/2}\le E(0)^{1/2}+\int_0^t\|f(s)\|_2\,ds$. [given, step 3.1, F4, algebra] ∎ 