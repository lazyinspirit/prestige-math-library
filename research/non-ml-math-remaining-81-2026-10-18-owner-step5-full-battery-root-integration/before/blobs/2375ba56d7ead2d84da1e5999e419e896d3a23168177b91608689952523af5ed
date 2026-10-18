---
id: ex-uniquely-decodable-code-not-prefix
kind: example
title: "A uniquely decodable binary code that is not prefix-free"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-binary-source-code-and-extension, def-binary-prefix-code, thm-mcmillan-inequality-for-finite-binary-codes]
justified_by: []
proof_strategy: direct
strategy: "Show the shorter word is a proper prefix, then give the forced first-word rule that uniquely parses every concatenation."
axiom_use: "No choice axiom is used; the parser is deterministic."
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.1, prefix and uniquely decodable code definitions"
---
## Facts & Assumptions

**Given:** The binary code on the two-symbol alphabet $\{1,2\}$ defined by $C(1)=0$ and $C(2)=01$.

[F1] [[def-binary-source-code-and-extension]]: The extension $C^*$ concatenates the codewords, and the code is uniquely decodable exactly when this extension is injective on all finite source words.

[F2] [[def-binary-prefix-code]]: A prefix code has no codeword that is a proper prefix of a different codeword.

[F3] [[thm-mcmillan-inequality-for-finite-binary-codes]]: Every finite binary uniquely decodable code satisfies $\sum_i2^{-\ell_i}\le1$.

## Example

The word $0$ is itself assigned to symbol 1 and is also the first bit of the word $01$ assigned to symbol 2. Thus the code fails the prefix condition. The next verification shows that the two codewords still admit a unique parse.

## Verification

1.1 The codeword $C(1)=0$ is a proper prefix of $C(2)=01$, so [F2] shows this code is not prefix-free. [F2, given]

1.2 Every codeword begins with $0$. If an encoded word begins with $01$, its first codeword must be $01$, since choosing $0$ would leave an unread suffix beginning with $1$, and no codeword begins with $1$. If the unread word begins with $00$, or consists only of $0$, its first codeword must be $0$. Repeating this forced rule on the remaining suffix consumes one or two bits at each step and ends after finitely many steps; the empty word is produced only by the empty source word. Hence every encoded word has a unique source parse, and [F1] gives unique decodability. [F1, F2, given, induction]

2.1 The lengths are $1$ and $2$, so the Kraft sum is $2^{-1}+2^{-2}=3/4\le1$, consistent with [F3]; this calculation is only a necessary-bound check, while unique decodability was proved in step 1.2. [F3, step 1.2, algebra] ∎
