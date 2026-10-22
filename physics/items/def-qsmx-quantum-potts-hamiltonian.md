---
id: def-qsmx-quantum-potts-hamiltonian
kind: definition
domain: mathematics
library: physics
title: "Finite Hermitian Potts-clock chain"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-potts-open-chain-clock-shift-representation
  - lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb
  - def-inner-product-space
  - def-self-adjoint-and-normal-endomorphism
  - def-orthogonal-projection
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - cor-exponential-reciprocal-and-positivity
  - def-trace-of-an-endomorphism
dependency_roles:
  def-potts-open-chain-clock-shift-representation: mathematical-premise
  lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-orthogonal-projection: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
justified_by:
  - lem-qsmx-potts-finite-gibbs-density
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb algebra and its generalizations in the Potts and XXZ models, §2"
      url: https://arxiv.org/pdf/hep-th/0509069
      locator: "§2.1.2–2.1.4, equations (2.4), (2.6)–(2.10), PDF pp. 4–6: the open-chain Q=2,3,4 Potts generators, q values, and Hamiltonian convention."
    - title: "D. Arovas, Thermodynamics and Statistical Mechanics, §7.4 Variational Density Matrix Method"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method
      locator: "§7.4, The variational principle, lines 1352–1379: finite Boltzmann weights, partition function, and density-matrix normalization."
---

## Definition

Let $Q\in\{2,3,4\}$ and let $L\geq1$ be an integer. The finite Potts-clock space is
$$\mathcal H_{Q,L}:=(\mathbb C^Q)^{\otimes L}$$
of dimension $Q^L$, with the tensor-product Hermitian inner product taken linear in its first argument and computational orthonormal basis
$$|a_1,\ldots,a_L\rangle:=|a_1\rangle\otimes\cdots\otimes|a_L\rangle,\qquad a_j\in\{0,\ldots,Q-1\}.$$
On $\mathbb C^Q$, this inner product is $\langle x,y\rangle=\sum_{a=0}^{Q-1}x_a\overline{y_a}$, and on elementary tensors it is $\langle u_1\otimes\cdots\otimes u_L,v_1\otimes\cdots\otimes v_L\rangle=\prod_{j=1}^L\langle u_j,v_j\rangle$.
For a unit vector $u$, the notation $|u\rangle\langle u|$ denotes the endomorphism $v\mapsto\langle v,u\rangle u$. On one site use the clock and shift convention
$$R_Q|a\rangle=e^{2\pi i a/Q}|a\rangle,\qquad M_Q|a\rangle=|a-1\!\!\pmod Q\rangle.$$
Set $|+\rangle:=Q^{-1/2}\sum_{a=0}^{Q-1}|a\rangle$. For $1\leq j\leq L$, let $P_j$ be $|+\rangle\langle+|$ on factor $j$ and identity on every other factor. For $1\leq j<L$, let
$$D_{j,j+1}:=\sum_{a=0}^{Q-1}|aa\rangle\langle aa|$$
act on factors $j,j+1$ and as identity on the others. The open-chain local operators are
$$e_{2j-1}:=\sqrt Q\,P_j\quad(1\leq j\leq L),\qquad e_{2j}:=\sqrt Q\,D_{j,j+1}\quad(1\leq j<L).$$
Equivalently, these are the exact clock-shift operators of the open Potts representation: $e_{2j-1}=Q^{-1/2}\sum_{r=0}^{Q-1}M_{Q,j}^{\,r}$ and $e_{2j}=Q^{-1/2}\sum_{r=0}^{Q-1}R_{Q,j}^{\,r}R_{Q,j+1}^{-r}$. Thus there are $2L-1$ operators and no bond from site $L$ back to site $1$.

For real coefficients $J_1,\ldots,J_{2L-1}$, define the weighted open-chain matrix
$$H_{Q,L}(\mathbf J):=-\sum_{i=1}^{2L-1}J_i e_i.$$
It is an endomorphism of $\mathcal H_{Q,L}$. For an endomorphism $T$ of this inner-product space, $T^*$ is its adjoint, characterized by $\langle Tv,w\rangle=\langle v,T^*w\rangle$; $T$ is self-adjoint (Hermitian) exactly when $T=T^*$. An endomorphism is normal exactly when $TT^*=T^*T$, so every self-adjoint endomorphism is normal. For a subspace $W\subseteq\mathcal H_{Q,L}$, the orthogonal projection onto $W$ sends $w+z$ to $w$ in the unique decomposition $\mathcal H_{Q,L}=W\oplus W^\perp$, with $w\in W$ and $z\in W^\perp$. Viewed as an endomorphism, it satisfies $\Pi_W^2=\Pi_W=\Pi_W^*$; the adjoint identity follows from the orthogonality of the two summands. A self-adjoint endomorphism $A$ is positive definite if $\langle Av,v\rangle>0$ for every nonzero $v$, and is positive semidefinite exactly when $\langle Av,v\rangle\geq0$ for every $v$; these quadratic forms are real because $A=A^*$. The trace $\operatorname{tr}(T)$ of a finite-dimensional endomorphism is the basis-independent sum of diagonal entries of its matrix.

For self-adjoint $H_{Q,L}$ and real $\beta$, a scalar $\lambda$ is an eigenvalue of $H_{Q,L}$ when $\ker(H_{Q,L}-\lambda I)\ne\{0\}$, and this kernel is its eigenspace. Let $\Lambda(H_{Q,L})$ be the finite set of distinct eigenvalues. Every $\lambda\in\Lambda(H_{Q,L})$ is real: for a unit eigenvector $v$, $\lambda=\langle H_{Q,L}v,v\rangle=\langle v,H_{Q,L}v\rangle=\overline\lambda$. Let $\Pi_\lambda$ be the orthogonal projection onto the $\lambda$-eigenspace as defined above. A self-adjoint endomorphism is normal, and every normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis; therefore $\sum_{\lambda\in\Lambda(H_{Q,L})}\Pi_\lambda=I$. Define
$$B_\beta(H_{Q,L}):=\sum_{\lambda\in\Lambda(H_{Q,L})}e^{-\beta\lambda}\Pi_\lambda,\qquad Z_\beta:=\operatorname{tr}B_\beta(H_{Q,L}),\qquad \rho_\beta:=Z_\beta^{-1}B_\beta(H_{Q,L})$$
whenever $Z_\beta>0$. Here a density matrix means a self-adjoint positive semidefinite endomorphism of trace one. The A-page Gibbs lemma establishes that the displayed $H_{Q,L}$ is self-adjoint and that $Z_\beta>0$ for every finite real $\beta$.

## Definition references

[[def-potts-open-chain-clock-shift-representation]]

[[lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb]]

[[def-inner-product-space]]

[[def-self-adjoint-and-normal-endomorphism]]

[[def-orthogonal-projection]]

[[thm-complex-spectral-theorem-for-normal-endomorphisms]]

[[cor-exponential-reciprocal-and-positivity]]

[[def-trace-of-an-endomorphism]]

