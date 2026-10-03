# Batch 28 Step 5a adjudication

Run: `frontier-38-owner-30`. Group: `batch-28`. Covers batch 28 only.

This is local mathematical adjudication, not a judge or certification record. Scope owes five touched decisions and one page decision; reader/refuter findings are empty. The generated dependency order governs this review. Current item/contract deltas are compared with the pre/post hash inventories; The theorem boundary correction is mathematical; the surface supplier-quotation synchronization is audit enrichment.

## Completed review, in routed dependency order

### `lem-finite-closed-immersion-derived-coinduction-adjunction` (level 0)

Checked Proof 1.1–3.1 and every cited supplier statement: evaluation at 1 and b-action give the two inverse adjunction maps; exact restriction/i_* implies injective coinduction, with bounded-below K-injectives computing both Hom complexes. Open restriction preserves injectives by exact extension by zero (the same stalk construction carries the module action). Internal Hom is checked on opens; closed pushforward preserves flasques, so global sections agree. Zero module, empty closed immersion and identity map give the expected zero/identity comparisons. AC covers DC and supplied resolutions. Stacks 0A70 and 08XR Statements/Proofs independently confirm ring adjunction and injectivity; no derived full-faithfulness is claimed. No defect found.

### `lem-projective-space-derived-coherent-duality` (level 0)

Checked Proof 1.1–2.1 and all eight cited supplier statements. Finite resolutions by sums of twists plus bounded truncation triangles generate the bounded coherent category; the actual chain evaluation/trace map is contravariant and compatible with cones, so five-lemma propagation applies. Degree a on a twist is H^(N+a)(O(-m-N-1)) paired with H^(-a)(O(m)), as required by [N]. Laurent pairing handles all degrees and N=0; zero K gives zero. AC is inherited from resolutions and cup/Ext suppliers. Stacks 0FVV(5), Proof and Yoneda note confirm the functorial shifted duality; no quotient-perfectness is used. No defect found.

Sources read in this session: [Stacks 0A70](https://stacks.math.columbia.edu/tag/0A70), Statement/Proof; [08XR](https://stacks.math.columbia.edu/tag/08XR), Statement/Proof; [0FVV](https://stacks.math.columbia.edu/tag/0FVV), entire mathematical statement/proof and Yoneda footnote. These are targeted source sections, not a claim to have read their transitive references.


### `lem-cm-quotient-of-regular-local-ring-ext-concentration` (level 1)

Read Proof 1.1–3.1 and exact statements of all ten published mathematical suppliers. Depth over R/B is identical; Auslander–Buchsbaum gives pd B=N-d. Closed polynomial localization gives dim R/p=N-ht p. Induction excludes I from height-j associated primes, chooses a regular element, and establishes dim Q/fQ=N-j-1 using minimal support primes and the minimal parameter length before using the qualified regular-quotient theorem. Rees adjunction gives Ext_Q^q(B,Q)=Ext_(Q/f)^q-1(B,Q/f), including q=0 and empty sequence c=0. No complete-intersection claim is made. Local invertible L is rank-one free; B nonzero is essential and stated. AC supplies resolutions/prime-avoidance choices. Stacks 00N6 Statement/Proof independently checks the dimension-drop/parameter principle. Reader repair is mathematically complete; its exact historical preimage was recovered with its recorded SHA-256, as shown below.

### `lem-regular-quotient-dualizing-complex-and-biduality` (level 1)

Read Proof 1.1–3.1, dualizing definition and exact regular-ring/global-dimension supplier statements. Finite-dimensional regular Noetherian A has bounded finite projective resolutions and L has finite injective dimension. Coinduction gives bounded injective B-complex and finite B-cohomology. Applying adjunction twice identifies canonical signed evaluation after forgetting B with ambient double evaluation; restriction detects quasi-isomorphisms. At M=B this is homothety. Finite resolutions commute with localization. Arbitrary s cancels under double dual; singular B is allowed, zero M is harmless, B=0 is expressly excluded. AC is retained. Stacks 0A7B, 0AX0 and 0A7C Statements/Proofs confirm the three conditions and quotient/biduality mechanisms. No defect found.

Additional source sections read: Stacks 0A7B definition; 0AX0 and 0A7C entire Statements/Proofs; 00N6 entire Statement/Proof.

## Historical carrier evidence

Historical `lem-cm-quotient-of-regular-local-ring-ext-concentration` preimage recovered from `research/frontier-38-owner-30-dispatch/reader-reader-28.attempt-1.log` lines 6005–6049; complete recovered bytes have SHA-256 `74bcbdb2e0ea627ea86ee9734db4dd07fdfe98e9ad29ccc7d564bc6340f6446e`, matching the pre inventory. Exact delta:

```diff
--- pre
+++ current
@@ -7,3 +7,3 @@
 pipeline_run: frontier-38-owner-30
-deps: ["def-axiom-of-choice", "lem-finite-closed-immersion-derived-coinduction-adjunction", "thm-auslander-buchsbaum-formula", "thm-regular-local-rings-are-domains-and-cohen-macaulay", "thm-auslander-buchsbaum-serre-regularity-criterion", "lem-regular-element-exists-by-prime-avoidance", "lem-associated-primes-of-cohen-macaulay-module-have-full-dimension", "thm-regular-quotients-and-cohen-macaulayness", "thm-dimension-formula-for-affine-domains", "lem-affine-domain-chain-dimension-formula-step"]
+deps: ["def-axiom-of-choice", "lem-finite-closed-immersion-derived-coinduction-adjunction", "thm-auslander-buchsbaum-formula", "thm-regular-local-rings-are-domains-and-cohen-macaulay", "thm-auslander-buchsbaum-serre-regularity-criterion", "lem-regular-element-exists-by-prime-avoidance", "lem-associated-primes-of-cohen-macaulay-module-have-full-dimension", "thm-regular-quotients-and-cohen-macaulayness", "thm-dimension-formula-for-affine-domains", "lem-affine-domain-chain-dimension-formula-step", "thm-minimal-support-primes-are-associated", "thm-dimension-and-parameters-for-modules"]
 provenance:
@@ -32,3 +32,3 @@
 
-[F2] Prime avoidance produces a regular element in an ideal avoiding every associated prime; associated primes of a finite CM local module have full quotient dimension; a regular quotient of a CM local ring is CM with dimension lowered by one ([[lem-regular-element-exists-by-prime-avoidance]], [[lem-associated-primes-of-cohen-macaulay-module-have-full-dimension]], [[thm-regular-quotients-and-cohen-macaulayness]]).
+[F2] Prime avoidance produces a regular element in an ideal avoiding every associated prime; associated primes of a finite CM local module have full quotient dimension. Quotienting a CM module by a regular initial segment of a system of parameters preserves CM ([[lem-regular-element-exists-by-prime-avoidance]], [[lem-associated-primes-of-cohen-macaulay-module-have-full-dimension]], [[thm-regular-quotients-and-cohen-macaulayness]]).
 
@@ -38,2 +38,4 @@
 
+[F5] Minimal support primes of a finite module are associated ([[thm-minimal-support-primes-are-associated]]). The dimension of a nonzero finite local module is the least length of a tuple with finite-length quotient, and a tuple of that length is a system of parameters ([[thm-dimension-and-parameters-for-modules]]).
+
 ## Proof
@@ -42,3 +44,3 @@
 
-2.1 Construct $f_1,\ldots,f_c\in I$ inductively. Suppose $j<c$ have been chosen regularly, and put $Q=R/(f_1,\ldots,f_j)$. It is CM of dimension $N-j$ by [F2]. Every associated prime of $Q$, viewed in $R$, has quotient dimension $N-j$, hence height $j$ by [F3]. None contains $I$, whose height is $c>j$. Prime avoidance [F2] therefore gives $f_{j+1}\in I$ regular on $Q$. The ideal remains proper, since it is contained in the maximal ideal. This proves existence of the required length-$c$ regular sequence, including the empty sequence if $c=0$. [F2, F3, step 1.1, choose]
+2.1 Inductively maintain a regular tuple $f_1,\ldots,f_j\in I$ with $Q=R/(f_1,\ldots,f_j)$ CM of dimension $N-j$; the case $j=0$ is [F1]. For $j<c$, every associated prime of $Q$, viewed in $R$, has quotient dimension $N-j$, hence height $j$ by [F3]. None contains $I$, whose height is $c>j$. Prime avoidance [F2] gives $f_{j+1}\in I$ regular on $Q$. It avoids every minimal prime of $Q$ by [F5], so every prime containing $(f_1,\ldots,f_{j+1})$ strictly contains a height-$j$ minimal prime and has height at least $j+1$. By [F3], $e=\dim(Q/f_{j+1}Q)\le N-j-1$. A parameter tuple of length $e$ on this nonzero quotient, supplied by [F5], lifts together with $f_{j+1}$ to a tuple with finite-length quotient on $Q$. The minimal-length assertion of [F5] gives $N-j\le e+1$, hence $e=N-j-1$ and this lifted tuple is a system of parameters for $Q$. Thus $f_{j+1}$ is a regular parameter element, and [F2] makes the next quotient CM, completing the induction. All quotients are nonzero since the ideals lie in the maximal ideal. This constructs the length-$c$ regular sequence, including the empty tuple if $c=0$. [F1, F2, F3, F5, step 1.1, choose, algebra]
 
```

Historical `rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case` preimage recovered from `research/frontier-38-owner-30-dispatch/reader-reader-28.attempt-1.log` lines 7717–7742; complete recovered bytes have SHA-256 `5b7f7f555c3c82aef2774b0b0df461e88c7be4067d23c6aaaa8b9596bc557a17`, matching the pre inventory. Exact delta:

```diff
--- pre
+++ current
@@ -7,3 +7,3 @@
 pipeline_run: frontier-38-owner-30
-deps: ["def-axiom-of-choice", "thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme", "thm-serre-duality-smooth-projective-variety-locally-free-sheaves", "lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction", "lem-regular-immersion-koszul-ext-sheaf"]
+deps: ["def-axiom-of-choice", "thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme", "thm-serre-duality-smooth-projective-variety-locally-free-sheaves", "lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction", "lem-regular-immersion-koszul-ext-sheaf", "lem-regular-immersion-local-to-global-ext-collapse", "lem-smooth-projective-embedding-gysin-trace-compatibility"]
 provenance:
@@ -25,2 +25,2 @@
 
-Consequently [[thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]] recovers the cup product, evaluation and trace pairing in [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]. Their traces agree: both use the counit for the same embedding and the normalized ambient Laurent trace, under the same conormal/Koszul identification. This is a comparison with the existing AG-LIE theorem, rather than a second proof of that theorem. For singular $X$, the coherent Ext statement remains valid and the dualizing sheaf may fail to be invertible.
+To compare traces, fix the normalized identification with the canonical line bundle. For an embedding of codimension $c$, [[lem-regular-immersion-local-to-global-ext-collapse]] uses $\sigma_c=(-1)^{c(c+1)/2}$ times the Koszul/Hodge determinant identification, rather than the unmodified determinant map. Use that same identification to transport the coherent theorem's dualizing sheaf and trace. Its global adjunction is the one-row Ext comparison, and its counit is precomposition with $\mathcal O_P\to i_*\mathcal O_X$; hence the transported trace is the published Gysin trace. The cup/evaluation compatibility and embedding independence proved in [[lem-smooth-projective-embedding-gysin-trace-compatibility]] then identify the pairing with [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]. For singular $X$, the coherent Ext statement remains valid and the dualizing sheaf may fail to be invertible.
```

Historical `ex-serre-duality-on-a-singular-projective-cm-curve` preimage recovered from `research/frontier-38-owner-30-dispatch/reader-reader-28.attempt-1.log` lines 8201–8237; complete recovered bytes have SHA-256 `02e99c61b79aa4f74f552d08fbd3eec5804c894796305f96131b33a5443622e1`, matching the pre inventory. Exact delta:

```diff
--- pre
+++ current
@@ -7,3 +7,3 @@
 pipeline_run: frontier-38-owner-30
-deps: ["def-axiom-of-choice", "thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme", "lem-projective-pure-cm-dualizing-complex-concentration", "thm-regular-quotients-and-cohen-macaulayness", "thm-cohomology-projective-space-twisting-sheaves", "lem-projective-hypersurface-cohomology-sequence", "thm-flasque-sheaves-acyclic"]
+deps: ["def-axiom-of-choice", "thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme", "lem-projective-pure-cm-dualizing-complex-concentration", "thm-regular-quotients-and-cohen-macaulayness", "thm-cohomology-projective-space-twisting-sheaves", "lem-projective-hypersurface-cohomology-sequence", "thm-flasque-sheaves-acyclic", "thm-dimension-and-parameters-for-modules", "thm-dimension-formula-for-affine-domains", "lem-affine-domain-chain-dimension-formula-step"]
 provenance:
@@ -30,3 +30,3 @@
 
-[F1] Regular quotients of CM rings are CM ([[thm-regular-quotients-and-cohen-macaulayness]]). Projective twisting cohomology is [[thm-cohomology-projective-space-twisting-sheaves]]. The structure sequence of a plane cubic and its cohomology are [[lem-projective-hypersurface-cohomology-sequence]]; flasque sheaves have no higher cohomology ([[thm-flasque-sheaves-acyclic]]).
+[F1] A regular parameter quotient of a CM ring is CM ([[thm-regular-quotients-and-cohen-macaulayness]]). Projective twisting cohomology is [[thm-cohomology-projective-space-twisting-sheaves]]. The structure sequence of a plane cubic and its cohomology are [[lem-projective-hypersurface-cohomology-sequence]]; flasque sheaves have no higher cohomology ([[thm-flasque-sheaves-acyclic]]).
 
@@ -34,3 +34,5 @@
 
-1.1 On $z=1$, the polynomial is $y^2-x^2(x+1)$. It is irreducible over $k(x)$ as a polynomial in $y$, since $x+1$ has odd valuation at $x=-1$ and hence is not a square; Gauss's lemma proves irreducibility in $k[x,y]$. The homogeneous polynomial is not divisible by $z$, and any homogeneous factorization would dehomogenize to a nontrivial factorization, so $C$ is integral and pure of dimension one. Its affine gradient vanishes at $(0,0)$ and its quadratic tangent cone is $y^2-x^2$, with two distinct lines. Thus $p$ is a node and $C$ is singular. A nonzero hypersurface equation is regular in each regular ambient local ring, making $C$ CM by [F1]. [F1, given, algebra]
+[F3] The affine-domain dimension formula and its prime-extension form compute local dimensions ([[thm-dimension-formula-for-affine-domains]], [[lem-affine-domain-chain-dimension-formula-step]]). A nonzero finite local module of dimension $e$ has a parameter tuple of length $e$ ([[thm-dimension-and-parameters-for-modules]]).
+
+1.1 On $z=1$, the polynomial is $y^2-x^2(x+1)$. It is irreducible over $k(x)$ as a polynomial in $y$, since $x+1$ has odd valuation at $x=-1$ and hence is not a square; Gauss's lemma proves irreducibility in $k[x,y]$. The homogeneous polynomial is not divisible by $z$, and any homogeneous factorization would dehomogenize to a nontrivial factorization, so $C$ is integral and pure of dimension one. Its affine gradient vanishes at $(0,0)$ and its quadratic tangent cone is $y^2-x^2$, with two distinct lines. Thus $p$ is a node and $C$ is singular. In a regular ambient local ring along $C$, the nonzero hypersurface equation is regular and lowers dimension by one by [F3]. Lift a parameter tuple from the quotient and prepend the equation: [F3] makes this a parameter tuple of the ambient ring. The equation is therefore a regular parameter element, so [F1] makes $C$ CM. [F1, F3, given, algebra]
 
```

Historical `coherent-duality-on-projective-cohen-macaulay-schemes` preimage recovered from `research/frontier-38-owner-30-dispatch/reader-reader-28.attempt-1.log` lines 4678–4778; complete recovered bytes have SHA-256 `ce609091b7af506f31ac78a55028b6d01e89310ccf44fde0ee7a6306bfe3dd41`, matching the pre inventory. Exact delta:

```diff
--- pre
+++ current
@@ -60,6 +60,6 @@
 [[lem-cm-quotient-of-regular-local-ring-ext-concentration]]: for a
-Cohen–Macaulay quotient $B$ of a regular local ring $R$ of dimension $N$ and
-dimension $d$, the ambient Ext groups
-$\operatorname{Ext}_R^q(B,R)$ vanish except in degree $N-d$. Flatness of the
-ambient computation over each chart then gives
+Cohen–Macaulay quotient $B$ of dimension $d$ of a polynomial-chart local ring
+$R$ at a closed point, with $\dim R=N$, the ambient Ext groups
+$\operatorname{Ext}_R^q(B,R)$ vanish except in degree $N-d$. Coherence of the
+ambient Ext sheaves and detection of their support at closed points then give
 [[lem-projective-pure-cm-dualizing-complex-concentration]]:
```

### `lem-projective-embedding-dualizing-complex-existence` (level 2)

Checked Proof 1.1–2.1 and every cited prerequisite in dependency order. Projectivity is the published finite-dimensional closed-embedding convention. Applying i^b to an injective ambient resolution supplies the O_X action; standard charts have regular polynomial A and quotient B, and finite ambient resolutions identify the sheaf construction with RHom_A(B,L[N]) and glue by localization. Uniform ambient resolution bounds give bounded coherent internal duals; local quotient homothety/biduality imply the global assertions by stalk detection. Empty X is vacuous, N=0 is allowed, and no smoothness/CM/perfectness on X is assumed. AC is inherited from injective and finite-projective resolutions. Stacks 0A7I Statement/Proof and 0FVV confirm existence, but this proof closes its inputs locally. No defect found.

Exact preimages of all three item repairs and the page repair were recovered with SHA-256 matches, so there is no missing historical preimage. The mathematical CM lemma repair is retained: its Statement is unchanged, and the new parameter qualification closes the inflated supplier use.

### `lem-projective-dualizing-complex-trace-and-embedding-independence` (level 3)

Checked Proof 1.1–2.1 and every cited supplier statement, including the covariant Yoneda lemma applied to the opposite category. Closed-immersion adjunction plus ambient derived evaluation gives the actual natural global comparison, with degree r dual to H^(-r). Counit is evaluation at 1, so pairing is t_i(alpha[-r] beta). At r=0 the two coherent representing objects represent the same contravariant functor; evaluating on identities constructs inverse unique comparison maps. Evaluation at the unit recovers the trace on H^0(D_i); in D(k) a map to k is determined by this functional. Shifts preserve normalization, and comparisons compose transitively. Empty X/zero K and arbitrary shifts are compatible. Stacks 0FVV(5) and Yoneda footnote, and entire Remark 0FVW, confirm this normalization argument. AC retained. No uniqueness of an unnormalized complex or derived full-faithfulness is asserted. No defect found.


### `lem-projective-pure-cm-dualizing-complex-concentration` (level 4)

Checked Proof 1.1–2.1 and all cited supplier statements. At closed points finite algebraic residue makes local dimensions d and N; CM quotient Ext concentrated at c=N-d appears in sheaf degree c-N=-d. Coherent supports on finite-type schemes meet closed points, so stalk vanishing proves global concentration and canonical truncation. Dual finite-free resolution of length c resolves E=Ext_R^c(B,R), giving pd_R E<=c; ambient biduality proves E nonzero. Auslander–Buchsbaum and depth<=support dimension force depth/dimension d. Depth over quotient B is the same; CM localization spreads to all points. Local homothety excludes vanishing stalks, proving full support. c=0, d=0, empty X and non-geometrically-rational closed points cause no exception. Stacks 0FVZ Statement/Proof confirms concentration/CM/full support; AC retained. No defect found.


### `thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme` (level 5)

Checked Proof 1.1–2.1 and all cited suppliers after the level-4 concentration review. Substitute r=-i in the normalized trace representation; shift omega[d] yields global Ext^(d-i), and beta:O_X->F[i] followed by alpha[i] is exactly the Yoneda/trace pairing. Projectivity gives separated Noetherian X and finite-dimensional coherent cohomology, so duality in one adjoint implies duality in the other; endpoints and i outside [0,d] yield the required vanishings. Bounded K retains the actual closed-immersion/ambient derived map in D(k), and coherent biduality is internal rather than an assertion of singular perfectness. Empty X, zero F, d=0, disconnected and nonreduced X are allowed. In particular H^0(O_X) need not be k: two rational points give k×k and H^d(omega) is the dual of the entire finite algebra; trace is evaluation at its unit. AC is retained. Stacks 0FVZ(3–4), 0FVW and Vakil 29.3.14–15 confirm precisely these claims. Current theorem item is unchanged; the corrected boundary is sound.


The theorem contract preimage is recovered by the unchanged citations/derivations/routine_steps plus the complete boundary array printed at reader log line 8885. Its canonical SHA-256 is `ba790aadc7bb82b6092032ebbd27e51c8449ecc50fa7651a22fbdac6cb3e609d`, matching pre. The old unit boundary asserted `H^0(X,O_X)=k` without connectedness/reducedness/residue qualifications. Two disjoint rational points disprove it; the reader correctly replaced it by the dual of the full finite algebra. This is a confirmed boundary defect in the contract, not merely metadata. The theorem item itself is hash-identical before/after.

### `rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case` (level 6)

Read both current Remark paragraphs and all six mathematical suppliers: coherent theorem; Koszul sheaf Ext; determinant adjunction; smooth theorem; full normalized collapse proof, especially 1.3/7.1; full embedding/Gysin compatibility proof, especially 5.1–7.1. Smooth local rings give CM and regular immersion; determinant formula gives top differentials. Locally free E makes RHom(E,omega)=E^vee tensor omega and hence global Ext equals cohomology. Normalized transport uses sigma_c=(-1)^(c(c+1)/2) once; precomposition with O_P->i_*O_X is the counit/Gysin map. Both routes through cup/contraction carry the same normalization. c=0 gives sigma=1; c=1 gives -1, showing why raw determinant identification cannot be silently substituted (in characteristic 2 signs coincide). Zero E/empty X are harmless. AC retained. Stacks 0FVV(7), 0FW0, and Vakil 29.4.I–K/29.4.10 confirm specialization; published suppliers supply exact sign conventions. Reader repair is accepted; no remaining defect.

### `ex-serre-duality-on-a-singular-projective-cm-curve` (level 6)

Read Example and Verification 1.1–2.1 and exact suppliers. Characteristic zero makes the tangent lines y=±x distinct. x+1 has odd valuation, so the affine quadratic is irreducible over k(x); Gauss plus no z-factor makes the homogeneous cubic integral. The only singular point is (0,0): y=0 and x=0 or x=-1 on the curve, but derivative at x=-1 is nonzero; at infinity [0:1:0], derivative in z is 1. Local equation is a nonzerodivisor; affine-domain chain dimensions give a one-step dimension drop, and lifted quotient parameters justify the regular-parameter theorem at every point, including the generic point. Dualizing the cubic sequence into O(-3) gives Ext^1=O_C; the long exact sequence gives H^0=H^1=k. Node skyscraper is flasque with H^0=k and H^1=0, so the coherent theorem gives Ext^1=k and Hom=0, with no locally-free assumption. AC retained; Vakil 29.4.7–8/H and Stacks 0FVZ support the computations. Reader parameter-citation repair is accepted.


### `ex-serre-duality-on-a-smooth-projective-surface` (level 7)

Read Example and Verification 1.1–2.1 with all cited statements. For m≥0 the finite nonnegative triples sum to m and number binomial(m+2,2); their opposite exponents -a_i-1 sum to -m-3. The coefficient of (x_0x_1x_2)^(-1) is 1 exactly for matching triples, including m=0 and m=1. For the rational point sheaf, flasqueness gives cohomology k in degree 0 and zero above; the coherent theorem gives Ext^2=k and Ext^1=Hom=0. Arbitrary fields are allowed and p is explicitly rational; the identity embedding has c=0, so smooth normalization adds no sign. AC is inherited. No defect found in the item. Reversing only the synchronized smooth-remark quotation reconstructs the pre contract with canonical SHA-256 `cbc62d7e6b020a503a7aee38b1ae249835fab3a24f13af98d9111d10ad962de6` (matches inventory: True). Disposition: reviewed_no_defect, change_kind audit_enrichment, defect_ids empty.

## Manifest integration

The reader updated the three item deps but left their owning manifest rows with the former supplier lists. Adjudication synchronized those three deps and their proof-strategy summaries in the batch-28 manifest; no item text, Statement/Definition, page placement, dependency level, provenance or item verification was changed. These three dispositions are therefore **amended_repair** for the combined item/contract/manifest carriers, retaining the mathematically accepted reader content. The existing closed mathematical defect rows cover this integration; no mechanical defect row was created.

## Page-only obligation and other page suppliers

The A-page repair is **accepted_repair**. The preimage’s flatness explanation is unsupported; the current closed-point domain and coherent-support explanation are precisely the concentration proof. The published depth/dimension and finite-residue suppliers support the local-to-global passage. All eleven placements and the page anchor order remain unchanged. The prose’s global Ext, internal Hom and sheaf Ext are distinguished; singular/nonperfect coherent sheaves are allowed and the entire page retains AC. The smooth comparison uses the normalized canonical-line transport.

For the page’s dimension-one summary, read `rem-curve-residue-duality-is-the-dimension-one-case` and its four dependencies. The d=1 theorem gives Hom and global Ext in the stated degrees. At smooth rational points, the normalization supplier’s Statement and Proof 1.1–4.1 give the signed top cochain -dz and trace 1; the principal-part boundary sign follows the two-term local resolution/cone convention. Smooth connected components over an algebraic closure have H^0(O)=k, so point-normalized traces determine the one-dimensional H^1(omega), and the opened field-extension/Gysin comparison descends equality. No ordinary-differential assertion is made for a singular curve.

The examples page was read to assess these carriers and remains read-only. Its unique-node claim follows the cubic derivative calculation in the risk review. The affine-line counterexample and its affine-vanishing supplier Statement were read: V(xt-1) projects to nonclosed D(x), and H^1(O)=0 versus Hom(O,Omega)=k[t]dt refutes the formula with smooth/CM hypotheses retained. These untouched unflagged carriers owe no separate decision.

## Impact, sources and scope

No current Statement/Definition was changed in this adjudication. The reader changed proof/facts/trace-comparison exposition and a boundary assertion, with supplier-quote synchronization in the sound surface consumer. There is no claim-signature impact window to propagate. The batch cross-dependency input is `[]`, and searches of `briefs/tasks/frontier-dependency-ledger.md` found no owned-consumer edge for this packet; no foreign consumer or published file was edited. No proposed withdrawal is present. No defective published prerequisite was identified, so no published-ledger row or lock was needed.

Additional external source sections actually read: [Jeffries, Local Cohomology](https://jack-jeffries.github.io/UM/LCnotes.pdf), printed p.60 Remark 4.10 and its preceding Rees argument, pp.66–69 Proposition 4.29/Corollary 4.30, the argument following Corollary 4.35, Proposition 4.36, Lemma 4.37, and Proposition 4.40, including their relevant proofs. These confirm the ambient canonical-module and homothety/localization inputs; the repository proves its own finite-projective and regular-sequence mechanisms.

[Vakil, 2025-10-21](https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf), printed pp.805–810: Corollary 29.3.14, Remark 29.3.15, Theorem 29.4.3 and the complete relevant §§29.4.4–6 argument, hypersurface calculation 29.4.7/Proposition 29.4.8, Exercises 29.4.H–K and Remark 29.4.10. These support coherent Ext duality and canonical-line/hypersurface identifications. Exact trace signs were checked in the named repository suppliers, not inferred from the source’s outline. [Stacks 0A7I](https://stacks.math.columbia.edu/tag/0A7I), [0FVW](https://stacks.math.columbia.edu/tag/0FVW), [0FVZ](https://stacks.math.columbia.edu/tag/0FVZ) and [0FW0](https://stacks.math.columbia.edu/tag/0FW0) were read at complete mathematical Statement/Proof or Remark level. The supplied source list is targeted; it does not claim a recursive audit or reading entire books.

Five closed mathematical defect rows at `5a-adjudicate` cover the two inflated parameter citations, omitted normalized trace qualification, false unit boundary, and page inference. The surface quote synchronization is audit enrichment with no defect. Decisions are exactly the five touched plus one page obligations, with no reader/flagged findings, no hash stamps and no independent certification.

## Local contract check integration

The first strict proof-contract check reported six mechanical diagnostics: three F1 supplier-use records omitted repaired step 2.1, and the corrected theorem unit boundary and two smooth-comparison boundaries lacked explicit step/statement anchors. Adjudication added these mappings/anchors without changing their mathematics or item bytes. No mechanical defect row was created. The theorem disposition is now **amended_repair** for its completed contract repair. All four mathematical item/contract corrections are retained with repair_confidence 1; the page repair remains accepted and the surface quote update remains audit enrichment.

## Final dispositions and validation

| Obligation | Final verdict |
|---|---|
| touched:28:lem-cm-quotient-of-regular-local-ring-ext-concentration | amended_repair |
| touched:28:thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme | amended_repair |
| touched:28:rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case | amended_repair |
| touched:28:ex-serre-duality-on-a-singular-projective-cm-curve | amended_repair |
| touched:28:ex-serre-duality-on-a-smooth-projective-surface | reviewed_no_defect (audit_enrichment) |
| page:28:coherent-duality-on-projective-cohen-macaulay-schemes | accepted_repair |

Final local checks:

- `risk-report` was run before risk review; its final `--require-reviewed` pass reports 14 routed items, all ten HIGH/CRITICAL reviews complete, zero errors.
- Strict `proof-contract`: 14/14 entries, zero errors/warnings after the reported mapping/anchor repairs. Direct text consistency check: 70 exact supplier quotations and 25 authored derivations, zero drift.
- `manifest-deps`: 14 items, zero errors. Direct comparison confirms every manifest dependency list matches its current item.
- Precheck on the three reader-edited items: both proof-bearing items pass, zero failures; the remark has no proof to check.
- Renderer on all five touched items and the changed page: six files pass actual YAML and KaTeX parsing.
- After the final content state, one batched `node tools/proof-layout.mjs items/lem-cm-quotient-of-regular-local-ring-ext-concentration.md items/rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case.md items/ex-serre-duality-on-a-singular-projective-cm-curve.md` reports **3 items, 5 steps, 0 defects**. Adjudication made no additional item edits or formatter changes.
- Local obligation/ledger validation: exactly six owed decisions, five unique fixed rows at 5a-adjudicate, correct subjects, no extra obligation. All fourteen item hashes and both page hashes remain identical to the reader post inventory; contract and manifest changes are explicitly recorded above. No decision hash was stamped.

The read-only autopilot status recomputation confirms the live run is at Step 5a. Its separate batch-26 split blocker and incomplete coverage elsewhere are outside this dispatch. Batch-28 blockers: **none**. Unresolved mathematical uncertainty, out-of-scope alerts and proposed withdrawals: **none identified**. The engine owns hash sealing, the gate battery and stage transitions; no judge, self-certification, agent dispatch or transition was initiated.
