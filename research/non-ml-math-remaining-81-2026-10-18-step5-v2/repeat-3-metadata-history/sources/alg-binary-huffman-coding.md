---
id: alg-binary-huffman-coding
kind: algorithm
title: "Deterministic binary Huffman coding"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-finite-discrete-source-and-blocks, def-binary-source-code-and-extension, def-binary-prefix-code]
justified_by: [thm-huffman-coding-is-prefix-optimal]
strategy: "Specify least-weight merges, serial tie-breaking, left-right orientation, and the finite stop condition."
axiom_use: "No choice axiom is used; ties are resolved by a deterministic serial-number rule."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.5, Huffman merge procedure; §4.6, optimality"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slides 3–8, Huffman merge and contraction route"
---
## Definition

**Input:** A finite full-support source $(m,p)$ as in [[def-finite-discrete-source-and-blocks]], with the symbols ordered $1,\ldots,m$.

**Output:** A binary prefix code $C_H$ on these symbols.

If $m=1$, return the one-bit codeword $C_H(1)=0$.

If $m\ge2$, make one active leaf for each source symbol $i$, with weight $p_i$ and serial number $i$. Repeatedly do the following while more than one node is active:

1. Order active nodes lexicographically by (weight, serial number), using the ordinary order on real weights and then integer serials.
2. Remove the first two nodes. Make a new parent whose left child is the first removed node and whose right child is the second, whose weight is their sum, and whose serial is the next unused integer.
3. Insert this parent among the active nodes.

When one root remains, label every left edge $0$ and every right edge $1$. The codeword for symbol $i$ is the edge-label sequence on the path from the root to its original leaf. The order by serial number fixes all ties and fixes the bit orientation. The same merge rule applies to any finite active list of positive weights carrying distinct serial numbers; the source input initializes the serials as $1,\ldots,m$, and each new parent receives a fresh serial.

For each $m\ge2$, the algorithm executes exactly $m-1$ merges because each merge decreases the number of active nodes by one. The returned tree is finite. The next theorem proves the code is prefix-free and optimal; no complexity bound is asserted.
