# Compact-cut localization of a given TOP isotopy, ambient dimension five

NEW author-stage finite unit. No accepted provider proof, hash, or receipt is checked. The previously adopted continuously chosen nearby-embedding correction has dimension FOUR; it is not used as a dimension-five supplier here. The new construction below is dimension five, including its boundary charts. No dimension greater than five, general positive-codimension extension, or arbitrary embedding-isotopy family is exported.

## Exact operation and source identification

Let M be a metric TOP five-manifold, possibly with boundary. Let F_t:M→M, 0≤t≤1, be a jointly continuous ambient isotopy, F_0=id. Let K be compact. Let O be an open neighborhood of its compact track union_t F_t(K). There is a compactly supported ambient TOP isotopy G_t, G_0=id, such that

* G_t=F_t on K for EVERY t;
* the support of the WHOLE G family is contained in one compact subset of O;
* every G_t preserves boundary M setwise;
* if F_t fixes boundary M pointwise, every G_t does too;
* if F_t=id on an open neighborhood V_D of a closed protected set D, G_t can fix D pointwise. To fix a germ, protect a larger closed neighborhood D′ contained in V_D.

For agreement on an open neighborhood of a compact cut, start with K a compact relative neighborhood of that cut. In the consumer M=V×R, V=B^s×T^n and s+n+1=5, take K to be the image of a compact slab. Thus the cut's local flatness need not be used as an independent extension hypothesis: the GIVEN ambient isotopy already acts on its whole neighborhood.

Siebenmann, *Approximating cellular maps by homeomorphisms*, Topology11(1972), printed291, invokes the isotopy extension principle [19] precisely in the isotopy-invariance paragraph for tau(H). Its bibliography, printed293, identifies [19] as R.D.Edwards and R.C.Kirby, *Deformations of spaces of imbeddings*, Ann.Math.93(1971),63–88, DOI10.2307/1970753. This is TOP, not a differential isotopy-extension citation.

Actual primary reading for this NEW use: EK definitions printed64–65; boundary insertion Proposition3.2 printed66–67; the full local lemma printed67–70; the COMPLETE main deformation theorem and proof printed70–76; the full Corollary1.2 proof and support/boundary remark printed79; and the COMPLETE alternative local construction in section8 printed84–87, including its actual formula images85–86. The cached reprint starts with a cover instead of printed63; no claim to have read that missing introductory page is made. The actual theorem, hypotheses, full relevant proofs, and the Corollary1.2 proof have been read. Siebenmann's actual printed291/293 were viewed and their existing primary OCR consulted. Durable source extracts/images are in `sources/`; the source PDFs remain in the cited neighboring source directories. No heavy OCR was run.

## 1. The canonical correction that is actually needed

The local ingredient is stronger than existence of an isotopy for each nearby homeomorphism. For compact C⊂M and an open neighborhood W of C, it constructs a neighborhood P of id in Homeo(M) and a CONTINUOUS map

    Q:P→Homeo(M),       Q(id)=id,

such that

    Q(f)|C=f|C,          support Q(f)⊂L_W,

where L_W is one fixed compact subset of W for all f in P. If f fixes boundary M pointwise, Q(f) does; boundary-respecting inputs always give boundary-respecting outputs. With the stated protected-neighborhood hypothesis it fixes the protected closed set. This is a local section for restrictions of GLOBAL homeomorphisms. It does not assert that compact local contractibility alone yields such a section.

The following paragraphs reconstruct the canonical finite operations used to obtain this section in dimension five. Their purpose includes the continuity and common-support clauses needed by the time-patching argument.

### 1a. A parameter-continuous coordinate block, including all five-dimensional handle indices

Work in B^k×R^q, k+q=5. The local input is a proper boundary-respecting embedding h of B^k×4B^q, close to inclusion and fixed on boundary B^k×4B^q. Here **proper means h^{-1}(boundary ambient)=domain∩boundary ambient**, as EK defines on64, not proper as a map. Collar insertion first makes h the identity on a fixed thin collar of boundary B^k. It fixes h=id and depends continuously on h. The explicit mechanism is insertion of a thin boundary product strip, stretching the remaining collar fibres, conjugating h on the complement of the inserted strip, and setting the result equal to identity on that strip. As its width starts at zero this is an isotopy; fixed boundary values make the formulas continuous at the moving seam. A scalar cutoff on the boundary base makes the operation identity off the chosen larger collar. This is the TOP product-collar construction of Proposition3.2, not a vector-field flow.

For q=0, h is a boundary-fixed homeomorphism of B^5; compactness and invariance of domain give onto-ness, and the ordinary Alexander scaling gives the desired canonical correction. For 1≤q≤5 use the section8 construction, multiplied by B^k. Choose a standard toroidal shell chart

    alpha:(−6,6)×T^(q−1)→int(4B^q)

whose central 2B^q chart is identity. These are standard Euclidean charts: start with an interval for q=1 and repeatedly rotate the preceding shell about an axis outside it to obtain its product with a circle; choose a small central product patch and stretch its coordinate intervals to contain 2B^q. Only these explicitly standard charts are involved. No arbitrary TOP sphere, Annulus theorem, punctured-torus immersion, or manifold triangulation is being assumed. Pull h into this chart on [−4,5]×T^(q−1), obtaining h1=alpha^{-1}h alpha. All chart choices are fixed BEFORE h varies.

For completeness the actual periodization formula is recorded, not replaced by a compactness assertion. Put

    a0=−3−2/3, b0=−3−1/3, a1=4+1/3, b1=4+2/3,
    lambda(u,v)=(u−8,v).

Let omega_0 be the increasing PL map of R equal to u+8 below a0, equal to u above b1, and linear from [a0,b1] onto [a1,b1]. Put omega=omega_0×id and omega_bar=lambda omega^{-1} lambda^{-1}. On

    D_rho=omega_bar h1([−4,5]×T^(q−1))

define rho_bar to be

    (lambda h1) omega (lambda h1)^{-1}

on its intersection with lambda h1([−4,5]×T^(q−1)), and identity elsewhere. Set

    h2=rho_bar omega_bar h1 |[−4,4]×T^(q−1).

Here is the full moving-domain and seam check with this INVERSE. Write j=lambda h1 and include the B^k parameter in every product. From the displayed constants,

    omega_bar(u,v)=(u−8,v) for u≤a0,
    omega_bar(u,v)=(u,v) for u≥b0.

Shrink the input neighborhood so h1's first coordinate differs from the input first coordinate by less than 1/100 on the whole compact product. No coordinate-preservation assumption on h1 is imposed: it may mix the B^k, real and torus coordinates. On the fixed LOWER collar [−4,−15/4] the output first coordinate is below a0, so

    omega_bar h1=lambda h1=j

on that WHOLE collar. Consequently D_rho and j([−4,5]×T^(q−1)) have the SAME lower boundary j({−4}×T^(q−1)) and agree on an actual inward collar of it. Their other end faces are, respectively, h1({5}×T^(q−1)) at height greater than4.99 and j({5}×T^(q−1)) at height less than−2.99. The remaining compact j-strip, after the common lower collar, has height above−11.76, whereas the common lower face has height below−11.99. It therefore avoids BOTH end frontiers of D_rho. Start in the common inward lower collar; a path in that connected product strip cannot leave D_rho without meeting one of those frontiers. The proper B^k boundary is an ambient boundary, not an additional end frontier. Thus the ENTIRE j-strip is contained in D_rho. This is a common-collar nesting argument in the displayed product, with strict uniform height gaps, not an annulus assertion.

On that j-strip the formula for rho_bar is exactly j omega j^{-1}. The increasing omega maps [−4,5] onto [4,5]. Near the UPPER frontier j({5}×T^(q−1)) it is the identity on the WHOLE collar j([b1,5]×T^(q−1)), since omega(u)=u for u≥b1. Hence its formula agrees with the outside identity on a neighborhood of that frontier. At the lower frontier there is no outside part of D_rho to paste: it is the lower boundary of D_rho itself. This proves continuous pasting and injectivity; the affected strip maps onto j([4,5]×T^(q−1)), while the complement of the original j-strip stays fixed. The inverse is j omega^{-1} j^{-1} on that image strip and identity on the remaining image. The same strict collar containments and compact-domain inverse charts show JOINT continuity as h1 varies. They apply unchanged to the B^k-mixing inputs.

At h1=id, j=lambda and rho_bar agrees with lambda omega lambda^{-1} on D_rho: above its active j-strip this conjugate is already identity. Therefore

    rho_bar omega_bar
      =(lambda omega lambda^{-1})(lambda omega^{-1} lambda^{-1})=id,

so h2=id. This is the required exact identity cancellation. On the central [−2,2] patch, omega_bar is identity and the rho_bar active strip lies below height−2.99. Thus h2=h1 there.

Finally the seam has a WHOLE collar formula, not just an endpoint coincidence. For 4≤u≤4+1/4 the point u−8 is in [−4,−15/4], where the lower translation formula applies and omega(u−8)=u. Thus

    h2(u−8,v)=j omega(u−8,v)=lambda h1(u,v).

For 4−1/4≤u≤4 the point h1(u,v) is above every active lower band, so h2(u,v)=h1(u,v). Together these say that the two half-collars across the period seam are ONE copy of the original embedding h1 on [4−1/4,4+1/4]×T^(q−1), the lower half translated by lambda. In particular

    h2(−4,v)=lambda h1(4,v)=lambda h2(4,v).

These exact formulas preserve all B^k parameter values at the input even when the output coordinates mix. They give local injectivity and continuous dependence at the glued seam directly from h1.

Hence h2 descends to a map of T^q. It is a local homeomorphism at the seam by the explicit full-collar h1 formula just proved; there is no residual choice of seam side or normal germ. Off the seam it is already an embedding. The descended map is close to id, hence homotopic to id by short product-coordinate paths. A proper local homeomorphism of the compact torus is a covering; its induced map on fundamental group is that of id, so it has one sheet. It is therefore a homeomorphism. With the B^k parameter the same argument holds in each product chart and preserves its boundary; alternatively the induced covering of B^k×T^q has index one. This is the period-strip injectivity check, not an invocation of an annulus assertion.

Lift this homeomorphism through B^k×R^q→B^k×T^q by the lift close to identity. The lift is bounded-displacement, is identity on boundary B^k, depends continuously on h, and agrees with h on the central block. The lift is selected by the fixed near-identity local covering branches, so no parameter-dependent arbitrary choice is made. Compress R^q into int(3B^q) by a fixed radial homeomorphism which is identity on 2B^q. Conjugate the bounded lift by this compression and extend by identity outside 3B^q. Bounded displacement makes the conjugate tend uniformly to identity at the boundary of 3B^q; a radial inverse sends any bounded change at radius tending to infinity to a change tending to zero in EVERY coordinate. This gives a global homeomorphism g(h), supported in B^k×3B^q, equal to h on B^k×B^q, continuous in h and equal to id for h=id.

Extend g by identity to R^5. The Alexander path

    g_s(x)=s g(x/s), s>0;       g_0=id

is continuous jointly in h,s and has fixed compact support. On boundary B^k it is identity: for s<1 the rescaled point is outside B^k unless already fixed, and for s=1 the boundary was fixed. Composing g_s^{-1} with h corrects h to identity on the central block and leaves its outer collar alone. Finite shrinkings of the initial h-neighborhood provide all uniform image containments. The operations are genuinely parameter-continuous; selecting some unrelated small isotopy separately for each h would not suffice.

### 1b. Finite chart composition, without a global TOP triangulation

Cover the compact C by finitely many coordinate charts and compact chart cores. Work successively in these Euclidean charts, retaining a neighborhood of the already corrected cores as a protected set. Inside the CURRENT Euclidean chart choose a sufficiently fine finite triangulated neighborhood of its core, separated from the protected set by a small buffer, and use the first two barycentric subdivisions to obtain its finite handle decomposition. Explicitly, generate finite subcomplexes K0 and L0 from the small simplexes meeting the chart core and the protected buffer respectively, and take the unions of their barycentric stars in the second subdivision. The piece associated to a k-simplex has the standard Euclidean simplex-and-link product B^k×B^(5−k); its intersection with the lower-index pieces is boundary B^k×B^(5−k). Distinct pieces of equal index have disjoint interiors and are separated by the retained attaching collars. A sufficiently small mesh puts K-minus-L away from the protected closed set and keeps L in its fixed neighborhood. These are finite stars in a standard triangulation of R^5, with explicit standard simplex links, not links in an untriangulated TOP manifold. A handle of index k is B^k×B^(5−k), with the attaching boundary B-boundary already in the corrected neighborhood. Extend its normal coordinates slightly to B^k×4B^(5−k). Apply the block above and retain a slightly smaller open corrected neighborhood before the next handle. Handles of equal index can be treated in disjoint chart supports. Include the top index k=5; its q=0 case was proved above. This is the finite Euclidean handle construction in the full proof printed71–73.

No ambient TOP triangulation is used: each finite triangulation belongs to one chosen STANDARD Euclidean coordinate chart. The finite cores, rather than the entire global compact set, are triangulated in each chart. After every finite composition shrink the original embedding neighborhood so all subsequent block inputs remain in their fixed admissible neighborhoods. Continuity at the identity and finiteness justify the shrinking. The resulting map is a deformation phi(f,s) of a neighborhood of id into embeddings equal to id on C. It fixes id and equals f off one fixed compact neighborhood L of C in W. The source proof's protected buffers show that if f is id on an open V_D around a closed D, the deformation remains id on D. This uses actual neighborhood agreement, not merely equality on an arbitrary closed set.

For charts meeting boundary M, first carry out the same finite construction on the boundary chart, a four-dimensional coordinate chart, and insert its correction into a product boundary collar. Proposition3.2's strip insertion then makes the maps identity on a smaller collar of the affected boundary core. The remaining core is interior, so the preceding five-dimensional construction finishes it. All these changes are proper boundary-respecting embeddings. If the input is already pointwise identity on boundary M, the boundary correction is stationary and strip insertion fixes boundary pointwise. This is exactly case2 of the primary main-theorem proof printed73–75; it requires no smooth structure. A finite number of protected closed sets are handled with nested buffers, as in the complete two-stage induction printed75–76. In particular the simultaneous pointwise-boundary and protected-germ clauses do not require supports to avoid a cut that meets boundary.

We have thus obtained, with the stated continuous dependence and uniform support,

    phi(f,0)=f,   phi(f,1)|C=id,   phi(id,s)=id,
    phi(f,s)=f off L.

This is the exact five-dimensional specialization of the reconstructed main deformation, rather than an extrapolation of the previously adopted four-dimensional contract.

### 1c. Turn the canonical deformation into a global local section

The GLOBAL input f is important here. Every phi(f,s) is a global homeomorphism. Indeed it is an embedding equal to the global homeomorphism f off compact L, so it is proper as a MAP; its image is closed. Boundary-respecting invariance of domain makes that image open. Componentwise it has the same target component as f throughout the deformation and is nonempty, so it is onto. Its inverse varies continuously in the homeomorphism-group topology.

Set

    Q(f)=f phi(f,1)^{-1}.

For x∈C, phi(f,1)(x)=x and thus Q(f)(x)=f(x). If y=f(x) with x outside L, then phi(f,1)(x)=f(x)=y, so Q(f)(y)=y. Therefore support Q(f) is contained in f(L). Shrink P once more so f(L) lies in one fixed compact L_W⊂W. This is possible because L⊂W is compact. Q is continuous, Q(id)=id, and all boundary/protected fixed-set properties survive composition and inversion. This proves the local section asserted at the start of section1.

## 2. Localize the given family by FINITELY many time patches

Choose O′ with compact closure contained in O and containing the track of K. At a time a, apply section1 with C_a=F_a(K) and W=O′. For nearby t the GLOBAL increment

    f_(a,t)=F_t F_a^{-1}

belongs to that local-section domain. Put Q_(a,t)=Q_a(f_(a,t)). Then

    Q_(a,a)=id,    Q_(a,t) F_a|K=F_t|K,

and its whole support lies in a fixed compact subset of O′. Continuity of the original isotopy and of the local section makes this a continuous partial isotopy. Inverse continuity follows either from the homeomorphism-group topology or directly from joint compactly supported inverses.

The neighborhoods in time obtained this way cover [0,1]. Choose a finite partition 0=t0<...<tN=1 and centers a_i so each interval [t_i,t_(i+1)] lies in one such neighborhood. It is NOT necessary to assume that its left endpoint itself was an original center. On this interval put

    R_(i,t)=Q_(a_i,t) Q_(a_i,t_i)^{-1}.

Then R_(i,t_i)=id and

    R_(i,t) F_(t_i)|K=F_t|K.

Define G_0=id and extend recursively by

    G_t=R_(i,t) G_(t_i)   for t_i≤t≤t_(i+1).

The definitions agree at every partition point. Induction proves G_t|K=F_t|K, and every G_t is a homeomorphism. A finite union of the fixed compact supports of the Q families is compact in O′ and supports the entire G family. Boundary preservation is automatic from the proper local constructions. The fixed-boundary and protected-set clauses hold for every factor and therefore for G. This proves the statement, including the stronger all-time agreement.

This is the complete finite patching in EK's Corollary1.2 proof printed79, with its local-section formula and center-change factor written explicitly. The support statement there says identity off any prescribed track neighborhood. No infinite product, convergence argument, global triangulation, or smooth isotopy extension is used.

## 3. Exact product-cut application to tau(H)

Let N=V×R with V=B^s×T^n and s+n+1=5. Let H_t be a boundary-preserving ambient TOP isotopy from H_0 to H_1, as in the consumer's lifted compact-product family. Choose a real lambda and eta>0 and the compact set

    K=H_0(V×[lambda−eta,lambda+eta]).

Normalize F_t=H_t H_0^{-1}. Apply the result above to this K, choosing an open track neighborhood with compact closure. The endpoint G_1 agrees with H_1 H_0^{-1} on an OPEN relative neighborhood of H_0(V×lambda). Choose mu above the height projection of the common compact support of G and above both moving cuts. Then G_1 fixes V×mu, respects the actual product side boundary setwise, and maps the cobordism region between H_0(V×lambda) and V×mu onto that between H_1(V×lambda) and V×mu, with their marked lower and upper boundary pieces. This directly proves the unmarked-triad tau isotopy invariance needed for wrapping. Boundary circle/torus rotations are allowed; pointwise boundary fixation is not imposed unless the input has it.

To match Siebenmann's exact intermediate-homeomorphism phrasing instead, set

    H′=G_1^{-1} H_1.

Then H′=H_0 on a neighborhood of V×lambda and H′=H_1 off the compact inverse image under H_1 of the support of G_1. Thus equality near the compact cut and equality at the ends coexist, just as the primary printed291 passage requires. The two formulations are equivalent and neither invokes DIFF.

## 4. Scope and finite choices

The exported ambient dimension is FIVE. The construction also explains why dimension-four canonical correction alone was not an adequate declared supplier for this consumer. No m>5 assertion is inferred. The compact cut may be an actual TOP image of a standard slab; no smoothing, normal-bundle theorem, or general submanifold isotopy-extension theorem is used. No endpoint-stationary conclusion G_1=id is asserted merely from F_1 fixing the cut.

For each supplied family the chart cover, Euclidean subdivisions, block neighborhoods, support buffers and time partition are finite. Shell/lift/compression choices are fixed before the varying embedding enters, and the normalized lift is canonical. There is no newly required family of independent choices indexed by an arbitrary space of embeddings, and no countable limiting isotopy. Retain the run's declared choice scope; no choice reduction is claimed.

This unit is NEW and FROZEN after ONE focused repair C1 for the SAME reviewer’s ONE final pass at the unchanged five-dimensional scope. The original is preserved as construction-before-focused-repair.md and the root first-review snapshot remains unchanged. Its actual source proof has been read; it does not obtain the result by naming isotopy extension without constructing the compact-support operation.
