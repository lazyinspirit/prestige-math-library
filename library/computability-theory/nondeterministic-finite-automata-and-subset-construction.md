---
page: nondeterministic-finite-automata-and-subset-construction
title: "Nondeterministic Finite Automata and Subset Construction"
status: draft
items:
  - def-nfa-with-epsilon-moves
  - def-epsilon-closure-of-a-state-set
  - lem-epsilon-closure-is-a-closure-operator
  - def-extended-nfa-transition
  - def-nfa-acceptance-and-recognized-language
  - prop-every-dfa-is-an-nfa
  - def-subset-construction-dfa
  - lem-subset-construction-state-invariant
  - thm-subset-construction-preserves-language
  - cor-dfas-and-nfas-recognize-the-same-languages
  - thm-epsilon-elimination-for-nfas
  - thm-nfa-constructions-for-union-concatenation-and-star
  - prop-subset-construction-can-require-exponentially-many-states
  - fs-an-nfa-accepts-only-if-every-branch-accepts
  - fs-epsilon-is-an-input-symbol
examples: []
---

This page develops epsilon-NFAs from their state-set semantics through the
subset construction, then isolates three standard consequences: epsilon-moves
can be eliminated, regular operations admit direct NFA constructions, and the
deterministic simulation may require exponentially many states.
