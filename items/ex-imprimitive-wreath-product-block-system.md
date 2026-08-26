---
id: ex-imprimitive-wreath-product-block-system
kind: example
title: "The imprimitive wreath product preserves its fiber blocks"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-block-and-block-system-for-a-group-action, def-imprimitive-wreath-product-of-permutation-groups]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Example

Let $H$ act on a nonempty set $B$, and let $H \wr_\Sigma K$ act on
$B \times \Sigma$ in the imprimitive action of
[[def-imprimitive-wreath-product-of-permutation-groups]]. For each
$\sigma \in \Sigma$, the fiber
$$F_\sigma := B \times \{\sigma\}$$
is a block. If $|B| > 1$ and $|\Sigma| > 1$, these fibers form a nontrivial
block system.

## Facts & Assumptions

**Given:** A nonempty $H$-set $B$ and the imprimitive wreath product action of $H \wr_\Sigma K$ on $B \times \Sigma$.

[L1] In the imprimitive wreath action, $$(f,k) \cdot (b,\sigma) = \bigl(f(k \cdot \sigma) \cdot b,\ k \cdot \sigma\bigr).$$ ([[def-imprimitive-wreath-product-of-permutation-groups]]).

[L2] A block is a nonempty subset $B$ such that for every group element $g$, either $g \cdot B = B$ or $(g \cdot B) \cap B = \varnothing$ ([[def-block-and-block-system-for-a-group-action]]).

## Verification

**Proof technique:** direct.

1.1 For $(f,k) \in H \wr_\Sigma K$, the image of the fiber $F_\sigma$ is exactly $F_{k \cdot \sigma}$ by [L1]. Hence every group element sends a fiber to a fiber. [L1]

2.1 Each fiber is nonempty because $B$ is nonempty, and two distinct fibers are disjoint, so [L2] makes each $F_\sigma$ a block. The collection of all fibers partitions $B \times \Sigma$. [L2, step 1.1, given]

3.1 If $|B| > 1$ and $|\Sigma| > 1$, then each fiber is a proper non-singleton subset. So the fiber partition is a nontrivial block system. [step 2.1] ∎
