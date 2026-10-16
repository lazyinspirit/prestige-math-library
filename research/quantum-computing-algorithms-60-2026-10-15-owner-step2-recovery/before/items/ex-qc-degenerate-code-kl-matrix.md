---
id: ex-qc-degenerate-code-kl-matrix
kind: example
title: A degenerate code with a non-diagonal Knill–Laflamme matrix
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-qc-kraus-representation, def-qc-quantum-channel, def-qc-quantum-code-isometry-and-code-projector, def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation, prop-adjoint-algebra, thm-qc-kraus-map-completely-positive, thm-qc-knill-laflamme-explicit-recovery, thm-qc-trace-preserving-kraus-normalization]
provenance:
  statement: ai-generated
  proof: ai-generated
aliases: []
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Example

Take $H_L=\mathbb C^2$, $H_P=\mathbb C^2\otimes\mathbb C^2$, with
standard basis columns $e_0=(1,0)^T$ and $e_1=(0,1)^T$, and define
$V\psi=e_0\otimes\psi$ and $W\psi=e_1\otimes\psi$. Put
$P_0=e_0e_0^*=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and
$P_1=e_1e_1^*=\begin{pmatrix}0&0\\0&1\end{pmatrix}$. On the first factor use
$X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and
$Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. Define a channel with Kraus
operators

$$E_1=\frac{I_4}{\sqrt3},\qquad E_2=\frac{X\otimes I_2}{\sqrt3},\qquad E_3=\frac{Z\otimes I_2}{\sqrt3}.$$

The code stores the logical qubit in the second factor. The errors $E_1$
and $E_3$ have the same restriction to the code, while $E_2$ moves the code
to the orthogonal first-factor subspace.

## Facts & Assumptions

**Given:** The finite-dimensional encoding and the three explicitly
displayed error operators in the Example.

[F1] [[def-qc-quantum-code-isometry-and-code-projector]] supplies the
isometric encoding and code-projector convention.

[F2] [[def-qc-quantum-channel]], [[def-qc-kraus-representation]], and
[[thm-qc-trace-preserving-kraus-normalization]] specify finite Kraus
channels and their trace-preserving normalization.

[F3] [[thm-qc-knill-laflamme-explicit-recovery]]: the displayed recovery
construction corrects every finite family satisfying the scalar-compression
condition.

[F4] [[thm-qc-kraus-map-completely-positive]]: a finite Kraus sum is
completely positive.

[F5] [[thm-qc-trace-preserving-kraus-normalization]]: the adjoint-square sum
of a trace-preserving Kraus family is the identity.

## Verification

1.1 Each of $I_4$, $X\otimes I_2$, and $Z\otimes I_2$ is unitary. Hence
$\sum_{a=1}^3E_a^*E_a=\frac13(I_4+I_4+I_4)=I_4$, so the displayed Kraus
map is trace-preserving; it is completely positive because it is a finite
Kraus sum.
[given, F2, F4, F5, algebra]

1.2 With $P=VV^*$, direct compression gives
$$(V^*E_a^*E_bV)_{a,b} =\frac13\begin{pmatrix}1&0&1\\0&1&0\\1&0&1\end{pmatrix} =C.$$
Since $P=VV^*$, this is equivalently
$PE_a^*E_bP=C_{ab}P$ for every $a,b$. In particular, $C$ is non-diagonal
and has rank $2$.
[given, F1, step 1.1, algebra]

2.1 The orthonormal eigenvectors
$u_+=(1,0,1)/\sqrt2$, $u_2=(0,1,0)$, and
$u_0=(1,0,-1)/\sqrt2$ have eigenvalues $2/3,1/3,0$, respectively.
The corresponding mixed Kraus operators are
$F_+=(I_4+Z\otimes I_2)/\sqrt6=\sqrt{2/3}(P_0\otimes I_2)$,
$F_2=E_2$, and
$F_0=(I_4-Z\otimes I_2)/\sqrt6=\sqrt{2/3}(P_1\otimes I_2)$. The columns
$u_+,u_2,u_0$ form a unitary matrix, so expanding the Kraus sum gives
$\sum_iF_iYF_i^*=\sum_aE_aYE_a^*$ for every operator $Y$.
[step 1.2, algebra]

2.2 By the definition of $W$, one has
$F_+V=\sqrt{2/3}V$, $F_2V=\sqrt{1/3}W$, and $F_0V=0$.
The restrictions $V,W$ are isometries with orthogonal ranges, so the
positive-eigenvalue error basis has exactly two syndromes; the zero
eigenvalue error annihilates the code.
[step 2.1, algebra]

3.1 Define recovery Kraus operators $R_+=V^*$ and $R_2=W^*$. Their
adjoint products are $VV^*=P_0\otimes I_2$ and
$WW^*=P_1\otimes I_2$, so $R_+^*R_++R_2^*R_2=I_4$ and the recovery is
trace-preserving.
[step 2.2, algebra]

3.2 For the mixed errors,
$R_+F_+V=\sqrt{2/3}I_L$ and
$R_2F_2V=\sqrt{1/3}I_L$; all other products $R_iF_jV$ vanish. Thus for
every $X\in\mathcal B(H_L)$ the corrected channel returns
$(2/3+1/3)X=X$. The unitary Kraus change preserves the original channel,
so this recovery corrects the displayed three-error channel, including its
degeneracy; this is the recovery construction in [F1].
[step 1.2, step 2.1, step 3.1, F1, F3, F5, algebra] ∎
