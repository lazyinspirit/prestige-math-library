---
id: cex-unfiltered-l-infinity-maurer-cartan-sum-is-undefined
kind: counterexample
title: "Without a complete filtration an infinite Maurer–Cartan sum may be undefined"
status: published
dependency_level: 6
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-koszul-sign-rule-for-graded-tensors
  - def-field
  - def-ring-characteristic
  - def-shifted-coalgebra-l-infinity-algebra
  - lem-field-is-a-commutative-ring
  - lem-square-zero-coderivation-is-higher-jacobi-identities
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
sources:
  references:
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §13.2"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
    - title: "Tom Lada and Jim Stasheff, Introduction to sh Lie algebras for physicists, sh Lie Structures"
      url: "https://arxiv.org/pdf/hep-th/9209099"
---

## Statement refuted

The unfiltered direct-sum L∞ data alone always makes
$\sum_{n\ge1}q_n(w,\ldots,w)/n!$ an element of the underlying graded space
for every degree-zero $w$.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$ and the shifted L∞ convention of
[[def-shifted-coalgebra-l-infinity-algebra]].

[F1] [[def-shifted-coalgebra-l-infinity-algebra]]: an L∞-structure is a
degree-one coderivation with square zero on the algebraic direct sum
$S^c(W)$.

[F2] [[lem-square-zero-coderivation-is-higher-jacobi-identities]]: it
suffices to verify the shifted unshuffle Jacobi identities to verify
$Q^2=0$.

[F3] [[def-koszul-sign-rule-for-graded-tensors]]: the unshuffle signs are
determined by the graded degrees; all nonzero inputs below have degree zero.

[F4] [[def-field]], [[def-ring-characteristic]], and
[[lem-field-is-a-commutative-ring]]: the field has characteristic zero, so
each $n!$ is nonzero and invertible.

## Counterexample

Take $V^1=kt$, $V^2=\bigoplus_{j\ge1}ke_j$, and $V^j=0$ otherwise, so
$W=V[1]$ has $W^0=kt$ and $W^1=\bigoplus_{j\ge1}ke_j$. For each $n\ge1$
define a graded-symmetric map $q_n:S^n(W)\to W$ by

$$q_n(t^{\odot n})=n!e_n,$$

and set it to zero on every symmetric basis tensor containing any $e_j$.
This defines an L∞-structure on the algebraic direct sum $S^c(W)$.

1.1 Each $q_n$ has degree $+1$, since its only nonzero input has degree zero and its output $e_n$ has degree one. It is graded-symmetric because $t$ has degree zero and all tensors containing an $e_j$ map to zero. [given, F1, F3, construct]

2.1 Every composition $q_m(q_n(-),-)$ vanishes: a nonzero inner value is a multiple of $e_n$, and every outer operation is zero when any input contains an $e_j$. Thus all Jacobi sums in [F2] vanish, and the specified operations do define an L∞-algebra. [F1, F2, step 1.1]

3.1 For $w=t$, the $n$th Maurer–Cartan summand is $q_n(t^{\odot n})/n!=e_n$, so the proposed sum is $\sum_{n\ge1}e_n$. Elements of $W^1=\bigoplus_{j\ge1}ke_j$ have finite support, whereas the partial sums have nonzero support in every index from $1$ through $n$ and never stabilize. Therefore $\sum_{n\ge1}e_n$ is not an element of $W$; without a complete filtration or other completion, this Maurer–Cartan expression is undefined. [F4, step 1.1, algebra] ∎

