---
id: lem-author-9f61e4df2141-tail-splitting
kind: lemma
title: Graded pieces of a direct-sum tail tower
status: draft
domain: mathematics
deps:
  - def-decreasing-filtered-spectrum
  - lem-author-9f61e4df2141-split-spectral-cofiber
dependency_roles:
  def-decreasing-filtered-spectrum: mathematical-premise
  lem-author-9f61e4df2141-split-spectral-cofiber: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
---

## Statement
Let $(G_j)_{j\geq0}$ be spectra and put $T^q=\bigoplus_{j\geq q}G_j$ for $q\geq0$, with $T^q=T^0$ for $q\leq0$. Give these spectra the canonical tail inclusions and augmentation to $T^0$. Then $\operatorname{gr}^qT\simeq G_q$ for $q\geq0$, the connecting map $G_q\to T^{q+1}[1]$ is zero, and $\operatorname{gr}^qT\simeq0$ for $q<0$. The identifications are natural in maps of families $(G_j)$.

## Facts & Assumptions
**Given:** The family of spectra and its augmented tail tower.

**Goal:** Compute its graded pieces and connecting maps.

[F1] [[def-decreasing-filtered-spectrum]] defines the associated graded as a cofiber.

[F2] [[lem-author-9f61e4df2141-split-spectral-cofiber]] computes the cofiber and connecting map of a summand inclusion.

## Proof
1.1 For $q\geq0$, the universal property of coproducts gives a natural equivalence $T^q\simeq T^{q+1}\oplus G_q$ carrying the transition map to the first-summand inclusion. Applying [F2] gives the stated graded piece and zero connecting map. [F1, F2, given, construct]

2.1 For $q<0$ the transition map is the identity of $T^0$, whose cofiber is zero. The coproduct decompositions, inclusions and projections commute with maps of families, so the identifications are natural. [F1, given, step 1.1] ∎
