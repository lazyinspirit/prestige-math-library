---
id: ex-quartic-x-four-minus-x-minus-one-has-galois-group-s-four
kind: example
title: "$x^4-x-1$ has Galois group $S_4$ over $\\mathbb Q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-reduction-mod-prime-irreducibility-test, thm-rational-root-theorem, prop-resolvent-cubic-formula-and-discriminant, cor-irreducible-polynomial-is-separable-iff-derivative-nonzero, thm-galois-group-of-an-irreducible-quartic-by-its-resolvent]
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
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Example 3.2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Example

The polynomial $x^4-x-1$ has Galois group $S_4$ over $\mathbb Q$.

## Facts & Assumptions

**Given:** The reduction-modulo-a-prime irreducibility test ([[thm-reduction-mod-prime-irreducibility-test]]), the rational-root theorem ([[thm-rational-root-theorem]]), and the resolvent formula of [[prop-resolvent-cubic-formula-and-discriminant]].

[L1] A monic irreducible separable quartic over a field of characteristic not two, with irreducible resolvent cubic and nonsquare discriminant, has Galois group $S_4$ ([[thm-galois-group-of-an-irreducible-quartic-by-its-resolvent]]).

[L2] An irreducible polynomial is separable if and only if its derivative is nonzero ([[cor-irreducible-polynomial-is-separable-iff-derivative-nonzero]]).

## Verification

**Proof technique:** direct.

1.1 Modulo $2$ the polynomial is $x^4+x+1$. It has no root in $\mathbb F_2$, and the only irreducible quadratic $x^2+x+1$ does not divide it, so the reduction is irreducible. The reduction test makes $x^4-x-1$ irreducible over $\mathbb Q$. [given, algebra]

1.2 The resolvent formula gives $R(y)=y^3+4y-1$. Its only possible rational roots are $1$ and $-1$, neither of which is a root, so the resolvent cubic is irreducible. [given, algebra]

1.3 The discriminant is the resolvent discriminant $-4(4)^3-27(-1)^2=-283$, a negative nonsquare in $\mathbb Q$ and in particular nonzero. [given, algebra]

1.4 The derivative of $x^4-x-1$ is $4x^3-1$, a nonzero element of $\mathbb Q[x]$, and $\mathbb Q$ has characteristic zero, hence not two. [given, algebra]

2.1 Steps 1.1 and 1.4 with [L2] make $x^4-x-1$ separable. The hypotheses of [L1] are then supplied by steps 1.1, 1.2, 1.3, and 1.4, so the Galois group is $S_4$. [step 1.1, step 1.2, step 1.3, step 1.4, L1, L2] ∎
