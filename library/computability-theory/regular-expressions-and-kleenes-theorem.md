---
page: regular-expressions-and-kleenes-theorem
title: "Regular Expressions and Kleene's Theorem"
status: draft
items:
  - def-regular-expression-syntax
  - def-regular-expression-denotation
  - lem-denotation-is-structurally-well-defined
  - thm-regular-expression-to-epsilon-nfa
  - def-generalized-nfa
  - def-gnfa-state-elimination
  - lem-state-elimination-preserves-path-language
  - thm-dfa-to-regular-expression
  - thm-kleenes-theorem
  - thm-closure-under-homomorphic-image
  - thm-closure-under-inverse-homomorphism
  - thm-closure-under-left-and-right-quotient
  - def-regular-language-decision-problems
  - thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable
  - fs-regular-expression-syntax-is-its-denoted-language
  - fs-state-elimination-has-a-unique-output-expression
examples: []
---

This page separates regular-expression syntax from its language denotation,
builds the two automata-conversion directions behind Kleene's theorem, and then
packages three standard closure families together with the basic DFA decision
procedures.
