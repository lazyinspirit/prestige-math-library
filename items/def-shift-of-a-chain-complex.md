---
id: def-shift-of-a-chain-complex
kind: definition
title: "The shift of a chain complex"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-complex-in-an-abelian-category]
justified_by: [lem-the-shifted-differential-squares-to-zero]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.14: Homotopy and the shift functor"
      url: "https://stacks.math.columbia.edu/tag/0119"
pipeline_run: frontier-25
---

## Definition

Let $C_\bullet$ be a chain complex and fix $k\in\mathbb Z$. The **shift**
$C[k]_\bullet$ is the chain complex defined by
$$C[k]_n:=C_{n-k},\qquad d^{C[k]}_n:=(-1)^k d^C_{n-k}.$$

Thus the underlying graded object is reindexed by $k$, and the differential is
twisted by the sign $(-1)^k$.
