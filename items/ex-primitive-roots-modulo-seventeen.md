---
id: ex-primitive-roots-modulo-seventeen
kind: example
title: "The primitive roots modulo $17$ are $3,5,6,7,10,11,12,14$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-primitive-root-modulo-n, cor-totient-at-one-and-at-a-prime, cor-generators-of-a-finite-cyclic-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory, Example 2.5.13"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Example

The primitive roots modulo $17$ are

$$3,5,6,7,10,11,12,14.$$

## Facts & Assumptions

**Given:** The prime modulus $17$.

[L1] A unit is a primitive root modulo $n$ when its order is $\varphi(n)$ ([[def-primitive-root-modulo-n]]).

[L2] $\varphi(17)=16$ ([[cor-totient-at-one-and-at-a-prime]]).

[L3] If $g$ generates a cyclic group of order $m$, its generators are $g^a$ for the exponent classes coprime to $m$ ([[cor-generators-of-a-finite-cyclic-group]]).

## Verification

**Proof technique:** direct.

1.1 The successive powers of $3$ modulo $17$ for exponents $1$ through $16$ are $3,9,10,13,5,15,11,16,14,8,7,4,12,2,6,1$, with no earlier $1$. Thus $3$ has order $16=\varphi(17)$ and is primitive by [L1]. [L1, L2, algebra]

2.1 The exponent classes coprime to $16$ are $1,3,5,7,9,11,13,15$; selecting these entries from step 1.1 gives $3,10,5,11,14,7,12,6$, which is the displayed set after sorting. [step 1.1, L3, algebra] ∎
