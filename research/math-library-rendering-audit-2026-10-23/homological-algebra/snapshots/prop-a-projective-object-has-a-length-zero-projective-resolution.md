---
id: prop-a-projective-object-has-a-length-zero-projective-resolution
kind: proposition
title: "A projective object has a length-zero projective resolution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-projective-resolution-in-an-abelian-category, def-length-of-a-resolution, def-projective-object]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

Every projective object admits a length-zero projective resolution.
## Facts & Assumptions

**Given:** A projective object $P$.

[L1] A projective resolution is an exact augmented complex of projectives ([[def-projective-resolution-in-an-abelian-category]]).

[L2] Length at most zero means that all higher terms vanish ([[def-length-of-a-resolution]]).

[L3] Projectivity is the standing hypothesis on the degree-zero term ([[def-projective-object]]).
## Proof

**Proof technique:** direct.

1.1 Consider the augmented complex $$0\to P\xrightarrow{1_P}P\to0,$$ with $P$ placed in degree zero. It is exact because the augmentation is the identity, and its only nonzero term is projective by [L3]. [L1, L3, construct]

2.1 By [L2], this exact augmented complex has length zero. Therefore [L1] identifies it as a length-zero projective resolution of $P$, including the case $P=0$. [L1, L2, step 1.1] ∎
