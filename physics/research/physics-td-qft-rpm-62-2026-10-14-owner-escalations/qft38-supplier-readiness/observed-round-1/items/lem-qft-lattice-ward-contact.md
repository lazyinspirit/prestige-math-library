---
id: lem-qft-lattice-ward-contact
kind: lemma
title: Time-ordered Ward contact relation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - def-qft-compact-lattice-gauge-data
  - lem-qft-lattice-ward-identities
  - lem-qft-lattice-physical-evolution
  - def-axiom-of-choice
dependency_roles:
  def-qft-compact-lattice-gauge-data: mathematical-premise
  lem-qft-lattice-ward-identities: mathematical-premise
  lem-qft-lattice-physical-evolution: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979), §VI.C, printed pp. 694–696"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete review retrieved; §VI.C read for the Hamiltonian Gauss generator. The contact-term argument below is proved directly for this finite regulator."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020), §§2.1–2.4"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Complete notes retrieved; §§2.1–2.4 read for the static Gauss generator and gauge-invariant dynamics."
---

## Statement

Assume the compact finite-graph model and the Axiom of Choice. Fix a vertex $x$, pairwise distinct real times $t_1,\ldots,t_n$ with $n\ge1$, bounded operators $O_j$, and a normalized physical vector $\psi$. Assume each $O_j$ maps $D(G_x)$ into itself and has a bounded commutator with $G_x$. Let
$$O_j(t_j)=\mathcal U(t_j)^\dagger O_j\mathcal U(t_j),\qquad
G_x(t)=\mathcal U(t)^\dagger G_x\mathcal U(t),$$
where $\mathcal U(t)=e^{-itH/\hbar}$. Define ordinary time ordering by placing the factor with the larger time to the left; $G_x$ is bosonic, so moving it past an insertion introduces no grading sign. Then $G_x(t)=G_x$, and, as a distribution in $t$,
$$\frac{d}{dt}\left\langle\psi,\mathcal T\!\left[G_x(t)\prod_{j=1}^nO_j(t_j)\right]\psi\right\rangle
=\sum_{j=1}^n\delta(t-t_j)
\left\langle\psi,\mathcal T\!\left([G_x,O_j(t_j)]\prod_{i\ne j}O_i(t_i)\right)\psi\right\rangle.$$
The products and commutators are evaluated on the common domains just specified. This is a finite-regulator contact identity, not a claim about continuum renormalized time-ordered products.

## Facts & Assumptions

**Given:** The exact finite-graph Hamiltonian, its gauge group and physical subspace, the Axiom of Choice, pairwise distinct insertion times, and domain-preserving bounded insertions with bounded gauge-generator commutators.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] [[lem-qft-lattice-ward-identities]]: time-evolved bounded insertions preserve their gauge charges and $D(G_x)$; the time evolution commutes with the gauge group.

[F2] [[lem-qft-lattice-physical-evolution]]: $\mathcal U(t)$ is a strongly continuous unitary group, preserves $D(H)$ and $\mathcal H_{\rm phys}$, and commutes with every $U(\alpha)$.

[F3] [[def-qft-compact-lattice-gauge-data]]: each $G_x$ is the diagonal generator of the vertex phase action, and the CAR insertions remain conditional on the current draft QFT-MF01 carrier.

## Proof

**Given:** [A1], [F1], [F2], and the domain hypotheses in the Statement.

1.1 By the Axiom of Choice, Stone's theorem applies to the self-adjoint $H$. Since $\mathcal U(t)$ commutes with every gauge transformation and the joint-character projections of $G_x$, it preserves $D(G_x)$ and commutes with $G_x$ there. Thus $G_x(t)=G_x$. Each $O_j(t_j)$ is bounded and preserves the stated domain by [F1], so every time-ordered product in the Statement is defined on $\psi$. [A1, F1, F2, F3, given]

1.2 Between two successive insertion times, the ordering of the fixed $O_j(t_j)$ and the single variable-time factor $G_x(t)$ does not change. Since $G_x(t)=G_x$, the ordered operator product and its expectation are constant on each such open interval. [step 1.1, given]

2.1 When $t$ increases through $t_j$, the factor $G_x$ moves from the right of $O_j(t_j)$ to its left. The right-limit minus the left-limit of the ordered product is therefore the same ordered product with that factor replaced by $G_xO_j(t_j)-O_j(t_j)G_x=[G_x,O_j(t_j)]$; all other insertion orders remain fixed because the $t_i$ are distinct. The commutator is defined on the required domain and bounded by assumption. [given, step 1.1, algebra]

2.2 A piecewise constant locally integrable function has distributional derivative equal to the sum of its jumps times delta distributions: for every compactly supported smooth $\varphi$, integration by parts on the intervals separated by $t_j$ gives $-\int F(t)\varphi'(t)\,dt=\sum_j(F(t_j+)-F(t_j-))\varphi(t_j)$. Substituting the jumps from step 2.1 proves the displayed identity. [step 1.2, step 2.1, algebra] ∎

