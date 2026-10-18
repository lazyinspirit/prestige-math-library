---
page: iid-lossless-source-coding-and-the-aep
title: "IID Lossless Source Coding and the AEP"
status: draft
requires:
  - weak-laws-and-series-of-independent-random-variables
  - finite-alphabet-entropy-and-divergence
items:
  - def-finite-law-self-information-and-entropy
  - def-finite-alphabet-iid-source
  - def-finite-source-information-density-and-typical-set
  - def-fixed-length-lossless-block-code
  - lem-finite-alphabet-iid-information-aep
  - cor-aep-typical-set-probability-and-size-bounds
  - thm-fixed-length-lossless-source-coding
examples: []
---

For a finite alphabet and an IID law, bounded surprisal turns the finite-variance weak law into a quantitative information AEP. The resulting typical-set probability and cardinality bounds give deterministic fixed-length binary codes with vanishing block error at entropy rate. The converse proves both the minimum rate for vanishing error and error tending to one below entropy. Rates and entropy use the natural-log/nats convention of [[def-it-information-units-and-logarithm-base]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]] per source symbol; binary blocklengths are integer numbers of bits.
