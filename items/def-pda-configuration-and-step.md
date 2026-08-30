---
id: def-pda-configuration-and-step
kind: definition
title: "PDA configurations and one-step moves"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-nondeterministic-pushdown-automaton]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Dexter C. Kozen, Automata and Computability"
      url: "https://dokumen.pub/automata-and-computability-9781461218449-1461218446-q-2917785.html"
---

## Definition

Fix a PDA $M=(Q,\Sigma,\Gamma,\delta,q_0,Z_0,F)$.

A **configuration** of $M$ is a triple
$$ (q,w,\alpha)\in Q\times\Sigma^*\times\Gamma^* $$
where $q$ is the current state, $w$ is the unread input, and $\alpha$ is the
current stack content. We read the leftmost symbol of $\alpha$ as the top of
the stack.

There is a **one-step move**
$$ (q,aw,Z\gamma)\vdash_M(p,w,\beta\gamma) $$
when $(p,\beta)\in\delta(q,a,Z)$, and there is a one-step move
$$ (q,w,Z\gamma)\vdash_M(p,w,\beta\gamma) $$
when $(p,\beta)\in\delta(q,\varepsilon,Z)$.

Write $\vdash_M^*$ for the reflexive-transitive closure of $\vdash_M$.
