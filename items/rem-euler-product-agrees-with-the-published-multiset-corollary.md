---
id: rem-euler-product-agrees-with-the-published-multiset-corollary
kind: remark
title: "The direct multiplicity product and the published multiset proof give the same Euler product"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [cor-integer-partitions-have-euler-product,
       thm-multiset-product-formula,
       def-partition-counting-functions-and-restricted-families,
       def-formal-power-series-and-coefficient-extraction,
       thm-summable-families-and-rearrangement]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
pipeline_run: null
---

## Remarks

The published item [[cor-integer-partitions-have-euler-product]] proves

$$\sum_{n \ge 0} p(n)x^n = \prod_{m \ge 1}(1-x^m)^{-1}$$

by treating a partition as a multiset of one abstract atom of each positive
size and then invoking [[thm-multiset-product-formula]].

The same identity also has a direct coefficientwise reading. A partition is
equally a multiplicity sequence $(c_1,c_2,\dots)$ with only finitely many
nonzero entries in each fixed total degree, and the coefficient of $x^n$ in

$$\prod_{m \ge 1}(1+x^m+x^{2m}+\cdots)$$

depends only on the finitely many multiplicity choices satisfying
$\sum_{m \ge 1} mc_m=n$. The summability hypothesis of
[[thm-summable-families-and-rearrangement]] is exactly what legitimizes turning
that degreewise finite counting argument into a formal infinite product. So the
"direct" product and the published multiset product are not two different
series: they encode the same multiplicity data in two equivalent ways.
