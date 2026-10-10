---
id: pthm-sr-momentum-and-four-force
kind: physics-theorem
title: "Energy, momentum, invariant mass and four-force of relativistic particles, and necessary collision thresholds"
status: draft
origin: pipeline
domain: physics
physical_scope: "Massive particles with constant positive mass and ideal massless particles described by future null four-momenta in flat Minkowski spacetime with ideal clocks and SI conventions; measured energy, momentum and kinetic energy are the model quantities E_n, q_n, T_n; isolated collisions obey the adopted four-momentum balance at one event, and the stated thresholds are necessary kinematic conditions only. The variable-mass clause is a mathematical derivative identity, not an adopted variable-mass dynamics. Excludes internal structure, spin, radiation reaction, force laws and interaction mechanisms (a separate premise), continuum matter, gravity, quantum and statistical descriptions, and every empirical claim, measurement value or precision statement."
deps:
  - post-sr-massive-particle-dynamics
  - post-sr-ideal-massless-particle-momentum
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - lem-sr-energy-momentum-observer-identities
  - lem-sr-four-momentum-in-inertial-frame
  - def-sr-proper-time-derivative-and-four-force
  - lem-sr-four-force-and-work-energy-identities
  - def-sr-total-four-momentum-and-invariant-mass
  - lem-sr-finite-future-causal-sums
  - lem-sr-center-of-momentum-frame
  - def-sr-collision-datum-and-conservation
  - lem-sr-collision-necessary-conditions
  - def-sr-si-units-and-coordinate-conventions
  - def-inertial-frame-and-inertial-chart
  - def-sr-four-velocity-and-four-acceleration
  - def-causal-classification-of-lorentz-vectors
  - def-lorentz-form-and-inertia
  - def-sr-affine-minkowski-model
dependency_roles:
  post-sr-massive-particle-dynamics: physical-assumption
  post-sr-ideal-massless-particle-momentum: physical-assumption
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  lem-sr-four-momentum-in-inertial-frame: mathematical-premise
  def-sr-proper-time-derivative-and-four-force: mathematical-premise
  lem-sr-four-force-and-work-energy-identities: mathematical-premise
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
  lem-sr-finite-future-causal-sums: mathematical-premise
  lem-sr-center-of-momentum-frame: mathematical-premise
  def-sr-collision-datum-and-conservation: mathematical-premise
  lem-sr-collision-necessary-conditions: mathematical-premise
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
dependency_level: 16
proof_strategy: direct
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Sections 4.3.1 pp. 88-89 and 4.3.4 p. 96 (four-momentum, mass shell, p = m gamma v), Section 4.3.2 p. 90 (centre-of-momentum frame, M >= m1 + m2, threshold language) and p. 94 (the one-photon process)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 27, equations (1.100)-(1.102) (p^mu = m U^mu, energy and momentum components, force four-vector)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), c = 1; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf; Section 6.3 pp. 63-64 (P^a = m u^a and observer energy) and Section 7.4 printed p. 86 (total energy equals total mass in the centre-of-momentum frame)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Adopt [[post-sr-massive-particle-dynamics]] and
[[post-sr-ideal-massless-particle-momentum]]. Then the following conditional
physical claims hold in the flat classical model, with the units of
[[def-sr-si-units-and-coordinate-conventions]].

**(a) Massive particle.** Let a massive particle have constant mass $m>0$,
four-momentum $P=mU$ and a future unit observer $n$. Its measured energy
$E_n(P)=-c\,\eta(P,n)$, spatial momentum $q_n(P)=h(P)$ and kinetic energy
$T_n(P)=E_n(P)-mc^2$ satisfy $E_n(P)>0$, $T_n(P)\ge0$ and the mass-shell
identity $E_n(P)^2=m^2c^4+c^2|q_n(P)|^2$; $T_n(P)=0$ if and only if the
particle is at rest in the observer's frame ($U=cn$). In an inertial frame
whose stationary observer is $n=e_0$, the components are $P=(E/c,\mathbf p)$
with $E=E_{e_0}(P)=m\gamma_wc^2$ and $\mathbf p=m\gamma_w\mathbf w\in\mathbb R^3$
the coordinates of $q_{e_0}(P)=\sum_{i=1}^3p^ie_i$
for the coordinate velocity $\mathbf w$, and under a passive boost the
components transform as the components of the vector $P$; the combination
$E^2-c^2|\mathbf p|^2=m^2c^4$ is frame-independent.

**(b) Four-force.** Along a $C^2$ worldline with four-acceleration $A$, the
four-force $F=\dot P$ satisfies $\eta(P,F)=0$ and $F=mA$; in an inertial frame
$F=\gamma\,(\mathbf f\cdot\mathbf w/c,\ \mathbf f)$ and
$dE/dt=\mathbf f\cdot\mathbf w$, where $\mathbf f=d\mathbf p/dt$ is the
coordinate three-force. The constancy of $m$ is used; if instead $m$ is a
$C^1$ function $m:I\to(0,\infty)$ along the same worldline, define $P:=mU$
and $F:=\dot P$ by the general derivative construction. As a mathematical identity, $\eta(P,F)=-mc^2\,dm/d\tau$, and the
constant-mass identities are not transferred to variable-mass systems.

**(c) System mass.** For a finite nonempty system of particles all of whose
four-momenta are nonzero future causal, let $Q:=\sum_iP_i$. If $Q$ is
future timelike, its invariant mass $M=\sqrt{-\eta(Q,Q)}/c$ satisfies: in the
center-of-momentum frame with $e_0=Q/(Mc)$ one has
$Mc^2=\sum_iE_{e_0}(P_i)$; every massive constituent has
$E_{e_0}(P_i)\ge m_ic^2$, with equality exactly when it is at rest in that
frame, and every massless constituent has $E_{e_0}(P_i)>0$. Hence
$M\ge\sum_im_i$ over the massive constituents, with equality if and only if
the system is massive-only and all its constituents are at rest in the
center-of-momentum frame. If $Q$ is future null, then $M=0$, all constituents
are massless with parallel momenta, and no center-of-momentum frame exists.

**(d) Massless particle.** An ideal massless particle has
$E_n(P)=c\,|q_n(P)|>0$, has no rest frame and is not $mU$ for any $m>0$; it is
not obtained from the massive formula by setting $m=0$.

**(e) Necessary collision thresholds.** Suppose that, under the adopted
isolated-collision balance, an isolated collision occurs whose incoming legs
are massive particles of constant masses $m_1,\dots,m_N$ and whose outgoing
legs are massive particles of masses $\mu_1,\dots,\mu_K$ and possibly ideal
massless particles. Let $M$ be the invariant mass of the common total
four-momentum $Q$. Then the necessary inequalities $M\ge\sum_im_i$ and
$M\ge\sum_j\mu_j$ hold; if the incoming side is a projectile of mass $m_1$
and a target of mass $m_2$ at rest in the observer frame of the target, with
projectile energy $E$ and kinetic energy $T=E-m_1c^2$ in that frame, then

$$E\ \ge\ \frac{c^2}{2m_2}\Bigl[\Bigl(\sum_{j=1}^K\mu_j\Bigr)^2-m_1^2-m_2^2\Bigr],\qquad T\ \ge\ \frac{c^2}{2m_2}\Bigl[\Bigl(\sum_{j=1}^K\mu_j\Bigr)^2-(m_1+m_2)^2\Bigr],$$

Separately, under the same adopted balance, a single incoming massless particle
cannot produce an outgoing state containing a massive particle. These are kinematic necessity statements under
the adopted conservation: they do not assert that any collision occurs, do
not fix probabilities, amplitudes or cross sections, and are not empirical
findings.

**(f) Scope.** All clauses are conditional on the two postulates and on the
stated idealisations; the conclusions carry the same idealisations. No
measurement, precision, statistical or empirical claim is made.

## Facts & Assumptions

**Given:** the adopted premises [[post-sr-massive-particle-dynamics]] and [[post-sr-ideal-massless-particle-momentum]]; the flat Minkowski model $(A,V,\eta,C^+)$ with $c>0$; for (a) a massive particle with constant $m>0$ and future unit observer $n$; for (b) a $C^2$ worldline; for (c) a finite nonempty system of particles with nonzero future causal four-momenta; for (e) an isolated collision with massive incoming and outgoing legs as stated.

[F1] ([[post-sr-massive-particle-dynamics]], Postulate (i) and (ii)): every massive classical particle carries a positive constant mass parameter $m>0$ and has four-momentum $P=mU$; relative to a future unit observer $n$ the model identifies the measured energy with $E_n(P)$, the measured spatial momentum with $q_n(P)$, the kinetic energy with $T_n(P)=E_n(P)-mc^2$ and the rest energy with $mc^2$; the SI unit of $P$ is kilogram metre per second.

[F2] ([[post-sr-ideal-massless-particle-momentum]], Postulate (i) and (ii)): an ideal massless particle is described by a nonzero future null vector $P$, with measured energy and spatial momentum identified with $E_n(P)$ and $q_n(P)$; it is not of the form $mU$ for any $m>0$ and future timelike $U$ with $\eta(U,U)=-c^2$, and it has no four-velocity, no proper-time parametrisation and no rest frame.

[F3] ([[lem-sr-energy-momentum-observer-identities]], Statement (a) and (b)): for nonzero future causal $P$ and future unit $n$, $E_n(P)>0$ and the mass shell and null identities hold; for $P=mU$ with $m>0$, $\eta(U,U)=-c^2$ and $\gamma:=-\eta(U/c,n)\ge1$, one has $E_n(P)=mc^2\gamma$, $T_n(P)=mc^2(\gamma-1)\ge0$, $T_n(P)=0$ if and only if $U=cn$, and $m(P)=m$.

[F4] ([[lem-sr-four-momentum-in-inertial-frame]], Statement (a)–(c)): in an inertial frame with $n=e_0$ the components are $(P^0,P^1,P^2,P^3)=(E_n(P)/c,q^1,q^2,q^3)$ and the mass-shell identity holds in components; for $P=mU$ with chart coordinate velocity $w$ one has $E=m\gamma_wc^2$, $\mathbf p=m\gamma_w\mathbf w$; under a passive boost the components transform as the components of $P$, the combination $E^2-c^2|\mathbf p|^2$ is invariant and equals $m(P)^2c^4$ for future timelike $P$ and $0$ for future null $P$.

[F5] ([[lem-sr-four-force-and-work-energy-identities]], Statement (a)–(d)): with $F=\dot P$ the four-force of [[def-sr-proper-time-derivative-and-four-force]] along a $C^2$ worldline, $F=mA$, $\eta(P,F)=0$, $F=\gamma(\mathbf f\cdot\mathbf w/c,\mathbf f)$, $dE/dt=\mathbf f\cdot\mathbf w$ for constant $m$, and $\eta(P,F)=-mc^2\,dm/d\tau$ for a $C^1$ variable mass parameter.

[F6] ([[def-sr-total-four-momentum-and-invariant-mass]], Definition): side totals are finite sums; the invariant mass of a future timelike total $Q$ is $M=\sqrt{-\eta(Q,Q)}/c$; for a future null total $M=0$ by convention; a center-of-momentum frame of a nonzero total is an inertial frame with $q_{e_0}(Q)=0$.

[F7] ([[lem-sr-finite-future-causal-sums]], Statement): for nonzero future causal $P_1,\dots,P_N$, the total $Q=\sum_iP_i$ is nonzero future causal and is future timelike if some $P_i$ is future timelike; $-\eta(v,w)\ge0$ for $v,w\in\mathrm{cl}(C^+)$ with equality if and only if $v=0$, or $w=0$, or both are nonzero future null with $w=\lambda v$, $\lambda>0$; $E_n$ and $q_n$ are additive over finite sums, with $E_n(Q)>0$.

[F8] ([[lem-sr-center-of-momentum-frame]], Statement (a) and (c)): for future timelike $Q$ with invariant mass $M$ there is an inertial frame with $e_0=Q/(Mc)$, $q_{e_0}(Q)=0$ and $E_{e_0}(Q)=Mc^2$; a nonzero future null vector has no center-of-momentum frame.

[F9] ([[def-sr-collision-datum-and-conservation]], Definition): a collision datum consists of an event and two finite nonempty lists of legs with side totals; it conserves when the totals are equal; a mass-specified datum is on-shell with recorded masses; a causal datum has all legs in $\mathrm{cl}(C^+)$.

[F10] ([[lem-sr-collision-necessary-conditions]], Statement (a), (c) and (d)): for a mass-specified conserving causal on-shell datum with nonzero legs and future timelike total $Q$ of invariant mass $M$, each side satisfies $M\ge\sum m_\ell$ over its massive legs with equality exactly when the side is massive-only and all its massive legs are at rest in the center-of-momentum frame; for the two-leg incoming side $P_i=m_iU_i$ with $n_2=U_2/c$, $\gamma=-\eta(U_1/c,n_2)$ and $E=E_{n_2}(P_1)=m_1c^2\gamma$, one has $M^2=m_1^2+m_2^2+2m_2E/c^2$, giving the stated thresholds for an outgoing massive-mass sum $\sum_j\mu_j$; and a conserving datum with a single null incoming leg and an outgoing massive leg does not exist.

[F11] ([[def-sr-si-units-and-coordinate-conventions]], Definition): in the framework's conventions the four-momentum has the unit kilogram metre per second and the observer energy the unit joule.

[F12] ([[def-causal-classification-of-lorentz-vectors]] and [[def-lorentz-form-and-inertia]]): a nonzero vector is timelike when $\eta(v,v)<0$ and null when $\eta(v,v)=0$; $\eta$ is bilinear, so $\eta(mU,mU)=m^2\eta(U,U)$ and $0\cdot U=0$.

## Proof

**Proof technique:** quote the two adopted premises for the physical identification, then apply the page's mathematical suppliers clause by clause; the collision thresholds are the necessary conditions of the collision lemma under the adopted balance.

1.1 The adopted premises [F1] and [F2] provide the physical identification: for a massive particle the model's measured energy, spatial momentum, kinetic energy and rest energy are $E_n(P),q_n(P),T_n(P),mc^2$ with $P=mU$ and $m>0$ constant, and for an ideal massless particle they are $E_n(P),q_n(P)$ with $P$ a nonzero future null vector, no rest mass, rest energy or kinetic energy being assigned; [F11] fixes the units. [F1, F2, F11]

1.2 For $P=mU$ with $m>0$, $U$ future timelike, $\eta(U,U)=-c^2$ and $n$ future unit, [F3] gives $E_n(P)=mc^2\gamma$ with $\gamma=-\eta(U/c,n)\ge1$, $T_n(P)=mc^2(\gamma-1)\ge0$, $T_n(P)=0$ if and only if $U=cn$, the mass-shell identity $E_n(P)^2=m^2c^4+c^2|q_n(P)|^2$ and $m(P)=m$; [F4] adds the frame components $(E/c,\mathbf p)$ with $E=m\gamma_wc^2$, $\mathbf p=m\gamma_w\mathbf w$, the passive-boost transformation law and the invariance $E^2-c^2|\mathbf p|^2=m^2c^4$. [F3, F4]

1.3 For every nonzero future null $P$ and future unit $n$, [F3] gives $E_n(P)=c|q_n(P)|>0$; [F2] gives that such a $P$ has no four-velocity, proper time or rest frame; and [F12] shows that $m=0$ in the massive formula yields $0\cdot U=0\ne P$, while $m>0$ yields $\eta(mU,mU)=-m^2c^2<0$, so $mU$ is timelike and cannot equal the null $P$: no $m\ge0$ produces $P$ from $P=mU$. [F2, F3, F12]

1.4 Along a $C^2$ worldline with four-force $F=\dot P$, [F5] gives the identities $\eta(P,F)=0$, $F=mA$ for constant $m$, the frame form $F=\gamma(\mathbf f\cdot\mathbf w/c,\mathbf f)$, $dE/dt=\mathbf f\cdot\mathbf w$, and the variable-mass identity $\eta(P,F)=-mc^2\,dm/d\tau$. [F5]

1.5 For nonzero future causal $P_1,\dots,P_N$, [F7] makes $Q=\sum_iP_i$ nonzero future causal, future timelike if some $P_i$ is future timelike, additive in $E_n$ and $q_n$ with $E_n(Q)>0$, and gives the equality characterization of $-\eta(v,w)=0$ for $v,w\in\mathrm{cl}(C^+)$; [F6] and [F8] give the invariant-mass convention, the existence of the center-of-momentum frame with $e_0=Q/(Mc)$ and $E_{e_0}(Q)=Mc^2$ when $Q$ is future timelike, and the nonexistence of such a frame when $Q$ is nonzero future null. [F6, F7, F8]

1.6 Postulate (iii) of [[post-sr-massive-particle-dynamics]] adopts balance also for isolated data containing the ideal massless legs of [F2]. Thus the collision data of (e) form a mass-specified, conserving, causal, on-shell datum with nonzero legs in the sense of [F9]. For massive incoming legs, [F7] makes the total timelike and [F10] supplies the side mass inequalities and the two-leg incoming invariant-mass identity. If the outgoing massive list is empty, its mass sum is 0 and the side bound follows directly from M>0; the same identity and algebraic rearrangement still give the displayed energy thresholds. Separately, if the incoming list consists of a single null leg, its total is null, whereas any outgoing massive leg would make the outgoing total timelike by [F7], contradicting balance. [F1, F2, F7, F9, F10]

2.1 Clause (a): [step 1.1] identifies the measured quantities with $E_n,q_n,T_n,mc^2$ and [step 1.2] supplies $E_n(P)>0$, $T_n(P)\ge0$, the mass-shell identity, the rest criterion $T_n(P)=0\iff U=cn$, the frame components, the boost transformation law and the frame independence of $E^2-c^2|\mathbf p|^2=m^2c^4$. [step 1.1, step 1.2]

2.2 Clause (b): [step 1.1] makes $\dot P$ the model's four-force and $E_n(P)$ its measured energy, and [step 1.4] gives $\eta(P,F)=0$, $F=mA$, $F=\gamma(\mathbf f\cdot\mathbf w/c,\mathbf f)$ and $dE/dt=\mathbf f\cdot\mathbf w$ for constant $m$, together with the variable-mass identity and the warning that the constant-mass identities are not transferred to variable-mass systems. [step 1.1, step 1.4]

2.3 Clause (c), timelike total: assume $Q$ future timelike with invariant mass $M$; by [step 1.5] the center-of-momentum frame with $e_0=Q/(Mc)$ exists and $E_{e_0}(Q)=Mc^2$, and additivity gives $Mc^2=E_{e_0}(Q)=\sum_iE_{e_0}(P_i)$. Each massive constituent satisfies $E_{e_0}(P_i)=m_ic^2\gamma_i\ge m_ic^2$ with equality exactly when $U_i=ce_0$ by [step 1.2], and each massless constituent satisfies $E_{e_0}(P_i)=c|q_{e_0}(P_i)|>0$ by [step 1.3]; hence $M=\sum_{\text{massive}}m_i+\sum_{\text{massive}}m_i(\gamma_i-1)+\sum_{\text{massless}}E_{e_0}(P_i)/c^2\ \ge\ \sum_{\text{massive}}m_i$, with equality if and only if the system is massive-only and every massive constituent has $\gamma_i=1$, that is is at rest in the center-of-momentum frame. [step 1.2, step 1.3, step 1.5]

2.4 Clause (c), null total: if $Q$ is future null, then [step 1.5] gives $M=0$ by the convention and the nonexistence of a center-of-momentum frame; moreover $0=-\eta(Q,Q)=\sum_{i,j}-\eta(P_i,P_j)$ with each term nonnegative by [step 1.5], so each term vanishes and the equality characterization forces every $P_i$ to be nonzero future null and parallel to any other, that is all constituents are massless with parallel momenta. [step 1.5]

2.5 Clause (d): for an ideal massless particle [step 1.1] identifies the measured energy and momentum with $E_n$ and $q_n$, and [step 1.3] gives $E_n(P)=c|q_n(P)|>0$; the same step gives that $P$ has no four-velocity, proper time or rest frame, that $P\ne mU$ for every $m>0$, and that no $m\ge0$ produces $P$ from the massive formula. [step 1.1, step 1.3]

2.6 Clause (e): the collision data of [step 1.6] form a conserving mass-specified causal on-shell datum; its incoming side contains the massive legs of masses $m_1,\dots,m_N$, so $Q$ is future timelike by [step 1.5] and the invariant mass $M$ is defined; [step 1.6] then gives $M\ge\sum_im_i$ and, applied to the outgoing side with massive-mass sum $\sum_j\mu_j$, $M\ge\sum_j\mu_j$; in the two-leg projectile-target case with $n_2=U_2/c$, [step 1.6] gives $M^2=m_1^2+m_2^2+2m_2E/c^2$, and combining this with $M\ge\sum_j\mu_j$ yields the two displayed threshold inequalities by rearrangement, while the one-null-leg impossibility is the separate case in [step 1.6]. No interaction, probability, amplitude or cross section is asserted. [step 1.5, step 1.6]

3.1 Collecting: clause (a) is [step 2.1], clause (b) is [step 2.2], clause (c) is [step 2.3] together with [step 2.4], clause (d) is [step 2.5] and clause (e) is [step 2.6]; clause (f) records that every conclusion is conditional on the two adopted postulates and the stated idealisations, with no measurement or empirical claim, and no empirical premise is used in this deduction. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 2.6] ∎
