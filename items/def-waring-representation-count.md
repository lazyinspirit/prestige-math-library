---
id: def-waring-representation-count
kind: definition
title: "Representations as sums of s positive k-th powers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§1, equation (1.11), printed p. 1578"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.1, the representation-count setup, printed pp. 34–35"
---

## Definition

For positive integers $s,k,n$, define
$$R_{s,k}(n):=\#\left\{(x_1,\ldots,x_s)\in\mathbb Z_{>0}^s:\ \sum_{i=1}^s x_i^k=n\right\}.$$
The count is ordered: two tuples that differ by a permutation are counted separately.

## Definition references

[Wooley, equation (1.11)](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §6.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)
