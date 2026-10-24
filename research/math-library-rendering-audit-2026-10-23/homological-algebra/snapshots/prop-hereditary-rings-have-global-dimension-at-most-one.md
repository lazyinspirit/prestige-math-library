---
id: prop-hereditary-rings-have-global-dimension-at-most-one
kind: proposition
title: "Hereditary rings have global dimension at most one"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-global-dimension-of-a-ring, def-projective-dimension-of-an-object]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

If every submodule of a projective left $R$-module is projective, then the left global dimension of $R$ is at most one. The right-handed statement holds with right modules throughout.

## Facts & Assumptions

**Given:** The stated left hereditary hypothesis and a left $R$-module $M$.

## Proof

**Proof technique:** direct.

1.1 Choose a surjection $P\to M$ from a free, hence projective, left module $P$. Its kernel $K$ is a submodule of $P$ and is projective by hypothesis. [given, construct]

2.1 Thus $0\to K\to P\to M\to0$ is a projective resolution of length at most one. The definitions [[def-projective-dimension-of-an-object]] and [[def-left-and-right-global-dimension-of-a-ring]] yield the claimed bound; the right proof is identical with sides reversed. [step 1.1, algebra] ∎
