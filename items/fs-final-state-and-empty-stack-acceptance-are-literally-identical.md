---
id: fs-final-state-and-empty-stack-acceptance-are-literally-identical
kind: false-statement
title: "FALSE: acceptance by final state and by empty stack are literally identical"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pda-acceptance-by-final-state, def-pda-acceptance-by-empty-stack, thm-final-state-and-empty-stack-acceptance-are-equivalent]
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
    - title: "Dexter C. Kozen, Automata and Computability"
      url: "https://dokumen.pub/automata-and-computability-9781461218449-1461218446-q-2917785.html"
---

## Statement

**False claim:** for a fixed PDA, acceptance by final state and acceptance by
empty stack are the same condition with no machine conversion.

## Facts & Assumptions

**Given:** A PDA whose start state $q_0$ is accepting, whose initial stack
symbol is $Z_0$, and which has no transitions at all.

[A1] The statement refuted is: for one fixed PDA, final-state acceptance and
empty-stack acceptance are literally identical.

[L1] By [[def-pda-acceptance-by-final-state]], the empty word is accepted by final state whenever the start state is already accepting.

[L2] By [[def-pda-acceptance-by-empty-stack]], empty-stack acceptance requires a computation that consumes the input and empties the stack.

[L3] By [[thm-final-state-and-empty-stack-acceptance-are-equivalent]], every language accepted in either mode is accepted by some PDA in the other mode; this language-class equivalence does not assert that the two modes agree for one fixed PDA.

## Refutation

**Proof technique:** direct.

1.1 In the displayed PDA, the empty word is accepted by final state in zero moves because the start state is accepting. [L1, given]

2.1 The same machine does not accept the empty word by empty stack, because the stack begins with $Z_0$ and there is no transition that removes it. So the required empty-stack configuration never occurs. [L2, step 1.1]

3.1 Thus the two acceptance notions differ on this fixed machine, contradicting [A1]. The correct general statement is the language-class equivalence from [L3]. [A1, L3, step 2.1] ∎
