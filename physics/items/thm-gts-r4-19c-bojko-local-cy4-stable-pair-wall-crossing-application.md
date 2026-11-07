---
id: thm-gts-r4-19c-bojko-local-cy4-stable-pair-wall-crossing-application
kind: theorem
title: Bojko local-CY4 stable-pair wall-crossing application
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-hilbert-scheme-represents-projective-flat-families
  - lem-hilbert-family-vanishing-locus
  - lem-finite-over-projective-noetherian-affine-base-is-projective
  - lem-proper-flat-fp-cohomology-perfect-complex
  - lem-projective-coherent-cohomology-finite-and-vanishing
  - lem-eventual-global-generation-coherent-twists
  - thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group
  - thm-invariant-ring-finite-generation-and-affine-categorical-quotient
  - thm-linear-action-projective-git-quotient
  - thm-projective-bundle-formula-for-chow-groups
  - lem-chow-localization-and-vector-bundle-homotopy
  - lem-zero-section-gysin-and-excess-vector-subbundle
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
  - thm-external-product-and-whitney-sum-formulas-for-thom-classes
  - thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme
  - lem-finite-closed-immersion-derived-coinduction-adjunction
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-hilbert-scheme-represents-projective-flat-families: mathematical-premise
  lem-hilbert-family-vanishing-locus: mathematical-premise
  lem-finite-over-projective-noetherian-affine-base-is-projective: mathematical-premise
  lem-proper-flat-fp-cohomology-perfect-complex: mathematical-premise
  lem-projective-coherent-cohomology-finite-and-vanishing: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group: mathematical-premise
  thm-invariant-ring-finite-generation-and-affine-categorical-quotient: mathematical-premise
  thm-linear-action-projective-git-quotient: mathematical-premise
  thm-projective-bundle-formula-for-chow-groups: mathematical-premise
  lem-chow-localization-and-vector-bundle-homotopy: mathematical-premise
  lem-zero-section-gysin-and-excess-vector-subbundle: mathematical-premise
  thm-naturality-normalization-and-whitney-sum-for-chern-classes: mathematical-premise
  thm-external-product-and-whitney-sum-formulas-for-thom-classes: mathematical-premise
  thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme: mathematical-premise
  lem-finite-closed-immersion-derived-coinduction-adjunction: mathematical-premise
  thm-localisation-and-polynomial-extension-of-regular-rings: mathematical-premise
  thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Y. Bojko, Wall-crossing for Calabi–Yau fourfolds and quivers"
      url: "https://arxiv.org/pdf/2507.05922v3"
      locator: "Corollary 1.9, Example 6.8, Assumption 6.9, Example 7.6, Lemma 7.7, and §§8.1–8.5; local support, pair-master and capped-transport constructions supplied below."
    - title: "D. Joyce, Enumerative invariants and wall-crossing formulae in abelian categories"
      url: "https://arxiv.org/pdf/2111.04694"
      locator: "§§3.2 and 10.3–10.6; finite word transport and capped flag initialization reconstructed below. Reading limits are retained in the authoring receipt."
---

## Statement

Let $Y$ be a smooth quasi-projective threefold with a torus $T$ action such that the fixed locus $Y^T$ and the reduced closure $C_S$ of the one-dimensional rational orbit closures are projective. Assume the weights of $K_Y$ along $Y^T$ are nowhere zero; for each one-dimensional rational orbit closure, with endpoint weights $\lambda_0,\lambda_\infty$ taken modulo the orbit stabilizer as in Lemma 7.7, require that $\lambda_0\ge\lambda_\infty$ implies $\lambda_0<0$ or $\lambda_\infty>0$. Put $X=\operatorname{Tot}(K_Y)$ and fix a compactly supported curve class $\beta\in H^*_{cs}(X)$ and integer $m$. Lemma 7.7 then supplies a closed projective subscheme supporting the source's equivariant zero-dimensional sheaves and $\sigma^P_{1/2}$-semistable pairs. For the source abelian category from Example 6.8, Corollary 1.9 asserts, for compatible choices of orientations,
$
\sum_{m\in\mathbb Z}[DT_{\beta,m}]^{\rm vir}q^m
=\exp\!\left\{\sum_{n>0}\langle\mathcal M_{np},-\rangle q^n\right\}\sum_{m_0\in\mathbb Z}[PT_{\beta,m_0}]^{\rm vir}q^{m_0}.
$
Here $p$ is the Poincaré dual of a point, $\langle\mathcal M_{np},-\rangle$ is the source Lie-algebra action of the invariants of zero-dimensional sheaves defined by (1.6), $DT_{\beta,m}$ parametrizes pairs $\mathcal O_X\twoheadrightarrow F$ with one-dimensional $F$ and $\operatorname{ch}(F)=\beta$, and $PT_{\beta,m_0}$ parametrizes pairs $\mathcal O_X\to F$ with pure one-dimensional $F$, zero-dimensional cokernel and $\operatorname{ch}(F)=\beta$. The virtual classes come from the stated traceless obstruction theories of $I=\{\mathcal O_X\to F\}$. This is a local CY4 statement and is distinct from the projective CY3 PT virtual-class theorem.

## Facts & Assumptions

**Given:** the exact $Y,T,X,\beta,m$ and weight/support hypotheses in the Statement, the source conventions for its trace-free virtual classes, and compatible orientations. We work over $\mathbb C$ with rational localized equivariant homology. AC and DC are used only through the Hilbert, finite-cohomology and reductive-quotient suppliers below; finite filtrations and the finite word calculations use no additional choice principle.

[F1] The choice principles are [[def-axiom-of-choice]] and [[def-dependent-choice]]. The projective all-test Hilbert construction, entire-map vanishing locus and finite-over-projective projectivity are [[thm-hilbert-scheme-represents-projective-flat-families]], [[lem-hilbert-family-vanishing-locus]] and [[lem-finite-over-projective-noetherian-affine-base-is-projective]]. A coherent Quot construction is proved below from these results.

[F2] Uniform generation and higher-cohomology vanishing on the bounded projective families use [[lem-eventual-global-generation-coherent-twists]] and [[lem-projective-coherent-cohomology-finite-and-vanishing]]. Their flat-family base-change and finite projective cohomology complexes are [[lem-proper-flat-fp-cohomology-perfect-complex]].

[F3] Reductive invariants are exact and their affine quotients are finitely generated, categorical and have unique closed orbits in their fibres, by [[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]] and [[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]]. The invariant-section quotient gluing is [[thm-linear-action-projective-git-quotient]]. Its Statement does not include a numerical criterion; the product-general-linear numerical criterion used here is proved below by the DVR/Smith calculation.

[F4] The cycle operations used in the supported comparison are [[thm-projective-bundle-formula-for-chow-groups]], [[lem-chow-localization-and-vector-bundle-homotopy]] and [[lem-zero-section-gysin-and-excess-vector-subbundle]]. Chern and Thom multiplicativity, with their ordered orientation signs, are [[thm-naturality-normalization-and-whitney-sum-for-chern-classes]] and [[thm-external-product-and-whitney-sum-formulas-for-thom-classes]]. Equivariant operations below are formed on finite-dimensional full-rank approximations.

[F5] The trace pairing is obtained from [[thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]] and the finite-map adjunction [[lem-finite-closed-immersion-derived-coinduction-adjunction]], using the local Koszul calculation below. The local finite resolutions on smooth charts use [[thm-localisation-and-polynomial-extension-of-regular-rings]] and [[thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective]]. No CY3 virtual-class theorem is a premise.


## Proof

**Proof technique:** construct support and the actual rank-one pair/flag masters, derive their oriented quadratic localization and capped transport, and specialize the finite ordered transport to the point action.

1.1 **Category, finite sector and framing data.** An object of the source abelian triple category is $(V,F,s:V\otimes\mathcal O_X\to F)$, with $V$ finite-dimensional and $F$ a compactly supported coherent sheaf of dimension at most one. Morphisms are pairs of linear and sheaf maps commuting with $s$; kernels and cokernels are componentwise. In the coefficient under consideration $\dim V\le1$. Write its charge $(d_s,\gamma,n)$, where $d_s=\dim V$, $\gamma$ is its effective one-cycle class and $n=\chi(F)$. A point charge is $(0,0,l)$ with $l>0$. [F1, F2, F3, F4, F5, algebra]

2.1 For the source path the phase of a source-one object is $1/2$, of a source-zero object with nonzero curve class is $-1/2$, and of a nonzero source-zero point sheaf is $1-t$. Semistability means that the phase of every nonzero proper subobject is at most the phase of its complementary quotient. Thus only the source-one/point cluster changes order at $t=1/2$. [F1, F2, F3, F4, F5, algebra, step 1.1]

3.1 On the bounded families constructed below choose one sufficiently positive divisor pulled back from $Y$. The exact framing functor is the corresponding degree-zero derived section bundle, together with the fixed finite source-vector summands in the pair category. Higher cohomology vanishes on the whole bounded family, so its ranks are positive and additive on the exact sequences used here. Its endomorphism action is faithful by evaluation. Write its rank as $f_\alpha>0$. A flag is a chain of finite locally free vector spaces mapping into this framing bundle; its full dimensions are $(1,2,\ldots,f_\alpha)$. The enhanced decoration adds a line $V_0$, maps $a:V_1\to V_0$ and $b:V_l\to V_0$, and the relation $b\rho_{l-1}=0$. [F1, F2, F3, F4, F5, algebra, step 2.1]

4.1 For an old exact critical class $\alpha$ and auxiliary dimension vector $e$, use an additive numerator $s\lambda(\alpha)+\mu\cdot e$, divided by a positive additive old rank $r(\alpha)$. For old class zero the phase is $+\infty$ if the numerator is positive and $-\infty$ otherwise. The coefficients $\mu_1\gg\cdots\gg\mu_N>0$ are rational generic hierarchical weights; the enhanced target line has a sufficiently small negative coefficient. The finite bounds proved below make all these choices simultaneous. At a fixed total class the same semistability is expressed by the additive zero-total functional $\theta=s\lambda+\mu\cdot e-c r$, where $c$ is the total slope. The strictly positive additive size $\nu=r+\sum e_i$ permits the ordinary slope $\theta/\nu$ for stable reduction, including pure auxiliary factors. [F1, F2, F3, F4, F5, algebra, step 3.1]

5.1 **Uniform projective support and the lower Euler bound.** Put X=Tot(K_Y), and let K be the reduced closed union of Y^T and C_S inside its zero section. The original assumptions make K projective. A T-equivariant zero-dimensional sheaf has finite invariant support. A connected torus acts trivially on a finite set, so every support point belongs to X^T. The nonzero K_Y weights on Y^T imply X^T equals the zero section over Y^T. Thus all these sheaves are set-theoretically supported on K. [F1, F2, F3, F4, F5, algebra, step 4.1]

6.1 Let D be a proper invariant one-dimensional subscheme of X. Because π:X→Y is affine, its restriction to D is proper and affine, hence finite. For an irreducible component Γ of D_red, the reduced image C in Y is therefore a proper invariant curve. If the torus acts trivially on C, its finite generic fibres are finite invariant sets. They must consist of fixed points, so the fibre coordinate of Γ is zero by the nonzero-weight assumption. If C is a point, an irreducible proper positive-dimensional subvariety cannot lie in the affine line π^{-1}(C); this case does not occur. [F1, F2, F3, F4, F5, algebra, step 5.1]

7.1 Otherwise C is the closure of a one-dimensional torus orbit and its normalization is P¹. Normalize C and then Γ after base change; this gives a finite map of projective curves over P¹. The fibre coordinate is a section of the pullback of L=ν^*(K_Y|C). Its characteristic polynomial on the finite pushforward of the normalization is monic, with coefficients in H⁰(P¹,L^i). This pushforward is locally free because a finite torsion-free module over a smooth curve is locally free. The characteristic coefficients are invariant because multiplication by the tautological coordinate is an equivariant L-valued endomorphism. If the connected orbit stabilizer acts nontrivially on L^i, it already excludes invariant sections in that power. Otherwise the action on that power descends to the effective one-dimensional quotient torus, and its endpoint weights are those stipulated in the original statement, multiplied by i. Finite stabilizer characters can only exclude additional invariant sections and cause no exception to the argument. [F1, F2, F3, F4, F5, algebra, step 6.1]

8.1 If deg L<0, none of those H⁰ spaces has a nonzero section. If deg L≥0, the weights of H⁰(P¹,L^i) form the arithmetic progression between iλ_0 and iλ_∞. The source endpoint assumption says these weights are all strictly negative or all strictly positive; in particular none is zero. Thus every invariant characteristic coefficient vanishes in either case. Cayley–Hamilton gives t^e=0 for the fibre-coordinate endomorphism, where e is the finite degree. On the reduced normalization t=0, so Γ is contained in the zero section. Its image belongs to C_S. This proves D_red⊂K for every such D, without asserting that the whole Y is projective. [F1, F2, F3, F4, F5, algebra, step 7.1]

9.1 Choose one projective compactification of the quasi-projective X and an embedding into projective space. Let d>0 be the degree of a pure one-dimensional closed subscheme Z, measured in that embedding. Since Z is proper in X it is also closed in the compactification. Then. [F1, F2, F3, F4, F5, algebra, step 8.1]

10.1 χ(O_Z) ≥ d(3-d)/2.                             (H1). [F1, F2, F3, F4, F5, algebra, step 9.1]

11.1 Here is a Hilbert-function proof valid also for nonreduced pure curves. Let R be the homogeneous coordinate ring and choose a general linear form ℓ avoiding all its associated primes. Purity excludes embedded point primes, so multiplication by ℓ is injective. The saturated projective hyperplane section has length d; the degree-k piece of R/(ℓ) surjects onto that of its saturated coordinate ring, hence its dimension is at least the hyperplane-section Hilbert function. [F1, F2, F3, F4, F5, algebra, step 10.1]

12.1 For any length-d subscheme W of projective space, its Hilbert function satisfies h_W(k)≥min(d,k+1). To see this, choose a linear form nonvanishing on W and use it to dehomogenize. In its length-d coordinate algebra, let F_k be the span of monomials of degree at most k in the affine coordinate functions. Starting with dim F_0=1, every proper F_k grows at the next step: if F_{k+1}=F_k, multiplication by every coordinate function preserves F_k, so it contains the whole algebra generated by 1, contradiction. This proves the bound. [F1, F2, F3, F4, F5, algebra, step 11.1]

13.1 The exact multiplication sequence gives dim R_k≥1+sum_{i=1}^k min(d,i+1). For k sufficiently large the left side is dk+χ(O_Z), while the right side is dk+d(3-d)/2. This proves H1. No smoothness, reducedness or connectedness of Z was used. [F1, F2, F3, F4, F5, algebra, step 12.1]

14.1 If H is a pure one-dimensional sheaf of degree d whose reduced support lies in K, then. [F1, F2, F3, F4, F5, algebra, step 13.1]

15.1 I_K^d H=0.                                    (H2). [F1, F2, F3, F4, F5, algebra, step 14.1]

16.1 At each generic point η of a support component, H_η has finite length m_η. Its length is at most d, since d is the sum of these lengths times the positive integral degrees of the reduced components. The ideal I_K lies in the maximal ideal of the zero-dimensional local support ring there, so its d-th power annihilates H_η. Thus I_K^d H has zero-dimensional support. It is a subsheaf of the pure H and therefore vanishes. This supplies a global ideal-power bound; it does not assume that a generic thickness bound automatically holds at embedded points. [F1, F2, F3, F4, F5, algebra, step 15.1]

17.1 Similarly, if H is zero-dimensional of length l with reduced support in K, then I_K^l H=0 by the finite length filtration. For an extension of two sheaves annihilated by I_K^a and I_K^b, the middle sheaf is annihilated by I_K^{a+b}, as follows by first mapping into the quotient and then into the subobject. [F1, F2, F3, F4, F5, algebra, step 16.1]

18.1 A central-wall pair in Example 7.6 has a section with zero-dimensional cokernel and gives. [F1, F2, F3, F4, F5, algebra, step 17.1]

19.1 0→O_D→F→Q→0, 0→P→O_D→O_Z→0,. [F1, F2, F3, F4, F5, algebra, step 18.1]

20.1 where P is the maximal zero-dimensional ideal subsheaf of O_D, Q is zero-dimensional and O_Z=O_D/P is pure one-dimensional. P is an ideal because multiplication preserves the maximal zero-dimensional subsheaf. The cycle degree of Z equals the fixed degree d of F. Fix n=χ(F), the source zero-dimensional charge. Additivity and H1 give. [F1, F2, F3, F4, F5, algebra, step 19.1]

21.1 length(P)+length(Q)=n-χ(O_Z) ≤ n-d(3-d)/2 =: L. [F1, F2, F3, F4, F5, algebra, step 20.1]

22.1 For a nonempty pair locus L is a nonnegative integer. Equivariance makes the supports of P,Q fixed finite sets, hence contained in K. By H2 and the extension calculation,. [F1, F2, F3, F4, F5, algebra, step 21.1]

23.1 I_K^{d+L} F=0.                                (H3). [F1, F2, F3, F4, F5, algebra, step 22.1]

24.1 Thus S=V(I_K^N), with N=max(1,d+max(0,L)), supports every pair of the fixed class scheme-theoretically. This S is a finite-type nilpotent thickening of projective K; it is proper because properness is unchanged by reduction, and projective because it is quasi-projective and proper. For the zero-dimensional sector of fixed length l use N=max(1,l), or enlarge N to cover all finitely bounded point charges in the fixed total pair class. This proves the exact uniform projective support needed for the original local-pair application. [F1, F2, F3, F4, F5, algebra, step 23.1]

25.1 **Projective Quot parameters on all tests.** Let $S$ be a projective scheme over a Noetherian affine base and $E$ a coherent sheaf on $S$. Form the finite square-zero scheme $W=\operatorname{Spec}_S(\mathcal O_S\oplus E)$, with $E^2=0$. It is projective by [F1]. A quotient $E\twoheadrightarrow Q$ with kernel $K$ defines the ideal $0\oplus K$ of $\mathcal O_W$ and hence a closed subscheme $Z\subset W$ containing the canonical $S\subset W$. Conversely such an intermediate subscheme has ideal contained in $E$, giving exactly $K$ and the quotient $Q=E/K$. These constructions are inverse on every test scheme, including nonreduced tests. [F1, F2, F3, F4, F5, algebra, step 24.1]

26.1 In the Hilbert scheme of $W$ with polynomial $P_{\mathcal O_S}+P_Q$, impose $S\subset Z$ by vanishing of the universal ideal map to $\mathcal O_S$. The all-test vanishing locus of [F1] is closed. On that locus $\mathcal O_Z=\mathcal O_S\oplus Q$ as modules, so flatness and the prescribed polynomial are equivalent to flatness and the prescribed polynomial for $Q$. This closed projective Hilbert locus therefore represents the actual Quot functor and has its universal quotient. The same construction applies to the coherent old family $E_0$ over a DVR and to every required base change. [F1, F2, F3, F4, F5, algebra, step 25.1]

27.1 On a finite product of these Quot parameters and finite vector-space Grassmannians, impose preservation of every named source, flag, Higgs and covector map by the universal kernels. Source-to-sheaf maps are kept as actual maps $V\otimes\mathcal O(-D)\to E_0$. The target quotient is base-flat, so [F1]'s entire-map vanishing lemma makes these conditions closed on all tests. Equivalently, [F2] gives one high twist whose universal kernel and target have locally free base-change section bundles and generated evaluation; each condition is the zero of the corresponding finite matrix. This produces the proper closed incidence parameter used in formal algebraization. [F1, F2, F3, F4, F5, algebra, step 26.1]

28.1 **Critical morphisms, old models and terminating stable reduction.** Fix source rank at most one and curve class β>0 at t=1/2. Every critical decomposition of a total (1,β,n) consists of one central pair P=(O_X→F), with zero-dimensional cokernel and the WHOLE curve class β, plus zero-dimensional source-zero sheaves. No source-zero curve sheaf has phase 1/2. Thus the relevant old factors have either type P_β or type Q_0. [F1, F2, F3, F4, F5, algebra, step 27.1]

29.1 All kernels, images and cokernels of morphisms BETWEEN these factors remain in this critical collection (with zero objects omitted). Point-to-point maps are ordinary maps of finite-length sheaves. A map Q_0→P_β has point image and quotient still has its section with point cokernel. A map P_β→Q_0 kills the section and factors through its point cokernel, so its kernel is again a central pair of curve class β. [F1, F2, F3, F4, F5, algebra, step 28.1]

30.1 For a map P_β→P'_β, consider its scalar on the one-dimensional source. If it is zero, the sheaf map again factors through the point cokernel of the first section, and all kernel/image/cokernel descriptions follow as above. If it is nonzero, the sheaf map is generically surjective on every component of F': its image contains the section, which generates F' away from finitely many points. The curve cycle of its kernel is therefore β-β=0. A one-dimensional coherent sheaf has a nonzero effective cycle with positive degree in a fixed projective embedding, so that kernel is zero-dimensional. The cokernel is also zero-dimensional. The image is a central pair of curve class β. Thus these actual critical maps have admissible kernels, images and cokernels. [F1, F2, F3, F4, F5, algebra, step 29.1]

31.1 The argument applies to the old parts of auxiliary flag morphisms. Once both auxiliary semistable factors have the same additive auxiliary slope, the ordinary additive numerator/rank argument then forces their kernels, images and cokernels to have that slope as well. Thus the standard semistable image comparison is valid in this restricted sector. It need not hold for morphisms between rank-one pairs of DIFFERENT effective curve classes, which never occur together in this critical decomposition. [F1, F2, F3, F4, F5, algebra, step 30.1]

32.1 Let R be a complete DVR, K its fraction field, and let a generic central pair of the fixed class be given. The uniform-support construction supplies a fixed projective thickening S supporting all graph-fixed objects of that class. Write its exact sequence as. [F1, F2, F3, F4, F5, algebra, step 31.1]

33.1 0→O_DK→F_K→Q_K→0. [F1, F2, F3, F4, F5, algebra, step 32.1]

34.1 The proper Hilbert scheme of S extends D_K to a flat subscheme D_R with its fixed Hilbert polynomial. Extend Q_K by choosing finitely many generic generators after a twist and using the proper Quot scheme of the corresponding finite direct sum on S. The extended Q_R is R-flat of the same zero-dimensional length. These steps preserve a commuting torus action: choose eigenvector generators and take the proper closed fixed loci of the Hilbert and Quot parameter spaces. A finite extension of the DVR is allowed when necessary to realize the chosen moduli point. [F1, F2, F3, F4, F5, algebra, step 33.1]

35.1 The extension class ξ_K lies in Ext¹(Q_K,O_DK). Localization at the uniformizer commutes with Ext on this proper finite-presentation support; one can check it on a finite Čech resolution by finite locally free resolutions in the smooth ambient space. Thus t^Nξ_K lifts to Ext¹(Q_R,O_DR) for sufficiently large N. Form the corresponding extension F_R. It is R-flat and the canonical section O→O_DR→F_R has zero-dimensional cokernel Q_R, including in the special fibre. Its generic pair is isomorphic to the original pair: pushing the extension along scalar t^N on O_D and then dividing the whole generic extension isomorphism by t^N makes its restriction to the section the identity. No fixed quotient identification with Q_K is required in pair moduli. [F1, F2, F3, F4, F5, algebra, step 34.1]

36.1 For equivariant extensions, take the invariant part of the relative Ext module. The torus is linearly reductive, so taking invariants is exact; equivalently lift the invariant cochain and average in its finite-dimensional rational submodule. Clearing a uniformizer denominator preserves invariance. This constructs the graph-fixed central model as well. It does not assert that its auxiliary framing is stable yet. [F1, F2, F3, F4, F5, algebra, step 35.1]

37.1 Let d be the curve degree in the fixed projective embedding and b=d(3-d)/2. Every central pair factor has Euler characteristic at least b, by the uniform-support proof. Thus in a decomposition of (1,β,n), the combined point-factor length is at most n-b. There are only finitely many old Hilbert polynomials and point charges in all critical filtrations. Add the fixed finite auxiliary dimension box. This gives a finite set of auxiliary numerical slopes and ranks. [F1, F2, F3, F4, F5, algebra, step 36.1]

38.1 For the old critical factors one may use the positive additive rank r(d_source,β',m)=M d_source+m, where M is chosen so that M+b>0. Point factors have m>0, and rank-one factors have m≥b, so this rank is positive on all nonzero old factors occurring here. It is additive on the relevant exact triples. This choice is for the reduction proof; it does not alter source chamber stability or assert a rank on all unrelated curve classes. [F1, F2, F3, F4, F5, algebra, step 37.1]

39.1 The boundedness needed for a uniform framing twist is also concrete. The image subscheme D has a degree-d Hilbert polynomial with χ(O_D) in a finite interval [b,n], so the possible Hilbert schemes form a finite projective union. Q has bounded length. Extensions of these bounded families are bounded: on finite affine charts of their proper parameter spaces, the relative Ext¹ module is finite and has a finite presentation, so affine spaces of finitely many extension parameters cover all extension classes. The same argument applies after base change and includes nilpotents. Uniform Serre generation and vanishing therefore hold after one sufficiently positive twist for every central pair in this sector. In particular all subsequent elementary modifications remain in the SAME framing-concentration open after that single choice. [F1, F2, F3, F4, F5, algebra, step 38.1]

40.1 An integral auxiliary flag/covector datum extends over the old model inside the relative projective flag variety and the projective covector incidence variety, as constructed in the relative flag/covector incidence construction. The enhanced relation is closed and persists. For this FIXED total class let c be its source auxiliary slope and put θ=λ+µ·e-c r, an additive functional vanishing on the total. On critical subobjects the source semistability condition is exactly θ≤0, including pure-frame subobjects, whose positive or negative infinite phase is exactly the sign of θ. Use the positive additive size ν=r+sum e_i and the ordinary ratio θ/ν to run reduction. Its semistability at total θ=0 is the SAME condition; we do not need its HN slopes to equal the source's infinite-phase slopes. If the special fibre is unstable, take its maximal θ/ν destabilizer B and quotient G, maximizing ν among maximal-slope choices. Elementary modification E'=ker(E_R→G_k) has special exact sequence 0→G→E'_k→B→0 and preserves the old central condition by extension closure. [F1, F2, F3, F4, F5, algebra, step 39.1]

41.1 the critical-morphism calculation above supplies exactly the image admissibility needed when comparing a new maximal destabilizer B' with B. Its image I in B and kernel K in G are actual critical objects. Every subobject of G has slope strictly below that of B: otherwise its inverse image contradicts maximal slope, or maximal size among equal-slope subobjects. Since B is semistable, I has slope at most that of B. Additive numerator/rank gives a nonincreasing sequence of maximal destabilizing slopes; at equal slope K=0. Then size(B')≤size(B), with equality forcing I=B and hence B'→B an isomorphism. Here size is any strictly positive additive old rank plus the sum of auxiliary dimensions. Thus the lexicographically ordered (slope,size) sequence is nonincreasing in a finite set and eventually constant. At that stage the special sequence 0→G_i→E_(i+1),k→B_i→0 splits by B_(i+1)→B_i, and its projection restricts to an isomorphism G_i→G_(i+1). [F1, F2, F3, F4, F5, algebra, step 40.1]

42.1 The strict average assertion uses the newly specified ordinary ratio θ/ν with strictly positive additive denominator. It is therefore valid for pure-frame factors too. This constructs a reduction function for the fixed semistability condition. [F1, F2, F3, F4, F5, algebra, step 41.1]

43.1 Renumber at the constant stage. Set G_i=E_i/E_(i+1), viewed as a special-fibre object. Multiplication by t induces G_i→G_(i+1). In the special decomposition just obtained this is the inclusion of G_i into E_(i+1),k followed by its quotient to G_(i+1), hence is an isomorphism. Iterating these graded isomorphisms gives. [F1, F2, F3, F4, F5, algebra, step 42.1]

44.1 E_i=t^i E_0+E_j  for 0≤i≤j. [F1, F2, F3, F4, F5, algebra, step 43.1]

45.1 For example t^i:E_0/E_1→E_i/E_(i+1) is surjective; successively correct a lift at levels i+1,…,j-1 to obtain the displayed equality. Let M_j=E_0/E_j. Its filtration is therefore t^iM_j=E_i/E_j, and multiplication by t is an isomorphism between all successive associated graded pieces before the last one. Reading the first nonzero graded term proves. [F1, F2, F3, F4, F5, algebra, step 44.1]

46.1 ker(t^l:M_j→M_j)=t^(j-l)M_j  for 1≤l≤j. [F1, F2, F3, F4, F5, algebra, step 45.1]

47.1 Consequently M_j is flat over R/(t^j): the displayed equalities make Tor₁(R/(t^l),M_j) zero for every cyclic quotient, and all finitely generated ideals of this principal Artin ring are principal. This verifies the flatness criterion directly and needs no freeness assumption on the old sheaf. The same calculation applies vertexwise to the finite auxiliary spaces. Also M_(j+1)⊗R/(t^j)=M_j, since E_j=t^jE_0+E_(j+1). These are COMPATIBLE QUOTIENT MAPS from E_0, including every arrow and its relation, not merely isomorphic target modules. [F1, F2, F3, F4, F5, algebra, step 46.1]

48.1 The proper incidence parameter constructed in the closed incidence construction above represents precisely these old-sheaf and finite-vector quotients with all arrow factorizations. Briefly take the projective Quot scheme of the fixed coherent sheaf E_0 and the product of the finite vector Grassmannians; impose each named arrow's preservation of the universal kernels. This is closed: after one uniform high twist its kernel-to-quotient maps become maps between finite locally free pushforward bundles, whose vanishing is a finite set of matrix equations. Arrow maps into the old sheaf are encoded as V⊗O(-D)→E_0, so no unjustified framing-base-change equality is needed for arbitrary parameter points. The proper Quot used here can itself be constructed as the closed factorization locus in the square-zero Hilbert presentation already used for the local pair-moduli supplier. [F1, F2, F3, F4, F5, algebra, step 47.1]

49.1 All compatible Artin points have the same closed point. Choose one affine open around it in this incidence scheme; every Artin point factors through that open because its source has one underlying point. Completeness R=lim R/(t^j) gives an actual ring homomorphism from the coordinate algebra to R. Pull back the universal quotient to obtain an actual flat quotient E_0→G_R. The central-pair condition is open, as is the finite-dimension injection condition where relevant, and holds on the special fibre G; hence the generic quotient and its kernel are admissible critical auxiliary objects. Their numerical slopes are the stabilized ones, so the kernel destabilizes the original generic object. This contradicts generic stability and proves termination. [F1, F2, F3, F4, F5, algebra, step 48.1]

50.1 Maximal destabilizers are unique: the sum of any two maximal-phase subobjects has that phase, and maximal size forces equality. The relevant intersections and sums remain critical by the critical-morphism calculation above, since they are kernels/images of the actual maps into and out of E. Thus all modifications are equivariant for a commuting graph torus. The incidence parameter is equivariant as well, and its fixed locus is closed; the algebraized quotient remains graph-fixed. This proves the required graph-fixed valuative existence. [F1, F2, F3, F4, F5, algebra, step 49.1]

51.1 For the local spectral realization perform the following section-space presentation on Y, using G=π_*F and its Higgs map φ:G→G⊗K_Y. Projection is finite on the proper sheaf support, so it preserves exactness, Euler characteristic and the cycle degree measured by an ample line on a projective compactification of Y. The bounded image subschemes and bounded point extensions of the boundedness calculation above give bounded underlying G; the additional Higgs maps form finite-type Hom parameters over that bounded family. Extend the finitely many fixed line bundles to the chosen compactification. The Higgs map and all framing arrows are encoded on sufficiently high section spaces by their multiplied sections and their relations. Preserving these named maps in a subrepresentation is exactly preserving the Higgs action and the framing in a subsheaf. Thus this construction keeps the framing divisors pulled back from Y, as required by the global spectral obstruction construction below; it does not change to an unrelated ample divisor on X. In the next display write F for this underlying coherent sheaf on the chosen projective parameter base to keep the presentation notation short. [F1, F2, F3, F4, F5, algebra, step 50.1]

52.1 The bounded family admits uniform twists m<n with the following explicit presentation. Every F(m) is generated with higher cohomology zero. If K_F is the kernel of H⁰(F(m))⊗O(-m)→F, choose n large enough that every K_F(n) is generated with higher cohomology zero. Then. [F1, F2, F3, F4, F5, algebra, step 51.1]

53.1 H⁰(K_F(n))=ker(H⁰(F(m))⊗H⁰(O(n-m))→H⁰(F(n))),. [F1, F2, F3, F4, F5, algebra, step 52.1]

54.1 and F is the cokernel of the evaluation map from that kernel tensored with O(-n) to H⁰(F(m))⊗O(-m). This gives a finite Kronecker-quiver presentation using the two section spaces, its multiplication map, the one-dimensional original source, and auxiliary vertices. On the open of surjective multiplication the displayed kernel is a vector bundle; the locus where its evaluation cokernel is flat of the required Hilbert polynomial and the section maps are the asserted isomorphisms is the corresponding finite flattening/base-change stratum. It is locally closed. Conversely the evaluation formula reconstructs the coherent family on that stratum. The constructions are inverse on arbitrary bases and on morphisms, since a map preserving the multiplication kernel descends to its cokernel. Arrows from an auxiliary vertex to F are encoded by the finitely many multiplied sections in degree m; taking m high enough that O(m-D) is generated makes their sheaf-factorization condition equivalent to this finite matrix condition. Thus the parameter is a locally closed invariant subscheme of a finite representation space, with its explicit universal sheaf; no equivalence of ALL coherent sheaves with finite-dimensional modules is claimed. Its full-frame quotient is the actual stable moduli problem. [F1, F2, F3, F4, F5, algebra, step 53.1]

55.1 Here numerical stability has an honest linearization. Write d for the total curve degree and let d_s denote the original source dimension. The old central phase is detected by. [F1, F2, F3, F4, F5, algebra, step 54.1]

56.1 θ₀(d_s,F)=d d_s-deg(F). [F1, F2, F3, F4, F5, algebra, step 55.1]

57.1 For a subobject of a total source-one object, θ₀>0 means a source-one subobject missing a curve component, exactly the forbidden noncentral case; θ₀<0 means a source-zero curve subobject, below the central phase. Its zero cases are precisely points and source-one subobjects with the whole curve class. On those cases use the additive auxiliary functional ℓ=λ+µ·e-c r, where c is the total auxiliary slope and r may be chosen as the positive additive rank of the boundedness calculation above. Choose a large rational M and use Θ=Mθ₀+ℓ, with Θ(total)=0. It agrees with every critical comparison and makes all noncritical comparisons have the required old-phase sign. [F1, F2, F3, F4, F5, algebra, step 56.1]

58.1 This choice is uniform on the presentation. Subsheaves generated by section subspaces in the bounded parameter form a bounded family: they are images of the universal evaluation map over a finite product of Grassmannians, and its finite flattening strata have finitely many Hilbert polynomials. Thus only finitely many numerical comparisons must be preserved. For a linear polynomial P_F(t)=a_F t+b_F, the coefficients a_F,b_F are recovered by. [F1, F2, F3, F4, F5, algebra, step 57.1]

59.1 a_F=(P_F(n)-P_F(m))/(n-m), b_F=(nP_F(m)-mP_F(n))/(n-m). [F1, F2, F3, F4, F5, algebra, step 58.1]

60.1 Therefore Θ is a rational character of the finite product of section-space and vertex general linear groups; clear denominators. Increase M after fixing m,n so the coefficient of the degree-m section dimension is positive and that of degree-n is negative. The numerical subrepresentation test then reduces to the generated subsheaf test: for fixed degree-m subspace the maximal destabilizing choice takes the minimal degree-n space containing its multiplication image; regularity makes that space H⁰(F'(n)). Enlarging the degree-m subspace to all H⁰(F'(m)) only increases the weight, because its coefficient is positive. Thus a destabilizing presentation subrepresentation exists exactly when the corresponding coherent auxiliary subobject destabilizes. Extra intermediate degrees impose the already fixed multiplication relations and carry the corresponding zero or arbitrarily small lexicographic weights. This proves numerical equivalence rather than assuming a sheaf-moduli GIT criterion. [F1, F2, F3, F4, F5, algebra, step 59.1]

61.1 The product-general-linear Proj/Smith numerical quotient construction below therefore supplies a quasi-projective geometric quotient of this stable representation locus. On the no-strict-semistability auxiliary chambers it is exactly the stable pair/flag moduli space. Its normalized stabilizer is trivial: a nonzero morphism between two stable equal-slope objects has admissible kernel/image/cokernel by the critical-morphism calculation above and hence is an isomorphism; an endomorphism is scalar, and the normalized first line removes that scalar. The universal bundles descend by the explicit invariant-frame argument from the invariant-basis descent construction below. [F1, F2, F3, F4, F5, algebra, step 60.1]

62.1 The stable quotient is separated. For two DVR models isomorphic generically, multiply the generic isomorphism by the minimal uniformizer power which extends it nontrivially on the special fibre. Finite presentation and proper old support make the Hom module finite, so such a power exists. Its special map between stable equal-slope objects is an isomorphism by the admissible-image argument. Nakayama, flatness and the generic isomorphism then show the extended map is an isomorphism on the whole DVR. The same argument removes a putative boundary isomorphism and proves uniqueness in the valuative separatedness criterion. [F1, F2, F3, F4, F5, algebra, step 61.1]

63.1 the stabilized reduction above gives valuative existence for its graph-fixed locus. Finite type and separatedness therefore make that locus proper. It is quasi-projective, being a closed fixed locus in the quasi-projective quotient, hence projective. The GIT character line and its commuting torus linearization descend and are ample there. For any equivariant coherent sheaf, a sufficiently high ample twist is globally generated; its finite-dimensional section representation gives an equivariant vector-bundle surjection. This is the required equivariant resolution property. [F1, F2, F3, F4, F5, algebra, step 62.1]

64.1 **Product-general-linear numerical quotient and bundle descent.** For a finite quiver with finitely presented relations and fixed dimension vector $d$, let $R_d$ be its affine representation scheme and $G_d=\prod_v\operatorname{GL}(d_v)$. Fix an integral functional $\theta$ with $\theta(d)=0$, and set $\chi_\theta(g)=\prod_v\det(g_v)^{-\theta_v}$. The semistability convention is $\theta(\dim B)\le0$ for every subrepresentation $B$. All assertions on nilpotent structure use the exact Reynolds functor, not a replacement of the family by its reduced closed points. [F1, F2, F3, F4, F5, algebra, step 63.1]

65.1 Put χ_θ(g)=∏_v det(g_v)^{−θ_v} and. [F1, F2, F3, F4, F5, algebra, step 64.1]

66.1 S_θ=⊕_{n≥0} C[R_d]^{G_d,χ_θ^n},   A_d=C[R_d]^{G_d}. [F1, F2, F3, F4, F5, algebra, step 65.1]

67.1 It is the invariant ring of R_d×A1 with z transforming by χ_θ^{-1}, graded by z-degree. The affine finite-generation supplier, or its explicit Reynolds argument for a quotient of a polynomial algebra on a finite-dimensional generating submodule, proves S_θ finitely generated; (S_θ)_0=A_d is finitely generated too. Thus Q_d=Proj S_θ is finite type, separated and PROJECTIVE OVER Spec A_d. For this relative assertion take a sufficiently divisible Veronese and its finite degree-one generators, giving a closed immersion into projective space over A_d. No claim that Q_d is proper over C is made yet. [F1, F2, F3, F4, F5, algebra, step 66.1]

68.1 We prove that the semistable locus defined by positive semi-invariants is exactly the numerical locus. Suppose a subrepresentation B⊂E has θ(dim B)>0. Choose a one-parameter basis action of weight 1 on B and 0 on its complement at every vertex. The limit of this action on E exists, since every arrow preserves B. Its χ_θ-weight is −θ(B). A semi-invariant f of weight χ_θ^n would satisfy f(λ(t)E)=t^{−nθ(B)}f(E); regularity at t=0 forces f(E)=0. Hence a semi-invariant-semistable object is numerically semistable. [F1, F2, F3, F4, F5, algebra, step 67.1]

69.1 Conversely suppose every positive-degree semi-invariant vanishes at E. All invariants on R_d×A1 take the same values at (E,1) and (E,0). The actual affine categorical quotient supplier gives a common closed orbit in their orbit closures; since z=0 is closed and invariant, it has representative (E_0,0). Choose an integral curve in the closure of G_d(E,1) through that point and with generic point in the orbit; intersecting an affine presentation with generic linear slices and normalizing gives its DVR. The generic orbit point lifts to an element g(t)∈G_d(C((t))) after a finite field extension: the fibre of the orbit map is a nonempty finite-type scheme and has a closed point over a finite extension. Complete the DVR and replace its uniformizer after that finite extension. We have g(t)(E,1) extending to (E_0,0). [F1, F2, F3, F4, F5, algebra, step 68.1]

70.1 For each matrix g_v(t), Smith normal form over the DVR gives. [F1, F2, F3, F4, F5, algebra, step 69.1]

71.1 g_v(t)=u_v(t) diag(t^{a_vj}) v_v(t),  u_v,v_v∈GL(d_v,C[[t]]). [F1, F2, F3, F4, F5, algebra, step 70.1]

72.1 The left unit u(t)^{-1} preserves regularity. Thus λ(t)v(t)E is regular, where λ is the displayed diagonal subgroup. In every negative-weight matrix coordinate, regularity forces the constant term of v(t)E to vanish. Therefore λ(t)v(0)E has a limit as well. The z-coordinate has valuation Σ_{v,j}θ_v a_vj>0, because it tends to zero and the determinant unit factors have valuation zero. The limiting condition means every arrow sends a source weight into weights at least as large: the increasing weight spaces F^p form subrepresentations. Shift all vertex weights by one common constant; θ(d)=0 makes this immaterial. Then. [F1, F2, F3, F4, F5, algebra, step 71.1]

73.1 Σ_{v,j}θ_v a_vj = Σ_p θ(dim F^p)>0. [F1, F2, F3, F4, F5, algebra, step 72.1]

74.1 At least one proper F^p has positive θ, contradicting numerical semistability. This proves the converse. It is the needed product-GL numerical criterion, proved with a DVR/Smith calculation rather than importing a named criterion. [F1, F2, F3, F4, F5, algebra, step 73.1]

75.1 For a positive semi-invariant f, the chart R_f is affine and G-stable, and (C[R_f])^G=(S_θ[f^{-1}])_0. Indeed an invariant fraction g/f^k has numerator of exactly the corresponding semi-invariant weight; Reynolds averaging gives that weight numerator when necessary. Its affine good quotient is D_+(f). The charts glue exactly as in the read projective GIT proof: their overlap ratios are invariant, and their inverse images are R_f. This gives the actual good quotient R_d^{θ-ss}→Q_d, with a unique closed orbit in each fibre. These statements use scheme equations and graded algebras, not just a set of S-equivalence classes. [F1, F2, F3, F4, F5, algebra, step 74.1]

76.1 The category of θ-semistable representations with θ=0 is abelian and extension closed. For a morphism E→F, semistability gives θ(kernel)≤0 and θ(image)≤0, whereas additivity gives θ(image)=−θ(kernel)≥0. Hence both are zero; applying the same argument to all their subobjects proves their semistability, and the cokernel follows likewise. Finite vector-space dimension gives a finite composition series in this category. Its simple objects are precisely θ-stable modules. Each stable object has endomorphism algebra C: a nonzero endomorphism of a simple object is invertible; its complex minimal polynomial then forces it to be scalar. [F1, F2, F3, F4, F5, algebra, step 75.1]

77.1 A θ-Jordan–Hölder filtration degenerates E to the direct sum of its stable factors by scaling a splitting basis of that filtration. Every filtration term has θ=0, so the character of this subgroup is zero. All semi-invariants have the same nonzero-chart values in the limit; the limit stays semistable and in the same good-quotient fibre. Therefore, if E is the CLOSED orbit of its fibre, it is already isomorphic to the direct sum of those stable factors. This proves exactly the polystable factorization needed for coverage; no converse closed-orbit theorem is silently used. [F1, F2, F3, F4, F5, algebra, step 76.1]

78.1 For use with torus actions, a θ-stable module has closed orbit in the semistable locus. To check this without another numerical theorem, take any orbit-closure limit that is still semistable and a semi-invariant f nonzero there. In the DVR/Smith argument of §2 its character valuation is now zero. Since every proper filtration subobject of a stable object has strictly negative θ, the equality Σ_p θ(F^p)=0 forces the weight filtration to be trivial on its support. The diagonal subgroup is then the common scalar and acts trivially on the old representation. The limit is u(0)v(0)E, isomorphic to E. Thus stable orbits are closed; modulo the common scalar their stabilizers are trivial. The stable quotient is consequently the actual separated geometric stable open of Q_{δ'}. [F1, F2, F3, F4, F5, algebra, step 77.1]

79.1 For the normalized free stable action the tautological bundles descend explicitly. On an affine invariant chart a closed free orbit is isomorphic to $G_d$. Its equivariant vector bundle has invariant sections forming a basis, by transporting a fibre basis along $G_d$. Restriction of sections to the closed orbit is surjective; exact Reynolds averaging lifts that invariant basis to invariant sections on the chart. Their rank-drop locus is closed and invariant. Its quotient image is closed and omits the chosen orbit, so the lifted sections are a basis over a neighbourhood of that quotient point. Transition matrices between two invariant bases have invariant entries and descend through the sheaf of invariants. This proves descent of the tautological bundles, their character lines and all named maps. The same proof on the scheme coordinate algebras retains nilpotents. [F1, F2, F3, F4, F5, algebra, step 78.1]

80.1 **Actual point-sector projective masters.** Fix total length n>0. Suppose the relevant torus-fixed zero-dimensional sheaves have topological support in a fixed closed projective Z⊂X, as supplied in the stated scope by the local support lemma. Then I_Z^n F=0 for each such sheaf F: at each support point the descending I_Z-adic chain in a module of length≤n reaches zero, because equality of consecutive terms gives zero by Nakayama. Thus all such sheaves live on Z_n=V(I_Z^n). This is projective: it is proper as a nilpotent thickening of Z, and quasi-projective as a closed subscheme of the quasi-projective X; a proper quasi-projective scheme is projective by taking the closure of its projective immersion. [F1, F2, F3, F4, F5, algebra, step 79.1]

81.1 The following construction is on Z_n, not on an arbitrarily varying support. Torus-fixed families factor through it scheme-theoretically after passing to the reduction of their parameter space, which suffices for properness. Flatness detects I_Z^nF=0 from its geometric fibres by Nakayama. Nilpotent thickenings of finite-type separated moduli spaces do not change properness. [F1, F2, F3, F4, F5, algebra, step 80.1]

82.1 Choose a very ample H on Z_n and D=dim Z. Take M=nD+1 hyperplanes in sufficiently general position so that no D+1 meet Z. A point belongs to at most D of them, so a support with at most n points meets at most nD hyperplanes. Some hyperplane avoids the whole support. Therefore the finitely many affine opens U_i=Z_n\H_i cover every length-n sheaf in the stronger sense that each entire support lies in one U_i. The corresponding opens Sym^n(U_i) cover Sym^n(Z_n). [F1, F2, F3, F4, F5, algebra, step 81.1]

83.1 On U_i the line bundles O(kH) are trivial. A length-n sheaf is an n-dimensional module over the finitely presented commutative algebra A_i=O(U_i). Pick algebra generators and relations. Its actual representation scheme is the finite commuting-loop quiver scheme: matrices for those generators, the commuting relations, and the chosen algebra relations. A section from O(−kH) is an actual module vector. A finite-dimensional source V gives dim(V) such vectors. Auxiliary framing maps and flags are finite arrow matrices, and the covector master adds the actual sink line and its maps. Relations for the original source/auxiliary maps, when present, are finite polynomial matrix relations. The resulting chart is a finitely presented quiver representation scheme, not a replacement by a quiver having merely the same dimensions. [F1, F2, F3, F4, F5, algebra, step 82.1]

84.1 At the point-sector wall the old exact category consists of all pairs (V,F,s), with F zero-dimensional, so it is ABELIAN with componentwise kernels and cokernels. For total class (dim V,length F)=(1,n), set θ(d,l)=n d−l. On a proper decomposition there is at most one nonzero-source summand. Thus θ-positive versus θ-negative orders match exactly the positive-t versus negative-t pure-framing orders; no comparison between two positive-source summands can occur in a source-degree-one coefficient. At t>0, semistability says that s is surjective: a proper quotient with source degree0 destabilizes, and conversely surjectivity excludes every such quotient. Such a source-degree-one object is stable. At t<0 there is no mixed semistable object. Pure point sheaves remain semistable. [F1, F2, F3, F4, F5, algebra, step 83.1]

85.1 All auxiliary stability functions needed in the finite flag/master construction have numerator sθ+µ·e and denominator d+l, with the specified infinite-phase convention on purely auxiliary objects. For a FIXED total dimension vector the inequality for a subrepresentation is equivalent, after cross multiplication, to an integral linear inequality on its vertex dimensions (clear rational denominators). Purely auxiliary subobjects give the same sign inequalities. Consequently these actual finite charts are King semistable/stable loci. Choose the generic hierarchical rational auxiliary weights so that semistable=stable at the ordinary endpoints; enhanced masters use the same allowed generic perturbation at their fixed total dimension. The finite numerical choices are those of the already reconstructed flag stability argument. [F1, F2, F3, F4, F5, algebra, step 84.1]

86.1 This is a valid linearization because the wall category here is abelian and θ is explicitly additive in (d,l). It does NOT apply the disproved arbitrary-weak King separator. [F1, F2, F3, F4, F5, algebra, step 85.1]

87.1 Every new frame arrow points in an acyclic direction, through sources/flags toward the module or toward the covector sink. There is no oriented cycle containing a new framing vertex. Choose a one-parameter scalar change of bases with old-module weight0 and all new-arrow weights strictly positive (a topological order of the acyclic framing part supplies it). Any invariant polynomial is therefore independent of the new arrow coordinates. The affine invariant base is exactly the invariant quotient of the A_i-module representation scheme. [F1, F2, F3, F4, F5, algebra, step 86.1]

88.1 On reductions this base is Sym^n(U_i). Here is a direct invariant-ring check. Every finite-length A_i-module admits a composition series and degenerates by its filtration weights to its semisimplification, a direct sum of characters of the commutative algebra. Hence an invariant polynomial is determined on closed points by restriction to diagonal character modules; restriction is injective on reduced invariant rings. Its image consists of symmetric functions on n characters. Conversely every symmetric polynomial in the coordinates of those n characters is generated, in characteristic0, by polarized power sums: expand products of sums and induct on the number of distinct indices to express orbit sums, using Newton identities for repetitions. Each power sum of an algebra monomial is the trace of that monomial evaluated in the generator matrices, so it extends as an invariant polynomial. The algebra relations descend through finite symmetric-group invariants by averaging. Thus restriction is surjective as well. This identifies the reduced affine base with the symmetric product. Nilpotent structure does not alter the properness conclusion. [F1, F2, F3, F4, F5, algebra, step 87.1]

89.1 The actual King invariant-ring construction from the numerical invariant-ring construction above applies on each chart: finite generation gives a relative Proj whose degree-zero ring is the old affine invariant ring. It is projective over that affine support-cycle base. The numerical criterion proved there identifies its semistable locus with the actual source/flag/master stability from §3. Hence these are the actual moduli spaces. [F1, F2, F3, F4, F5, algebra, step 88.1]

90.1 The chart moduli glue by restriction of the same sheaves, maps and flags. Their base changes agree on the overlap of the cycle opens, because a finite-length sheaf with cycle in that overlap is supported in BOTH affine opens. Consequently the actual moduli is proper over Sym^n(Z_n), by Zariski-locality of properness on the base. Since the base is projective, the total space is proper. This also gives separatedness and finite type from the finite chart construction. Character polarizations agree as character lines of the same frame bundles; they yield relative ample lines on overlaps, or finite chart resolution can be used for the properness conclusion alone. [F1, F2, F3, F4, F5, algebra, step 89.1]

91.1 For the required torus action, the fixed locus of the actual proper moduli is closed and hence proper. The GIT character and flag/covector tautological ample lines have the commuting torus linearizations. An equivariant ample line on the fixed proper locus gives equivariant resolution: twist any equivariant coherent sheaf sufficiently highly, take its finite-dimensional torus representation of global sections, and use the evaluation surjection. If only the fixed support family is in Z_n, apply the construction to that fixed locus and retain the inherited commuting master Gm action; the same argument supplies graph-fixed properness and resolution. [F1, F2, F3, F4, F5, algebra, step 90.1]

92.1 Thus the point-sector enlarged masters required in original source degree1 have actual proper graph-fixed loci, not merely a hypothesized6.9(c). This argument does not assert full pair-master properness in arbitrary positive source degree. [F1, F2, F3, F4, F5, algebra, step 91.1]

93.1 **Local spectral module complexes and the compact-support trace.** For the compact-support duality used below, embed a neighbourhood of the proper support in a projective space. Extend the supported coherent complexes by zero; they remain coherent because their supports are proper. Resolve locally by finite free complexes on the smooth ambient chart. Closed-immersion adjunction in [F5] is computed by the Koszul complex of the regular normal coordinates: its top exterior generator identifies the ambient canonical line with the intrinsic canonical line tensored by the determinant of the normal bundle. The projective trace of [F5], contracted against that generator, yields the trace on the smooth neighbourhood. Changing regular coordinates multiplies the Koszul generator and the normal determinant by inverse transition factors, so the trace glues. The same calculation on finite Čech resolutions over the proper support gives relative perfect pairings and commutes with base change. This constructs the compact-support Serre pairing used for $Y$ and $X$, rather than assuming a properness statement for all of $Y$. [F1, F2, F3, F4, F5, algebra, step 92.1]

94.1 The spectral local model is the following actual equivalence. Let L=K_Y and X=Spec_Y Sym(L^vee), with pi:X->Y. An O_X-module F finite over Y is equivalently an O_Y-module G with an action L^vee tensor G->G, or phi:G->G tensor L. There is no extra integrability equation for ONE line variable. The equivalence is an actual equivalence of categories: iterate the action to define the polynomial algebra action, and restrict an existing action to degree one for the inverse. These constructions commute with base change and retain nilpotents. [F1, F2, F3, F4, F5, algebra, step 93.1]

95.1 For a compactly supported coherent F, its support maps properly to Y, since a map from a proper scheme to separated Y is proper (use its closed graph); it also maps affinely. Hence it is finite, and pi_*F is coherent with proper support. Conversely the support of a coherent Sym(L^vee)-module finite as O_Y-module is finite over its proper O_Y support, so is proper. One direct proof of finiteness of the spectral support is Cayley-Hamilton on a finite presentation locally: choose finitely many O_Y-module generators; their iterated phi-images satisfy a common monic relation after taking the determinant of a finite free presentation. Equivalently the elementary determinant trick applied to a finite generating set gives a monic annihilator. The finite support statement, rather than invertibility of phi or nilpotence, is what is used here. [F1, F2, F3, F4, F5, algebra, step 94.1]

96.1 There is a functorial two-term induced-module resolution. [F1, F2, F3, F4, F5, algebra, step 95.1]

97.1 0 -> pi^*(G tensor L^vee) --(x-phi)--> pi^*G -> F -> 0.       (SC1). [F1, F2, F3, F4, F5, algebra, step 96.1]

98.1 Here x is multiplication by the tautological degree-one variable and phi denotes the action with the indicated twist. On a trivialization L=O and an arbitrary coefficient module G, the map x-phi on G[x] is injective by its highest-degree coefficient. The quotient is G with x acting as phi: polynomial division, replacing xg by phi(g), gives the unique normal form of degree zero. This proof works over arbitrary coefficient rings and with nilpotent base schemes. It also shows that SC1 glues under changing a trivialization of L. [F1, F2, F3, F4, F5, algebra, step 97.1]

99.1 Apply derived Hom to SC1. For two spectral modules (G,phi),(H,psi), the result is the functorial fibre sequence. [F1, F2, F3, F4, F5, algebra, step 98.1]

100.1 RHom_X(F_G,F_H) -> RHom_Y(G,H) --(psi(-)-(-)phi)--> RHom_Y(G,H tensor L).                  (SC2). [F1, F2, F3, F4, F5, algebra, step 99.1]

101.1 To avoid a flatness assumption on G, use a bounded-above locally free resolution of G on the smooth Y and its induced polynomial resolution; the same highest-degree argument resolves the complex termwise. Apply an injective resolution to H. Taking the total Hom double complex gives SC2, with the displayed commutator differential on actual cochains. Finite locally free resolutions exist locally since Y is smooth; the derived adjunction and SC1 are intrinsic, so the cochain identifications glue without choosing a global resolution. [F1, F2, F3, F4, F5, algebra, step 100.1]

102.1 Compact-support Serre trace on smooth Y of dimension three pairs RHom_Y(G,H tensor K_Y) with RHom_Y(H,G)[3]. Thus the second term in SC2 is the shifted dual of the first. The commutator is cyclic skew-adjoint: trace(psi a b-a phi b) equals the corresponding negative trace after moving the degree-homogeneous cochains around the trace, with the Koszul sign. Consequently the cone carries the actual CY4 symmetry, not merely its equality of Euler ranks. The pairing is the coefficient-of-x-residue trace of SC1, so agrees with the compact-support Serre trace on X. This can be checked on the one- variable free Koszul resolution: its dual generator pairs to one with the original generator, and change of variable contributes exactly the transition function of K_Y. These identities identify the symmetry and its orientation conventions in the fixed sheaf obstruction complex. [F1, F2, F3, F4, F5, algebra, step 101.1]

103.1 A pair pi^*A->F, for a fixed vector bundle A on Y, is by adjunction exactly a section s:A->G together with phi; no condition phi s=0 is imposed. In a local free resolution the equations are d_G^2=0, d_G phi-phi d_G=0 and d_G s=0, and a framing/flag/master arrow adds its ordinary matrix cochain and equation. Linearizing these exact equations gives SC2 together with the arrow/gauge/relation complex already constructed above. In particular the horizontal equation B C=0 has differential B dC+dB C. Its formal derived deformation algebra is obtained by the same semi-free resolution: polynomial variables for the arrow cochains and Koszul variables for the relations. The differential squares to zero because it is the commutator differential of the actual module equations; its cyclic adjoint gives the opposite-arrow terms. Adding the master relation therefore adds precisely rho^* B C and its dual arrow in the CY4 completion, including all higher syzygies inherited from the chosen semi-free resolution. No truncation discards such syzygies. [F1, F2, F3, F4, F5, algebra, step 102.1]

104.1 The old-object and new-arrow decompositions are compatible with cotangent maps because they are obtained by forgetting the named polynomial generators. Contracting an invertible connecting arrow or a relation-prefix pair is a contraction of this actual semi-free relative cotangent complex. It commutes with the map to the old spectral module complex SC2. Thus, in the global obstruction diagram constructed next, the fixed diagonal and cross-block identifications used for the master localization are the same actual maps as in the quiver matrix calculation. The local Koszul pairings and their trace glue by the naturality of SC1; there is no appeal to an unspecified quasi-isomorphism with the same tangent K-class. [F1, F2, F3, F4, F5, algebra, step 103.1]

105.1 **Global enhanced obstruction diagrams.** Use the local-CY4 source datum: Y is smooth of dimension three, compact supports are proper over the parameter base, and the chosen framing objects and divisors are pulled back from Y. Restrict to the source open where their derived framing complexes are vector bundles in their stipulated single degree; this is the original framing-concentration hypothesis, not a new global assumption on all coherent sheaves. All statements below commute with restriction to this open. For pair objects retain the source trace-free complex and its fixed rank-one summand. [F1, F2, F3, F4, F5, algebra, step 104.1]

106.1 The induced-module resolution (SC1) and its derived Hom fibre sequence (SC2), proved in the local calculation below, are functorial globally in Y and in the parameter base. On the universal Higgs stack of (G,φ:G→G⊗K_Y), dualizing SC2 gives the global triangle. [F1, F2, F3, F4, F5, algebra, step 105.1]

107.1 C → E → C^vee[2] → C[1],                       (G1). [F1, F2, F3, F4, F5, algebra, step 106.1]

108.1 where C=RHom_Y(G,G)^vee[-1], pulled back from the derived sheaf stack on Y, and E=RHom_X(F,F)^vee[-1]. The connecting map is the dual commutator with φ. The compact-support trace identifies the indicated duals; the cochain-level cyclic identity in SC2 is precisely its self-duality. This triangle therefore has a specified zero-composite homotopy, as part of its fibre-sequence structure. This is a global homotopy, not a choice on an affine cover. [F1, F2, F3, F4, F5, algebra, step 107.1]

109.1 One can retain actual complexes when constructing (G1): resolve perfect coherent sheaves on affine charts of smooth Y by finite locally free complexes, use the polynomial induced-module resolution, and totalize a finite Čech cover of the proper support. The Hom differential, commutator, evaluation and trace maps are natural under refinement and quasi-isomorphism. Thus the resulting derived maps and their nullhomotopy are independent of the cover and descend. Compact support and smoothness give perfect relative Hom complexes on the finite-type family loci under consideration. No global free resolution of every sheaf is asserted. [F1, F2, F3, F4, F5, algebra, step 108.1]

110.1 Consider the actual source flag or enhanced-flag quiver over a framed old sheaf G on Y, and restrict to the stable injection locus. The kernel argument already proved in the local calculation below forces the old flag arrows and their composites into the framing bundle to be injective. Thus they are subbundle inclusions in families, after the usual local trivializations. [F1, F2, F3, F4, F5, algebra, step 109.1]

111.1 For the enhanced quiver, the extra equation is bc=0 with c:V_{l-1}→V_l injective. In a local basis adapted to c, this equation says that the first dim(V_{l-1}) coordinates of b vanish. They are independent linear coordinates over the arbitrary old sheaf base. The allowed b form Hom(V_l/V_{l-1},V_0), and a is an unconstrained linear map. Quotienting by the extra change-of-basis groups is a smooth stack quotient. Consequently the enhanced decoration stack Z_Y→M_Y is smooth on this locus, with relative cotangent N=Ω_{Z_Y/M_Y}, a vector bundle in degree zero. Removing the stability open does not affect this smoothness assertion where c remains injective. It makes no assertion about the noninjective locus. [F1, F2, F3, F4, F5, algebra, step 110.1]

112.1 This also works on derived bases. The framing complex is concentrated in one degree and locally free there; hence the linear decoration functors have no additional derived directions. The equations bc=0 are a regular coordinate sequence even over a derived old base: eliminating those coordinates identifies its Koszul algebra with the remaining polynomial algebra. The derived relative cotangent is therefore the same N. This establishes the required relative smoothness, rather than assuming a derived smoothness statement from the classical tangent rank. [F1, F2, F3, F4, F5, algebra, step 111.1]

113.1 Pull Z_Y back by spectral correspondence to the derived Higgs stack on X. Adjunction identifies the framing sections with their sections on Y, without a condition φs=0. The pullback therefore has exactly the actual generalized pair/flag objects of the source. Its classical truncation is the actual enhanced moduli space after the prescribed rigidification and stability restriction. [F1, F2, F3, F4, F5, algebra, step 112.1]

114.1 The cotangent boundary of the smooth derived map Z_Y→M_Y gives the GLOBAL map. [F1, F2, F3, F4, F5, algebra, step 113.1]

115.1 A=N[-1] → C.                                   (G2). [F1, F2, F3, F4, F5, algebra, step 114.1]

116.1 This is the connecting map in its cotangent triangle, pulled back to the decorated Higgs stack. Compose with C→E from G1 to obtain u:A→E. Its shifted dual v:E→A^vee[2] factors through E→C^vee[2]. Hence. [F1, F2, F3, F4, F5, algebra, step 115.1]

117.1 A → E → A^vee[2]                               (G3). [F1, F2, F3, F4, F5, algebra, step 116.1]

118.1 has its canonical self-dual zero-composite homotopy induced by G1. More concretely it is the composite of G2, the fibre-sequence homotopy C→E→C^vee[2], and the dual of G2. The coherence is supplied by one global fibre sequence. There is no independently selected local nullhomotopy to glue. [F1, F2, F3, F4, F5, algebra, step 117.1]

119.1 Set K=fib(v). The specified nullhomotopy lifts u to A→K, and form. [F1, F2, F3, F4, F5, algebra, step 118.1]

120.1 E_Z=cofib(A→K).                                (G4). [F1, F2, F3, F4, F5, algebra, step 119.1]

121.1 This is the self-dual cone construction of the source enhanced diagram. Its symmetry follows directly by dualizing the fibre/cofibre diagram of G3; E is self-dual with shift two and v is the shifted dual of u. Its rank is rank(E)-2rank(A)=rank(E)+2rank(N), as required for a smooth relative dimension rank(N). This calculation checks the shifts; merely adding N to E would lose the shifted dual half. [F1, F2, F3, F4, F5, algebra, step 120.1]

122.1 The obstruction map E_Z→L_{Z_X} is induced from the same cotangent boundary square G2 and the old obstruction map E→L_{M_X}. In local semi-free resolutions, these are exactly the differentials obtained by adjoining the arrow coordinates and the regular equations bc to the old module equations. The removed dual coordinates give G4. Thus the map agrees with the actual deformation equations, including the derivative δb·c+b·δc, their gauge action, and their adjoints. The universal derivation verifies compatibility with the cotangent maps; the regular-coordinate elimination above verifies that the relative cotangent is N. In particular this is an obstruction diagram on the actual classical stable space, not solely a symmetric K-theory class. [F1, F2, F3, F4, F5, algebra, step 121.1]

123.1 The orientation is global as well: the determinant factors removed in G4 are det(A) and det(A^vee[2])=det(A)^vee, so their product has its canonical evaluation trivialization. Thus det(E_Z) identifies with det(E), with the shifted-dual order specified by the fibre/cofibre construction. The source relative hyperbolic orientation fixes the corresponding ordered trivialization from the old orientation. All orientation comparisons under exchanging cross halves are those already computed in the local calculation below. [F1, F2, F3, F4, F5, algebra, step 122.1]

124.1 Every construction uses evaluation, composition, derived Hom, the spectral resolution and cotangent boundaries. These are functorial under base change and under forgetting named decoration arrows. For direct sums the Hom complex decomposes into its two diagonal blocks and two cross blocks. The commutator and trace maps preserve this decomposition; the corresponding restriction of G1–G4 therefore gives the exact cross-block completion diagram and its nullhomotopy. This supplies the enhancement compatibility of source 5.10(c) in the local spectral setting. The same argument gives 5.10(b) for forgetting flags. [F1, F2, F3, F4, F5, algebra, step 123.1]

125.1 For source pair objects the map from framing-section deformation to E first factors through C by adjunction, exactly as G2. Taking cones for that framing map, retaining the fixed rank-one term and applying its trace-free projection, gives the pair version of G1–G4. Trace-free projection commutes with forgetting the decorations because their maps act identically on the fixed rank-one term. Thus the construction supplies the local-sheaf/pair enhanced diagrams when the source framing objects/divisors are pulled back from Y, including the noncompact compact-support version. It does not establish the separate overlap-k equality, which compares virtual classes obtained from different framing objects. Nor does a local complex calculation establish the support lemma or DT/PT point-sector calculation. [F1, F2, F3, F4, F5, algebra, step 124.1]

126.1 **Why an enhanced.** Weight decompositions exist in families over a trivially acted-on base: a comodule over (\mathcal O_S[t,t^{-1}]) is the direct sum of its weight submodules, with the weight projectors obtained by reading the coefficient of (t^w). A finite locally free comodule has locally finitely many weights, and its weight summands are direct summands, hence locally free. Equivariant objects in the given coherent-sheaf category likewise decompose into weight subobjects because a torus acts trivially on the underlying target here; only its scalar action on the object is being used. In a quiver category the decomposition is vertexwise. No decomposition of a general torus action on the geometric target is asserted. [F1, F2, F3, F4, F5, algebra, step 125.1]

127.1 All original arrows preserve weight. The compensating equivariance for (a) allows only its weight-one source summand to map to (V_0), while (b) uses only its weight-zero source summand (simultaneously reversing the chosen torus character reverses both labels). Any old weight summand with weight other than zero or one is consequently a direct summand of the *enhanced* object: it meets neither (V_0) nor an extra arrow, and every old arrow and relation respects its weight. A stable object in the weak-stability category cannot have a nontrivial direct-sum decomposition. Indeed for a decomposition (P\oplus Q), weak seesaw puts the total phase between the two phases; the larger-phase summand destabilizes if the phases differ, and an equal-phase summand violates stability if they agree. Thus there are no other weights. [F1, F2, F3, F4, F5, algebra, step 126.1]

128.1 If both (a,b) vanish, (V_0) is a forbidden direct summand. If (a=0), the weight-one part is disconnected from (V_0) and must vanish; if (b=0), the weight-zero old part must vanish. If both are nonzero there are exactly the two old weight parts just described. Since $\dim V_1=\dim V_0=1$, the nonzero (a) is an isomorphism. On the flag locus where $\rho_{l-1}$ is injective and $\dim(V_l/V_{l-1})=1$, the relation and nonzero (b) identify that quotient with (V_0). This proves the exhaustive two endpoints / mixed-weight trichotomy as a functorial decomposition, and the elementary acyclic cancellations used in the normal-complex calculation. [F1, F2, F3, F4, F5, algebra, step 127.1]

129.1 **Simple walls.** Here is the linear-algebra part of the flag-wall construction, shared with the operational CY3 assembly. It does not assume the geometric wall theorem. Fix a finite list of allowable classes with positive ranks (r(\beta)), and real numbers $\lambda(\beta)$. A nonzero full flag vector (f\in\mathbb N^N) has (f_0=0), increments $f_i-f_{i-1}\in\{0,1\}$, and at least one increment one. Suppose full flag vectors (f^{(1)},\ldots,f^{(n)}) sum to a flag vector (e) with the same increment bound. Their increment supports are disjoint: at each position the sum of the nonnegative increments is at most one. Consequently the (f^{(j)}) are linearly independent. Apply the invertible linear map $f\mapsto(f_i-f_{i-1})_i$; nonzero vectors with disjoint supports are independent, by examining a coordinate in each support. [F1, F2, F3, F4, F5, algebra, step 128.1]

130.1 Choose $\mu_1\gg\cdots\gg\mu_N>0$ outside the following finite collection of
proper real hyperplanes, as the classes and flag vectors range over their
finite allowed lists. Exclude every nontrivial equality
$$
\mu\cdot\left(   a\left(\frac{f^{(i)}}{r_i}-\frac{f^{(j)}}{r_j}\right)  -b\left(\frac{f^{(k)}}{r_k}-\frac{f^{(j)}}{r_j}\right)\right)=0
$$
with $a,b$ the differences of the corresponding $\lambda/r$ values;
also exclude the nonzero single-difference equations, and the analogous
equations comparing two candidate two-part decompositions. This is possible:
any prescribed strict lexicographic-domination inequalities define a nonempty
open cone, and a finite union of proper linear hyperplanes has empty interior.
In particular one need not assume that arbitrary real $\lambda$ values
belong to a rational field of coefficients. [F1, F2, F3, F4, F5, algebra, step 129.1]

131.1 Equal finite slopes of (n) summands at parameter (s) say
$$
s\left(\frac{\lambda_i}{r_i}-\frac{\lambda_j}{r_j}\right)    =-\mu\cdot\left(\frac{f^{(i)}}{r_i}-\frac{f^{(j)}}{r_j}\right).
$$
The right side is nonzero by the choice of $\mu$, so each corresponding
coefficient of (s) is nonzero and the equation has a unique solution. If
(n\ge3), eliminate (s) between the equations for pairs (1,2) and (3,2).
The resulting hyperplane is proper, since the three normalized flag vectors
are independent. It was excluded. Thus at any such wall there are exactly
two summands. There are finitely many wall parameters because the candidate
list is finite. A further strictly semistable factor would admit an additional
equal-phase Jordan–Hölder factor and produce three summands, a contradiction.
Thus the two factors themselves have no strict semistability. [F1, F2, F3, F4, F5, algebra, step 130.1]

132.1 The two flag vectors at a wall parameter are unique after ordering the pair
by the earliest nonzero increment. Indeed two pairs (f_1,g_1) and (f_2,g_2)
with common total (e) and the same parameter give, by the last genericity
condition, proportional difference vectors
$$
\frac{g_1}{r_{\delta_1}}-\frac{f_1}{r_{\gamma_1}}  =\eta\left(\frac{g_2}{r_{\delta_2}}-              \frac{f_2}{r_{\gamma_2}}\right).
$$
At the first increment of (e), the ordered (f_i) have increment one and
the (g_i) increment zero, giving $\eta=r_{\gamma_2}/r_{\gamma_1}>0$.
Substitute (f_i=e-g_i), multiply by $r_{\gamma_1}$, and cancel (e):
$$
(1+r_{\gamma_1}/r_{\delta_1})g_1   =(1+r_{\gamma_2}/r_{\delta_2})g_2.
$$
Their increment vectors are nonzero zero-one vectors. Positive
proportionality therefore has constant one, proving (g_1=g_2) and
(f_1=f_2). Several pairs of underlying category classes may contribute at
that same wall; the conclusion only identifies the flag vectors, as required. [F1, F2, F3, F4, F5, algebra, step 131.1]

133.1 The dominance inequalities on $\mu$ can also ensure that the sign of $\mu\cdot(g/r_\delta-f/r_\gamma)$ is the sign of its first nonzero coordinate, simultaneously for the finite allowed list. Thus, for (s>0) in (5), the earlier first jump of (f) is equivalent to $\lambda(\gamma)/r_\gamma<\lambda(\delta)/r_\delta$, fixing the order of the wall bracket. At (s=0) equal finite slopes would force a forbidden single-difference equation, so this endpoint is not a wall. Excluding (s=1) is also possible whenever the endpoint stability of the specified full flag is supposed to have no strict semistability: add the finite proper affine hyperplanes $\mu\cdot(f/r_\gamma-g/r_\delta)= -(\lambda_\gamma/r_\gamma-\lambda_\delta/r_\delta)$ to the excluded list. [F1, F2, F3, F4, F5, algebra, step 132.1]

134.1 **Enhanced stability.** Here the required flag rank is additive on exact sequences in the fixed-phase base category, and the framing-vector functor is exact there, as in the stated framing hypotheses. For an old flag object of class $(\beta,e)$ write $L_s(\beta,e)=s\lambda(\beta)+\mu\cdot e$ and $t=L_s(\beta,e)/r(\beta)$ at a simple wall. Choose $\varepsilon>0$ smaller than every positive old slope gap multiplied by the finitely many ranks that occur. Such a choice exists because the allowed numerical classes are finite. The enhanced object's slope is $t-\varepsilon/r(\beta)$. [F1, F2, F3, F4, F5, algebra, step 133.1]

135.1 Every old subobject $P$ lifts to an enhanced subobject by taking the whole
new line $V_0$. If its old slope exceeds $t$, this lift destabilizes for
the chosen $\varepsilon$. Thus enhanced semistability forces old
semistability. In the opposite direction a strict lower old slope cannot
destabilize, with either choice of the new vertex, by the same finite-gap
bound. For an equal-slope proper subobject with positive base rank $r_P$,
the two choices of new-vertex dimension give respectively
$$
t\quad(d_0'=0),\qquad  t-\varepsilon/r_P\quad(d_0'=1).
$$
The first destabilizes and the second is strictly below the total slope,
since $0<r_P<r(\beta)$. Equal-slope subobjects with the same base class but
smaller flags cannot occur: their missing nonzero flag dimensions have
strictly positive weight, so their old slope is lower. Pure-framing
subobjects with any old flag dimension were excluded by the kernel proof
above; the possible pure new line has slope $-\infty$. [F1, F2, F3, F4, F5, algebra, step 134.1]

136.1 It follows that an enhanced object is stable precisely when its old flag object is semistable and every proper equal-slope subobject has nonzero image under at least one of $a,b$. Indeed it then cannot lift with $d_0'=0$, and a lift with $d_0'=1$ has the strict lower slope just computed. This proves the criterion for both necessity and sufficiency. [F1, F2, F3, F4, F5, algebra, step 135.1]

137.1 For an equal-slope subobject $P$ and quotient $Q$ of a semistable full flag, both are semistable. Their kernel arguments imply that both have injective flag arrows and inject into their respective framing vector spaces. Exactness of the framing functor, together with $e_N=\operatorname{fr}(\beta)$, forces $e_N(P)=\operatorname{fr}(P)$ and $e_N(Q)=\operatorname{fr}(Q)$: both are bounded above by these numbers and their sums are equal. Injectivity of the quotient arrows implies $P_i\cap V_{i-1}=P_{i-1}$, so $P_i/P_{i-1}\hookrightarrow V_i/V_{i-1}$ and each increment is at most one. Thus all equal-slope factors are nonzero full flags. The finite simple-wall lemma above now applies without leaving an unproved full-flag-factor assumption. [F1, F2, F3, F4, F5, algebra, step 136.1]

138.1 Order the two wall flag vectors $f,g$ by their first nonzero jump; $f$ has the jump at $V_1$ and $g$ first jumps at $l$. Every equal-slope factor is stable, since three equal-phase factors would contradict the simple-wall lemma. A strictly semistable object therefore has exactly these two stable factors. An equal-slope subobject is saturated in the flags (its quotient is injective), so $a$ sees it exactly when it has the first jump, and $b$, which annihilates $V_{l-1}$, sees it exactly when it has the $l$-th jump. At $a=0$, enhanced stability therefore excludes the $f$-type subobject and permits the $g$-type. Immediately below the wall $f$ has larger slope, by the sign calculation following (5); this is exactly the adjacent negative-chamber stability condition. At $b=0$ the criterion excludes the $g$-type and permits the $f$-type, exactly the positive-chamber condition. Noncritical subobjects retain their strict inequalities by the finite-gap choice. Thus the endpoint identifications are proved by all subobject inequalities, not just by a picture. [F1, F2, F3, F4, F5, algebra, step 137.1]

139.1 For a mixed fixed object the weight decomposition gives an old direct sum of the two wall factors. Conversely a pair of stable wall factors with these distinct flag vectors gives an enhanced stable object: morphisms between the two distinct stable equal-slope factors vanish, by the image argument above, so its only proper equal-slope subobjects are the two factors, each seen by one extra arrow. The nonzero $a$ and the induced quotient map $b$ are isomorphisms of lines. They identify all extra line data, leaving precisely the product of the two factor moduli. These constructions commute with base change and inverse isomorphisms, since weight summands and the kernel/quotient flags are functorial. They give the product identification as a moduli functor, including nilpotent bases, rather than just a bijection of closed points. [F1, F2, F3, F4, F5, algebra, step 138.1]

140.1 **A homological quadratic.** The original wall identity takes values in the source homological Lie algebra. This permits the following explicit homological operation, but identifying it with the source algebraic square-root operation is an additional obligation, stated below rather than assumed. [F1, F2, F3, F4, F5, algebra, step 139.1]

141.1 Let $(E,q,o)$ be an oriented complex orthogonal bundle of complex rank $2n$ over a finite-type complex space $Y$. Choose a positive real form $E_R$, so $E=E_R\otimes_{\mathbb R}\mathbb C$ and $q$ is positive definite on $E_R$. Such forms exist and their choices are contractible. One direct construction starts with a Hermitian metric: the symmetric nondegenerate $q$ determines an invertible antilinear self-adjoint operator $A$, whose square is positive Hermitian. Then $J=A(A^2)^{-1/2}$ is an antilinear involution, and its fixed real bundle is positive for $q$. Positive square roots are unique, so this construction varies continuously with the metric; the space of Hermitian metrics is convex. Averaging over a compact torus gives equivariant choices when needed. The orientation $o$ selects the real orientation. [F1, F2, F3, F4, F5, algebra, step 140.1]

142.1 For an isotropic vector $v=x+iy$ with $x,y\in E_R$, the equality $q(v,v)=0$
implies
$q(x,x)=q(y,y)$ and $q(x,y)=0$. In particular $x=0$ implies $v=0$.
Thus the real projection $p_R:E\to E_R$ has no nonzero zero on any
isotropic cone $C\subset E$. Pulling back the oriented Thom class of
$E_R$ along $p_R\tau_C$ gives a class
$$
u_C\in H^{2n}(C,C\setminus Y;\mathbb Q),
$$
where $\tau_C$ is the tautological vector and the zero section is identified
with its support in $C$. Capping Borel–Moore homology with this supported
class defines
$$
G_{E,C}:H^{BM}_k(C;\mathbb Q)\longrightarrow                  H^{BM}_{k-2n}(Y;\mathbb Q).
$$
The Thom class used here can itself be characterized without any
transversality of $C$: on each real oriented trivialization it is the
generator of $H^{2n}(\mathbb R^{2n},\mathbb R^{2n}\setminus0;\mathbb Q)$.
These generators glue, since oriented transition maps act by degree one.
Excision and the relative Künneth formula show there is precisely one such
class; the other relative fiber cohomology groups vanish. This also proves
its naturality under pullback. [F1, F2, F3, F4, F5, algebra, step 141.1]

143.1 A homotopy of positive real forms gives a supported homotopy through maps whose zero locus remains the zero section, by the same positivity argument. Hence (9) is independent of the chosen form. Projection formula for cap products proves commutation with proper pushforward. For direct sums, the oriented fiber generator is the exterior product of the generators; therefore the Thom classes multiply and the corresponding operations compose. These assertions apply equivariantly by finite-dimensional Borel approximations in every fixed degree. [F1, F2, F3, F4, F5, algebra, step 142.1]

144.1 If $C$ lies in a maximal isotropic bundle $\Lambda$, the map
$p_R:\Lambda_{\mathbb R}\to E_R$ is an isomorphism: it is injective by the
isotropy argument and the real ranks agree. Its sign is precisely the
specified orientation comparison. Thus $G_{E,C}$ is the ordinary
complex zero-section Gysin of $\Lambda$, with that sign. In particular, on
the zero section $G_{E,Y}$ is cap product with $e(E_R)$, and, when an
isotropic subbundle $K$ is present,
$$
e(E_R)=c_{\operatorname{rk}K}(K)\,  e\bigl((K^\perp/K)_R\bigr).
$$
Indeed an orthogonal positive metric splits the positive real bundle into
the real projection of $K$ and its real orthogonal complement, and the latter
is the positive real form of the quadratic reduction. Multiplicativity of
the ordinary oriented real Euler class proves (10). [F1, F2, F3, F4, F5, algebra, step 143.1]

145.1 There is a useful concrete formula on fundamental cycles. For an integral
isotropic cone $C$ not contained in the zero section, blow up its zero ideal.
Since $C$ is a degree-one generated cone in a vector bundle, the blowup is
the total space of the tautological line on $\mathbb P(C)$, with exceptional
zero divisor $D=\mathbb P(C)$. Pullback of $E$ has an isotropic line $L$,
and its tautological section cuts out $D$. Splitting off the positive real
projection of $L$, (9) and ordinary Thom multiplicativity give
$$
G_{E,C}[C]  =(\rho_D)_*\left(e\bigl((L^\perp/L)_R\bigr)\cap[D]\right).
$$
The same assertion for a cycle is obtained by blowing up its intersection
with the zero section; its section generates a line after that blowup.
Cycles already in the zero section instead contribute $e(E_R)$ capped
with that cycle. Proper birational pushforward of the strict transform is
the original fundamental cycle, so this computation does not discard any
multiplicity. Formula (11) is a direct computation of the homological
operation, not a theorem identifying two independently defined operations. [F1, F2, F3, F4, F5, algebra, step 144.1]

146.1 **Cosection-localized.** The following is the ordinary ingredient in the algebraic supported comparison. Actual source inspected here: Kiem–Li, arXiv:1007.3085v2, §2 through Corollary 2.8, including the complete rational-equivalence argument. The construction below reconstructs that argument for a finite-type scheme and vector bundle, using ordinary bundle zero Gysin, Cartier divisor intersection and proper pushforward. It does not use an external cosection-localization theorem. [F1, F2, F3, F4, F5, algebra, step 145.1]

147.1 Let $F\to X$ have rank $r$ and let $\sigma:F\to\mathcal O_X$ be a
cosection with zero scheme $S$. Put
$F(\sigma)=F|_S\cup\ker(\sigma|_{X\setminus S})$, with its reduced
cycle support. For an integral cycle $B\subset F(\sigma)$ contained
over $S$, set $G_\sigma[B]=0^!_{F|_S}[B]$. Otherwise let
$X_B=\overline{\pi(B)}$ and blow up the image ideal of
$\sigma|_{X_B}$, taking the component dominating $X_B$. Denote this
proper birational map by $\rho:\widetilde X_B\to X_B$. There is a
surjective map
$$
\rho^*F\longrightarrow\mathcal O_{\widetilde X_B}(-D),\qquad  F'=\ker(\rho^*F\longrightarrow\mathcal O(-D)).
$$
The strict transform $\widetilde B$ lies in $F'$: it does so on the
dense open where $\sigma$ is nonzero, and $F'$ is closed. Define
$$
G_\sigma[B]=-(\rho_D)_*                  \bigl(D\cdot0^!_{F'}[\widetilde B]\bigr).
$$
The sign is essential. The quotient line in this convention is
$\mathcal O(-D)$; Kiem–Li write a divisor whose line bundle is the
quotient, so their divisor is $-D$. [F1, F2, F3, F4, F5, algebra, step 146.1]

148.1 More generally a proper generically finite regularization and a cycle lift of degree $k$ give the same expression divided by $k$. To verify this, take a common integral component of the fiber product dominating both cycle lifts and regularize once more. Its two pulled-back quotient lines agree as sublines of the rational trivial line, since both are the image ideal of the same cosection. Their Cartier divisors therefore agree, including multiplicities. Their kernels agree as the saturated kernel of the same generic functional in a locally free sheaf. Ordinary Gysin commutes with proper pushforward, and the projection formula for the common divisor shows that both expressions equal the expression on the common refinement divided by its degree over $B$. This proves independence of the regularization actually used in (12). [F1, F2, F3, F4, F5, algebra, step 147.1]

149.1 A cycle lift whose proper image has smaller dimension contributes zero. Indeed compare with a regularization generically finite over the image's base, as above. On the common refinement its image in that regularization has smaller dimension, so its proper cycle pushforward is zero. Commutation of ordinary zero Gysin with that pushforward and the projection formula make (12) zero as well. This is stronger than merely knowing that its final pushforward into $X$ vanishes. [F1, F2, F3, F4, F5, algebra, step 148.1]

150.1 For clarity, the exact ordinary excess identity used below is
$$
0^!_F\,j_*\alpha=c_{\operatorname{rk}Q}(Q)\,0^!_{F_1}\alpha  \quad\text{for }0\to F_1\xrightarrow{j}F\to Q\to0.
$$
Pull back a base cycle along the vector-bundle projection, which is
an isomorphism on Chow groups. The identity becomes the top-degree
part of $c(F)c(F_1)^{-1}=c(Q)$, proving (13). This also proves it for
every cycle, by the same bundle homotopy isomorphism. [F1, F2, F3, F4, F5, algebra, step 149.1]

151.1 To verify rational equivalence for (12), let $W\subset F(\sigma)$ be integral and $f$ a rational function. Regularize once over the base of $W$, lift $W$, and pull back $f$. Proper pushforward of its zero and pole divisors is the original zero and pole divisor times the generic degree. Split the lifted divisors into three groups: components whose image dimension drops, components over $D$, and the remaining components. The first group contributes zero by the preceding paragraph. For the second group, (13) with quotient $\mathcal O(-D)$ identifies the divisor term in (12) with the ordinary $0^!_{F|_S}$ term. The remaining group is exactly the strict-transform contribution of (12). Their total difference is zero, since ordinary zero Gysin and intersection with $D$ send the principal divisor of the lifted $f$ to zero. Hence $G_\sigma(\operatorname{div}f)=0$ as a class *on $S$*. This proves that (12) defines a map on Chow groups, not only on cycles. The same common-refinement and degree argument proves commutation with proper pushforward. It uses actual zero-Gysin and divisor projection formulas, and never assumes injectivity of $A_*(S)\to A_*(X)$. [F1, F2, F3, F4, F5, algebra, step 150.1]

152.1 One special evaluation fixes the later signs. Suppose $s$ is a
section of a line subbundle $L\subset\Lambda$, with zero divisor $D$.
The associated cosection of $\Lambda^\vee$ has quotient $L^\vee
=\mathcal O(-D)$ and kernel $(\Lambda/L)^\vee$. Formula (12), applied
to the zero-section cycle, gives
$$
G_\sigma[0_{\Lambda^\vee}]    =(-1)^n\,c_{n-1}(\Lambda/L)\cap[D],  \qquad n=\operatorname{rk}\Lambda.
$$
Multiplying by the $(-1)^n$ in the positive-maximal-isotropic
square-root convention leaves
$c_{n-1}(\Lambda/L)\cap[D]$. This is exactly the isotropic-line
blowup expression (11) once an adapted maximal isotropic flag has
been justified. The remaining step is that adapted-flag comparison
for the source's prescribed flag construction; (14) alone does not
yet assert that comparison. [F1, F2, F3, F4, F5, algebra, step 151.1]

153.1 **Supported comparison.** This section uses the cosection construction just proved, and identifies the homological operation (9) with the cycle-class image of the source algebraic square-root Gysin. The assertion concerns those classes, not a new definition of the source invariants. [F1, F2, F3, F4, F5, algebra, step 152.1]

154.1 First the global Euler class in the source flag construction has
cycle-class image $e(E_R)$. To verify every normalization, form the bundle
of isotropic flags of lengths $1,\ldots,n-1$. Successively its fibers are
smooth quadrics of complex dimensions $2n-2,2n-4,\ldots,2$. At stage $j$
let $h_j$ be the hyperplane class of the tautological isotropic line in
the quadratic reduction. Put
$$
h=\prod_{j=1}^{n-1}h_j^{\,2(n-j)}.
$$
Each quadric's hyperplane degree is two, as follows by intersecting its
single degree-two equation with complementary generic hyperplanes in
projective space. Iterated projective pushforward therefore gives
$p_*h=2^{n-1}$. The final oriented rank-two quadratic quotient chooses
one of its two isotropic lines, producing the positive maximal
isotropic bundle $\Lambda$ on the flag space. Projection to the
positive real form identifies $\Lambda_{\mathbb R}$ with $p^*E_R$
with its prescribed positive orientation. Hence
$c_n(\Lambda)=p^*e(E_R)$ in cohomology. It follows directly that
$$
\operatorname{cl}\left(2^{1-n}p_*           (h\,c_n(\Lambda)\cap\alpha)\right)        =e(E_R)\cap\operatorname{cl}(\alpha).
$$
This proves the required cycle-class statement; it does not need an
unproved equality of all characteristic classes in integral Chow. [F1, F2, F3, F4, F5, algebra, step 153.1]

155.1 For an isotropic section $s$ and a positive maximal isotropic $\Lambda$, put $s^*=\pi_{\Lambda^\vee}s$ and $Z^*=Z(s^*)$. On $Z^*$, $s$ lies in $\Lambda$ and defines a cosection of $\Lambda^\vee|_{Z^*}$. This cosection annihilates the normal cone $C_{Z^*/Y}$. Indeed locally split $E=\Lambda\oplus\Lambda^\vee$, write $s=s_\Lambda+s^*$, and use isotropy $\langle s^*,s_\Lambda\rangle=0$. The linear function defined by $s_\Lambda$ vanishes on every graph of $t s^*$. Passing to its scheme-theoretic Rees limit gives its vanishing on the normal cone, including nilpotents. This is a polynomial identity on the Rees algebra, not just a set-theoretic limit. [F1, F2, F3, F4, F5, algebra, step 154.1]

156.1 The source localized square-root operator is, on this flag cover,
$(-1)^n$ times the cosection-localized ordinary zero Gysin applied
to the normal-cone specialization. Pushing from $Z(s)$ into $Y$
and using (12)–(13) gives ordinary zero Gysin of the normal cone:
the quotient-line top Chern factor is exactly the divisor in
(12). Ordinary normal-cone specialization and zero Gysin compute
$c_n(\Lambda^\vee)\cap\alpha$. Multiplying by $(-1)^n$ changes
this to $c_n(\Lambda)\cap\alpha$. Applying the flag pushforward
and (15) proves
$$
i_*\operatorname{cl}\bigl(\sqrt e_{\rm alg}(E,s)(\alpha)\bigr)              =e(E_R)\cap\operatorname{cl}(\alpha).
$$
Both the construction and this identity commute with restriction
to open subsets, by the blowup formula (12) and the Rees
specialization construction. That open compatibility is the only
localization property needed in the next step. [F1, F2, F3, F4, F5, algebra, step 155.1]

157.1 Let now $C\subset E|_Y$ be an isotropic cone. Its canonical
projective completion is $\overline C=\mathbb P(C\oplus\mathcal O)$,
with projection $\overline\pi:\overline C\to Y$. In
$\overline\pi^*(E\oplus\mathcal O^2)$ give the last two summands
the hyperbolic quadratic form. The tautological line
$L=\mathcal O_{\overline C}(-1)$ is isotropic, since its vectors
have the form $(v,t,0)$ and $q(v,v)=0$ on $C$. The oriented
quadratic reduction
$$
\overline E=L^\perp/L
$$
has rank $2n$. The constant isotropic vector $(0,1,0)$ lies in
$L^\perp$ and induces a section $\overline s$ of $\overline E$.
Its zero scheme is precisely the zero section $Y\subset C$:
being zero means that $(0,1,0)$ lies in $L$, forcing $v=0$ and
$t\ne0$. On the open chart $t\ne0$, the pair
$(\overline E,\overline s)$ identifies with
$(\pi^*E,-\tau_C)$. This follows by subtracting multiples of
$(v,1,0)$ to set the second coordinate to zero in the orthogonal
quotient. Replacing a complex section by its negative preserves
the oriented localized class. [F1, F2, F3, F4, F5, algebra, step 156.1]

158.1 For an algebraic cycle $\alpha$ on $C$, take its closure
$\overline\alpha$ in $\overline C$. Apply (16) on
$\overline C$ and then push by $\overline\pi$. Since
$\overline\pi$ composed with the zero section is the identity,
and the zero locus lies wholly in the open chart $C$, open
compatibility gives
$$
\operatorname{cl}\bigl(\sqrt{0_E^!}\,\alpha\bigr)    =\overline\pi_*        \bigl(e(\overline E_R)\cap                    \operatorname{cl}(\overline\alpha)\bigr).
$$
No injectivity of the zero-section pushforward has been invoked:
its proper left inverse $\overline\pi_*$ is what recovers the
supported class here. [F1, F2, F3, F4, F5, algebra, step 157.1]

159.1 Apply the same reasoning to the Thom operation (9). Its supported
class extends to the isotropic section $\overline s$ on the
proper completion, and its pushforward into $\overline C$ is
the ordinary Euler class of $\overline E_R$. Open compatibility
of the Thom class and the same proper left inverse show
$$
G_{E,C}\operatorname{cl}(\alpha)    =\overline\pi_*        \bigl(e(\overline E_R)\cap                    \operatorname{cl}(\overline\alpha)\bigr).
$$
Equations (17) and (18) prove the exact supported comparison
on the cycle classes used in the virtual construction. [F1, F2, F3, F4, F5, algebra, step 158.1]

160.1 The calculation is equivariant: make it over a finite-dimensional Borel approximation before taking each fixed degree. It is independent of which cycle closure is used. Indeed a difference is supported on the boundary $\mathbb P(C)$. There the section $\overline s$ is nowhere zero and isotropic; its positive real projection is nowhere zero, so $e(\overline E_R)$ restricts to zero. The projection formula annihilates every boundary contribution. The same formula proves commutation with a refined regular pullback: projective completion and its tautological orthogonal reduction commute with the Cartesian base change, refined pullback commutes with proper pushforward, and cap product with the pulled-back Euler class commutes with that pullback. A refined pullback of a chosen cycle closure restricts to the refined pullback of the cycle on the open chart, so (17) applies without any flatness assertion about the cone. [F1, F2, F3, F4, F5, algebra, step 159.1]

161.1 **Virtual localization.** Here is the localization consequence at the scope of the specified quiver
matrix model. Let $P$ be smooth with a torus action, $E\to P$ an oriented
orthogonal bundle, and $s$ an invariant isotropic section. Put $M=Z(s)$.
Its normal cone $C=C_{M/P}$ embeds in $E|_M$ and is isotropic: replace
the graph of $s$ by the graph of $ts$ and pass to its Rees limit in
$E$, where the polynomial equation $q(ts,ts)=0$ remains valid.
The source virtual class is
$$
[M]^{\rm vir}=\sqrt{0^!_E}[C],
$$
and its cycle-class image is the Thom operation on $[C]$ by (17)–(18).
The same construction works on a free smooth quotient presentation,
using finite-dimensional good pairs as in the closed descendant
construction. [F1, F2, F3, F4, F5, algebra, step 160.1]

162.1 Write $P^T=P_f$, $M^T=M_f$, $E|_{M_f}=E_f\oplus E_m$ and $T_P|_{P_f}=T_{P_f}\oplus T_m$. The fixed locus of a smooth scheme is smooth in characteristic zero: in equivariant étale coordinates its completed local ring is a formal power series ring in weight coordinates, and its fixed ideal is generated by the nonzero-weight coordinates. Thus $P_f\to P$ is a regular embedding with normal bundle $T_m$. On $P_f$ the moving part of the invariant section vanishes, so $M_f$ is exactly the zero locus of its fixed section in $E_f$. [F1, F2, F3, F4, F5, algebra, step 161.1]

163.1 The normal-cone specialization identity required here is
$$
i^![C_{M/P}]=[C_{M_f/P_f}]  \quad\text{in the refined ambient intersection,}
$$
where the right-hand cone maps into $E_f\subset E|_{M_f}$.
It follows by deforming the Cartesian intersection in the two orders.
More explicitly, form the closure of $M\times(\mathbb G_m)^2$
in the two successive deformation-to-normal-cone spaces for
$M\to P$ and $P_f\to P$, with the zero-parameter axes removed
before taking their closures. Both orders are obtained from the same
bigraded Rees algebra generated by the two ideals and the two
parameters. The two Cartier zero-fiber operations commute on that
common closure. One order is refined pullback of $C_{M/P}$; the
other is the normal-cone specialization of
$M\times_PP_f=M_f$ inside $P_f$. Components on removed parameter
axes give the ordinary excess terms in refined pullback; keeping
their cycle multiplicities is exactly what makes this a rational
equivalence rather than an equality of the two cones as schemes.
The cones map into the same pulled-back relation bundle by the
universal derivation of the equations $s$, proving (19) there.
This is the two-Rees argument used for the ordinary refined
zero-Gysin compatibility; it does not assert flatness of $M$. [F1, F2, F3, F4, F5, algebra, step 162.1]

164.1 After character localization, ordinary equivariant concentration and
the regular self-intersection formula give, for every equivariant
cycle $a$ on $M$,
$$
a=j_*\frac{i^!a}{e_T(T_m)}.
$$
For completeness concentration follows by stratifying a
finite-type complement of the fixed locus by stabilizer dimension:
on each stratum a nonzero character restricting trivially to its
stabilizer annihilates equivariant Chow after a power, via the
associated nowhere-zero character line. Finite stratification and
the localization sequence kill the entire complement after
inverting nonzero characters. Formula (20) then follows by
applying refined self-intersection to the resulting fixed-locus
class. This argument is performed on the finite-dimensional
equivariant approximations in the degrees in use. [F1, F2, F3, F4, F5, algebra, step 163.1]

165.1 Apply (20) to the virtual class. Refined compatibility from (17)
and (19) makes its numerator
$$
G_{E|_{M_f},\,C_{M_f/P_f}}[C_{M_f/P_f}].
$$
The cone in this expression has zero moving component.
Thom multiplicativity therefore evaluates its moving factor as
$e((E_m)_R)$ and leaves the fixed virtual class. Consequently
$$
[M]^{\rm vir}_{\rm hom}    =j_*\left(       [M_f]^{\rm vir}_{\rm hom}         \frac{e((E_m)_R)}{e_T(T_m)}         \right).
$$
All equalities are for the actual cycle-class images of the source
quadratic virtual classes, by the supported comparison above. [F1, F2, F3, F4, F5, algebra, step 164.1]

166.1 The weights of $E_m$ occur in opposite pairs. Its positive-weight half is a maximal isotropic bundle: the quadratic pairing has weight zero and can pair a positive weight only with its negative. Thus $e((E_m)_R)$ is the Euler class of that half, with the orientation sign already fixed above. Cancelling the positive and negative weights in $T_m$ expresses the denominator of (21) as $e_T(N^{>0})$. For a dual pair $t^{-w}V^\vee$, the identity $e_T(t^{-w}V^\vee)=(-1)^{\operatorname{rk}V}e_T(t^wV)$ gives exactly the determinant sign of the negative tangent half. The source convention incorporates that sign in the induced fixed orientation. Thus (21) is the corrected source formula (3.12), including its resolution-free sign. [F1, F2, F3, F4, F5, algebra, step 165.1]

167.1 For the quiver model one can obtain the smooth ambient space without claiming that every weak stability condition is a King character. Let $R$ be the affine space of degree-zero arrow matrices and $G$ the product of their change-of-bases groups. The stability conditions cut out a $G$-invariant open subscheme in the relation zero locus, by the given openness hypotheses. Extend that open to an invariant ambient open in $R$ by removing the invariant closed complement in the relation zero locus. In all flag, pair and enhanced spaces whose virtual classes occur in the residue calculation there is a distinguished framing vertex of dimension one. Fixing its basis rigidifies the common scalar action, leaving a product of the other general linear groups. On the stable locus that product has trivial automorphism group. Its infinitesimal stabilizer is the kernel of the explicit matrix-commutator linear map; the locus where this kernel is zero is ambient open. An automorphism of a quiver representation is an open subset of its endomorphism algebra, so in characteristic zero a zero-dimensional rigidified automorphism group here is the identity. Shrink the ambient open to this free locus. This avoids an unproved treatment of a residual $BG_m$ in the virtual cycle computation. The source's scalar translation on the unrigidified target is still retained in (2). [F1, F2, F3, F4, F5, algebra, step 166.1]

168.1 Take the matrix full-rank good pair
$U_N$ for the product $G$. Then
$$
P_N=(R_{\rm open}\times U_N)/G
$$
is an open in the vector bundle associated to $R$ over the
product of Grassmannians $U_N/G$. It is consequently a smooth
quasiprojective scheme. The section and its quadratic relation
bundle descend to it. Cancellation of the infinitesimal
gauge injection against the paired dual gauge terms leaves
the quadratic obstruction model
$[T_{P_N}\to E_N\to\Omega_{P_N}]$; the new smooth
approximation directions are accompanied by their symmetric
duals. Its virtual degree is shifted by $\dim U_N$, precisely
the degree shift of the good-pair construction. [F1, F2, F3, F4, F5, algebra, step 167.1]

169.1 The closed descendant construction already proves independence of these quotient Chow approximations: compare two choices on the product of their full-rank opens, using vector-bundle homotopy and the codimension of the omitted determinantal loci. The same comparison works for the quadratic class, since (17) commutes with those smooth pullbacks and restriction to opens. Thus (21) on these explicit smooth schemes gives the equivariant quotient identity in every required degree. Rigidification by the scalar action, and passage to the stable algebraic-space moduli, use their actual free quotient presentations and the same smooth cone identity. No projectivity of a coarse weak-stability moduli space, nor realization of the original weak stability by one character, is being assumed. [F1, F2, F3, F4, F5, algebra, step 168.1]

170.1 The corresponding smooth flag-forgetting compatibility is also visible in this model. On an injective flag chart the extra constraints $bc=0$ are independent linear coordinates of $b$. The relation generator and that coordinate cancel as a Koszul pair, and their duals cancel as its adjoint pair. Removing these paired acyclic summands leaves the old quadratic relation bundle pulled back along the smooth flag chart; its normal cone is the smooth pullback of the old normal cone. Ordinary smooth pullback commutes with the Thom operation, so the source homological virtual class is the smooth pullback of the old one. Changes of chart give the same equality by the intrinsic supported construction (17), rather than a choice of local cycle representatives. Capping with the relative top Chern class and pushing a proper flag bundle consequently multiplies by its fiber Euler characteristic, as used in the normalization calculation. This proves the smooth compatibilities actually used here; it is not a claim to a general Park virtual-pullback theorem for all quasismooth morphisms. [F1, F2, F3, F4, F5, algebra, step 169.1]

171.1 **Coefficient and orientation.** Work over rational localized equivariant Chow or Borel–Moore homology, with the coefficient theory specified by the original item. Write (u=e^z). For a perfect complex (K) on a fixed locus define. [F1, F2, F3, F4, F5, algebra, step 170.1]

172.1 $$
e_z(K)=z^{\operatorname{rk}K}c_{z^{-1}}(K).
$$
This is the displayed calculation. [F1, F2, F3, F4, F5, algebra, step 171.1]

173.1 The inverse Chern polynomials and Laurent expansions are taken in the same completion as the source vertex operation. In particular no convergence is asserted. For a vector bundle (A), splitting into formal Chern roots gives. [F1, F2, F3, F4, F5, algebra, step 172.1]

174.1 $$
e_{-z}(A^\vee)=(-1)^{\operatorname{rk}A}e_z(A).
$$
This is the displayed calculation. [F1, F2, F3, F4, F5, algebra, step 173.1]

175.1 This identity holds for perfect virtual differences as well: apply it to the numerator and denominator and subtract their ranks. Its proof uses the polynomial identity $\prod(-z-a_i)=(-1)^a\prod(z+a_i)$, hence does not require an actual splitting of the bundle. [F1, F2, F3, F4, F5, algebra, step 174.1]

176.1 For an oriented hyperbolic complex (H(K)=K\oplus K^\vee[2]), exchanging the two ordered isotropic halves changes the induced determinant trivialization by $(-1)^{\operatorname{rk}K}$. Indeed for a vector space of dimension (a) the exchange permutation has sign $(-1)^{a^2}=(-1)^a$; an exact two-term resolution reduces the perfect case to the quotient of the two such signs. Adding an acyclic summand adds the same dimension in adjacent degrees, whose signs cancel. Thus the assertion is independent of resolution. [F1, F2, F3, F4, F5, algebra, step 175.1]

177.1 **The endpoint and mixed.** The actual enhanced master has the endpoint/mixed fixed components established above, with the obstruction and orientation identifications constructed above. Its proper graph-fixed localization has zero total residue: the pushforward before localization has no negative auxiliary-character powers, so its Laurent coefficient of degree minus one vanishes. [F1, F2, F3, F4, F5, algebra, step 176.1]

178.1 At the negative endpoint the selected moving half is a weight-one line (L),
and its induced orientation agrees with the endpoint orientation. Its
contribution is
$$
[z^{-1}]\frac{[M_-]^{\rm vir}}{z+c_1(L)}=[M_-]^{\rm vir}.
$$
At the positive endpoint the selected half and the half used to induce the
endpoint orientation are exchanged. They have rank one, so the preceding
determinant calculation gives the negative sign, and the contribution is
$-[M_+]^{\rm vir}$. Higher powers of $c_1(L)/z$ cannot affect either
residue: they have Laurent degree at most $-2$. [F1, F2, F3, F4, F5, algebra, step 177.1]

179.1 On a mixed component (M_1\times M_2), let $\Theta_{\rm Fl}$ be the cross
complex and $\epsilon_{\rm Fl}$ its comparison of orientations. The moving
complex is $u\Theta_{\rm Fl}\oplus u^{-1}\Theta_{\rm Fl}^\vee[2]$.
The quotient map to the target stack is not equivariant with the trivial
equivariance structure on both factors. Its compensating isomorphism rescales
the first object. Consequently its equivariant map on quotient stacks is the
ordinary direct-sum map preceded by
$$
BG_m\times M_1\times M_2\longrightarrow M_1\times M_2,  \qquad (L,E_1,E_2)\longmapsto(L\otimes E_1,E_2).
$$
If $T$ denotes the infinitesimal translation induced by this (BG_m)
action, the equivariant pushforward is therefore
$\mu_* (e^{zT}\otimes1)$. To check the normalization, choose divided-power
classes $p_j\in H_{2j}(BG_m;\mathbb Q)$ dual to $c_1^j$, so
$\rho_*(p_j\otimes v)=T^jv/j!$. Summing $z^jp_j$ gives precisely
$e^{zT}$, without an additional factorial or sign. [F1, F2, F3, F4, F5, algebra, step 178.1]

180.1 The mixed residue is thus
$$
[z^{-1}]\epsilon_{\rm Fl}\mu_*\left(   (e^{zT}\otimes1)\frac{v_1\boxtimes v_2}{e_z(\Theta_{\rm Fl})}\right).
$$
This is the defining source flag vertex bracket. Zero total residue yields
$[M_+]^{\rm vir}-[M_-]^{\rm vir}=\sum_j[v_{1,j},v_{2,j}]_{\rm Fl}$.
This derivation includes the compensating stack isomorphism: using just
$\mu_*$ in (2) would omit the translation term and give a different bracket. [F1, F2, F3, F4, F5, algebra, step 179.1]

181.1 **Forgetting flags.** Write $A=\Theta_{\rm Fl/M}$ and let (B) denote its transposed cross
complex, with restrictions to the mixed locus understood. The direct-sum
deformation decomposition gives
$$
\Theta_{\rm Fl}=\Theta_M+A+B^\vee[2], \qquad  T_{\pi,\rm mixed}=T_{\pi_1}+T_{\pi_2}                          +u^{-1}A^\vee+uB^\vee.
$$
Here the summands of the second formula are actual vector bundles on the
relevant stable flag locus. This actual-bundle qualification is needed for
using their top Chern classes; equality merely in unrestricted K-theory is
not enough to identify a top Chern class with the Euler polynomial used here. [F1, F2, F3, F4, F5, algebra, step 180.1]

182.1 The numerator contributed by the two cross terms in the top Chern class of
$T_\pi$ is $e_{-z}(A^\vee)e_z(B^\vee)$. The corresponding two factors of
the denominator in (2) are $e_z(A)e_z(B^\vee)$. By (1) their quotient is
$(-1)^{\operatorname{rk}A}$. The determinant orientation comparison gives
$$
\epsilon_{\rm Fl}=(-1)^{\operatorname{rk}A}\epsilon_M.
$$
For completeness, the two determinant paths first cancel the hyperbolic
relative cross pair in opposite orders: one uses (A,A^\vee[2]), the other
uses (A^\vee[2],A). All base-cross factors and the transposed pair have the
same order. The hyperbolic calculation above proves (4). Hence the Chern
sign and the orientation sign cancel, leaving exactly $\epsilon_M$, the
base-category vertex convention. [F1, F2, F3, F4, F5, algebra, step 181.1]

183.1 The forgetful map commutes with direct sum and with tensoring the first object by a line. Proper pushforward and the projection formula therefore carry (2), capped with $c_{\rm top}(T_\pi)$, to the base bracket of the two separately Euler-capped pushforwards. No assertion that the uncapped forgetful map is a Lie homomorphism is used. [F1, F2, F3, F4, F5, algebra, step 182.1]

184.1 Let $N=\chi(\alpha(k))$ and $N_i=\chi(\alpha_i(k))$, so $N=N_1+N_2$.
Normalize a full-flag invariant by
$$
\Omega_{d,\alpha}=\frac1{N!}\pi_*        \bigl([M_{d,\alpha}]^{\rm vir}\cap c_{\rm top}(T_\pi)\bigr).
$$
The previous calculation gives the mixed coefficient
$N_1!N_2!/N!=\binom N{N_1}^{-1}$, proving the precise coefficient in
source (8.5). To see the endpoint normalization, flags over a framed line
in an (N)-dimensional vector space have fiber the complete flag variety of
an ((N-1))-dimensional quotient. Its Euler characteristic is ((N-1)!):
Gaussian elimination partitions it into affine cells indexed by permutations
of (N-1) letters, each of Euler characteristic one. Thus, once the compatible
virtual smooth-pullback identity is established, pushing its relative top
Chern class gives ((N-1)!), and the framed-line stage supplies the remaining
factor (N). This gives exactly the pair-invariant normalization, rather than
a new unproved scalar. [F1, F2, F3, F4, F5, algebra, step 183.1]

185.1 **Finite critical endpoints and the admissible factor closure.** For a fixed central charge $(1,\beta,n)$ every critical filtration consists of one central factor with whole curve class $\beta$ and point factors. If $d$ is the fixed degree and $b=d(3-d)/2$, their combined point length is at most $n-b$. Thus their possible charges, all partial sums and their auxiliary dimension vectors form a finite list. The positive additive rank and the actual critical kernel/image/cokernel closure proved above give the ordinary maximal-slope construction in this restricted sector: choose maximal slope, then maximal size; sums and intersections show uniqueness, and positive size bounds the filtration length. Hence the HN filtrations and their nested refinements used here exist and remain in this finite critical category. [F1, F2, F3, F4, F5, algebra, step 184.1]

186.1 A genuine additive comparison at the central wall is $\lambda(d_s,\gamma,m)=(1/2-t)(m-nd_s)$ for total $(1,\beta,n)$. On its only nontrivial critical split, $(1,\beta,n-l)+(0,0,l)$, the values are opposite and have the required sign. A source-one subobject missing a curve component is always destabilizing, and a source-zero curve subobject stays strictly below the changing cluster. Therefore no other old comparison can alter the central-wall endpoint. The full-flag auxiliary comparisons are exactly the additive comparisons on the finite list just described; nonzero slope gaps have a positive minimum. [F1, F2, F3, F4, F5, algebra, step 185.1]

187.1 For a proper critical subobject $B$ with $\lambda(B)=0$, the first induced flag dimension is zero or one. The first auxiliary slope coefficient is $e_1/r(B)-1/r(E)$, strictly negative in the former case and positive in the latter, since $0<r(B)<r(E)$. Hierarchical positive weights make its sign dominate every later term on the finite list. Thus endpoint flag stability is exactly the first-line critical-generation condition for the corresponding old semistable category. The induced maximal subflag is $V_i\cap\operatorname{Fr}(B)$, and exactness of the framing functor identifies its quotient. Nonzero $\lambda(B)$ dominates the sufficiently small flag perturbation. This proves the endpoint identification without an arbitrary-weak abelian closure assumption; all actual critical maps are those already checked geometrically above. [F1, F2, F3, F4, F5, algebra, step 186.1]

188.1 **The finite ordered S/U identities.** A word $w=(a_1,\ldots,a_n)$ consists of positive charges. A coarsening replaces consecutive nonempty blocks by their sums. Work in the free vector space on such words, with fixed total charge when appropriate. Every operation below only coarsens a word, so on that word it is finite and upper triangular in length with diagonal one. [F1, F2, F3, F4, F5, algebra, step 187.1]

189.1 For a weak stability $\tau$, call a block semistable if every proper initial part has phase at most that of its complementary final part. Call a block reversing if the phases of its entries strictly decrease. Define $H_\tau$ by summing all coarsenings whose blocks are semistable, and $R_\tau$ by summing all coarsenings whose blocks are reversing. [F1, F2, F3, F4, F5, algebra, step 188.1]

190.1 Each word has a unique blocking into semistable blocks whose total phases strictly decrease. Here is a direct finite proof. Take the longest semistable initial block, then repeat on the remaining word. Each choice exists because a one-letter block is semistable. If consecutive chosen blocks $U,V$ had $\tau(U)\le\tau(V)$, their concatenation would be semistable: at a cut inside $U$, write $U=P+Q$. Semistability gives $\tau(P)\le\tau(U)\le\tau(V)$ and $\tau(P)\le\tau(Q)$; weak seesaw gives $\tau(P)\le\tau(Q+V)$. At a cut inside $V=Q+P$, one instead has $\tau(U)\le\tau(V)\le\tau(P)$ and $\tau(Q)\le\tau(P)$, hence $\tau(U+Q)\le\tau(P)$. The boundary cut is the assumed inequality. This contradicts maximality of $U$, so consecutive phases strictly decrease. [F1, F2, F3, F4, F5, algebra, step 189.1]

191.1 For uniqueness, another decreasing semistable blocking has its first block no longer than the longest semistable prefix. If shorter, that longest prefix extends into a later block of the other blocking. Cut after the other's first block. All intervening whole blocks have strictly smaller phase, and the final partial block has phase at most that of its whole semistable block. Their sum therefore has strictly smaller phase than the first block. The longest prefix is then not semistable, a contradiction. The first blocks agree; induction on the remaining letters proves uniqueness. The same argument applies inside each block of any prescribed final coarsening. [F1, F2, F3, F4, F5, algebra, step 190.1]

192.1 Let $Z$ sum all coarsenings. The preceding uniqueness
proves the operator identity
$$
R_\tau H_\tau=Z.
$$
The inverse $B=Z^{-1}$ sends a word to each
coarsening with coefficient
$(-1)^{n-\text{number of output blocks}}$.
Indeed an interval of coarsenings is a Boolean
lattice of the removable cuts; its convolution
sum is $(1-1)^k$. Thus (1), and triangular
invertibility, give
$$
H_\tau B R_\tau=1.
$$
This is the displayed calculation. [F1, F2, F3, F4, F5, algebra, step 191.1]

193.1 Put
$$
\mathscr S_{\tau,\tau'}=H_{\tau'}BR_\tau.
$$
The coefficient of the one-letter output in (3)
is exactly the source $S(a_1,\ldots,a_n;\tau,\tau')$.
To check every sign, consider an original cut $i$.
It has three possible states:. [F1, F2, F3, F4, F5, algebra, step 192.1]

194.1 The required facts are: removed in $R_\tau$, allowed only if $d_i=[\tau(a_i)>\tau(a_{i+1})]=1$, with weight $+1$; * retained by $R_\tau$ and removed by $B$, with weight $-1$; * retained by both, allowed only if $p_i=[\tau'(a_1+\cdots+a_i) \le\tau'(a_{i+1}+\cdots+a_n)]=1$, with weight $+1$. [F1, F2, F3, F4, F5, algebra, step 193.1]

195.1 The conditions at distinct cuts are independent: reversing blocks impose exactly the first local inequalities, and semistability of the final coarsened word imposes exactly the last prefix/complement inequalities. The coefficient is therefore $\prod_i(d_i-1+p_i)$. A factor is $-1$ for $(d_i,p_i)=(0,0)$, is $+1$ for $(1,1)$, and is zero in the two other cases. These are precisely source cases (a), (b), and its vanishing cases. [F1, F2, F3, F4, F5, algebra, step 194.1]

196.1 For a general final coarsening this calculation
is performed independently inside its blocks.
Hence its coefficient is the product of the
source $S$ coefficients of those blocks.
Using (1),
$$
\mathscr S_{\tau',\tau''}\mathscr S_{\tau,\tau'}  =H_{\tau''}BR_{\tau'}H_{\tau'}BR_\tau  =H_{\tau''}BZBR_\tau  =\mathscr S_{\tau,\tau''}.
$$
Equation (2) gives the identity transition.
Thus (4) proves the ordered-grouping composition
of the actual source coefficients, not of
new recursively defined replacements. [F1, F2, F3, F4, F5, algebra, step 195.1]

197.1 Let $\mathscr E_\tau$ sum the coarsenings for which all entries within each collapsed block have the same $\tau$ phase, with coefficient $1/k!$ for a block of length $k$. Let $\mathscr L_\tau$ use the same phase condition and coefficient $(-1)^{k-1}/k$. They are inverse word operators. This can be verified in one formal variable by $\log(\exp x)=x$ and $\exp(\log(1+x))=1+x$; the coefficient of any fixed word is the finite sum over its ordered cuts, and the phase condition is constant inside each maximal equal-phase run. Thus the formal power-series identities prove each individual coefficient cancellation. [F1, F2, F3, F4, F5, algebra, step 196.1]

198.1 Define
$$
\mathscr U_{\tau,\tau'}    =\mathscr L_{\tau'}\mathscr S_{\tau,\tau'}                         \mathscr E_\tau.
$$
Its coefficient for one output letter is
the source double-grouping $U$:
the first grouping contributes the
$1/(\text{block size})!$ factors and the
$\tau$-permissibility condition; the
middle grouping contributes one $S$
for each final logarithm block; the
last logarithm contributes
$(-1)^{\ell-1}/\ell$ and requires every
final block to have the total
$\tau'$ phase. Weak seesaw makes
"all equal entry phases" equivalent
to the stated source condition
including their block-sum phases.
There are no omitted unordered
partitions or extra symmetry factors. [F1, F2, F3, F4, F5, algebra, step 197.1]

199.1 The inverses and (4) now give
$$
\mathscr U_{\tau',\tau''}\mathscr U_{\tau,\tau'}   =\mathscr U_{\tau,\tau''},\qquad  \mathscr U_{\tau,\tau}=1.
$$
This is the required finite Möbius
inversion and universal-$U$ composition. [F1, F2, F3, F4, F5, algebra, step 198.1]

200.1 Use a free associative algebra on primitive
symbols $z_a$, with
$\Delta z_a=z_a\otimes1+1\otimes z_a$.
Complete by the given positive height;
at every cutoff all operations are finite.
For each $\tau$ phase $\theta$ put
$z_{\tau,\theta}=\sum_{\tau(a)=\theta}z_a$.
The ordered product
$$
g=\prod_{\theta\ {\rm decreasing}}\exp(z_{\tau,\theta})
$$
is group-like. Constant stability $0$
in the source S formula gives
$S(w;\tau,0)=1$ exactly when
the entry phases strictly decrease,
and zero otherwise. Consequently
(4) says that transformation by
$S(\tau,\tau')$ is precisely
refactorization of the same total
series (7) into its $\tau'$-ordered
factors. This refactorization is
unique by positive-height induction
on its associative coefficients. [F1, F2, F3, F4, F5, algebra, step 199.1]

201.1 There is also a refactorization by exponentials of primitive elements. At the first unmatched height, the ratio of two group-like series has primitive leading term. Split it by charge and insert each part in its assigned $\tau'$ phase factor. This corrects that height and affects only larger heights. The equal-phase charge subspaces are closed under bracket, since weak seesaw gives $\tau'(a+b)=\theta$ when both phases equal $\theta$. This induction constructs the primitive phase factors uniquely. Thus the logarithm of the S refactorization is primitive. By (5), it is exactly the source $U$ polynomial in the initial $z_a$. [F1, F2, F3, F4, F5, algebra, step 200.1]

202.1 For completeness, primitives in this free associative algebra are Lie polynomials without an unproved structural theorem. Let $Y$ multiply a word of length $n$ by $n$, and let the antipode send $x_1\cdots x_n$ to $(-1)^nx_n\cdots x_1$. The convolution $D=S*Y$ satisfies $D(x)=x$ and $D(wx)=[D(w),x]$ for nonempty $w$. This follows by expanding $\Delta(wx)=\Delta(w)\Delta(x)$: the remaining term is $\sum S(w_{(1)})w_{(2)}x=0$. Hence $D$ sends a word to its left-nested commutator. On a primitive element homogeneous of word length $n$ its coproduct has only the two primitive terms, so $D(p)=np$. Therefore its left-nested representation is obtained by dividing every word coefficient by $n$. In particular $\widetilde U(w)=U(w)/|w|$ is one valid source choice. The source defines this choice only by the universal Lie identity; any other allowed choice represents the same Lie polynomial. No original bracket order is changed. [F1, F2, F3, F4, F5, algebra, step 201.1]

203.1 If a source $S$ coefficient is nonzero, choose the first entry whose initial phase is minimal. Its target phase is at least the target phase of the total. At the first or last position this is immediate from the single adjacent cut condition. At an interior position write the word as $P,q,R$. The conditions are $\tau'(P)\le\tau'(q+R)$ and $\tau'(P+q)>\tau'(R)$. If $\tau'(q)$ is less than both $\tau'(P),\tau'(R)$, weak seesaw would give $\tau'(P)\le\tau'(q+R) \le\tau'(R)$ while $\tau'(P+q)\le\tau'(P)$, a contradiction. If it is at least the phase of $P$, the second inequality also makes it at least the phase of $R$, and hence of the total. If it is at least the phase of $R$, the first inequality makes it at least that of $P$, with the same conclusion. Choosing the last maximal initial phase and reversing inequalities gives the dual bound. [F1, F2, F3, F4, F5, algebra, step 202.1]

204.1 Now suppose a nonempty proper subset $I$ of entries has all initial phases strictly smaller than those outside, and each of its target phases is strictly smaller than the target phase of the total. Then the source $U$ coefficient is zero. A permissible first grouping cannot mix $I$ with its complement. Choose a final logarithm block containing an $I$ block. Among its first grouping blocks the minimal initial phase belongs to $I$. Its target phase is strictly below that of the whole word, by weak seesaw on sums of $I$ entries. The preceding S bound contradicts the requirement that this final logarithm block have the total target phase. Every summand is therefore zero. The reversed version is identical. Our left-nested representative $U/|w|$ preserves this pointwise vanishing. [F1, F2, F3, F4, F5, algebra, step 203.1]

205.1 For a continuous finite family of additive auxiliary slopes, choose a sufficiently small interval around one wall so the relative order of all distinct wall-phase clusters stays unchanged. The ordered factorization (7) then refactors separately inside those clusters. Uniqueness shows that U cannot mix different wall clusters. If the geometric full-flag lemma permits only two nonzero factors at that wall, all nonlinear terms except those two vanish. On their two orders, the S definition and (5) give coefficients $+1,-1$ in associative form, hence their single bracket. Composition (6) propagates the identity across any finite list of such walls. This is the formal transport component; identifying all actual and formal auxiliary invariants, including the vertical framing changes, is still a geometric induction in the target assembly, not a consequence of naming U. [F1, F2, F3, F4, F5, algebra, step 204.1]

206.1 **Correct capped coordinates and the unframed transport.** Use positive framing size fβ=dim Fr(Eβ), additive on admissible same-phase triples, and old Lie classes zβ. Let Jβ be the actual one-line pair class and Cβ its Euler-capped forgetting. Put Ωβ=Cβ/fβ. Define z recursively by. [F1, F2, F3, F4, F5, algebra, step 205.1]

207.1 Cβ=fβ zβ+sum_{n≥2, β1+...+βn=β} fβ1/n! [zβn,[...,[zβ2,zβ1]...]].                 (C). [F1, F2, F3, F4, F5, algebra, step 206.1]

208.1 In a finite nilpotent truncation set A=sum zβ, and let D act by Dzβ=fβ zβ. Additivity makes D a Lie derivation. Then (C) says. [F1, F2, F3, F4, F5, algebra, step 207.1]

209.1 C(A)=sum_{n≥1} ad_A^(n−1)(DA)/n!=(D exp A)exp(−A). [F1, F2, F3, F4, F5, algebra, step 208.1]

210.1 To verify the last equality, differentiate the finite exponential polynomial and multiply on the right by exp(−A); collecting words with one differentiated letter gives the displayed adjoint series. Thus this is a coordinate change on every finite truncation, not an integration map from a Hall algebra. [F1, F2, F3, F4, F5, algebra, step 209.1]

211.1 Let r be the flag-chain length, and let ω(d,e)=sum_{i<r}(e_i d_{i+1}−d_i e_{i+1}) be the antisymmetric Euler form of its oriented chain. Work in the vector space with pure symbols p_d and labelled old classes q_e xβ. Define. [F1, F2, F3, F4, F5, algebra, step 210.1]

212.1 [p_d,p_e]=ω(d,e)p_{d+e}, [p_d,q_e xβ]=(ω(d,e)−d_r fβ)q_{d+e}xβ, [q_d xβ,q_e yγ]=q_{d+e}[xβ,yγ]. [F1, F2, F3, F4, F5, algebra, step 211.1]

213.1 These definitions satisfy Jacobi. The pure Jacobi identity follows by bilinearity of ω. For two pure terms acting on an old term, put k(d;e,β)=ω(d,e)−d_r fβ; the commutator of the two shift actions has coefficient ω(d,d′)(k(d;e,β)+k(d′;e,β))=ω(d,d′)k(d+d′;e,β). For one pure and two old terms, the action is a derivation because k(d;e+e′,β+γ)=k(d;e,β)+k(d;e′,γ). Three old terms reduce to Jacobi in the old Lie algebra. [F1, F2, F3, F4, F5, algebra, step 212.1]

214.1 Let ν be a tail vector with entries 0 before some a and 1 from a through r. Since [q_0 zβ,p_ν]=fβ q_ν zβ, formal refactorization moving this one pure tail past the old phase gives, in old class β,. [F1, F2, F3, F4, F5, algebra, step 213.1]

215.1 q_ν sum_{n≥1, β1+...+βn=β} fβ1/n! [zβn,[...,[zβ2,zβ1]...]]=q_ν Cβ.             (S). [F1, F2, F3, F4, F5, algebra, step 214.1]

216.1 Indeed expand exp(ad_(q0 A))pν; its first bracket is qν DA and all further brackets are qν times ordinary old adjoints. The factorial is the exponential factorial. Equivalently, in associative words with k old letters before the tail and n−k after it the coefficient is (−1)^(n−k)/(k!(n−k)!), which follows by multiplying exp(q0 A)pν exp(−q0 A). Thus it is the source S/U transport, with its Lie representative supplied by the finite word proof above. [F1, F2, F3, F4, F5, algebra, step 215.1]

217.1 An actual flag whose nonzero dimensions are this tail of ones is exactly a one-line pair with repeated isomorphisms in the tail; forgetting those repeated copies is an equivalence of moduli problems and identifies obstruction diagrams. Its actual capped class is Cβ. Therefore (S), together with the DEFINITION (C), proves actual/formal equality for this capped tail. This is an independent initialization: no uncapped JS equality is assumed. [F1, F2, F3, F4, F5, algebra, step 216.1]

218.1 For this seed choose the explicit endpoint strip x_a<x≤x_(a+1), where x_b=−(µ_b+...+µ_r)/(r−b+1), and set x_(r+1)=0 when a=r. If a formal pure decomposition of ν uses more than one interval generator, its interval reaching the last vertex starts at some b>a. Then x≤x_(a+1)≤x_b, so this terminal interval has nonpositive shifted numerator at the chosen endpoint and at the negative initial endpoint. It remains strictly below the mixed total in the auxiliary lexicographic order at both endpoints, and below every other surviving pure interval by the hierarchy. The extremal-group S/U cut vanishing removes that term. One must choose this strip: arbitrary positive x can let the terminal interval cross +infinity and invalidates the same-side argument. This leaves precisely the single-tail conjugation above. Pure interval generators are the unique indecomposable chain representations with one-dimensional spaces on their interval; their basis-change quotients are points. Multiplicities greater than one give the zero pure invariant in the relevant degree, as in the source auxiliary capped model. These are formal initialization choices; no moduli claim in a negative-weight chamber is needed. [F1, F2, F3, F4, F5, algebra, step 217.1]

219.1 For a chain vector d with jumps 0 or 1, let m=d_r≥2, let a be the first position with d_a=m, and let ν be the tail starting at a. Write d′=d−ν. Then d′_a=...=d′_r=m−1 and d′_{a−1}=m−1 (omit index0). Directly ω(ν,d′)=m−1. Hence. [F1, F2, F3, F4, F5, algebra, step 218.1]

220.1 [q_{d′}xβ,pν]=(fβ−m+1)q_d xβ.                                         (T). [F1, F2, F3, F4, F5, algebra, step 219.1]

221.1 The formal tail recursion uses the following finite cut classification. Vary a common auxiliary shift x through x0=−(µa+...+µr)/(r−a+1), the value where the tail has zero numerator. A surviving pure interval beginning strictly after a would introduce a positive jump after the total vector's plateau has begun, impossible because all old-nonzero factor vectors are nondecreasing. A pure interval of phase greater than this tail remains strictly above the total on both sides and is removed by extremal-group S/U vanishing. Thus all surviving pure factors are proportional to ν. The jump bound d_a−d_(a−1)=1 permits at most one such factor, with coefficient one. If two old-nonzero factors survived, take their maximal auxiliary slope when the tail is below, or their minimal slope when it is above. Their first nonzero coordinate is strictly before the final plateau; hierarchical µ and positive ranks make this group strictly separated from the total at both endpoints, again forbidden by the extremal cut rule. The only nontrivial change is therefore the two-term decomposition (β,d′)+(0,ν); its two-order S/U calculation is the single bracket (T). Away from x0 all formal coefficients are constant. This is a statement about finite refactorization coefficients, not a geometric wall-crossing assertion at x0. [F1, F2, F3, F4, F5, algebra, step 220.1]

222.1 Geometrically adding this last flag line has projective fibre P^(fβ−m). The relative flag map is smooth with that projective fibre, and the quadratic smooth-pullback compatibility established above identifies its virtual class with smooth pullback of the preceding virtual class. The projective-bundle formula [F4], applied to the relative Euler sequence, gives p_*(e(T_p) cap p^!a)=(fβ−m+1)a for every supported coefficient class a. Thus Euler-capping and forgetting multiplies the actual capped class by fβ−m+1. This is exactly (T). Induction starting at (S) proves actual/formal equality for every allowed capped flag at the old endpoint. For a complete flag m=fβ the product of the additional factors is (fβ−1)!, so its capped class has leading old term. [F1, F2, F3, F4, F5, algebra, step 221.1]

223.1 fβ! q_d zβ. [F1, F2, F3, F4, F5, algebra, step 222.1]

224.1 This calculation uses the actual positive-weight flag tower. The negative-weight x-chambers serve only to define formal U refactorizations and to classify their surviving pure tails; no new geometric master or properness hypothesis at negative weights is inferred. [F1, F2, F3, F4, F5, algebra, step 223.1]

225.1 If Ω_d denotes the source full-flag capped class divided by f!, define its unnormalized version C_d=f! Ω_d. Source (8.5) has coefficient binom(f,f1)^−1 multiplying [Ω_d1,Ω_d2]. Multiply by f! and substitute C_di=fi! Ω_di. Since f=f1+f2,. [F1, F2, F3, F4, F5, algebra, step 224.1]

226.1 f!/(binom(f,f1) f1! f2!)=1. [F1, F2, F3, F4, F5, algebra, step 225.1]

227.1 Thus actual unnormalized capped flag wall crossing is simply. [F1, F2, F3, F4, F5, algebra, step 226.1]

228.1 C_d,+−C_d,−=sum [C_d1,C_d2]. [F1, F2, F3, F4, F5, algebra, step 227.1]

229.1 This is precisely the formal simple-wall relation in the auxiliary Lie algebra. Starting from the capped tail seed and flag recursion just proved, induction through the finite wall list identifies actual and formal capped complete-flag classes at the new endpoint. At a mixed wall each nonzero old factor has smaller positive old rank, so the usual rank induction supplies the factor identifications; the finite critical endpoint and HN construction above establish that these are the actual admissible factors. Orientation and signs are those already fixed by the wall-localization calculation above. [F1, F2, F3, F4, F5, algebra, step 228.1]

230.1 Make TWO formal models. Model L starts with old zσ and pure intervals, then transports by the universal finite S/U rule to the new old stability and finally to complete flags. Model R starts with the recursively DEFINED old zσ′ and the same pure intervals, then transports only in the flag direction. Sections3–5 identify both models with the SAME actual capped complete-flag class. Universal U composition allows their comparison immediately before the flag transport. [F1, F2, F3, F4, F5, algebra, step 229.1]

231.1 Let wβ be Model L's transported unframed old class. Induct on positive framing size fβ. For the complete flag of size fβ, expand the difference of the two formal models. Every term with at least two nonzero old parts has each such part's positive f smaller than fβ, so it vanishes by the induction hypothesis wγ=zσ′γ. Pure interval factors coincide by construction. The only remaining terms are linear in the single old difference wβ−zσ′β. Their coefficient is fβ!, calculated by the capped tail seed and flag recurrence in §§3–4. Hence. [F1, F2, F3, F4, F5, algebra, step 230.1]

232.1 fβ! q_d(wβ−zσ′β)=0. [F1, F2, F3, F4, F5, algebra, step 231.1]

233.1 The symbols q_d embed a copy of the old rational Lie algebra, and fβ! is invertible, so wβ=zσ′β. This proves the induction. There is no need for framing size to descend to a numerical quotient beyond the actual positive additive classes used in this finite construction; the formal labels can retain their framing size. [F1, F2, F3, F4, F5, algebra, step 232.1]

234.1 Finally wβ is, by its definition in Model L, exactly the finite S/U transport of zσ. The finite word proof above gives its ordered-decomposition formula and Lie representative. The finite critical endpoint calculation above identifies the old-only source coefficients with U(...;σ,σ′), and finite path composition gives source (4.22). The unframed extraction uses only the capped seed, so its later application to the point-sector pair category is independent of a general uncapped sheaf identity. [F1, F2, F3, F4, F5, algebra, step 233.1]

235.1 **Independent point-sector uncapped identity.** Use these actual pair-category masters and the compatible obstruction diagrams from the global local-CY4 obstruction construction above. The capped unframed CY4 theorem applies on this source-degree-one finite frontier. At its two ends, the mixed positive-t class is stable, so the invariant equals its ACTUAL virtual pair class; at negative t only old point sheaves and the pure framing line remain. The original-source-degree-one part of the proved universal refactorization is. [F1, F2, F3, F4, F5, algebra, step 234.1]

236.1 exp(A) δ exp(−A)=exp(ad A)δ,. [F1, F2, F3, F4, F5, algebra, step 235.1]

237.1 where A is the sum of the fixed-k point-sheaf invariants. Expanding the finite nilpotent truncations gives. [F1, F2, F3, F4, F5, algebra, step 236.1]

238.1 [P_n]^vir = sum_{n1+...+nr=n} 1/r! [z_nr,[...,[z_n1,δ]...]]. [F1, F2, F3, F4, F5, algebra, step 237.1]

239.1 All terms have exactly one original source line. This is the UNCAPPED point-sector JS identity. Its seed is the stable endpoint virtual class in the pair CATEGORY, not the attempted inversion of a capped identity in the old category. Properness was proved above; the obstruction compatibility is the global diagram already constructed above. [F1, F2, F3, F4, F5, algebra, step 238.1]

240.1 **DT/PT endpoints, the point exponential and coefficientwise finiteness.** Use the source weak phases: a nonzero rank-one-source object has phase 1/2; an object with zero source and nonzero curve class has phase -1/2; a nonzero zero-dimensional sheaf with zero source has phase 1-t. Semistability compares the phase of a subobject with its complementary quotient. [F1, F2, F3, F4, F5, algebra, step 239.1]

241.1 At t=1/2, semistability of (O_X→F) is equivalent to having zero-dimensional cokernel. Indeed the source-one subobject with old sheaf im(s) has quotient coker(s). If that quotient has one-dimensional support, its phase -1/2 violates semistability. Conversely, if the cokernel is zero-dimensional, every source-one subobject has zero-dimensional quotient; every source-zero subobject is a sheaf of dimension at most one and has phase at most 1/2. These are all subobjects in the triple category, and all inequalities hold. [F1, F2, F3, F4, F5, algebra, step 240.1]

242.1 For t<1/2 a nonzero zero-dimensional subsheaf T⊂F is a source-zero subobject of phase 1-t>1/2, hence destabilizes. The preceding cokernel argument still applies. Thus a semistable object is precisely a pair with pure one-dimensional F and zero-dimensional cokernel: the PT pair. Conversely purity excludes point subobjects; every other source-zero subobject has phase -1/2 and every proper source-one subobject has nonzero point quotient of phase 1-t>1/2. The inequalities are strict, so these pairs are stable. [F1, F2, F3, F4, F5, algebra, step 241.1]

243.1 For t>1/2, if the cokernel Q is nonzero then im(s) gives a source-one subobject with point quotient of phase 1-t<1/2, which destabilizes. Thus s is surjective. Conversely a surjective s permits no proper source-one subobject. Every proper source-zero subobject has phase strictly below 1/2. These are precisely the stable DT pairs, equivalently ideal sheaves. No stability of an ordinary morphism image in a weak phase category is invoked; the image here is used as an explicit subobject of the ABELIAN triple category. [F1, F2, F3, F4, F5, algebra, step 242.1]

244.1 For completeness, the λ comparison at the central wall can be made by a genuine group homomorphism. For a fixed total class α=(1,β,n), use λ(d,γ,m)=(1/2-t)(m-nd). It vanishes on α. Every equal-central-phase nontrivial decomposition of α consists of a rank-one pair (1,β,n-l) and a point sheaf (0,0,l); λ gives the opposite values -(1/2-t)l and (1/2-t)l, with exactly the required phase ordering. This replaces the piecewise expression printed in Example 7.6 by an actual additive comparison, without changing any chamber or conclusion. [F1, F2, F3, F4, F5, algebra, step 243.1]

245.1 Every ordered decomposition of a source-rank-one class has exactly one source-rank-one letter. Pure curve letters have phase -1/2 on both sides of the wall, whereas source-rank-one and point letters meet at 1/2. The finite S/U extremal-cluster cancellation therefore excludes every word involving a pure curve letter from the nonlinear wall correction: that cluster is strictly below the changing cluster on both sides. This is also immediate from ordered exponential refactorization: the unchanged lower-phase curve factor occurs identically on the right of both ordered products and cancels before comparing the changing cluster. All remaining non-rank-one letters are point classes. [F1, F2, F3, F4, F5, algebra, step 244.1]

246.1 Let N(q)=sum_{l>0} z_{lp} q^l be the point-sector Lie element, and write P_β(q)=sum_m[PT_{β,m}]^vir q^m and D_β(q)=sum_m[DT_{β,m}]^vir q^m, in the source completed Lie module with its compatible orientations. The point invariants are the same on both sides: on their subcategory the phase is constant in the object and all relative comparisons are unchanged. [F1, F2, F3, F4, F5, algebra, step 245.1]

247.1 Before the wall, point phase is above the rank-one phase; after it, below. Ordered refactorization in the completed associative envelope therefore gives. [F1, F2, F3, F4, F5, algebra, step 246.1]

248.1 exp(N)exp(P)=exp(D)exp(N). [F1, F2, F3, F4, F5, algebra, step 247.1]

249.1 Work modulo source rank at least two, so P,D represent precisely the rank-one sector. Conjugating and taking the rank-one part yields. [F1, F2, F3, F4, F5, algebra, step 248.1]

250.1 D_β(q)=exp(ad N(q))P_β(q) =exp{sum_{l>0}[z_{lp},-]q^l}P_β(q).      (DT/PT). [F1, F2, F3, F4, F5, algebra, step 249.1]

251.1 This is the original operator exponential, with positive sign and its full factorial normalization. It is a consequence of the SAME ordered S/U transport, not a new numerical Hall integration assertion. [F1, F2, F3, F4, F5, algebra, step 250.1]

252.1 The uniform-support calculation above proves that central pairs of fixed class are scheme-theoretically supported on a common projective thickening. In the fixed projective embedding let d be their curve degree. For a PT pair, its image is O_D⊂F with D pure and point cokernel; hence χ(F)≥χ(O_D)≥d(3-d)/2. Thus the PT series is bounded below in m. Every coefficient of DT/PT then uses only point totals at most m-d(3-d)/2, so only finitely many positive point partitions occur. This verifies the formal completion used by the displayed exponential. [F1, F2, F3, F4, F5, algebra, step 251.1]

253.1 The virtual classes in this calculation are those of the actual trace-free complexes {O_X→F}. The actual triple and its fixed-source complex have the same named section and sheaf maps; their admissible exact triples are the componentwise ones defined above; the global spectral diagram construction supplies their local-CY4 enhanced obstruction compatibility. In stable chambers, the unframed invariants coincide with the actual stable virtual classes, so applying the established unframed transport gives DT/PT at the class level. For β=0 use the standard source convention that the empty PT pair is the unit in charge zero and other PT point sectors vanish; the same conjugation specializes to the Hilbert-scheme point formula. [F1, F2, F3, F4, F5, algebra, step 252.1]

254.1 **Conclusion.** The actual DT and PT endpoints, the point-sector action and the coefficientwise finite refactorization give exactly the displayed virtual-class series in the Statement, with the compatible orientations already fixed. The support construction supplies its closed projective support. All operations use the trace-free complexes of the actual fixed-source pairs. Thus the asserted local Calabi–Yau fourfold identity follows. [F1, F2, F3, F4, F5, step 253.1, algebra] ∎
