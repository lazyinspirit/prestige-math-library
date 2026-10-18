# Local Wall reduction, cap-reference correction, and the weight sign

Scientific continuation. No canonical edits. This supplies a proposed intersection-form calculation missing from rt-cap-normalization.md §8 and corrects its provisional sign target. Root cycle1 accepted the algebraic normalization/coboundary pieces but requested precision in the four-dimensional cut and all outside-corner intersection eliminations. The current text contains that cycle2 repair and awaits focused root review; it does not self-certify closure. It uses the parent's proved relation-cocycle lemma in `../maslov/middle-relation-composition.md`. It does not supply relative Cerf completeness.

## 1. Convention and a necessary correction to the requested target

The parent's/native Walker convention is

μ_W(L_1,L_2,L_3)=sign ψ,

where a_1+a_2+a_3=0 with a_i∈L_i and ψ(a,a')=ω(a_1,a_2'). The parent fixes ω by oriented intersection of the first tangent followed by the second, and n_comp=n_2+n_1+μ_W(R_1λ_0,λ_1,R_2^tλ_2).

Turaev IV3.5 instead uses a=a_1+a_2∈L_3 and h(a,b)=ω(a_2,b). Replacing the domain coordinate by a_3=−a gives

h(a,b)=ω(a_2,a_1')=−ω(a_1',a_2)=−ψ(a',a).

Symmetry of ψ therefore proves μ_T=−μ_W, with no convention appeal or conjugation. Turaev's Δ in II1.6 is p_− and D/Δ=κ. Consequently his IV4.3 anomaly κ^{μ_T} is κ^{-μ_W}. This sign is independently reproduced by the local intersection calculation below.

It follows that the literal requested equation δa=−Δσ−μ_W is the wrong target for the fixed κ^{-n} weight action: for the reference caps, Δσ=+μ_W, so it would require δa=−2μ_W even when no reference change occurs. The sound choice preserving the prescribed composition/mapping-cylinder formula is **weight action κ^{+n}**. Changing that action is an essential correction to the native theorem's explicit formula, not a restriction to κ=1. The correct map will be κ^{n+a(M)}Z_α(M), with a explicitly constructed in §6. The alternative is to negate the composition Maslov correction and keep κ^{-n}; that would change the prescribed mapping-cylinder convention and is not used here.

## 2. Linear-algebra signature reduction used in the geometric proof

Let E be a finite real vector space with symmetric form q, and V⊂E. Then

sign(E,q)=sign(V,q|_V)+sign(V^⊥,q|_{V^⊥}).

Here the restrictions may be degenerate and signatures ignore radicals. To prove it, split off a nondegenerate complement V_nd to rad(q|_V) inside V by diagonalization. It splits E orthogonally and reduces to the case V is isotropic. First quotient rad(q) if necessary, noting that its image in every restriction is radical and changes no signature. Extend a basis v_1,…,v_k of V to dual vectors u_1,…,u_k with q(v_i,u_j)=δij. Replacing u_i by u_i−(1/2)Σ_jq(u_i,u_j)v_j makes their mutual pairings zero. Thus V plus its dual span has matrix [[0,I],[I,0]], signature0, and the orthogonal complement is naturally the nondegenerate reduction of V^⊥/V. Hence sign(E)=sign(V^⊥). Undoing the first orthogonal splitting proves the formula. The same argument covers an isotropic V meeting the ambient radical by discarding those radical basis vectors first.

## 3. Wall's decomposition: exact homology and forms

Let W=W_1∪_{M_0}W_2 be a compact oriented smooth four-manifold, with corners rounded using product collars. Let

∂W_1=M_0∪(−M_1),  ∂W_2=(−M_0)∪M_2,

and orient Σ=∂M_0=∂M_1=∂M_2 accordingly. The Mi are three-manifolds meeting along the same boundary Σ; H_1(Σ;R) has its oriented intersection form ω. Define K_i=ker[H_1Σ→H_1M_i], known Lagrangian from boundary duality. Put E=H_2(W;R), with the absolute intersection form q_W, and

V=im[H_2(W_1)⊕H_2(W_2)→H_2(W)].

Cycles supported in interiors of W_1 and W_2 are disjoint, and intersection within each piece is its original intersection form. Therefore q_W pulled back to H_2W_1⊕H_2W_2 is q_{W_1}⊕q_{W_2}. The kernel of the inclusion map lies in the radical of that pulled-back form, since its image intersects every absolute cycle trivially. Quotienting by that kernel changes no signature. Thus

sign(q_W|_V)=σ(W_1)+σ(W_2).

By §2 the entire signature defect is sign(q_W|_{V^⊥}). We now compute that form, rather than citing nonadditivity.

Use real singular chains subordinate to the collared decomposition (or a finite triangulation respecting its faces). Excision gives

H_2(W,M_0)=H_2(W_1,M_0)⊕H_2(W_2,M_0).

For z∈H_2W write z_i for its image in the ith relative group. The pairing q_W(z,iy) for y∈H_2W_i is the evaluation pairing of the image of z_i in H_2(W_i,∂W_i) with y. This is checked on relative transverse surfaces: all intersection points lie inside W_i; allowing the relative boundary on M_0 or on all ∂W_i does not alter those points. Poincaré–Lefschetz duality identifies H_2(W_i,∂W_i) with H^2(W_i), and evaluation on H_2(W_i) is perfect over R. Therefore

z∈V^⊥ ⇔ z_i maps to0 in H_2(W_i,∂W_i) for i=1,2.

The triple exact sequence for M_0⊂∂W_i⊂W_i, followed by excision ∂W_i/M_0≅M_i/Σ, contains

H_2(M_i,Σ)→H_2(W_i,M_0)→H_2(W_i,∂W_i).

Consequently, for each z∈V^⊥, choose s_i∈H_2(M_i,Σ) mapping to z_i. Let a_i=∂s_i∈H_1Σ. Necessarily a_i∈K_i. The boundary of z in the relative sequence for (W,M_0) is zero, so the images of a_1+a_2 in H_1M_0 cancel, with the displayed orientation conventions. Hence a_0=−a_1−a_2 lies in K_0 and is the boundary of some s_0∈H_2(M_0,Σ).

Conversely, take any triple (a_1,a_0,a_2)∈K_1⊕K_0⊕K_2 satisfying a_1+a_0+a_2=0. Choose relative surfaces/chains S_i in M_i bounding the respective cycles. After adding a chain in Σ to correct any chain-level difference between homologous boundary representatives, the sum S_1+S_0+S_2 is a closed two-cycle in W. Push its pieces a small distance into the collared pieces of W; denote the resulting class by z(a). The same relative exact-sequence criterion shows z(a)∈V^⊥. Choosing different bounding surfaces changes the intersection form only by its radical: differences in M_1 or M_2 are boundary classes in H_2W, hence globally radical; differences in M_0 lie in V∩V^⊥, hence radical in V^⊥.

For any original z∈V^⊥ the constructed z(a) has the same image (z_1,z_2) in H_2(W,M_0). Therefore z−z(a) lies in im H_2M_0. It also lies in V^⊥, and im H_2M_0⊂V. Thus it is radical in V^⊥. We have proved that the triple-cycle construction surjects onto the nondegenerate reduction of V^⊥; no unproved dimension count or 'all cycles are standard' claim is used.

## 4. The local corner intersection and its sign

Near Σ use coordinates (u,v,p) with u≥0 and p∈Σ, taking

or(W)=du∧dv∧or(Σ),

W_1={v≤0}, W_2={v≥0}, M_0={v=0,u≥0}, M_1={u=0,v≤0}, M_2={u=0,v≥0}.

The induced orientation of M_0 as a face of W_1 is −du∧orΣ. Its boundary at u=0 has outward vector −∂u and orientation orΣ. The outer face of W_1 has orientation −dv∧orΣ, so the convention ∂W_1=M_0−M_1 gives or(M_1)=dv∧orΣ and its boundary again orΣ. Similarly or(M_2)=−dv∧orΣ and ∂M_2 has orientation orΣ. These coordinates therefore realize exactly the orientations of §3.

The three bounding surfaces in a triple cycle meet the corner as product strips along the three rays in the half (u,v)-plane. If t is a ray coordinate pointing away from the corner and a_i is the boundary cycle, the oriented strip is −dt∧a_i: its boundary at t=0 is a_i. Perturb a second triple's corner junction to (ε,ε) and its strips in the half-plane, keeping its first strip endpoint on the negative-v boundary ray, its second endpoint on the nonnegative-u seam ray, and its third on the positive-v boundary ray. Here is a precise separation outside that normal fan. Choose bounding relative surfaces/chains whose boundaries are the specified actual smooth singular one-cycles a_1,a_0,a_2 with the exact chain equality a_1+a_0+a_2=0: choose a_1,a_2 first, define a_0=−a_1−a_2, and use that its homology class is in K_0 to choose its bounding chain. The same is done for the primed triple. A relative bounding chain can be adjusted to have that exact boundary by adding its boundary-homology correction within a collar; no additional central two-chain in Σ is needed. After finite smooth subdivision all chains have product collars, and their interiors lie in M_i outside a fixed small collar of Σ.

Away from Σ, the three faces M_i have disjoint tubular neighborhoods. On the two surfaces supported in the same face, choose two distinct constant small normal levels into W. For M_1 and M_2 these are distinct positive u values; for the seam M_0 choose two distinct v values, with a compact collar cutoff. Even if the original surfaces intersect along curves in the same three-dimensional face, their pushed copies are disjoint because their normal coordinates differ. Surfaces supported on different faces remain in disjoint face neighborhoods outside the corner, so no cross-face intersection occurs there. In the transition annulus between these face neighborhoods and the central normal fan, keep the two same-face normal paths ordered and distinct; each face's two paths run in its own disjoint angular sector until they reach the prescribed fan disk. Such paths are obtained by linear interpolation between their ordered constant levels and two ordered endpoints on the sector boundary. This introduces no crossings in the transition annulus. Thus every possible intersection outside the central normal disk is excluded either by distinct normal levels, disjoint face neighborhoods, or disjoint ordered sector paths. The only normal-arc crossing left inside the fan disk is between the first seam strip (coefficient a_0) and the second negative-v strip (coefficient a_1'). There is one crossing of their normal arcs. The first ray tangent is +∂u; the second tangent points away from the shifted corner towards the negative-v ray, so its v component is negative. Their determinant in the ordered normal plane (∂u,∂v) is negative.

At such a crossing, the ordered surface tangent bases are (−t_0,a_0,−t_1',a_1'). Moving the first surface's Σ tangent past the second surface's normal tangent contributes one minus sign. The two prefixed minus signs cancel each other. Therefore the four-dimensional intersection sign is minus the normal-plane crossing sign times the oriented Σ intersection sign. Since that normal crossing sign is −1, the sum of intersection signs is

q_W(z(a),z(a'))=ω(a_0,a_1')=−ω(a_1,a_0').

The last equality uses isotropy and a_1+a_0+a_2=0, and is precisely the symmetry of the Walker form on the triple space with order (K_1,K_0,K_2). Thus the pullback of the entire remaining intersection form is −ψ_W. This calculation is unchanged by adding exact boundary representatives: Stokes/intersection boundary cancellation changes only the radical classes already identified in §3.

The surjection in §3 is form preserving for this pullback. Its kernel is radical, and every radical of the pulled-back form maps to the radical of the target because the map is onto. Hence their nondegenerate reductions are isometric and their signatures agree. Combining §§2–4 yields the complete local nonadditivity formula in the present convention:

σ(W)=σ(W_1)+σ(W_2)−μ_W(K_1,K_0,K_2).

No form is assumed nondegenerate before its radical is removed. The proof works componentwise for disconnected Σ and disconnected pieces, using orthogonal sums.

## 5. Application to actual surgery traces and reference caps

For a special graph surgery presentation let W_L be B⁴ with its framed surgery two-handles attached. The intersection pairing on H_2(W_L;R) has matrix B_L: a component's core disk capped by a Seifert surface has self-intersection its framing; two such capped cores intersect with algebraic multiplicity the oriented linking number. The intersection formula follows by pushing the Seifert surfaces normally before counting crossings. Thus σ(W_L)=σ(B_L), including singular B_L.

For the stacked special graphs in rt-cap-normalization.md §6, the following is the exact **relative four-dimensional cut**, correcting the earlier abbreviated 'thicken the three-dimensional surgery' claim. An ordinary B⁴ with G full attaching-circle zero-framed two-handles has H_2 of rank G and is not the product asserted below. The middle collar meets only two disjoint patches of each attaching circle, so its relative handle index is different.

Realize the stacking separator S² as the equator bounding a three-ball P⊂B⁴. Give P a two-sided collar P×[−δ,δ]_t. The surgery links L_1,L_2 lie outside that collar in the two side boundary hemispheres and their two-handles remain entirely in the corresponding side trace pieces. Each new joined-handle annulus A_r has its attaching circle crossing the equator twice transversely. Choose its attaching tubular neighborhood so the portions near those crossings are two disjoint product three-balls. Parametrize its newly attached four-dimensional two-handle as

h_r=D²×D²≅(I_s×I_t)×D²_z,

where the two portions of ∂D²×D² meeting P×[−δ,δ] are exactly {s=−1}×I_t×D²_z and {s=+1}×I_t×D²_z. These are its two opposite square edges thickened by D². They are identified with two disjoint disk-product patches D²×I_t in ∂P×I_t. The other two attaching pieces I_s×{t=−1}×D²_z and I_s×{t=+1}×D²_z lie in the negative and positive side boundary hemispheres respectively. Corners between these four patches may be rounded in arbitrarily small product collars. The zero framing is exactly the condition that the chosen z-disk coordinates agree along the two product attachments without an extra rotation. The standard paired arc presentation of T3/T4 permits this choice: its annulus lies in a product disk, and the two equatorial crossings use the same z framing.

Let C be the union of P×I_t and the G handles h_r, with only their s=±1 patches identified with the middle collar. Relative to that collar each h_r is

I_s×(I_t×D²_z)=D¹×D³,

attached along S⁰×D³. It is therefore a **four-dimensional one-handle relative to C**, although it was a two-handle relative to the original B⁴ with its entire S¹×D² attaching boundary. Since all attachment disks are disjoint and all product coordinates agree, there is an explicit product identification

C=[P ∪_{S⁰×D²_z} (⊔_{r=1}^G I_s×D²_z)]×I_t=U_G×I_t.

The bracketed three-manifold is the genus-G standard handlebody. Hence H_1(C)=R^G, H_2(C)=0, and σ(C)=0. This homology check distinguishes the relative-cut model from the incorrect full attaching-circle model.

The intersections with the closures of the two complementary side pieces are exactly

C∩W_side,−=(P×{−1})∪(⊔_r I_s×{−1}×D²_z)≅U_G,

C∩W_side,+=(P×{+1})∪(⊔_r I_s×{+1}×D²_z)≅U_G.

Indeed these faces consist of the side of the separating three-ball collar together with precisely the t=±1 attaching patches of the newly attached handles. The remainder of each side is the original B⁴ half with the old L_i two-handles attached. Rounding the product indentations along the displayed patches is an isotopy of its boundary collar; no whole new handle remains in that side piece. Thus the side pieces are orientation-preservingly identified with the original traces W_{L_1},W_{L_2}, including their incoming/outgoing cap faces. The canonical bottom/top orientations of C are opposite, as for every oriented product U_G×I. This gives the actual decomposition

W_{L_comp}=W_{L_1} ∪_{U_G} (U_G×I) ∪_{U_G} W_{L_2}

with all gluing faces and collars specified, not just an equality of total handle counts.

Absorbing the cylinder C into W_{L_1} is a boundary collar extension, hence a diffeomorphism relative to the other boundary faces and does not change signature. Apply §§3–4 when gluing that extended trace to W_{L_2} along the remaining U_G face. Its common boundary surface is the canonical middle surface with the orientation reversal explained next. For disconnected middle surfaces use the r−1 separating family-meridian compressions of rt-cap-normalization.md §7 on the separator P before taking its collar. Equivalently cut P along r−1 disjoint properly embedded separating disks; each disk separates the prescribed boundary-arc family. Their thickened disk-product surgeries split U_G×I into the disjoint products U_{g_q}×I_q. The side trace pieces are unchanged outside those disk collars. The redundant rth family-meridian gives an extra separated zero-framed two-handle in the alternative presentation, of matrix [0] and signature0; omit that redundant handle for the actual cut. The same cut model therefore applies componentwise, with the Wall forms and signatures added.

The corner orientation Σ_corner in §4 is opposite the **canonical middle object orientation** Σ: its orientation is induced from the incoming face of M_2, while ∂M_2 contains −Σ. The three corner kernels, identified with canonical H_1Σ, are

K_1=R_1(α_0),  K_0=α_1,  K_2=R_2^t(α_2),

where α_q are the meridian/reference Lagrangians of the chosen cap parametrizations. To verify K_1, cap the incoming boundary of M_1 by U_{α_0}. Mayer–Vietoris says that a middle class dies in this capped three-manifold precisely when it is homologous in M_1 to a class in α_0; this is exactly R_1α_0. The same exact-sequence argument on the outgoing cap of M_2 gives K_2. The common middle handlebody has kernel α_1 by definition. This identifies all spaces without using maps into the final composite.

Replacing ω by −ω negates the Walker form and its signature. Thus §4 becomes, in the canonical middle orientation,

σ(B_comp)−σ(B_1)−σ(B_2)=+μ_W(R_1α_0,α_1,R_2^tα_2)=:μ_α.

In particular the complete algebraic composition formula previously obtained is

Z_α(M_2M_1)=κ^{-μ_α}Z_α(M_2)Z_α(M_1).

This independently confirms both the positive Δσ and the negative exponent in the projective anomaly. It agrees with Turaev after the explicitly proved translation μ_T=−μ_W.

## 6. Actual cap-reference correction for arbitrary real Lagrangians

There is no need to realize an arbitrary real λ as a handlebody kernel. Keep the actual geometric cap/reference meridians α and correct their coordinates by the integer

w(R;λ,α)=μ_W(λ_0,α_0,R^tα_1)+μ_W(Rλ_0,α_1,λ_1),

a(R;λ,α)=−w(R;λ,α).

Both terms are defined on actual surface homology spaces, with all relation images Lagrangian by the parent's proved relation normal form. The correction vanishes when λ=α, including the empty boundary cases. It is additive under direct sums.

Here is a direct proof of its coboundary, rather than a definition by the desired equation. Use the parent's proved associative central category of Lagrangian relations: objects are symplectic spaces with chosen Lagrangians and composition weights add μ_W. For each surface let J: (H,λ)→(H,α) be the diagonal relation with weight0 and J^{-1} the same relation from α to λ, also weight0. Their composites have weight μ(λ,α,λ)=0, so they are actual inverse arrows. An unweighted relation R regarded between the α objects has weight0. The composite J_out^{-1}∘R∘J_in, regarded between the λ objects, has weight exactly w(R) by the two explicit middle-space Maslov formulas above. This is a finite computation of its weight.

For composable A,B, cancelling the adjacent J_in J_out^{-1} shows that the weight of the combined composite is μ_α+w(BA). Computing instead by composing the λ arrows gives w(B)+w(A)+μ_λ. Associativity and the relation cocycle, already fully proved by the parent, equate these two calculated weights. Therefore

w(BA)−w(B)−w(A)=μ_λ−μ_α,

a(BA)−a(B)−a(A)=μ_α−μ_λ.

No signature statement was assumed in this algebraic step, and no arbitrary integer antiderivative was postulated.

Define the final corrected weighted map, in the fixed raw/N coordinate convention, by

Z(M,n;λ)=κ^{n+a(R_M;λ,α)} Z_α(M).

For n_comp=n_2+n_1+μ_λ, §§5–6 give

Z(M_comp,n_comp;λ)
=κ^{n_2+n_1+μ_λ+a_comp−μ_α}Z_α(M_2)Z_α(M_1)
=κ^{n_2+a_2}Z_α(M_2) κ^{n_1+a_1}Z_α(M_1).

This proves strict composition with the prescribed Walker/mapping-cylinder convention and general κ. A weight increase by1 acts by κ, as forced by the combination of this composition convention, positive-twist surgery normalization and the calibrated Wall sign. For reference objects, a=0. Since n=0 on the standard identity cylinder and a(identity;λ,α)=−μ(λ,α,α)−μ(λ,α,λ)=0, the identity remains the identity. Direct sums give the tensor product law. The empty symplectic space gives no correction.

The corrected full special-graph block formula is consequently

Z(M,n;λ)^j_i=κ^{n+a(R_M;λ,α)−σ(B)} D^{-m-1+χ(Σ_out)/2} d(j) F_0(Ω;i,j)

for connected M, with the already proved multiplicative disconnected version. It passes the sphere/ball/cylinder checks and does not identify κ with a κ² extended-surface generator.

## 7. What has been read and what remains independent

Read complete actual printed Turaev IV4.1–4.3 and the entire printed proof IV4.3 pp187–190, plus IV3.5 sign definition/proof. Turaev invokes Wall in IV4.1 rather than proving it. Walker §18 was read fully; its18.5 states Wall without proof and18.7 is blank. Ranicki's seven-page `The Maslov index and the Wall signature non-additivity invariant` was retrieved; its introductory definitions and Lemma5 proof were read. That proof itself invokes Wall's main theorem, so it is not an independent nonadditivity proof supplier. Sections2–4 above instead author the local homology/PL/corner proof and must receive focused scientific review as new content. No false claim of reading the unavailable original Wall proof is made.

Remaining: genuine relative surgery/Cerf completeness and the geometric multicolored coupon evaluator if not provided by separate suppliers; any move calculus using literal band slides still needs its exact reduction to the proved arbitrary-coupon FR identities or a separate complete slide proof. The signature, boundary normalization, coupon cancellation, cylinder and composition algebra no longer depend on an unproved invocation of Wall or an uncalibrated sign. Root review is required before acceptance or integration.
