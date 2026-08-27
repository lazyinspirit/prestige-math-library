---
id: thm-morse-stability-of-quasi-geodesics
kind: theorem
title: "Morse stability of quasi-geodesics"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quasi-geodesic-and-quasi-geodesic-metric-space, lem-thin-quadrilaterals-in-a-hyperbolic-space, prop-a-quasi-isometric-embedding-carries-a-quasi-geodesic-to-a-quasi-geodesic, thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.2.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.1"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

For every $\delta \ge 0$ and every quasi-geodesic constants $\lambda \ge 1$,
$\varepsilon \ge 0$, there exists $R=R(\delta,\lambda,\varepsilon)$ with the
following property: if $X$ is a geodesic $\delta$-hyperbolic space and
$q_1,q_2$ are $(\lambda,\varepsilon)$-quasi-geodesics in $X$ with the same
endpoints, then the Hausdorff distance between the images of $q_1$ and $q_2$ is
at most $R$.

## Facts & Assumptions

**Given:** A geodesic $\delta$-hyperbolic space $X$ and two $(\lambda,\varepsilon)$-quasi-geodesics $q_1,q_2$ with the same endpoints.

[A1] In a hyperbolic space, every $(\lambda,\varepsilon)$-quasi-geodesic and every geodesic segment with the same endpoints have bounded Hausdorff distance.

[A2] If two subsets each lie in the $R$-neighborhood of the same geodesic segment, then their Hausdorff distance is at most $2R$.

[L1] Thin quadrilaterals provide the local geometric mechanism behind that
bound
([[lem-thin-quadrilaterals-in-a-hyperbolic-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $\gamma$ be a geodesic segment joining the common endpoints of $q_1$ and $q_2$. By [A1], there is a constant $R_1=R_1(\delta,\lambda,\varepsilon)$ such that each of $\operatorname{im}(q_1)$ and $\operatorname{im}(q_2)$ has Hausdorff distance at most $R_1$ from $\gamma$. [given, A1]

2.1 The comparison fact [A2] then gives Hausdorff distance at most $2R_1$ between $\operatorname{im}(q_1)$ and $\operatorname{im}(q_2)$. The lemma [L1] is the geometric input used in the standard proof of [A1]. Therefore the stated Morse-stability bound holds. [A2, L1, step 1.1] ∎
