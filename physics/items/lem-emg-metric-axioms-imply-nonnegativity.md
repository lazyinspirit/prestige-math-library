---
id: lem-emg-metric-axioms-imply-nonnegativity
kind: lemma
title: Metric nonnegativity from the three axioms
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
physical_scope: null
deps:
- def-emg-real-metric-axiom-convention
dependency_roles:
  def-emg-real-metric-axiom-convention: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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
proof_strategy: direct
dependency_level: 1
---

## Statement

For any real metric or pseudometric $d$ on a set $X$ in [[def-emg-real-metric-axiom-convention]], $d(x,y)\ge0$ for every $x,y\in X$. Thus these three-axiom definitions already have values in $[0,\infty)$, including the vacuous assertion when $X=\varnothing$.

## Facts & Assumptions

**Given:** The set $X$ and the finite real metric or pseudometric $d$.

[F1] [[def-emg-real-metric-axiom-convention]] supplies reflexivity, symmetry, the triangle inequality and ordered-field arithmetic.

## Proof

1.1 Fix $x,y\in X$. Reflexivity, the triangle inequality with endpoints $x,x$, and symmetry give $0=d(x,x)\le d(x,y)+d(y,x)=2d(x,y)$. [given, F1, algebra]

2.1 The real number $2$ is positive, so dividing the inequality in step 1.1 by $2$ yields $0\le d(x,y)$. This proves the universally quantified claim; if $X$ is empty there are no pairs to check. [F1, step 1.1, algebra] ∎
