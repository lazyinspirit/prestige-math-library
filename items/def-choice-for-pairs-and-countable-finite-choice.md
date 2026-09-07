---
id: def-choice-for-pairs-and-countable-finite-choice
kind: definition
title: "Choice for pairs and countable finite choice"
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, §8.2, Theorem 8.3(ii), p.123"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
    - title: "Morillon, Synthèse, §2.2.1, printed p.6"
      url: https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf
---

## Definition

Work in ZF. $\mathrm{AC}_2$ says: for every set $I$ and family $(X_i)_{i\in I}$ of two-element sets there is $c:I\to\bigcup_{i\in I}X_i$ with $c(i)\in X_i$ for every $i$. The restriction to $I=\omega$ is $\mathrm{AC}_{\omega,2}$.

$\mathrm{AC}_{\omega,\mathrm{fin}}$ says the same for every $\omega$-indexed family of **nonempty finite** sets. No ordering of the members of those finite sets is supplied. The empty index family has the empty choice function. These principles restrict the families in countable choice and AC; an arbitrary family of pairs need not be countably indexed.
