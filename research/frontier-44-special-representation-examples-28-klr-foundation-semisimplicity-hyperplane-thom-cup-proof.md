# Hyperplane restriction–Gysin composite and its exact normalization

Owning local proof component for the joint projective package; no new item ID or canonical metadata edit. The ordinary six-operation and Verdier orientation suppliers retain their independent review status. Full actual published proof bodies read: `lem-pullback-of-the-thom-class-along-a-transverse-section`, `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`, and the line normalization in `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`. The coherent algebraic duality item `lem-smooth-projective-embedding-gysin-trace-compatibility` was also read, but is **not used**: its coefficients are coherent sheaves and its trace is not the present analytic constant-sheaf trace. The actual analytic oriented Verdier supplier was read in full, including its positive disk generator and adjunction transposition construction.

## 1. Smooth divisor purity and the counit

Let M be a smooth complex manifold of dimension m and i:D→M a smooth closed complex divisor. The actual ordinary duality exchange gives

i!k_M = D_D i*D_M k_M = D_D(k_D[2m]) = k_D[-2].

Fix this isomorphism using the positive complex normal orientation. Locally choose a holomorphic coordinate z transverse to D. The compact-support normal disk cochains have the single positive generator in degree two, normalized on its disk/boundary pair. The actual extraordinary adjunction construction uses exactly this finite relative cochain evaluation; therefore its counit i_*i!k_M→k_M, after the displayed purity identification, is the positive normal Thom class morphism

i_*k_D→k_M[2].

This is a normalization of the actual counit, not a new arbitrarily chosen Gysin map. One can check equality of the two morphisms globally: adjunction identifies Hom_M(i_*k_D,k_M[2]) with Hom_D(k_D,i!k_M[2])=H^0(D,k). A morphism is determined by its locally constant scalar on each connected component. The local disk evaluation gives scalar1 on every component, so the counit and positive normal Thom morphism agree. No comparison of only global cohomology ranks is used.

Write R:k_M→i_*k_D for ordinary restriction and G:i_*k_D→k_M[2] for this oriented counit. Their composite is a morphism k_M→k_M[2], hence an actual class in H²(M;k). Under the relative support model it is precisely the forget-support image of the normal Thom class. Projection formula and the naturality of restriction identify, for every u∈H²(M;k),

G[2q] (i*u)^q R = u^q (G R),

as morphisms k_M→k_M[2q+2]. The even cochain degree introduces no graded interchange sign. This identity holds before passing to ordinary or perverse cohomology.

## 2. The divisor class is the actual line class

Now let M be smooth projective and D the smooth zero locus of a transverse holomorphic section σ of a complex line bundle B on M. Its normal derivative identifies the normal complex line with B|D, preserving the positive real rank-two orientation. The published transverse-section Thom lemma, whose scope is a closed oriented smooth manifold and is therefore exactly met here, identifies the relative normal Thom class with σ* of the bundle Thom class. Its forget-support image is e(B_R). The published complex-line normalization is c1(B)=e(B_R), so

G R = c1(B): k_M→k_M[2].

All identifications are made through the actual normalized orientation class; there is no minus sign or unproved coherent-sheaf/analytic comparison. Smooth projective manifolds have the requisite finite CW type via the actual compact controlled triangulation supplier. For a disconnected manifold apply the line-class assertion to each component; empty components contribute zero. The line tensor formula therefore applies componentwise to all source spaces below.

## 3. Universal incidence is a transverse zero locus

Let X be smooth projective of dimension n, with a very ample line A giving its closed embedding in P^d. Let P=(P^d)^dual and M=X×P. On M the evaluation section of

B = pr_X* A ⊗ pr_P* O_P(1)

has zero locus D={(x,H):x∈H}. This section is transverse: at every zero (x,H), evaluation in the varying hyperplane direction surjects onto the one-dimensional fiber, since some homogeneous coordinate of x is nonzero. Equivalently, on a chart where that coordinate is nonzero, the section equation has nonzero derivative in its corresponding hyperplane coefficient. Thus D is smooth of dimension n+d−1 and its normal bundle is B|D with the same complex orientation. The actual line tensor formula gives

c1(B)=pr_X*η + pr_P*h,

where η=c1(A) and h=c1(O_P(1)). This proves the universal divisor class without assuming it from a survey.

For a fixed smooth source hyperplane D_a⊂X, the identical construction with the constant section defining a gives divisor class η. For a smooth source pulled back from a target hyperplane of class L, the divisor line is f*L, so its class is f*L. These are the exact fixed-source and target restriction/Gysin identities used in the base-HL and nonmiddle-polarization stages. Transversality of the chosen sections is the separate generic hyperplane input; no assertion is made about singular zero loci.

## 4. Derived shifts and relative perverse identity

Let F=f×id_P:M→Y×P and g=F i. Set

A_0=RF_*k_M[n+d]=p*Rf_*k_X[n][d],  C_0=Rg_*k_D[n+d−1].

Restriction gives R:A_0→C_0[1]. The oriented trace gives G:C_0→A_0[1]. Hence for q=r−1≥0 the correctly shifted composite is

A_0 → C_0[1] → C_0[2r−1] → A_0[2r],

with middle map (i*pr_X*η)^(r−1) and final map G[2r−1]. Sections1–3 prove this is cup multiplication by

(pr_X*η)^(r−1) (pr_X*η+pr_P*h)

on A_0. The maps are the same restriction and dual-oriented Gysin maps in the actual universal weak-Lefschetz supplier: that supplier obtains the dual map through the same ordinary duality adjunction and positive orientation. The adjunction triangle identities, rather than a freely chosen scalar, fix this comparison.

The pr_P*h summand is pulled back from Y×P. Its cup action is a natural transformation T:Id→[2] of the actual constructible derived category, obtained by tensoring with the class morphism k→k[2] and using the coherent projection formula. Such a degree-two natural transformation acts as zero pH^jK→pH^(j+2)K for every K. Indeed use naturality with pτ≤jK→K: its action factors through (pτ≤jK)[2], whose pH^j equals pH^(j+2)(pτ≤jK)=0, whereas pH^j(pτ≤jK)→pH^jK is an isomorphism. This is solely bounded t-structure truncation and actual tensor naturality, with no Lefschetz splitting or decomposition theorem.

Consequently after applying perverse cohomology the composite above is exactly p*(η^r)[d]. In particular R:Gysin is η in the middle case r=1, with its positive normalization. The same tensor-naturality argument removes the target class from η'+h when an absolutely very ample source class is needed for the inductive universal family. The source, target and universal restriction–Gysin interfaces are now locally constructed relative to the stated analytic orientation and published Thom/line suppliers.

## Acceptance and metadata boundary

This component supplies the formerly open exact cup/trace interface, including its local disk scalar, degree shifts and base-class-zero argument. Required additional direct published dependencies for the joint core are `lem-pullback-of-the-thom-class-along-a-transverse-section` and `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`; the latter already explicitly carries the line c1=e normalization, so the separately read top-Chern theorem is not needed as a new direct edge. Root owns their native plan integration after writers drain. The refined-fibre intersection and moving-family components remain separate necessary geometry. No native mathematical acceptance or complete projective package is claimed here.
