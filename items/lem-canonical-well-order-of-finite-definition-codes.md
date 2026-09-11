---
id: "lem-canonical-well-order-of-finite-definition-codes"
kind: "lemma"
title: "Well-ordering finite definition codes"
deps: ["def-definable-subsets-of-a-membership-structure", "thm-transfinite-induction"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Lemma 5.10 and Exercise 5.11 p17
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, fix a well-order $<$ of a set $A$. Fix a natural-number enumeration of pairs consisting of a membership formula and an allowed finite parameter arity. A valid definition code is $(e,a)$, where e specifies arity n and $a\in A^n$. Order codes first by $e\in\omega$, then lexicographically by their tuples of that fixed arity, using $<$. This well-orders the valid codes. For nonempty A every member of Def(A) has a unique least defining code. For empty A use instead one designated code decoding to empty.

## Facts & Assumptions

**Given:** ZF; a supplied well-order of A and fixed coded formula/arity enumeration. Finite-coordinate minimization establishes the well-order; formula-first ordering avoids the variable-length lexicographic defect.

[F1] [[def-definable-subsets-of-a-membership-structure]]: Def subsets are decoded from formulas and finite parameter tuples; Def(empty) is treated separately.

[F2] [[thm-transfinite-induction]]: Induction on well-orders is available without Choice, in particular on the finite arities.

## Proof

1.1 For arity zero the tuple set is the singleton containing the empty tuple. Induct on n: for a nonempty subset of $A^{n+1}$, take the least first coordinate occurring in it; its nonempty fibre of n-tuples has a least tuple by induction. Prepending the selected first coordinate gives the lexicographic least member. If A is empty, positive-arity tuple sets are empty and are well-ordered vacuously. Totality and transitivity follow by comparing the first coordinate at which two tuples differ. [F2, given]

2.1 In any nonempty set of valid codes, first minimize its natural-number e coordinates. The remaining tuples all have the single arity specified by e, and step 1.1 gives a least tuple. This proves the code order is a well-order. For each $b\in\operatorname{Def}(A)$ with A nonempty, its decoding fibre is a nonempty set by F1; its least element therefore exists uniquely. For empty A the designated singleton code has the same property. Minimization gives unique representatives, without any appeal to AC. [F1, step 1.1] ∎
