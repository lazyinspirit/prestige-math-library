---
id: ex-mittag-leffler-function-with-double-poles-at-the-integers
kind: example
title: "A Mittag-Leffler function with double poles at the integers"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-mittag-leffler-theorem-on-the-plane]
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Example

There exists a meromorphic function on $\mathbb C$ whose poles are exactly the
integers and whose principal part at each integer $n$ is $(z-n)^{-2}$.

## Facts & Assumptions

**Given:** The discrete set $\mathbb Z$ and the prescribed principal parts
$p_n(z)=(z-n)^{-2}$.

[L1] Mittag-Leffler on the plane realizes every discrete family of prescribed
principal parts ([[thm-mittag-leffler-theorem-on-the-plane]]).

## Verification

**Proof technique:** direct.

1.1 The set $\mathbb Z$ is discrete in $\mathbb C$, and each $p_n(z)=(z-n)^{-2}$ is a finite negative Laurent polynomial at $n$. [given]
2.1 Applying [L1] to this data yields a meromorphic function $f$ whose principal part at every integer is exactly $(z-n)^{-2}$. Because that principal part is nonzero and contains only the degree $-2$ term, each pole has exact order $2$. [step 1.1, L1, algebra] ∎