---
id: ex-nrqm-state-geometry-fixed-mode-two-level-states
kind: example
domain: physics
title: "Pure and mixed states of a fixed two-level internal space"
status: draft
origin: pipeline
dependency_level: 7
deps:
  [
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-state-geometry-purity-criterion,
    lem-nrqm-state-geometry-ray-to-rank-one-projection,
    lem-nrqm-state-geometry-density-set-convex-and-complete,
    def-inner-product-space,
    def-hilbert-space,
    def-matrix-product-and-identity-matrix,
    def-dimension,
    lem-complex-conjugation-and-modulus-laws,
    def-countable-choice
  ]
dependency_roles:
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-state-geometry-purity-criterion: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  lem-nrqm-state-geometry-density-set-convex-and-complete: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-dimension: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A worked computation in a fixed two-dimensional internal space
  carrying an orthonormal pair of 'polarization' labels: the state of the
  diagonal vector is the pure state with matrix (1/2)[[1,1],[1,1]], and the
  equal statistical mixture of the two basis labels is the mixed state (1/2)I.
  The two-level space is treated abstractly; the identification of its vectors
  with photon polarization states, and any statement about photon number, energy
  or momentum, is deferred to the radiation assumptions of the category and is
  not made in this item. The item asserts no measurement probability and no
  empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        1.3.6, printed pages 14-15: two orthonormal basis states of a fixed
        photon polarization mode, the superposition with equal amplitudes, and
        the transmission probabilities for a rotated analyser"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter
        2 (updated July 2015), Section 2.2.2, printed pages 14-16: photon
        polarization states as a two-dimensional internal space with orthonormal
        basis {|x>,|y>}"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
verification:
  precheck: pass
---

## Example

Let $H$ be a two-dimensional complex Hilbert space with an orthonormal basis written $(h,v)$, and use the state space $D(H)$ of [[def-nrqm-state-geometry-framework-state-space]]. Put
$$u:=\frac{h+v}{\sqrt2}\in S(H),\qquad \rho_+:=\frac12T_{h,h}+\frac12T_{v,v},$$
Here $u$ is the unit vector of the equal-amplitude superposition, with ray $[u]$, and $\rho_+$ is the density operator of the equal statistical mixture of the two basis rays. For an operator $A:H\to H$, write $\operatorname{ran}A:=\{Ax:x\in H\}$ and define its **rank** by $\operatorname{rank}A:=\dim_{\mathbb C}(\operatorname{ran}A)$, using [[def-dimension]]. Then:

(i) The state assigned to the ray $[u]$ is the pure state $T_{u,u}$, whose matrix relative to the basis $(h,v)$ is
$$T_{u,u}=\frac12\begin{pmatrix}1&1\\ 1&1\end{pmatrix};$$
its purity is $1$ and its rank is one.

(ii) The mixture is the state $\rho_+=\frac12I$, whose matrix relative to $(h,v)$ is diagonal with entries $\frac12$; its purity is $\frac12$, it is mixed, and it is not a pure state.

(iii) The two states are distinct: $T_{u,u}\ne\frac12I$, and they differ in rank and in purity.

The basis labels $h$ and $v$ are abstract here. The identification of such a two-level space with the polarization states of a fixed propagation mode, and every statement about photon number, energy, momentum or detection, is deferred to the radiation assumptions adopted on the radiation pages of the category; no such identification or statement is made in this item.

## Facts & Assumptions

**Given:** A two-dimensional complex Hilbert space $H$ with orthonormal basis $(h,v)$ and the standard inner product; the unit vector $u=(h+v)/\sqrt2$; the rank-one operators $T_{x,y}z=\langle z,y\rangle x$; the state space $D(H)$ of [[def-nrqm-state-geometry-framework-state-space]]; and the Axiom of Countable Choice ([[def-countable-choice]]), the choice hypothesis of the cited rank-one and state-space suppliers.

[L1] **Orthonormality and coordinates** ([[def-inner-product-space]], [[def-hilbert-space]]): $\langle h,h\rangle=\langle v,v\rangle=1$ and $\langle h,v\rangle=\langle v,h\rangle=0$, so $\|h\|=\|v\|=1$ and every vector is a unique linear combination of $h$ and $v$; in particular $\|u\|^{2}=\frac12\|h+v\|^{2}=1$.

[L2] **Rank-one states** ([[lem-nrqm-state-geometry-ray-to-rank-one-projection]]): $T_{x,x}x=\|x\|^{2}x$; for a unit vector $x$ the operator $T_{x,x}$ is a pure state and the Hilbert orthogonal projection onto the one-dimensional subspace $\mathbb Cx$; its matrix relative to a basis has columns $T_{x,x}e_{j}=\langle e_{j},x\rangle x$.

[L3] **Mixtures, purity and mixedness** ([[lem-nrqm-state-geometry-density-set-convex-and-complete]], [[lem-nrqm-state-geometry-purity-criterion]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]): a finite convex combination of states with weights summing to one is a state; the purity of a state with positive eigenvalues $\lambda_j$, counted with multiplicity, is $\operatorname{tr}(\rho^{2})=\sum_j\lambda_j^2$; a state is pure exactly when this equals $1$ and mixed exactly when it has at least two positive eigenvalues.

[L4] **Matrix multiplication and identity** ([[def-matrix-product-and-identity-matrix]]): for the displayed $2\times2$ matrices, $(AB)_{ij}=\sum_k A_{ik}B_{kj}$, and the identity matrix $I$ has diagonal entries one and off-diagonal entries zero.

## Verification

**Proof technique:** direct; compute the two states in the basis $(h,v)$ and compare their purities and ranks.

1.1 [(i) the pure state of the diagonal ray] For the unit vector $u=(h+v)/\sqrt2$ of [L1] one has $\langle h,u\rangle=1/\sqrt2$ and $\langle v,u\rangle=1/\sqrt2$, so by [L2] the columns of $T_{u,u}$ in the basis $(h,v)$ are $T_{u,u}h=\frac{1}{\sqrt2}u=\frac12(h+v)$ and $T_{u,u}v=\frac{1}{\sqrt2}u=\frac12(h+v)$, that is, the displayed matrix $\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$. Its square is $\frac14\begin{pmatrix}2&2\\2&2\end{pmatrix}=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}=T_{u,u}$ by [L4]; its range is the one-dimensional subspace $\mathbb Cu$, so its rank is one, and its purity is $1$. By [L3] it is a pure state. [given, L1, L2, L3, L4, algebra]

1.2 [(ii) the mixture is one half times the identity] By [L2] the matrices of the two pure states are $T_{h,h}=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $T_{v,v}=\begin{pmatrix}0&0\\0&1\end{pmatrix}$, so $\rho_+=\frac12T_{h,h}+\frac12T_{v,v}=\frac12I$; this is a state by [L3], since the weights are nonnegative and sum to one. Its range is $H$, so its rank is two. Its square is $\frac14I$ by [L4]. Since $\rho_+h=h/2$ and $\rho_+v=v/2$ and $(h,v)$ is a basis, its two eigenvalues counted with multiplicity are $1/2,1/2$, so its purity is $(1/2)^2+(1/2)^2=1/2$ by [L3]; since $\frac12\ne1$, the state is mixed by [L3]. [given, L1, L2, L3, L4, algebra]

2.1 [(iii) the states are distinct] By steps 1.1 and 1.2 the difference $T_{u,u}-\frac12I=\frac12\begin{pmatrix}0&1\\1&0\end{pmatrix}$ is nonzero, so the two states are distinct elements of $D(H)$; their purities $1$ and $\frac12$ and their ranks $1$ and $2$ also differ, so the pure superposition and the equal mixture are different states of the model. [given, step 1.1, step 1.2, L4, algebra] ∎

## Remarks

- The computation is a state-level comparison only. Whether the two states differ in the outcome probabilities of some measurement, and with which apparatus, is a question for the framework's probability law and measurement assumptions, which are not used here.
- The labels $h$ and $v$ are carried only to fix an orthonormal basis. The physical reading of such a two-level space as photon polarization is an assumption of the radiation pages, not a consequence of this example.
