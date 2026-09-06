---
id: thm-reduction-universal-property
kind: theorem
title: "Universal property of scheme reduction"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reduction-of-scheme, def-morphism-of-schemes, lem-morphism-schemes-local-on-source-target]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 12"
      url: "https://stacks.math.columbia.edu/tag/01J1"
---
## Statement

For every morphism $f:T\to X$ from a reduced scheme $T$, there is a unique
morphism $\bar f:T\to X_{\mathrm{red}}$ whose composite with
$X_{\mathrm{red}}\to X$ is $f$.

## Facts & Assumptions

**Given:** A reduced scheme $T$ and a morphism $f:T\to X$.

## Proof

**Proof technique:** direct.

1.1 On affine opens, the map on coordinate rings sends every nilpotent of the target ring to a nilpotent of the reduced source ring, hence to zero. [given]

2.1 It therefore factors uniquely through the quotient by the nilradical on each affine chart, producing compatible local maps to $X_{\mathrm{red}}$. [step 1.1]

3.1 The local maps glue uniquely, and their uniqueness on charts proves uniqueness globally. [step 2.1] ∎
