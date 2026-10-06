---
id: lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors
kind: lemma
title: Closed LKB basis surfaces have the three required topological types and factors
status: published
origin: pipeline
deps: [def-lkb-relative-pairing-modules, lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement, lem-the-fork-noodle-pairing-is-well-defined-and-equivariant]
justified_by: []
aliases: []
dependency_level: 7
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Sections 3.2-3.4, printed pp. 6-8 (genus one, two and three surfaces) and section 4.1 with Lemma 4.3, printed pp. 9-10 (the v'_{i,j}, x_{i,j} and their pairings)"
    - title: "Paoluzzi and Paris, A note on the Lawrence-Krammer-Bigelow representation, Algebr. Geom. Topol. 2 (2002) 499-518"
      url: "https://msp.org/agt/2002/2-1/agt-v2-n1-p24-p.pdf"
      locator: "Sections 2-3, printed pp. 503-510: the absolute cell model and the integral basis"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader plus completed current item adjudication proof read; item lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors; evidence research/frontier-38-owner-30-reader-16.md, research/frontier-38-owner-30-reader-findings-16.json, research/frontier-38-owner-30-alpha-batch-16-5a-decisions.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement

For $1\le i<j\le n$ let $v'_{i,j}$ be the square or triangle of Bigelow
section 4.1: the square for the edges $[p_i,p_{i+1}]$, $[p_{j-1},p_j]$ when
$j-i>2$; the square for $[p_i,p_{i+1}]$ and an edge from $p_{i-1}$ to $p_j$ in
the lower half-plane when $j-i=2$, $i>1$; the square for $[p_1,p_2]$,
$[p_2,p_3]$ when $(i,j)=(1,3)$; and the triangle for $[p_i,p_{i+1}]$ when
$j=i+1$. Then there is $v_{i,j}\in H_2(\widetilde C)$ whose image in
$H_2(\widetilde C,\tilde\nu)$ is $(1-q)^2(1+qt)(1-t)v'_{i,i+1}$ for
$j=i+1$, $(1-q)^2(1+qt)v'_{1,3}$ for $(i,j)=(1,3)$, and $(1-q)^2v'_{i,j}$
otherwise; these are realized by the explicit genus three, genus two and
genus one closed surfaces. The pairings $\langle v'_{i,j},x_{i,j}\rangle'$
are units of $\Lambda$. For $2\le i\le n-2$, the off-diagonal pairing
$\langle v'_{i,i+2},x_{i-1,i+1}\rangle'$ is a Laurent unit, whereas
$\langle v'_{i,i+2},x_{i,i+1}\rangle'$ is a Laurent unit times $(1-t)$:
it is nonzero but is not a unit.
All remaining pairings vanish, so the pairing matrix is
triangular with unit diagonal.

## Facts & Assumptions

**Given:** the standard disk with punctures $p_1<\cdots<p_n$, the relative modules and pairings of [[def-lkb-relative-pairing-modules]], and the closed compact replacement of [[lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement]].

[F1] Bigelow 2002 section 3.1 defines the square of two edges with disjoint interiors by lifting $f(x,y)=\{\alpha_1(x),\alpha_2(y)\}$. Puncture-ended squares lie in $H_2(\widetilde C,\tilde\nu)$; disjoint boundary-ended squares lie in $H_2(\widetilde C,\partial\widetilde C)$; mixed-endpoint squares lie in $H_2(\widetilde C,\partial\widetilde C\cup\tilde\nu)$. The triangle of one edge $\alpha$ lifts $(x,y)\mapsto\{\alpha(x),\alpha(y)\}$ on $0<x<y<1$. It lies in $H_2(\widetilde C,\tilde\nu)$ when both endpoints are punctures, and in $H_2(\widetilde C,\partial\widetilde C\cup\tilde\nu)$ when either endpoint is on $\partial D$, since its omitted diagonal is a collision end.

[F2] The dual class $x_{i,j}\in H_2(\widetilde C,\partial\widetilde C)$ is the square of two vertical edges, one just to the right of $p_i$ and one just to the left of $p_j$, with endpoints on $\partial D$ and orientations as in Bigelow 2002 section 4.1.



[F3] The primed pairing on an end-relative first class and a boundary-only second class is a finite deck-labelled intersection sum, invariant under relative homology ([[lem-the-fork-noodle-pairing-is-well-defined-and-equivariant]]). No pairing of two end-relative arguments is used.

## Proof

1.1 The generic square. For $j-i>2$ take the two specified disjoint edges; for $j-i=2$, $i>1$, use the specified real edge and lower-half-plane edge, which likewise have four distinct endpoints. Replace that lower arc by a small monotone polygonal graph, if necessary: convex interpolation inside the puncture-free lower half-disk keeps it disjoint from the real first edge, and uniform truncation at the fixed endpoints gives the same relative square by [F3]. Only a homotopy of the product map is needed, not an isotopy of nonsimple intermediate arcs. We now use finite straight/polygonal geometry. Choose disjoint thin disk neighborhoods containing exactly their respective endpoint pairs. Let $\alpha_1,\alpha_2$ be disjoint figure-eights in $D\setminus P$, $\alpha_k$ lying in its disk, with opposite lobe windings $+1,-1$ about its two punctures, as in Bigelow Figure 2. The map $f(x,y)=\{\alpha_1(x),\alpha_2(y)\}$ sends the meridian and the longitude of the torus $S^1\times S^1$ into $\ker\Phi$, because the two lobe puncture windings sum to zero, and the moving coordinate lies in a disk missing the stationary coordinate, so its mutual winding is zero; hence $f$ lifts to $\widetilde f:S^1\times S^1\to\widetilde C$ and represents a class in $H_2(\widetilde C)$. Comparing with a small square around the four punctures shows that its image in $H_2(\widetilde C,\tilde\nu)$ is $(1-q)^2$ times the square $v'_{i,j}$: cut each figure-eight along its edge after truncating the puncture ends; its two oppositely oriented lifted edge contributions differ by the puncture deck translation $q$, giving $(1-q)$ times the relative edge. The product gives both factors (Bigelow 2002, Section 3). This realizes $v_{i,j}$ with the factor $(1-q)^2$ and the underlying surface is a torus, of the asserted genus one type. [F1, F3, given, construct]

2.1 The exceptional square $(1,3)$. Choose figure-eights with opposite lobe windings around $p_1,p_2$ and $p_2,p_3$, meeting twice in a small disk $B$ about $p_2$. The disk meets each curve in one embedded segment $\alpha_k(I_k)$; identify these intervals with $I=[0,1]$. Remove the open product square $I_1\times I_2$ from the torus, giving a once-punctured torus $T$ on which $f(x,y)=\{\alpha_1(x),\alpha_2(y)\}$ is defined. Rotate the boundary configuration in $B$ through angle $s\pi$ to obtain $f_s:\partial T\to C$. Choose symmetric segments so $f_1(x,y)=f_0(y,x)$. Glue two copies of $T$ using the annulus $\partial T\times I$, attached identically at one end and by coordinate interchange at the other; set $g=f$ on each copy and $g=f_s$ on the annulus. This gives a continuous map from a closed orientable genus-two surface. Its four meridian/longitude generators have zero winding characters as in step 1.1, so it lifts. The annulus lies in an arbitrarily small end neighborhood. A path across it exchanges the two mobile points about $p_2$, with character $qt$, while the two copies have the same induced orientation. Their relative contributions therefore add to $(1-q)^2(1+qt)v'_{1,3}$. [F1, given, step 1.1, construct]

2.2 The adjacent triangle. Let $\alpha_1,\alpha_2$ be figure-eights both going around $p_i$ and $p_{i+1}$ and intersecting transversely in four points, as in Bigelow Figure 5. Now the surface $T$ is a torus with two disks removed, one for each puncture, and two annuli glue two copies of $T$; the meridian and longitude characters are zero as in step 1.1. Each boundary component traverses each mobile segment forward and back, with zero puncture winding; its two local crossings have opposite signs, so the mutual winding is also zero. Both annulus transports have character $qt$, so the extra loop crossing one and returning through the other has character1. These tracks generate the surface group, so the resulting closed genus three surface $\Sigma_3$ and its map lift to $\widetilde C$. Its image in $H_2(\widetilde C,\tilde\nu)$ is $(1+qt)(1-q)^2$ times a square, which in this configuration is $(1+qt)(1-q)^2(1-t)$ times the triangle on $[p_i,p_{i+1}]$; cut the square on the parallel edges along its diagonal, which maps into an arbitrarily small collision neighborhood. The two resulting triangles differ by exchange of the mobile coordinates, reversing product orientation and transporting the lift by the half-twist $t$. Their relative contributions are therefore the triangle and its negative $t$ translate, giving $(1-t)$. [F1, given, step 1.1, construct]

3.1 The definitions of $v'_{i,j}$. For $j-i>2$ take the square of $[p_i,p_{i+1}]$ and $[p_{j-1},p_j]$; for $j-i=2$, $i>1$ take the square of $[p_i,p_{i+1}]$ and of an edge from $p_{i-1}$ to $p_j$ whose interior lies in the lower half-plane; for $(i,j)=(1,3)$ take the square of $[p_1,p_2]$ and $[p_2,p_3]$; and for $j=i+1$ take the triangle on $[p_i,p_{i+1}]$. Each of these classes lies in $H_2(\widetilde C,\tilde\nu)$. The constructions of steps 1.1–2.2 supply for each of them a class $v_{i,j}\in H_2(\widetilde C)$ whose image is the asserted multiple: $(1-q)^2(1+qt)(1-t)v'_{i,i+1}$, $(1-q)^2(1+qt)v'_{1,3}$ and $(1-q)^2v'_{i,j}$ respectively. The generic torus construction of step 1.1 applies to both four-distinct-endpoint square cases; the exceptional genus-two case is only $(1,3)$, and the genus-three cases are the adjacent triangles. [F1, step 1.1, step 2.1, step 2.2, construct]

4.1 *The diagonal and first exception.* Choose the vertical chords of [F2] with sufficiently small horizontal offsets. A generic real-edge square has one point on the left chord in its first edge and one point on the right chord in its second; swapping this assignment is impossible because the ordered puncture intervals are disjoint. The $(1,3)$ square likewise has only this diagonal configuration. An adjacent triangle has exactly one configuration, with its two edge parameters ordered. Each diagonal therefore contributes one signed deck monomial, a Laurent unit. For $v'_{i,i+2}$ with $i\ge2$, let $\alpha=[p_i,p_{i+1}]$ and let $\beta$ be the lower arc from $p_{i-1}$ to $p_{i+2}$. We may use a graph $\beta$ strictly below the real line and monotone in its horizontal coordinate: the lower half-disk is convex and contains no puncture, so the compact relative-end homotopy from any supplied lower arc to this graph remains disjoint from $\alpha$; truncation near the puncture ends gives the same relative square class. The diagonal dual has its right chord beyond $\alpha$ and gives one configuration. For $x_{i-1,i+1}$ its left chord is before $\alpha$ and its right chord meets $\alpha$; only the assignment $\{\beta(\text{left}),\alpha(\text{right})\}$ occurs, again one signed monomial. [F1, F2, F3, step 3.1, construct]

5.1 *The second exception has two terms.* For $x_{i,i+1}$ let $L=p_i+\varepsilon$ and $R=p_{i+1}-\varepsilon$. Both full vertical chords meet both $\alpha$ and $\beta$. The two configurations are $z=\{\alpha(L),\beta(R)\}$ and $w=\{\beta(L),\alpha(R)\}$. Orient $\alpha,\beta$ left to right and both chords upward. In the ordered local chart the intersection determinants are $-\det(\alpha',L')\det(\beta',R')$ at $z$ and $+\det(\alpha',R')\det(\beta',L')$ at $w$. The four planar determinants are positive, so the signs are opposite. In the square on $\alpha,\beta$ go from $z$ to $w$ by moving the first point east along $\alpha$ and the second west along $\beta$; return in the dual square by moving down the right chord and up the left chord. All tracks lie in the puncture-free strip $p_i<x<p_{i+1}$, so their total puncture winding is zero. Along the first path the difference of the labelled mobile points stays in the upper half-plane and moves from negative to positive real part; along the return its real part is positive and its imaginary part moves from positive to negative. Its final value is the negative of its initial value, with total angle decrease $\pi$. Thus the loop has character $t^{-1}$. If the translate of the dual lift meeting the first square at $z$ is $g$, path lifting makes the translate at $w$ equal to $gt^{-1}$. The primed sum is therefore $-g+gt^{-1}$ in these orientations. This is a Laurent unit times $1-t$. Reversing orientations or changing lifts changes only that unit. The two monomials are distinct, proving nonzero; augmentation $q,t\mapsto1$ gives zero, whereas a Laurent unit must map to a unit of $\mathbb Z$, so the pairing is not a unit. [F1, F2, F3, step 4.1, construct, algebra]

6.1 *Zero entries and the triangular matrix.* A chord meeting $\alpha=[p_i,p_{i+1}]$ must be either the left chord just after $p_i$ or the right chord just before $p_{i+1}$. Checking which other chord meets $\beta$ leaves exactly the diagonal and the two exceptions above; all remaining projected surfaces can be chosen disjoint. The corresponding check for the real generic squares, adjacent triangles and $(1,3)$ square leaves only their diagonal. Order pairs by increasing $j-i$, then increasing $i$. The exceptions in row $(i,i+2)$ lie in columns $(i-1,i+1)$ and $(i,i+1)$, both earlier than that row's diagonal. The matrix is lower triangular with Laurent-unit diagonal; finite triangular elimination therefore makes it invertible over $\Lambda$, regardless of its nonunit off-diagonal entry. This proves all asserted basis/type/factor and pairing conclusions. The source pairing lemma's extra claim that the second exception is a unit is contradicted by the explicit two-point calculation in step 5.1; it is not used here. [F2, step 4.1, step 5.1, algebra] ∎
