---
id: fs-a-language-is-a-set-of-symbols
kind: false-statement
title: "FALSE: a language is a set of symbols"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-language-over-an-alphabet, def-computation-alphabet-and-word-convention]
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 1"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/b4d9bf1573dccea21bee82cfba4224d4_MIT18_404f20_lec1.pdf"
---

## Statement

**False claim:** if $\Sigma$ is an alphabet, then every language over $\Sigma$
is a subset of $\Sigma$.

## Facts & Assumptions

**Given:** The binary alphabet $\Sigma=\{0,1\}$ and the set $L=\{01\}$.

[A1] The false claim: every language over an alphabet $\Sigma$ is a subset of
$\Sigma$.

[L1] A language over $\Sigma$ is a subset of $\Sigma^*$ by
[[def-language-over-an-alphabet]].

[L2] The word $01$ is a binary word of length $2$, hence an element of
$\Sigma^*$, by [[def-computation-alphabet-and-word-convention]].

## Refutation

**Proof technique:** direct.

1.1 By [L2], the word $01$ lies in $\Sigma^*$, so the one-element set $L=\{01\}$ is a subset of $\Sigma^*$. Therefore [L1] shows that $L$ is a language over $\Sigma$. [given, L1, L2]

1.2 The element $01$ is a word of length $2$, not a single symbol of the alphabet $\Sigma=\{0,1\}$. So $01\notin\Sigma$, and therefore $L$ is not a subset of $\Sigma$. [given, L2]

2.1 Thus $L$ is a language over $\Sigma$ for which the conclusion of [A1] fails. The claim is false. [A1, step 1.1, step 1.2] ∎
