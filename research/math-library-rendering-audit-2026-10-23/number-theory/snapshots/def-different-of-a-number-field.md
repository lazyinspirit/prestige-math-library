---
id: def-different-of-a-number-field
kind: definition
title: "The different of a number field"
status: published
verification:
  audited: 2026-09-07
origin: pipeline
deps: [lem-codifferent-is-a-fractional-ideal, def-invertible-fractional-ideal, thm-number-field-integral-ideal-factorisation-in-zf, cor-trace-and-norm-of-an-algebraic-integer]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Definition 4.1"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Definition

The **different** of $K$ is
$$\mathfrak D_K=(\mathcal O_K^\vee)^{-1}=\{x\in K:x\mathcal O_K^\vee\subseteq\mathcal O_K\}.$$
Here $K$ is a number field and $\mathcal O_K^\vee$ is its nonzero
fractional codifferent ([[lem-codifferent-is-a-fractional-ideal]]).
To justify the inverse using [[thm-number-field-integral-ideal-factorisation-in-zf]],
let $\mathfrak p$ be a nonzero prime and choose $0\ne a\in\mathfrak p$.
Factor $(a)$ into finitely many nonzero prime ideals. Since their product lies
in $\mathfrak p$, one factor lies in $\mathfrak p$ and equals it: nonzero
primes of $\mathcal O_K$ are maximal, as their quotients are finite domains.
Thus $(a)=\mathfrak p\mathfrak b$ for an integral ideal $\mathfrak b$, and
$\mathfrak p(a^{-1}\mathfrak b)=\mathcal O_K$.
Factoring an arbitrary nonzero integral ideal now gives an inverse by taking
the finite product of these prime inverses; clearing a denominator gives an
inverse for every nonzero fractional ideal. All choices are finite.
By [[def-invertible-fractional-ideal]] this inverse is the displayed colon ideal.
Also
$\mathcal O_K\subseteq\mathcal O_K^\vee$, since traces of algebraic integers
are integers.  Multiplying this inclusion by $(\mathcal O_K^\vee)^{-1}$ gives
$\mathfrak D_K\subseteq\mathcal O_K$, so the different is an integral ideal.
