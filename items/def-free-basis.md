---
id: def-free-basis
kind: definition
title: "A free basis of a group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-free-group]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-11
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, §1.3"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/universal.html"
    - title: "Encyclopedia of Mathematics, Free group"
      url: "https://encyclopediaofmath.org/wiki/Free_group"
pipeline_run: null
---

## Definition

Let $F$ be a group and let $B\subseteq F$. Write $i:B\hookrightarrow F$
for the inclusion. The subset $B$ is a **free basis** of $F$ if $(F,i)$ is
a free group on the set $B$ in the sense of [[def-free-group]]. Equivalently,
for every group $G$ and every function $u:B\to G$, there is a unique group
homomorphism $\widehat u:F\to G$ whose restriction to $B$ is $u$.

