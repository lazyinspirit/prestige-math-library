---
id: lem-spherical-normal-summands-admit-weight-controlled-disk-compressions
kind: lemma
title: "A spherical normal summand gives a weight-controlled disk compression"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - lem-normal-exchange-disk-patches-have-positive-edge-weight
  - lem-connected-normal-surface-chi-one-is-disk
  - lem-essential-pl-disks-admit-normal-replacements
  - lem-admissible-normal-vectors-have-rigid-edge-count-averages
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Wolfgang Haken, Theorie der Normalflächen, Acta Mathematica105 (1961),245–375"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf"
      locator: "Chapter5§1, printed pp.361–362, the reduced-pair condition excluding curves separating both summands. The compression below is supplied locally and does not invoke the ambient sphere-separation assumption of Satz9."
    - title: "Chan-Ho Suh, The Unknotting Problem and Normal Surface Q-Theory"
      url: "https://arxiv.org/pdf/1009.1500"
      locator: "§§2.3 and3, normal sums and disk-compression/exchange arguments; the precise weight comparison and its unresolved equality case are separated below."
---

## Statement

Let $T$ be a finite simplicial triangulation of a compact PL three-manifold $M$. Let $S\subset\operatorname{int}M$ be a normal PL two-sphere with a supplied PL product neighborhood, and let $Y$ be a connected proper normal surface. Suppose:

- $S$ and $Y$ are in transverse PL position, their nonempty intersection is a finite union of circles missing $T^{(1)}$, and its traces in each normal disk are proper arcs joining distinct sides;
- every circle of $S\cap Y$ is nonseparating in $Y$;
- $\chi(Y)=-1$, and $\partial Y=C$ is one circle which is not null-homotopic in $\partial M$.

For edge weight $w(A)=|A\cap T^{(1)}|$, there is a proper normal disk $D'$ with $\partial D'$ essential and

$$w(D')\le w(Y)+w(S).$$

More precisely, if $E\subset S$ is a least-weight innermost disk for $S\cap Y$, there is first a proper PL disk with boundary exactly $C$ and weight $w(Y)+2w(E)$. It has a normal essential-boundary replacement of no larger weight. If $2w(E)<w(S)$, the displayed inequality is strict.

In particular, with the same supplied product neighborhood and trace position, this applies to a connected normal pair $S,Y$ whose regular sum is an essential disk $D$, provided no intersection circle separates both summands: then $w(D')\le w(D)$, strictly in the stated strict case. No ambient irreducibility or sphere-separation assumption is made. The supplied product neighborhood is explicit local data; no theorem about arbitrary topological triangulations is assumed.

If in this regular-pair application $D$ has least edge weight among essential normal disks, equality $2w(E)=w(S)$ forces exactly two innermost sphere disks $E_1,E_2$. Normalizing the two disk compressions at $E_1,E_2$ gives normal essential disks $D_1,D_2$ satisfying $v(D_1)+v(D_2)=2v(D)$. If $v(D)$ is also lexicographically least among essential normal disk vectors at that weight, then $v(D_1)=v(D_2)=v(D)$. This last assertion is a coordinate conclusion and does not assert a geometric cancellation of the original sum.

## Statement references

[[lem-normal-exchange-disk-patches-have-positive-edge-weight]] — innermost disk patches have positive weight.

[[lem-connected-normal-surface-chi-one-is-disk]] — the finite triangulated-surface disk criterion.

[[lem-essential-pl-disks-admit-normal-replacements]] — normal replacement by weight-nonincreasing local moves.

## Facts & Assumptions

**Given:** The normal surfaces, PL product neighborhood, intersection position and boundary hypotheses of the Statement.

[F1] A finite family of disjoint circles on a PL sphere separates it into planar regions whose incidence graph is a tree. Each leaf region is a disk bounded by one circle. This follows by applying polygonal separation in a sphere chart and adding the circles one at a time: each separates one region into two. A nonempty finite tree has at least two leaves. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]])

[F2] Under the trace hypothesis, an innermost disk on $S$ is a disk patch with no original-boundary arcs and therefore has positive edge weight. ([[lem-normal-exchange-disk-patches-have-positive-edge-weight]])

[F3] A connected compact finite triangulated surface with nonempty boundary and Euler characteristic $1$ is a disk. Its proof uses finite collapses to a tree and adds no choice hypothesis. ([[lem-connected-normal-surface-chi-one-is-disk]])

[F4] The normal replacement construction starts with an essential-boundary PL disk. Its tetrahedral cap replacements and compressions do not increase edge weight; edge bigon moves and retained boundary compressions decrease it; discarding a sphere component cannot increase it. Its lexicographic descent ends with a normal essential-boundary disk. These are the actual local moves in that supplier's proof, so the normal replacement has weight no larger than the input disk. More precisely, it does not increase the count on any fixed triangulation edge: tetrahedral moves fix edge intersections, an edge bigon removes only its two endpoint intersections in a neighborhood missing all other edges, and retaining one boundary-compression disk or discarding a sphere removes intersection points without adding any elsewhere. ([[lem-essential-pl-disks-admit-normal-replacements]])

[F5] [[lem-admissible-normal-vectors-have-rigid-edge-count-averages]]: for two admissible normal vectors, an edge-count average equal to that of an admissible third vector is exactly the same coordinate average. Lexicographic minimality forces both vectors to equal the third.

## Proof

1.1 The nonempty intersection family on $S$ has at least two innermost disks by [F1]. Their interiors are disjoint, and their possible common boundary is disjoint from $T^{(1)}$. Thus the sum of their weights is at most $w(S)$. Choose an innermost disk $E$ of least weight among the finitely many such disks. Its interior misses $Y$, its boundary $c$ is one intersection circle, and $$0<w(E)\le\frac{w(S)}2$$ by [F2] and the preceding comparison. [given, F1, F2, construct]

2.1 The circle $c$ has an annular neighborhood in $Y$. Indeed, transverse PL charts make $S$ and $Y$ coordinate planes along $c$. The signed normal coordinate from the supplied product neighborhood of $S$ restricts to a transverse signed coordinate on $Y$ along $c$, so it trivializes the normal line of $c$ in $Y$. Remove the interior of a small annular collar of $c$ in $Y$ and cap its two resulting circles by two nearby parallel copies of $E$. Use the supplied product neighborhood of $S$ to place the cap interiors on its two sides. Along $c$, the transverse product charts identify the construction with cutting one coordinate plane and attaching the two copies of a half-plane on the two cut levels. Away from a smaller collar of $c$, compactness of the disjoint sets $E\setminus\operatorname{collar}(c)$ and $Y$ permits sufficiently small parallel displacements without new intersections. The resulting surface $D_0$ is consequently embedded and proper, with boundary still exactly $C$. [given, step 1.1, construct]

3.1 The curve $c$ is nonseparating in $Y$ by hypothesis, so cutting along its annular collar leaves a connected surface. Adding the two caps retains connectedness. Cutting an annulus changes Euler characteristic by zero, and each disk cap adds one, as is checked by triangulating the attaching circles and cancelling their equal vertex and edge counts. Hence $$\chi(D_0)=\chi(Y)+2=1.$$ Its original boundary $C$ remains nonempty. All operations are finite PL cuts and gluings and admit a finite common triangulation. Thus [F3] makes $D_0$ a disk. This argument includes nonorientable $Y$. [given, F3, step 2.1, construct, algebra]

3.2 Choose the annular cutting collar disjoint from $T^{(1)}$, since $c$ is disjoint from that finite edge set on $Y$. Each parallel cap can be chosen to retain exactly the edge intersections of $E$. At each of its finitely many intersections, a normal-surface chart makes the crossed edge a transverse segment and a small displacement retains exactly one crossing. Off these charts the compact cap has positive distance from the remaining edges. The collar joining its boundary to the cut copy of $Y$ misses the edges as well. The old intersections of $Y$ are retained, and the two caps therefore add precisely $2w(E)$ new intersections. Thus $$w(D_0)=w(Y)+2w(E)\le w(Y)+w(S).$$ If $2w(E)<w(S)$, this comparison is strict. [step 1.1, step 2.1, construct, algebra]

4.1 The disk $D_0$ has essential boundary $C$ by the given hypothesis. Apply the weight-nonincreasing construction [F4]. It supplies a normal proper disk $D'$ with essential boundary and $w(D')\le w(D_0)$, proving the stated bounds and their strict version. Boundary compressions in that construction may change $C$, so only the intermediate disk $D_0$ was asserted to have boundary exactly $C$. [given, F4, step 3.1, step 3.2, construct]

5.1 Finally suppose the regular sum of the connected pair $S,Y$ is an essential disk $D$. Its boundary is $\partial Y$, because all switches are along interior circles. Cutting and regluing along circles preserves total Euler characteristic, so $1=\chi(D)=2+\chi(Y)$ and $\chi(Y)=-1$. Every intersection circle separates $S$; the stated reduced-pair hypothesis therefore makes each nonseparating in $Y$. Switches miss the triangulation edges, and the two summands have disjoint edge-intersection sets, giving $w(D)=w(S)+w(Y)$. Thus all the preceding hypotheses and comparisons apply. [given, step 1.1, step 4.1, algebra]

6.1 In the regular-pair application, suppose $D$ has least edge weight and $2w(E)=w(S)$. Every innermost sphere disk has weight at least $w(S)/2$ by the choice of $E$, and at least two exist. Since their interiors are disjoint and their boundaries miss the edges, positivity [F2] excludes a third: three such disks would already have total weight at least $3w(S)/2>w(S)$. Hence there are exactly two, $E_1,E_2$, both with weight $w(S)/2$. They contain all edge intersections of $S$, since their weights already sum to $w(S)$. For each global edge $e$ write $N_e(A)=|A\cap e|$; consequently $N_e(E_1)+N_e(E_2)=N_e(S)$. [given, F1, F2, step 1.1, step 5.1, algebra]

7.1 Apply steps 2.1–4.1 separately to $E_1$ and $E_2$. Each pre-normal disk $D_{0,i}$ has weight $w(D)$ and, by the local crossing count of step 3.2, has $N_e(D_{0,i})=N_e(Y)+2N_e(E_i)$ on every edge. Its normalized essential disk $D_i$ has weight at most $w(D)$ by [F4] and at least $w(D)$ by the assumed minimality. The weights are equal. Since [F4] never increases any individual edge count, equality of their sums forces $N_e(D_i)=N_e(D_{0,i})$ for every $e$. Thus $$N_e(D_1)+N_e(D_2)=2N_e(Y)+2N_e(S)=2N_e(D).$$ The final equality is the edgewise version of the regular-sum count in step 5.1. Apply [F5] to these three normal vectors to obtain $v(D_1)+v(D_2)=2v(D)$. If $v(D)$ is lexicographically least at the least weight, [F5] gives $v(D_1)=v(D_2)=v(D)$, as asserted. [given, F4, F5, step 3.2, step 4.1, step 5.1, step 6.1, algebra] ∎

## Remaining use in the existence argument

The weight comparison is non-strict when $2w(E)=w(S)$. The two-compression argument now forces identical normal vectors for a lexicographically least minimal disk, but a full fundamental or vertex-disk proof still needs a geometric cancellation in that situation, the required reduced-pair/exchange representation, and the disk-with-Euler-characteristic-zero-summand case. None of those conclusions is asserted by this lemma.
