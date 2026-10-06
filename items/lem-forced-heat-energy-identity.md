---
id: lem-forced-heat-energy-identity
kind: lemma
title: Energy identity for the forced Dirichlet heat equation
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-parabolic-cylinder-and-parabolic-boundary
  - thm-dominated-convergence
  - def-countable-choice
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - cor-first-green-identity-on-a-bounded-c-one-domain
  - thm-differentiation-under-the-integral-sign
  - thm-ftc-second-part
  - thm-heine-borel-rn
  - def-metric-compactness
  - thm-extreme-value-metric
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
      locator: "§6.4, printed pp. 160–161, (6.67)–(6.68), with the forcing term retained"
---

## Statement

Assume Countable Choice. Let $n\ge2$ and let $\Omega\subset\mathbb R^n$ be a
bounded $C^1$ domain in the class of the first Green identity
([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]), let $T>0$,
and let real $u\in C^{2,1}(\overline\Omega\times[0,T])$ solve
$u_t-\Delta u=f$ in $\Omega\times(0,T]$ with $f\in C(\overline\Omega\times[0,T])$ and $u=0$ on the
lateral boundary $\partial\Omega\times[0,T]$. Then for $0<t<T$,
$$\frac12\frac d{dt}\int_\Omega u(x,t)^2\,dx+\int_\Omega|Du(x,t)|^2\,dx=\int_\Omega f(x,t)u(x,t)\,dx ,$$
and integrating in $t$ gives the energy balance
$$\frac12\int_\Omega u(x,t_2)^2dx-\frac12\int_\Omega u(x,t_1)^2dx+\int_{t_1}^{t_2}\!\int_\Omega|Du|^2\,dx\,dt=\int_{t_1}^{t_2}\!\int_\Omega fu\,dx\,dt$$
for $0<t_1<t_2<T$. The identity carries exactly the Countable Choice assumption
of the Green identity supplier.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, a bounded $C^1$ domain $\Omega$, $T>0$, $u\in C^{2,1}(\overline\Omega\times[0,T])$ with $u_t-\Delta u=f$ in $\Omega\times(0,T]$, $f$ continuous, and $u=0$ on $\partial\Omega\times[0,T]$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] Differentiation under the integral sign: under the domination and measurability hypotheses of the theorem, $F(t)=\int f(x,t)\,d\mu(x)$ is differentiable with $F'=\int\partial_tf\,d\mu$ ([[thm-differentiation-under-the-integral-sign]]).

[F2] Green's first identity: for real $u\in C^2(\overline\Omega)$ and $v\in C^1(\overline\Omega)$, $\int_\Omega(v\Delta u+Du\cdot Dv)\,dx=\int_{\partial\Omega}v\partial_\nu u\,dS$ ([[cor-first-green-identity-on-a-bounded-c-one-domain]]).

[F3] If $G$ is differentiable on $[a,b]$ with integrable derivative $G'$, then $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F4] The closed cylinder $\overline\Omega\times[0,T]$ is a closed and bounded subset of $\mathbb R^{n+1}$, hence compact ([[thm-heine-borel-rn]], [[def-metric-compactness]]), and every continuous real function on it is bounded ([[thm-extreme-value-metric]]).

[F5] The domain class, the outward normal $\nu$, the surface element $dS$ and the conventions $C^1(\overline\Omega)$, $C^2(\overline\Omega)$ are those of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]].

## Proof

**Given:** Countable Choice, $n\ge2$, a bounded $C^1$ domain $\Omega$ in the Green-identity class, $T>0$, real $u\in C^{2,1}(\overline\Omega\times[0,T])$ with $u_t-\Delta u=f$ in $\Omega\times(0,T]$ for continuous $f$, and $u=0$ on $\partial\Omega\times[0,T]$.

1.1 Define $E(t):=\frac12\int_\Omega u(x,t)^2\,dx$ for $t\in(0,T)$. The maps $u$ and $u_t$ are continuous on the compact cylinder by [F4], hence bounded there by constants $M,M_1<\infty$; the bounded domain has finite measure since it lies in a bounded box ([[thm-lebesgue-measure-of-a-box-of-every-kind]]); therefore $x\mapsto u(x,t)^2$ is integrable on $\Omega$ for every $t$, the derivative $\partial_tu(x,t)^2=2u(x,t)u_t(x,t)$ is bounded by $2MM_1$, and [F1] applies with the constant majorant, giving that $E$ is differentiable on $(0,T)$ with $E'(t)=\frac12\int_\Omega2u(x,t)u_t(x,t)\,dx=\int_\Omega u(x,t)u_t(x,t)\,dx$. [A1, F1, F4, given]

2.1 Substituting the equation $u_t=\Delta u+f$ from the hypothesis into step 1.1 gives $E'(t)=\int_\Omega u\Delta u\,dx+\int_\Omega fu\,dx$; [F2] with $v=u$ reads $\int_\Omega(u\Delta u+|Du|^2)\,dx=\int_{\partial\Omega}u\,\partial_\nu u\,dS$, and the boundary term vanishes because $u=0$ on $\partial\Omega\times[0,T]$, so $\int_\Omega u\Delta u\,dx=-\int_\Omega|Du(x,t)|^2dx$; hence $\frac12\frac d{dt}\int_\Omega u^2+\int_\Omega|Du|^2=\int_\Omega fu$ for every $t\in(0,T)$. [step 1.1, F2, F5, given]

3.1 The three functions of $t$ in the identity of step 2.1 are continuous on $(0,T)$: $E'$ is given there by the integral of the continuous function $u\Delta u+fu$, while $t\mapsto\int_\Omega|Du|^2dx$ and $t\mapsto\int_\Omega fu\,dx$ are integrals of continuous functions on the compact cylinder [F4], and dominated convergence ([[thm-dominated-convergence]]) with these uniform bounds proves their continuity; integrating the identity from $t_1$ to $t_2$ and applying [F3] to the energy term yields the balance $\frac12\int_\Omega u(x,t_2)^2dx-\frac12\int_\Omega u(x,t_1)^2dx+\int_{t_1}^{t_2}\int_\Omega|Du|^2dx\,dt=\int_{t_1}^{t_2}\int_\Omega fu\,dx\,dt$ for $0<t_1<t_2<T$. [step 2.1, F3, F4, given] ∎ 