---
id: def-binary-source-code-and-extension
kind: definition
title: "Finite binary source codes, extension, and expected length"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-finite-discrete-source-and-blocks]
justified_by: []
strategy: "Define nonempty binary words, code extension, unique decodability, and expected length."
axiom_use: "No choice axiom is used; codewords are finite binary words."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.1, definitions of uniquely decodable and prefix codes"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slides 1–2, finite source symbols and integer binary codeword lengths"
---
## Definition

A **binary word** is a finite sequence of symbols from $\{0,1\}$. The set $\{0,1\}^*$ includes the empty word $\varepsilon$, and $\{0,1\}^+$ is the set of nonempty binary words. A **binary source code** for the finite source $\mathcal X=[m]$ is a function $C:\mathcal X\to\{0,1\}^+$. Its codeword length is $\ell_i:=|C(i)|\ge1$.

The **extension** $C^*:\mathcal X^*\to\{0,1\}^*$ maps the empty source word to $\varepsilon$ and maps $i_1\cdots i_n$ to $C(i_1)\cdots C(i_n)$. The code is **uniquely decodable** if $C^*$ is injective, including comparisons between source words of different lengths. Its expected length for source law $p$ is
$$L_p(C):=\sum_{i=1}^m p_i\ell_i.$$
