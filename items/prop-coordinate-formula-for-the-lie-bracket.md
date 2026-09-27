---
id: prop-coordinate-formula-for-the-lie-bracket
kind: proposition
title: "Coordinate formula for the Lie bracket"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lie-bracket-of-smooth-vector-fields, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, thm-clairaut-schwarz-mixed-partials, lem-manifold-bump-for-a-compact-set-inside-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (prop-coordinate-formula-for-the-lie-bracket). No independent judge or whole-closure certification.
    delegated_by: owner
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

[L1] The bracket acts on functions as $[X,Y]f=X(Yf)-Y(Xf)$ ([[def-lie-bracket-of-smooth-vector-fields]]).

[L2] Smooth coordinate coefficient functions define a smooth local vector field ([[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L3] Mixed second partial derivatives of a smooth function commute ([[thm-clairaut-schwarz-mixed-partials]]).

[L4] For a point inside an open set there is a smooth bump function equal to $1$ on a neighbourhood of that point and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct.

1.1 Fix $p\in U$. By [L4], choose a smooth function $\chi:M\to [0,1]$ that is $1$ on a neighbourhood $W$ of $p$ and has support contained in $U$. For each $j$, let $\widetilde x^j$ be the global smooth function that equals $\chi x^j$ on $U$ and $0$ outside $U$. Then $\widetilde x^j=x^j$ on $W$, and because $\chi$ is constant on $W$, one also has $X(\widetilde x^j)=X^j$ and $Y(\widetilde x^j)=Y^j$ on $W$. [L4, given, construct]

2.1 Apply [L1] to $\widetilde x^j$ and use step 1.1. At $p$ this gives $$ [X,Y](\widetilde x^j)(p)=X(Y^j)(p)-Y(X^j)(p)=\sum_i X^i(p)\partial_iY^j(p)-\sum_i Y^i(p)\partial_iX^j(p). $$ Each resulting coefficient is smooth on $U$. [L1, step 1.1, given]

3.1 On $U$, the ordinary product rule gives the same coefficient formula when [L1] acts on any smooth test function: the mixed second derivatives cancel by [L3]. Thus the smooth local field with coefficients from step 2.1 acts as the bracket. On overlaps, two such fields agree on all local test functions, so they agree pointwise; the local fields therefore glue uniquely. This proves the formula without selecting a family of charts or local fields. [L1, L2, L3, step 2.1] ∎
