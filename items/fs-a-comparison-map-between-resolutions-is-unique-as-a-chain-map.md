---
id: fs-a-comparison-map-between-resolutions-is-unique-as-a-chain-map
kind: false-statement
title: "FALSE: a comparison map between resolutions is unique as a chain map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]
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

> **False.** A comparison map between two projective resolutions is unique as a > chain map.
## Facts & Assumptions

**Given:** The standard projective resolution $$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\mathbb Z\to0$$ of $\mathbb Z/2\mathbb Z$.

[L1] Comparison maps lifting the same object morphism are unique only up to chain homotopy ([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).
## Refutation

**Proof technique:** direct.

1.1 On two copies of the displayed resolution, multiplication by $1$ in both degrees and multiplication by $3$ in both degrees are distinct augmentation-preserving chain maps lifting $1_{\mathbb Z/2\mathbb Z}$, because $3\equiv1\pmod 2$ and $2\cdot3=3\cdot2$. [given, algebra]

2.1 Step 1.1 exhibits two different comparison maps lifting the same object morphism. By [L1], the positive theorem only identifies them up to homotopy, so uniqueness as an actual chain map is false. [L1, step 1.1] ∎
