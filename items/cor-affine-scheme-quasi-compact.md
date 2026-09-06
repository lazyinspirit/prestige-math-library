---
id: cor-affine-scheme-quasi-compact
kind: corollary
title: "Every affine scheme is quasi-compact"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-scheme, lem-basic-opens-quasi-compact]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.5.1"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Statement

Every affine scheme is quasi-compact.

## Facts & Assumptions

**Given:** An affine scheme $X$.

[F1] Every distinguished open of an affine spectrum is quasi-compact
([[lem-basic-opens-quasi-compact]]).

## Proof

**Proof technique:** direct.

1.1 Choose an isomorphism $X\cong\operatorname{Spec}A$ from affineness. [given, choose]

1.2 The whole spectrum is $D(1)$, which is quasi-compact by [F1]. [F1]

2.1 Its homeomorphic copy $X$ is quasi-compact. [step 1.1, step 1.2] ∎
 
