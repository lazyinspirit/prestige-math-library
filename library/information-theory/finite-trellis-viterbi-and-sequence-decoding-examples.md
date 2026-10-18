---
page: finite-trellis-viterbi-and-sequence-decoding-examples
title: Finite Trellises, Viterbi, and Sequence Decoding — Examples
status: published
requires:
  - finite-trellis-viterbi-and-sequence-decoding
items: []
examples:
  - cex-hmm-zero-evidence-has-no-posterior-map
  - cex-hmm-marginal-modes-are-not-sequence-map
  - ex-finite-trellis-viterbi-tie-and-unreachable-state
  - ex-hmm-viterbi-exact-sequence-map
---

Worked finite models show how ties and unreachable trellis states affect
traceback, how exact HMM path masses determine a sequence MAP, and why zero
observation evidence leaves no posterior MAP path. A second HMM calculation
distinguishes a whole-sequence MAP from independently maximizing each
time-indexed posterior marginal.
