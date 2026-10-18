# Actual seven-node child, sharp root star and common uniform ring

2026-10-18. Research construction for the actual mirrored two-fan recursive MINI template. This supplies the geometric interface for the uniform incoming-field/cutoff estimate and the exact two-driver Schur embedding. It proves neither relative nonextinction nor the original pressure claim.

## 1. Scales and the true outer-radius restriction

Let the parent fan radius be H, aperture a_p, and tooth count N. A straight main tooth side has root distance

    D comparable to a_p H/N.

Choose selected attachment centers on its middle thirds at spacing ell comparable to b0 D. The child half-container is, in local tangent/normal coordinates,

    C_r=[-4r,4r]x[0,4r],   r comparable to sigma ell.

Choose the already free dyadic strip height with 0<epsilon_strip<=c a_c. Its base contains exactly c_-=(-4r,0), o=(0,0), c_+=(4r,0); its other four boundary nodes are (±4r,epsilon_strip r),(±4r,4r). These seven nodes and all seven boundary edges remain unchanged under every descendant replacement.

The clearance from an attachment to nonincident tooth sides is at least cD, but SAME-SIDE neighboring children are only distance comparable to ell apart. Thus a single-child ring must use outer scale

    R comparable to c0 ell,      r/R comparable to sigma,     (1)

with c0 a sufficiently small fixed constant. It cannot use R comparable to D without additionally treating the neighboring children as part of the near field. Choose R as a dyadic multiple of r within a fixed factor of c0 ell. Make 8R smaller than both one quarter of the same-side spacing and the tooth-side clearance. Then the half-disc of radius 8R on the exterior side of this straight parent base lies in the available gap, misses every other child, lies inside the parent container, and lies in ONE affine macro-zone of every parent logarithmic pressure lift. The last condition follows from the protected near-base zone's angular margin, since R/H=O(b0 a_p/N)<<delta. All these are strict finite inequalities fixed before recursion depth.

## 2. The actual uniform ring and its transition

Use local square coordinates on the exterior half-plane. Let S_s=[-s,s]x[0,s]. Keep the actual child C_r inside S_(8r). Choose one uniform half-plane MINI triangulation, with square step d and its prescribed diagonal orientation. Take

    d=2^(-k)r,
    d<=c min{a_c r²/R, epsilon_strip r,
              epsilon_Q D, a_c r},                       (2)

where a_c is the CHILD fan aperture. Increase the integer k if needed; no lower bound on d is imposed. This in particular implies the required d<=Cr²/R. R/r is dyadic, so every boundary of S_(8r) and S_(4R) is a union of lattice edges.

Make the actual mesh EXACTLY this uniform mesh on

    S_(4R) minus S_(8r).

The nonuniform child-to-uniform transition is confined to S_(8r)\C_r. In Euclidean radius it is contained in the half-disc of radius 12r. Thus, with the cutoff parameter r_tr=16r, the common annuli 2r_tr through 8r_tr and their one-cell enlargements are entirely uniform, provided R is chosen larger than a fixed multiple of r. This holds once sigma is sufficiently small. Distant cutoff drivers at distance comparable to R and their stencil enlargements are also on this exact common uniform mesh. There is no interpolation or projection from uniform cells through the coarse transition.

The stronger first bound in (2) is useful for ideal layer energy: on a finite base extent O(R), either exact neutral layer has mass plus pressure-gradient energy squared O(dR|eta|²). Hence dR<=C a_c r² keeps that cost at the same scale as the child root fan star, rather than introducing an unexplained factor 1/a_c. A smaller d remains an allowed fixed finite template choice.

## 3. Keeping every long child edge unrefined

Construct a polygonal collar on the EXTERIOR side of the child's four side/top boundary chains; at the base corners it ends on the physical base outside [-4r,4r]. No node is inserted on a child boundary edge. For an edge of length L_e, a strip of positive height tau_e has area O(L_e tau_e). Choose all strip heights sufficiently small that the sum of collar triangle areas incident to each ORIGINAL child boundary vertex is at most zeta a_c r². At corners use smaller offset sectors and the same budget. These choices are possible simultaneously because the list is finite and each budget is positive. The heights may be dyadic and smaller than epsilon_strip r as needed.

One explicit strip is the quadrilateral formed by the original edge and two nearby exterior offset endpoints, split into triangles. Its original-edge endpoints see total area O(L_e tau_e+tau_e²), tending to zero with tau_e. Near a base corner subdivide ONLY the outward physical base, not the child's vertical edge. Lattice nodes of spacing d on that outward base are permitted. Their first-edge area contribution is O(L_e d), which is within the budget after reducing d as in (2); for L_e<=8r the condition d<=ca_c r suffices. The remaining transition meets the offset polygon, not the original child vertices, so no later triangle enlarges their stars.

Also put a thin physical-base collar along the transition base outside [-4r,4r]. Its edges may have lattice spacing d, but its height is at most c a_c r, tapering to height d where it meets the uniform ring. The corner cap adjacent to c_± has height at most epsilon_strip r<=c a_c r. Thus the TOTAL area of transition triangles incident to physical-base vertices is O(a_c r²), and each newly inserted parent guard has star at most C d a_c r (or C d² in the uniform part). This total budget is needed for the ideal neutral-driver lift; individual small-star bounds alone would not prove it.

Triangulate the remaining finite polygon between this collar and S_(8r), retaining the exact outer lattice edges. All imposed macrointerfaces below are included in this finite planar straight-line subdivision. Holes/strips are disjoint after shrinking their widths. Triangulation by finite noncrossing diagonals and interior Steiner points then gives a finite conforming mesh. Every triangle is nondegenerate. Its smallest angle can be tiny and depends on the fixed data N,a_p,a_c,b0,sigma,epsilon_strip,d/r and collar widths, but is positive and independent of recursive depth. No uniform-in-these-parameters minimum angle is asserted.

## 4. The SHARP nonterminal root-star bound inside the child

Inside C_r retain the protected two mirrored radial fans. Their combined area is between fixed multiples of a_c r², and EVERY protected fan triangle contains the child root o. Refining a fan edge radially does not change this total root area.

All additional triangles incident to o can be restricted to arbitrarily small polygonal sectors outside the protected fans. On a whole coarse base edge o-c use one arbitrarily thin adjacent triangle; its area is at most C r tau, with tau as small as desired. The remaining root sector can be closed by interior offset points near o and near the short initial/final fan edges, before filling the complementary polygon. Those offset distances are independently shrinkable. The only compulsory root edges outside the fans are the two fixed coarse base edges and finitely many short root-ramp edges. Their exterior adjacent triangles have area tending to zero with their chosen offset heights. The filler beyond the offset polygon has no root vertex.

At another original fan vertex i the same separate collar construction makes all added nonfan triangles as small as any prescribed fraction of its positive incident fan area A_i. Connecting root-sector collar pieces may use new interior vertices; those pieces need not contain i. Therefore shrinking a root-sector cap does not force a large star at a short-ramp guard. This distinction is essential when its fan area is much smaller than r².

For a fully explicit way to impose the last area budgets, apply the vertex surgery of Section 8 at o to EACH NONFAN triangle incident to o, after the finite pressure-interface overlay. Its root contribution becomes exactly 2e times its old area while all protected fan triangles and all old edges remain unchanged. Choose e so their total is at most zeta a_c r². Other original stars never increase. Applying the same surgery afterwards at the finitely many fan guards gives their required small exterior stars without increasing the already fixed root star. If a new long background-only edge crosses the mandatory inner buffer, subdivide it at O(ell_child) and refine the adjacent triangles; subdivision preserves their total original-vertex star bounds. Long original seven-node boundary edges are outside that buffer and are kept whole. This is an explicit finite implementation of the thin-collar area argument, rather than an assumed area floor.

Consequently one can enforce simultaneously

    c a_c r² <= area(star_child(o)) <= C a_c r²,
    area(star_child(c_±)) <= C a_c r²,                    (3)

and arbitrarily smaller bounds at the other inherited boundary vertices if desired. The lower bound is supplied by the protected fans; the upper bound is NOT the old whole-box O(r²) estimate. The external transition has no root triangle at all: a half-neighborhood of o is inside C_r. At c_± its extra star is controlled by Section 3.

Every first-generation reserve and its full ring is a positive distance from o and from the outer boundary. Construct these root/boundary collars before any descendant replacement. They therefore stabilize once the finite current template is fixed. Terminal fills must obey the SAME sharp boundary-star budgets; do not fill a terminal box by a coarse root-to-all-corners fan of area O(r²). A finite terminal fill with the protected two fans retained and with the above thin root sectors, closing its own unexpanded reserves by fixed thin-collar fills, has (3). For an empty terminal reserve with no retained fan, start from any fixed pressure-macro-conforming fill and apply the same root surgery with a common e chosen so its TOTAL root-star area is exactly a_c r² (or a fixed comparable fraction); the original star area is O(r²), so such e lies in (0,1/2) for small a_c. This supplies both the lower and upper star bounds without an infinite recursion. All terminal boundary triangles are then fixed before descendants are considered; no depth-dependent cell is needed.

## 5. Parent star budgets, new uniform guards and exact old formulas

At a selected child root the only nonparent cells incident to it lie inside that child. Its two adjacent parent half-base edges have length 4r and are NEVER refined. Hence its parent star area is exactly 4rD. From (3), its nonparent-to-parent ratio is at most

    C a_c r/D <= C a_c sigma b0.                         (4)

The base endpoints c_± also receive O(a_c r²) from the child and transition, while their parent star has area at least 2rD. They satisfy the same bound. This is the sharp endpoint/root mechanism; a whole-box upper bound would lose a_c.

Uniform grid nodes on the physical base OUTSIDE the child's two base edges are new PARENT fan guards. Subdivide the corresponding parent long-side segments at those nodes and refine each affected fan triangle RADIALLY from the parent root. This preserves the radial fan form and its total area. A uniform base guard has exterior star O(d²), while its parent fan star is comparable to dD, so its ratio is O(d/D)<=C epsilon_Q by (2). Nonuniform transition guards have exterior/fan ratio at most C a_c r/D by the thin physical-base collar in Section 3; this is the same small quantity as (4). The uniform part's forced star is already within budget. All other old guards/ramps receive their prescribed thin collars. Thus allouter-star bounds hold simultaneously, not merely at selected centers.

The radial guard refinement leaves all exact full-outer formulas valid: local condensed coefficients remain Dloc=4/45,Oloc=1/180, and each parent triangle still has root plus two outer vertices. The full outer normalized matrix still has diagonal 16 and off-diagonal row sum one, including every NEW guard; its weighted inverse bound is unchanged. The pressure-free hybrid nodal tests are also unchanged elementwise.

The total outer star sum is exactly twice the fan area, independently of how many guards are added. Each selected root's two half-base edges remain intact, so its star weight and the selected fraction comparable to sigma are unchanged. Tooth-line distance D and the root--center longitudinal coordinate are unchanged; hence the exact half-slope continuity factor O(a_p/N) still applies. The full-fan weighted-Hardy slope estimate permits arbitrarily small ramp radii and all these radial refinements. Source triangles below the original coarse base and their actuator moments are untouched.

All transition edges have length O(r)<=O(ell); all new ring edges have length O(d). They therefore introduce no long background-only shortcut through the parent's mandatory fine buffer. The child itself retains its own internal buffer, which must still be crossed before any exterior ring can be reached. Existing coarse-base-collar exceptions remain confined below their prescribed base-strip line.

## 6. Exact pressure lifts and no eighth boundary node

Use the checked logarithmic corner lifts inside the child. Their interfaces are finite and miss the protected fan interiors and holes, where the functions are affine. Overlay those interfaces with the root/thin-star collars by CONFORMING REFINEMENT. Refinement subdivides already assigned star regions and never increases their total area; it preserves all pressure-lift energies. No child boundary edge is subdivided, because these interfaces meet it only at the prescribed seven vertices. No projection on skinny cells is used.

For a base pressure kink use the single lift selected by the structured owner,

    F(t,n)=kappa |t-n|,

or its reflected partner kappa|t+n|. See ../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-structured-observation/seven-node-base-kink-and-neutral-velocity-lifts.md. The line t=n goes from root to the EXISTING top-right corner. Its traces are affine on EACH of the seven boundary edges: base kappa|t|, right side kappa(4r-n), left side kappa(4r+n), top kappa(4r-t). Thus no eighth top-edge node is needed. Its gradient cost is C|kappa|r. Protected near-base fans avoid the line and see exact affine pieces. Constrain the transition to this same macroline. On the SWNE uniform stencil the line is already a union of diagonal edges; its reflected lift uses NWSE. Cutoffs vary ONLY on the common uniform annulus. All coarse-zone values remain exact.

Every parent pressure lift is affine throughout the complete selected child's ring neighborhood by the margin in Section 1. Thus neither uniform diagonals nor radial parent-guard refinements require a nonaffine pressure interface in the uniform ring.

## 7. Reflection covariance and the proposed powers

Construct the two mirror zones as exact reflected finite subdivisions. Offset choices, dyadic spacings, terminal fills, gauges and macro lifts are reflected together. A SWNE diagonal in one ring is NWSE in its mirror. Do NOT impose a single unreflected global diagonal on both zones. Disjoint rings permit these independent orientations; their exterior fillers are then joined by a finite reflected subdivision. This preserves the exact covariance of the two-driver matrices and incoming extractors.

For L large, the proposed powers

    delta=L^(-200), a_p=a_c=L^(-220), b0=L^(-20),
    sigma=L^(-150), epsilon_Q=L^(-380)

give a_c sigma b0=L^(-390), leaving a factor L^(-10) to absorb fixed constants in (4). They also give r/R comparable to sigma. Choose the dyadic lattice so d/r<=c a_c(r/R), as well as the other conditions in (2). Then dR<=C a_c r², and d/D is smaller still. The tiny lattice/node count affects the finite shape constant, not its depth independence or the universal reference mass/bubble bounds. Collar widths can be selected AFTER all these parameters to meet every positive star budget; no area floor O(r²) is introduced.

The ideal-driver neutral velocity lift has the exact weighted-star mass bound from the structured seven-node note; its coarse root/base-node and transition-base contribution is O(a_c r²|eta|²), and the finite uniform layers contribute O(dR|eta|²), which is of the same order by (2). One may implement the comparison by a cutoff of the exact uniform layer which is zero through the transition and changes only on the common uniform annulus, adding the neutral boundary lift for the missing near-base velocity. The normal layer pressure is zero on the base and O(d|eta|) elsewhere; its uniform cutoff adds gradient cost O(d|eta|), already bounded by O(sqrt(a_c)r|eta|). Thus no coarse interpolation or logarithmic boundary-pressure lift is required for the short-layer cutoff itself. Affine backgrounds and the stated kink lift are exact P1 on the transition. Uniform cutoff estimates use only fixed uniform reference cells outside it. Any strain constant on the finite transition is finite but is NOT invoked in this mass-only ring binding.

This supplies the actual finite conforming geometry assumed by the owner passive-cutoff and two-driver embedding notes. It does not make the twelve free child ports small, identify the actual incoming macro normal component, or prove a recurrent channel from absolute error estimates. Those are separate analytic/recurrence obligations.


## 8. Arbitrarily smaller CHILD-SIDE base-corner stars

There is no fan-area floor at c_- or c_+. For the full vector unequal-base-velocity remainder, choose ANY epsilon_corner>0 and require

    S_corner(c_±)<=epsilon_corner V_parent(c_±),           (5)

where S_corner counts ONLY cells on the child/transition side of the straight parent fan boundary, and V_parent is the SINGLE adjacent protected parent triangle between the selected center and that endpoint. Its half-base length is 4r, so V_parent=2rD exactly. The parent fan cells are untouched; a whole endpoint star is not substituted for V_parent.

This stronger bound follows by an explicit finite local surgery, AFTER every transition/macro/log-lift refinement. For any such triangle K=(c,A,B) choose 0<e<1/2 and the interior point

    P=c+e[(A-c)+(B-c)].

Replace K by (c,A,P),(c,P,B),(A,B,P). The first two triangles have area e|K| each, so their TOTAL c-star area is exactly 2e|K|. All three original edges remain whole. Every old affine pressure lift remains affine on the new pieces. All old vertex stars are nonincreasing under this subdivision; thus successive operations at both corners preserve every previously achieved original-vertex budget. Choosing e for the finite set of incident triangles yields (5) for arbitrarily small positive epsilon_corner.

All these cells lie in the child boundary collar or the nonuniform transition, strictly inside the inner ring radius. No exact uniform stencil cell is changed. The protected child fans lie away from these base corners, and no parent fan triangle is refined. Possible new long background edges remain in the outer child collar/transition (outside its mandatory inner buffer); at the parent scale their length is O(r)<<ell_parent, so no parent buffer shortcut is created. The finite minimum angle may decrease with epsilon_corner but remains positive and fixed with depth.

For the proposed powers one may take epsilon_corner=L^(-600), which is smaller than sigma² b0 a_c=L^(-540). The center root still retains its necessary fan floor c a_c r²; no claim suppresses that center star to the corner budget. This distinction permits choosing the incident base velocity to be the center/root value, so the residual has zero center value and only two endpoint errors. Their exact neutral MINI extension is then controlled by (5), including the NORMAL velocity component; no nonexistent normal pressure-slope bound is needed.


## 9. Binding the ENTIRE comparison base to one parent radial side

For the owner's radial-fan-entire-base-affine-remainder.md, use the entire finite-ring base interval, not merely the child base triple. Let t_i be the unit tangent of the chosen straight parent long side, pointing away from the parent's root, and n_i its normal pointing from that root toward the line. In coordinates relative to the PARENT root, the complete line is x=D_i>0. Write its selected center as (D_i,y_i).

The two long-side endpoints have parent radii H/2 and H with angular separation comparable to a_p/N. Their tangential coordinates are between fixed positive multiples of H, and their difference is comparable to H. This follows directly from their cross product and their length: D_i is their determinant divided by side length, while the side direction differs by O(a_p/N) from a radial direction. Thus

    D_i comparable to a_p H/N,
    c H<=y_i<=C H

at every middle-third selected center, and its distance along that straight side to BOTH endpoints is at least cH. These facts remain true for downward or reflected sides after orienting t_i as just specified.

Take the WHOLE comparison base to be

    I_i=[y_i-4R_i,y_i+4R_i],   L_i=8R_i,
    Y_i=y_i-4R_i,

where R_i satisfies Section 1 and, additionally, 20R_i<=y_i and 4R_i is smaller than the center's distance to both side endpoints. These inequalities follow for sufficiently small fixed c0 in R_i~c0 ell_i, since ell_i~b0 D_i<<H. Therefore I_i lies on ONE straight parent long side, lies in [Y_i,2Y_i], and L_i<=Y_i/2. The entire finite common half-ring base, including its driver/cutoff endpoints, is included in I_i; no part crosses a tooth peak, valley, ramp, neighboring child, or change of supporting line.

The below-base cells throughout I_i are exactly radial triangles from the SAME parent root. Uniform-base guard insertion subdivides only that straight side and radially refines these cells. Hence the owner's exact distributional identity applies to the ACTUAL pressure, with every added breakpoint retained. No affine actual-pressure assumption is made.

The exact coefficient to carry into its trace-lift estimate is

    L_i D_i/Y_i².                                        (6)

Since L_i~b0 D_i and Y_i~H in this main-side placement, this is bounded above and below by fixed multiples of b0(a_p/N)². If radii differ between parent types or one changes the selected intervals, retain D_i,Y_i,L_i and (6) individually; do not replace Y_i by a global H without the displayed comparability. Normalized child averaging must likewise use the actual r_i² and the actual child fan area. Disjoint intervals have bounded overlap (indeed the chosen rings are disjoint), so their physical parent-patch energies can be summed.

Finally choose ALL new physical-base guard abscissas within I_i on the same local d_i lattice as the uniform ring. The three child base nodes already lie on it because d_i divides r_i. There is no other old parent subdivision point inside I_i: the original center spacing is ell_i and 4R_i<<ell_i; only its protected three-node attachment triple is retained there. Transition collars may use arbitrarily small/nonuniform HEIGHTS while keeping their base endpoints on this lattice. The corner-star surgery adds interior points only and preserves all old edges. Conforming interior filler triangulation requires no new boundary point after the base chain is fixed. Thus the actual entire-base pressure trace is piecewise affine with breakpoints on that lattice, as required for the structured exact constant-normal extension on the uniform grid. The sole coarse-child kink is handled by the seven-node macro lift in Section 6, without an eighth boundary node or a skinny-cell projection.


## 10. The strengthened h² star budget for EVERY transition-base guard

Write h=d for the uniform lattice step. The preliminary thin-base collar in Section 3 bounds a transition guard star by O(h a_c r); the velocity guard estimate needs the STRONGER O(h²). Impose it explicitly after all pressure macrointerfaces and transition subdivisions are present.

At every newly inserted physical-base guard z outside the child's two unrefined base edges, apply the finite vertex surgery of Section 8 to its NONUNIFORM EXTERIOR incident triangles ONLY. Pick the positive surgery factors so their total z-star area is at most h². Leave every uniform-ring triangle unchanged; its contribution is already at most C h² by the uniform stencil. Thus

    S_exterior(z)<=C h²                                  (7)

for every such transition or ring guard, including guards on the common boundary of uniform and nonuniform regions. The parent radial fan triangles below the base are never changed. Every original base edge, every grid abscissa and every pressure-lift value remains unchanged. Surgery inserts interior points only. Applying it at the finitely many guards in any order is legitimate because refining a triangle never increases another old vertex star. Corner surgeries can subsequently meet both their single-triangle budget (5) and, if wanted, an h² bound by choosing the smaller target.

The new interior nodes remain in the nonuniform transition and its parent-scale O(r) region. Subdivide any new background-only edge that crosses a mandatory buffer at its prescribed fine spacing; this only refines triangles, so (7) and all old-vertex budgets remain valid. No uniform stencil is altered. The smallest resulting angle is positive for the fixed finite template, although it depends on h and the surgery targets. No strain estimate through these cells is used.

For each such guard the parent fan area below is at least c hD (exactly hD for two equal neighboring base segments). At an outer patch endpoint the other neighboring segment may be longer; this only increases its parent area and improves the following ratio. Consequently its exterior-to-parent ratio is now O(h/D), rather than O(a_c r/D). This is the actual geometric input for the full-vector velocity-guard budget; the improved h² bound must be used when that analytic estimate is invoked. The selected center has its fan floor a_c r² and is NOT subject to (7); its velocity residual is zero when the incident base velocity is chosen as its actual root value.


## 11. Fixed interfaces for the ENTIRE guard-pressure lift

The structured owner's entire-refined-base-pressure-collar-lift.md uses a fixed child-scale macro function S with S=|t-n| inside C_r, S=|t| outside S_(8r), base trace |t| and uniformly bounded affine gradients. Include its fixed U-shaped transition macrotriangulation BEFORE the final star surgeries. It has no new node on a child edge: the inner seven-edge traces are affine, and its outer top-midpoint is on S_(8r), where lattice nodes are allowed. Its inner crease is the existing root-to-top-right line. Reflected zones use the reflected S and grid.

Also include the vertical interfaces t=t_j for ALL possible new base guard abscissas in the transition, not just those with nonzero unknown coefficients. They lie on the fixed d lattice and have |t_j|>=4r. They therefore miss the child interior; the extreme interfaces t=±4r coincide with its sides and meet its top only at its existing corners. Conform the finite transition to these lines and the fixed S interfaces. On the common uniform ring the vertical lines are already lattice edges and require NO stencil change.

For an actual base remainder g, its only child-base kink is at t=0, so g=a t+k|t| on [-4r,4r]. The full lifted expression g(t)+k[S-|t|] is EXACTLY a t+kS in that strip. Therefore there is NO uncancelled vertical t=0 interface through the coarse child or its top edge. Do not add a vertical root-to-top-midpoint line through the child as an unnecessary refinement: it would create the forbidden eighth node. The fixed S macrostructure already carries the correct replacement crease.

This finite interface set is chosen from the mesh and its trace space, BEFORE any pressure coefficients or driver values are known. Every resulting function is prescribed by exact affine pieces on its cells; there is no interpolation through skinny transition cells. The distant cutoff interpolation occurs only on the exact uniform ring as in the structured proof. Its added nodes/diagonals are those already present there.

Now perform the root/nonfan, inherited-corner and all transition-base guard surgeries from Sections 4,8,10 LAST, and subdivide any remaining inadmissible background edge. Refinement preserves every affine piece of S, g and all logarithmic lifts and cannot enlarge an old vertex star. Thus the full-base pressure lift and the strengthened h²/epsilon_corner star budgets hold simultaneously. The protected fans and their reserves lie wholly in affine regions of S; their interiors are not crossed by its macrointerfaces. Descendant replacement therefore preserves this fixed lift exactly.

## 12. Binding the final analytic cutoff radii

The final structured entire-base lift uses an analytic radius R_an with bulk annulus R_an..2R_an, all bulk stencils inside S_(3R_an), local base cutoffs equal to one on S_(4R_an) and zero outside S_(8R_an), and tail support starting at |t|=4R_an. Its trace comparison interval has endpoints ±16R_an. Bind the geometry radius used above by

    R_geom=16R_an.

The exact uniform region through S_(4R_geom) then reaches S_(64R_an), and the comparison interval lies on the ONE straight radial parent side guaranteed by Section 9. Choose R_an<=ell/1000 and the earlier fixed c0 small enough that the larger safety neighborhood of radius 128R_an lies inside ell/4. These are only fixed numerical reductions of the ring radius, not new scale exponents. The child ratio r/R_an remains comparable to sigma by fixed factors. All local cutoffs therefore avoid the nonuniform child transition; all bulk stencils avoid the distant-tail region. This binding applies to the final nested-radius version of the structured entire-refined-base-pressure-collar-lift.md.
