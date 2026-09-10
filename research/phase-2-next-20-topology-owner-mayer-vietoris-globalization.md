# Owner topology support: countable Mayer–Vietoris globalization

Separate complete candidate for the boundaryless-manifold open-set principle
as stated by the local `def-smooth-manifold` convention. This is not a
resolution of the separate smooth-simplex boundary-target problem. Author e
still owns batch 9 files. No item decision, new identity, coverage/source
waiver or independent-review stamp is made.

## Exact property and choice contract

Let eta:H^q(U)->K^q(U), for all integer q and relevant open manifolds U, be a
natural comparison of cohomology functors, invariant under their coordinate
diffeomorphisms. Suppose it commutes with the two-open Mayer–Vietoris exact
sequences and countable disjoint-union product identifications. Put P(U) for
“eta_U is an isomorphism in every degree.” Assume P on the empty space and
on every rational open box in Euclidean space. For ordinary cohomology the
empty-space condition follows from its zero cochain complex. It should be
stated if the theorem is presented as an abstract comparison principle.

Assume countable choice AC_omega: the already planned countable disjoint-union
supplier requires it for coordinate primitives, and the published smooth
proper-exhaustion theorem explicitly has it. No full AC is needed by this
argument. Both uses must be exposed in the final item contract.

The five lemma applied to the five-term portion

H^(q−1)(U)⊕H^(q−1)(V) -> H^(q−1)(U∩V) -> H^q(U∪V)
 -> H^q(U)⊕H^q(V) -> H^q(U∩V)

and its K counterpart proves P(U∪V) whenever P(U), P(V), P(U∩V).
For negative degrees use zero groups where appropriate. Thus there is no
unhandled degree-zero endpoint. The product property proves P on countable
disjoint unions of P opens.

## 1. Finite unions from an intersection-stable family

Suppose B is a family of open sets, containing the empty set, closed under
finite intersections, and P holds on every member. P holds on every finite
union of its members. Induct on the number m: the intersection of the last
member with the union of the preceding m−1 is a union of m−1 intersections,
each still in B. By the induction hypothesis it has P, as does the preceding
union; two-open gluing gives the result. The intersection of any two such
finite unions is another finite union of members of B, by distributivity.

## 2. Proper-function bands give a countable two-open argument

Suppose X has a continuous nonnegative function f with compact sublevel sets,
and B is an intersection-stable basis of X on whose members P holds. For each
integer j>=0 put

K_j=f^-1([j,j+1]),  O_j=f^-1((j−1/3,j+4/3)).

K_j is compact: it is a closed subset of the compact sublevel f<=j+1.
O_j is open, contains K_j, and O_j∩O_k is empty for |j−k|>=2. Every point
belongs to some K_j. Cover K_j by all B members contained in O_j, and extract
a finite subcover. Let V_j be their finite union. If K_j is empty take V_j
empty. AC_omega selects a finite covering list for every nonempty K_j; with
a supplied countable enumerated basis one can instead choose the least code
of an eligible finite list. Then

K_j⊂V_j⊂O_j,  X=union_(j>=0) V_j,  V_j∩V_k=empty for |j−k|>=2.

By section 1, P(V_j) and P(V_j∩V_(j+1)) hold. Define

V_even=union_(j even) V_j, V_odd=union_(j odd) V_j.

Each is a countable DISJOINT union, so each has P. Their intersection is the
countable disjoint union of the sets W_j=V_j∩V_(j+1). To verify disjointness,
W_j∩W_k is empty if |j−k|>=2 because V_j and V_k are disjoint; for k=j+1
it is contained in V_j∩V_(j+2), also empty. Every even-odd intersection has
adjacent indices, so the W_j exhaust V_even∩V_odd. Thus this intersection
has P, and one two-open Mayer–Vietoris argument gives P(X).

All band intersections have been checked. This uses neither commutation of
cohomology with increasing unions nor an unsupported claim that arbitrary
chart intersections are convex. The proof only uses countably many disjoint
products followed by a finite exact-sequence argument.

## 3. First stage: arbitrary Euclidean open sets

Let O⊂R^d be open. The empty set is settled. O is itself a smooth manifold,
so the already published `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function`
supplies f under AC_omega. One may instead use the elementary distance-to-the-
complement exhaustion, but no such extra supplier is needed here.

Let B consist of all rational open boxes contained in O, plus the empty set.
It is a basis and closed under finite intersections: intersecting finitely
many products of rational-endpoint intervals gives another such product or
the empty set. Its members have P by the hypothesis. Section 2 gives P(O).
This applies to every Euclidean open, not just finite unions of boxes.

## 4. Second stage: manifolds and arbitrary chart intersections

Let M be a smooth manifold with its supplied countable coordinate cover.
For every open subset U contained in one chart domain, the chart identifies
U diffeomorphically with an arbitrary Euclidean open. Section 3 and naturality
therefore give P(U). Let B now be the family of all such chart-contained
open subsets, together with the empty set. It is a basis, and is closed under
finite intersections: an intersection is an open subset of its first chart
domain, regardless of how complicated the other chart transition maps are.
Its coordinate image need not be convex and no convexity is claimed.

Use the published proper-exhaustion theorem again on M, and apply section 2
to this B. It gives P(M). The countable coordinate cover supplies a countable
subbasis of chart rational boxes if an enumerated-choice version is desired;
the AC_omega version already suffices. Empty, compact, disconnected, and
zero-dimensional manifolds are included. Compactness only makes sufficiently
high bands empty; disconnected manifolds require no selection of components.

This completes the exact open-set principle without minting the prospective
increasing-union lemma. That proposed lemma was only one proof route, not one
of the original requested items. No original claim or pair is removed.

## Actual reading and integration obligations

Read the entire current files for `def-smooth-manifold`,
`thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function`,
`lem-manifold-bump-for-a-compact-set-inside-an-open-set`, and the two older
compact-exhaustion/chart-band lemmas as audit context. The argument uses the
first proper-exhaustion theorem with its explicit AC_omega repair, not the
older unqualified compact-exhaustion lemma or the more elaborate chart-band
embedding lemma. The chosen supplier is published on
`smooth-partitions-of-unity-and-exhaustions`; verify the existing page-prerequisite
closure before final authoring and add its exact item dependency.

The proper-exhaustion theorem's actual proof constructs a countable chart
cover with countable choice, chooses compact cutoffs countably, proves
NEIGHBOURHOOD local finiteness of 1−chi_n, and proves compactness of sublevels.
The compact-cutoff proof uses all eligible bumps and one finite indexed
subcover, so it does not hide arbitrary pointwise choice in that used clause.
No new published defect is claimed by this bounded reading.

Primary-source search located Bredon's *Topology and Geometry* at
https://people.math.osu.edu/davis.12/courses/6801-02/BredonGE-Topology_and_Geometry-Springer-GTM139.pdf,
and identified its local-to-global argument, but no full-book or complete
passage reading is claimed. An institutional four-page Mayer–Vietoris note
by Freire was browser-read at
https://web.math.utk.edu/~freire/teaching/m664s24/Mayer-Vietoris_for_deRham.pdf;
it gives finite Mayer–Vietoris/duality arguments, not the countable theorem,
and is not used as backing for a missing countable step. The band argument
above is supplied in full instead. No request was made against an exhausted
original batch-9 source URL and no source history was changed.

Before integration, reread the actual authored countable-product and MV
comparison suppliers when e creates them, check the connector sign square
(including DG's sign relative to AT), declare AC_omega and exact dependencies,
and write current citation/derivation/boundary contracts. The source obligations
of the whole DG pair and its separate boundary-target smoothing holds remain.
