---
id: ex-cg-short-circle-fails-cat-one
kind: example
title: "A circle of circumference $\\ell<2\\pi$ fails CAT(1)"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [def-cg-cat-zero-cat-one-and-local-geodesic, lem-cg-comparison-convexity-and-model-spaces, def-metric-space, def-metric-ball, def-metric-compactness, def-complete-metric-space, def-geodesic-and-geodesic-metric-space, def-isometry-and-metric-embedding, def-principal-inverse-sine-and-cosine, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, cor-pi-is-the-first-positive-sine-zero, def-metric-continuity, lem-metric-reverse-triangle]
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
      locator: "I.2.1–I.2.3, printed pp. 16–19 (the round sphere and the law of cosines); II.3.17, printed p. 190 (the cone over a circle of length $a$); II.4.15–II.4.16, printed pp. 202–203 (isometrically embedded circles and the bound $2D_K$)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed p. 502 (Theorem I.2.8: no closed geodesic of length $<2\\pi/\\sqrt{\\kappa}$) and printed pp. 505–506 (the truncated cone metric and the cone on a CAT(1)-space)"
---

## Example

Let $0<\ell<2\pi$ and let $S^1_\ell$ be the round circle of circumference $\ell$. Then $S^1_\ell$ is a compact, complete, geodesic length space that is **not** CAT(1), so a metric space containing an isometrically embedded circle of length $\ell<2\pi$ is not CAT(1). Witness: the three equally spaced points $x=0$, $y=\ell/3$, $z=2\ell/3$ have pairwise distances $\ell/3$, so their geodesic triangle has perimeter $\ell<2\pi$; the midpoint $a=\ell/6$ of $[x,y]$ satisfies $d_\ell(a,z)=\ell/2$; the comparison triangle in $S^2$ has equal sides $\ell/3$, and by the midpoint identity of [[lem-cg-comparison-convexity-and-model-spaces]] clause (iii) its comparison point is at distance $\arccos\bigl(\cos(\ell/3)/\cos(\ell/6)\bigr)<\ell/2$ from the opposite vertex. Hence $d_\ell(a,z)$ strictly exceeds the comparison distance and the CAT(1) inequality fails ([[def-cg-cat-zero-cat-one-and-local-geodesic]]).

## Facts & Assumptions

**Given:** A real $\ell$ with $0<\ell<2\pi$ and the round circle $S^1_\ell=\mathbb R/\ell\mathbb Z$ with $d_\ell(x,y)=\min\{|x-y+k\ell|:k\in\mathbb Z\}$.

[F1] The round circle $(S^1_\ell,d_\ell)$ is a compact complete geodesic metric space, locally isometric to $\mathbb R$, containing itself as an isometrically embedded circle of length $\ell$, and its criterion $S^1_\ell$ is CAT(1) if and only if $\ell\ge2\pi$ holds ([[lem-cg-comparison-convexity-and-model-spaces]] clause (vi), [[def-cg-cat-zero-cat-one-and-local-geodesic]], [[def-metric-compactness]], [[def-complete-metric-space]], [[def-geodesic-and-geodesic-metric-space]], [[def-isometry-and-metric-embedding]]).

[F2] The midpoint identity in $S^2$: if $a$ is the midpoint of a geodesic $[y,z]$ of length $c<\pi$ in $S^2$ and $x\in S^2$, then $\cos d_S(x,a)=(\cos d_S(x,y)+\cos d_S(x,z))/(2\cos(c/2))$ with $\cos(c/2)>0$ ([[lem-cg-comparison-convexity-and-model-spaces]] clause (iii)).

[F3] $\cos$ is strictly decreasing on $[0,\pi]$, $\cos(x+y)=\cos x\cos y-\sin x\sin y$ for all reals, $\sin t>0$ for $0<t<\pi$, and $\arccos:[-1,1]\to[0,\pi]$ is the inverse of $\cos|_{[0,\pi]}$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-and-cosine-addition-formulas]], [[cor-pi-is-the-first-positive-sine-zero]], [[def-principal-inverse-sine-and-cosine]]).

[F4] A subspace argument: if $Z\subseteq X$ carries the induced metric and is geodesic in that metric, and $X$ is CAT(1), then $Z$ is CAT(1), since every geodesic triangle of $Z$ with perimeter $<2\pi$ is a geodesic triangle of $X$ with the same side lengths and comparison distances ([[def-geodesic-and-geodesic-metric-space]], [[def-cg-cat-zero-cat-one-and-local-geodesic]]).

[F5] $d_\ell(a,z)=\min\{\ell/2,\ell-\ell/2\}=\ell/2$ for $a=\ell/6$, $z=2\ell/3$, and the pairwise distances of $0,\ell/3,2\ell/3$ are $\ell/3$ ([[def-cg-cat-zero-cat-one-and-local-geodesic]]).

## Proof

1.1 The metric, compactness, completeness and geodesic character are clause (vi) of [F1]. For the failure, the three points $x=0$, $y=\ell/3$, $z=2\ell/3$ of $S^1_\ell$ have pairwise distances $\ell/3$ by [F5], so the geodesic triangle they determine has perimeter $\ell<2\pi$ and all its sides are $<\pi$; its comparison triangle in $S^2$ has three equal sides $\ell/3$ by the comparison-triangle uniqueness of [[lem-cg-comparison-convexity-and-model-spaces]] clause (ii). [F1, F5, given]

1.2 Let $a:=\ell/6$ be the midpoint of the shorter arc $[x,y]$, so that $d_\ell(a,z)=\ell/2$ by [F5]. The comparison point $\bar a$ of $a$ is the midpoint of the corresponding side of the spherical comparison triangle, and by the midpoint identity [F2], applied with $c=\ell/3<\pi$, its distance from the opposite vertex $\bar z$ satisfies $\cos d_S(\bar a,\bar z)=\dfrac{\cos(\ell/3)+\cos(\ell/3)}{2\cos(\ell/6)}=\dfrac{\cos(\ell/3)}{\cos(\ell/6)}$, the denominator being positive because $0<\ell/6<\pi/2$. [F2, F3, F5]

2.1 The comparison distance is strictly less than $\ell/2$. Indeed the addition formula [F3] gives $2\cos(\ell/2)\cos(\ell/6)=\cos(2\ell/3)+\cos(\ell/3)$, and $\cos(2\ell/3)-\cos(\ell/3)=-2\sin(\ell/2)\sin(\ell/6)<0$, since both sine arguments lie in $(0,\pi)$; hence $2\cos(\ell/2)\cos(\ell/6)<2\cos(\ell/3)$, that is $\cos(\ell/2)<\cos(\ell/3)/\cos(\ell/6)$ after dividing by the positive number $2\cos(\ell/6)$. Since both $\ell/2$ and $\arccos(\cos(\ell/3)/\cos(\ell/6))$ lie in $[0,\pi]$ and $\cos$ is strictly decreasing there, $\arccos(\cos(\ell/3)/\cos(\ell/6))<\ell/2$. [step 1.2, F2, F3, algebra]

3.1 An ambient space cannot escape the failure. Let $X$ be a metric space and let $\varphi:S^1_\ell\to X$ be an isometric embedding of a circle of length $\ell<2\pi$; the image $Z:=\varphi(S^1_\ell)$ with the induced metric is isometric to $S^1_\ell$, hence geodesic, and every geodesic triangle of $Z$ of perimeter $<2\pi$ is a geodesic triangle of $X$ with the same side lengths and comparison distances, so if $X$ were CAT(1) then $Z$ would be CAT(1) by [F4]; but $Z$, being isometric to $S^1_\ell$, is not CAT(1) by step 2.1, a contradiction. Hence a metric space containing an isometrically embedded circle of length $\ell<2\pi$ is not CAT(1). [step 2.1, F4, F5] ∎

## Remarks

- Steps 1.2, 2.1 and 3.1 exhibit $d_\ell(a,z)=\ell/2$ greater than the comparison distance, so the CAT(1) inequality fails for a triangle of perimeter $\ell<2\pi$, and $S^1_\ell$ is not CAT(1); the criterion of [F1] states the same conclusion, and the two are consistent.
- The claim "a space containing an isometrically embedded circle of length $\ell<2\pi$ is not CAT(1)" follows from [F4]: the shorter arcs in the image are geodesics of the circle and, because the embedding preserves distances, are also ambient geodesics, so every comparison triangle of the circle is a comparison triangle in the ambient space; a CAT(1) ambient space would then be CAT(1) as a test for the circle's triangles, contradicting the failure just exhibited.
