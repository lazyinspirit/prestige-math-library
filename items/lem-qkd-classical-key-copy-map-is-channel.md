---
id: lem-qkd-classical-key-copy-map-is-channel
kind: lemma
title: The finite classical key-copy map is a quantum channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-qc-quantum-channel
  - def-qc-completely-positive-map
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-qc-kraus-map-completely-positive
  - def-trace-of-an-endomorphism
  - thm-trace-of-ab-equals-trace-of-ba
justified_by: []
proof_strategy: direct
axiom_use: None; only finite registers, finite Kraus sums, and finite traces are used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Christopher Portmann and Renato Renner, Cryptographic Security of Quantum Key Distribution (2014), §4.3
      url: https://arxiv.org/pdf/1409.3525
    - title: Joseph M. Renes, Quantum Information Theory, ETH Zürich lecture notes (HS2014; revised 4 February 2015), §8.3
      url: https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf
    - title: John Watrous, The Theory of Quantum Information (2018), §§1.1.3 and 2.2.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Statement

Let $\mathsf K$ be a finite nonempty key alphabet with a fixed ordering, and let $H_T,H_E$ be finite-dimensional complex inner-product spaces with $H_T\ne\{0\}$ and $H_E\ne\{0\}$. Give the key register $H_A=\mathbb C^{\mathsf K}$ its corresponding computational basis $(|k\rangle)_{k\in\mathsf K}$. For each $k\in\mathsf K$, define $L_k:H_A\otimes H_T\otimes H_E\to H_A\otimes H_B\otimes H_T\otimes H_E$ by

$$L_k(|j\rangle\otimes x)=\begin{cases}|k,k\rangle\otimes x,&j=k,\\0,&j\ne k,\end{cases}$$

and extend linearly, where $H_B$ is another copy of $H_A$. Then

$$\mathcal C(X):=\sum_{k\in\mathsf K}L_kXL_k^\dagger$$

is a finite-dimensional quantum channel. On every input classical in $A$, $\xi_{ATE}=\sum_k|k\rangle\langle k|\otimes\xi^k_{TE}$, it acts by

$$\mathcal C(\xi_{ATE})=\sum_{k\in\mathsf K}|k,k\rangle\langle k,k|\otimes\xi^k_{TE}.$$

This map copies a measured classical key register; it does not copy arbitrary quantum states.

## Facts & Assumptions

**Given:** The finite nonempty key alphabet, the ordered finite-dimensional registers, and the operators $L_k$ in the Statement.

[F1] [[def-qc-register-and-computational-basis]] and [[def-qc-tensor-register-and-permutation]]: the displayed key vectors and their ordered product vectors form orthonormal bases.

[F2] [[thm-qc-kraus-map-completely-positive]]: any finite map of the form $X\mapsto\sum_kL_kXL_k^\dagger$ is completely positive.

[F3] [[def-trace-of-an-endomorphism]]: trace is the finite sum of diagonal entries, so it is linear over finite sums.

[F4] [[thm-trace-of-ab-equals-trace-of-ba]]: for compatible finite-dimensional maps, $\operatorname{tr}(L_kXL_k^\dagger)=\operatorname{tr}(XL_k^\dagger L_k)$.

[F5] [[def-qc-quantum-channel]]: a finite-dimensional quantum channel is a linear, completely positive, trace-preserving map on the full operator space.

[F6] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: the adjoint is characterized by $\langle Lx,y\rangle=\langle x,L^\dagger y\rangle$ for every input $x$ and output $y$.

## Proof

1.1 Let $e$ and $f$ range over an orthonormal product basis of $H_T\otimes H_E$. For input basis vector $|j\rangle\otimes e$ and output basis vector $|r,s\rangle\otimes f$, the definition and orthonormality [F1] give $\langle L_k(|j\rangle\otimes e),|r,s\rangle\otimes f\rangle=\langle e,f\rangle$ if $j=r=s=k$, and $0$ otherwise. By the defining adjoint identity [F6] and the fact that these product vectors form bases, $L_k^\dagger(|r,s\rangle\otimes f)=|k\rangle\otimes f$ when $r=s=k$, and is $0$ otherwise. Hence $L_k^\dagger L_k(|j\rangle\otimes e)=|j\rangle\otimes e$ when $j=k$ and $0$ otherwise. Summing over $k$ proves $\sum_{k\in\mathsf K}L_k^\dagger L_k=I_{ATE}$ on a basis, so it holds on the full input space. [given, F1, F6, algebra]

2.1 The formula in the Statement is a finite Kraus sum, so [F2] makes $\mathcal C$ completely positive. For every operator $X$, trace linearity [F3] and cyclicity [F4] give $\operatorname{tr}(\mathcal C(X))=\sum_k\operatorname{tr}(XL_k^\dagger L_k)=\operatorname{tr}(X\sum_kL_k^\dagger L_k)=\operatorname{tr}(X)$ by step 1.1. These are precisely the channel conditions [F5]. [given, F2, F3, F4, F5, step 1.1, algebra]

3.1 For $\xi_{ATE}=\sum_j|j\rangle\langle j|\otimes\xi^j_{TE}$, the basis action gives $L_k\xi_{ATE}L_k^\dagger=|k,k\rangle\langle k,k|\otimes\xi^k_{TE}$; all other input-key blocks are annihilated by $L_k$. Summing over $k$ yields the stated copy formula. [given, F1, F6, algebra] ∎
