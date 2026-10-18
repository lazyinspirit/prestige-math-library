---
id: def-binary-prefix-code
kind: definition
title: "Binary prefix codes and their code trees"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-binary-source-code-and-extension]
justified_by: []
strategy: "Define nonsingularity, the prefix condition, and the finite binary trie."
axiom_use: "No choice axiom is used; the code tree is a finite trie."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.1, prefix condition and binary code trees"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slides 2–4, prefix-free code trees and leaves"
---
## Definition

A binary code $C$ is a **prefix code** if it is nonsingular and no codeword $C(i)$ is a proper prefix of a different codeword $C(j)$. A word $u$ is a proper prefix of $v$ when $v=uw$ for some nonempty binary word $w$. Nonsingular means $C(i)\ne C(j)$ whenever $i\ne j$.

The **code tree** is the finite rooted trie whose vertices are all prefixes of codewords, whose root is $\varepsilon$, and whose edges append one bit, labeled $0$ or $1$. Since the code is prefix-free, its codewords are exactly the leaves; unused branches are absent. A binary word path from the root records its successive edge labels.
