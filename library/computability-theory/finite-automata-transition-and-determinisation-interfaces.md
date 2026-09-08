---
page: finite-automata-transition-and-determinisation-interfaces
title: "Finite-Automata Transition and Determinisation Interfaces"
status: draft
items: [def-epsilon-nfa-word-transition, thm-subset-construction-reachability-invariant, prop-deterministic-automata-are-special-nondeterministic-automata]
examples: []
---

Epsilon transitions can change the available states without consuming a letter. This page constructs their finite closure and proves the meaning of the extended word transition. The subset construction then turns these state sets into a total DFA, with an exact invariant for every word. The final proposition embeds a DFA using singleton letter transitions and empty epsilon transitions.
