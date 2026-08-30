---
id: cex-swapping-dpda-accept-states-complements-the-language
kind: counterexample
title: "A looping DPDA shows naive final-state complementation can fail"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-swapping-dpda-accept-states-complements-the-language]
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
    - title: "Dexter C. Kozen, Automata and Computability"
      url: "https://dokumen.pub/automata-and-computability-9781461218449-1461218446-q-2917785.html"
---

## Statement refuted

The statement "swapping the accepting states of a DPDA automatically
complements its language" is false.

## Facts & Assumptions

**Given:** The one-state $\varepsilon$-loop DPDA from
[[fs-swapping-dpda-accept-states-complements-the-language]].

[A1] The statement refuted is: swapping the accepting states of a DPDA
automatically complements its language.

[L1] The cited false statement already shows that the original looping DPDA and
its state-swapped variant both recognize the empty language, by
[[fs-swapping-dpda-accept-states-complements-the-language]].

## Counterexample

**Proof technique:** direct.

1.1 The original machine recognizes $\varnothing$, because it loops forever on every marked input. After swapping the accepting status of its only state, the machine still has exactly the same infinite computation on every marked input and still recognizes $\varnothing$. [L1, given]

2.1 But the complement of $\varnothing$ is the full language $\Sigma^*$, so the swapped machine does not recognize the complement of the original language. [step 1.1]

3.1 Therefore this looping DPDA is a counterexample to [A1]. [A1, step 2.1] ∎
