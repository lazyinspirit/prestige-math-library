# General Kauffman support bounds from the declared evaluation

New author-stage unit, frozen for FIRST independent review, 2026-10-21. This proves the precise all-diagram support bounds needed by the adequate-double argument. It neither reconstructs the adopted polynomial suppliers nor claims to have read the unavailable1988Topology paper's proof. No canonical item, accepted-proof check, hash or validator operation is included.

## Actual consumed interfaces and scope

Only Statement/Definition/Facts sections of the following existing items were read. Root explicitly authorized their actual Statement-only consumption for this unit; their proof bodies and acceptance/status machinery were not inspected.

- `items/lem-framed-kauffman-link-evaluation.md`: regular scalar P, empty value1, circle factor d, curl factors a and a-inverse, difference skein, and integral-domain rational embedding.
- `items/def-kauffman-regular-isotopy-and-dubrovnik-conventions.md` and `items/lem-kauffman-dubrovnik-writhe-component-conversion.md`: for NONEMPTY diagrams D=P/d, L_K(A,Z)=-i^{w(K)}(-1)^{k(K)}D_K(-iA,iZ); L is independent of whole-component orientations and has the Kauffman sum skein and curls; F=A^{-w}L is invariant under all finite oriented Reidemeister moves and planar isotopy.
- `items/thm-descending-diagram-is-unknot.md`: under AC_omega, a based finite rational polygonal ONE-COMPONENT code whose first encounter at every crossing is over represents the standard unknot through orientation-preserving ambient isotopy. Its narrower rational/one-component input is dealt with explicitly below, not enlarged silently.
- `items/thm-oriented-reidemeister-equivalence-theorem.md`: equivalent regular oriented link diagrams are related by a FINITE sequence of planar isotopies and oriented R1/R2/R3. Its declared local move realizations have ball support; fixed decorated-diagram height changes preserve the represented link.
- `items/thm-isotopy-extension.md`, compact-source clause: a smooth compact embedding isotopy extends with support in any chosen neighborhood of its compact trace. This is used only for the explicit height separation and ordinary finite planar/lift adjustments.
- `items/def-oriented-reidemeister-moves.md`: all orientation/sign variants of those finite local moves.

Assume AC_omega (hence permitted under the original theorem's fullAC). A diagram is any NONEMPTY finite regular diagram of circles, with any number of components and arbitrary over/under data. Connectedness, alternation, reducedness and orientability of spanning surfaces are NOT assumptions.

Write Lambda_D=L_D(A,Z), with orientations chosen arbitrarily. Work in the rational function field containing the declared universal evaluation. The result below will itself prove that this value lies in the integral Laurent polynomial ring, so it is not assumed in advance from a formal division by d.

## Claim

If D has n crossings, then Lambda_D is in Z[A^{+/-1},Z^{+/-1}], and each monomial A^r Z^s with nonzero coefficient satisfies

`r+s <= n` and `-r+s <= n`.

These inequalities concern all diagrams, including disconnected and nonalternating diagrams. Negative s is allowed and needed for split components.

## Exact unlink normalization

Set delta=(A+A^{-1})/Z-1. For a side-by-side k-circle diagram O_k, P(O_k)=d^k, so D(O_k)=d^{k-1}. In the conversion substitution,

`d(-iA,iZ)=1+((-iA)-(-iA)^{-1})/(iZ)=1-(A+A^{-1})/Z=-delta`.

Since w(O_k)=0, the declared conversion gives

`Lambda(O_k)=-(-1)^k(-delta)^{k-1}=delta^{k-1}`.

Thus F(O_k)=delta^{k-1}. In particular Lambda(O_1)=1. Each of delta's three monomials has exponent (r,s) equal to (1,-1),(-1,-1),(0,0); each satisfies BOTH r+s<=0 and -r+s<=0. Products delta^{k-1} consequently satisfy the same bounds with right side0. This calculation uses the supplied Dubrovnik/Kauffman conversion exactly; it does not replace the sum convention by the difference convention.

## Finite rationalization without a change of diagram data

The descending supplier is stated for rational polygonal codes. Here is the finite reduction to that input. Around the finitely many transverse crossings choose disjoint small planar disks, and around the finitely many chosen basepoints choose disjoint crossing-free disks. Straighten the two local transverse branches in each crossing disk, move their intersection to a rational point and choose rational slopes by a sufficiently small orientation-preserving local deformation. Choose rational endpoints for the branches on smaller polygonal neighborhoods. At basepoints similarly choose a straight rational subinterval containing a rational marked point. None of these deformations passes one branch through another or changes a crossing sign or over/under label.

What remains is a finite family of disjoint embedded compact edge arcs with prescribed endpoint collars; crossing-free components can be cut at their marked base intervals. Choose disjoint narrow strips about their interiors. Compactness gives a finite subdivision such that on each piece the arc is a graph over its local longitudinal direction. Take a sufficiently fine rational polygonal approximation in those strips, agreeing on the chosen rational endpoint collars. It can be chosen transverse to the strip fibers and monotone longitudinally, so it remains simple and does not meet another edge strip. Moving its transverse graph displacement from0 to its final value gives an isotopy of the arc relative to its endpoint collars. Apply these finitely many disjoint-strip isotopies and extend them inside the strips; round polygon corners away from the prescribed crossing/base disks. This produces the smooth representative of a finite rational polygonal code by planar isotopy, without adding or deleting crossings.

All choices are finite. Cyclic branch orders, component order, directions, basepoints and first/second encounters are preserved. Oriented crossing signs are preserved by the orientation-preserving plane isotopy, so writhe and blackboard framing data are unchanged. The polynomial interfaces are planar-isotopy invariant. Consequently the rational-code supplier can be applied to the resulting codes without changing n, any descending condition, or Lambda/F.

## A fully descending based ordered link is the unlink

Order the k components and choose a direction and a basepoint on each. Traverse component1 from its basepoint, then component2, and so on. Call the diagram descending if every crossing's FIRST encounter is on its overpassing branch. For a crossing between components i<j this says EVERY such i-branch is over the j-branch. On a single component it is the usual based descending condition.

Choose a smooth realizing lift (p_i(t),z_i(t)) of the rationalized decorated diagram. Its heights are bounded; take M>=1 greater than every absolute height. Let H_i=(k-i)(4M+4). The explicit isotopy of the link is

`(p_i(t), z_i(t)) -> (p_i(t), z_i(t)+u H_i),  0<=u<=1`.

At a self-crossing the height difference is unchanged. At a mixed crossing with i<j it changes from a strictly positive value to that value plus u(H_i-H_j), still strictly positive. All projected coincidences are precisely the prescribed crossings, so at every u this is an embedding of the whole finite union of circles. Reparameterize u to be stationary near its endpoints and apply the declared compact isotopy-extension interface. The final components lie in pairwise disjoint horizontal slabs, since their height ranges have width at most2M and adjacent offsets differ by4M+4. This constructs a split placement without changing the component map.

Each individual projected component, after the other components are ignored, is a rational based descending knot code; former mixed crossing locations are merely regular points/bends, not new self-crossings. The declared descending-knot theorem therefore makes it an oriented unknot. The declared Reidemeister equivalence theorem gives a FINITE sequence of planar isotopies and oriented Reidemeister moves taking that component diagram to a round circle.

These one-component sequences can be realized inside their OWN slabs, so no relative-support assertion is being inferred from an arbitrary ambient unknot isotopy. Identify a slab with R3 by (x,y,z)->(x,y,psi(z)), with psi increasing; this preserves its projected over/under order. Use the finite diagram sequence just obtained. Realize each local move in a ball and each planar/lift adjustment in a compact neighborhood of its compact trace in that R3. The finite composite has compact support. Pull it back to the slab and extend by the identity outside the slab; because its support is compact inside the open slab this is a smooth ambient isotopy. The distinct slabs are disjoint, so the component isotopies do not touch any other component. Their final round circles bound disjoint horizontal disks. Translate them horizontally until their projections are side-by-side, and then flatten their heights, preserving disjointness; compact isotopy extension again realizes this finite endpoint adjustment. The whole descending diagram thus represents O_k with its actual component directions.

Apply the declared oriented Reidemeister equivalence theorem to the WHOLE link to obtain a finite Reidemeister/planar sequence from the descending diagram to O_k. This last step matters: projecting the separately supported slab movies need not give local full-link diagram moves directly. F's declared finite-move invariance applies to the supplied whole-link sequence. No infinite move process or unsupported multicomponent descending theorem is used.

It follows that for a descending D,

`Lambda_D=A^{w(D)} delta^{k-1}`.

Since w(D) is the sum of n signs, |w(D)|<=n. Multiplication by A^{w(D)} shifts the two bounds for delta^{k-1} to at most w(D) and -w(D), hence to at most n. This proves the desired support claim in every descending base case, including n=0 and any nesting of crossing-free components.

## Double induction and skein closure

For an arbitrary D choose the finite ordering, directions and basepoints above. Let b(D) be the number of crossings whose first encounter is UNDER. Induct lexicographically on (n,b), with n the outer parameter. The fully descending b=0 case has just been proved for every n.

If b>0, choose the first bad crossing in the fixed traversal and switch it, producing D_sw. Projection, directions, component count, basepoints and encounter order have not changed. Exactly that crossing changes from bad to good; no other bad status changes. Thus D_sw has n crossings and b-1 bad crossings. The inner induction applies to it.

Resolve the chosen crossing in the two local pairings, producing D_0,D_infinity. Each has n-1 crossings. Both remain NONEMPTY finite diagrams of circles: the outside arcs of the old closed diagram persist, and reconnecting their four ends cannot delete them. They may have different component numbers and need not preserve the old directions. Give them any directions; whole-component orientation independence of L makes this legitimate. The outer induction applies to both, with arbitrary new based orders if needed.

The consumed Kauffman sum-skein is

`Lambda_D + Lambda_Dsw = Z(Lambda_D0 + Lambda_Dinfinity)`.

Hence

`Lambda_D = Z Lambda_D0 + Z Lambda_Dinfinity - Lambda_Dsw`.

By induction the switched term has integral Laurent coefficients and support in the two halfplanes with bound n. Each resolution term has bound n-1; multiplication by Z adds1 to BOTH r+s and -r+s, giving bound n. Addition/subtraction cannot create an exponent absent from all summands; cancellations only remove exponents. Therefore Lambda_D is an integral Laurent polynomial with both required support bounds.

Lexicographic induction terminates: switching decreases b at fixed n, and resolving decreases n. The proof treats every nonempty finite regular diagram and uses only the explicitly consumed polynomial, descending-knot, finite Reidemeister and compact-extension interfaces. It proves the GENERAL support primitive needed by the adequate-double consumer, without relying on alternating-link crossing-minimality or the unavailable1988 paper's proof.

## Export and limits

Export: for any nonempty n-crossing diagram, Lambda=sum u_rs A^r Z^s has u_rs=0 whenever r+s>n or -r+s>n. This includes split and nonalternating diagrams and supplies exactly the support-bound input identified in the actual adequate-link paper. Root retains dependency adoption and all native metadata/gates. This unit does not prove outer-coefficient nonvanishing for adequate diagrams, adequate minimality itself, or any MT surface preparation.
