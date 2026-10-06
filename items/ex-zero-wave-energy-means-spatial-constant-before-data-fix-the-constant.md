---
id: ex-zero-wave-energy-means-spatial-constant-before-data-fix-the-constant
kind: example
title: "Zero wave energy means a spatial constant, fixed by the displacement datum"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-countable-choice, thm-conservation-of-total-wave-energy, cor-energy-uniqueness-for-the-wave-cauchy-problem, lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets, def-wave-energy-and-energy-flux, def-wave-equation-cauchy-data-and-wave-speed, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, cor-zero-derivative-implies-constant, lem-sphere-and-ball-measures-scale]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed pp. 177-178: the energy vanishes only on $(u_t,Du)$; the displacement datum fixes the constant"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.3, printed pp. 290-292: uniqueness conclusions build on $\\nabla u=u_t=0$"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice. Let $c>0$ and let
$u$ be a classical solution of the homogeneous equation $\Box_cu=0$ on
$\mathbb R^n\times(0,T)$ with Cauchy data $(u_0,u_1)$ and differentiable displacement $u_0$, so $Du_0$ in the initial-energy hypothesis is defined, with
$E(t)=E(0)$ for every $t\in(0,T)$ — the sharp form of conservation in the
senses of [[thm-conservation-of-total-wave-energy]] — and with
$E(0)=\tfrac12\int_{\mathbb R^n}(u_1^2+c^2|Du_0|^2)\,dx=0$. Then $u_1=0$
and $Du_0=0$, so the displacement datum $u_0$ is constant on $\mathbb R^n$; the energy seminorm sees only $(u_t,Du)$ and
cannot fix that constant, and the evolution keeps it:
$u(\cdot,t)\equiv u_0$ for every $t$.

In particular every constant displacement with zero initial velocity,
$u(x,t)\equiv k$ for a fixed $k\in\mathbb R$, is a genuine classical solution
of zero energy. Thus "zero energy" is strictly weaker than "zero solution":
the displacement datum is what fixes the residual constant
([[cor-energy-uniqueness-for-the-wave-cauchy-problem]](ii)).

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a classical homogeneous solution $u$ with Cauchy data $(u_0,u_1)$ and differentiable displacement $u_0$, so $Du_0$ in the initial-energy hypothesis is defined, conserved total energy in the sharp form $E(t)=E(0)$ for $t\in(0,T)$ and $E(0)=\tfrac12\int(u_1^2+c^2|Du_0|^2)=0$; the density $e=\tfrac12(u_t^2+c^2|Du|^2)\ge0$ of [[def-wave-energy-and-energy-flux]].

[F1] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere; a continuous nonnegative function with vanishing integral vanishes identically. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F2] On an open convex set, a $C^1$ function with vanishing gradient is constant; $\mathbb R^n$ is convex. ([[lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets]])

[F3] In each setting of the conservation theorem the energy is constant on the interval; the hypothesis of this Example records the sharp form $E(t)=E(0)$ for all $t\in(0,T)$. ([[thm-conservation-of-total-wave-energy]])

[F4] A continuous function on an interval with vanishing derivative at every interior point is constant. ([[cor-zero-derivative-implies-constant]])

## Verification

1.1 Vanishing at positive times: sharp conservation gives $E(t)=E(0)=0$ for each $t\in(0,T)$. The nonnegative continuous density therefore vanishes everywhere by [F1], so $u_t(\cdot,t)=Du(\cdot,t)=0$. By [F2], each spatial slice is constant. [given, F1, F2, F3, algebra]

2.1 Time constancy and the data: for each fixed $x$, the function $t\mapsto u(x,t)$ has derivative zero on $(0,T)$, so [F4] makes it constant there. Together with step 1.1 this gives one constant $k$ on all space-time. The Cauchy limits then give $u_0(x)=k$ and $u_1(x)=0$ at every $x$, hence $Du_0=0$ and $u(\cdot,t)\equiv u_0$. This derives pointwise data vanishing without inferring it from an almost-everywhere statement at $t=0$. [given, step 1.1, F4, algebra]

3.1 The converse check: the constant displacement $u(x,t)\equiv k$ has $u_t=Du=0$, so $e\equiv0$ and $E\equiv0$, and $\Box_cu=0$ trivially; hence the zero-energy solutions are exactly the constant displacements, and that constant is precisely the initial displacement datum, which the energy cannot see. [given, step 2.1, algebra] ∎ 