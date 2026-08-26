---
id: def-k-transitive-and-k-homogeneous-actions
kind: definition
title: "k-transitive and k-homogeneous actions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Definition

Let $k \ge 1$, and let $G$ act on a set $\Omega$.

The action is **$k$-transitive** if for any ordered $k$-tuples
$$(\alpha_1,\dots,\alpha_k), \qquad (\beta_1,\dots,\beta_k)$$
of pairwise distinct points of $\Omega$, there is some $g \in G$ with
$$g \cdot \alpha_i = \beta_i \qquad \text{for every } 1 \le i \le k.$$

The action is **$k$-homogeneous** if for any $k$-element subsets
$A,B \subseteq \Omega$, there is some $g \in G$ with $g \cdot A = B$.
