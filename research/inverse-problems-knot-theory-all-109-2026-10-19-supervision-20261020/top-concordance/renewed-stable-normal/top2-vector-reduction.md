# Rank-two vector reduction: explicit Kneser deformation and exact analytic input

Status: the deformation and its relative bundle-theoretic use are constructed below. The exact analytic premise is now supplied by the root-adopted NEW countable-choice helper `lem-marked-jordan-annuli-have-countable-choice-parametric-uniformizations`; root adoption is recorded at `../renewed-annular-end/root-new-analytic-acceptance.json`. Its declared contract is consumed directly without re-reading or rechecking its accepted proof. This closes the analytic premise of this vector-reduction argument; it does not close the separate stable geometric normal-tube theorem or claim native proof coverage for this note.

Primary source: H. Kneser, *Die Deformationssätze der einfach zusammenhängenden Flächen*, Mathematische Zeitschrift 25 (1926), 362–372. All eleven pages visually read from the GDZ primary scans. Durable `sources/kneser-362.jpg` through `kneser-372.jpg`; volume manifest in `sources/kneser-volume-manifest.json`. Article resolver:
https://gdz.sub.uni-goettingen.de/dms/resolveppn/?PPN=GDZPPN002368838

The actual planar construction is §2.2–3, pp.368–370; §1 develops the topology on transformation spaces, and §2.1 gives the elementary disk Alexander contraction. The sphere argument on pp.371–372 is not needed for rank-two bundles. Kneser's citation for parameter continuity of conformal maps is R. Courant, *Über eine Eigenschaft der Abbildungsfunktionen bei konformer Abbildung*, Göttinger Nachrichten (1914), 101–109. That paper has not yet been obtained or read. Friberg's later topological proof was located bibliographically but its primary PDF returned HTTP 403; no full-reading claim is made for it.

## The exact analytic lemma

For a Jordan annulus with labelled inner and outer boundary parametrizations, choose its circular-annulus conformal uniformizer, normalized at a specified inner-boundary point and in a specified orientation. It extends homeomorphically to both boundary circles. These extended normalized maps, their inverses, and the annulus modulus depend continuously, uniformly on the closed annulus in the moving boundary parametrizations, on a continuously parametrized nondegenerate family of the two disjoint Jordan curves. For this application it suffices to consider families of annuli bounded by one round inner circle and the image of a round outer circle under a continuously varying plane homeomorphism, with the inner circle uniformly inside that image locally in parameter space.

A useful consequence of this supplied analytic lemma, with its elementary proof, is a continuous choice of an extension of prescribed compatible-orientation boundary homeomorphisms between two annuli, provided a relative winding class is specified. In normalized circular coordinates use the logarithmic radial parameter r∈[0,1]. Lift the two boundary angle maps to monotone real maps f_0,f_1 with f_i(θ+2π)=f_i(θ)+ε2π, where ε=±1. The winding class fixes their relative integer. The formula

(r,θ) ↦ (r,(1−r)f_0(θ)+r f_1(θ))

is a homeomorphism of the standard annulus; monotonicity in θ and preservation of r prove injectivity, surjectivity, and continuity of its inverse. Convert back through the two uniformizers. An overall common 2π change in the lifts has no effect. Local normalized lifts show parameter continuity. For round annuli with matching orthogonal boundary maps and zero relative twist this extension is exactly that orthogonal map.

This consequence is NOT a replacement for the conformal uniformization/continuous-boundary lemma. Establishing existence merely by an unparameterized Schoenflies theorem would not provide the continuous deformation of a HOMEOMORPHISM SPACE required below.

## Explicit deformation of G=Homeo(R²,0) to O(2)

Use the compact-open topology on G; inverse control is automatic here by the compact image-separation estimate in the Kister construction: closeness on a slightly larger source ball traps the inverse of a smaller target compact set and makes the inverses uniformly close there. Thus the stated map-and-inverse controls establish continuity in exactly the required group topology. Let A∈G. Its orientation sign ε(A) is locally constant. The analytic helper is needed only for the positive component: for negative A put c(z)=conjugate(z), apply the positive construction to A c, and compose its output on the right by c. This uses exactly the positive-orientation analytic contract because (A c)(D_u)=A(D_u). The two components are open and closed, so this extension is continuous and fixes every negative orthogonal map. The formulas below can equivalently be read with ε=±1. Let R_A be the unique orthogonal map with that sign sending e_1 to A(e_1)/|A(e_1)|. This is a continuous function of A. For 0<t<1 put u=t/(1−t), let

s(A,u)=min{|A(z)|: |z|=u},

and set ρ(A,u)=½ min{u,s(A,u)}. The minimum is positive, continuous in (A,u), tends to zero as u→0, and tends to infinity as u→infinity. The last assertion follows from properness of A; locally uniformly in A it follows by controlling inverse images of compact disks. The extra minimum with u ensures the inner disk lies inside BOTH the source disk and its image. This inequality is used explicitly; an unconstrained inner radius could lie outside the source outer circle for a large dilation A.

Define H(A,t) as follows:

* outside D_u, use A;
* inside D_ρ, use R_A;
* on D_u−int D_ρ, use the normalized-annulus extension above from the source annulus to A(D_u)−int D_ρ, with the indicated outer and inner boundary maps.

The disk D_ρ is strictly inside A(D_u), since 2ρ≤s(A,u), so these domains are genuine annuli. Their boundary orientations agree. The relative winding class is chosen as follows. At t=1/2 the source outer distinguished point is e_1 and its image A(e_1) lies on the ray R_A(e_1). Require zero angular change along the image of the source distinguished radial segment between the inner and outer boundary points. This fixes the integer twist at t=1/2. Continue this integer class uniquely in t∈(0,1). Locally in A the normalized lifts give a continuous continuation; at t=1/2 the zero-twist condition is intrinsic and has no choice of argument of A(e_1). Thus these local choices agree on their overlaps and define H continuously for all A.

The annulus maps agree with the inner and outer formulas on their boundary circles, so H(A,t) is a plane homeomorphism fixing zero. It is onto because the three image pieces are exactly D_ρ, A(D_u)−int D_ρ, and R²−int A(D_u). It preserves the orientation sign ε(A).

Set H(A,0)=A and H(A,1)=R_A. To check continuity at t=0, all changed domain points lie in D_u, which tends to zero. All their images lie in A(D_u), which also tends to zero, locally uniformly in A. Off that disk the map is exactly A. The same statement for inverses follows because the changed image lies in A(D_u). This proves compact-open continuity of maps and inverses at t=0. At t=1, ρ tends to infinity locally uniformly in A, and on D_ρ the map is exactly R_A. Hence the endpoint is continuous on every compact set, again with inverse control. At an orthogonal A the annuli are round, the two boundary maps are A with zero twist, and the extension formula yields A throughout. Therefore H fixes O(2) pointwise. This gives an actual strong deformation retraction using the supplied analytic lemma.

## Relative vector-bundle reduction over the needed 3-dimensional base

We only require a locally finite 3-complex X=N×R with a protected subcomplex L contained in the region of the prescribed product vector bundle. The deformation proves that O(2)→G induces isomorphisms on π_0,π_1,π_2; it also identifies π_0 with the orientation sign, π_1 of either orientation component with Z, and π_2 with zero. No unproved assertion about contractibility of the quotient G/O(2) is needed for the following cell construction.

Let P be an actual G-bundle on X, with an identified vector-bundle structure over a neighborhood of L. Carry that structure and its identity G-bundle identification as the initial data. Refine the triangulation subordinate to actual local trivializations of P, and process the four skeleta d=0,1,2,3. After fixing the lower skeleton choose all data for its countably many d-cells simultaneously by ACω; interiors at that dimension are independent. Over each such d-cell the supplied local trivialization makes the given G-bundle trivial. The already supplied orthogonal bundle on its boundary has a clutching obstruction in π_{d−2}(O(2)) (for d=1 interpret this as the component compatibility at the two endpoints). The underlying G-bundle extends over the cell, so the corresponding obstruction in G is zero. Injectivity of O(2)→G on the relevant homotopy class makes the orthogonal boundary bundle trivial, and it extends over the cell.

An actual G-bundle identification between this extension and P must also match the existing identification on the attaching sphere. Choose trivializations and write the discrepancy as a based map S^{d−1}→G. Surjectivity π_{d−1}(O(2))→π_{d−1}(G) allows changing the orthogonal ATTACHING identification on the boundary by an O(2)-valued map with the same homotopy class. This need not extend as a gauge transformation on the cell; choosing that attaching identification is part of choosing the new vector-bundle extension. The corrected discrepancy is nullhomotopic in G, so extend it over D^d. It gives the required ACTUAL fiber-preserving bundle homeomorphism, equal to the old one on the attaching sphere. For d=1 the same argument uses components; for d=0 choose a frame in the fiber. Thus both the reduction and its identification with P extend cell by cell, exactly fixed on L.

Local finiteness gives continuity of the resulting bundle and identification: every point has a neighborhood meeting finitely many cells, and the attaching identifications are continuous on the corresponding finite union. The usual weak topology of a locally finite complex agrees with its topology. The resulting underlying G-bundle map is an isomorphism, not merely a stable equivalence, and it identifies the vector bundle with the embedded P. Hence the actual normal embedding germ is retained. On the protected neighborhood of K×R it is the prescribed one.

This construction uses only countable choice: choose the independent cell extensions for each fixed dimension simultaneously after the lower skeleton is fixed. There are four dependent skeletal stages, rather than countably many dependent choices of new witnesses. The annulus uniformizers and the orthogonal endpoint R_A are uniquely normalized, so no choice of one conformal map for every A is made. The analytic lemma, if supplied by a proof using stronger choice, would still need its actual choice assumptions checked; unique normalization alone does not excuse a stronger existence premise.

## What remains

The source reading supports the ACTUAL deformation mechanism and its needed endpoint/parameter controls, and the exact analytic interface has now been separately proved and adopted by root. No full-AC Riemann-mapping carrier supplies a hidden weakened premise. The relative cell construction gives an actual rank-two vector bundle with an identification fixed on the supplied germ. The separate high-dimensional torus device remains independently owed.

## New separately authored analytic input

The assembly owner supplied the genuinely new countable-choice proof with exactly the normalized positive-orientation Jordan-annulus interface at `../renewed-annular-end/cc-parametric-jordan-annulus.md`. After fresh independent review, root adopted its final PASS and integrated the canonical helper named at the start. Its accepted proof body has not been rechecked here. This note uses the contract only, in the nondegenerate interior parameter range 0<t<1; endpoint continuity uses containment as proved above. No frozen Riemann-mapping carrier is edited or assigned a weaker choice contract.
