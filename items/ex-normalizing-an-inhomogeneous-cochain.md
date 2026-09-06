---
id: ex-normalizing-an-inhomogeneous-cochain
kind: example
title: "Normalizing an inhomogeneous cochain"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-inhomogeneous-group-cochains, cor-normalized-cochains-compute-group-cohomology]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Appendix 6.5.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Example

If $z:G\to M$ is a $1$-cocycle, then $z(1)=0$, so it is already normalized.

## Verification

**Given:** A $1$-cocycle $z$, so $z(gh)=z(g)+g z(h)$.

1.1 Set $g=h=1$ to get $z(1)=z(1)+z(1)$. [given]

2.1 Subtracting $z(1)$ gives $z(1)=0$. Thus the normalized representative is $z$ itself. [step 1.1] ∎
