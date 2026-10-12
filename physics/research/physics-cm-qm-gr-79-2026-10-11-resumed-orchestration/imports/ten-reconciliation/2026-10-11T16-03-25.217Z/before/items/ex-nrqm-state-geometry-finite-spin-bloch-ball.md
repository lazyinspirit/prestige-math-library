---
id: ex-nrqm-state-geometry-finite-spin-bloch-ball
kind: example
domain: physics
title: "The state space of a two-level finite-spin system is the Bloch ball"
status: draft
origin: pipeline
dependency_level: 6
deps: [post-nrqm-framework-identical-particles-and-spin, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-state-geometry-purity-criterion, lem-nrqm-state-geometry-ray-to-rank-one-projection, prop-nrqm-orbital-and-spin-finite-spin-matrices, def-matrix-product-and-identity-matrix, def-inner-product-space, def-hilbert-space, def-linear-combination-and-span, cor-finite-dimensional-normed-spaces-are-banach, lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal, def-countable-choice]
dependency_roles:
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-state-geometry-purity-criterion: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-linear-combination-and-span: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A worked computation in the model's two-level finite-spin state space: for the spin-one-half assignment of the framework, the density operators on the two-dimensional internal space are exactly the operators (I + r dot sigma)/2 with |r| <= 1, and the pure states are exactly the boundary points |r| = 1, each of which is the rank-one state of the corresponding spin-up ray. The Bloch ball is a parametrization of the model's states; the item asserts no measurement outcome probability, no experimental result and no interpretation of r beyond the displayed formula."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Section 2.3.2, printed pages 21-23: the general qubit density matrix rho = (I + P dot sigma)/2, det rho = (1 - P^2)/4, the Bloch ball and its boundary as the pure states"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin One-Half, Bras, Kets, and Operators', Sections 1-3, printed pages 1-16: the Pauli matrices, spin states and the density operator of a spin-one-half system"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 7.4.2, printed pages 161-164: the spin-one-half operators and their matrices"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Consider the model's two-level finite-spin assignment: the internal space $H=\mathbb C^{2}$ of a spin-one-half system ([[post-nrqm-framework-identical-particles-and-spin]]), with the standard inner product and the Pauli matrices
$$\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_y=\begin{pmatrix}0&-i\\ i&0\end{pmatrix},\qquad \sigma_z=\begin{pmatrix}1&0\\ 0&-1\end{pmatrix}$$
of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e). For $r=(r_1,r_2,r_3)\in\mathbb R^{3}$ write $r\cdot\sigma=r_1\sigma_x+r_2\sigma_y+r_3\sigma_z$ and $|r|^{2}=r_1^{2}+r_2^{2}+r_3^{2}$. Then, using the state space $D(H)$ of [[def-nrqm-state-geometry-framework-state-space]]:

(i) A linear operator $\rho$ on $H$ is a state if and only if there is $r\in\mathbb R^{3}$ with
$$\rho=\frac12\bigl(I+r\cdot\sigma\bigr)\qquad\text{and}\qquad |r|\le1;$$
that is, the state space is the unit ball of $\mathbb R^{3}$ in this parametrization.

(ii) Such a state is pure if and only if $|r|=1$; and if $|r|=1$ and $\psi$ is a unit eigenvector of $r\cdot\sigma$ with eigenvalue $1$, then $\rho=T_{\psi,\psi}$.

(iii) The value $r=0$ gives the mixed state $\tfrac12I$ of purity $\tfrac12$, and $r=e_3=(0,0,1)$ gives the pure state $\tfrac12(I+\sigma_z)=T_{e_1,e_1}$ with $e_1=(1,0)$.

## Facts & Assumptions

**Given:** The two-dimensional complex Hilbert space $H=\mathbb C^{2}$ with its standard inner product and basis $(e_1,e_2)$; the Pauli matrices $\sigma_x,\sigma_y,\sigma_z$ displayed above; the state space $D(H)$ of [[def-nrqm-state-geometry-framework-state-space]].

[L1] **Pauli algebra** ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e)): $\sigma_i^{2}=I$ for $i=x,y,z$, $\sigma_i\sigma_j+\sigma_j\sigma_i=2\delta_{ij}I$, $\sigma_i\sigma_j=\delta_{ij}I+i\sum_k\varepsilon_{ijk}\sigma_k$, and the displayed matrices satisfy $\sigma_i^{*}=\sigma_i$ and $\operatorname{tr}\sigma_i=0$ for $i=x,y,z$.

[L2] **States and purity** ([[def-nrqm-state-geometry-framework-state-space]], [[lem-nrqm-state-geometry-purity-criterion]]): a state is a self-adjoint positive trace-class operator of trace one; a state is pure exactly when its purity $\operatorname{tr}(\rho^{2})$ equals $1$ and exactly when it equals $T_{\psi,\psi}$ for a unit vector $\psi$; a mixed state has at least two positive eigenvalues.

[L3] **Rank-one states** ([[lem-nrqm-state-geometry-ray-to-rank-one-projection]]): for a unit vector $u$, $T_{u,u}u=u$, $T_{u,u}$ vanishes on the orthogonal complement of $u$, and $T_{u,u}$ is a pure state.

[L4] **Finite-dimensional linear algebra** ([[def-matrix-product-and-identity-matrix]], [[def-linear-combination-and-span]], [[def-inner-product-space]], [[def-hilbert-space]], [[cor-finite-dimensional-normed-spaces-are-banach]], [[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]]): matrices act on $\mathbb C^{2}$ by matrix--vector multiplication; a linear map is determined by its values on a basis; $\mathbb C^{2}$ with the standard inner product is a Hilbert space; and eigenspaces of a self-adjoint operator belonging to distinct eigenvalues are orthogonal.

[L5] **Trace, quadratic forms and the choice hypothesis** ([[def-countable-choice]]): the cited state and purity suppliers assume the Axiom of Countable Choice, which is therefore carried as a hypothesis of this computation; for the displayed $2\times2$ matrices, traces and quadratic forms are computed by direct matrix algebra; a complex matrix $A$ satisfies $\langle Ax,x\rangle\ge0$ for all $x\in\mathbb C^{2}$ exactly when the associated Hermitian matrix is positive, and for a Hermitian matrix of the form $\lambda_1P+\lambda_2(I-P)$ with $P$ an orthogonal projection the quadratic form is $\lambda_1\|Px\|^{2}+\lambda_2\|(I-P)x\|^{2}$.

## Verification

**Proof technique:** direct; parametrize the Hermitian trace-one matrices, test positivity via an explicit projection decomposition, and compute the purity.

1.1 [(i) parametrization] A general Hermitian $2\times2$ matrix with trace one has the form $A=\begin{pmatrix}a&b-ic\\ b+ic&1-a\end{pmatrix}$ with $a,b,c\in\mathbb R$; expanding the three Pauli matrices shows $A=\frac12I+b\,\sigma_x+c\,\sigma_y+\Bigl(a-\frac12\Bigr)\sigma_z=\frac12\bigl(I+r\cdot\sigma\bigr),\qquad r=(2b,\,2c,\,2a-1),$ so every Hermitian trace-one matrix is of the displayed form with a unique real vector $r$, and conversely every $r\in\mathbb R^{3}$ gives a Hermitian matrix of trace one. [given, L1, L4, algebra]

2.1 [(i) positivity exactly for $|r|\le1$] Let $r\ne0$ and $n=r/|r|$. By [L1], $(n\cdot\sigma)^{2}=\sum_{i,j}n_in_j\sigma_i\sigma_j=\frac12\sum_{i,j}n_in_j(\sigma_i\sigma_j+\sigma_j\sigma_i)=|n|^{2}I=I$. Put $P:=\frac12(I+n\cdot\sigma)$; then $P^{2}=\frac14(I+2n\cdot\sigma+(n\cdot\sigma)^{2})=\frac14(2I+2n\cdot\sigma)=P$ and $P^{*}=P$, so $P$ and $I-P$ are orthogonal projections, and $I+r\cdot\sigma=(1+|r|)P+(1-|r|)(I-P).$ For every $x$ the quadratic form of this operator is $(1+|r|)\|Px\|^{2}+(1-|r|)\|(I-P)x\|^{2}$ by [L5], which is nonnegative whenever $|r|\le1$ and is nonnegative for all $x$ only if $|r|\le1$: if $|r|>1$, then $P\ne I$ because $\operatorname{tr}(n\cdot\sigma)=0\ne2=\operatorname{tr}I$ by [L1], so choosing $x\ne0$ with $Px=0$ gives $\langle(I+r\cdot\sigma)x,x\rangle=(1-|r|)\|x\|^{2}<0$. Hence $\frac12(I+r\cdot\sigma)$ is positive exactly when $|r|\le1$; combined with step 1.1 this is (i). [given, step 1.1, L1, L4, L5, algebra]

2.2 [(ii) purity is $|r|=1$] For $\rho=\frac12(I+r\cdot\sigma)$ one computes, using $(r\cdot\sigma)^{2}=|r|^{2}I$ from [L1], $\rho^{2}=\frac14\bigl(I+2r\cdot\sigma+(r\cdot\sigma)^{2}\bigr)=\frac14\bigl((1+|r|^{2})I+2r\cdot\sigma\bigr),$ so $\operatorname{tr}(\rho^{2})=\frac14(1+|r|^{2})\operatorname{tr}I=\frac12(1+|r|^{2})$ because $\operatorname{tr}(r\cdot\sigma)=0$ by [L1]. By [L2] the state is pure exactly when this number equals $1$, that is exactly when $|r|^{2}=1$, which is the first part of (ii). [given, step 1.1, L1, L2, algebra]

3.1 [(ii) the pure state is the rank-one state of the spin-up ray] Assume $|r|=1$ and $\rho=\frac12(I+r\cdot\sigma)$, so $\rho$ is a projection by step 2.1. Since $\rho\ne0$ and $\rho^{2}=\rho$, choosing $y$ with $\rho y\ne0$ and putting $\psi:=\rho y/\|\rho y\|$ gives a unit vector with $\rho\psi=\psi$. A unit eigenvector $\chi$ of $r\cdot\sigma$ with eigenvalue $-1$ exists: $(r\cdot\sigma)^{2}=I$ gives $(r\cdot\sigma-I)(r\cdot\sigma+I)=0$, and if $r\cdot\sigma+I$ were injective then in the finite-dimensional space $H$ it would be invertible, so multiplying the identity by its inverse would give $r\cdot\sigma=I$, contradicting $\operatorname{tr}(r\cdot\sigma)=0\ne2=\operatorname{tr}I$ from [L1]. The eigenvectors $\psi$ and $\chi$ belong to distinct eigenvalues of the self-adjoint operator $r\cdot\sigma$, so they are orthogonal by [L4], and they form an orthonormal basis of $H$. On this basis both $\frac12(I+r\cdot\sigma)$ and $T_{\psi,\psi}$ act as the identity on $\psi$ and as $0$ on $\chi$: for $T_{\psi,\psi}$ this is $\langle\psi,\psi\rangle=1$ and $\langle\chi,\psi\rangle=0$ by [L3]. A linear map is determined by its values on a basis by [L4], so $\rho=T_{\psi,\psi}$; thus every boundary point is a pure state, and with step 2.2 also every state with $|r|<1$ is mixed. [given, step 2.1, step 2.2, L1, L2, L3, L4, algebra]

4.1 [(iii) the two displayed values] For $r=0$ the operator $\rho=\frac12I$ is a state by (i) with purity $\frac12(1+0)=\frac12$ by step 2.2, and it is mixed because $\frac12\ne1$ by [L2]; for $r=e_3$ one has $|r|=1$ and $\frac12(I+\sigma_z)=\begin{pmatrix}1&0\\0&0\end{pmatrix}=T_{e_1,e_1}$ by the definition of $T_{u,u}$, so it is a pure state by [L3]. This verifies (iii) and completes the computation. [given, step 2.2, step 3.1, L1, L2, L3, algebra] ∎

## Remarks

- The Bloch ball is a parametrization of the finite-spin state space of the model, computed on the explicit two-dimensional data of the spin-one-half assignment. The vector $r$ here is a coordinate of the state, not an empirical measurement result, and no outcome probability is computed in this item.
- The same computation applies verbatim to any two-level internal space carrying the same operator algebra; the identification of such a two-level space with a specific physical system is made by the model assumption that assigns the space, and no further interpretation is supplied here.
