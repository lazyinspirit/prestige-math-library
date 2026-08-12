---
id: ex-petersen-extremal-density
kind: example
title: "The Petersen graph has chromatic number $3$, so its Turán density is $1/2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-petersen-graph, def-proper-vertex-colouring-and-chromatic-number, cor-chromatic-number-extremal-density]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Example

Let $P$ be the Petersen graph. Then

$$\chi(P)=3\qquad\text{and}\qquad\pi(P)=\frac12.$$

## Facts & Assumptions

**Given:** Proper colouring from [[def-proper-vertex-colouring-and-chromatic-number]] and the chromatic-density formula [[cor-chromatic-number-extremal-density]].

The definition [[def-petersen-graph]] gives $P$ the two-element subsets of $\{1,2,3,4,5\}$ as vertices, with two vertices adjacent exactly when the corresponding subsets are disjoint.

## Verification

**Proof technique:** exhibit an odd cycle and a three-colouring.

1.1 The vertices $12,34,15,23,45$ form a $5$-cycle in that order because consecutive pairs, including $45,12$, are disjoint. Hence $P$ is not bipartite and $\chi(P)\ge3$. [given]

1.2 Partition the ten vertices into $\{12,13,14,15\}$, $\{23,24,34\}$, and $\{25,35,45\}$. Within each class every two subsets intersect, so the Petersen adjacency definition gives no edge within a class. This is a proper three-colouring, hence $\chi(P)\le3$. [given]

2.1 Steps 1.1-1.2 give $\chi(P)=3$, and the density formula gives $\pi(P)=1-1/(3-1)=1/2$. [step 1.1, step 1.2, given] ∎
