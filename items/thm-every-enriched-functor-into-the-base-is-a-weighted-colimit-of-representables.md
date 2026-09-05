---
id: thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables
kind: theorem
title: "Every enriched functor into the base is a weighted colimit of representables when the displayed weighted colimit exists"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-strong-enriched-yoneda-lemma-as-a-particular-end, def-enriched-weighted-limit, def-representable-enriched-functor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Chapter 3"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Statement

Assume $\mathcal V$ is symmetric monoidal right closed, locally small,
complete, and cocomplete, and that its collection of objects is a set. Let
$\mathcal A$ be a small $\mathcal V$-category and let
$F:\mathcal A\to\mathcal V$ be a $\mathcal V$-functor. If the weighted colimit

$$\int^{A}F(A)\otimes\mathcal A(A,-)$$

exists, then it is naturally isomorphic to $F$. Thus $F$ is a weighted colimit
of representable enriched functors.

## Facts & Assumptions

**Given:** A base $\mathcal V$ as in the statement, a small $\mathcal V$-category $\mathcal A$, and a $\mathcal V$-functor $F:\mathcal A\to\mathcal V$.

[L1] The strong enriched Yoneda lemma identifies $F(K)$ with the particular end $\int_A[\mathcal A(K,A),FA]$ ([[thm-strong-enriched-yoneda-lemma-as-a-particular-end]]).

[L2] Enriched weighted limits and colimits are defined by enriched hom-object representation ([[def-enriched-weighted-limit]]).

[L3] The representables are the functors $\mathcal A(A,-)$ ([[def-representable-enriched-functor]]).

## Proof

**Proof technique:** direct.

1.1 Evaluate the displayed coend at an object $K$ of $\mathcal A$. By [L2] and [L3], its value is $$C_K:=\int^A F(A)\otimes\mathcal A(A,K).$$ [L2, L3, given]

2.1 Fix $X\in\mathcal V$ and define a $\mathcal V$-functor $G_X:\mathcal A^{\mathrm{op}}\to\mathcal V$ by $G_X(A)=[F(A),X]$. The coend universal property and the closed structure give natural isomorphisms $$[C_K,X]\cong\int_A[F(A)\otimes\mathcal A(A,K),X]\cong\int_A[\mathcal A(A,K),[F(A),X]].$$ In $\mathcal A^{\mathrm{op}}$ one has $\mathcal A^{\mathrm{op}}(K,A)=\mathcal A(A,K)$, so applying [L1] to $G_X$ identifies the last end with $$G_X(K)=[F(K),X].$$ [L1, L2, step 1.1, algebra]

3.1 The isomorphism $[C_K,X]\cong[F(K),X]$ from step 2.1 is natural in $X$. The enriched Yoneda principle therefore gives $C_K\cong F(K)$. These isomorphisms are natural in $K$, so they assemble into an isomorphism of $\mathcal V$-functors between the displayed weighted colimit and $F$. [L1, step 2.1] ∎
