---
id: cex-nonconstant-units-and-degree-drop-with-zero-divisors
kind: counterexample
title: 'Over $\mathbb Z/4$, a nonconstant polynomial can be a unit and product degree can drop'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [prop-polynomial-degree-laws-over-a-commutative-ring, prop-integers-modulo-n-as-a-quotient-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Section 22, coefficient-ring caveats'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement refuted

For every commutative ring $R$, every unit of $R[x]$ is constant and degrees add under multiplication of nonzero polynomials.

## Facts & Assumptions

**Given:** The ring $R=\mathbb Z/4$ and the polynomial $u=1+2x\in R[x]$.

[L1] Over a commutative ring, product degree is at most the sum of the degrees, and the coefficient at that sum is the product of the leading coefficients ([[prop-polynomial-degree-laws-over-a-commutative-ring]]).

[L2] The ring $\mathbb Z/4$ is the quotient ring $\mathbb Z/4\mathbb Z$, so $4=0$ in it ([[prop-integers-modulo-n-as-a-quotient-ring]]).

## Counterexample

**Proof technique:** direct.

1.1 In $R[x]$, $u^2=(1+2x)^2=1+4x+4x^2=1$ by [L2], so the nonconstant polynomial $u$ is a unit and is its own inverse. [given, L2, algebra]

2.1 Both factors $u$ have degree $1$, but their product has degree $0$; [L1] permits this drop because the top coefficient is $2\cdot2=0$ in $R$, so both parts of the statement are refuted. [step 1.1, L1, L2] ∎
