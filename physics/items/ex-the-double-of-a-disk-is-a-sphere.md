---
id: ex-the-double-of-a-disk-is-a-sphere
kind: example
title: "The double of a disk is a sphere"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-double-of-a-smooth-manifold-with-boundary, thm-the-double-has-a-well-defined-smooth-structure, ex-the-closed-ball-and-its-sphere-boundary, ex-the-standard-collar-of-a-closed-ball]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Example

For $n\ge1$, the labelled double of $D^n$ is diffeomorphic to $S^n$.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the closed unit disk $D^n=B^n$, and its labelled double equipped with the seam charts induced by the standard radial collar.

[L1] The labelled double identifies only corresponding boundary points of its two labelled copies ([[def-double-of-a-smooth-manifold-with-boundary]]).

[L2] Collar seam charts give the labelled double a smooth boundaryless structure compatible with both copies ([[thm-the-double-has-a-well-defined-smooth-structure]]).

[L3] The map $c(u,t)=(1-t)u$ is a smooth collar of $B^n$ ([[ex-the-standard-collar-of-a-closed-ball]]).

## Verification

**Proof technique:** direct.

1.1 For $x\ne0$, write $x=ru$ with $0<r\le1$ and define $F([x,\pm])=\bigl(\sin(\pi r/2)u,\ \pm\cos(\pi r/2)\bigr)$, while $F([0,\pm])=(0,\ldots,0,\pm1)$. At $r=1$ both formulas give $(u,0)$, so [L1] makes $F$ well defined on the double. [given, L1, construct]

2.1 On either disk the first component is $\frac{\sin(\pi|x|/2)}{|x|}x$, with its value at $x=0$ defined by the smooth even power series, and the last component is $\pm\cos(\pi|x|/2)$, also a smooth function of $|x|^2$. Thus the restrictions are smooth at the two poles. [step 1.1, algebra]

3.1 In the signed seam coordinate $s$, where $x=(1-|s|)u$ and the sign of $s$ records the label, [L2] and [L3] rewrite the map as $F(u,s)=\bigl(\cos(\pi s/2)u,\ \sin(\pi s/2)\bigr)$. This is a smooth local diffeomorphism across $s=0$. The formula is bijective because the last coordinate selects the hemisphere and its absolute value determines $r$; its inverse is smooth in the pole charts and in these seam charts. Hence $F$ is a diffeomorphism from the labelled double to $S^n$. [L2, L3, step 1.1, step 2.1] ∎
