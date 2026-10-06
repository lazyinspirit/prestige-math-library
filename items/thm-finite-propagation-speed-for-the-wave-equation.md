---
id: thm-finite-propagation-speed-for-the-wave-equation
kind: theorem
title: "Finite propagation speed for the wave equation"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-countable-choice, lem-energy-identity-on-a-truncated-wave-cone, lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets, def-forward-and-backward-wave-cones-domain-of-dependence-and-influence, def-wave-equation-cauchy-data-and-wave-speed, def-wave-energy-and-energy-flux, thm-dominated-convergence, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, lem-truncated-wave-cone-geometry-and-frustum-presentation, thm-heine-borel-rn, thm-extreme-value-metric, thm-heine-cantor-metric, lem-sphere-and-ball-measures-scale]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed pp. 176-178, Theorem 7.12 and (7.29): the cone of dependence at unit speed"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.3, printed pp. 290-292, Theorem 9.2.3: vanishing on the backward light cone"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #13-14: Geometric Energy Estimates (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ad3a71c522df2396b6248cf9b35aedea_MIT18_152F11_lec_13_14.pdf"
      locator: "§2, printed/PDF pp. 3-4, Theorem 2.1: energy estimates in a cone and its consequences"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$,
$c>0$, $x_0\in\mathbb R^n$, $t_0>0$ and let $u\in C^2$ solve $\Box_cu=f$ on a
neighbourhood of the closed backward cone
$K^-(x_0,t_0)=\{(x,t):0\le t\le t_0,\ |x-x_0|\le c(t_0-t)\}$
([[def-forward-and-backward-wave-cones-domain-of-dependence-and-influence]]).
If $f=0$ on $K^-(x_0,t_0)$ and
$u(\cdot,0)=u_t(\cdot,0)=0$ on the base ball $B_{ct_0}(x_0)$, then $u\equiv0$
on $K^-(x_0,t_0)$; in particular $u(x_0,t_0)=0$. Data and source vanishing in a
backward cone control the whole cone: the source term is included, in the sharp
form of the enrichment row `thm-finite-propagation-for-forced-waves`.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a $C^2$ function $u$ solving $\Box_cu=f$ on a neighbourhood of the closed cone $K^-=K^-(x_0,t_0)$, with $f=0$ on $K^-$ and $u(\cdot,0)=u_t(\cdot,0)=0$ on $B_{ct_0}(x_0)$; the density $e=\tfrac12(u_t^2+c^2|Du|^2)\ge0$ of [[def-wave-energy-and-energy-flux]] and $E(t)=\int_{B_{c(t_0-t)}(x_0)}e(x,t)\,dx$ for $0<t<t_0$.

[F1] Cone energy identity: for $0<t_1<t_2<t_0$, with $\ell\ge0$ on the lateral surface, $\int_{K(t_1,t_2)}fu_t=E(t_2)-E(t_1)+\int_{t_1}^{t_2}\int_{\partial B_{c(t_0-t)}(x_0)}\ell\,dS\,dt$. ([[lem-energy-identity-on-a-truncated-wave-cone]])

[F2] Dominated convergence: if $f_k\to f$ pointwise and $|f_k|\le g$ with $\int g<\infty$, then $\int f_k\to\int f$. ([[thm-dominated-convergence]])

[F3] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere; a continuous nonnegative function with vanishing integral on an open ball vanishes identically there. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F4] On an open convex set, a $C^1$ function with vanishing gradient is constant; the open cone $\operatorname{int}K^-=\{0<t<t_0,\ |x-x_0|<c(t_0-t)\}$ is convex, being the increasing union of the convex frusta $K(t_1,t_2)$. ([[lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets]], [[lem-truncated-wave-cone-geometry-and-frustum-presentation]])

[F5] Closed bounded Euclidean sets are compact; continuous functions on nonempty compact sets are bounded and uniformly continuous. ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[thm-heine-cantor-metric]])

## Proof

1.1 The energy tends to zero at the base: for every $t\in(0,t_0)$ the integral $E(t)$ over the ball $B_{c(t_0-t)}(x_0)$ is finite and $E(t)\ge0$ because $e\ge0$ is continuous on the compact set $K^-$ and hence bounded there; as $t\downarrow0$, the functions $x\mapsto\mathbf 1_{B_{c(t_0-t)}(x_0)}(x)e(x,t)$ converge pointwise on $B_{ct_0}(x_0)$ to $\mathbf 1_{B_{ct_0}(x_0)}(x)e(x,0)$ by continuity of $e$ up to $t=0$, and they are dominated by the constant $\sup_{K^-}e<\infty$, so [F2] gives $E(t)\to\int_{B_{ct_0}(x_0)}e(x,0)\,dx=\tfrac12\int_{B_{ct_0}(x_0)}\bigl(u_t(x,0)^2+c^2|Du(x,0)|^2\bigr)dx=0$, the last equality because both Cauchy data vanish on the base ball. [given, F2, algebra, F5]

2.1 Monotonicity and vanishing of the energy: for $0<t_1<t_2<t_0$ the frustum $K(t_1,t_2)$ lies in $K^-$, where $f=0$, so [F1] gives $E(t_2)-E(t_1)=-\int_{t_1}^{t_2}\int_{\partial B_{c(t_0-t)}(x_0)}\ell\,dS\,dt\le0$ because $\ell\ge0$; thus $E$ is nonincreasing on $(0,t_0)$, with $E\ge0$ and $E(t)\to0$ as $t\downarrow0$ by step 1.1, so $E(t)=0$ for every $t\in(0,t_0)$. [given, step 1.1, F1, algebra]

3.1 Vanishing of the derivatives on the open cone: fix $t\in(0,t_0)$; by step 2.1 $e(\cdot,t)\ge0$ has vanishing integral over the open ball $B_{c(t_0-t)}(x_0)$, so [F3] and continuity give $e(x,t)=0$ for every $x$ in that ball, and hence $u_t(x,t)=0$ and $Du(x,t)=0$ there; letting $t$ vary gives $u_t=Du=0$ on the open cone $\operatorname{int}K^-$. [given, step 2.1, F3, algebra]

4.1 Constancy and conclusion: the open cone $\operatorname{int}K^-$ is convex [F4], so the vanishing-gradient lemma [F4] makes $u$ constant on it; the constant is $0$ because $u$ is continuous on a neighbourhood of the closed cone and $u(\cdot,0)=0$ on the base ball, so evaluating along points of the open cone tending to a base point gives $u\equiv0$ on $\operatorname{int}K^-$; finally $K^-$ is the closure of $\operatorname{int}K^-$ (each point of the base, of the lateral surface or the vertex is a limit of interior points), so continuity gives $u\equiv0$ on $K^-$, and in particular $u(x_0,t_0)=0$. [given, step 3.1, F4, algebra] ∎ 