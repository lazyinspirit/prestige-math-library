---
id: ex-cg-unit-circle-at-the-strict-perimeter-boundary-is-cat-one
kind: example
title: "The unit circle is CAT(1) at the strict perimeter boundary"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [def-cg-cat-zero-cat-one-and-local-geodesic, lem-cg-comparison-convexity-and-model-spaces, def-metric-space, def-metric-ball, def-metric-compactness, def-complete-metric-space, def-geodesic-and-geodesic-metric-space, def-isometry-and-metric-embedding, def-interval, def-metric-continuity, thm-compact-implies-complete-and-totally-bounded, thm-continuous-image-of-a-compact-space-is-compact, thm-heine-borel-rn, def-principal-inverse-sine-and-cosine, cor-pi-is-the-first-positive-sine-zero]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.2.3, printed pp. 18–19 (geodesics on the round sphere); II.3.17 and I.5.21(1), printed pp. 190 and 67 (circles and the cone over a circle); II.4.15, printed pp. 202–203 (isometrically embedded circles)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed pp. 500–507 (CAT comparison, the cone on a CAT(1)-space, Theorem I.2.8 at printed p. 502 with the strict bound $2\\pi/\\sqrt{\\kappa}$)"
---

## Example

Let $S^1_{2\pi}=\mathbb R/2\pi\mathbb Z$ be the unit circle with $d_{2\pi}(x,y)=\min\{|x-y+2\pi k|:k\in\mathbb Z\}$. Then $(S^1_{2\pi},d_{2\pi})$ is a compact, complete, geodesic length space containing itself as an isometrically embedded circle of length $2\pi$, and it is CAT(1). This is exactly the boundary case $\ell=2\pi$ of the circle criterion of [[lem-cg-comparison-convexity-and-model-spaces]] clause (vi). Explicitly:

**(i)** every pair of points at distance $<\pi$ is joined by a unique geodesic, the shorter of the two arcs;

**(ii)** if three points have pairwise distances $a,b,c$ with $a+b+c<2\pi$, then some cyclic gap between consecutive points is at least $\pi$ and the three points lie on a complementary arc of length $s=(a+b+c)/2<\pi$, which is isometric to an interval; the triangle is therefore degenerate and its spherical comparison triangle is obtained from it by an isometry, so the CAT(1) inequality holds with equality;

**(iii)** the three equally spaced points $0,2\pi/3,4\pi/3$ have perimeter exactly $2\pi$, so they are not tested by the CAT(1) definition, and no triangle of perimeter $<2\pi$ witnesses a failure.

## Facts & Assumptions

**Given:** The circle $S^1_{2\pi}=\mathbb R/2\pi\mathbb Z$ with $d_{2\pi}(x,y)=\min\{|x-y+2\pi k|:k\in\mathbb Z\}$.

[F1] The map $t\mapsto t+2\pi\mathbb Z$ is a continuous surjection $[0,2\pi]\to S^1_{2\pi}$ with $d_{2\pi}(s,t)=\min(|s-t|,2\pi-|s-t|)$ for $s,t\in[0,2\pi]$; $d_{2\pi}$ is a metric; and $(S^1_{2\pi},d_{2\pi})$ is compact, complete, geodesic, locally isometric to $\mathbb R$, and contains itself as an isometrically embedded circle of length $2\pi$ ([[lem-cg-comparison-convexity-and-model-spaces]] clause (vi), [[def-cg-cat-zero-cat-one-and-local-geodesic]], [[thm-compact-implies-complete-and-totally-bounded]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-heine-borel-rn]], [[def-metric-compactness]], [[def-complete-metric-space]], [[def-geodesic-and-geodesic-metric-space]], [[def-isometry-and-metric-embedding]]).

[F2] The circle criterion of the same clause: $S^1_\ell$ is CAT(1) if and only if $\ell\ge2\pi$; for $\ell\ge2\pi$ every triangle of perimeter $<2\pi$ lies in an arc of length $<\pi$, hence is degenerate, and realizes its comparison triangle isometrically ([[lem-cg-comparison-convexity-and-model-spaces]] clause (vi)).

[F3] An interval of $\mathbb R$ is CAT(0) and its geodesic triangles are degenerate, agreeing with their Euclidean comparison triangles; a degenerate geodesic triangle on a common geodesic realizes its comparison isometrically ([[def-cg-cat-zero-cat-one-and-local-geodesic]], [[def-interval]], [[lem-cg-comparison-convexity-and-model-spaces]] clause (i)).

## Proof

1.1 (i) and the metric properties are the case $\ell=2\pi$ of [F1]: for two points at distance $\theta<\pi$ the shorter arc, parametrized proportionally, is a geodesic segment, and any geodesic between them has length $\theta$ and is monotone along the circle, hence is that arc; so it is unique. [F1, given]

2.1 (ii). Let three points have pairwise distances $a,b,c$ with $a+b+c<2\pi$. If vertices repeat, the two nonzero sides coincide by step 1.1 and realize a degenerate comparison. Otherwise order them cyclically on the circle, writing the three gaps as $g_1,g_2,g_3>0$ with $g_1+g_2+g_3=2\pi$. If all $g_i<\pi$ then the pairwise distances are $g_1,g_2,g_3$ and $a+b+c=2\pi$, contrary to hypothesis; so some gap, say $g_3\ge\pi$, and the complementary arc of length $s:=2\pi-g_3\le\pi$ contains all three points; the two remaining gaps satisfy $g_1+g_2=s$, and the pairwise distances are $g_1,g_2$ and $g_1+g_2=s$, so $a+b+c=2s$ and $s<\pi$. All three points then lie in an arc of length $s<\pi$, on which the circle metric is the interval metric, so the triangle is degenerate and isometric to a triangle on a great arc of $S^2$ of the same length; by [F3] and the comparison-triangle uniqueness of [[lem-cg-comparison-convexity-and-model-spaces]] clause (ii) it realizes its spherical comparison triangle isometrically, and the CAT(1) inequality holds with equality. [F1, F2, F3, algebra]

3.1 (iii). For the three equally spaced points the gaps are $2\pi/3$ each, the pairwise distances are $2\pi/3$ and the perimeter is exactly $2\pi$, so the hypothesis "perimeter $<2\pi$" of the CAT(1) definition is not met and the triple is not tested; step 2.1 shows that every tested triangle is degenerate and satisfies the inequality with equality, so no triangle of perimeter $<2\pi$ witnesses a failure. [F1, step 2.1, given]

4.1 Conclusion. By [F2] the space $S^1_{2\pi}$ is CAT(1), in agreement with steps 2.1 and 3.1, and by [F1] it is compact, complete, geodesic and contains itself as an isometrically embedded circle of length $2\pi$. [step 2.1, step 3.1, F1, F2] ∎
