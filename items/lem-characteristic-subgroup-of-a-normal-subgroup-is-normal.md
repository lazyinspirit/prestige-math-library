---
id: lem-characteristic-subgroup-of-a-normal-subgroup-is-normal
kind: lemma
title: "If $K$ is characteristic in $N$ and $N$ is normal in $G$, then $K$ is normal in $G$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-characteristic-subgroup, def-normal-subgroup, thm-conjugation-is-an-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$.

## Facts & Assumptions

**Given:** Subgroups $K\le N\le G$ with $K$ characteristic in $N$ and $N$ normal in $G$.

[L1] A characteristic subgroup is preserved by every automorphism of its ambient group ([[def-characteristic-subgroup]]).

[L2] A subgroup is normal exactly when conjugation by every ambient element preserves it ([[def-normal-subgroup]]).

[L3] Conjugation by a fixed group element is an automorphism ([[thm-conjugation-is-an-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 Fix $g\in G$. Normality of $N$ and [L2] show that conjugation by $g$ maps $N$ to itself; by [L3], its restriction is an automorphism of $N$. [L2, L3]

2.1 Since $K$ is characteristic in $N$, [L1] gives $gKg^{-1}=K$. This holds for every $g\in G$, so $K\trianglelefteq G$ by [L2]. [step 1.1, L1, L2] ∎
