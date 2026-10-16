---
id: lem-qc-clifford-t-determinant-one-approximants
kind: lemma
title: Determinant-one Clifford+T words are dense in SU(2)
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - lem-qc-clifford-t-projective-density
  - lem-qc-clifford-t-determinant-phase
  - def-qc-clifford-t-gate-library
  - def-qc-global-phase-equivalence
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-leibniz-determinant-is-alternating-multilinear-and-normalized
  - thm-determinant-multiplicative
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-parametrize-the-unit-circle
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: "de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
dependency_level: 11
---

## Statement

Let $G$ be the group of exact one-qubit Clifford+T matrix words, and let
$SU(2)=\{U\in U(2):\det U=1\}$. For every $R\in SU(2)$ and every
$\varepsilon>0$, some $W\in G$ satisfies $\det W=1$ and
$\|R-W\|_{\mathrm{op}}<\varepsilon$.

## Facts & Assumptions

**Given:** $U(2)$ is the group of unitary $2\times2$ matrices and
$SU(2)=\{U\in U(2):\det U=1\}$. Equip $\mathbb C^2$ with its standard
inner product, linear in the first argument,
$\langle x,y\rangle=x_1\bar y_1+x_2\bar y_2$, and induced norm. The exact
one-qubit Clifford+T matrices and projective unitary group
$PU(2)=U(2)/\{\lambda I:|\lambda|=1\}$ have quotient metric
$d([A],[B])=\min_{|\lambda|=1}\|A-\lambda B\|_{\mathrm{op}}$, and
$R\in SU(2)$.

[F1] [[lem-qc-clifford-t-projective-density]]: projective classes of finite
words in $H,T$ are dense in $PU(2)$ in operator norm.

[F2] [[lem-qc-clifford-t-determinant-phase]]: every exact one-qubit
Clifford+T word has determinant in $\mu_8=\{\omega^j:j\in\mathbb Z\}$.

[F3] [[def-qc-clifford-t-gate-library]]: $Z=T^4$ and the exact matrices
$H,X,Z$ are the displayed Hadamard and Pauli matrices.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every
finite-dimensional normal complex matrix has an orthonormal eigenbasis.

[F5] [[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]:
the determinant is multilinear in the columns.

[F6] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]:
the operator norm is the maximum norm of the image of a unit vector.

[F7] [[thm-determinant-multiplicative]]: determinants multiply under matrix
products.

[F8] [[thm-sine-and-cosine-parametrize-the-unit-circle]] and
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]:
every unit complex scalar is $e^{i\phi}$ for some real $\phi$, so it has a
unit scalar square root.

[F9] [[def-qc-global-phase-equivalence]]: two matrices represent the same
projective class exactly when they differ by a unit scalar.

## Proof

1.1 By [F7], determinant is a homomorphism on $G$, and [F2] places its image
in the finite group $\mu_8$. Therefore its kernel
$G_1=\{W\in G:\det W=1\}$ has finite index in $G$.
Let $\pi:U(2)\to PU(2)$ be the quotient map. Then $\pi(G_1)$ has finite
index in $\pi(G)$, and [F1] makes $\pi(G)$ dense. Its closure
$\overline{\pi(G_1)}$ is consequently a closed finite-index subgroup of
$PU(2)$: the dense group $\pi(G)$ is a finite union of cosets of
$\pi(G_1)$, so its closure is the same finite union of the corresponding
closed cosets of $\overline{\pi(G_1)}$. Every projective class has an
$SU(2)$ representative: write
$\det Q=e^{i\phi}$ using [F8] and multiply $Q$ by
$\lambda=e^{-i\phi/2}$.
Every $SU(2)$ matrix has eigenvalues $e^{i\alpha},e^{-i\alpha}$; [F4]
diagonalizes it and the path $s\mapsto S\operatorname{diag}(e^{is\alpha},
e^{-is\alpha})S^*$ joins it to $I$. Thus $SU(2)$, and hence its continuous
image $PU(2)$, is connected. The complement of a finite-index closed
subgroup is a finite union of its closed cosets, so that subgroup is also
open. Since $PU(2)$ is connected, its only nonempty clopen subgroup is
$PU(2)$ itself; hence $\overline{\pi(G_1)}=PU(2)$. [F1, F2, F4, F7, F8, F9, given, algebra]

1.2 Choose $\delta>0$ and, by the density just proved, a word $W\in G_1$
and a scalar $|\lambda|=1$ with $\|W-\lambda R\|_{\mathrm{op}}<\delta$.
Write the columns of $W$ and $\lambda R$ as $w_1,w_2$ and $r_1,r_2$.
Multilinearity [F5] gives
$\det W-\det(\lambda R)=\det(w_1-\lambda r_1,w_2)
+\det(\lambda r_1,w_2-\lambda r_2)$. For $x=(x_1,x_2)^T$ and
$y=(y_1,y_2)^T$, expanding both sides gives
$|\det(x,y)|^2=\|x\|^2\|y\|^2-|\langle x,y\rangle|^2
=|x_1|^2|y_2|^2+|x_2|^2|y_1|^2-2\operatorname{Re}(x_1y_2\bar x_2\bar y_1)
\le\|x\|^2\|y\|^2$. Since the columns are unit vectors and each column
difference has norm less than $\delta$ by [F6],
$|1-\lambda^2|\le2\delta$. [F5, F6, step 1.1, algebra]

1.3 Put $a=|\lambda-1|$ and $b=|\lambda+1|$. Then $a^2+b^2=4$ and
$ab=|1-\lambda^2|\le2\delta$. Since $\max(a,b)\ge\sqrt2$ from
$a^2+b^2=4$, we have $\min(a,b)=ab/\max(a,b)\le\sqrt2\,\delta$.
Choose $\sigma\in\{1,-1\}$ attaining this minimum. By the triangle
inequality and $\|R\|_{\mathrm{op}}=1$,
$\|W-\sigma R\|_{\mathrm{op}}< (1+\sqrt2)\delta$. The scalar $-I$ is a
word in $G$: direct multiplication gives
$$X=HZH=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad XZ=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad (XZ)^2=-I.$$
Thus $\sigma W\in G_1$, and
$\|\sigma W-R\|_{\mathrm{op}}=\|W-\sigma R\|_{\mathrm{op}}$ is less than
$(1+\sqrt2)\delta$. Because $\det(-I)=1$ and $\det W=1$, this scalar
correction leaves the determinant equal to $1$. Choosing
$\delta<\varepsilon/(1+\sqrt2)$ proves the claim. [F3, F6, step 1.2,
algebra, choose] ∎

## Unresolved supplier checks

The current QC12 projective-density proof and its Pauli-axis suppliers were
inspected. The normalized lifts $iH$ and $e^{-i\pi/8}T$ are used only to prove
projective density; their scalar phases are not discarded under control. The
interfaces match this proof. Supplier drafts remain unapproved by this author.

