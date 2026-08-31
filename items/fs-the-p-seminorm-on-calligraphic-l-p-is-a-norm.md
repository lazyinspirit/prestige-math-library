---
id: fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm
kind: false-statement
title: "FALSE: the $p$-seminorm on calligraphic $L^p$ is a norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm, def-norm-and-normed-space]
proof_strategy: "Refute with a nonzero function supported on a null set, whose seminorm is 0."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Section 7B"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

On the representative space $\mathcal L^p(\mu)$, the functional
$f\mapsto\|f\|_p$ is a norm.

## Facts & Assumptions

**Given:** A nonzero function with zero seminorm.

[L1] The previous counterexample supplies a measurable function $f\not\equiv0$
with $\|f\|_p=0$
([[cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm]]).

[L2] A norm must satisfy the separation axiom $N(v)=0\Leftrightarrow v=0$
([[def-norm-and-normed-space]]).

## Refutation

**Proof technique:** Refute with a nonzero function supported on a null set,
whose seminorm is $0$.

1.1 Let $f$ be the function from [L1]. Then $f\ne0$ pointwise but [L1]
$\|f\|_p=0$.

2.1 This violates the separation axiom in [L2], so the $p$-seminorm on [step 1.1, L2]
$\mathcal L^p(\mu)$ is not a norm. ∎
