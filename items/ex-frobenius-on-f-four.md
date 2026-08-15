---
id: ex-frobenius-on-f-four
kind: example
title: "Frobenius on $\\mathbb F_4$ swaps the two non-prime-field elements"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frobenius-endomorphism-and-finite-field-automorphism, thm-polynomial-quotient-is-a-field-iff-irreducible, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Example

In $\mathbb F_4=\mathbb F_2[t]/(t^2+t+1)$, with $a$ the class of $t$, Frobenius fixes $0,1$, sends $a$ to $a+1$, and sends $a+1$ to $a$. Its square is the identity.

## Facts & Assumptions

**Given:** The quotient description of $\mathbb F_4$ and the class $a$.

[L1] In characteristic $2$, Frobenius $x\mapsto x^2$ is an injective field endomorphism, and it is an automorphism when the field is finite; its second iterate is $x\mapsto x^4$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L2] The quotient by an irreducible polynomial over a field is a field ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

[L3] The ring $\mathbb Z/2$ is a field ([[thm-z-mod-p-is-a-field]]).

## Verification

**Proof technique:** direct.

1.1 The modulus has no root in $\mathbb F_2$, so [L2] and [L3] give the field with relation $a^2=a+1$. [given, L2, L3]

2.1 Squaring gives $0^2=0$, $1^2=1$, $a^2=a+1$, and $(a+1)^2=a^2+1=a$. [step 1.1, L1, algebra]

3.1 Thus Frobenius swaps the two non-prime-field elements and fixes the prime field. Applying the swap twice is the identity, agreeing with $x^4=x$ from [L1]. [step 2.1, L1] ∎
