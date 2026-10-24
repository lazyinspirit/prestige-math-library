---
id: ex-cauchy-davenport-in-the-integers-modulo-seven
kind: example
title: "$A=B=\\{0,1,2\\}$ in $\\mathbb{Z}/7$: the sumset has five elements and the bound is tight"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-cauchy-davenport, def-integers-modulo-n, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "O. Pikhurko, An Introduction to Combinatorics, §11.1"
      url: "https://people.maths.ox.ac.uk/keevash/eac/notes.pdf"
pipeline_run: null
---

## Example

Let $A=B=\{0,1,2\}\subseteq\mathbb{Z}/7$.

## Facts & Assumptions

**Given:** the set $A=B=\{0,1,2\}$ in $\mathbb{Z}/7$.

[L1] Cauchy-Davenport gives $\lvert A+B\rvert\ge\min\{7,\lvert A\rvert+\lvert B\rvert-1\}$ ([[thm-cauchy-davenport]]).

## Verification

**Proof technique:** direct.

1.1 The sumset is $$A+B=\{0,1,2,3,4\},$$ since the nine sums reduce to $0,1,2,1,2,3,2,3,4$ modulo $7$. [given]

2.1 Therefore $\lvert A+B\rvert=5=3+3-1$, so the lower bound of [L1] is attained. [L1, step 1.1]

3.1 The other branch of the theorem is also visible: if $A=\{0,1,2,3\}$ and $B=\{0,1,2,3,4\}$, then $A+B=\mathbb{Z}/7$. [L1] ∎
