---
id: cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion
kind: counterexample
title: "A noncoprime residue class has no Dirichlet conclusion"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-dirichlet-primes-arithmetic-progressions]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 4"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement refuted

The coprimality hypothesis $(a,q)=1$ in Dirichlet's theorem cannot be dropped.

## Facts & Assumptions

**Given:** Dirichlet's theorem applies only to reduced residue classes
([[thm-dirichlet-primes-arithmetic-progressions]]).

## Counterexample

**Proof technique:** direct.

1.1 Take $q=6$ and $a=3$. Every integer congruent to $3$ modulo $6$ is $6m+3=3(2m+1)$, so it is divisible by $3$. [given, algebra]

2.1 Hence the only prime in that residue class is $3$ itself. In particular, there are not infinitely many such primes. So the reduced-residue hypothesis in [[thm-dirichlet-primes-arithmetic-progressions]] is indispensable. [step 1.1, given, algebra] ∎
