---
id: thm-one-sided-and-two-sided-exactness-by-short-exact-sequences
kind: theorem
title: "Left exactness, right exactness, and exactness are characterized by short exact sequences"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-exact-and-right-exact-functor, thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive, def-abelian-category, thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts, thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels, thm-the-opposite-of-an-abelian-category-is-abelian, thm-every-monomorphism-is-the-kernel-of-its-cokernel]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Lemma 12.7.2(2)-(4)"
      url: "https://stacks.math.columbia.edu/tag/010N"
    - title: "Gautam Tamme, Algebra II Lecture 10, §10.4"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture10.pdf"
pipeline_run: frontier-21
---

## Statement

Let $F:\mathcal A\to\mathcal B$ be a functor between abelian categories.

1. $F$ is left exact if and only if for every short exact sequence
   $0\to A'\to A\to A''\to0$ in $\mathcal A$, the sequence
   $0\to F(A')\to F(A)\to F(A'')$ is exact.
2. $F$ is right exact if and only if for every short exact sequence
   $0\to A'\to A\to A''\to0$ in $\mathcal A$, the sequence
   $F(A')\to F(A)\to F(A'')\to0$ is exact.
3. $F$ is exact if and only if it carries every short exact sequence in
   $\mathcal A$ to a short exact sequence in $\mathcal B$.

## Facts & Assumptions

**Given:** A functor $F:\mathcal A\to\mathcal B$ between abelian categories.

[L1] Left exactness or right exactness already forces additivity
([[thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive]]).

[L2] A functor between additive categories is additive exactly when it
preserves finite biproducts
([[thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]]).

[L3] An additive functor is left exact exactly when it preserves kernels
([[thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels]]).

[L4] Abelian categories remain abelian after passing to the opposite
([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[L5] In an abelian category every monomorphism is the kernel of its cokernel
([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 If $F$ is left exact, then [L1] makes it additive, and [L3] says that it preserves kernels. Therefore whenever $0\to K\xrightarrow{k}A\xrightarrow{c}Q\to0$ is short exact, the map $F(k)$ is a kernel of $F(c)$, which is exactly the left-exact short-sequence criterion. The right-exact half is the dual statement applied in opposite categories using [L4]. [L1, L3, L4]

1.2 Conversely, assume $F$ carries every short exact sequence to one exact through the middle. Applying that to the two split short exact sequences $0\to A\to A\oplus B\to B\to0$ and $0\to B\to A\oplus B\to A\to0$ shows that $F(A\oplus B)$ is a biproduct of $F(A)$ and $F(B)$, so $F$ preserves finite biproducts and is additive by [L2]. Now every kernel $k:K\to A$ fits into a short exact sequence $0\to K\to A\to A/K\to0$ by [L5], so the hypothesis makes $F(k)$ a kernel. Then [L3] gives left exactness. The right-exact converse is the dual argument in opposite categories using [L4]. [L2, L3, L4, L5]

2.1 Clause 3 is exactly the conjunction of the first two clauses: a short exact sequence stays short exact precisely when the transformed sequence is both left exact and right exact. [step 1.1, step 1.2] ∎
