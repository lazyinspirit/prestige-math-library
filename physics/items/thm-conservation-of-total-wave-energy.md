---
id: thm-conservation-of-total-wave-energy
kind: theorem
title: "Conservation of total wave energy in three admissible settings"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-countable-choice, lem-local-wave-energy-conservation-law, def-wave-energy-and-energy-flux, def-wave-equation-cauchy-data-and-wave-speed, lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes, thm-differentiation-under-the-integral-sign, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, cor-zero-derivative-implies-constant, def-support-and-compactly-supported-riemann-integral-in-rn, def-bounded-c-one-domain-boundary-charts-and-outward-normal, thm-ftc-second-part, thm-darboux-equals-riemann, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-heine-borel-rn, thm-extreme-value-metric, thm-heine-cantor-metric, thm-continuous-implies-integrable]
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
      locator: "§7.3, printed p. 176, (7.27), Lemma 7.10 and Problem 7.15: constant energy under Dirichlet (and Neumann) boundary conditions, compact support, and the identity $\\dot E=\\int f u_t$"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1.1, printed p. 212, (7.3) and the following display: $dE/dt=0$ under $u=0$ on $\\partial\\Omega$"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.1, printed pp. 289-290, (9.2.2)-(9.2.3): the integrated conservation law with zero boundary flux"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$,
$c>0$, $T>0$, let $U\subseteq\mathbb R^n$ be open and let
$u\in C^2(U\times(0,T))$ solve the homogeneous equation $\Box_cu=0$
([[def-wave-equation-cauchy-data-and-wave-speed]]), with $e,q$ as in
[[def-wave-energy-and-energy-flux]] and
[[lem-local-wave-energy-conservation-law]]. Then $E_\Omega(t)$ is constant in
$t$ in each of the following settings, and in each the vanishing boundary term
is:

(a) **fixed spatial support**: $\Omega=\mathbb R^n$, $U=\mathbb R^n$ and there
is a compact $K$ with $\operatorname{supp}u(\cdot,t)\subseteq K$ for all
$t\in(0,T)$ ([[def-support-and-compactly-supported-riemann-integral-in-rn]]);
the flux term through $\partial B_R$ vanishes for a large ball $B_R\supset K$.

(b) **integrable flux (sufficient decay)**: $U=\Omega=\mathbb R^n$,
$e(\cdot,t),|q(\cdot,t)|,\operatorname{div}q(\cdot,t)\in L^1(\mathbb R^n)$ for
every $t$, and $t\mapsto E_{\mathbb R^n}(t)$ is differentiable with
$E_{\mathbb R^n}'(t)=\int_{\mathbb R^n}\partial_te(x,t)\,dx$ (automatic, for
instance, when $\partial_te$ is dominated on compact time intervals by a fixed
$L^1$ function); then
$\int_{\mathbb R^n}\operatorname{div}q(\cdot,t)\,dx=0$ by
[[lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes]]; this
integrability is exactly the hypothesis a plane wave fails.

(c) **bounded domain with homogeneous Dirichlet or homogeneous Neumann data**:
for $n\ge2$, $U$ is a bounded $C^1$ domain
([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]); for $n=1$,
$U$ is a finite union of disjoint bounded open intervals with pairwise disjoint
closures, and the outward unit normals at the left and right endpoints are $-1$
and $+1$. Require $u\in C^2(\overline U\times(0,T))$ in the interior-up-to-boundary
convention, $\Omega=U$, and either $u(x,t)=0$ on all of
$\partial U\times(0,T)$ or $\partial_\nu u(x,t):=Du(x,t)\cdot\nu(x)=0$ there.
In the Dirichlet case $u_t|_{\partial U}=0$; in the Neumann case
$\partial_\nu u=0$. Thus in both cases the outward flux
$q\cdot\nu=-c^2u_t\partial_\nu u$ vanishes.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; $n\ge1$, $c>0$, $T>0$, an open set $U\subseteq\mathbb R^n$ and a $C^2$ solution $u$ of $\Box_cu=0$ on $U\times(0,T)$; the energy density $e=\tfrac12(u_t^2+c^2|Du|^2)$ and flux $q=-c^2u_tDu$ of [[def-wave-energy-and-energy-flux]].

[F1] Local balance for a homogeneous solution: $\partial_te+\operatorname{div}q=0$ pointwise; equivalently $\partial_te=-\operatorname{div}q$. ([[lem-local-wave-energy-conservation-law]])

[F2] Differentiation under the integral sign: if $x\mapsto f(x,t)$ is integrable for every $t$, $t\mapsto f(x,t)$ is differentiable for almost every $x$, the $t$-derivative is measurable and dominated on the time interval by a fixed integrable $g$, then $F(t)=\int f(x,t)\,d\mu(x)$ is differentiable with $F'(t)=\int\partial_tf(x,t)\,d\mu(x)$. ([[thm-differentiation-under-the-integral-sign]])

[F4] Divergence theorem on a bounded $C^1$ domain $\Omega$: for $G\in C^1(\overline\Omega;\mathbb R^n)$, $\int_\Omega\operatorname{div}G\,d\lambda_n=\int_{\partial\Omega}G\cdot\nu\,dS$. ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]])

[F5] If $G\in C^1(\mathbb R^n;\mathbb R^n)$ has $G,\operatorname{div}G\in L^1(\lambda_n)$, then $\int_{\mathbb R^n}\operatorname{div}G\,d\lambda_n=0$. ([[lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes]])

[F6] A continuous function on an interval whose derivative vanishes at every interior point is constant. ([[cor-zero-derivative-implies-constant]])

[F7] Second fundamental theorem: for $G$ differentiable on $[a,b]$ with integrable $G'$, $\int_a^bG'=G(b)-G(a)$ (Darboux integral). ([[thm-ftc-second-part]])

[F8] On a closed bounded interval a bounded function is Darboux integrable exactly when it is Riemann integrable, with the same value; a bounded Borel Riemann integrable function on a closed interval lies in $L^1$ there and its Lebesgue and Riemann integrals agree. ([[thm-darboux-equals-riemann]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]])

[F9] Closed bounded Euclidean sets are compact; continuous functions on nonempty compact sets are bounded and uniformly continuous. ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[thm-heine-cantor-metric]])

[F10] A continuous real function on a closed bounded interval is bounded and Darboux integrable. ([[thm-continuous-implies-integrable]])

## Proof

1.1 Localisation in time and the common shape of the three cases: fix a nondegenerate compact interval $[a,b]\subseteq(0,T)$; it suffices to prove that $t\mapsto E_\Omega(t)$ is constant on $[a,b]$, since $[a,b]$ is arbitrary and $(0,T)$ is an interval [F6]; the local balance [F1] gives $\partial_te=-\operatorname{div}q$ pointwise, while the differentiation and boundedness arguments needed to integrate this identity are supplied separately under the hypotheses of (a), (b), and (c). [given, F1]

2.1 Case (a): choose $R>0$ with the compact $K$ of the statement contained in $B_R(0)$; for $t\in[a,b]$ the support condition gives $e(x,t)=0$ for $x\notin K$, so $E_{\mathbb R^n}(t)=\int_{B_R(0)}e(x,t)\,dx$, and $u$, $u_t$ and $Du$ all vanish identically on the open complement of $K$, hence on a neighbourhood of $\partial B_R(0)$, so $q=0$ there; [F2] applied on the fixed ball with the domination constant $\sup_{\overline B_R\times[a,b]}|\partial_te|$ gives $E_{\mathbb R^n}'(t)=\int_{B_R(0)}\partial_te(x,t)\,dx=-\int_{B_R(0)}\operatorname{div}q(x,t)\,dx$ on $(a,b)$, for $n\ge2$, [F4] on the ball gives $\int_{B_R(0)}\operatorname{div}q\,d\lambda_n=\int_{\partial B_R(0)}q\cdot\nu\,dS=0$ because $q$ vanishes on the boundary; for $n=1$, [F7] and [F8] instead give $\int_{-R}^{R}\partial_xq\,dx=q(R,t)-q(-R,t)=0$; hence $E_{\mathbb R^n}'=0$ on $(a,b)$ and $E_{\mathbb R^n}$ is constant on $[a,b]$ by [F6]. [given, step 1.1, F1, F2, F4, F6, F7, F8, F9, F10]

2.2 Case (b): the differentiation hypothesis gives $E_{\mathbb R^n}'(t)=\int_{\mathbb R^n}\partial_te(x,t)\,dx$ for every $t\in(0,T)$ (the stated sufficient Lebesgue criterion follows from [F2] on an open interval compactly contained in $(0,T)$, with the fixed dominating $L^1$ function), and [F1] makes the integrand $-\operatorname{div}q(\cdot,t)$, which lies in $L^1(\lambda_n)$ by hypothesis; hence $E_{\mathbb R^n}'(t)=-\int_{\mathbb R^n}\operatorname{div}q(x,t)\,dx=0$ by [F5], and [F6] makes $E_{\mathbb R^n}$ constant on $[a,b]$. [given, step 1.1, F1, F2, F5, F6]

2.3 Case (c), dimension $n\ge2$: $e$ and $\partial_te$ are continuous on the compact $\overline U\times[a,b]$, so [F2] gives $E_U'(t)=\int_U\partial_te(x,t)\,dx=-\int_U\operatorname{div}q(x,t)\,dx$ on $(a,b)$ [F1], and [F4] gives $\int_U\operatorname{div}q\,d\lambda_n=\int_{\partial U}q\cdot\nu\,dS$; the boundary integrand vanishes: in the Dirichlet case the map $t\mapsto u(p,t)$ is identically zero at every $p\in\partial U$ and differentiable with derivative $\partial_tu(p,t)$ (the $C^1$ extension to $\overline U$ makes the difference quotient converge to the continuous extension of $\partial_tu$), so $\partial_tu(p,t)=0$ and hence $q(p,t)\cdot\nu(p)=-c^2u_t(p,t)\partial_\nu u(p,t)=0$; in the Neumann case $\partial_\nu u=0$ on the boundary by hypothesis; either way $q\cdot\nu=0$ on $\partial U\times(a,b)$, so $E_U'=0$ on $(a,b)$ and [F6] gives constancy on $[a,b]$. [given, step 1.1, F1, F2, F4, F6, F9]

2.4 Case (c), dimension $n=1$: write $U$ as the disjoint union of its finitely many bounded open intervals $(\alpha_j,\beta_j)$ with pairwise disjoint closures; for each $j$ the function $x\mapsto q(x,t)$ is $C^1$ on $[\alpha_j,\beta_j]$, so on that interval [F7] gives the Darboux integral $\int_{\alpha_j}^{\beta_j}\partial_xq(x,t)\,dx=q(\beta_j,t)-q(\alpha_j,t)$, [F8] converts this Darboux value first to the Riemann and then to the Lebesgue integral of $\partial_xq(\cdot,t)$ over the interval, and at each endpoint both boundary conditions kill $q$: $q(\beta_j,t)=-c^2u_t(\beta_j,t)u_x(\beta_j,t)$ and $q(\alpha_j,t)=-c^2u_t(\alpha_j,t)u_x(\alpha_j,t)$, and in the Dirichlet case $u_t=0$ at both endpoints while in the Neumann case the outward normal is $+1$ at $\beta_j$ and $-1$ at $\alpha_j$, so $u_x(\beta_j,t)=0=u_x(\alpha_j,t)$; hence $\int_U\operatorname{div}q(\cdot,t)\,d\lambda_1=\sum_j\bigl(q(\beta_j,t)-q(\alpha_j,t)\bigr)=0$. Since $e$ and $\partial_te$ are continuous on $\overline U\times[a,b]$, [F2] gives $E_U'(t)=\int_U\partial_te\,d\lambda_1=-\int_U\operatorname{div}q\,d\lambda_1=0$ on $(a,b)$, and [F6] gives constancy on $[a,b]$. [given, step 1.1, F1, F2, F6, F7, F8, F9, F10]

3.1 Completion: in each of the three settings, and in both dimensions of case (c), the energy $E_\Omega$ has vanishing derivative on every nondegenerate compact subinterval of $(0,T)$, hence is constant on each such subinterval by [F6]; a function constant on every compact subinterval of an interval is constant on the interval, so $E_\Omega$ is constant on $(0,T)$ in all three settings. [step 2.1, step 2.2, step 2.3, step 2.4, F6] ∎ 
