---
id: rem-nrqm-state-geometry-examples-scope-limits
kind: remark
domain: physics
title: "What the worked checks of the companion page establish"
status: draft
origin: pipeline
dependency_level: 8
deps: [ex-nrqm-state-geometry-normalization-and-phase-check, ex-nrqm-state-geometry-finite-spin-bloch-ball, ex-nrqm-state-geometry-fixed-mode-two-level-states, ex-nrqm-state-geometry-coherent-versus-mixed-preparation, ex-nrqm-state-geometry-nonunique-preparation-ensembles, cex-nrqm-state-geometry-zero-vector-is-not-a-preparation]
dependency_roles:
  ex-nrqm-state-geometry-normalization-and-phase-check: operational-prerequisite
  ex-nrqm-state-geometry-finite-spin-bloch-ball: operational-prerequisite
  ex-nrqm-state-geometry-fixed-mode-two-level-states: operational-prerequisite
  ex-nrqm-state-geometry-coherent-versus-mixed-preparation: operational-prerequisite
  ex-nrqm-state-geometry-nonunique-preparation-ensembles: operational-prerequisite
  cex-nrqm-state-geometry-zero-vector-is-not-a-preparation: operational-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope audit of the companion page of worked checks: it records what each computation verifies, that all of them are finite state-space computations or one refutation of an informal claim about the model's state semantics, and that none is an experiment, a measurement prediction or a comparison with data."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Sections 2.3.2 and 2.5.1, printed pages 21-23 and 26-27: the Bloch parametrization of two-level states and the extremal role of pure states, for comparison with the checks of this page"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 1.3.5 and 6.3, printed pages 12-13 and 121-126: two-level superpositions and mixtures, for comparison with the worked state comparisons of this page"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Scope of the worked checks

This remark audits the companion page. It records what each item computes, and what none of them claims. It proves nothing and reports no observation.

**Elementary normalization and phase.** [[ex-nrqm-state-geometry-normalization-and-phase-check]] computes, on the explicit two-dimensional data $\psi=(1,i)$ and $\varphi=(1+i)\psi$, the norms, the normalized representatives, the phase relating them and the normalized rank-one operators; it verifies the normalization and phase class lemma of the main page and exhibits the representative independence of the pure state on a worked vector pair.

**Finite spin and the two-level state space.** [[ex-nrqm-state-geometry-finite-spin-bloch-ball]] proves that the states of the model's two-level finite-spin system are exactly the operators $\frac12(I+r\cdot\sigma)$ with $|r|\le1$, that the pure states are the boundary points $|r|=1$, and that each boundary point is the rank-one state of the corresponding spin-up ray. [[ex-nrqm-state-geometry-fixed-mode-two-level-states]] repeats the corresponding elementary computation for an abstract two-level internal space carrying a pair of polarization labels, showing the pure state of the diagonal vector and the equal mixture of the basis rays. Neither item asserts the identification of the abstract two-level space with photon polarization; that reading belongs to the radiation assumptions of the category, and no statement about photon number, energy or momentum is made here.

**Superposition versus mixture, and non-unique ensembles.** [[ex-nrqm-state-geometry-coherent-versus-mixed-preparation]] shows that the relative-phase superposition $(h+iv)/\sqrt2$ and the equal statistical mixture of the rays $[h]$ and $[v]$ are assigned different states, with different rank and purity, so the two preparations are not the same. [[ex-nrqm-state-geometry-nonunique-preparation-ensembles]] shows the converse direction of freedom: one and the same mixed state is determined by two genuinely different ensembles, an orthonormal pair with unequal weights and a uniform pair of non-orthogonal states. Both computations stop at the level of the assigned states; which outcome probabilities distinguish states, and with which apparatus, is the subject of the framework's probability law and measurement assumptions.

**Zero-vector exclusion.** [[cex-nrqm-state-geometry-zero-vector-is-not-a-preparation]] refutes the informal claim that every vector determines a pure preparation with the zero vector as an empty preparation: the zero vector has no unit representative, the normalization map is undefined at it, and the zero operator has trace zero and is not a state. The refutation concerns the model's definitions and assignment; it is not an experiment and it makes no claim about nature.

**Empirical neutrality.** Every item of this page is a finite computation or the refutation just described. None of them uses measured data, none adopts a law of nature, none predicts the outcome of any measurement, and none compares a model prediction with an observation. Agreement or disagreement with data would test the combined framework and apparatus assumptions, and is not established or claimed here.
