---
id: ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc
kind: example
title: "The equation e^z = 3z has exactly one solution in the unit disc"
status: draft
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
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Example

The equation

$$e^z=3z$$

has exactly one solution in the unit disc.

## Facts & Assumptions

**Given:** The function $f(z)=e^z-3z$ and the unit circle $|z|=1$.

[L1] Rouché's theorem preserves the zero count under the strict boundary
inequality ([[thm-rouche-theorem]]).

## Verification

**Proof technique:** direct.

1.1 If $|z|=1$, then $\operatorname{Re} z\le1$, so $$|e^z|=e^{\operatorname{Re} z}\le e<3=|3z|.$$ [given, algebra]

2.1 Apply [L1] to $f(z)=e^z-3z$ and $g(z)=-3z$. Since $-3z$ has exactly one zero in $|z|<1$, so does $f$. [step 1.1, L1] ∎
