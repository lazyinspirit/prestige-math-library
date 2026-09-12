---
id: "ex-mod-two-duality-for-real-projective-space"
kind: "example"
title: "Mod-two duality for real projective space"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-topological-manifold-with-and-without-boundary","prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise","thm-poincare-duality-for-oriented-topological-manifolds","lem-real-projective-space-cellular-homology-and-pinch-map","thm-cellular-homology-computes-singular-homology","def-axiom-of-choice","thm-top-homology-characterizes-compact-orientable-manifolds","thm-heine-borel-rn","thm-local-homology-detects-interior-points-boundary-points-and-dimension","thm-relative-homology-of-consecutive-cw-skeleta","def-fundamental-class-of-a-compact-oriented-manifold","thm-path-connected-implies-connected"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.3 and Example 3.8
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For every integer $n\ge0$, $\mathbb {RP}^n$ is a nonempty compact connected boundaryless $n$-manifold with a canonical $\mathbb F_2$-orientation and mod-two fundamental class. These assertions are choice-free. Assuming AC, cap with that class gives
$$H^p(\mathbb {RP}^n;\mathbb F_2)\xrightarrow{\sim}H_{n-p}(\mathbb {RP}^n;\mathbb F_2)$$
for every integer $p$; both sides are $\mathbb F_2$ when $0\le p\le n$ and zero otherwise. For positive even $n$, integral orientability fails, while the mod-two conclusion still holds. The case $n=0$ is an integrally oriented point, not a nonorientable exception.

## Facts & Assumptions

[F1] [[def-topological-manifold-with-and-without-boundary]] requires Hausdorffness, a countable basis and the specified local charts.

[F2] [[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]] gives the canonical mod-two generator section without AC.

[F3] [[thm-poincare-duality-for-oriented-topological-manifolds]] gives actual cap duality, using ordinary cohomology for compact manifolds, under AC.

[F4] [[lem-real-projective-space-cellular-homology-and-pinch-map]] proves the one-cell-per-degree CW structure and the integral differentials $d_j=1+(-1)^j$ for $j>0$, with the edge endpoint interpretation at $j=1$. This part of that supplier is choice-free.

[F5] [[thm-cellular-homology-computes-singular-homology]] computes singular homology with any abelian coefficient group.

[F6] [[def-axiom-of-choice]] is assumed only for [F3]'s local UCT and exhaustion choices.

[F7] [[thm-top-homology-characterizes-compact-orientable-manifolds]] characterizes the local restriction image of the top group of a connected closed manifold, without AC.

[F8] [[thm-heine-borel-rn]] gives compactness of the unit sphere.

[F9] [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]] proves that local Euclidean charts imply empty boundary.

[F10] [[thm-relative-homology-of-consecutive-cw-skeleta]] identifies cellular groups with one coefficient copy per cell via characteristic disks.

[F11] [[def-fundamental-class-of-a-compact-oriented-manifold]] constructs the unique class realizing a supplied orientation, without AC.

[F12] [[thm-path-connected-implies-connected]] gives connectedness from the paths below, without AC.

## Proof

**Given:** $P=\mathbb {RP}^n=S^n/(x\sim-x)$ with its quotient topology, and the quotient map $q:S^n\to P$.

1.1 The sphere is compact by [F8], so $P$ is compact: pull an open cover back under the continuous surjection $q$ and project a finite subcover. The map $q$ is open because $q^{-1}q(V)=V\cup(-V)$ for open $V\subset S^n$. Distinct orbits $\{x,-x\}$ and $\{y,-y\}$ have positive minimum distance $d$, the minimum of finitely many positive distances. The unions of radius-$d/3$ balls about the points in the two orbits are disjoint, open and antipodally invariant. Their quotient images are disjoint open neighborhoods. Hence $P$ is Hausdorff. For each $0\le i\le n$, the open subset $U_i=\{[x]:x_i\ne0\}$ has the affine chart $[x]\mapsto(x_j/x_i)_{j\ne i}$ onto $\mathbb R^n$. Ratios are continuous and invariant on the sphere preimage, so descend continuously through the open quotient restriction. The inverse sends $u$ to the orbit of $(u_0,\ldots,1,\ldots,u_n)/\sqrt{1+|u|^2}$, with the $1$ in coordinate $i$. These are continuous inverse maps. For $n=0$ this is the one-point chart and its singleton basis. For $n>0$ the pullbacks of rational balls in these finitely many charts form a countable basis: any open neighborhood intersects one of the covering charts, whose rational-ball basis refines it. Thus [F1] and [F9] make $P$ a boundaryless $n$-manifold. [F1, F8, F9, given]

2.1 This manifold is nonempty and connected. For $n=0$ both sphere points form one orbit, so $P$ is a point. For $n\ge1$, any two sphere points $x,y$ not antipodal are joined by the path $((1-t)x+ty)/|(1-t)x+ty|$, whose denominator cannot vanish unless $y=-x$. If they are antipodal, choose a unit vector $v$ perpendicular to $x$ and concatenate such paths through $v$. Such a vector exists explicitly: take a standard basis vector not parallel to $x$, subtract its projection on $x$ and normalize; at least one of the $n+1\ge2$ standard vectors is not parallel. These paths project to paths between all projective points, proving path connectedness and hence connectedness by [F12]. No family of path choices is needed. Apply [F2] to the manifold in step 1.1: at every stalk take its unique nonzero mod-two value, which is continuous in every local trivialization. By [F11], compactness then gives its canonical fundamental class $[P]_2$. These steps require no AC. [F2, F11, F12, step 1.1]

3.1 By [F4], the integral cellular groups have one oriented generator in each degree $0,\ldots,n$, with positive-degree differentials alternating $0,2$. Reduction of chain coefficients modulo two commutes with boundary, relative quotient, and the connecting-map formula taking a relative cycle to its boundary. By [F10] it sends each integral characteristic-disk generator to the coefficient-one generator of the corresponding $\mathbb F_2$ cellular group. Thus the cellular differentials modulo two are the reductions of $0,2$, both zero. Therefore each cellular homology group in degrees $0,\ldots,n$ is $\mathbb F_2$, and the groups in all other degrees are zero. By [F5] these are the singular homology groups. In top degree $[P]_2$ is their nonzero generator because by step 2.1 its point restriction is nonzero. [F4, F5, F10, step 2.1]

3.2 Let $n>0$ be even. The top integral cellular differential in [F4] is multiplication by $2:\mathbb Z\to\mathbb Z$, which has zero kernel, and there is no cell above it. Thus [F5] gives $H_n(P;\mathbb Z)=0$. If $P$ were integrally orientable, [F7], applied using compactness and connectedness from steps 1.1–2.1, would make its top restriction image the whole local group $\mathbb Z$, contradicting its zero domain. This proves integral nonorientability without assuming it from a picture of transition signs. The mod-two orientation and class of step 2.1 still exist. At $n=0$, $P$ is a point, so the multiplication-by-two argument has no positive differential to apply to; it is integrally orientable. [F4, F5, F7, step 1.1, step 2.1]

4.1 Assume [F6]. The compact boundaryless manifold and orientation in steps 1.1–2.1 satisfy exactly the hypotheses of [F3]. It gives the stated cap isomorphism, since compact support is ordinary cohomology on compact $P$. Step 3.1 then computes its domain as well as its codomain: both are $\mathbb F_2$ for $0\le p\le n$ and zero otherwise. Over $\mathbb F_2$ the isomorphism between one-dimensional spaces sends the unique nonzero class to the unique nonzero class, so this is a concrete complementary-degree pairing without any sign choice. In particular $1\cap[P]_2=[P]_2$ and the nonzero top cohomology class caps to the point generator of $H_0$. [F3, F6, step 1.1, step 2.1, step 3.1]

5.1 The assertions include $n=1$, with zero cellular differential in degrees zero and one and cap interchanging the two nonzero degrees. Empty spaces and zero coefficient rings are not inputs here; the nonempty quotient and the specific field $\mathbb F_2$ were fixed. Degrees outside $0,\ldots,n$ are zero on both sides by step 4.1, including negative degrees. Collapsed or repeated boundary points in the attaching maps are included in [F4]'s quotient construction, and singular degeneracies remain in the coefficient comparison of step 3.1. The paths in step 2.1 have their prescribed endpoints, with the non-antipodal denominator check preventing a singularity. Only step 4.1 invokes AC, precisely the countable chart-neighborhood and local UCT free-module/projection/lift choices of [F3]; compactness, canonical mod-two orientation, fundamental-class existence and the integral nonorientability calculation above are choice-free. [F3, F4, F6, step 1.1, step 2.1, step 3.1, step 4.1, step 3.2] ∎
