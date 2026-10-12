---
id: ex-nrqm-state-geometry-coherent-versus-mixed-preparation
kind: example
domain: physics
title: "A coherent two-level preparation and the equal statistical mixture are different states"
status: draft
origin: pipeline
dependency_level: 7
deps: [def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-state-geometry-purity-criterion, lem-nrqm-state-geometry-ray-to-rank-one-projection, lem-nrqm-state-geometry-density-set-convex-and-complete, pthm-nrqm-state-geometry-mixtures-and-extremal-preparations, def-inner-product-space, def-hilbert-space, def-matrix-product-and-identity-matrix, lem-complex-conjugation-and-modulus-laws, def-countable-choice]
dependency_roles:
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-state-geometry-purity-criterion: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  lem-nrqm-state-geometry-density-set-convex-and-complete: mathematical-premise
  pthm-nrqm-state-geometry-mixtures-and-extremal-preparations: physical-result
  def-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A worked comparison, inside the framework's state space, of two preparations of a two-level system: the pure preparation of the relative-phase superposition (h + i v)/sqrt2 and the equal statistical mixture of the h and v rays. The two assigned states are computed explicitly and shown to be distinct, with different rank and purity: the superposition is pure and the mixture is mixed. The item asserts no outcome probability, no measurement model, no apparatus realization and no empirical result; the relative-phase (coherence) comparison at the level of outcome statistics belongs to the framework's probability law and is not made here."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Sections 2.2.1 and 2.3, printed pages 8-12 and 16-19: superpositions with a relative phase versus incoherent mixtures, and their different density matrices"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 1.3.5 and 6.3, printed pages 12-13 and 121-126: the role of relative phase in superpositions and the distinction between a superposition and a probability mixture embodied in the density operator"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Let $H$ be a two-dimensional complex Hilbert space with orthonormal basis $(h,v)$, and use the state space $D(H)$ and the preparation semantics of [[def-nrqm-state-geometry-framework-state-space]]. Consider the two preparations
$$\text{superposition:}\quad w=\frac{h+iv}{\sqrt2},\qquad\qquad \text{equal mixture:}\quad \rho_+=\frac12T_{h,h}+\frac12T_{v,v},$$
where $w$ is a unit vector and $\rho_+$ is the statistical mixture of the two basis rays with weights $\frac12,\frac12$. Then the assigned states are
$$T_{w,w}=\frac12\begin{pmatrix}1&-i\\ i&1\end{pmatrix},\qquad \rho_+=\frac12 I,$$
and they are distinct states of the model: $T_{w,w}$ is pure with purity $1$ and rank one, while $\rho_+$ is mixed with purity $\frac12$ and rank two. In particular the relative phase of the superposition is not erased at the level of the assigned state, and the superposition and the mixture are not the same preparation.

## Facts & Assumptions

**Given:** A two-dimensional complex Hilbert space $H$ with orthonormal basis $(h,v)$; the unit vector $w=(h+iv)/\sqrt2$; the mixture $\rho_+=\frac12T_{h,h}+\frac12T_{v,v}$; the state space $D(H)$ of [[def-nrqm-state-geometry-framework-state-space]]; and the Axiom of Countable Choice ([[def-countable-choice]]), the choice hypothesis of the cited state, mixture and purity suppliers.

[L1] **Inner product and modulus** ([[def-inner-product-space]], [[lem-complex-conjugation-and-modulus-laws]]): $\langle h,h\rangle=\langle v,v\rangle=1$, $\langle h,v\rangle=\langle v,h\rangle=0$, $|i|=1$, and $\|w\|^{2}=\frac12\|h+iv\|^{2}=1$ because $|1|^{2}=|i|^{2}=1$ and the two components are orthogonal.

[L2] **Rank-one states and matrices** ([[lem-nrqm-state-geometry-ray-to-rank-one-projection]], [[def-matrix-product-and-identity-matrix]]): for a unit vector $x$ the operator $T_{x,x}$ is the pure state of the ray $[x]$, and its matrix in the basis $(h,v)$ has columns $\langle h,x\rangle x$ and $\langle v,x\rangle x$; for the basis vectors, $T_{h,h}=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $T_{v,v}=\begin{pmatrix}0&0\\0&1\end{pmatrix}$.

[L3] **Mixtures and purity** ([[lem-nrqm-state-geometry-density-set-convex-and-complete]], [[lem-nrqm-state-geometry-purity-criterion]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[pthm-nrqm-state-geometry-mixtures-and-extremal-preparations]]): finite mixtures with weights summing to one are states; a state is pure exactly when its purity is $1$ and mixed exactly when it has at least two positive eigenvalues; and a state's rank is the number of its positive eigenvalues counted with multiplicity.

## Verification

**Proof technique:** direct; compute both matrices in the basis $(h,v)$ and compare purity and rank.

1.1 [The superposition state] With $w=(h+iv)/\sqrt2$ one has $\langle h,w\rangle=1/\sqrt2$ and $\langle v,w\rangle=\overline{i}/\sqrt2=-i/\sqrt2$ by [L1], so the columns of $T_{w,w}$ in the basis $(h,v)$ are $T_{w,w}h=\frac{1}{\sqrt2}w=\frac12(h+iv)$ and $T_{w,w}v=-\frac{i}{\sqrt2}w=-\frac{i}{2}(h+iv)=\frac12(v-ih)$, giving the displayed matrix $\frac12\begin{pmatrix}1&-i\\ i&1\end{pmatrix}$; its square is $\frac14\begin{pmatrix}2&-2i\\ 2i&2\end{pmatrix}=\frac12\begin{pmatrix}1&-i\\ i&1\end{pmatrix}=T_{w,w}$, so its eigenvalues are $1$ and $0$ and its purity is $1$; by [L3] it is a pure state of rank one. [given, L1, L2, L3, algebra]

1.2 [The mixture state] By [L2] one has $\rho_+=\frac12\begin{pmatrix}1&0\\0&0\end{pmatrix}+\frac12\begin{pmatrix}0&0\\0&1\end{pmatrix}=\frac12I$, a state by [L3]; its square is $\frac14I$ and its purity is $\operatorname{tr}(\frac14I)=\frac12$; since $\frac12\ne1$, it is mixed by [L3], with the two positive eigenvalues $\frac12,\frac12$ and hence rank two. [given, L1, L2, L3, algebra]

2.1 [The states are distinct] The difference $T_{w,w}-\rho_+=\frac12\begin{pmatrix}0&-i\\ i&0\end{pmatrix}$ is nonzero, so the two preparations are assigned different states; the purities $1$ and $\frac12$, and the ranks one and two, confirm that one is pure and the other mixed. Hence the relative-phase superposition and the equal-weight statistical mixture are distinct states of the model, and the identity of their diagonal entries alone does not make them equal. [given, step 1.1, step 1.2, algebra] ∎

## Remarks

- The comparison is made at the level of the assigned states only. Which measurements distinguish the two states, and by how much, is a statement about the framework's probability law and measurement assumptions, and is not claimed here.
- The diagonal entries of the two matrices agree and only the off-diagonal entries differ; this is the state-level expression of the relative phase of the superposition. No claim about interference or detection is made in this item.
