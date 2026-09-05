---
id: ex-dirichlet-density-of-primes-in-a-small-progression
kind: example
title: "Dirichlet density for a small prime progression"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-primes-residue-class-dirichlet-density]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Theorem 4.11"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

For modulus $3$, the primes congruent to $1$ modulo $3$ have relative
Dirichlet density $1/2$ among the primes.

## Facts & Assumptions

**Given:** The residue-class Dirichlet-density theorem
([[thm-primes-residue-class-dirichlet-density]]).

## Verification

**Proof technique:** direct.

1.1 The reduced residue classes modulo $3$ are $1$ and $2$, so [[thm-primes-residue-class-dirichlet-density]] gives $\sum_{p\equiv1\,(3)}p^{-s}=\frac12\log\frac1{s-1}+O(1)$ and the same formula for the class $2$. [given, algebra]

2.1 Thus each reduced class carries half of the logarithmic divergence among the primes. The small primes $7,13,19,31,\dots$ illustrate the statement, but the proof is the theorem from step 1.1, not the finite list. [step 1.1, given] ∎
