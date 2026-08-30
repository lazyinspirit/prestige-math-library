---
id: fs-nondeterministic-acceptance-requires-every-branch-to-halt
kind: false-statement
title: "FALSE: nondeterministic acceptance requires every branch to halt"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-nondeterministic-accepting-computation]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
---

## Statement

**False claim:** a nondeterministic Turing machine accepts an input only when
every computation branch on that input halts.

## Facts & Assumptions

**Given:** A nondeterministic machine with states
$q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},q_L$, input alphabet $\{1\}$, tape
alphabet $\{1,\sqcup\}$, and allowed transitions
$$ \Delta(q_0,1)=\{(q_{\mathrm{acc}},1,R),(q_L,1,L)\},\qquad \Delta(q_L,1)=\{(q_L,1,L)\}. $$
Take input word $w=1$.

[A1] The statement refuted is: nondeterministic acceptance requires every
branch on the input to halt.

[L1] A nondeterministic machine accepts an input when there exists an accepting
computation on that input, by
[[def-nondeterministic-accepting-computation]].

## Refutation

**Proof technique:** direct.

1.1 One allowed first move from the initial configuration is $(q_{\mathrm{acc}},1,R)$. So there is a one-step computation branch that ends immediately in the accept state. [given]

1.2 Another allowed first move is $(q_L,1,L)$. From then on the only allowed move is again $(q_L,1,L)$, and the left-boundary rule keeps the head at cell $0$, so this branch never leaves the nonhalting state $q_L$ and therefore does not halt. [given]

2.1 By [L1] and step 1.1, the machine accepts $w$ because an accepting computation exists. But step 1.2 gives a branch that does not halt. Therefore [A1] is false. [A1, L1, step 1.1, step 1.2] ∎
