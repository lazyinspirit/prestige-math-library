---
id: ex-nrqm-state-geometry-nonunique-preparation-ensembles
kind: example
domain: physics
title: "One two-level state from two different preparation ensembles"
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
physical_scope: "A worked computation in the framework's two-level state space showing that two distinct statistical mixtures of pure preparations, with different members and different weights, determine the same mixed preparation: the diagonal state with eigenvalues 3/4 and 1/4 arises both as the orthonormal spectral ensemble with weights 3/4, 1/4 and as the uniform mixture of two non-orthogonal pure states. The item shows that the state does not determine the ensemble; it asserts no measurement probability, no apparatus realization and no empirical result, and it makes no claim of physical incompleteness."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Sections 2.5.1-2.5.2 and 2.5.5, printed pages 26-29 and 34-36: the ambiguity of the ensemble interpretation and the ensemble preparation of convex combinations"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3, printed pages 121-125: the density operator of a mixture in two different bases, and the non-uniqueness of the expansion of a density operator"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Let $H$ be a two-dimensional complex Hilbert space with orthonormal basis $(e_1,e_2)$ and use the state space and preparation semantics of [[def-nrqm-state-geometry-framework-state-space]]. Let $\rho$ be the diagonal state
$$\rho=\begin{pmatrix}3/4&0\\ 0&1/4\end{pmatrix}$$
relative to $(e_1,e_2)$, and put
$$\psi=\Bigl(\cos\frac\pi6,\ \sin\frac\pi6\Bigr)=\Bigl(\frac{\sqrt3}{2},\frac12\Bigr),\qquad \varphi=\Bigl(\cos\frac\pi6,\ -\sin\frac\pi6\Bigr)=\Bigl(\frac{\sqrt3}{2},-\frac12\Bigr).$$
Then:

(i) $\rho=\frac34T_{e_1,e_1}+\frac14T_{e_2,e_2}$: the projective (orthonormal) ensemble with weights $\frac34,\frac14$.

(ii) $\rho=\frac12T_{\psi,\psi}+\frac12T_{\varphi,\varphi}$: the uniform ensemble of the two pure preparations $[\psi]$ and $[\varphi]$, which are not orthogonal, since
$$\langle\psi,\varphi\rangle=\cos^{2}\frac\pi6-\sin^{2}\frac\pi6=\frac34-\frac14=\frac12\ne0 .$$

(iii) The two ensembles differ in their members and in their weights, yet they determine the same preparation, whose purity is $\frac34^{2}+\frac14^{2}=\frac58<1$. Hence the assigned state does not determine the ensemble, and two distinct statistical preparations may determine the same state.

## Facts & Assumptions

**Given:** A two-dimensional complex Hilbert space $H$ with orthonormal basis $(e_1,e_2)$; the vectors $\psi=(\sqrt3/2,1/2)$ and $\varphi=(\sqrt3/2,-1/2)$; the displayed state $\rho$; the state space $D(H)$ of [[def-nrqm-state-geometry-framework-state-space]]; and the Axiom of Countable Choice ([[def-countable-choice]]), the choice hypothesis of the cited state, mixture and purity suppliers.

[L1] **Inner product and moduli** ([[def-inner-product-space]], [[lem-complex-conjugation-and-modulus-laws]]): $\langle u,v\rangle=u_1\overline{v_1}+u_2\overline{v_2}$, so $\langle e_i,e_j\rangle=\delta_{ij}$, $\|\psi\|^{2}=\frac34+\frac14=1$, $\|\varphi\|^{2}=1$, and $\langle\psi,\varphi\rangle=\frac34-\frac14=\frac12$.

[L2] **Rank-one states** ([[lem-nrqm-state-geometry-ray-to-rank-one-projection]], [[def-matrix-product-and-identity-matrix]]): for a unit vector $x$ the operator $T_{x,x}$ is the pure state of the ray $[x]$, with matrix in the basis $(e_1,e_2)$ having entries $(T_{x,x})_{jk}=\langle e_j,x\rangle\langle x,e_k\rangle$; in particular $T_{e_1,e_1}=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $T_{e_2,e_2}=\begin{pmatrix}0&0\\0&1\end{pmatrix}$.

[L3] **Mixtures, purity and non-uniqueness of ensembles** ([[lem-nrqm-state-geometry-density-set-convex-and-complete]], [[lem-nrqm-state-geometry-purity-criterion]], [[pthm-nrqm-state-geometry-mixtures-and-extremal-preparations]]): finite mixtures of states with nonnegative weights summing to one are states; the purity of a state is $\operatorname{tr}(\rho^{2})$ and it is mixed exactly when its purity is less than $1$; and a preparation is the trace-norm limit of any of its statistical ensembles, distinct ensembles of the same state being allowed.

## Verification

**Proof technique:** direct; compute both ensembles in the basis $(e_1,e_2)$ and compare their data and the resulting state.

1.1 [The orthonormal ensemble] By [L2], $\frac34T_{e_1,e_1}+\frac14T_{e_2,e_2}=\begin{pmatrix}3/4&0\\0&1/4\end{pmatrix}=\rho$, a state by [L3]; its positive eigenvalues are $\frac34$ and $\frac14$, so its purity is $\frac{9}{16}+\frac{1}{16}=\frac58<1$ and it is mixed. [given, L2, L3, algebra]

1.2 [The uniform ensemble of non-orthogonal states] With $c:=\cos\frac\pi6=\frac{\sqrt3}{2}$ and $s:=\sin\frac\pi6=\frac12$ one computes $T_{\psi,\psi}=\begin{pmatrix}c^{2}&cs\\ cs&s^{2}\end{pmatrix}=\begin{pmatrix}3/4&\sqrt3/4\\ \sqrt3/4&1/4\end{pmatrix}$ and $T_{\varphi,\varphi}=\begin{pmatrix}c^{2}&-cs\\ -cs&s^{2}\end{pmatrix}=\begin{pmatrix}3/4&-\sqrt3/4\\ -\sqrt3/4&1/4\end{pmatrix}$ by [L2] and [L1]; their average is $\frac12\bigl(T_{\psi,\psi}+T_{\varphi,\varphi}\bigr)=\begin{pmatrix}3/4&0\\ 0&1/4\end{pmatrix}=\rho,$ so the uniform mixture of the two non-orthogonal pure preparations also determines $\rho$. [given, L1, L2, L3, algebra]

2.1 [The ensembles differ] The two ensembles have different member preparations (the orthogonal pair $(e_1,e_2)$ versus the non-orthogonal pair $(\psi,\varphi)$ with $\langle\psi,\varphi\rangle=\frac12\ne0$ by [L1]) and different weights ($\frac34,\frac14$ versus $\frac12,\frac12$); yet by steps 1.1 and 1.2 both determine the same state $\rho$. Hence two distinct statistical preparations of the model determine the same preparation, and the state does not encode the ensemble. [given, step 1.1, step 1.2, L1, L3, algebra] ∎

## Remarks

- The non-uniqueness exhibited here is a property of the state assignment, not a physical incompleteness claim: the model assigns the same state to two different ensembles, and all of its predictions depend on the state. The maximally mixed two-level state gives another instance, treated on the mathematics composites page.
- Neither ensemble in the computation is asserted to be realized by any apparatus; whether a laboratory procedure realizes one of them is an identification with uncertainty under the preparation and apparatus assumptions of the framework.
