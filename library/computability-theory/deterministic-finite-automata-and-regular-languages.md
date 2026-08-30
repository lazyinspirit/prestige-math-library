---
page: deterministic-finite-automata-and-regular-languages
title: "Deterministic Finite Automata and Regular Languages"
status: draft
items:
  - def-deterministic-finite-automaton
  - def-extended-dfa-transition-function
  - thm-existence-and-uniqueness-of-extended-dfa-transition
  - lem-extended-dfa-transition-respects-concatenation
  - def-dfa-acceptance-and-recognized-language
  - def-regular-language-by-dfa-recognition
  - prop-every-finite-language-is-regular
  - thm-product-dfa-for-union-and-intersection
  - thm-complementing-accept-states-complements-the-language
  - cor-regular-languages-are-closed-under-boolean-operations
  - thm-dfa-for-language-difference
  - def-reachable-dfa-state
  - lem-removing-unreachable-states-preserves-language
  - prop-published-prefix-automata-extend-to-factor-avoidance-dfas
  - fs-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality
  - fs-complementing-a-dfa-complements-its-transition-graph
examples: []
---

This page fixes deterministic finite automata as total machines over a fixed
alphabet, proves the basic recursion law for the extended transition function,
and then uses explicit constructions for finite-language recognition, Boolean
closure, reachable-state trimming, and the sink-state repair needed to turn the
published prefix automaton for forbidden factors into a genuine DFA.
