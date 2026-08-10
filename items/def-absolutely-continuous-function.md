---
id: def-absolutely-continuous-function
kind: definition
title: "Absolute continuity on a compact interval"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-finite-sum, lem-finite-sum-laws,
       def-continuity-real, def-abs-value]
justified_by: []
aliases: [def-absolute-continuity]
landmark: true
short: "absolute continuity"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Definition

Let $a\le b$ and $f:[a,b]\to\mathbb R$ ([[def-interval]]). The function $f$ is
**absolutely continuous** on $[a,b]$ if for every $\varepsilon>0$ there is
$\delta>0$ such that every finite family of subintervals
$[u_j,v_j]\subseteq[a,b]$, indexed by $j<m$, whose open interiors are pairwise
disjoint and which satisfies

$$\sum_{j<m}(v_j-u_j)<\delta$$

also satisfies

$$\sum_{j<m}|f(v_j)-f(u_j)|<\varepsilon.$$

Finite sums and the empty sum are those of [[def-finite-sum]] and
[[lem-finite-sum-laws]]. For $m=0$ both sums are $0$, so the condition is
automatic. On $[a,a]$ every permitted interval is a singleton and every endpoint
increment is $0$ ([[def-abs-value]]), so every function on that singleton is
absolutely continuous. Absolute continuity implies ordinary continuity
([[def-continuity-real]]); that implication is proved next rather than built into
the definition.

