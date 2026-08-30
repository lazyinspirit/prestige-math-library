---
id: fs-epsilon-is-an-input-symbol
kind: false-statement
title: "FALSE: epsilon is an input symbol"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nfa-with-epsilon-moves]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

**False claim:** in an NFA with epsilon-moves, the symbol $\varepsilon$ is one
more input symbol in the alphabet.

## Facts & Assumptions

**Given:** An NFA with epsilon-moves over an alphabet $\Sigma$.

[A1] The statement refuted is: $\varepsilon$ is an input symbol of the machine.

[L1] By [[def-nfa-with-epsilon-moves]], the alphabet is $\Sigma$, while
$\varepsilon$ appears only in the transition domain $\Sigma\cup\{\varepsilon\}$
to denote a move that consumes no input symbol.

## Refutation

**Proof technique:** direct.

1.1 The definition distinguishes the alphabet letters from $\varepsilon$-moves: letters of $\Sigma$ are read from the input word, whereas an $\varepsilon$-transition changes state without reading any letter. [L1, given]

2.1 So $\varepsilon$ is not part of the input alphabet itself. It is extra transition notation for "read nothing." [L1, step 1.1]

3.1 This contradicts [A1]. Therefore the claim is false. [A1, step 2.1] ∎
