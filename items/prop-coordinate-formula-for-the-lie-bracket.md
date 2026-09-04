---
id: prop-coordinate-formula-for-the-lie-bracket
kind: proposition
title: "Coordinate formula for the Lie bracket"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-derivations-of-smooth-functions-are-smooth-vector-fields, lem-the-commutator-of-vector-field-derivations-is-a-derivation, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, lem-manifold-bump-for-a-compact-set-inside-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

In a chart $(U,x^1,\dots,x^n)$, if

$$ X=\sum_{i=1}^n X^i \frac{\partial}{\partial x^i}, \qquad Y=\sum_{i=1}^n Y^i \frac{\partial}{\partial x^i}, $$

then on $U$

$$ [X,Y]=\sum_{j=1}^n \left(\sum_{i=1}^n X^i\partial_iY^j-Y^i\partial_iX^j\right)\frac{\partial}{\partial x^j}. $$

## Facts & Assumptions

**Given:** Smooth vector fields $X$ and $Y$ written in a chart as above.

[L1] The commutator $[X,Y]$ is again a derivation ([[lem-the-commutator-of-vector-field-derivations-is-a-derivation]]).

[L2] Every derivation of $C^\infty(M)$ comes from a unique smooth vector field ([[thm-derivations-of-smooth-functions-are-smooth-vector-fields]]).

[L3] A smooth vector field is determined in a chart by its coefficient functions ([[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L4] For a point inside an open set there is a smooth bump function equal to $1$ on a neighbourhood of that point and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct.

1.1 Fix $p\in U$. By [L4], choose a smooth function $\chi:M\to [0,1]$ that is $1$ on a neighbourhood $W$ of $p$ and has support contained in $U$. For each $j$, let $\widetilde x^j$ be the global smooth function that equals $\chi x^j$ on $U$ and $0$ outside $U$. Then $\widetilde x^j=x^j$ on $W$, and because $\chi$ is constant on $W$, one also has $X(\widetilde x^j)=X^j$ and $Y(\widetilde x^j)=Y^j$ on $W$. [L4, given, construct]

2.1 By [L1] and [L2], $[X,Y]$ is induced by a unique smooth vector field on $M$. Evaluating it on $\widetilde x^j$ at $p$ and using step 1.1 gives $$ [X,Y](\widetilde x^j)(p)=X(Y^j)(p)-Y(X^j)(p)=\sum_i X^i(p)\partial_iY^j(p)-\sum_i Y^i(p)\partial_iX^j(p). $$ [L1, L2, step 1.1, given]

3.1 Because $\widetilde x^j$ and $x^j$ agree near $p$, the $j$-th coordinate coefficient of $[X,Y]$ at $p$ is exactly $[X,Y](\widetilde x^j)(p)$. Since $p$ was arbitrary, step 2.1 and [L3] give the displayed coordinate formula for $[X,Y]$ on $U$. [L3, step 2.1] ∎
