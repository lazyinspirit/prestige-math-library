# RT caps, the geometric Gram operator, and complete algebraic gluing

Continuation and correction to proposal.md §§6–8. Scientific proposal only; no canonical edits. This closes the previously missing **algebraic cylinder/paired-handle cancellation and cap normalization**, conditional on the explicit topological presentation interface T below. The subsequent [signature-maslov.md](signature-maslov.md) constructs the signature comparison and corrects this file’s provisional weight-sign target: with the prescribed Walker +μ composition, the final weight action is κ^{+n}. It does not claim that relative Cerf completeness or the global signature/Maslov comparison has been proved here.

The construction follows the actual full printed proof of Turaev IV §§1.4,1.7–1.8,2.1–2.9 (printed pp155–179), not merely its theorem statement. The proof below replaces the source's graphical reduction in IV2.7 by typed evaluation/coevaluation composites. Its disconnected-boundary projector and all D powers are written out.

## 1. State coordinates and topology interface T

For a connected parametrized marked genus-g surface t let X_{t,i}=W_1^{ε_1}⊗…⊗W_n^{ε_n}⊗⊗_{r=1}^g(i_r⊗i_r*) for i∈I^g. Put V_t=⊕_i Hom(1,X_{t,i}). This equals Hom(1,W_1^{ε_1}⊗…⊗W_n^{ε_n}⊗H^{⊗g}) by finite additivity, H=⊕_i i⊗i*. For a disjoint union use the tensor product of these spaces; V_empty=C. Write d(i)=∏_r d_{i_r}. Every d(i) is nonzero. The raw dual coordinate space is V_t^raw=⊕_i Hom(X_{t,i},1), paired by composition on matching i and by zero on different i.

Take the following exact geometric input; no scalar or categorical identity is included in it.

(T1) Each surface has a fixed oriented standard handlebody U_t, a one-coupon spine with the marked external arcs and g adjacent pairs of handle arcs, and a reflected opposite cap U_t^- with opposite-facing coupon. A vector x∈Hom(1,X_{t,i}) colors the first coupon, and y∈Hom(X_{t,i},1) colors the second. Their boundary maps are the fixed parametrizations.

(T2) Capping a compact connected collared graph bordism M by those handlebodies gives a closed graph manifold admitting a framed surgery presentation in S³, with the boundary cap coupons and adjacent paired arcs retained. Pulling incoming cap coupons below height0 and outgoing cap coupons above height1 gives a special ribbon graph Ω. Its only uncolored open bands are arcs joining adjacent points on the same boundary coupon, g per boundary component. Uncolored closed annuli are surgery components. The geometric colored evaluator and relative complete surgery moves must be independently supplied; proposal.md §§3–5 proves the algebra of the signed generalized Fenn–Rourke and circumcision moves admitted there.

(T3) The standard cylinder has a special graph with vertical marked bands and g disjoint local handle pieces. Each local piece is precisely the rotation R_{ij}(E_{i*⊗j}) defined in §2 below. There are g zero-framed surgery circles, mutually unlinked, so its surgery matrix is the zero g×g matrix. This word is the exact local convention, not a claim inferred from a picture. Geometrically it is obtained from two disjoint genus-g handlebody neighborhoods by placing one zero-framed annulus around the two opposed handle arcs for each handle.

(T4) For connected M_1 and M_2 glued along r≥1 middle boundary components of total genus G, stacking their special graphs joins each pair of corresponding uncolored open handle arcs to an uncolored closed annulus, giving G new surgery components. If r=1 that graph presents the composite. For general r, add r unlinked family-meridians: the qth one surrounds all arcs belonging to the qth middle boundary coupon. The resulting graph presents (M_2M_1)#(S¹×S²); using only r−1 of those meridians presents M_2M_1. No scalar identity is asserted by this topological statement. All these local changes keep the external cap parametrizations and graph coupons fixed.

T3 and the local part of T4 have explicit disk/cylinder models in §7 below. Their global completeness (T2 and arbitrary allowed presentation changes) remains with the topology constructor. The global signature of T4 is carried as an actual linking-matrix signature; it is not inferred to be a Maslov index yet.

## 2. The explicit rotated-meridian identity

Retain b_i,e_i,r_i and E_X from proposal.md §§1,5. Define the right coevaluation

b_i^R=(1_{i*}⊗j_i^{-1})b_{i*}:1→i*⊗i.

It is right-dual to r_i:i⊗i*→1. Thus (r_i⊗1_i)(1_i⊗b_i^R)=1_i, and (1_{i*}⊗r_i)(b_i^R⊗1_{i*})=1_{i*}. The original left-dual snakes pair b_i with e_i. Sphericality gives e_i b_i^R=d_i (this is the right trace of 1_i).

For a:i*⊗j→i*⊗j define its rotation, with every tensor factor stated, by

R_{ij}(a)=(r_i⊗1_j⊗1_{j*})(1_i⊗a⊗1_{j*})(1_i⊗1_{i*}⊗b_j):i⊗i*→j⊗j*.

The inner domain is i⊗(i*⊗j)⊗j*. The first map inserts the adjacent cup b_j; the last evaluates the first i⊗i*. Thus R is a literal word in the evaluation functor generators, with no unproved graphical equality.

Since Hom(1,i*⊗j)≅Hom(i,j), this Hom space is zero for i≠j and one-dimensional for i=j. For i=j its generator is b_i^R, and e_i b_i^R=d_i. Therefore the full unit-isotypic projector on i*⊗j is zero for i≠j and equals b_i^R e_i/d_i for i=j. Proposal.md §5 proves E_X=D²P_X on every object. Hence

E_{i*⊗j}=δ_{ij}(D²/d_i)b_i^R e_i.

Substitute this into R. If i≠j, R(E)=0. If i=j, interchange separates the result into the following two contractions: (r_i⊗1_i)(1_i⊗b_i^R)=1_i and (e_i⊗1_{i*})(1_{i*}⊗b_i)=1_{i*}. Equivalently apply the first right snake to the first output of b_i^R and then the left snake to the remaining inserted b_i. They act on disjoint remaining factors and give

R_{ij}(E_{i*⊗j})=δ_{ij}(D²/d_i)1_{i⊗i*}.

This is the exact complete paired-handle/coupon cancellation identity. The coefficient is D²/d_i, not D² or d_i². It is an equality on the full tensor object i⊗i*, so arbitrary coupons and other tensor factors may be attached on either side. There is no restriction that the adjacent external coupon itself lie in a unit channel. The only unit-channel projection occurred on the explicitly bent object i*⊗j, where it was fully calculated.

For g disjoint handle pieces the tensor product of these identities is zero unless the entire incoming and outgoing color tuples agree, and on i=j it is D^{2g}/d(i) times the identity on X_{t,i}. Identity marked bands contribute no scalar. Thus for any coupons x:1→X_{t,i}, y:X_{t,j}→1, closing the full cylinder special graph gives

F_cyl(j,y;i,x)=δ_{ij} D^{2g} d(i)^{-1} yx.

This includes multiplicity spaces: y and x are arbitrary morphisms, not only chosen basis vectors.

## 3. Geometric capped-cylinder Gram matrix and cap correction

The cylinder graph of T3 has m=g surgery circles and signature0. Its normalized closed invariant is consequently

Q_t(y,x)=D^{-g-1}F_cyl(j,y;i,x)=δ_{ij}D^{g-1}d(i)^{-1}yx.

This is the **geometric capped-cylinder pairing** in the fixed raw coupon coordinates. It is perfect: on each i, composition is perfect by finite semisimplicity, and the nonzero scalar D^{g-1}/d(i) rescales a perfect pairing. It is diagonal between different handle-color tuples.

Define N_t:V_t→V_t by N_t|_i=D^{1-g}d(i)1. Extend N multiplicatively over surface components and set N_empty=1. The preceding equality is exactly

Q_t(y,N_tx)=yx.

In particular, if {v_{i,a}} and {w^{i,a}} are composition-dual unit-channel coupons within X_{t,i}, their Q-duals are D^{1-g}d(i)w^{i,a}. The full geometric cylinder contraction is

Σ_{i,a} v_{i,a} Q_t(D^{1-g}d(i)w^{i,a},−)=1_{V_t}.

Every d_i and D factor in this equation was derived from R(E), the closed surgery normalization, and a finite basis identity.

There are two useful coordinate conventions. In raw opposite-cap coordinates, the algebraic pairing is yx and the outgoing vector must be multiplied by N. In geometric-dual coordinates one uses Q and omits the visible N because the opposite cap basis has already been rescaled by N. Mixing raw caps with geometric-dual coefficients is precisely the normalization defect in the native carriers.

BK's equation4.4.5, printed p85, is an auxiliary algebraic identification with the oppositely oriented Hom space: D^{-g} times categorical evaluation with η_i=d_i^{-1} on every handle. Its d_i^{-1} is likewise essential. It is **not the assertion that raw composition equals the geometric capped-cylinder Q above**. To use that identification, let C_t:V_bar_t→V_t^raw be its unrenormalized categorical evaluation map (reverse tensor order and use the explicitly specified self-duality H≅H*). Then its stated pairing is B_t(ψ,x)=D^{-g}Σ_i d(i)^{-1}(C_tψ)_i x_i. Our geometric pairing is Q_t(C_tψ,x)=D^{g-1}Σ_i d(i)^{-1}(C_tψ)_i x_i. Thus, with this same C_t convention, Q_t=D^{2g-1}B_t. This is a change of the opposite-cap coordinate map by a nonzero scalar, not a new identity that alters the closed invariant. BK additionally weights uncolored open arcs in special links; those coefficients must be transported with its cap coordinate choice. The present construction consistently uses Turaev's raw caps plus N instead, so no hidden BK convention is consumed.

## 4. Complete capped-map functional and boundary factors

For M:Σ_in→Σ_out, place raw input coupons x and raw output testing coupons y in T1 caps. Let C_M(y,x) be the closed graph invariant of that capped manifold. For disconnected capped manifolds take the product of the invariant of each connected component. It is finite multilinear in the cap coupons. Because the raw pairings are perfect, there is a unique linear map A_M:V_in→V_out satisfying y(A_Mx)=C_M(y,x) for every y. This is an ordinary finite-dimensional adjunction, with no existence assumption beyond the defined closed graph invariant.

The correctly normalized parametrized bordism operator is

Z(M)=N_{Σ_out} A_M.

For a connected M presented by a special graph Ω, let B be its surgery matrix, m the number of surgery circles, and i,j the incoming/outgoing color tuples. Let F_0(Ω;i,j) be the sum of evaluations over surgery colors, with coefficients ∏_s d_{color_s}, acting on the Hom spaces. If a boundary has several connected components, insert the tensor-product inclusion/projection described in §5. Then the exact block formula is

Z(M)^j_i=κ^{-σ(B)} D^{-m-1+χ(Σ_out)/2} d(j) F_0(Ω;i,j).

Indeed χ(Σ_out)/2=Σ_{q∈π0Σout}(1-g_q), so the product of the outgoing N factors is D^{χout/2}d(j). Multiplying the closed normalization D^{-m-1}κ^{-σ} by this product gives the formula. Empty output has χout=0 and d(j)=1. For a disconnected M use the tensor product over its connected components; if each component has its own surgery link, the combined D exponent is −m−b_0(M)+χout/2.

A change in bordism weight n multiplies this provisional operator by κ^{-n}. For object Lagrangians unequal to the standard cap meridian Lagrangians, an additional reference-cap correction is required; it is isolated in §8 rather than silently suppressed.

For the standard cylinder, §2 gives F_0 diagonal D^{2g}/d(i), while m=g and χout/2=1-g. The coefficient is D^{-g-1+1-g}d(i)=D^{-2g}d(i). Therefore Z(cyl)^j_i=δij1, with no remaining scalar. Tensoring proves the cylinder for disconnected surfaces. For empty surface it is the identity of C.

For the empty-graph outgoing ball, m=σ=0, outgoing sphere χ/2=1, so Z(B³:empty→S²)=D^{-1+1}=1. For the incoming ball, χout=0, so Z(B³:S²→empty)=D^{-1}. Their composite is D^{-1}=τ(S³). For the sphere cylinder there are no handle loops and no surgery circles; the raw functional is D^{-1}yx and N_{S²}=D. Hence it becomes exactly yx, confirming the same normalization independently of the genus calculation. A decorated genus-g handlebody with coupon x is obtained by putting x below the cylinder word of §2; the identical cancellation proves Z(U_t,x)=x. Thus all Hom states are realized, not merely an unspecified subspace.

Presentation independence of C_M and hence Z(M) follows as soon as the closed colored graph invariant and the complete relative presentation interface T2 are proved. The algebraic signed generalized FR and circumcision calculations of proposal.md give the required equalities for those moves. This assertion is conditional on their geometric sufficiency, with no circular appeal to TQFT composition.

## 5. Disconnected boundary coupon projector

Let X_1,…,X_r be the ordered tensor objects for r connected middle surfaces, with fixed handle tuples. Choose unit-channel bases v_{q,a}:1→X_q, w_q^a:X_q→1 satisfying w_q^a v_{q,b}=δab. Define

ι:⊗_q Hom(1,X_q)→Hom(1,⊗_q X_q), ι(⊗x_q)=⊗x_q,

π(z)=Σ_{a_1,…,a_r}(⊗_q v_{q,a_q})[(⊗_q w_q^{a_q})z].

Here the bracket is a scalar and the first tensor denotes an element of the tensor product of Hom spaces, not an object-level morphism. Then πι=1 by the Kronecker deltas. On the combined Hom space,

ιπ(z)=(P_{X_1}⊗…⊗P_{X_r})z=D^{-2r}(E_{X_1}⊗…⊗E_{X_r})z.

This proves the complete projector identity by an explicit finite sum. Thus r family-meridians in T4 contribute D^{2r} times exactly the missing tensor-product inclusion/projection. It is generally false that Hom(1,⊗X_q)=⊗Hom(1,X_q); the meridians remove precisely the unwanted channels.

For special graph maps with disconnected input/output, define F_0=π_out∘Hom(1,F(Ω))∘ι_in, then perform the finite surgery-color sum. All insertion maps are canonical: changing unit bases changes neither P nor π. Consequently arbitrary internal coupon contractions are actual matrix products, not an asserted graphical cancellation.

## 6. Composition, with every scalar computed

First let M_1,M_2 be connected and let their common surface Σ have r≥1 components and total genus G. Set χ(Σ)/2=r−G. Use special graphs Ω_1,Ω_2 with m_1,m_2 surgery annuli and signatures σ_1,σ_2. Their outgoing/input handle labels on Σ are j, with coefficient d(j).

For r=1, stacking joins G paired uncolored arcs into G surgery annuli, colored j. Its surgery-weight product is d(j) times the products for the two old links. Functoriality of categorical composition gives the exact finite-sum equality

F_0(Ω)^l_i=Σ_j d(j) F_0(Ω_2)^l_j F_0(Ω_1)^j_i.

No basis is omitted: a complete basis in each Hom space is inserted between the two linear maps, giving Σ_a v_{j,a}w^{j,a}=P_{X_j}, which acts as the identity on Hom(1,X_j). Equivalently this is ordinary composition in the finite direct-sum vector space V_Σ. The new graph has m=m_1+m_2+G. Comparing the coefficient in §4 with the product of the coefficients for M_2 and M_1 gives identical powers of D, since the latter has exponent

−m_2−1+χout/2−m_1−1+(1−G)=−m_1−m_2−G−1+χout/2.

It also gives exactly d(l)d(j). Therefore

Z(M_2M_1)=κ^{σ_1+σ_2−σ}Z(M_2)Z(M_1),

where σ is the actual signature of the stacked surgery presentation. This is a complete algebraic gluing equality retaining its actual signature anomaly.

For general r use the all-r-family-meridian graph Ω^+ of T4. It presents M#(S¹×S²), M=M_2M_1. It has m^+=m_1+m_2+G+r surgery components. Section5 gives

F_0(Ω^+)^l_i=D^{2r}Σ_j d(j)F_0(Ω_2)^l_j F_0(Ω_1)^j_i.

The closed-normalization connected-sum identity is τ(N#P)=Dτ(N)τ(P), obtained directly by placing their surgery links in disjoint balls of S³: the union has m_N+m_P components and signature sum, while the product has one extra D^{-1}. The same calculation applies with fixed external cap graphs away from the sum balls. Since τ(S¹×S²)=1, it gives Z(M#(S¹×S²))=DZ(M). The graph Ω^+ coefficient after dividing this D is therefore

κ^{-σ^+}D^{-m_1-m_2-G-r-2+χout/2+2r}d(l)

=κ^{-σ^+}D^{-m_1-m_2-G+r-2+χout/2}d(l).

The product Z(M_2)Z(M_1) has precisely the same D exponent because χΣ/2=r−G. All d(j) factors also match. Removing the final redundant family-meridian corresponds to a separated zero-framed unknot after the local surgery; its signature is zero. Thus σ^+=σ in that presentation convention and the same formula holds:

Z(M)=κ^{σ_1+σ_2−σ}Z(M_2)Z(M_1).

For disconnected M_1,M_2, work on each connected component of the bipartite incidence graph whose vertices are components of M_1 and M_2 and whose edges are middle surface components. Isolated vertices simply tensor with the others. In a connected incidence component having a vertices from M_1 and b from M_2, connect-sum the a lower manifolds along a−1 interior pairs of balls and the b upper manifolds along b−1 interior pairs of balls, avoiding all ribbon graphs. These operations multiply their maps by D^{a−1}, D^{b−1}. After the middle gluing each of those pairs of balls already belongs to the same connected composite, so inserting the same neck changes that composite to its connected sum with a+b−2 copies of S¹×S². This multiplies its map by the same D^{a+b−2}; the surgery additions have zero signature. Apply the connected proof and cancel that nonzero D power. The result is the same componentwise signature formula. The topological neck assertion follows by removing two balls and joining their boundary spheres by S²×I: when the ambient manifold is connected it is the standard punctured S¹×S² connected-sum operation; when the balls lie in different components it is the ordinary connected sum. This requires no Cerf completeness theorem.

Disjoint union is exactly tensor product: the state spaces, caps, N factors and closed invariants all multiply. The empty bordism gives1. Composition of weighted maps κ^{-n}Z(M) is therefore reduced to the **single explicit signature/reference-cap identity** in §8. No unexplained D or d_i factor remains.

## 7. Local topological cylinder and gluing models (not completeness)

For T3, fix two disjoint balls Q^- and Q^+ in S³ and g disjoint pairs of boundary-attached solid cylinders, one cylinder from each ball for each handle. Their regular neighborhoods are the two standard genus-g handlebodies. For the rth handle choose a product disk D_r×[−1,1] disjoint from all other such products, containing two small product subcylinders B_r^-×[−1,1] and B_r^+×[−1,1] occupied by the opposing handle arcs. Let D'_r be an interior disk containing B_r^- and B_r^+, and put the zero-framed surgery annulus A_r=D_r\IntD'_r. Surgery replaces A_r×[−1,1] by D²×S¹ so that each meridian ∂D'_r×{t} bounds D²×{z(t)}. Its product portion caps the outer boundary of the pair-of-pants disk D'_r\Int(B_r^-∪B_r^+), leaving an annulus between ∂B_r^- and ∂B_r^+. For all t these annuli form the cylinder connecting the two handle boundaries. The complementary part of the attached solid torus fills the remaining disk-product region and leaves the ordinary cylinder between the two punctured sphere boundaries. These product structures agree on the annular collars because both use the same t coordinate and the surgery is zero-framed. Hence they assemble to Σ_t×I with its original parametrizations. The Ω strand encircles the i*⊗j pair by the chosen arc orientations; cutting its loop gives precisely E and the two adjacent bends give R of §2. This verifies the stated local word convention.

For T4, stack the special graphs across a separating sphere S². The G newly closed handle arcs each meet S² twice. A regular neighborhood of that sphere together with those arcs is the sphere product with 2G attached 1-handles. Applying the same annulus-surgery disk model as above identifies its surgered neighborhood with a cylinder over the connected genus-G surface. For r boundary components, r−1 disjoint family-meridians bound disks separating the specified r arc families. Zero-framed surgery compresses that connected surface along these r−1 disjoint separating circles. Explicitly remove S¹×I×I and replace it by the two disks D²×I; the result is the product of the r desired middle surfaces with I. Thus the complement contains exactly M_1 and M_2 attached along their prescribed boundary cylinders. Adding the last family-meridian compresses a circle bounding a disk in one of those product components; its surgery contributes the separate S¹×S² summand. The other external caps/coupons lie outside this neighborhood and are fixed throughout. This proves the local composition model used above, but not that every presentation is reachable or unique; that remains the genuine relative topology obligation T2.

## 8. Exact anomaly lemma still required

All formulas so far are for parametrizations with the reference Lagrangian λ_t=ker[H_1(∂U_t)→H_1(U_t)]. For those reference objects, write σ_1,σ_2,σ for the actual signatures above, and Δσ=σ−σ_1−σ_2. The algebra gives Z_comp=κ^{-Δσ}Z_2Z_1.

To turn this into the requested weighted category, a separate proved signature/reference-cap comparison must specify an integer a(M;λ_in,λ_out) such that, with parent’s middle-surface Maslov convention μ=μ(R_1λ_0,λ_1,R_2^tλ_2),

a(M_2M_1)−a(M_2)−a(M_1)=−Δσ−μ.

Then define Z_weighted(M,n)=κ^{-n-a(M)}Z(M). Because n_comp=n_2+n_1+μ, direct substitution gives

−n_comp−a_comp−Δσ=−n_2−a_2−n_1−a_1,

which is exactly strict weighted composition. If a is absorbed into the definition of the total cap/surgery signature s(M)=σ(M)+a(M), the required statement is simply s_comp−s_2−s_1=−μ. This is the precise sign to prove for the fixed convention κ^{-n}; choosing the opposite weight action reverses it. The parent’s Maslov cocycle alone does not establish this geometric signature comparison.

Likewise the parametrization-change cylinders descend by their now-proved cylinder and composition identities once this anomaly lemma is supplied. Naturality, duality and factorization use the already explicit raw/Q dual-basis resolutions, but calling the resulting operators a functor before T2 and this signature comparison are proved would still be premature.

## 9. Status after this continuation

Closed locally: geometric capped-cylinder Gram operator; its exact inverse N; complete paired-handle/coupon cancellation word; arbitrary multiplicity-space contraction; marked/disconnected cylinder; sphere and ball normalization; complete capped-map formula; tensor/disjoint-union and empty laws; full algebraic composition with its actual signature defect, including disconnected middle surfaces and all D,d_i powers.

Remaining scientific obligations: genuine complete relative topology T2; actual band-slide reduction or independent ribbon identity if the chosen calculus uses band slides; multicolored coupon evaluator geometry if not separately authored; the exact global signature/reference-cap/Maslov lemma in §8. No anomaly-free narrowing is used.
