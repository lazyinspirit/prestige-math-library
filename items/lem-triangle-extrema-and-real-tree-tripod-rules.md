---
id: "lem-triangle-extrema-and-real-tree-tripod-rules"
kind: "lemma"
title: "Triangle extrema and the tripod and branch rules for real trees"
status: published
origin: "pipeline"
deps: ["def-real-tree-tripods-and-geodesic-triangle-minsize", "def-geodesic-rays-and-lines", "def-complete-ordered-field", "cor-cauchy-reals-lub-complete", "thm-well-ordering-principle"]
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
    - title: "Frigerio–Sisto, Characterizing hyperbolic spaces and real trees — §3 Lemma 11, PDF pp.7–8; local interval extrema and branch proofs"
      url: "https://arxiv.org/pdf/0810.1526"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Minsize and slimness attain their extrema on every finite chosen geodesic triangle. For a geodesic metric space, these conditions are equivalent: unique topological arcs between distinct points; all chosen triangles are tripods; all chosen triangles are $0$-slim. In such a space, rays with the same origin at finite Hausdorff distance coincide, rays at finite Hausdorff distance have common tails, and lines at finite Hausdorff distance coincide.

## Facts & Assumptions

**Given:** A geodesic metric space, finite chosen geodesic sides, and for the final assertions isometric rays or lines.

[F1] Arcs, tripod triangles, extrema and subset distances have the specified definitions and compact-interval continuity interface. ([[def-real-tree-tripods-and-geodesic-triangle-minsize]]).

[F2] Every nonempty bounded-above set of reals has a supremum. ([[cor-cauchy-reals-lub-complete]]).

[F3] Rays and lines have isometric half-line and whole-line parameterizations. ([[def-geodesic-rays-and-lines]]).

[F4] Every nonempty subset of the natural numbers has a least element. ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 For any nonempty set $A$, the triangle inequality gives $d(x,A)\le d(x,y)+d(y,A)$ and the reverse inequality with $x,y$ exchanged, so $|d(x,A)-d(y,A)|\le d(x,y)$. Diameter of three points changes by at most twice the largest displacement when the three points move. Thus the parameter functions defining minsize and slimness are Lipschitz on products of the finite closed side intervals. [F1, algebra]

2.1 Here is the needed extrema argument without a countable choice of approximate minimizers. A finite box has dense grids obtained by dividing each coordinate interval into $2^j$ equal pieces. A Lipschitz function is bounded there by its value at one corner plus its Lipschitz constant times the box diameter. Its infimum exists by [F2]. Enumerate the union of the finite grids by level and within each level in lexicographic order; choose the first grid point with value less than the infimum plus $2^{-n}$. Density and continuity guarantee such a point. Successively bisect the box and keep the first subbox containing infinitely many terms, then take successive least indices from those subboxes. Supremums of the nested coordinate left endpoints give a limit in the box, since the widths tend to zero (the supremum argument for the unboundedness of natural numbers gives $2^{-j}\to0$). Lipschitz continuity makes its value the infimum. Apply the same argument to the negative function for a maximum. Zero-width coordinate intervals cause no change. This proves minsize attainment and nearest-point attainment on each finite side; step 1.1 then gives slimness attainment on the finite union of sides. [step 1.1, F2, F4]

3.1 Unique arcs imply unique geodesic images. For sides $[x,y]$ and $[x,z]$, every shared point $p$ has the same initial segment $[x,p]$ on both sides by arc uniqueness. Their intersection is therefore an initial interval; it is closed by compactness of the two finite segments, and is $[x,b]$ for a last point $b$. The remaining subsegments from $b$ to $y,z$ meet only at $b$. Their concatenation is an arc unless one is zero, and hence equals $[y,z]$ by uniqueness. Distances along that side add through $b$, as do distances on the other two sides. The triangle is a tripod. [step 2.1, F1]

3.2 Tripods are $0$-slim because each leg belongs to two sides. Conversely, in a space where all chosen triangles are $0$-slim, take two geodesics from $x$ to $y$ and the constant third side at $x$. Closedness of the other side makes each point of the first lie on it, and conversely. Their distance parameters from $x$ then agree, so geodesics are unique. Intersections of sides are closed initial segments by this uniqueness. For the last intersection $b$ of $[x,y]$ and $[x,z]$, $0$-slimness puts $[y,z]$ inside their union, and puts the portions beyond $b$ of both these sides on $[y,z]$. That side must pass through $b$ by its interval parameter; the resulting union is a tripod. [step 2.1, F1]

4.1 Suppose now all triangles are tripods. At a point $p$, declare $u,v\ne p$ equivalent if $[p,u]$ and $[p,v]$ share a positive initial segment. Reflexivity and symmetry hold. Transitivity holds because two positive shared initial segments on $[p,v]$ have a positive common shorter segment. In a tripod, nonequivalent points satisfy $d(u,v)=d(u,p)+d(p,v)$; thus the ball of radius $d(u,p)$ about $u$ stays in its class. Every class is open in $X\setminus\{p\}$, and so is its complement. If $p$ is interior to $[x,y]$, the points $x,y$ lie in different classes. [step 3.2, F1]

5.1 Every continuous path from $x$ to $y$ contains each interior $p\in[x,y]$. Otherwise the inverse images $U,V$ of the class of $x$ and its complement partition $[0,1]$ into disjoint relatively open sets with $0\in U$, $1\in V$. Let $s=\sup\{t:[0,t]\subset U\}$. Openness at 0 and 1 gives $0<s<1$, and every $t<s$ belongs to $U$. If $s\in V$, a left neighbourhood contradicts that assertion; if $s\in U$, a right neighbourhood extends the initial interval past $s$. Both are impossible. This uses only [F2] and the continuity interface in [F1]. [step 4.1, F1, F2]

6.1 An injective path from $x$ to $y$ has no point $z$ off $[x,y]$. The tripod with vertices $x,y,z$ attaches $z$ to $[x,y]$ at a point $b$. Apply step 5.1 to the two subpaths separated by $z$: both contain $b$, using their endpoints when $b=x$ or $b=y$. Their parameter intervals meet only at $z$, and $b\ne z$, contradicting injectivity. Therefore each arc equals $[x,y]$. Together with step 3.1 and step 3.2 this proves all three conditions equivalent, also for empty or one-point spaces where distinct-point assertions are vacuous. [step 3.1, step 3.2, step 5.1, F1]

7.1 A point $z$ has a nearest point $p$ on any segment, ray or line $S$. For a ray or line with origin $o$, the inequality $d(z,S(t))\ge|t|-d(z,o)$ reduces minimization to a finite closed interval; step 2.1 applies. For every $q\in S$, the tripod of $z,p,q$ has branch point $p$: any other branch point on $[p,q]$ would be closer to $z$. Thus $d(z,q)=d(z,p)+d(p,q)$. This also makes $p$ unique. [step 2.1, step 6.1, F3]

8.1 Two rays from $o$ have intersection an initial closed interval, possibly unbounded. If they split at parameter $T<\infty$, the tripod distance from the first ray's point at $t>T$ to the second ray is $t-T$; hence their Hausdorff distance is infinite. If they never split, equal distance parameters give identical maps. This proves the common-origin rule. [step 6.1, step 7.1, F3]

9.1 For rays from $x$ and $y$, project $x$ to the second ray at $p$. By step 7.1, $[x,p]$ followed by its tail from $p$ is a geodesic ray from $x$ and has finite Hausdorff distance from the original second ray: the omitted initial piece and the added connector are finite. If the original two rays have finite Hausdorff distance, the new ray and the first ray do too and step 8.1 makes them coincide. Their tails beyond $p$ are therefore equal, at explicit thresholds $d(x,p)$ and $d(y,p)$. [step 7.1, step 8.1, F3]

10.1 If a line $S$ contained a point $x$ off a line $T$, let $p$ be its projection to $T$. Of the two directions of $S$ from $x$, at least one does not initially follow $[x,p]$, since these two directions intersect only at $x$. Every point at distance $t$ down that direction has its path to $T$ pass through $x,p$, by the tripod rule, and hence distance $t+d(x,p)$ from $T$. Finite Hausdorff distance excludes this. Thus $S\subset T$; an isometric copy of the full real line contained in a line is that entire line, because both parameter directions are unbounded. The two lines coincide, irrespective of orientation. [step 6.1, step 7.1, F3] ∎
