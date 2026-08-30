---
id: fs-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality
kind: false-statement
title: "FALSE: a DFA transition diagram may omit a sink without changing totality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-deterministic-finite-automaton]
proof_strategy: direct
verification:
  audited: 2026-08-30
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

**False claim:** once a transition diagram has all of its "interesting" edges,
one may omit a sink transition and still regard the picture as specifying a DFA.

## Facts & Assumptions

**Given:** The alphabet $\Sigma=\{0,1\}$ and a one-state picture with state
$q$, start state $q$, and only one drawn edge, a loop $q\xrightarrow{0}q$.

[A1] The statement refuted is: omitting a sink transition from a DFA diagram
does not affect whether the diagram defines a total DFA.

[L1] A DFA requires a total transition function
$\delta:Q\times\Sigma\to Q$, by [[def-deterministic-finite-automaton]].

## Refutation

**Proof technique:** direct.

1.1 In the displayed picture, the input pair $(q,0)$ has a specified next state, namely $q$. But the input pair $(q,1)$ has no specified next state at all. [given]

2.1 Therefore the picture does not determine a total function on $Q\times\Sigma$, so by [L1] it does not yet define a DFA. [L1, step 1.1]

3.1 This contradicts the conclusion of [A1]. The omitted transition really matters: one must add a sink or some other specified $1$-transition to obtain a DFA. [A1, step 2.1] ∎
