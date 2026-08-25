---
id: ex-non-intersecting-path-pairs-by-a-two-by-two-determinant
kind: example
title: "A two-by-two determinant counting non-intersecting path pairs"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant, thm-lindstrom-gessel-viennot, def-path-system-and-non-intersecting-path-system, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, Corollary 10.13.2'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Example

At $n=1$, the two monotone paths from $(1,0)$ to $(2,1)$ are `EN` and `NE`, and
the two monotone paths from $(0,1)$ to $(1,2)$ are again `EN` and `NE`.

## Facts & Assumptions

**Given:** the four paths above.

[L1] The count of non-intersecting pairs is $\binom{2}{1}^2-\binom{2}{2}\binom{2}{0}$ ([[cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant]], [[def-binomial-coefficient]]).

## Verification

**Proof technique:** direct.

1.1 The four ordered pairs of paths are `(EN,EN)`, `(EN,NE)`, `(NE,EN)` and `(NE,NE)`. [given]

2.1 Exactly one of them, `(NE,EN)`, meets at the lattice point $(1,1)$; the other three are non-intersecting. [step 1.1]

3.1 Therefore the direct count is $3$, which matches [L1] because $\binom{2}{1}^2-\binom{2}{2}\binom{2}{0}=2^2-1\cdot1=3$. [L1, step 2.1] ∎

## Remarks

- This is the smallest instance in which the determinant count differs from the product of the individual path counts.
