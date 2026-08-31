---
id: cex-a-degreewise-split-cone-sequence-with-no-chain-splitting
kind: counterexample
title: "A degreewise split cone sequence with no chain splitting"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact, thm-the-cone-of-an-identity-map-is-contractible, prop-homology-of-a-shift-is-shifted-homology, thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement refuted

Every degreewise split cone sequence splits as a sequence of complexes.

## Facts & Assumptions

**Given:** The cone sequence attached to $\times2:\mathbb Z[0]\to\mathbb Z[0]$.

[L1] Every cone sequence is degreewise split short exact
([[thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact]]).

[L2] Homology of a shift is shifted homology
([[prop-homology-of-a-shift-is-shifted-homology]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the cone sequence for $\times2$ is degreewise split. Its middle term is the complex $$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to0.$$ [L1, given, algebra]

2.1 If the sequence split as complexes, the middle term would be isomorphic to $\mathbb Z[0]\oplus\mathbb Z[1]$, whose homology is $\mathbb Z$ in degrees $0$ and $1$ by [L2]. But the middle term from step 1.1 has homology $H_0\cong\mathbb Z/2$ and $H_1=0$. Hence no chain splitting exists, so the displayed sequence is a counterexample. [L2, step 1.1, algebra] ∎
