---
id: cor-complete-intersection-betti-numbers-binomial
kind: corollary
title: "Complete Intersection Betti Numbers Binomial"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-resolution-minimality-maximal-ideal-sequence, def-koszul-betti-numbers-over-a-local-ring, lem-exterior-algebra-basis-monomials]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

For a length-$n$ regular sequence in the maximal ideal of a local ring, the minimal Koszul resolution has $\beta_i^K=\binom ni$ for $0\le i\le n$ and $0$ otherwise.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-resolution-minimality-maximal-ideal-sequence]], [[def-koszul-betti-numbers-over-a-local-ring]], [[lem-exterior-algebra-basis-monomials]].

## Proof

**Proof technique:** direct.

1.1 The minimality lemma identifies the Koszul ranks with the Koszul Betti numbers. In degree $i$ the free module has basis indexed by $i$-subsets of an $n$-set. [given, algebra]

2.1 There are $\binom ni$ such subsets and none in degrees outside $0,\ldots,n$, giving the stated table. [step 1.1, algebra] ∎
