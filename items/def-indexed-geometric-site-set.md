---
id: def-indexed-geometric-site-set
kind: definition
title: "Finite indexed geometric site sets and duplicate handling"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "CGAL 6.3 User Manual, 3D Triangulations"
      url: "https://cgal.github.io/9465/doc/Triangulation_3/index.html"
---

## Definition

Throughout this page, $\mathbb R$ is a commutative field with $1>0$, a total order compatible with addition and multiplication, and the least-upper-bound property. Let $\mathbb D=\{m2^e:m,e\in\mathbb Z\}$ be its dyadic subring. For $d\in\{2,3\}$, a nonempty finite indexed site list is a finite list
$$S=((\iota_1,p_1,w_1),\ldots,(\iota_N,p_N,w_N)),$$
where every $\iota_i\in\mathbb Z$ is a distinct stable identifier, every $p_i\in\mathbb D^d$, and each optional weight $w_i$ is either absent (meaning $0$) or belongs to $\mathbb D$. In unweighted mode, a duplicate means equal coordinates; collapse each such class to its least identifier. In weighted mode, a duplicate means an equal coordinate-weight pair; collapse only equal pairs to the least identifier. Equal coordinates with unequal weights remain distinct weighted sites.

The unweighted deduplicated set keeps, for each coordinate value $p$, the entry with least identifier among entries at $p$, and records each discarded identifier in a duplicate map. The weighted deduplicated set keeps the least identifier for each exact pair $(p,w)$ and records only repeated pairs in its duplicate map. A weighted computation retains different weights at the same coordinate; their power values are compared by the ordinary power-distance rule, so a dominated weight may be hidden.

For a finite point set $P\subseteq\mathbb R^d$, its convex hull is the set of all finite convex combinations of points of $P$. Its affine dimension is the dimension of its affine hull. A tuple $p_0,\ldots,p_d$ is affinely independent when the vectors $p_1-p_0,\ldots,p_d-p_0$ form a basis of $\mathbb R^d$; here a basis means every vector has a unique linear expansion in those vectors. This convention makes nondegenerate simplex coordinates unique.
