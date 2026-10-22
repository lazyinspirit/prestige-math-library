# Renewed user-authorized development: bypassing the abstract bridge

Author: `/root/flyping_bridge`, 2026-10-20. This is new proof development under the user's explicit renewed authorization. The historical round1/final-round2 counts are retained. This note neither reviews accepted modules nor supplies a new acceptance, gate, or workflow transition.

## Honest input boundary

Read: `original105-four-slot-report.md` in the parent directory; the missing-operation section of `global-fair-position-and-early-moves-working-proof.md`, lines560–707; Kindred v2 PDF pages32–35 as extracted text, and a rendered view of PDF35 (Figure31). No whole-paper reading is asserted. The owner confirms that the slit disk D and its proper arc beta in the previous report are an abstract model, not objects already supplied in the actual complement.

The geometric transfer should therefore not be formulated as an isotopy of an arbitrary beta. The usable actual objects are the cut chambers, the two lateral sides of the fixed crossing-book band, and physical retained boundary-face occurrences. An abstract disk parametrization cannot establish where those objects lie.

## Direct relative filling lemma

Let B_1,...,B_n be finitely many smooth balls obtained by cutting an actual region along its old surface. Work in the cut region: the two copies of a cut face remain distinct. Let R be a fixed embedded rectangle in the remaining crossing book, with long sides A_P,A_Q on the boundary spheres of the balls. Assume the following concrete input.

* For each t in {P,Q}, a fixed embedded arc a_t on one boundary sphere joins the endpoints of A_t. The interior of a_t misses A_t. Hence C_t=a_t union A_t is a simple circle on that sphere. The a_t are the complete physical face walks; none of their prescribed seam subintervals may be reordered, identified, or replaced.
* C_P and C_Q are disjoint as curves in the cut region. If they are on one sphere, disjointness is required there, before regluing old faces.
* Along these curves there are specified disjoint inward collars for the disks to be constructed. At A_t the collar is the outside continuation of the corresponding long side of R. Every other retained face collar agrees with its actual protected gluing germ.
* The interior of R misses the balls, old surface, and tube; its only contacts with the proposed disk pieces are A_P and A_Q. The collar germs on A_P,A_Q make these contacts boundary-interval gluings.
* Under the map regluing the cut faces to the original region, the proposed retained boundary windows have no unintended identifications: each named physical retained seam appears once, and distinct windows are geometrically disjoint except for their prescribed consecutive endpoints. Distinguishing cut-face copies is necessary for the calculation, but does not permit two copies of one geometric interval to become overlapping new boundary arcs after regluing.

Then there are disjoint embedded disks D_P,D_Q in the balls with boundaries C_P,C_Q and the specified sufficiently small collars. Their interiors miss every old face and tube face on the ball boundaries. The union D_P union R union D_Q, rounded in the specified collars, is an embedded disk. Its retained boundary is exactly the prescribed physical face word. No preliminary disk D, proper arc beta, bridge, or ambient isotopy of beta is needed.

Proof. A simple circle on a sphere has two disk sides. If the circles occur on different spheres, choose either side independently. If both occur on one sphere, the complement of the two circles consists of two disk regions and an annular region; choose the two disk regions, which are disjoint. This last choice is always possible for two disjoint circles and avoids any unnecessary nested filling. Call the chosen sphere disks E_P,E_Q. In a boundary collar S^2 times [0,epsilon), push the interiors of E_t into the positive collar coordinate using a function rho_t which vanishes exactly at its boundary and is positive in its interior. The graph p -> (p,rho_t(p)) is an embedded disk and meets the original boundary precisely in C_t. Because the E_t are disjoint, the pushed disks are disjoint. Prescribed inward collar germs can replace these graph germs in sufficiently small disjoint collars of C_t: in a normal cross-section they are arcs entering the same half-plane, and a small isotopy supported near C_t takes one such arc to the other, fixing its endpoint. Interpolate the positive collar coordinate outside that smaller neighborhood. This never meets another boundary face, because every interior point has strictly positive collar coordinate. Glue the resulting disks to R along its two distinct complete long-side intervals. The first gluing of a disk to a rectangle along a boundary interval gives a disk; attaching the second disk along the other boundary interval again gives a disk. The assumed collar compatibility makes the union embedded and allows rounding. All retained intervals were fixed pointwise during the inward construction. This proves the assertion.

The interiors of the disks lie in the interiors of the cut balls, where the regluing map is injective. The final hypothesis ensures that the boundary also stays embedded after regluing. The same proof works with a finite number of disjoint boundary circles: choose their sphere disks, possibly nested, and then choose positive collar heights with distinct ordered depths on every overlap. For the typeIII two-piece operation that extra construction is unnecessary.

## Exact interface with the positive band

Take the fixed positive band R_k={(z,ky,y): -1<=z<=1, -w<=y<=w}, k>0. Its long sides are A_P={y=w} and A_Q={y=-w}. Its short sides at the two longitudinal ends are c_U,c_O. The direct lemma applies if the actual cut-face walks supply C_P,C_Q with the following physical bank assignment at both ends:

| Actual long side | Underpass endpoint | Overpass endpoint |
| --- | --- | --- |
| A_P | u_P | o_P |
| A_Q | u_Q | o_Q |

The names P,Q must denote the *same actual side occurrences* at both ends. Renaming one end independently would alter this hypothesis. Once these curves are supplied, the explicit successor calculation in the original105 report applies to the constructed disk itself: U-minus -> c_U -> U-plus -> P -> O-minus -> c_O -> O-plus -> Q. All physical seam intervals in P,Q keep their successors. The lemma supplies the embedded body for this calculation directly.

This avoids a stronger and currently unproved assertion that an already chosen arc beta is relatively isotopic or bridged to the axis through the old-surface complement. Such an assertion includes relative arc class and strip-framing information that is absent from an abstract slit disk. The required local cap needs only the actual boundary cycles and collars above.

## What remains genuinely to construct

The lemma does not construct a_P,a_Q. The statement that the two walks stay on the same old-F side at each transition does not by itself show that each closes through the prescribed A_t on one cut-ball boundary sphere. Likewise, the ordinary dual graph being a tree does not identify the two bank copies at either endpoint. In particular, there is no legitimate inference from an abstract beta to the displayed table.

A finite sufficient certificate for the actual model is now precise: list each directed physical face occurrence in a_P,a_Q, with its successor across each edge; verify each occurrence lies on the specified cut-ball sphere; verify neither list repeats a point except its closing endpoint; verify the lists are disjoint; and verify their first and last endpoints are the indicated endpoints of A_P,A_Q. Alternatively an induction on *actual embedded* face substitutions may prove those four facts, provided its induction step states the physical face-copy maps and preserves the endpoint table. Such an induction is stronger than a statement about an unmarked abstract tree.

There is a concrete local obstruction test. In a face disk containing four protected endpoints, if the required a_P and a_Q endpoint pairs alternate around that face and both walks are required to remain inside that face, the two arcs cannot be disjoint. Indeed one proper arc cuts the disk into two disks, and alternation puts the endpoints of the second arc on opposite sides. This is a test of the actual face maps, not a counterexample to Kindred's normalized typeIII construction. A correct geometric normalization must make this obstruction absent or route the two walks through different physical cut-face copies. The endpoint list must exhibit which happens.

Thus the direct cap body is proved conditional on an explicit geometric input strictly smaller than the abstract bridge. Actual typeIII bank incidence is still owed. No conclusion that original105 is proved follows from this note.
