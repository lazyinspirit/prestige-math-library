---
id: prop-the-coinvariants-functor-is-right-exact
kind: proposition
title: "The coinvariants functor is right exact"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coinvariants-functor-of-a-group-module]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, §6.1"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

If $A\to B\to C\to0$ is exact in left $G$-modules, then $A_G\to B_G\to C_G\to0$ is exact.

## Proof

**Given:** An exact sequence $A\to B\to C\to0$ of left $G$-modules.

1.1 The induced map $B_G\to C_G$ is surjective because $B\to C$ is. Let $[b]\in B_G$ map to zero. Then the image of $b$ in $C$ is a finite sum $\sum_j(g_jc_j-c_j)$. Choose lifts $b_j\in B$ of the finitely many $c_j$ and put $b'=b-\sum_j(g_jb_j-b_j)$. Then $b'$ maps to zero in $C$, so it lies in the image of $A\to B$, while $[b']=[b]$ in $B_G$. [given]

2.1 Thus the image of $A_G\to B_G$ is exactly the kernel of $B_G\to C_G$, and the latter map is surjective. This proves right exactness without invoking a commutative-ring tensor theorem for the possibly noncommutative group ring. [step 1.1] ∎
