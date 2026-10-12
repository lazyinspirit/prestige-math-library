---
id: pthm-gr-plane-wave-tidal-detector-response
kind: physics-theorem
title: "Response of ideal test bodies and of the ideal two-body detector to a TT plane wave: free-fall worldlines, first-order relative acceleration and strain"
status: draft
origin: session
domain: physics
dependency_level: 15
physical_scope: "Conditional model deduction inside the classical gravitational framework: a model spacetime R^4 with the small-amplitude TT plane-wave metric g(lambda) = eta + lambda h, the adopted clock and free-fall postulates, and ideal structureless test bodies whose worldlines are future timelike geodesics. The conclusions are the model's relative acceleration of neighbouring freely falling test bodies to first order in the amplitude and the strain function of an ideal two-body detector. Excludes self-force, spin, finite size, elasticity, internal resonances, detector noise, the propagation and readout of light, any measurement and any comparison with data; the perturbation solves the field law exactly only up to a residual quadratic in the amplitude, so all conclusions are conditional on being in the linearized regime."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-ideal-clocks-and-free-fall, post-gr-spacetime-and-classical-domain, def-gr-si-unit-and-coordinate-conventions, pthm-gr-free-fall-worldline-is-determined-by-initial-data, pthm-gr-tidal-comparison, thm-gr-jacobi-equation-and-geodesic-deviation, def-gr-jacobi-field-and-conjugate-instant, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-metric-selected-connection, def-christoffel-symbols-of-an-affine-connection, def-geodesic-of-an-affine-connection, def-covariant-derivative-along-a-curve, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-plane-wave-perturbation, def-gr-wave-screen-and-tt-projection, def-gr-linearized-wave-regime-and-detector-coupling, thm-gr-tt-plane-wave-solutions, thm-gr-tt-plane-wave-curvature, def-gr-flat-linearized-perturbation, thm-gr-flat-linearized-curvature-and-gauge, def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-covariant-two-tensor-field, def-gr-smooth-lorentzian-objects, def-causal-classification-of-lorentz-vectors, cor-taylor-lagrange-and-cauchy-remainders, def-rational-power, def-real-order, lem-of-square-positive, def-compact-space, thm-heine-cantor-metric, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, thm-chain-rule, thm-algebra-of-derivatives, lem-gr-null-phase-coordinate]
dependency_roles:
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  post-gr-spacetime-and-classical-domain: physical-assumption
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  pthm-gr-free-fall-worldline-is-determined-by-initial-data: physical-result
  pthm-gr-tidal-comparison: physical-result
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  def-gr-jacobi-field-and-conjugate-instant: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-plane-wave-perturbation: mathematical-premise
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  def-gr-linearized-wave-regime-and-detector-coupling: formulation-prerequisite
  thm-gr-tt-plane-wave-solutions: mathematical-premise
  thm-gr-tt-plane-wave-curvature: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  cor-taylor-lagrange-and-cauchy-remainders: mathematical-premise
  def-rational-power: mathematical-premise
  def-real-order: mathematical-premise
  lem-of-square-positive: mathematical-premise
  def-compact-space: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-gr-null-phase-coordinate: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.58)-(6.66): the geodesic deviation equation for slowly moving test particles, the component R^i_{00j} = (1/2) d_0^2 h^i_j and the oscillating separations for the + and x polarizations, printed pp. 152-153 (PDF pp. 159-160)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.2: the geodesic deviation equation d^2S^mu/dt^2 = (1/2) d^2h^mu_nu/dt^2 S^nu, the circle-to-ellipse deformation and the arm response L' = L(1 +/- H_+/2), printed pp. 212-215 (PDF pp. 219-222)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.3: the parallelly transported frame, the geodesic deviation equation (7.52)-(7.55) and the relative displacements caused by + and x polarized waves, printed pp. 79-81 (PDF pp. 80-82)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework postulates [[post-gr-spacetime-and-classical-domain]] and
[[post-gr-ideal-clocks-and-free-fall]] ([[def-gr-si-unit-and-coordinate-conventions]]).
Let $(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its inertial
chart, let $A_+,A_\times\in C^\infty(\mathbb R)$ be bounded with
$M_0:=\sup_{\mathbb R}\max\{|A_+|,|A_\times|\}$, let $h$ be the TT planar
perturbation of [[def-gr-plane-wave-perturbation]] clause (b) with these
amplitudes, and let $\lambda$ be a real parameter with
$|\lambda|<1/(2M_0)$ (when $M_0=0$ the perturbation vanishes and all
statements below are trivial). Let $g(\lambda)=\eta+\lambda h$ be the
resulting smooth Lorentzian metric on $\mathbb R^4$ with time orientation
$\partial_0$, and let the model be the framework model whose spacetime is
$(\mathbb R^4,g(\lambda),\partial_0)$; write $u(x)=x^0-x^3$. Let $x_0\in
\mathbb R^3$ be a reference point and $\delta\ne0$ a separation vector with
$\delta^0=0$, and let $\gamma_r(s):=(cs,\,x_0+r\delta)$, $r\in\mathbb R$, be
the straight coordinate lines. Then:

**(a) Free-fall worldlines.** For every $r$ the curve $\gamma_r$ is a future
timelike geodesic of the metric-selected connection of $g(\lambda)$ with
$g(\lambda)(\gamma_r',\gamma_r')=-c^2$, parametrized by its proper time $s$;
hence by clause (ii) of [[post-gr-ideal-clocks-and-free-fall]], together with
[[pthm-gr-free-fall-worldline-is-determined-by-initial-data]], the model
assigns exactly these worldlines to ideal freely falling massive test bodies
released with the corresponding initial data. In particular every
$(\gamma,\gamma_\delta)$ is a free-fall congruence in the sense of
[[pthm-gr-tidal-comparison]] clause (a).

**(b) Relative acceleration.** The field $J:=\partial_r\gamma\big|_{r=0}
=\delta^a\partial_a$ along $\gamma_0$ is the deviation field of the free-fall
family and satisfies the exact Jacobi equation

$$D_s^2J=R\bigl(\gamma_0',J\bigr)\gamma_0' .$$

Its first-order expansion in $\lambda$ is

$$D_s^2J=c^2\lambda\,\tfrac12\,\partial_0^2h^{i}{}_{j}\bigl(u(s)\bigr)\,\delta^j\,\partial_i+\rho(s),\qquad |\rho(s)|\le C\lambda^2\quad\text{for }s\in[-S,S],$$

uniformly on every compact parameter interval $[-S,S]$, where $C$ depends on
$S$, the reference point, $\delta$ and finitely many derivatives of
$A_+,A_\times$ but not on $\lambda$. In screen components
$(A_+''=d^2A_+/du^2$ etc.$)$ this reads

$$D_s^2J=\tfrac12c^2\lambda\Bigl(A_+''\delta^1+A_\times''\delta^2\Bigr)\partial_1+\tfrac12c^2\lambda\Bigl(A_\times''\delta^1-A_+''\delta^2\Bigr)\partial_2+\rho(s),$$

with no first-order component in the $\partial_3$ direction. By
[[pthm-gr-tidal-comparison]] clause (b) the left-hand side is the model's
relative four-acceleration of the two freely falling test bodies with
separation $\delta$; to zeroth order in $\lambda$ it vanishes, and its
first-order value is as displayed.

**(c) Detector strain.** Let $(\gamma,\gamma_\delta)$ be the ideal two-body
detector of [[def-gr-linearized-wave-regime-and-detector-coupling]] clause
(b) with separation $\delta$, and let $L_\delta(s)$ and $S_\delta(s)$ be its
proper separation and strain function. Then for every $s$

$$L_\delta(s)=|\delta|\sqrt{1+\lambda\,a(s)},\qquad a(s):=\frac{\delta^i\delta^jh_{ij}(s)}{|\delta|^2},\qquad S_\delta(s)=\sqrt{1+\lambda\,a(s)}-1,$$

with the quantity under the root positive; and with the arm direction
$n=\delta/|\delta|$,

$$a(s)=A_+\bigl(u(s)\bigr)\bigl((n^1)^2-(n^2)^2\bigr)+2A_\times\bigl(u(s)\bigr)n^1n^2 .$$

If the arm lies in the screen, $n=(\cos\theta,\sin\theta,0)$, then
$a(s)=A_+(u(s))\cos2\theta+A_\times(u(s))\sin2\theta$; in particular an arm
along $e_1$ sees $A_+$, an arm along $e_2$ sees $-A_+$, an arm along
$(e_1+e_2)/\sqrt2$ sees $A_\times$, and an arm along $e_3$ sees nothing. The
first-order strain response satisfies

$$\bigl|S_\delta(s)-\tfrac12\lambda\,a(s)\bigr|\le\tfrac12\lambda^2a(s)^2\qquad\text{whenever }|\lambda\,a(s)|\le\tfrac12 .$$

**Status.** Clauses (a)-(c) are conditional deductions from the adopted
postulates for the model spacetime $(\mathbb R^4,g(\lambda),\partial_0)$ and
for ideal test bodies and an ideal detector. The metric $g(\lambda)$
satisfies the vacuum field law exactly only up to a residual of order
$\lambda^2$ ([[thm-gr-tt-plane-wave-solutions]] clause (c)); consequently
all conclusions are predictions of the linearized model. No observation,
apparatus, noise model, light-propagation model or statistical statement is
made, and the item contains no empirical premise.
## Facts & Assumptions

**Given:** The framework postulates, the flat model with inertial chart, bounded TT profiles $A_+,A_\times$, the amplitude parameter $\lambda$ with $|\lambda|<1/(2M_0)$, the metric family $g(\lambda)=\eta+\lambda h$, a reference point $x_0$, a separation vector $\delta$ with $\delta^0=0$, $\delta\ne0$, and the curves $\gamma_r(s)=(cs,x_0+r\delta)$.

[A1] The model's ideal freely falling massive test body moves along a future timelike geodesic of the metric-selected connection with $g(U,U)=-c^2$, and its worldline is determined by its initial event and four-velocity; ideal clocks read the proper time of their worldlines ([[post-gr-ideal-clocks-and-free-fall]] clauses (i)-(ii), [[pthm-gr-free-fall-worldline-is-determined-by-initial-data]], [[lem-gr-proper-time-reparametrization-and-four-velocity]], [[def-gr-timelike-worldline-and-proper-time]]).

[A2] The metric-selected connection of $\eta+\lambda h$ is the unique torsion-free metric-compatible connection; its Christoffel symbols are $\Gamma^\mu{}_{ab}=\tfrac12g^{\mu\rho}(\partial_ag_{\rho b}+\partial_bg_{\rho a}-\partial_\rho g_{ab})$ in the chart, and a smooth curve is a geodesic with affine parameter $s$ exactly when $\ddot x^\mu+\Gamma^\mu{}_{ab}\dot x^a\dot x^b=0$ ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-christoffel-symbols-of-an-affine-connection]], [[def-geodesic-of-an-affine-connection]]).

[L1] The metric $g(\lambda)$ has components $g_{00}=-1$, $g_{0i}=0$ and $g_{ij}=\delta_{ij}+\lambda h_{ij}$ with $h$ supported on the $11,22,12,21$ entries, profiles bounded by $M_0$, and is a smooth Lorentzian metric with time orientation $\partial_0$ when $|\lambda|<1/(2M_0)$ ([[thm-gr-tt-plane-wave-solutions]] clause (a), [[def-gr-plane-wave-perturbation]] clause (b), [[def-gr-smooth-lorentzian-objects]], [[def-causal-classification-of-lorentz-vectors]]).

[L2] For a smooth two-parameter family of geodesics $F(s,r)$ with affine parameter $s$, the variation field $J=\partial_rF$ satisfies $D_sJ=D_rT$ and the exact geodesic deviation equation $D_s^2J=R(T,J)T$ with $T=\partial_sF$; for proper-time parametrization $T=U/c$ with $g(U,U)=-c^2$, and the model's relative four-acceleration of the free-fall congruence is $D_t^2J=R(U,J)U$ ([[thm-gr-jacobi-equation-and-geodesic-deviation]] clauses (a)-(b), [[def-gr-jacobi-field-and-conjugate-instant]], [[pthm-gr-tidal-comparison]] clauses (a)-(b), [[def-covariant-derivative-along-a-curve]]).

[L3] For a planar TT perturbation, $\partial_c\partial_dh_{ab}=F''_{ab}(u)n_cn_d$ with $n=\partial u$, and the first-order curvature satisfies $R^{(1)i}{}_{00j}=\tfrac12F''{}^i{}_j=\tfrac12\partial_0^2h^i{}_j$ ([[lem-gr-null-phase-coordinate]] clause (c), [[thm-gr-tt-plane-wave-curvature]] clause (c)).

[L4] The Christoffel family has the expansion $\Gamma^\mu{}_{ab}(\lambda,p)=\lambda\Gamma^{(1)\mu}{}_{ab}(p)+O(\lambda^2)$ with the first-order coefficient $\Gamma^{(1)\mu}{}_{ab}=\tfrac12\eta^{\mu\rho}(\partial_ah_{\rho b}+\partial_bh_{\rho a}-\partial_\rho h_{ab})$ and a quadratic remainder bounded on compact parameter sets by a Lagrange estimate; $\Gamma(0)=0$ ([[thm-gr-flat-linearized-curvature-and-gauge]] clauses (a), (e), [[cor-taylor-lagrange-and-cauchy-remainders]], [[def-gr-flat-linearized-perturbation]] clauses (b)-(c)).

[L5] On a compact set a continuous function is bounded and attains its bounds; the second-order Taylor remainder for $\sqrt{1+x}$ gives $|\sqrt{1+x}-1-\tfrac x2|\le\tfrac12x^2$ for $|x|\le\tfrac12$; squares are nonnegative ([[thm-heine-cantor-metric]], [[def-compact-space]], [[cor-taylor-lagrange-and-cauchy-remainders]], [[lem-of-square-positive]], [[def-real-order]], [[def-rational-power]]).

[L6] The detector's proper separation and strain are $L_\delta(s)=\sqrt{g(\lambda)_{\gamma(s)}(\delta_v,\delta_v)}$ and $S_\delta(s)=L_\delta(s)/|\delta|-1$; for a TT planar perturbation $h_{ij}$ enters only through $\delta^i\delta^jh_{ij}$; and the addition formulas give $\cos2\theta=\cos^2\theta-\sin^2\theta$ and $\sin2\theta=2\sin\theta\cos\theta$ ([[def-gr-linearized-wave-regime-and-detector-coupling]] clauses (b)-(c), [[def-gr-wave-screen-and-tt-projection]], [[thm-sine-and-cosine-derivatives]], [[thm-sine-and-cosine-addition-formulas]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

## Proof

**Proof technique:** direct; compute the two Christoffel symbols needed for the geodesic equation, apply the geodesic deviation theorem to the exact family, expand the covariant acceleration in the amplitude and evaluate the strain exactly.

1.1 (The two Christoffel symbols.) By [A2] the symbols of $g(\lambda)$ are $\Gamma^\mu{}_{ab}=\tfrac12g^{\mu\rho}(\partial_ag_{\rho b}+\partial_bg_{\rho a}-\partial_\rho g_{ab})$, and by [L1] the components $g_{00}=-1$ and $g_{0i}=0$ are constant, while $g_{ij}$ depends only on $u$. Hence $$\Gamma^0{}_{00}=\tfrac12g^{0\rho}(2\partial_0g_{\rho0}-\partial_\rho g_{00})=0,\qquad \Gamma^i{}_{00}=\tfrac12g^{i\rho}(2\partial_0g_{\rho0}-\partial_\rho g_{00})=\tfrac12g^{ij}(2\partial_0g_{0j}-\partial_jg_{00})=0,$$ because $\partial_0g_{0j}=0$ and $\partial_jg_{00}=0$. This proves (a) at the level of the geodesic equation: for $\gamma_r$ one has $\dot x^0=c$ constant and $\dot x^i=0$, so the geodesic equation $\ddot x^\mu+\Gamma^\mu{}_{ab}\dot x^a\dot x^b=0$ reduces to $\Gamma^\mu{}_{00}c^2=0$. [A2, L1, algebra]

1.2 (Timelike, future-directed and proper time.) For $\gamma_r$, $g(\lambda)(\gamma_r',\gamma_r')=c^2g_{00}(\lambda)=-c^2<0$ by [L1], and $g(\lambda)(\gamma_r',\partial_0)=-c<0$, so the curve is future timelike and, by the proper-time definition, $d\tau=c^{-1}\sqrt{c^2}\,ds=ds$; hence $s$ is proper time up to an additive constant and the physical four-velocity is $\gamma_r'=c\partial_0$. By [A1] the model assigns this worldline to an ideal freely falling test body, and the determination theorem identifies it among all release data. This completes (a). [A1, L1, algebra]

2.1 (Exact deviation equation.) The map $F(s,r):=\gamma_r(s)=(cs,x_0+r\delta)$ is smooth on $\mathbb R\times\mathbb R$ and each $s\mapsto F(s,r)$ is a geodesic with affine parameter $s$ by step 1.1; its variation field is $J=\partial_rF=\delta^a\partial_a$, a field with constant components. By [L2], $D_sJ=D_rT$ and $D_s^2J=R(T,J)T$ with $T=\gamma_0'=c\partial_0$; this is the exact Jacobi equation and, by [L2], $D_s^2J$ is the model's relative four-acceleration of the two test bodies. [L2, step 1.1, given]

2.2 (First-order expansion of the acceleration.) By [A2] and $\gamma_0'=c\partial_0$ (step 1.2), the covariant derivative of the constant-component field $J=\delta^a\partial_a$ is $D_sJ=\nabla_{c\partial_0}(\delta^a\partial_a)=c\,\delta^a\Gamma^\mu{}_{0a}\partial_\mu$, and hence $$D_s^2J=\nabla_{c\partial_0}\bigl(c\delta^a\Gamma^\mu{}_{0a}\partial_\mu\bigr)=c^2\delta^a\bigl(\partial_0\Gamma^\mu{}_{0a}\bigr)\partial_\mu+c^2\delta^a\Gamma^\nu{}_{0a}\Gamma^\mu{}_{0\nu}\partial_\mu .$$By [L4] we have $\Gamma^\mu{}_{0a}=\lambda\Gamma^{(1)\mu}{}_{0a}+O(\lambda^2)$ uniformly on compact parameter sets, hence $\partial_0\Gamma^\mu{}_{0a}=\lambda\partial_0\Gamma^{(1)\mu}{}_{0a}+O(\lambda^2)$ and $\Gamma\Gamma=O(\lambda^2)$; therefore $$D_s^2J=c^2\lambda\,\delta^a\partial_0\Gamma^{(1)\mu}{}_{0a}\partial_\mu+\rho_1(s),\qquad|\rho_1(s)|\le C_1\lambda^2\ \ (|s|\le S).$$By [L4], $\Gamma^{(1)\mu}{}_{0a}=\tfrac12\eta^{\mu\rho}(\partial_0h_{\rho a}+\partial_ah_{0\rho}-\partial_\rho h_{0a})$, and the last two terms vanish because $h_{0\rho}=0$ for every $\rho$ by the TT condition; hence $\Gamma^{(1)\mu}{}_{0a}=\tfrac12\partial_0h^\mu{}_a$ and $\partial_0\Gamma^{(1)\mu}{}_{0a}=\tfrac12\partial_0^2h^\mu{}_a$, so $$D_s^2J=\tfrac12c^2\lambda\,\partial_0^2h^\mu{}_a\delta^a\partial_\mu+\rho_1(s).$$This is the displayed expansion in coordinate form; for the screen components use the profile $F$ with $F''_{1j}\delta^j=A_+''\delta^1+A_\times''\delta^2$ and $F''_{2j}\delta^j=A_\times''\delta^1-A_+''\delta^2$ and $F''_{0j}=F''_{3j}=0$ ([[def-gr-plane-wave-perturbation]] clause (b)). [A2, L3, L4, step 1.2, given, algebra]

2.3 (Exact proper separation.) At $\gamma(s)$ the vector $\delta_v=\delta^a\partial_a$ has only spatial components, so by [L1] $$g(\lambda)_{\gamma(s)}(\delta_v,\delta_v)=\delta^i\delta^j\bigl(\delta_{ij}+\lambda h_{ij}(u(s))\bigr)=|\delta|^2\bigl(1+\lambda a(s)\bigr),\qquad a(s)=\frac{\delta^i\delta^jh_{ij}(s)}{|\delta|^2},$$ and the quantity is positive: $|\delta^i\delta^jh_{ij}|\le2M_0|\delta|^2$ because $h$ has the TT form with profiles bounded by $M_0$, so $1+\lambda a(s)\ge1-2M_0|\lambda|>0$ by the hypothesis $|\lambda|<1/(2M_0)$. Taking the nonnegative square root gives $L_\delta(s)=|\delta|\sqrt{1+\lambda a(s)}$ and hence $S_\delta(s)=\sqrt{1+\lambda a(s)}-1$ by [L6]. Substituting $h_{11}=A_+$, $h_{22}=-A_+$, $h_{12}=h_{21}=A_\times$ and $h_{i3}=0$ gives $a(s)=A_+(u(s))((n^1)^2-(n^2)^2)+2A_\times(u(s))n^1n^2$ with $n=\delta/|\delta|$; for $n^3=0$, writing $n^1=\cos\theta$, $n^2=\sin\theta$ for suitable $\theta$ and using the addition formulas of [L6] at $2\theta=\theta+\theta$, which give $\cos2\theta=\cos^2\theta-\sin^2\theta$ and $\sin2\theta=2\sin\theta\cos\theta$, yields $a=A_+\cos2\theta+A_\times\sin2\theta$. [L1, L5, L6, step 1.2, algebra]

3.1 (First-order strain.) By [L5] applied with $x=\lambda a(s)$, valid when $|\lambda a(s)|\le\tfrac12$, we have $|\sqrt{1+\lambda a}-1-\tfrac12\lambda a|\le\tfrac12(\lambda a)^2$. Hence the first-order strain response of the detector is $\tfrac12\lambda a(s)$, with the displayed quadratic error bound. This proves (c). [L5, step 2.3, algebra]

3.2 (Consistency with the curvature identity.) The right-hand side of the exact equation of step 2.1 is $c^2R^\mu{}_{00a}\delta^a\partial_\mu$; by [L3] its first-order coefficient is $c^2\lambda\cdot\tfrac12\partial_0^2h^\mu{}_a\delta^a$, in agreement with step 2.2. This is a check of the conventions; the relative-acceleration content of (b) is the direct computation of step 2.2. [L3, step 2.1, step 2.2, algebra]

4.1 (Status and conclusion.) Steps 1.1-3.2 derive clauses (a)-(c) from the adopted postulates for the model spacetime and the cited mathematics; the only physical inputs are the clock and free-fall rules, and the only metric input is the explicit TT plane-wave family. Because $g(\lambda)$ solves the vacuum field law only to order $\lambda^2$ ([[thm-gr-tt-plane-wave-solutions]] clause (c)), the displayed relative acceleration and strain are statements of the linearized model, not exact solution properties; no observation is used or predicted in the empirical sense. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, A1] ∎

## Remarks

- **What an observer "feels".** Clause (b) shows that a single freely falling test body has vanishing relative acceleration to zeroth order — the model's free-fall rule assigns it a geodesic and predicts no local force on it — while the *relative* acceleration of two nearby bodies is first order in the amplitude and proportional to the second derivative of the profile; this is the precise content of the familiar statement that a passing wave is felt only through relative motion.

- **No real detector is modelled.** Nothing here models light bouncing in an arm, elastic response, readout noise or calibration; the "strain function" is the ideal proper-separation ratio of clause (c) of [[def-gr-linearized-wave-regime-and-detector-coupling]], and its identification with any measured signal would require an apparatus model, empirical premises with uncertainties and a statistical analysis, none of which is supplied.
