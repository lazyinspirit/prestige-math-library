---
id: pthm-em-general-wave-ivp
kind: physics-theorem
title: "Constrained smooth vacuum Maxwell initial-value theory, finite-energy conservation and finite propagation"
status: draft
origin: pipeline
domain: physics
dependency_level: 19
deps: [pthm-em-gauss-constraint-propagation,
       pthm-em-vacuum-wave-equation,
       thm-em-wave-cauchy-kirchhoff,
       lem-em-spherical-mean-wave-identity,
       thm-sr-future-cone-and-flat-domain-of-dependence,
       def-sr-causal-reachability-in-affine-minkowski-space,
       def-forward-and-backward-wave-cones-domain-of-dependence-and-influence,
       post-em-vacuum-maxwell,
       def-em-fields,
       def-em-sources,
       def-em-lab-geometry,
       def-em-si-conventions,
       cor-the-curl-of-a-curl-of-a-c2-field,
       def-divergence-and-curl-of-a-c1-vector-field,
       def-laplacian-of-a-c2-function,
       def-directional-and-partial-derivatives,
       thm-clairaut-schwarz-mixed-partials,
       thm-algebra-of-derivatives,
       def-ck-euclidean-maps-and-diffeomorphisms,
       thm-heine-borel-rn,
       def-countable-choice,
       def-em-vacuum-energy-flux,
       pthm-em-poynting-balance,
       lem-em-parameter-integrals,
       lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness,
       thm-divergence-theorem-for-bounded-c-one-euclidean-domains,
       lem-euclidean-balls-are-bounded-c-one-domains,
       lem-unit-sphere-is-lebesgue-null,
       def-surface-integral-on-a-compact-c-one-hypersurface,
       cor-mean-value-theorem,
       def-cross-product-in-r3,
       def-euclidean-inner-product]
dependency_roles:
  pthm-em-gauss-constraint-propagation: physical-result
  pthm-em-vacuum-wave-equation: physical-result
  thm-em-wave-cauchy-kirchhoff: mathematical-premise
  lem-em-spherical-mean-wave-identity: mathematical-premise
  thm-sr-future-cone-and-flat-domain-of-dependence: mathematical-premise
  def-sr-causal-reachability-in-affine-minkowski-space: mathematical-premise
  def-forward-and-backward-wave-cones-domain-of-dependence-and-influence: mathematical-premise
  post-em-vacuum-maxwell: physical-assumption
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  cor-the-curl-of-a-curl-of-a-c2-field: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-countable-choice: mathematical-premise
  def-em-vacuum-energy-flux: formulation-prerequisite
  pthm-em-poynting-balance: physical-result
  lem-em-parameter-integrals: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  lem-euclidean-balls-are-bounded-c-one-domains: mathematical-premise
  lem-unit-sphere-is-lebesgue-null: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional whole-space smooth-branch vacuum Maxwell initial-value theory in a named inertial chart with SI constants: existence, uniqueness, finite propagation speed $c$, compact-support propagation and smooth finite-energy conservation for initially constraint-satisfying $C^\\infty$ data of arbitrary growth. Excluded: nonsmooth and weak-branch data, sources, boundary conditions, finite-domain problems, nonsmooth finite-energy data, and any empirical claim. Smooth finite-energy initial data retain their total energy; arbitrary-growth data remain allowed. $\\mathrm{AC}_\\omega$ is declared and used through the scalar wave theorem and clause (e)'s divergence and substitution suppliers."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.3.1 p. 84 (the general profile solutions $f(x-ct)+g(x+ct)$) together with §4.3 pp. 82-84 (the wave equation itself); the notes do not state the constrained whole-space Cauchy theorem, which is supplied by the cited mathematical item"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.2.1 printed pp. 375-376 and §9.2.2 printed p. 377 (empty-space Maxwell solutions obey the wave equation but not conversely; Maxwell imposes the additional constraints); the constrained existence and uniqueness theorem is supplied by the cited mathematical item"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$,
[[def-countable-choice]]), inherited from
[[thm-em-wave-cauchy-kirchhoff]]. Let $t_0<T$ be real, let
$E_0,B_0:\mathbb R^3\to\mathbb R^3$ be $C^\infty$ fields
([[def-ck-euclidean-maps-and-diffeomorphisms]]) on the whole-space laboratory
region $\Omega=\mathbb R^3$, $I=\mathbb R$ of [[def-em-lab-geometry]] with the
constants of [[def-em-si-conventions]], and assume the constraints
$$\operatorname{div}E_0=0,\qquad \operatorname{div}B_0=0$$ on $\mathbb R^3$
([[def-divergence-and-curl-of-a-c1-vector-field]]). Put
$\dot E_0:=c^2\operatorname{curl}B_0$ and
$\dot B_0:=-\operatorname{curl}E_0$. No decay, boundedness, compactness or
finite-energy hypothesis is imposed on the data. Then:

(a) [Existence and explicit representation] There are jointly $C^\infty$
fields $E,B:\mathbb R^3\times[t_0,T]\to\mathbb R^3$ (in the extension sense of
[[thm-em-wave-cauchy-kirchhoff]]) satisfying the four smooth-branch vacuum
Maxwell equations of [[post-em-vacuum-maxwell]] with $\rho\equiv0$,
$J\equiv0$ and the initial conditions $E(\cdot,t_0)=E_0$,
$B(\cdot,t_0)=B_0$, $\partial_tE(\cdot,t_0)=\dot E_0$,
$\partial_tB(\cdot,t_0)=\dot B_0$. Explicitly, each component $E_i$ is the
scalar solution $u$ of [[thm-em-wave-cauchy-kirchhoff]](a) with data
$(a,b)=(E_{0,i},\dot E_{0,i})$ and $h=0$, each $B_i$ that with
$(a,b)=(B_{0,i},\dot B_{0,i})$, in the spherical-mean representation
$u=\partial_sH_a+H_b$ of that theorem, the mean being that of
[[lem-em-spherical-mean-wave-identity]].

(b) [Uniqueness] Every pair of jointly $C^2$ fields on
$\mathbb R^3\times[t_0,T]$ (in the extension sense) satisfying the same four
equations with $\rho\equiv0$, $J\equiv0$ and $E'(\cdot,t_0)=E_0$,
$B'(\cdot,t_0)=B_0$ equals $(E,B)$; the time derivatives at $t_0$ are then
automatically $\dot E_0,\dot B_0$ by the Ampere and Faraday equations.

(c) [Finite propagation and domain of dependence] If second constrained data
$(E_0',B_0')$ agree with $(E_0,B_0)$ together with all curls on the closed ball
$\overline B_{c(t_*-t_0)}(x_*)$ — that is, $E_0=E_0'$, $B_0=B_0'$,
$\operatorname{curl}E_0=\operatorname{curl}E_0'$ and
$\operatorname{curl}B_0=\operatorname{curl}B_0'$ there — then the
corresponding solutions agree at $(x_*,t_*)$, for all $x_*\in\mathbb R^3$ and
$t_*\in[t_0,T]$. Consequently the value at $(x_*,t_*)$ is determined by the
Cauchy data on the closed backward cone
$K(x_*,t_*)=\{(y,v):t_0\le v\le t_*,\ |y-x_*|\le c(t_*-v)\}$ of
[[def-forward-and-backward-wave-cones-domain-of-dependence-and-influence]]. In
the causal geometry of the adopted affine Minkowski model this cone is the
intersection of the slab with the model's causal past of the event $(x_*,t_*)$ in the chart $x^0=ct$; by
the reachability objects of
[[def-sr-causal-reachability-in-affine-minkowski-space]] and the
straight-segment criterion and time monotonicity of
[[thm-sr-future-cone-and-flat-domain-of-dependence]], events in the slab outside it cannot
be joined to $(x_*,t_*)$ by a future causal path, so the constructed field
supplies no vacuum influence outside the model's causal cones; this
identification of the PDE cone with the model's causal cone is the modelling
statement of the item, not an additional empirical claim.

(d) [Compact support] If in addition $E_0$ and $B_0$ vanish off a compact set
$K\subset\mathbb R^3$, choose $\rho>0$ with $K\subseteq\overline B_\rho(0)$
([[thm-heine-borel-rn]]); then for every $t\in[t_0,T]$ one has
$E(x,t)=B(x,t)=0$ whenever $|x|>\rho+c(t-t_0)$.

(e) [Finite-energy branch] Define
$u(x,t)=(\varepsilon_0|E(x,t)|^2+\mu_0^{-1}|B(x,t)|^2)/2$ and
$S=\mu_0^{-1}E\times B$ as in [[def-em-vacuum-energy-flux]], and define total
energy by the nonnegative ball exhaustion
$\mathcal E(t):=\sup_{R>0}\int_{B_R(0)}u(x,t)\,dx\in[0,\infty]$. If
$\mathcal E(t_0)<\infty$, then $\mathcal E(t)=\mathcal E(t_0)$ for every
$t\in[t_0,T]$. More locally, for every $x_0\in\mathbb R^3$, $r>0$ and
$t_0\le s\le t\le T$,
$$\int_{B_r(x_0)}u(x,t)\,dx\le\int_{B_{r+c(t-s)}(x_0)}u(x,s)\,dx.$$
This is a branch for the same smooth constrained data with finite initial
energy; no existence result for nonsmooth finite-energy data is asserted.

(f) [Scope] This is the smooth whole-space vacuum branch with initially
constraint-satisfying data; general smooth non-decaying data may have infinite
total energy, and no boundary condition, inhomogeneous source, weak-branch
content or empirical claim is asserted. The result is conditional on the
adopted postulates and on $\mathrm{AC}_\omega$, the latter used through the
scalar theorem and the divergence and substitution suppliers in clause (e).

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$; times $t_0<T$; $C^\infty$ data $E_0,B_0:\mathbb R^3\to\mathbb R^3$ with $\operatorname{div}E_0=\operatorname{div}B_0=0$; the derived data $\dot E_0=c^2\operatorname{curl}B_0$, $\dot B_0=-\operatorname{curl}E_0$; the whole-space laboratory region $\Omega=\mathbb R^3$, $I=\mathbb R$ with frame basis $(e_1,e_2,e_3)$ and constants $c,\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$; and the operators $\operatorname{div}$, $\operatorname{curl}$, $\nabla$, $\Delta$, $\partial_t$ and $W=c^{-2}\partial_t^2-\Delta$ on the slab.

[F1] Cauchy problem for the scalar wave equation ([[thm-em-wave-cauchy-kirchhoff]]): assume $\mathrm{AC}_\omega$, let $c>0$, $t_0<T$, $a,b\in C^\infty(\mathbb R^3)$ and let $h$ be $C^\infty$ on $\mathbb R^3\times[t_0,T]$ in the extension sense, and let $u$ be the spherical-mean construction of that theorem. Then (a) $u$ is $C^\infty$ on $\mathbb R^3\times[t_0,T]$ in the extension sense, $Wu=h$ on $\mathbb R^3\times(t_0,T)$, $u(\cdot,t_0)=a$ and $\partial_tu(\cdot,t_0)=b$; (b) every $v\in C^2$ in the extension sense with the same $Wv=h$ and the same Cauchy data equals $u$; (c) if data agree on the closed ball $\overline B_{c(t_*-t_0)}(x_*)$ and the sources agree on the closed backward cone $K(x_*,t_*)$, the corresponding solutions agree at $(x_*,t_*)$ for every $x_*\in\mathbb R^3$ and $t_*\in[t_0,T]$; (d) if $a$ vanishes off a compact $K_a$, $b$ vanishes off a compact $K_b$, and $h(\cdot,v)$ vanishes off a fixed compact $K_h$ for every $v\in[t_0,T]$, with $K_a\cup K_b\cup K_h\subseteq\overline B_\rho(0)$ for some $\rho>0$, then $u(x,t)=0$ whenever $|x|>\rho+c(t-t_0)$.

[F2] Gauss-constraint propagation ([[pthm-em-gauss-constraint-propagation]](a)): let $E,B$ be jointly $C^2$ fields and $\rho,J$ $C^1$ source fields on the laboratory region; assume only the evolution equations $\partial_tB=-\operatorname{curl}E$, $\partial_tE=c^2\operatorname{curl}B-c^2\mu_0J$ and, separately, the continuity equation $\partial_t\rho+\operatorname{div}J=0$. Then the defects $D_B=\operatorname{div}B$ and $D_E=\operatorname{div}E-\rho/\varepsilon_0$ satisfy $\partial_tD_B=\partial_tD_E=0$ pointwise; for each fixed $x$ both defects are constant in time, and initial zero constraints at any $t_0$ persist at every time.

[F3] Source-free wave equation ([[pthm-em-vacuum-wave-equation]]): let $E,B$ be jointly $C^2$ fields of [[def-em-fields]] on the laboratory region and let $W'\subseteq\Omega\times I$ be open with $\rho=0$, $J=0$ on $W'$ for the sources of [[def-em-sources]]. If the smooth branch of [[post-em-vacuum-maxwell]] holds on $W'$, then componentwise $\Delta E=c^{-2}\partial_t^2E$ and $\Delta B=c^{-2}\partial_t^2B$ on $W'$; that is, each component of $E$ and of $B$ satisfies $Wv=0$ there.

[F4] Local Poynting identity ([[pthm-em-poynting-balance]](a)): for the jointly $C^1$ fields of the smooth branch with continuous sources on the laboratory region, the energy density $u$ and Poynting vector $S$ of [[def-em-vacuum-energy-flux]] satisfy $\partial_tu+\operatorname{div}S=-J\cdot E$; in particular on a source-free region $J=0$ one has $\partial_tu+\operatorname{div}S=0$.

[F5] Energy density and Poynting vector ([[def-em-vacuum-energy-flux]]): for fields of class $C^k$, $k\ge1$, $u=\frac{\varepsilon_0}{2}\langle E,E\rangle+\frac{1}{2\mu_0}\langle B,B\rangle$ is a nonnegative $C^k$ function, $S=\frac{1}{\mu_0}E\times B$ is a $C^k$ vector field, and both are polynomial expressions in the components of $E$ and $B$ with no derivative used.

[F6] Parameter integrals ([[lem-em-parameter-integrals]], set form): for $K\subseteq\mathbb R^n$ compact, Lebesgue measurable with $\lambda_n(K)<\infty$ and $f$, $\partial_tf$ continuous on an open neighbourhood of $K\times[a,b]$, the map $t\mapsto\int_Kf(x,t)\,dx$ is differentiable at every $t\in(a,b)$ with derivative $\int_K\partial_tf(x,t)\,dx$, and has the corresponding one-sided derivatives at the endpoints.

[F7] Change of variables ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]): under $\mathrm{AC}_\omega$, for a $C^1$ diffeomorphism $T:U\to V$ of open subsets of $\mathbb R^m$ and every nonnegative Borel $h:V\to[0,\infty]$, $\int_Vh(y)\,dy=\int_Uh(T(x))|\det DT(x)|\,dx$.

[F8] Balls, the divergence theorem and surface integrals ([[lem-euclidean-balls-are-bounded-c-one-domains]], [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]): for $n\ge2$, $a\in\mathbb R^n$, $R>0$, the open ball $B_R(a)$ is a bounded $C^1$ domain whose outward unit normal at $y\in\partial B_R(a)$ is $(y-a)/R$; under $\mathrm{AC}_\omega$, for every bounded $C^1$ domain $\Omega'$ and $F\in C^1(\overline\Omega';\mathbb R^n)$ one has $\int_{\Omega'}\operatorname{div}F\,dx=\int_{\partial\Omega'}F\cdot\nu\,dS$; and the surface integral over a compact embedded $C^1$ hypersurface is defined as a finite sum of Lebesgue integrals of the pulled-back nonnegative function, so for a nonnegative continuous surface function the surface integral is nonnegative.

[F9] Null spheres, compactness and the mean value theorem ([[lem-unit-sphere-is-lebesgue-null]], [[thm-heine-borel-rn]], [[cor-mean-value-theorem]]): the unit sphere $S^{n-1}$, $n\ge2$, has $n$-dimensional Lebesgue measure zero (under Countable Choice, so the same holds for every translated scaled sphere); a subset of $\mathbb R^n$ is compact if and only if it is closed and bounded; and a continuous function on $[a,b]$ that is differentiable on $(a,b)$ with $F'\le0$ there satisfies $F(b)\le F(a)$.

[F10] Wave cones and causal geometry ([[def-forward-and-backward-wave-cones-domain-of-dependence-and-influence]], [[def-sr-causal-reachability-in-affine-minkowski-space]], [[thm-sr-future-cone-and-flat-domain-of-dependence]]): the closed backward cone with vertex $(x_0,t_0)$ and speed $c$ is $K^-(x_0,t_0)=\{(x,t):0\le t\le t_0,\ |x-x_0|\le c(t_0-t)\}$ with base ball $B_{ct_0}(x_0)$; in the oriented time-oriented affine Minkowski space the causal relation is $p\le q\iff q-p\in\overline{C^+}$ with $J^-(q)=q+\overline{C^-}=\{p:p\le q\}$, and a piecewise $C^1$ future causal path $x:[a,b]\to A$ has displacement $x(b)-x(a)\in\overline{C^+}$, with $J^+(p)=R^+(p)$ and the straight-segment criterion for reachability; in an inertial chart the closure of the future cone is $\{v:v^0\ge|v_s|\}$.

[F11] Framework objects ([[post-em-vacuum-maxwell]](a), [[def-em-fields]], [[def-em-sources]], [[def-em-lab-geometry]], [[def-em-si-conventions]]): on the laboratory region $U\cong I\times\Omega$ the smooth branch of the vacuum Maxwell postulate holds for jointly $C^1$ fields with the additional derivatives required by each equation, with $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$; a field is $C^k$ when it is $C^k$ componentwise in the frame basis; $\varepsilon_0=(\mu_0c^2)^{-1}$ and $c^2\varepsilon_0\mu_0=1$; the whole-space choice is $\Omega=\mathbb R^3$, $I=\mathbb R$.

[F12] Vector calculus and differentiability ([[cor-the-curl-of-a-curl-of-a-c2-field]], [[def-divergence-and-curl-of-a-c1-vector-field]], [[def-laplacian-of-a-c2-function]], [[def-directional-and-partial-derivatives]], [[thm-clairaut-schwarz-mixed-partials]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): for a $C^2$ field $F$ on an open subset of $\mathbb R^3$, $\operatorname{curl}\operatorname{curl}F= \nabla\operatorname{div}F-\Delta F$ componentwise, with $\Delta F$ the componentwise Laplacian; divergence and curl are computed from first partial derivatives at fixed $t$; for a jointly $C^2$ map the mixed partial derivatives commute, $\partial_i\partial_j=\partial_j\partial_i$; sums and real multiples of differentiable functions differentiate termwise; a $C^\infty$ map in the extension sense on a closed slab is the restriction of a $C^\infty$ map on an open slab.

[F13] Spherical-mean wave identity ([[lem-em-spherical-mean-wave-identity]]): for $c>0$ and $f\in C^\infty(\mathbb R^3)$ the mean $M_rf(x)=\frac{1}{4\pi}\int_{S^2}f(x+rn)\,d\Omega(n)$ is smooth in $r\ge0$, satisfies the Euler-Poisson-Darboux identity, and $H_f(x,t)=t\,M_{ct}f(x)$ satisfies $\partial_t^2H_f=c^2\Delta H_f$, $H_f(\cdot,0)=0$, $\partial_tH_f(\cdot,0)=f$; the identities are local and need no decay of $f$.

[F14] The Euclidean inner product and cross product ([[def-euclidean-inner-product]], [[def-cross-product-in-r3]]): $\langle u,v\rangle=\sum_ku_kv_k$ is bilinear and symmetric with $|u|^2=\langle u,u\rangle\ge0$, and the cross product is given by the coordinate differences of products, so that $|u\times v|^2=|u|^2|v|^2-\langle u,v\rangle^2$ and $|u\times v|\le|u||v|$ for all $u,v\in\mathbb R^3$.

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$: every at most countable family of nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Setting and construction. Put $\dot E_0=c^2\operatorname{curl}B_0$ and $\dot B_0=-\operatorname{curl}E_0$, both $C^\infty$ on $\mathbb R^3$; for each $i\in\{1,2,3\}$ apply clause (a) of [F1] on the slab $[t_0,T]$ with $h=0$ and scalar data $(E_{0,i},\dot E_{0,i})$ to obtain a $C^\infty$ function $E_i$ with $WE_i=0$ on $\mathbb R^3\times(t_0,T)$, $E_i(\cdot,t_0)=E_{0,i}$, $\partial_tE_i(\cdot,t_0)=\dot E_{0,i}$, and likewise $B_i$ with data $(B_{0,i},\dot B_{0,i})$; by clause (a) each $E_i$ has the spherical-mean representation $\partial_sH_a+H_b$ with mean the $M_r$ of [F13], and the construction is legitimate because all six data functions are $C^\infty$ and [F1] carries $\mathrm{AC}_\omega$ through [A1]. [given, A1, F1, F11, F13]

2.1 Defects and their wave equations. Define the jointly $C^\infty$ fields $R:=\partial_tE-c^2\operatorname{curl}B$ and $Q:=\partial_tB+\operatorname{curl}E$ on $\mathbb R^3\times[t_0,T]$; the displayed derivatives exist and are continuous (indeed $C^\infty$) because the components are $C^\infty$, and $WE_i=WB_i=0$ by step 1.1. Then each component satisfies $WR_i=0$ and $WQ_i=0$ on $\mathbb R^3\times(t_0,T)$: for $R_i$, $\partial_t^2R_i=\partial_t^3E_i-c^2(\operatorname{curl}\partial_t^2B)_i=c^2\Delta\partial_tE_i-c^4(\operatorname{curl}\Delta B)_i=c^2\Delta(\partial_tE_i-c^2(\operatorname{curl}B)_i)$ using $\partial_t^2E_i=c^2\Delta E_i$, $\partial_t^2B_i=c^2\Delta B_i$ from step 1.1, commutation of the mixed partial derivatives and of $\Delta$ with the first derivatives [F12], and the same computation with $E$ and $B$ exchanged gives $Q$; equivalently $R_i,Q_i$ are $C^\infty$ in the extension sense on the closed slab. [step 1.1, F12]

3.1 Initial values of the defects. At $t_0$, $R_i(\cdot,t_0)=\partial_tE_i(\cdot,t_0)-c^2(\operatorname{curl}B(\cdot,t_0))_i=\dot E_{0,i}-c^2(\operatorname{curl}B_0)_i=0$ and $Q_i(\cdot,t_0)=\dot B_{0,i}+(\operatorname{curl}E_0)_i=0$ by step 1.1 and the definitions of $\dot E_0,\dot B_0$. For the time derivatives, the component wave equations of step 1.1 give $\partial_t^2E_i(\cdot,t_0)=c^2\Delta E_{0,i}$ and $\partial_t^2B_i(\cdot,t_0)=c^2\Delta B_{0,i}$, so $\partial_tR_i(\cdot,t_0)=c^2\Delta E_{0,i}-c^2(\operatorname{curl}\dot B_0)_i=c^2\Delta E_{0,i}+c^2(\operatorname{curl}\operatorname{curl}E_0)_i=c^2(\Delta E_0+\operatorname{curl}\operatorname{curl}E_0)_i=c^2(\nabla\operatorname{div}E_0)_i=0$ by the curl-curl identity [F12] and the constraint $\operatorname{div}E_0=0$ of the Statement, and symmetrically $\partial_tQ_i(\cdot,t_0)=c^2\Delta B_{0,i}+c^2(\operatorname{curl}\operatorname{curl}B_0)_i=c^2(\nabla\operatorname{div}B_0)_i=0$. [step 1.1, step 2.1, F11, F12, algebra]

4.1 The defects vanish and the evolution equations hold. By step 2.1 and step 3.1 each $R_i$ is $C^2$ in the extension sense on the closed slab with $WR_i=0$ on $\mathbb R^3\times(t_0,T)$ and zero Cauchy data at $t_0$; clause (b) of [F1] applied with $(a,b,h)=(0,0,0)$ therefore gives $R_i=0$ on the whole slab, and the same argument gives $Q_i=0$. Hence $\partial_tE=c^2\operatorname{curl}B$ and $\partial_tB=-\operatorname{curl}E$ hold pointwise on $\mathbb R^3\times[t_0,T]$, the two evolution equations of the smooth branch with $J=0$. [step 2.1, step 3.1, F1]

5.1 The Gauss constraints propagate: all four equations hold. The fields $E,B$ of step 1.1 are jointly $C^2$ and $\rho=0,J=0$ are $C^1$ on the laboratory region, the two evolution equations hold by step 4.1, and the continuity equation $\partial_t\rho+\operatorname{div}J=0$ is trivially satisfied; the initial defects vanish because $\operatorname{div}E(\cdot,t_0)=\operatorname{div}E_0=0$ and $\operatorname{div}B(\cdot,t_0)=\operatorname{div}B_0=0$ by the constraints of the Statement. Apply clause (a) of [F2] on the open interval $(t_0,T)$: each divergence is constant there at every fixed $x$. Continuity up to $t_0$ identifies that constant with its zero initial value, and continuity up to $T$ gives the same value at $T$. Thus $\operatorname{div}E\equiv0$ and $\operatorname{div}B\equiv0$ on $\mathbb R^3\times[t_0,T]$, so with step 4.1 all four equations $\operatorname{div}E=0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}B=c^{-2}\partial_tE$ of the source-free smooth branch [F11] hold, as does the initial-value clause $\partial_tE(\cdot,t_0)=\dot E_0$, $\partial_tB(\cdot,t_0)=\dot B_0$ from step 1.1; this proves clauses (a) and the equation part of the Statement. [step 1.1, step 4.1, F2, F11]

6.1 Uniqueness. Let $E',B'$ be jointly $C^2$ on $\mathbb R^3\times[t_0,T]$ in the extension sense, satisfy the four source-free equations of [F11] and have $E'(\cdot,t_0)=E_0$, $B'(\cdot,t_0)=B_0$. Then the Ampère and Faraday equations at $t_0$ give $\partial_tE'(\cdot,t_0)=c^2\operatorname{curl}B'(\cdot,t_0)=c^2\operatorname{curl}B_0=\dot E_0$ and $\partial_tB'(\cdot,t_0)=-\operatorname{curl}E_0=\dot B_0$; by [F3] each component of $E'$ and of $B'$ satisfies $Wv=0$ on the whole slab, and clause (b) of [F1] identifies each component with the corresponding component constructed in step 1.1 and verified in step 5.1, so $(E',B')=(E,B)$. [step 1.1, step 5.1, F1, F3, F11]

6.2 Domain of dependence and the cone reading. Let $(E_0',B_0')$ be constrained data agreeing with $(E_0,B_0)$ and with $\operatorname{curl}E_0,\operatorname{curl}B_0$ on the closed ball $\overline B_{c(t_*-t_0)}(x_*)$, and let $(E',B')$ be the corresponding constructed solution of steps 1.1 and 5.1, whose scalar data for the $i$-th component of $E$ are $(E_{0,i},\dot E_{0,i})$, respectively $(E'_{0,i},\dot E'_{0,i})$, with $\dot E'_0=c^2\operatorname{curl}B_0'$. On the closed ball the scalar data agree: $E_{0,i}=E'_{0,i}$ and $c^2(\operatorname{curl}B_0)_i=c^2(\operatorname{curl}B_0')_i$; the sources are $h=\tilde h=0$ on the closed backward cone $K(x_*,t_*)$, which is exactly the cone object of [F10]. Clause (c) of [F1] applied to each of the six scalar problems therefore gives $E(x_*,t_*)=E'(x_*,t_*)$ and $B(x_*,t_*)=B'(x_*,t_*)$ for every $x_*\in\mathbb R^3$ and $t_*\in[t_0,T]$. For the model reading, put the event $q=(x_*,t_*)$ in the inertial chart $x^0=ct$ of [F10]; for an event $p=(y,v)$ with $t_0\le v\le t_*$ the displacement $q-p$ has components $(c(t_*-v),x_*-y)$, and by the closure description of the future cone in [F10] one has $p\le q$ if and only if $c(t_*-v)\ge|x_*-y|$, that is, $(y,v)\in K(x_*,t_*)$; hence $K(x_*,t_*)$ is the model causal past $J^-(q)$ intersected with the slab, and an event in the slab outside it cannot be joined to $q$ by a piecewise $C^1$ future causal path, since such a path has displacement in the closed future cone by [F10]. This is the modelling statement of clause (c) and carries no empirical claim. [step 1.1, step 5.1, F1, F10]

6.3 Compact support. Assume $E_0,B_0$ vanish off a compact $K$ and choose $\rho>0$ with $K\subseteq\overline B_\rho(0)$, which exists because compact subsets of $\mathbb R^3$ are bounded [F9]. For $x\notin K$ the fields $E_0,B_0$ vanish on a neighbourhood of $x$, so $\dot E_0=c^2\operatorname{curl}B_0$ and $\dot B_0=-\operatorname{curl}E_0$ vanish at $x$ as well: each component of the scalar data of step 1.1 vanishes off $K$, and $h=0$ vanishes off the compact set $\{0\}$. Fix $t\in[t_0,T]$ and $x$ with $|x|>\rho+c(t-t_0)$; then for every $y\in\overline B_{c(t-t_0)}(x)$ the reverse triangle inequality gives $|y|\ge|x|-|y-x|\ge|x|-c(t-t_0)>\rho$, so $y\notin K$ and all six scalar data vanish at $y$, and $(y,v)\in K(x,t)$ likewise has $v\in[t_0,t]$, $|y-x|\le c(t-v)$ and hence $|y|\ge|x|-c(t-v)\ge|x|-c(t-t_0)>\rho$, so $h(y,v)=0$; clause (d) of [F1] applied to each component with $\rho$ and the compact $\{0\}$ therefore gives $E(x,t)=B(x,t)=0$, which is clause (d). [step 1.1, step 5.1, F1, F9, algebra]

6.4 Finite-energy setup and the flux bound. Let $u$ and $S$ be the energy density and Poynting vector of [F5] for the fields of step 5.1; $u$ is a nonnegative $C^\infty$ function and $S$ a $C^\infty$ vector field, and by [F4] with $J=0$ the local Poynting identity $\partial_tu+\operatorname{div}S=0$ holds on the whole slab. For every $x$ and $v$, the coordinate identity $|E\times B|^2=|E|^2|B|^2-(E\cdot B)^2\le|E|^2|B|^2$ of [F14] gives $|S|=\mu_0^{-1}|E\times B|\le\mu_0^{-1}|E||B|=c\,pq$ with $p=\sqrt{\varepsilon_0}|E|$ and $q=|B|/\sqrt{\mu_0}$, because $c\sqrt{\varepsilon_0\mu_0}=1$ by [F11]; since $2pq\le p^2+q^2$ for real $p,q$, $|S|\le c(p^2+q^2)/2=c\,u$. [step 5.1, F4, F5, F11, F14, algebra]

7.1 Moving-ball identity. Fix $x_0\in\mathbb R^3$, $r_0>0$ and $t_0\le s\le t\le T$, put $r(v):=r_0+c(t-v)$ for $v\in[s,t]$ (so $r\ge r_0>0$ and $r'=-c$), and put $F(v):=\int_{B_{r(v)}(x_0)}u(x,v)\,dx$. For each $v$, the map $T_v(y)=x_0+r(v)y$ is a $C^1$ diffeomorphism of $\mathbb R^3$ with $\det DT_v=r(v)^3$, and $T_v(B_1(0))=B_{r(v)}(x_0)$; by the change-of-variables lemma [F7] applied to the nonnegative Borel function $u(\cdot,v)$, $F(v)=\int_{B_1(0)}f(y,v)\,dy$ with $f(y,v):=u(x_0+r(v)y,v)r(v)^3$, and the boundary sphere $S^2$ is Lebesgue null by [F9], so the integral may equivalently be taken over the compact set $\overline B_1(0)$. On an open neighbourhood of $\overline B_1(0)\times[s,t]$ the function $f$ and its partial derivative $\partial_vf=\nabla u(x_0+ry,v)\cdot r'y\,r^3+\partial_vu(x_0+ry,v)\,r^3+3r^2r'u(x_0+ry,v)$ are continuous, because $u$ is $C^\infty$ in the extension sense and $r$ is $C^1$; the parameter-integral lemma [F6] with the compact finite-measure set $\overline B_1(0)$ therefore gives the one-sided derivatives at the endpoints and $F'(v)=\int_{\overline B_1(0)}\partial_vf(y,v)\,dy$ for $v\in(s,t)$. For the signed continuous integrands below, substitution follows by applying [F7] to their positive and negative parts separately; each part has a finite integral on the compact ball, so the equalities may be subtracted. Expanding and substituting back, the first and third terms are $\int_{\overline B_1}\bigl[r^3r'\nabla u(x_0+ry,v)\cdot y+3r^2r'u(x_0+ry,v)\bigr]dy=\frac{r'}{r}\int_{B_r(x_0)}\operatorname{div}\bigl((x-x_0)u(x,v)\bigr)dx$, and the second term is $r^3\int_{\overline B_1}\partial_vu(x_0+ry,v)\,dy=\int_{B_r(x_0)}\partial_vu(x,v)\,dx$; the divergence theorem [F8] applies on the ball $B_r(x_0)$, a bounded $C^1$ domain with outward normal $n=(x-x_0)/r$, giving $\int_{B_r}\operatorname{div}\bigl((x-x_0)u\bigr)=r\int_{\partial B_r}u\,dS$ and, with $\partial_vu=-\operatorname{div}S$ from the Poynting identity of step 6.4, $\int_{B_r}\partial_vu=-\int_{\partial B_r}S\cdot n\,dS$. Hence $F'(v)=-\int_{\partial B_r(x_0)}\bigl(S\cdot n-r'(v)u\bigr)dS=-\int_{\partial B_r(x_0)}\bigl(S\cdot n+c\,u\bigr)dS$ with $r=r(v)$, and the integrand is nonnegative because $S\cdot n+cu\ge-|S|+cu\ge0$ by step 6.4; the surface integral of a nonnegative continuous function is nonnegative by the definition of the surface integral [F8], so $F'\le0$ on $(s,t)$. [step 6.4, F5, F6, F7, F8, F9, A1, given, algebra]

8.1 Local energy estimate and the equality. By step 7.1, $F$ is continuous on $[s,t]$ and differentiable on $(s,t)$ with $F'\le0$, so the mean value theorem [F9] gives $F(t)\le F(s)$, that is, for every $x_0\in\mathbb R^3$, $r_0>0$ and $t_0\le s\le t\le T$, $\int_{B_{r_0}(x_0)}u(x,t)\,dx\le\int_{B_{r_0+c(t-s)}(x_0)}u(x,s)\,dx$; this is the local inequality of clause (e) for the constructed pair, and the computation of step 7.1 used only the nonnegativity of $u$, the Poynting identity, the bound $|S|\le cu$ and the smoothness of the pair, so the same inequality holds for every smooth source-free Maxwell solution on a slab with its own energy density and flux. Taking $s=t_0$ and the supremum over $r_0>0$ with $x_0=0$ gives $\mathcal E(t)\le\mathcal E(t_0)$ for every $t\in[t_0,T]$. For the reverse inequality, apply the same computation to the pair $\widetilde E(x,v):=E(x,t-v)$, $\widetilde B(x,v):=-B(x,t-v)$ on $\mathbb R^3\times[0,t-t_0]$: by the chain rule and the four equations of step 5.1, $\operatorname{div}\widetilde E=\operatorname{div}\widetilde B=0$, $\operatorname{curl}\widetilde E=-\partial_v\widetilde B$ and $\operatorname{curl}\widetilde B=c^{-2}\partial_v\widetilde E$, so the pair is a smooth source-free solution on that slab, with energy density $u(x,t-v)$ and Poynting vector $-S(x,t-v)$; applying the local inequality with $s'=0$ and $t'=t-t_0$ gives $\int_{B_{r_0}(x_0)}u(x,t_0)\,dx\le\int_{B_{r_0+c(t-t_0)}(x_0)}u(x,t)\,dx\le\mathcal E(t)$ for every $r_0$, so $\mathcal E(t_0)\le\mathcal E(t)$. Hence if $\mathcal E(t_0)<\infty$ then $\mathcal E(t)=\mathcal E(t_0)$ for every $t\in[t_0,T]$. [step 5.1, step 7.1, F9, algebra]

9.1 Conclusion. Steps 1.1, 5.1 prove clause (a) with the explicit spherical-mean representation, step 6.1 proves clause (b), step 6.2 proves clause (c) including the model cone reading, step 6.3 proves clause (d), and steps 6.4, 7.1 and 8.1 prove clause (e) with the local estimate and the total-energy equality under $\mathcal E(t_0)<\infty$. Clause (f) records the scope: the argument is conditional on the adopted postulates and on $\mathrm{AC}_\omega$, which is used in step 1.1 through [F1], in step 7.1 through the change-of-variables and divergence suppliers [F7, F8] and the parameter-integral lemma [F6], and in step 8.1 through the same suppliers applied to the time-reversed pair; no decay, boundedness, compactness or finite-energy hypothesis was imposed on the data of the arbitrary-growth branch, no boundary condition, inhomogeneous source or weak-branch content is asserted, and the conclusion makes no empirical claim. [step 1.1, step 5.1, step 6.1, step 6.2, step 6.3, step 6.4, step 7.1, step 8.1, given] ∎

## Source notes

The two cited treatments derive the wave equation from empty-space Maxwell and emphasise that the converse fails, but do not state the constrained whole-space Cauchy theorem; the existence, uniqueness, finite-propagation and compact-support content is supplied by the cited mathematical Cauchy theory with the six scalar problems, and the constraint propagation is supplied by the Gauss-constraint theorem of the framework. The finite-energy branch is proved here from the local Poynting identity by a moving-ball energy estimate, without any restriction of the arbitrary-growth existence result.
