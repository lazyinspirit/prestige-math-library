---
id: cex-z-mod-one-is-not-a-field
kind: counterexample
title: "$\\mathbb Z/1$ has one element and satisfies $[0]_1=[1]_1$, so it is not a field"
status: published
origin: session
deps: [thm-standard-representatives-modulo-n, thm-integers-modulo-n-basic-algebra, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Statement refuted

The modular operations do not make $\mathbb Z/n$ a field for every positive
modulus $n$: the boundary modulus $n=1$ is a counterexample.

## Facts & Assumptions

**Given:** The quotient $\mathbb Z/1$ with its modular operations.

[L1] The quotient $\mathbb Z/1$ has exactly one class ([[thm-standard-representatives-modulo-n]]).

[L2] Its modular operations satisfy the abelian-group, commutative-monoid and distributive identities, with additive identity $[0]_1$ and multiplicative identity $[1]_1$ ([[thm-integers-modulo-n-basic-algebra]]).

[L3] A field must have distinct additive and multiplicative identities ([[def-field]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], all integers determine the same class modulo $1$, so in particular $[0]_1=[1]_1$. [L1]

2.1 Although the other algebraic identities hold by [L2], the equality in step 1.1 violates the distinct-identities clause [L3]. Hence $\mathbb Z/1$ is not a field. [step 1.1, L2, L3] ∎
