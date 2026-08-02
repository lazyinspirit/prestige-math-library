---
id: def-quotient-ring
kind: definition
title: 'The quotient ring $R/I$ with $(r+I)(s+I)=rs+I$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-right-and-two-sided-ideal, def-quotient-group, cor-subgroups-of-abelian-groups-are-normal, def-ring]
justified_by: [thm-quotient-ring-multiplication-well-defined-iff-ideal, thm-quotient-ring-laws]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Ideals and Quotient Rings"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.03%3A_Ideals_and_Quotient_Rings"
pipeline_run: null
---

## Definition

The quotient ring $R/I$ with $(r+I)(s+I)=rs+I$.

Let $I\mathrel{\trianglelefteq}R$.  Since $I$ is an additive subgroup of the
abelian group $(R,+)$, its additive cosets form the quotient group $R/I$
([[def-quotient-group]], [[cor-subgroups-of-abelian-groups-are-normal]]).  Define

$$(r+I)(s+I):=rs+I.$$

The well-definedness and ring laws are established by
[[thm-quotient-ring-multiplication-well-defined-iff-ideal]] and
[[thm-quotient-ring-laws]].
