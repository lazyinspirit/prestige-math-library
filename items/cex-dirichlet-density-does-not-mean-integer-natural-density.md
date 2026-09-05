---
id: cex-dirichlet-density-does-not-mean-integer-natural-density
kind: counterexample
title: "Positive prime Dirichlet density does not give positive integer natural density"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-natural-and-dirichlet-density, thm-primes-residue-class-dirichlet-density, thm-chebyshev-prime-counting-bounds]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definitions 4.3 and 4.4"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement refuted

A positive Dirichlet density among the primes does not imply a positive natural
density inside all positive integers.

## Facts & Assumptions

**Given:** The definitions of natural and Dirichlet density, the residue-class
density theorem, and Chebyshev's upper bound for the prime-counting function
([[def-natural-and-dirichlet-density]],
[[thm-primes-residue-class-dirichlet-density]],
[[thm-chebyshev-prime-counting-bounds]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $P=\{p\text{ prime}:p\equiv1\pmod3\}$. By [[thm-primes-residue-class-dirichlet-density]], $P$ has relative Dirichlet density $1/2$ among the primes. [given, algebra]

2.1 As a subset of the integers, however, its counting function is at most the prime-counting function $\pi(x)$. By [[thm-chebyshev-prime-counting-bounds]], $\pi(x)/x\le c_2/\log x$ for all sufficiently large $x$, and this upper bound tends to $0$. Hence $P(x)/x\to0$, so $P$ has natural density $0$ among the positive integers despite its positive Dirichlet density among the primes. [step 1.1, given, algebra] ∎
