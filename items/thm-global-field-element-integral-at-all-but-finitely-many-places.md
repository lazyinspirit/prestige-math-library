---
id: thm-global-field-element-integral-at-all-but-finitely-many-places
kind: theorem
title: "Every global-field element is integral at all but finitely many finite places"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-divisor-smooth-proper-curve
  - def-global-field
  - def-place-of-a-global-field
  - def-principal-weil-divisor-and-class-group
  - def-ring-of-integers-of-a-number-field
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-clearing-denominators-for-an-algebraic-number
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-number-field-places-classification
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, §18.1"
      url: "https://wstein.org/books/ant/ant.pdf"
    - title: "Michael Rosen, Number Theory in Function Fields, Chapter 5"
      url: "https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a global field and $x\in K$. A finite
place $v$ is a **place of integrality for $x$** when $|x|_v\le1$, using any
absolute value representative of $v$. Then $x$ is integral at all but
finitely many finite places; equivalently,
$$\{v\text{ finite}:|x|_v>1\}$$
is finite.

## Statement references

[[def-axiom-of-choice]]

[[def-global-field]]

[[def-place-of-a-global-field]]

## Facts & Assumptions

**Given:** The Axiom of Choice; a global field $K$; and $x\in K$.

[A1] AC implies DC, which supplies the finite-support clause of the principal
divisor interface used in the function-field case. ([[def-axiom-of-choice]],
[[def-dependent-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]])

[F1] A global field is either a finite extension of $\mathbb Q$ or a
one-variable function field over its exact finite constant field.
([[def-global-field]])

[F2] For a number field $K$ and any $x\in K$, there is a nonzero integer
$m$ such that $mx\in\mathcal O_K$; $\mathcal O_K$ is its ring of integers.
([[thm-clearing-denominators-for-an-algebraic-number]],
[[def-ring-of-integers-of-a-number-field]])

[F3] Every nonzero integral ideal of $\mathcal O_K$ has a finite
factorization into nonzero prime ideals, and every exponent is nonnegative.
([[thm-number-field-integral-ideal-factorisation-in-zf]])

[F4] At a finite number-field place $\mathfrak p$,
$|x|_{\mathfrak p}=(N\mathfrak p)^{-\operatorname{ord}_{\mathfrak p}(x)}$;
the order is the normalized valuation of the DVR
$(\mathcal O_K)_{\mathfrak p}$ and is nonnegative on that valuation ring.
([[thm-number-field-places-classification]],
[[def-place-of-a-global-field]])

[F5] For a function field $k(C)$, its finite places correspond to closed
points of $C$ and the normalized value is
$|x|_v=q^{-\operatorname{ord}_v(x)[\kappa(v):k]}$. Under DC,
$\operatorname{div}(x)=\sum_v\operatorname{ord}_v(x)[v]$ has finite support.
([[def-place-of-a-global-field]],
[[def-principal-weil-divisor-and-class-group]],
[[def-divisor-smooth-proper-curve]])

## Proof

**Given:** The data and hypotheses above.

1.1 If $K$ is a number field and $x=0$, then $|x|_{\mathfrak p}=0\le1$ at every finite place. Suppose $x\ne0$. By [F2], choose $m\in\mathbb Z\setminus \{0\}$ with $a=mx\in\mathcal O_K$. The ideal $(m)$ is nonzero, so [F3] shows that only finitely many nonzero prime ideals divide it. If $\mathfrak p$ is outside this finite set, then $m\notin\mathfrak p$ and is a unit in $(\mathcal O_K)_{\mathfrak p}$; hence $x=a/m\in(\mathcal O_K)_{\mathfrak p}$. By [F4], $\operatorname{ord}_{\mathfrak p}(x)\ge0$ and $|x|_{\mathfrak p}\le1$. Thus only primes dividing $(m)$ can fail the integrality condition. [F2, F3, F4, given, choose]

1.2 If $K$ is a function field and $x=0$, then every finite place satisfies $|x|_v=0\le1$. If $x\ne0$, [F5] places $\operatorname{div}(x)$ on a finite set of closed points. At every other finite place, $\operatorname{ord}_v(x)=0$, and the normalized formula in [F5] gives $|x|_v=1$. Therefore the set of finite places failing integrality is contained in the finite support of $\operatorname{div}(x)$. [A1, F5, given]

2.1 The two cases in [F1] exhaust all global fields. Step 1.1 proves the number-field case and step 1.2 proves the function-field case, so every $x\in K$ is integral at all but finitely many finite places. The number-field ideal-factorization argument itself is choice-free; AC is declared for the place and curve interfaces, and DC follows from [A1] for the function-field divisor support. [A1, F1, step 1.1, step 1.2] ∎
