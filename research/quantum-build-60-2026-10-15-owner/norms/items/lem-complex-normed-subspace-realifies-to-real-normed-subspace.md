---
id: lem-complex-normed-subspace-realifies-to-real-normed-subspace
kind: lemma
title: "A complex normed subspace and its finite basis realify"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-normed-subspace, def-realification-of-a-complex-vector-space, lem-complex-norm-realification-is-a-real-norm, def-normed-subspace, def-linear-basis, thm-complex-numbers-are-the-real-coordinate-plane]
proof_strategy: direct
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1, Definition 1.1 and Example 1.2"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
---

## Statement

A complex normed subspace $W$ of $V$ realifies to a real normed subspace $W_{\mathbb R}\subseteq V_{\mathbb R}$ with exactly the same restricted norm metric. If $(b_j)_{j<n}$ is a supplied ordered complex basis of $W$, then $(b_0,ib_0,\ldots,b_{n-1},ib_{n-1})$ is an ordered real basis of $W_{\mathbb R}$, including the empty basis when $n=0$.

## Facts & Assumptions

**Given:** A complex normed subspace $W$ of $V$ as in [[def-complex-normed-subspace]].

[F1] Restriction of scalars preserves addition and restricts complex multiplication to real scalars ([[def-realification-of-a-complex-vector-space]]); it retains the same norm and metric ([[lem-complex-norm-realification-is-a-real-norm]]). A real normed subspace has the restricted ambient norm ([[def-normed-subspace]]).

[F2] A basis is independent and spans ([[def-linear-basis]]). Every complex coefficient has unique real and imaginary parts, with coordinate arithmetic ([[thm-complex-numbers-are-the-real-coordinate-plane]]).

## Proof

1.1 The zero vector, sums and real multiples of vectors in $W$ lie in $W$ because it is a complex-linear subspace. Thus $W_{\mathbb R}$ is a real-linear subspace of $V_{\mathbb R}$. By [F1] their norms are the original functions, and $N_W(w)=N_V(w)$; the real normed-subspace contract and identical restricted metric follow. [given, F1]

2.1 Suppose the complex basis is supplied. A vector $w=\sum_{j<n}z_jb_j$, with $z_j=u_j+iv_j$, equals $\sum_{j<n}(u_jb_j+v_j(ib_j))$, so the displayed real list spans. A real relation $\sum_{j<n}(u_jb_j+v_j(ib_j))=0$ becomes $\sum_{j<n}(u_j+iv_j)b_j=0$; complex independence forces $u_j+iv_j=0$, hence $u_j=v_j=0$. The list is real independent. If $n=0$, complex spanning already says $W=\{0\}$ and the empty real list spans it and is independent. These constructions use the supplied finite list and unique coefficients, with no choice axiom. [F2, step 1.1, algebra] ∎
