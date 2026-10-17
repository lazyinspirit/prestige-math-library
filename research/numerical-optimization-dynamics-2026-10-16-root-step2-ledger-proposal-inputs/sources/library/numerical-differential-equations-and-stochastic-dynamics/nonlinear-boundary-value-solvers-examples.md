---
page: nonlinear-boundary-value-solvers-examples
title: "Nonlinear Boundary-Value Solvers — Examples"
status: draft
requires: [nonlinear-boundary-value-solvers]
items: []
examples: [ex-midpoint-collocation-has-two-branches, ex-unstable-single-shooting-amplifies-error, ex-newton-shooting-fails-from-singular-start]
---

These examples show why boundary-value solvers need local conditioning and branch information. A decaying-mode problem amplifies single-shooting slope error, a midpoint residual can have two simple branches, and Newton can stop at a singular initial guess even when the BVP has simple solutions.
