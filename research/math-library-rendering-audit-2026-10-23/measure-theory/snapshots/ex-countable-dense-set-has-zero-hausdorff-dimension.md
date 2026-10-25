---
id: "ex-countable-dense-set-has-zero-hausdorff-dimension"
kind: "example"
title: "The rationals are dense but have dimension zero"
deps: ["thm-hausdorff-dimension-is-countably-stable", "cor-euclidean-hausdorff-dimension", "lem-q-and-irrationals-dense-r", "thm-rationals-countable"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Example 1.2.7 (countable nullity), specialised to Q
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Example

Assume the Axiom of Countable Choice. The set $D=\mathbb Q\cap[0,1]$ has $\dim_H D=0$, although it is dense in $[0,1]$ and its closure has dimension one. Hausdorff dimension need not be preserved by taking closure.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, at most countable sets have Hausdorff dimension zero. [[thm-hausdorff-dimension-is-countably-stable]]

[F2] Under the standing Countable Choice hypothesis, a subset of $\mathbb R$ with positive Lebesgue outer measure has dimension one. [[cor-euclidean-hausdorff-dimension]]

[F3] The embedded rationals are dense in the real line. [[lem-q-and-irrationals-dense-r]]

[F4] The rationals are countably infinite. [[thm-rationals-countable]]

## Verification

1.1 As a subset of the countable rationals, $D$ is at most countable; hence $\dim_H D=0$. The endpoints zero and one are included. [F1, F4]

2.1 Every relative neighbourhood in $[0,1]$ contains a rational point of $[0,1]$, by density (and the endpoints themselves at the ends). Thus $\overline D=[0,1]$, whose Lebesgue measure is one and whose dimension is consequently one. [F2, F3, step 1.1] ∎
