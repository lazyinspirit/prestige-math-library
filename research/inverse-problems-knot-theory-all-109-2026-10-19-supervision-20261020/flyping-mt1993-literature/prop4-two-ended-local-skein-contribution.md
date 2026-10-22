# Proposition4 contribution: exact two-ended local operator and weight shift

NEW author-stage contribution for integration into the SAME adequate-minimality unit before its first review. This is not an independent helper pipeline or a completed Fig5b bridge proof. Actual primary printed292–294, including the full Proposition4 hypotheses, both paragraphs on new nugatory crossings and Figure5a,b, were visually read.

Only declared Kauffman relations are used: crossing sum `g+g_switch=Z(smoothing0+smoothing1)`, curls A and A^-1, circle value `delta=(A+A^-1)/Z-1`, unknot value1, and framed Reidemeister/ambient equivalence. The accepted general support bound is used only at statement scope. No accepted proof is checked.

## 1. The operator being scalarized has TWO ends

Let B be a diagram disk with exactly TWO marked boundary points and fixed disjoint radial endpoint collars. Let T be a finite framed unoriented tangle in B times an interval, with exactly one open arc and any number of closed components. All strands and framings agree with the prescribed crossing-free collar germs. Let c be an outside planar cap disjoint from B, carrying the corresponding blackboard framing. Write cap(T)=T union c. In an arbitrary external diagram E with the same two collar germs, denote gluing by E[T] and replacement of T by the standard straight arc by E[I]. Then

    Lambda(E[T]) = Lambda(cap(T)) Lambda(E[I]).          (1)

This is an equality for each ACTUAL external tangle and fixed cap framing. It says nothing about arbitrary FOUR-ended tangles commuting or being scalar. Closed components of T are included in cap(T), rather than discarded.

## 2. Finite relative descending calculation proving (1)

Temporarily orient the open arc from the first marked end to the second, choose an ordering and a basepoint on each closed component, and traverse the open arc first. At a crossing call the first-encounter-over assignment descending. Expand at a first bad crossing using

    T = Z T0 + Z Tinfinity - T_switch.

The two smoothings have fewer crossings; the switched term has the same crossings but one fewer bad first encounter, with the fixed traversal retained. For the smaller terms restart the finite ordering as necessary. Induct lexicographically on crossing number and number of bad crossings. This produces a FINITE linear combination of descending framed two-ended tangles. Coefficients lie in the declared Laurent ring; no division or infinite series occurs. At every step the operation is inside B and fixes its boundary collars.

Here is the relative open-arc base rather than an inference from a closed-knot isotopy. Make the radial endpoint collars so short that their planar neighborhoods miss every other strand and every self-crossing. On the intervening open arc parameter t choose a strictly decreasing positive height H-h*t, with its entire range above all other components. Join to the unchanged endpoint germs by two ramps in those disjoint endpoint neighborhoods. At each self-crossing first-encounter-over means exactly that the original two heights have the same strict order as this new height. At each crossing with another component the open arc is over, because it is traversed first. Linear interpolation of the heights therefore gives embeddings and preserves the fixed endpoint collars. No new intersections occur at the ramps, whose planar neighborhoods are disjoint from the rest.

Keep these strictly ordered interior heights and deform the planar open path to a standard simple path in the disk with the two small boundary collar notches removed. That region is a disk. A finite triangulation gives a finite polygonal path homotopy relative its endpoints by elementary triangle moves; no limit of path moves is needed. During this homotopy equal projected points on the interior arc have different heights. The path avoids the ramp neighborhoods, and its heights stay above the closed components. Thus every intermediate spatial arc is embedded, with fixed endpoint collars. Once its projection is simple, restore the standard height profile; its image can then be carried to the standard relative straight arc. This is a compact isotopy of the actual open core.

Carry the ribbon framing in this isotopy. On the final straight core its normal line, relative to a fixed trivialization and the fixed endpoint framings, has an integer twist. The integer is obtained by lifting its angle on finitely many overlapping semicircle charts; it is not assumed to vanish. Homotoping that lifted angle relative its endpoints concentrates the twist into finitely many standard signed curls. The curl relation contributes A^f for the resulting signed integer f. Thus the relative core simplification does not silently lose a framing factor.

The closed descending components can be handled successively in their traversal order: an earlier component is over every later component, so raise it to a disjoint positive slab. Its based descending self-crossings admit the same strictly ordered-height straightening, with its tiny basepoint connector in a disjoint empty collar; then close that connector to obtain a planar circle with its carried integer framing. There are finitely many components and finite separating slab heights. The open arc's final simple path may first be pushed into its fixed boundary collar so that these slab motions miss it. Each closed component therefore contributes its circle factor delta and its signed curl factor. This gives an actual relative descending base consisting of the straight arc and disjoint framed trivial circles, with no change at the two marked endpoints.

Consequently each descending term is a scalar q times I in EVERY outside context. Apply the identical finite expansion with the outside cap c. Since cap(I) is the zero-framed unknot with value1, the resulting scalar is precisely Lambda(cap(T)). Applying the expansion in E proves (1). This proof never caps an arbitrary open-arc isotopy and then assumes its cap was fixed; the fixed-collar open isotopy was constructed first.

## 3. Nugatory-crossing operator without lobe turnover

At an actual nugatory crossing z, cut on its separating circle and choose the two diagram lobe disks. Each contains an arbitrary TWO-ended tangle T or U, possibly with closed components; choose the two crossing-free caps from the corresponding boundary intervals. Number the four halfedges at z cyclically 0,1,2,3. The crossing strands join opposite pairs (0,2) and (1,3). After a possible cyclic relabeling the two lobe disks attach on the ADJACENT pairs (0,1) and (2,3); the other possible adjacent partition is obtained by shifting all labels once. Their flat caps join exactly those same adjacent pairs. Endpoint framings are the carried blackboard collars, and the outside caps have no crossings or added full twists. The crossing outside these disks joins the two open arcs in precisely this marked pattern. Scalarize T by (1), retaining U as the external tangle. The two straight strands now exhibit a literal isolated curl at z. Its sign epsilon is read from that actual local chart, with an arbitrary orientation of the resulting component; it is +1 or −1. Remove that curl and then scalarize U. This gives the exact identity

    Lambda(N_z(T,U))
       = A^epsilon Lambda(cap(T)) Lambda(cap(U)).       (2)

No rotation of an arbitrary tangle lobe is used. The cap pairings in (2) are the pairings on the TWO separate sides of the nugatory circle; they are not an arbitrary smoothing of a four-ended tangle. This also proves that any diagram differing by a spatial turn of a whole capped lobe has the same scalar: a rotation carries the cap and its framing, and the local evaluation contains no unresolved boundary operator. It does not assert equality of turned and unturned FOUR-ended operators.

For several nugatory crossings apply (2) successively. The result is a product of flat capped-lobe polynomials multiplied by A^e, where e is the sum of the actual local curl signs. This is a finite operation. It remains valid if different factors have closed components, since the two-ended cap evaluation already includes them; there is no additional delta inserted between connected-sum factors.

## 4. Exact outer-weight bookkeeping

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

## 5. Exact remaining Fig5b obligation

The algebra now permits the no-return case to be proved on a FLAT CAPPED LOBE, rather than on a globally turned diagram. It suffices to identify an actual capped factor L in (2) whose diagram has a bridge of length greater than1 and the required alternating-switch parity; its crossing count is smaller than the original n. The endpoint/no-return geometry must still supply which lobe cap connects which bridge interval and which first under-strand continuation. It cannot be inferred from scalarization or from crossing count alone.

In particular if deleting z merely leaves a length-(l-1) bridge, that suffices only for l>=3; the l=2 case still needs the actual adjacent continuation supplied by the port row. The source's assertion of restoration to length l would suffice, but is not proved by the operator identity. The composite owner is reconstructing precisely that finite endpoint row. This contribution gives an exact local skein bypass of ARBITRARY-LOBE TURNOVER and the full framing/weight accounting once that simpler flat-cap row is earned. The operator identity alone does not certify the endpoint pairing. Section6 below now integrates the separately supplied actual one-endpoint cap word and closes that branch.

## 6. One-endpoint no-return branch: completed integration with the actual cap word

The composite author supplied the following actual physical cap word, which now closes the SINGLE neighboring-z/no-return branch rather than leaving its endpoint pairing to a turnover. Orient the component starting at z's over-encounter and write its cyclic word

    z_OVER  U  z_UNDER  V,

where the beta prefix b1,...,b_(l-1) is the final overpassing block of V. The nugatory separating circle implies noninterlacing: every crossing encountered in either open lobe word has its other branch in the same lobe. In particular the whole beta prefix, with both branches of each crossing, belongs to V. The two ends of the flat V cap are exactly its LAST and FIRST halfedges; its first continuation is the appropriate z-under continuation c. No lobe is rotated to make this assertion.

There are three actual next-encounter cases, as clarified by the composite full block trace. If c is a beta UNDER occurrence, this is the separate physical return reduction, tested before deleting the pending cut. If c is a beta OVER occurrence, the one-fragment lobe closes that prefix into an over-only component; lifting/shrinking that component gives the separate crossing reduction. Only in the remaining case is c outside beta. In that remaining case, in the alternating assignment obtained by switching J, the encounter immediately before the next x was z and was over (x was the next under encounter), so z is NOT switched. Along the switched alternating strand the next crossing after z-under is therefore over. Since c is outside beta it is also unswitched. Thus c is over in the original flat capped diagram. The physical flat-cap seam now joins

    b1_OVER,...,b_(l-1)_OVER, c_OVER.

This has length l, including when l=2. In the switched alternating V diagram its first encounter is over and its last is under, so closing that same flat seam preserves alternation. The alternating parity along the extended bridge is still J: z was not in J and the newly added c is not in J; adjacent parity continues across the replacement. This is exactly the endpoint content supplied by the composite cap word, not a consequence of scalarization alone.

Process every OTHER nugatory crossing y that is NOT on beta before performing this z extraction. The connected beta arc avoids y and lies on one side of y's separating circle. Apply (2) to scalarize the PASSIVE two-ended lobe on the other side and retain the flat capped ACTIVE lobe containing beta. This leaves beta's actual projected over-encounters unchanged. The switched alternating diagram remains alternating after the same flat cap: at a nugatory over/under pair its interior word starts with the opposite encounter and ends with the opposite encounter, so its two cap ends alternate. Repeat finitely; all scalar factors retain their actual crossing counts and curl exponents.

This operation does not create new nugatory statuses among the retained active crossings. In the checkerboard graph a nugatory separating circle is a one-vertex lobe join; removing a passive lobe does not change paths or cycles between vertices of the retained lobe. Removing its joining loop/bridge by the prescribed cap cannot turn a retained essential edge into a loop or bridge. Thus when z is the only new nugatory crossing on beta, all other active nugatory crossings can be extracted without changing the case. After z's flat cap, the active factor is reduced. Its shadow is connected: any internally disconnected capped shadow component could not have joined the original connected shadow through the sole two-ended lobe interface.

Apply (2) at z. The active flat factor cap(V) has fewer than the original n crossings, is reduced and connected, and has the restored length-l bridge and alternating-switch property just proved. Proposition4 induction therefore makes BOTH its outer polynomials vanish. Equation(2) and the exact count/shift bound of section4 imply simultaneous vanishing for the original smoothing at its crossing count. This proves the source's single-z no-return endpoint branch WITHOUT any global turnover or assumption that arbitrary tangle operators commute.

The two beta-visit alternatives just distinguished are part of the composite full block trace, rather than an assertion that every no-return continuation is off beta. The remaining full-unit case, if two neighboring beta crossings become nugatory simultaneously, is not declared solved by this section. Its actual block/cap word is owned by the composite/character authors. The same operator and count argument applies as soon as that word yields a smaller flat capped factor with the required bridge; it does not manufacture such a factor.

## 7. Bounded Fig5a annular port check supplied to the same unit

For opposite signed parallel edges x,y in the checkerboard graph, the circle built through x in the two shared DISTINCT black regions and rounded through one white quadrant of y has the declared elementary-flype ports. Label y's branches cyclically N,E,S,W and its black sectors NW,SE. Choose the white NE quadrant. The ordinary circle intersections are exactly N_y and E_y, with y excluded from the turned tangle. At x the circle runs through the opposite black sectors, leaving two adjacent white-sector arms as the other tangle end. Thus the ordinary N_y,E_y pair is the alternate end in the actual elementary-flype chart. Transferring x there creates two short edges bounding an EMPTY WHITE bigon, because the arbitrary tangle was carried to the other side.

The crossing chart can be checked without a tangle-operator commutation: if y's overpair is N,S, opposite checkerboard sign makes the transferred x' overpair E,W in the corresponding black-NW/SE chart. The bigon edges connect N_y to W_x' and E_y to S_x'. They are OVER/OVER and UNDER/UNDER respectively. This is literally a Reidemeister-II pair. Reversing both over assignments gives the other case; exchanging black and white gives the dual. The arbitrary four-ended tangle is carried by the declared elementary flype and is never scalarized.

This bounded check was sent to the main author for integration before the SAME unit's first independent review. No separate review verdict or provider pipeline is created here.
