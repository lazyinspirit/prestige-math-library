---
page: finite-trellis-viterbi-and-sequence-decoding
title: Finite Trellises, Viterbi, and Sequence Decoding
status: published
requires:
  - prefix-codes-and-finite-lossless-coding
items:
  - def-finite-layered-trellis
  - def-finite-hidden-markov-model-for-sequence-decoding
  - lem-finite-trellis-prefix-score-recurrence
  - lem-finite-hmm-joint-law-normalizes
  - alg-viterbi-max-product-on-finite-trellis
  - thm-viterbi-finite-trellis-is-optimal
  - alg-hmm-viterbi-sequence-map
  - thm-hmm-viterbi-is-sequence-map
examples: []
---

Finite trellises turn finite-horizon path optimization into a layer-by-layer
recurrence; the zero-length trellis has a unique empty path of score $1$. The
Viterbi procedure stores one maximizing predecessor per state and recovers a
complete maximum-score path by traceback. A finite discrete HMM
is a weighted trellis whose path weights are joint probabilities of hidden
states and observations. The sequence-MAP theorem handles ties and separates
positive-evidence decoding from the zero-evidence case, where no conditional
posterior path distribution exists.
