---
id: lem-nrqm-bell-singlet-pairings
aliases: [nrqm-bell-singlet-pairings]
kind: lemma
domain: mathematics
title: "Singlet pairings: the joint laws of the two spin-half factors along two directions"
status: draft
origin: session
dependency_level: 2
deps: [prop-nrqm-orbital-and-spin-finite-spin-matrices, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, def-inner-product-space, def-hilbert-space, def-real-and-complex-inner-product-space, cor-inner-product-induces-a-norm, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-linear-map, def-matrix-product-and-identity-matrix, def-countable-choice]
dependency_roles:
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 7.5.1, printed pages 173-175 (PDF pages 181-183): the spin-half Pauli matrices and the two-particle singlet as a difference of product basis vectors, and Section 6.1.4 printed pages 111-115 (PDF pages 119-123): the singlet spin correlations along two directions"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', Sections 3 and 5, chapter pages 9-12 and 16-19: the Bell basis, the singlet state and its spin correlations; Chapter 2 'Spin One-Half' for the Pauli matrices"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]), the hypothesis
of the tensor construction cited below. Let $V=\mathbb C^{2}$ carry the
orthonormal basis $(e_{+},e_{-})$ and let
$$\sigma_{x}=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_{y}=\begin{pmatrix}0&-i\\ i&0\end{pmatrix},\qquad \sigma_{z}=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$$
be the Pauli matrices of clause (e) of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] in the ordered basis
$(e_{+},e_{-})$; for $a=(a_{x},a_{y},a_{z})\in\mathbb R^{3}$ put
$\sigma_{a}:=a_{x}\sigma_{x}+a_{y}\sigma_{y}+a_{z}\sigma_{z}$, and for
$\varepsilon\in\Sigma=\{-1,+1\}$ put
$$P_{a,\varepsilon}:=\tfrac12\bigl(I+\varepsilon\,\sigma_{a}\bigr).$$
Let $V\widehat\otimes V$ be the completed tensor product with inclusion
$\kappa$ of [[lem-nrqm-composites-hilbert-tensor-construction]] and let
$$\Psi:=\frac{1}{\sqrt2}\Bigl(\kappa(e_{+}\otimes e_{-})-\kappa(e_{-}\otimes e_{+})\Bigr)\in V\widehat\otimes V, \qquad q:=\frac{1}{\sqrt2}\Bigl(\kappa(e_{+}\otimes e_{-})+\kappa(e_{-}\otimes e_{+})\Bigr).$$
Then:

(a) for every unit $a\in\mathbb R^{3}$ and $\varepsilon\in\Sigma$ the
operator $P_{a,\varepsilon}$ is an orthogonal projection on $V$,
$P_{a,+}+P_{a,-}=I$ and
$P_{a,\varepsilon}P_{a,\varepsilon'}=\delta_{\varepsilon\varepsilon'}P_{a,\varepsilon}$;

(b) $\|\Psi\|=1$ and the four vectors $\Psi,q,\kappa(e_{+}\otimes e_{+}),
\kappa(e_{-}\otimes e_{-})$ are mutually orthogonal, so
$(\Psi,q,\kappa(e_{+}\otimes e_{+}),\kappa(e_{-}\otimes e_{-}))$ is an
orthonormal basis of $V\widehat\otimes V$;

(c) for all unit $a,b\in\mathbb R^{3}$ and all
$\varepsilon,\delta\in\Sigma$,
$$\bigl\langle(P_{a,\varepsilon}\otimes P_{b,\delta})\Psi,\Psi\bigr\rangle =\tfrac14\bigl(1-\varepsilon\delta\,a\cdot b\bigr);$$

(d) the marginals of the four numbers in (c) are
$$\sum_{\delta\in\Sigma}\bigl\langle(P_{a,\varepsilon}\otimes P_{b,\delta})\Psi,\Psi\bigr\rangle=\tfrac12 =\sum_{\varepsilon\in\Sigma}\bigl\langle(P_{a,\varepsilon}\otimes P_{b,\delta})\Psi,\Psi\bigr\rangle,$$
and their correlation is
$$\sum_{\varepsilon\in\Sigma}\sum_{\delta\in\Sigma}\varepsilon\,\delta\, \bigl\langle(P_{a,\varepsilon}\otimes P_{b,\delta})\Psi,\Psi\bigr\rangle =-a\cdot b .$$

The lemma is a finite-dimensional computation in the tensor product; it
asserts no preparation, measurement or physical interpretation. The Axiom of
Countable Choice enters only through the construction of the completed tensor
product cited from [[lem-nrqm-composites-hilbert-tensor-construction]].

## Facts & Assumptions

**Given:** The space $V=\mathbb C^{2}$ with orthonormal basis $(e_{+},e_{-})$ and the Pauli matrices $\sigma_{x},\sigma_{y},\sigma_{z}$; unit vectors $a,b\in\mathbb R^{3}$; the completed tensor product $V\widehat\otimes V$ with inclusion $\kappa$; the vectors $\Psi$ and $q$; the labels $\varepsilon,\delta\in\Sigma$; the Axiom of Countable Choice.

[F1] The Pauli matrices satisfy $\sigma_{i}^{*}=\sigma_{i}$, $\sigma_{x}^{2}=\sigma_{y}^{2}=\sigma_{z}^{2}=I$, $\sigma_{x}\sigma_{y}=i\sigma_{z}$, $\sigma_{y}\sigma_{z}=i\sigma_{x}$, $\sigma_{z}\sigma_{x}=i\sigma_{y}$ and consequently $\sigma_{i}\sigma_{j}+\sigma_{j}\sigma_{i}=2\delta_{ij}I$; their actions on the basis are $\sigma_{x}e_{+}=e_{-}$, $\sigma_{x}e_{-}=e_{+}$, $\sigma_{y}e_{+}=ie_{-}$, $\sigma_{y}e_{-}=-ie_{+}$, $\sigma_{z}e_{+}=e_{+}$ and $\sigma_{z}e_{-}=-e_{-}$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e), [[def-matrix-product-and-identity-matrix]]).

[F2] For every $a\in\mathbb R^{3}$ the matrix $\sigma_{a}=\sum_{i}a_{i}\sigma_{i}$ is self-adjoint and $\sigma_{a}^{2}=\sum_{i,j}a_{i}a_{j}\sigma_{i}\sigma_{j}=\sum_{i}a_{i}^{2}I+\sum_{i\ne j}a_{i}a_{j}\sigma_{i}\sigma_{j}=\|a\|^{2}I$ by the anticommutation relations of [F1]; in particular $\sigma_{a}^{2}=I$ for unit $a$, and $\sigma_{a}$ is a linear map $V\to V$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clauses (a), (e), [[def-linear-map]]).

[F3] The completed tensor product $V\widehat\otimes V$ is a complex Hilbert space, $\kappa$ is a linear isometry with dense image, $\langle\kappa(u\otimes v),\kappa(u'\otimes v')\rangle=\langle u,u'\rangle\langle v,v'\rangle$ for all $u,u',v,v'\in V$, and the four elementary tensors $\kappa(e_{\varepsilon}\otimes e_{\delta})$ form an orthonormal basis ([[lem-nrqm-composites-hilbert-tensor-construction]] clauses (b), (c), (d), [[def-inner-product-space]], [[def-real-and-complex-inner-product-space]], [[def-hilbert-space]], [[cor-inner-product-induces-a-norm]]).

[F4] For bounded $S,T$ on $V$ there is a bounded operator $S\otimes T$ on $V\widehat\otimes V$ with $(S\otimes T)\kappa(u\otimes v)=\kappa(Su\otimes Tv)$ for all $u,v\in V$, $(S\otimes T)^{*}=S^{*}\otimes T^{*}$, and the assignment is linear in each argument ([[lem-nrqm-composites-bounded-tensor-maps]] clauses (a), (b), (c)); consequently computations on $\Psi$ may be performed term by term in the orthonormal basis of [F3].

[F5] In a complex inner product space, $|\langle x,y\rangle|\le\|x\|\,\|y\|$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]); the norm is induced by the inner product, $\|z\|=\langle z,z\rangle^{1/2}$ ([[cor-inner-product-induces-a-norm]], [[def-real-and-complex-inner-product-space]]).

## Proof

**Proof technique:** direct; verify the projection algebra from the Pauli anticommutation relations, compute the action of the local and product Pauli operators on the four product-basis vectors, read the pairings off the orthonormal basis, and assemble the joint numbers from the projection decomposition.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Projections] Fix a unit $a$ and $\varepsilon\in\Sigma$. By [F2], $P_{a,\varepsilon}^{*}=\tfrac12(I+\varepsilon\sigma_{a}^{*})=\tfrac12(I+\varepsilon\sigma_{a})=P_{a,\varepsilon}$ and $P_{a,\varepsilon}^{2}=\tfrac14(I+2\varepsilon\sigma_{a}+\varepsilon^{2}\sigma_{a}^{2})=\tfrac14(2I+2\varepsilon\sigma_{a})=\tfrac12(I+\varepsilon\sigma_{a})=P_{a,\varepsilon}$ using $\varepsilon^{2}=1$ and $\sigma_{a}^{2}=I$; hence $P_{a,\varepsilon}$ is an orthogonal projection. Moreover $P_{a,+}+P_{a,-}=I$ and $P_{a,+}P_{a,-}=\tfrac14(I-\sigma_{a}^{2})=0$, which is (a). [given, F2, algebra]

1.2 [Orthonormal basis] By [F3], $\|\Psi\|^{2}=\tfrac12(\|e_{+}\otimes e_{-}\|^{2}+\|e_{-}\otimes e_{+}\|^{2})=1$ and $\|q\|^{2}=1$, and the inner products pair the four displayed vectors as $0$ or $1$: for instance $\langle\Psi,q\rangle=\tfrac12(1-1)=0$ and $\langle\Psi,\kappa(e_{+}\otimes e_{+})\rangle=\tfrac1{\sqrt2}\bigl(\langle e_{+},e_{+}\rangle\langle e_{-},e_{+}\rangle-\langle e_{-},e_{+}\rangle\langle e_{+},e_{+}\rangle\bigr)=0$ by the product formula of [F3]. Since the four elementary tensors already form an orthonormal basis of the four-dimensional space $V\widehat\otimes V$, so do the four mutually orthogonal unit vectors $\Psi,q,\kappa(e_{+}\otimes e_{+}),\kappa(e_{-}\otimes e_{-})$; this is (b). [given, F3, F5, algebra]

2.1 [Local Pauli operators on $\Psi$] Using [F1] and [F4] term by term, $(\sigma_{z}\otimes I)\Psi=\tfrac1{\sqrt2}\bigl(\kappa(e_{+}\otimes e_{-})+\kappa(e_{-}\otimes e_{+})\bigr)=q$ and $(I\otimes\sigma_{z})\Psi=\tfrac1{\sqrt2}\bigl(-\kappa(e_{+}\otimes e_{-})-\kappa(e_{-}\otimes e_{+})\bigr)=-q$; further $(\sigma_{x}\otimes I)\Psi=\tfrac1{\sqrt2}\bigl(\kappa(e_{-}\otimes e_{-})-\kappa(e_{+}\otimes e_{+})\bigr)$, $(I\otimes\sigma_{x})\Psi=\tfrac1{\sqrt2}\bigl(\kappa(e_{+}\otimes e_{+})-\kappa(e_{-}\otimes e_{-})\bigr)$, $(\sigma_{y}\otimes I)\Psi=\tfrac{i}{\sqrt2}\bigl(\kappa(e_{+}\otimes e_{+})+\kappa(e_{-}\otimes e_{-})\bigr)$ and $(I\otimes\sigma_{y})\Psi=\tfrac{-i}{\sqrt2}\bigl(\kappa(e_{+}\otimes e_{+})+\kappa(e_{-}\otimes e_{-})\bigr)$, all of which are linear combinations of the three basis vectors $q,\kappa(e_{+}\otimes e_{+}),\kappa(e_{-}\otimes e_{-})$ orthogonal to $\Psi$ by step 1.2; hence $\langle(\sigma_{i}\otimes I)\Psi,\Psi\rangle=0=\langle(I\otimes\sigma_{i})\Psi,\Psi\rangle$ for $i=x,y,z$, and by the linearity of [F4] in the first tensor argument, $\langle(\sigma_{a}\otimes I)\Psi,\Psi\rangle=0=\langle(I\otimes\sigma_{b})\Psi,\Psi\rangle$ for all $a,b$. [given, F1, F4, step 1.2, algebra]

2.2 [Product Pauli operators on $\Psi$] Term-by-term application of [F1] and [F4] gives $(\sigma_x\otimes\sigma_x)\Psi=(\sigma_y\otimes\sigma_y)\Psi=(\sigma_z\otimes\sigma_z)\Psi=-\Psi$. Put $r_+:=(\kappa(e_+\otimes e_+)+\kappa(e_-\otimes e_-))/\sqrt2$ and $r_-:=(\kappa(e_+\otimes e_+)-\kappa(e_-\otimes e_-))/\sqrt2$. The six mixed products are $(\sigma_x\otimes\sigma_y)\Psi=-iq$, $(\sigma_y\otimes\sigma_x)\Psi=iq$, $(\sigma_x\otimes\sigma_z)\Psi=-r_+$, $(\sigma_z\otimes\sigma_x)\Psi=r_+$, $(\sigma_y\otimes\sigma_z)\Psi=ir_-$ and $(\sigma_z\otimes\sigma_y)\Psi=-ir_-$. Each is orthogonal to $\Psi$ by step 1.2. Thus $\langle(\sigma_i\otimes\sigma_j)\Psi,\Psi\rangle=-\delta_{ij}$ for all $i,j\in\{x,y,z\}$. [given, F1, F4, step 1.2, algebra]

3.1 [Directional correlation] By the linearity of [F4], $(\sigma_{a}\otimes\sigma_{b})\Psi=\sum_{i,j}a_{i}b_{j}(\sigma_{i}\otimes\sigma_{j})\Psi$, so the final identity of step 2.2 and the conjugate-linearity of the inner product in its second argument give $\langle(\sigma_{a}\otimes\sigma_{b})\Psi,\Psi\rangle=\sum_{i,j}a_{i}b_{j}(-\delta_{ij})=-a\cdot b$, with real $a,b$. [step 2.2, F4, algebra]

4.1 [Joint numbers] Let $a,b$ be unit vectors and $\varepsilon,\delta\in\Sigma$. By step 1.1, $P_{a,\varepsilon}=\tfrac12(I+\varepsilon\sigma_{a})$ and $P_{b,\delta}=\tfrac12(I+\delta\sigma_{b})$, so multilinearity of the tensor product [F4] and the bilinearity of the inner product give $\bigl\langle(P_{a,\varepsilon}\otimes P_{b,\delta})\Psi,\Psi\bigr\rangle=\tfrac14\bigl(\langle\Psi,\Psi\rangle+\varepsilon\langle(\sigma_{a}\otimes I)\Psi,\Psi\rangle+\delta\langle(I\otimes\sigma_{b})\Psi,\Psi\rangle+\varepsilon\delta\langle(\sigma_{a}\otimes\sigma_{b})\Psi,\Psi\rangle\bigr)=\tfrac14(1-\varepsilon\delta\,a\cdot b)$ by steps 1.2, 2.1 and 3.1; this is (c). [step 1.1, step 1.2, step 2.1, step 3.1, F4, algebra]

5.1 [Marginals and correlation] Summing the formula of step 4.1 over the distant label and using $\sum_{\delta\in\Sigma}\delta=0$ gives $\sum_{\delta}\bigl\langle(P_{a,\varepsilon}\otimes P_{b,\delta})\Psi,\Psi\bigr\rangle=\tfrac14(2-\varepsilon a\cdot b\cdot0)=\tfrac12$, and symmetrically for the other marginal; the correlation is $\sum_{\varepsilon,\delta}\varepsilon\delta\,\tfrac14(1-\varepsilon\delta a\cdot b)=\tfrac14\bigl((\sum_{\varepsilon}\varepsilon)(\sum_{\delta}\delta)-a\cdot b\sum_{\varepsilon,\delta}(\varepsilon\delta)^{2}\bigr)=\tfrac14(0-4\,a\cdot b)=-a\cdot b$; this is (d). [step 4.1, algebra]

6.1 [Assembly] Step 1.1 is (a), step 1.2 is (b), step 4.1 is (c) and step 5.1 is (d); only the finite-dimensional tensor calculus of [F1]-[F4] and real arithmetic were used, and no physical interpretation is asserted. [step 1.1, step 1.2, step 4.1, step 5.1] ∎

## Remarks

- **Relation to the framework's singlet.** The vector $\Psi$ is the singlet of
  the two-factor spin-half model; its joint numbers (c) are the pairings of the
  local spin projections, and (d) shows that each single-station marginal is
  $\tfrac12$ and that the directional correlation is $-a\cdot b$. The physical
  reading of these numbers as outcome laws of a declared preparation is fixed
  on the page of this pair; this lemma itself is linear algebra.
- **No degenerate directions.** The computation covers every pair of unit
  directions, including $a=b$ (correlation $-1$) and $a=-b$ (correlation
  $+1$) and $a\perp b$ (correlation $0$); the joint numbers are
  $\tfrac14(1\mp\varepsilon\delta)$ in these cases and remain in $[0,1]$.
