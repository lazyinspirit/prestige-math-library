---
id: def-skeletal-filtration-for-generalized-cohomology
kind: definition
title: Skeletal filtration for generalized cohomology
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-generalized-cohomology-theory, prop-reduced-and-unreduced-generalized-cohomology-theories-correspond]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yiannis Loizides, The Atiyah–Hirzebruch Spectral Sequence, §3, printed pp. 4–7"
      url: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
      locator: "§3, skeletal filtration, printed pp. 4–7"
---

## Definition

Let $X$ be a finite CW complex with skeleta $X^p$, and let $h$ be the CW-pair
cohomology theory associated with a reduced generalized cohomology theory
$\widetilde h$ by
[[prop-reduced-and-unreduced-generalized-cohomology-theories-correspond]]. Use the
conventions
$$X^p=\varnothing\quad (p<0),\qquad X^p=X\quad (p\geq\dim X),$$
so that $X^{-1}=\varnothing$. The **skeletal filtration** of $h^n(X)$ is the
decreasing filtration
$$F^p h^n(X):=\ker\bigl(h^n(X)\to h^n(X^{p-1})\bigr),\qquad p\in\mathbb Z.$$

By the long exact sequence (LES) of the pair $(X,X^{p-1})$ and the fact that a
relative group maps onto the kernel of the restriction, the same subgroup is
$$F^p h^n(X)=\operatorname{im}\bigl(h^n(X,X^{p-1})\to h^n(X)\bigr),$$
the image being the kernel of the next restriction by exactness. The filtration is
decreasing, $F^{p+1}h^n(X)\subseteq F^p h^n(X)$, because the restriction to
$X^{p-1}$ factors through the restriction to $X^p$. For a finite CW complex it is
**bounded and exhaustive**: $F^p h^n(X)=h^n(X)$ for $p\leq0$, since
$h^n(\varnothing)=0$, and $F^p h^n(X)=0$ for $p>\dim X$, since then
$X^{p-1}=X$ and the restriction is the identity. No completeness or infinite
dimension is asserted.

## Source notes

Compare [Loizides](https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf), §3,
printed pp. 4–7, where for a finite CW complex the filtration is written
$F^mh^n(X)=\ker(h^n(X)\to h^n(X^m))$, the indexing here being shifted by one so
that $F^ph^n(X)$ corresponds to the classes vanishing on the $(p-1)$-skeleton;
see also Theorem 3.4 and Remark 3.5 there.
