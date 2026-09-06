---
id: def-graded-ext-algebra-of-an-object
kind: definition
title: "The graded Ext algebra of an object"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Definition

Assume the resolution, choice, and smallness hypotheses of
[[thm-higher-yoneda-ext-agrees-with-derived-ext]]. For an object $M$ under
those hypotheses, set
$$\operatorname{Ext}^{*}(M,M)=\bigoplus_{n\geq0}\operatorname{Ext}^{n}(M,M).$$
Give it the product induced by Yoneda splicing, equivalently by derived Ext
composition under the cited comparison. This is an associative unital graded
ring, hence a graded $\mathbb Z$-algebra, with degree-zero unit
$1_M\in\operatorname{Hom}(M,M)$. If the category and its compositions are
$k$-linear, it is a graded $k$-algebra. No graded-commutativity is included in
this definition.
