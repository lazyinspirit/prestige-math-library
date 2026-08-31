---
id: thm-lambda-definable-iff-partial-recursive
kind: theorem
title: "A partial function is lambda-definable if and only if it is partial recursive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lambda-term-beta-reduction-and-represented-function, def-mu-minimization-and-partial-recursive-function, def-natural-number-coding-of-finite-sequences, thm-sequence-length-and-coordinate-functions-are-primitive-recursive, prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive, thm-partial-recursive-iff-turing-computable]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Avigad and Richard Zach, Lambda Definability"
      url: "https://builds.openlogicproject.org/content/lambda-calculus/lambda-definability/lambda-definability.pdf"
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://studylib.net/doc/28158899/turing-paper-1936"
---

## Statement

For a partial function $f:\mathbb N^k\rightharpoonup\mathbb N$, the following
are equivalent:

1. $f$ is lambda-definable.
2. $f$ is partial recursive.

## Facts & Assumptions

**Given:** A partial function $f:\mathbb N^k\rightharpoonup\mathbb N$.

[L1] Lambda-definability means representation by a lambda term on Church numerals via beta reduction, by [[def-lambda-term-beta-reduction-and-represented-function]].

[L2] Partial recursive functions are generated from the initial functions by composition, primitive recursion, and minimization, by [[def-mu-minimization-and-partial-recursive-function]].

[L3] A partial function on natural numbers is partial recursive exactly when it is Turing computable, by [[thm-partial-recursive-iff-turing-computable]].

[L4] Finite tuples of natural numbers have an effective natural-number coding
with primitive-recursive length and coordinate readers, by
[[def-natural-number-coding-of-finite-sequences]] and
[[thm-sequence-length-and-coordinate-functions-are-primitive-recursive]].

[L5] The fixed-arity tuple coder is primitive recursive: binary length and bit
extraction are bounded arithmetic operations, appending a block is
$u\,2^{|v|}+v$, and $2^m$ is obtained by primitive recursion from
multiplication
([[prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive]]).

## Proof

**Proof technique:** direct.

1.1 Assume $f$ is partial recursive. By [L2], it is built from the initial arithmetic functions by composition, primitive recursion, and minimization. The initial functions are represented by the standard lambda terms for zero, successor, and projections; composition is represented by term substitution; primitive recursion is represented by the usual iterator on Church numerals; and minimization is represented by a fixpoint term that performs the unbounded search $y=0,1,2,\dots$ until a zero-test succeeds. Hence some lambda term represents $f$ in the sense of [L1]. [L1, L2, given, construct]

1.2 Conversely, assume $f$ is lambda-definable. By [L1], there is a lambda term $F$ such that $F\,\overline{n_1}\cdots\overline{n_k}$ reaches a Church numeral exactly on the tuples where $f$ is defined, and the numeral reached is its value. Given the sequence code of $(n_1,\dots,n_k)$, a Turing machine uses [L4] to recover the coordinates, forms that application, and performs a breadth-first search through all finite beta-reduction sequences, halting when a branch reaches a Church numeral. This computes the unary coded version of $f$, so [L3] makes that coded function partial recursive. Composing with the primitive-recursive tuple coder from [L5] and coordinate readers from [L4] makes the original $k$-ary $f$ partial recursive. [L1, L3, L4, L5, given, construct]

2.1 Steps 1.1 and 1.2 prove both directions, so lambda-definability and partial recursiveness are equivalent for $f$. [step 1.1, step 1.2] ∎
