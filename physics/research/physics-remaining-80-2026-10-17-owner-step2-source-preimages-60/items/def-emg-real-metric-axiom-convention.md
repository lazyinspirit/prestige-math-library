---
id: def-emg-real-metric-axiom-convention
kind: definition
title: Real metric and pseudometric convention
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
physical_scope: null
deps:
- def-real-numbers
- def-complete-ordered-field
- def-ordered-field
- def-metric-space
dependency_roles:
  def-real-numbers: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  def-ordered-field: mathematical-premise
  def-metric-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
  - title: Metric space (Wikipedia)
    url: https://en.wikipedia.org/wiki/Metric_space
  - title: Ultrametric space (Wikipedia)
    url: https://en.wikipedia.org/wiki/Ultrametric_space
  - title: W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2
    url: https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis
  - title: T. Tao, Analysis II, 3rd ed., Ch. 1
    url: https://terrytao.wordpress.com/books/analysis-ii/
  - title: Pseudometric space (Wikipedia)
    url: https://en.wikipedia.org/wiki/Pseudometric_space
  - title: 'R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)'
    url: https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf
justified_by:
- lem-emg-metric-axioms-imply-nonnegativity
dependency_level: 0
---

## Definition

Let $X$ be a set and use the ordered real field of [[def-real-numbers]], [[def-complete-ordered-field]] and [[def-ordered-field]]. In the convention of [[def-metric-space]], a **real metric** is a function $d:X\times X\to\mathbb R$ satisfying, for all $x,y,z\in X$, separation $d(x,y)=0\iff x=y$, symmetry $d(x,y)=d(y,x)$ and the triangle inequality $d(x,z)\le d(x,y)+d(y,z)$. A **real pseudometric** replaces separation by $d(x,x)=0$ and retains the other two axioms. All values are finite real numbers. Neither definition assumes nonnegativity as an additional axiom.

For either structure, put $B_d(x,r)=\{y\in X:d(x,y)<r\}$ for real $r>0$. The induced topology consists of the subsets $O\subseteq X$ for which every $x\in O$ admits $r>0$ with $B_d(x,r)\subseteq O$. After the nonnegativity deduction in the well-definedness lemma, these balls form a basis: $x\in B_d(x,r)$ by reflexivity, and if $z\in B_d(x,r)\cap B_d(y,s)$, the positive radius $t=\min\{r-d(x,z),s-d(y,z)\}$ has $B_d(z,t)$ contained in that intersection by the triangle inequality. This argument also works for pseudometrics and for empty $X$ (the empty topology). No infinite-distance, semimetric or quasimetric convention is consumed.
