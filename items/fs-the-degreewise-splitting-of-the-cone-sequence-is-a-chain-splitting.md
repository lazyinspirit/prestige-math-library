---
id: fs-the-degreewise-splitting-of-the-cone-sequence-is-a-chain-splitting
kind: false-statement
title: "FALSE: the degreewise splitting of the cone sequence is a chain splitting"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact, prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift, prop-homology-of-a-shift-is-shifted-homology, thm-abelian-groups-form-an-abelian-category]
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

## Statement

The degreewise splitting of the canonical cone sequence is automatically a chain
splitting.

## Facts & Assumptions

**Given:** The chain map $\times2:\mathbb Z[0]\to\mathbb Z[0]$ between stalk
complexes concentrated in degree $0$.

[A1] The statement refuted is: the degreewise splitting of the canonical cone
sequence is automatically a chain splitting.

[L1] The canonical cone sequence is degreewise split short exact
([[thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact]]).

[L2] The cone of the zero map is the direct sum with a shift
([[prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift]]).

[L3] Homology of a shift is shifted homology
([[prop-homology-of-a-shift-is-shifted-homology]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the cone sequence for $\times2$ is degreewise split. If it were a chain splitting as well, then the cone would be isomorphic as a complex to $\mathbb Z[0]\oplus\mathbb Z[1]$ as in [L2]. [A1, L1, L2, given, algebra]

2.1 But $\operatorname{Cone}(\times2)$ is the two-term complex $$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to0,$$ so its homology is $H_0\cong\mathbb Z/2$ and $H_1=0$, whereas $\mathbb Z[0]\oplus\mathbb Z[1]$ has $H_0\cong\mathbb Z$ and $H_1\cong\mathbb Z$ by [L3]. Hence no chain splitting exists, so [A1] is false. [A1, L2, L3, step 1.1, algebra] ∎
