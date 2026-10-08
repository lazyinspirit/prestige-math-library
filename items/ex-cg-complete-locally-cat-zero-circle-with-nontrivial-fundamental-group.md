---
id: ex-cg-complete-locally-cat-zero-circle-with-nontrivial-fundamental-group
kind: example
title: "A complete locally CAT(0) circle whose fundamental group prevents global CAT(0)"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 13
deps: [def-cg-cat-zero-cat-one-and-local-geodesic, lem-cg-comparison-convexity-and-model-spaces, thm-cg-complete-simply-connected-local-cat-zero-globalization, def-covering-map-and-evenly-covered-neighbourhoods, thm-homotopy-lifting-for-covering-maps, thm-path-lifting-for-covering-maps, cor-lifted-path-endpoints-depend-only-on-path-homotopy, def-based-loops-and-fundamental-group, def-nullhomotopic-map-and-contractible-space, def-simply-connected, def-path-connected, def-metric-space, def-metric-ball, def-metric-continuity, def-metric-compactness, def-complete-metric-space, def-geodesic-and-geodesic-metric-space, def-isometry-and-metric-embedding, lem-metrics-on-rn, def-principal-inverse-sine-and-cosine, cor-pi-is-the-first-positive-sine-zero]
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
      locator: "I.3.1 (length spaces), II.3.14 and II.3.17, printed pp. 188–190 (Berestovskii's theorem, the cone over a circle; chapter I.3 is 'Length Spaces', so the scaffold's 'I.3.17' prefix was a slip), II.4.1 (the globalization hypotheses)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed pp. 502–504 (contractibility of complete CAT(0) spaces, Gromov's Cartan–Hadamard theorem)"
---

## Example

Let $\ell>0$ and let $S^1_\ell=\mathbb R/\ell\mathbb Z$ be the round circle of circumference $\ell$ with $d_\ell(x,y)=\min\{|x-y+k\ell|:k\in\mathbb Z\}$, the complete locally CAT(0) circle of [[lem-cg-comparison-convexity-and-model-spaces]] clause (vi).

**(i)** $(S^1_\ell,d_\ell)$ is a compact, complete length space locally isometric to $\mathbb R$; hence it is locally CAT(0).

**(ii)** It is not simply connected: the quotient map $p:\mathbb R\to S^1_\ell$ is a covering map (balls of radius $<\ell/4$ are evenly covered), and the generator loop $\alpha(t):=t+\ell\mathbb Z$, $t\in[0,\ell]$, is not nullhomotopic; a based nullhomotopy contradicts [[cor-lifted-path-endpoints-depend-only-on-path-homotopy]], and the lift argument below also rules out a free nullhomotopy.

**(iii)** It is not CAT(0), and it fails the CAT(0) inequality explicitly: the points $0,\ell/3,2\ell/3$ have pairwise distances $\ell/3$, and the midpoint $m=\ell/6$ of the geodesic from $0$ to $\ell/3$ satisfies $d_\ell(m,2\ell/3)=\ell/2$, while the comparison point of $m$ in the Euclidean equilateral comparison triangle of side $\ell/3$ is at distance $\ell\sqrt3/6<\ell/2$ from the opposite vertex.

**(iv)** Consequently the simple-connectivity hypothesis of [[thm-cg-complete-simply-connected-local-cat-zero-globalization]] cannot be dropped: $S^1_\ell$ is complete and locally CAT(0), with infinite cyclic fundamental group, but is neither CAT(0) nor contractible.

## Facts & Assumptions

**Given:** A real number $\ell>0$, the circle $S^1_\ell=\mathbb R/\ell\mathbb Z$ with its metric $d_\ell$, and the quotient map $p:\mathbb R\to S^1_\ell$, $p(t)=t+\ell\mathbb Z$.

[F1] $S^1_\ell$ is a compact complete geodesic space locally isometric to $\mathbb R$, it contains an isometrically embedded circle of length $\ell$, and it is CAT(1) if and only if $\ell\ge2\pi$ ([[lem-cg-comparison-convexity-and-model-spaces]] clause (vi), [[def-cg-cat-zero-cat-one-and-local-geodesic]], [[def-metric-space]], [[def-metric-compactness]], [[def-complete-metric-space]], [[def-geodesic-and-geodesic-metric-space]], [[def-isometry-and-metric-embedding]]).

[F2] Local CAT(0) is defined by the existence, around each point, of a closed ball whose induced metric is CAT(0) ([[def-cg-cat-zero-cat-one-and-local-geodesic]], [[def-metric-ball]]).

[F3] Every geodesic triangle in a metric space has a comparison triangle in $\mathbb E^2$, unique up to an isometry, distances in $\mathbb E^2$ are those of [[lem-metrics-on-rn]], and the CAT(0) inequality is stated with these comparison points ([[lem-cg-comparison-convexity-and-model-spaces]] clauses (i) and (iv), [[def-isometry-and-metric-embedding]], [[def-principal-inverse-sine-and-cosine]], [[cor-pi-is-the-first-positive-sine-zero]]).

[F4] Covering maps and lifts: the definition of a covering and of evenly covered neighbourhoods; the path and homotopy lifting theorems, with their existence and uniqueness clauses; and the fact that endpoint-fixed homotopic paths in the base have lifts with the same endpoint whenever the lifts begin at the same point ([[def-covering-map-and-evenly-covered-neighbourhoods]], [[thm-homotopy-lifting-for-covering-maps]], [[thm-path-lifting-for-covering-maps]], [[cor-lifted-path-endpoints-depend-only-on-path-homotopy]], [[def-metric-continuity]]).

[F5] The topological vocabulary: based loops and the fundamental group, nullhomotopic maps and contractible spaces (the latter requiring every map from the space to be nullhomotopic), simple connectivity, and path connectedness ([[def-based-loops-and-fundamental-group]], [[def-nullhomotopic-map-and-contractible-space]], [[def-simply-connected]], [[def-path-connected]]).

[F6] The globalization theorem: a connected complete locally CAT(0) length space that is simply connected is CAT(0), every two of its points are joined by exactly one minimizing geodesic, and it is contractible via the geodesic contraction $H_t(x)$, the point at distance $t\,d(x_0,x)$ from $x_0$ on the unique geodesic from $x_0$ to $x$ ([[thm-cg-complete-simply-connected-local-cat-zero-globalization]]).

## Proof

1.1 (i) is the first part of [F1]: $S^1_\ell$ is compact, complete and geodesic, hence a length space, and it is locally isometric to $\mathbb R$. [F1, given]

1.2 Small balls are intervals. Let $x\in S^1_\ell$, $0<r<\ell/4$ and $t$ any lift of $x$. For $s,s'\in[t-r,t+r]$ we have $|s-s'|\le2r<\ell/2$, so $d_\ell(p(s),p(s'))=\min\{|s-s'|,\ell-|s-s'|\}=|s-s'|$; hence $p$ restricts to a distance-preserving bijection of the interval $[t-r,t+r]$ onto the closed ball $\bar B(x,r)$. [F1, given, algebra]

1.3 An interval is CAT(0). Let $V=[a,b]\subset\mathbb R$ with the induced metric; it is geodesic, and a geodesic triangle with vertices $\alpha\le\beta\le\gamma$ in $V$ has its three sides contained in $[\alpha,\gamma]$ and side lengths $\beta-\alpha,\gamma-\beta,\gamma-\alpha$, so its Euclidean comparison triangle is the degenerate segment $[\bar\alpha,\bar\gamma]$ of length $\gamma-\alpha$ with the three comparison vertices at positions $\alpha,\beta,\gamma$; a point of the triangle lies on some side and its comparison point has the same position in $[\bar\alpha,\bar\gamma]$, so all distances between points of the triangle equal their comparison distances and the CAT(0) inequality holds with equality. Hence $V$ is CAT(0). [F3, algebra]

2.1 Conclusion of (i). By steps 1.2 and 1.3 each point of $S^1_\ell$ has a closed ball of radius $r<\ell/4$ that is isometric, for the induced metric, to an interval, and intervals are CAT(0); so $S^1_\ell$ is locally CAT(0). [step 1.2, step 1.3, F2]

2.2 (ii) $p$ is a covering map. The quotient map $p$ is continuous and surjective, and for every $x$ and $0<r<\ell/4$ the preimage $p^{-1}(B(x,r))$ is the disjoint union of the open intervals $(t_k-r,t_k+r)$ about the lifts $t_k=t+k\ell$ of $x$, since two such intervals meet only if their centres differ by less than $2r<\ell$; by step 1.2 each of them is mapped isometrically onto $B(x,r)$. Hence every ball of radius $<\ell/4$ is evenly covered and $p$ is a covering map. [step 1.2, F4, given]

2.3 (iii) the witness triple. Let $a:=0$, $b:=\ell/3$, $c:=2\ell/3$ and $m:=\ell/6$ in $S^1_\ell$. The three pairwise distances are $d_\ell(a,b)=d_\ell(b,c)=d_\ell(a,c)=\ell/3$, since $|0-\ell/3|=|\ell/3-2\ell/3|=\ell/3$ and $d_\ell(a,c)=\min\{2\ell/3,\ell-2\ell/3\}=\ell/3$; moreover $m$ lies on the geodesic $[a,b]$ given by the arc from $0$ to $\ell/3$, and $d_\ell(m,c)=\min\{\ell/2,\ell-\ell/2\}=\ell/2$, so there is a geodesic triangle of $S^1_\ell$ whose comparison is tested. [step 1.1, F1, algebra]

3.1 (ii) The generator is not nullhomotopic. The loop $\alpha(t)=p(t)$, $t\in[0,\ell]$, lifts from $0$ to $\widetilde\alpha(t)=t$ and ends at $\ell$, whereas the based constant loop lifts to a path ending at $0$. Thus [F4] excludes a based nullhomotopy, giving a nontrivial class in $\pi_1(S^1_\ell,0)$. To exclude a free nullhomotopy as well, suppose $K:[0,\ell]\times[0,1]\to S^1_\ell$ deforms $\alpha$ through loops to a constant loop; then $K(0,s)=K(\ell,s)$. Lift $K$ with initial lift $t\mapsto t$. The two paths $s\mapsto\widetilde K(\ell,s)$ and $s\mapsto\widetilde K(0,s)+\ell$ lift the same path and both start at $\ell$, hence coincide by [F4]. At $s=1$ the lifted constant loop is constant by path-lifting uniqueness in [F4]: the constant path at its initial lift is another lift of the same constant loop. Their difference is then both $\ell$ and $0$, impossible. The circle is path-connected by its arcs and is not simply connected. [step 2.2, F1, F4, F5, algebra]

3.2 (iii) the comparison fails. The Euclidean comparison triangle of $(a,b,c)$ is equilateral of side $\ell/3$, and the comparison point $\bar m$ of $m$ is the midpoint of the side $[\bar a,\bar b]$; its distance to the opposite vertex $\bar c$ is the altitude $\ell\sqrt3/6$, because $(\ell\sqrt3/6)^2+(\ell/6)^2=\ell^2/9=(\ell/3)^2$ by Pythagoras in $\mathbb E^2$. Since $\ell\sqrt3/6<\ell/2$ we have $d_\ell(m,c)=\ell/2>d_2(\bar m,\bar c)$, so the CAT(0) inequality fails and $S^1_\ell$ is not CAT(0). [step 2.3, F1, F3, algebra]

3.3 The fundamental group is infinite cyclic. Parametrize based loops on $[0,1]$. Every loop $\beta$ lifts uniquely from $0$ to a path $\widetilde\beta$ in $\mathbb R$, with endpoint $n\ell$ for a unique integer $n$; [F4] makes $n$ invariant under based homotopy. Conversely $p((1-s)\widetilde\beta(t)+s n\ell t)$ is a based homotopy to the loop $t\mapsto p(n\ell t)$, since the two endpoints of the interpolated lift stay $0,n\ell$. Every integer is realized by this explicit loop. When loops of winding $n,m$ are concatenated, the lift of the second starts at $n\ell$ and is its lift from $0$ translated by $n\ell$, so the endpoint is $(n+m)\ell$. Winding thus gives an isomorphism $\pi_1(S^1_\ell,0)\cong\mathbb Z$, sending $\alpha$ to $1$. [step 2.2, F4, F5, construct, algebra]

4.1 (iv). Steps 1.1–1.3 and 2.1 show that $S^1_\ell$ is a complete locally CAT(0) length space, path-connected because it is geodesic and hence connected, while step 3.1 shows that it is not simply connected and step 3.2 that it is not CAT(0); hence the simple-connectivity hypothesis of the globalization theorem [F6] cannot be dropped. [step 2.1, step 3.1, step 3.2, F5, F6]

5.1 The circle is not contractible, and the theorem's clauses fail explicitly. A contraction of the circle, composed with $\alpha$, would be a free nullhomotopy of $\alpha$, excluded by step 3.1. Thus the conclusion of clause (iii) of [F6] fails, and its clause (i) fails as well: the points $0$ and $\ell/2$ are joined by exactly two minimizing geodesics, the two semicircular arcs of length $\ell/2$. Indeed lift any minimizing segment on $[0,1]$ from $0$ through $p$: on each interval chart its lift is affine with slope either $\ell/2$ or $-\ell/2$, and the slope cannot change on overlapping intervals, so the lift is precisely $t\mapsto\pm t\ell/2$. Thus the unique geodesic from $x_0$ to $x$ that builds the geodesic contraction is not available at $x=\ell/2$ and $0<t<1$. [step 3.1, step 4.1, F4, F5, F6] ∎

## Remarks


- **Choice.** No step selects from an infinite family: the covering sheets, the loop, the witness triple and its comparison point are exhibited, and the lifting of step 3.1 is the unique lift supplied by the homotopy lifting theorem.
