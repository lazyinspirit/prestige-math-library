---
id: pthm-gr-tidal-comparison
kind: physics-theorem
title: "Free-fall congruences, tidal (curvature) relative acceleration and the flat comparison"
status: published
origin: session
domain: physics
dependency_level: 13
physical_scope: "Smooth test-field regime of the classical general-relativistic framework: a smooth time-oriented Lorentzian four-manifold with metric-selected connection, ideal freely falling structureless test bodies whose worldlines are future timelike geodesics parametrized by proper time, and smooth one-parameter families of candidate geodesic histories. Their physical interpretation applies when body histories realize the family on a common interval; no existence of bodies with arbitrary release data is assumed or deduced. Excludes bodies with non-negligible self-gravity, self-force, spin, finite size or internal structure, non-geodesic motion, non-smooth or distributional matter and fields, quantum effects, and any comparison with measured data. Every conclusion is a conditional model deduction from the adopted postulates, not an observational claim."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-spacetime-and-classical-domain, post-gr-ideal-clocks-and-free-fall, pthm-gr-free-fall-worldline-is-determined-by-initial-data, thm-gr-jacobi-equation-and-geodesic-deviation, lem-gr-algebraic-curvature-vanishing-criterion, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-timelike-worldline-and-proper-time, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-covariant-derivative-along-a-curve, def-geodesic-of-an-affine-connection, def-interval, def-gr-local-frame-and-tetrad-fields, def-gr-observer-congruence-and-adapted-charts, thm-gr-local-geodesics-and-exponential-map]
dependency_roles:
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  pthm-gr-free-fall-worldline-is-determined-by-initial-data: physical-result
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  lem-gr-algebraic-curvature-vanishing-criterion: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-interval: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: formulation-prerequisite
  def-gr-observer-congruence-and-adapted-charts: formulation-prerequisite
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the geodesic deviation equation (3.113) and its physical reading as gravitational tidal forces, printed pp. 86-88 (PDF pp. 93-95); Ch. 4: physics in curved spacetime, printed pp. 97-106 (PDF pp. 104-113)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.5: the geodesic deviation equation (4.22)-(4.24), the remark that free particles follow geodesics and deviation is the tendency of freely falling particles to move together or apart, corresponding to tidal forces (Remark 2), printed pp. 46-48 (PDF pp. 47-49)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), section 6.1: the endomorphism R_u(X)=R(X,u)u and its interpretation through geodesic variations, printed pp. 159-160 (PDF pp. 159-160)"
      url: "https://link.springer.com/content/pdf/10.1007/s41114-019-0019-x.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the postulates [[post-gr-spacetime-and-classical-domain]] and
[[post-gr-ideal-clocks-and-free-fall]] of the classical gravitational
framework, and let $(M,g,N)$ be the model's smooth time-oriented Lorentzian
four-manifold with metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]) and curvature
$R$ ([[def-gr-curvature-tensor-and-derived-tensors]]). All statements below
are deductions within the model so specified; they assert nothing about
nature.

At an event $q$, a **frame** means an ordered basis
$(E_0,E_1,E_2,E_3)$ of $T_qM$. If an orthonormal frame is intended, it means
a tetrad satisfying $g_q(E_A,E_B)=\operatorname{diag}(-1,1,1,1)_{AB}$;
these terms and their distinction from coordinate frames are defined in
[[def-gr-local-frame-and-tetrad-fields]]. Such a frame is pointwise basis
data, not a chart on an open set or an observer congruence, which is a smooth
future unit timelike vector field on an open set
([[def-gr-observer-congruence-and-adapted-charts]]).

**(a) Free-fall congruences.** A **free-fall congruence** of the model is a
smooth map $\gamma:(-\varepsilon,\varepsilon)\times I\to M$, with
$\varepsilon>0$ and $I\subseteq\mathbb R$ an interval with nonempty interior,
whose values we write $\gamma(r,s)$. For each
$r\in(-\varepsilon,\varepsilon)$ the curve $\gamma_r:I\to M$ is defined by
$\gamma_r(s):=\gamma(r,s)$ and is a future timelike geodesic parametrized by
proper time, with tangent field $U_r(s):=\partial_s\gamma(r,s)$ satisfying
$$g(U_r,U_r)=-c^2,\qquad D_sU_r=0,$$
where $D_s$ is the covariant derivative along $\gamma_r$.
Here this term denotes a mathematical family of candidate free-fall histories.
Clause (ii) of [[post-gr-ideal-clocks-and-free-fall]] requires any ideal
freely falling massive test body's history to be such a geodesic on its
actual proper-time interval; it does not guarantee bodies realizing arbitrary
release data or an entire geodesic domain. If a smooth family of these body
histories is realized on a common interval $I$, it is a free-fall congruence
in the sense just defined. Conversely each individual such body history can
be included mathematically in a constant family $\gamma(r,s)=\gamma_0(s)$,
without asserting the existence of additional bodies. No injectivity or
immersion condition is imposed on the family map.

**(b) Deviation equation (model deduction).** Let $\gamma$ be a free-fall
congruence and set $J:=\partial_r\gamma$. Then, along each $\gamma_r$, the
separation field satisfies
$$D_s^2J=R(U_r,J)U_r,$$
where $D_s$ is the covariant derivative along $\gamma_r$. In particular, the
relative four-acceleration encoded by the family’s infinitesimal separation
field $J$ is exactly the curvature term: at each event,
$J\mapsto R(U_r,J)U_r$ is an $\mathbb R$-linear map on the event's tangent
space, vanishes at $J=0$, is tensorial and independent of the frame or chart
used for its components, and contains no rest mass, charge or
internal-structure parameter of the bodies. When the family is realized by
ideal test-body histories, this is their infinitesimal relative acceleration
within the adopted model.

**(c) Flat comparison and the vanishing criterion.** If the curvature
vanishes on an open subset $O\subseteq M$, then every free-fall congruence
with worldlines in $O$ has $D_s^2J=0$ there: the model predicts no tidal
relative acceleration of freely falling test bodies in that region.
Conversely, if at an event $q$ the operator $J\mapsto R(U,J)U$ vanishes for
every future timelike $U$ and every $J\in T_qM$, then $R_q=0$; hence within
the model the tidal response of all free-fall congruences detects exactly the
curvature when all mathematical candidate families of (a) are considered,
and $R$ is the model's complete tidal field at every event. Every normalized
future timelike $U$ and every separation value $J$ are realized by such a
local mathematical family. This does not assert the existence of test bodies
realizing those families; inference from only physically realized families
would additionally require that they supply all these directions and values.

**Status.** Clauses (a)-(c) are conditional consequences of the stated
postulates and the cited mathematics. No observation, apparatus, measured
input or statistical inference is used; the item contains no empirical
premises, and the word "tidal" denotes the curvature term in the model's
deviation equation, not a measured force on any particular body.

## Facts & Assumptions

**Given:** The adopted framework postulates, a model spacetime with metric-selected connection, a free-fall congruence $\gamma$, and an event $q$.

[A1] The framework model has a smooth time-oriented Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$ and curvature $R$, all mathematics as in the cited definitions ([[post-gr-spacetime-and-classical-domain]] clauses (i) and (iv), [[def-gr-smooth-lorentzian-objects]], [[def-gr-curvature-tensor-and-derived-tensors]]).

[A2] An ideal freely falling massive test body of the model has as worldline a future timelike geodesic with four-velocity $U$, $g(U,U)=-c^2$, and proper time an affine parameter. Its history is a restriction of the unique maximal geodesic with its release event and four-velocity; no force, charge or rest mass enters that evolution rule. This constrains a body's history when realized, without guaranteeing a body for each initial datum or requiring its history to have the maximal geodesic's domain ([[post-gr-ideal-clocks-and-free-fall]] clause (ii), [[pthm-gr-free-fall-worldline-is-determined-by-initial-data]], [[lem-gr-proper-time-reparametrization-and-four-velocity]] clause 3).

[L1] For a smooth family of geodesics parametrized by an affine parameter $\sigma$ with $g(T,T)=-1$, the variation field satisfies $D_\sigma^2J=R(T,J)T$; for a geodesic with $g(T,T)=-1$ the proper time is $\tau=\sigma/c$, and the physical four-velocity is $U=cT$ ([[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (b), [[lem-gr-proper-time-reparametrization-and-four-velocity]] clauses 2-3, [[def-gr-timelike-worldline-and-proper-time]] clauses (d)-(e)).

[L2] If an algebraic curvature tensor at a point of a Lorentzian four-manifold satisfies $R(U,J)U=0$ for every timelike $U$ and every $J$, then it vanishes at that point ([[lem-gr-algebraic-curvature-vanishing-criterion]]).

[L3] The curvature tensor is a smooth $(1,3)$-tensor; its lowered components satisfy the symmetries and the pairing identity $g(R(X,Y)Z,W)=R_{abcd}W^aX^cY^dZ^b$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (a), [[thm-gr-curvature-algebraic-symmetries]] clauses (a)-(b)).

[L4] The geodesic evaluation map is smooth on an open neighborhood of each initial position-velocity datum and time zero ([[thm-gr-local-geodesics-and-exponential-map]] clause (b)). Metric compatibility gives $\frac{d}{ds}g(\gamma\prime,\gamma\prime)=2g(D_s\gamma\prime,\gamma\prime)=0$ along each geodesic ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), so a future timelike geodesic with initial squared speed $-c^2$ has proper-time parameter $s$ up to an additive constant ([[lem-gr-proper-time-reparametrization-and-four-velocity]] clause 3). These are mathematical conclusions, not body-existence assertions.

## Proof

**Proof technique:** direct.

1.1 (From proper time to the unit affine parameter.) Let $\gamma$ be a free-fall congruence and fix $r$. By definition, $t\mapsto\gamma_r(t)$ is a future timelike geodesic with $U_r=\partial_t\gamma$ and $g(U_r,U_r)=-c^2$; by [L1] the rescaled map $\Gamma_r(\sigma):=\gamma_r(\sigma/c)$ is a geodesic with unit tangent $T_r=U_r/c$ and $g(T_r,T_r)=-1$, so $\sigma$ is an affine parameter for it. [L1, given]

2.1 (Deviation equation in the model.) Put $cI:=\{ct:t\in I\}$ and define the smooth family $\Gamma:(-\varepsilon,\varepsilon)\times cI\to M$ by $\Gamma(r,\sigma):=\gamma(r,\sigma/c)$. For each fixed $r$, its variation field is $\widetilde J_r(\sigma):=\partial_r\Gamma(r,\sigma)=J(r,\sigma/c)$, so [L1] gives $D_\sigma^2\widetilde J_r=R(T_r,\widetilde J_r)T_r$. Since $D_t=c\,D_\sigma$ along $\gamma_r$ by the chain rule for the covariant derivative along a curve, $D_t^2J=c^2D_\sigma^2\widetilde J_r=c^2R(T_r,J)T_r=R(cT_r,J)(cT_r)=R(U_r,J)U_r$ by $\mathbb R$-bilinearity of $R$. This proves (b). [step 1.1, L1, L3, algebra]

3.1 (No mass or structure parameter.) The right-hand side of the equation of step 2.1 is built from the worldlines (through $U_r$ and $J$) and the geometry only; no rest mass, charge or internal-structure parameter occurs in it, and by [A2] the worldlines themselves do not depend on the rest mass of the body. Hence two congruences of the model that agree in the worldlines of their test bodies have identical relative-acceleration fields, whether or not the bodies would be assigned different masses; this is a comparison inside the model, not a statement about any real bodies. [step 2.1, A2, given]

3.2 (Flat comparison and vanishing criterion.) If $R=0$ on an open set $O$, then step 2.1 gives $D_t^2J=0$ for every free-fall congruence with worldlines in $O$: the model predicts no tidal relative acceleration there. Conversely, suppose at the event $q$ that $R(U,J)U=0$ for every future timelike $U$ and every $J$. If $W$ is timelike, then either $W$ is future timelike or $-W$ is future timelike; in the second case $R(W,J)W=R(-W,J)(-W)=0$ as well. Thus the tidal operator vanishes for every timelike direction at $q$, and [L2] gives $R_q=0$. [step 2.1, L2, L3, algebra]

3.3 (Mathematical realization of arbitrary separation.) Fix $q\in M$, a future timelike $U\in T_qM$ with $g(U,U)=-c^2$, and $J\in T_qM$. In a chart $x$ around $q$ choose $q(r)=x^{-1}(x(q)+r\,dx_qJ)$ for sufficiently small $|r|$, and let $W(r)$ have the constant chart components of $U$. By continuity, $W(r)$ remains future timelike after shrinking the interval. Set $V(r)=cW(r)/\sqrt{-g_{q(r)}(W(r),W(r))}$; this is smooth, future timelike, has squared norm $-c^2$, and $V(0)=U$. The open smooth evaluation domain of [L4] supplies a smooth geodesic family $\gamma(r,s)$ on a common open rectangle with $\gamma(r,0)=q(r)$ and $\partial_s\gamma(r,0)=V(r)$. Shrink the rectangle so its tangents remain future-directed. By [L4] their squared speed is $-c^2$, making $s$ proper time up to a constant. Thus this is a mathematical family of (a), without any body-existence inference from [A2]. At $(0,0)$ its separation is $\partial_r\gamma=J$ and its velocity is $U$, hence step 2.1 realizes every $R(U,J)U$ with this normalization. Every other future timelike $\widetilde U$ is a positive multiple of such a $U$, and tensor bilinearity gives $R(\widetilde U,J)\widetilde U$ as that positive square multiple. This supplies the mathematical family interpretation of (c); if body histories realize a restriction of the family on a common interval, [A2] and step 2.1 give its physical interpretation there. [A2, L4, step 2.1, L3, construct, algebra]

4.1 (Conditional status and conclusion.) Steps 2.1, 3.1, 3.2 and 3.3 derive clauses (b) and (c) from [A1]-[A2] and the cited mathematical results, using no observation, measurement or statistical model; the statements are therefore conditional deductions within the adopted model, and the item carries no empirical premises. Together with the definitions of clause (a) this completes the proof. [step 2.1, step 3.1, step 3.2, step 3.3, A1, A2, given] ∎

## Remarks

- **What the deduction does and does not establish.** The theorem shows that, *if* the framework's spacetime, free-fall and clock postulates are adopted, *then* free-fall relative acceleration is governed by curvature and is detected by the tidal operator for every observer direction. It does not establish the postulates, does not show that any real body is exactly freely falling, and does not compare the prediction with any measured tidal effect; such a comparison would require a specified apparatus model, empirical premises with uncertainties and a statistical analysis, none of which is supplied here.

- **Frame independence.** The operator $J\mapsto R(U,J)U$ is a tensor contraction at an event; changing the ordered basis of that tangent space or changing coordinates alters its components but not the operator, its vanishing, or the geometric content of the equation. Neither this pointwise basis nor a chart is the smooth family of worldlines defined in clause (a). The absence of a zeroth-order relative acceleration term is the model's precise formulation of the statement that free fall is "locally inertial", and the curvature term is the model's tidal field; the equivalence-principle reading of these facts is motivational and is not asserted as a separate claim.
