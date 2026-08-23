---
id: fs-every-minimal-generating-set-of-an-arbitrary-finite-group-has-the-same-size
kind: false-statement
title: "FALSE: all minimal generating sets of a finite group have the same size"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-minimal-generating-set-of-a-group, prop-integers-modulo-n-as-a-quotient-group, def-generated-subgroup]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Generating Sets, §6"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
pipeline_run: null
---

## Statement

**False claim.** All inclusion-minimal generating sets of an arbitrary finite group have the same size.

## Facts & Assumptions

**Given:** The additive group $\mathbb Z/6$.

[F1] A subset $X$ is a minimal generating set when it generates and no proper subset generates ([[def-minimal-generating-set-of-a-group]], [[def-generated-subgroup]]).

[L1] The quotient group $(\mathbb Z,+)/6\mathbb Z$ is the additive group $\mathbb Z/6$ ([[prop-integers-modulo-n-as-a-quotient-group]]).

## Refutation

**Proof technique:** direct.

1.1 The singleton $\{[1]\}$ generates $\mathbb Z/6$, and its only proper subset is empty, which generates only $[0]$. Thus it is minimally generating by [F1]. [given, F1, L1, algebra]

1.2 The set $\{[2],[3]\}$ generates because $[2]+[2]+[3]=[1]$. The singleton $\{[2]\}$ generates $\{[0],[2],[4]\}$ and $\{[3]\}$ generates $\{[0],[3]\}$, so neither proper singleton generates; hence the two-element set is also minimal by [F1]. [given, F1, L1, algebra]

2.1 Steps 1.1 and 1.2 exhibit minimal generating sets of sizes one and two in the same finite group, refuting the claim. [step 1.1, step 1.2] ∎
