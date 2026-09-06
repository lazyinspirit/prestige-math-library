---
id: lem-positive-group-cohomology-of-the-trivial-group-vanishes
kind: lemma
title: "Positive cohomology of the trivial group vanishes"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-normalized-cochains-compute-group-cohomology]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Example 6.1.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

For every abelian group $M$, $H^n(1;M)=0$ for $n>0$.

## Proof

**Given:** The trivial group.

1.1 Every positive normalized bar has an identity entry and hence is zero in the normalized complex. [given]

2.1 The normalized cochain complex is therefore zero in positive degrees, so its positive cohomology vanishes. [step 1.1] ∎
