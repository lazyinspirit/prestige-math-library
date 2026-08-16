---
id: def-degree-of-a-circle-loop
kind: definition
title: "The degree of a based circle loop"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-circle-as-real-line-mod-integers, thm-real-line-covers-real-line-mod-integers, def-lift-of-a-map-path-and-homotopy, thm-path-lifting-for-covering-maps]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Definition

Let $\alpha:I\to\mathbb R/\mathbb Z$ be a based loop at $[0]$. Since
$p:\mathbb R\to\mathbb R/\mathbb Z$ is a covering map
([[thm-real-line-covers-real-line-mod-integers]]), path lifting
([[thm-path-lifting-for-covering-maps]]) gives a unique lift
$\widetilde\alpha:I\to\mathbb R$ with $\widetilde\alpha(0)=0$ and
$p\circ\widetilde\alpha=\alpha$; this is a lift in the sense of
[[def-lift-of-a-map-path-and-homotopy]].

Because $\alpha(1)=[0]$, its terminal value satisfies
$\widetilde\alpha(1)\in p^{-1}([0])=\mathbb Z$ by
[[def-circle-as-real-line-mod-integers]]. Define $\deg(\alpha)=\widetilde\alpha(1)$.

This defines degree on based loops. Its independence from a representative of
a path-homotopy class is proved separately before degree is used on
$\pi_1(S^1,[0])$.
