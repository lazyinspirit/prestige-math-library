---
id: ex-lan-along-the-inclusion-of-the-rationals-in-the-reals
kind: example
title: "A left Kan extension along the inclusion of the rationals in the reals"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, prop-preorders-as-categories-and-monotone-maps-as-functors, lem-rat-embeds-dense, def-small-finite-and-large-limits-completeness-and-cocompleteness, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 6.2.10"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

View $\mathbb Q$ and $\mathbb R$ as thin categories under their usual order, and
let $i:\mathbb Q\hookrightarrow\mathbb R$ be the inclusion
([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

Define a functor $F:\mathbb Q\to\mathbf{Set}$ by

$$F(q)=(-\infty,q)\subseteq\mathbb R,$$

with the structure maps the evident inclusions when $q\le q'$.

Then the pointwise left Kan extension of $F$ along $i$ is the functor
$L:\mathbb R\to\mathbf{Set}$ with

$$L(x)=(-\infty,x)\subseteq\mathbb R.$$

## Facts & Assumptions

**Given:** The inclusion $i:\mathbb Q\hookrightarrow\mathbb R$ and the functor $F(q)=(-\infty,q)$.

[F1] A preorder gives a thin category, and a monotone map gives a functor ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[L1] The comma-category colimit formula computes the left Kan extension value at a real number $x$ ([[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]]).

[L2] Between any two distinct reals there is a rational number ([[lem-rat-embeds-dense]]).

## Verification

**Proof technique:** direct.

1.1 For a real $x$, the comma category $(i\downarrow x)$ is the preorder of rationals $q\le x$. The induced diagram sends such a $q$ to $(-\infty,q)$ and its colimit in $\mathbf{Set}$ is the union $\bigcup_{q\le x,\ q\in\mathbb Q}(-\infty,q)$. [F1, L1]

2.1 This union is exactly $(-\infty,x)$. If $r<x$, [L2] gives a rational $q$ with $r<q<x$, so $r\in(-\infty,q)$ and hence lies in the union. Conversely every $(-\infty,q)$ with $q\le x$ is contained in $(-\infty,x)$. [L2, step 1.1]

3.1 Therefore [L1] gives $L(x)=(-\infty,x)$ for the left Kan extension value at every real $x$. [L1, step 2.1] ∎
