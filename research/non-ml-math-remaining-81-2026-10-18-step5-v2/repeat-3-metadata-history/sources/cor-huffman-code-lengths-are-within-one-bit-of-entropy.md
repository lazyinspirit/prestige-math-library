---
id: cor-huffman-code-lengths-are-within-one-bit-of-entropy
kind: corollary
title: "Huffman expected length is within one bit of entropy"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-finite-discrete-source-and-blocks, def-base-two-entropy-of-a-finite-source, alg-binary-huffman-coding, lem-prefix-codes-are-uniquely-decodable, thm-huffman-coding-is-prefix-optimal, thm-shannon-bounds-for-finite-binary-codes, def-it-information-units-and-logarithm-base, thm-natural-logarithm-laws]
justified_by: []
proof_strategy: direct
strategy: "The entropy lower bound applies to the Huffman prefix code, and optimality compares it with the Shannon code."
axiom_use: "No choice axiom is used."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§§4.3–4.6, Shannon bound and Huffman optimality"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slides 1–9, Shannon bound and Huffman construction"
---
## Statement

Let $C_H$ be the code returned by [[alg-binary-huffman-coding]] for a finite full-support source $p$. If $m\ge2$, then
$$H_2(p)\le L_p(C_H)<H_2(p)+1.$$
If $m=1$, then $H_2(p)=0$ and $L_p(C_H)=1$.

## Facts & Assumptions

**Given:** A finite full-support source $p$ and its deterministic Huffman code $C_H$.

[F1] [[thm-huffman-coding-is-prefix-optimal]]: The deterministic Huffman procedure returns a binary prefix code minimizing $L_p(C)$ among all binary prefix codes on the same alphabet.

[F2] [[lem-prefix-codes-are-uniquely-decodable]]: Every binary prefix code is uniquely decodable.

[F3] [[thm-shannon-bounds-for-finite-binary-codes]]: Every finite binary uniquely decodable code has expected length at least $H_2(p)$, and for $m\ge2$ a binary prefix code exists with expected length strictly less than $H_2(p)+1$.

[F4] [[def-base-two-entropy-of-a-finite-source]]: $H_2(p)=-\sum_i p_i\log_2p_i$.

[F5] [[alg-binary-huffman-coding]]: For $m=1$, the algorithm returns $C_H(1)=0$.

[F6] [[def-it-information-units-and-logarithm-base]]: $\log_2t=\ln t/\ln2$ with $\ln2>0$.

[F7] [[thm-natural-logarithm-laws]]: $\ln1=0$.

## Proof

1.1 Suppose $m\ge2$. By [F1], $C_H$ is a prefix code; [F2] makes it uniquely decodable. Apply the lower bound in [F3] to obtain $H_2(p)\le L_p(C_H)$. [F1, F2, F3, given]

2.1 The upper-bound construction in [F3] is a prefix code on the same source. Since $C_H$ minimizes expected length among prefix codes by [F1], its length is no larger than that constructed code, hence $L_p(C_H)<H_2(p)+1$. [F1, F3, step 1.1, algebra]

3.1 If $m=1$, then $p_1=1$ by the source definition and $H_2(p)=0$ by [F4], [F6], and [F7]. The returned codeword has length one by [F5], so $L_p(C_H)=1$. [F4, F5, F6, F7, given, algebra] ∎

