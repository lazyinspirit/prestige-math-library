---
id: thm-qc-two-qubit-cartan-decomposition
kind: theorem
title: Exact Two-Qubit Cartan Decomposition
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps:
  - thm-qc-one-qubit-euler-decomposition
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-pauli-matrices
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-polar-form-with-unique-principal-argument
  - def-determinant-of-a-square-matrix
  - thm-determinant-multiplicative
  - thm-determinant-of-transpose
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Farrokh Vatan and Colin Williams, Optimal quantum circuits for general two-qubit gates, arXiv:quant-ph/0308006v2"
      url: "https://arxiv.org/pdf/quant-ph/0308006"
    - title: "Vivek V. Shende, Igor L. Markov, and Stephen S. Bullock, Minimal Universal Two-Qubit CNOT-Based Circuits, arXiv:quant-ph/0308033v3"
      url: "https://arxiv.org/pdf/quant-ph/0308033"
---

## Statement

For every $U\in U(4)$ there are $A,B,C,D\in SU(2)$, real $a,b,c,\delta$, and the matrices
$$X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$$
such that
$$U=e^{i\delta}(A\otimes B)\exp\!\bigl(i(aX\otimes X+bY\otimes Y+cZ\otimes Z)\bigr)(C\otimes D).$$
The equality is exact; the scalar $e^{i\delta}$ is displayed.

## Facts & Assumptions

**Given:** $U$ is a $4\times4$ unitary, and the Pauli matrices and magic-basis vectors below are in the stated order.

[F1] [[thm-qc-one-qubit-euler-decomposition]]: every $SU(2)$ unitary is exactly $R_z(\alpha)R_y(\theta)R_z(\beta)$ for real angles in the QC7 convention.

[F2] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric matrix has an orthonormal eigenbasis; commuting real symmetric matrices can be simultaneously diagonalized by first restricting one to the eigenspaces of the other.

[F3] [[thm-polar-form-with-unique-principal-argument]]: every unit complex number is $e^{it}$ for some real $t$, and every unit complex number has a unit-modulus square root.

[F4] [[def-qc-pauli-matrices]]: $X=\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$, $Y=\left(\begin{smallmatrix}0&-i\\i&0\end{smallmatrix}\right)$, and $Z=\left(\begin{smallmatrix}1&0\\0&-1\end{smallmatrix}\right)$.

[F5] [[def-determinant-of-a-square-matrix]]: determinant is the alternating permutation sum; conjugating every matrix entry conjugates the value of that sum.

[F6] [[thm-determinant-multiplicative]]: $\det(AB)=\det(A)\det(B)$.

[F7] [[thm-determinant-of-transpose]]: $\det(A^{\mathsf T})=\det(A)$.

## Proof



1.1 By [F5] and [F7], $\det(U^*)=\det(\overline U^{\mathsf T})=\det(\overline U)=\overline{\det U}$. Then [F6] and $U^*U=I$ give $|\det U|^2=\det(U^*U)=1$. Choose $\delta$ with $\det U=e^{4i\delta}$ and put $W=e^{-i\delta}U$; applying the permutation formula to a scalar multiple of a $4\times4$ matrix gives $\det W=e^{-4i\delta}\det U=1$, so $W\in SU(4)$. Use the magic basis $e_1=(|00\rangle+|11\rangle)/\sqrt2,\ e_2=i(|00\rangle-|11\rangle)/\sqrt2,\ e_3=i(|01\rangle+|10\rangle)/\sqrt2,\ e_4=(|01\rangle-|10\rangle)/\sqrt2,$ and let $Q$ have these columns. Direct inner products show each vector has norm one and distinct vectors are orthogonal, so $Q$ is unitary. Then $\widehat W=Q^*WQ$ is unitary with determinant one. The matrix $S=\widehat W^T\widehat W$ is symmetric; since $S^*=\overline S$ and $\widehat W$ is unitary, $S^*S=I$, so $S$ is unitary. [given, F3, F5, F6, F7, choose, algebra]

2.1 Direct calculation from the definition of $S$ gives $S^T=S$ and $S^*S=I$. Write $S=P+iR$ with $P,R$ real symmetric. From $S\overline S=I$ we obtain $P^2+R^2=I$ and $PR=RP$. By [F2] choose a real orthogonal $O$ simultaneously diagonalizing $P,R$, so $O^TSO=\operatorname{diag}(\zeta_j)$ with $|\zeta_j|=1$. If $\det O=-1$, change the sign of one column; the diagonalization is unchanged and now $O\in SO(4)$. Choose unit square roots $d_j$ of each $\zeta_j$. By [F6]–[F7] and $\det\widehat W=1$, $\det S=\det(\widehat W^T)\det(\widehat W)=1$, so $\prod_jd_j$ is either $1$ or $-1$; if it is $-1$, change the sign of one root. Then $D_0=\operatorname{diag}(d_j)$ and $K=OD_0O^T$ satisfy $K^T=K$, $K^2=S$, and $\det K=1$. [step 1.1, F2, F3, F6, F7, choose, algebra]

3.1 Put $R_0=\widehat W K^{-1}$. It is unitary and $R_0^TR_0=K^{-1}\widehat W^T\widehat W K^{-1}=K^{-1}SK^{-1}=I.$ Thus $R_0^T=R_0^*$, which entrywise says $R_0$ is real. Also $\det R_0=1$, so $R_0\in SO(4)$, and $\widehat W=R_0OD_0O^T$. [step 2.1, algebra]

4.1 Direct multiplication gives $X^2=Y^2=Z^2=I_2$, and the matrices in [F4] are traceless and Hermitian. In the magic basis let $J_{ij}$ be the real skew-symmetric generator with $J_{ij}e_i=e_j$, $J_{ij}e_j=-e_i$, and zero on the other basis vectors. Direct action on the four displayed vectors gives the six local generators $iX\otimes I\mapsto J_{13}+J_{24},\quad iY\otimes I\mapsto J_{14}-J_{23},\quad iZ\otimes I\mapsto J_{12}-J_{34},$ $I\otimes iX\mapsto J_{13}-J_{24},\quad I\otimes iY\mapsto -J_{14}-J_{23},\quad I\otimes iZ\mapsto J_{12}+J_{34}.$ These are a basis of the six-dimensional real space $\mathfrak{so}(4)$ of skew-symmetric matrices. Thus every $J_{ij}$ is the magic-basis image of some real linear combination $A\otimes I+I\otimes B$ of local generators, where $A,B$ are traceless skew-Hermitian $2\times2$ matrices. The two summands commute, so its exponential is $e^A\otimes e^B$. A traceless skew-Hermitian $2\times2$ matrix has eigenvalues $ir,-ir$ for some real $r$, so $e^A,e^B\in SU(2)$. Hence each plane rotation $e^{tJ_{ij}}$ is a local image. Conversely, [F1] expresses every local $SU(2)$ factor as a product of $R_z$ and $R_y$ rotations; their magic-basis images are exponentials of the displayed real skew generators and hence real orthogonal. Finally, Givens elimination writes every $R\in SO(4)$ as a finite product of plane rotations: for a unit first column, successively rotate coordinate pairs to zero its last three entries and make the first entry $1$; orthogonality then leaves a lower-right $SO(3)$ block, to which the same procedure applies recursively. Therefore the local image is all of $SO(4)$, and in particular $R_0O$ and $O^T$ are local images. [given, F1, F4, step 3.1, algebra]

5.1 In the same basis, direct action of the Pauli products gives the diagonal sign lists $(+,-,+,-)$, $(-,+,+,-)$, and $(+,+,-,-)$ for $X\otimes X$, $Y\otimes Y$, and $Z\otimes Z$, respectively. These mutually orthogonal trace-zero lists form a basis of the three-dimensional real trace-zero diagonal subspace. Since $D_0$ is diagonal unitary with determinant one, choose arguments for its four diagonal entries; their sum is a multiple of $2\pi$, so adjusting one argument by that multiple gives phases summing exactly to zero. Therefore those phases are a real linear combination of the three sign lists, and $D_0=\exp(i(aX\otimes X+bY\otimes Y+cZ\otimes Z))$ in the magic basis. Conjugating $\widehat W=R_0OD_0O^T$ back by $Q$, using the local representations from step 4.1, and restoring $e^{i\delta}$ gives the stated exact factorization. [step 2.1, step 3.1, step 4.1, F4, algebra] ∎
