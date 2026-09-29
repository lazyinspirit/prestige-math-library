---
id: thm-projective-morphism-proper
kind: theorem
title: Projective morphisms are proper
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-projective-morphism-pre-proj
  - thm-projective-space-proper-over-base
  - lem-closed-immersion-proper
  - lem-proper-stable-composition
  - def-axiom-of-choice
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.44.5 (tag 01WC) and Lemma 29.44.4"
      url: https://stacks.math.columbia.edu/tag/01WC
    - title: "Vakil, The Rising Sea, Section 17.4 and Exercise 11.3.F"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Assume the Axiom of Choice. Every projective morphism in the finite-dimensional
H-projective convention of this page is proper: if $f:X\to S$ factors over $S$
as
$$X\xrightarrow{i}\mathbb P^n_S\longrightarrow S$$
with $n\ge0$, $i$ a closed immersion and the second arrow the projection, then
$f$ is proper. The empty source, the empty base and the case $n=0$ are
included, and no Noetherian, field, reducedness or nonemptiness hypothesis is
imposed.

## Facts & Assumptions

**Given:** The Axiom of Choice and a projective morphism $f:X\to S$ with a factorization $X\xrightarrow{i}\mathbb P^n_S\xrightarrow{\pi}S$ over $S$, where $n\ge0$, $i$ is a closed immersion and $\pi$ is the projection.

[F1] A morphism $f:X\to S$ is **projective on this page** if for some $n\ge0$ it factors over $S$ as $X\xrightarrow{i}\mathbb P^n_S\to S$ with $i$ a closed immersion; the relative projective space and its projection are those of the cited chart construction, and $n=0$ is allowed with $\mathbb P^0_S\cong S$. ([[def-projective-morphism-pre-proj]])

[F2] Assume AC. For every scheme $S$ and every $n\ge0$ the projection $\mathbb P^n_S\to S$ is proper. ([[thm-projective-space-proper-over-base]])

[F3] Assume AC. Every closed immersion is finite, hence proper; the empty closed immersion is included. ([[lem-closed-immersion-proper]])

[F4] Assume AC. A composite of proper morphisms is proper. ([[lem-proper-stable-composition]])

[F5] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct: write $f$ as a closed immersion into a relative projective space followed by the projection, and compose the two proper morphisms.

1.1 By [F1] the morphism $f$ admits a factorization $f=\pi\circ i$ over $S$, where $n\ge0$, $i:X\to\mathbb P^n_S$ is a closed immersion and $\pi:\mathbb P^n_S\to S$ is the projection of the relative projective space. [F1]

2.1 By the AC-qualified [F3] the closed immersion $i$ is finite, hence proper. [F3, step 1.1]

2.2 By the AC-qualified [F2] the projection $\pi:\mathbb P^n_S\to S$ is proper. [F2, step 1.1]

3.1 Since $f=\pi\circ i$ is a composite of the proper morphisms $i$ and $\pi$, the AC-qualified [F4] shows that $f$ is proper. [F1, F4, step 2.1, step 2.2]

4.1 This proves the theorem for the finite-dimensional H-projective convention fixed in [F1]; the separate projective-bundle convention of the sources is not treated here and is not claimed. The Axiom of Choice [F5] is assumed and is used only through [F2], [F3] and [F4]. The degenerate cases are included: for $n=0$ the projection is the isomorphism $\mathbb P^0_S\cong S$ and $f$ is the closed immersion $i$; if $S=\varnothing$ then $\mathbb P^n_S=X=\varnothing$ and the morphisms are the empty ones; if $i$ is the identity then $f=\pi$ is the projection, proper by [F2]; and if $X=\varnothing$ then $i$ is the empty closed immersion, proper by [F3]. No Noetherian, field, reducedness or nonemptiness hypothesis is imposed. [F1, F2, F3, F5, step 3.1] ∎
