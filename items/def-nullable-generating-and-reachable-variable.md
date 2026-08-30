---
id: def-nullable-generating-and-reachable-variable
kind: definition
title: "Nullable, generating, and reachable variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-context-free-grammar
  - def-one-step-and-reflexive-transitive-derivation
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
---

## Definition

Let $G=(V,\Sigma,P,S)$ be a context-free grammar.

- A variable $A\in V$ is **nullable** when $A\Rightarrow_G^*\varepsilon$.
- A variable $A\in V$ is **generating** when $A\Rightarrow_G^*w$ for some
  terminal word $w\in\Sigma^*$.
- A variable $A\in V$ is **reachable** when there exist sentential forms
  $x,y$ over $V\cup\Sigma$ with
  $$ S\Rightarrow_G^* xAy. $$

A variable is **useful** when it is both generating and reachable.
