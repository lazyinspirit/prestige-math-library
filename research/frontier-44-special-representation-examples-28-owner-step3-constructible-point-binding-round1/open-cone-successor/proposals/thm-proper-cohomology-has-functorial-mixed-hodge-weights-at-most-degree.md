---
id: thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree
kind: theorem
title: "Proper cohomology and functorial mixed Hodge weights"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [cor-cohomology-over-a-field-is-dual-to-homology-over-that-field,
       def-analytic-topology-and-finite-smooth-algebraic-stratifications,
       def-axiom-of-choice, def-borel-moore-homology,
       def-cohomological-mixed-hodge-complex, def-rational-mixed-hodge-structure,
       lem-borel-moore-homology-of-compact-spaces,
       lem-finite-simplicial-open-stars-have-explicit-conical-product-charts,
       lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology,
       lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights,
       lem-morphisms-of-mixed-hodge-structures-are-strict,
       lem-smooth-projective-analytification-has-rational-kahler-polarization,
       prop-cap-product-naturality-and-projection-formula,
       thm-a-compact-hausdorff-space-is-regular-and-normal,
       thm-choice-implies-dependent-implies-countable-choice,
       thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms,
       thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology,
       thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures,
       thm-poincare-duality-for-oriented-topological-manifolds,
       thm-proper-hypercovers-compute-constructible-derived-cohomology,
       thm-proper-varieties-admit-smooth-projective-hyperresolutions,
       cor-compact-hausdorff-partitions-of-unity]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge III, Publ. Math. IHES 44 (1974) 5-77, (8.1.10)-(8.2.4)"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
      locator: "printed pp. 37-39: the mixed Hodge structure on the cohomology of a separated finite-type scheme via a proper hypercover, independence of the diagram, functoriality and the bound p+q<=n for proper varieties"
    - title: "Andrzej Weber, Notes on Mixed Hodge Structures (Srni, January 2005), Sections 4.3"
      url: "https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf"
      locator: "the mixed Hodge complex of a smooth compact simplicial variety, the induced structure and the weight spectral sequence, printed pp. 10-11"
---

## Statement

Assume AC. The rational cohomology $H^n(Y,\mathbb Q)$ of every proper complex
algebraic variety has a functorial mixed Hodge structure
([[def-rational-mixed-hodge-structure]]) with weights at most $n$. For a
morphism $g:Y\to U$ with $Y$ proper and $U$ smooth quasiprojective, its pullback
$H^n(U)\to H^n(Y)$ is a mixed Hodge morphism for the logarithmic structure on
$U$. If $Y\to X$ is proper with $X$ smooth projective of dimension $d$, the
proper homological class map
$$H_i^{\mathrm{BM}}(Y,\mathbb Q)=H_i(Y,\mathbb Q)\longrightarrow H^{2d-i}(X,\mathbb Q)(d)$$
is a mixed Hodge morphism after the indicated Tate twist. Its image, and
consequently the untwisted image in $H^{2d-i}(X)$, is a pure Hodge substructure.
No smoothness of $Y$ is assumed.

## Facts & Assumptions

**Given:** The Axiom of Choice and a proper complex algebraic variety $Y$; morphisms $g:Y\to U$ to a smooth quasiprojective $U$ and $h:Y\to X$ to a smooth projective $X$ of dimension $d$ where these are named.

[F1] [[thm-proper-varieties-admit-smooth-projective-hyperresolutions]]: every proper complex variety $Y$ admits a split simplicial proper hypercover $a:Y_\bullet\to Y$ with all $Y_p$ smooth projective; two such hypercovers are dominated by a third smooth projective one; every morphism of proper varieties lifts to a morphism of such hypercovers after refining the source; and degree-$n$ cohomology uses only the skeleton through degree $n+1$.

[F2] [[thm-proper-hypercovers-compute-constructible-derived-cohomology]]: for a proper hypercover $X_\bullet\to X$ of finite-type complex varieties and a bounded-below constructible coefficient complex $F$ of lower bound $a$, the augmentation is a quasi-isomorphism $F\xrightarrow{\sim}\operatorname{Tot}_pRa_{p*}a_p^*F$, giving $R\Gamma(X,F)\xrightarrow{\sim}\operatorname{Tot}_pR\Gamma(X_p,a_p^*F)$ and a strongly convergent spectral sequence $E_1^{p,q}=H^q(X_p,a_p^*F)\Rightarrow H^{p+q}(X,F)$ whose diagonal $p+q=m$ is finite and determined by levels $p\le m-a+1$, and all refinements induce the same comparison. For the constant rational complex $F=\mathbb Q_X$ the lower bound is $a=0$ and the spectral sequence is first-quadrant.

[F3] [[lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights]] and [[def-cohomological-mixed-hodge-complex]]: part (ii) turns a cosimplicial system of weight-zero rational Hodge complexes concentrated in nonnegative bidegrees, with strict differentials and pure cohomology of weight $q$ in bidegree $(p,q)$, into a rational cohomological mixed Hodge complex whose simple complex carries a mixed Hodge structure with $\operatorname{Gr}^W_qH^n\cong E_2^{n-q,q}$, so that all weights of $H^n$ are at most $n$ when only nonnegative cosimplicial degrees occur.

[F4] [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] and [[lem-smooth-projective-analytification-has-rational-kahler-polarization]]: a smooth projective complex scheme $Z$ of pure dimension has analytification $Z^{\mathrm{an}}$ a compact Hausdorff second-countable complex manifold carrying a Kähler form from any ample class, and $H^q(Z,\mathbb Q)$ is pure of weight $q$ with functorial rational structure and strict Hodge filtration; for a finite disjoint union of such schemes the statements hold componentwise and sum.

[F5] [[lem-morphisms-of-mixed-hodge-structures-are-strict]]: mixed Hodge morphisms are strict for both filtrations, their kernels, images and cokernels carry mixed Hodge structures, and a morphism from a structure of weights at least $n$ to a structure of weights at most $n$ has pure image of weight $n$.

[F6] [[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]], [[thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology]], [[lem-finite-simplicial-open-stars-have-explicit-conical-product-charts]], [[def-analytic-topology-and-finite-smooth-algebraic-stratifications]], [[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[cor-compact-hausdorff-partitions-of-unity]] and [[thm-choice-implies-dependent-implies-countable-choice]]: the analytic topology of a complex algebraic variety is fixed by the cited definition; the triangulation theorem provides finite compatible smooth Whitney refinements and triangulations of quasi-projective charts; open stars of simplices have explicit conical product charts and are contractible; a compact Hausdorff space is normal, has subordinate continuous partitions of unity under dependent choice — which the last item supplies from AC — and the metrization and sheaf-singular comparison then identify derived constant-sheaf cohomology with singular cohomology on every open subset.

[F7] [[thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures]]: for smooth quasiprojective $U$ with an SNC smooth projective compactification $j:U\hookrightarrow X$, the logarithmic de Rham complex with its pole-count weight filtration constructs a functorial rational mixed Hodge structure on $H^n(U,\mathbb Q)$ of weights at least $n$, independent of the compactification, with $W_nH^n(U,\mathbb Q)=\operatorname{im}(H^n(X,\mathbb Q)\to H^n(U,\mathbb Q))$. Its empty-boundary construction gives the exact functorial Godement global-section model of the holomorphic de Rham complex of a smooth projective variety, with the degree Hodge filtration and the constant-sheaf rational comparison; the proof derives differential strictness from Hodge-de Rham $E_1$ degeneration.

[F8] [[def-borel-moore-homology]], [[lem-borel-moore-homology-of-compact-spaces]], [[thm-poincare-duality-for-oriented-topological-manifolds]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]] and [[prop-cap-product-naturality-and-projection-formula]]: locally finite chains define Borel-Moore homology, which agrees with ordinary singular homology for compact spaces; for compact spaces and field coefficients cohomology is dual to homology via the Kronecker pairing; and on a compact oriented $2d$-manifold cap product with the fundamental class is an isomorphism $H^{2d-i}\to H_i$ compatible with the cup product and the trace, whose class has Hodge type $(d,d)$.

[F9] [[def-axiom-of-choice]]: the standing hypothesis, inherited from the hyperresolution, descent and logarithmic suppliers, and used exactly once as dependent choice for the partition of unity in [F6].

## Proof

1.1 (Actual cosimplicial Hodge complexes.) Choose the smooth projective proper hypercover $a:Y_\bullet\to Y$ of [F1]. Use the exact functorial Godement construction of [F7], applied on every $Y_p$, and put $K_{\mathbb Q}^{p,q}=\Gamma(Y_p,C^q(\mathbb Q_{Y_p}))$ and $K_{\mathbb C}^{p,q}=\bigoplus_{k+t=q}\Gamma(Y_p,C^t(\Omega^k_{Y_p}))$, for $p,q\ge0$, with $F^b$ given by $k\ge b$. These are the resolved global de Rham complexes, not the complex of global holomorphic forms. Godement pullback along each face is induced by pulling a germ collection at a point to the stalk over its image; the successive cokernels preserve these maps, so their composites obey the simplicial identities and preserve $F$. The constant inclusion $\mathbb Q\otimes\mathbb C\to\Omega^0$ gives the functorial rational comparison; on cohomology it is the scalar-extension comparison of [F4]. Exactness and acyclicity of the resolution show $H^q(K_{\mathbb C}^p)=H^q(Y_p;\mathbb C)$, with the holomorphic-degree image filtration, and $H^q(K_{\mathbb Q}^p)=H^q(Y_p;\mathbb Q)$. The compact Hodge theorem [F4] gives pure weight $q$ and Hodge-de Rham $E_1$ degeneration on each smooth projective component. The latter makes the actual internal differential $F$-strict: if $dx\in F^b$, degeneration lifts the leading lower-filtration class of $x$ to a cycle up to a higher-filtration term and a boundary; subtracting the cycle and boundary raises the preimage filtration without changing $dx$, and finite induction supplies a preimage in $F^b$, as in the strict correction of [F7]. Thus every level is an actual weight-zero rational Hodge complex. Each internal total diagonal is finite, and $F^{q+1}K^{p,q}=0$, so [F3] applies to its first-quadrant simple complex, giving the mixed Hodge structure and $E_1^{p,q}=H^q(Y_p;\mathbb Q)$, $E_2$ degeneration and $\operatorname{Gr}^W_qH^n(sK)=E_2^{n-q,q}$. The terms have $p=n-q\ge0$, so weights are at most $n$, and the finitely many terms on every total diagonal are finite-dimensional by [F4]. Descent [F2] identifies the rational simple cohomology naturally with $H^n(Y;\mathbb Q)$, carrying this structure. [F1, F2, F3, F4, F7, construct, algebra]

2.1 Identify the descended cohomology with ordinary singular cohomology of the analytic space $Y^{\mathrm{an}}$ [F6]. The space $Y^{\mathrm{an}}$ is compact: $Y_0\to Y$ is proper and surjective and $Y_0$ is smooth projective, so $Y_0^{\mathrm{an}}$ is compact by [F4] and its image under the continuous surjection $Y_0^{\mathrm{an}}\to Y^{\mathrm{an}}$ is all of the compact space $Y^{\mathrm{an}}$; it is Hausdorff and second-countable in the analytic topology [F6]. For the local contractibility hypothesis of [F6], cover $Y$ by finitely many affine charts, each quasi-projective, and apply the triangulation theorem and the conical-star lemma of [F6] chartwise: at a point in the relative interior of a retained simplex $\sigma$, its open star is a neighbourhood with chart $\operatorname{relint}|\sigma|\times c_{<1}(L)$ taking the point to $(p,\mathrm{apex})$. Shrink the first factor to convex open neighbourhoods of $p$ and the second to cones of radius $\epsilon>0$. Compactness of $L$ gives uniform radial neighbourhoods at the apex, so these products form a neighbourhood basis; each is contractible by straight-line contraction of the first factor and radial contraction of the cone. The same basis restricted to any open subset proves its local contractibility. Metrizability is obtained from the cutoffs of [F6]: compactness and normality give finitely many chart pieces and continuous cutoff functions equal to one on each piece and supported in its affine chart, the products of the cutoffs with the coordinate functions give a continuous injection of the compact space into Hausdorff Euclidean space, and the induced metric has the analytic topology. The sheaf-singular comparison of [F6] then identifies $H^n(Y^{\mathrm{an}},\mathbb Q_{\mathrm{const}})\cong H^n_{\mathrm{sing}}(Y^{\mathrm{an}};\mathbb Q)$, and the mixed Hodge structure of step 1.1 is carried to $H^n(Y,\mathbb Q)$; the only choice used is the dependent choice for the partition of unity, supplied from AC by [F6]. [F6, step 1.1, construct, algebra]

3.1 Independence and functoriality. If $a':Y'_\bullet\to Y$ is a second split proper hypercover with smooth projective terms, [F1] supplies a third such hypercover dominating both; the two refinements give filtered comparison maps between the corresponding cosimplicial systems and hence morphisms of the mixed Hodge complexes of step 1.1, and by [F2] both simple complexes compute the constant-sheaf cohomology of $Y$, so the induced maps on $H^n(Y,\mathbb Q)$ are the identity; strictness [F5] upgrades this to an isomorphism of mixed Hodge structures, so the structure is independent of the diagram. A morphism $g:Y\to Y'$ of proper varieties lifts, after refining the source hypercover, to a morphism of the chosen hypercovers [F1], pullback of holomorphic forms along it is a morphism of the cosimplicial mixed Hodge complexes compatible with the comparisons, and independence of the hypercovers makes the induced map $g^*:H^n(Y',\mathbb Q)\to H^n(Y,\mathbb Q)$ well defined and compatible with identities and composition. [F1, F2, F5, step 1.1, step 2.1, construct]

3.2 (The smooth-open clause and the actual total map.) Let $g:Y\to U$ and choose the logarithmic comparison model on $X\supset U$ from [F7]. Define its pullback into the simple complex of step 1.1 to be supported in cosimplicial degree zero, using $g_0=ga_0:Y_0\to U$. Pullback of a logarithmic form is regular on $Y_0$: a boundary equation pulls back to a nowhere-zero holomorphic function, whose $d\log$ is regular. Apply the functorial Godement resolutions to obtain the internal chain map into $K_{\mathbb C}^{0,*}$ preserving holomorphic degree. Its first alternating face differential is zero, since $g_0d_0=g_0d_1$ on $Y_1$, so this degree-zero-supported map is an actual chain map into the simple total complex; no map into every positive cosimplicial degree is being implicitly summed. On the rational side the natural pullback from $Rj_*\mathbb Q_U$ along $jg_0$, with the augmentation comparison, gives the same degree-zero-supported map, and it is compatible with the logarithmic meridian comparison up to the permitted filtered homotopies. For weight indices $a<0$ the source pole filtration is zero; for $a\ge0$ the target $L_a$ is the whole first-quadrant simple complex, so the map preserves weights. It preserves $F$ by form degree. Thus it is a morphism of the mixed Hodge complexes, and descent identifies its cohomology map with the actual rational pullback $g^*:H^n(U;\mathbb Q)\to H^n(Y;\mathbb Q)$. The functoriality clause of [F3] makes this a mixed Hodge morphism. [F2, F3, F7, step 1.1, step 2.1, construct, algebra]

4.1 The class map. Let $h:Y\to X$ be proper with $X$ smooth projective of dimension $d$, so $Y^{\mathrm{an}}$ and $X^{\mathrm{an}}$ are compact and the Borel-Moore homology of $Y$ agrees with ordinary singular homology by [F8]. Give $H_i(Y,\mathbb Q)$ the dual of the mixed Hodge structure on $H^i(Y,\mathbb Q)$. For the dual filtrations in [[def-rational-mixed-hodge-structure]], finite-dimensional linear algebra identifies $\operatorname{Gr}^W_a(H^*)$ with $(\operatorname{Gr}^W_{-a}H)^*$; annihilator Hodge filtrations negate each pure type $(p,q)$ to $(-p,-q)$, so these pieces are pure of weight $a$ and the dual is a mixed Hodge structure. Its weights are at least $-i$. Transposing a filtration-preserving map preserves the annihilator filtrations, so dual pullbacks are mixed Hodge morphisms. The pushforward $h_*:H_i(Y,\mathbb Q)\to H_i(X,\mathbb Q)$ is dual, under the Kronecker pairings of [F8], to the pullback $h^*:H^i(X,\mathbb Q)\to H^i(Y,\mathbb Q)$, which is a mixed Hodge morphism by step 3.1; hence $h_*$ is a mixed Hodge morphism for the dual structures. Poincare duality for the compact oriented manifold $X^{\mathrm{an}}$ and the compatibility of cap product with the cup product and the trace [F8] identify $H_i(X,\mathbb Q)\cong H^{2d-i}(X,\mathbb Q)(d)$ as pure Hodge structures of weight $-i$, the fundamental class having type $(d,d)$ so that the Tate twist removes the shift. Composing the pushforward with this identification, the class map $H_i^{\mathrm{BM}}(Y,\mathbb Q)=H_i(Y,\mathbb Q)\to H^{2d-i}(X,\mathbb Q)(d)$ is a mixed Hodge morphism from a structure of weights at least $-i$ to the pure structure of weight $-i$, so by [F5] its image is a pure Hodge substructure of weight $-i$; untwisting, the image in $H^{2d-i}(X,\mathbb Q)$ is a pure Hodge substructure of weight $2d-i$. No smoothness of $Y$ was used. [F5, F8, step 1.1, step 3.1, algebra]

5.1 Boundaries and Choice accounting. For $Y=\varnothing$ every group is zero with the trivial structure and all clauses are vacuous; the degree $n=0$ case has all weights equal to $0$, consistent with the bound; the reducible and mixed-dimensional case is handled componentwise in [F4]; and the case $Y=X$ with $d=\dim X$ reduces the class map to Poincare duality itself. The Axiom of Choice [F9] is inherited from [F1], [F2] and [F7], and is used exactly once more as dependent choice for the subordinate partition of unity in step 2.1, supplied by [F6]. [F1, F2, F6, F7, F9, given, cases: empty zero one degenerate endpoints] ∎

## Remarks

The construction uses the hyperresolution only through its descent and Hodge
theory; the mixed Hodge structure is independent of the chosen diagram by
strictness, which is why no splitting or additional structure is transported to
the cohomology. The singular comparison is local on affine charts because the
proper $Y$ need not be quasi-projective; the metrization is constructed rather
than assumed. The class map is stated for Borel-Moore homology, which agrees
with ordinary homology for the compact analytic space underlying a proper
variety; the identification makes the statement a theorem about ordinary
homology without requiring smoothness of $Y$.
