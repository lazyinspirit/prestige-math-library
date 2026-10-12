---
page: suslin-trees-lines-algebras-and-independence
title: "Suslin Trees, Lines, Algebras, and Independence"
status: published
items:
  - def-suslin-hypothesis-and-suslin-algebra
  - lem-suslin-tree-normal-splitting-refinement
  - lem-suslin-tree-branch-first-difference-order
  - lem-linear-order-completion-existence-uniqueness-and-density
  - thm-suslin-tree-implies-suslin-line
  - lem-suslin-line-nowhere-separable-quotient
  - lem-nowhere-separable-suslin-line-nested-interval-tree
  - thm-suslin-line-implies-suslin-tree
  - lem-suslin-tree-forcing-is-countably-distributive
  - thm-suslin-tree-regular-open-algebra-is-suslin
  - lem-suslin-algebra-refining-antichain-tree
  - thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras
  - cor-suslin-tree-yields-nonproductive-ccc
  - thm-ma-aleph-one-eliminates-suslin-trees
  - cor-ma-and-not-ch-implies-suslin-hypothesis
  - def-countable-normal-tree-end-extension-forcing
  - thm-countably-closed-forcing-adds-a-normal-suslin-tree
  - thm-every-countable-linear-order-embeds-in-the-rationals
  - thm-special-trees-are-exactly-rationally-special
  - thm-specializing-forcing-kills-a-suslin-tree
  - thm-finite-support-iteration-kills-all-named-suslin-trees
  - cor-formal-consistency-of-suslin-hypothesis
  - cor-formal-consistency-of-not-suslin-hypothesis
  - thm-conditional-independence-of-suslin-hypothesis
examples: []
---

The Suslin Hypothesis is stated using the library's strong line convention:
a Suslin line is dense, has no endpoints, is boundedly complete, is ccc, and
is nonseparable. Starting from a Suslin tree, a normal infinitely splitting
refinement supports a first-difference order on maximal branches. Its exact
Dedekind completion, after possible endpoints are deleted, is a Suslin line.
Conversely, a nowhere-separable quotient of a Suslin line supplies the nested
closed intervals from which a Suslin tree is built. These arguments establish
the line--tree equivalence directly rather than using the earlier recorded
orientation result.

The Boolean-algebra strand proves both remaining directions of Kurepa's
equivalence. Suslin-tree forcing is ccc and countably distributive, so its
regular-open completion is a complete atomless ccc Boolean algebra satisfying
the displayed diagonal distributive law. In the other direction, recursively
refined maximal antichains of such an algebra form a normal splitting Suslin
tree. A split pair in a Suslin tree also gives a ccc forcing whose square is
not ccc, making the failure of productive ccc explicit.

The forcing applications separate three different mechanisms. Martin's Axiom
at aleph one specializes any alleged Suslin tree, and MA together with not-CH
therefore implies SH. A countably closed end-extension forcing instead adds a
normal Suslin tree by adjoining top levels and sealing every named maximal
antichain. Finite specialization forcing kills a fixed Suslin tree, while the
length-omega-two finite-support bookkeeping iteration schedules every
bounded-stage tree code and kills all final Suslin trees. The countable-order
embedding and rational-specialization equivalence supply the exact bridge
between countable antichain covers and the generic labeling used here.

All of these object-theory arguments are carried out in ZFC, with Choice
declared where simultaneous branch, interval, antichain, or enumeration choices
are made. The concluding independence result is deliberately metatheoretic.
The MA branch gives external relative consistency of SH, while the verified
constructible interpretation gives external relative consistency of not-SH.
The finite proof splices do not extract a transitive model from bare
consistency and do not claim a stronger arithmetized transfer than their
suppliers provide.
