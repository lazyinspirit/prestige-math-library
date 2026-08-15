---
id: ex-subfields-of-f-sixty-four
kind: example
title: "The subfields of $\\mathbb F_{64}$ have orders $2,4,8,64$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-subfield-lattice-of-a-finite-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Theorem 2.8"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Example

The subfields of $\mathbb F_{64}=\mathbb F_{2^6}$ have orders $2,4,8,64$. For $d=1,2,3,6$, the unique subfield of order $2^d$ is

$$\{a\in\mathbb F_{64}:a^{2^d}=a\}.$$

## Facts & Assumptions

**Given:** A field $F$ of order $64=2^6$.

[L1] The subfields of $\mathbb F_{p^n}$ are the unique fields of order $p^d$ for positive divisors $d$ of $n$, and each is the root set of $t^{p^d}-t$ ([[thm-subfield-lattice-of-a-finite-field]]).

## Verification

**Proof technique:** direct.

1.1 The positive divisors of $6$ are $1,2,3,6$. [given, algebra]

2.1 Apply [L1] with $p=2$ and these four divisors to obtain the orders $2^1,2^2,2^3,2^6$, namely $2,4,8,64$, and the displayed root-set descriptions. [step 1.1, L1, algebra] ∎
