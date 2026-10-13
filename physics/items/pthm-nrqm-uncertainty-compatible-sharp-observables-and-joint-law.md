---
id: pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law
aliases: [ nrqm-uncertainty-compatible-sharp-observables-and-joint-law ]
kind: physics-theorem
domain: physics
title: "Compatible sharp observables, their joint law and the ideal joint instrument"
status: draft
origin: pipeline
dependency_level: 10
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-nrqm-uncertainty-strong-spectral-commutation,
    def-projection-valued-measure,
    lem-nrqm-composites-compatible-luders-repeatability,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators,
    post-nrqm-framework-ideal-conditional-measurement,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-observables-born-outcome-law-properties,
    thm-bounded-borel-pvm-integral,
    thm-nrqm-uncertainty-joint-pvm-criterion,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-uncertainty-strong-spectral-commutation: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-nrqm-composites-compatible-luders-repeatability: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators: mathematical-premise
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-observables-born-outcome-law-properties: physical-result
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-nrqm-uncertainty-joint-pvm-criterion: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The reading of strong spectral commutation as compatibility of
  assigned sharp observables: the equivalence with the existence and uniqueness
  of a joint sharp observable, the joint outcome law with its two marginal laws
  in every preparation, and the conditional finite-bin updates of the stipulated
  ideal Lueders instruments for positive-probability joint outcomes. The
  statement is a conditional consequence of P1, P2, P3 and the cited
  mathematics; the update and repeatability claims are consequences inside the
  ideal instrument model, not universal or apparatus-level disturbance claims.
  No concrete laboratory realization or empirical result is asserted, and the
  joint law is a mathematical object of the framework, not a measured
  distribution."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5
        'Uncertainty Principle and Compatible Observables', Sections 7-8,
        printed pages 16-19: simultaneous diagonalization of commuting Hermitian
        operators and complete sets of commuting observables"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741\
        c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.4,
        printed pages 81-84 (PDF pages 84-87): commuting observables,
        simultaneous eigenfunctions, simultaneous values and the non-degeneracy
        caveat in the textbook argument"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Chapter 3, printed pages 87-100 (PDF pages 99-112): spectral
        projections, the multiplication form of the spectral theorem and the
        calculus of commuting projections"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2 in the reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]], and the ideal
conditional measurement postulate P3 in the reading of
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-ideal-conditional-measurement]]), and assume the Axiom
of Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Let $(A,u_{A})$ and $(B,u_{B})$ be assigned sharp
observables with spectral projection-valued measures $E_{A},E_{B}$
([[def-projection-valued-measure]],
[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]). Call a regular
projection-valued measure $H$ on the Borel sigma-algebra of $\mathbb R^{2}$ a
**joint sharp observable** of the pair when its marginals are the two spectral
measures,
$$H(\Lambda\times\mathbb R)=E_{A}(\Lambda),\qquad H(\mathbb R\times\Sigma)=E_{B}(\Sigma)\qquad(\Lambda,\Sigma\ \text{Borel}),$$
and call the pair **compatible** when such an $H$ exists. Then:

(a) **Criterion.** The pair is compatible if and only if $A$ and $B$ strongly
commute in the sense of
[[def-nrqm-uncertainty-strong-spectral-commutation]] clause (b), if and only if
$f(A)g(B)=g(B)f(A)$ for all bounded Borel $f,g$; the joint sharp observable
$H$ is then unique, and for bounded Borel $f,g$
$$f(A)g(B)=\int_{\mathbb R^{2}}f(a)g(b)\,dH(a,b) .$$

(b) **Joint outcome law.** If the pair is compatible, then for every
preparation $\rho$ the assignment
$$\mu^{H}_{\rho}(S):=\operatorname{tr}\bigl(\rho\,H(S)\bigr)\qquad(S\subseteq\mathbb R^{2}\ \text{Borel})$$
is a probability measure on the Borel sets of $\mathbb R^{2}$, the **joint
outcome law** of the pair in $\rho$, and its marginals are the individual
laws:
$$\mu^{H}_{\rho}(\Lambda\times\mathbb R)=\mu^{A}_{\rho}(\Lambda),\qquad \mu^{H}_{\rho}(\mathbb R\times\Sigma)=\mu^{B}_{\rho}(\Sigma) .$$
For the pure preparation of a unit vector $\psi$ it reads
$\mu^{H}_{\psi}(S)=\|H(S)\psi\|^{2}$.

(c) **Ideal finite-resolution joint instrument.** If the pair is compatible
and $(P_{1},\dots,P_{n})$, $(Q_{1},\dots,Q_{m})$ are the projections of two
finite disjoint Borel partitions of $\mathbb R$,
$P_{i}:=E_{A}(\Lambda_{i})$, $Q_{j}:=E_{B}(\Sigma_{j})$ with
$\bigcup_{i}\Lambda_{i}=\bigcup_{j}\Sigma_{j}=\mathbb R$, then
$R_{ij}:=H(\Lambda_{i}\times\Sigma_{j})=P_{i}Q_{j}$ are mutually orthogonal
projections with strong sum $I$, and in the framework's declared ideal sharp
measurement of the family $(R_{ij})$ the outcome probabilities are
$\operatorname{tr}(\rho R_{ij})$ with marginals $\operatorname{tr}(\rho P_{i})$
and $\operatorname{tr}(\rho Q_{j})$. For each joint outcome $(i,j)$ with
$p_{ij}:=\operatorname{tr}(\rho R_{ij})>0$, the sequential declared ideal
measurements of $(P_{i})$ and then $(Q_{j})$, or in the reverse order, give the
same conditional state
$$\rho_{ij}=\frac{R_{ij}\rho R_{ij}}{p_{ij}}=\frac{Q_{j}P_{i}\rho P_{i}Q_{j}}{p_{ij}}=\frac{P_{i}Q_{j}\rho Q_{j}P_{i}}{p_{ij}}.$$
In that state an immediate repetition of the joint measurement or either
corresponding marginal-bin measurement returns the same outcome with
probability one. If $p_{ij}=0$, no conditional state or repeatability claim is
made for that outcome.

(d) **Scope.** Clauses (a)-(c) are conditional consequences of P1, P2, P3 and
the cited mathematics. A joint sharp observable, when it exists, is a
mathematical object of the framework: it supplies a joint outcome law, not an
apparatus. Clause (c)'s updates and repeatability are conditional ideal-model
claims under P3; no universal disturbance relation or apparatus-level
disturbance claim is asserted. The claim that a concrete laboratory device
realizes the joint measurement, with its resolution, losses and systematics, is
a physical identification with uncertainty under the preparation and
apparatus postulate P7. No dynamics or empirical result is asserted.

## Facts & Assumptions

**Given:** The postulates P1, P2, P3 in the stated readings; the Axiom of Countable Choice and the Axiom of Choice; assigned sharp observables $(A,u_{A})$, $(B,u_{B})$ with spectral projection-valued measures $E_{A},E_{B}$; Borel sets $\Lambda,\Sigma$; finite disjoint Borel partitions $(\Lambda_{i})$, $(\Sigma_{j})$ of $\mathbb R$; a preparation $\rho$; a unit vector $\psi$.

[F1] **Scalar PVM probability and outcome laws.** For a density operator $\rho$ and any projection-valued measure $E$ on a measurable space $(X,\Sigma)$, the assignment $B\mapsto\operatorname{tr}(\rho E(B))$ is a probability measure on $(X,\Sigma)$ and equals $\|E(B)\psi\|^{2}$ for the pure preparation of a unit vector ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clauses (a) and (b)). For an assigned sharp observable this is its outcome law $\mu^{A}_{\rho}$ on $\mathcal B(\mathbb R)$, affine in the preparation ([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b), [[pthm-nrqm-observables-born-outcome-law-properties]] clause (a)).

[F2] **Joint projection-valued measure criterion.** For self-adjoint $A,B$ the following are equivalent: strong spectral commutation of $E_{A}$ and $E_{B}$; existence of a unique regular projection-valued measure $H$ on $\mathcal B(\mathbb R^{2})$ with $H(\Lambda\times\Sigma)=E_{A}(\Lambda)E_{B}(\Sigma)$ and marginals $H(\Lambda\times\mathbb R)=E_{A}(\Lambda)$, $H(\mathbb R\times\Sigma)=E_{B}(\Sigma)$; and $f(A)g(B)=g(B)f(A)$ for all bounded Borel $f,g$. In that case $f(A)g(B)=g(B)f(A)=\int f(a)g(b)\,dH(a,b)$ for all bounded Borel $f,g$ ([[thm-nrqm-uncertainty-joint-pvm-criterion]]).

[F3] **Values of a projection-valued measure.** For a projection-valued measure $H$ the values $H(S)$ are orthogonal projections with $H(S\cap T)=H(S)H(T)$ and $H(\varnothing)=0$, $H(\mathbb R^{2})=I$, and $H$ is strongly finitely additive; in particular orthogonal projections with $\sum_{ij}R_{ij}=I$ in the strong sense form a declared ideal sharp measurement family of the framework ([[def-projection-valued-measure]], [[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clauses (a) and (b)).

[F4] **Compatible Lueders instruments.** Let $E,F$ be regular commuting projection-valued measures with joint projection-valued measure $G$, let $(B_{i})$, $(C_{j})$ be finite disjoint Borel partitions of $\mathbb R$, and put $P_{i}:=E(B_{i})$, $Q_{j}:=F(C_{j})$, $R_{ij}:=P_{i}Q_{j}=G(B_{i}\times C_{j})$. Then the $R_{ij}$ are mutually orthogonal projections, the sequential declared ideal measurements of $(P_{i})$ and $(Q_{j})$ give the joint law $\operatorname{tr}(\rho R_{ij})$ in either order with order-independent conditional states $\rho\mapsto R_{ij}\rho R_{ij}/\operatorname{tr}(\rho R_{ij})$ when $\operatorname{tr}(\rho R_{ij})>0$, and the marginal sums reproduce the individual bin laws; the update is repeatable on the corresponding outcomes ([[lem-nrqm-composites-compatible-luders-repeatability]] clauses (a)-(e)).

[F5] **Bounded calculus comparison.** If $E_{A}$ and $E_{B}$ strongly commute, then $f(A)g(B)=g(B)f(A)$ for bounded Borel $f,g$ ([[lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators]] clause (a), [[thm-bounded-borel-pvm-integral]]).

## Proof

**Proof technique:** read the mathematical joint projection-valued measure criterion as the definition of compatibility, obtain the joint law from the scalar spectral measure of $H$, and instantiate the mathematical compatible Lueders instrument at the two spectral projection-valued measures.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Criterion] If $H$ is a joint sharp observable as defined in the Statement, then [F3] applied to $\Lambda\times\mathbb R$ and $\mathbb R\times\Sigma$ gives $H(\Lambda\times\Sigma)=E_A(\Lambda)E_B(\Sigma)=E_B(\Sigma)E_A(\Lambda)$. Thus its marginal conditions imply the rectangle condition in [F2]; conversely a PVM from [F2] has the required marginals. The criterion [F2] therefore proves the three equivalent conditions of (a), uniqueness of $H$ and its bounded Borel integral representation, consistently with [F5]. [given, F2, F3, F5]

2.1 [Joint law] Assume the pair is compatible and let $H$ be its joint sharp observable. For every preparation $\rho$, the general-measurable-space scalar PVM probability result in [F1], with $(X,\Sigma)=(\mathbb R^{2},\mathcal B(\mathbb R^{2}))$ and $E=H$, shows that $\mu^{H}_{\rho}(S)=\operatorname{tr}(\rho H(S))$ is a probability measure with the pure reading $\|H(S)\psi\|^{2}$. Its marginals are $\mu^{H}_{\rho}(\Lambda\times\mathbb R)=\operatorname{tr}(\rho H(\Lambda\times\mathbb R))=\operatorname{tr}(\rho E_{A}(\Lambda))=\mu^{A}_{\rho}(\Lambda)$ and likewise for $B$, using the marginal property of $H$ from the Statement. This is (b). [step 1.1, F1]

2.2 [Ideal joint instrument] Assume compatibility and let $(P_{i})$, $(Q_{j})$ be as in (c). By [F3], $R_{ij}=H(\Lambda_{i}\times\Sigma_{j})$ are orthogonal projections with $R_{ij}=P_{i}Q_{j}=Q_{j}P_{i}$ and $\sum_{i,j}R_{ij}=H(\mathbb R^{2})=I$ in the strong sense; thus $(R_{ij})$ is a finite declared ideal sharp measurement family with outcome probabilities $\operatorname{tr}(\rho R_{ij})$. Applying [F4] with $E=E_{A}$, $F=E_{B}$ and the families $(\Lambda_{i})$, $(\Sigma_{j})$ gives the sequential agreement and marginal sums. For every $(i,j)$ with $\operatorname{tr}(\rho R_{ij})>0$, [F4] supplies the equal conditional states and repeatability claims; when this probability is zero, no conditional state is defined and the Statement makes no such claim. This proves (c). [step 1.1, F3, F4]

3.1 [Scope] Steps 1.1-2.2 use only P1-P3 and the cited mathematics. The state updates and repeatability in step 2.2 are conditional consequences inside the stipulated ideal instrument; they do not state a universal or concrete-apparatus disturbance result. No apparatus identification, dynamics or empirical data entered, so (d) holds. [step 1.1, step 2.1, step 2.2] ∎
