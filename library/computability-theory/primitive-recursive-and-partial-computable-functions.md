---
page: primitive-recursive-and-partial-computable-functions
title: "Primitive Recursive and Partial Computable Functions"
status: draft
items:
  - def-initial-arithmetic-functions
  - def-composition-and-primitive-recursion-schemes
  - def-primitive-recursive-function
  - prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive
  - def-natural-number-coding-of-finite-sequences
  - thm-sequence-length-and-coordinate-functions-are-primitive-recursive
  - def-mu-minimization-and-partial-recursive-function
  - prop-ackermann-is-total-computable-but-not-primitive-recursive
  - lem-turing-step-coding-is-primitive-recursive
  - def-kleene-t-predicate-and-output-function
  - thm-kleene-normal-form
  - thm-partial-recursive-iff-turing-computable
  - def-lambda-term-beta-reduction-and-represented-function
  - thm-lambda-definable-iff-partial-recursive
  - fs-every-total-computable-function-is-primitive-recursive
  - fs-mu-minimization-is-always-total
examples: []
---

This page develops the classical ladder from primitive recursion to partial
recursion and then to machine computability. The route is explicit about the
intermediate coding work: finite sequences are coded by natural numbers, single
Turing steps are arithmetized, Kleene's $T$-predicate and output function are
defined from those codings, and the normal-form theorem turns machine
computation into minimization over coded histories.

The page closes with the two standard comparison seams. Ackermann's function
shows that total computability is strictly broader than primitive recursion,
while the lambda-calculus comparison identifies partial recursive functions with
lambda-definable ones without collapsing terms, computations, machine codes,
and extensional functions into the same object.
