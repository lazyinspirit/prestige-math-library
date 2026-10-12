---
id: pthm-gr-tidal-comparison
kind: physics-theorem
title: "Free-fall congruences, tidal (curvature) relative acceleration and the flat comparison"
status: draft
origin: session
domain: physics
dependency_level: 13
physical_scope: "Smooth test-field regime of the classical general-relativistic framework: a smooth time-oriented Lorentzian four-manifold with metric-selected connection, ideal freely falling structureless test bodies whose worldlines are future timelike geodesics parametrized by proper time, and smooth one-parameter families of such worldlines. Excludes bodies with non-negligible self-gravity, self-force, spin, finite size or internal structure, non-geodesic motion, non-smooth or distributional matter and fields, quantum effects, and any comparison with measured data. Every conclusion is a conditional model deduction from the adopted postulates, not an observational claim."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-spacetime-and-classical-domain, post-gr-ideal-clocks-and-free-fall, pthm-gr-free-fall-worldline-is-determined-by-initial-data, thm-gr-jacobi-equation-and-geodesic-deviation, lem-gr-algebraic-curvature-vanishing-criterion, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-timelike-worldline-and-proper-time, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-covariant-derivative-along-a-curve, def-geodesic-of-an-affine-connection, def-interval]
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

**(a) Free-fall congruences.** A **free-fall congruence** of the model is a
smooth map $\gamma:(-\varepsilon,\varepsilon)\times I\to M$, with
$I\subseteq\mathbb R$ an interval with nonempty interior, such that for every
$r$ the curve $\gamma_r:=\gamma(\cdot,r)$ is a future timelike geodesic
parametrized by proper time: with $U_r:=\partial_s\gamma$,
$$g(U_r,U_r)=-c^2,\qquad \nabla_{U_r}U_r=0 .$$
By clause (ii) of [[post-gr-ideal-clocks-and-free-fall]], each $\gamma_r$ is
a worldline the model assigns to an ideal freely falling massive test body
with the corresponding release data, and conversely every such worldline
arises this way.

**(b) Deviation equation (model deduction).** Let $\gamma$ be a free-fall
congruence and set $J:=\partial_r\gamma$. Then, along each $\gamma_r$, the
separation field satisfies
$$D_s^2J=R(U_r,J)U_r,$$
where $D_s$ is the covariant derivative along $\gamma_r$. In particular the
relative four-acceleration of nearby free-fall worldlines of the model is
exactly the curvature term: it is $\mathbb R$-linear in $J$, vanishes when
$J=0$, is a tensorial (frame- and coordinate-independent) linear map at each
event, and contains no rest mass, charge or internal-structure parameter of
the bodies.

**(c) Flat comparison and the vanishing criterion.** If the curvature
vanishes on an open subset $O\subseteq M$, then every free-fall congruence
with worldlines in $O$ has $D_s^2J=0$ there: the model predicts no tidal
relative acceleration of freely falling test bodies in that region.
Conversely, if at an event $q$ the operator $J\mapsto R(U,J)U$ vanishes for
every future timelike $U$ and every $J\in T_qM$, then $R_q=0$; hence within
the model the tidal response of all free-fall congruences detects exactly the
curvature, and $R$ is the model's complete tidal field at every event.

**Status.** Clauses (a)-(c) are conditional consequences of the stated
postulates and the cited mathematics. No observation, apparatus, measured
input or statistical inference is used; the item contains no empirical
premises, and the word "tidal" denotes the curvature term in the model's
deviation equation, not a measured force on any particular body.

## Facts & Assumptions

**Given:** The adopted framework postulates, a model spacetime with metric-selected connection, a free-fall congruence $\gamma$, and an event $q$.

[A1] The framework model has a smooth time-oriented Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$ and curvature $R$, all mathematics as in the cited definitions ([[post-gr-spacetime-and-classical-domain]] clauses (i) and (iv), [[def-gr-smooth-lorentzian-objects]], [[def-gr-curvature-tensor-and-derived-tensors]]).

[A2] An ideal freely falling massive test body of the model has as worldline a future timelike geodesic with four-velocity $U$, $g(U,U)=-c^2$, and proper time an affine parameter; the worldline is determined by the release event and four-velocity, and no force, charge or rest mass enters the rule ([[post-gr-ideal-clocks-and-free-fall]] clause (ii), [[pthm-gr-free-fall-worldline-is-determined-by-initial-data]], [[lem-gr-proper-time-reparametrization-and-four-velocity]] clause 3).

[L1] For a smooth family of geodesics parametrized by an affine parameter $\sigma$ with $g(T,T)=-1$, the variation field satisfies $D_\sigma^2J=R(T,J)T$; for a geodesic with $g(T,T)=-1$ the proper time is $\tau=\sigma/c$, and the physical four-velocity is $U=cT$ ([[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (b), [[lem-gr-proper-time-reparametrization-and-four-velocity]] clauses 2-3, [[def-gr-timelike-worldline-and-proper-time]] clauses (d)-(e)).

[L2] If an algebraic curvature tensor at a point of a Lorentzian four-manifold satisfies $R(U,J)U=0$ for every timelike $U$ and every $J$, then it vanishes at that point ([[lem-gr-algebraic-curvature-vanishing-criterion]]).

[L3] The curvature tensor is a smooth $(1,3)$-tensor; its lowered components satisfy the symmetries and the pairing identity $g(R(X,Y)Z,W)=R_{abcd}W^aX^cY^dZ^b$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (a), [[thm-gr-curvature-algebraic-symmetries]] clauses (a)-(b)).

## Proof

**Proof technique:** direct.

1.1 (From proper time to the unit affine parameter.) Let $\gamma$ be a free-fall congruence and fix $r$. By [A2], $t\mapsto\gamma_r(t)$ is a future timelike geodesic with $U_r=\partial_t\gamma$ and $g(U_r,U_r)=-c^2$; by [L1] the rescaled map $\Gamma_r(\sigma):=\gamma_r(\sigma/c)$ is a geodesic with unit tangent $T_r=U_r/c$ and $g(T_r,T_r)=-1$, so $\sigma$ is an affine parameter for it. [A2, L1, given]

2.1 (Deviation equation in the model.) Apply [L1] to the smooth family $(\sigma,r)\mapsto\Gamma(\sigma,r):=\gamma(\sigma/c,r)$: its variation field is the same $J=\partial_r\gamma$, and $D_\sigma^2J=R(T_r,J)T_r$. Since $D_t=c\,D_\sigma$ along $\gamma_r$ by the chain rule for the covariant derivative along a curve, $D_t^2J=c^2D_\sigma^2J=c^2R(T_r,J)T_r=R(cT_r,J)(cT_r)=R(U_r,J)U_r$ by $\mathbb R$-bilinearity of $R$. This proves (b). [step 1.1, L1, L3, algebra]

3.1 (No mass or structure parameter.) The right-hand side of the equation of step 2.1 is built from the worldlines (through $U_r$ and $J$) and the geometry only; no rest mass, charge or internal-structure parameter occurs in it, and by [A2] the worldlines themselves do not depend on the rest mass of the body. Hence two congruences of the model that agree in the worldlines of their test bodies have identical relative-acceleration fields, whether or not the bodies would be assigned different masses; this is a comparison inside the model, not a statement about any real bodies. [step 2.1, A2, given]

3.2 (Flat comparison and vanishing criterion.) If $R=0$ on an open set $O$, then step 2.1 gives $D_t^2J=0$ for every free-fall congruence with worldlines in $O$: the model predicts no tidal relative acceleration there. Conversely, suppose at the event $q$ that $R(U,J)U=0$ for every future timelike $U$ and every $J$. If $W$ is timelike, then either $W$ is future timelike or $-W$ is future timelike; in the second case $R(W,J)W=R(-W,J)(-W)=0$ as well. Thus the tidal operator vanishes for every timelike direction at $q$, and [L2] gives $R_q=0$. [step 2.1, L2, L3, algebra]

4.1 (Conditional status and conclusion.) Steps 2.1, 3.1 and 3.2 derive clauses (b) and (c) from [A1]-[A2] and the cited mathematical results, using no observation, measurement or statistical model; the statements are therefore conditional deductions within the adopted model, and the item carries no empirical premises. Together with the definitions of clause (a) this completes the proof. [step 2.1, step 3.1, step 3.2, A1, A2, given] ∎

## Remarks

- **What the deduction does and does not establish.** The theorem shows that, *if* the framework's spacetime, free-fall and clock postulates are adopted, *then* free-fall relative acceleration is governed by curvature and is detected by the tidal operator for every observer direction. It does not establish the postulates, does not show that any real body is exactly freely falling, and does not compare the prediction with any measured tidal effect; such a comparison would require a specified apparatus model, empirical premises with uncertainties and a statistical analysis, none of which is supplied here.

- **Frame independence.** The operator $J\mapsto R(U,J)U$ is a tensor contraction at an event; changing coordinates or an observer frame changes components but not the vanishing of the operator or the geometric content of the equation. The absence of a zeroth-order relative acceleration term is the model's precise formulation of the statement that free fall is "locally inertial", and the curvature term is the model's tidal field; the equivalence-principle reading of these facts is motivational and is not asserted as a separate claim.
