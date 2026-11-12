---
id: lem-author-c8fb25136bd5-comparison-reindexing
kind: lemma
title: Reindexing a comparison with higher Chow groups
status: published
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
  - lem-author-c8fb25136bd5-negative-homology
  - math:def-field
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:def-group-isomorphism-and-automorphism
  - math:def-axiom-of-choice
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
  lem-author-c8fb25136bd5-negative-homology: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-group-isomorphism-and-automorphism: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 6
---

## Statement
Assume the Axiom of Choice. Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $r$ a nonnegative integer. Suppose that for every integer $p$ a group $H^{p,r}(X)$ is equipped with an isomorphism $H^{p,r}(X)\cong\mathrm{CH}^r(X,2r-p)$. Then $H^{2r,r}(X)\cong H_0z^r(X,\bullet)$ and $H^{p,r}(X)=0$ for $p>2r$. No existence of such comparison isomorphisms is asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice, $k$, $X$, $r$ and the stated isomorphisms.

**Goal:** Identify the index-zero case and the negative-index range.

[A1] The Axiom of Choice is assumed to meet the current Bloch-complex supplier's construction hypotheses; the index calculation itself makes no choices. [[math:def-axiom-of-choice]], [[def-bloch-higher-cycle-complex]]

[F1] Higher Chow groups are the homology groups of the Bloch complex. [[def-bloch-higher-cycle-complex]]

[F2] The homology of that complex vanishes in negative degrees. [[lem-author-c8fb25136bd5-negative-homology]]

[F3] The field and scheme-over-base interfaces fix the meaning of $k$ and $X$; smoothness and finite type refer to the structure morphism $X\to\operatorname{Spec}k$. [[math:def-field]], [[math:def-scheme-over-base]], [[math:def-smooth-morphism-schemes]], [[math:def-locally-finite-type-and-finite-type-morphism]]

[F4] A group isomorphism is a bijective group homomorphism. In particular, a group isomorphic to the zero group has exactly one element and is the zero group. [[math:def-group-isomorphism-and-automorphism]]

## Proof

1.1 Substituting $p=2r$ makes the homological index zero, giving the first isomorphism by the definition of higher Chow groups under the construction assumption [A1]. [given, A1, F1]

2.1 If $p>2r$, then $2r-p<0$; the target of the assumed isomorphism is therefore zero, and its source has exactly one element because the isomorphism is bijective. Hence its source is the zero group. [given, F1, F2, F4] ∎
