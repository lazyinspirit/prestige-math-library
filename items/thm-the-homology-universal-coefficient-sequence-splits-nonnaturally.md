---
id: thm-the-homology-universal-coefficient-sequence-splits-nonnaturally
title: "The homology universal-coefficient sequence splits nonnaturally"
kind: theorem
status: draft
origin: pipeline
deps: ["thm-universal-coefficient-theorem-for-homology-over-a-pid"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For a free abelian complex $C$ and an abelian group $G$, the homological UCT short exact sequence admits a splitting, but the splitting is not asserted to be natural in $C$ or $G$.

## Proof

**Given:** the free abelian groups $C_n$ and the UCT short exact sequence.

1.1 Because $B_{n-1}C$ is free, the surjection $C_n\twoheadrightarrow B_{n-1}C$ has a chosen section, hence $C_n\cong Z_nC\oplus B_{n-1}C$. [given]

2.1 After tensoring, this chosen complement identifies a complement to the edge-image in homology and supplies a section of the UCT quotient; changing the section changes that complement, so no naturality is obtained. [step 1.1, construct] ∎
