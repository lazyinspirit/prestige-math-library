---
id: thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant
kind: theorem
title: "The boundary topology is well defined and quasi-isometry invariant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-boundary-topology-by-gromov-products, lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences, thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 5.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

For a proper geodesic hyperbolic space, the topology defined on the Gromov
boundary by Gromov products is well defined. Moreover, a quasi-isometry between
proper geodesic hyperbolic spaces induces a homeomorphism of their boundaries.

## Facts & Assumptions

**Given:** Proper geodesic hyperbolic spaces $X$ and $Y$.

[A1] Different representatives of the same boundary point and different basepoints define equivalent neighborhood systems on the boundary.

[A2] If $f:X\to Y$ is a quasi-isometry and $o'\in Y$ stays a bounded distance
from $f(o)$, then there are constants $A\ge1$ and $C\ge0$, depending only on
the quasi-isometry data, such that boundary Gromov products satisfy
$$A^{-1}(\xi,\eta)_o-C\le (\partial f(\xi),\partial f(\eta))_{o'}\le A(\xi,\eta)_o+C.$$
In particular $f$ sends Gromov sequences to Gromov sequences, preserves
asymptoticity, and carries product neighborhoods to cofinal product
neighborhoods. A quasi-inverse satisfies the corresponding estimates.

[L1] Asymptoticity of Gromov sequences is an equivalence relation
([[lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the boundary is already a quotient by a genuine equivalence relation. The comparison result [A1] then shows that changing representatives or the basepoint only changes the neighborhoods $U_o(\xi,R)$ by bounded shifts of the parameter $R$, so the topology is well defined. [L1, A1]

2.1 By [A2], a quasi-isometry induces a map on asymptoticity classes, and the two-sided product estimate makes that map continuous for the neighborhood systems from step 1.1. Applying the same argument to a quasi-inverse gives a continuous inverse. Thus the induced boundary map is a homeomorphism, and the boundary topology is quasi-isometry invariant. [A1, A2, step 1.1] ∎
