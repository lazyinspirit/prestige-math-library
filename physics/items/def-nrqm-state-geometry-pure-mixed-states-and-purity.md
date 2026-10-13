---
id: def-nrqm-state-geometry-pure-mixed-states-and-purity
kind: definition
domain: mathematics
title: "The state space: density operators, pure and mixed states, and purity"
status: published
origin: pipeline
dependency_level: 3
deps: [def-nrqm-state-geometry-state-vectors-and-rays, lem-nrqm-state-geometry-ray-to-rank-one-projection, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-rank-one-operator-calculus, def-trace-class-operator, def-trace-of-a-trace-class-operator, def-self-adjoint-positive-unitary-and-normal-operator, def-hilbert-space-adjoint, thm-trace-class-is-a-two-sided-banach-operator-ideal, def-countable-choice]
dependency_roles:
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Sections 2.3 and 2.5.1, printed pages 16-17 and 26-27: a density operator is self-adjoint, nonnegative and of trace one; the general state is a convex combination of pure states"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3, printed pages 121-126: the density operator of an impure state, with the pure state |psi><psi| as the special case of complete information"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Topics in Real and Functional Analysis (17 November 2017), Section 3.6, printed pages 95-100: trace-class operators, positivity and the trace norm"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Definition

**Density operators.** Let $H\ne\{0\}$ be a complex Hilbert space. A **density operator** on $H$ is a self-adjoint positive trace-class operator $\rho$ with $\operatorname{tr}\rho=1$, in the sense of [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a) ([[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]]). The **state space** of $H$ is the set of all density operators on $H$ and is denoted
$$D(H):=\{\rho:\rho\ \text{is a density operator on}\ H\}.$$
An element of $D(H)$ is called a **state** of $H$ in the mathematical sense fixed here.

**Pure states.** A state $\rho\in D(H)$ is **pure** when there is a unit vector $u\in S(H)$ with
$$\rho=T_{u,u},\qquad T_{u,u}x=\langle x,u\rangle u\quad(x\in H),$$
where $T_{u,u}$ is the rank-one operator of [[lem-nrqm-composites-rank-one-operator-calculus]] and $S(H)$ is the unit sphere of [[def-nrqm-state-geometry-state-vectors-and-rays]]. By [[lem-nrqm-state-geometry-ray-to-rank-one-projection]] the pure states are exactly the Hilbert orthogonal projections of $H$ with one-dimensional range, and the map
$$j:R(H)\longrightarrow D(H),\qquad j([\psi]):=T_{\nu(\psi),\nu(\psi)},$$
on the ray space $R(H)$, with $\nu$ the normalization map, is well defined and injective with image the set of pure states. A state is **mixed** when it is not pure. For a nonzero vector $\psi$ the **normalized rank-one operator of $\psi$** is
$$\widehat\rho(\psi):=\frac{T_{\psi,\psi}}{\|\psi\|^{2}}=\frac{T_{\psi,\psi}}{\operatorname{tr}(T_{\psi,\psi})},$$
which equals $T_{\nu(\psi),\nu(\psi)}$; thus $\widehat\rho(\psi)$ is the pure state of the ray $[\psi]$, and the vector $\psi$ enters only through its ray.

**Purity.** For $\rho\in D(H)$ the operator $\rho^{2}$ is self-adjoint, positive and trace class: it is self-adjoint by the adjoint algebra of [[def-hilbert-space-adjoint]], positive because $\langle\rho^{2}x,x\rangle=\langle\rho x,\rho x\rangle\ge0$, and trace class because $\rho$ is a bounded trace-class operator and the trace-class operators form a two-sided ideal ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]] clauses 1 and 2). The **purity** of $\rho$ is the real number
$$\mathcal P(\rho):=\operatorname{tr}(\rho^{2})\in\mathbb R.$$
The numerical range of the purity and the equivalence of purity with purity of the state are established by the purity criterion of this page; this definition records the object only.

**Scope.** This definition fixes the mathematical state space of a Hilbert space together with the pure states, the mixed states, the normalized rank-one operator of a nonzero vector and the purity functional. The cited rank-one calculus and the density-operator expansion assume the Axiom of Countable Choice ([[def-countable-choice]]), and the definition is read under that assumption. It asserts no dynamics, no measurement, no probability law and no physical interpretation, and it introduces no new assumptions beyond the cited mathematics and that choice hypothesis. In particular, whether a given physical preparation is described by a pure or a mixed state is a question about the model's assignments, not about this definition.
