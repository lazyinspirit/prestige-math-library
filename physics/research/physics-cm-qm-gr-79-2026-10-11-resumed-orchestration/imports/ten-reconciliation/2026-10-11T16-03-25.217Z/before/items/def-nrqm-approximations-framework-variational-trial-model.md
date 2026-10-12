---
id: def-nrqm-approximations-framework-variational-trial-model
aliases: [nrqm-approximations-framework-variational-trial-model]
kind: definition
domain: physics
title: "The declared variational trial reading: assigned energy observable, form domain, trial value, bottom and gap"
status: draft
origin: session
dependency_level: 9
deps: [post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-framework-quantities-and-units, def-nrqm-state-geometry-framework-state-space, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, pthm-nrqm-observables-preparation-moments, lem-spectral-form-domain-and-core-of-a-semibounded-operator, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-projection-valued-measure, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  pthm-nrqm-observables-preparation-moments: physical-result
  lem-spectral-form-domain-and-core-of-a-semibounded-operator: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The variational trial reading of a declared system of the framework: a self-adjoint assigned energy observable H bounded below, its form domain Q(H) and form q_H supplied by the cited spectral-form mathematics, the model bottom E(0) = inf sigma(H), an isolated bottom with a declared gap g and its spectral projection, the discrete eigenvalue ladder below the essential spectrum, and the declared vocabulary of trial vector and trial value. The definition asserts nothing about whether the bottom is attained, about any eigenvector, about any laboratory realization or identification, and about any measurement, apparatus or sampling model."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.2 printed page 212 (PDF page 220): Rayleigh's theorem, the upper bound <H> >= E0 for any state and the variational principle for a trial wavefunction"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave Mechanics', Section 5 printed pages 19-21 (PDF pages 18-20): the trial-wavefunction upper bound E_gs <= <H>_psi (5.13) and the unnormalised functional F[psi] (5.20)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8bf0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 4.3 printed pages 117-119 (PDF pages 129-131): the min-max theorem below the essential spectrum and the form-domain reading of the trial family"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the state and composition postulate P1, the
observable and probability postulate P2 and the autonomous-dynamics postulate
P4 ([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]]) for a declared system, in the
state reading of [[def-nrqm-state-geometry-framework-state-space]], the sharp
observable reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]] and the
evolution reading of [[def-nrqm-autonomous-dynamics-framework-evolution]];
units are those of [[def-nrqm-framework-quantities-and-units]]. Assume the
Axiom of Countable Choice and the Axiom of Choice as the choice hypotheses of
the cited mathematical suppliers ([[def-countable-choice]],
[[def-axiom-of-choice]]).

**(b) Assigned energy observable.** As an additional model assumption of the
pair, fix a self-adjoint operator $H:D(H)\subseteq\mathfrak H\to\mathfrak H$ on
the declared state space $\mathfrak H$ and **declare** the pair
$(H,\mathrm J)$ to be the system's sharp energy observable in the sense of
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a); this
identification of the operator with the energy of the system is an assumption
of the model, not a consequence of P1, P2 or P4. Assume $H$ is **bounded
below**: there is a real $c$ with $\langle Hu,u\rangle\ge c\|u\|^{2}$ for every
$u\in D(H)$. The spectrum $\sigma(H)$ is the set of the cited spectral
theorem, and the **model bottom** is
$$E_{0}:=\inf\sigma(H)\in[c,+\infty),$$
read in joules. An assignment of a concrete material system to the pair
$(H,\mathfrak H)$ is a tested identification in the sense of the preparation
and apparatus discipline P7 and is not made here.

**(c) Form domain and trial value.** Let $Q(H):=D\bigl((H-cI)^{1/2}\bigr)$ and
$q_{H}$ be the form domain and the closed semibounded form of
[[lem-spectral-form-domain-and-core-of-a-semibounded-operator]] for the lower
bound $c$ of clause (b), with
$$q_{H}[u]=\int_{\mathbb R}\lambda\,dE_{u}(\lambda)\qquad(u\in Q(H)),$$
$E$ the projection-valued measure of $H$ and $E_{u}(B)=\langle E(B)u,u\rangle$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[def-projection-valued-measure]]). The definition uses the facts, proved by
that lemma, that $q_H$ does not depend on the choice of the lower bound $c$, that
$D(H)$ is dense in $Q(H)$, and that $q_{H}[u]=\langle Hu,u\rangle$ for
$u\in D(H)$. A **trial vector** of the model is a vector $u\in Q(H)$ with
$\|u\|=1$; its **trial value** is $q_{H}[u]$, read in joules. For a trial
vector that lies in $D(H)$, the trial value is the mean energy of the pure
preparation $[u]$ under the observable $(H,\mathrm J)$ in the moment reading of
[[pthm-nrqm-observables-preparation-moments]]; for a general trial vector in
$Q(H)\setminus D(H)$ the trial value is the form value and is not asserted to
be the mean of any outcome law.

**(d) Bottom gap and discrete ladder.** If the bottom is an isolated spectral
value, declare a **gap** to be a real $g>0$ with
$$\sigma(H)\cap(E_{0},E_{0}+g)=\varnothing,$$
and put $P:=E(\{E_{0}\})$ for the bottom spectral projection. The **discrete
spectrum below the essential spectrum** is the part of
$\sigma_{\mathrm d}(H)$ of
[[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]] below
$\Lambda:=\inf\sigma_{\mathrm{ess}}(H)$, listed with multiplicity in
nondecreasing order as $E_{1}\le E_{2}\le\cdots$, with the convention
$E_{n}:=\Lambda$ once the list is exhausted, $\inf\varnothing=+\infty$. The
definition asserts neither that $E_{0}$ is an eigenvalue, nor that any
eigenvector exists, nor that $E_{0}=E_{1}$.

**(e) Scope.** Clauses (a)-(d) are a reading of the framework's state,
observable and dynamics postulates together with the declared operator $H$;
they assert nothing about whether a preparation attains the trial value, about
the behaviour of any preparation under time evolution beyond P4, about
equilibration, environmental coupling, measurement or apparatus, and about any
measured energy. All spectral statements are statements about the declared
operator.
