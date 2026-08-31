---
id: def-distinguishing-word
kind: definition
title: "Distinguishing words for states and for prefixes"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-right-language-and-equivalent-dfa-states, def-nerode-equivalence, def-dfa-acceptance-and-recognized-language]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
---

## Definition

Let $D=(Q,\Sigma,\delta,q_0,F)$ be a DFA with extended transition function
$\delta^*$.

- A word $x\in\Sigma^*$ **distinguishes** states $p,q\in Q$ when exactly one of
  the states $\delta^*(p,x)$ and $\delta^*(q,x)$ is accepting. Equivalently,
  $x$ witnesses that $p$ and $q$ are not state-equivalent.

- For a language $L\subseteq\Sigma^*$, a word $x\in\Sigma^*$ **distinguishes**
  words $u,v\in\Sigma^*$ when exactly one of $ux$ and $vx$ lies in $L$.
  Equivalently, $x$ witnesses that $u\not\equiv_L v$.

## Remarks

- Distinguishing words are the concrete witnesses behind both minimization and
  Myhill--Nerode lower bounds.

- The empty word $\varepsilon$ is allowed; it distinguishes two states exactly
  when one is accepting and the other is not.
