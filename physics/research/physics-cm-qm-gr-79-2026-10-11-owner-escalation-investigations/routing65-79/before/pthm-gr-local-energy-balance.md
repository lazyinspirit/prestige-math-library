---
id: pthm-gr-local-energy-balance
kind: physics-theorem
title: "Local energy balance of the measured current and conservation of the Killing charge in stationary models"
status: draft
origin: session
domain: physics
dependency_level: 14
physical_scope: "The smooth classical branch of the adopted gravitational framework with the field law in one of its two presentations and a smooth matter stress-energy tensor on the model's matter domain: the local balance identity for the energy density, energy flux and energy-momentum current measured by a prescribed ideal-clock observer congruence, the finite-chain bookkeeping of that current, and, when the model admits an everywhere timelike future-directed Killing field, conservation of its associated Killing charge up to side flux. The charge is an energy in joules when its Killing field is length-normalized in the framework's length-coordinate convention; other normalizations carry their units through the charge. The theorem is a conditional consequence of the adopted field law and the stated smooth hypotheses; it asserts no existence of Killing fields, no convergence or finiteness for unbounded chains, no asymptotic or quasilocal mass, no positivity and no measured value, and it carries no empirical premise."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-einstein-field-law, post-gr-classical-gravitational-action, pthm-gr-adopted-action-and-einstein-equations, pthm-gr-einstein-consistency-and-energy-conditions, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, post-gr-ideal-clocks-and-free-fall, def-gr-stress-energy-tensor-field, def-gr-observer-energy-momentum-current, def-gr-measured-energy-density-flux-and-stress, lem-gr-observer-energy-momentum-decomposition, def-gr-congruence-acceleration-and-expansion, lem-gr-congruence-acceleration-and-expansion-properties, lem-gr-energy-momentum-current-divergence, lem-gr-killing-congruence-kinematics-and-energy-current, def-gr-killing-energy-charge, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-gr-metric-volume-form-and-current-flux, thm-gr-density-divergence-and-finite-chain-flux, def-gr-si-unit-and-coordinate-conventions, def-gr-smooth-lorentzian-objects, def-gr-observer-congruence-and-adapted-charts]
dependency_roles:
  post-gr-einstein-field-law: physical-assumption
  post-gr-classical-gravitational-action: physical-assumption
  pthm-gr-adopted-action-and-einstein-equations: formulation-prerequisite
  pthm-gr-einstein-consistency-and-energy-conditions: physical-result
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-observer-energy-momentum-current: mathematical-premise
  def-gr-measured-energy-density-flux-and-stress: formulation-prerequisite
  lem-gr-observer-energy-momentum-decomposition: mathematical-premise
  def-gr-congruence-acceleration-and-expansion: mathematical-premise
  lem-gr-congruence-acceleration-and-expansion-properties: mathematical-premise
  lem-gr-energy-momentum-current-divergence: mathematical-premise
  lem-gr-killing-congruence-kinematics-and-energy-current: mathematical-premise
  def-gr-killing-energy-charge: formulation-prerequisite
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: formulation-prerequisite
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.5 'The Slippery Business of Energy Conservation': covariant conservation of a current gives conserved charges only up to the boundary flux; covariant conservation of T is not actual conservation; the Killing current -K^mu T_{mu nu} has conserved charges interpreted as the energy of the matter for timelike K, printed pp. 187-189 (PDF pp. 194-196)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), section 5.2: the 3+1 energy conservation equation with the expansion term and the gravitational power source in the Newtonian limit, printed pp. 72-74 (PDF pp. 72-74); section 4.1.2: the measured energy density, momentum density and stress, printed p. 52 (PDF p. 52)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 9.3: on-shell conservation nabla_a T^{ab} = 0 as a consequence of the matter equations and diffeomorphism invariance, printed pp. 116-118 (PDF pp. 117-119)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Adopt one of the two presentations of the framework's field law,
[[post-gr-einstein-field-law]] or
[[post-gr-classical-gravitational-action]], for a model with geometric data
and matter sector satisfying [[post-gr-spacetime-and-classical-domain]] and
[[post-gr-field-and-matter-assumptions]]; the two presentations define one
field law by [[pthm-gr-adopted-action-and-einstein-equations]]. Let $(M,g,N)$
be the model's smooth time-oriented Lorentzian four-manifold with an
orientation, let $U\subseteq M$ be the matter domain with the induced orientation, let $T$ be the model's
smooth symmetric stress-energy tensor field on $U$
([[def-gr-stress-energy-tensor-field]]), and let $n$ be a smooth observer
congruence on $U$, read as the field of directions of ideal-clock observers of
the model ([[post-gr-ideal-clocks-and-free-fall]]). Let $\mu$, $J$, $\Phi$, $S$
be the measured fields of [[def-gr-observer-energy-momentum-current]], with the
physical reading and units of [[def-gr-measured-energy-density-flux-and-stress]]: $\Phi$ is the normalized spatial tensor current and its SI measured
energy-flux vector is $q=c\Phi$,
and let $a$, $\theta$, $D$ be the kinematic fields of
[[def-gr-congruence-acceleration-and-expansion]].

**(a) On-shell conservation.** The adopted field law implies

$$\nabla^aT_{ab}=0\qquad\text{on }U .$$

**(b) Local energy balance.** On $U$,

$$D\mu+\mu\theta+\nabla_a\Phi^a=\nabla_aJ^a=-T^{ab}\nabla_an_b .$$

Thus the energy density measured by the congruence, its normalized spatial
current $\Phi$ (SI energy flux $q=c\Phi$) and its expansion obey a local balance whose source is the congruence term
$-T^{ab}\nabla_an_b$; the measured energy current is conserved on an open set
exactly where that source vanishes there.

**(c) Finite-chain bookkeeping.** For every finite smooth singular $4$-chain
$C$ of $M$ contained in $U$ with induced boundary
$\partial C=\Sigma_2-\Sigma_1+B$,

$$\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)=-\Phi_J(B)+\int_C\bigl(-T^{ab}\nabla_an_b\bigr)\mathrm{vol}_g .$$

In particular, if the source term vanishes on an open set containing the image
of $C$ and the side flux $\Phi_J(B)$ vanishes, then
$\Phi_J(\Sigma_2)=\Phi_J(\Sigma_1)$: equal measured energy needs a vanishing
side flux, not merely on-shell conservation.

**(d) Stationary models and the Killing charge.** Suppose in addition that
$U$ carries a Killing field $\xi$ of $(M,g)$ that is everywhere timelike and
future-directed, with $X:=\sqrt{-g(\xi,\xi)}>0$ and $n=\xi/X$, and let
$Q_\xi$ be the Killing charge of
[[def-gr-killing-energy-charge]]. Then:

1. $\nabla_a(XJ^a)=0$ and $\nabla_a(T^{ab}\xi_b)=0$ on $U$.
2. For every finite smooth singular $4$-chain $C\subseteq U$ with
   $\partial C=\Sigma_2-\Sigma_1+B$,

$$Q_\xi(\Sigma_2)-Q_\xi(\Sigma_1)=-Q_\xi(B);$$

   in particular, if $Q_\xi(B)=0$ then $Q_\xi(\Sigma_2)=Q_\xi(\Sigma_1)$: the
   model's Killing charge assigned to homologous slices is conserved up to the
   side flux, and is conserved when that flux vanishes. With a length-normalized
   $\xi$, this charge is the model's energy in joules.
3. In this stationary case the measured energy current itself satisfies
   $\nabla_aJ^a=-\Phi^aa_a$ with $a=\nabla\ln X$, so
   $\nabla_aJ^a=0$ on $U$ if and only if $\Phi^aa_a=0$ there.

**(e) Qualification.** The theorem asserts no existence of a timelike Killing
field, no finiteness or convergence for chains outside the finite smooth
singular class, no asymptotic or quasilocal mass, no positivity of $\mu$, and
no measured value. Its conclusions are conditional on the adopted field law,
the stated smoothness and the stated chains; the theorem uses no empirical
premise, and any later use of a numerical energy must carry its own
measurement, calibration and uncertainty qualifications.

## Facts & Assumptions

**Given:** The adopted field law in one of its two presentations; a model with smooth $(M,g,N)$, matter domain $U$, smooth symmetric stress-energy tensor $T$; a smooth observer congruence $n$ on $U$; the measured fields $\mu$, $J$, $\Phi$, $S$ of [[def-gr-observer-energy-momentum-current]] and the kinematic fields $a$, $\theta$, $D$ of [[def-gr-congruence-acceleration-and-expansion]]. In (d) additionally the timelike future-directed Killing field $\xi$ on $U$ with $X=\sqrt{-g(\xi,\xi)}$ and $n=\xi/X$, and the Killing energy $Q_\xi$ of [[def-gr-killing-energy-charge]].

[L1] The field equation holds on the matter domain $U$ in the direct presentation, and in the action presentation its equation form is that of [[pthm-gr-adopted-action-and-einstein-equations]] (for prescribed tensors the equation is adopted directly). Restrict the metric, time orientation and connection to the open manifold $U$ and apply [[pthm-gr-einstein-consistency-and-energy-conditions]] clause (a) with ambient manifold $U$: it yields $\nabla^aT_{ab}=0$ on $U$, without an extension of $T$ beyond $U$.

[L2] On the stated hypotheses, $\nabla_aJ^a=-T^{ab}\nabla_an_b$, $D\mu+\mu\theta+\nabla_a\Phi^a=\nabla_aJ^a$, and for every finite smooth singular $4$-chain $C\subseteq U$ with $\partial C=\Sigma_2-\Sigma_1+B$, $\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)=-\Phi_J(B)+\int_C(-T^{ab}\nabla_an_b)\mathrm{vol}_g$ ([[lem-gr-energy-momentum-current-divergence]] clauses (a)-(c), [[def-gr-congruence-acceleration-and-expansion]]).

[L3] If $\xi$ is Killing and timelike on $U$ with $X=\sqrt{-g(\xi,\xi)}$ and $n=\xi/X$, then $\nabla_a(XJ^a)=0$, $\nabla_a(T^{ab}\xi_b)=0$, $T^{ab}\nabla_an_b=\Phi^aa_a$ and $\nabla_aJ^a=-\Phi^aa_a$ with $a=\nabla\ln X$; moreover $T^{ab}\xi_b=-XJ^a$ and $Q_\xi(\Sigma)=-(\Phi_{J_\xi})(\Sigma)=\Phi_{XJ}(\Sigma)$ ([[lem-gr-killing-congruence-kinematics-and-energy-current]] clauses (a)-(d), [[def-gr-killing-energy-charge]] clauses (a)-(c)).

[L4] On the oriented open submanifold $U$ with its restricted metric and connection, for a smooth vector field $K$ on $U$ with $\nabla_aK^a=0$ and a finite smooth singular $4$-chain $C\subseteq U$ with $\partial C=\Sigma_2-\Sigma_1+B$, one has $\Phi_K(\Sigma_2)-\Phi_K(\Sigma_1)=-\Phi_K(B)$ ([[thm-gr-density-divergence-and-finite-chain-flux]] clause (b), [[def-gr-metric-volume-form-and-current-flux]]).

## Proof

**Proof technique:** direct; instantiate the adopted field law's necessary conservation, apply the divergence and balance identities of the measured current, and use the conservation of the redshift-weighted Killing current for the stationary statement.

1.1 (On-shell conservation.) For the action sector with a Hilbert tensor, stationarity implies the field equation locally on $U$: chart-supported test variations inside $U$ give the coefficient-vanishing argument of [[pthm-gr-adopted-action-and-einstein-equations]]. Such variations extend by zero away from their compact chart support, so they are among the adopted variations. The direct presentation and the prescribed-tensor action sectors adopt the same equation on $U$. Apply the consistency theorem [L1] on the restricted spacetime $U$ to obtain $\nabla^aT_{ab}=0$ on $U$. This proves (a). [L1, given]

2.1 (Local balance and bookkeeping.) With $\nabla^aT_{ab}=0$ now available, [L2] gives $\nabla_aJ^a=-T^{ab}\nabla_an_b$ and $D\mu+\mu\theta+\nabla_a\Phi^a=\nabla_aJ^a$ on $U$, which is the displayed identity of (b); moreover [L2] gives the finite-chain identity of (c), and the special case follows when the source integrand vanishes on an open set containing the image of $C$ and $\Phi_J(B)=0$. This proves (b) and (c). [step 1.1, L2, algebra]

3.1 (Stationary conservation.) Assume now the additional hypotheses of (d). By [L3], $\nabla_a(XJ^a)=0$ and $\nabla_a(T^{ab}\xi_b)=0$ on $U$, which is (d)1. Applying (c) with the divergence-free field $XJ$ in place of $J$ — the finite-chain flux balance [L4] on the oriented open manifold $U$, where $XJ$ is defined, with $K=XJ$ — gives $\Phi_{XJ}(\Sigma_2)-\Phi_{XJ}(\Sigma_1)=-\Phi_{XJ}(B)$; since $Q_\xi=\Phi_{XJ}$ by [L3], this is $Q_\xi(\Sigma_2)-Q_\xi(\Sigma_1)=-Q_\xi(B)$. If $Q_\xi(B)=0$, the charges are equal, and the equality $Q_\xi(B)=0$ holds in particular when the flux of $XJ$ through every simplex of the side chain vanishes. This proves (d)1 and (d)2. [step 2.1, L3, L4, algebra]

4.1 (The measured current in the stationary case.) By [L3], $T^{ab}\nabla_an_b=\Phi^aa_a$ and $\nabla_aJ^a=-\Phi^aa_a$ with $a=\nabla\ln X$; hence $\nabla_aJ^a=0$ on $U$ if and only if $\Phi^aa_a=0$ there. This proves (d)3 and completes the proof. [step 3.1, L3, algebra] ∎

## Remarks

- **What is and is not empirical.** No experiment, measurement, calibration or sampling enters the argument; the theorem is a conditional deduction from the adopted field law and the stated smooth geometry. The quantities $\mu$, $\Phi$, $S$ and $Q_\xi$ are read through [[def-gr-measured-energy-density-flux-and-stress]] and [[def-gr-killing-energy-charge]]; a later quantitative use of any of them must supply its own empirical premises and uncertainties.

- **Scope of the global statement.** Clause (d)2 is a finite-chain statement. It does not assert that a total energy of an unbounded slice exists, nor that the limit of the side flux at infinity vanishes; those are additional hypotheses, recorded in [[rem-gr-no-universal-global-energy]].

- **Choice convention.** The smooth structure of the tangent bundle underlying $n$ and $\xi$ assumes $\mathrm{AC}_\omega$ through [[def-gr-observer-congruence-and-adapted-charts]]; no other choice principle is used.
