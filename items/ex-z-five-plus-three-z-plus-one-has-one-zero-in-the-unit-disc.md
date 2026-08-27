---
id: ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc
kind: example
title: "The polynomial z^5 + 3z + 1 has one zero in the unit disc"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-rouche-theorem]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Example

The polynomial

$$p(z)=z^5+3z+1$$

has exactly one zero in the unit disc.

## Facts & Assumptions

**Given:** The polynomial $p(z)=z^5+3z+1$ and the unit circle $|z|=1$.

[L1] Rouché's theorem preserves the zero count when the strict boundary
inequality holds ([[thm-rouche-theorem]]).

## Verification

**Proof technique:** direct.

1.1 On $|z|=1$, $$|z^5+1|\le |z|^5+1=2<3=|3z|.$$ [given, algebra]

2.1 Apply [L1] with $f=p$ and $g(z)=3z$. The function $3z$ has exactly one zero in $|z|<1$, so $p$ has exactly one zero there as well. [step 1.1, L1] ∎
