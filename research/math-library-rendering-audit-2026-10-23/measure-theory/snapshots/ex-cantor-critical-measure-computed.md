---
id: "ex-cantor-critical-measure-computed"
kind: "example"
title: "The ordinary Cantor set at its critical exponent"
deps: ["thm-cantor-set-hausdorff-dimension-and-exact-measure", "lem-hausdorff-exponent-comparison"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264J
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Example

Assume the Axiom of Countable Choice. Let $C$ be the middle-thirds Cantor set and $s=\log2/\log3$. Its level-$m$ basic cover has $s$-cost exactly one. In the small-scale limit,

$$\mathcal H^s(C)=1,\qquad\dim_H C=s,\qquad\mathcal H^1(C)=0.$$

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, the middle-thirds Cantor set has critical measure one and dimension $s=\log2/\log3$. [[thm-cantor-set-hausdorff-dimension-and-exact-measure]]

[F2] Finite measure at exponent $s$ gives zero measure at every larger exponent. [[lem-hausdorff-exponent-comparison]]

## Verification

1.1 There are $2^m$ basic intervals of diameter $3^{-m}$, and $3^s=2$. Thus their total cost is $2^m3^{-ms}=1$. The sharp Cantor theorem provides the matching lower bound, so the infimum cannot fall below one in the limit. [F1]

2.1 Since $0<s<1$ and the critical measure equals the finite value one, exponent comparison gives $\mathcal H^1(C)=0$. At level zero the cover is $[0,1]$ and also costs one; shrinking scales require arbitrarily large levels. [F2, step 1.1] ∎
