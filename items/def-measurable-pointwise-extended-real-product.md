---
id: def-measurable-pointwise-extended-real-product
kind: definition
title: "A total pointwise product for extended-real-valued functions"
status: published
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-extended-reals]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 3A"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 3.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $X$ be any set and let $f,g:X\to\overline{\mathbb R}$, where
$\overline{\mathbb R}$ has the order, reflection, and partial arithmetic of
[[def-extended-reals]]. For each $x\in X$, put $a=f(x)$ and $b=g(x)$ and define
the value of the function $f\odot_X g:X\to\overline{\mathbb R}$ by these
disjoint cases:

- If $a=0$ or $b=0$, set $(f\odot_X g)(x)=0$.
- If $a,b$ are both finite and nonzero, set $(f\odot_X g)(x)=ab$, using the
  real field product.
- Otherwise $a,b$ are nonzero and at least one is infinite. Set
  $(f\odot_X g)(x)=+\infty$ when $a,b$ have the same sign, and
  $(f\odot_X g)(x)=-\infty$ when their signs differ. For a nonzero
  $c\in\overline{\mathbb R}$, its sign is positive when $c>0$ and negative
  when $c<0$; in particular $+\infty>0$ and $-\infty<0$.

This operation is defined for all functions $X\to\overline{\mathbb R}$; no
measurability of the inputs or output is asserted. It is a function-level
convention and does not extend or change the partial scalar product of
[[def-extended-reals]]: that scalar product remains undefined when one factor
is zero and the other is infinite. Where the partial scalar product is defined,
the function-level value agrees with it.

For $c\in\mathbb R$, let $\underline c:X\to\overline{\mathbb R}$ be the
constant function $\underline c(x)=c$. The notation $cf$ may abbreviate the
function $\underline c\odot_X f$; this abbreviation refers to the function
operation just defined, including when $c=0$ and $f(x)=\pm\infty$.

## Facts & Assumptions

**Given:** A set $X$ and functions $f,g:X\to\overline{\mathbb R}$. Show that
the clauses define exactly one value in $\overline{\mathbb R}$ at every point,
that the operation is symmetric, that it agrees with real multiplication on
finite inputs, and that it agrees with the existing partial scalar product
wherever that product is defined. Also identify the values assigned at all four
zero-infinity pairs.

[F1] [[def-extended-reals]]: $\overline{\mathbb R}$ consists of the real
numbers and $\pm\infty$. Its scalar product is real multiplication on finite
pairs, uses the signs of nonzero factors when an infinite factor is present,
and is undefined exactly for a zero paired with $+\infty$ or $-\infty$.

## Proof

**Proof technique:** partition the input values into zero, finite nonzero, and
nonzero with an infinite factor.

1.1 If $X=\emptyset$, the unique empty function is the required output. Otherwise take any $x\in X$ and set $a=f(x)$ and $b=g(x)$. If either is zero, only the first clause applies. If neither is zero, each is either finite or infinite by [F1]: when both are finite, only the second clause applies; otherwise at least one is infinite and only the third clause applies. Thus the cases are exhaustive and disjoint. Each clause assigns an element of $\overline{\mathbb R}$, and the nonzero values have uniquely determined signs by the total order in [F1]. Hence exactly one value is assigned at every $x$. [given, F1, cases, choose]

1.2 Swapping $a$ and $b$ leaves the zero condition and the finite-nonzero condition unchanged. The finite product is symmetric by real multiplication, and whether two signs agree is also unchanged by swapping them. Therefore $(f\odot_X g)(x)=(g\odot_X f)(x)$ for every $x$, so the function operation is symmetric. [given, F1, algebra]

2.1 If $a,b$ are finite and one is zero, the first clause gives zero, equal to their real product. If both are finite and nonzero, the second clause is exactly their real product. Thus the operation agrees with ordinary real multiplication on all finite inputs. [given, F1, step 1.1, algebra]

3.1 If at least one of $a,b$ is infinite and the partial scalar product is defined, the other factor is nonzero by [F1], so the third clause gives exactly the sign-rule value of that partial product. Its only undefined value pairs are $(0,+\infty)$, $(0,-\infty)$, $(+\infty,0)$, and $(-\infty,0)$; the function operation assigns zero to each by its first clause. This verifies the agreement where defined and records all four additional function-level values. [given, F1, step 1.1, step 2.1, cases] ∎

## Remarks

The symbol $\odot_X$ denotes a convention for pointwise function formulas. It
does not make $\overline{\mathbb R}$ a field, create distributivity or
cancellation laws at infinite values, or specify a rule for products of limits.
The existing pointwise sum remains partial when opposite infinities meet; no
subtraction, division, exponentiation, or absolute-value operation on
$\overline{\mathbb R}$ is added. A difference written as $u+(-v)$ still requires
that this partial sum be defined. No axiom of choice is used: the value at each
point is determined directly by the two input values.
