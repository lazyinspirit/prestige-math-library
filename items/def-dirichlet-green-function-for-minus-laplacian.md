---
id: def-dirichlet-green-function-for-minus-laplacian
kind: definition
title: Dirichlet Green function for minus Laplacian
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.4 equations (5.33)–(5.34), printed p.125; the text explicitly makes existence conditional on solvability of the harmonic Dirichlet problem"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf
      locator: "§2.8 Green-function definition and remarks (0)–(1), printed pp.44–45; Schmidt uses ΔF=δ₀ and a nonpositive Green function, so translate by Φ=−F and G_here=−G_Schmidt"
status: draft
origin: pipeline
proof_strategy: direct
deps:
  - def-countable-choice
  - def-distributional-harmonicity-and-poisson-equation-in-rn
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-regular-distribution-from-a-locally-integrable-function
  - lem-laplace-fundamental-solution-is-harmonic-off-its-pole
  - thm-distributional-differentiation-is-continuous-and-commutes
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-minus-laplacian-of-the-fundamental-solution-is-dirac
---

## Statement

Assume the Axiom of Countable Choice, written $\mathrm{AC}_\omega$, and let $n\ge2$. Let $\Omega\subset\mathbb R^n$ be a bounded domain, and use the kernel $\Phi$ fixed by [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]. A **Dirichlet Green function for $-\Delta$ on $\Omega$** is a function
$$G_\Omega:\{(x,y)\in\Omega\times\Omega:x\ne y\}\to\mathbb R$$
such that for each pole $y\in\Omega$ there is a harmonic function $H_y\in C^2(\Omega)\cap C(\overline\Omega)$ with
$$H_y(z)=\Phi(z-y)\quad(z\in\partial\Omega),\qquad G_\Omega(x,y)=\Phi(x-y)-H_y(x)\quad(x\in\Omega\setminus\{y\}).$$
For fixed $y$, $G_\Omega(\cdot,y)$ is harmonic away from $y$, extends continuously to $\overline\Omega\setminus\{y\}$, and has zero boundary trace. Its locally integrable representative defines $T_{G_\Omega(\cdot,y)}\in\mathcal D'(\Omega)$ and satisfies
$$-\Delta_xT_{G_\Omega(\cdot,y)}=\delta_y\quad\text{in }\mathcal D'(\Omega).$$
The definition is conditional: it applies only when such a corrector $H_y$ exists for every pole $y$; it asserts no existence for every bounded domain. No boundary smoothness is required for this definition.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, a bounded domain $\Omega$, and a family of correctors $H_y$ with the stated harmonicity, continuity, and boundary values.

[A1] $\mathrm{AC}_\omega$ says every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] The normalized kernel $\Phi$ is locally integrable and its value at its pole may be assigned arbitrarily ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F2] The kernel is smooth and harmonic away from its pole ([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]]).

[F3] For every $y\in\mathbb R^n$, $-\Delta_xT_{\Phi(\cdot-y)}=\delta_y$ in $\mathcal D'(\mathbb R^n)$ under $\mathrm{AC}_\omega$ ([[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]]).

[F4] If $f\in C^k(\Omega)$, then its regular distribution satisfies $\partial^\alpha T_f=T_{\partial^\alpha f}$ for $|\alpha|\le k$, under $\mathrm{AC}_\omega$ ([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F5] A locally integrable function defines its regular functional by integration ([[def-regular-distribution-from-a-locally-integrable-function]]).

[F6] Under Countable Choice, locally integrable functions embed as regular distributions in $\mathcal D'(\Omega)$ ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F7] The distributional Poisson equation $-\Delta T=F$ is an equality of distributions on the open set ([[def-distributional-harmonicity-and-poisson-equation-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 Fix $y\in\Omega$. On $\Omega\setminus\{y\}$, both $x\mapsto\Phi(x-y)$ and $H_y$ are harmonic by [F2] and the given corrector property, so their difference $G_\Omega(\cdot,y)$ is harmonic there. Since $\Phi(\cdot-y)$ is locally integrable by [F1] and $H_y\in C^2(\Omega)$ has its regular distribution by [F4], their difference is locally integrable on $\Omega$; choose any value at $y$, which does not affect its almost-everywhere class or regular distribution. [given, F1, F2, F4, F5, F6, algebra]

1.2 Because $y$ is an interior point, some ball $B_r(y)$ lies in $\Omega$, and hence every boundary point is distinct from $y$. The function $x\mapsto\Phi(x-y)$ is continuous on $\overline\Omega\setminus\{y\}$ by its smoothness away from the pole, and $H_y$ is continuous there by hypothesis. Thus their difference gives a continuous extension of $G_\Omega(\cdot,y)$ to $\overline\Omega\setminus\{y\}$. On $\partial\Omega$ the two terms agree, so this extension has boundary value zero. No boundary chart or normal is involved. [given, F1, F2, algebra]

2.1 Regard the locally integrable functions in step 1.1 as regular distributions using [F5]–[F6]. By [F4] and $\Delta H_y=0$, $-\Delta T_{H_y}=T_{-\Delta H_y}=0$ on $\Omega$. The restriction of [F3] from $\mathbb R^n$ to test functions in $C_c^\infty(\Omega)$ gives $-\Delta T_{\Phi(\cdot-y)}=\delta_y$ on $\Omega$. Linearity of the regular functional and of distributional differentiation, together with $G_\Omega(\cdot,y)=\Phi(\cdot-y)-H_y$ almost everywhere, therefore gives $-\Delta T_{G_\Omega(\cdot,y)}=\delta_y$ in the sense of [F7]. [A1, F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 The argument includes both kernel cases already fixed by [F1], namely the logarithmic kernel when $n=2$ and the power kernel when $n\ge3$; $n=1$ and dimension zero are excluded by the stated hypothesis. It proves properties of a Green function only after the correctors are given and does not prove that correctors exist. Countable Choice is used through [F3], [F4], and [F6], exactly the named distributional embedding and classical-derivative interfaces; no full Axiom of Choice is used. There is no iff assertion. [A1, F1, F3, F4, F6, given, cases] $\square$

## Source notes

Teschl §5.4, equations (5.33)–(5.34), defines the harmonic correction with boundary values equal to the fundamental solution and forms the Green function by subtraction; the surrounding text explicitly defines existence only when the harmonic Dirichlet problem is solvable for every pole. Schmidt §2.8, printed pp.44–45, defines the Green function through harmonic cancellation and zero boundary limits, then notes that the singularity has the same type as the fundamental solution. Schmidt uses $\Delta F=\delta_0$ and a nonpositive Green function; the convention here is obtained by $\Phi=-F$ and $G_\Omega=-G_{\rm Schmidt}$. The distributional point-source assertion here is proved from the already established kernel identity rather than inferred from a citation or from the word “Green function.”
