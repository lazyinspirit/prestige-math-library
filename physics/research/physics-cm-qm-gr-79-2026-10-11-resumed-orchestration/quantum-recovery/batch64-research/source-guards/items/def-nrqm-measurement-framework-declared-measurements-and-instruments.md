---
id: def-nrqm-measurement-framework-declared-measurements-and-instruments
aliases: [nrqm-measurement-framework-declared-measurements-and-instruments]
kind: definition
domain: physics
title: "Declared ideal measurements and instruments of the framework"
status: draft
origin: pipeline
dependency_level: 8
deps: [def-countable-choice, def-hilbert-orthogonal-projection, def-hilbert-space, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-composites-countable-kraus-normalization, lem-nrqm-composites-finite-effects-and-instruments, lem-nrqm-composites-general-trace-class-instrument-and-effect-duality, lem-nrqm-measurement-nonselective-luders-map, lem-nrqm-measurement-selective-luders-update, post-nrqm-framework-ideal-conditional-measurement, post-nrqm-framework-observable-and-probability, post-nrqm-framework-preparation-and-apparatus, post-nrqm-framework-state-and-composition]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-composites-countable-kraus-normalization: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
  lem-nrqm-composites-general-trace-class-instrument-and-effect-duality: mathematical-premise
  lem-nrqm-measurement-nonselective-luders-map: mathematical-premise
  lem-nrqm-measurement-selective-luders-update: mathematical-premise
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The measurement vocabulary of the non-relativistic quantum framework for declared ideal apparatus: declared ideal sharp measurements as finite or countable families of mutually orthogonal projections resolving the identity, their Lueders instrument with outcome law, conditional update and discarded-outcome map, declared ideal filters, and declared finite or countable instruments whose Kraus family or abstract instrument supplies both the outcome effects and the state update. The definition reads the adopted postulates P1, P2 and P3; it asserts no apparatus realization, no uniqueness of recorded outcomes, no collapse of exact continuum values, and no empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4, printed page 15 (ideal reproducible measurements and the change of state) and Section 7.4.2, printed pages 161-164 (Stern-Gerlach filters in series)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 3 'Foundations II: Measurement and Evolution' (updated July 2015), Sections 3.1.2 and 3.2.1, printed pages 8-14 (generalized measurements, POVMs, Kraus operators and the operator-sum map)"
      url: "https://preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: n/a
---

## Definition

Adopt the state postulate [[post-nrqm-framework-state-and-composition]] (P1), the observable and probability postulate [[post-nrqm-framework-observable-and-probability]] (P2) and the ideal conditional-measurement postulate [[post-nrqm-framework-ideal-conditional-measurement]] (P3) for the declared system, whose state space is $D(H)$ for the assigned nonzero separable complex Hilbert space $H$ ([[def-nrqm-state-geometry-framework-state-space]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]). Assume the Axiom of Countable Choice ([[def-countable-choice]]), the hypothesis of the cited mathematics. The following vocabulary is used by this page.

**(a) Declared ideal sharp measurement.** A **declared ideal sharp measurement** of the system is a finite or countably infinite family $(P_{a})_{a\in A}$ of bounded orthogonal projections on $H$ ([[def-hilbert-orthogonal-projection]]) that are **mutually orthogonal**, $P_{a}P_{b}=0$ for $a\ne b$, and whose **strong sum** is the identity,
$$\sum_{a\in A}P_{a}x=x\qquad(x\in H).$$
The index $a$ is the **outcome label** and the family $(P_{a})_{a\in A}$ is the **outcome structure** of the declared measurement; it is part of the declared apparatus model, not a quantity computed from the state. This is clause (i) of P3.

**(b) The Lueders instrument of a declared ideal sharp measurement.** For a preparation $\rho$ the **outcome probabilities** are
$$p_{a}:=\operatorname{tr}(\rho P_{a})\ge0,\qquad \sum_{a}p_{a}=1,$$
and for a pure preparation of the unit ray $[\psi]$ they are $p_{a}=\|P_{a}\psi\|^{2}$ (clause (ii) of P3, read with the outcome law of [[def-nrqm-observables-framework-observable-and-outcome-law]]). If $p_{a}>0$ the **conditional state** after the outcome $a$ is the selective Lueders update
$$\rho_{a}:=\frac{P_{a}\rho P_{a}}{p_{a}};$$
it is a state with $\operatorname{tr}(\rho_{a}P_{a})=1$ and $P_{a}\rho_{a}P_{a}=\rho_{a}$ ([[lem-nrqm-measurement-selective-luders-update]], clause (iii) of P3). If the outcomes are recorded but not selected, the **discarded-outcome state** is
$$\Phi(\rho):=\sum_{a\in A}P_{a}\rho P_{a},$$
the trace-norm convergent series of [[lem-nrqm-measurement-nonselective-luders-map]]; it is a state with $\Phi(\rho)=\sum_{a:p_{a}>0}p_{a}\rho_{a}$ and $\operatorname{tr}(\Phi(\rho)P_{a})=p_{a}$ (clause (iv) of P3).

**(c) Declared ideal filter.** A **declared ideal filter** is a declared ideal sharp measurement with exactly two outcomes $a=1,2$: the filter **passes** the component in the range of $P_{1}$ and **blocks** the component in the range of $P_{2}=I-P_{1}$. Repeated use of the filter in series means the sequential application of the conditional updates of clause (b).

**(d) Declared instrument.** A **declared finite or countable instrument** for an outcome set $A$ consists of a finite or countable family $(M_{a,r})_{\substack{a\in A\\r\in R_{a}}}$ of bounded operators on $H$ with
$$\sum_{a\in A}\sum_{r\in R_{a}}M_{a,r}^{*}M_{a,r}=I$$
in the strong sense ([[lem-nrqm-composites-countable-kraus-normalization]]), the **effects**
$$F_{a}:=\sum_{r\in R_{a}}M_{a,r}^{*}M_{a,r},$$
the outcome probabilities $p_{a}:=\operatorname{tr}(\rho F_{a})$ of clause (iv) of P2, the **conditional updates**
$$\rho\longmapsto\frac{1}{p_{a}}\sum_{r\in R_{a}}M_{a,r}\rho M_{a,r}^{*}\qquad(p_{a}>0),$$
and the **discarded-outcome map** $\rho\mapsto\sum_{a,r}M_{a,r}\rho M_{a,r}^{*}$. The family $(M_{a,r})$, called the **Kraus family** of the instrument, is part of the declared apparatus model. The effects $(F_{a})$ alone do not determine the conditional updates: distinct normalized Kraus families can share the same effects while defining different updates ([[lem-nrqm-composites-finite-effects-and-instruments]] clause (d); clause (v) of P3). More generally one may declare an abstract instrument $J:\Sigma\to\mathcal B(\mathcal S_{1}(H))$ in the sense of [[lem-nrqm-composites-general-trace-class-instrument-and-effect-duality]], of which the Kraus case is a concrete instance.

**(e) Declaration discipline.** A model of an apparatus that is used to predict post-measurement states must declare both an outcome structure (effects) and an update rule; the outcome law of P2 alone does not supply the update, and the update is not a mathematical consequence of the effects. The special case in which the Kraus family consists of the projections $P_{a}$ themselves (with a single $r$ per outcome) is the Lueders instrument of clauses (a)-(b). The claim that a concrete laboratory device realizes a particular declared measurement, filter or instrument is a physical identification with uncertainty under the preparation and apparatus postulate P7 ([[post-nrqm-framework-preparation-and-apparatus]]), not a consequence of this definition.

**(f) Limits.** Declared ideal sharp measurements are idealizations of apparatus that are idealized as repeatable and projection-valued; the framework does not assert that every apparatus, or any particular apparatus, is of this form (clause (v) of P3). The following are outside the declared class and require their own models: a measurement of an exact value of a quantity whose spectrum is continuous (no normalization of a delta symbol is intended; clauses (iii) of P2 and (v) of P3); a photon-absorption or other destructive detector, whose declared instrument need not leave an outgoing state of the same form (clause (v) of P3); and a unitary system-apparatus interaction, which by itself produces conditional correlations without selecting a unique recorded outcome or a preferred outcome family (clause (v) of P3).

**(g) Status.** Clauses (a)-(f) read P1, P2 and P3 in the measurement vocabulary of this page and fix the terminology of the page's later items; they add no assumption to those postulates. The cited mathematical items ([[lem-nrqm-measurement-selective-luders-update]], [[lem-nrqm-measurement-nonselective-luders-map]], [[lem-nrqm-composites-finite-effects-and-instruments]], [[lem-nrqm-composites-countable-kraus-normalization]], [[lem-nrqm-composites-general-trace-class-instrument-and-effect-duality]]) are conditional mathematics about the displayed formulas; no physical process, outcome uniqueness or empirical fact is deduced here.
