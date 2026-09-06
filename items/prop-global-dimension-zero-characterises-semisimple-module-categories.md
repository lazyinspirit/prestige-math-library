---
id: prop-global-dimension-zero-characterises-semisimple-module-categories
kind: proposition
title: "Global dimension zero characterises semisimple module categories"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-global-dimension-of-a-ring, thm-equivalent-characterizations-of-semisimple-rings]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Choice.
For a ring $R$, left global dimension zero is equivalent to every left $R$-module being semisimple; the corresponding statement holds on the right.

## Facts & Assumptions

**Given:** A ring $R$ and the left-module convention; the right statement is obtained by replacing $R$ with $R^{\mathrm{op}}$.

## Proof

**Proof technique:** direct.

1.1 If left global dimension is zero, every left module has projective dimension zero and hence is projective. By [[thm-equivalent-characterizations-of-semisimple-rings]], a ring for which every left module is projective is precisely a semisimple ring, equivalently every left module is semisimple. [given, construct]

2.1 Conversely, if every left module is semisimple, the same ring characterization makes every left module projective. Its projective dimension is therefore zero, so the supremum in [[def-left-and-right-global-dimension-of-a-ring]] is zero. Replacing $R$ by $R^{\mathrm{op}}$ proves the right-module statement. [step 1.1, algebra] ∎
