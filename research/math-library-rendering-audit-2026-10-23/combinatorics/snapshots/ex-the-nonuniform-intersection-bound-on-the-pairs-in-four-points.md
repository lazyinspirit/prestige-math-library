---
id: ex-the-nonuniform-intersection-bound-on-the-pairs-in-four-points
kind: example
title: "The six $2$-subsets of $[4]$ are $\\{0,1\\}$-intersecting, and the bound $\\sum_{i\\le2}\\binom{4}{i}=11$ holds"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-frankl-wilson-nonuniform-bound, def-l-intersecting-family, def-multilinear-polynomial-and-multilinear-reduction, lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §4.3"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Example

The six $2$-subsets of $[4]$ are

$$\{0,1\},\{0,2\},\{0,3\},\{1,2\},\{1,3\},\{2,3\}.$$

## Facts & Assumptions

**Given:** the six pairs above.

[L1] An $L$-intersecting family with $\lvert L\rvert=2$ has at most $\sum_{i=0}^{2}\binom{4}{i}=11$ members ([[thm-frankl-wilson-nonuniform-bound]]).

## Verification

**Proof technique:** direct.

1.1 Any two distinct displayed sets meet in either $0$ or $1$ point, so the family is $\{0,1\}$-intersecting. [given]

2.1 The family has six members, and [L1] gives the upper bound $1+4+6=11$. [L1, step 1.1]

3.1 For example, the polynomial attached to $\{0,1\}$ over $\mathbb R$ is $$f(x)=\langle x,v_{\{0,1\}}\rangle\bigl(\langle x,v_{\{0,1\}}\rangle-1\bigr).$$ It is nonzero at $v_{\{0,1\}}$, where its value is $2$, and vanishes at every other displayed pair, whose intersection with $\{0,1\}$ has size $0$ or $1$. [given] ∎
