---
page: prefix-codes-and-finite-lossless-coding
title: "Prefix Codes and Finite Lossless Coding"
status: draft
requires: [finite-alphabet-entropy-and-divergence, kolmogorov-complexity-and-algorithmic-randomness]
items:
  - def-finite-discrete-source-and-blocks
  - lem-finite-gibbs-inequality
  - def-base-two-entropy-of-a-finite-source
  - def-binary-source-code-and-extension
  - def-binary-prefix-code
  - thm-mcmillan-inequality-for-finite-binary-codes
  - def-ideal-real-arithmetic-interval-code
  - lem-prefix-codes-are-uniquely-decodable
  - thm-binary-kraft-criterion-for-finite-lengths
  - alg-binary-huffman-coding
  - thm-ideal-real-arithmetic-interval-code-is-prefix-and-lossless
  - alg-finite-register-rational-arithmetic-coder
  - thm-shannon-bounds-for-finite-binary-codes
  - thm-huffman-coding-is-prefix-optimal
  - cor-ideal-real-arithmetic-code-average-length
  - thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless
  - cor-huffman-code-lengths-are-within-one-bit-of-entropy
  - cor-finite-register-arithmetic-coder-average-length
examples: []
---

This page develops finite binary lossless coding for a finite full-support source. It defines code extensions, unique decodability, prefix codes, and binary code trees; proves the binary Kraft criterion and McMillan inequality; and establishes Shannon and Huffman length bounds. Entropy is recorded in nats by the existing finite-distribution interface and converted explicitly to bits for code lengths.

The arithmetic-coding section separates the ideal-real interval construction from an exact finite-register block coder. The latter assumes positive rational frequencies $q_i/Q$, a public maximum block length $N$, and fixed length-$n$ frames with known source model and outer frame count. Its integer registers are sized from $N$ and $Q$; no constant-word-width streaming or approximate-frequency guarantee is claimed.
