---
id: ex-every-dfa-is-an-nfa
kind: example
title: "Viewing a small DFA as an NFA with singleton transitions"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-every-dfa-is-an-nfa]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 3: Nondeterministic finite automata"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.03.pdf"
---

## Example

Consider the two-state DFA over $\{0,1\}$ with states $e,o$, start state $e$,
accepting state $e$, and transitions that toggle between $e$ and $o$ on input
$1$ and stay fixed on input $0$.

Regarded as an NFA, the same machine has singleton one-letter transition sets
and no epsilon-transitions. It still recognizes the language of words with an
even number of $1$'s.

## Facts & Assumptions

**Given:** The parity DFA just described.

[L1] By [[prop-every-dfa-is-an-nfa]], every DFA can be viewed as an NFA by
replacing each one-letter transition by a singleton transition set and adding
no $\varepsilon$-moves.

## Verification

**Proof technique:** direct.

1.1 The parity DFA has exactly one next state on each input symbol, so the associated NFA has transition sets $\{e\}$ or $\{o\}$ and never branches. [given]

2.1 Because there is only one live branch on every input, the NFA reaches exactly the same state as the DFA after every word. Therefore it accepts exactly the words with an even number of $1$'s. [L1, step 1.1]

3.1 This is a concrete instance of the DFA-to-NFA embedding from [L1]. [L1, step 2.1] ∎
