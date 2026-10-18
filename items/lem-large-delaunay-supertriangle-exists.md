---
id: lem-large-delaunay-supertriangle-exists
kind: lemma
title: "A dyadic supertriangle contains the sites and excludes every input
  circumcircle"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 3
proof_strategy: direct
deps:
  - def-indexed-geometric-site-set
  - def-planar-delaunay-voronoi-structures
  - lem-complete-ordered-field-is-archimedean
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and
        Applications, 3rd ed., Chapter 9, Sections 9.2–9.3"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 13"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
verification:
  precheck: pass
---

## Statement

For every finite full-dimensional dyadic planar site set, a dyadic supertriangle can be chosen to contain every input site strictly and to have all three vertices strictly outside every circumcircle through a noncollinear input triple. If the input has no three collinear and no four cocircular sites, the supertriangle can additionally be chosen so the augmented set has no three collinear sites and no four cocircular sites.

## Facts & Assumptions

**Given:** A finite indexed set $P\subset\mathbb D^2$ of affine dimension two.

[F1] [[def-indexed-geometric-site-set]]: $P$ is finite and each coordinate is an exact dyadic rational.

[F2] [[def-planar-delaunay-voronoi-structures]]: affine dimension two supplies a noncollinear triple; a circumcircle is the circle through such a triple.

[F3] [[lem-complete-ordered-field-is-archimedean]]: in a Dedekind-complete ordered field, canonical integers are cofinal.

[F4] [[def-indexed-geometric-site-set]]: the coordinates are in the fixed Dedekind-complete ordered real field, and the dyadics form its ordered subring.

[A1] For the final general-position clause, no three input sites are collinear and no four input sites are cocircular.

## Proof

1.1 For each noncollinear triple $(a,b,c)$ from $P$, its center $o$ is uniquely determined by
$$2o\cdot(b-a)=\|b\|^2-\|a\|^2,\qquad 2o\cdot(c-a)=\|c\|^2-\|a\|^2.$$
The coefficient matrix has nonzero determinant because $a,b,c$ are noncollinear, so this system has a unique real solution; put $r^2=\|o-a\|^2$. There are finitely many such triples. [given, F1, F2, F4, algebra]

2.1 Let $B$ be the maximum of $1$, the absolute values of all input coordinates, the absolute values of all center coordinates from step 1.1, and all corresponding values $r^2$. This is a finite maximum in the total order of $\mathbb R$. By [F3], choose an integer $M>B$. [step 1.1, F3, F4, choose]

3.1 Take baseline vertices $v_1=(-8M,-4M)$, $v_2=(8M,-4M)$, and $v_3=(0,8M)$. At height $y\in[-M,M]$, their triangle has horizontal half-width $\frac23(8M-y)\ge\frac{14}3M>M$. Since every input site has $|x|,|y|<M$, all sites lie strictly inside this triangle. [given, step 2.1, algebra]

3.2 Step 2.1 gives $|o_1|,|o_2|<M$ and $r^2<M$, while $M>1$. For either lower baseline vertex $v_1=(-8M,-4M)$ or $v_2=(8M,-4M)$, $\|v_i\|^2=80M^2$ and $|v_i\cdot o|<12M^2$, so
$$\|v_i-o\|^2=\|v_i\|^2-2v_i\cdot o+\|o\|^2>56M^2>M>r^2.$$
For the top vertex $v_3=(0,8M)$, $\|v_3\|^2=64M^2$ and $|v_3\cdot o|<8M^2$, giving $\|v_3-o\|^2>48M^2>M>r^2$. Thus each vertex is strictly outside every candidate circle, using only squared distances. The input containment and all circle exclusions have positive margins. [step 2.1, algebra]

4.1 The strict site-containment, strict circle-exclusion, and nonzero orientation of the supertriangle persist under sufficiently small changes in its three baseline vertices, because they are finitely many strict inequalities in continuous polynomial or squared-distance expressions. Choose open disks $U_1,U_2,U_3$ about the baseline vertices small enough to preserve these conditions for every choice $v_i\in U_i$. [step 3.1, step 3.2, algebra]

5.1 Dyadic rationals are dense: for $a<b$, use [F3] to choose an integer $N>1/(b-a)$, then choose $k>N$; induction gives $2^k\ge k+1>N$, hence $2^{-k}<b-a$. The least integer $m>2^ka$ exists by the Archimedean property and the well-ordering of the naturals after translating by an integer lower bound; minimality gives $m\le2^ka+1<2^kb$, so $m2^{-k}\in(a,b)$. Hence dyadic points are dense in every open disk: place an open rectangle inside the disk, choose a dyadic first coordinate away from the finitely many vertical lines among the forbidden set, and then choose a dyadic second coordinate away from the finitely many intersections with that vertical line. If [A1] holds, choose $v_1\in U_1$ outside the finitely many lines through pairs and circles through triples of input sites. Next choose $v_2\in U_2$ outside all lines through pairs and circles through noncollinear triples of $P\cup\{v_1\}$, and choose $v_3\in U_3$ outside those determined by pairs and triples of $P\cup\{v_1,v_2\}$. A finite union of such lines and circles cannot contain an open disk by the rectangle argument. These choices make the augmented set have no collinear triple or cocircular quadruple. Without [A1], any dyadic choices in the disks still satisfy the first part. [A1, F3, F4, step 4.1, choose, construct]

6.1 The selected vertices are dyadic, preserve strict containment and exclusion by [step 4.1], and satisfy the additional general-position properties by [step 5.1]. This proves both claims. [step 4.1, step 5.1] ∎
