---
id: cex-wave-energy-need-not-be-conserved-through-an-open-boundary
kind: counterexample
title: "Wave energy need not be conserved through an open boundary"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [thm-conservation-of-total-wave-energy, def-wave-energy-and-energy-flux, lem-local-wave-energy-conservation-law, def-wave-equation-cauchy-data-and-wave-speed, thm-chain-rule-for-total-derivatives, thm-differentiation-under-the-integral-sign, thm-ftc-second-part, thm-darboux-equals-riemann, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, cor-zero-derivative-implies-constant, def-support-and-compactly-supported-riemann-integral-in-rn, def-directional-and-partial-derivatives, def-countable-choice, thm-algebra-of-derivatives, thm-clairaut-schwarz-mixed-partials]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.7.1, printed pp. 87-90, (2.7.3)-(2.7.6) and §2.7 Problems, Problem 1: boundary flux and the homogeneous Dirichlet/Neumann half-line conservation (homogeneous specialization)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§4.4, printed pp. 88-90, (4.23)-(4.27): the wave equation on the line and travelling profiles leaving an interval"
verification:
  precheck: pass
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]) for the Lebesgue and Riemann integral bridge used below. The claim refuted is that the total energy of a classical wave solution is
automatically constant whenever the domain is bounded, without any hypothesis
on the boundary flux. Witness: let $c>0$, let $\Omega=(0,1)\subseteq\mathbb R$
and let $F\in C_c^2(\mathbb R)$ have $F'$ nonzero somewhere in $(0,1)$; put

$$u(x,t):=F(x-ct),$$

the right-moving packet. Then $u$ solves $\Box_cu=0$ on
$\mathbb R\times\mathbb R$, but its energy in the fixed interval,

$$E_\Omega(t)=c^2\int_0^1F'(x-ct)^2\,dx,$$

equals $c^2\int_0^1F'(x)^2\,dx>0$ at $t=0$ and is $0$ for all sufficiently
large $t$, once the packet has left the interval. The decrease is exactly the
boundary flux: with $q=-c^2u_tu_x=c^3F'^2$,

$$\frac{d}{dt}E_\Omega(t)=q(0,t)-q(1,t),$$

so the energy lost through the right endpoint is accounted for, and
[[thm-conservation-of-total-wave-energy]] may not be invoked on a domain with
an open boundary without the vanishing-flux hypothesis.

**Homogeneous-boundary comparison on the half-line.** If
$v\in C^2([0,\infty)\times I)$ solves $v_{tt}-c^2v_{xx}=0$ on an open time
interval $I$, and for each compact $J\subseteq I$ there is $R_J<\infty$ with
$v_x=v_t=0$ for $x\ge R_J$ and $t\in J$, then
$E_+(t):=\frac12\int_0^\infty(v_t^2+c^2v_x^2)\,dx$ is constant under either
$v(0,t)=0$ for every $t\in I$ or $v_x(0,t)=0$ for every $t\in I$ (the
homogeneous Dirichlet and Neumann comparisons for the linear case of the cited
problem). No nonlinear potential term is asserted.

## Facts & Assumptions

**Given:** Countable Choice; $c>0$, $\Omega=(0,1)$, $F\in C_c^2(\mathbb R)$ with $F'$ nonzero somewhere in $(0,1)$, $u(x,t)=F(x-ct)$, and the fields $e=\tfrac12(u_t^2+c^2u_x^2)$, $q=-c^2u_tu_x$ of [[def-wave-energy-and-energy-flux]]; for the last part a solution $v$ on $[0,\infty)\times I$ with the stated support hypothesis.

[F1] The local balance: $\partial_te+\partial_xq=fu_t$, hence $\partial_te=-\partial_xq$ for a classical solution. ([[lem-local-wave-energy-conservation-law]])

[F2] Chain rule, scalar product rule, and equality of mixed second partials for C2 functions. ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-clairaut-schwarz-mixed-partials]])

[F3] Differentiation under the integral sign: if $x\mapsto f(x,t)$ is integrable for every $t$, $t\mapsto f(x,t)$ is differentiable for almost every $x$, and the $t$-derivative is dominated on the time interval by a fixed integrable function, then $F(t)=\int f(x,t)\,dx$ is differentiable with $F'(t)=\int\partial_tf(x,t)\,dx$. ([[thm-differentiation-under-the-integral-sign]])

[F4] Second fundamental theorem: if $G$ is differentiable on $[a,b]$ with integrable derivative, then $\int_a^bG'=G(b)-G(a)$ (Darboux integral); on a closed bounded interval continuous functions are integrable, Darboux and Riemann integrals agree, and a bounded Borel Riemann integrable function on a closed interval has the same Lebesgue integral. ([[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[thm-darboux-equals-riemann]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]])

[F5] A continuous function on an interval whose derivative vanishes at every interior point is constant. ([[cor-zero-derivative-implies-constant]])

[F6] The support of $f$ is the closure of $\{f\ne0\}$; for the translate, $\operatorname{supp}F(\cdot-ct)=ct+\operatorname{supp}F$. ([[def-support-and-compactly-supported-riemann-integral-in-rn]])
## Proof

1.1 The packet and its flux: by the chain rule [F2], $u_t=-cF'(x-ct)$ and $u_x=F'(x-ct)$, so $u_{tt}=c^2F''(x-ct)$, $u_{xx}=F''(x-ct)$ and $\Box_cu=0$; hence [F1] holds and the energy density and flux are $e=c^2F'(x-ct)^2$ and $q=-c^2u_tu_x=c^3F'(x-ct)^2$. [given, F1, F2, algebra]

2.1 Positive initial energy and late vanishing: since $F'$ is continuous and nonzero somewhere in $(0,1)$, there are a subinterval of $(0,1)$ on which $F'^2\ge m>0$ and hence $E_\Omega(0)=c^2\int_0^1F'(x)^2\,dx>0$; and by [F6] the support of $x\mapsto u(x,t)$ is $ct+\operatorname{supp}F$, so for every $t>\bigl(1-\min\operatorname{supp}F\bigr)/c$ the packet is disjoint from $[0,1]$ and $E_\Omega(t)=0$. [given, step 1.1, F6, algebra]

2.2 The flux identity: $e$ and $\partial_te$ are continuous on $[0,1]$ and bounded on compact time intervals, so [F3] gives $E_\Omega'(t)=\int_0^1\partial_te(x,t)\,dx=-c^3\int_0^1(F'^2)'(x-ct)\,dx$, and by [F4] the Darboux fundamental theorem applies to the continuous function $x\mapsto F'^2(x-ct)$ on $[0,1]$, whose Lebesgue integral equals that Darboux integral, giving $\int_0^1(F'^2)'(x-ct)\,dx=F'^2(1-ct)-F'^2(-ct)$; therefore $E_\Omega'(t)=c^3\bigl(F'^2(-ct)-F'^2(1-ct)\bigr)=q(0,t)-q(1,t)$. [given, step 1.1, F3, F4, algebra]

3.1 Conclusion for the open boundary: by steps 2.1 and 2.2 the energy $E_\Omega$ is positive at $t=0$, zero for all large $t$, and its rate of change is exactly the difference of the outward fluxes at the two endpoints; so $E_\Omega$ is not constant, the drop is accounted for by the flux through the right endpoint, and automatic conservation cannot be inferred without controlling the boundary flux. [step 2.1, step 2.2, algebra]

4.1 The half-line comparison: fix a compact $J\subseteq I$ and $R\ge R_J$; for $t\in J$ the integrand of $E_+$ vanishes for $x\ge R_J$, so $E_+(t)=\tfrac12\int_0^R(v_t^2+c^2v_x^2)\,dx$, and [F3] with the domination constant $\sup_{[0,R]\times J}|v_tv_{tt}+c^2v_xv_{xt}|$ gives $E_+'(t)=\int_0^R(v_tv_{tt}+c^2v_xv_{xt})\,dx=c^2\int_0^R(v_tv_{xx}+v_xv_{xt})\,dx=c^2\int_0^R\partial_x(v_tv_x)\,dx$, using $v_{tt}=c^2v_{xx}$ and the product rule [F2]; by [F4], $\int_0^R\partial_x(v_tv_x)\,dx=v_t(R,t)v_x(R,t)-v_t(0,t)v_x(0,t)$; the upper endpoint term is zero by the support hypothesis, and the lower endpoint term is zero because in the Dirichlet case the trace $t\mapsto v(0,t)$ is identically zero and differentiable with derivative $v_t(0,t)$, while in the Neumann case $v_x(0,t)=0$ directly; hence $E_+'(t)=0$ for every interior $t\in J$ and, $E_+$ being continuous on $J$ with vanishing derivative there, [F5] makes $E_+$ constant on $J$; as $J$ is an arbitrary compact subinterval of $I$, $E_+$ is constant on $I$. [given, step 1.1, F2, F3, F4, F5] ∎ 