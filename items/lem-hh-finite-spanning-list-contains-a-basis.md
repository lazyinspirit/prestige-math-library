---
id: lem-hh-finite-spanning-list-contains-a-basis
kind: lemma
title: "A finite spanning list contains a basis, without choice"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-linear-combination-and-span, def-linear-independence, def-linear-basis, def-dimension, def-field, thm-induction-principle]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
      locator: "Chapter 2, §2B, Theorem 2.30, printed pp. 40–41 (PDF pp. 53–54): a finite spanning list is reduced to a basis by deleting redundant entries."
---

## Statement

Let $V$ be a vector space over a field $k$, and let $v_1,\ldots,v_n$ be a finite list spanning a subspace $W$. Some sublist of $v_1,\ldots,v_n$ is a basis of $W$. In particular, a subspace spanned by a finite list is finite-dimensional. No choice principle is used.

## Facts & Assumptions

**Given:** A field $k$, a vector space $V$ over $k$, and a finite list $v_1,\ldots,v_n$ whose span is $W$.

[F1] The span of a set is the smallest linear subspace containing it, and finite linear combinations include the empty sum ([[def-linear-combination-and-span]]).

[F2] A finite list is linearly independent when every vanishing linear combination has all coefficients zero; a basis is a linearly independent spanning list ([[def-linear-independence]], [[def-linear-basis]]).

[F3] Every nonzero scalar in a field has a multiplicative inverse ([[def-field]]).

[F4] If a property holds at $0$ and is preserved from $j$ to its successor, it holds for every natural number ([[thm-induction-principle]]).

## Proof

1.1 Start with the empty retained list $B_0$. For $1\leq j\leq n$, append $v_j$ to $B_{j-1}$ if $v_j\notin\operatorname{span}(B_{j-1})$, and otherwise set $B_j=B_{j-1}$. This finite procedure makes each decision from the current vector and the already constructed span, so it uses no choice. [given, F1, construct]

2.1 For every $j$, $\operatorname{span}(B_j)=\operatorname{span}(v_1,\ldots,v_j)$. At $j=0$ both spans are $\{0\}$ by the empty-sum clause of [F1]. If $v_j$ already lies in the previous span, omitting it does not change the span; if it does not, adjoining it gives exactly the span after adding $v_j$ to the original prefix. Induction [F4] proves the claim through $j=n$. [step 1.1, F1, F4, algebra]

2.2 The retained list is linearly independent. If a nontrivial linear relation existed, let $b$ be its last vector with nonzero coefficient $\lambda$. Solving for $b$ using $\lambda^{-1}$ from [F3] would put $b$ in the span of the earlier retained vectors, contrary to the rule by which $b$ was appended. The empty retained list is independent by [F2] as well. [step 1.1, F2, F3, algebra]

3.1 By step 2.1 the retained list spans $W$, and by step 2.2 it is linearly independent. It is therefore a basis of $W$ by [F2]; it is finite because it is a sublist of the original finite list. By the definition of finite-dimensionality [[def-dimension]], $W$ is finite-dimensional. [step 2.1, step 2.2, F2, discharge-construct] ∎

