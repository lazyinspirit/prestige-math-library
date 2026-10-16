---
id: thm-qc-knill-laflamme-explicit-recovery
kind: theorem
title: An explicit syndrome recovery corrects a Knill–Laflamme error family
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
deps: [cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-qc-kraus-representation, def-qc-quantum-channel, def-qc-quantum-code-isometry-and-code-projector, lem-qc-knill-laflamme-orthogonal-error-basis, lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement, lem-qc-orthogonal-error-syndrome-projectors, prop-adjoint-algebra, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-of-square-roots, thm-qc-isometric-encoding-projector, thm-qc-kraus-map-completely-positive, thm-qc-trace-preserving-kraus-normalization]
provenance:
  statement: literature-derived
  proof: ai-altered
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Statement

Let $V:H_L\to H_P$ be an isometry with $H_L\ne\{0\}$ and $P=VV^*$.
Let $\mathcal N(X)=\sum_{a=1}^m E_aXE_a^*$ be a finite Kraus
representation of a channel from $\mathcal B(H_P)$ to
$\mathcal B(H_O)$. If
$PE_a^*E_bP=C_{ab}P$ for all $a,b$, then there is a finite Kraus recovery
channel $\mathcal R:\mathcal B(H_O)\to\mathcal B(H_L)$ satisfying
$\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V
=\operatorname{id}_{\mathcal B(H_L)}$. It is obtained by diagonalizing $C$,
decoding each nonzero orthogonal error range, and sending the orthogonal
complement to a fixed logical state. For this recovery and every
$X\in\mathcal B(H_L)$, the off-diagonal error action is
$\mathcal R(E_aVX V^*E_b^*)=C_{ba}X$.

## Facts & Assumptions

**Given:** The finite-dimensional code isometry, the finite Kraus channel,
and the displayed scalar-compression condition.

[F1] [[def-qc-quantum-code-isometry-and-code-projector]]: $V$ is an
isometric encoding and $P=VV^*$.

[F2] [[thm-qc-isometric-encoding-projector]]: $V^*V=I_{H_L}$.

[F3] [[def-qc-quantum-channel]] and [[def-qc-kraus-representation]]: channels
are completely positive and trace-preserving, and a finite Kraus family
represents the map on the full operator space.

[F4] [[thm-qc-trace-preserving-kraus-normalization]]: a finite Kraus
representation is trace-preserving exactly when its adjoint-square sum is
the identity.

[F5] [[thm-qc-kraus-map-completely-positive]]: every finite Kraus sum is
completely positive.

[F6] [[lem-qc-knill-laflamme-orthogonal-error-basis]]: after unitary error
mixing, each nonzero restriction is $\sqrt{\lambda_i}W_i$ with
$W_i^*W_j=\delta_{ij}I$; zero-eigenvalue restrictions vanish.

[F7] [[lem-qc-orthogonal-error-syndrome-projectors]]: the ranges of the
$W_i$ have orthogonal projections $P_i=W_iW_i^*$ and
$Q=I-\sum_iP_i$ is the projection onto their orthogonal complement.

[F8] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]:
every finite-dimensional inner-product space has an orthonormal basis,
including its finite-dimensional subspaces.

[F9] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]],
[[thm-adjoint-exists-and-is-unique-in-finite-dimension]], and
[[prop-adjoint-algebra]]: adjoints exist uniquely in finite dimension,
$T^{**}=T$, and $(ST)^*=T^*S^*$.

[F10] [[lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement]]:
if two complex-linear maps agree on all rank-one projectors, they agree on
the whole operator space and after tensoring with the identity on any finite
reference.

## Proof


1.1 Apply [F6] to diagonalize the coefficient matrix and replace the Kraus operators by the unitarily mixed family $F_i$. The operator-sum map remains $\mathcal N$, the positive eigenvalues are $\lambda_i$, and $F_iV=\sqrt{\lambda_i}W_i$ for $\lambda_i>0$, while $F_iV=0$ when $\lambda_i=0$. [given, F1, F6]

1.2 For each $\lambda_i>0$, define $R_i=W_i^*:H_O\to H_L$. Choose a unit vector $\ell_0\in H_L$ and an orthonormal basis $(q_s)$ of $QH_O$ using [F8]; for each basis vector define $T_sx=\langle x,q_s\rangle\ell_0$. These are finite Kraus operators. [F7, F8, construct, choose]

2.1 Trace preservation [F4] and $V^*V=I$ from [F2] give $V^*(\sum_iF_i^*F_i)V=I_{H_L}$. Using step 1.1, the left side is $(\sum_i\lambda_i)I_{H_L}$. Since $H_L$ is nonzero, $\sum_i\lambda_i=1$. [given, F2, F4, step 1.1, algebra]

2.2 By [F9], $R_i^*R_i=W_iW_i^*$. From $T_sx=\langle x,q_s\rangle\ell_0$ and the adjoint definition, $T_s^*y=\langle y,\ell_0\rangle q_s$; hence $T_s^*T_sx=\langle x,q_s\rangle q_s$. Summing over the orthonormal basis of $QH_O$ gives $\sum_sT_s^*T_s=Q$. Therefore $\sum_{\lambda_i>0}R_i^*R_i+\sum_sT_s^*T_s =\sum_{\lambda_i>0}W_iW_i^*+Q=I_{H_O}$ by [F7]. The finite Kraus map is completely positive by [F5] and trace-preserving by [F4], so it is a recovery channel. [F3, F4, F5, F7, F9, step 1.2, algebra]

3.1 For positive $\lambda_j$, $R_iF_jV=\sqrt{\lambda_j}W_i^*W_j =\delta_{ij}\sqrt{\lambda_j}I_{H_L}$; if $\lambda_j=0$ then $F_jV=0$. Also $T_sF_jV=0$ because $QW_j=0$. Hence for every $X\in\mathcal B(H_L)$, $(\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V)(X) =\sum_j\lambda_jX=X$ by step 2.1. [step 1.1, step 2.1, step 1.2, F6, F7, F9, algebra]

4.1 The equality in step 3.1 is equality of linear maps on all operators. Tensoring that equality with the identity on any finite reference gives the same equality there by [F10]. [step 3.1, F10]

5.1 The same recovery Kraus actions in step 3.1 show $\mathcal R(F_iVXV^*F_j^*)=\delta_{ij}\lambda_iX$ for every $X\in\mathcal B(H_L)$; zero-eigenvalue terms vanish because $F_iV=0$. Since $F_i=\sum_aE_aU_{ai}$, unitarity gives $E_a=\sum_iF_i\overline{U_{ai}}$. Therefore $\mathcal R(E_aVXV^*E_b^*)=\sum_i\overline{U_{ai}}U_{bi}\lambda_iX =C_{ba}X$, using $C=U\operatorname{diag}(\lambda_i)U^*$. [step 1.1, step 1.2, step 2.2, step 3.1, F6, F7, F9, algebra] ∎

