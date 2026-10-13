---
page: qm-math-magnetic-and-detection
title: Qm Math Magnetic And Detection
status: published
items:
  - def-nrqm-magnetic-and-detection-position-and-momentum-operators
  - lem-nrqm-magnetic-and-detection-weak-product-rule
  - lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint
  - def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator
  - thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator
  - thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation
  - thm-nrqm-magnetic-and-detection-gauge-transported-propagator
  - thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation
  - thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws
  - thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty
  - thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty
  - thm-nrqm-magnetic-and-detection-galilean-covariance
  - thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws
  - thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale
  - thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force
requires:
  - qm-math-orbital-and-spin
  - qm-math-intervals-and-contacts
  - sobolev-poincare-and-morrey-inequalities
  - the-lp-spaces-holder-minkowski-and-riesz-fischer
  - product-measures-and-the-fubini-tonelli-theorems
  - unbounded-self-adjoint-operators-and-stones-theorem
  - qm-math-composites
examples: []
---

The magnetic and detection layer of the non-relativistic quantum mechanics
mathematical prerequisites, all of it mathematics: the position and momentum
operators on Euclidean $L^2$ with their maximal domains, the bounded-coefficient
magnetic Schrodinger operator and its Kato-Rellich self-adjointness, gauge
covariance and the gauge-transported propagator, the smooth local continuity
equation, the coherent and incoherent two-path bin laws, covariance-refined and
maximal-domain preparation uncertainty, Galilean boost covariance, conserved
spectral probability laws, graph-domain Ehrenfest identities with the
conditional timescale bound, and the conditional Stern-Gerlach force. Every item
carries `domain: mathematics` and depends only on mathematical suppliers,
published or from the in-run pages [[qm-math-composites]],
[[qm-math-oscillator]], [[qm-math-orbital-and-spin]] and
[[qm-math-intervals-and-contacts]]; nothing here asserts a physical
interpretation, a measurement model or an empirical claim, and the companion
page [[qm-math-magnetic-and-detection-examples]] stays mathematics as well.

[[def-nrqm-magnetic-and-detection-position-and-momentum-operators]] fixes the
notation: $Q_jf=x_jf$ on the classes with $x_jf\in L^2$, and $P_jf=-i\hbar D_jf$
on the classes whose $j$-th weak derivative is an $L^2$ class.
[[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]] proves that
both are self-adjoint, that $D(P_j)=\{f:\xi_j\mathcal F_2f\in L^2\}$ with
$\mathcal F_2(P_jf)=2\pi\hbar\xi_j\mathcal F_2f$, and that translations
$\tau_af(x)=f(x-a)$ are unitary, preserve $W^{1,2}$ and $W^{2,2}$, and satisfy
$\tau_aP_j\tau_a^{-1}=P_j$, $\tau_aQ_j\tau_a^{-1}=Q_j-a_j$. The analytic
workhorse is [[lem-nrqm-magnetic-and-detection-weak-product-rule]]: a bounded
coefficient with bounded weak first derivatives multiplies $W^{1,2}$ into
$W^{1,2}$ with the Leibniz derivative, proved by density of compactly supported
smooth classes.

[[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]] fixes the
admissible magnetic data $(A,\Phi)$ and the operator
$K_{A,\Phi}u=\frac1{2m}\sum_jP_{A,j}(P_{A,j}u)+q\Phi u$ on $W^{2,2}$, and
[[thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator]] proves
that $P_{A,j}=P_j-qA_j$ is self-adjoint on $D(P_j)$, that $K_{A,\Phi}$ is
symmetric and self-adjoint on $W^{2,2}$, that the expansion
$K_{A,\Phi}=\frac1{2m}P^2-\frac q{2m}\sum_j(P_jA_j+A_jP_j)+\frac{q^2}{2m}|A|^2+q\Phi$
holds, and that $K_{A,\Phi}-K_0$ has $K_0$-bound below one, giving a lower
bound. [[thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation]] then
proves that the gauge multipliers $G(t)=e^{i\frac q\hbar\chi(\cdot,t)}$ are
unitary, preserve $W^{1,2}$ and $W^{2,2}$, satisfy the covariance identity
$(P_j-q(A_j+D_j\chi))G=G(P_j-qA_j)$, and are strongly continuous and
differentiable in $t$; [[thm-nrqm-magnetic-and-detection-gauge-transported-propagator]]
turns this into the transported operator identity
$H'(t)=G(t)K_{A,\Phi}G(t)^{-1}-q\partial_t\chi$, the explicit propagator
$G(t)e^{-i(t-s)K_{A,\Phi}/\hbar}G(s)^{-1}$, and the uniqueness of the
$H'$-dynamics in the stated class.

[[thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation]] records
the pointwise continuity equation
$\partial_t|\psi|^2+\operatorname{div}j=0$ for $C^2$ solutions of the
Schrodinger equation, its integrated form on bounded $C^1$ regions, global
norm conservation under domination whenever the two times lie in one interval
contained in the time domain, and the unitary-dynamics norm conservation as an
independent statement. On the detection side,
[[thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws]] compares the
coherent law $\|a+b\|^{-2}\int_B|a+b|^2$ with the weighted incoherent law,
records the signed difference identity, and imports the marker-overlap law with
its contraction $|\langle e_1,e_2\rangle|\le1$ and the conditional
independent-trials frequencies.
[[thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty]] gives
$(\Delta A)^2(\Delta B)^2\ge\operatorname{Cov}_u(A,B)^2+(\operatorname{Im}\langle x,y\rangle)^2$
with its equality case and the commutator pairing, and
[[thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty]]
proves $\Delta Q\Delta P\ge\hbar/2$ on the full maximal domain of the line, with
the explicit identities $\operatorname{Re}m_1=0$, $\operatorname{Re}m_2=-\frac12$
and $\operatorname{Im}\langle x_Q,y_P\rangle=-\frac\hbar2$.

[[thm-nrqm-magnetic-and-detection-galilean-covariance]] builds the boost family
$B_u(t)\psi(x)=e^{i(\frac m\hbar u\cdot x-\frac m{2\hbar}|u|^2t)}\psi(x-ut)$,
proves that it carries $W^{2,2}$-solutions of the bounded-potential model to
solutions with the moving potential $V(\cdot-ut)$ and that it intertwines the
free propagator, $B_u(t)e^{-i(t-s)K_0/\hbar}=e^{-i(t-s)K_0/\hbar}B_u(s)$.
[[thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws]] gives the
commutation calculus of a self-adjoint generator with bounded observables and
their projection-valued measures, the invariance of spectral laws and existing
moments, and the stationarity of eigenrays.
[[thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale]] proves
the graph-domain Ehrenfest identities
$f'=\frac i\hbar\langle(KA-AK)\psi,\psi\rangle=-\frac2\hbar\operatorname{Im}\langle A\psi,K\psi\rangle$
under explicit product-domain hypotheses, the bounded time-dependent version,
and the conditional timescale bound $\Delta K\,\tau_A\ge\frac\hbar2$.
Finally [[thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force]]
treats the two-component spin model
$K=\frac1{2m}\sum_jP_j^2-\gamma_sS_zB_z(Q_x)$, proves its self-adjointness and
the conservation of the spin-sector probabilities, computes the force identity
$\frac d{dt}\langle P_xu(t),u(t)\rangle=\gamma_s\langle S_zB_z'(Q_x)u(t),u(t)\rangle$
for $u_0\in D(K^2)$, records the constant-gradient value
$\frac{\gamma_s\hbar}2G$ at the preparation time, and verifies
$\operatorname{div}B=0$, $\operatorname{curl}B=(0,-B_z',0)$ for the model field.
All items are draft mathematics under construction; physical pages consume them
as stated mathematical premises and add their own postulates and interpretation.
