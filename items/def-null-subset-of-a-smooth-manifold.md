---
id: def-null-subset-of-a-smooth-manifold
kind: definition
title: "Null subsets of a smooth manifold"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-manifold,
       def-manifold-chart-coordinate-domain-and-coordinate-functions,
       def-null-and-content-zero-in-rn]
justified_by: [prop-the-null-set-definition-is-independent-of-the-smooth-atlas]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Definition

Let $M$ be a smooth $m$-manifold, and let $\mathcal A$ be a smooth atlas on
$M$. A subset $A\subseteq M$ is **$\mathcal A$-null** when, for every chart
$(U,\varphi)\in\mathcal A$, the set

$$\varphi(A\cap U)\subseteq\mathbb R^m$$

is null in the Euclidean sense of [[def-null-and-content-zero-in-rn]] when
$m\ge 1$, and is empty when $m=0$. Equivalently, on a $0$-manifold the only
null subset is the empty set.

The next proposition shows that this condition is independent of the chosen
smooth atlas, so one may then speak simply of a **null subset of $M$**.
