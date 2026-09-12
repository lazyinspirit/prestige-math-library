---
page: sat-tableaux-and-quantified-space-completeness
title: "SAT Tableaux and Quantified-Space Completeness"
status: published
items: ["def-boolean-formulas-cnf-and-satisfiability-interface", "def-bounded-turing-computation-tableau-interface", "lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations", "lem-tableau-to-cnf-map-has-polynomial-size-and-time", "thm-cook-levin-sat-completeness-interface", "thm-three-sat-completeness-interface", "def-polynomial-space-and-nondeterministic-polynomial-space", "lem-space-bounded-machine-configuration-count", "thm-tqbf-pspace-completeness-interface"]
examples: []
---

This page builds SAT completeness from a fixed binary formula parser and a local computation tableau. The symbol-by-symbol decoding lemma supplies the logical direction that a satisfying tableau is a real accepting run; the size lemma supplies the separate polynomial construction bound. Gate clauses preserve satisfiability over fresh variables, and the explicit clause chain yields 3SAT completeness, including empty clauses.

The second part defines polynomial space under the library’s all-tape visited-cell convention. Configuration counting fixes the input so its unchanged unvisited suffix is not mistaken for free workspace. TQBF completeness is then proved by an explicit transition predicate and a single-copy midpoint recurrence, with both truth directions, prenex conversion and generation bounds. Restricted matrices and logarithmic auxiliary generation space are stated with their distinct tape-accounting convention.
