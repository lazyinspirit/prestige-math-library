---
id: def-pda-computation-fragment-variable
kind: definition
title: "The PDA fragment variable $[p,Z,q]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-context-free-grammar, def-pda-configuration-and-step]
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

Let $M=(Q,\Sigma,\Gamma,\delta,q_0,Z_0,F)$ be a PDA that accepts by empty stack.

For states $p,q\in Q$ and a stack symbol $Z\in\Gamma$, the **fragment
variable**
$$ [p,Z,q] $$
denotes the language of words $x\in\Sigma^*$ such that for every stack suffix
$\alpha\in\Gamma^*$,
$$ (p,x,Z\alpha)\vdash_M^*(q,\varepsilon,\alpha). $$

Thus $[p,Z,q]$ describes exactly the words that remove the top symbol $Z$,
change state from $p$ to $q$, and leave the rest of the stack untouched.
