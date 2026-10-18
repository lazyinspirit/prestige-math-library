---
id: thm-binary-kraft-criterion-for-finite-lengths
kind: theorem
title: "Binary Kraft criterion for finite positive codeword lengths"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-binary-source-code-and-extension, def-binary-prefix-code, thm-kraft-inequality]
justified_by: []
proof_strategy: direct
strategy: "Specialize the published binary Kraft inequality to a finite prefix code, and apply its effective allocation direction to a finite positive request list."
axiom_use: "No choice axiom is used; the allocation supplier is effective and the request list is finite."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.4, Kraft–McMillan inequality and the prefix-code converse"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slides 1–2 and 23, Kraft criterion for prefix-code lengths"
---
## Statement

For a finite list of positive integers $\ell_1,\ldots,\ell_m$, there is a binary prefix code on $[m]$ having codeword lengths $\ell_i$ if and only if
$$\sum_{i=1}^m2^{-\ell_i}\le1.$$

## Facts & Assumptions

**Given:** A finite source alphabet $[m]$ and positive integer lengths $\ell_i$.

[F1] [[thm-kraft-inequality]]: Every prefix-free set $D\subseteq\{0,1\}^*$ satisfies $\sum_{w\in D}2^{-|w|}\le1$; conversely, a computably enumerable request list with total weight at most one admits an effective prefix-free allocation of the requested lengths.

[F2] [[def-binary-source-code-and-extension]]: A binary code assigns a nonempty finite binary word to each source symbol.

[F3] [[def-binary-prefix-code]]: A binary prefix code is nonsingular and no codeword is a proper prefix of another.

## Proof

1.1 If a prefix code has lengths $\ell_i$, its finite set of codewords is prefix-free by [F3]. Apply the first assertion of [F1] to that set; the codewords are distinct by nonsingularity, so its Kraft sum is exactly $\sum_i2^{-\ell_i}\le1$. [F1, F3, given]

2.1 Suppose $\sum_i2^{-\ell_i}\le1$. Enumerate the finite request list $(i,\ell_i)$ in increasing order of $i$; this is a computable enumeration, and the requested lengths are positive by hypothesis. The converse in [F1] allocates distinct prefix-free binary words of those lengths. Assign the word allocated to request $i$ as $C(i)$. Their positive lengths make $C$ a binary source code by [F2]. Distinctness gives nonsingularity and prefix-freeness gives [F3], so the requested binary prefix code exists. [F1, F2, F3, given, construct] ∎
