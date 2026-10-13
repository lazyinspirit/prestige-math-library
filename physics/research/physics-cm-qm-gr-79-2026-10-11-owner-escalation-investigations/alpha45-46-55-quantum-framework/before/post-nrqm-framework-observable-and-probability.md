---
id: post-nrqm-framework-observable-and-probability
kind: postulate
title: "Observable and probability postulate P2: self-adjoint observables,
  spectral probability and finite unsharp outcomes"
status: draft
origin: session
domain: physics
dependency_level: 6
deps:
  [
    def-axiom-of-choice,
    def-hilbert-space,
    def-adjoint-of-a-densely-defined-unbounded-operator,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators,
    def-projection-valued-measure,
    def-borel-sigma-algebra,
    def-probability-measure,
    lem-scalar-and-complex-measures-from-a-pvm,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-composites-rank-one-operator-calculus,
    thm-trace-is-absolutely-convergent-and-basis-independent,
    thm-trace-class-is-a-two-sided-banach-operator-ideal,
    def-non-negative-and-positive-operator,
    def-countable-choice,
    post-nrqm-framework-state-and-composition,
    def-nrqm-framework-quantities-and-units
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-probability-measure: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  def-non-negative-and-positive-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The observable and probability assumptions of the framework:
  sharp real-valued quantities are self-adjoint operators with a declared unit,
  their spectral projection-valued measures assign outcome probabilities to
  preparations, and finite families of bounded effects describe unsharp finite
  outcomes. Adoption is a model assumption, not a derived result; the item
  excludes any claim that every laboratory dial is such an observable, makes no
  statement about joint measurements or moments, and is silent on which
  quantities of a given system are sharp."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1, printed pages 55-58 (PDF pages 67-70): observables as
        self-adjoint operators, expectation values and the spectrum"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections
        3.2-3.3, printed pages 67-80 (PDF pages 70-83): Hermitian operators,
        eigenfunctions of operators with continuous spectrum, and the
        measurement postulate with its limitations"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4,
        printed pages 15-18 (PDF pages 23-26): ideal measurement and the
        amplitudes for possible outcomes"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

**Positive operators and effects on the assigned Hilbert space.** For a bounded operator $F:H\to H$, write $F\ge0$ when $F=F^*$ and $\langle Fx,x\rangle\ge0$ for every $x\in H$. Write $0\le F\le I$ when $F$ and $I-F$ are positive; equivalently $0\le\langle Fx,x\rangle\le\|x\|^2$ for every $x\in H$. Thus an **effect** on $H$ is a bounded operator satisfying these conditions. These definitions apply whether or not $H$ is finite-dimensional; in finite dimensions they agree with [[def-non-negative-and-positive-operator]].

**Mathematical normalization of finite effects (conditional on P1).** Let $H$ be any nonzero Hilbert space, let $\rho$ be a density operator on $H$, and let $(F_a)_{a=1}^p$ be effects with $\sum_aF_a=I$. By [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), write $\rho=\sum_nw_nT_{u_n,u_n}$ in trace norm with $w_n\ge0$, $\sum_nw_n=1$, and $(u_n)$ orthonormal. The rank-one trace formula gives $\operatorname{tr}(T_{u_n,u_n}F_a)=\langle F_au_n,u_n\rangle$ ([[lem-nrqm-composites-rank-one-operator-calculus]]), and the trace-class ideal bound makes $T\mapsto\operatorname{tr}(TF_a)$ continuous in trace norm ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]). Hence $\operatorname{tr}(\rho F_a)=\sum_nw_n\langle F_au_n,u_n\rangle\ge0$; summing over the finite index $a$ gives $\sum_a\operatorname{tr}(\rho F_a)=\sum_nw_n\langle Iu_n,u_n\rangle=1$. This is a mathematical normalization calculation for the probabilities in clause (iv), not an additional physical measurement assumption.

## Postulate

Adopt as physical assumptions of the framework the following statements about sharp and unsharp real-valued quantities. Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). The latter is the explicit hypothesis used to obtain the spectral PVM of a general self-adjoint operator from [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]] in clause (ii); consumers invoking this construction inherit it.

**(i) Sharp observables.** An **ideal sharp real-valued quantity** (observable) of a system with state space $H$ is a densely defined self-adjoint operator $A:D(A)\subset H\to H$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]), meaning $D(A)=D(A^*)$ and $A\psi=A^*\psi$ on this common domain, together with a declared unit in which its real spectral coordinate is read; the unit is part of the assignment, and no numerical value of the coordinate is asserted by the assignment. Symmetry of $A$ on a small domain is not sufficient for self-adjointness, and the domain is a declared part of the observable.

**(ii) Spectral probability.** Let $E_{A}$ be the spectral projection-valued measure of the self-adjoint operator $A$ on the Borel $\sigma$-algebra of $\mathbb R$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]], [[def-borel-sigma-algebra]]). For a preparation $\rho$ and a Borel set $B\subseteq\mathbb R$ the **probability of the outcome in $B$** is
$$\mu^{A}_{\rho}(B):=\operatorname{tr}\bigl(\rho\,E_{A}(B)\bigr),\qquad\text{and for a pure preparation }[\psi]\text{ it is }\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}.$$
By clause (b) of [[lem-nrqm-composites-density-and-scalar-spectral-probability]] the assignment $B\mapsto\mu^{A}_{\rho}(B)$ is a probability measure on the Borel sets ([[def-probability-measure]], [[lem-scalar-and-complex-measures-from-a-pvm]]). It is the general form of the Born rule adopted here.

**(iii) Nature of the outcome law.** The probability law is a measure, not necessarily a density with respect to Lebesgue measure and not necessarily a finite or countable sum of point masses: a self-adjoint operator with continuous spectrum ordinarily has no normalizable eigenvector at a point of its continuous spectrum, so an "exact value" of a continuum quantity is not represented by a normalized state. An ideal point value is an idealization; a real detector reports a finite-resolution outcome, that is, the probability of a declared Borel set $B$ such as a bin, and the recorded-event probability is that of (ii) for the bin, not the value of a density at a point.

**(iv) Unsharp finite outcomes.** Outcomes of a finite-resolution apparatus with finitely many channels are described, when the idealization uses bounded effects, by a finite family $(F_{a})_{a=1}^{p}$ of effects on $H$ as defined above, with $\sum_aF_a=I$. The **outcome probabilities** are $p_{a}=\operatorname{tr}(\rho F_{a})$. They are normalized for every state space assigned by P1, as shown by the preceding general-$H$ calculation. This unsharp extension is an operational description tied to an apparatus model; it is not obtained from the sharp observable by mathematical manipulation alone, and the effects alone do not determine what happens to the state after the outcome (P3).

**(v) Moments are a separate matter.** Statements about the mean, variance or higher moments of the outcome law require the corresponding integrability of $t\mapsto t^{n}$ against $\mu^{A}_{\rho}$ and are not part of this postulate; where they are used they are stated with their hypotheses. In particular the existence of $\operatorname{tr}(\rho A)$ for an unbounded $A$ is not asserted.

**(vi) Status.** Clauses (i)-(v) are adopted assumptions of the model. They assert nothing about which quantities of a concrete apparatus are sharp, about the physical mechanism producing an outcome or about the completeness of the description; a laboratory record is a classical event whose relation to the model is a tested identification with uncertainty, in the sense of P7.

## Status and scope

- **Adopted, not derived.** The representation of sharp quantities by self-adjoint operators and the Born rule of clause (ii) are assumptions. They are motivated by the successes of the framework but are not deduced from experiment.
- **No detector theorem.** Clause (iii) explicitly distinguishes an ideal point outcome from a finite-resolution record: the model's binomial or binned probabilities are the operational objects, and a vanishing ideal density at a point does not make a finite bin of positive length impossible.
- **Sharpness and units.** A declared observable carries a unit; sums and comparisons of outcome coordinates are meaningful only for observables with the same unit. Quantities of the model whose operator status is not declared are numbers or parameters, not observables.
