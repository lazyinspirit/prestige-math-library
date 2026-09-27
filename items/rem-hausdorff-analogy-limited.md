---
id: rem-hausdorff-analogy-limited
kind: remark
title: Separated is not Zariski Hausdorff
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-separated-morphism-schemes, cor-affine-schemes-separated]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, The Rising Sea, Exercise 11.3.B and Section 10.1.2, printed p.308"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Schemes, Section 26.21 introduction, printed pp.39-40"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Remark

A morphism is separated when its diagonal is a closed immersion into the
scheme-theoretic fibre product $X\times_SX$ ([[def-separated-morphism-schemes]]).
A topological space is Hausdorff exactly when its diagonal is closed in the
ordinary product space, so the two conditions would be the same notion if the
underlying space of $X\times_SX$ were the topological product of $|X|$ with
itself. It is not, and this is the only reason the analogy stops.

Concretely, take a field $k$ and $X=\operatorname{Spec}k[t]$. The continuous map
$|\operatorname{Spec}k[x,y]|\to|\operatorname{Spec}k[x]|\times|\operatorname{Spec}k[y]|$
on underlying spaces is surjective but not injective: the zero ideal and the
prime $(x-y)$ of $k[x,y]$ both contract to $(0)$ in each variable, because a
polynomial $f(x)$ lies in $(x-y)$ only when $f=0$, and $k[x]\cap(x-y)=0$
likewise for $y$. So a point of the scheme-theoretic product carries strictly
more information than a pair of points, and closedness of the diagonal in
$X\times_SX$ says nothing about pairs of distinct points of $|X|$.

Accordingly, the affine line $\mathbb A^1_k$ is separated over $k$
([[cor-affine-schemes-separated]]), while its Zariski point space is far from
Hausdorff. A nonempty open subset of $\operatorname{Spec}k[t]$ is the
complement of a closed set $V(f)$ with $f\ne0$, and the generic point $(0)$ lies
in every such complement, so every two nonempty open subsets meet. Two distinct
points of $|\mathbb A^1_k|$ therefore never have disjoint open neighbourhoods.
Separatedness of a scheme is a statement about the diagonal as a closed
subscheme, not about the point-set topology of the scheme, and the two
conventions must not be substituted for one another.
