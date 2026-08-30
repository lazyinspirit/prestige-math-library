---
id: def-pda-acceptance-by-final-state
kind: definition
title: "Acceptance by final state for a PDA"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-pda-configuration-and-step]
verification:
  precheck: n/a
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

## Definition

Let $M=(Q,\Sigma,\Gamma,\delta,q_0,Z_0,F)$ be a PDA.

A word $w\in\Sigma^*$ is **accepted by final state** when there exist
$q\in F$ and $\alpha\in\Gamma^*$ such that
$$ (q_0,w,Z_0)\vdash_M^*(q,\varepsilon,\alpha). $$

The set of words accepted in this sense is denoted $T(M)$.
