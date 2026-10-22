# Adequate diagrams minimize crossings: finite signed-graph proof

NEW author-stage coherent unit, FROZEN READY FOR FIRST INDEPENDENT REVIEW. The endpoint-smoothing calculation in §6 includes both new coauthor contributions before any review round. No canonical change or accepted-provider proof check. Full scope includes nonalternating and disconnected diagrams. AC_omega suffices for the retained diagram/isotopy interfaces; every graph calculation and every new choice below is finite.

Primary actually consulted: Thistlethwaite, *On the Kauffman polynomial of an adequate link*, Inventiones93(1988), printed286–290 and292–296, durable `thistlethwaite-1988-adequate.pdf` and corresponding rendered pages. This unit proves the finite ingredients; its theorem is not justified merely by citing the source's Theorem1 or Corollary3.4. The inaccessible Topology1988 article is not an input.

## 1. Statement and retained interfaces

Let D be an adequate finite nonempty link diagram with n crossings. Adequacy means both state tests in §3; no alternating or connected-shadow assumption is imposed. A zero-crossing diagram is allowed by vacuous extension of those tests. Let E be any finite diagram of the same oriented link, with m crossings. Then, writing Delta=w(E)-w(D),

`m >= n+|Delta| >= n`.

Directions on D may be chosen arbitrarily and transported to E through the link equivalence. The unoriented crossing-number conclusion follows as well: give an equivalence any transported component directions.

Retained declarations only: the Kauffman regular evaluation Lambda, its sum-skein, positive/negative curl factors A/A^-1, and F=A^-w Lambda invariant under finite oriented Reidemeister and planar moves; finite oriented Reidemeister equivalence; compact smooth isotopy extension; the elementary half-turn flype of `def-flype-crossing-ball-and-alternating-tangle-data` (Definition only, including arbitrary four-ended tangles and transported component directions); and the root-adopted general support primitive

`Lambda_D in Z[A^+-1,Z^+-1],  ±r+s<=c(D)`.

No bodies or status of these accepted suppliers are inspected. Standard finite disk/ball motions below explicitly give link equivalences; the retained finite Reidemeister interface and writhe normalization turn these into polynomial identities. For the new sweeps one may first straighten the finitely many crossing charts and approximate the intervening disjoint edge strips by sufficiently fine rational polygonal graphs, preserving each local cyclic order, over/under label and chosen collar. Disjoint-strip transverse interpolation is a planar isotopy. Round the corners away from the protected charts. Thus every sweep can be performed on finitely many polygonal edges, with a small finite generic perturbation avoiding the finitely many vertex/edge coincidences; only finitely many local events occur. No infinite generic-isotopy or unrestricted transversality selection is used.

For a c-crossing diagram put

`Phi_D^+(t)=sum_r [A^r Z^(c-r)]Lambda_D * t^r`,
`Phi_D^-(t)=sum_r [A^(-r) Z^(c-r)]Lambda_D * t^r`.

Support implies r>=0 in either sum. These are finite ordinary polynomials. They can be nonzero only when the respective support maximum reaches c. The construction does not assume coefficient positivity.

## 2. Finite plane-graph conventions

For a connected diagram shadow checkerboard-color its complementary regions. The black graph G has a vertex in each black region and an edge through each crossing. Loops and parallel edges are retained. An edge is positive if the local +state smoothing joins its two black sectors, and negative if that smoothing joins its two white sectors. This fixes signs by the actual state chart rather than by oriented crossing sign. Switching a crossing reverses its graph sign. Interchanging the colors exchanges the two plane duals and reverses all signs.

Let G+ contain every vertex and only positive edges. Let barG- have one vertex for each component of G+, and the negative edges with their induced endpoints. This is the graph obtained by collapsing the positive components, retaining a negative loop whenever both endpoints were in one component. G- and barG+ are defined with signs reversed. Essential means neither loop nor bridge in the graph explicitly named. Connectedness of G ensures barG- and barG+ are connected; G+ or G- may be disconnected.

Deleting or contracting an essential edge in G preserves connectedness. A nonloop contraction creates no bridge among remaining edges and turns an edge into a loop only when its endpoints were the contracted endpoints. An old bridge other than the contracted edge stays a bridge; an old loop stays a loop. Deleting an edge cannot create a new cycle. These statements follow either by mapping paths/cycles through the contraction or by examining the two components after removing a bridge.

A crossed edge is nugatory exactly when it is a loop or bridge in G. If opposite same-color sectors form one region, a simple arc in that region closed through the crossing gives a circle meeting the shadow there alone. Conversely the punctured nugatory circle lies in one region. In the other color this is the plane-dual loop/bridge criterion. This argument permits arbitrary tangle contents on either side of the circle.

A nugatory crossing can be untwisted: take its separating circle, enlarge its two lobes slightly to tangle balls, and turn the enclosed tangle ball through a half-turn, carrying all its contents. The connecting strands straighten except for the isolated kink. The two branches at every crossing wholly inside the turning ball are reflected in projection and interchanged in height, so their oriented signs are unchanged; only the removed crossing changes writhe. Hence if N is the diagram with this crossing removed,

`Lambda_D=A^epsilon Lambda_N`, epsilon=+1 or -1.

The sign is the oriented sign of the isolated kink. In the sign convention above a positive bridge or negative loop is a negative kink; a positive loop or negative bridge is a positive kink. These four cases are obtained by connecting the opposite sectors in the local state chart, not by treating graph sign as writhe.

If both outer polynomials of N vanish, inserting either kink preserves both vanishings at the new crossing count: every old exponent has both weights <=c(N)-1; multiplication by A^epsilon raises either weight by at most1, whereas the new crossing count is c(N)+1.

## 3. State circles and the exact adequacy test

The +state consists of boundaries of a small planar regular neighborhood of G+. Indeed at a positive edge its neighborhood band connects black vertex disks; at a negative edge there is no band and the two black-sector boundaries remain separate. For any finite planar graph H, the number of boundary circles of its regular neighborhood is

`b(H)=2p0(H)-|V(H)|+|E(H)|=p0(H)+p1(H)`.

Proof: each component neighborhood has genus zero and retracts to that component. Sum the identities 2-b=|V|-|E| over the components. This is also a direct finite disk-and-band calculation.

At a positive edge e, removing its band joins two boundary circles exactly when e is not a bridge; if e is a bridge it splits one boundary circle. At a negative edge e, adding its band joins two boundary circles exactly when its endpoints are in different positive components; if the endpoints are in the same planar component it splits one boundary circle. These conclusions also follow immediately by the changes in the displayed formula for b(H).

Thus the requirement that the two segments of each smoothing belong to DIFFERENT state circles is exactly

`+adequate <=> G+ has no bridge AND barG- has no loop`.

The -state gives, by reversing signs,

`-adequate <=> G- has no bridge AND barG+ has no loop`.

Switching ANY edge of a +adequate graph makes it +inadequate. For a positive e, the positive path avoiding e exists because it is not a bridge, so after switching e it is a negative loop in the positive-component quotient. For a negative e, its endpoints belonged to different positive components; switching it adds a bridge between them. The sign-reversed assertion holds for -adequacy. This proves the source's Proposition6 locally.

## 4. Finite Tutte polynomial, with the needed nonvanishing proved

For any finite graph H, including disconnected graphs and isolated vertices, let r(S)=|V|-p0(V,S) and define

`T_H(x,y)=sum_(S subset E) (x-1)^(r(E)-r(S)) (y-1)^(|S|-r(S))`.

Isolated vertices do not affect this value. Partition the subsets according to whether e belongs to S. If e is a loop, ranks are unchanged by adjoining e and the paired terms add a factor y. If e is a bridge, every full-edge rank gains one from e; pair the two subset classes to obtain factor x. If e is essential, ranks in the class containing e are ranks after contraction plus1, and ranks in the other class are those after deletion. Consequently

`T_H = y T_(H\e)` for a loop,
`T_H = x T_(H/e)` for a bridge,
`T_H = T_(H\e)+T_(H/e)` for an essential edge.

The edgeless value is1. This also proves by induction that every coefficient is a nonnegative integer. The subset formula shows multiplicativity under disjoint union and one-vertex join, since the subset ranks and nullities add.

A bridge forces T_H(0,t)=0, and a loop forces T_H(t,0)=0. Conversely suppose H has no bridge. If all edges are loops its value at (0,t) is a power of t. Otherwise contract an essential edge; the result remains bridgeless. By induction its value at (0,t) is nonzero. In the recurrence it is added to a polynomial with nonnegative coefficients, so T_H(0,t) is nonzero. For a loopless H use deletion of an essential edge instead; deletion preserves looplessness, and a forest has value x^|E|. Thus

`T_H(0,t)!=0 <=> H has no bridge`,
`T_H(t,0)!=0 <=> H has no loop`.

No spanning-tree-activity theorem, chromatic-polynomial theorem, or external positivity result is needed.

## 5. The outer-coefficient calculation to prove

For every connected diagram with at least one crossing, the target identities are

`Phi_D^+ = T_(G+)(0,t) T_(barG-)(t,0)`,
`Phi_D^- = T_(G-)(0,t) T_(barG+)(t,0)`.

The circle case, used by induction, has Phi+=Phi-=1 and both graph products1.

Since smoothing removes one crossing and the skein contributes one factor Z, the sum-skein gives the EXACT outer relation

`Phi_D^epsilon + Phi_(Dsw)^epsilon = Phi_(D0)^epsilon + Phi_(Dinfty)^epsilon`, epsilon=+ or -,

whenever both smoothing shadows are connected. This is a direct coefficient extraction at the respective crossing counts; no leading-term approximation or positivity of Lambda is assumed.

The proof uses the simultaneous bridge-vanishing calculation proved in §6, then the fully explicit signed-graph induction in §§7–8. The source's name for §6 is Proposition4; its actual finite replacement construction is included here.

## 5A. Actual two-ended skein factorization for the local calculation

Integrated new contribution by top_local_homeomorphism_deformation before any independent review; this is part of this SAME unit, not a separately assumed supplier. The contribution does not infer commutativity of arbitrary four-ended tangles.

### A. The operator being scalarized has TWO ends

Let B be a diagram disk with exactly TWO marked boundary points and fixed disjoint radial endpoint collars. Let T be a finite framed unoriented tangle in B times an interval, with exactly one open arc and any number of closed components. All strands and framings agree with the prescribed crossing-free collar germs. Let c be an outside planar cap disjoint from B, carrying the corresponding blackboard framing. Write cap(T)=T union c. In an arbitrary external diagram E with the same two collar germs, denote gluing by E[T] and replacement of T by the standard straight arc by E[I]. Then

    Lambda(E[T]) = Lambda(cap(T)) Lambda(E[I]).          (1)

This is an equality for each ACTUAL external tangle and fixed cap framing. It says nothing about arbitrary FOUR-ended tangles commuting or being scalar. Closed components of T are included in cap(T), rather than discarded.

### B. Finite relative descending calculation proving (1)

Temporarily orient the open arc from the first marked end to the second, choose an ordering and a basepoint on each closed component, and traverse the open arc first. At a crossing call the first-encounter-over assignment descending. Expand at a first bad crossing using

    T = Z T0 + Z Tinfinity - T_switch.

The two smoothings have fewer crossings; the switched term has the same crossings but one fewer bad first encounter, with the fixed traversal retained. For the smaller terms restart the finite ordering as necessary. Induct lexicographically on crossing number and number of bad crossings. This produces a FINITE linear combination of descending framed two-ended tangles. Coefficients lie in the declared Laurent ring; no division or infinite series occurs. At every step the operation is inside B and fixes its boundary collars.

Here is the relative open-arc base rather than an inference from a closed-knot isotopy. Make the radial endpoint collars so short that their planar neighborhoods miss every other strand and every self-crossing. On the intervening open arc parameter t choose a strictly decreasing positive height H-h*t, with its entire range above all other components. Join to the unchanged endpoint germs by two ramps in those disjoint endpoint neighborhoods. At each self-crossing first-encounter-over means exactly that the original two heights have the same strict order as this new height. At each crossing with another component the open arc is over, because it is traversed first. Linear interpolation of the heights therefore gives embeddings and preserves the fixed endpoint collars. No new intersections occur at the ramps, whose planar neighborhoods are disjoint from the rest.

Keep these strictly ordered interior heights and deform the planar open path to a standard simple path in the disk with the two small boundary collar notches removed. That region is a disk. A finite triangulation gives a finite polygonal path homotopy relative its endpoints by elementary triangle moves; no limit of path moves is needed. During this homotopy equal projected points on the interior arc have different heights. The path avoids the ramp neighborhoods, and its heights stay above the closed components. Thus every intermediate spatial arc is embedded, with fixed endpoint collars. Once its projection is simple, restore the standard height profile; its image can then be carried to the standard relative straight arc. This is a compact isotopy of the actual open core.

Carry the ribbon framing in this isotopy. On the final straight core its normal line, relative to a fixed trivialization and the fixed endpoint framings, has an integer twist. The integer is obtained by lifting its angle on finitely many overlapping semicircle charts; it is not assumed to vanish. Homotoping that lifted angle relative its endpoints concentrates the twist into finitely many standard signed curls. The curl relation contributes A^f for the resulting signed integer f. Thus the relative core simplification does not silently lose a framing factor.

The closed components remain descending in their finite order. First put the now-simple open arc in a thin boundary collar of the diagram disk, fixing its endpoint germs. Such a collar can be chosen disjoint from all closed projections, since those are compact in the disk interior. All closed projections then lie in a smaller interior disk. Separate the closed components into finitely many height slabs there: for components i<j the mixed crossing difference is positive and stays positive on adding increasing separated offsets, exactly because the traversal encounters i first. The chosen slabs and all their traces stay in a bounded interior cylinder. Map the interior planar disk orientation-preservingly to R2 and each open height slab increasingly to R; this preserves every crossing order and based descending condition. Make the projected code rational by small disjoint crossing-disk and edge-strip polygonal adjustments, fixing its basepoint interval. These are finite planar isotopies preserving the encounter data. Apply ONLY the declared rational one-component descending theorem to obtain that this component is an unknot, and the declared finite oriented Reidemeister theorem to obtain a finite sequence to a circle. Each ball-supported move and compact-trace planar/lift adjustment in this R3 chart has compact support. Pulling this finite sequence back into its own interior slab and extending by the identity therefore fixes the open arc, all other slabs and the boundary collars. The resulting circles have the carried integer framing; concentrate each framing in signed curls as for the open arc. Thus every closed component contributes its circle factor delta and a curl factor. This gives the actual relative descending base without assuming that an arbitrary closed-knot isotopy fixes an outside cap or stays in the tangle ball.

Consequently each descending term is a scalar q times I in EVERY outside context. Apply the identical finite expansion with the outside cap c. Since cap(I) is the zero-framed unknot with value1, the resulting scalar is precisely Lambda(cap(T)). Applying the expansion in E proves (1). This proof never caps an arbitrary open-arc isotopy and then assumes its cap was fixed; the fixed-collar open isotopy was constructed first.

### C. Nugatory-crossing operator without lobe turnover

At an actual nugatory crossing z, cut on its separating circle and choose the two diagram lobe disks. Each contains an arbitrary TWO-ended tangle T or U, possibly with closed components; choose the two crossing-free caps from the corresponding boundary intervals. Number the four halfedges at z cyclically 0,1,2,3. The crossing strands join opposite pairs (0,2) and (1,3). After a possible cyclic relabeling the two lobe disks attach on the ADJACENT pairs (0,1) and (2,3); the other possible adjacent partition is obtained by shifting all labels once. Their flat caps join exactly those same adjacent pairs. Endpoint framings are the carried blackboard collars, and the outside caps have no crossings or added full twists. The crossing outside these disks joins the two open arcs in precisely this marked pattern. Scalarize T by (1), retaining U as the external tangle. The two straight strands now exhibit a literal isolated curl at z. Its sign epsilon is read from that actual local chart, with an arbitrary orientation of the resulting component; it is +1 or −1. Remove that curl and then scalarize U. This gives the exact identity

    Lambda(N_z(T,U))
       = A^epsilon Lambda(cap(T)) Lambda(cap(U)).       (2)

No rotation of an arbitrary tangle lobe is used. The cap pairings in (2) are the pairings on the TWO separate sides of the nugatory circle; they are not an arbitrary smoothing of a four-ended tangle. This also proves that any diagram differing by a spatial turn of a whole capped lobe has the same scalar: a rotation carries the cap and its framing, and the local evaluation contains no unresolved boundary operator. It does not assert equality of turned and unturned FOUR-ended operators.

For several nugatory crossings apply (2) successively. The result is a product of flat capped-lobe polynomials multiplied by A^e, where e is the sum of the actual local curl signs. This is a finite operation. It remains valid if different factors have closed components, since the two-ended cap evaluation already includes them; there is no additional delta inserted between connected-sum factors.

### D. Exact outer-weight bookkeeping

Let a smoothing of x have c crossings. Suppose its successive nugatory scalarizations give

    Lambda(D_smooth)=A^e Lambda(L) product_j Lambda(M_j),

where the flat capped factors have respectively m and q_j crossings, and k nugatory crossings were removed. The caps are crossing-free, hence

    c=m+sum_j q_j+k,       |e|<=k.

Assume the ACTUAL flat capped factor L satisfies both strict support bounds at its own count m, for example by the Proposition4 induction once its bridge and alternating-switch property have been physically earned. Since the exponents are integral this means

    max(r+s on L)<=m-1,
    max(-r+s on L)<=m-1.

General support gives the respective maxima on M_j at most q_j. Polynomial products add the bounds; multiplying by A^e changes the two weights by e and −e. Therefore each weight on D_smooth is at most

    m-1+sum_j q_j+|e| <= c-1.

Both outer polynomials of D_smooth vanish. This proves the exact shift statement needed to reinsert ALL nugatory curls, not merely a formal invariance under unknotting a lobe. Possible cancellations only improve the bound. No positivity hypothesis or scalar division is used.


## 6. Long-bridge vanishing: finite geometric calculation

Input: connected REDUCED D with an overbridge beta of length l>1 such that switching one alternating parity class of its crossings gives an alternating diagram. A bridge is an arc whose crossing encounters are all overpasses; if an entire component has this property the bridge may be a closed overpassing component. The assertion is Phi_D^+=Phi_D^-=0.

### Maximal-switchable base, earned here

Extend beta along an endpoint whenever the next undercrossing can be switched without changing an already traversed overcrossing of beta. Each such step adds a crossing to the bridge; there are finitely many crossings. A maximal result either is a closed overpassing component or an endpoint next runs UNDER a crossing already on its own overpassing part.

For a closed overcomponent its planar curve is simple (self-intersection would require one under-encounter). Lift it above all other strands, cap it in that upper half-space and shrink it to a small horizontal circle. This removes its crossings with the remainder. There were at least two: a closed planar curve has even intersection with every other component. No self-writhe changes and the mixed crossing signs cancel in pairs, so this gives an equivalent diagram of smaller crossing count with the SAME writhe.

For a blocked endpoint, its under-return to its own overpassing part bounds a simple projected loop: its intervening bridge arc has no self-intersection. Move that loop above the rest, span it by the horizontal disk, and shrink it to a small curl at its attachment. Throughout, the disk and loop may be chosen higher than every other strand except the fixed attachment collar. The two external attachment germs lie on the same side of the disk boundary (the loop uses two adjacent halfedges of the return crossing). Therefore their oriented algebraic intersection with the rest of the loop boundary is zero. Each other closed component also has algebraic intersection zero. Thus the crossings removed away from the return crossing have total writhe zero. Retaining the small curl with the return crossing's sign preserves total writhe.

If there were no other boundary crossing the return crossing would have been nugatory in D, contrary to reducedness. There are an even positive number of such crossings, by the same attachment-side parity argument. Thus even after retaining the curl the new diagram has strictly fewer crossings. The cap motion is an explicit compact embedding isotopy; finite Reidemeister equivalence and F normalization give exactly the same Lambda for the smaller diagram. Its general support is strictly inside BOTH old outer lines. This proves simultaneous vanishing in the maximal case without a citation to the inaccessible paper's Fig3.

### Opposite parallel crossing pair: actual elementary flype and RII word

This row uses the declared elementary flype definition only, not the flyping theorem. Its explicit p,q annular binding was checked by the geometric coauthor before the unit's first independent review.

Suppose reduced crossings x,y are parallel in the black checkerboard graph and have opposite graph signs. Their opposite black regions are the same two DISTINCT regions U,V. Join the x-sector to the y-sector by an embedded arc in U, and do the same in V, choosing the arcs along the same side of the embedded two-edge cycle x union y. The arcs are disjoint because the regions are disjoint. In a tiny disk about y connect their ends around one white quadrant. This connector crosses exactly the two adjacent y half-branches bounding that quadrant. Close through x across its opposite black sectors. The resulting embedded circle C meets the diagram exactly at the crossing x and at those two ordinary points near y. This is an ACTUAL flyping circle, irrespective of arbitrary graph/tangle contents on either side.

Name p,q the two ordinary C-intersections on the adjacent y-arms bounding that white quadrant. Keep FIXED the complementary tangle disk K containing y. Choose the annulus sufficiently thin near p,q that its two arm rectangles and the quadrant between y,p,q are empty. Use the elementary half-turn flype on the OTHER disk T, moving x onto the alternate annular crossing pair, which is precisely p,q. An isotopy inside the empty collar places the transferred x immediately outside that quadrant. The two short arm segments from x to y now bound an EMPTY WHITE BIGON; every arbitrary tangle content stays on the other side of the annulus. T is carried as a whole, not commuted as a scalar, and its component directions are transported.

Here is the actual two-chart check, labeling bigon sides a,b. If s(x)=+, their statuses at x are (O,U). At y, sign + gives (U,O), whereas sign - gives (O,U). Thus opposite signs give (O,O) on one whole side and (U,U) on the other: exactly RII. Exchange all heights for s(x)=-. No alternating hypothesis on T or K is involved. Apply RII; the crossing count falls by two.

The half-turn reflects the projected tangle and reverses all its crossing heights, so each transported oriented internal crossing sign is unchanged. At the transferred crossing use the crossing-ball half-turn chart: its projected tangent determinant is reversed exactly when its over/under height ordering is reversed, so its determinant crossing sign is unchanged as well. The final RII pair has opposite oriented signs. Consequently the new diagram has the same writhe and the same Lambda by finite Reidemeister/F normalization. The general support bound at count n-2 makes BOTH old outer polynomials vanish. The white-graph/dual version is identical with colors exchanged. This proves the required reduction without assuming arbitrary four-ended scalarity.

### Inductive endpoint calculation and the finite flat-block word

Order complexity by (n,k), where k is the least number of endpoint switches extending the bridge to a maximal switchable one. A next under-encounter x outside the bridge can be switched to over, extending beta by one; a first step of a shortest such sequence drops k. The alternating switch parity extends across x: the old final beta encounter is OVER in the alternating assignment (x is outside the switch set and UNDER), so x is the new switched entry. The changed diagram Dsw has the same reduced shadow. The complexity induction makes both its outer polynomials zero.

For either smoothing of x let E have n-1 crossings. Since x was nonnugatory, deletion and contraction of its essential checkerboard edge both preserve connectedness. Let A be the alternating diagram obtained from D by switching J, the chosen parity on beta. Smoothing x in A is alternating: the two branches at x have opposite statuses, their neighboring encounters have the respective opposite statuses, and either smoothing joins a neighbor of an OVER branch to a neighbor of an UNDER branch. Thus switching the inherited J on E produces an alternating diagram A_E.

A connected alternating diagram has uniform checkerboard sign sigma. This follows in the crossing chart along every intervening diagram edge: opposite encounter statuses at the two ends give equal checkerboard signs. Connectedness propagates this to all nodes. The x crossing is outside J and has sign sigma. Every remaining crossing outside J has sign sigma; each J crossing has sign -sigma.

Let Q be ALL crossings newly nugatory after smoothing x. In a contraction smoothing the new loops are exactly the edges parallel to x; no bridge is created. In a deletion smoothing the new bridges are exactly edges y for which {x,y} is a two-edge bond; in the dual these are parallel to x. No old nugatory crossing was present in reduced D. Thus every member of Q is parallel to x in ONE fixed color.

If ANY y in Q belongs to J, its graph sign is -sigma, opposite to x. The actual elementary-flype/RII row above makes ORIGINAL D equivalent with the same Lambda to a diagram with n-2 crossings. Its general support immediately kills both outer polynomials of D, and this finishes this induction instance without needing either smoothing. This is the source's nonneighbor row replaced by an explicit finite move. Otherwise Q is disjoint from J; all cuts are unswitched and have sign sigma.

If Q is empty, E itself is reduced and still contains beta and all of J; the smaller-crossing induction applies. Suppose Q is nonempty. Resolve all of its nugatory cuts by the exact two-ended scalarization in §5A. The cut incidence graph is a finite tree: each separating circle splits one present piece into two, with the associated two adjacent-port flat caps. A final block is reduced, since any circle witnessing a nugatory crossing there extends across the connected-sum attachments to such a circle in E. Hence it would have belonged to Q and been cut already.

The beta arc crosses a cut only at its OVER visit, never at the UNDER visit; it uses each cut edge of the tree at most once. A tree walk with no repeated edge cannot revisit a vertex. Thus each active block contains ONE contiguous original beta fragment, and all inherited J crossings in that block lie on that one fragment. All other blocks contain no J. At any cut the actual cap pairs adjacent half-branches, one OVER arm and one UNDER arm. In the alternating A_E the two capped lobe words have seams OVER-to-UNDER, so each capped switched block remains alternating. These statements justify the port data without turning any arbitrary tangle lobe.

First cut passive Q crossings outside beta. Their passive lobe contains no beta crossing or J switch; retain its actual capped polynomial as a factor. The active diagram retains beta unchanged. This cannot create an unlisted nugatory crossing: its separating circle could be extended across the capped attachments to a nugatory circle in E. Continue with the Q crossings on beta. If none remain, the reduced active block contains the original length-l bridge and exactly J, so the smaller-crossing induction gives both strict support bounds on that block. The factor-count calculation in §5A then gives the strict bounds on E.

Otherwise list the beta cuts in increasing beta order. They all lie outside J, so their indices have the same parity as the final beta crossing z=b_l (z is outside J because its next encounter x is UNDER in A). If the last cut is not z, the terminal block retains the beta suffix after that cut, of positive EVEN length at least two. Its inherited J is exactly the alternating parity on that suffix. No cap extension is needed: this reduced block already meets the smaller-crossing hypothesis.

It remains that z is a cut. If it is the only beta cut, write its actual directed visit word

`z_OVER U z_UNDER V`.

The beta prefix b1,...,b_(l-1) lies at the END of V. The flat cap of V joins that end to the START of V, the z-under continuation on the SAME side of the cut. All prefix crossing occurrences lie in that lobe: a nugatory cut cannot interlace them, and beta has no second, UNDER visit at any cut. Follow this continuation to its first surviving crossing c.

If c is a beta UNDER visit, the physical crossing-free connector is the return case below. If c is a beta OVER visit, the one-fragment property forces the cap to close precisely that prefix to an over-only component, also handled below. Otherwise c is off beta and unswitched. Since z was unswitched, the alternating seam gives c OVER in A_E, hence OVER in E. The capped block therefore has the actual bridge

`b1,...,b_(l-1),c`,

of length l, with J on its alternating entries and c unswitched. In particular l=2 is retained. All block switches are on this bridge.

If there are at least two beta cuts and the last is z, take an internal active block between consecutive cuts. Its surviving beta fragment is ODD and nonempty, begins and ends with J entries, and contains every J switch of that block. At its right cut y the flat cap again pairs the fragment's terminal OVER arm with y's UNDER continuation inside that same block. Follow this continuation before removing any further encountered cut. A beta UNDER visit, including an under-visit at another pending cut, is the physical return case. A beta OVER visit would, after the caps, close this one fragment into an over-only component. That is impossible here: its length is odd, while a closed over-only component has no self-crossings and has even planar intersection with the remaining closed diagram. Thus the first surviving next crossing c is off beta, unswitched and OVER by alternation at the unswitched cut y. It is not another removed crossing: passive off-beta cuts were already factored and an encountered beta cut is one of the two explicitly tested beta-visit cases. The reduced block has bridge

`[the odd nonempty beta fragment], c`,

of even length at least two. Its switch set is exactly the alternating entries on that bridge. This proves the required smaller-block hypothesis without claiming that a whole turned diagram preserves the original length l.

### Return and closed-overcomponent alternatives

The return test is on an ACTUAL diagram factor before the pending cut is removed. It is a crossing-free diagram arc joining UNDER occurrences of two beta crossings. The beta subarc between the corresponding OVER occurrences is simple in projection; otherwise beta would have an UNDER encounter. Together they bound the bridge-return disk. Lift the beta side above every strand, move it across this disk to a parallel copy of the connector, and remove the endpoint pair by RII. Other strands in the disk stay below this moved side; their crossings disappear in RII pairs, and crossing a vertex of the rest gives an RIII event. A finite generic polygonal sweep subdivided at the finitely many vertices/edges produces a finite movie. The two endpoint crossings have opposite oriented signs. There is no RI change, no framing correction, and at least two crossings disappear. General support therefore makes BOTH outer bounds of this actual factor strict. The same argument applies if one endpoint is a cut about to be scalarized; it is tested before that scalarization.

For the closed-overcomponent alternative, lift its simple projected circle above all other strands and shrink it into a crossing-free disk. It has a positive even number of mixed crossings and no self-crossings; the mixed signs cancel by planar algebraic intersection. Its zero self-framing is retained. The finite disk sweep uses RII/RIII as above and removes at least two crossings without changing Lambda. This makes the factor's two bounds strict. The possibility is needed only in the one-cut row; an odd internal fragment cannot be such a component.

Every chosen strict block has fewer crossings than D. All remaining blocks, with all their closed components retained, satisfy the general support bound. If q cut crossings were scalarized, their exponent sum e obeys |e|<=q and the block crossing counts sum to c(E)-q. The exact §5A multiplication inequality therefore makes BOTH bounds of E strict at n-1. The two smoothing terms multiplied by Z are consequently strict at n, and Dsw was already strict at n. The outer skein relation proves the two vanishings for D.

The argument is finite in (n,k), uses the two actual adjacent-port caps and the explicit overbridge sweeps, and invokes no global flyping theorem. Its only elementary flype is the single local circle construction above, followed by a literal RII pair.

## 7. Inadequacy implies one-sided vanishing

We prove Phi+=0 when the connected graph is +inadequate; reverse signs for Phi-. Let k be the number of positive edges essential in the FULL graph G, and induct on k.

If k=0, every positive edge is a loop or bridge in G. Inadequacy forces a positive bridge in G or a negative loop in G. Indeed a positive bridge in G+ is either already a bridge in G or would lie on a cycle with a negative edge; a negative edge with its endpoints joined by positive edges would close such a cycle, making a nonloop positive edge essential in G. With k=0 this is impossible. Thus either witness is the actual negative nugatory kink of §2. Removing it gives Lambda=A^-1 Lambda_N at n-1 crossings, whose general support has +weight at most n-2. Hence Phi+=0.

If k=1, first untwist all nugatory crossings. A negative kink immediately forces Phi+=0 by support. Otherwise all removed kinks are positive and may be reinserted at the end; positive insertion multiplies the outer polynomial by t. The reduced remaining graph has exactly one positive edge e, and every other edge is negative. Switching e gives the uniform-sign alternating diagram: tracing either strand through a crossing and the next edge shows that the fixed checkerboard sign forces consecutive over/under alternation. At the branch changed from under to over, the neighboring encounters in the uniform-sign alternating assignment were over. At least one is a DISTINCT crossing: if both neighbors were the other branch of e, that component would contain no other crossing, and connectedness would make e nugatory. Any neighboring encounter which is the other branch of e is now under and terminates the bridge; a distinct neighboring encounter remains over. Thus there is a bridge of length two or three through the changed branch. If the same distinct neighbor would be traversed again, these two over-encounters instead form a closed overcomponent. In each case changing precisely the alternating parity containing e restores the uniform-sign alternating assignment on the chosen bridge. The reduced diagram therefore meets §6. Its two outer polynomials vanish, hence so does Phi+ before the positive kink reinsertions. This earns the source's k=1 bridge identification rather than asserting a length-three bridge in every multigraph case.

For k>1, choose a positive edge e essential in G. If some such e is also essential in G+, choose it. Deleting e from G+ does not change its connected components. Therefore a negative edge whose endpoints were positively connected remains so, unless a positive bridge already witnesses inadequacy; that bridge stays a bridge under deletion or contraction of the different cyclic edge e. Hence switching e, deleting e or contracting e all preserve +inadequacy. All full diagrams remain connected, and the number of positive edges essential in the full graph decreases: contraction/deletion cannot turn an old loop or bridge into a new essential edge, and e itself is gone from the positive set.

If instead all k chosen positive essential edges are bridges of G+, take any one e. Switching e makes its endpoints disconnected in G+ with e removed; since k>1, another positive bridge remains. Deletion or contraction of the distinct bridge e also leaves that other positive bridge. Thus each of the three descendant signed graphs is +inadequate, connected, and has smaller k. The outer skein relation and the induction give Phi+=0. Together with the finite bridge calculation in §6 this proves the source's Proposition5.

## 8. Signed-graph product identity

Induct on the number of crossings/edges, simultaneously for all connected signed graphs. If D is +inadequate, §7 makes the left side zero. The §3 criterion and §4 factors make the right side zero as well.

Suppose D is +adequate. If neither G+ nor barG- has an essential edge, G+ consists only of positive loops and isolated vertices (a bridge is forbidden); barG- is a tree/forest of negative bridges (a loop is forbidden). Thus the full connected G is a tree of negative bridges with positive loops attached. Successive nugatory untwistings leave a circle. Every removed crossing is a POSITIVE kink by §2. If there are p positive loops and q negative bridges, Lambda=A^(p+q), and Phi+=t^(p+q). The two Tutte factors are respectively t^p and t^q, as required.

Otherwise first suppose an essential edge e occurs in G+. It is also essential in G, so both smoothing diagrams are connected. The switched graph is +inadequate by §3; hence its Phi+ is zero by §7. The two smoothing plus-graphs are G+\e and G+/e, while their negative quotient graphs are both barG-. Positive connectivity is unchanged because e belonged to a positive cycle. Outer skein and the edge-count induction give

`Phi_D^+ = [T_(G+\e)(0,t)+T_(G+/e)(0,t)] T_(barG-)(t,0)`,

which is the desired product by the essential-edge recurrence.

If an essential edge e occurs instead in barG-, it is a negative edge joining different positive components and lies on a quotient cycle. It is essential in G as well. Switching it adds a bridge to G+ and makes the switched diagram +inadequate. The negative quotient graphs for the two resolutions are barG-\e and barG-/e. The positive graph is either unchanged or formed by joining the two formerly distinct positive components at one vertex. Tutte multiplicativity for a one-vertex join, proved in §4, makes both positive factors equal T_(G+). Apply the same outer relation and the quotient recurrence. This proves the +identity. Reverse signs to prove the -identity; the entire geometric vanishing input was simultaneous in the two outer weights.

By §3, an adequate connected diagram has both products nonzero by the exact nonvanishing criteria of §4. This includes every nonalternating sign pattern satisfying the state tests.

## 9. Disconnected diagrams and the final crossing obstruction

The universal scalar evaluation is multiplicative on disjoint split diagrams: fixing E, the function P(D disjoint E) satisfies the same skein/curl/circle relations in D with initial value P(E); uniqueness/linearity of the declared scalar evaluation gives P(D disjoint E)=P(D)P(E). After dividing by d and applying the conversion signs this gives

`Lambda_(D disjoint E)=delta Lambda_D Lambda_E`, delta=(A+A^-1)/Z-1.

No division by a new polynomial or assumption of Laurent divisibility is introduced; Laurentness is the adopted support primitive. Disjoint planar shadow pieces, including nested pieces, represent a split placement: lift each piece to a separate horizontal slab, move its compact projection horizontally, then lower after the projections are disjoint. This finite embedding isotopy preserves all internal crossings and writhe. Thus the same identity applies to arbitrary disconnected shadows.

Let the shadow have h connected pieces D_i, allowing zero-crossing circles. Adequacy is componentwise because state circles from distinct shadows cannot join under any smoothing. The +outer part of delta is t-1 and the -outer part is also t-1, in the respective variables. General support for each factor implies

`Phi_D^epsilon=(t-1)^(h-1) product_i Phi_(D_i)^epsilon`.

Each nonzero-crossing adequate piece has nonzero factors by §8; a circle has Phi+=Phi-=1. Their product with (t-1)^(h-1) is nonzero in Z[t]. Hence BOTH support maxima of an arbitrary adequate D are exactly n. For n=0 this conclusion also follows directly from delta^(h-1).

Finally F-equivalence gives Lambda_E=A^Delta Lambda_D. A coefficient attaining r+s=n in D yields a nonzero coefficient of +weight n+Delta in E; one attaining -r+s=n yields one of -weight n-Delta. Multiplication by a single A-power cannot cancel either coefficient. The general m-crossing support bound forces

`m>=n+Delta` and `m>=n-Delta`, hence `m>=n+|Delta|`.

This supplies the adequate, possibly NONALTERNATING, minimality input required for pure doubles. It supplies neither the pure-double adequacy construction nor MT's rigid-vertex/Conway transport. No full flyping closure is claimed.


## Author freeze and review boundary

This single coherent unit was completed and frozen before its FIRST independent review. The earlier author HOLD was the actual Fig5b port and Fig5a reduction boundary, not a consumed review/repair cycle. New pre-review contributions are integrated in full: top_local_homeomorphism_deformation supplied the actual two-ended skein calculation; flyping_composite supplied the flat-cap block word; character_surgery_repair supplied the opposite-parallel elementary-flype/RII reduction and the overall algebra/integration. Both contributors checked the exact p,q endpoint row as COAUTHORS, not independent reviewers.

The source's stronger assertion of an equally long bridge after a whole-lobe untwist is not assumed. The proof instead uses an actual smaller flat capped block, explicit two-ended evaluation and one elementary flype at the specified circle. The full flyping theorem is nowhere used. No 1988 Topology proof-reading claim is made. The unit is author-complete but NOT independently accepted until root binds the frozen input and the appointed reviewer completes its first review. No review has yet occurred and no repair round is consumed.
