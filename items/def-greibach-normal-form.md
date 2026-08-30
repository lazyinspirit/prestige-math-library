---
id: def-greibach-normal-form
kind: definition
title: "Greibach normal form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-context-free-grammar
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
    - title: "CSC444 CFLs and PDAs"
      url: "https://condor.depaul.edu/glancast/444class/docs/lecOct23.html"
---

## Definition

A context-free grammar $G=(V,\Sigma,P,S)$ is in **Greibach normal form** when
every production is of the form
$$ A\to a\alpha, $$
where $A\in V$, $a\in\Sigma$, and $\alpha$ is a possibly empty word of
variables, together with the optional exception $S\to\varepsilon$ when
$S$ does not occur on any right-hand side.

## Remarks

- In GNF, every nonempty derivation step emits one terminal immediately.

- The optional start-symbol $\varepsilon$-rule plays the same role here as in
  Chomsky normal form.
