---
id: def-leaf-equivalence-relation-of-an-integrable-distribution
kind: definition
title: "The leaf equivalence relation of an integrable distribution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integrable-distribution]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Local and global Frobenius theorems"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

Let $\mathcal D$ be an integrable distribution on $M$. For $p,q \in M$, write
$p \sim_{\mathcal D} q$ when there is a piecewise smooth curve
$\gamma:[0,1] \to M$ with $\gamma(0) = p$, $\gamma(1) = q$, and
$\gamma'(t) \in \mathcal D_{\gamma(t)}$ at every differentiable point.

This relation is called the **leaf equivalence relation** of $\mathcal D$.
