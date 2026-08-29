---
id: cex-an-effective-encoding-need-not-be-prefix-free
kind: counterexample
title: "The encoding $w\\mapsto 1w$ is effective but not prefix-free"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-effective-binary-encoding-and-decoder, fs-every-effective-encoding-is-prefix-free]
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 7"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/78c0346bd81b6abcb2b1dde899adfc88_MIT18_404f20_lec7.pdf"
---

## Statement refuted

The statement "every effective binary encoding is prefix-free" is false.

## Facts & Assumptions

**Given:** The encoding $e(w)=1w$ on binary words.

[A1] The statement refuted is: every effective binary encoding is prefix-free.

[L1] An effective binary encoding is an injective map into $\{0,1\}^*$ with a total decoder, and prefix-free means that no codeword is a proper prefix of another, by [[def-effective-binary-encoding-and-decoder]].

## Counterexample

**Proof technique:** direct.

1.1 The map $e(w)=1w$ is effective: define a total decoder by removing the first bit from any binary word beginning with $1$, and sending every binary word not beginning with $1$ (including the empty word) to the fixed malformed token. Then the decoder recovers $w$ from $e(w)=1w$. [given, L1]

1.2 The codeword $1=e(\varepsilon)$ is a proper prefix of $10=e(0)$, so $e$ is not prefix-free. [given]

2.1 Therefore $e$ is a counterexample to [A1]. [A1, step 1.1, step 1.2] ∎
