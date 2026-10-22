---
id: lem-projected-saddle-arcs-have-explicit-nested-intersection-order
kind: lemma
title: "Projected saddle arcs have an explicit nested intersection order"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball
  - thm-intermediate-value
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the roots are unique, the intermediate-value supplier is choice-free, and the finitely many corner adjustments are explicit local graph isotopies."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 2 and Figure 7, printed p.41; explicit multi-saddle projection calculation supplied here"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Use the explicit unit crossing-ball foliation, with ordered saddle levels $h_1<\cdots<h_m$ in its middle band, and vertical projection $\pi(x,y,z)=(x,y)$. Let $N_i,S_i$ be the upper boundary arcs around the positive and negative $y$ directions, and let $E_j,W_j$ be the lower boundary arcs around the positive and negative $x$ directions.

The interior of $\pi(N_i)$ meets each of $\pi(E_j),\pi(W_j)$ exactly once if $j<i$, and not at all if $j>i$. At $j=i$ they meet only at their shared equatorial endpoint. All interior intersections are transverse. Along $\pi(N_i)$ from its northwest to its northeast corner the interior order is
$$W_{i-1},\ldots,W_1,E_1,\ldots,E_{i-1}.$$
The same order holds on $\pi(S_i)$ traversed from southwest to southeast, and reversing a traversal reverses the list.

More precisely, suppose these arcs belong to projected upper and lower intersection circles of a surface in the model saddle position. Let an upper circle $\gamma$ visit this ball only through $N_i$ or $S_i$, and let $D$ be one of its disk sides on the projection sphere. Push each common-face segment shared by the lower circles and $\gamma$ slightly to the outside of $D$, retaining their labelled lower saddle arcs and their connections, and make the finite corner adjustments transverse. If the projected overpass is in $D$, the crossing list on the chosen upper arc acquires the same-level arc at each end, namely
$$W_i,W_{i-1},\ldots,W_1,E_1,\ldots,E_{i-1},E_i.$$
If the overpass is outside $D$, the original interior list remains, with no same-level end crossings. No labelled lower arc meets $\gamma$ twice in this ball. In particular, if there are crossings, the one nearest either equatorial end is the same saddle's lower arc when the overpass is in $D$, and an arc of the next lower saddle when the overpass is outside $D$.

## Statement references

[[lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball]]

## Facts & Assumptions

**Given:** The fixed explicit foliation, its finite ordered levels and, for the final assertion, the upper circle, lower circle family and chosen disk side.

[F1] Write $g(z)=\sqrt{z^2+\varepsilon^2}-\varepsilon$ and $d(z)=1+g(z)-z^2$. The middle-band level equation is $z+x^2-y^2=hd(z)$ with $1-hd'(z)>0$ on the ball; $d$ is even and positive. The four corners satisfy $x^2=(1+h)/2$, $y^2=(1-h)/2$. ([[lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball]])

[F2] A continuous real function on a compact interval assumes every value between its endpoint values, without a choice principle. ([[thm-intermediate-value]])

## Proof

1.1 At a projected intersection of an upper arc of level $h_i$ and a lower arc of level $h_j$, the sphere heights are $z$ and $-z$ with $z>0$. Put $w=x^2-y^2$. Their equations in [F1] give $2z=(h_i-h_j)d(z)$ and $2w=(h_i+h_j)d(z)$. For $0\le z\le1$, $d-zd'=1+z^2+\varepsilon^2/\sqrt{z^2+\varepsilon^2}-\varepsilon\ge1-\varepsilon+z^2>0$. Consequently $R(z)=2z/d(z)$ is strictly increasing, with $R(0)=0$ and $R(1)=2/g(1)>2$. Hence a positive intersection is possible only for $h_j<h_i$, and then [F2] gives a unique $z\in(0,1)$ solving the first equation. The value of $w$ is uniquely fixed by the second. [given, F1, F2, algebra, construct]

2.1 These equations give an actual point in each quadrant. Let $b_0=\max(|h_i|,|h_j|)<1$ and $r^2=1-z^2$. The real identity $|h_i+h_j|/2=b_0-(h_i-h_j)/2$ gives $|w|/d=b_0-z/d$. But $r^2+z=1+z-z^2\ge d(z)$, so $r^2/d\ge1-z/d>b_0-z/d=|w|/d$. Thus $x^2=(r^2+w)/2$ and $y^2=(r^2-w)/2$ are positive. Their signs specify one point in each quadrant. It is on the northeast or northwest piece of $N_i$ when $y>0$, and on its east or west lower arc according to the sign of $x$. The same calculation covers $S_i$ with $y<0$. The intersections are transverse: in each open quadrant $(z,w)$ are local coordinates on the projected disk when $z>0$, and the Jacobian of the two level functions $(z+w)/d(z),(-z+w)/d(z)$ has determinant $2(d-zd')/d^3\ne0$. At $h_i=h_j$ the only solution has $z=0$ and is the appropriate corner; for $h_j>h_i$ there is none with $z>0$. [step 1.1, F1, algebra, construct]

3.1 On the northwest quarter of $N_i$, increasing $z$ moves from the equatorial corner towards the positive $y$ axis. Indeed $x^2=(1-z^2+h_i d(z)-z)/2$ has derivative $(-2z-(1-h_i d'))/2<0$ by [F1]. The unique intersection height in step 1.1 increases when $h_j$ decreases, because $R$ is strictly increasing. The northwest crossings therefore occur in descending $j$ order from the corner to the axis; the northeast crossings occur in ascending order from the axis to the corner. This proves the displayed order. The negative-$y$ reflection preserves the level equations and gives the same order for $S_i$. [step 1.1, step 2.1, F1, algebra]

3.2 Only the same-level endpoint connections need adjustment when the common-face lower segments on $\gamma$ are pushed outside $D$. Their local behavior is explicit. Round the finite projected corners preserving their incident-arc order, and take a small chart in which $\gamma$ is the horizontal axis and $D$ is the upper side. The old shared common-face segment is on that axis. Push it to height $-\eta$. At a corner the same-level lower branch leaves the axis into the central, overpass side of the upper arc. If that is the $D$ side, join the pushed segment to this branch by a monotone transverse graph, giving exactly one crossing of the axis. If it is the other side, join them wholly below the axis, giving none. The fact that this branch is on the central side follows from its being the adjacent boundary arc of the same projected saddle disk, whose interior lies away from the corresponding underpass endpoint. These local graphs can be chosen in disjoint small corner charts and glued to small normal graph displacements along the finitely many common-face segments. They form explicit isotopies of the lower curve family, retaining every labelled lower arc and every connection. [given, step 2.1, F1, construct]

4.1 Make these adjustments small enough to retain all transverse interior intersections in step 2.1 and introduce none elsewhere; compact separation from the other arcs and the finite local transverse charts permit a common positive size. The central-side case adds only $W_i$ at the first end and $E_i$ at the second; the other case adds none. Steps 2.1–3.1 show that every other labelled lower arc meets the chosen upper arc at most once, so the stated complete lists and nearest-end rules follow. As $\gamma$ has no other arc in this ball, they are also the complete crossing lists with $\gamma$ in this ball. [step 2.1, step 3.1, step 3.2, construct] ∎
