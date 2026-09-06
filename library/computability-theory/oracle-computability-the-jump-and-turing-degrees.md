---
page: oracle-computability-the-jump-and-turing-degrees
title: "Oracle Computability, the Jump, and Turing Degrees"
status: draft
items: [def-oracle-turing-machine, def-turing-reducibility-and-equivalence, lem-turing-reducibility-is-a-preorder, def-turing-degree-and-degree-order, lem-degree-order-is-representative-independent, def-tagged-join-of-oracles, thm-turing-degrees-form-an-upper-semilattice, def-turing-jump, lem-jump-is-well-defined-on-degrees, thm-every-oracle-is-strictly-below-its-jump, thm-jump-is-monotone, def-oracle-ce-completeness, thm-relative-halting-is-oracle-ce-complete, cor-finite-jumps-match-arithmetical-levels, def-truth-table-reduction, lem-total-oracle-functional-has-computable-use-bound, prop-truth-table-implies-turing-reduction, def-computably-dominated-oracle, lem-halting-oracle-is-not-computably-dominated, thm-computably-dominated-characterizes-truth-table-reducibility, thm-some-turing-reductions-are-not-truth-table-reductions, fs-an-oracle-machine-reads-the-infinite-oracle-at-once, fs-degree-join-is-set-union]
examples: []
---

An oracle is queried one bit at a time, but it changes which sets a fixed
finite program can decide. This page organizes that relative computational
power into Turing degrees, proves the tagged join is their least upper bound,
and studies the jump as relative diagonal halting. It then contrasts ordinary
Turing reductions with the uniform, everywhere-total oracle functionals of
truth-table reducibility.
