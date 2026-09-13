---
id: def-uniformly-convex-banach-space
kind: definition
title: Uniformly convex Banach space
status: draft
origin: pipeline
deps: [def-banach-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://web.archive.org/web/20210425204615if_/https://math.jhu.edu/~sire/brezis.pdf"
      locator: "§3.7, definition on printed p. 76"
    - title: "Harald Hanche-Olsen, Topological vector spaces"
      url: "https://www.math.ntnu.no/~hanche/notes/tvs/tvs.pdf"
      locator: "Milman–Pettis discussion, printed p. 11"
---

## Definition

Let $X$ be a real or complex Banach space with closed unit ball $B_X$.  The
given norm, and hence $X$, is **uniformly convex** if for every
$\varepsilon\in(0,2]$ there is a $\delta>0$ such that

$$x,y\in B_X\ \text{ and }\ \|x-y\|\ge\varepsilon \quad\Longrightarrow\quad \left\|\frac{x+y}{2}\right\|\le1-\delta.$$

The endpoint $2$ is included.  Values $\varepsilon>2$ need not be tested,
because the triangle inequality gives $\|x-y\|\le2$ on $B_X$.  The zero space
is uniformly convex vacuously: for each positive $\varepsilon$ the antecedent
has no witnesses.

## Remarks

Uniform convexity implies strict convexity of the unit ball.  Indeed, for
distinct unit vectors $x,y$, take $\varepsilon=\|x-y\|>0$; the displayed
condition makes the midpoint norm strictly less than one.  The converse is not
part of the definition.

The property belongs to the specified norm, not merely to the underlying
topological vector space.  For example, on $\mathbb R^2$ the parallelogram
identity gives
$\|(x+y)/2\|_2^2=(\|x\|_2^2+\|y\|_2^2)/2-\|x-y\|_2^2/4
\le1-\varepsilon^2/4$, so the Euclidean norm is uniformly convex with
$\delta=1-\sqrt{1-\varepsilon^2/4}>0$.  The supremum norm is equivalent because
$\|z\|_\infty\le\|z\|_2\le\sqrt2\,\|z\|_\infty$, but it is not even strictly
convex: $(1,1)$ and $(1,-1)$ are distinct unit vectors whose
midpoint $(1,0)$ also has supremum norm one.  Thus one may not transfer uniform
convexity across an arbitrary equivalent renorming.
