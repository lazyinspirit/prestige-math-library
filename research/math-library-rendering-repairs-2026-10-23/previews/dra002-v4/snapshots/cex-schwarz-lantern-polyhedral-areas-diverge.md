---
id: cex-schwarz-lantern-polyhedral-areas-diverge
kind: counterexample
title: 'Schwarz lanterns can have mesh tending to zero while their polyhedral areas diverge'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cross-product-in-r3, def-admissible-regular-parametrized-surface-patch, def-surface-area-and-scalar-surface-integral-of-a-patch, thm-surface-area-density-is-cross-product-norm, thm-triangle-content-and-base-height-formula, cor-sin-x-over-x-limit, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-and-cosine-addition-formulas, thm-algebra-of-limits, thm-sequential-criterion-for-function-limits, cor-archimedean-reciprocal, lem-reciprocal-of-null-diverges, def-divergence-to-infinity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'L. Brewin, Curvature corrected estimates for geodesic arc-length, Section 3.2'
      url: 'https://arxiv.org/pdf/1512.03461'
pipeline_run: null
---

## Statement refuted

Inscribed triangulated surfaces with mesh tending to zero need not have areas tending to the surface-integral area of the cylinder; their areas can diverge to infinity.

## Facts & Assumptions

**Given:** A cylinder of radius $r>0$ and height $H>0$; integers $n\ge2$ and $m\ge1$; and the Schwarz lantern with $m$ horizontal bands, $n$ vertices per ring, and successive rings staggered by angle $\pi/n$.

[L1] An affine parametrization of a nondegenerate triangle over the standard parameter triangle is a regular patch with constant cross-product density; its area is the density times the standard triangle's content $1/2$ ([[def-admissible-regular-parametrized-surface-patch]], [[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[thm-surface-area-density-is-cross-product-norm]], [[thm-triangle-content-and-base-height-formula]]). The cross product has its coordinate formula ([[def-cross-product-in-r3]]), and $1-\cos x=2\sin^2(x/2)$ follows from the trigonometric addition and Pythagorean identities ([[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-addition-formulas]]).

[L2] One has $\sin x/x\to1$ as $x\to0$, and the algebra and sequential criterion for limits transfer this to the sequences used below ([[cor-sin-x-over-x-limit]], [[thm-algebra-of-limits]], [[thm-sequential-criterion-for-function-limits]], [[cor-archimedean-reciprocal]]).

[L3] The reciprocal of a positive null sequence diverges to $+\infty$ in the stated sense ([[lem-reciprocal-of-null-diverges]], [[def-divergence-to-infinity]]).

## Counterexample

**Proof technique:** direct.

1.1 Every vertex lies on the cylinder. Parametrize each triangular face affinely over the standard parameter triangle. Its constant parameter tangents are two edge vectors, so [L1] makes its area one half of their cross-product norm. Each of the $m$ bands contains $2n$ congruent triangles; expanding those edge-vector cross products gives total area $$A_{m,n}=2rn\sin(\pi/n)\sqrt{H^2+m^2r^2(1-\cos(\pi/n))^2}.$$ [given, L1, algebra]

1.2 Take $m=n^3$. The maximum edge length is bounded by the sum of the vertical step $H/n^3$ and a circular chord of angle at most $2\pi/n$, so the mesh tends to zero by [L2]. [given, L2, algebra]

2.1 By [L1], $n^2(1-\cos(\pi/n))=2(n\sin(\pi/(2n)))^2\to\pi^2/2$ using [L2]. Hence $n^3(1-\cos(\pi/n))$ grows like $(\pi^2/2)n$ and diverges by [L3]. [step 1.2, L1, L2, L3, algebra]

3.1 Also $n\sin(\pi/n)\to\pi$ by [L2]. Substitution in step 1.1 and step 2.1 shows $A_{n^3,n}\to+\infty$. [step 1.1, step 2.1, L2, L3, algebra]

4.1 Thus these inscribed lanterns have mesh tending to zero while their areas diverge, proving the stated counterexample. [step 1.2, step 3.1] ∎

## Remarks

Write $\alpha=\pi/n$ and $h=H/m$. The left panel records the angular positions in part of one band: lower-ring vertices have angles $2k\alpha$ and upper-ring vertices have angles $(2k+1)\alpha$. Its straight edges indicate adjacency only; this angular strip is not an isometric unfolding of the flat faces. Continuing periodically gives $2n$ triangles per band.

For a face with lower vertices at angles $-\alpha,\alpha$ and upper apex at angle $0$, the base has length $2r\sin\alpha$. Its midpoint $M$ has radius $r\cos\alpha$. In the radial-vertical plane through the apex $C$, let $Q$ be the point on the cylinder directly below $C$. The right panel shows the face altitude $\ell$ and its components $s=r(1-\cos\alpha)$ and $h$. Thus $\ell=\sqrt{h^2+s^2}$, consistent with the area formula in step 1.1. The proof and limits above do not depend on this illustration; the panels are schematic and use different scales.

```tikz
\begin{tikzpicture}[x=0.85cm,y=0.85cm]
\draw[opacity=0] (-1.5,-2.1) rectangle (13,4.2);
\node at (3,3.7) {Angular positions in one band};
\draw (0,0) -- (6,0);
\draw (1,2) -- (5,2);
\draw (0,0) -- (1,2) -- (2,0) -- (3,2) -- (4,0) -- (5,2) -- (6,0);
\foreach \x in {0,2,4,6} { \fill (\x,0) circle (2pt); }
\foreach \x in {1,3,5} { \fill (\x,2) circle (2pt); }
\node[below] at (0,-0.12) {$0$};
\node[below] at (2,-0.12) {$2\alpha$};
\node[below] at (4,-0.12) {$4\alpha$};
\node[below] at (6,-0.12) {$6\alpha$};
\node[above] at (1,2.12) {$\alpha$};
\node[above] at (3,2.12) {$3\alpha$};
\node[above] at (5,2.12) {$5\alpha$};
\node[left] at (-0.1,0) {$z=0$};
\node[left] at (-0.1,2) {$z=h$};
\node at (3,-0.85) {Angles $\theta$; periodic continuation};
\node at (10.2,3.7) {Face altitude in a radial plane};
\draw (8.2,0) -- (11.4,0) -- (11.4,2.6) -- (8.2,0);
\draw (11.1,0) -- (11.1,0.3) -- (11.4,0.3);
\fill (8.2,0) circle (2pt);
\fill (11.4,0) circle (2pt);
\fill (11.4,2.6) circle (2pt);
\node[left] at (8.2,0) {$M$};
\node[right] at (11.4,0) {$Q$};
\node[above] at (11.4,2.6) {$C$};
\node[below] at (9.8,-0.12) {$s=r(1-\cos\alpha)$};
\node[right] at (11.55,1.3) {$h$};
\node[above left] at (9.8,1.3) {$\ell$};
\node at (10.2,-1.35) {$\ell^2=h^2+s^2$};
\end{tikzpicture}
```
