---
id: thm-kuratowski-distance-map-is-an-isometry
kind: theorem
title: "The based Kuratowski distance map is an isometric embedding"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-kuratowski-distance-map, def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "James Dugundji, Topology"
      url: "https://dokumen.pub/topology-12th-printingnbsped-9780697068897.html"
pipeline_run: frontier-29
---

## Statement

Let $(M,d)$ be a nonempty metric space, fix $o\in M$, and let
$K_o:M\to C_b(M)$ be the based Kuratowski distance map of
[[def-kuratowski-distance-map]]. Then $K_o$ is an isometric embedding in the
sense of [[def-isometry-and-metric-embedding]]:

$$\|K_o(x)-K_o(y)\|_\infty=d(x,y)\qquad (x,y\in M).$$

## Facts & Assumptions

**Given:** A nonempty metric space $(M,d)$, a basepoint $o\in M$, and the map
$K_o:M\to C_b(M)$.

[L1] For each $x\in M$,
$K_o(x)(z)=d(x,z)-d(o,z)$ defines a bounded continuous function on $M$
([[def-kuratowski-distance-map]]).

[L2] An isometric embedding preserves all distances
([[def-isometry-and-metric-embedding]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the map $K_o$ is well defined as a map into $C_b(M)$. For any $x,y,z\in M$, the triangle inequality gives $$d(x,z)\le d(x,y)+d(y,z) \quad\text{and}\quad d(y,z)\le d(y,x)+d(x,z),$$ so $$|K_o(x)(z)-K_o(y)(z)|=|d(x,z)-d(y,z)|\le d(x,y).$$ Taking the supremum over $z$ yields $\|K_o(x)-K_o(y)\|_\infty\le d(x,y)$. [L1, algebra]

2.1 Evaluating at $z=y$ gives $$|K_o(x)(y)-K_o(y)(y)| =|d(x,y)-0| =d(x,y),$$ and evaluating at $z=x$ gives the same value. Therefore the supremum norm is at least $d(x,y)$. [step 1.1, algebra]

3.1 Steps 1.1 and 2.1 give $\|K_o(x)-K_o(y)\|_\infty=d(x,y)$ for all $x,y\in M$, which is exactly [L2]. Hence $K_o$ is an isometric embedding. [L2, step 1.1, step 2.1] ∎

## Remarks

- The proof is two lines long once the target is chosen correctly. The real work
  is the based definition, which keeps the functions bounded on unbounded
  metric spaces.
