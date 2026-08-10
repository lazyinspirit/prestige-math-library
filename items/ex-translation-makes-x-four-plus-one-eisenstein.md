---
id: ex-translation-makes-x-four-plus-one-eisenstein
kind: example
title: 'Translation turns x^4+1 into an Eisenstein polynomial'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-a-polynomial-ring, thm-eisenstein-irreducibility-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, translated Eisenstein example'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Example

The polynomial $x^4+1$ is irreducible over $\mathbb Q$, although Eisenstein's criterion does not apply to it before a translation.

## Facts & Assumptions

**Given:** The polynomial $f=x^4+1\in\mathbb Q[x]$ and the substitution $\tau(f)(x)=f(x+1)$.

[L1] The universal property makes substitution $x\mapsto x+1$ a ring homomorphism; substitution $x\mapsto x-1$ is its inverse ([[thm-universal-property-of-a-polynomial-ring]]).

[L2] Eisenstein's criterion proves a primitive integer polynomial irreducible over $\mathbb Q$ from the stated prime-divisibility conditions ([[thm-eisenstein-irreducibility-criterion]]).

## Verification

**Proof technique:** direct.

1.1 Binomial expansion gives $\tau(f)=x^4+4x^3+6x^2+4x+2$. It is monic and hence primitive, and it is Eisenstein at $2$: every nonleading coefficient is even, the leading coefficient is odd, and $4$ does not divide the constant coefficient $2$. Thus [L2] makes $\tau(f)$ irreducible. [given, L2, algebra]

2.1 By [L1], $\tau$ is an automorphism; a nontrivial factorization of $f$ would map to one of $\tau(f)$, so irreducibility of $\tau(f)$ implies irreducibility of $f$. [step 1.1, L1] ∎
