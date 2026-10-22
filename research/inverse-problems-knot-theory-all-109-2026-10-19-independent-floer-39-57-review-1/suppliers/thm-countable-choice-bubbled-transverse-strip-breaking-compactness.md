---
id: thm-countable-choice-bubbled-transverse-strip-breaking-compactness
kind: theorem
title: "Bubbled transverse strip breaking compactness under Countable Choice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-smooth-strip-compactness-away-from-energy-concentration, thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness, lem-finite-energy-transverse-strip-end-convergence, lem-small-local-energy-transverse-strip-neck-collapse]
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Strip compactness, Sections 3.7–3.8; actual local and global proof below"
---

## Statement

Assume Countable Choice. Fix compact $(X,g)$, compact transverse totally real boundary submanifolds $L_0,L_1$ with finite intersection $K$, and smooth families $J_{n,t}$ converging smoothly to $J_{\infty,t}$. Their boundary structures on $L_0,L_1$ are fixed independently of $n$. Assume all these structures are exactly $i$ on common disjoint product generator charts taking $L_0,L_1$ to transverse product real lines, as in the actual transverse-strip neck lemma. Let smooth finite-energy solutions
$$\partial_su_n+J_{n,t}(u_n)\partial_tu_n=0,\qquad u_n(s,j)\in L_j,$$
on $\mathbb R\times[0,1]$ have energies at most $E_0$.

After a subsequence, either all maps are one constant generator, or there are finitely many longitudinal translations $q_{1,n}<\cdots<q_{M,n}$ with $q_{j+1,n}-q_{j,n}\to\infty$ and finitely many bubbled strip levels. Each level consists of a finite-energy $J_{\infty,t}$ strip, possibly constant, with finite sphere/disk bubble trees at its interior or physical boundary points. These are the actual local rescaling limits, have equal component values at their nodes, and constant bubbles satisfy the usual sphere node count or weighted disk node count. Each level has positive energy when its bubbles are included. The translated maps converge smoothly locally off the bubble points, including boundary derivatives, and all bubbles are smooth rescaled limits off their children.

After fixing the original end generators by a subsequence, adjacent strip levels have equal intermediate end generators, the first negative end and last positive end are the original ones, and
$$\lim_nE_g(u_n)=\sum_{j=1}^M\left(E_g(v_j)+\sum_{w\text{ on level }j}E_g(u_w)\right).$$
There is no energy or image diameter left between successive level cores or outside the first and last cores as their radii tend to infinity after the sequence limit. The number of levels and bubble components is uniformly bounded in terms of $E_0$ and the fixed geometric data. No exclusion of bubbles, index bound, regularity, or gluing is asserted.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The compact transverse geometry, common exact generator charts, coefficient convergence, actual whole strips, and uniform energy bound in the statement.

[F1] [[lem-smooth-strip-compactness-away-from-energy-concentration]] proves local convergence off finitely many concentration points, using actual epsilon estimates and boundary bootstrap. The local proof of [[thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness]] resolves every interior or boundary atom into connected finite sphere/disk trees with complete energy identity and neck collapse. These constructions are local in source disks and half-disks.

[F2] [[lem-finite-energy-transverse-strip-end-convergence]] gives actual uniform convergence of every finite-energy strip end to a unique point of $K$.

[F3] [[lem-small-local-energy-transverse-strip-neck-collapse]] gives uniform energy and image collapse on long or semi-infinite different-boundary necks whose fixed-size windows have sufficiently small energy. It also shows a whole strip with all such small windows is constant, using its exact generator chart and the actual linear inverse.



## Proof

1.1 Smooth coefficient convergence makes all epsilon and neck constants uniform in $n$. Choose a positive $\delta$ below the uniform threshold in [F3] and pass to a subsequence with energies converging. By [F2] every $u_n$ has end generators in finite $K$, so a further subsequence fixes its two ends. If infinitely many $u_n$ are constant, take that subsequence and then its one fixed generator. Otherwise assume all are nonconstant. Define the continuous window-energy function $$A_n(s)=E_g(u_n;[s-2,s+2]\times[0,1]).$$ It tends to zero as $s\to\pm\infty$, by integrability of the energy density. Thus $B_n=\{s:A_n(s)\ge\delta\}$ is compact. It is nonempty, since emptiness would give every smaller window below $\delta$ and [F3] would force the strip constant. [F2, F3, given, construct, algebra]

2.1 Select centers in $B_n$ deterministically: choose its least point $c_{1,n}$, then the least remaining point at least four to its right, and continue. The windows $[c_{i,n}-2,c_{i,n}+2]$ have disjoint interiors and each has energy at least $\delta$. There can be at most $N_0=\lfloor E_0/\delta\rfloor$ such centers, so this procedure stops and covers $B_n$ by their intervals $[c_{i,n},c_{i,n}+4]$. Indeed any uncovered later point would be an available next center. Pass to a subsequence with fixed positive center count $N$. [step 1.1, construct, algebra]

3.1 For the finitely many successive differences $c_{i+1,n}-c_{i,n}\ge4$, pass to a subsequence where each either converges to a finite value or tends to infinity. Group consecutive centers whose differences stay bounded, and let $q_{j,n}$ be the first center of group $j$, in increasing order. The number of groups is fixed, $1\le M\le N$, and adjacent group translations separate to infinity. Within any group all offsets from its first center are uniformly bounded. Therefore there is a fixed $A>4$ such that, for every large $n$, $$B_n\subset\bigcup_{j=1}^M(q_{j,n}-A+2,q_{j,n}+A-2).$$ Outside these inner cores all length-four window energies are below $\delta$. [step 2.1, construct, algebra]

4.1 For each $j$ consider $u_n(s+q_{j,n},t)$. The equation is unchanged longitudinally because $J_{n,t}$ is independent of $s$. On a countable exhaustion of the fixed strip, [F1] gives smooth local convergence away from finitely many genuine concentration points. The exceptional set is globally finite by disjoint-neighborhood energy counting and the common total bound $E_0$. The limit has energy at most $E_0$ and fills its finite punctures by the local filling contained in [F1]. Resolve each atom by the actual local sphere/disk tree construction in [F1]; this is applicable at physical boundary points with fixed $J_{b,0}$ or $J_{b,1}$ and in interior disks. This gives a finite-energy strip $v_j$ plus finitely many connected bubble trees, and the full local energy identity on each bounded strip region whose artificial vertical edges avoid the finite atom set. Finitely many nested subsequences retain these conclusions for all $j$. [F1, step 3.1, construct, algebra]

4.2 Between adjacent cores consider the actual interval $$[q_{j,n}+A,\ q_{j+1,n}-A].$$ Every center in this interval lies outside $B_n$, so its length-one window has energy below $\delta$. The same is true on the two outer semi-infinite intervals. All required source buffers exist because the maps are defined on the whole strip. Thus [F3] applies to each such finite or semi-infinite neck. For fixed $R>A+1$ and large $n$, all cores $[q_{j,n}-R,q_{j,n}+R]$ are disjoint, and the total energy outside them is at most $$C M\delta e^{-c(R-A)}.$$ On every remaining central gap its image lies within $C\sqrt\delta e^{-c(R-A)/2}$ of one generator, and its image diameter has the same bound. The outer tails have the corresponding one-ended bounds. Constants are independent of $n$ and the diverging lengths. [F3, step 3.1, construct, algebra]

5.1 Every level is nontrivial in energy, including bubbles. Since $q_{j,n}$ is itself one of the selected bad centers, its original length-four window has energy at least $\delta$. Choose a fixed translated core radius greater than two with vertical edges avoiding the finitely many atoms of that level. Its local energy identity in step 4.1 gives total level energy at least $\delta$. The strip component can be constant only if some bubble has positive energy. This reasoning captures concentration on the edges of the smaller length-four window by using the larger core, rather than assuming energy convergence across an atom. [step 1.1, step 3.1, step 4.1, algebra]

5.2 The generator chart containing each gap in step 4.2 is unique because those charts are disjoint. Pass to a subsequence fixing these finitely many choices in finite $K$. For a fixed translated coordinate $s>A+1$ on level $j$, the right gap estimate, with its other end tending to infinity, bounds its distance from that gap generator by $C\sqrt\delta e^{-c(s-A)/2}$. Such points have small local energy and no atoms there, so the translated limit inherits the estimate. Hence $v_j$ has positive end equal to this generator. The same argument at the negative end of level $j+1$ gives the same generator. On the two outer tails it gives the original end generators, since by [F2] each $u_n$ has its corresponding end and the tail stays in that one chart. Thus all claimed end matchings hold. If a base strip is constant, these conclusions simply identify its two ends with that constant generator. [F2, F3, step 4.1, step 4.2, construct, algebra]

5.3 Choose $R\to\infty$ through radii whose vertical lines avoid the finitely many atoms of every translated level. For each such fixed $R$, the core energy limits are the sum of the base-strip energy there and the energies of its attached trees, by step 4.1. These cores are disjoint in the original strip for large $n$. Add their energy limits and use the outside bound in step 4.2. Then let $R\to\infty$. The finitely many base energies exhaust their whole strips, every finite atom eventually lies in a core, and the outside bound tends to zero. This proves precisely $$\lim_nE_g(u_n)=\sum_j\left(E_g(v_j)+\sum_{w\text{ on level }j}E_g(u_w)\right).$$ The same gap and tail estimates give the stated vanishing image diameter and absence of lost neck energy. [step 4.1, step 4.2, algebra]

6.1 The level count is already at most $N_0$. For the bubble count choose a common positive quantum $h$ for the local trees in [F1]. Step 5.3 bounds their total nonconstant bubble count by $\lfloor E_0/h\rfloor$. Their forest combinatorics, proved in [F1], bound all bubble vertices by three times that number, summed over the finitely many levels: constant spheres branch at least twice, and the only constant disks with one child have disjoint sphere subtrees. Thus the asserted uniform finiteness holds. Component convergence, child rescalings, matched node values and node stability are exactly the actual local conclusions retained in step 4.1. Only countably many local subsequences, finite groups and finite choices were used, so Countable Choice suffices. This establishes bubbled strip breaking compactness with no gluing or low-index exclusion claim. [F1, step 2.1, step 4.1, step 5.3, construct, algebra] ∎
