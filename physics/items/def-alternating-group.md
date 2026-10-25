---
id: def-alternating-group
kind: definition
title: 'The alternating group $A_n=\ker(\operatorname{sgn})$ of even permutations'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-sign-is-a-homomorphism, def-kernel-and-image-of-group-homomorphism, thm-image-subgroup-and-kernel-normal]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
pipeline_run: null
---

## Definition

For $n\in\mathbb N$, the **alternating group** is the kernel of the sign
homomorphism,

$$A_n:=\ker(\operatorname{sgn}:S_n\to\{+1,-1\})=\{\sigma\in S_n:\operatorname{sgn}(\sigma)=1\}.$$

Thus $A_n$ consists exactly of the even permutations. The subgroup and
normality assertions implicit in the word “group” follow from
[[thm-image-subgroup-and-kernel-normal]].
