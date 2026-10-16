---
id: lem-qc-knill-laflamme-product-operator-matrix-units-form-a-basis
kind: lemma
title: Product operator matrix units form a basis
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: [def-inner-product-space, def-linear-map, lem-qc-tensor-product-basis-and-dimension, thm-unique-coordinates-with-respect-to-an-ordered-basis]
provenance:
  statement: ai-altered
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

Let $H_G,H_Q$ be finite-dimensional complex inner-product spaces with fixed
ordered orthonormal bases $(g_s)_{s<m}$ and $(q_\alpha)_{\alpha<n}$; either
index set may be empty. Put $\mathcal B(H)=\operatorname{End}_{\mathbb C}(H)$.
For each $s,t<m$ and $\alpha,\beta<n$, define
$$M_{s\alpha,t\beta}x=\langle x,g_t\otimes q_\beta\rangle(g_s\otimes q_\alpha).$$
Then the family $(M_{s\alpha,t\beta})_{s,t,\alpha,\beta}$ is a basis of
$\mathcal B(H_G\otimes H_Q)$. If either factor is zero-dimensional, this is
the empty basis of the zero endomorphism space.

## Facts & Assumptions

**Given:** The finite-dimensional spaces and their ordered orthonormal bases
in the Statement.

[F1] [[def-inner-product-space]]: the complex inner product is linear in its
first argument, so $x\mapsto\langle x,v\rangle$ is linear for fixed $v$.

[F2] [[lem-qc-tensor-product-basis-and-dimension]]: the elementary product
tensors $g_s\otimes q_\alpha$ form an orthonormal basis of $H_G\otimes H_Q$,
including the empty and zero-dimensional cases.

[F3] [[def-linear-map]]: a linear map is determined by its values on a
spanning set.

[F4] [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]: each vector
has a unique finite coordinate expansion in an ordered basis.

## Proof


1.1 By [F1], each $M_{s\alpha,t\beta}$ is linear. Applying it to a product basis vector gives $M_{s\alpha,t\beta}(g_{t'}\otimes q_{\beta'})=g_s\otimes q_\alpha$ when $(t',\beta')=(t,\beta)$ and $0$ otherwise, by [F2]. Thus these operators have the individual matrix-unit columns of the product basis. [F1, F2, algebra]

2.1 If either basis is empty, [F2] makes $H_G\otimes H_Q=\{0\}$; its endomorphism space is the zero vector space, whose empty family is a basis, as asserted. Otherwise, for any $T\in\mathcal B(H_G\otimes H_Q)$ and each input basis vector $g_t\otimes q_\beta$, write $T(g_t\otimes q_\beta)=\sum_{s,\alpha}c_{s\alpha,t\beta}(g_s\otimes q_\alpha)$ using [F2, F4]. The finite sum $\sum_{s,\alpha,t,\beta}c_{s\alpha,t\beta}M_{s\alpha,t\beta}$ has the same value as $T$ on every basis vector by step 1.1, hence equals $T$ by [F3]. If a linear combination of the $M_{s\alpha,t\beta}$ is zero, applying it to each input basis vector shows each coefficient is zero by [F2]. Therefore this family spans and is linearly independent. [given, F2, F3, F4, step 1.1, algebra] ∎

