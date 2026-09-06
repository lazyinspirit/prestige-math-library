---
id: ex-effective-dimension-is-liminf-prefix-complexity-rate
kind: example
title: "An effective-dimension calculation from prefix complexity"
status: draft
origin: session
deps: [thm-effective-dimension-is-liminf-prefix-complexity-rate]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Franklin and Porter, §4.5"
      url: "https://arxiv.org/pdf/2004.02851"
---
## Example
If $K(X\upharpoonright n)=n/2+o(n)$ along every sufficiently large $n$, then $\dim(X)=1/2$.
## Verification
**Given:** the displayed asymptotic equality.

1.1 Dividing by $n$ gives $K(X\upharpoonright n)/n=1/2+o(1)$. [given]

2.1 Its liminf is $1/2$, and [[thm-effective-dimension-is-liminf-prefix-complexity-rate]] identifies this with $\dim(X)$. [step 1.1, algebra] ∎
