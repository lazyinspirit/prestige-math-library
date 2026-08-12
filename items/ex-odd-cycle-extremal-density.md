---
id: ex-odd-cycle-extremal-density
kind: example
title: "Every odd cycle $C_{2k+1}$ has Turán density $1/2$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-standard-complete-bipartite-path-and-cycle-graphs, def-proper-vertex-colouring-and-chromatic-number, cor-chromatic-number-extremal-density]
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

For every $k\ge1$,

$$\chi(C_{2k+1})=3\qquad\text{and}\qquad\pi(C_{2k+1})=\frac12.$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] For $n\ge3$, $C_n$ has the consecutive edges $\{i,i+1\}$ and the closing edge $\{n-1,0\}$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A proper vertex colouring gives different colours to adjacent vertices, and its fibres are the colour classes ([[def-proper-vertex-colouring-and-chromatic-number]]).

[F3] For every finite graph $H$ with an edge, $\pi(H)=1-1/(\chi(H)-1)$ ([[cor-chromatic-number-extremal-density]]).

## Verification

**Proof technique:** alternate colours and use odd parity.

1.1 In a two-colouring of a cycle, colours must alternate along consecutive vertices. After the odd number $2k+1$ of edges, the closing edge would join equal colours, so no proper two-colouring exists. [given, F1, F2]

2.1 Colour vertices $0,\ldots,2k-1$ alternately with two colours and give vertex $2k$ a third colour. This is proper, so $\chi(C_{2k+1})=3$. For $k=1$ this is the triangle and the same argument applies. [step 1.1, given, F1, F2]

3.1 The density formula gives $\pi(C_{2k+1})=1-1/(3-1)=1/2$. [step 2.1, given, F3] ∎
