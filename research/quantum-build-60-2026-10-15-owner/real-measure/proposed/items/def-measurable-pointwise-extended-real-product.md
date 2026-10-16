---
id: def-measurable-pointwise-extended-real-product
kind: definition
title: "A total pointwise product for extended-real-valued functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-extended-reals]
justified_by: []
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 3A, convention preceding Definition 3.2"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 3.2, after Proposition 3.6 (partial-product comparison)"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $X$ be any set and let $f,g:X\to\overline{\mathbb R}$, with the ordered
extended real line, reflection, and partial product of [[def-extended-reals]].
Define the function $f\odot_X g:X\to\overline{\mathbb R}$ at $x\in X$, writing
$a=f(x)$ and $b=g(x)$, by these disjoint cases:

- If $a=0$ or $b=0$, set $(f\odot_X g)(x)=0$.
- If $a,b$ are both finite and nonzero, set $(f\odot_X g)(x)=ab$, using the real field product.
- Otherwise $a,b$ are nonzero and at least one is infinite. Set $(f\odot_X g)(x)=+\infty$ when $a,b$ have the same sign, and $-\infty$ when their signs differ. Here $+\infty>0$ and $-\infty<0$.

The cases are exhaustive: after excluding zero values, either both values are
finite or at least one is infinite; total order assigns each nonzero value
exactly one sign. Each clause assigns one extended-real value. Thus this is a
well-defined operation on pairs of functions, without a measurability
hypothesis or a claim that the output is measurable.

It is symmetric in $f,g$. On finite values it agrees with the real product,
including when a value is zero. Wherever the partial scalar product of
[[def-extended-reals]] is defined it agrees with that product: the nonzero
finite and infinite cases use exactly its clauses, and its finite zero cases
have value zero. The four additional cases are explicitly

$$a=0,\ b=+\infty;\qquad a=0,\ b=-\infty;\qquad a=+\infty,\ b=0;\qquad a=-\infty,\ b=0,$$

and the function product has value zero in each.

Write $\underline c(x)=c$ for a real constant function. Its pointwise scalar
multiple of $f$ means $\underline c\odot_X f$. When this convention is declared,
$fg$ and $cf$ may abbreviate these function products.

## Remarks

This is a function-level convention for pointwise formulas, including formulas
for measurable functions. The partial scalar product on the extended real line
is unchanged; its four zero-infinity cases remain undefined. No rule for limits
of real products follows, and no extended-real field laws are asserted. Partial
pointwise addition remains undefined wherever opposite infinities meet.
