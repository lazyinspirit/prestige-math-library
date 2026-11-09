---
id: lem-author-c8fb25136bd5-comparison-reindexing
kind: lemma
title: Reindexing a comparison with higher Chow groups
status: published
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
  - lem-author-c8fb25136bd5-negative-homology
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
  lem-author-c8fb25136bd5-negative-homology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
---

## Statement
Let $k$ be a field, $X$ a smooth finite-type $k$-scheme and $r\geq0$. Suppose that for every integer $p$ a group $H^{p,r}(X)$ is equipped with an isomorphism $H^{p,r}(X)\cong\mathrm{CH}^r(X,2r-p)$. Then $H^{2r,r}(X)\cong H_0z^r(X,\bullet)$ and $H^{p,r}(X)=0$ for $p>2r$. No existence of such comparison isomorphisms is asserted.

## Facts & Assumptions

**Given:** $k$, $X$, $r$ and the stated isomorphisms.

**Goal:** Identify the index-zero case and the negative-index range.

[F1] Higher Chow groups are the homology groups of the Bloch complex. [[def-bloch-higher-cycle-complex]]

[F2] The homology of that complex vanishes in negative degrees. [[lem-author-c8fb25136bd5-negative-homology]]

## Proof

1.1 Substituting $p=2r$ makes the homological index zero, giving the first isomorphism by the definition of higher Chow groups. [given, F1]

2.1 If $p>2r$, then $2r-p<0$; the target of the assumed isomorphism is therefore zero, and so is its source. [given, F1, F2] ∎
