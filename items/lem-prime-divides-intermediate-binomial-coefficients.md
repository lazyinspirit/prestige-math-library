---
id: lem-prime-divides-intermediate-binomial-coefficients
kind: lemma
title: "A prime $p$ divides $\\binom pk$ for $0<k<p$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-binomial-coefficient, thm-binomial-closed-formula, def-prime, thm-euclids-lemma]
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
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 3"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

If $p$ is prime and $0<k<p$, then

$$p\mid\binom pk.$$

## Facts & Assumptions

**Given:** A prime $p$ and a natural number $k$ with $0<k<p$.

[L1] Binomial coefficients are natural numbers ([[def-binomial-coefficient]]).

[L2] The closed formula gives $\binom nk\,k!\,(n-k)!=n!$ for $k\le n$ ([[thm-binomial-closed-formula]]).

[L3] A prime has no positive divisor strictly between $1$ and itself ([[def-prime]]).

[L4] If a prime divides a product of integers, it divides one of the factors ([[thm-euclids-lemma]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L2] to $(p,k)$ and $(p-1,k-1)$ and cancelling the common nonzero factorial factors yields the integer identity $k\binom pk=p\binom{p-1}{k-1}$. [given, L1, L2, algebra]

2.1 Thus $p$ divides $k\binom pk$. Since $0<k<p$, [L3] gives $p\nmid k$. [step 1.1, L3]

3.1 Euclid's lemma [L4] therefore forces $p\mid\binom pk$. The excluded endpoints have coefficient $1$ and are not part of the claim. [step 2.1, L4] ∎
