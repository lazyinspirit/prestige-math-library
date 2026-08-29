---
id: cex-a-language-is-a-set-of-symbols
kind: counterexample
title: "The language $\\{01\\}$ is not a set of alphabet symbols"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-language-over-an-alphabet, fs-a-language-is-a-set-of-symbols]
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 1"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/b4d9bf1573dccea21bee82cfba4224d4_MIT18_404f20_lec1.pdf"
---

## Statement refuted

The statement "every language over an alphabet $\Sigma$ is a subset of
$\Sigma$" is false.

## Facts & Assumptions

**Given:** The binary alphabet $\Sigma=\{0,1\}$ and the set $L=\{01\}$.

[A1] The statement refuted is: every language over an alphabet $\Sigma$ is a
subset of $\Sigma$.

[L1] A language over $\Sigma$ is a subset of $\Sigma^*$ by
[[def-language-over-an-alphabet]].

## Counterexample

**Proof technique:** direct.

1.1 The set $L=\{01\}$ is a language over $\Sigma$: the unique element $01$ is a binary word, so $L\subseteq\Sigma^*$. [given, L1]

1.2 But $01\notin\Sigma$, because $\Sigma$ contains only the two one-letter symbols $0$ and $1$. Therefore $L\nsubseteq\Sigma$. [given]

2.1 So $L$ is a counterexample to [A1]. [A1, step 1.1, step 1.2] ∎
