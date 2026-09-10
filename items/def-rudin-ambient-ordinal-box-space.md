---
id: def-rudin-ambient-ordinal-box-space
kind: definition
title: The ambient Rudin box space
status: draft
origin: pipeline
deps: [def-rudin-ordinal-box-space]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 section 1, printed p. 35"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Definition

In the AC setting, with $B$, $P_B$ and box topology of [[def-rudin-ordinal-box-space]], let $t\in P_B$ be the coordinate top $t(n)=\aleph_n$. Define the **ambient Rudin space**

$$Y_B=\{h\in P_B:\operatorname{cf}(h(n))>\omega\text{ for every }n\in B\},$$

with the topology induced from $P_B$. The Rudin space $X_R(B)$ is its subspace obtained by imposing a single finite-aleph bound on all coordinate cofinalities. No such uniform bound is part of the definition of $Y_B$.

For $a,b\in P_B$ with $a<b$ pointwise, set

$$(a,b]_Y=\{h\in Y_B:a(n)<h(n)\le b(n)\text{ for every }n\in B\}.$$

The upper endpoint $b$ is an ordinal function in $P_B$ and is not required to be a point of $Y_B$; this distinction matters when partitions lower a coordinate endpoint to an ordinal of countable cofinality. Every coordinate of a point of $Y_B$ is a nonzero limit ordinal, since zero and successor ordinals have cofinality zero and one, respectively.
