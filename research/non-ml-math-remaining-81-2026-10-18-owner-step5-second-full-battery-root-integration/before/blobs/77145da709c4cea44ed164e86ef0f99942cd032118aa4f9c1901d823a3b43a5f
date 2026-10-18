---
id: lem-prefix-codes-are-uniquely-decodable
kind: lemma
title: "Every finite binary prefix code is uniquely decodable"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-binary-source-code-and-extension, def-binary-prefix-code]
justified_by: []
proof_strategy: direct
strategy: "Decode the first codeword greedily: at most one codeword can be an initial segment, and removing it strictly shortens the unread finite word."
axiom_use: "No choice axiom is used; the greedy parse is uniquely determined."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.1, prefix condition, uniquely decodable codes, and on-the-fly parsing"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slides 2–4, prefix-code trees and leaves"
---
## Statement

Every binary prefix code for a finite source is uniquely decodable.

## Facts & Assumptions

**Given:** A finite source and a binary prefix code $C$.

[F1] [[def-binary-source-code-and-extension]]: Codewords are nonempty finite binary words, and unique decodability means injectivity of the concatenation extension on all finite source words.

[F2] [[def-binary-prefix-code]]: Distinct codewords are nonempty, nonsingular, and no codeword is a proper prefix of another.

## Proof

1.1 Among two distinct codewords that are initial segments of the same binary word, one would be a prefix of the other: compare their lengths, since the shorter initial segment agrees with the initial part of the longer. By [F2], at most one codeword can be an initial segment of any binary word. [F2, given]

2.1 To parse a word in the range of $C^*$, repeatedly take its unique initial codeword from step 1.1 and remove it. Each removal shortens the unread finite word because codewords are nonempty by [F1]; the process therefore reaches the empty word after finitely many removals. At every stage the next codeword is forced, so the resulting source word is unique; the empty output is produced only by the empty source word. Thus $C^*$ is injective, which is unique decodability by [F1]. [F1, F2, step 1.1, given, algebra] ∎

