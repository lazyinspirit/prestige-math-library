---
id: thm-final-state-and-empty-stack-acceptance-are-equivalent
kind: theorem
title: "Acceptance by final state and by empty stack are equivalent for PDAs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pda-acceptance-by-final-state, def-pda-acceptance-by-empty-stack]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Dexter C. Kozen, Automata and Computability"
      url: "https://dokumen.pub/automata-and-computability-9781461218449-1461218446-q-2917785.html"
---

## Statement

For every PDA, the language it accepts by final state is accepted by some PDA
by empty stack, and the language it accepts by empty stack is accepted by some
PDA by final state.

## Facts & Assumptions

**Given:** A PDA $M$ over $\Sigma$.

[L1] By [[def-pda-acceptance-by-final-state]], final-state acceptance means that some computation consumes the whole input and ends in an accepting state.

[L2] By [[def-pda-acceptance-by-empty-stack]], empty-stack acceptance means that some computation consumes the whole input and empties the stack.

## Proof

**Proof technique:** cases.

1.1 For final-state to empty-stack, adjoin a fresh bottom marker $B$ below the original stack and a fresh drain state $d$. Whenever the simulated machine reaches an accepting state after consuming all input, the new machine takes an $\varepsilon$-move to $d$ and in state $d$ repeatedly pops the entire remaining stack, including $B$. By [L1] and [L2], the new machine accepts exactly the same words, now by empty stack. [L1, L2, given, construct]

1.2 For empty-stack to final-state, adjoin a fresh start state $s$, a fresh bottom marker $B$, and a fresh accepting state $f$. The new machine first pushes the old initial symbol above $B$, then simulates $M$, and the only way to enter $f$ is by an $\varepsilon$-move that pops $B$ after the simulated stack has become empty and the input has been fully consumed. By [L1] and [L2], this converts empty-stack acceptance into equivalent final-state acceptance. [L1, L2, given, construct]

2.1 The two constructions from steps 1.1 and 1.2 prove both directions of the equivalence. [step 1.1, step 1.2] ∎
