---
dependency_level: 5
id: thm-polymath8b-geh-conditional-h1-at-most-6
kind: theorem
title: "Polymath8b’s GEH-conditional bound H_1 ≤ 6"
status: draft
origin: pipeline
deps: [thm-polymath8b-geh-dhl-3-2-criterion, thm-polymath8b-admissible-3-tuple-diameter-6, def-liminf-consecutive-prime-gap-hm]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
proof_strategy: direct
---

## Statement

Assume GEH($\theta$) for every fixed $0<\theta<1$. Then $H_1\le6$.


## Statement references

[[def-liminf-consecutive-prime-gap-hm|Definition of H_1]]

[[thm-polymath8b-geh-dhl-3-2-criterion|DHL 3,2 under GEH]]

[[thm-polymath8b-admissible-3-tuple-diameter-6|Admissible triple of diameter 6]]


## Facts & Assumptions

**Given:** Exactly the GEH hypotheses in the original Statement.

[F1] [[thm-polymath8b-geh-dhl-3-2-criterion]] gives infinitely many translates with two prime coordinates for every admissible triple.

[F2] [[thm-polymath8b-admissible-3-tuple-diameter-6]] supplies the admissibility of $\{0,2,6\}$.

[F3] [[def-liminf-consecutive-prime-gap-hm]] defines $H_1=\liminf_n(p_{n+1}-p_n)$.

## Proof

1.1 Apply [F1] to the [F2] triple. Infinitely many positive integers $n$ have two distinct primes in $\{n,n+2,n+6\}$, so they lie in an interval of length6. These $n$ are unbounded since a bounded integer set is finite. [F1, F2, given, algebra]

2.1 For any two such primes $p<q$, the finite increasing list of primes in $[p,q]$ contains a consecutive-prime pair; it is also consecutive in the global prime ordering and its gap is at most $q-p\le6$. Its smaller prime is at least $n$, so the resulting pair indices are unbounded. Thus for every index cutoff some later consecutive gap is at most6, and the liminf in [F3] is at most6. This is exactly the original conclusion. [F3, step 1.1, algebra] ∎ [F3, step 1.1, algebra]

## Proof status

Complete from the full vanishing-marginal analytic criterion and the already supplied admissible triple. The full GEH hypothesis is retained; no GEH truth, stronger bound or choice hypothesis is asserted.
