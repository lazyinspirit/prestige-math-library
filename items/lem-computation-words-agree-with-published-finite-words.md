---
id: lem-computation-words-agree-with-published-finite-words
kind: lemma
title: "The computation-word convention agrees with the published finite-word definition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computation-alphabet-and-word-convention, def-finite-words-factor-avoidance-and-prefix-states]
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Let $\Sigma$ be a finite alphabet. The word convention of
[[def-computation-alphabet-and-word-convention]] and the published convention of
[[def-finite-words-factor-avoidance-and-prefix-states]] describe the same words
of each length, the same empty word, and the same displayed concatenation of
finite words. Hence the set $\Sigma^*$ on this page is exactly the set of
finite words over $\Sigma$ already used in the published item.

## Facts & Assumptions

**Given:** A finite alphabet $\Sigma$.

[L1] On this page, a word of length $n$ over $\Sigma$ is a function $n\to\Sigma$,
the empty word is the unique word of length $0$, and concatenation is the
offset construction of [[def-computation-alphabet-and-word-convention]].

[L2] The published item [[def-finite-words-factor-avoidance-and-prefix-states]]
defines a word of length $n$ over $\Sigma$ as a function $n\to\Sigma$, names
the unique length-zero word $\varepsilon$, and writes concatenation of words as
$uv$.

## Proof

**Proof technique:** direct.

1.1 For each natural number $n$, both [L1] and [L2] say that a word of length $n$ over $\Sigma$ is a function $n\to\Sigma$. So the two conventions have exactly the same length-$n$ words. [given, L1, L2]

1.2 Both [L1] and [L2] call the unique word of length $0$ the empty word $\varepsilon$, so the two empty-word conventions coincide. [L1, L2]

1.3 If $u:m\to\Sigma$ and $v:n\to\Sigma$, then [L1] defines $uv$ by taking the first $m$ values from $u$ and the next $n$ values from $v$. That is exactly the displayed word obtained by writing the letters of $u$ followed by the letters of $v$, which is what the published notation $uv$ of [L2] denotes. [L1, L2]

2.1 Since the words of every length agree by step 1.1, their union over all lengths agrees as well. So the set $\Sigma^*$ of [[def-computation-alphabet-and-word-convention]] is literally the same set of finite words already used in [[def-finite-words-factor-avoidance-and-prefix-states]]. [step 1.1, step 1.2, step 1.3] ∎
