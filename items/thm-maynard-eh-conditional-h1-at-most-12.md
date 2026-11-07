---
dependency_level: 6
id: thm-maynard-eh-conditional-h1-at-most-12
kind: theorem
title: "Maynard’s EH-conditional bound H_1 ≤ 12"
status: draft
origin: pipeline
deps: [thm-maynard-multidimensional-sieve-dhl-criterion, def-maynard-variational-quantity-mk, thm-maynard-admissible-5-tuple-diameter-12, def-prime-level-of-distribution, thm-maynard-variational-lower-bound-m5, def-liminf-consecutive-prime-gap-hm]
justified_by: []
proof_strategy: direct
axiom_use: "The actual EH level assumption is retained; one fixed parameter and the accepted unqualified finite/sieve interfaces add no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
---

## Statement

Assume the primes have level of distribution $\theta$ for every fixed $0<\theta<1$. Then $H_1\le12$.


## Statement references

[[def-prime-level-of-distribution|Level of distribution]]

[[thm-maynard-multidimensional-sieve-dhl-criterion|Maynard criterion]]

[[thm-maynard-admissible-5-tuple-diameter-12|Diameter-12 admissible tuple]]


## Facts & Assumptions

**Given:** The original assumption that the primes have level of distribution $\theta$ for every fixed $0<\theta<1$.

[F1] [[thm-maynard-variational-lower-bound-m5]] gives $M_5>2$ by its exact local finite polynomial proof.

[F2] [[def-maynard-variational-quantity-mk]] defines $M_k$ as the supremum in $[0,+\infty]$ of the finite Riemann ratios over its nonempty test class.

[F3] [[thm-maynard-admissible-5-tuple-diameter-12]] gives the admissible tuple $\{0,2,6,8,12\}$ of diameter $12$.

[F4] [[thm-maynard-multidimensional-sieve-dhl-criterion]] gives $H_m$ at most the diameter of an admissible $k$-tuple at a given prime level $\theta>0$ whenever $M_k>2m/\theta$, for all $k\ge2,m\ge1$ without an additional choice hypothesis.

[F5] [[def-prime-level-of-distribution]] specifies the full-weight endpoint level meant in the given assumption; [[def-liminf-consecutive-prime-gap-hm]] defines the conclusion $H_1$.

## Proof

1.1 Choose a finite real $c$ with $2<c<M_5$ using [F1] and [F2]. If the supremum is finite take its midpoint with $2$; if infinite take $c=3$. Put $\theta=(2/c+1)/2$. Then $0<2/c<\theta<1$ and $2/\theta<c<M_5$. This is one fixed level parameter, so the original every-fixed-level assumption supplies exactly this level in the convention of [F5]. [F1, F2, F5, given, construct, algebra]

2.1 Apply [F4] to $k=5$, $m=1$, this fixed $\theta$ and the tuple in [F3]. Its numerical and admissibility hypotheses hold by [F3] and step 1.1, and its distribution hypothesis is the given EH assumption just specialized in that step. Thus $H_1\le12$. The original full Riemann variational interface is used, and no theorem asserting EH or GEH is invoked. [F3, F4, F5, step 1.1, algebra] ∎

## Source notes

The earlier obligation was the analytic sieve criterion; that complete local criterion is now supplied separately and is used at its literal accepted interface. The exact $M_5$ and tuple proofs remain unchanged. The displayed hypothesis is directly the prime-level EH hypothesis; the convolution GEH definition and its scalar convention are not substituted for it. The unconditional level theorem below one half alone does not establish this conditional bound. No endpoint-one or choice-scope strengthening is made.
