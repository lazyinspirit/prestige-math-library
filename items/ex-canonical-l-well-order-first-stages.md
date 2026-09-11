---
id: "ex-canonical-l-well-order-first-stages"
kind: "example"
title: "Computing the canonical order at the first levels"
deps: ["thm-canonical-definable-global-well-order-of-l", "ex-first-constructible-levels"]
sources:
  references:
    - title: Geschke Theorem 5.9 proof pp17–18
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

The canonical $<_L$ puts $\varnothing$ first and $\{\varnothing\}$ second. In $L_3$, both precede the two new sets $\{\{\varnothing\}\}$ and $\{\varnothing,\{\varnothing\}\}$. Those two are compared by their least definition codes over $L_2$, under the fixed formula/arity enumeration.

## Facts & Assumptions

**Given:** ZF. Explicit differences of the first levels identify the first two elements and the two new L_3 elements; the calculation preserves dependence on the fixed code enumeration.

[F1] [[thm-canonical-definable-global-well-order-of-l]]: The successor construction retains the old order before new sets, then compares their least definition codes.

[F2] [[ex-first-constructible-levels]]: The explicit L_1, L_2 and four-element L_3 calculations identify the newly appearing sets.

## Verification

1.1 At L_1 the only element is empty, so it is first. The difference $L_2\setminus L_1$ is $\{\{\varnothing\}\}$; its only element is placed after the old empty set. Thus the first two elements are exactly as asserted. [F1, F2]

2.1 Subtracting the two old elements from the four-element L_3 of F2 leaves $u=\{\{\varnothing\}\}$ and $v=\{\varnothing,\{\varnothing\}\}$. Over L_2, u is defined by $x=\{\varnothing\}$ using that parameter, while v is defined by $x=x$ without parameters. Their least codes need not be these displayed witnesses. F1 puts u before v exactly when its least code precedes the least code of v, and puts both after the two old elements. The answer beyond the first two therefore retains the specified coding convention. [F1, F2, step 1.1] ∎
