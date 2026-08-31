---
id: cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence
kind: corollary
title: "Every chain map factors as a cofibration-like inclusion followed by a homotopy equivalence"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-mapping-cylinder-factors-a-chain-map]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement

Every chain map factors as a degreewise split inclusion followed by a
chain-homotopy equivalence.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] The mapping-cylinder factorization writes
$$f=p\,i$$
with $i$ degreewise split monic and $p$ a chain-homotopy equivalence
([[thm-the-mapping-cylinder-factors-a-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the given map $f$. This produces a factorization $$C_\bullet\xrightarrow{i}\operatorname{Cyl}(f)_\bullet\xrightarrow{p}D_\bullet.$$ [L1, given, algebra]

2.1 The same theorem already proves that $i$ is a degreewise split inclusion and that $p$ is a chain-homotopy equivalence. That is exactly the asserted factorization. [L1, step 1.1, algebra] ∎
