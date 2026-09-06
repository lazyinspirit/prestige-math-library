---
id: lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion
kind: lemma
title: "Positive-degree homology of a finite group is order-torsion"
status: published
origin: pipeline
deps: [def-group-homology-as-a-derived-functor]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 6, Theorem 6.5.8"
      url: https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For finite $G$ and $n>0$, $|G|$ annihilates $H_n(G;\mathbb Z)$.

## Facts & Assumptions

**Given:** Let $G$ be finite and $n>0$.

[L1] Weibel's Theorem 6.5.8 states that $|G|$ annihilates $H_n(G;A)$ for every finite group $G$, every $G$-module $A$, and every $n>0$.

## Proof

**Proof technique:** direct.

1.1 The cited theorem of Weibel states that, for a finite group $G$, multiplication by $|G|$ annihilates $H_n(G;A)$ for every $n>0$ and every $G$-module $A$. Apply it to the trivial module $A=\mathbb Z$. [L1, given]

2.1 Thus multiplication by $|G|$ is zero on $H_n(G;\mathbb Z)$, as claimed. [step 1.1] ∎
