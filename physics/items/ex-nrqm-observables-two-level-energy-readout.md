---
id: ex-nrqm-observables-two-level-energy-readout
aliases: [ nrqm-observables-two-level-energy-readout ]
kind: example
domain: physics
title: "An exact two-level energy readout and its moments"
status: draft
origin: pipeline
dependency_level: 10
deps:
  [
    cor-inner-product-induces-a-norm,
    def-axiom-of-choice,
    def-countable-choice,
    def-hilbert-space,
    def-inner-product-space,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-complex-conjugation-and-modulus-laws,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues,
    lem-nrqm-state-geometry-ray-to-rank-one-projection,
    pthm-nrqm-observables-born-outcome-law-properties,
    pthm-nrqm-observables-preparation-moments,
    thm-complex-spectral-theorem-for-normal-endomorphisms,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators
  ]
dependency_roles:
  cor-inner-product-induces-a-norm: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  pthm-nrqm-observables-born-outcome-law-properties: physical-result
  pthm-nrqm-observables-preparation-moments: physical-result
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise

proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite, exact model computation in the two-level state space
  of the framework: the energy observable E_1 P_1 + E_2 P_2 for two distinct
  energies in joules, its spectral measure, the outcome probabilities of a pure
  and of a mixed preparation, and the mean, second moment and variance of the
  readout. The energies are model parameters; the item asserts no apparatus
  realization, no measurement statistics from a laboratory and no empirical
  value."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Section 1, printed pages 1-6 (the two-state Hamiltonian
        with energies g_0 plus or minus g and its energy eigenstates)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        1.3.6 and 2.1, printed pages 13-14 and 17-21 (probabilities in a
        two-state space and the operator description of observables)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Let $H=\mathbb C^{2}$ carry the standard inner product $\langle z,w\rangle=z_{1}\overline{w_{1}}+z_{2}\overline{w_{2}}$ ([[def-inner-product-space]], [[def-hilbert-space]], [[cor-inner-product-induces-a-norm]], [[lem-complex-conjugation-and-modulus-laws]]), with orthonormal basis $e_{1}=(1,0)$, $e_{2}=(0,1)$. Fix two distinct energies $E_{1}\ne E_{2}$ in joules (model parameters, not measured values), and consider the assigned sharp observable
$$A:=E_{1}T_{e_{1},e_{1}}+E_{2}T_{e_{2},e_{2}},\qquad u_{A}=\mathrm J,$$
with $T_{u,v}x=\langle x,v\rangle u$ the rank-one calculus of [[lem-nrqm-composites-rank-one-operator-calculus]] ([[def-nrqm-observables-framework-observable-and-outcome-law]]). Then:

(i) $A$ is bounded and self-adjoint with $D(A)=H$; its spectral projection-valued measure is
$$E_{A}(B)=\mathbf 1_{E_{1}\in B}\,T_{e_{1},e_{1}}+\mathbf 1_{E_{2}\in B}\,T_{e_{2},e_{2}}\qquad(B\subseteq\mathbb R\ \text{Borel}),$$
so the spectrum is $\sigma(A)=\{E_{1},E_{2}\}$ and every outcome lies in it.

(ii) For the pure preparation of the unit vector $\psi=c_{1}e_{1}+c_{2}e_{2}$, $|c_{1}|^{2}+|c_{2}|^{2}=1$, the outcome law is
$$\mu^{A}_{\psi}(\{E_{1}\})=|c_{1}|^{2},\qquad \mu^{A}_{\psi}(\{E_{2}\})=|c_{2}|^{2},\qquad \mu^{A}_{\psi}(B)=\sum_{i:E_{i}\in B}|c_{i}|^{2},$$
and for the mixed preparation $\rho=w\,T_{e_{1},e_{1}}+(1-w)T_{e_{2},e_{2}}$ with $0\le w\le1$ the law is $\mu^{A}_{\rho}(\{E_{1}\})=w$, $\mu^{A}_{\rho}(\{E_{2}\})=1-w$.

(iii) With $p:=|c_{1}|^{2}$ and $q:=|c_{2}|^{2}=1-p$, the mean, second moment and variance of the pure preparation are
$$\langle E\rangle_{\psi}=E_{1}p+E_{2}q,\qquad \langle E^{2}\rangle_{\psi}=E_{1}^{2}p+E_{2}^{2}q,\qquad \operatorname{Var}_{\psi}=pq\,(E_{1}-E_{2})^{2},$$
and for the mixture $pq$ is replaced by $w(1-w)$; all three numbers are finite and exact because $A$ is bounded.

The computation is a model-internal readout: the $E_{i}$ are parameters of the assigned observable, the probabilities are those of the framework's outcome law, and no laboratory measurement, apparatus or empirical value is asserted.

## Facts & Assumptions

**Given:** The Hilbert space $H=\mathbb C^{2}$ with the standard inner product and orthonormal basis $(e_{1},e_{2})$; distinct real energies $E_{1}\ne E_{2}$ in joules; the assigned observable $A=E_{1}T_{e_{1},e_{1}}+E_{2}T_{e_{2},e_{2}}$ with unit $\mathrm J$; a unit vector $\psi=c_{1}e_{1}+c_{2}e_{2}$; a weight $w\in[0,1]$; the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of the cited spectral suppliers.

[F1] **Rank-one calculus and one-dimensional projections.** $T_{u,v}x=\langle x,v\rangle u$ is linear in $x$, with $T_{u,v}^{*}=T_{v,u}$ and $T_{u,u}$ self-adjoint and positive; for unit $u$ the operator $T_{u,u}$ is the orthogonal projection onto $\mathbb Cu$ with $T_{u,u}^{2}=T_{u,u}$, and for orthonormal $u,v$ one has $T_{u,u}T_{v,v}=0$ ([[lem-nrqm-composites-rank-one-operator-calculus]], [[lem-nrqm-state-geometry-ray-to-rank-one-projection]],).

[F2] **Finite-dimensional spectral structure.** The eigenvectors $e_{1},e_{2}$ of the normal operator $A$ form an orthonormal basis of $H$, so $T_{e_{1},e_{1}}+T_{e_{2},e_{2}}=I$ ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F3] **Spectral PVM uniqueness.** A self-adjoint operator has a unique regular PVM on the Borel sets of $\mathbb R$ representing it, and the spectral PVM is that measure ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F4] **Outcome law.** For an assigned observable the law is $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_{A}(B))$, equal to $\|E_{A}(B)\psi\|^{2}$ for a pure preparation, and it is affine under mixtures ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (b) and (c), [[pthm-nrqm-observables-born-outcome-law-properties]] clauses (a) and (b)).

[F5] **Moments.** For a unit vector in $D(A)$ the mean and second moment are $\langle A\psi,\psi\rangle$ and $\|A\psi\|^{2}$, and the variance is the second moment minus the square of the mean (clauses (a)-(c), [[pthm-nrqm-observables-preparation-moments]] clauses (a) and (b)).

[F6] **States of the model.** A pure preparation is the state $T_{\psi,\psi}$ of a unit vector; a convex combination of states with weights is a state, and its trace is the corresponding convex combination of traces ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], clause (a)).

## Verification

**Proof technique:** direct; compute the spectral measure, the outcome probabilities and the moments on the explicit two-dimensional data.

1.1 [The observable and its spectral measure] $A=E_{1}T_{e_{1},e_{1}}+E_{2}T_{e_{2},e_{2}}$ is bounded with $\|A\|\le\max\{|E_{1}|,|E_{2}|\}$ and self-adjoint because each $T_{e_{i},e_{i}}$ is self-adjoint by [F1] and $E_{i}\in\mathbb R$; $Ae_{1}=E_{1}e_{1}$ and $Ae_{2}=E_{2}e_{2}$. Define $E'(B):=\mathbf 1_{E_{1}\in B}T_{e_{1},e_{1}}+\mathbf 1_{E_{2}\in B}T_{e_{2},e_{2}}$; [F1] gives that each value is an orthogonal projection and that $T_{e_{1},e_{1}}T_{e_{2},e_{2}}=T_{e_{2},e_{2}}T_{e_{1},e_{1}}=0$, while [F2] gives $E'(\mathbb R)=I$; multiplicativity and countable additivity hold because the two-point space $\{E_{1},E_{2}\}$ is finite, and the integral of the identity against $E'$ is $E_{1}T_{e_{1},e_{1}}+E_{2}T_{e_{2},e_{2}}=A$. By uniqueness [F3], $E'$ is the spectral PVM of $A$, so $\sigma(A)=\{E_{1},E_{2}\}$ and clause (i) holds. [given, F1, F2, F3, algebra]

2.1 [Outcome probabilities] For the unit vector $\psi=c_{1}e_{1}+c_{2}e_{2}$, the identity $T_{e_{i},e_{i}}\psi=\langle\psi,e_{i}\rangle e_{i}=c_{i}e_{i}$ from [F1] gives $E_{A}(B)\psi=\sum_{i:E_{i}\in B}c_{i}e_{i}$, whose norm squared is $\sum_{i:E_{i}\in B}|c_{i}|^{2}$; by [F4] this is $\mu^{A}_{\psi}(B)$, so in particular $\mu^{A}_{\psi}(\{E_{i}\})=|c_{i}|^{2}$ and the total mass is $|c_{1}|^{2}+|c_{2}|^{2}=1$. For the mixture, [F4] and linearity of the trace give $\mu^{A}_{\rho}(\{E_{1}\})=\operatorname{tr}(\rho T_{e_{1},e_{1}})=w$ because $\operatorname{tr}(T_{e_{1},e_{1}}^{2})=1$ and $\operatorname{tr}(T_{e_{2},e_{2}}T_{e_{1},e_{1}})=0$ by [F1], and similarly $\mu^{A}_{\rho}(\{E_{2}\})=1-w$; this is clause (ii). [given, step 1.1, F1, F2, F4, algebra]

3.1 [Moments of the readout] With $p=|c_{1}|^{2}$, $q=|c_{2}|^{2}$, the vector $\psi$ lies in $D(A)=H$, so [F5] applies: the mean is $\langle A\psi,\psi\rangle=E_{1}p+E_{2}q$, the second moment is $\|A\psi\|^{2}=E_{1}^{2}p+E_{2}^{2}q$, and the variance is their difference, computed as $E_{1}^{2}p+E_{2}^{2}q-(E_{1}p+E_{2}q)^{2}=p(1-p)E_{1}^{2}+q(1-q)E_{2}^{2}-2pqE_{1}E_{2}=pq(E_{1}-E_{2})^{2}$, using $p+q=1$ and $[F6]$. For the mixture $\rho=wT_{e_{1},e_{1}}+(1-w)T_{e_{2},e_{2}}$, which is a state by [F6], the same identities give mean $wE_{1}+(1-w)E_{2}$ and variance $w(1-w)(E_{1}-E_{2})^{2}$, since the law is the two-point law of (ii) and the moments of a finite two-point law are the displayed sums. All quantities are finite because $A$ is bounded. This is clause (iii). [given, step 2.1, F1, F5, F6, algebra] ∎

## Remarks

- The two eigenvalues $E_{1}\ne E_{2}$ are distinct, so the eigenspaces are one-dimensional and the spectral projections are exactly the rank-one projections $T_{e_{i},e_{i}}$; a degenerate energy would replace them by the projection onto the eigenspace and the exact-value probabilities by its trace weight, in agreement with [[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]].
- The example is a finite model computation, not a reported experiment: nothing here identifies $E_{1},E_{2}$ with the levels of a specific physical system, and no counts, uncertainty or apparatus behaviour is asserted.
