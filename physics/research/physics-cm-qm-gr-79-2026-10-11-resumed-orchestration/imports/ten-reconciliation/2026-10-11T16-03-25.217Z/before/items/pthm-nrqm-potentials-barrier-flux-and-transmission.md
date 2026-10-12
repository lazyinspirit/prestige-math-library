---
id: pthm-nrqm-potentials-barrier-flux-and-transmission
aliases: [nrqm-potentials-barrier-flux-and-transmission]
kind: physics-theorem
domain: physics
title: "Rectangular barrier: scattering solution, flux balance and transmission"
status: draft
origin: session
dependency_level: 10
deps: [def-nrqm-potentials-one-dimensional-line-model, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, lem-nrqm-potentials-one-dimensional-flux-identity, thm-nrqm-intervals-barrier-transfer-and-thick-limit-error, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  lem-nrqm-potentials-one-dimensional-flux-identity: mathematical-premise
  thm-nrqm-intervals-barrier-transfer-and-thick-limit-error: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The line model of the pair with the declared rectangular barrier of height U and width a, in the scattering reading of the model: the unique bounded piecewise-classical stationary solution with prescribed asymptotics, its conserved probability current, the exact transmission and reflection coefficients with the flux balance T+R=1, the identification of T and R with ratios of the transmitted and reflected currents to the reference current of the unit-amplitude incoming term, and the thick-barrier error bound. The scattering solution is a declared generalized stationary solution and not an element of the model state space; the statement is conditional on P1, P2, P4, P5, the declared barrier data and the cited mathematics, and asserts no wave-packet dynamics, no detector, no count and no empirical result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 2.4.2, printed pages 60-63 (PDF pages 63-66): tunnelling through a finite potential barrier, the matching calculation and the transmission probability"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 5.3, printed pages 84-89 (PDF pages 92-97): scattering of free particles, incoming and outgoing amplitudes, reflection and transmission, and tunnelling through a potential barrier"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Sections 9.6-9.7, printed pages 209-220 (PDF pages 221-232): spectral transformations and the spectra of one-dimensional Schroedinger operators; PDF page = printed page + 12"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the postulates P1, P2, P4, P5 and the declared line model
[[def-nrqm-potentials-one-dimensional-line-model]], with $m>0$, $\hbar>0$ and
energy, potential and position read in the units of
[[def-nrqm-framework-quantities-and-units]]. Assume the Axiom of Countable
Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Fix $a>0$, $U>E>0$ and let
$$V(x):=\begin{cases}U,&0<x<a,\\ 0&\text{otherwise},\end{cases}$$
let $k:=\sqrt{2mE}/\hbar$, $\kappa:=\sqrt{2m(U-E)}/\hbar$, and consider the
declared generalized stationary solutions of the model at energy $E$ (clause
(e) of the model) that are bounded, classically $C^{1}$ on $\mathbb R$ and
$C^{2}$ on each of $(-\infty,0),(0,a),(a,\infty)$. Then:

(a) *Scattering solution.* There is exactly one such $\psi$ with the
*transmission asymptotics*: $\psi(x)=e^{ikx}+re^{-ikx}$ for $x<0$ and
$\psi(x)=te^{ikx}$ for $x>a$, with uniquely determined $r,t\in\mathbb C$; with
$D:=2\cosh(\kappa a)+i\bigl(\frac{\kappa}{k}-\frac{k}{\kappa}\bigr)\sinh(\kappa a)$
one has $t=2e^{-ika}/D$, and
$$T:=|t|^{2}=\Bigl[1+\frac{U^{2}\sinh^{2}(\kappa a)}{4E(U-E)}\Bigr]^{-1},\qquad R:=|r|^{2}=1-T .$$

(b) *Conserved current and flux balance.* The declared probability current
$j(x):=\frac{\hbar}{m}\operatorname{Im}\bigl(\overline{\psi(x)}\psi'(x)\bigr)$
of the scattering solution is constant on $\mathbb R$, equal to
$\frac{\hbar k}{m}(1-|r|^{2})=\frac{\hbar k}{m}|t|^{2}$. With the **reference
current** $j_{\mathrm{in}}:=\frac{\hbar k}{m}$ of the unit-amplitude incoming
term $x\mapsto e^{ikx}$, the transmitted right-going current equals
$T\,j_{\mathrm{in}}$, the reflected left-going current has magnitude
$R\,j_{\mathrm{in}}$, and
$$T+R=1 .$$
The pair reads $T$ and $R$ as the transmitted and reflected fractions of the
reference current of the declared scattering solution; this reading is part of
the model and is not a measurement.

(c) *Thick-barrier form and error.* With $q:=e^{-2\kappa a}$ and
$C:=U^{2}/\bigl(4E(U-E)\bigr)$ one has
$$T=\frac{(4/C)\,q}{1+\bigl(\tfrac4C-2\bigr)q+q^{2}};$$
consequently, whenever $\delta:=\bigl(\tfrac4C-2\bigr)q+q^{2}$ satisfies
$|\delta|\le\frac12$,
$$\Bigl|T-\frac{16E(U-E)}{U^{2}}\,q\Bigr|\le\frac{32E(U-E)}{U^{2}}\,q\,|\delta| .$$

(d) *Scope.* The scattering solution $\psi$ is a declared generalized
stationary solution, not an element of $L^{2}(\mathbb R;\mathbb C)$; it is not
a preparation of the model, and no Born probability is read from it. The
numbers $T,R$ are exact model quantities of the declared solution, read as
ratios of currents under the model's scattering reading; the statement
contains no wave-packet construction, no time-dependent limit, no detector
response and no measured count, and it asserts neither that a particle passes
through the barrier nor that it is reflected.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5 and the choice hypotheses; the line model with $m>0$, $\hbar>0$; barrier data $a>0$, $U>E>0$; $k=\sqrt{2mE}/\hbar$, $\kappa=\sqrt{2m(U-E)}/\hbar$; the piecewise constant $V$ of the statement; the declared generalized stationary solutions at energy $E$.

[F1] **Flux identity.** For open intervals $\Omega$ and real continuous $V$, if $u,v$ on $\Omega\times I$ (or $\psi=u+iv$ componentwise) satisfy the stationary equation with continuous partial derivatives, then the current $j=\frac{\hbar}{m}\operatorname{Im}(\overline\psi\,\partial_x\psi)$ has zero derivative and is constant on $\Omega$; in particular for a classically $C^{2}$ stationary solution on an interval on which $V$ is constant, $j$ is constant there ([[lem-nrqm-potentials-one-dimensional-flux-identity]] clauses (a), (b)).

[F2] **The mathematical barrier theorem.** For $a,U,E,m,\hbar>0$ with $U>E$, the bounded $C^{1}$ functions that are $C^{2}$ on each of $(-\infty,0),(0,a),(a,\infty)$ and satisfy $-\frac{\hbar^{2}}{2m}\psi''+V\psi=E\psi$ on each interval: exactly one has the transmission asymptotics with uniquely determined $r,t$; $t=2e^{-ika}/D$ with the displayed $D$; $T=|t|^{2}=[1+U^{2}\sinh^{2}(\kappa a)/(4E(U-E))]^{-1}$; $R=|r|^{2}=1-T$; and with $q=e^{-2\kappa a}$, $C=U^{2}/(4E(U-E))$ the thick-barrier displays of the statement hold ([[thm-nrqm-intervals-barrier-transfer-and-thick-limit-error]] clauses (a)-(c)).

[F3] **The model's generalized-solution reading.** A declared generalized stationary solution is bounded, classically $C^{1}$ with continuous derivative, and $C^{2}$ on each open interval on which $V$ is continuous, satisfying the stationary equation there; it is generally not in $L^{2}$ and is used only through its declared current; the current is read in $\mathrm{s^{-1}}$ ([[def-nrqm-potentials-one-dimensional-line-model]] clause (e), [[def-nrqm-framework-quantities-and-units]] clause (d)5).

## Proof

**Proof technique:** direct; instantiate the mathematical barrier theorem for the declared data, prove the current is constant by the flux identity across the two jumps, and evaluate the current on the two exterior intervals to obtain the flux balance and the fraction reading.

**Given:** The data and hypotheses of the statement and [F1]-[F3].

1.1 [The scattering solution] The declared solutions of the statement are exactly the functions of [F2]'s hypothesis class for the displayed $V$: bounded, $C^{1}$ on $\mathbb R$ with continuous derivative, $C^{2}$ on each of the three intervals, and satisfying the stationary equation there, which is the same differential equation in the model's clause (e). Hence [F2] clause (a) gives existence and uniqueness of the transmission solution and the value $t=2e^{-ika}/D$, and [F2] clause (b) gives the displays for $T$ and $R$; this is (a). [given, F2, algebra]

2.1 [Constant current on each interval] On each of the three open intervals $V$ is constant, hence real and continuous; the scattering solution is classically $C^{2}$ there and satisfies the stationary equation with real energy $E$, so [F1] clause (b) gives $j'=0$ on each interval and $j$ constant on each. Since $\psi$ is classically $C^{1}$ on $\mathbb R$ with continuous derivative, $j=\frac{\hbar}{m}\operatorname{Im}(\overline\psi\psi')$ is continuous on $\mathbb R$, so the three constants agree and $j$ is constant on $\mathbb R$. [step 1.1, F1, F3, algebra]

3.1 [Evaluation on the exteriors] For $x<0$ the solution is $\psi=e^{ikx}+re^{-ikx}$; writing $\overline\psi\psi'=(e^{-ikx}+\overline r\,e^{ikx})(ike^{ikx}-ikre^{-ikx})$ and taking imaginary parts gives $\operatorname{Im}(\overline\psi\psi')=k(1-|r|^{2})$, because the two oscillating cross terms are conjugate and their sum is real; hence $j=\frac{\hbar k}{m}(1-|r|^{2})$ on $(-\infty,0)$. For $x>a$ the solution is $\psi=te^{ikx}$ and $\operatorname{Im}(\overline\psi\psi')=k|t|^{2}$, so $j=\frac{\hbar k}{m}|t|^{2}$ on $(a,\infty)$; by step 2.1 the two values are equal, which reproduces $1-|r|^{2}=|t|^{2}$, i.e. $R+T=1$ by (a). [step 2.1, F2, algebra]

4.1 [Fraction reading] The reference term $e^{ikx}$ alone has current $\frac{\hbar k}{m}\operatorname{Im}(e^{-ikx}\,ike^{ikx})=\frac{\hbar k}{m}=j_{\mathrm{in}}$, and the reflected term $re^{-ikx}$ alone has current $\frac{\hbar k}{m}\operatorname{Im}(|r|^{2}e^{-2ikx}\cdot(-i))=\frac{\hbar k}{m}(-|r|^{2})$; their sum is $\frac{\hbar k}{m}(1-|r|^{2})$, which is exactly the left exterior value of $j$ computed in step 3.1, so the cross-term contribution to the current vanishes and the transmitted current on the right equals $T\,j_{\mathrm{in}}$ and the magnitude of the reflected current equals $R\,j_{\mathrm{in}}$ with $T=|t|^{2}$, $R=|r|^{2}$. This is the flux balance and the fraction reading of (b), and clause (c) is [F2] clause (c). [step 3.1, F2, F3, algebra]

5.1 [Scope] By [F3] the scattering solution is a declared generalized stationary solution and not an $L^{2}$ class, so clause (d) of the model excludes reading a Born probability from it, and the numbers $T,R$ are the model's current ratios; the absence of wave-packet, detector and empirical claims is exactly clause (e) of the model. This completes the proof. [step 4.1, F3, given] ∎

## Remarks

- **Cross term of the current.** The identity
  $\operatorname{Im}(\overline{e^{ikx}+re^{-ikx}}\,(ike^{ikx}-ikre^{-ikx}))
  =k(1-|r|^{2})$ shows that the incoming and reflected contributions add
  without interference in the current, although the density does carry the
  cross term; this is why the flux balance is an exact statement for the
  declared solution.
- **What is not asserted.** No time-dependent wave packet, no arrival
  distribution, no resonant or above-barrier case ($E\ge U$ is excluded by
  $U>E$), and no material barrier is treated. The thick-barrier clause is an
  error bound of the cited mathematical theorem, not a measurement.
