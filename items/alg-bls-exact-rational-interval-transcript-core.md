---
dependency_level: 0
id: alg-bls-exact-rational-interval-transcript-core
kind: algorithm
title: Exact rational interval transcript core for BLS certificates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-rationals
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Local bounded reconstruction of the BLS/BS07/Kim method
    url: https://arxiv.org/pdf/1803.06016v2
    locator: Section5; locally specified exact transcript syntax, not recovered production
      encoding
---

## Definition

A core input is a finite list of named leaf intervals, a finite nonempty list of expression nodes, and a root index. An integer is encoded by its sign and finitely many base-two digits; a rational is a pair $(a,b)$ of such integers with $b>0$, interpreted as $a/b$. An interval is an ordered pair of rationals $[a,b]$, $a\le b$. Leaf names are finite strings and must be distinct. Nodes are numbered $0,\ldots,L-1$ and have exactly one of these forms:

- $\operatorname{leaf}(k)$, referencing a listed leaf;
- $\operatorname{const}(a,b)$, an encoded rational constant;
- $\operatorname{add}(i,j)$, $\operatorname{sub}(i,j)$, $\operatorname{mul}(i,j)$ or $\operatorname{div}(i,j)$;
- $\operatorname{square}(i)$.

Every operand index must be nonnegative and strictly smaller than the current node index. The root must be an index in $0,\ldots,L-1$. All unlisted tags, extra/missing fields, malformed integer/rational encodings, duplicate leaf names and out-of-range indices are rejected. No leaf or node contains executable code or a request to invoke an unspecified backend.

Process nodes in their listed order. A leaf returns its supplied interval, and a constant returns the point interval $[a/b,a/b]$. For $X=[a,b]$ and $Y=[c,d]$, use the exact rational rules
$$
X+Y=[a+c,b+d],\quad X-Y=[a-d,b-c],\quad XY=[\min(ac,ad,bc,bd),\max(ac,ad,bc,bd)].
$$
For division reject if $c\le0\le d$; otherwise return the product with $[1/d,1/c]$. A square returns $[0,\max(a^2,b^2)]$ if $a\le0\le b$, and $[\min(a^2,b^2),\max(a^2,b^2)]$ otherwise. All operations and comparisons are exact rational operations, with no fixed-precision overflow convention. On any rejection stop and return its first failed condition. Otherwise return the computed root interval and all node intervals.

This algorithm verifies a finite arithmetic transcript, including rational quadratic-form evaluation. Its leaf intervals are semantic inputs whose validity is not proved by checking their names. A source trace formula, class-number value, quadrature bound, character list or physical computation is not certified merely by attaching it as a leaf. This core is not the unrecovered BLS production checker or a completed higher-level backend.

## Definition references

[[def-rationals]]
