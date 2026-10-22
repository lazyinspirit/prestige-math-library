# Counting subsection: the finite graph-region inequality (MT6.2)

New author-stage subsection, frozen for independent review, 2026-10-21. No canonical helper, accepted-proof check, or whole-flyping completion. This is a complete finite proof at the printed scope, with the source's nullification and common-crossing cases made explicit through checkerboard graphs.

**Source inventory.** Directly reread `user-provided-pages/proposition6-2-statement-proof-p167-168.png` and `proposition6-2-proof-end-p168-169.png`, printed pp167–169, including Figure6.4. The exact printed hypotheses are connected, reduced graph diagram and at least one crossing; PRIME and alternating are not added. No MT complexity, normal-tangle, surface preparation or accepted normalizer is an input.

## Claim and conventions

Let D be a finite connected diagram on S2, with every node four-valent and marked either as a crossing or a rigid graph vertex. It is reduced: there is no nugatory crossing. Let c be the number of crossings, nu the number of rigid vertices, kappa the number of complementary regions incident to no crossing, and alpha the number incident to exactly one DISTINCT crossing. If c>=1, then

`beta(D) := kappa + alpha/2 - nu <= 1`.

Multiple incidences to a node do not count as different crossings. Over/under choices play no role. A nugatory crossing is equivalently a crossing through which an embedded sphere circle passes, disjoint from the diagram elsewhere, separating the four germs into two adjacent pairs. The usual smooth circle without nodes is included as a possible connected residual diagram, not an input with c>=1.

Put w(0)=1, w(1)=1/2, and w(n)=0 for n>=2. If n(R) is the number of distinct crossings incident to a region R, then beta(D)=sum_R w(n(R))-nu.

## Finite checkerboard encoding and its elementary certificates

A connected even-valent sphere graph has a checkerboard coloring: color a complementary region by the parity of crossings of a path from a fixed region. This is well-defined because each closed transverse path meets an even-valent graph evenly (cut it into simple circles, each bounding a disk, and count the incident halfedges inside modulo2). Construct the black checkerboard multigraph G: one vertex per black region and one edge per diagram node, joining its two black sectors through a small neighborhood of that node. Crossing edges and rigid edges retain their markings. G and its geometric dual are connected plane graphs; their vertices are respectively the black and white regions of D. The medial reconstruction recovers the diagram shadow. These facts follow by joining sectors across the same complementary region and following a path in the connected diagram. In particular the regions of D are precisely the vertices and faces of G, with incidence to a crossing equal to incidence to its marked edge.

For an edge h, the two black sectors are the same region exactly when h is a loop. The two white sectors are the same exactly when h is a bridge. Here the second assertion is the plane dual loop criterion: an edge borders the same face on both sides iff it is in no cycle, equivalently is a bridge. To see this directly, a cycle through the edge separates its two sides; conversely if it is not a bridge, another path between its ends gives such a cycle. Therefore a crossing is nugatory iff its edge is a loop or bridge. Here is the actual local circle certificate. Take a small disk about the crossing, meeting the diagram in its four radial germs. If two opposite same-color sectors belong to one region, connect points of their boundary intervals by a simple arc in that region outside the small disk. Such an arc exists: a path in the region joining the sectors can be simplified, removing its excursions through the other disjoint sector disks, until its portion outside the crossing disk joins the two specified intervals. Close this arc by the diameter through the crossing in those two opposite sectors. The union is an embedded circle meeting the diagram only at that crossing and separating the four radial germs into adjacent pairs. Conversely, remove the crossing point from such a nugatory circle. Its connected remainder lies in one complementary region, and its two end germs occupy opposite sectors of that color. Therefore those opposite sectors are the same region, producing a loop in that color's checkerboard graph. This argument allows loops and bridges at every RIGID edge; only crossed edges are restricted. Thus reducedness says EVERY crossed edge of G, and of its dual, is neither loop nor bridge. In particular a reduced crossing meets four distinct regions.

Nullifying a rigid node so that its two DISTINCT black regions merge is represented by contracting its nonloop edge e in G. All white regions persist; all other black regions persist; the endpoints of e amalgamate. This is a precise combinatorial nullification, with the four germs paired according to the black-sector merger. The color-interchanged nullification is the same operation in the dual.

Contraction of a nonloop edge preserves connectedness. It cannot make any other edge a bridge: a cycle through that edge maps to a cycle, possibly a loop. It makes another nonloop edge h a loop exactly when h has the same two endpoints as e. These statements also prove every reducedness assertion used below; no geometric isotopy or alternating-diagram preservation is silently required.

For a connected plane graph with no edges, take its medial convention to be a smooth sphere circle. Otherwise its medial is connected and four-valent: a walk through adjacent incident edges in the connected checkerboard graph gives a walk through their medial nodes. Thus all operations below again produce connected diagrams, including the possible smooth-circle residual.

## Induction base and crossing-free residual count

We induct on nu among reduced connected diagrams having at least one crossing. If nu=0, every edge of G is crossed. Neither G nor its dual has an isolated vertex (they are connected with an edge), a loop, or a degree-one vertex (the last would make its incident edge a bridge). Hence no vertex or face of G is incident to zero or exactly one distinct crossed edge. Thus kappa=alpha=0 and beta(D)=0.

Separately, for a crossing-free connected diagram with nu rigid nodes, Euler gives number of regions = nu+2: if nu>0 then E=2nu and V=nu; for nu=0 the smooth circle has two regions. All regions are 0-regions, so beta=2. This value will be used ONLY for the crossing-free residual, not as an inductive hypothesis for c>=1.

## Case I: a safe rigid nullification

Take a rigid node. Suppose, for either choice of color, its opposite regions R,S are DISTINCT and share no crossing. Use that coloring as black. Its edge e is nonloop. Contract e. The resulting D' is connected, has nu-1 rigid vertices and the SAME c>=1 crossings. Every crossed edge remains a nonloop: otherwise it joined R to S, contrary to their sharing no crossing. No crossed bridge is created by contraction. Thus D' is reduced and the inductive hypothesis applies.

Only R,S merge. Write r=n(R), s=n(S). Their crossing sets are disjoint, so the new region has r+s crossings. Since nu decreases by one,

`beta(D')-beta(D) = 1 + w(r+s)-w(r)-w(s)`.

The complete symmetric table is:

| r | s | New count | beta(D')-beta(D) |
| --- | --- | --- | --- |
|0|0|0|0|
|0|1|1|0|
|0|>=2|s|0|
|1|1|2|0|
|1|>=2|1+s|1/2|
|>=2|>=2|r+s|1|

There is no hidden incidence case, including a 0-region with a multiply incident boundary: counts are distinct crossed edges and disjointness is literal. Consequently beta(D)<=beta(D')<=1.

## Case II: no safe nullification — the common crossing of Figure6.4

Choose any rigid edge e. If e were a bridge, its distinct endpoints could have no other edge joining them; contracting it would be CaseI. If e were a loop, its dual would be a bridge and the white nullification would be CaseI. Hence e is neither loop nor bridge: both its endpoint regions and its incident-face regions are distinct.

Since CaseI is unavailable, the black endpoint regions share a crossed edge f, parallel to e. Likewise the two white regions share a crossed edge g, parallel to e in the dual. The simple two-edge dual cycle consisting of e* and g* is a Jordan circle crossing the primal graph exactly in e and g; hence {e,g} is a two-edge cut. It is minimal since neither e nor g is a bridge. The primal two-edge cycle consisting of e and f meets every cut in an even number of edges (a closed walk must enter and leave either side). It already contains e, so it must contain g too. Thus g=f.

We have therefore EARNED a SINGLE common crossing f: {e,f} is both a primal two-edge cycle and a primal two-edge bond. This is the exact incidence certificate behind Figure6.4. Removing e,f disconnects G into its two endpoint components. More explicitly, if another edge h joined the black endpoints of e, the primal two-edge cycle {e,h} would meet the cut {e,f} in exactly one edge, impossible. So f is the only edge other than e joining those black regions. If another edge h joined the WHITE regions, the dual two-edge cycle {e*,h*} would give the primal cut {e,h}; the primal cycle {e,f} would again meet that cut only in e, impossible. Thus f is also the only edge other than e joining those white regions. These two parity checks prove uniqueness for BOTH region pairs, including arbitrary multigraphs; they do not count boundary occurrences as extra crossings. Each pair therefore shares EXACTLY the crossing f, not some unlisted further crossing. The remaining portions may be arbitrary connected attachments, as represented by K,L,M,N in the source figure; no assertion that those attachments are crossing-free is used.

Construct G' by contracting e and deleting the now-loop f. This is the finite combinatorial counterpart of nullifying the rigid node and removing the resulting nugatory crossing in Figure6.4. It is connected, with nu-1 rigid edges and c-1 crossed edges. No other crossed edge becomes a loop, since f was the unique edge parallel to e. Contraction creates no bridges, and deletion of a loop changes no other edge's bridge status. Thus its medial D' is reduced and connected. This also proves reducedness without leaving the source's phrase “untwisting” as an unexamined certificate.

There are exactly four affected old regions: the two endpoint regions R1,S1 and the two incident-face regions R2,S2. They are all distinct (two of each color), and each contains f. Contraction merges R1,S1; loop deletion merges R2,S2. All other regions and their crossing incidence remain unchanged. Each pair has crossing sets intersecting in exactly {f}. If the old counts in a pair are r,s>=1, the new count is therefore r+s-2. Define

`d(r,s)=w(r+s-2)-w(r)-w(s)`.

Here is the complete symmetric table:

| r | s | New count | d(r,s) |
| --- | --- | --- | --- |
|1|1|0|0|
|1|2|1|0|
|1|>=3|s-1|-1/2|
|2|2|2|0|
|2|>=3|s|0|
|>=3|>=3|r+s-2|0|

Both affected color pairs obey d>=-1/2. The rigid count falls by one, so

`beta(D')-beta(D)=1+d(r1,s1)+d(r2,s2)>=0`.

If c-1>=1, the inductive hypothesis gives beta(D)<=beta(D')<=1.

If c-1=0, the only old crossing was f. ALL FOUR affected old regions were consequently 1-regions, and both new merged regions are 0-regions. Each d is exactly0. The crossing-free residual calculation gives beta(D')=2, so beta(D)=beta(D')-1=1. This handles a residual with arbitrarily many rigid vertices. If there are no residual rigid vertices either, G' has no edges and D' is the smooth-circle residual; the same beta(D')=2 calculation applies. Equivalently the original had nu=1, c=1 and four1-regions, giving beta=4/2-1=1 directly.

The two cases exhaust every rigid edge: either some color has distinct, crossing-disjoint opposite regions, or the simultaneous cycle/bond argument applies. The induction is finite and preserves connectedness/reducedness at every use of its hypothesis. Therefore the claimed inequality holds at its full printed scope.

## Export and limits

This subsection supplies precisely the finite inequality used in6.3. It adds no prime hypothesis, no MT complexity or normal-tangle premise, and no surface-position input. It does not by itself supply the Counting Lemma6.1, the Euler cellulation input of6.3, or the full flyping theorem. No mechanical gates or canonical item changes were performed.
