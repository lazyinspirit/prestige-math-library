---
id: ex-basic-open-affine-line
kind: example
title: "A basic open of the affine line"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-spectrum-localization-open-immersion, def-polynomial-ring-over-a-commutative-ring]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.6.6"
      url: "https://stacks.math.columbia.edu/tag/01HX"
---
## Example

For a commutative ring $k$, the basic open $D(t)$ of
$\mathbb A^1_k=\operatorname{Spec}k[t]$ is affine and isomorphic to
$\operatorname{Spec}k[t,t^{-1}]$.

## Facts & Assumptions

**Given:** A commutative ring $k$ and the polynomial variable $t$.

[F1] A principal localization spectrum is the corresponding distinguished
open as a locally ringed space ([[lem-spectrum-localization-open-immersion]]).

## Verification

**Proof technique:** direct.

1.1 Localizing $k[t]$ at $t$ adjoins $t^{-1}$, giving $k[t]_t\cong k[t,t^{-1}]$. [given, algebra]

1.2 By [F1], $D(t)\cong\operatorname{Spec}(k[t]_t)$. [F1]

2.1 Combining the two identifications proves the example. [step 1.1, step 1.2] ∎
 
