---
id: fs-swapping-dpda-accept-states-complements-the-language
kind: false-statement
title: "FALSE: swapping the accepting states of a DPDA automatically complements its language"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-deterministic-pda, prop-deterministic-cfls-are-closed-under-complement]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Dexter C. Kozen, Automata and Computability"
      url: "https://dokumen.pub/automata-and-computability-9781461218449-1461218446-q-2917785.html"
---

## Statement

**False claim:** once a language is recognized by a DPDA, one complements the
language simply by declaring the old nonaccepting states to be accepting and
the old accepting states to be nonaccepting.

## Facts & Assumptions

**Given:** A DPDA with one state $q$, bottom marker $Z_0$, no accepting states,
and one transition $(q,Z_0)\xrightarrow{\varepsilon}(q,Z_0)$, so the machine
loops forever without reading input.

[A1] The statement refuted is: swapping the accepting states of a DPDA
automatically complements its language.

[L1] By [[def-deterministic-pda]], a DPDA may have an enabled $\varepsilon$-move as its unique move from a configuration.

[L2] By [[prop-deterministic-cfls-are-closed-under-complement]], complementation of DPDA languages requires an explicit construction, not merely a relabeling of states.

## Refutation

**Proof technique:** direct.

1.1 The displayed machine recognizes the empty language, because on every marked input it follows the unique $\varepsilon$-loop forever and never reaches an accepting final state. [L1, given]

2.1 If we merely declare the state $q$ to be accepting, the machine still follows exactly the same infinite $\varepsilon$-loop on every marked input, so it still recognizes the empty language. In particular, it does not recognize the complement $\Sigma^*$. [L1, step 1.1]

3.1 This contradicts [A1]. The complement theorem [L2] needs the endmarker and loop repairs; naive state swapping does not suffice. [A1, L2, step 2.1] ∎
