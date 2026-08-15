---
id: ex-a-generator-of-f-eight-multiplicative-group
kind: example
title: "The residue class of $t$ generates $\\mathbb F_8^\\times$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-quotient-is-a-field-iff-irreducible, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-z-mod-p-is-a-field, thm-multiplicative-group-of-a-finite-field-is-cyclic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Example

In $\mathbb F_8=\mathbb F_2[t]/(t^3+t+1)$, the residue class $a$ of $t$ has order $7$ and generates $\mathbb F_8^\times$.

## Facts & Assumptions

**Given:** The quotient $A=\mathbb F_2[t]/(t^3+t+1)$ and the class $a$.

[L1] A polynomial quotient over a field is a field exactly when its modulus is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

[L2] An irreducible cubic quotient has the power basis $(1,a,a^2)$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L3] The ring $\mathbb Z/2$ is a field ([[thm-z-mod-p-is-a-field]]).

[L4] The nonzero elements of a finite field form a cyclic group ([[thm-multiplicative-group-of-a-finite-field-is-cyclic]]).

## Verification

**Proof technique:** direct.

1.1 The cubic has no root in $\mathbb F_2$, so [L1] and [L3] make the quotient a field, and [L2] gives its eight elements. The defining relation is $a^3=a+1$. [given, L1, L2, L3]

2.1 Reduction gives $a^0=1$, $a$, $a^2$, $a^3=a+1$, $a^4=a^2+a$, $a^5=a^2+a+1$, $a^6=a^2+1$, and $a^7=1$. [step 1.1, algebra]

3.1 The first seven displayed powers are distinct and are all nonzero elements, so $a$ has order $7$ and generates $A^\times$, in agreement with [L4]. [step 2.1, L4] ∎
