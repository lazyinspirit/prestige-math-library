---
id: def-polynomial-factorization-category-and-cotangent-diagram
kind: definition
title: "Bounded polynomial-factorization categories and the cotangent module diagram"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
justified_by: []
aliases: []
deps:
  - def-axiom-of-choice
  - def-polynomial-ring-on-a-family-of-indeterminates
  - def-category
  - def-functor-and-contravariant-functor
  - def-kahler-differentials-algebra
  - def-tensor-product-of-modules-by-generators-and-relations
  - def-commutative-ring
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 92 (The Cotangent Complex), Section 92.4"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Section 92.4 (tags 08PQ, 08PR), printed 3-4; bounded small-presentation reconciliation with Cohomology on Sites 39.1"
---

## Definition

Assume the Axiom of Choice (AC) ([[def-axiom-of-choice]]). Fix a map
$A\to B$ of commutative unital rings ([[def-commutative-ring]]) and an
infinite cardinal $\kappa$ at least the cardinalities of $A$ and $B$ and of
every variable set occurring in the specified countable polynomial
resolutions of $B$ over $A$ that are used below.

For an ordinal $\lambda\le\kappa$ let $A[\lambda]$ denote the polynomial
$A$-algebra on the variable set $\lambda$
([[def-polynomial-ring-on-a-family-of-indeterminates]]). A **polynomial
presentation** of $B$ over $A$ (bounded by $\kappa$) is an
$A$-algebra map $\pi\colon A[\lambda]\to B$ for some ordinal
$\lambda\le\kappa$; since $A[\lambda]$ is free on $\lambda$, such a $\pi$ is
determined by the family $(\pi(x_\alpha))_{\alpha<\lambda}$ in $B$, so the
collection of all bounded polynomial presentations is a set. Here “presentation”
means a polynomial factorization of $A\to B$; the augmentation need not be
surjective. This permits the coefficient-change functor for arbitrary ring
squares, even when $B\otimes_AA'\to B'$ is not surjective.

Define $\mathcal P^{\kappa}_{B/A}$ to be the category whose objects are the
bounded polynomial presentations $\pi\colon A[\lambda]\to B$ and whose
morphisms $\pi\to\pi'$ are the $A$-algebra maps
$\varphi\colon A[\lambda]\to A[\lambda']$ with
$\pi'\circ\varphi=\pi$, i.e. maps commuting with the augmentations. Every hom
collection is a set (a morphism is determined by the images of the variables
of its source, which are polynomials over $A$ in $\lambda'$ variables), so
$\mathcal P^\kappa_{B/A}$ is a small category ([[def-category]]). The
**bounded polynomial-factorization category** is its opposite
$$\mathcal C^{\kappa}_{B/A}:=\bigl(\mathcal P^{\kappa}_{B/A}\bigr)^{\mathrm{op}},$$
and we write $P\to B$ for the object corresponding to a presentation. The
ordinal representatives and the specified presentations are transported into
this model degreewise; conjugating all face and degeneracy maps by the
resulting algebra isomorphisms preserves the simplicial identities.

The **cotangent diagram** is the contravariant functor
$$F_{B/A}\colon\mathcal C^{\kappa}_{B/A}\to B\text{-}\mathrm{Mod},\qquad F_{B/A}(P\xrightarrow{\ \pi\ }B)=\Omega_{P/A}\otimes_PB,$$
where $\Omega_{P/A}$ is the module of Kähler differentials
([[def-kahler-differentials-algebra]]) and the tensor product is taken along
$\pi$ ([[def-tensor-product-of-modules-by-generators-and-relations]]); on a
morphism $\varphi\colon P\to P'$ of presentations, functoriality of Kähler
differentials gives $\Omega_{P/A}\otimes_PP'\to\Omega_{P'/A}$ and hence a
$B$-linear map $F_{B/A}(P)\to F_{B/A}(P')$. The corresponding arrow in
$\mathcal C^{\kappa}_{B/A}$ goes from $P'$ to $P$, so $F_{B/A}$ is contravariant
([[def-functor-and-contravariant-functor]]). Since $P$ is a polynomial
$A$-algebra, $\Omega_{P/A}$ is a free $P$-module and $F_{B/A}(P)$ is a free
$B$-module.

A simplicial polynomial resolution
$P_\bullet\colon\Delta^{\mathrm{op}}\to\mathcal P^{\kappa}_{B/A}$ (with each
$P_n$ a polynomial presentation) yields by composition with the inclusion a
simplicial object of $\mathcal P^\kappa_{B/A}$, i.e. a cosimplicial object of
$\mathcal C^{\kappa}_{B/A}$.

Finally, a commutative square of ring maps
$$\begin{array}{ccc} A & \longrightarrow & B\\ \downarrow & & \downarrow\\ A' & \longrightarrow & B' \end{array}$$
induces, after replacing $\kappa$ by a common bound for the two squares, a
functor $\mathcal P^{\kappa}_{B/A}\to\mathcal P^{\kappa}_{B'/A'}$ sending
$\pi\colon A[\lambda]\to B$ to
$P\otimes_AA'\to B'$, where the target is the composite
$P\otimes_AA'\to B\otimes_AA'\to B'$, and therefore a functor
$\mathcal C^{\kappa}_{B/A}\to\mathcal C^{\kappa}_{B'/A'}$; the variable set,
hence the bound, is unchanged.

**Use of AC.** AC is used only to choose, once and for all, the transported
models of the specified countable presentations inside the bounded category
and to bound the union of the countably many specified variable sets by a
single infinite cardinal $\kappa$; the subsequent definition of the diagram,
the contravariance and the coefficient-change functor are choice-free. Since
a polynomial ring on at most $\kappa$ variables over a ring of size at most
$\kappa$ has size at most $\kappa$, the standard resolution fits at every
stage and no universe axiom beyond the ambient set theory of
[[def-category]] is introduced.
