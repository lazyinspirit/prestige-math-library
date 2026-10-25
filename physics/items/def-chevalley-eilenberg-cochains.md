---
id: def-chevalley-eilenberg-cochains
kind: definition
title: Chevalley–Eilenberg cochains
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-representation-of-a-lie-algebra, def-symmetric-and-exterior-powers-over-an-arbitrary-field, def-vector-space-of-linear-maps]
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
      locator: "§7.7, Definition 7.7.2 and preceding formula, printed pp. 239–240"
---

## Definition

For a Lie algebra $\mathfrak g$ over $k$ and a $\mathfrak g$-module $M$,
the degree-$n$ **Chevalley–Eilenberg cochains** are

$$C^n(\mathfrak g,M)=\operatorname{Hom}_k(\Lambda^n\mathfrak g,M)\quad(n\geq0).$$

Set $C^n(\mathfrak g,M)=0$ for $n<0$. Since
$\Lambda^0\mathfrak g=k$, evaluation at $1$ identifies
$C^0(\mathfrak g,M)$ with $M$. Cochains may equivalently be viewed as
alternating $n$-linear maps $\mathfrak g^n\to M$. No finite-dimensionality
or characteristic hypothesis is needed. If $n>\dim\mathfrak g$ in the
finite-dimensional case, the exterior power and hence the cochain space are
zero.
