---
page: the-cook-levin-theorem
title: "The Cook--Levin Theorem"
status: published
items:
  - def-boolean-formula-cnf-and-sat
  - prop-sat-is-in-np
  - def-bounded-computation-tableau
  - lem-tableau-cell-alphabet-is-constant
  - def-local-tableau-window
  - lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal
  - lem-exactly-one-symbol-constraints-have-polynomial-size
  - lem-start-accept-and-transition-constraints-have-polynomial-size
  - lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs
  - lem-cook-levin-map-is-polynomial-time
  - thm-cook-levin-sat-is-np-complete
  - def-tseitin-extension-variable
  - lem-tseitin-transformation-is-linear-size-and-equisatisfiable
  - thm-three-sat-is-np-complete
examples:
  - fs-cook-levin-enumerates-all-branches
  - fs-naive-distribution-to-cnf-is-always-polynomial
---

This page localizes SAT and then proves the Cook-Levin theorem by encoding one
polynomially bounded nondeterministic computation branch as a bounded tableau.
The clause families are separated into cell, start, move, and accept
constraints so that correctness and size bounds stay distinct obligations.

After SAT completeness is established, the page adds the standard Tseitin
epilogue. Extension variables keep CNF conversion linear, which makes the
polynomial reduction from SAT to 3-SAT explicit and also clarifies why naive
full distribution is the wrong conversion mechanism.
