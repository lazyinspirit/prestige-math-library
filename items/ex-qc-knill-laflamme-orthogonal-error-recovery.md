---
id: ex-qc-knill-laflamme-orthogonal-error-recovery
kind: example
title: Orthogonal error spaces and a recovery branch
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-qc-kraus-representation, def-qc-quantum-channel, def-qc-quantum-code-isometry-and-code-projector, def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation, prop-adjoint-algebra, thm-qc-knill-laflamme-explicit-recovery, thm-qc-kraus-map-completely-positive, thm-qc-trace-preserving-kraus-normalization]
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

Let $H_L=\mathbb C^2$, $H_P=\mathbb C^2\otimes\mathbb C^2$, with standard
basis columns $e_0=(1,0)^T$ and $e_1=(0,1)^T$, define
$P_0=e_0e_0^*=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and
$P_1=e_1e_1^*=\begin{pmatrix}0&0\\0&1\end{pmatrix}$, as well as
$V\psi=e_0\otimes\psi$ and $W\psi=e_1\otimes\psi$. For
$X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, define
$E_0=I_4/\sqrt2$ and $E_1=(X\otimes I_2)/\sqrt2$. The channel has two
orthogonal error restrictions and a diagonal Knill–Laflamme matrix.

## Facts & Assumptions

**Given:** The finite-dimensional encoding and the two displayed error
operators in the Example.

[F1] [[def-qc-quantum-code-isometry-and-code-projector]] supplies the
isometric encoding and projector convention.

[F2] [[def-qc-quantum-channel]], [[def-qc-kraus-representation]],
[[thm-qc-kraus-map-completely-positive]], and
[[thm-qc-trace-preserving-kraus-normalization]] supply the finite channel,
Kraus, complete-positivity, and normalization rules.

[F3] [[thm-qc-knill-laflamme-explicit-recovery]]: orthogonal normalized
error restrictions admit a CPTP recovery by projection and inverse decoding.

## Verification


1.1 Both $I_4$ and $X\otimes I_2$ are unitary, so $E_0^*E_0+E_1^*E_1=I_4$. The map $\mathcal N(Y)=E_0YE_0^*+E_1YE_1^*$ is therefore a channel. [given, F2, algebra]

2.1 By the definitions of $V$ and $W$, $W^*V=0$, $V^*V=W^*W=I_L$, and $$(V^*E_a^*E_bV)_{a,b} =\begin{pmatrix}I_L/2&0\\0&I_L/2\end{pmatrix}.$$ The normalized error restrictions are $V$ and $W$, so their ranges are orthogonal and each syndrome has weight $1/2$. [given, F1, step 1.1, algebra]

3.1 Define recovery Kraus operators $R_0=V^*$ and $R_1=W^*$. Then $R_0^*R_0+R_1^*R_1=VV^*+WW^*=I_4$, so the recovery is trace-preserving. [step 2.1, algebra]

4.1 The only nonzero corrected error products are $R_0E_0V=I_L/\sqrt2$ and $R_1E_1V=I_L/\sqrt2$. Hence for every $Y\in\mathcal B(H_L)$ the corrected channel returns $\frac12Y+\frac12Y=Y$. This is the orthogonal-syndrome branch of [F3]. [step 2.1, step 3.1, F1, F3, algebra] ∎

