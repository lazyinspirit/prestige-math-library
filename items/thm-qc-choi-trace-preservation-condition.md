---
id: thm-qc-choi-trace-preservation-condition
kind: theorem
title: "The Choi partial trace characterizes trace preservation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, def-trace-of-an-endomorphism, def-dimension, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-coordinate-column-and-matrix-of-a-linear-map, def-matrix-product-and-identity-matrix, thm-matrix-of-the-adjoint-is-the-conjugate-transpose, def-qc-completely-positive-map, def-qc-choi-matrix, def-qc-partial-trace, lem-qc-tensor-product-basis-and-dimension, thm-qc-partial-trace-characterization-and-basis-independence, thm-qc-kraus-choi-equivalence, thm-qc-trace-preserving-kraus-normalization]
justified_by: []
proof_strategy: direct
dependency_level: 7
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Theorem 2.26 and Corollary 2.27"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §§3.2.6 and 3.3.1"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces, fix an ordered
orthonormal basis $\mathcal B=(e_i)_{i<n}$ of $H$, and let
$\Phi:\mathcal L(H)\to\mathcal L(K)$ be completely positive. Then
$\operatorname{tr}_K(\Phi(X))=\operatorname{tr}_H(X)$ for every
$X\in\mathcal L(H)$ if and only if
$$\operatorname{Tr}_K J_{\mathcal B}(\Phi)=I_H,$$
where $\operatorname{Tr}_K$ is the partial trace over the output factor in the
input-first/output-second Choi convention.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K$, an ordered
orthonormal input basis $\mathcal B=(e_i)_{i<n}$, and a completely positive
complex-linear map $\Phi:\mathcal L(H)\to\mathcal L(K)$.

[F1] [[thm-qc-kraus-choi-equivalence]]: complete positivity gives a finite
Kraus representation of $\Phi$.

[F2] [[thm-qc-trace-preserving-kraus-normalization]]: for such a Kraus
representation, trace preservation on every input is equivalent to
$S:=\sum_aK_a^\dagger K_a=I_H$.

[F3] [[def-qc-choi-matrix]]: $J_{\mathcal B}(\Phi)=
\sum_{i,j<n}E_{ij}\otimes\Phi(E_{ij})$, with input factor first and
$E_{ij}x=\langle x,e_j\rangle e_i$.

[F4] [[def-qc-partial-trace]] and
[[thm-qc-partial-trace-characterization-and-basis-independence]]: the partial
trace over $K$ is basis-independent and in a product orthonormal basis its
$(i,j)$ entry is $\sum_\alpha R_{(i,\alpha),(j,\alpha)}$.

[F5] [[def-coordinate-column-and-matrix-of-a-linear-map]] and
[[def-matrix-product-and-identity-matrix]]: matrix entries are the
coefficients on basis vectors, and the identity has entries $\delta_{ij}$.

[F6] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]:
finite-dimensional $K$ admits an ordered orthonormal basis, including the
empty basis when $K=0$.

[F7] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: in the chosen
orthonormal bases, $[K_a^\dagger]=[K_a]^\dagger$.

## Proof


1.1 By [F1], choose a finite Kraus family $(K_a)$ for $\Phi$, and put $S=\sum_aK_a^\dagger K_a$. Choose an ordered orthonormal basis $(f_\alpha)_{\alpha<m}$ of $K$. The $(i,\alpha),(j,\beta)$ entry of [F3] is the $(\alpha,\beta)$ entry of $\Phi(E_{ij})$, which by the Kraus formula is $\sum_a(K_a)_{\alpha i}\overline{(K_a)_{\beta j}}$ using the adjoint matrix formula. Taking the partial trace in [F4] therefore gives $(\operatorname{Tr}_KJ_{\mathcal B}(\Phi))_{ij} =\sum_{\alpha,a}(K_a)_{\alpha i}\overline{(K_a)_{\alpha j}} =S_{ji}$. Thus $\operatorname{Tr}_KJ_{\mathcal B}(\Phi)=\sum_{i,j<n}S_{ji}E_{ij}$. If $\Phi$ is trace-preserving on all input operators, [F2] gives $S=I_H$; then $S_{ji}=\delta_{ji}=\delta_{ij}$ and the partial trace equals $\sum_iE_{ii}=I_H$. [given, F1, F2, F3, F4, F5, F6, F7, choose, algebra]

2.1 Conversely, suppose $\operatorname{Tr}_KJ_{\mathcal B}(\Phi)=I_H$. By the entry formula in step 1.1 and uniqueness of matrix entries [F5], $S_{ji}=\delta_{ij}$ for every $i,j$, hence $S=I_H$. By [F2], this is exactly trace preservation on every input. If $H=0$, both sides are the unique zero endomorphism and trace preservation is vacuous. If $K=0$ and $H\ne0$, the partial trace and $S$ are zero while $I_H\ne0$, so neither condition holds. [given, F2, F5, step 1.1, algebra] ∎

