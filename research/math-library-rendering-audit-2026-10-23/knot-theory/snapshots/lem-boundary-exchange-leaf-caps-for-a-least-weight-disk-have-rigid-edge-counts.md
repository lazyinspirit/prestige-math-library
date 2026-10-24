---
id: lem-boundary-exchange-leaf-caps-for-a-least-weight-disk-have-rigid-edge-counts
kind: lemma
title: Boundary exchange leaf caps of a least-weight disk have rigid edge counts
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-nonfundamental-least-weight-essential-disks-have-a-pure-boundary-obstruction
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-regular-normal-sum-diagrams-have-reduced-connected-pairs
  - lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes
  - lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement
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
    - title: Horst Schubert, Bestimmung der Primfaktorzerlegung von Verkettungen,
        Mathematische Zeitschrift76 (1961),116–148
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN266833020_0076/LOG_0022.pdf
      locator: §5.4, second case, printed pp.139–141, the uncut disk and opposite disk
        construction. The boundary essentiality and original-edge equality below
        are proved directly.
dependency_level: 7
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Choose a least-edge-weight essential normal disk $F$ whose normal vector is lexicographically least among such disks. Suppose a nontrivial vector decomposition has been put into the retained original-triangulation regular diagram and reduced to the pair $P,H$ of the pure boundary-obstruction lemma. Thus $P$ is a disk, $H$ is an annulus or Mobius band, and their remaining intersections are $k\ge2$ proper arcs.

Let $E$ be a leaf disk patch of $P$, with sole cut-arc side $\alpha$. Regularly switch every remaining double arc except $\alpha$, and cut the two parametrizing copies of $\alpha$. There are exactly three disk pieces: $E$, an opposite end disk $E'$, and a middle disk $K$. Their images have pairwise disjoint interiors; their only coincident boundary arcs are the indicated copies of $\alpha$. The irregular switch along $\alpha$ joins $E$ to $E'$ into an embedded proper disk $W$. Its boundary is null-homotopic in $\partial M$.

Replacing either end disk by a second parallel copy of the other produces embedded proper disks

$$A=K+2E,\qquad A'=K+2E'.$$

Both have essential boundary. For every original edge $e$ of $T$,

$$|E\cap e|=|E'\cap e|.$$

Both disks have weight $w(F)$, and their essential normal replacements have exactly $F$'s normal vector and preserve every original edge count. These conclusions do not assert that $E,E'$ are normally isotopic or that their intervening region can be cancelled.

## Statement references

[[lem-nonfundamental-least-weight-essential-disks-have-a-pure-boundary-obstruction]]

[[lem-nonfundamental-least-weight-essential-disks-have-a-pure-boundary-obstruction]] — the pure boundary reduced pair and its leaf patches.

[[lem-admissible-normal-vectors-have-rigid-edge-count-averages]] — rigidity of a two-vector average of edge counts.

## Facts & Assumptions

**Given:** The least-weight, lexicographically least disk, retained reduced pair and leaf patch in the Statement. Write $N_e(S)=|S\cap e|$ and $N(S)=(N_e(S))_e$ for any transverse piece or surface.

[F1] Every nonempty partial regular resolution has connected normalization. Its Euler characteristic is $\chi(P)+\chi(H)=1$. The switches miss $T^{(1)}$, preserve all edge intersections, and leave only their unswitched double arcs as singularities. The local crossing has four rays, two opposite rays from each summand; the two uncrossings pair adjacent rays. ([[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]], [[lem-regular-normal-sum-diagrams-have-reduced-connected-pairs]])

[F2] A connected finite PL surface with boundary and Euler characteristic one is a disk. Two disjoint proper arcs in a disk cut it into three disks, with a path as their adjacency tree. ([[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]], [[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]])

[F3] An irregular resolution containing an embedded essential proper disk as a parametrizing component gives an essential normal disk of weight strictly below $w(F)$. ([[lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement]])

[F4] The explicit normal-replacement moves do not increase the count at any individual original edge: tetrahedral cap changes and compressions fix edge points, sphere discards remove points, and an edge bigon removes two points on that edge without adding points on another. Thus an essential PL disk $D$ has an essential normal replacement $U$ with $N_e(U)\le N_e(D)$ for every $e$. ([[lem-essential-pl-disks-admit-normal-replacements]])

[F5] If two admissible normal vectors have edge-count sum $2N(F)$, their vector sum is $2v(F)$. If they are also least-weight essential disks, lexicographic minimality of $v(F)$ makes both equal $v(F)$. ([[lem-admissible-normal-vectors-have-rigid-edge-count-averages]])

## Proof

1.1 Switch all arcs except $\alpha$. There is at least one switched arc because $k\ge2$. The normalization is connected by [F1], has Euler characteristic one, and has nonempty boundary. For the last assertion, proper-arc switching does not remove all original-boundary intervals: their interiors miss the finite switch endpoints and remain boundary intervals of the normalization. Hence this normalization is a parametrizing disk $Q$ by [F2]. The only image double curve is $\alpha$. Its two preimages are disjoint proper arcs in $Q$. Cutting them gives three disks in a path by [F2]. The original leaf $E$ has not been touched by any of the preliminary switches, so it is one end disk. Name the other end $E'$ and the middle $K$. No cut piece has an interior double point: the only double curve was cut onto their boundaries. Thus their interiors are embedded and mutually disjoint. [given, F1, F2, construct]

2.1 In a transverse section of $\alpha$, the ray of $E'$ is adjacent to the ray of $E$. If instead these rays were opposite, they would be the two rays of the same unswitched surface branch. The two rays of $K$ would then be the other opposite pair. Restoring the unswitched identifications would join $E$ to $E'$ and join $K$ to itself, giving two components, contrary to the connected normalization $Q$ in step 1.1. The adjacent-ray uncrossing joining $E$ to $E'$ also joins the two rays of $K$. It cannot be the regular uncrossing: the regular full resolution is the connected disk $F$. It is therefore the irregular uncrossing. Its $E+E'$ component is a disk $W$, since two disks joined along a boundary interval form a disk. Resolving the sole remaining image double arc makes that image embedded and proper. [F1, F2, step 1.1, construct, contradiction]

3.1 The boundary of $W$ is null-homotopic in $\partial M$. Otherwise $W$ would be an embedded essential disk component of a resolution with the irregular switch of step 2.1. By [F3] there would be an essential normal disk of smaller weight than $F$, a contradiction. Let $p,q$ be the endpoints of $\alpha$. Orient the complementary original-boundary arcs of $E,E'$ as paths $u,v$ from $p$ to $q$. The boundary of $W$ is $uv^{-1}$ up to reversal. Its null-homotopy therefore says exactly that $u$ and $v$ are homotopic with endpoints fixed in $\partial M$. [given, F3, step 2.1, contradiction, construct]

3.2 Attach two slightly separated copies of $E$ to the two cut sides of $K$, or two copies of $E'$ instead. Both constructions give embedded proper disks $A,A'$. Here all interiors in step 1.1 are disjoint, so the copies can be made in arbitrarily small neighborhoods missing the other pieces. A finite product displacement of a disk is available along these pieces: its local normal intervals are compatible along a disk triangulation after propagating their signs from one chart; every potential sign reversal is a disk loop and contracts. The four-ray sections at $\alpha$ specify the disjoint joining strips. For $A$ they join the two separated $E$ rays to the two $K$ rays without crossing, and for $A'$ use the separated $E'$ rays. Half-space charts at $p,q$ and along the boundary arcs keep the copied boundary in $\partial M$. Attaching one disk along each of two disjoint boundary intervals of the disk $K$ leaves a disk. [F1, F2, step 1.1, step 2.1, construct]

4.1 Both new disks have essential boundary. The regular disk $F$ is obtained by attaching $E,E'$ to the two cut sides of $K$, so its boundary follows the remaining original-boundary portions of $K$ with those cut sides replaced by $u,v$, in the directions of their traversal. For $A$ those replacements are $u,u$, and for $A'$ they are $v,v$. The endpoint-fixed homotopy of step 3.1 makes all three resulting loops freely homotopic, up to choosing the orientation of the entire loop. Since $\partial F$ is essential, so are $\partial A$ and $\partial A'$. This uses a boundary-path homotopy, not a boundary-parallelity assertion about the three disks. [given, step 3.1, step 3.2, construct]

5.1 Every joining strip misses original edges, and the two copies in step 3.2 can preserve all transverse edge counts. Indeed choose disjoint small charts about the finitely many edge crossings and a sufficiently small displacement on their compact complement. Therefore, componentwise, $$N(F)=N(K)+N(E)+N(E'),\quad N(A)=N(K)+2N(E),\quad N(A')=N(K)+2N(E').$$ In particular $N(A)+N(A')=2N(F)$. Apply [F4] to the essential disks from step 4.1 to obtain essential normal disks $U,V$ with $N(U)\le N(A)$ and $N(V)\le N(A')$. [F1, F4, step 3.2, step 4.1, construct, algebra]

6.1 Summing all edge entries gives $$2w(F)\le w(U)+w(V)\le w(A)+w(A')=2w(F),$$ where the first inequality is least-weight minimality. Thus all totals are equal and $w(U)=w(V)=w(F)$. Each componentwise deficit in step 5.1 is nonnegative, and their total is zero, so every deficit is zero. Consequently $N(U)=N(A)$, $N(V)=N(A')$ and $N(U)+N(V)=2N(F)$. [given, step 5.1, algebra]

7.1 By [F5], $v(U)+v(V)=2v(F)$, and the assumed lexicographic minimality at weight $w(F)$ forces $v(U)=v(V)=v(F)$. Their edge-count vectors therefore both equal $N(F)$. Substitute $N(U)=N(A)$ into the formulas of step 5.1 to get $N(E)=N(E')$ on every original edge. The same formulas now give $w(A)=w(A')=w(F)$, and step 6.1 shows that their normal replacements lost no edge points. These are equality and coordinate conclusions; no normal isotopy or cancellation of the intervening region has been inferred. [given, F5, step 5.1, step 6.1, algebra] ∎
