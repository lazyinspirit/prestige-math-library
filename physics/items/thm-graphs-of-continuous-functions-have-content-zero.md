---
id: thm-graphs-of-continuous-functions-have-content-zero
kind: theorem
title: "The graph of a continuous function on a closed nondegenerate rectangle in $\\mathbb{R}^m$ has content zero in $\\mathbb{R}^{m+1}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-null-and-content-zero-in-rn, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, thm-heine-borel-rn, thm-heine-cantor-metric, def-metric-continuity, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-integer-part, def-canonical-natural, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
    - title: "A. Cañez, multivariable calculus notes"
      url: "https://www.math.cmu.edu/~gautam/sj/teaching/2017-18/268-multid-calc/pdfs/canez-calculus.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $Q\subseteq\mathbb R^m$ be a closed nondegenerate rectangle, and let $f:Q\to\mathbb R$ be continuous. Its graph has content zero in $\mathbb R^{m+1}$.

## Facts & Assumptions

**Given:** $Q,f$ as stated.

[L1] $Q$ is compact and $f$ uniformly continuous ([[thm-heine-borel-rn]], [[thm-heine-cantor-metric]], [[def-metric-continuity]]).

[L2] Grid cells and cube volumes are [[def-multidimensional-grid-partition]] and [[def-multidimensional-rectangle-and-volume]].

## Proof

**Proof technique:** constructive.

1.1 Given $\varepsilon>0$, choose a uniform coordinate grid with cell widths at most $\delta$, where uniform continuity makes the oscillation of $f$ on each cell below a vertical amount $\eta$. Since $Q$ is nondegenerate, the grid may be chosen so that the number $N_\delta$ of cells satisfies $N_\delta\delta^m\le C_Q$ for a constant depending only on $Q$. [L1, L2, given, choose, construct]

2.1 One horizontal cube footprint of side $\delta$ covers each domain cell. Above it, stack $(m+1)$-cubes of side $\delta$ across the graph's vertical range. [[lem-integer-part]] bounds their number by $\eta/\delta+2$, so all stacks together have volume at most $N_\delta(\eta\delta^m+2\delta^{m+1})\le C_Q(\eta+2\delta)$. [step 1.1, L2, given]

3.1 Summing over the finitely many domain cells gives total covering volume at most a rectangle-dependent constant times $\eta+\delta$. Choose $\eta$ and then $\delta$ to make this below $\varepsilon$.   [step 2.1, given, choose]

4.1 This finite cube cover proves content zero in the sense of [[def-null-and-content-zero-in-rn]].  [step 3.1, discharge-construct] ∎
