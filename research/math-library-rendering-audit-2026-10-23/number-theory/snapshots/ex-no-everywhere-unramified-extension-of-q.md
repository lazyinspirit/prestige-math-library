---
id: ex-no-everywhere-unramified-extension-of-q
kind: example
title: "No nontrivial everywhere unramified number field over Q"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-no-nontrivial-number-field-is-unramified-over-q
  - cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one
  - thm-ramified-primes-and-the-number-field-discriminant
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - lem-every-integer-above-one-has-a-prime-divisor
  - def-split-inert-ramified-and-unramified-prime
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Theorem 4.9, p.72."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§28 Theorem 28.3, p.147."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice. A finite number field $K\ne\mathbb Q$ cannot be
unramified at every finite rational prime. Indeed, if $K$ were unramified at
every rational prime, the ramification-discriminant criterion would leave
$d_K$ a nonzero integer with no prime divisor, so $|d_K|=1$; but every field
of degree $n>1$ has $|d_K|>1$. The statement concerns finite primes only, and
no archimedean convention is used.

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$ with $K\ne\mathbb Q$, so
that $n=[K:\mathbb Q]>1$, and the discriminant $d_K$.

[F1] A rational prime $p$ ramifies in $K/\mathbb Q$ if and only if $p\mid d_K$
([[thm-ramified-primes-and-the-number-field-discriminant]]).

[F2] Every finite number field $K$ with $[K:\mathbb Q]>1$ has a rational prime
that ramifies in $K$
([[cor-no-nontrivial-number-field-is-unramified-over-q]]).

[F3] For $n>1$ one has $|d_K|>1$
([[cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one]]).

[F4] $d_K$ is a nonzero signed integer
([[thm-number-field-discriminant-is-well-defined-and-nonzero]]).

[F5] Every integer greater than $1$ has a prime divisor
([[lem-every-integer-above-one-has-a-prime-divisor]]).

[F6] A prime is unramified in an extension when all its ramification indices
are $1$, and ramified otherwise; for $K/\mathbb Q$ the relevant primes of
$\mathbb Z$ are the rational primes
([[def-split-inert-ramified-and-unramified-prime]]).

## Proof

1.1 By [F4] the discriminant $d_K$ is a nonzero integer. [F4, given]

2.1 If $K$ is unramified at every rational prime, then no rational prime divides $d_K$: for if $p\mid d_K$, then [F1] makes $p$ ramified in $K$, and [F6] exhibits a ramification index exceeding $1$ at $p$, contrary to the hypothesis. [F1, F6, step 1.1]

2.2 Conversely, if no rational prime divides $d_K$, then $|d_K|=1$: otherwise $|d_K|>1$ and [F5] would produce a rational prime dividing $|d_K|$, hence dividing $d_K$, and $d_K\ne0$ by step 1.1 leaves $|d_K|=1$. [F4, F5, step 1.1]

3.1 Equivalence: $K$ is unramified at every rational prime if and only if $|d_K|=1$. Indeed, unramified everywhere gives no prime divisor of $d_K$ by step 2.1 and then $|d_K|=1$ by step 2.2; conversely, if $|d_K|=1$ then no rational prime divides $d_K$, so no rational prime ramifies by [F1]. [F1, step 2.1, step 2.2]

4.1 But $n>1$, so [F3] gives $|d_K|>1$, contradicting the equivalence in step 3.1; equivalently, [F2] directly produces a ramified rational prime. [F2, F3, step 3.1]

5.1 Therefore no finite number field $K\ne\mathbb Q$ is unramified at every finite rational prime. The argument uses only finite primes: $d_K$ is the determinant of the trace pairing of an integral basis, the criterion [F1] concerns rational primes, and no archimedean place enters; correspondingly $d_{\mathbb Q}=1$ and $\mathbb Q$ itself has no ramified primes. [F1, F2, step 3.1, step 4.1] ∎

## Remarks

The example is the contrapositive form of the ramification criterion: an
integer discriminant with no prime divisor must be $\pm1$, and $\pm1$ is
impossible for a field of degree greater than one. The hypothesis
$K\ne\mathbb Q$ is essential, since $d_{\mathbb Q}=1$
and $\mathbb Q$ has no ramified finite prime. The phrase "every finite rational prime" is deliberate:
the criterion and the discriminant are statements about finite primes, and no
claim about archimedean places is made or needed.
