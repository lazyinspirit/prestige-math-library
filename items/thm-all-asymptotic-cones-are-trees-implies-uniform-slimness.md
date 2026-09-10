---
id: "thm-all-asymptotic-cones-are-trees-implies-uniform-slimness"
kind: "theorem"
title: "Tree cones at all basepoints and scales imply uniform slimness"
status: published
origin: "pipeline"
deps: ["lem-tree-cones-give-uniform-two-side-control", "lem-geodesic-segments-have-isometric-ultralimits", "lem-triangle-extrema-and-real-tree-tripod-rules", "def-geodesic-rays-and-lines", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §11.20 Proposition 11.167(a), full proof PDF pp.443–445"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Assume AC. Fix one free ultrafilter $\omega$. If a geodesic space $X$ has a real tree as $\operatorname{Cone}_\omega(X,e,\lambda)$ for every sequence $e$ of basepoints and every positive sequence $\lambda_n\to0$ ordinarily, then some finite $\delta\ge0$ makes every chosen geodesic triangle in $X$ $\delta$-slim.

## Facts & Assumptions

**Given:** A geodesic space with every stated cone a real tree, one fixed free ultrafilter, and AC.

[F1] There is M>0 controlling two sides with common endpoint when the other endpoints are at distance greater than one. ([[lem-tree-cones-give-uniform-two-side-control]]).

[F2] Oriented sides through bounded regions have full represented interval/ray/line limits. ([[lem-geodesic-segments-have-isometric-ultralimits]]).

[F3] Triangle extrema, tripod equivalence, common tails for finite-Hausdorff rays, and uniqueness of finite-Hausdorff lines hold. ([[lem-triangle-extrema-and-real-tree-tripod-rules]]).

[F4] AC selects violating triangles, nearest points and side families. ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The two-side bound extends to $d_H([x,y],[x,z])\le C\max(1,d(y,z))$, with $C=4M+4$. Only $d(y,z)\le1$ needs work. If $d(x,y)\ge3$, let $y'$ be three units before $y$ on its side. Then $2\le d(y',z)\le4$, so [F1] gives $d_H([x,y'],[x,z])\le4M$; restoring the last length-three piece increases this by at most three. If $d(x,y)<3$, then $d(x,z)<4$ and both sides lie within four of their common endpoint, giving Hausdorff distance at most four. [F1, algebra]

1.2 If there is no uniform slimness bound, use AC to choose a triangle for each $n$ whose slimness $d_n>n$. Maximize distance to the other two sides over all three sides, and rename so the maximizing point is $a_n\in[x_n,y_n]$ with nearest point $b_n\in[y_n,z_n]$ at distance $d_n$. Let $c_n\in[x_n,z_n]$ be nearest to $a_n$, and put $D_n=d(a_n,c_n)\ge d_n$. Crucially every point of each of the three sides is within $d_n$ of the other two. [F3, F4]

2.1 In the cone based at $a_n$ at scales $1/d_n$, write $a=[a_n]$, $b=[b_n]$. It is a real tree, $d(a,b)=1$, and every represented point of either opposite side is at distance at least one from $a$. The full side $[x_n,y_n]$ survives and contains $a$; $[y_n,z_n]$ survives and contains $b$. Nearest points with bounded rescaled distances give points on the full represented limits by [F2]. [step 1.2, F2]

3.1 First suppose the extended limit of $D_n/d_n$ is finite. Then $c=[c_n]$ survives (modify exceptional coordinates as needed). Apply step 1.1 to the pairs of half-sides toward $x_n$, toward $y_n$, and toward $z_n$, starting respectively at $(a_n,c_n)$, $(a_n,b_n)$ and $(b_n,c_n)$. The resulting Hausdorff bounds remain finite after scaling because these three starting-point distances are bounded after scaling. Each pair limits either to segments with the same terminal endpoint or to rays with common tails by [F3]. The finite/infinite status matches in each pair because their startpoints stay at bounded distance. [step 1.1, step 2.1, F2, F3]

3.2 It remains that $D_n/d_n\to_\omega+\infty$. Every point of the third side is then out of bounded rescaled range from $a_n$, since its distance is at least $D_n$. In particular $x_n,z_n$ escape. The two surviving sides $S,T$ are either rays from a common finite $y=[y_n]$, or lines when $y_n$ also escapes. Orient their halves toward $y$ positively, using $a$ and $b$ as origins. step 1.1 applied to $[a_n,y_n]$ and $[b_n,y_n]$ makes the two positive halves either terminate at the same $y$ or share a positive tail. [step 1.1, step 2.1, F2, F3]

4.1 Choose a point $x^*$ common to the two terminal half-sides toward $x$: take their common finite endpoint, or a point sufficiently far down their common tail past both starting points. Choose $y^*,z^*$ similarly. On the full first side the points $x^*,a,y^*$ occur in that order, since its two halves have opposite signed parameters. The other full sides similarly contain $[y^*,z^*]$ and $[z^*,x^*]$. The finite triangle with these endpoints is a tripod in the cone; hence $a\in[x^*,y^*]$ belongs to the union of its other two sides. This contradicts the distance-at-least-one conclusion of step 2.1. This construction includes finite zero-length terminal legs and does not invoke an ideal-boundary theorem. [step 3.1, step 2.1, F2, F3]

4.2 For every fixed $t\ge0$, take the point at rescaled parameter $t$ on $[b_n,z_n]$, clamping at its endpoint when necessary. These sequences are bounded because $d(a_n,b_n)/d_n=1$. Global maximality in step 1.2 gives distance at most $d_n$ to $[x_n,y_n]\cup[x_n,z_n]$. The second set is farther than $D_n$ from $a_n$, so cannot supply this bound on a large set: the selected point is within $1+t$ of $a_n$ after scaling. Thus it has a bounded nearest point on the first side, and its limit has distance at most one from $S$. Every point of the entire negative half-ray of $T$ is therefore within one of $S$. [step 1.2, step 3.2, F2, F3, F4]

5.1 If $y$ is finite, $S,T$ are rays from $y$. Distinct rays from one origin split and their distance to each other grows without bound along either tail, by the tripod rule, contradicting step 4.2. If $y$ is infinite, the two lines share a positive tail by step 3.2. If distinct, their intersection is a closed terminal ray: it cannot have a gap by uniqueness of segments. Beyond its finite initial point their negative rays split, and the distance from a point on the negative tail of $T$ to $S$ is its distance back to that split point, which is unbounded. Again step 4.2 excludes this. Thus in both cases $S=T$, contradicting $a\in S$ and $d(a,T)\ge1$. Both extended-ratio cases being impossible, a finite uniform slimness constant exists. The empty space has this property vacuously. [step 2.1, step 3.2, step 4.2, F3] ∎
