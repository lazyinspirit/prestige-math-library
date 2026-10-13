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
deps: [def-gr-minkowski-model-and-inertial-chart, lem-gr-flat-model-connection-curvature-and-geodesics, pthm-gr-adopted-action-and-einstein-equations, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, post-gr-einstein-field-law, post-gr-ideal-clocks-and-free-fall, pthm-gr-free-fall-worldline-is-determined-by-initial-data, pthm-gr-einstein-consistency-and-energy-conditions, pthm-gr-tidal-comparison, def-gr-stress-energy-tensor-field, def-gr-si-unit-and-coordinate-conventions, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-curvature-tensor-and-derived-tensors, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-free-proper-action-quotient-manifold, def-free-and-proper-lie-group-actions, def-group-action, thm-smooth-inverse-function-theorem-on-manifolds, def-pullback-of-a-covariant-tensor-field, thm-differentiation-under-the-integral-sign, thm-ftc-first-part, thm-ftc-second-part, thm-chain-rule-for-total-derivatives, thm-clairaut-schwarz-mixed-partials, thm-compactness-under-continuous-maps, thm-gr-curvature-tensoriality-and-coordinate-formula]
dependency_roles:
  thm-free-proper-action-quotient-manifold: mathematical-premise
  def-free-and-proper-lie-group-actions: mathematical-premise
  def-group-action: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  def-pullback-of-a-covariant-tensor-field: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
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
physical_scope: "Conditional model deduction inside the classical gravitational framework with the field law in its direct-equation presentation: the flat model spacetime R^4 with the Minkowski metric, zero cosmological parameter and the vacuum stress-energy content T=0 is a model of the framework satisfying the adopted field law, and its ideal free-fall worldlines and ideal-clock readings are the straight timelike lines and their proper times. Clause (d) additionally compares this model with explicitly constructed flat quotient and non-flat vacuum models to establish that the same field law does not uniquely select the R^4 Minkowski geometry. The free-fall and clock conclusions (b)-(c) concern only the stated Minkowski model. Excludes: any claim that these vacua are realized in nature, any empirical comparison (no observations, apparatus, calibration or uncertainty are used), non-vacuum matter, nonzero Lambda, distributional sources and quantum effects. All conclusions are conditional on the adopted postulates."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1: Minkowski spacetime, inertial coordinates and the free motion of test particles; Ch. 4: the vacuum field equations with Lambda=0, printed pp. 6-20 (PDF pp. 13-27) and pp. 113-120 (PDF pp. 120-127)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.2: the Minkowski metric, inertial worldlines and proper time; section 4.1: the vacuum equations G=0 and the flat solution, printed pp. 12-29 (PDF pp. 19-36) and pp. 140-144 (PDF pp. 147-151)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.2: zero curvature of Minkowski space and local flatness, printed p. 42 (PDF p. 43); section 6.4: the adopted field law and vacuum equation Ric=0, (6.32)-(6.33), printed p. 67 (PDF p. 68); the comparison models and topology obstruction are verified locally"
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
$x(p)=x_0$ and $U_0=c\,v$ with $\eta(v,v)=-1$ and $v^0>0$. Then the physical worldline of an
ideal freely falling massive test body released at $p$ with four-velocity
$U_0$, with proper-time origin at release, is a restriction to its actual
proper-time interval $I\ni0$ of the unique maximal mathematical straight
geodesic on $\mathbb R$

$$x\bigl(\gamma(\tau)\bigr)=x_0+v\,c\,\tau$$

($\tau$ proper time, so $x^0$ is measured in metres along $c\tau$); its
coordinate velocity is the constant $w=(c/v^0)(v^1,v^2,v^3)$ with
$|w|<c$; and an ideal clock carried along it reads, between two coordinate
times $t_0<t_1$ within that physical worldline's domain,

$$\Delta\tau=\sqrt{1-\frac{|w|^2}{c^2}}\;(t_1-t_0),\qquad t=x^0/c .$$

The maximal geodesic continuation is determined by $(p,U_0)$ alone; the
free-fall postulate does not require the body's physical domain to be maximal.

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

[A3] An ideal freely falling massive test body of the model has as worldline a future timelike geodesic with $g(U,U)=-c^2$, proper time an affine parameter, and on its actual domain the worldline is the restriction of the unique maximal geodesic determined by the release event and four-velocity; ideal clocks read the proper time of their worldline ([[post-gr-ideal-clocks-and-free-fall]] clauses (i)-(ii), [[pthm-gr-free-fall-worldline-is-determined-by-initial-data]], [[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

[L1] In the inertial chart of the flat model the Christoffel symbols of the metric-selected connection vanish, the curvature tensor vanishes, $G_{ab}\equiv0$, and the geodesics are the affinely parametrized straight lines: a geodesic has $x(\gamma(s))=x_0+sv$ with constant $v$, speed $\eta(v,v)$, maximal domain $\mathbb R$; if $\eta(v,v)<0$ and $v^0>0$ it is a future timelike worldline with four-velocity $U=d\gamma/d\tau$, $g(U,U)=-c^2$, and coordinate velocity $w=(c/v^0)(v^1,v^2,v^3)$ of norm $<c$ ([[lem-gr-flat-model-connection-curvature-and-geodesics]] clauses (a)-(e), [[def-gr-minkowski-model-and-inertial-chart]] clause (c), [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L2] For the flat metric with $T=0$ and $\Lambda=0$ the field law holds identically, and with $\Lambda\ne0$ it fails; the consistency condition $\nabla^aT_{ab}=0$ holds for $T=0$ ([[pthm-gr-einstein-consistency-and-energy-conditions]] clause (d)).

[L3] If the curvature vanishes on an open set, every free-fall congruence with worldlines there satisfies $D_\tau^2J=R(U,J)U=0$ ([[pthm-gr-tidal-comparison]] clause (c)).

[F1] A smooth free proper Lie-group action has a Hausdorff second-countable smooth quotient, and its projection is a surjective submersion ([[def-group-action]], [[def-free-and-proper-lie-group-actions]], [[thm-free-proper-action-quotient-manifold]]). In equal dimensions its differential is invertible, so the projection is locally a diffeomorphism ([[thm-smooth-inverse-function-theorem-on-manifolds]]). Covariant tensors pull back by applying the differential to their arguments ([[def-pullback-of-a-covariant-tensor-field]]).

[F2] Smooth parameter integrals over a fixed compact interval can be differentiated under compact domination; the fundamental theorem differentiates primitives and evaluates integrals of derivatives. Smooth mixed partials commute, and continuous real functions are bounded on compact sets ([[thm-differentiation-under-the-integral-sign]], [[thm-ftc-first-part]], [[thm-ftc-second-part]], [[thm-chain-rule-for-total-derivatives]], [[thm-clairaut-schwarz-mixed-partials]], [[thm-compactness-under-continuous-maps]]). The metric-selected Christoffel formula and its curvature contraction are those of [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] and [[thm-gr-curvature-tensoriality-and-coordinate-formula]].

## Proof

**Proof technique:** direct; verify the model postulates and the field law from the vanishing curvature, then read free fall and clocks off the classification of flat geodesics.

1.1 (The model and its field law.) By [[def-gr-minkowski-model-and-inertial-chart]] clauses (a)-(c), $(M,g,N)$ is a smooth time-oriented Lorentzian four-manifold without boundary; by [A1] it satisfies the spacetime postulate, and $T=0$ is a smooth symmetric covariant $2$-tensor field on the matter domain $M$. By [L1], $G_{ab}\equiv0$; with $\Lambda=0$ and $T=0$, $G_{ab}+\Lambda g_{ab}=0=\kappa T_{ab}$ holds identically, and $\nabla^aT_{ab}=0$ trivially, so the prescription is admissible by [A1] and the field law holds by [A2]; this is also the flat vacuum solution of [L2]. This proves (a). [A1, A2, L1, L2, given, algebra]

1.2 (Free fall and clock readings.) Let $p,U_0$ be as in (b), and write $U_0=c v$ with $\eta(v,v)=-1$, $v^0>0$; the normalization is possible by [[def-gr-minkowski-model-and-inertial-chart]] clause (c). By [A3] the physical worldline is a restriction of the unique maximal future timelike geodesic through $(p,U_0)$, with proper time as affine parameter. By [L1] this maximal mathematical geodesic is the straight line $x(\gamma(s))=x_0+sv$. With proper-time parametrization $\tau=s/c$ (the normalization $\lambda=1$ of [L1]), this is $x(\gamma(\tau))=x_0+c\tau v$; the coordinate velocity is the constant $w=(c/v^0)(v^1,v^2,v^3)$ with $|w|<c$ by [L1]. Finally, for two coordinate times in the physical domain, the ideal clock reads proper time by [A3], and from the parametrization $t=x^0/c$ along the line, $\Delta t=v^0\Delta\tau$; since $|w|^2/c^2=1-1/(v^0)^2$ by [L1] clause (e), $\sqrt{1-|w|^2/c^2}=1/v^0$ and hence $\Delta\tau=(1/v^0)(t_1-t_0)=\sqrt{1-|w|^2/c^2}(t_1-t_0)$. This proves (b). [A3, L1, given, algebra]

1.3 (No tidal response.) The curvature vanishes identically by [L1], so by [L3] every free-fall congruence satisfies $D_\tau^2J=0$. This proves (c). [L1, L3, algebra]

1.4 (Another flat vacuum model.) Fix a length $\ell>0$. Let the discrete zero-dimensional Lie group $\mathbb Z$ act on $\mathbb R^4$ by $n\cdot z=z+(n\ell,0,0,0)$. Translations are smooth; the action is free since $n\ell=0$ forces $n=0$. For any compact set $A\subset\mathbb R^4\times\mathbb R^4$, both projections have bounded time coordinates, so its inverse image under $(n,z)\mapsto(n\cdot z,z)$ has only finitely many integer components. Each component is closed in a compact projection of $A$, hence compact; the inverse image is a finite union of compact sets. The action is therefore proper. By [F1], $Q:=\mathbb R^4/\mathbb Z$ is a smooth four-manifold with a locally diffeomorphic projection $q$. Define $g_Q$ and $N_Q$ by $q^*g_Q=\eta$ and $(N_Q)_{q(z)}=dq_z(\partial_0)$; these are well defined because translations preserve $\eta$ and $\partial_0$. In each inverse chart of $q$ they are smooth with $g_Q$ having constant components $\eta$ and $g_Q(N_Q,N_Q)=-1$. Thus $Q$ is time-oriented and flat. With $T_Q=0$, $\Lambda=0$, its Einstein tensor and stress divergence vanish, so it satisfies the same adopted vacuum field law and matter consistency condition. [F1, F2, A1, A2, L1, algebra]

2.1 (The quotient has different smooth global topology.) The translation-invariant covector $dz^0$ descends to a smooth covector field $\alpha$ on $Q$, with $q^*\alpha=dz^0$. Its coordinate components satisfy $\partial_i\alpha_j=\partial_j\alpha_i$ in every chart: in inverse charts they are constant, and the equality is preserved by coordinate changes by the chain rule and commuting mixed partials. The closed curve $\sigma(s)=q(s,0,0,0)$, $0\le s\le\ell$, satisfies $\int_0^\ell\alpha_{\sigma(s)}(\sigma'(s))\,ds=\ell$. If a diffeomorphism $F:\mathbb R^4\to Q$ existed, write $F^*\alpha=a_i(z)\,dz^i$; the same component symmetry holds for $a$. Define $f(z)=\int_0^1a_i(tz)z^i\,dt$. By [F2], $\partial_jf(z)=\int_0^1(tz^i\partial_ja_i(tz)+a_j(tz))\,dt=\int_0^1\frac{d}{dt}(t a_j(tz))\,dt=a_j(z)$. Hence $\alpha=d(f\circ F^{-1})$. Its integral around $\sigma$ would then be the endpoint difference of a single-valued smooth function and equal zero, contradicting $\ell>0$. Thus $Q$ is not diffeomorphic to $\mathbb R^4$, proving the different-topology assertion of (d). [step 1.4, F1, F2, algebra]

2.2 (A non-flat vacuum solution.) On $\mathbb R^4$ with length coordinates $(u,v,x,y)$ put $H=(x^2-y^2)/\ell^2$ and $g_H=-du\otimes dv-dv\otimes du+dx\otimes dx+dy\otimes dy+H\,du\otimes du$. The $(u,v)$ block has determinant $-1$ and therefore one positive and one negative eigenvalue; the other two directions are positive. This is a smooth Lorentzian metric, time-oriented by $N_H=\partial_u+(H+1)\partial_v/2$, since $g_H(N_H,N_H)=-1$. Its inverse has $g_H^{uv}=g_H^{vu}=-1$, $g_H^{vv}=-H$, $g_H^{xx}=g_H^{yy}=1$, and all other entries zero. Substitution into the Christoffel formula of [F2] gives only $\Gamma^v{}_{ui}=\Gamma^v{}_{iu}=-\partial_iH/2$ and $\Gamma^i{}_{uu}=-\partial_iH/2$ for $i=x,y$. The traces $\Gamma^a{}_{ab}$ vanish, and the product terms in the Ricci contraction vanish: every nonzero symbol has a lower $u$ and either upper $v$ or two lower $u$ with transverse upper index, whereas every symbol with lower $v$ or upper $u$ is zero. Thus the only possible nonzero Ricci component is $\operatorname{Ric}_{uu}=-(H_{xx}+H_{yy})/2=0$; nevertheless $R^x{}_{uxu}=-H_{xx}/2=-1/\ell^2\ne0$. With $T_H=0$, $\Lambda=0$ this gives another admissible vacuum solution of the same field law, now non-flat. [step 1.4, F2, A1, A2, algebra]

3.1 (Conclusion and status.) Steps 1.1-1.3 establish (a)-(c) for the stated Minkowski model; steps 1.4, 2.1 and 2.2 establish the comparison existence claims of (d). All use the adopted postulates and explicit mathematics, with no observation, apparatus or measured input. Neither these deductions nor the comparison constructions assert that any of the models is realized in nature. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2, given] ∎

## Remarks

- **One model among many.** Nothing in the deduction selects the flat model uniquely: the field law admits non-flat solutions, and flat Lorentzian solutions with different global topology are not excluded by the local computations here. The model is used on this page as the flat comparison background of the weak-field bridge, not as a claim about the world.
- **Presentations.** The deduction uses the direct-equation presentation of the field law. In the action presentation the same model is described by the admitted scalar sector with constant $\varphi$, $V\equiv0$ and $K>0$, whose scalar stress tensor vanishes; the equivalence of the presentations on the stated domain is [[pthm-gr-adopted-action-and-einstein-equations]], and no second adoption of the equation is implied.
