---
id: lem-number-field-extension-ramified-at-finitely-many-places
kind: lemma
title: "A finite extension of number fields ramifies at finitely many places"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - thm-finite-normal-closures-exist-and-are-finite
  - cor-only-finitely-many-primes-ramify
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-ramification-and-residue-degrees-in-towers
proof_strategy: direct
axiom_use: >-
  The finite normal-closure and number-field prime-factorization suppliers state
  their choice assumptions. The tower argument adds no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, §3.3"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Theorem 3.35 and Remark 3.39(b), printed pp.60–62: the relative discriminant criterion and finite ramification without a freeness assumption."
    - title: "Neukirch, Algebraic Number Theory, Chapter I §8"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Proposition 8.4 and its complete discriminant/conductor proof, printed pp.49–50."
verification: {}
---

## Statement

Let $L/K$ be a finite extension of number fields. A finite place $v$ of $K$
ramifies in $L$ when the ramification index $e(u/v)$ is greater than $1$
for a place $u$ of $L$ above $v$. Then only finitely many finite places of
$K$ ramify in $L$.

## Statement references

[[def-number-field]]

[[def-ramification-index]]

[[cor-only-finitely-many-primes-ramify]]

[[thm-finite-normal-closures-exist-and-are-finite]]

[[thm-number-field-integral-ideal-factorisation-in-zf]]

[[thm-ramification-and-residue-degrees-in-towers]]

## Facts & Assumptions

**Given:** A finite extension $L/K$ of number fields.

[F1] The extension $L/\mathbb Q$ has a finite normal closure $M$ containing
$L$. [[thm-finite-normal-closures-exist-and-are-finite]]

[F2] Only finitely many rational primes ramify in the number field
$M/\mathbb Q$. [[cor-only-finitely-many-primes-ramify]]

[F3] Ramification indices multiply in a tower, and a rational prime has
only finitely many places above it in a number field.
[[thm-ramification-and-residue-degrees-in-towers]]
[[thm-number-field-integral-ideal-factorisation-in-zf]]

## Proof

**Proof technique:** reduce relative ramification to rational primes ramifying
in a finite normal closure.

**Given:** The data above.

1.1 Let $M$ be as in [F1], and let $T$ be the finite set of rational primes
ramified in $M/\mathbb Q$ supplied by [F2]. If $p\notin T$, then for every
place $w$ of $M$ above $p$, $e(w/p)=1$. For a tower $M/L/K/\mathbb Q$ and
places $w\mid u\mid v\mid p$, multiplicativity from [F3] gives
$$1=e(w/p)=e(w/u)e(u/v)e(v/p).$$
All factors are positive integers, so $e(u/v)=1$. Thus no place of $K$
above $p$ ramifies in $L$. [F1, F2, F3, given]

2.1 The exceptional rational primes form the finite set $T$, and each has
only finitely many places in $K$ by [F3]. Step 1.1 shows every ramified
place of $K$ lies above a member of $T$. Their union is finite, proving the
claim. [F3, step 1.1] ∎
