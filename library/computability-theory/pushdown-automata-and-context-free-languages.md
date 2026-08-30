---
page: pushdown-automata-and-context-free-languages
title: "Pushdown Automata and Context-Free Languages"
status: published
items:
  - def-nondeterministic-pushdown-automaton
  - def-pda-configuration-and-step
  - def-pda-acceptance-by-final-state
  - def-pda-acceptance-by-empty-stack
  - thm-final-state-and-empty-stack-acceptance-are-equivalent
  - thm-cfg-to-pda-construction
  - def-pda-computation-fragment-variable
  - lem-pda-fragment-variables-compose
  - thm-pda-to-cfg-construction
  - thm-pdas-recognize-exactly-the-cfls
  - def-deterministic-pda
  - lem-dpdas-have-unique-computations
  - prop-pda-to-cfg-construction-preserves-unambiguity
  - prop-deterministic-cfls-are-unambiguous
  - prop-deterministic-cfls-are-closed-under-complement
  - fs-swapping-dpda-accept-states-complements-the-language
  - fs-final-state-and-empty-stack-acceptance-are-literally-identical
examples: []
---

This page defines PDA runs and the two standard acceptance modes, proves the
two machine-translation theorems connecting PDA's and context-free grammars,
and then isolates the deterministic branch through unique computations,
unambiguity, and complement closure after the endmarker and loop repairs.
