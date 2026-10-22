# Relative finite coverage: compact two-cut assembly

NEW author assembly awaiting the finite relative handlebody lemma and independent review. Earlier first drafts are retained. This version uses ordinary vertical side boundary and a middle level in the already covered overlap; no artificial corner is discarded or assumed fixed.

## Exact ordinary input

Let Q be a connected smooth five-manifold with two signed ends. Its groupΠ is finitely presented, and each stable end group is identified isomorphically withπ₁Q. Cofinal end neighborhoods map ontoπ₂Q. The side boundary has a prescribed smooth product X₀×R on a collar, X₀ compact, with all components using the same signed heightt.

Start with arbitrary prescribed end opens P−,P+. BEFORE any connectivity calculation, choose smaller OPEN clean1-neighborhoods U−⊂P− and U+⊂P+, with π₁U±→π₁Q the specifiedΠ-isomorphisms, retaining exact side germs t<b and t>a by keeping the finite clean-end moves in the interior. Choose a deeper cofinalπ₂-surjective witness inside each selectedU±. Its map factors throughU±, soπ₂U±→π₂Q is still onto. In the actual exteriorπ₂Q=0 this is automatic. ALL subsequentU± in this file mean these normalized working opens, not the arbitrary prescribedP±. The desired compact isotopy has f₁(U−)∪U+=Q and therefore also f₁(P−)∪P+=Q. On every side component it restricts to one common compactly supported isotopy r_t ofR.

The actual exterior in the marked-torus application is aspherical, withΠ=Z^(n−1)×F₂, soπ₂-surjectivity is automatic. Its end/group witnesses are those of the stable owner's NEW pair reduction. The finite theorem does not requireΠ free abelian or an actual topological product identification of the exterior.

## Clean cuts and the common boundary slide

Construct a clean negative1-neighborhood A₀⊂U− with compact connected frontierH₀ and frontier/end/groupΠ-isomorphisms, retaining a common side cut t=b₀<b. Use regular levels of a proper smooth exhaustion agreeing witht on the side collar. The finite stable-image correction, proper generator arcs, and embedded spanning2-disks can all be supported in the interior, leaving that germ unchanged. The group ledger is the reviewed direct carving ledger: codimensionfour arc removal preserves the neighborhood group and makes its frontier ontoΠ; finite presentations give a finite normal kernel; codimensionthree disk carving preserves the neighborhood group, while the frontier four-dimensional circle surgeries kill precisely that kernel. No ambient-boundary Π-isomorphism or four-dimensional Whitney theorem is used.

Choose an increasing compactly supported isotopy r_t with r₁(b₀)=c>a and r₁(b)>c. Extend its field by a normal cutoff in the known side collar to a compact ambient isotopy h₀,t, equal to the common r_t on every boundary component. Put

V−=h₀,₁(U−), A−=h₀,₁(A₀), H−=∂A−.

Then A−⊂V−, the group maps remainΠ-isomorphisms, and the side cut is t=c. Choose a positive clean1-neighborhood A+⊂U+ disjoint fromA− and beyond the support ofh₀,₁, with compact connected frontierH+ and itsΠ-isomorphisms; retain a side cut t=d>r₁(b). The compact slabC betweenA− andA+ is a smooth cobordism with corners, fromH− toH+, with vertical original side S=X₀×[c,d]. The input opens have their product germs there. In particular, choosing

a<c<t₀<r₁(b)<d

gives S_low=X₀×[c,t₀]⊂V− and S_high=X₀×[t₀,d]⊂U+.

## Both working pairs are two-connected

Write Q±=Q−intA±, V+=U+. Van Kampen along the connected frontierH± gives π₁Q±=Π and π₁(V±∩Q±)=Π. Relative homology excision in theΠ-cover gives

H_i(Q̃±,(V±∩Q±)̃)≅H_i(Q̃,Ṽ±)=0, i≤2.

The right side vanishes because the end π₁-isomorphism andπ₂-surjectivity make(Q,V±)2-connected. Relative Hurewicz therefore gives both(Q−,V−∩Q−) and(Q+,U+∩Q+)2-connected. In each use the removed end is INSIDE that same target open set. No unproved connectivity of the opposite truncated pair or moved-end overlap is used.

## Boundaryless raw engulfing on the actual work regions

Only the adopted BOUNDARYLESS finite engulfing operation is used. Here is its reduction to M=Q±, which has the original side boundary and the compact clean-cut frontier meeting in corners. Write O for its relevant target open, U+∩Q+ orV−∩Q−. On the known side collar the height-preserving inward normal push preservesO because O has its exact height-product germ there. On a sufficiently small collar of the compact clean-cut frontier, the whole collar lies inO, so an inward push there also preservesO. At their corner use the two independent product normal coordinates; their small simultaneous pushes lie in the same covered buffer. Extend with cutoffs. Thus there is an inward collar embedding j:M→M_δ, a diffeomorphism onto a smoothly trimmed cornered region, homotopic as a map ofpairs to the identity, whose homotopy and inverse collar retraction preserveO. Pushing once more off the trimmed faces shows the interior pair(intM_δ,O∩intM_δ) has the same relative homotopy groups as(M,O), hence is2-connected. No uncovered side region or artificial interior guard is removed.

Apply this to the ACTUAL finite moving polyhedron X=D orY. The finite handlebody lemma supplies product contact collars at its boundary traces. Choose the trim sufficiently small that X in the deleted boundary collars is already inO; this is possible since X∩∂M⊂O and X is compact. Subdivide those product contact collars at their trim levels; on the open interval approaching a removed trim face use the explicit dyadic subdivision of its fixed collar coordinate. This gives a locally finite relative triangulation without a dependent sequence of geometric selections. The restriction X_δ=X∩intM_δ is a closed relative polyhedron in that boundaryless work manifold, of dimension≤2, and X_δ−O is compact. The adopted compact-difference version of finite engulfing therefore applies. Equivalently, choose a compact polyhedral X₀ containing X_δ−O in its relative interior and protect the closed relative shield closure(X_δ−X₀)⊂O. That shield has dimension≤2, exactly the adopted protected-closed-polyhedron bound; its portion interacting with a finite support is compact. It is not a fixed4-dimensional boundary substituted into the low-dimensional theorem.

The produced ambient isotopy has compact support in intM_δ. Extend it by the identity outside that interior. It now fixes an ACTUAL OPEN neighborhood of every boundary/contact collar in the originalM. The omitted part X−X_δ is fixed pointwise and was already inO, so the entireX is engulfed. Extension overA± is smooth because the map is identity on an open frontier collar, not merely on the frontier points.

The subsequent finite body-capture fields have the same property. Their compact body contacts with∂M lie in the already covered compact frontier/side base. Choose a smaller OPEN collar there contained in the target open and set the generating fields to zero on it. The elementary longitudinal expansion still captures the required body; trajectories arrested in that collar are already covered. Outside the body support the fields vanish. Thus body capture also extends smoothly by the identity overA± and preserves an open original side collar. This is the exact relative use of the finite smooth flows, not an assumed general boundary-relative engulfing theorem.

## Finite relative handlebody input

Choose a finite Morse handle decomposition ofC, standard on the vertical side. Arrange the critical values by index and place the index2/3 separating regular value so its side level is exactlyt₀. The side height can first be monotonically reparametrized witht₀ at that regular value. The finite handlebody lemma being authored separately must provide actual compact lower/upper bodies L,B, with C=L∪B, together with finite polyhedral collapses

L↘H−∪S_low∪Y,    B↘H+∪S_high∪D,

whereY,D are finite polyhedra of dimension≤2, obtained from the lower0/1/2 handles and the reversed upper3/4/5 handles. Their boundary attachment traces lie in the indicated respective bases. Each compact collapse has a compatible smooth refinement and can be expanded by the reviewed explicit simplex vector fields, keeping the original boundary fixed: the fixed side pieces and frontier collars are already covered by the target open set. This is a finite relative product/handle-collapse statement, not a citation to full engulfing, splitting, or fibering.

AllowingY to meetS_low, andD to meetS_high, is sufficient and avoids the unnecessary requirement that their side intersections lie only at the end corners. Finite smooth engulfing needs exactly that any boundary intersection already lie in the relevant target open set. No high-dimensional side star is counted as a2-polyhedron.

## Two compact motions

First engulfD fromU+ inQ+, using its2-connectivity. Its boundary attachment points are inH+∪S_high⊂U+. The finite smooth isotopy, by the interior-pair reduction above, fixes OPEN collars ofH+ and the ENTIRE original side; extend it smoothly overA+ by the identity. The target open set then containsH+∪S_high∪D. Apply the finite collapse expansion forB, with cutoffs zero on the already covered compact boundary collars, so the combined first map h satisfies

B⊂h(U+),    h|A+=id,    h|∂Q=id.

Set C₀=Q−U+. BecauseA+⊂U+ andh fixesA+, h(C₀) avoidsA+. Its part inQ− therefore lies in the compact slabC. Define K=h(C₀)∩Q−. It is compact and missesB, hence lies inL.

Now engulfY fromV− inQ−, using its2-connectivity, fixingH− and the entire original side. Boundary attachments lie inH−∪S_low⊂V−. Extend overA− by the identity. The collapse expansion ofL makes the resulting mapk satisfy

L⊂k(V−),    k|A−=id,    k|∂Q=id.

Thus the portionK ofh(C₀) lies ink(V−), and its remaining portion is inA−⊂k(V−). Therefore h(Q−U+)⊂k(V−).

Finally put f=h⁻¹ k h₀,₁. Then f(U−)∪U+=Q. On every original side component f=r₁. Concatenatingh₀,t, k_t andh_t⁻¹ yields a compact smooth isotopy with the same common one-dimensional boundary slide, with stationary time intervals added as needed.

## Marked-pair and countable-table consumers

The stable owner's NEW `pair-coverage-from-ordinary-exterior-coverage.md` extends this common slide over the actual smooth disk tube by(z,v,t)↦(z,v,r_t(t)). Its buffered end cuts then give ordinary pair coverage. This is still a NEW consumer to review, not an inference that finite smooth engulfing fixes a codimension-two core.

For the fixed-positive-tail grid use the ORIGINAL open marked pairQ_m, not a fixed exterior cut at an arbitrary finite height. Reparametrize its height byR≈(−∞,b_m), rerun the tube construction there, and choose a fresh tube with radial deformation bounded in that new height. Its fresh exterior again has compact sections, stableΠ, andπ₂=0. Apply the finite theorem to that exterior and extend over that tube. The resulting compact pair isotopy extends by the identity over the removed positive tail. ACω selects the entire finite packages for the preindexed countable table; no later input depends on an earlier selection. See the separate NEW `finite-coverage-choice-interface.md` for the exact background/data qualification.

All operations are performed before auxiliary baseT² stabilization. Product with that torus is explicit afterwards. The ONE first review found the two-cut, finite middle-level capture, tube and finite-package geometry sound. This focused repair binds the normalized working opens and the boundaryless-to-interior fixed-OPEN-collar reduction. Final changed-passage review of this assembly, the finite lemma, pair extension and choice interface remains required. No complete marked-torus or original TOP closure is claimed here.
