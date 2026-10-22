---
id: ex-nrqmx-pauli-tomography
kind: example
title: "Pauli six-outcome tomography"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - thm-nrqmx-tomography-identifiability-stability
  - lem-nrqmx-frame-pseudoinverse-reconstruction
  - def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse
dependency_roles:
  thm-nrqmx-tomography-identifiability-stability: mathematical-premise
  lem-nrqmx-frame-pseudoinverse-reconstruction: mathematical-premise
  def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Xhek Turkeshi and Markus Heinrich, Quantum Information Methods for Many-Body Physics, §3.1"
      url: "https://www.quantum-randomness.com/teaching_files/qinfo_for_mbp/lecture_notes6.pdf"
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §2.1.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
---

## Example

On $\mathbb C^2$, define the Pauli matrices
$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad \sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad \sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$
The six effects $F_{j,\pm}=(I\pm\sigma_j)/6$, with $j\in\{x,y,z\}$, form an informationally complete POVM. For every qubit density matrix $\rho=(I+r_x\sigma_x+r_y\sigma_y+r_z\sigma_z)/2$, the exact outcome probabilities satisfy $r_j=3(p_{j,+}-p_{j,-})$ and the canonical linear-inversion procedure returns $\rho$. A valid finite frequency vector can instead yield a nonpositive output.

## Example references

[[thm-nrqmx-tomography-identifiability-stability]]

[[lem-nrqmx-frame-pseudoinverse-reconstruction]]

[[def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse]]

## Facts & Assumptions

**Given:** The six displayed matrices and a density matrix $\rho$ on $\mathbb C^2$.

[A1] The Pauli matrices and effects are the finite matrices and operators in the Example.

[A2] $\rho$ is Hermitian, positive semidefinite, and has trace one.

[F1] [[thm-nrqmx-tomography-identifiability-stability]]: for a spanning finite POVM, exact probabilities reconstruct $\rho$, and the linear-inversion output is $\sum_af_aD_a$ for its canonical dual.

[F2] [[lem-nrqmx-frame-pseudoinverse-reconstruction]]: for a positive semidefinite Gram matrix with spectral projections $P_\lambda$ at positive eigenvalues, $G^+=\sum_{\lambda>0}\lambda^{-1}P_\lambda$.

[F3] [[def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse]]: $G_{ab}=\operatorname{Tr}(F_aF_b)$ and $D_a=\sum_b(G^+)_{ba}F_b$.

## Verification

1.1 Direct multiplication gives $\sigma_j^2=I$, $\operatorname{Tr}(\sigma_j)=0$, $\sigma_x\sigma_y=i\sigma_z$, $\sigma_y\sigma_z=i\sigma_x$, and $\sigma_z\sigma_x=i\sigma_y$; reversing the order negates each mixed product. Thus $\operatorname{Tr}(\sigma_j\sigma_k)=2\delta_{jk}$. Since a Hermitian $2\times2$ matrix has two real diagonal entries and one complex off-diagonal entry, $\dim_{\mathbb R}\mathsf H_2=4$; the four nonzero orthogonal matrices $I,\sigma_x,\sigma_y,\sigma_z$ form a basis. Every trace-one Hermitian $\rho$ therefore has the stated form with $r_j=\operatorname{Tr}(\rho\sigma_j)\in\mathbb R$. Positivity [A2] restricts $|r|\le1$, since $(r_x\sigma_x+r_y\sigma_y+r_z\sigma_z)^2=|r|^2I$ and the eigenvalues of $\rho$ are $(1\pm|r|)/2$. [A1, A2, algebra]

1.2 Each $\sigma_j$ is Hermitian with eigenvalues $1,-1$ by step 1.1, so $F_{j,\pm}$ has eigenvalues $1/3,0$ and is positive. For each $j$, $F_{j,+}+F_{j,-}=I/3$; summing over $x,y,z$ gives $I$. Also $F_{j,+}-F_{j,-}=\sigma_j/3$, so each $\sigma_j$ lies in the real span of the effects. Since $I$ is their sum, the basis in step 1.1 shows that the effects span $\mathsf H_2$. [A1, step 1.1, algebra]

2.1 In the coordinate order $(x+,x-,y+,y-,z+,z-)$, direct multiplication and step 1.1 give $G_{(j,s),(k,t)}=\frac1{36}\operatorname{Tr}((I+s\sigma_j)(I+t\sigma_k))=\frac1{18}(1+st\,\delta_{jk})$ for $s,t\in\{+1,-1\}$. Thus the diagonal entries are $1/9$, opposite outcomes on one axis have entry $0$, and distinct axes have entry $1/18$. Let $u=(1,1,1,1,1,1)$ and $v_j=e_{j+}-e_{j-}$. Then $Gu=u/3$, $Gv_j=v_j/9$, and $G$ vanishes on vectors $(s_x,s_x,s_y,s_y,s_z,s_z)$ with $s_x+s_y+s_z=0$. These mutually orthogonal subspaces have dimensions $1,3,2$ and span $\mathbb R^6$. [A1, step 1.1, step 1.2, algebra]

2.2 By [F2] and the eigenspaces in step 2.1, $G^+=3P_u+9\sum_jP_{v_j}$, where $P_u=uu^\mathsf T/6$ and $P_{v_j}=v_jv_j^\mathsf T/2$. The $e_{j+}$ column of $G^+$ is $u/2+9v_j/2$. Applying the canonical-dual formula [F3], using $\sum_{k,\pm}F_{k,\pm}=I$ and $F_{j,+}-F_{j,-}=\sigma_j/3$, gives $D_{j,+}=\frac12I+\frac32\sigma_j$; similarly $D_{j,-}=\frac12I-\frac32\sigma_j$. The probabilities are $p_{j,\pm}=\operatorname{Tr}(\rho F_{j,\pm})=(1\pm r_j)/6$, so $\sum_{j,\pm}p_{j,\pm}D_{j,\pm}=\frac12I+\frac12\sum_jr_j\sigma_j=\rho$, in agreement with [F1]. [A1, A2, F1, F2, F3, step 1.1, step 1.2, step 2.1, algebra]

3.1 The frequency vector with $f_{x,+}=1$ and all other entries zero is nonnegative and sums to one. Its output is $D_{x,+}=\frac12I+\frac32\sigma_x$, whose eigenvalues are $2$ and $-1$. It is Hermitian but not positive, so the linear-inversion procedure does not preserve positivity for every frequency vector. [A1, step 2.2, algebra] ∎
