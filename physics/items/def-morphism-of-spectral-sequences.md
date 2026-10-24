---
id: def-morphism-of-spectral-sequences
kind: definition
title: Morphism of spectral sequences
deps: ["def-homological-spectral-sequence", "def-cohomological-spectral-sequence", "thm-a-chain-map-induces-a-well-defined-map-on-homology"]
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

A **morphism of spectral sequences from page s** is a family of bidegree (0,0) maps $f_r:E^r\to D^r$ for r≥s, where both sequences are defined, such that $d_D^rf_r=f_rd_E^r$ and
$$f_{r+1}\alpha_r^E=\alpha_r^D H(f_r).$$
Use [[def-homological-spectral-sequence]] or [[def-cohomological-spectral-sequence]] as appropriate; the map on homology is the unique cycle-quotient map of [[thm-a-chain-map-induces-a-well-defined-map-on-homology]]. A map of abutments is additional filtered data, compatible with the stable graded maps; it is not inherent in f.

If $f_s$ is an isomorphism at every bidegree, all later $f_r$ are isomorphisms. In fact the inverse of $f_s$ commutes with differentials by multiplying the commutation equation on both sides by inverses. Thus $f_s$ and its inverse carry kernels and boundary images into each other and induce inverse quotient maps on homology. The displayed compatibility expresses $f_{s+1}$ as a composite of three isomorphisms. Repeating this argument a finite number of times proves the assertion at every r≥s.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90. Mapping Lemma 5.2.4 and Sharifi Lemma 4.1.4.
