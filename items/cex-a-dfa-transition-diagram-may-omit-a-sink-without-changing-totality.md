---
id: cex-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality
kind: counterexample
title: "A missing `1`-transition shows the drawn machine is not yet a DFA"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-deterministic-finite-automaton, fs-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality]
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

## Statement refuted

The statement "a DFA transition diagram may omit a sink without changing
totality" is false.

## Facts & Assumptions

**Given:** The alphabet $\Sigma=\{0,1\}$ and the one-state picture with only the
loop $q\xrightarrow{0}q$.

[A1] The statement refuted is: omitting a sink transition does not affect
whether the diagram defines a DFA.

[L1] A DFA requires a total transition function on $Q\times\Sigma$, by
[[def-deterministic-finite-automaton]].

## Counterexample

**Proof technique:** direct.

1.1 The picture specifies a transition on input `0` but no transition on input `1`. So the pair $(q,1)$ has no image. [given]

2.1 By [L1], that means the picture does not define a DFA at all. Adding a sink state with a `1`-edge repairs the omission, which is exactly why the original claim fails. [L1, step 1.1]

3.1 Therefore this one-state picture is a counterexample to [A1]. [A1, step 2.1] ∎
