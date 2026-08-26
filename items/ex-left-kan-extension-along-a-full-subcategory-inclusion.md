---
id: ex-left-kan-extension-along-a-full-subcategory-inclusion
kind: example
title: "A left Kan extension along a full subcategory inclusion of preorders"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise, prop-preorders-as-categories-and-monotone-maps-as-functors, def-full-faithful-and-essentially-surjective-functor, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $\mathcal A$ be the full subcategory of the chain $0<1<2$ on the objects
$0$ and $1$, and let $i:\mathcal A\hookrightarrow\mathcal B$ be the inclusion.
Define $F:\mathcal A\to\mathbf{Set}$ by

$$F(0)=\varnothing,\qquad F(1)=\{*\},$$

with the unique map $\varnothing\to\{*\}$ on the unique non-identity arrow.

Then the left Kan extension of $F$ along $i$ exists and is pointwise. It agrees
with $F$ on $0$ and $1$, and its value at the new object $2$ is again the
singleton set $\{*\}$.

## Facts & Assumptions

**Given:** The preorder categories $\mathcal A\subseteq\mathcal B$ and the functor $F$ just described.

[F1] A preorder may be read as a category with one arrow precisely when the order relation holds, and monotone maps are the functors between them ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[L1] The comma-category colimit formula computes the left Kan extension value at an object ([[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]]).

[L2] A pointwise Kan extension along a fully faithful functor restricts back to the original functor by isomorphism ([[thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise]], [[def-full-faithful-and-essentially-surjective-functor]]).

## Verification

**Proof technique:** direct.

1.1 The inclusion $i$ is fully faithful by [F1]. The comma category $(i\downarrow2)$ has two objects, namely the arrows $0\to2$ and $1\to2$, and one non-identity morphism from the first to the second, corresponding to the inequality $0\le1$ in $\mathcal A$. [F1]

1.2 The induced diagram $(i\downarrow2)\to\mathcal A\overset{F}{\to}\mathbf{Set}$ is therefore just $\varnothing\to\{*\}$, whose colimit in $\mathbf{Set}$ is $\{*\}$. By [L1], this is the left Kan extension value at $2$. [L1]

2.1 On the objects $0$ and $1$, the pointwise left Kan extension restricts back to $F$ by [L2]. Hence the left Kan extension along the full subcategory inclusion is the functor sending $0\mapsto\varnothing$, $1\mapsto\{*\}$, and $2\mapsto\{*\}$. [L2, step 1.2] ∎
