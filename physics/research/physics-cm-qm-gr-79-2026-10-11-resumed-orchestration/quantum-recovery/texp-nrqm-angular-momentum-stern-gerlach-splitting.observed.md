---
id: texp-nrqm-angular-momentum-stern-gerlach-splitting
aliases: [nrqm-angular-momentum-stern-gerlach-splitting]
kind: thought-experiment
domain: physics
title: "The idealized Stern-Gerlach splitting: transverse momentum separation of the two spin sectors under a window hypothesis"
status: draft
origin: session
dependency_level: 12
deps: [def-axiom-of-choice, def-countable-choice, def-nrqm-angular-momentum-framework-angular-momentum-observables, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, post-nrqm-angular-momentum-magnetic-moment-coupling, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-observable-and-probability, post-nrqm-framework-preparation-and-apparatus, post-nrqm-framework-state-and-composition, prop-nrqm-orbital-and-spin-finite-spin-matrices, pthm-nrqm-angular-momentum-stern-gerlach-conditional-force]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  post-nrqm-angular-momentum-magnetic-moment-coupling: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  pthm-nrqm-angular-momentum-stern-gerlach-conditional-force: physical-result
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "An idealized model prediction of the spin-half Zeeman model with a static windowed-gradient field: under an explicitly hypothetical containment premise (the first-coordinate marginals of both spin-sector components remain supported in the window of constant gradient during [0,tau]), the sector mean transverse momenta separate at the rate gamma hbar G / 2 and by gamma hbar G tau over the time tau, while the sector weights and the total transverse mean are conserved. The item is a hypothetical calculation, not a reported experiment: it asserts no apparatus, no beam, no counts, no detector, no measured value and no claim that the containment premise holds for realistic preparations."
empirical_premises: []
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 7.4.2, printed pages 161-164 (PDF pages 169-172): the ideal two-beam Stern-Gerlach model and the force on the two spin components"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin One-Half, Bras, Kets, and Operators', Section 1, printed pages 1-7 (the Stern-Gerlach idealization with two peaks, explicitly presented as an idealized model of the apparatus) and Section 4, printed pages 16-19 (spin states in an arbitrary direction)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the postulates P1, P2, P4, P5 and P6 and the effective magnetic-moment
coupling as in
[[pthm-nrqm-angular-momentum-stern-gerlach-conditional-force]], for the
massive spin-$\tfrac12$ model with mass parameter $m>0$ and parameter
$\gamma:=\gamma_{1/2}\in\mathbb R$
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]],
[[post-nrqm-angular-momentum-magnetic-moment-coupling]]), and assume the
Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Fix a real
$B_{z}\in C^{1}(\mathbb R)$ with $B_{z}$, $B_{z}'$ bounded, reals $0<a<\infty$
and $G$, and the field profile $\mathbf B(x)=(0,0,B_{z}(x_{1}))$, and
**suppose** that $B_{z}'(x_{1})=G$ for every $x_{1}\in(-a,a)$. Let
$H_{Z}$ be the Zeeman operator of the model with flow
$u(t)=e^{-itH_{Z}/\hbar}u_{0}$ for a unit vector
$u_{0}\in D(H_{Z}^{2})$, let
$u_{\pm}(t):=P_{\pm}u(t)$ be the two spin-sector components with
$P_{\pm}=\tfrac12(I\pm 2S_{3}/\hbar)$, and write
$w_{\pm}:=\|u_{\pm}(0)\|^{2}$ and, for each sign, let
$$\eta_{\pm}(t,x_{1}):=\int_{\mathbb R^{2}}\bigl|u_{\pm}^{\pm}(t,x_{1},x_{2},x_{3})\bigr|^{2}\,dx_{2}\,dx_{3}$$
be the first-coordinate marginal density of the $\pm$ component of
$u_{\pm}(t)$, where $u_{\pm}^{\pm}$ denotes that nonzero component. Fix
$\tau>0$ and adopt the following **hypothetical containment premise**: for
each sign and every $t\in[0,\tau]$,
$$\int_{\mathbb R\setminus(-a,a)}\eta_{\pm}(t,x_{1})\,dx_{1}=0 .$$
Then:

(i) the sector weights are conserved: $\|u_{\pm}(t)\|^{2}=w_{\pm}$ for every
$t$, and $\langle S_{3}\rangle_{u(t)}=\tfrac{\hbar}{2}(w_{+}-w_{-})$ is
independent of $t$;

(ii) under the containment premise, for each sign with $w_{\pm}>0$ the
normalized sector transverse mean
$M_{\pm}(t):=w_{\pm}^{-1}\langle P_{x}u_{\pm}(t),u_{\pm}(t)\rangle$ is affine
in $t$ on $[0,\tau]$:
$$\frac{d}{dt}M_{\pm}(t)=\pm\frac{\gamma\hbar G}{2},\qquad M_{\pm}(\tau)=M_{\pm}(0)\pm\frac{\gamma\hbar G\tau}{2},$$
so the two sector mean transverse momenta (both defined when $w_{+}w_{-}>0$)
differ by $\gamma\hbar G\tau$ at time $\tau$, independently of the initial
means; a sector with $w_{\pm}=0$ is trivial;

(iii) the total transverse mean evolves by the weighted rate
$$\frac{d}{dt}\bigl\langle P_{x}u(t),u(t)\bigr\rangle =\frac{\gamma\hbar G}{2}(w_{+}-w_{-})=\gamma G\,\langle S_{3}\rangle_{u_{0}}, \qquad t\in[0,\tau],$$
so for the equal-weight preparation $w_{+}=w_{-}=\tfrac12$ the total
transverse mean is conserved while the sector means separate;

(iv) **Status and scope.** This is an idealized hypothetical calculation: the
containment premise is an explicitly assumed possible property of the
evolved state, not an observed fact and not a consequence of the model; no
position-space splitting, detector trace, count, calibration or measured
value is asserted, no apparatus is modeled, and the historical
Stern-Gerlach experiment is not described or explained by this item. The
identification of the model with any real beam experiment remains a tested
identification with uncertainty under
[[post-nrqm-framework-preparation-and-apparatus]].

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5 and P6 and the magnetic-moment
postulate in the stated readings; the two choice principles; the parameters
$m>0$, $s=\tfrac12$, $\gamma\in\mathbb R$ and the real
$B_{z}\in C^{1}(\mathbb R)$ with $B_{z},B_{z}'$ bounded; the reals $a>0$,
$G$, $\tau>0$; the profile $\mathbf B$; the operator $H_{Z}$; the flow
$u(t)$; the unit vector $u_{0}\in D(H_{Z}^{2})$; the sector projections
$P_{\pm}$; the marginal densities $\eta_{\pm}$.

[F1] **Model force theorem.** For the present model and profile, with the
identifications of
[[pthm-nrqm-angular-momentum-stern-gerlach-conditional-force]] clauses
(a),(b): $H_{Z}$ is self-adjoint on $W^{2,2}$, $S_{3}$ commutes with $H_{Z}$
on the domain, the sector weights $\|P_{\pm}u(t)\|^{2}$ and the mean
$\langle S_{3}\rangle_{u(t)}$ are independent of $t$, and for every
$v_{0}\in D(H_{Z}^{2})$ with flow $v(t)=e^{-itH_{Z}/\hbar}v_{0}$ one has
$$\frac{d}{dt}\bigl\langle P_{x}v(t),v(t)\bigr\rangle =\gamma\,\bigl\langle S_{3}B_{z}'(Q_{x})v(t),v(t)\bigr\rangle ;$$
if additionally $P_{+}v_{0}=v_{0}$ and $B_{z}'=G$ on a Borel set carrying the
first-coordinate marginal of $v_{0}^{+}$, then
$\frac{d}{dt}|_{t=0}\langle P_{x}v(t),v(t)\rangle=\frac{\gamma\hbar}{2}G$; in
the model readings the operator $S_{3}$ is
$\tfrac{\hbar}{2}$ times the Pauli $\sigma_{z}$ on the internal factor
([[pthm-nrqm-angular-momentum-stern-gerlach-conditional-force]] clauses
(a),(b), [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e),
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]]
clause (c)).

[F2] **Sector invariance.** $P_{\pm}=\tfrac12(I\pm 2S_{3}/\hbar)$ are
orthogonal projections with $P_{+}+P_{-}=I$ and
$S_{3}P_{\pm}=\pm\tfrac{\hbar}{2}P_{\pm}$; since $S_{3}$ commutes with
$H_{Z}$ on $D(H_{Z})$ by [F1], $P_{\pm}$ commute with $H_{Z}$, preserve
$D(H_{Z})$ and $D(H_{Z}^{2})$, and commute with the flow, so
$u_{\pm}(t)=P_{\pm}u(t)=e^{-itH_{Z}/\hbar}P_{\pm}u_{0}$ lies in the $\pm$
spin sector for every $t$, with $\|u_{\pm}(t)\|=w_{\pm}^{1/2}$
([[def-nrqm-autonomous-dynamics-framework-evolution]],
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]],
[[def-nrqm-state-geometry-framework-state-space]]).

[F3] **Hypothetical containment premise.** It is assumed that for each sign
and every $t\in[0,\tau]$ the density $\eta_{\pm}(t,\cdot)$ is supported in
$(-a,a)$; under this premise, since $B_{z}'(x_{1})=G$ for $x_{1}\in(-a,a)$ by
the window hypothesis, the identity $S_{3}B_{z}'(Q_{x})u_{\pm}(t)
=\pm\tfrac{\hbar}{2}G\,u_{\pm}(t)$ holds as classes. This premise is assumed,
not derived, and is labeled hypothetical
([[def-nrqm-observables-framework-observable-and-outcome-law]],
[[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-framework-quantities-and-units]]).

## Proof

**Proof technique:** direct; decompose the state into the conserved spin
sectors, apply the conditional force identity to each sector with the window
premise, and integrate the resulting constant rates.

**Given:** The data of the statement and [F1]-[F3].

1.1 [Sector decomposition and conservation] By [F2] the sector components $u_{\pm}(t)$ satisfy $u_{\pm}(t)=e^{-itH_{Z}/\hbar}u_{\pm}(0)$ with $u_{\pm}(0)=P_{\pm}u_{0}\in D(H_{Z}^{2})$, $\|u_{\pm}(t)\|^{2}=w_{\pm}$, and $\langle S_{3}\rangle_{u(t)}=\tfrac{\hbar}{2}\|u_{+}(t)\|^{2}-\tfrac{\hbar}{2}\|u_{-}(t)\|^{2}=\tfrac{\hbar}{2}(w_{+}-w_{-})$ is independent of $t$; this is (i). [F1, F2, algebra]

2.1 [Sector rates] Apply the general rate identity of [F1] to each sector component $u_{\pm}$: $\frac{d}{dt}\langle P_{x}u_{\pm}(t),u_{\pm}(t)\rangle=\gamma\langle S_{3}B_{z}'(Q_{x})u_{\pm}(t),u_{\pm}(t)\rangle$; by the numerical identity $S_{3}u_{\pm}(t)=\pm\tfrac{\hbar}{2}u_{\pm}(t)$ of [F2] and the premise [F3] giving $S_{3}B_{z}'(Q_{x})u_{\pm}(t)=\pm\frac{\hbar}{2}Gu_{\pm}(t)$, the right-hand side equals $\pm\frac{\gamma\hbar G}{2}\|u_{\pm}(t)\|^{2}=\pm\frac{\gamma\hbar G}{2}w_{\pm}$; dividing by the constant sector weight $w_{\pm}>0$ gives $\frac{d}{dt}M_{\pm}(t)=\pm\frac{\gamma\hbar G}{2}$ on $[0,\tau]$. [step 1.1, F1, F2, F3, algebra]

3.1 [Integration and separation] Integrating the constant rates of step 2.1 over $[0,\tau]$ gives $\langle P_{x}u_{\pm}(\tau),u_{\pm}(\tau)\rangle=\langle P_{x}u_{\pm}(0),u_{\pm}(0)\rangle\pm\frac{\gamma\hbar G\tau}{2}$ for the normalized sector means; subtracting the two identities gives the separation $\gamma\hbar G\tau$ of the sector means, and adding them with the weights $w_{\pm}$ and using $u(t)=u_{+}(t)+u_{-}(t)$ with orthogonality of the sectors gives $\frac{d}{dt}\langle P_{x}u(t),u(t)\rangle=\frac{\gamma\hbar G}{2}(w_{+}-w_{-})=\gamma G\langle S_{3}\rangle_{u_{0}}$ and the conservation of the total mean for $w_{+}=w_{-}$, which are (ii) and (iii). [step 2.1, step 1.1, algebra]

4.1 [Assembly and scope] Steps 1.1, 2.1 and 3.1 prove (i)-(iii) under the explicit premise [F3]; the premise is hypothetical, no position-space trace, count or apparatus entered, and no empirical conclusion is drawn, which is the status statement (iv). [step 1.1, step 2.1, step 3.1, F3] ∎

## Remarks

- **Normalization of the means.** The mean transverse momentum of a sector is
  read from the outcome law of the whole preparation restricted to the
  sector, that is from the normalized sector mean; the statement and the
  proof use this reading, and the sector rate is constant under the window
  premise.
- **How strong the premise is.** The containment premise constrains the
  prepared state and the field window jointly; for a spreading wave packet
  and a finite window it can fail for large $\tau$ or narrow packets, and the
  item asserts nothing about when it holds. The physical two-beam profile of
  a real Stern-Gerlach magnet is not modeled here.
