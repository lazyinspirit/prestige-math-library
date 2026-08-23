---
id: ex-quartic-x-four-plus-eight-x-plus-twelve-has-galois-group-a-four
kind: example
title: "$x^4+8x+12$ has Galois group $A_4$ over $\\mathbb Q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rational-root-theorem, thm-reduction-mod-prime-irreducibility-test, thm-gauss-lemma-for-integer-polynomials, prop-resolvent-cubic-formula-and-discriminant, thm-galois-group-of-an-irreducible-quartic-by-its-resolvent]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Example 3.3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Example

The polynomial $x^4+8x+12$ has Galois group $A_4$ over $\mathbb Q$.

## Facts & Assumptions

**Given:** The rational-root theorem ([[thm-rational-root-theorem]]), reduction modulo a prime ([[thm-reduction-mod-prime-irreducibility-test]]), Gauss's lemma for monic integer polynomials ([[thm-gauss-lemma-for-integer-polynomials]]), and the quartic resolvent formula ([[prop-resolvent-cubic-formula-and-discriminant]]).

[L1] An irreducible separable quartic with irreducible resolvent and square discriminant has Galois group $A_4$ ([[thm-galois-group-of-an-irreducible-quartic-by-its-resolvent]]).

## Verification

**Proof technique:** direct.

1.1 No integer divisor of $12$ is a root, so there is no rational linear factor. Modulo $5$, one has $x^4+8x+12=(x-4)(x^3+4x^2+x+2)$; the cubic has no root in $\mathbb F_5$ and is irreducible. A monic factorization into two rational quadratics would reduce to a quadratic-by-quadratic factorization modulo $5$, contradicting the displayed irreducible factorization. Gauss's lemma therefore makes the quartic irreducible over $\mathbb Q$. [given, algebra]

1.2 The resolvent is $y^3-48y-64$. Modulo $5$ it is $y^3+2y+1$, whose values at all elements of $\mathbb F_5$ are nonzero; hence the cubic resolvent is irreducible over $\mathbb Q$. [given, algebra]

1.3 Its discriminant, and hence the quartic discriminant, is $-4(-48)^3-27(-64)^2=331776=576^2$, which is nonzero. [given, algebra]

2.1 Steps 1.1, 1.2, and 1.3 satisfy [L1], so the quartic has Galois group $A_4$. [step 1.1, step 1.2, step 1.3, L1] ∎
