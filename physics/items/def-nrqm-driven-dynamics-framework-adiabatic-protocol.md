---
id: def-nrqm-driven-dynamics-framework-adiabatic-protocol
aliases: [ nrqm-driven-dynamics-framework-adiabatic-protocol ]
kind: definition
domain: physics
title: "The declared adiabatic protocol model: slow parameter, followed spectral
  subspace, uniform gap and leakage probability"
status: draft
origin: session
dependency_level: 10
deps:
  [
    def-nrqm-driven-dynamics-framework-driven-model,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness,
    thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution,
    def-hilbert-space,
    def-bounded-linear-operator,
    def-operator-norm,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-projection-valued-measure,
    def-discrete-and-essential-spectrum-of-a-self-adjoint-operator,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The adiabatic-protocol reading of the driven model: a slowly
  varying family of self-adjoint energies on the unit slow-time interval in one
  of two declared regularity branches, interpreted as the energy of the system
  at physical time t = sT for a protocol duration T, the propagator carrying the
  protocol evolution, a followed spectral subspace with a uniform positive gap
  and coherent following, and the leakage probability of an initial preparation
  in that subspace. The definition adopts the protocol as a model assumption and
  fixes terminology; it asserts no theorem about the size of the leakage
  (supplied by the page's theorems), no laboratory ramp, no branch selection, no
  relaxation and no empirical result."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 6.6 printed pages 153-159 (PDF pages 165-171): perturbation of
        isolated eigenvalues and the Riesz projection of a separated spectral
        cluster"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        9.1.2 printed pages 206-208 (PDF pages 214-216): the behaviour of a
        gapped level under a slowly applied perturbation"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the framework data and readings of [[def-nrqm-driven-dynamics-framework-driven-model]] clauses (a), (d) (P1, P2 and P4 and their state, observable and evolution readings; units of [[def-nrqm-framework-quantities-and-units]]); assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]) as the choice hypotheses of the cited spectral and evolution suppliers. The autonomous-dynamics postulate P4 is adopted in the reading of [[post-nrqm-framework-autonomous-dynamics]]; the protocol below is the reading of its clause (iv) for slowly varying families.

**(b) The declared slow family.** As an additional model assumption of the pair, fix a **protocol duration** $T>0$ (seconds), the **slow parameter** $s\in[0,1]$, and a family $s\mapsto H(s)$ of self-adjoint operators on the declared state space $\mathfrak H$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-hilbert-space]]), read as the model's **energy at slow time $s$**, in one of the two declared regularity branches:
- **(f) finite branch.** $\mathfrak H=\mathbb C^{d}$ for some $d\ge1$ and $H\in C^{2}([0,1];\operatorname{Herm}(\mathbb C^{d}))$;
- **(u) common-domain branch.** $D(H(s))=Y$ for a dense subspace $Y\subseteq\mathfrak H$ that is a Hilbert space continuously embedded in $\mathfrak H$, every $H(s)$ is self-adjoint on $\mathfrak H$, and $s\mapsto H(s)$ is of class $C^{1}([0,1];\mathcal B(Y,\mathfrak H))$ ([[def-bounded-linear-operator]], [[def-operator-norm]]).

The family is prescribed model data: no laboratory ramp, field source or feedback is assumed. The **protocol propagator** is the unique unitary family $U_{T}(s,\sigma)$ on $\mathfrak H$ solving the slow-time Schroedinger equation
$$i\hbar\,\partial_{s}U_{T}(s,\sigma)=T\,H(s)U_{T}(s,\sigma),\qquad U_{T}(\sigma,\sigma)=I,\qquad 0\le\sigma\le s\le1,$$
whose existence is cited from the mathematics: in branch (f) the family $s\mapsto TH(s)/\hbar$ is norm-continuous with bounded self-adjoint values and $U_T$ is its Dyson propagator ([[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]), and in branch (u) the family $s\mapsto TH(s)/\hbar$ lies in $C^{1}([0,1];\mathcal B(Y,\mathfrak H))$ and $U_T$ is its strong propagator ([[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]]). The model's evolution in physical time is $\psi(t):=U_{T}(t/T,0)\psi(0)$ for $t\in[0,T]$, and the evolved preparation is $\rho(t):=U_{T}(t/T,0)\rho(0)U_{T}(t/T,0)^{*}$, read as in clause (d) of [[def-nrqm-driven-dynamics-framework-driven-model]].

**(c) Followed spectral subspace and uniform gap.** Fix a **label**: for branch (f) a spectral cluster $\sigma_{P}(s)\subseteq\sigma(H(s))$ ([[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]) with spectral projection $P(s)$ ([[def-projection-valued-measure]]), and for branch (u) a fixed finite-multiplicity eigenvalue $E(s)$ of $H(s)$ with spectral projection $P(s)$. The label is declared **uniformly gapped** when
$$\operatorname{dist}\bigl(\sigma_{P}(s),\,\sigma(H(s))\setminus\sigma_{P}(s)\bigr)\ge g>0\qquad(s\in[0,1])$$
in branch (f), respectively $\operatorname{dist}(E(s),\sigma(H(s))\setminus\{E(s)\})\ge g>0$ in branch (u), and **coherently followed** when $s\mapsto P(s)$ is continuous in operator norm and coincides with the local Riesz continuation of $P(0)$ (in branch (f): the spectral projection of $H(s)$ for the cluster continuously connected to the initial one). A **preparation in the subspace** is a preparation with $\rho(0)$ supported in $\operatorname{ran}P(0)$; for a unit vector $\psi(0)\in\operatorname{ran}P(0)$ the **leakage probability** at slow time $s$ is the model's outcome probability
$$p_{\mathrm{leak}}(s):=\mu^{(I-P(s))}_{\psi(sT)}(\{1\})=\bigl\|(I-P(s))\psi(sT)\bigr\|^{2},\qquad \psi(sT)=U_{T}(s,0)\psi(0),$$
that is, the Born probability in the reading of P2 that the evolved preparation is found outside the followed subspace at slow time $s$ ([[def-nrqm-observables-framework-observable-and-outcome-law]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]; [[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]]).

**(d) Status and scope.** Clauses (b)-(c) adopt the protocol as an idealization and fix its vocabulary. The size of the leakage is not part of the definition: it is the content of the adiabatic theorems of the page, which are conditional on the uniform gap and on coherent following. The definition asserts no claim that a laboratory ramp realizes the family, no selection or relaxation of a branch by the protocol, no thermalization, no measurement record and no empirical result; whether a laboratory preparation realizes a preparation in the declared subspace is a tested identification in the sense of P7.

## Remarks

- **Two branches, two theorems.** The finite and common-domain branches are declared separately because their mathematics differ: the finite branch uses the norm-continuous Dyson propagator and a finite-dimensional contour construction, the common-domain branch uses the strong propagator and graph-norm regularity. The page's two adiabatic theorems prove the leakage bounds for the corresponding branches and add no assumption to this definition.
- **The gap belongs to the family, not to the protocol.** The uniform gap is a property of the prescribed family and its label, independent of $T$; the protocol duration enters only through the slow-time equation. This separation is what makes the $1/T$ estimates of the page meaningful.
