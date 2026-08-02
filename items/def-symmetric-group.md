---
id: def-symmetric-group
kind: definition
title: "The symmetric group $\\operatorname{Sym}(X)$: the bijections of a set $X$ under composition"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-injection-surjection-bijection, def-binary-operation, def-identity-element]
justified_by: []
aliases: [def-permutation, def-symmetric-group-of-a-set]
landmark: true
short: "$\\operatorname{Sym}(X)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Symmetric group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Symmetric_group"
    - title: "Permutation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Permutation"
pipeline_run: null
---

## Definition

Let $X$ be a set. A **permutation** of $X$ is a bijection $f : X \to X$
([[def-injection-surjection-bijection]]). The **symmetric group of $X$** is the
set of all permutations of $X$,

$$\operatorname{Sym}(X) \;:=\; \{\, f : X \to X \;:\; f \text{ is a bijection} \,\},$$

equipped with **composition** as its operation,

$$(f \circ g)(x) \;=\; f(g(x)) \qquad (x \in X),$$

and with the identity map $\mathrm{id}_X$, given by $\mathrm{id}_X(x) = x$, as
distinguished element.

Composition of two bijections of $X$ is again a bijection of $X$
([[def-injection-surjection-bijection]]), so $\operatorname{Sym}(X)$ is closed
under $\circ$ and $\circ$ is a binary operation on it
([[def-binary-operation]]); and $\mathrm{id}_X$ is a bijection of $X$, so it is an
element of $\operatorname{Sym}(X)$, and it is a two-sided identity for
composition ([[def-identity-element]]) because
$f \circ \mathrm{id}_X = f = \mathrm{id}_X \circ f$ holds pointwise for every
$f$. That $(\operatorname{Sym}(X), \circ, \mathrm{id}_X)$ is a group is
[[lem-symmetric-group-is-a-group]].

**Cycle notation for a finite list of distinct points.** For distinct elements
$x_0, x_1, \dots, x_{k-1}$ of $X$ with $k \ge 2$, the symbol
$(x_0\,x_1\,\cdots\,x_{k-1})$ denotes the permutation sending $x_i$ to
$x_{i+1}$ for $i < k-1$, sending $x_{k-1}$ to $x_0$, and fixing every element of
$X$ outside $\{x_0,\dots,x_{k-1}\}$. It is a bijection, because the map
described sends the set $\{x_0,\dots,x_{k-1}\}$ onto itself by a rule with an
evident inverse (send each $x_{i+1}$ back to $x_i$ and $x_0$ back to $x_{k-1}$)
and fixes the complement pointwise. A **transposition** is such a symbol with
$k = 2$, that is $(a\,b)$ with $a \ne b$: it exchanges $a$ and $b$ and fixes
everything else, and it satisfies $(a\,b) \circ (a\,b) = \mathrm{id}_X$.

A product of cycle symbols means their composite, so $(a\,b)(c\,d)$ is
$(a\,b) \circ (c\,d)$.

## Remarks

- **Order of composition.** With the convention $(f \circ g)(x) = f(g(x))$ the
  right-hand factor acts first. Both conventions are in use in the literature;
  this one is the one already fixed for function composition in the library and
  is the one used in every computation on this page and its companion.

- **Why this is defined here rather than with the finite symmetric groups.**
  $\operatorname{Sym}(X)$ for an arbitrary set $X$ is the ambient object needed as
  soon as one speaks of a group acting on a set, which is earlier in the reading
  order than the combinatorial study of $S_n$; homing it here keeps every
  citation of it backward-pointing.

- The general cycle notation above is used on this page only for transpositions;
  cycles of length $3$ and $4$, and products of two disjoint transpositions,
  appear on the companion examples page. The systematic theory, including the
  factorisation of an arbitrary permutation of a finite set into disjoint cycles,
  belongs to a later page.
