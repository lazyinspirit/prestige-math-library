---
id: ex-nrqm-orbital-and-spin-example-spin-singlet-chsh
aliases: [nrqm-orbital-and-spin-example-spin-singlet-chsh]
kind: example
domain: mathematics
title: "Spin singlet CHSH"
status: published
origin: pipeline
dependency_level: 3
deps: [prop-nrqm-orbital-and-spin-finite-spin-matrices, thm-nrqm-orbital-and-spin-tsirelson-bound, lem-nrqm-composites-hilbert-tensor-construction, def-matrix-product-and-identity-matrix, def-linear-map, def-inner-product-space, def-hilbert-space, cor-inner-product-induces-a-norm, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-euclidean-inner-product, def-countable-choice]
dependency_roles:
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqm-orbital-and-spin-tsirelson-bound: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell nonlocality', Reviews of Modern Physics 86 (2014), §II.C.1.a (CHSH inequality and the singlet correlations E = -a.b) and eq. (4)"
      url: "https://arxiv.org/pdf/1303.2849"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 6 (the singlet state of two spin-half particles) and Chapter 7 (Pauli operators)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $V=\mathbb C^2$ carry the orthonormal basis
$(e_+,e_-)$ and let $\sigma_x,\sigma_y,\sigma_z$ be the Pauli matrices of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] (e), with $\sigma_a:=\sum_{i\in\{x,y,z\}}a_i\sigma_i$
for $a\in\mathbb R^3$; on the completed tensor product $V\widehat\otimes V$ use the inner product of
[[lem-nrqm-composites-hilbert-tensor-construction]]. Define the **singlet vector**
$$\Psi:=\frac1{\sqrt2}\bigl(e_+\otimes e_--e_-\otimes e_+\bigr)\in V\widehat\otimes V .$$
Then:

(a) $\|\Psi\|=1$ and $\langle(\sigma_i\otimes\sigma_j)\Psi,\Psi\rangle=-\delta_{ij}$ for all
$i,j\in\{x,y,z\}$;

(b) for all unit vectors $a,b\in\mathbb R^3$ the **singlet correlation** is
$$\langle(\sigma_a\otimes\sigma_b)\Psi,\Psi\rangle=-a\cdot b;$$

(c) with the unit vectors $a_0:=(1,0,0)$, $a_1:=(0,1,0)$, $b_0:=(1,1,0)/\sqrt2$, $b_1:=(1,-1,0)/\sqrt2$ the
CHSH combination of the four correlations
$$E_{ij}:=\langle(\sigma_{a_i}\otimes\sigma_{b_j})\Psi,\Psi\rangle$$
satisfies
$$E_{00}+E_{01}+E_{10}-E_{11}=-2\sqrt2,\qquad\text{so}\qquad \bigl|E_{00}+E_{01}+E_{10}-E_{11}\bigr|=2\sqrt2,$$
which is the value of the Tsirelson bound of [[thm-nrqm-orbital-and-spin-tsirelson-bound]] (b),(c); thus the bound
is attained at these settings;

(d) since $2\sqrt2>2$, the four numbers $E_{ij}$ of (c) cannot be realized as
$\mathbb E[A_iB_j]$ for four $\pm1$-valued random variables $A_0,A_1,B_0,B_1$ on one probability space, by the
CHSH inequality for that common-outcome model ([[thm-nrqm-orbital-and-spin-tsirelson-bound]] (e)).

All claims are finite-dimensional linear-algebra statements about the indicated matrices and vectors; no
preparation, measurement or experimental claim is made.

## Facts & Assumptions

**Given:** the Pauli matrices $\sigma_x,\sigma_y,\sigma_z$, the basis $(e_+,e_-)$ of $\mathbb C^2$, the tensor product $V\widehat\otimes V$ with its inner product, the vector $\Psi$, and the unit vectors $a_0,a_1,b_0,b_1$.

[F1] Pauli algebra and its consequences: $\sigma_i^2=I_2$, $\sigma_x\sigma_y=i\sigma_z$, $\sigma_y\sigma_z=i\sigma_x$, $\sigma_z\sigma_x=i\sigma_y$ (and the reversed products with the opposite sign), $\sigma_i\sigma_j+\sigma_j\sigma_i=2\delta_{ij}I_2$; for unit $a$ the matrix $\sigma_a$ is a self-adjoint involution; and the actions on the basis are $\sigma_xe_+=e_-$, $\sigma_xe_-=e_+$, $\sigma_ye_+=ie_-$, $\sigma_ye_-=-ie_+$, $\sigma_ze_+=e_+$, $\sigma_ze_-=-e_-$ by the displayed matrices and matrix-vector multiplication ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] (e), [[def-matrix-product-and-identity-matrix]]).

[F2] The tensor product: $V\widehat\otimes V$ is a complex Hilbert space containing the elementary tensors densely, with $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle\langle v,v'\rangle$; the four elementary tensors $e_\pm\otimes e_\pm$ form an orthonormal basis ([[lem-nrqm-composites-hilbert-tensor-construction]], [[def-inner-product-space]], [[def-hilbert-space]]).

[F3] The operator $S\otimes T$ on $V\widehat\otimes V$ is determined on elementary tensors by $(S\otimes T)(u\otimes v)=(Su)\otimes(Tv)$; sums and scalar multiples of such operators act componentwise, so $(\sigma_a\otimes\sigma_b)\Psi=\sum_{i,j}a_ib_j(\sigma_i\otimes\sigma_j)\Psi$; the inner product is linear in the first argument and additive and conjugate-linear in the second ([[lem-nrqm-composites-hilbert-tensor-construction]], [[def-linear-map]], [[def-inner-product-space]]).

[F4] The CHSH inequality for the common-outcome model: for $\pm1$-valued random variables $A_0,A_1,B_0,B_1$ on one probability space, $|\mathbb E[A_0B_0]+\mathbb E[A_0B_1]+\mathbb E[A_1B_0]-\mathbb E[A_1B_1]|\le2$; the Tsirelson bound states that the operator $C=A_0\otimes(B_0+B_1)+A_1\otimes(B_0-B_1)$ built from self-adjoint involutions satisfies $|\langle C\psi,\psi\rangle|\le2\sqrt2$ for every unit $\psi$ ([[thm-nrqm-orbital-and-spin-tsirelson-bound]] (b),(c),(e)).



## Verification

1.1 [(a), the nine pairings] By [F2], $\|\Psi\|^2=(\|e_+\otimes e_-\|^2+\|e_-\otimes e_+\|^2)/2=1$. Using [F1] and [F3]: for $i=j=x$, $(\sigma_x\otimes\sigma_x)\Psi=(e_-\otimes e_+-e_+\otimes e_-)/\sqrt2=-\Psi$, so the pairing is $-1$; for $i=j=y$, $(\sigma_y\otimes\sigma_y)(e_+\otimes e_-)=(ie_-)\otimes(-ie_+)=e_-\otimes e_+$ and $(\sigma_y\otimes\sigma_y)(e_-\otimes e_+)=(-ie_+)\otimes(ie_-)=e_+\otimes e_-$, so again $(\sigma_y\otimes\sigma_y)\Psi=-\Psi$; for $i=j=z$, $(\sigma_z\otimes\sigma_z)(e_+\otimes e_-)=e_+\otimes(-e_-)=-e_+\otimes e_-$ and $(\sigma_z\otimes\sigma_z)(e_-\otimes e_+)=(-e_-)\otimes e_+=-e_-\otimes e_+$, so $(\sigma_z\otimes\sigma_z)\Psi=-\Psi$. For clarity put $q=(e_+\otimes e_-+e_-\otimes e_+)/\sqrt2$ and $d_\pm=(e_+\otimes e_+\pm e_-\otimes e_-)/\sqrt2$. Direct Pauli actions give $(\sigma_x\otimes\sigma_y)\Psi=-iq$, $(\sigma_y\otimes\sigma_x)\Psi=iq$, $(\sigma_x\otimes\sigma_z)\Psi=-d_+$, $(\sigma_z\otimes\sigma_x)\Psi=d_+$, $(\sigma_y\otimes\sigma_z)\Psi=id_-$ and $(\sigma_z\otimes\sigma_y)\Psi=-id_-$. Each of $q,d_+,d_-$ is orthogonal to $\Psi$ by the elementary product-basis pairings, so every off-diagonal correlation is zero. Therefore $\langle(\sigma_i\otimes\sigma_j)\Psi,\Psi\rangle=-\delta_{ij}$. [F1, F2, F3, algebra]

2.1 [(b) and (c)] By [F3], $(\sigma_a\otimes\sigma_b)\Psi=\sum_{i,j}a_ib_j(\sigma_i\otimes\sigma_j)\Psi$, so step 1.1 and the linearity and conjugate-linearity of the inner product give $\langle(\sigma_a\otimes\sigma_b)\Psi,\Psi\rangle=\sum_{i,j}a_ib_j(-\delta_{ij})=-a\cdot b$, using real $a,b$. With the four unit vectors displayed in (c) the dot products are $a_0\cdot b_0=a_0\cdot b_1=a_1\cdot b_0=1/\sqrt2$ and $a_1\cdot b_1=-1/\sqrt2$, so $E_{00}=E_{01}=E_{10}=-1/\sqrt2$ and $E_{11}=+1/\sqrt2$, giving $E_{00}+E_{01}+E_{10}-E_{11}=-4/\sqrt2=-2\sqrt2$; the bound in [F4] forces $2\sqrt2$ to be the largest possible value of this combination, so the bound is attained. [step 1.1, F3, F4, algebra]

3.1 [(d)] By [F4], any four $\pm1$-valued random variables on one probability space satisfy the CHSH bound 2 for the same combination; since the combination computed in step 2.1 has absolute value $2\sqrt2>2$, no such common-outcome model reproduces the four numbers $E_{ij}$. [step 2.1, F4, algebra] ∎
