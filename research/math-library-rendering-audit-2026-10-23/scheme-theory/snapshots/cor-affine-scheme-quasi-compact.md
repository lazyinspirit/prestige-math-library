---
id: cor-affine-scheme-quasi-compact
kind: corollary
title: "Every affine scheme is quasi-compact"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-scheme, def-axiom-of-choice, lem-basic-opens-quasi-compact]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Lemma 26.5.1"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Statement

Assume the Axiom of Choice. Every affine scheme is quasi-compact.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and an affine scheme $X$.

[F1] Under the Axiom of Choice, every distinguished open of an affine spectrum is quasi-compact ([[lem-basic-opens-quasi-compact]]).

## Proof

**Proof technique:** direct.

1.1 Choose an isomorphism $X\cong\operatorname{Spec}A$ from affineness. [given, choose]

1.2 The whole spectrum is $D(1)$, which is quasi-compact by [F1] under the assumed Axiom of Choice. This is the only use of AC in this argument. [F1, given]

2.1 Its homeomorphic copy $X$ is quasi-compact. [step 1.1, step 1.2] ∎  
