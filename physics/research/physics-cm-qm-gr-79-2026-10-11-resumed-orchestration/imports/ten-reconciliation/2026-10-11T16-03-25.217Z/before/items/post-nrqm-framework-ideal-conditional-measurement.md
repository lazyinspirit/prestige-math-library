---
id: post-nrqm-framework-ideal-conditional-measurement
kind: postulate
title: "Ideal conditional measurement postulate P3: the projective Lueders update and discarded outcomes"
status: draft
origin: session
domain: physics
dependency_level: 3
deps: [def-hilbert-space, def-projection-valued-measure, def-hilbert-orthogonal-projection, def-orthogonal-projection, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-finite-effects-and-instruments, lem-nuclear-series-characterizes-trace-norm, thm-trace-is-absolutely-convergent-and-basis-independent, def-countable-choice]
dependency_roles:
  def-hilbert-space: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-orthogonal-projection: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The ideal conditional-measurement assumption of the framework: a declared repeatable sharp measurement with a finite or countable family of mutually orthogonal projections resolves the identity, outcomes occur with the Born probabilities, a selected outcome updates the preparation by the Lueders rule and discarding outcomes gives the trace-norm convergent sum. Adoption is a model assumption for declared ideal apparatus; it is not asserted for every laboratory detector, makes no claim about outcome uniqueness, and excludes exact continuum eigenvalues and nonprojective absorption processes, which require their own models."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4, printed pages 15-18 (PDF pages 23-26): ideal measurement, repeatability and the amplitudes after a measurement"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.3, printed pages 76-80 (PDF pages 79-83): projection operators, degeneracy and the measurement postulate"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 3.3, printed pages 92-95 (PDF pages 104-107): probabilities from projection-valued measures and the spectral interpretation"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework the following conditional-update rule for declared ideal measurements. Assume the Axiom of Countable Choice ([[def-countable-choice]]).

**(i) Declared measurement.** A **declared ideal sharp measurement** of a system with state space $H$ consists of a finite or countably infinite family $(P_{a})_{a\in A}$ of bounded orthogonal projections on $H$ ([[def-hilbert-orthogonal-projection]], [[def-orthogonal-projection]]) which are mutually orthogonal, $P_{a}P_{b}=0$ for $a\ne b$, and whose strong sum is the identity: the finite or norm-convergent countable sum $\sum_{a}P_{a}x=x$ for every $x\in H$ ([[def-projection-valued-measure]] clause 4). The family is part of the apparatus description; the model does not claim that every laboratory device is a declared measurement of this form.

**(ii) Outcome probabilities.** For a preparation $\rho$ the **probability of the outcome $a$** is $p_{a}:=\operatorname{tr}(\rho P_{a})\ge0$, with $\sum_{a}p_{a}=1$; equivalently $p_{a}=\|P_{a}\psi\|^{2}$ for a pure preparation $[\psi]$, as in the probability postulate P2. This is the Born law of the declared measurement.

**(iii) Conditional update.** If the outcome $a$ has been recorded and $p_{a}>0$, the preparation posterior to the measurement is
$$\rho_{a}:=\frac{P_{a}\,\rho\,P_{a}}{p_{a}},$$
the **Lueders update**. It is a density operator ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), [[lem-nrqm-composites-rank-one-operator-calculus]]): $P_{a}\rho P_{a}$ is positive, trace class with trace $p_{a}$ by the rank-one series expansion of $\rho$ and the trace formulas, and $\rho_{a}$ is self-adjoint, positive, trace class with trace $1$. The update preserves coherence inside the range of a degenerate $P_{a}$: a superposition of orthogonal vectors within that range is updated to the same relative superposition, and repetition of the same declared measurement on $\rho_{a}$ returns $a$ with probability $1$ (repeatability of the declared projective measurement).

**(iv) Discarded outcomes.** If the outcomes are recorded but not selected, the posterior ensemble is
$$\rho'=\sum_{a}P_{a}\,\rho\,P_{a},$$
which converges in trace norm and is a density operator: for an eigen-expansion $\rho=\sum_{n}w_{n}T_{u_{n},u_{n}}$ as in the rank-one calculus, the series $\sum_{a}P_{a}\rho P_{a}=\sum_{a}\sum_{n}w_{n}T_{P_{a}u_{n},P_{a}u_{n}}$ is nuclear with trace $\sum_{a}\sum_{n}w_{n}\|P_{a}u_{n}\|^{2}=\sum_{n}w_{n}=1$ by the nuclear-series characterization of the trace norm and the absolute convergence of the trace ([[lem-nuclear-series-characterizes-trace-norm]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]); its normalized form $\rho'$ has the operator dependence recorded by clause (iii) for each branch.

**(v) Limits of the rule.** The rule is an assumption of the model for the declared ideal measurement; it is not derived from the Born law of P2, and it is not asserted for every apparatus. In particular: a measurement of an exact eigenvalue of an operator with continuous spectrum is not represented by normalizing a delta distribution; a photon-absorption detector need not leave an outgoing one-photon preparation of the same form; and a unitary system-apparatus model that produces conditional correlations does not by itself select a unique recorded outcome or resolve which branch occurred. Apparatuses outside the declared class require their own models with their own stated assumptions, including instruments of the general form stated in [[lem-nrqm-composites-finite-effects-and-instruments]], whose updates are not determined by their outcome effects.

**(vi) Status.** Clauses (i)-(v) are adopted assumptions. They record how the model updates preparations in the declared ideal case and what it deliberately does not claim about arbitrary apparatuses and about the uniqueness of recorded outcomes.

## Status and scope

- **No preferred-basis claim.** The declared family $(P_{a})$ belongs to the apparatus model; the postulate gives no rule that selects a preferred family from a system alone.
- **Degeneracy.** Clause (iii) is the density-operator form of the Lueders rule with the projections $P_{a}$ themselves, not with one-dimensional sub-projections chosen inside a degenerate eigenspace; the difference is measurable and is treated with the update rule where degenerate measurements occur.
- **Discarding versus conditioning.** Clause (iv) describes the discarded-outcome ensemble; it is a different object from the selected-branch state of clause (iii), and it destroys the coherence between different branches.
