---
id: pthm-gr-minkowski-vacuum-model
kind: physics-theorem
title: "The Minkowski vacuum model with Lambda = 0: field law, free-fall kinematics and clock readings"
status: draft
origin: session
domain: physics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-minkowski-model-and-inertial-chart, lem-gr-flat-model-connection-curvature-and-geodesics, pthm-gr-adopted-action-and-einstein-equations, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, post-gr-einstein-field-law, post-gr-ideal-clocks-and-free-fall, pthm-gr-free-fall-worldline-is-determined-by-initial-data, pthm-gr-einstein-consistency-and-energy-conditions, pthm-gr-tidal-comparison, def-gr-stress-energy-tensor-field, def-gr-si-unit-and-coordinate-conventions, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-curvature-tensor-and-derived-tensors, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative]
dependency_roles:
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  lem-gr-flat-model-connection-curvature-and-geodesics: mathematical-premise
  pthm-gr-adopted-action-and-einstein-equations: physical-result
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  post-gr-einstein-field-law: physical-assumption
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  pthm-gr-free-fall-worldline-is-determined-by-initial-data: physical-result
  pthm-gr-einstein-consistency-and-energy-conditions: physical-result
  pthm-gr-tidal-comparison: physical-result
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
physical_scope: "Conditional model deduction inside the classical gravitational framework with the field law in its direct-equation presentation: the flat model spacetime R^4 with the Minkowski metric, zero cosmological parameter and the vacuum stress-energy content T=0 is a model of the framework satisfying the adopted field law, and its ideal free-fall worldlines and ideal-clock readings are the straight timelike lines and their proper times. Excludes: any claim that the vacuum is realized in nature, any empirical comparison (no observations, apparatus, calibration or uncertainty are used), non-vacuum matter, nonzero Lambda, nontrivial global topology, distributional sources and quantum effects. All conclusions are conditional on the adopted postulates."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1: Minkowski spacetime, inertial coordinates and the free motion of test particles; Ch. 4: the vacuum field equations with Lambda=0, printed pp. 6-20 (PDF pp. 13-27) and pp. 113-120 (PDF pp. 120-127)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.2: the Minkowski metric, inertial worldlines and proper time; section 4.1: the vacuum equations G=0 and the flat solution, printed pp. 12-29 (PDF pp. 19-36) and pp. 140-144 (PDF pp. 147-151)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.1: the trivial flat solution of the vacuum Einstein equations, printed pp. 41-43 (PDF pp. 42-44), and section 1.1 on free fall and clocks in flat spacetime, printed pp. 5-10 (PDF pp. 6-11)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the postulates [[post-gr-spacetime-and-classical-domain]],
[[post-gr-field-and-matter-assumptions]],
[[post-gr-einstein-field-law]] and
[[post-gr-ideal-clocks-and-free-fall]] of the classical gravitational
framework, with the field law in its direct-equation presentation. Let
$(M,g,N)$ be the flat model of
[[def-gr-minkowski-model-and-inertial-chart]] with inertial chart $x$, let
$\Lambda:=0$ and let the model's stress-energy tensor be the vacuum
prescription

$$T:=0\qquad\text{on }M .$$

Then all statements below are conditional deductions inside the model so
specified; they assert nothing about nature.

**(a) The flat vacuum model.** $(M,g,N)$ satisfies the spacetime postulate,
$T=0$ is a smooth symmetric stress-energy tensor field on the matter domain
$M$ in the sense of [[def-gr-stress-energy-tensor-field]], the prescription
$T=0$ is admissible, and the adopted field law
$G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ holds identically on $M$; in the
notation of [[pthm-gr-einstein-consistency-and-energy-conditions]] clause (d)
this is its flat vacuum solution, here read as a model of the framework.

**(b) Free fall and clocks.** Let $p\in M$ and let $U_0\in T_pM$ be future
timelike with $g_p(U_0,U_0)=-c^2$. In the inertial chart write
$x(p)=x_0$ and $U_0=c\,v$ with $\eta(v,v)=-1$ and $v^0>0$. Then the worldline the model assigns to an
ideal freely falling massive test body released at $p$ with four-velocity
$U_0$ is the straight line

$$x\bigl(\gamma(\tau)\bigr)=x_0+v\,c\,\tau$$

($\tau$ proper time, so $x^0$ is measured in metres along $c\tau$); its
coordinate velocity is the constant $w=(c/v^0)(v^1,v^2,v^3)$ with
$|w|<c$; and an ideal clock carried along it reads, between two coordinate
times $t_0<t_1$,

$$\Delta\tau=\sqrt{1-\frac{|w|^2}{c^2}}\;(t_1-t_0),\qquad t=x^0/c .$$

The worldline is determined by $(p,U_0)$ alone.

**(c) No tidal response.** Every free-fall congruence of this model has
vanishing relative acceleration: $D_\tau^2J=0$, since the curvature vanishes
identically.

**(d) Scope.** The model is an idealized vacuum model of the framework, not a
claim about the actual universe: no observation, apparatus, calibration or
uncertainty is used, and no comparison with data is made. The flat model
solves the field law with the chosen parameters $(\Lambda,T)=(0,0)$; other
solutions of the same field law exist and are not excluded, and flat
solutions with different global topology exist as well (see the scope remark
of this page). The physical interpretation of coordinates, clocks and bodies
remains the adopted one of the cited postulates.

## Facts & Assumptions

**Given:** The adopted framework postulates in the direct-equation presentation, the flat model $(M,g,N)$ of [[def-gr-minkowski-model-and-inertial-chart]], the parameters $c,G_N>0$ and $\Lambda=0$, and the vacuum prescription $T=0$.

[A1] The model spacetime is a smooth time-oriented Lorentzian four-manifold without boundary, and the framework adopts the model's geometry and its matter content separately; a model that prescribes $T$ directly is admissible only if the prescription meets the consistency conditions imposed by the adopted field law ([[post-gr-spacetime-and-classical-domain]] clauses (i) and (iv), [[post-gr-field-and-matter-assumptions]] clauses (ii)-(iii)).

[A2] The field law of the direct-equation presentation is $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ with $\kappa=8\pi G_N/c^4$, and it is the model's adopted gravitational dynamics ([[post-gr-einstein-field-law]] clause (i), [[def-gr-si-unit-and-coordinate-conventions]] clause (a), [[def-gr-curvature-tensor-and-derived-tensors]] clause (c)).

[A3] An ideal freely falling massive test body of the model has as worldline a future timelike geodesic with $g(U,U)=-c^2$, proper time an affine parameter, and the worldline is determined by the release event and four-velocity; ideal clocks read the proper time of their worldline ([[post-gr-ideal-clocks-and-free-fall]] clauses (i)-(ii), [[pthm-gr-free-fall-worldline-is-determined-by-initial-data]], [[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

[L1] In the inertial chart of the flat model the Christoffel symbols of the metric-selected connection vanish, the curvature tensor vanishes, $G_{ab}\equiv0$, and the geodesics are the affinely parametrized straight lines: a geodesic has $x(\gamma(s))=x_0+sv$ with constant $v$, speed $\eta(v,v)$, maximal domain $\mathbb R$; if $\eta(v,v)<0$ and $v^0>0$ it is a future timelike worldline with four-velocity $U=d\gamma/d\tau$, $g(U,U)=-c^2$, and coordinate velocity $w=(c/v^0)(v^1,v^2,v^3)$ of norm $<c$ ([[lem-gr-flat-model-connection-curvature-and-geodesics]] clauses (a)-(e), [[def-gr-minkowski-model-and-inertial-chart]] clause (c), [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L2] For the flat metric with $T=0$ and $\Lambda=0$ the field law holds identically, and with $\Lambda\ne0$ it fails; the consistency condition $\nabla^aT_{ab}=0$ holds for $T=0$ ([[pthm-gr-einstein-consistency-and-energy-conditions]] clause (d)).

[L3] If the curvature vanishes on an open set, every free-fall congruence with worldlines there satisfies $D_\tau^2J=R(U,J)U=0$ ([[pthm-gr-tidal-comparison]] clause (c)).

## Proof

**Proof technique:** direct; verify the model postulates and the field law from the vanishing curvature, then read free fall and clocks off the classification of flat geodesics.

1.1 (The model and its field law.) By [[def-gr-minkowski-model-and-inertial-chart]] clauses (a)-(c), $(M,g,N)$ is a smooth time-oriented Lorentzian four-manifold without boundary; by [A1] it satisfies the spacetime postulate, and $T=0$ is a smooth symmetric covariant $2$-tensor field on the matter domain $M$. By [L1], $G_{ab}\equiv0$; with $\Lambda=0$ and $T=0$, $G_{ab}+\Lambda g_{ab}=0=\kappa T_{ab}$ holds identically, and $\nabla^aT_{ab}=0$ trivially, so the prescription is admissible by [A1] and the field law holds by [A2]; this is also the flat vacuum solution of [L2]. This proves (a). [A1, A2, L1, L2, given, algebra]

1.2 (Free fall and clock readings.) Let $p,U_0$ be as in (b), and write $U_0=c v$ with $\eta(v,v)=-1$, $v^0>0$; the normalization is possible by [[def-gr-minkowski-model-and-inertial-chart]] clause (c). By [A3] the worldline is the future timelike geodesic through $(p,U_0)$ with proper time as affine parameter, and by [A3] it is determined by $(p,U_0)$. By [L1] it is the straight line $x(\gamma(s))=x_0+sv$. With proper-time parametrization $\tau=s/c$ (the normalization $\lambda=1$ of [L1]), this is $x(\gamma(\tau))=x_0+c\tau v$; the coordinate velocity is the constant $w=(c/v^0)(v^1,v^2,v^3)$ with $|w|<c$ by [L1]. Finally, the ideal clock reads proper time by [A3], and from the parametrization $t=x^0/c$ along the line, $t-t_0=v^0\tau$; since $|w|^2/c^2=1-1/(v^0)^2$ by [L1] clause (e), $\sqrt{1-|w|^2/c^2}=1/v^0$ and hence $\Delta\tau=(1/v^0)(t_1-t_0)=\sqrt{1-|w|^2/c^2}(t_1-t_0)$. This proves (b). [A3, L1, given, algebra]

1.3 (No tidal response.) The curvature vanishes identically by [L1], so by [L3] every free-fall congruence satisfies $D_\tau^2J=0$. This proves (c). [L1, L3, algebra]

2.1 (Conclusion and status.) Steps 1.1-1.3 establish (a)-(c) as consequences of the adopted postulates and the cited mathematics, using no observation, apparatus or measured input; clause (d) records that the model is one solution among many and carries no empirical assertion, in particular no claim that the vacuum or the flat topology is realized in nature. [step 1.1, step 1.2, step 1.3, given] ∎

## Remarks

- **One model among many.** Nothing in the deduction selects the flat model uniquely: the field law admits non-flat solutions, and flat Lorentzian solutions with different global topology are not excluded by the local computations here. The model is used on this page as the flat comparison background of the weak-field bridge, not as a claim about the world.
- **Presentations.** The deduction uses the direct-equation presentation of the field law. In the action presentation the same model is described by a vacuum matter sector; the equivalence of the presentations on the stated domain is [[pthm-gr-adopted-action-and-einstein-equations]], and no second adoption of the equation is implied.
