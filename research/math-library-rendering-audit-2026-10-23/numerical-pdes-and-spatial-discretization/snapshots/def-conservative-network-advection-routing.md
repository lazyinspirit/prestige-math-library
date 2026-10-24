---
id: def-conservative-network-advection-routing
kind: definition
title: "Conservative nonnegative network advection routing"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.2, Theorems 3.1–3.2 and §3.4, Theorem 3.4, PDF pp. 7–16."
---

## Definition

At a directed network junction, let $n_{\rm in}$ edges carry nonnegative
incoming **mass fluxes** $q^{\rm in}_i$ into the junction, and let
$n_{\rm out}$ edges carry outgoing mass fluxes. A **conservative nonnegative
routing matrix** is a real matrix
$P\in\mathbb R^{n_{\rm out}\times n_{\rm in}}$ such that

$$P_{ji}\ge0,\qquad \sum_{j=1}^{n_{\rm out}}P_{ji}=1 \quad(1\le i\le n_{\rm in}).$$

It routes the incoming flux vector to
$q^{\rm out}=Pq^{\rm in}$. The column $i$ distributes the mass flux arriving
on incoming edge $i$ among the outgoing edges. The column-sum condition
stipulates no source or sink at the junction. It is a model condition on flux;
it does not assert that the densities on incident edges are equal.

