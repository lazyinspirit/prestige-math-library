---
id: def-collapse-at-a-page
kind: definition
title: Collapse at a page
deps: ["def-spectral-sequence-stabilization-at-a-bidegree"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
---



## Definition

A spectral sequence **collapses at $E^s$** if every differential at every bidegree is zero for every r≥s. The specified transitions then identify $E^s$ with the stable page of [[def-spectral-sequence-stabilization-at-a-bidegree]]. One zero differential does not meet this definition. Pointwise stabilization with no uniform bound R(p,q) also does not imply collapse at any fixed page. We use the same definition with subscripts in the cohomological convention.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90. The all-later-differentials convention follows Sharifi Definition 4.1.13; Weibel Definition 5.2.7 uses the narrower one-row/column terminology.
