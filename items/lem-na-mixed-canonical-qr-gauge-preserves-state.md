---
id: lem-na-mixed-canonical-qr-gauge-preserves-state
kind: lemma
title: "Rank-revealing QR sweeps give exact mixed canonical gauge"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-na-finite-mps-state-and-hermitian-hamiltonian
  - def-finite-tensor-arrays-and-frobenius-inner-product
  - def-tensor-train-cores-bond-ranks-and-canonical-gauges
  - thm-gram-schmidt-orthonormalisation
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
aliases: []
sources:
  references:
    - title: "Ulrich Schollwöck, The density-matrix renormalization group in the age of matrix product states, Annals of Physics 326 (2011), §§4.1.2, 4.1.3, 4.4"
      url: "https://arxiv.org/pdf/1008.3477"
    - title: "Grégoire Misguich, Introduction to matrix-product states and tensor networks, complete lecture notes (2026), §§2.4.1–2.4.3"
      url: "https://arxiv.org/pdf/2606.24803"
dependency_level: 3
---

## Statement

Let a nonzero finite open-boundary TT have order $d\ge2$, and choose a center window $[s,t]$ with $1\le s\le t\le d$ and $t-s+1\in\{1,2\}$. There is an exact rank-revealing QR transformation of its cores that preserves the represented array, makes every core $k<s$ left-isometric and every core $k>t$ right-isometric, and removes exactly the dependent coordinates on each swept bond. No independent column direction is truncated; only exactly dependent directions are removed.

For each reshaped matrix $M$, the rank-revealing QR used here scans its columns in their fixed order, retaining a column exactly when it increases the span. It applies Gram–Schmidt to the retained columns, writes all other columns in that orthonormal span, and records the resulting permutation and coefficient factor.

## Facts & Assumptions

**Given:** A nonzero open-boundary TT array over $\mathbb F\in\{\mathbb R,\mathbb C\}$, with a selected one-site or two-site center window $[s,t]$.

[F1] [[def-na-finite-mps-state-and-hermitian-hamiltonian]]: an open-boundary MPS/TT presentation is an exact TT core list with one-dimensional boundary bonds; a normalized state is nonzero.

[F2] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: the rank of a matrix is the dimension of its column image.

[F3] [[def-tensor-train-cores-bond-ranks-and-canonical-gauges]]: the left matricization is left-isometric when $Q^*Q=I$, and the right matricization is right-isometric when $QQ^*=I$.

[F4] [[thm-gram-schmidt-orthonormalisation]]: a finite linearly independent list in a real or complex inner-product space has an orthonormal list with the same successive spans, produced by Gram–Schmidt.

## Proof



1.1 Let $M\in\mathbb F^{m\times n}$ be any core matricization. Scan its columns in order, starting with an empty list and retaining a column exactly when it is not in the span of those already retained. At termination the retained columns are independent, and every skipped column lies in their final span; hence they span the column image of $M$ and their count is $q=\operatorname{rank}(M)$ by [F2]. If $q>0$, apply [F4] to obtain a matrix $Q$ with orthonormal columns spanning those retained columns; their Gram–Schmidt coordinates form an upper triangular $R_{11}$ with nonzero diagonal. If $q=0$, then $M=0$ and use the empty factorization. [given, F2, F4, construct]

2.1 Move the retained column indices to the front by a permutation $\Pi$. Every remaining column lies in the span of $Q$, so it equals $Q$ times its coordinate vector $Q^*$ applied to that column. Thus $M\Pi=Q[R_{11}\ R_{12}]$ for some $R_{12}$, with $Q^*Q=I_q$; equivalently $M=QB$ where $B=[R_{11}\ R_{12}]\Pi^*$. This is an exact rank-revealing thin QR factorization for every rectangular shape. [step 1.1, algebra]

3.1 Starting at the left boundary, apply step 2.1 to each left matricization of cores $1,\ldots,s-1$. Replace the current core matricization $M$ by $Q$ and absorb $B$ into the next core. Since $M=QB$, the shared-index contraction in [F1] is unchanged; $Q^*Q=I_q$ makes the replaced core left-isometric by [F3]. Induction over the swept cores gives the required left-isometric prefix. [F1, F3, step 2.1, induction, algebra]

3.2 Starting at the right boundary, apply step 2.1 to the adjoint $M^*$ of each right matricization of cores $d,\ldots,t+1$. If $M^*\Pi=QB$, then $M=\Pi B^*Q^*$. Replace the current right matricization by $Q^*$ and absorb $\Pi B^*$ into the preceding core. The shared-index contraction in [F1] is unchanged, and $Q^*Q=I_q$ makes the replaced matricization right-isometric by [F3]. Induction gives the right-isometric suffix and preserves the represented array, while leaving cores $k<s$ untouched. If $t<d$, the final absorption into core $t$ can change the contracted center coefficients; if $t=d$, there is no right sweep. [F1, F3, step 2.1, induction, algebra]

4.1 The scan drops only columns already in the span of retained columns, so each bond dimension changes only from its former size to the exact matrix rank. If any swept matricization had rank zero, that core would be zero and the full TT contraction would be zero, contrary to the nonzero-state hypothesis; hence every reduced swept bond has positive dimension. Steps 3.1 and 3.2 establish the exact mixed canonical gauge. [given, F1, step 3.1, step 3.2, algebra] ∎
