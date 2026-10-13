---
id: pthm-gr-schwarzschild-vacuum-model
kind: physics-theorem
title: "The Schwarzschild exterior vacuum model: field law, static clock readings and the mass parameter"
status: published
origin: session
domain: physics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-ricci-and-einstein-tensors, lem-gr-schwarzschild-static-congruence-and-clock-rates, lem-gr-schwarzschild-circular-orbits-and-photon-sphere, lem-gr-schwarzschild-isotropic-coordinate-form, def-gr-stationary-weak-field-data, def-gr-newtonian-comparison-model-and-identification, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, post-gr-einstein-field-law, post-gr-ideal-clocks-and-free-fall, def-gr-stress-energy-tensor-field, def-gr-si-unit-and-coordinate-conventions, def-gr-smooth-lorentzian-objects, def-gr-observer-congruence-and-adapted-charts, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-derivative, thm-chain-rule, def-rational-power]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-ricci-and-einstein-tensors: mathematical-premise
  lem-gr-schwarzschild-static-congruence-and-clock-rates: mathematical-premise
  lem-gr-schwarzschild-circular-orbits-and-photon-sphere: mathematical-premise
  lem-gr-schwarzschild-isotropic-coordinate-form: mathematical-premise
  def-gr-stationary-weak-field-data: formulation-prerequisite
  def-gr-newtonian-comparison-model-and-identification: formulation-prerequisite
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  post-gr-einstein-field-law: physical-assumption
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-rational-power: mathematical-premise
physical_scope: "Conditional model deduction inside the classical gravitational framework with the field law in its direct-equation presentation: the Schwarzschild exterior datum of mass parameter m_* > 0 with the vacuum stress-energy prescription T = 0 and zero cosmological parameter is a model of the framework satisfying the adopted field law; its ideal static clocks read the proper times of the static congruence, and the parameter enters the model through the Schwarzschild radius, the round-sphere angular speed of circular geodesics and the leading far-field coefficient. Excludes: any claim that the model or its vacuum content is realized in nature, any empirical comparison (no observation, apparatus, calibration or uncertainty), non-vacuum matter, nonzero Lambda, the interior and horizon region (which belongs to the extension and Kruskal items of the page), distributional sources, and quantum effects. All conclusions are conditional on the adopted postulates."
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1: the Schwarzschild metric (6.1) as the solution for the exterior of a spherically symmetric mass, its independence of the time coordinate and the identification of the parameter M, printed pp. 232-233 (PDF pp. 239-240)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.29)-(7.34): the Schwarzschild metric with the parameter M, its interpretation as the conventional mass in the weak-field limit, and the static form of the solution, printed pp. 170-172 (PDF pp. 177-179)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.3: the Schwarzschild metric and the identification of the mass parameter M, printed pp. 14-16"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Statement

Adopt the postulates [[post-gr-spacetime-and-classical-domain]],
[[post-gr-field-and-matter-assumptions]],
[[post-gr-einstein-field-law]] and
[[post-gr-ideal-clocks-and-free-fall]] of the classical gravitational
framework, with the field law in its direct-equation presentation and the unit
conventions of [[def-gr-si-unit-and-coordinate-conventions]]. Let
$(M,g,N)$ be the Schwarzschild exterior datum of mass parameter $m_*>0$ with
Schwarzschild radius $s=2G_Nm_*/c^2$ and static congruence
$n=f^{-1/2}\partial_0$, $f(r)=1-s/r$
([[def-gr-schwarzschild-exterior-model]]), and let the model's stress-energy
tensor be the vacuum prescription

$$T:=0\qquad\text{on }M,\qquad \Lambda:=0 .$$

Then all statements below are conditional deductions inside the model so
specified; they assert nothing about nature.

**(a) The Schwarzschild vacuum model.** $(M,g,N)$ satisfies the spacetime
postulate, $T=0$ is a smooth symmetric stress-energy tensor field on the
matter domain $M$ in the sense of [[def-gr-stress-energy-tensor-field]], the
prescription is admissible, and the adopted field law
$G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ holds identically on $M$. A **vacuum solution with zero cosmological parameter** here means
precisely a datum satisfying that equation with $T=0$ and $\Lambda=0$;
this datum is such a solution, read as a model of the framework. The model is not locally flat: its curvature tensor is nowhere
zero, while its Ricci tensor and Einstein tensor vanish identically
([[lem-gr-schwarzschild-ricci-and-einstein-tensors]] clause (d)).

**(b) Static clock readings.** The integral curves of $n$ are the static
observer worldlines at constant radius $r_0$
([[lem-gr-schwarzschild-static-congruence-and-clock-rates]] clause (b));
adopting the clock rule of [[post-gr-ideal-clocks-and-free-fall]] clause (i),
the reading difference of an ideal clock carried along such a worldline
between two events whose coordinate times differ by $\Delta t$ is

$$\Delta\tau=\sqrt{f(r_0)}\,\Delta t=\sqrt{1-\frac{s}{r_0}}\;\Delta t,$$

so two static clocks at radii $r_1,r_2$ compared over the same coordinate
interval with $\Delta t\ne0$ satisfy $\Delta\tau_1/\Delta\tau_2=\sqrt{f(r_1)/f(r_2)}$. The static
worldlines are not geodesics: their acceleration is
$a=\frac{s}{2r^2}\partial_r\ne0$, so the model assigns them to accelerated
(constrained) bodies and not to freely falling ones.

**(c) The mass parameter.** The parameter $m_*$ enters the model only through
$s=2G_Nm_*/c^2$ and through the quantities below; the framework reads $m_*$ as
the mass parameter of the model in kilograms
([[def-gr-si-unit-and-coordinate-conventions]] clause (a),
[[def-gr-schwarzschild-exterior-model]] clause (a)):

1. Let $\gamma:I\to M$ be a smooth future timelike geodesic, parametrized
   by proper time $\tau$ on an interval with nonempty interior, with
   $r\circ\gamma\equiv r_0>\frac{3s}{2}$. Put $\sigma:=\iota\circ\gamma:I\to S^2$
   and $t:=(x^0\circ\gamma)/c$. Its **angular speed with respect to $t$** is
   $\Omega:=\sqrt{\gamma_{S^2}(d\sigma/dt,d\sigma/dt)}$, where
   $d\sigma/dt:=\sigma'(\tau)/t'(\tau)$ and $t'(\tau)>0$ by future
   timelikeness. It has units $\mathrm s^{-1}$ and satisfies
   $\Omega^2=G_Nm_*/r_0^3$ in every angular orientation. For an equatorial
   curve, $\vartheta=\pi/2$ and $\Omega^2=(d\varphi/dt)^2$ in local polar
   charts ([[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]]
   clause (a) and proof step 2.2). This is the Kepler-like law in which
   $m_*$ plays the role of the central mass;
2. in the isotropic chart of
   [[lem-gr-schwarzschild-isotropic-coordinate-form]], with
   $a=s/(4\rho)$, the exact identity
   $g_{00}+1=1-\bigl((1-a)/(1+a)\bigr)^2=4a/(1+a)^2$ gives
   $$g_{00}+1=+\frac{s}{\rho}+O(\rho^{-2})=+\frac{2G_Nm_*}{c^2\rho}+O(\rho^{-2}).$$
   Under the weak-field convention $g_{00}=-(1+2\Phi/c^2)$ to leading order
   ([[def-gr-stationary-weak-field-data]]), this is the coefficient
   $-2\Phi_N/c^2$ for the explicit exterior Newtonian potential
   $\Phi_N(\rho):=-G_Nm_*/\rho$ in the comparison reading of
   [[def-gr-newtonian-comparison-model-and-identification]].

The reading is a statement about the model's own identities and the adopted
unit and weak-field conventions; no numerical value of $G_N$ or $m_*$, no
Newtonian source model realized by matter and no comparison with any reported
mass is asserted.

**(d) Scope.** The model is an idealized vacuum model of the framework, not a
claim about the actual universe: no observation, apparatus, calibration or
uncertainty is used, and no comparison with data is made. The datum solves the
field law with the chosen parameters $(m_*,\Lambda,T)=(m_*,0,0)$; other
solutions of the same field law exist and are not excluded, and the exterior
domain $r>s$ contains no horizon or interior region, whose treatment is the
subject of the extension and Kruskal items of this page. The physical
interpretation of coordinates, clocks and bodies remains the adopted one of
the cited postulates.

## Facts & Assumptions

**Given:** The adopted framework postulates, the Schwarzschild exterior datum with $m_*>0$, $s=2G_Nm_*/c^2$, its metric $g$, its static congruence $n=f^{-1/2}\partial_0$, the parameters $\Lambda=0$ and $T=0$, and the coupling $\kappa=8\pi G_N/c^4$.

[A1] The model spacetime is a smooth time-oriented Lorentzian four-manifold without boundary, and the framework adopts the model's geometry and its matter content separately; a model that prescribes $T$ directly is admissible only if the prescription meets the consistency conditions imposed by the adopted field law ([[post-gr-spacetime-and-classical-domain]] clauses (i) and (iv), [[post-gr-field-and-matter-assumptions]] clauses (ii)-(iii)).

[A2] The field law of the direct-equation presentation is $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ with $\kappa=8\pi G_N/c^4$, and it is the model's adopted gravitational dynamics ([[post-gr-einstein-field-law]] clause (i), [[def-gr-si-unit-and-coordinate-conventions]] clause (a)).

[A3] An ideal clock is an idealized device carried along a future timelike worldline whose readings reproduce the proper time of that worldline; ideal freely falling massive test bodies follow future timelike geodesics with $g(U,U)=-c^2$; ideal light rays are future null geodesics ([[post-gr-ideal-clocks-and-free-fall]] clauses (i)-(iii), [[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

[L1] The Schwarzschild exterior datum $(M,g,N)$ is a smooth time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, with $f=1-s/r>0$ on $r>s$; its Ricci tensor, scalar curvature and Einstein tensor vanish identically, and its curvature tensor is nowhere zero ([[lem-gr-schwarzschild-metric-properties]], [[lem-gr-schwarzschild-ricci-and-einstein-tensors]] clauses (c)-(d)).

[L2] The static congruence $n=f^{-1/2}\partial_0$ is a future-directed unit timelike smooth field whose integral curves are the curves of constant $(r,\vartheta,\varphi)$; along such a curve the proper-time increment over a coordinate increment $\Delta x^0$ is $\Delta\tau=\sqrt{f(r_0)}\,\Delta x^0/c=\sqrt{f(r_0)}\,\Delta t$, its acceleration is $a=\frac{s}{2r^2}\partial_r\ne0$, and the ratio of proper-time increments of two static observers over a common nonzero coordinate interval is $\sqrt{f(r_1)/f(r_2)}$ ([[lem-gr-schwarzschild-static-congruence-and-clock-rates]] clauses (a)-(e), [[def-gr-observer-congruence-and-adapted-charts]], [[def-gr-timelike-worldline-and-proper-time]]).

[L3] For a constant-radius future timelike geodesic, the radial equation gives $\gamma_{S^2}(\sigma',\sigma')=\frac{f'(r_0)}{2r_0}((x^0\circ\gamma)')^2$ in every sphere chart, including pole charts ([[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] proof step 2.2); its equatorial longitude law is $(d\varphi/dt)^2=G_Nm_*/r_0^3$ (that supplier's clause (a)). In the isotropic chart, $g_{00}=-(1-a)^2/(1+a)^2$ with $a=s/(4\rho)$, so direct algebra gives $g_{00}+1=4a/(1+a)^2=+s/\rho+O(\rho^{-2})$. The weak-field metric convention is $g_{00}=-(1+2\Phi/c^2)$ to first order, and the comparison dictionary identifies its potential with the Newtonian comparison potential; choosing $\Phi_N(\rho)=-G_Nm_*/\rho$ gives $-2\Phi_N/c^2=+s/\rho$ ([[lem-gr-schwarzschild-isotropic-coordinate-form]] clause (b), [[def-gr-stationary-weak-field-data]], [[def-gr-newtonian-comparison-model-and-identification]], [[def-derivative]], [[thm-chain-rule]], [[def-rational-power]]).

[L4] By direct substitution in [A2], any datum with $G=0$, $T=0$ and $\Lambda=0$ satisfies $G+\Lambda g=0=\kappa T$. The covariant derivative of the zero tensor is zero, so this prescription also satisfies $\nabla^aT_{ab}=0$. This is a local algebraic deduction from [[post-gr-einstein-field-law]] clause (i), not an application of its flat example.

## Proof

**Proof technique:** verify the model postulates and the field law from the vanishing Einstein tensor, then read the clock and mass-parameter statements off the cited geometric lemmas through the adopted postulates.

1.1 (The model and its field law.) By [L1] and [[def-gr-schwarzschild-exterior-model]] the datum is a smooth time-oriented Lorentzian four-manifold without boundary, so it satisfies the spacetime postulate by [A1]; $T=0$ is a smooth symmetric covariant $2$-tensor field on the matter domain $M$. By [L1], $G_{ab}\equiv0$; with $\Lambda=0$ and $T=0$, $G_{ab}+\Lambda g_{ab}=0=\kappa T_{ab}$ holds identically and $\nabla^aT_{ab}=0$ trivially, so the prescription is admissible by [A1] and satisfies the field law by [A2], which is the vacuum solution of [L4]. That the model is not locally flat is [L1]. This proves (a). [A1, A2, L1, L4, given, algebra]

1.2 (Static clock readings.) By [L2] the integral curves of $n$ are the constant-radius worldlines and are smooth future timelike curves; by [A3] the model assigns to an ideal clock carried along each of them the reading equal to the proper time, and [L2] gives the increment $\Delta\tau=\sqrt{f(r_0)}\Delta t$ and, for a common $\Delta t\ne0$, the ratio $\sqrt{f(r_1)/f(r_2)}$ for two radii; the denominator is nonzero since $f(r_2)>0$. Since [L2] also gives $a=\frac{s}{2r^2}\partial_r\ne0$, the static worldlines are not geodesics, so by [A3] the model does not assign them to freely falling test bodies. This proves (b). [A3, L2, algebra]

1.3 (The mass parameter.) By [[def-gr-schwarzschild-exterior-model]] clauses (a) and (c), the parameter $m_*$ enters the associated geometry through $s=2G_Nm_*/c^2$. For a circular geodesic $\gamma$ as in (c)(1), future timelikeness gives $g(\gamma',N)=-f(r_0)(x^0\circ\gamma)'<0$, hence $t'=(x^0\circ\gamma)'/c>0$. Dividing the radial identity of [L3] by $(t')^2$ gives $\Omega^2=c^2f'(r_0)/(2r_0)=c^2s/(2r_0^3)=G_Nm_*/r_0^3$. This identity uses the round metric and is independent of the angular chart; at the equator its polar expression is $(d\varphi/dt)^2$. For the isotropic chart, the exact coefficient in [L3] gives
$$g_{00}+1=\frac{4a}{(1+a)^2}=4a+O(a^2)=+\frac{s}{\rho}+O(\rho^{-2})=+\frac{2G_Nm_*}{c^2\rho}+O(\rho^{-2}),\qquad a=\frac{s}{4\rho},$$
as $\rho\to\infty$ with fixed $s$, by the exact identity $(1+a)^{-2}=1+O(a)$. The weak-field convention and comparison dictionary in [L3] identify the leading coefficient as $-2\Phi_N/c^2$ for $\Phi_N(\rho)=-G_Nm_*/\rho$. The framework's unit conventions of [[def-gr-si-unit-and-coordinate-conventions]] read $m_*$ in kilograms, and these are the model's own occurrences of the parameter; no numerical value, source model or observation enters. This proves (c). [L3, algebra]

2.1 (Status and scope.) Steps 1.1-1.3 establish (a)-(c) as consequences of the adopted postulates and the cited mathematics, using no observation, apparatus or measured input; clause (d) records that the model is one solution among many, that the exterior domain excludes the horizon and interior and that no empirical claim is made. [step 1.1, step 1.2, step 1.3, given] ∎

## Remarks

- **One model among many.** Nothing in the deduction selects the Schwarzschild exterior uniquely: the vacuum field law admits many other solutions, and the local Birkhoff theorem of this page shows only that a vacuum warped product with spherical orbits is locally of this form under the stated hypotheses. The model is used on this page as the exact spherical comparison model, not as a claim about the world.

- **Where the staticity entered.** Clause (b) is a statement about the model's static congruence and its ideal clocks; it does not assert that any real clock is ideal, and the acceleration statement is the geometric reason why holding a clock at fixed radius is not free fall in this model.
