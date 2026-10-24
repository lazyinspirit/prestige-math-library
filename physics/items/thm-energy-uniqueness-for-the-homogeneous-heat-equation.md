---
id: thm-energy-uniqueness-for-the-homogeneous-heat-equation
kind: theorem
title: Energy uniqueness for the homogeneous heat equation
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - cor-first-green-identity-on-a-bounded-c-one-domain
  - thm-differentiation-under-the-integral-sign
  - thm-monotonicity-from-the-derivative
  - def-laplacian-of-a-c2-function
  - def-countable-choice
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - def-metric-compactness
  - thm-dominated-convergence
proof_strategy: direct
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
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: '§6.4, printed p. 161, energy computation (6.68) $\frac{d}{dt}E(t)=\int u\Delta u=-\int|\nabla u|^2\le0$, uniqueness and stability'
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: 'Chapter 6, §6.1, printed p. 178 (the $L^2$ energy estimate)'
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§10.2 (energy/uniqueness for the heat equation)"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a
bounded $C^1$ domain (or belong to the specified finite piecewise $C^1$ class)
of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], let $T>0$,
and let $u\in C^{2,1}(\overline Q)$ solve $u_t-\Delta u=0$ in
$Q=\Omega\times(0,T]$ with $u=0$ on $\partial\Omega\times[0,T]$ and
$u(\cdot,0)=0$ on $\Omega$. Then $u\equiv0$ on $\overline Q$; equivalently, the
Dirichlet problem for the homogeneous heat equation is unique in this class by
the energy method. No backward-in-time or terminal-data uniqueness is claimed
here (the time-reversed function solves the backward heat equation, for which
the energy is nondecreasing rather than nonincreasing).

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, a bounded $C^1$ domain $\Omega$ in the Green-identity class, $T>0$, and $u\in C^{2,1}(\overline Q)$ with $u_t-\Delta u=0$ in $Q$, $u=0$ on $\partial\Omega\times[0,T]$ and $u(\cdot,0)=0$ on $\Omega$.

[A1] Countable Choice is the ambient hypothesis, carried by the Green identity supplier ([[def-countable-choice]]).

[F1] Differentiation under the integral sign with an integrable majorant ([[thm-differentiation-under-the-integral-sign]]).

[F2] Green's first identity: for real $u\in C^2(\overline\Omega)$ and $v\in C^1(\overline\Omega)$, $\int_\Omega(v\Delta u+Du\cdot Dv)\,dx=\int_{\partial\Omega}v\partial_\nu u\,dS$ ([[cor-first-green-identity-on-a-bounded-c-one-domain]]).

[F3] If a differentiable function has nonpositive derivative on an interval, it is nonincreasing there ([[thm-monotonicity-from-the-derivative]]).

[F4] $\Delta u=\sum_i\partial_i\partial_iu$ in the notation of [[def-laplacian-of-a-c2-function]], and the domain class and boundary conventions are those of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]].

[F5] The closed cylinder $\overline\Omega\times[0,T]$ is compact ([[thm-heine-borel-rn]], [[def-metric-compactness]]), and continuous functions on it are bounded and attain their extrema ([[thm-extreme-value-metric]]).

[F6] Dominated convergence ([[thm-dominated-convergence]]).

[F7] Every bounded open set has finite measure because it lies in a bounded box ([[thm-lebesgue-measure-of-a-box-of-every-kind]]). A nonnegative continuous function $g$ with zero integral on an open set vanishes everywhere: if $g(x_0)>0$, a small nondegenerate box $B$ inside that set has $g\ge g(x_0)/2$ on $B$, so $\int g\ge(g(x_0)/2)\lambda_n(B)>0$, a contradiction by the same box-volume formula.

## Proof

**Given:** $\mathrm{AC}_\omega$, a bounded $C^1$ domain $\Omega\subset\mathbb R^n$ with $n\ge2$, $T>0$, and $u\in C^{2,1}(\overline Q)$ with $u_t-\Delta u=0$ in $Q$, $u=0$ on $\partial\Omega\times[0,T]$, $u(\cdot,0)=0$ on $\Omega$.

1.1 Define $E(t):=\frac12\int_\Omega u(x,t)^2\,dx$ for $t\in[0,T]$. The maps $u$ and $u_t$ are continuous on the compact cylinder [F5], hence bounded by constants $M,M_1<\infty$, so [F1] applies with the constant majorant $2MM_1$ and gives $E'(t)=\int_\Omega u(x,t)u_t(x,t)\,dx$ for every $t\in(0,T)$; moreover $E$ is continuous on $[0,T]$, since for $t_k\to t$ the integrands $u(\cdot,t_k)^2$ converge pointwise to $u(\cdot,t)^2$ (continuity of $u$ on $\overline Q$) and are dominated by $4M^2$, so [F6] gives $E(t_k)\to E(t)$. [A1, F1, F5, F6, given]

2.1 Substituting $u_t=\Delta u$ into step 1.1 gives $E'(t)=\int_\Omega u\Delta u\,dx$; [F2] with $v=u$ reads $\int_\Omega(u\Delta u+|Du|^2)\,dx=\int_{\partial\Omega}u\,\partial_\nu u\,dS$, and the boundary term vanishes because $u=0$ on $\partial\Omega\times[0,T]$, so $E'(t)=-\int_\Omega|Du(x,t)|^2dx\le0$; hence $E$ is nonincreasing on $(0,T)$ by [F3], and since $E(0)=\frac12\int_\Omega u(x,0)^2dx=0$ by the zero initial datum, continuity from step 1.1 gives $E(t)\le0$ and hence $E\equiv0$ on $[0,T]$ because $E\ge0$. [step 1.1, F2, F3, F4, given]

3.1 For every $t$, $E(t)=0$ is the integral of the nonnegative continuous function $u(\cdot,t)^2$, so [F7] gives $u(x,t)=0$ for every $x\in\Omega$; by continuity of $u$ on $\overline Q$ this gives $u\equiv0$ on $\overline Q$. [step 2.1, F7, given]

4.1 If $u_1,u_2$ are two solutions in this class with the same zero initial and lateral data, their difference $w:=u_1-u_2$ again satisfies $w_t-\Delta w=0$ in $Q$, $w=0$ on $\partial\Omega\times[0,T]$ and $w(\cdot,0)=0$ on $\Omega$, so step 3.1 gives $w\equiv0$; the Dirichlet problem for the homogeneous heat equation is therefore unique in this class. This is exactly the forward-in-time direction: the argument uses $u(\cdot,0)=0$ and deduces vanishing for larger times, and no terminal data or backward uniqueness is used. [step 3.1, given] ∎ 