# Central disk with a strictly free interface: exact seam allocation

Renewed user-authorized development, `/root/flyping_bridge`, 2026-10-20; focused root-pass repair, 2026-10-21. This replaces the obsolete requirement that the final central cap disk itself retain the old wall seams. It constructs its scaffold directly from the actual joint graph placement, then moves its ENTIRE boundary off the old surface. No seam is glued twice or silently canceled. The focused repair below replaces the former ear-based scaffold argument; no one-wall-contact property is used.

## Actual compact root scaffold

Let Z0 be the compact central projection disk and Y0 its actual lower reference region, with the actual half-tube and crossing-boundary ceiling profile s. In the joint graph placement each actual global lower disk is the graph of h_Gamma over its actual domain Delta_Gamma, with h_Gamma=s on the domain boundary and h_Gamma<s in its interior. Extend h_Gamma by s outside Delta_Gamma and denote the continuous extension by hbar_Gamma. Define the actual lower envelope

$$
f(p)=\min\bigl(s(p),\overline h_{\Gamma_1}(p),\ldots,\overline h_{\Gamma_N}(p)\bigr).
$$

The finite minimum is continuous. Its graph R over Z0 is a disk, with projection a homeomorphism; this conclusion does not require an old disk piece to meet the wall only once. Multiple wall encounters remain different graph traces of the same actual global disk. The region immediately below this graph contains no old F and is the root region. Equivalently, R is its actual upper boundary face after cutting along the old lower sheets. Its boundary is the simple graph of f over the inner cylindrical wall. It follows whichever old wall intervals actually attain the minimum and the remaining free reference intervals, in their actual order. Nested sheets hidden above the minimum are not substituted a second time.

R is used only as a scaffold here. The final central cap disk will NOT contain any r_j.

There is no puncture problem at the root t. A chart used to describe the domes may puncture the reference sphere at t. Choose t at an inner white point of the FULL-FIBRE singleton condition. Every closed lower domain Delta_Gamma excludes t, and the finite family therefore misses a whole neighborhood of t. In that neighborhood f=s and R is the unchanged actual reference face. It extends across t in its ordinary physical reference chart. Thus R is an actual compact disk, not a graph whose closure at a stereographic infinity has been assumed. We will use finite physical collars on this compact R. Write C for the actual root region on its lower side.

## A relative inward collar, including its boundary

On the inner cylindrical wall choose the actual product coordinates (s,z), where s is its projection parameter and increasing z points toward the reference ceiling. The root frontier is the continuous lower envelope z=f(s), including the actual tube and book boundary profiles. Every old F wall point over s has height at least f(s). The root component on this wall is the region below f(s).

Move each point (s,f(s)) of boundary R a small distance DOWN in this actual wall collar. This includes points on r_j and their tube endpoints: downward motion is into the root component below both the old graph and the actual tube ceiling. The moved boundary is disjoint from the tube and all old F wall intervals. It adds no tube segment to the central disk boundary.

Extend this wall motion over R by an actual inward vector field in C. The frontier-corner model is explicit: in a physical graph chart write the finitely many incident faces as z=a_l(u,v). The root region satisfies G_l=z-a_l(u,v)<=0 for every incident face. The vertical vector -partial_z has derivative -1 on EVERY G_l. At an old-dome/reference-face switch one may for example use a signed base coordinate u with reference face z=0 and old face z=-a u on u>=0, a>0; downward translation lies below both pieces. At a cylindrical-wall point the same vector is tangent to that wall. Several wall contacts of the same dome simply repeat this local model; they impose no one-contact assumption. The actual tube/book ceiling corners are treated by their given finite profile charts with the same downward inequality. Near t use the ordinary reference inward collar, since there no dome is present.

On chart overlaps the requirements of decreasing all incident graph defining functions, together with tangency and downward motion on the wall, are convex conditions on the vector field. A finite partition of unity therefore gives one compatible field. Its positive-time image of R lies strictly inside the root side and off every old F or tube face. Any remaining corners of that image can be rounded within its positive clearance from those faces. Compactness gives a common sufficiently small positive flow time. Equivalently, before that harmless corner rounding this constructs a relative collar

$$
\Psi:R\times[0,\epsilon]\longrightarrow C,
\qquad \Psi(\partial R\times[0,\epsilon])\subset\text{inner wall}.
$$

For positive collar parameter the disk interior lies inside C and its boundary lies strictly below the frontier on that wall. Smooth corner rounding is done within the same strict inequalities. Set D=Psi(R,epsilon) and I=partial D. The collar is an embedding, so D is a disk. Its interior misses all old F, all tube faces, and all reference axes; its boundary I is one entirely FREE wall circle, below every r_j. The geometry is compact throughout, including t.

If one uses a compact physical product profile instead, the same construction is expressed by a graph g strictly between a lower graph b and the continuous frontier f. The collar construction above supplies the extension at t and does not assume that the punctured stereographic graph chart is globally compact.

## The finite ownership partition

Divide I at the actual white dual end-face points into its consecutive prism intervals I_i. On each shared alpha end face choose its one free arc once, extending the existing empty white/root collar down to the endpoint on I. Both adjacent prisms use that SAME arc and endpoint germ. These arcs are tube-free. The extension lies below the root frontier, hence meets no old F.

Assign boundary intervals as follows:

| Physical interval | Owner in the new cap decomposition | Fate on gluing |
| --- | --- | --- |
| every retained r_j, including every subdivision | the unique local prism disk V_i whose retained R word contains that physical interval | remains on the final boundary once |
| every other retained outer seam | its unique local V_i | remains once |
| each free I_i | D and the corresponding V_i, with opposite boundary directions | glued and deleted from the final boundary |
| each free alpha arc | the two neighboring V_i, with opposite boundary directions | glued and deleted |

If an r_j meets an alpha cut, subdivide it at that actual cut first; its two consecutive physical subintervals belong to the corresponding two prism disks and retain their one common endpoint. No subinterval is simultaneously assigned to D. A repeated name for a whole lower disk never identifies two different physical boundary intervals.

This partition changes the earlier donor's central construction: R's old retained windows are NOT fixed during the push. They remain fixed on old F, while the NEW disk boundary moves off them to I. Thus there is no claim that D absorbs a rectangle along r while also retaining r as its boundary. Such a naive absorption would interiorize r and would be incorrect.

## Local filling with the new interface

For the typeIII prism retain all actual r_j in the local P/Q boundary words. Replace only the formerly unspecified free central interval by I_i. Since I_i lies strictly below the entire lower frontier, it lies on the local ROOT cut-ball wall; it does not enter the W1/B1 pocket. Its end collars run in the same empty white end faces. It is disjoint from all retained seams, from the tube endpoints of those seams, and from the book adapters. The root-side sphere cycle therefore uses I_i and its end-face arcs together with its assigned retained seams, whereas the pocket-side cycle uses its assigned retained seams and no I_i. The already computed physical book-bank assignment is unchanged.

The cycles remain simple: the moved free interval is a graph below all old wall intervals, the end-face extensions lie in disjoint tube-free root collars, and every remaining part is unchanged. Fill them in their actual local cut balls with the prescribed collars and join to the positive band as in the direct typeIII construction. The result V_i is a disk whose boundary contains exactly one free interval I_i, its two free alpha end arcs, and its full remaining retained/tube boundary word. Its free-edge cyclic order is the same as that of the old strip disk: I_i, right alpha arc, remaining boundary word, left alpha arc, up to overall reversal. The shift to I_i changes no physical retained seam endpoint.

At I_i use opposite normal half-collars in the wall: D lies on its central side and V_i on its prism side. Their product coordinates agree on the edge. This gives the actual smooth gluing germ, without an intersection of interiors. The same convention is used at each alpha arc. These collar choices affect only free interfaces.

## Annular and disk gluing, with no missing seam

Glue the cyclic family of V_i along the prescribed alpha arcs. Each is a disk and the free-edge order just stated is fixed. Their union is the same marked annulus as the old strip assembly: its inner boundary is the concatenation of the I_i and its other boundary is the concatenation of the retained/tube words. This also follows directly by taking disk parameters for each strip, mapping its four ordered boundary portions to a rectangle, and gluing the two end sides cyclically. The one- and two-prism cyclic cases use their two named end sides as distinct physical intervals, so the same parameter calculation applies.

Glue D along its entire boundary I to that annulus's inner boundary. The result is a disk. All the I_i and alpha arcs cancel in their actual pairs. Every r_j remains once, solely from its prism owner. No boundary ear is attached along two disjoint intervals, no seam edge is identified to itself, and no retained r_j is used as a gluing edge.

The embeddedness follows from the actual locations: D is in the central root component, each V_i in its own prism, and their interiors are disjoint. Their only intersections are the named free interfaces with the compatible collars. The positive bands remain the already prescribed empty-book bands.

## Full successor and peripheral endpoints

Before gluing, each V_i has the explicit successor calculation U' P O' Q, with all retained intervals and the free I_i/alpha marks included in P where applicable. Gluing deletes ONLY the paired free marks. At their endpoints it joins the same two neighboring directed boundary intervals as the old annulus-plus-central-disk assembly. Thus the global retained-seam word and the old/new whole-channel endpoint pairing remain exactly the already computed ones.

The free interfaces contain no tube segment. Moving them downward creates no extra tube interval, changes no retained seam endpoint on the tube, and changes no angular increment of a whole old/new channel. The phase-band and axis ledger therefore receive the same actual inputs as the local construction. This note supplies the missing ownership/gluing allocation; it grants no separate review, gate, or workflow coverage.
