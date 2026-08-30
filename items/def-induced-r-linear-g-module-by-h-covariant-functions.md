---
id: def-induced-r-linear-g-module-by-h-covariant-functions
kind: definition
title: "The induced $R$-linear $G$-module $\\operatorname{Ind}_H^G W$ as $H$-covariant functions on $G$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-g-module-over-a-commutative-ring, def-subgroup, def-the-set-of-functions-from-one-set-to-another]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Definition 4.28"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 4.3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
verification:
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Definition

Let $R$ be a commutative ring, let $G$ be a group, let $H\le G$ be a subgroup
([[def-subgroup]]), and let $W$ be an $R$-linear $H$-module
([[def-g-module-over-a-commutative-ring]]).

The **induced $R$-linear $G$-module** is the set

$$ \operatorname{Ind}_H^G W := \{\,f\in W^G : f(gh)=h^{-1}\cdot f(g)\text{ for all }g\in G,\ h\in H\,\}, $$

where $W^G$ is the set of all functions $G\to W$
([[def-the-set-of-functions-from-one-set-to-another]]).

Pointwise addition and scalar multiplication make $\operatorname{Ind}_H^G W$ an
$R$-module:

$$ (f+f')(g):=f(g)+f'(g), \qquad (rf)(g):=r\,f(g). $$

The left action of $G$ on this module is

$$ (x\cdot f)(g):=f(x^{-1}g) \qquad(x,g\in G). $$

This action is well defined on the displayed subset because

$$ (x\cdot f)(gh)=f(x^{-1}gh)=h^{-1}\cdot f(x^{-1}g)=h^{-1}\cdot(x\cdot f)(g), $$

and each operator $f\mapsto x\cdot f$ is $R$-linear by the pointwise
definitions. Thus $\operatorname{Ind}_H^G W$ is an $R$-linear $G$-module.

## Remarks

- The covariance condition is written on the right, so the values of an induced
  function are determined by one value on each left coset $gH$.

- When $R=k$ is a field and $W$ is finite-dimensional, this construction is the
  induced representation of $G$ from the representation of $H$ on $W$.
