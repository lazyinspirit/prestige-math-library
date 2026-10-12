---
id: cex-nrqm-state-geometry-zero-vector-is-not-a-preparation
kind: counterexample
domain: physics
title: "The zero vector determines no pure preparation and no state"
status: draft
origin: pipeline
dependency_level: 7
deps:
  [
    post-nrqm-framework-state-and-composition,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-state-vectors-and-rays,
    lem-nrqm-state-geometry-ray-to-rank-one-projection,
    lem-nrqm-composites-rank-one-operator-calculus,
    cor-inner-product-induces-a-norm,
    def-field,
    def-complex-numbers-and-arithmetic,
    def-countable-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-field: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A refutation, inside the framework's state semantics, of the
  claim that every vector of the assigned Hilbert space determines a pure
  preparation with the zero vector corresponding to the zero operator: the zero
  vector has no unit representative, the normalization map is undefined at it,
  and the zero operator has trace zero and is not a density operator, so under
  the state postulate no preparation and no state is assigned to it. The item
  refutes that specific informal claim; it asserts no empirical result and no
  claim about nature."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter
        2 (updated July 2015), Section 2.1, printed page 4: positivity of the
        inner product is stated for |psi> not equal to 0, and a ray is an
        equivalence class of nonzero vectors"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1, printed pages 55-56 (PDF pages 66-67): the states are the
        vectors of norm one, so the zero vector is not a state"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement refuted

Adopt the state postulate of the framework, and let $H\ne\{0\}$ be the Hilbert space assigned to a declared system. Then: **every** vector of $H$ determines a pure preparation of the system; the zero vector determines the zero operator $0$, which is the state of the system when no preparation is made, and the normalization convention $0/\|0\|=0$ supplies the unit representative of its ray.

## Facts & Assumptions

**Given:** The adopted state postulate P1 with its assigned Hilbert space $H\ne\{0\}$; the ray, normalization and unit-sphere notions of [[def-nrqm-state-geometry-state-vectors-and-rays]]; the rank-one operators $T_{u,v}x=\langle x,v\rangle u$, whose calculus assumes the Axiom of Countable Choice ([[def-countable-choice]]); the zero vector $0\in H$.

[L1] **The state postulate** ([[post-nrqm-framework-state-and-composition]] clauses (ii)-(iii)): a pure preparation is a unit ray $[\psi]=\{z\psi:z\ne0\}$ of a vector with $\|\psi\|=1$; two nonzero vectors describe the same pure preparation exactly when they differ by a nonzero complex factor; the rank-one operator $T_{\psi,\psi}$ is the density operator associated with the ray of a unit vector $\psi$; the zero vector is not a state and no preparation is assigned to it; and a general preparation is a density operator of trace one.

[L2] **Rays and normalization** ([[def-nrqm-state-geometry-state-vectors-and-rays]], [[cor-inner-product-induces-a-norm]]): rays are defined only for nonzero vectors, $S(H)=\{\psi:\|\psi\|=1\}$, $\nu(\psi)=\|\psi\|^{-1}\psi$ requires the nonzero scalar $\|\psi\|^{-1}$, and $\|0\|=0$ with $\|zv\|=|z|\,\|v\|$.

[L3] **Rank-one operators at zero** ([[lem-nrqm-composites-rank-one-operator-calculus]], [[lem-nrqm-state-geometry-ray-to-rank-one-projection]]): $T_{0,v}x=\langle x,v\rangle 0=0$ for every $x$, so $T_{0,0}$ is the zero operator, and $\operatorname{tr}(T_{0,0})=\langle0,0\rangle=0$; a state has trace one by [L1].

[L4] **The scalar field** ([[def-field]], [[def-complex-numbers-and-arithmetic]]): in $\mathbb C$ only nonzero elements have multiplicative inverses; the expression $0^{-1}$ and the quotient $0/0$ are not defined, and the formula for $\nu$ is a scalar multiplication by the inverse of the norm.

## Counterexample

**Proof technique:** direct; examine the zero vector against each clause of the refuted statement.

1.1 [No unit representative] By [L2], $\|0\|=0$ and $\|z\cdot0\|=|z|\,\|0\|=0$ for every scalar $z$, so no scalar multiple of $0$ has norm $1$; hence the set $\{z\cdot0:z\ne0\}=\{0\}$ contains no unit vector, and it is not a ray in the sense of [L2], which is defined only for nonzero generating vectors. [given, L1, L2, algebra]

2.1 [Normalization is undefined] The normalization formula $\nu(\psi)=\|\psi\|^{-1}\psi$ uses the inverse of the scalar $\|\psi\|$; at $\psi=0$ this inverse would be $0^{-1}$, which does not exist in $\mathbb C$ by [L4], and the displayed "convention" $0/\|0\|=0$ is therefore not an instance of the definition but a separate stipulation. Even granting the stipulation its value, $\|0\|=0\ne1$ by [L2], so it does not produce a unit representative; the stipulation is self-defeating as a normalization rule. [given, step 1.1, L2, L4, algebra]

2.2 [The zero operator is not a state] By [L3], $T_{0,0}$ is the zero operator with $\operatorname{tr}(T_{0,0})=0$; a density operator has trace one by [L1], so $0\notin D(H)$ and the zero operator is not a state of the model. Consequently the zero vector does not determine a state through the rank-one operator either. [given, step 1.1, L1, L3, algebra]

3.1 [Failure at every step] The refuted statement fails on the zero vector in all of its assertions: there is no unit representative of $0$ by step 1.1, the normalization is undefined rather than $0$ by step 2.1, and the zero operator is not a density operator by step 2.2; and clause (ii) of the state postulate in [L1] expressly assigns no preparation to the zero vector. Hence the claim that every vector of the assigned Hilbert space determines a pure preparation, with the zero vector as the state of an empty preparation, is refuted. [given, step 1.1, step 2.1, step 2.2, L1, L2, algebra] ∎

## Remarks

- The refutation is a statement about the model's state semantics: the zero vector and the zero operator are excluded by the definitions and by the state postulate. It is not an empirical claim, and it does not say that the framework's assignment of states is complete or exact.
- The exclusion of the zero vector is one reason the unit ray, rather than the raw vector, is the carrier of a pure preparation: rescaling a nonzero vector by any nonzero complex factor keeps its ray, whereas no rescaling can make the zero vector a unit vector.
