---
id: def-qsm-local-matrix-net-completion
kind: definition
title: Quasilocal completion of finite matrix registers
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qc-tensor-register-and-permutation
  - def-linear-map
  - thm-cauchy-schwarz-in-an-inner-product-space
  - lem-qsm-local-hermitian-diagonalization
  - def-c-star-algebra
dependency_roles:
  def-qc-tensor-register-and-permutation: mathematical-premise
  def-linear-map: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  lem-qsm-local-hermitian-diagonalization: mathematical-premise
  def-c-star-algebra: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §§2.1.2–2.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: Maria Shirbisheh, An Introduction to C*-Algebras, §3.1
      url: https://arxiv.org/pdf/1211.3404
verification:
  precheck: n/a
---

## Definition

Fix $q\ge1$ and the ordered registers $V_N=(\mathbb C^q)^{\otimes N}$,
with $V_0=\mathbb C$. Here $\operatorname{End}(V_N)$ is the space of linear
maps $V_N\to V_N$ as in [[def-linear-map]]. For such a map define its
operator norm by $\|A\|:=\sup_{\|x\|=1}\|Ax\|$, using the ordered tensor
inner product of [[def-qc-tensor-register-and-permutation]]. In its ordered
orthonormal product basis define the **adjoint** by
$(A^*)_{ij}=\overline{A_{ji}}$. For the linear-first inner product this gives
$\langle Ax,y\rangle=\langle x,A^*y\rangle$ for all $x,y\in V_N$.
Embed $\mathcal A_N=\operatorname{End}(V_N)$ into
$\mathcal A_{N+1}$ by
$\iota_N(A)=A\otimes I_q$. Write a vector in $V_N\otimes\mathbb C^q$ as
$x=\sum_{j=1}^q x_j\otimes|j\rangle$. Then
$$\|(A\otimes I_q)x\|^2=\sum_{j=1}^q\|Ax_j\|^2 \le\|A\|^2\sum_{j=1}^q\|x_j\|^2=\|A\|^2\|x\|^2.$$
Testing on unit simple tensors $v\otimes|1\rangle$ and taking the supremum
over unit $v$ gives the reverse norm inequality, hence
$\|A\otimes I_q\|=\|A\|$. The embeddings are isometric unital
*-homomorphisms. For $m\ge N$, define
$\iota_{N,m}(A)=A\otimes I_q^{\otimes(m-N)}$ and identify
$A\in\mathcal A_N$ with its image at every larger register. For a two-step
inclusion the maps fit into this commutative diagram:

```tikzcd
\mathcal A_N \arrow[r,"\iota_N"] \arrow[rr,bend right=16,"\iota_{N,N+2}"'] & \mathcal A_{N+1} \arrow[r,"\iota_{N+1}"] & \mathcal A_{N+2}
```

The curved arrow tensors with two identities, and the upper path tensors with
one identity twice; both send $A$ to $A\otimes I_q\otimes I_q$. Let
$\mathcal A_{\rm loc}=\bigcup_{N\ge0}\mathcal A_N$ with the
induced norm, product and adjoint. Define $\mathcal A=\overline{\mathcal
A_{\rm loc}}$ in this norm. This is the
quasilocal matrix algebra for the one-dimensional ordered register chain; it
is a unital C*-algebra with unit the common image of $1\in\mathcal A_0$.

The sequence $(\mathcal A_N,\iota_N)$ is the specified inductive system.
This definition concerns one fixed local matrix size $q$ and makes no claim
about a physical lattice geometry or dynamics.

## Facts & Assumptions

**Given:** $q\ge1$, the ordered finite tensor registers, and their finite
operator norms.

[F1] [[def-qc-tensor-register-and-permutation]]: the ordered product basis
spans each finite tensor register and its inner product is the product
inner product.

[F2] [[def-c-star-algebra]]: a C*-algebra is a complete normed *-algebra
satisfying the C*-identity.

[F3] [[lem-qsm-local-hermitian-diagonalization]]: every finite Hermitian
matrix has an orthonormal eigenbasis with real eigenvalues.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]]: the inner-product
pairing obeys $|\langle u,v\rangle|\le\|u\|\|v\|$.

## Proof

1.1 The decomposition $x=\sum_jx_j\otimes|j\rangle$ is orthogonal in the
product basis [F1], and $A\otimes I_q$ sends each summand to
$Ax_j\otimes|j\rangle$. The displayed sum-of-squares formula follows.
It proves $\|A\otimes I_q\|\le\|A\|$. For every unit $v$,
$\|(A\otimes I_q)(v\otimes|1\rangle)\|=\|Av\|$; taking the supremum
over unit $v$ proves the opposite inequality. Thus $\iota_N$ is isometric.
[given, F1, algebra]

2.1 The conjugate-transpose formula gives
$(\alpha A+\beta B)^*=\overline\alpha A^*+\overline\beta B^*$,
$(A^*)^*=A$ and $(AB)^*=B^*A^*$ by conjugating and reversing the finite
coordinate sums for matrix multiplication. For $A\in\mathcal A_N$, the finite Hermitian matrix $A^*A$ is
nonnegative, since $x^*A^*Ax=\|Ax\|^2\ge0$. By [F3] its eigenvalues are
nonnegative, and in an orthonormal eigenbasis
$$\|A\|^2=\sup_{\|x\|=1}x^*A^*Ax=\max\operatorname{spec}(A^*A)=\|A^*A\|.$$
Indeed, if its eigenvalues are $\lambda_i\ge0$, then
$x^*A^*Ax=\sum_i\lambda_i|x_i|^2$ and
$\|A^*Ax\|^2=\sum_i\lambda_i^2|x_i|^2$. The unit-vector suprema are
$\max_i\lambda_i$ and $(\max_i\lambda_i)^2$, respectively.
Thus every local matrix algebra satisfies the C*-identity. Tensor
multiplication and adjoint give
$(A\otimes I)(B\otimes I)=(AB)\otimes I$ and
$(A\otimes I)^*=A^*\otimes I$, while $I\otimes I$ is the unit. Hence these
maps are unital *-homomorphisms, and their compatible inclusions make the
union operations well-defined. Operator-norm submultiplicativity follows
from $\|ABx\|\le\|A\|\|B\|\|x\|$. By [F4],
$\|z\|=\sup_{\|x\|=1}|\langle z,x\rangle|$, with equality at
$x=z/\|z\|$ when $z\ne0$. The adjoint identity gives
$\|A^*y\|=\sup_{\|x\|=1}|\langle y,Ax\rangle|\le\|A\|\|y\|$;
applying this to $A^*$ proves $\|A^*\|=\|A\|$. Hence the union is a
normed *-algebra satisfying the C*-identity. The norm completion preserves
product, involution and that identity by continuity, and is complete by
construction. By [F2] it is a C*-algebra. [given, F1, F2, F3, F4,
step 1.1, algebra] ∎
