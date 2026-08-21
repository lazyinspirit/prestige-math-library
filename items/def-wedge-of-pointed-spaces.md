---
id: def-wedge-of-pointed-spaces
kind: definition
title: "The wedge of a family of pointed spaces"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-disjoint-union-topology, def-quotient-topology,
       def-based-loops-and-fundamental-group]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Example 1.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 2, Section 8"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Definition

Let $((X_i,x_i))_{i\in I}$ be a family of pointed topological spaces. On the tagged disjoint union $\coprod_{i\in I}X_i$ ([[def-disjoint-union-topology]]), define

$$ (x,i)\sim(y,j)\quad\Longleftrightarrow\quad (x,i)=(y,j)\ \text{ or }\ (x=x_i\ \text{ and }\ y=x_j). $$

This relation is reflexive and symmetric. For transitivity, the only nontrivial case has two related pairs that are not equal; then every point appearing is its summand's basepoint, so the first and third points are related as well. Thus $\sim$ is an equivalence relation.

For nonempty $I$, the **wedge** is the quotient space

$$ \bigvee_{i\in I}(X_i,x_i):=\left(\coprod_{i\in I}X_i\right)\!\big/\sim $$

with the quotient topology ([[def-quotient-topology]]). The common equivalence class of the tagged basepoints is the **wedge point**, which makes the quotient pointed. The relation identifies no other points.

The wedge of the empty family is defined to be a one-point space, pointed at its sole element. For a pair one writes $(X,x_0)\vee(Y,y_0)$, and for $r\in\mathbb N$ one writes $\bigvee_{j<r}(X_j,x_j)$. In particular, the empty finite wedge is a point rather than an empty space.
