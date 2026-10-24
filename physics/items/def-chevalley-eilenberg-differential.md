---
id: def-chevalley-eilenberg-differential
kind: definition
title: Chevalley–Eilenberg differential
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-chevalley-eilenberg-cochains]
justified_by: [thm-the-chevalley-eilenberg-differential-squares-to-zero]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Weibel, Lie Algebra Homology and Cohomology, §7.7"
      url: https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf
      locator: "§7.7, displayed differential before Definition 7.7.2, printed p. 239"
---

## Definition

For $f\in C^n(\mathfrak g,M)$ define $df\in C^{n+1}(\mathfrak g,M)$ by

$$\begin{aligned}(df)(x_0,\ldots,x_n)={}&\sum_{i=0}^n(-1)^i x_i f(x_0,\ldots,\widehat{x_i},\ldots,x_n)\\&+\sum_{0\leq i<j\leq n}(-1)^{i+j}f([x_i,x_j],x_0,\ldots,\widehat{x_i},\ldots,\widehat{x_j},\ldots,x_n).\end{aligned}$$

This fixes a zero-based sign convention. A hat means omission, and in the
second sum the bracket is inserted as the first argument. Empty sums are
zero. Thus for $m\in C^0=M$, $(dm)(x)=xm$. Alternation of the formula makes
it factor through $\Lambda^{n+1}\mathfrak g$; the next theorem proves that
successive differentials compose to zero.
