---
page: context-free-grammars-and-normal-forms
title: "Context-Free Grammars and Normal Forms"
status: published
items:
  - def-context-free-grammar
  - def-one-step-and-reflexive-transitive-derivation
  - def-language-generated-by-a-cfg
  - def-leftmost-and-rightmost-derivation
  - def-parse-tree-and-yield
  - thm-derivation-parse-tree-correspondence
  - def-ambiguity-and-inherent-ambiguity
  - def-nullable-generating-and-reachable-variable
  - thm-elimination-of-useless-symbols
  - thm-elimination-of-epsilon-productions
  - thm-elimination-of-unit-productions
  - def-chomsky-normal-form
  - thm-chomsky-normal-form
  - def-greibach-normal-form
  - lem-gnf-substitution-step-preserves-language
  - lem-gnf-left-recursion-elimination-preserves-language
  - thm-greibach-normal-form
  - thm-cfl-closure-under-union-concatenation-star-and-homomorphism
  - fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language
  - fs-cnf-preserves-epsilon-without-an-exception
examples: []
---

This page develops context-free grammars from derivations and parse trees
through ambiguity, grammar simplification, Chomsky and Greibach normal forms,
and the core closure constructions. The local route keeps the normal-form
arguments constructive: useless, epsilon, and unit elimination are proved
first, and the GNF conversion is justified by explicit substitution and
left-recursion rewrite lemmas.
