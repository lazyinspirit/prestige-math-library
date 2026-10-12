---
id: lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction
kind: lemma
title: "Simultaneous projective Lefschetz, Hodge and perverse induction step"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 24
deps: [def-axiom-of-choice, lem-affine-morphisms-have-one-sided-perverse-exactness, lem-algebraic-open-inclusion-surjects-on-fundamental-groups, lem-analytic-constructible-sheaves-admit-coherent-six-operations, lem-artin-affine-vanishing-for-constructible-perverse-sheaves, lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition, lem-hard-lefschetz-splits-a-bounded-t-structure-complex, lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations, lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual, lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact, lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism, lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures, lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness, lem-projective-hypersurface-dimension-drop, lem-pullback-of-the-thom-class-along-a-transverse-section, lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects, prop-first-chern-class-of-tensor-dual-and-conjugate-lines, thm-bertini-smooth-hyperplane-section, thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications, thm-generic-smoothness-characteristic-zero, thm-mixed-hodge-weights-control-proper-cohomological-restriction-images, thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes, thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties, thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree, thm-smooth-projective-gauss-manin-local-systems-are-semisimple, thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "M. A. A. de Cataldo and L. Migliorini, «The Hodge theory of algebraic maps», arXiv:math/0306030v2 (complete arXiv PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "§4.4–4.7 and §§5–6 (the projective proof of Theorem 2.1.1: relative hard Lefschetz, decomposition, Hodge and semisimplicity), printed pp. 33–59"
    - title: "A. A. Beilinson, J. Bernstein and P. Deligne, «Faisceaux pervers», Astérisque 100 (1982) (complete Numdam PDF)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "4.2.3–4.2.6.2, printed pp. 109–112, and 5.4.10–5.4.15, printed pp. 145–148"
    - title: "M. Goresky, «Lecture Notes on Sheaves and Perverse Sheaves» (version of June 26, 2026)"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "§§22–24, printed pp. 87–92 (perverse heart, Lefschetz statements, decomposition theorem)"
---

## Statement

Assume AC. Let $f:X\to Y$ be a projective morphism of complex projective varieties, with $X$ smooth connected of dimension $n$, let $\eta$ be a very ample source class, and put $L=f^*c_1(B)$ for a very ample target line $B$. Write $K=Rf_*\mathbb Q_X[n]$, $P_b={}^pH^bK$, $F_bH^q(X)=\operatorname{im}(H^{q-n}(Y,{}^p\tau_{\le b}K)\to H^q(X))$, $H_b^q=F_bH^q/F_{b-1}H^q$, $m=\dim f(X)$ and

$$r(f)=\max_i\bigl(2i+\dim\{y:\dim f^{-1}(y)=i\}-n\bigr).$$

Consider the following package: relative $\eta$ hard Lefschetz $\eta^i:P_{-i}\simeq P_i$; a finite normalized splitting $K\simeq\bigoplus_bP_b[-b]$; semisimplicity of every $P_b$ with semisimple complexifications of its IC local systems; target graded hard Lefschetz $L^j:H_b^{n+b-j}\simeq H_b^{n+b+j}$; pure Hodge structures of their ordinary degree on the canonical graded groups; and polarized orthogonal double primitive decomposition. The double primitive space is

$$\mathcal P_{-i}^{-j}=\ker\eta^{i+1}\cap\ker L^{j+1}\subset H_{-i}^{n-i-j},\qquad i,j\ge0,$$

with polarization $Q_t(u,v)=(-1)^{t(t-1)/2}\int_X\eta^iL^ju\wedge v$, $t=n-i-j$, and positivity $Q_t(Cu,\bar u)>0$ for nonzero $u$, where $C$ acts on type $(p,q)$ by $i^{p-q}$. Filtration and primitive forms are the canonical graded ones; no primitive-compatible lift to ordinary global cohomology is assumed.

If this package holds for all smooth connected projective-source maps of lexicographically smaller pair $(r,m)$, with $r$ primary, then it holds for $f$. The image-dimension-zero base is supplied by absolute polarized Hodge theory and finite linear algebra. Finite disconnected smooth sources are handled componentwise. The statement preserves arbitrary projective fibres and requires neither semismallness nor affine paving.

## Facts & Assumptions

**Given:** AC, the projective data and the exact lexicographically lower package in the Statement. The following proof includes the actual geometric constructions; its named upstream suppliers retain their own review status.

[F1] Ordinary middle perversity, coherent ordinary six operations and compatible algebraic Whitney strata with smooth stratum maps are supplied by [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]], [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]] and [[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]]. The exact noncharacteristic normalized pullback is [[lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact]].

[F2] Actual affine one-sided exactness and affine cohomology vanishing are [[lem-affine-morphisms-have-one-sided-perverse-exactness]] and [[lem-artin-affine-vanishing-for-constructible-perverse-sheaves]]. Universal relative weak Lefschetz and maximal base pullback objects are [[lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects]], and source defect drop is [[lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness]]. Generic smoothness, including empty nondominant fibres, and basepointfree Bertini are [[thm-generic-smoothness-characteristic-zero]] and [[thm-bertini-smooth-hyperplane-section]]. Target dimension drop uses [[lem-projective-hypersurface-dimension-drop]].

[F3] The positive divisor Thom class and tensor line class use [[lem-pullback-of-the-thom-class-along-a-transverse-section]] and [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]. They apply to the smooth projective sources constructed below. The actual analytic trace is the oriented adjunction counit from [F1]; no coherent-sheaf trace is substituted.

[F4] Absolute Hodge, real Kähler hard Lefschetz, Hodge–Riemann and orthogonal Hodge substructures are [[thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties]]. Finite derived splitting, graded primitive strings and intrinsic self-dual nilpotent filtration are [[lem-hard-lefschetz-splits-a-bounded-t-structure-complex]], [[lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition]] and [[lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual]]. The middle limiting-primitive argument is [[lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations]], whose explicit earlier-stage hypotheses are verified below. The formal supported splitting criterion is [[lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism]].

[F5] Actual equality of proper-fibre cohomological images and proper mixed-Hodge class morphisms are [[thm-mixed-hodge-weights-control-proper-cohomological-restriction-images]] and [[thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree]]. Geometric local-system semisimplicity and extension from a dense algebraic open are [[thm-smooth-projective-gauss-manin-local-systems-are-semisimple]] and [[lem-algebraic-open-inclusion-surjects-on-fundamental-groups]]. These are independent suppliers, not the current decomposition conclusion.

## Proof

1.1 The pair $(r,m)$ consists of nonnegative integers: on a generic fibre of dimension $a=n-m$, its defect contribution is $2a+m-n=a\ge0$, and there are finitely many algebraic fibre-dimension loci. If $m=0$, the map factors through a point. Relative $\eta$ hard Lefschetz is absolute hard Lefschetz, the finite point-derived category splits by ordinary truncations, all point local systems are semisimple, graded $L$ hard Lefschetz is zero-to-zero away from its centre, and double primitive positivity is absolute Hodge–Riemann. This proves the base without an unstated relative theorem. For positive image dimension use the lower package only on the strictly lower maps specified in the following constructions. [given, F1, F4, algebra]

2.1 Construction A gives the actual divisor identity: smooth codimension-one purity has the positive normal disk counit, transverse section Thom comparison identifies its restriction–trace composite with its line class, and the universal evaluation line is the source line tensored with the parameter $\mathcal O(1)$. The exact shifts are $R:A_0\to C_0[1]$ and $G:C_0\to A_0[1]$. Tensor naturality with ${}^p\tau_{\le j}$ makes the degree-two target parameter class act by zero on perverse degree $j\to j+2$. Thus the composite with $\eta'^{r-1}$ is exactly $\eta^r$ on the required perverse groups. Construction B derives actual general parameter transversality and the fixed target weak-Lefschetz bounds, including basepointfree source smoothness. [F1, F2, F3, step 1.1, construct]

3.1 Construction C proves relative hard Lefschetz when $r>0$: the universal map has smaller defect, its class $\eta'+h$ is absolutely very ample and induces the same relative operator, and its middle perverse object is semisimple by lower induction. The maximal pullback quotient forbids a kernel in $P_{-1}\xrightarrow{\eta}P_1$; duality supplies surjectivity. Higher powers use outside weak-Lefschetz isomorphisms. For $r=0$, the fibre-dimension support bound and self-duality make $K$ perverse, so the assertion is tautological. The abstract bounded-t splitting gives the finite normalized decomposition. Nonzero perverse degrees are split subquotients of lower-defect universal objects; ordinary heart full faithfulness descends their projectors and duality treats positive degrees, including the complexified local-system clause. [F1, F2, F4, step 2.1, construct]

4.1 Construction D first proves graded $L$ hard Lefschetz outside perverse degree zero using fixed source cuts, only while their defect is positive. All target cup operators commute with the heart projectors. In degree zero, target-cut restriction/Gysin isomorphisms prove powers at least two. For the first power, strict block-diagonal $L$ action lifts a kernel to an ordinary $L$-kernel; each of its classical Hodge types stays there, without assuming the original perverse filtration Hodge. A nonzero type restricts to a nonzero lower-map middle primitive with positive Hodge–Riemann norm, while the target Thom cup formula makes its integral zero. This contradiction proves injectivity; duality gives an isomorphism. Every chosen source or target map is strictly lower by Construction B. [F1, F2, F3, F4, step 2.1, step 3.1, construct]

5.1 The intrinsic centered nilpotent filtration now identifies the perverse filtration degree by degree, so its kernel/image formula proves it Hodge. Construction D then restricts nonmiddle double primitives to lower source/target slices, checks their actual graded primitive kernels using the Gysin isomorphisms, and identifies their forms by the Thom cup formula. Lower Hodge–Riemann makes these forms polarizations. The large target-index boundary is zero by cutting to a finite-point image and negative hypercohomology there. Construction E verifies every explicit hypothesis (a)–(c) of the middle limiting lemma, its total pairing symmetry, primitive lifts and the actual middle subspace identification. That lemma gives the remaining $(0,0)$ positivity. This order uses only previously proved nonmiddle forms in the endpoint-limit argument. [F1, F3, F4, step 3.1, step 4.1, construct, algebra]

6.1 Construction F identifies the zero-stratum costalk/stalk map with the graded refined intersection form. Artin on an affine target open gives the graded restriction edge; the actual mixed-Hodge image equality upgrades it to global surjectivity using strictness from the earlier finite normalized splitting. Proper trace duality gives an injective class map. The proper mixed-Hodge class supplier makes its image a pure sub-Hodge structure in $\ker L$. Naturality for genuine perverse $\eta$ projectors decomposes that image into the orthogonal primitive blocks, and each block's sign-adjusted polarization restricts nondegenerately. Therefore the actual intersection matrix is invertible, without current middle semisimplicity or a global primitive-compatible lift. [F1, F2, F4, F5, step 3.1, step 5.1, construct]

7.1 Construction G constructs projective target slices through an arbitrary positive-dimensional stratum point: the constrained system is smooth away from its fibre base locus by Bertini, and independent differentials along the smooth source stratum maps give smoothness at every point of that fibre. The slices have no larger defect and smaller image dimension. Their normalized extraordinary/ordinary compositions reflect the actual local costalk/stalk map with both real normal shifts $-2s$ cancelled. Lower slice intersection invertibility gives the isomorphism along every such stratum. The formal closed-support criterion then inducts over the finite closed-stratum frontier and yields an IC decomposition of $P_0$ before local-system semisimplicity is used. [F1, F2, F4, step 6.1, construct]

8.1 Construction H gives the actual smooth projective moving family and its quotient onto each intermediate-dimensional stratum system. Its good algebraic section is constructed by a rational point in an explicit product-projective generic fibre; dominance is not mistaken for a section. Smooth incidence parameter maps and the graph factorization have net perverse shift $(d-s)+s-d=0$. The fibre stalk map is the lower-map global graded restriction, hence surjective. Independent Gauss–Manin semisimplicity and dense-open fundamental-group surjectivity imply both rational and complexified semisimplicity. Construction G supplies the explicit top-stratum identification with $R^{n-m}f_*\mathbb Q$, and point strata are finite vector spaces. Applying intermediate extension to these finite decompositions makes every IC summand a finite sum of simple IC objects. [F1, F2, F5, step 6.1, step 7.1, construct]

9.1 Steps 3.1–8.1 prove every clause of the package in the Statement under exactly its lower-package hypothesis. Every source slice, universal family or target slice used has a smaller nonnegative lexicographic pair, and step 1.1 supplies the image-zero base; thus this lemma is the actual simultaneous induction step. The projective constructions preserve arbitrary fibre dimensions and singular proper fibres. All sums, projector decompositions and cohomological models are finite. No finite-ADE restriction, arithmetic purity or fibre affine-paving hypothesis entered. [step 1.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1, algebra] ∎

## Complete local construction texts

The following are embedded local proof texts, not citations replacing proof. Their earlier-stage inputs are discharged in the order A–H and by the numbered proof above; only the explicitly named external local suppliers retain their own independent review obligations. Section-specific fact and step labels within a component are local to that component.


### Construction A: positive hyperplane Thom/cup comparison

### Hyperplane restriction–Gysin composite and its exact normalization

This is the local normalization component for the joint projective package. The published proof bodies read are: `lem-pullback-of-the-thom-class-along-a-transverse-section`, `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`, and the line normalization in `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`. The coherent algebraic duality item `lem-smooth-projective-embedding-gysin-trace-compatibility` was also read, but is **not used**: its coefficients are coherent sheaves and its trace is not the present analytic constant-sheaf trace. The actual analytic oriented Verdier supplier was read in full, including its positive disk generator and adjunction transposition construction.

#### 1. Smooth divisor purity and the counit

Let M be a smooth complex manifold of dimension m and i:D→M a smooth closed complex divisor. The actual ordinary duality exchange gives

i!k_M = D_D i*D_M k_M = D_D(k_D[2m]) = k_D[-2].

Fix this isomorphism using the positive complex normal orientation. Locally choose a holomorphic coordinate z transverse to D. The compact-support normal disk cochains have the single positive generator in degree two, normalized on its disk/boundary pair. The actual extraordinary adjunction construction uses exactly this finite relative cochain evaluation; therefore its counit i_*i!k_M→k_M, after the displayed purity identification, is the positive normal Thom class morphism

i_*k_D→k_M[2].

This is a normalization of the actual counit, not a new arbitrarily chosen Gysin map. One can check equality of the two morphisms globally: adjunction identifies Hom_M(i_*k_D,k_M[2]) with Hom_D(k_D,i!k_M[2])=H^0(D,k). A morphism is determined by its locally constant scalar on each connected component. The local disk evaluation gives scalar1 on every component, so the counit and positive normal Thom morphism agree. No comparison of only global cohomology ranks is used.

Write R:k_M→i_*k_D for ordinary restriction and G:i_*k_D→k_M[2] for this oriented counit. Their composite is a morphism k_M→k_M[2], hence an actual class in H²(M;k). Under the relative support model it is precisely the forget-support image of the normal Thom class. Projection formula and the naturality of restriction identify, for every u∈H²(M;k),

G[2q] (i*u)^q R = u^q (G R),

as morphisms k_M→k_M[2q+2]. The even cochain degree introduces no graded interchange sign. This identity holds before passing to ordinary or perverse cohomology.

#### 2. The divisor class is the actual line class

Now let M be smooth projective and D the smooth zero locus of a transverse holomorphic section σ of a complex line bundle B on M. Its normal derivative identifies the normal complex line with B|D, preserving the positive real rank-two orientation. The published transverse-section Thom lemma, whose scope is a closed oriented smooth manifold and is therefore exactly met here, identifies the relative normal Thom class with σ* of the bundle Thom class. Its forget-support image is e(B_R). The published complex-line normalization is c1(B)=e(B_R), so

G R = c1(B): k_M→k_M[2].

All identifications are made through the actual normalized orientation class; there is no minus sign or unproved coherent-sheaf/analytic comparison. Smooth projective manifolds have the requisite finite CW type via the actual compact controlled triangulation supplier. For a disconnected manifold apply the line-class assertion to each component; empty components contribute zero. The line tensor formula therefore applies componentwise to all source spaces below.

#### 3. Universal incidence is a transverse zero locus

Let X be smooth projective of dimension n, with a very ample line A giving its closed embedding in P^d. Let P=(P^d)^dual and M=X×P. On M the evaluation section of

B = pr_X* A ⊗ pr_P* O_P(1)

has zero locus D={(x,H):x∈H}. This section is transverse: at every zero (x,H), evaluation in the varying hyperplane direction surjects onto the one-dimensional fiber, since some homogeneous coordinate of x is nonzero. Equivalently, on a chart where that coordinate is nonzero, the section equation has nonzero derivative in its corresponding hyperplane coefficient. Thus D is smooth of dimension n+d−1 and its normal bundle is B|D with the same complex orientation. The actual line tensor formula gives

c1(B)=pr_X*η + pr_P*h,

where η=c1(A) and h=c1(O_P(1)). This proves the universal divisor class without assuming it from a survey.

For a fixed smooth source hyperplane D_a⊂X, the identical construction with the constant section defining a gives divisor class η. For a smooth source pulled back from a target hyperplane of class L, the divisor line is f*L, so its class is f*L. These are the exact fixed-source and target restriction/Gysin identities used in the base-HL and nonmiddle-polarization stages. Transversality of the chosen sections is the separate generic hyperplane input; no assertion is made about singular zero loci.

#### 4. Derived shifts and relative perverse identity

Let F=f×id_P:M→Y×P and g=F i. Set

A_0=RF_*k_M[n+d]=p*Rf_*k_X[n][d],  C_0=Rg_*k_D[n+d−1].

Restriction gives R:A_0→C_0[1]. The oriented trace gives G:C_0→A_0[1]. Hence for q=r−1≥0 the correctly shifted composite is

A_0 → C_0[1] → C_0[2r−1] → A_0[2r],

with middle map (i*pr_X*η)^(r−1) and final map G[2r−1]. Sections1–3 prove this is cup multiplication by

(pr_X*η)^(r−1) (pr_X*η+pr_P*h)

on A_0. The maps are the same restriction and dual-oriented Gysin maps in the actual universal weak-Lefschetz supplier: that supplier obtains the dual map through the same ordinary duality adjunction and positive orientation. The adjunction triangle identities, rather than a freely chosen scalar, fix this comparison.

The pr_P*h summand is pulled back from Y×P. Its cup action is a natural transformation T:Id→[2] of the actual constructible derived category, obtained by tensoring with the class morphism k→k[2] and using the coherent projection formula. Such a degree-two natural transformation acts as zero pH^jK→pH^(j+2)K for every K. Indeed use naturality with pτ≤jK→K: its action factors through (pτ≤jK)[2], whose pH^j equals pH^(j+2)(pτ≤jK)=0, whereas pH^j(pτ≤jK)→pH^jK is an isomorphism. This is solely bounded t-structure truncation and actual tensor naturality, with no Lefschetz splitting or decomposition theorem.

Consequently after applying perverse cohomology the composite above is exactly p*(η^r)[d]. In particular R:Gysin is η in the middle case r=1, with its positive normalization. The same tensor-naturality argument removes the target class from η'+h when an absolutely very ample source class is needed for the inductive universal family. The source, target and universal restriction–Gysin interfaces are now locally constructed relative to the stated analytic orientation and published Thom/line suppliers.

#### Acceptance and metadata boundary

This component supplies the formerly open exact cup/trace interface, including its local disk scalar, degree shifts and base-class-zero argument. Required additional direct published dependencies for the joint core are `lem-pullback-of-the-thom-class-along-a-transverse-section` and `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`; the latter already explicitly carries the line c1=e normalization, so the separately read top-Chern theorem is not needed as a new direct edge. Root owns their native plan integration after writers drain. The refined-fibre intersection and moving-family components remain separate necessary geometry. No native mathematical acceptance or complete projective package is claimed here.

### Construction B: fixed hyperplane interfaces

### Actual fixed hyperplane interfaces for the simultaneous induction

This component supplies the generic transversality and weak-Lefschetz maps used in the base/nonmiddle stage. The published `thm-generic-smoothness-characteristic-zero` and `thm-bertini-smooth-hyperplane-section` bodies were read; Bertini explicitly covers finite-dimensional basepointfree systems, not only a very ample embedding.

#### 1. A general parameter slice is genuinely noncharacteristic

Take the universal source-hyperplane map g:D→Y×P and its bounded constructible direct image C. Choose a finite complex algebraic Whitney stratification on Y×P compatible with its finitely many ordinary/perverse cohomology objects and the maps and kernels needed in the current calculation, using the actual finite algebraic stratification supplier. This is a finite collection, not an arbitrary cyclic diagram.

For each smooth locally closed stratum T, apply the published generic-smoothness theorem to its projection q_T:T→P, separately on its finitely many irreducible components. On components not dominating P avoid the proper closed image closure; on dominant components take the dense target open on which the whole inverse image is smooth. Intersect these finitely many nonempty opens. Over the resulting parameter open, dq_T is onto at every point. Therefore the slice Y×{a} is transverse to every stratum it meets. The actual noncharacteristic lemma gives perverse-exact a*[-dimP], with its ordinary proper base-change comparison.

Intersect this open also with the generic smooth-source and defect-drop opens. Proper base change identifies a*C[-dimP] with Rf_a*k_(X_a)[n−1], while a*p*P_b[dimP]=P_b. Thus every restriction/Gysin isomorphism, monomorphism, epimorphism and canonical primitive kernel of the universal weak-Lefschetz supplier specializes with the exact fixed-source shifts. The fixed-source smoothness is the actual Bertini clause, and its defect decrease is the already proved dimension argument. Exact pullback preserves kernels, images and the finite primitive decompositions. Applying lower-defect semisimplicity makes the middle injections/epimorphisms split; no current middle semisimplicity is assumed. Repeat with each new smooth source for the required finite sequence of cuts only while its defect is positive. Strict source-defect drop is invoked only for r>0 and at most r successive nonempty cuts; a defect-zero map cannot drop below zero. Its nonzero perverse grades and negative eta primitive indices already vanish, and its middle stage is handled by the target/image or point base. Thus no source cut after the defect reaches zero is needed. Perverse degrees outside the defect amplitude vanish, so cuts beyond that amplitude are unnecessary.

#### 2. General target hyperplanes are transverse to every required stratum

For a smooth algebraic stratum S⊂Y in a projective embedding, its universal hyperplane incidence I_S⊂S×P is a smooth projective-space bundle over S. Explicit local evaluation in a nonzero homogeneous coordinate shows the defining section is transverse, exactly as in the universal Thom component. Projection I_S→P is a morphism from a smooth variety. Applying the same published generic-smoothness theorem on each component gives a common parameter open where its differential is onto at every point. The kernel of that differential is T_yS∩T_yH. The smooth bundle dimension is dimS+dimP−1, so the kernel has dimension dimS−1; hence S and H are transverse. Nondominant or zero-dimensional incidence components are avoided. Finite intersection over the strata gives one parameter open; no assertion of simultaneous avoidance of all positive-dimensional fibres is used.

Apply published Bertini also to the globally generated pullback of the target hyperplane system on X. It is basepointfree because a nonzero homogeneous coordinate at f(x) provides a section nonzero at x. Thus on a common nonempty parameter open its whole zero scheme X^1 is smooth, even though this line need not be ample. The original stratification of Y includes the fibre-dimension loci, so the chosen target section lowers every positive-dimensional such locus by one and avoids the zero-dimensional loci. The source has dimension n−1 when nonempty; the new defect contributions are

2i+(dimY_i−1)−(n−1)=2i+dimY_i−n.

Thus defect does not increase. Image dimension decreases by one on a positive-dimensional projective image, by the actual projective hypersurface dimension-drop supplier. For image dimension zero the full induction already has its point base case. These facts put every nonempty target-cut map strictly below the original pair (defect,image dimension).

The actual noncharacteristic pullback identifies K^1=i*K[-1], and its perverse cohomology with i*P_b[-1]. It commutes with the eta kernels and finite heart projectors. This supplies the target primitive compatibility used in the base-HL and nonmiddle calculations.

#### 3. Target weak Lefschetz from actual affine vanishing

Let P be any ordinary perverse object on the projective target Y, H a chosen noncharacteristic target hyperplane, i:Y_1→Y, and j:U→Y its affine complement. Put P_1=i*P[-1]. The ordinary localization triangle is j!j*P→P→i_*P_1[1]. Global compact-support Artin gives H_c^q(U,j*P)=0 for q<0. Its long exact sequence makes restriction

H^ell(Y,P)→H^(ell+1)(Y_1,P_1)

an isomorphism for ell<−1 and a monomorphism at ell=−1. Dualize with the actual projective finite cohomology pairing and complex codimension-one orientation to obtain

H^(ell−1)(Y_1,P_1)→H^ell(Y,P)

isomorphic for ell>1 and surjective at ell=1. The index in this Gysin inequality is the TARGET index. The two maps are the actual restriction and oriented adjunction trace; their composite is target cup L by the independently constructed positive Thom/line component. Apply these bounds successively for general target cuts and to the primitive summands of P, since each is again perverse and the pullback is exact.

#### Inputs and current boundary

This completes the exact source-parameter specialization, target transversality/basepointfree smoothness, target defect bound and weak-Lefschetz mechanisms consumed in the earlier local base-HL/nonmiddle deduction. Direct core prerequisites should explicitly include the published generic-smoothness and Bertini theorems and the actual finite algebraic stratification supplier; all already occur in its existing transitive context. The source and target cup identities are the hyperplane-Thom component. The projective refined-intersection and moving-family stage remains separately owned construction; this component confers no native mathematical acceptance.

### Construction C: relative hard Lefschetz

### Relative hard Lefschetz stage of the projective induction

This is the relative hard Lefschetz stage of the joint-package construction: a conditional deduction whose exact remaining geometric input is stated below, not assumed under the word “standard.” Sources read: de Cataldo–Migliorini §5.1.1–5.1.3 with §4.7.8–4.7.9, and the BBD maximal-subobject argument in full.

Let K=Rf_*Q_X[n], X smooth projective of dimension n, and let eta be a very ample source class. For the universal hyperplane family g, write C=g_*Q_univ[n+d−1], where d=dim|eta| and p:Y×P^d→Y. The completed defect calculation gives r(g)<r(f) when r(f)>0. By the induction hypothesis the universal-family direct image has relative HL and semisimple perverse cohomology.

#### Exact geometric interface required

The actual universal-hyperplane supplier already gives weak Lefschetz maps R and G between p^*pH^b(K)[d] and pH^(b+1)(C), with R an isomorphism for b<-1 and a monomorphism at b=-1, and the dual G isomorphisms above the middle and epimorphism at the middle. Its maximal-base-pullback assertion gives the largest pullback subobject and quotient of pH^0(C).

For the present proof one must additionally establish the compatible restriction/Gysin cup identity on the actual source: G eta'^(r−1) R is p^*(eta^r)[d] on the corresponding perverse groups. Here eta'=i^*p'^*eta, and the universal divisor has line bundle eta_bundle⊠O(1). Its actual Thom trace gives divisor class c1(eta_bundle)+h_parameter. The parameter summand is pulled back from the target and therefore acts by zero on perverse cohomology. The exact available published proof route uses `lem-pullback-of-the-thom-class-along-a-transverse-section` and `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`, whose full bodies have been read. Those potential additional supplier edges have been reported to root before actual core acceptance; they are not silently declared supplied by a generic six-operation interface. That precisely typed identity is now locally constructed in `semisimplicity-hyperplane-thom-cup-proof.md`, including the actual counit scalar, transverse evaluation-section line, shifted restriction/Gysin composite and tensor base-class-zero calculation. It remains conditional on its named upstream orientation/Thom suppliers and focused review; no new native acceptance is inferred.

#### The universal source class is usable for induction

The class eta' is only relatively ample for g, but eta'+h_parameter is absolutely very ample on the universal source: it is the restriction of O(1,1) under the closed embedding into X×P^d and the Segre embedding. The parameter class is pulled back from the target. For any target class t of degree2, its natural transformation K→K[2] induces zero pH^b(K)→pH^(b+2)(K): by naturality restrict to pτ≤bK, whose pH^(b+2) is zero. Therefore the induced relative operator of eta'+h_parameter equals that of eta'. The inductive HL for the absolute class is exactly the required relative HL for eta'. No general nonprojective ampleness or compactification theorem is used.

#### Hard Lefschetz in the middle two perverse degrees

Let A=p^*pH^(-1)(K)[d] and B=p^*pH^1(K)[d]. The preceding interface gives a monomorphism A→C_0=pH^0(C), an epimorphism C_0→B, and identifies their composite with p^*eta[d]. Suppose the composite has a nonzero kernel T⊂A. Semisimplicity of C_0 splits the chain T⊂ker(C_0→B)⊂C_0, yielding C_0=T⊕R_0⊕S with S→B an isomorphism. The projection C_0→T⊕S is then a quotient consisting of pullbacks from Y. It strictly contains the maximal pullback quotient B, because T is nonzero. This contradicts the maximality assertion. Thus the composite is a monomorphism. The proper direct image K is self-dual, and eta is self-dual, by smooth complex orientation and the proper Verdier comparison; dualizing makes it an epimorphism too. Hence it is an isomorphism. Smooth surjective p^*[d] is exact and conservative, so eta:pH^(-1)K→pH^1K is an isomorphism on Y.

For r≥2 both outside restriction/Gysin maps are isomorphisms by weak Lefschetz, and the inside eta'^(r−1) is an isomorphism by induction. Their exact composite therefore proves eta^r:pH^(-r)K→pH^rK is an isomorphism. The r=0 assertion is the identity. The already locally proved bounded-t hard-Lefschetz splitting lemma now gives the finite derived splitting of K. It does not invoke a stronger primitive-compatible global lift.

#### Nonzero perverse semisimplicity

Weak Lefschetz puts p^*pH^bK[d], b<0, inside a semisimple perverse object from the lower-defect universal family (isomorphically below the first degree and as a subobject in that degree). Its finite heart decomposition has orthogonal endomorphism projectors. Degree-zero heart full faithfulness of p^*[d] lifts those projectors, and exactness splits them in the abelian heart on Y. Simplicity is reflected by exact conservative pullback: a nonzero proper subobject downstairs would yield one upstairs. Thus pH^bK is semisimple. Positive b follows by duality. The same argument preserves the package’s complexified-local-system clause: ordinary finite coefficient comparison commutes with six operations, and support/dual-support descriptions make flat field extension perverse-exact. Uniqueness of t-truncations makes it commute with perverse cohomology, and exactness makes it commute with the image defining intermediate extension. Thus the above direct-summand maps complexify to direct summands of the inductively semisimple complexified family objects. The same heart projector and simplicity argument applies over $\mathbb C$, proving semisimplicity of the resulting complexified local systems. This is an ordinary formal deduction from the already declared ordinary six-operation/perverse suppliers, not an import of equivariant splitting. This proves the exact nonzero-perverse claim without assuming pH^0K semisimple for the original map.

#### Defect-zero boundary

When r(f)=0, K is already perverse. Proper base change gives stalk cohomology H^(n+q)(f^−1(y)); on the fiber-dimension-i locus it vanishes for n+q>2i. The defect bound gives dimension(Y_i)≤n−2i. Therefore a nonzero q-th cohomology stalk occurs on a locus of dimension≤−q, proving the upper perverse support condition. The normalized smooth-source constant sheaf and its proper pushforward are self-dual, so the lower condition follows. Relative HL and derived splitting are then tautological. Semisimplicity of this middle perverse object remains the later fiber-intersection obligation; it is not proved by this boundary argument.

#### Completion boundary

The preceding deduction closes the relative-HL/nonzero-semiperversity stage once the exact hyperplane maps and their Thom cup composite are constructed with compatible orientations. The actual joint core still requires the base graded HL, nonmiddle restriction, refined intersection and moving-family geometric stages, as well as its independent upstream Morse construction. Root owns any metadata correction needed before integration. No native acceptance is claimed.

### Construction D: base hard Lefschetz and nonmiddle forms

### Base hard Lefschetz and nonmiddle polarizations: exact induction deduction

This is a local proof component of the owned joint-package construction. It is conditional on the stated hyperplane map interface, not a claim that the whole projective induction has already been proved. No new ID, item home or metadata edge is added. Full final dcM5.2.1–5.3 and the corresponding fixed source/target hyperplane clauses4.7.6–4.7.7 have actually been read.

#### Exact geometric interface

Take f:X→Y, X smooth projective of dimension n, source very ample eta, and L=f^*A for a target very ample class A. The preceding relative-HL stage supplies the finite perverse splitting, relative eta strings, and semisimplicity outside perverse degree0.

For k general source hyperplanes, write X_k and f_k. Restriction maps pH^(b−k)K→pH^bK_k are isomorphisms for b<0 and split monomorphisms for b=0; Gysin maps pH^bK_k→pH^(b+k)K are isomorphisms for b>0 and split epimorphisms for b=0. Their composite is eta^k. The fixed-general defect calculation gives r(f_k)≤r(f)−k for1≤k≤r(f). The perverse amplitude is inside[−r(f),r(f)]: the fiber-dimension support computation used for the defect-zero case gives K∈pD≤r(f), and self-duality gives the lower bound. Thus source cuts outside that range are unnecessary.

For j general target hyperplanes, write X^j and f^j. The source is smooth projective by basepointfree Bertini, and defect does not increase while image dimension decreases by j. The exact noncharacteristic pullback is i^*K[−j]=K^j and commutes with eta primitive kernels. The restriction/Gysin maps on the degree0 graded cohomology have the following precisely indexed one-step projective perverse weak-Lefschetz bounds. For a perverse object P on Y and P_1=i^*P[−1], R:H^ell(Y,P)→H^(ell+1)(Y_1,P_1) is an isomorphism for ell<−1 and a monomorphism at ell=−1. The dual G:H^(ell−1)(Y_1,P_1)→H^ell(Y,P) is an isomorphism for ell>1 and an epimorphism at ell=1. Thus the index in the Gysin bound is its target index, not its source index. Their compatible composite is L^j.

These are the precise geometric inputs, not additional consequences asserted of an unspecified “standard Lefschetz theorem.” Absolute Artin plus the open/closed triangle gives target weak Lefschetz because the complement of a target hyperplane is affine, and the noncharacteristic supplier gives the shifted restriction. Fixed-source relative weak Lefschetz comes from the universal-family affine complement and a general noncharacteristic parameter slice. Generic slices must be chosen transverse to all finitely many relevant algebraic strata; the actual strata supplier and Bertini/generic-smoothness clauses must justify this choice. The source divisor Thom/Gysin identities and tensor-line Chern normalization are the explicit pending comparison identified in the separate relative-HL note.

#### Base hard Lefschetz outside perverse degree0

For b=−k<0, the source-cut restriction identifies H_b^m(X) with a direct summand of H_0^m(X_k). All its projection maps live on Y, so they commute with the target cup class L by naturality. The lower-defect inductive package gives L-HL on X_k about the center dimX_k=n−k=n+b. The restriction and its inverse preserve this direct summand, giving L^j:H_b^(n+b−j)→H_b^(n+b+j) isomorphically. For b=k>0, use the dual source-cut Gysin identification with the same summand shifted in ordinary degree by2k. Its center becomes n−k+2k=n+b. Degrees outside the perverse defect amplitude vanish, so this proves every b≠0 case.

In particular ker(L:H^(n−1)→H^(n+1)) is contained in F_0H^(n−1). Indeed the finite derived splitting makes L block diagonal on perverse grades. In each b>0 block the ordinary degree n−1 lies strictly below its center n+b, so the already proved L-HL makes its first power injective. There is therefore no positive-grade component in the kernel. The same block decomposition makes L strict for the perverse filtration: kernels and images are direct sums of the respective graded kernels and images. This is finite-dimensional filtration strictness, not a hidden mixed-Hodge strictness assertion.

#### Degree0: powers at least2

Choose one general target hyperplane and its smooth source X^1, of dimension n−1. The image dimension is lower and defect no larger, so its full package is an induction hypothesis. For j≥2, target weak Lefschetz makes the restriction H_0^(n−j)(X)→H_0^(n−j)(X^1) and the Gysin H_0^(n+j−2)(X^1)→H_0^(n+j)(X) isomorphisms. The inductive middle map is L^(j−1) about the center n−1. Its composite with restriction/Gysin is precisely L^j, proving the desired isomorphism.

#### Degree0: the first power

Let alpha∈H_0^(n−1)(X) satisfy L alpha=0. The canonical eta primitive decomposition writes alpha=Σ_(t≥0)eta^t alpha_t, with alpha_t in the eta-primitive perverse grade−2t and ordinary degree n−1−2t. Each projection commutes with L, so L alpha_t=0. For t>0, its ordinary degree is one below its L-Lefschetz center n−2t. The nonzero-grade case just proved makes that first L map an isomorphism; hence alpha_t=0. Thus alpha is eta-primitive.

Filtration strictness and kerL⊂F_0 give an actual lift a∈kerL⊂H^(n−1) of alpha. Decompose a into its ordinary Hodge types using classical Hodge theory on X. Every type component is still in kerL because L has type(1,1), and hence in F_0 by the preceding kernel bound. If alpha were nonzero, at least one component would have a nonzero class in H_0^(n−1); replace a by it and alpha by its class. No Hodge structure on the original perverse filtration has been assumed at this point. The argument just given again makes this alpha eta-primitive.

Target weak Lefschetz injects alpha into H_0^(n−1)(X^1), and noncharacteristic primitive compatibility makes the restricted class eta-primitive and L-primitive there. It is a nonzero class in the lower-induction middle double primitive space. It is of pure Hodge type: ordinary holomorphic restriction preserves type, and the lower-induction perverse filtration is Hodge. The lower-induction polarization therefore makes its integral against its conjugate nonzero, up to the specified nonzero Weil/sign factor. But the exact target-divisor Gysin formula gives

∫_(X^1) a|_(X^1)∧bar a|_(X^1)=∫_X L a∧bar a=0,

a contradiction. Thus the first L map is injective. Perverse self-duality gives equal finite dimensions in degrees n−1 and n+1, so it is an isomorphism. This completes graded L-HL with no use of the original middle primitive positivity.

#### The Hodge perverse filtration

The now proved L-HL identifies the total perverse filtration with the centered nilpotent filtration. Its intrinsic kernel/image formula is Hodge degree by degree because powers of L have fixed Hodge type. This is the full formal argument recorded in the graded-middle-inputs proof. Therefore the original perverse graded spaces are now pure of their ordinary cohomological degrees. It is legitimate to use their Hodge structures in the remaining nonmiddle restriction argument; doing so in the preceding first-power contradiction would have been circular.

#### Nonmiddle polarization when the eta index is positive

Let u belong to P_(−i)^(−j), with i≥1,j≥0. Restrict to i general source hyperplanes, obtaining an injective map into degree n−i−j on X_i, in perverse grade0. The injection on cohomology follows from the split monomorphism of perverse sheaves; its maps commute with L. It preserves Hodge type because the original and lower-induction perverse filtrations are now Hodge and ordinary restriction is a Hodge map.

The restricted class is eta-primitive. Indeed apply Gysin to eta times its restriction. The compatible cup identity gives eta^(i+1)u=0. Gysin on the positive perverse degree2 of X_i is an isomorphism by relative weak Lefschetz, so eta of the restricted class is zero. It remains L-primitive because restriction commutes with L and L^(j+1)u=0. Thus it lands in the lower-induction double primitive space of indices(0,j). The lower map f_i has smaller defect and its full polarization package is already known. Its form pulls back exactly to

∫_(X_i) L^j u|_(X_i)∧v|_(X_i)=∫_X eta^i L^j u∧v.

Consequently the required nonmiddle primitive form is a positive polarization on the original Hodge subspace, with the exact inherited degree sign. It is nondegenerate. No ordinary globally eta-primitive lift is claimed: the argument uses canonical graded primitive kernels and the perverse Gysin isomorphism.

#### Nonmiddle polarization when the eta index is0

For j≥1, restrict a double primitive class u of degree n−j to j general target hyperplanes. The successive target weak-Lefschetz restrictions are isomorphisms until the last step, which is a monomorphism, so the resulting map into H_0^(n−j)(X^j) is injective. Its source map f^j has smaller image dimension and no greater defect. Noncharacteristic pullback preserves eta-primitive kernels. The restricted class is also L-primitive: Gysin of L times that restriction is L^(j+1)u=0, and the successive Gysin maps from degree2 above the lower middle are isomorphisms. Hence it lands in the lower-induction middle double primitive space. Its polarization pulls back by the compatible divisor identity to ∫_X L^j u∧v. This proves the remaining nonmiddle forms. If j is larger than m=dim f(X), make only m general target cuts. Every successive restriction in this case is an isomorphism, because its source hypercohomological index remains below−1 until the last step. The final index is m−j<0 on a perverse object supported on the finite zero-dimensional image. That object is a finite sum of point-supported heart objects and has hypercohomology only in degree0. Thus the original class space was zero. For m=0 this is already the point-image base case. This proves the large-j boundary directly from the stated hyperplane maps and ordinary point perverse heart, without adding an unproved perverse amplitude estimate.

#### Completion boundary

This proves the ordered conditional deductions for graded base HL, Hodge purity of the perverse filtration and nonmiddle primitive polarizations. Their exact geometric restriction/Gysin/transversality inputs remain necessary and are explicitly stated. Together with the completed graded-middle-input verification and middle-limit lemma, these stages would supply all primitive polarizations before the refined fiber intersection and moving-family semisimplicity stage. The local Morse product and source Thom/Gysin comparisons are not silently replaced by citation.

### Construction E: exact middle inputs

### Local verification of the middle-limit lemma's earlier-stage inputs

This is a conditional proof component of the joint projective induction; it does not claim that the earlier geometric induction has been completed. Its inputs are exactly: relative perverse hard Lefschetz, graded base-class hard Lefschetz, the constructed graded primitive decomposition and centered nilpotent-filtration lemmas, classical Poincaré/Hodge theory, and the earlier nonmiddle primitive polarizations. No new IDs, homes or metadata edges are introduced.

Let m denote ordinary cohomological degree and b the perverse grade. Write H_b^m for the canonical graded perverse cohomology, and F_bH^m for its filtration. Earlier-stage relative HL and abstract splitting identify H_b^m with the cohomology of the corresponding perverse sheaf and give the natural graded eta primitive decomposition. Assume the earlier-stage base HL L^j:H_b^{n+b-j}→H_b^{n+b+j} is actually proved. Then the filtration

W_aH^m = F_(m−n+a)H^m

on total cohomology is the centered filtration of the nilpotent operator L: its degree-j isomorphism is exactly the displayed base HL with b=m−n+j. Thus uniqueness in the local centered-filtration lemma identifies it intrinsically with the kernel/image formula. The following calculations verify all formal inputs of the new middle-limit lemma.

#### (a) Hodge stability and eta injectivity

The intrinsic kernel/image formula for W, degree by degree, consists of kernels and images of powers of cup product by L, of Hodge type(j,j), within the appropriate ordinary degree. Hence it consists of Hodge subspaces; finite sums and intersections stay Hodge. Since eta commutes with L, it preserves every kernel and image and therefore W.

For a≤0, Gr_a^W H^(n−2)=H_(a−2)^(n−2), while Gr_a^W H^n=H_a^n. The eta map between them is the first power in the relative eta string from perverse degree a−2. Relative hard Lefschetz makes eta^(2−a) an isomorphism on that string. If the first power kills a class, so does that isomorphism; therefore the class was zero. This proves the exact eta-injectivity in hypothesis(a), rather than assuming a stronger primitive-compatible splitting in the derived category.

#### (c) Centered-filtration pairing

On total cohomology define a nondegenerate bilinear form S(u,v)=(-1)^floor(m/2) ∫_X u∧v when u∈H^m,v∈H^(2n−m), and zero for other ordinary-degree pairs. Poincaré duality makes it nondegenerate. It also has the exact symmetry required by the self-dual-filtration supplier: S(v,u)=(-1)^n S(u,v) on every complementary-degree pair. For m=2k the degree sign ratio is(-1)^(n−2k) and the cup-interchange sign is+1; for m=2k+1 the ratio is(-1)^(n−2k−1) and the cup-interchange sign is−1. Their products both equal(-1)^n. Thus S is symmetric for even n and skew-symmetric for odd n. Since the sign changes under m→m+2 and the even cup class L is self-adjoint for the ordinary integral, S(Lu,v)+S(u,Lv)=0. The actual local self-dual-centered-filtration lemma therefore gives W_a^⊥=W_(−a−1). Its restriction to any complementary-degree pair differs from the ordinary integral only by a nonzero sign. Hence the ordinary integral annihilates W_a×W_b when a+b<0. This is exactly hypothesis(c). No Hodge weight theorem or decomposition theorem is used in this argument.

#### (b) The nonmiddle form q_i

Fix i≥0 and put m_i=n−2−2i, A=i+2. Then Gr_i^W H^(m_i)=H_(−A)^(m_i). The heart-level eta primitive decomposition and its cohomology give the direct sum

H_(−A)^(m_i)= ⊕_(r≥0) eta^r U_r,

where U_r is the eta-primitive part of H_(−A−2r)^(m_i−2r). This is the locally constructed canonical primitive decomposition: no chosen global Deligne lifts are used. Its projections commute with L because the heart-level decomposition is natural and L is the target cup class on cohomology. Therefore the kernel K_i of L^(i+1) decomposes as ⊕ eta^r V_r, where V_r=ker L^(i+1) on U_r.

The L-Lefschetz center on U_r is n−A−2r. Its degree m_i−2r equals that center minus i. Thus V_r is precisely the double primitive part with first primitive index A+2r=i+2+2r and second index i. Every one of these first indices is positive, so its nondegenerate form is supplied by the previously established NONMIDDLE polarizations.

Choose representatives u∈W_i H^(m_i−2r) and v∈W_i H^(m_i−2s). The form q_i on their eta powers is

q_i(eta^r u,eta^s v)=∫_X eta^(A+r+s) L^i u∧v.

This is well-defined on the graded spaces: replacing either representative by a W_(i−1) vector gives, after L^i, a W_(−i−1) vector paired with W_i, which vanishes by(c). If r>s, then A+r+s≥A+2s+1. The eta-primitive condition on v makes eta^(A+2s+1)v belong to W_(i−1) in its new ordinary degree. Apply the remaining eta powers and L^i, and pair with u; again(c) gives zero. If s>r, interchange the arguments, changing only the Poincaré graded sign, and obtain the same zero. Therefore the direct sum is orthogonal for q_i.

For r=s its form is exactly ∫ eta^(A+2r)L^i u∧v, the previously polarized double primitive form of indices(i+2+2r,i), up to its specified nonzero Hodge normalization. It is nondegenerate on V_r. A finite orthogonal sum of these nondegenerate forms is nondegenerate on K_i. This proves the exact hypothesis(b). It also supplies the graded-form well-definedness, which cannot be omitted merely because a published source cites a double Lefschetz decomposition.

#### Identification of the middle double primitive subspace

The natural map from D=ker(L:H^n→H^(n+2)) to ker(L:Gr_0^W H^n→Gr_(−2)^W H^(n+2)) is surjective, with kernel R=D∩W_(−1)H^n. Indeed lift a graded kernel vector to x∈W_0H^n. Its error Lx lies in W_(−3)H^(n+2). The homogeneous centered Jordan strings make L:W_(−1)H^n→W_(−3)H^(n+2) surjective: a target of weight≤−3 has a predecessor of weight≤−1. Subtract that predecessor to obtain an actual lift in D. All maps here are Hodge maps, so this identifies D/R as a Hodge space with the indicated graded kernel.

The middle double primitive space T is the simultaneous kernel of this graded L map and eta:Gr_0^W H^n→Gr_0^W H^(n+2). For any representative x∈D of a class in T, eta x lies in W_(−1)H^(n+2). Every z∈ker(L:H^(n−2)→H^n) lies in W_0 by the centered string weights. Therefore

∫_X x∧eta z = ∫_X eta x∧z =0

by(c). Thus T is a Hodge subspace of D/R orthogonal to the image of M=eta ker L. This is precisely the hypothesis consumed by the conclusion of `lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations`. That local six-step theorem now gives its positive middle polarization. No middle positivity has been used to establish any of(a)–(c) or this identification.

#### Completion boundary

These calculations complete the FORMAL verification of the middle-limit theorem's inputs, conditional on the previously ordered relative HL, base graded HL and nonmiddle polarization stages. The actual geometric proofs of those earlier stages, refined fiber intersection-map invertibility and moving hyperplane family, plus the local Morse product/sheaf transport, remain required components of the joint projective core. This note does not mark the joint-package supplier complete or grant native acceptance.

### Construction F: refined fibre intersection


### Refined fibre intersection and the costalk-to-stalk map

This is a component of the same simultaneous projective induction. It proves the refined-intersection stage from the exact already-ordered induction inputs below; it does not assert that those earlier stages have independent verification.

#### Statement

Let $f:X\to Y$ be a projective morphism of complex projective varieties, with $X$ smooth projective of pure complex dimension $n$, $K=Rf_*\mathbb Q_X[n]$, $P_b={}^pH^bK$, and $P=P_0$. Choose a very ample source class $\eta$, a very ample target line bundle $A$, and set $L=f^*c_1(A)$. Let $y$ be a zero-dimensional stratum, $i:\{y\}\hookrightarrow Y$, and $Z=f^{-1}(y)$. Set $A_y=H^0(i^!P)$ and $B_y=H^0(i^*P)$. Under the ordered inputs below, the canonical map $I_y:A_y\to B_y$ is the degree-zero graded refined intersection map $H^{\mathrm{BM}}_{n,0}(Z)\to H^n_0(Z)$ and is invertible. Its factorization through $H^n_0(X)$ is the class map followed by restriction. The class image is a pure Hodge substructure stable under the canonical perverse $\eta$ primitive projectors. The raw graded cup form restricts nondegenerately to it, although that raw form need not be a polarization of the entire middle graded group.

#### Facts & Assumptions

**Given:** The projective map, zero stratum and full AC convention, together with the following genuinely earlier-stage inputs. The argument uses finite $p$-splitness produced by the relative-HL stage and the local abstract splitting lemma; it does not assume semisimplicity of the current $P_0$, the refined intersection theorem, or a primitive-compatible lift to ordinary global cohomology.

[F1] Ordinary constructible coherent six operations supply proper base change for $i^*$ and $i^!$, compatible adjunction/trace, Verdier duality, localization and projection formula. Smooth complex orientation gives $\omega_X=\mathbb Q_X[2n]$, hence $\omega_X[-n]=\mathbb Q_X[n]$. Proper duality therefore gives $DK=K$, and perverse duality gives $DP=P$. The perverse heart supplies $i^*P_b\in D^{\le0}(\{y\})$, $i^!P_b\in D^{\ge0}(\{y\})$ and finite perfect dual costalk/stalk pairings. The exact suppliers are `lem-analytic-constructible-sheaves-admit-coherent-six-operations` and `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`.

[F2] The earlier relative-HL stage gives a finite normalized isomorphism $K\simeq\bigoplus_bP_b[-b]$ inducing the identity on each $P_b$. Its heart-level $\eta$ primitive decomposition is canonical and functorial for target cup operators. The previously proved base-HL/Hodge/middle-polarization stages give pure Hodge perverse graded cohomology, its self-dual filtration, and the orthogonal double primitive polarizations, including $P^0_0$. These are the exact earlier clauses of the same joint induction; their local proofs remain owned by the semisimplicity author.

[F3] Artin affine vanishing is the actual local theorem `lem-artin-affine-vanishing-for-constructible-perverse-sheaves`. The weight-image equality for smooth $U'\subset X$ and proper $Z\to U'$ is `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images`. The properly typed class map $H_i^{\mathrm{BM}}(Z)\to H^{2n-i}(X)(n)$ is a mixed Hodge morphism by `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`.

[F4] On primitive ordinary degree $t$ use $Q_t=\epsilon(t)\int\eta^iL^j(-)\wedge(-)$, $\epsilon(t)=(-1)^{t(t-1)/2}$, and $C=i^{p-q}$, with positive Hermitian form $Q_t(Cu,\bar v)$. The polarized sub-Hodge restriction lemma is `lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures`. This is the preserved classical convention, not dcM's placement of $C$ in the second slot.

#### Proof

**Component step 1.1.** Define induced filtrations without choosing a lift. For an additive triangulated functor $R$ on constructible complexes, let $F_bH^j(RK)$ be the image of $H^j(R,{}^p\tau_{\le b}K)\to H^j(RK)$. This definition is intrinsic. Any normalized finite splitting in [F2] identifies it with $\bigoplus_{a\le b}H^{j-a}(RP_a)$, since truncating that splitting gives the direct sum with exactly those indices and $R$ preserves finite direct sums. For a natural transformation $R\to R'$ of such functors, naturality identifies its matrix under these splittings with the direct sum of the individual maps on each $P_a[-a]$. It is therefore strict: its image intersected with $F_b$ is the sum of its images in indices $a\le b$. Apply this to open restriction, fibre restriction, supported class adjunction and their composites. No arbitrary choice of splitting changes the induced filtration or its graded maps. [F1, F2, algebra]

**Component step 1.2.** Let $\Sigma=\operatorname{supp}\mathcal H^0(P)$, a finite set by the perverse support inequality. If $y\notin\Sigma$, then $B_y=0$ and $A_y=0$ by the self-duality in [F1], so the claimed map is already the isomorphism of zero spaces. Assume henceforth $y\in\Sigma$. Choose a target hyperplane avoiding this set; its complement $U$ is affine and contains $\Sigma$. For every ordinary constructible sheaf $E$ supported in dimension at most $d$, $E[d]\in{}^pD^{\le0}$. Finite perverse truncations and Artin's vanishing on heart objects therefore give $H^k(U,E)=0$ for $k>d$. Apply this with $E=\mathcal H^q(P|_U)$, whose support dimension is at most $-q$. In the ordinary hypercohomology spectral sequence $E_2^{p,q}=H^p(U,\mathcal H^qP)$, all terms of total degree greater than zero vanish. The term $E_2^{0,0}=H^0(U,\mathcal H^0P)$ receives no differential because negative $p$ terms vanish and has no outgoing differential because its targets have total degree one. Hence the edge $H^0(U,P)\twoheadrightarrow H^0(U,\mathcal H^0P)=\bigoplus_{z\in\Sigma}B_z$ is surjective. The last equality uses finite-point support and exact stalk restriction; it is not an unproved affine restriction theorem. [F1, F3, algebra]

**Component step 2.1.** Proper base change identifies $i^!K=R\Gamma(Z,\omega_Z[-n])$ and $i^*K=R\Gamma(Z,\mathbb Q_Z[n])$. For proper $Z$, Verdier trace identifies $R\Gamma(Z,\omega_Z)$ with the finite dual of $R\Gamma(Z,\mathbb Q)$; consequently its degree-$-n$ group is the usual $H_n(Z)$ by the finite field-dual comparison. Trace is dual to ordinary pullback, so its proper class adjunction agrees with the homological class map in [F3]. Thus $H^0(i^!K)=H^{\mathrm{BM}}_n(Z)$ and $H^0(i^*K)=H^n(Z)$. Under the finite splitting, their summands are respectively $H^{-b}(i^!P_b)$ and $H^{-b}(i^*P_b)$. Costalk nonnegativity kills the first for $b>0$, whereas stalk nonpositivity kills the second for $b<0$. Consequently the source filtration has $F_0$ equal to the entire group, and the target has $F_{-1}=0$. Their grade-zero groups are exactly $A_y$ and $B_y$. The natural supported adjunction followed by ordinary adjunction is diagonal on $P_b[-b]$ by step 1.1; hence its degree-zero action is zero outside the matching grade $b=0$, and on that grade it is precisely $I_y$. At the source, the same morphism is $\omega_Z[-n]\to\omega_X[-n]=\mathbb Q_X[n]\to\mathbb Q_Z[n]$ after proper pushforward, which defines the geometric refined intersection map. This proves the claimed identification with both shifts and orientation fixed. [F1, F2, step 1.1, algebra]

**Component step 3.1.** Put $U'=f^{-1}(U)$, which is smooth, with $Z\subset U'\subset X$ and $Z$ proper. The weight-image theorem gives equality of the actual full images $\operatorname{im}(H^n(X)\to H^n(Z))=\operatorname{im}(H^n(U')\to H^n(Z))$. The restriction maps are strict for the induced filtrations by step 1.1. Step 1.2 gives surjectivity at grade zero from $U'$; because $F_{-1}H^n(Z)=0$, this grade-zero target is the actual subspace $F_0H^n(Z)$. An element of that subspace in the full global image consequently has a preimage in $F_0H^n(X)$ by strictness. Passing to grade zero proves $r_y:H^n_0(X)=H^0(Y,P)\twoheadrightarrow B_y$. The same proof works simultaneously for the finite set. [F2, F3, step 1.1, step 2.1, step 1.2, algebra]

**Component step 4.1.** The supported adjunction induces $c_y:A_y\to H^n_0(X)$. Proper duality and trace compatibility identify it with the dual of $r_y$ under the perfect local pairing $A_y\times B_y\to\mathbb Q$ and the perfect global graded Poincaré pairing. Explicitly, tracing the composite from a supported class and a global class gives the same scalar whether restriction is first applied to the global class or the supported class is first pushed into $X$; this is the adjunction/projection-formula identity. With $q_0=\epsilon(n)\int_X(-)\wedge(-)$ on the middle grade, scale the local pairing by the same nonzero $\epsilon(n)$ so that $\langle a,r_yv\rangle=q_0(c_ya,v)$. Thus $c_y$ is injective by step 3.1 and $I_y=r_yc_y$ has matrix $c_y^{\vee}q_0c_y$. This formula uses the raw graded cup form. It does not replace the geometric intersection matrix by the sign-adjusted full-Hodge polarization. [F1, F2, step 2.1, step 3.1, algebra]

**Component step 5.1.** The untwisted full class image $J=\operatorname{im}(H_n^{\mathrm{BM}}(Z)(-n)\to H^n(X))$ is pure Hodge by the properly twisted class-map supplier [F3]. Its underlying vector space lies in $F_0H^n(X)$ by step 2.1 and filtered class adjunction. Projecting to $F_0/F_{-1}=H^n_0(X)$ is a Hodge morphism by the already proved Hodge filtration clause [F2], so $W_y=\operatorname{im}c_y$ is a pure Hodge substructure. This proves Hodge purity without assuming a pre-existing Hodge structure on the induced fibre perverse filtration. Also $L\,c_y=0$: the target line bundle restricts trivially to the fibre over one point; the cup/proper-pushforward projection formula gives $L\,\operatorname{cl}(a)=\operatorname{cl}(c_1(f^*A|_Z)\cap a)=0$. Equivalently use a representative target hyperplane avoiding $y$. Thus $W_y\subset\ker L\subset H^n_0(X)$. [F1, F2, F3, step 2.1, step 4.1, algebra]

**Component step 6.1.** The canonical heart-level relative $\eta$ decomposition yields morphism projectors $e_r:P\to P$ onto the summands $\eta^r\mathcal P_{-2r}$, where $\mathcal P_{-2r}=\ker(\eta^{2r+1}:P_{-2r}\to P_{2r+2})$. Supported adjunction is natural for these genuine morphisms of $P$, so $e_rc_y=c_yH^0(i^!e_r)$ and $W_y=\bigoplus_re_rW_y$. No projector on an arbitrarily chosen global splitting of $K$ is used. The induced cohomology projectors are Hodge: their summands are kernels of Hodge $\eta$ maps on canonical graded groups, transported by injective Hodge maps $\eta^r$ and their inverses on their images. Hence each $e_rW_y$ is a sub-Hodge structure. Since the target cup operator $L$ commutes with every heart projector, the base $L$-Lefschetz centre on $\mathcal P_{-2r}$ in ordinary degree $n-2r$ identifies its first-power kernel with the double primitive $P^0_{-2r}$. Therefore $\ker L\subset H^n_0(X)$ decomposes as $\bigoplus_rE_r$, $E_r=\eta^rP^0_{-2r}$, and $e_rW_y\subset E_r$. [F2, step 5.1, algebra]

**Component step 7.1.** The earlier double primitive HR clause makes the $E_r$ mutually $q_0$-orthogonal. For $a,b\in P^0_{-2r}$ of ordinary degree $t=n-2r$, one has $q_0(\eta^ra,\eta^rb)=\epsilon(n)\int_X\eta^{2r}a\wedge b=(-1)^rQ_t(a,b)$, because $\epsilon(n)/\epsilon(n-2r)=(-1)^r$. The Weil operator is unchanged by the type shift $(r,r)$. Thus $(-1)^rq_0$ polarizes $E_r$, including $r=0$ by the already completed middle positivity stage. Its restriction to the sub-Hodge structure $e_rW_y$ is nondegenerate by [F4]. A finite orthogonal sum of these restrictions is nondegenerate on $W_y$. Since $c_y$ is injective, the matrix identity in step 4.1 now proves $I_y$ invertible. The existing closed-support costalk/stalk criterion supplies the supported perverse summand; that criterion is applied only after invertibility has been proved. [F2, F4, step 4.1, step 6.1, algebra] ∎

#### Source notes

Full final dcM §§3.4,4.3,4.5–6.3 were read. This component expands the adjunction/graded identification compressed in Remark3.4.2 and Lemma4.3.6, the actual-image strictness deduction in Proposition6.2.2, and the projector-stable Hodge image argument in the proof of2.1.8 and Proposition6.3.1. The proof deliberately keeps only the preceding finite $p$-splitting; it does not invoke current middle semisimplicity or a primitive-compatible ordinary lift. The source's convention $(−1)^nS(-,C(-))$ is translated to $Q(C(-),\overline{(-)})$ explicitly in step 8.1. Local formatting is not independent mathematical acceptance.

#### Remaining inputs and ownership

This closes the refined-intersection IDENTIFICATION AND INVERTIBILITY deduction once the explicitly preceding joint-package HL/Hodge/HR stages and actual ordinary six-operation/MHS suppliers are established. Those source/topology/earlier-geometric stages retain their own proof and native-review obligations. The current classical Hodge packet is unchanged. No new item ID, page, pair, run, header, native decision or canonical content is created here; root and the same semisimplicity owner decide how to incorporate this proof component.

### Construction G: positive strata and IC splitting

### Positive-dimensional strata and finite IC splitting

This is the last geometric stage of the core induction. It uses the supplied finite algebraic Whitney stratification for $f$ with smooth surjective source-stratum maps, the generic smoothness/Bertini theorems and the ordinary local-product and perverse suppliers. It does not assume middle semisimplicity. The zero-dimensional refined-intersection stage above is the preceding input.

#### 1. Projective transverse slices through a fixed stratum point

Fix y in a positive-dimensional target stratum S of complex dimension s, with s smaller than the positive image dimension m. Work in a projective embedding of Y. The linear system of target hyperplanes through y has base locus precisely {y}: at any other projective point some linear form vanishes at y and not there. On the smooth source X its pulled-back system has base locus exactly Z=f^−1(y). Choose s members whose differentials restricted to T_yS are independent; ambient linear forms through y span that cotangent space, so this is a nonempty parameter open.

At every x∈Z, the source stratum map f:R→S is submersive. Thus the differentials of these s equations composed with df_x are independent already on T_xR, hence on T_xX. The implicit-function/Jacobian calculation makes their joint zero locus smooth of codimension s at every point of Z. Away from Z, the pulled-back constrained system is basepointfree. Published Bertini, successively for the smooth sections, gives smoothness of the entire source intersection away from Z; independence at Z remains an open parameter condition. Alternatively apply target generic smoothness to the universal constrained incidence away from Z: its parameter projection has a dense good open, and the previously established rank condition at Z handles the base locus. Intersect these finite opens. The resulting X_s is globally smooth projective of pure dimension n−s, with possibly finitely many connected components; componentwise lower induction is legitimate.

The same universal constrained-incidence calculation on every target stratum away from y makes the target slice Y_s transverse to those strata for a common parameter open. Near y, Whitney A puts T_yS into every limiting upper tangent plane; the s differentials independent on T_yS remain independent on these planes after shrinking. At y they cut S to an isolated point. The target slice has the inherited finite Whitney stratification and y is a zero-dimensional stratum. This supplies actual transversality, rather than using an unconstrained generic hyperplane and then assuming it passes through y.

The strata also respect every fibre-dimension locus Y_i. On a locus not containing y, generic constrained hyperplanes have the usual dimension drop s or make the locus empty: their base locus there is empty. On a locus containing y, its stratum containing y has dimension at least s. Independence at y and general dimension drop away from y therefore give dimension at most dimY_i−s, including the possible isolated y when equality holds. Since dimX_s=n−s, the defect contributions do not exceed those for f. The image dimension is at most m−s<m. The projective slice map f_s:X_s→Y_s is consequently lexicographically lower. Every component of X_s has dimension n−s, so the same bound applies to each component map. The point-image and top smooth-image boundary cases are treated separately; no strict source-defect drop below zero is claimed here.

#### 2. The local costalk/stalk map is reflected by the normalized slice

Proper base change identifies K_s=i_s*K[−s], where i_s:Y_s→Y is the constructed transverse codimension-s inclusion. The actual noncharacteristic perverse pullback is exact, so P_{s,0}=i_s*P_0[−s], and it preserves the eta primitive kernels. The actual noncharacteristic normal calculation has i_s!P_0=i_s*P_0[−2s] with positive complex orientation. Write a:{y}→Y_s and b:{y}→S. Extraordinary composition for the same inclusion into Y gives

a!i_s!P_0=b!i_S!P_0.

The cohomology of i_S!P_0 is locally constant on S by the supplied compatible stratification. Smooth-stratum point orientation therefore gives b!=b*[−2s] on this bounded locally constant complex. Cancel the common [−2s] shift to obtain

a!i_s*P_0=b*i_S!P_0.

Ordinary composition likewise gives a*i_s*P_0=b*i_S*P_0. After the perverse normalization [−s], degree-zero costalk and stalk of P_{s,0} at y are therefore the degree−s cohomology fibres of i_S!P_0 and i_S*P_0, precisely the fibres of their perverse degree-zero local systems on the smooth s-dimensional stratum. The coherent adjunction/trace composition identifies the natural map between them with the fibre of the original costalk-to-stalk morphism. The even real normal shift produces no odd interchange sign. This proves reflection of the ACTUAL morphism, not just equality of dimensions, and does not use homotopy invariance for arbitrary coefficients. Restricting to an open neighborhood where S is closed leaves both local maps unchanged.

The lexicographically lower package for f_s includes the zero-stratum refined-intersection isomorphism, so the slice morphism at y is invertible. The preceding product shows the original morphism invertible on a neighborhood of y in S. Since y was arbitrary, it is invertible everywhere on S. For zero-dimensional strata use the current zero-stratum refined-intersection proof. On the top smooth-image dense stratum, P_0 is a local system shifted by the stratum dimension and there is no smaller normal-support extension to split there.

#### 3. Recollement gives a finite IC decomposition before local-system semisimplicity

The formal closed-support criterion applies not only to a point: its proof used only an ordinary closed/open recollement and the perverse adjunctions. For a closed smooth stratum, pH^0i!P and pH^0i*P are local systems shifted by its dimension, and an invertible map between them splits off i_*pH^0i!P; the complementary object has no subobject or quotient supported there, so it is j!*j*P. This is the same five-step local criterion, applied in the perverse category of the stratum; it requires no semisimplicity of those local systems.

Choose a union of the minimal strata, closed by the finite frontier condition, and split it off. The complement on the remaining open target inherits every remaining local costalk/stalk isomorphism. Induct on the finite number of strata. Intermediate extension is transitive: extending an IC object first across one boundary and then the next yields the unique extension with its dense local system and no boundary-supported subobject/quotient, hence the same IC on the closure. This proves that P_0 is a finite direct sum of IC objects of finite-rank stratum local systems. The argument gives the IC decomposition before invoking Gauss–Manin semisimplicity, so it introduces no circular hypothesis.

#### 4. Top-stratum local systems are precisely geometric

On a dense smooth open of the irreducible image, published target generic smoothness makes f smooth projective of relative dimension n−m. On the smooth m-dimensional target, perverse cohomology is ordinary cohomology shifted by m. Therefore the degree-zero perverse local system is exactly

H^−m(P_0)|_S = R^(n−m)f_*Q.

Its semisimplicity and complexified semisimplicity follow from the independent smooth-projective Gauss–Manin supplier, and the dense-open fundamental-group surjection extends them to the whole stratum. For intermediate-dimensional strata the separate complete moving-family component provides the actual quotient of a smooth-projective Gauss–Manin system. Zero-dimensional strata give finite-dimensional vector spaces; strata outside the image give zero. Exact intermediate extension sends a finite direct sum of simple local systems to the corresponding finite direct sum of simple IC objects. Together with the decomposition in section3, these deductions complete the middle perverse semisimplicity stage, relative to the named independent suppliers.

#### Current boundary

This fills the positive-stratum reduction and finite IC splitting mechanism between the zero-stratum refined-intersection and moving-family components. It still requires the exact supplied stratified smooth-map/control/coefficient and generic algebraic supplier proofs. No native acceptance, readiness or proof of those upstream suppliers is asserted. The complete core assembly must include this construction and its prerequisites explicitly.

### Construction H: moving hyperplane family


### Moving target hyperplanes and the actual Gauss–Manin quotient

This is a component of the same joint projective induction, supplying the moving-family interface used for the semisimplicity stage. Full final de Cataldo–Migliorini §6.4 was read; the generic section and normalized pullback comparison omitted in the source's compressed presentation are constructed below.

#### Statement

Let $f:X\to Y$ be a projective morphism of complex projective varieties, $X$ smooth connected of dimension $n$, with image dimension $m$. Give $f$ a supplied finite algebraic Whitney stratification with smooth surjective stratum maps, adapted to its fibre-dimension loci. Put $K=Rf_*\mathbb Q_X[n]$ and $P={}^pH^0K$. For a connected stratum $S\subset f(X)$ of dimension $1\le s\le m-1$, there exists a dense algebraic open $T\subset S$, a smooth projective morphism $F:\mathcal X_T\to T$ of relative dimension $n-s$, and a surjective morphism of local systems
$$R^{n-s}F_*\mathbb Q\longrightarrow (\mathcal H^{-s}P)|_T.$$
The normalized comparison identifying its target uses only proper base change and smooth/transverse perverse pullbacks; its total shift is zero. The source local system is semisimple, also after complexification, by the independent smooth-projective Gauss–Manin theorem. Thus the stratum local system is semisimple over $\mathbb Q$ and $\mathbb C$, and this extends from $T$ to $S$ by the actual dense-open fundamental-group supplier.

#### Facts & Assumptions

**Given:** The map and supplied stratification, full AC, and these exact ordered inputs. The current $P_0$ is not assumed semisimple. The finite normalized $p$-splitting of $K$ is the already constructed earlier relative-HL/abstract-splitting stage, not an invocation of the completed decomposition theorem for the present map.

[F1] Choose a very ample target embedding $Y\hookrightarrow\mathbb P^N$. Target generic smoothness for a smooth irreducible classical source over a characteristic-zero field is `thm-generic-smoothness-characteristic-zero`; it supplies an entire dense target open over which the morphism is smooth, and a further open with nonempty fibres when dominant. Apply it componentwise when necessary. Its actual full Statement and proof, and the published constructible-image and hyperplane-incidence statements, have been inspected. The construction below does not require an unproved connectedness clause of Bertini.

[F2] Proper constructible base change and adjunction are the actual ordinary six-operation suppliers. Smooth relative-dimension-$a$ pullback shifted by $[a]$ and a transverse codimension-$c$ pullback shifted by $[-c]$ are perverse-exact by `lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact`. Its controlled normal-product and orientation prerequisites retain their own proof obligations. Finite $p$-splittings pull back under these exact functors.

[F3] The refined-intersection component's steps1.1–3.1 give global graded restriction surjectivity for a smooth projective source and its proper fibre once its earlier finite $p$-splitting is available. This restriction result uses Artin affine vanishing and the weight-image theorem and precedes refined-intersection invertibility. For the source slices constructed below it may be used by the lexicographically lower joint-induction package, independently of current $P_0$ semisimplicity.

[F4] `thm-smooth-projective-gauss-manin-local-systems-are-semisimple` includes rational and complexified semisimplicity for the resulting smooth projective family. `lem-algebraic-open-inclusion-surjects-on-fundamental-groups` gives the surjection for a dense open of a smooth connected complex algebraic stratum. These are the independent monodromy owner's actual interfaces, not consequences of rational simplicity alone.

#### Proof

**Component step 1.1.** Put $W=H^0(\mathbb P^N,\mathcal O(1))$, $\Pi=(\mathbb P(W))^s$ and $d=sN$. Define $\mathcal Y=\{(y,H_1,\ldots,H_s):y\in H_j\text{ for all }j\}\subset Y\times\Pi$ and $\mathcal X=\mathcal Y\times_YX\subset X\times\Pi$. Write $q:\mathcal Y\to Y$, $q_X:\mathcal X\to X$, $h:\mathcal Y\to\Pi$, $g:\mathcal X\to\mathcal Y$ and $h_X=h g$. Evaluation of $W$ onto the line $\mathcal O_Y(1)|_y$ is surjective. On an affine chart where one coordinate is nonzero, each hyperplane equation solves its corresponding coefficient in terms of the remaining coefficients. Thus its kernel is a rank-$N$ algebraic vector bundle, locally trivial by this explicit solution, and $q$ is a product of $s$ projective bundles with fibre $(\mathbb P^{N-1})^s$ and relative dimension $d-s$. The same holds for $q_X$, so $\mathcal X$ is smooth of dimension $n+d-s$. The projection $h_X$ is projective because $X$ is projective and the incidence is closed in $X\times\Pi$. This constructs the family, not merely a map on individual fibres. [F1, algebra, construct]

**Component step 2.1.** For a smooth target stratum $R$ of dimension $u$, the corresponding incidence $\mathcal Y_R=q^{-1}(R)$ is smooth of dimension $u+d-s$. At $y=[1:0:\cdots:0]\in R$, hyperplanes through $y$ are linear forms in the affine coordinates; their differentials span $T_y^*R$ because $R\hookrightarrow\mathbb P^N$ is a smooth locally closed embedding. If $u\ge s$, choose $s$ independent differentials. The incidence tangent equations $d(H_j|_R)(v)+\delta H_j(y)=0$ can then be solved for $v$ for every parameter variation $\delta H$. Hence $dh$ is surjective at this incidence point; its image contains an analytic open and is therefore Zariski dense. Thus $h|_{\mathcal Y_R}$ is dominant. If $u<s$, its source has dimension less than $d$, so its image is not dense. On the open smooth locus of $f$ over its top image stratum, $df$ has rank $m\ge s$. The same tangent equations with $df(v)$ prove that $h_X$ is dominant. No projective-degree count or nonempty-connected-Bertini assertion is hidden here. [F1, step 1.1, algebra, construct]

**Component step 3.1.** Apply target generic smoothness [F1] to $h_X$ and to each dominant $h|_{\mathcal Y_R}$. Intersect their finitely many dense parameter opens, including opens contained in their images. Remove the closed image closures of the nondominant strata. The resulting $\Pi^0$ is nonempty and dense. Over it, $h_X$ is smooth surjective of relative dimension $n-s$; every surviving stratum $\mathcal Y_R$ maps smoothly and surjectively to $\Pi^0$, with relative dimension $u-s$. Its tangent equations prove that every parameter complete intersection cuts $R$ transversely; strata of dimension less than $s$ are absent. The product-projective-bundle pullbacks of the original Whitney strata give Whitney stratifications of $\mathcal X$ and $\mathcal Y$. The map $g$ is stratified: on each source/target stratum its local form is the original smooth stratum map times the same projective-bundle coordinates. Restricting to $\Pi^0$ preserves these properties. The needed uniform parameter open has thus been obtained from the actual generic-smoothness theorem, not just pointwise smoothness of a few sections. [F1, step 1.1, step 2.1, algebra, construct]

**Component step 4.1.** In particular $b=h|_{\mathcal Y_S}:\mathcal Y_S\to\Pi$ is dominant and is smooth of relative dimension zero over $\Pi^0$. Since $S$ is connected smooth, it is irreducible; the product-projective bundle $q_S:\mathcal Y_S\to S$ is irreducible too. The dense open $b^{-1}(\Pi^0)$ therefore intersects the generic fibre of $q_S$. Let $k(S)$ be its infinite function field. A trivialization over a dense open of $S$ identifies that fibre with $(\mathbb P^{N-1}_{k(S)})^s$. Its nonempty open meets the standard dense affine chart. A nonzero polynomial over an infinite field cannot vanish at every rational affine point: induct on the number of variables and then avoid the finitely many roots in the last variable. Apply this to a defining nonzero polynomial of a principal open inside the given open. It gives an actual $k(S)$-rational point in the good generic fibre. Its finitely many rational coordinates extend to regular functions after removing their denominators; shrinking further removes the pullback of the bad closed complement. Thus a dense open $T\subset S$ has an algebraic section $\mu:T\to\mathcal Y_S$ of $q_S$ whose image lies in $b^{-1}(\Pi^0)$. Put $\rho=b\mu:T\to\Pi^0$. This is the missing generic-section construction. [step 1.1, step 3.1, algebra, choose, construct]

**Component step 5.1.** The source's quasi-finiteness assertion can also be checked directly, although the comparison below does not require it. For $p\in\Pi^0$, the intersection $S\cap Y_p$ is zero-dimensional and misses $\overline S\setminus S$, since that boundary is a union of lower-dimensional strata, all absent by step 3.1. It is therefore closed in the projective $\overline S$, and finite. Consequently $b^{-1}(p)$ is finite. The section $\mu$ is injective, so $\rho^{-1}(p)$ is a subset of this finite fibre; $\rho$ is finite type and quasi-finite. Also $db$ is invertible on the smooth zero-relative-dimensional incidence, while $d\mu$ is injective because $q_S\mu=1$. Thus $d\rho$ has rank $s$. We do not need to assume without construction that $\rho$ is smooth onto its image or that its image is closed; the graph factorization below supplies the needed pullback comparison for this actual $\rho$. [step 3.1, step 4.1, algebra]

**Component step 5.2.** Form $\mathcal Y_T=\mathcal Y\times_{\Pi}T$, $\mathcal X_T=\mathcal X\times_{\Pi}T$, with $\pi:\mathcal Y_T\to T$, $\Phi:\mathcal X_T\to\mathcal Y_T$ and $F=\pi\Phi$. By step 3.1 and smooth base change, $F$ is smooth projective of relative dimension $n-s$ and $\mathcal X_T$ is smooth of total dimension $n$. Each induced target stratum maps submersively to $T$. There is a tautological section $\theta(t)=(t,\rho(t),t)\in\mathcal Y_T$, since $\mu(t)$ chooses hyperplanes through $t$. The stratum induced by $S$ has relative dimension zero over $T$, hence is étale; its section $\theta$ is an open-and-closed component, using separatedness for closedness and the local étale inverse for openness. Separate this component from its complement as strata; this does not change the local Whitney conditions. Thus $\theta(T)$ is an actual stratum and $\theta^*P_\Phi$ has locally constant cohomology. Every fibre $X_t$ is the smooth projective source $f^{-1}(Y_t)$ of an $s$-fold transverse target slice. Its defect does not increase: on each fibre-dimension stratum the dimension drops by $s$, while the smooth source dimension also drops by $s$, so $2a+\dim(Y_t)_a-(n-s)\le r(f)$. Its image dimension is at most $m-s<m$. Apply the lower joint induction to each connected component of $X_t$, if needed. [F2, F3, step 3.1, step 4.1, algebra, construct]

**Component step 6.1.** The comparison has exact total shift zero. First $q^*[d-s]$ is perverse-exact and proper base change gives $q^*K[d-s]=Rg_*\mathbb Q_{\mathcal X}[n+d-s]$. Next factor the base change to $T$ as $\mathcal Y_T\xrightarrow{\iota}\mathcal Y|_{\Pi^0}\times T\xrightarrow{e}\mathcal Y|_{\Pi^0}$. The projection $e$ is smooth of relative dimension $s$. The first map is the inverse image of the graph of $\rho$ in $\Pi^0\times T$; in parameter coordinates it is cut out by $h(z)-\rho(t)=0$, exactly $d$ equations. Their derivatives on every stratum are surjective by step 3.1, so this is a transverse restriction of a smooth ambient complex embedding of codimension $d$. Thus $e^*[s]$ and $\iota^*[-d]$ are perverse-exact by [F2]. Combining with $q^*[d-s]$ gives net shift $(d-s)+s-d=0$. For $p_Y:\mathcal Y_T\to Y$, proper base change therefore identifies $p_Y^*K=R\Phi_*\mathbb Q_{\mathcal X_T}[n]$ and $p_Y^*P_b={}^pH^b(R\Phi_*\mathbb Q_{\mathcal X_T}[n])$. The same oriented smooth/normal comparisons have exceptional shifts $2(d-s)+2s-2d=0$, so there is no omitted transverse-orientation shift. Pulling back the earlier normalized finite splitting gives a finite normalized splitting for this actual $\Phi$. This is not an invocation of middle semisimplicity or a new decomposition theorem for $\Phi$. [F2, step 1.1, step 3.1, step 5.2, algebra]

**Component step 7.1.** Write $K_\Phi=R\Phi_*\mathbb Q_{\mathcal X_T}[n]$ and $P_{\Phi,b}={}^pH^bK_\Phi$. The unit $K_\Phi\to\theta_*\theta^*K_\Phi$, followed by $R\pi_*$ and the identity $\pi\theta=1$, gives $a:RF_*\mathbb Q_{\mathcal X_T}[n]\to\theta^*K_\Phi$. Compose it with the projection $\theta^*K_\Phi\to\theta^*P_{\Phi,0}$ in the pulled-back splitting. Taking $H^{-s}$ gives a genuine sheaf morphism $\sigma:R^{n-s}F_*\mathbb Q\to\mathcal H^{-s}(\theta^*P_{\Phi,0})$. Step 6.1 and $p_Y\theta:T\hookrightarrow Y$ identify the target with $(\mathcal H^{-s}P)|_T$. Both sides are local systems: the source by smooth proper transport, the target by its restriction to the stratum. The choice of splitting is only used to construct this projection; it is normalized and its existence was established before the present semisimplicity stage. [F2, step 5.2, step 6.1, algebra, construct]

**Component step 8.1.** For $t\in T$, the inclusion $j_t:Y_t\hookrightarrow\mathcal Y_T$ is transverse to every stratum, of codimension $s$, because each stratum maps submersively to $T$. Hence $j_t^*[-s]$ is perverse-exact. Proper base change identifies $j_t^*K_\Phi[-s]=Rf_{t*}\mathbb Q_{X_t}[n-s]$ and $j_t^*P_{\Phi,0}[-s]={}^pH^0(Rf_{t*}\mathbb Q_{X_t}[n-s])$. Trace the adjunction and projection defining $\sigma$ through these canonical base-change maps. Its stalk is exactly the composite from $H^{n-s}(X_t)$ to its normalized middle perverse summand and then the graded restriction $H^{n-s}_0(X_t)\to H^{n-s}_0(f^{-1}(t))$. The latter is surjective by [F3] for the lower map in step 5.2; the summand projection is surjective. Thus every stalk of $\sigma$ is surjective, and $\sigma$ is a surjection of the actual local systems in the Statement. This supplies the moving-family identification, rather than assuming that the stratum coefficient system is itself a smooth-fibre cohomology group. [F2, F3, step 5.2, step 6.1, step 7.1, algebra]

**Component step 9.1.** The independent Gauss–Manin theorem [F4] makes $R^{n-s}F_*\mathbb Q$ semisimple over $\mathbb Q$ and after complexification. Quotients of a semisimple representation split into simple constituents, so the target local system has both semisimplicity properties on $T$. Surjectivity of $\pi_1(T)\to\pi_1(S)$ from [F4] means that its monodromy image on $T$ equals the original image on $S$; every invariant complement over $T$ is therefore invariant on $S$. This proves both properties on $S$. For $s=0$ the local system is a finite vector space on points; for $s=m$ it is the ordinary smooth-projective fibre local system on the top smooth-image open, handled by the same independent Gauss–Manin interface. Strata outside $f(X)$ carry zero. These boundary cases add no claim about arbitrary local systems. [F4, step 7.1, step 8.1, algebra] ∎

#### Source notes

Full final dcM6.4.1–6.4.2 and the exact4.3.8 normalized pullback discussion were read. The constructed generic section uses the explicit generic product-projective fibre; dominance alone is not mistaken for existence of a section. Quasi-finiteness is checked rather than asserted, and smoothness of the parameter map onto its image is unnecessary. The graph factorization exposes every perverse and exceptional shift, so the moving local system is identified with the SAME core coefficient system. Only the lower fibre maps use the joint-induction restriction theorem; current middle semisimplicity is absent from all hypotheses. The previously constructed source/target hyperplane Thom/cup component is compatible with these normalized slices, but the present quotient proof does not require an extra primitive-compatible global lift.

The supplied finite algebraic Whitney/controlled normal-product foundation, earlier finite splitting, lower global restriction theorem, generic smoothness, and geometric Gauss–Manin theorem remain actual named suppliers with their own proof/native-review status. This component proves the moving-family deduction from those precise suppliers; no absent geometric identification is labeled standard or silently assumed. The whole core remains owned by the same semisimplicity author and cannot be called complete solely because this proof note exists.

## Remarks

The preceding construction is the simultaneous induction step relative to the exact named
upstream supplier statements; those retain their own proof obligations, and no finite-ADE
restriction, arithmetic purity or fibre affine-paving hypothesis enters. The induction step
preserves arbitrary projective fibres, and the middle positivity used at the end comes from
the separately verified middle-limit lemma, not from an assumed decomposition theorem.
