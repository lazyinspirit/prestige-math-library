---
title: Explicit D4 atomic braid relations and lifted paths
status: published
research_item: ex-d4-atomic-relations-artin-tits-normalisers
dependency_level: 22
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 30, §7.2.1, Figure 4 and displayed relations immediately before
        (7.2), and (7.2)
      statement: The original prints st·v·ts=vt·s·tv and s·tv·st=tv·ts·v, followed by
        four paths around one hexagon. The second printed right side has ts
        where its own paths require st; the item below corrects this
        transcription-level source error.
      hypotheses: Coxeter type D4, central generator t=s2, J={2}, the Figure 4 object
        and arrow labels, and traversal-order multiplication.
      reading_limits: Read extracted PDF p.30 and visually inspected its rendered
        page, including Figure4, both displayed equalities, and all four
        directed paths of (7.2). The corrected products and rank-two slice
        argument below are local, not imported from this article.
---

PDF p. 30: ` §7.2.1; (7.2) `

## Prerequisites

- [ex-d4-restricted-arrangement-artin-tits-normalisers](item-ex-d4-restricted-arrangement-artin-tits-normalisers)
- [ex-d4-quotient-graph-artin-tits-normalisers](item-ex-d4-quotient-graph-artin-tits-normalisers)
- [ex-d4-labelled-chamber-graph-artin-tits-normalisers](item-ex-d4-labelled-chamber-graph-artin-tits-normalisers)
- [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)
- [def-codimension-two-artin-tits-normalisers](item-def-codimension-two-artin-tits-normalisers)
- [def-d4-example-data-artin-tits-normalisers](item-def-d4-example-data-artin-tits-normalisers)
- [ex-d4-positive-roots-artin-tits-normalisers](item-ex-d4-positive-roots-artin-tits-normalisers)
- [lem-author-a7d202611130-finite-relative-longest](item-lem-author-a7d202611130-finite-relative-longest)
- [lem-two-geodesics-artin-tits-normalisers](item-lem-two-geodesics-artin-tits-normalisers)
- [lem-standard-geodesic-artin-tits-normalisers](item-lem-standard-geodesic-artin-tits-normalisers)
- [prop-gallery-separation-interface-artin-tits-prerequisites](item-prop-gallery-separation-interface-artin-tits-prerequisites)
- [lem-translate-path-artin-tits-normalisers](item-lem-translate-path-artin-tits-normalisers)
- [def-parabolic-faces-artin-tits-normalisers](item-def-parabolic-faces-artin-tits-normalisers)
- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)
- [def-longest-elements-artin-tits-normalisers](item-def-longest-elements-artin-tits-normalisers)


## Example

Use $D_4$ with central generator $t=s_2$, leaves $s=s_1,u=s_3,v=s_4$, and $J=\{2\}$. Write $(x,i)$ for a chamber label and compose arrow labels in traversal order. The two atomic braid relations associated with the displayed hexagon are

$$st\cdot v\cdot ts=vt\cdot s\cdot tv,\qquad s\cdot tv\cdot st=tv\cdot st\cdot v.$$

The first lifts to

$$(e,2)\to(st,1)\to(stv,1)\to(stvts,2),$$

$$(e,2)\to(vt,4)\to(vts,4)\to(stvts,2).$$

The second lifts to

$$(vts,4)\to(vt,4)\to(e,2)\to(st,1),$$

$$(vts,4)\to(stvts,2)\to(stv,1)\to(st,1).$$

These are the two opposite length-three arcs from each specified starting vertex around the same hexagonal face. Every atomic braid relation in this example has two or three factors on each side, corresponding respectively to square or hexagonal faces around codimension-two flats. Here a codimension-two flat is a one-dimensional intersection of supporting hyperplanes in the three-dimensional relative space; a normal two-dimensional slice at a nonzero generic point of the flat sees the polygonal chamber cycle.

## Example references

[ex-d4-quotient-graph-artin-tits-normalisers](item-ex-d4-quotient-graph-artin-tits-normalisers)

[ex-d4-labelled-chamber-graph-artin-tits-normalisers](item-ex-d4-labelled-chamber-graph-artin-tits-normalisers)

[def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)

[def-codimension-two-artin-tits-normalisers](item-def-codimension-two-artin-tits-normalisers)

[def-parabolic-faces-artin-tits-normalisers](item-def-parabolic-faces-artin-tits-normalisers)

[def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

## Facts & Assumptions

[F1] The quotient generating arrows are $st:2\to1$, $ts:1\to2$, $vt:2\to4$, $tv:4\to2$, with loops $v$ at $1$ and $s$ at $4$. An arrow from $(x,I)$ to $(y,K)$ has label $x^{-1}y$. The completed chamber graph includes vertices $7=(e,2),4=(st,1),6=(stv,1),9=(stvts,2),14=(vts,4),15=(vt,4)$ and their cycle $7,4,6,9,14,15,7$. [ex-d4-quotient-graph-artin-tits-normalisers](item-ex-d4-quotient-graph-artin-tits-normalisers) [ex-d4-labelled-chamber-graph-artin-tits-normalisers](item-ex-d4-labelled-chamber-graph-artin-tits-normalisers)

[F2] The generators are involutions, $s,u,v$ commute pairwise, and $sts=tst$, $utu=tut$, $vtv=tvt$. On the dual space the reflection formula is $(s_i f)(h)=f(h)-2B(h,\alpha_i)f(\alpha_i)$ for $h\in V$. The twelve positive roots and their nonnegative simple-root expansions are supplied by the completed root calculation. [def-d4-example-data-artin-tits-normalisers](item-def-d4-example-data-artin-tits-normalisers) [ex-d4-positive-roots-artin-tits-normalisers](item-ex-d4-positive-roots-artin-tits-normalisers)

[F3] An atomic relation is specified by a singleton associate $I$ and two distinct vertices $a,b$ outside $I$. Put $T=I\cup\{a,b\}$, and let $D$ be the union of its connected components meeting $\{a,b\}$. The two-generator lemma explicitly identifies its element as $q=v_{a,b,I}=(w_Dw_{D\cap I})^{-1}:I\to K$, with $K\subseteq T$ as in the finite-relative-longest construction. That construction gives $N(q)=\Phi_T^+\setminus\Phi_I^+$, where $N(q)=\Phi^+\cap q\Phi^-$. Here $w_L$ denotes the unique maximum-length element of the finite parabolic $W_L$. The two standard expressions for $q$ lift to exactly two geodesics from $(x,I)$ to $(xq,K)$. These are the codimension-two relation, and their factor counts equal their crossing counts. All parabolics here are finite. [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers) [def-codimension-two-artin-tits-normalisers](item-def-codimension-two-artin-tits-normalisers) [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers) [lem-author-a7d202611130-finite-relative-longest](item-lem-author-a7d202611130-finite-relative-longest) [def-longest-elements-artin-tits-normalisers](item-def-longest-elements-artin-tits-normalisers) [lem-two-geodesics-artin-tits-normalisers](item-lem-two-geodesics-artin-tits-normalisers) [lem-standard-geodesic-artin-tits-normalisers](item-lem-standard-geodesic-artin-tits-normalisers)

[F4] A shortest gallery crosses precisely its separating hyperplanes. Translation by $x$ identifies the relative arrangement for $I$ with that for $J$ at the labelled chamber $(x,I)$ and preserves crossing elements and geodesicity. [prop-gallery-separation-interface-artin-tits-prerequisites](item-prop-gallery-separation-interface-artin-tits-prerequisites) [lem-translate-path-artin-tits-normalisers](item-lem-translate-path-artin-tits-normalisers)

[F5] For a subset $L$ of the four vertices, the relative space is $\Theta_L=\{f:f(\alpha_i)=0\text{ for }i\in L\}$ and the fundamental face is $C_L=\{f\in\Theta_L:f(\alpha_j)>0\text{ for }j\notin L\}$. The relative arrangement consists of the distinct proper intersections $H_\alpha\cap\Theta_L$, where $H_\alpha=\{f:f(\alpha)=0\}$; zero restricted forms are omitted and equal restricted hyperplanes are counted once. [def-parabolic-faces-artin-tits-normalisers](item-def-parabolic-faces-artin-tits-normalisers) [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[F6] For $J=\{2\}$, the completed restricted-arrangement calculation gives $\mathrm{Cone}(J)^\circ=\mathrm{Cone}(J)=\Theta_J$. [ex-d4-restricted-arrangement-artin-tits-normalisers](item-ex-d4-restricted-arrangement-artin-tits-normalisers)

## Verification



**Given:** The $D_4$ data, completed chamber and root calculations, and the atomic/codimension-two constructions and relative-coordinate definitions and cone calculation [F1]–[F6].

**Goal:** Verify the corrected relations and paths and classify all their polygon lengths.

1.1 The Coxeter relations give $st vts=s(tvt)s=s(vtv)s=v(sts)v=vtstv$. They also give $st vst=sts vt=tstvt=tsvtv=tvstv$, where the commuting leaf generators and the two relevant length-three braid relations are used. Thus both displayed corrected products agree. By [F1], their factor sequences have object types $2\to1\to1\to2$ and $2\to4\to4\to2$, and $4\to4\to2\to1$ and $4\to2\to1\to1$, respectively. Applying the endpoint multiplication rule yields exactly the four paths displayed above. [F1, F2]

1.2 For any singleton associate $I$, choose a label $(x,I)$ in the completed chamber graph of [F1]. The translation in [F4] is a linear bijection $x^{-1}:\Theta_J\to\Theta_I$ carrying the relative cone interiors onto one another. Applying it to the equality in [F6] gives $\mathrm{Cone}(I)^\circ=\Theta_I$. These three-dimensional ambient spaces are open in themselves and convex. The finite root set in [F2] gives a finite, hence locally finite, arrangement of distinct proper hyperplanes as in [F5]. Thus the gallery proposition in [F4] applies on the entire coordinate space $\Theta_I$, and all coordinate balls and transverse slices used below lie within the relevant relative cone interior. [F1, F2, F4, F5, F6]

2.1 For an arbitrary atomic pair $(I,a,b)$, first work at $(e,I)$ using [F4]. The closure of this chamber is the nonnegative coordinate orthant on the three coordinates outside $I$. The chosen two facets intersect in the ray $C_T$, where the coordinates in $T$ vanish and the remaining coordinate is strictly positive. At a point on this ray, a root evaluates to zero exactly when its support is contained in $T$: this follows directly from the positive-root expansions in [F2], and negative roots have the same kernels. Thus the hyperplanes containing its supporting line are precisely the nonzero restrictions of the roots in $\Phi_T$, and a sufficiently small transverse slice meets no other hyperplane. This proves the required flat-to-residue correspondence, rather than assuming it from a drawing. [F2, F3, F4, F5, step 1.2]

3.1 If $T$ consists of all three leaves, its type is $A_1^3$ and its positive roots are those three simple roots. Removing the one in $I$ gives two independent forms on the normal slice. Otherwise $T$ consists of the central vertex and two leaves and has type $A_3$. In chain order its six positive roots are $\beta_1,\beta_2,\beta_3,\beta_1+\beta_2,\beta_2+\beta_3,\beta_1+\beta_2+\beta_3$. Setting the coordinate for the singleton $I$ to zero gives, after discarding zero and repetitions, exactly two coordinate forms $A,B$ and their sum $A+B$, whether $I$ is the middle or an endpoint of the chain. The normal slice therefore has respectively $m=2$ or $m=3$ distinct lines. Each line through its origin gives two rays, so its chamber cycle has $2m$ sectors and is a square or hexagon. [F2, F3, F5, step 2.1]

4.1 We now verify the simplification $q=w_Iw_T$ for every present atomic pair. Inverting a shortest word preserves its length, so uniqueness of a finite parabolic's maximum-length element gives $w_L^{-1}=w_L$. If $T$ contains the central vertex, its induced diagram is the connected $A_3$ chain, so $D=T$ and [F3] gives $q=w_Iw_T$. If $T$ is the three leaves, then $D=\{a,b\}$ and $D\cap I=\varnothing$. The three commuting leaf reflections act by independent sign changes on their simple roots. A word in them reduces to the subset of letters occurring an odd number of times, and no letter of that subset can be omitted because its simple root must change sign. Thus the longest elements are the products of all generators in their respective subsets. Consequently $q=s_as_b=w_Iw_T$ in this case also. In both cases this is the same $q=v_{a,b,I}$ whose standard expressions define the atomic relation, and the inversion formula in [F3] applies to it. [F2, F3, step 3.1]

4.2 In the independent relative coordinates $(X,Y,Z)=(f(\alpha_1),f(\alpha_3),f(\alpha_4))$, consider the ray $X=Z=0,Y>0$ and its point $f_0$ with $f_0(\alpha_3)=1$. Its three vanishing supporting forms are $X,Z,X+Z$. The other four forms $Y,X+Y,Y+Z,X+Y+Z$ are positive in a sufficiently small ball about $f_0$. Thus that ball is cut into exactly six local sectors. Each sector fixes the signs of all seven forms. The set with any prescribed seven strict signs is an intersection of open half-spaces and hence convex, so a realizable sign pattern specifies a single global chamber. By step 1.2 the ball lies within the relative cone interior, so these are relative chambers, with each local sector belonging to a different one. [F2, F5, step 1.2, step 3.1]

5.1 The inversion formula in [F3] means that $q^{-1}$ sends precisely the positive roots of $T$ outside $I$ to negative roots. A positive root outside $T$ stays positive under $q^{-1}\in W_T$: reflections in $T$ preserve its positive coefficient at some index outside $T$, and a root with such a coefficient cannot be negative. Consequently the chambers $(e,I)$ and $(q,K)$ differ on exactly the $m$ hyperplanes of the normal slice in step 3.1 and agree on the others. To check incidence as well as signs, take $f_0\in C_T$. Each generator in $T$ fixes $f_0$ by the dual reflection formula in [F2], hence $qf_0=f_0$. Since $K\subseteq T$, the coordinate descriptions give $f_0\in\overline{C_I}\cap\overline{C_K}$, so $f_0\in\overline{C_I}\cap\overline{qC_K}$. Thus both endpoint chambers occur in this local cycle, and their opposite signs on all $m$ lines make them its opposite sectors. The two arcs of the local $2m$-cycle cross each of its $m$ lines once; by [F4], applied on the open convex ambient space established in step 1.2, they are global geodesics. By [F3] these are exactly the two lifted standard expressions of the atomic relation, each of length $m$. Translation in [F4] gives the same conclusion at every labelled chamber. This establishes all atomic relations and their codimension-two polygon correspondence. [F2, F3, F4, F5, step 1.2, step 2.1, step 3.1, step 4.1]

6.1 For the point $f_0$ in step 4.2, the dual reflection formula in [F2] shows that $s,t,v$ fix $f_0$, since it vanishes on $\alpha_1,\alpha_2,\alpha_4$. All six chamber words $x=e,st,stv,stvts,vts,vt$ use only these generators, so $xf_0=f_0$. For the second index $i$ of each listed label, define $f_{i,\varepsilon}$ by $f_{i,\varepsilon}(\alpha_i)=0$ and $f_{i,\varepsilon}(\alpha_j)=f_0(\alpha_j)+\varepsilon$ for $j\ne i$, where $\varepsilon>0$. Since $i\in\{1,2,4\}$, these functionals lie in $C_{\{i\}}$ and converge to $f_0$. The chamber labelled $(x,i)$ is $xC_{\{i\}}$, as in the labelled-chamber supplier and [F4]; therefore $xf_{i,\varepsilon}$ lies in that chamber and converges to $xf_0=f_0$. This proves the required closure incidence for every one of the six distinct chambers in [F1]. Step 4.2 has exactly six local sectors, so these are all the chambers incident with the ray. Their graph cycle in [F1] is consequently the local hexagonal cycle: nonconsecutive sectors differ in the signs of at least two of the three vanishing forms and cannot be adjacent, whereas consecutive sectors share their bounding wall. The two opposite arcs from vertices 7 and 14 are precisely the four displayed paths. By step 5.1 applied at those starting chambers and their two facets incident with the ray, the arcs are geodesic and their wall words are the atomic relations in [F3]. [F1, F2, F3, F4, F5, step 5.1, step 4.2] ∎

## Source notes

The original article's second displayed equality on PDF p. 30 prints $s\cdot tv\cdot st=tv\cdot ts\cdot v$. Its right side is not composable: after $tv:4\to2$, the arrow $ts$ has source $1$. The original path diagram (7.2) instead gives $tv\cdot st\cdot v$, as verified above. The first equality and all four paths are retained; only that second right-side factor is corrected. The article is attribution for this example and evidence for the typo, not an input proving the local calculations.
