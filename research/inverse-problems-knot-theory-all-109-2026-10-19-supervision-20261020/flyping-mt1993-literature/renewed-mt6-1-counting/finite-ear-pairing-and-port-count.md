# Independent finite consumer for the MT6.1 resource certificate

Author proof, not independent review. The input binding to MT geometry
is separately and honestly held in `source-and-local-supplier-map.md`.
This file proves only the finite planar pairing and finite relation
construction. No saddle condition, good-ball classification or5.5
exclusion is inferred from the finite combinatorics.

## 1. The actual finite outermost-interval lemma

Let D be a finite triangulated closed disk, and let a nonempty finite
family of pairwise disjoint properly embedded polygonal arcs cut D.
Their endpoints are distinct, and each arc has one entry endpoint
and one exit endpoint. Then there are two closed intervals eta_1,
eta_2 in boundary D with disjoint interiors such that each interval's
endpoints are the two ends of ONE of these arcs and its interior
contains no other arc endpoint. The two intervals need not have
four distinct endpoints.

Proof. Cut along the arcs. One proper disk arc separates a disk
into two disks; successive cuts therefore give disks. Form a dual
graph with one vertex for each resulting disk and one edge for
each cut arc. Starting with one vertex, each cut replaces one vertex
by two joined by the new edge. Consequently this graph is a finite
tree with at least one edge. It has at least two leaves: take the
two endpoints of a longest simple path; an additional incident edge
at either would lengthen that path. A leaf disk has exactly one
cut-arc side. The remainder of its boundary is one interval of the
original boundary D, with those two endpoints and no other arc
endpoints. Two different leaf disks give intervals with disjoint
interiors. Each interval pairs an entry with its matching exit.

If there is only one cut arc, the tree has two vertices and the
chosen intervals are the two complementary boundary intervals
sharing BOTH endpoints. This valid case is why the lemma asserts
disjoint interiors rather than four distinct endpoints. In the
geometric consumer, distinct resource labels still need the separate
EXIT noncollision input even in this case. QED.

The cut-disk argument can be implemented on a common finite
triangulation of the disk and arcs. Finite polygonal crosscut
separation is the only planar input; no 3D sphere- or surface-
normalization theorem is imported. A fixed finite order selects a
longest path, its endpoint leaves and the resulting two intervals,
so no choice axiom is needed here. Actual projected MT traces must
be supplied as this disk system; this lemma does not manufacture
it from arbitrary possibly intersecting projections.

## 2. Owned ports, two distinct resource labels

Let Lambda,G,S,A,Z be finite sets. Put

    I=G disjoint-union S disjoint-union A disjoint-union Z,
    P=(G times {0,1}) disjoint-union (S times {0,1})
      disjoint-union (A times {0}) disjoint-union (Z times {0}).

Let resource:P->I be the indicated projection and supply a partial
FUNCTION owner:P->Lambda. Each port thus has at most one owner.
For every C in Lambda supply a nonempty finite family of candidate
two-port certificates (p_C,q_C), with owner(p_C)=owner(q_C)=C
and resource(p_C) != resource(q_C).

For the geometric application, a certificate is supplied by either
the one-interior-edge row (A and G), the no-transverse row (two
distinct Z), or the two intervals from part1 followed by their Z/EXIT
maps and noncollision checks. Those geometric existence conditions
are inputs, not consequences of the next counting proof.

Fix finite orders and choose the least candidate for each C. Define
the literal SET relation

    R={(C,resource(p_C)),(C,resource(q_C)):C in Lambda} subset Lambda times I.

Then its first projection has exactly two points over each C,
because the two resource labels differ. Thus |R|=2|Lambda|.

For any fixed r in I, each pair (C,r) in R has a selected port of
resource r and owner C. Distinct C cannot use the same port, since
owner is a function. Choosing the least such selected port gives
an injection from the fiber of R over r into resource inverse(r).
The latter has size2 for G,S and size1 for A,Z. Therefore ALL four
capacities hold:

    |R over g|<=2, |R over s|<=2, |R over a|<=1, |R over z|<=1.

Summing these finite fibers gives

    2|Lambda|=|R|<=2|G|+2|S|+|A|+|Z|.

This is exactly the relation/projection form of MT6.1 when the
geometric ports are actually supplied. It does not count a multiset
as a set relation, does not count two ports with the same resource
twice for one component, and does not infer global capacities merely
from a per-component two-choice argument. All selections are finite.

## 3. Boundary of the result

This consumer is independent of MT6.2 and of minimal-complexity
geometry. It proves neither the trace disk-system input, the saddle
owner map, the one-edge configuration, nor the equal-saddle5.5
exclusion. Without those suppliers, the actual MT relation R_F is
still conditional. In particular the numerical inequality here
cannot be exported as an established geometric MT6.1 instance.
