---
id: pthm-nrqm-potentials-finite-well-bound-states
aliases: [nrqm-potentials-finite-well-bound-states]
kind: physics-theorem
domain: physics
title: "Finite square well: bound-state conditions, simplicity and count"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-potentials-one-dimensional-line-model, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, pthm-nrqm-potentials-line-model-energy-and-stationary-states, lem-nrqm-potentials-free-operator-differential-identification, thm-nrqm-intervals-finite-well-root-conditions-and-bound-count, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  pthm-nrqm-potentials-line-model-energy-and-stationary-states: physical-result
  lem-nrqm-potentials-free-operator-differential-identification: mathematical-premise
  thm-nrqm-intervals-finite-well-root-conditions-and-bound-count: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The line model of the pair with the declared finite square well potential of depth U and half-width a: self-adjointness and boundedness of the assigned energy operator, the exact root conditions for its negative eigenvalues, the absence of eigenvalues outside the interval (-U,0), the simplicity and parity of the bound states, the bound-state count, and the stationary-state reading of the eigenpairs. The statement is conditional on P1, P2, P4, P5, the declared potential data and the cited mathematics; it asserts no measured spectrum, no material well and no empirical result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 2.3.1, printed pages 42-48 (PDF pages 45-51): the finite potential well, matching conditions, parity, the even and odd root conditions and the finite number of bound states"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 5.1, printed pages 75-79 (PDF pages 83-87): the square potential well, its parity decomposition, the condition k tan(ka)=K and the bound-state count"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.7, printed pages 214-220 (PDF pages 226-232): the spectra of one-dimensional Schroedinger operators, the essential spectrum [0,infinity) for decaying potentials (Lemma 9.35) and the Sturm nodal count below the essential spectrum (Theorem 9.40); PDF page = printed page + 12"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the postulates P1, P2, P4, P5 and the declared line model
[[def-nrqm-potentials-one-dimensional-line-model]] with mass parameter $m>0$
and spin label $s=0$, and assume the Axiom of Countable Choice and the Axiom
of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Fix $a>0$,
$U>0$ and let
$$V(x):=\begin{cases}-U,&|x|<a,\\ 0,&|x|>a,\end{cases}$$
read in joules, with $U$ in joules and $a$ in metres; let $H_{\mathrm w}$ be
the assigned energy operator of the line model with this potential, so that by
[[lem-nrqm-potentials-free-operator-differential-identification]]
$D(H_{\mathrm w})=H^{2}(\mathbb R;\mathbb C)$ and
$H_{\mathrm w}\psi=-\frac{\hbar^{2}}{2m}\psi''+V\psi$; finally put
$K:=\sqrt{2mU}/\hbar$. Then:

(a) $(H_{\mathrm w},\mathrm J)$ is an assigned sharp observable; $H_{\mathrm
w}$ is self-adjoint on $H^{2}(\mathbb R;\mathbb C)$ and bounded below.

(b) *Bound-state conditions.* For $E<0$ with $-U<E<0$ write
$\varepsilon:=-E$, $\kappa:=\sqrt{2m\varepsilon}/\hbar>0$ and
$k:=\sqrt{2m(U-\varepsilon)}/\hbar>0$, so that $k^{2}+\kappa^{2}=K^{2}$. Then
$E$ is an eigenvalue of $H_{\mathrm w}$ if and only if
$$k\tan(ka)=\kappa\qquad\text{(even case)}\qquad\text{or}\qquad -k\cot(ka)=\kappa\qquad\text{(odd case)} .$$
Every such eigenvalue is simple; its eigenfunction is, up to a nonzero scalar,
$x\mapsto\cos(kx)$ on $(-a,a)$ continued by $ce^{-\kappa|x|}$ outside in the
even case, and $x\mapsto\sin(kx)$ on $(-a,a)$ continued by
$c\,\operatorname{sgn}(x)e^{-\kappa|x|}$ outside in the odd case. No $E\le-U$
and no $E\ge0$ is an eigenvalue, so every eigenvalue of $H_{\mathrm w}$ lies in
$(-U,0)$; the bound-state energies of the model are exactly these eigenvalues,
and each bound state is stationary with energy equal to its eigenvalue.

(c) *Count.* The number of negative eigenvalues of $H_{\mathrm w}$ equals
$\bigl\lceil 2aK/\pi\bigr\rceil$; more precisely, the equations of (b) have
exactly one solution $k$ in each interval
$\bigl(\frac{n\pi}{2a},\frac{(n+1)\pi}{2a}\bigr)$, $n\ge0$, whose left
endpoint satisfies $\frac{n\pi}{2a}<K$, and no solution in $(0,K)$ elsewhere,
and the solutions are alternatively of even type ($n$ even) and odd type
($n$ odd). In particular $H_{\mathrm w}$ has at least one bound state for all
$a,U>0$.

(d) *Scope.* The statement is conditional on P1, P2, P4, P5, the declared well
data $a,U$ and the cited mathematics; the energies are read in joules when
$a$ is in metres, $U$ in joules and $\hbar$ in $\mathrm{J\,s}$. No material
well, impurity or measured spectrum is identified with the model, and no
empirical result is asserted.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5 and the choice hypotheses; the line model with $m>0$; the well data $a>0$, $U>0$, $K=\sqrt{2mU}/\hbar$; the assigned energy operator $H_{\mathrm w}$ with $D(H_{\mathrm w})=H^{2}(\mathbb R;\mathbb C)$ and $H_{\mathrm w}\psi=-\frac{\hbar^{2}}{2m}\psi''+V\psi$.

[F1] **The mathematical finite-well operator.** With $V(x)=-U$ for $|x|<a$, $V(x)=0$ for $|x|>a$, the operator $H\psi:=-\frac{\hbar^{2}}{2m}\psi''+V\psi$, $D(H):=H^{2}(\mathbb R;\mathbb C)$, is self-adjoint; $E\in(-U,0)$ is an eigenvalue of $H$ if and only if, with $\varepsilon=-E$, $\kappa=\sqrt{2m\varepsilon}/\hbar$, $k=\sqrt{2m(U-\varepsilon)}/\hbar$, the pair satisfies $k\tan(ka)=\kappa$ or $-k\cot(ka)=\kappa$; every such eigenvalue is simple with the displayed eigenfunctions; there are no eigenvalues $E\le-U$ and none with $E\ge0$; the number of negative eigenvalues equals $\lceil 2aK/\pi\rceil$, the solutions lie one in each interval $(n\pi/2a,(n+1)\pi/2a)$ whose left endpoint satisfies $n\pi/2a<K$, there are no solutions elsewhere in $(0,K)$, and the types alternate with the parity of $n$ ([[thm-nrqm-intervals-finite-well-root-conditions-and-bound-count]] clauses (a)-(d)). Moreover, since $V$ is real, bounded and measurable with $\|V\|_{\infty}=U$, the same operator coincides with $H_{0}^{\mathrm{lin}}+M_{V}$ from the model construction and is bounded below by $-\|V\|_{\infty}=-U$ in the quadratic-form sense, by clause (c) of [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]].

[F2] **Model operator identification.** The line model's assigned energy operator with potential $V$ has domain $W^{2,2}(\mathbb R;\mathbb C)=H^{2}(\mathbb R;\mathbb C)$ and acts as $-\frac{\hbar^{2}}{2m}D^{2}+V$; hence it is exactly the operator $H$ of [F1] for the displayed $V$ ([[lem-nrqm-potentials-free-operator-differential-identification]] clauses (a), (b), [[def-nrqm-potentials-one-dimensional-line-model]] clause (c)).

[F3] **Energy observable and stationary reading.** $H_{\mathrm w}$ is an assigned sharp observable in the sense of clause (a) of [[def-nrqm-observables-framework-observable-and-outcome-law]], with the flow of P4 and reflection-positive position readings; a nonzero $\psi$ gives a stationary preparation exactly when $\psi$ is an eigenvector of $H_{\mathrm w}$, and the energy law of a unit eigenvector is the point mass at its eigenvalue ([[pthm-nrqm-potentials-line-model-energy-and-stationary-states]] clauses (a), (c); [[def-nrqm-autonomous-dynamics-framework-evolution]]).

[F4] **Units.** Energy, potential and Hamiltonian eigenvalues are read in joules, position in metres and $\hbar$ in $\mathrm{J\,s}$; the energy unit joule is a declared unit for the spectral coordinate ([[def-nrqm-framework-quantities-and-units]] clauses (b), (c), (d)4).

## Proof

**Proof technique:** direct; identify the declared model operator with the mathematical finite-well operator of the cited theorem and transfer its clauses, then read the bound-state vocabulary and the stationary property from the model definitions.

**Given:** The data and hypotheses of the statement and [F1]-[F4].

1.1 [Operator identity] By clause (c) of the line model the assigned energy operator of the well is $H_{\mathrm w}=H_{0}^{\mathrm{lin}}+M_{V}$ on $D(H_{\mathrm w})=W^{2,2}(\mathbb R;\mathbb C)$; by [F2] this domain is $H^{2}(\mathbb R;\mathbb C)$ and $H_{\mathrm w}\psi=-\frac{\hbar^{2}}{2m}\psi''+V\psi$ for every $\psi$ in it, which is exactly the operator $H$ of [F1]. Therefore $H_{\mathrm w}=H$ as operators with the same domain, and [F1] gives that $H_{\mathrm w}$ is self-adjoint and bounded below by $-U$ in the quadratic-form sense. [given, F1, F2, algebra]

2.1 [Bound state conditions] Since the operators coincide, the eigenvalue statements of [F1] clause (b) apply verbatim to $H_{\mathrm w}$: for $-U<E<0$ the eigenvalue condition is the even or odd root condition, every such eigenvalue is simple and has the displayed eigenfunction. By [F1] clause (c) there are no eigenvalues $E\le-U$ or $E\ge0$, so the eigenvalue set of $H_{\mathrm w}$ is contained in $(-U,0)$ and is given by the root conditions; by clause (d) of the model the bound states are exactly the unit eigenvectors with negative eigenvalue, with binding energy the eigenvalue, and by [F3] each is stationary with that energy. This is (b). [step 1.1, F1, F3, algebra]

3.1 [Count] The count and branch description are those of [F1] clause (d) applied to $H_{\mathrm w}=H$: exactly $\lceil 2aK/\pi\rceil$ negative eigenvalues, one solution in each admissible half-period branch, alternating types, and no other solutions. Since $2aK/\pi>0$, the ceiling is at least one, giving at least one bound state; this is (c). [step 2.1, F1, algebra]

4.1 [Observable reading and scope] By [F3] the pair $(H_{\mathrm w},\mathrm J)$ is an assigned sharp observable with the energy unit of [F4], and the position reading of a unit eigenvector is its density $|\psi|^{2}$; no laboratory identification is made, and the exclusions of (d) repeat clause (f) of the line model. This completes the proof of (a)-(d). [step 1.1, step 2.1, step 3.1, F3, F4] ∎

## Remarks

- **Boundedness below.** The lower bound $-U$ is read off from the absence of
  eigenvalues below $-U$ together with the boundedness of the potential; it is
  a bound for the model's energy and is not claimed to be attained by a
  spectral value.
- **What is not asserted.** The theorem does not compute the eigenvalues
  numerically beyond their defining root conditions, does not compare them with
  data, and does not claim that any material system realizes the square well.
  The example page of the pair carries exact finite checks of the root
  conditions and of the count.
