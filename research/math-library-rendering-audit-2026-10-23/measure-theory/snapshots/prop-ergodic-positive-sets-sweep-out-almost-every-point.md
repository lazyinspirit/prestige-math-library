---
id: prop-ergodic-positive-sets-sweep-out-almost-every-point
kind: proposition
title: Positive sets sweep out ergodic probability systems
deps: [thm-ergodicity-and-invariant-functions, prop-measure-preserving-compositions-iterates-and-completions, prop-measure-of-a-set-difference,
  thm-finite-and-countable-subadditivity-of-measures]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: E–W Proposition 2.14 pp.24–25
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
verification:
  audited: 2026-09-10
origin: pipeline
proof_strategy: direct
---

## Statement

In a measure-preserving probability system the following are equivalent: ergodicity; for every measurable $A$ with $\mu(A)>0$, $\mu(\bigcup_{n\ge1}T^{-n}A)=1$; and for every measurable $A,B$ of positive measure there is $n\ge1$ with $\mu(B\cap T^{-n}A)>0$.

## Facts & Assumptions

[F1] On probability systems ergodicity is equivalent to null/conull modulo-null invariant sets [[thm-ergodicity-and-invariant-functions]].

[F2] Every nonnegative iterate preserves measure [[prop-measure-preserving-compositions-iterates-and-completions]].

[F3] Nested measurable sets of equal finite measure have null difference [[prop-measure-of-a-set-difference]].

[F4] A countable union of measurable null sets is null [[thm-finite-and-countable-subadditivity-of-measures]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Assume ergodicity and put $U=\bigcup_{n\ge1}T^{-n}A$. Then $T^{-1}U\subseteq U$ and $\mu(T^{-1}U)=\mu(U)\le1$. The finite-measure difference formula gives $\mu(U\setminus T^{-1}U)=0$. Since $\mu(U)\ge\mu(T^{-1}A)=\mu(A)>0$, the modulo-null invariant-set criterion yields $\mu(U)=1$. [F1, F2, F3, given]

2.1 If the sweep-out property holds and $\mu(B)>0$, then $\mu(B\cap U)=\mu(B)>0$. Were every $B\cap T^{-n}A$ null, their countable union $B\cap U$ would be null. Thus at least one intersection has positive measure. [step 1.1, given, F4]

3.1 If the positive-intersection property holds and $T^{-1}A=A$, then $T^{-n}A=A$ for all n. Taking $B=X\setminus A$ gives $B\cap T^{-n}A=\varnothing$ for every n. The property excludes both A and its complement having positive measure, proving ergodicity. [F1, step 2.1, given] ∎
