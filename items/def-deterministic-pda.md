---
id: def-deterministic-pda
kind: definition
title: "Deterministic pushdown automata and deterministic context-free languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-nondeterministic-pushdown-automaton, def-pda-acceptance-by-final-state]
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
    - title: "Alfred V. Aho, COMS W3261 Lecture 8: Pushdown Automata"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L8-PDA.html"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation"
      url: "https://www.cis.upenn.edu/~cis2620/notes/tcbook-u-lang.pdf"
---

## Definition

A **deterministic pushdown automaton** (DPDA) is a PDA
$$ M=(Q,\Sigma\cup\{\dashv\},\Gamma,\delta,q_0,Z_0,F) $$
with a distinguished endmarker $\dashv\notin\Sigma$ such that:

- for each state $q$, stack symbol $Z$, and
  $a\in\Sigma\cup\{\dashv,\varepsilon\}$, at most one pair $(p,\beta)$ lies in
  $\delta(q,a,Z)$;
- if some $\varepsilon$-move is enabled from $(q,Z)$, then no input-reading move
  is enabled from that same pair $(q,Z)$.

The machine recognizes a language $L\subseteq\Sigma^*$ by final state when it
accepts exactly the marked inputs $w\dashv$ in the sense of
[[def-pda-acceptance-by-final-state]].

A language is **deterministic context-free** when some DPDA recognizes it.

## Remarks

- The endmarker is not part of the language alphabet. It is an auxiliary symbol
  used to force the machine to detect the end of the real input.

- Determinism forbids branching on an input symbol or on $\varepsilon$, as well
  as the simultaneous availability of an $\varepsilon$-move and an
  input-reading move from the same state/top-of-stack pair.
