---
page: nondeterministic-recursive-padding-and-time-separation
title: "Nondeterministic Recursive Padding and Time Separation"
status: draft
items: ["def-nondeterministic-acceptance-time-and-exact-clock", "lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time", "lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation", "lem-time-controlled-self-reference-for-nondeterministic-machines", "lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds", "lem-no-recursive-bound-covers-all-recursive-unary-languages", "thm-nondeterministic-recursive-padding-separation"]
examples: []
---

The distinction between shortest accepting time and all-branch running time matters throughout this page. A finite display/action verifier gives linear two-tape acceptance simulation, a padded code gives a genuinely linear prefix validator, and a literal compiler supplies quantitative self-reference without a deterministic search through branches. Union and cutoff constructions record their actual timing guarantees.

Repeated unary diagonalization first rules out a common recursive bound for all recursive unary languages. The main theorem then proves the identity-padding separation by two downward inductions with explicit fixed machine constants. Its single universal cutoff language lies in the all-branch class NTIME(T) and lies outside every stated shifted little-o lower class, without assuming monotonicity. The page uses effective finite constructions and no Axiom of Choice.
