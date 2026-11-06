---
id: thm-gts-gaussmanin-connection-and-griffiths-transversality
kind: theorem
title: "Gauss–Manin connection and Griffiths transversality"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC, inherited from the compact Kähler Hodge suppliers."
deps:
  - def-gts-polarized-variation-of-hodge-structure-and-period-map
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-fundamental-theorem-for-nonautonomous-smooth-odes
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - prop-the-maximal-solution-domain-is-open
  - def-axiom-of-choice
  - thm-dolbeault-lemma-polydisc
  - thm-smooth-function-module-sheaves-are-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-abelian-sheaves-have-enough-injectives
  - thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-de-rham-theorem
dependency_roles:
  def-gts-polarized-variation-of-hodge-structure-and-period-map: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-fundamental-theorem-for-nonautonomous-smooth-odes: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  prop-the-maximal-solution-domain-is-open: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-dolbeault-lemma-polydisc: mathematical-premise
  thm-smooth-function-module-sheaves-are-acyclic: mathematical-premise
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
  thm-abelian-sheaves-have-enough-injectives: mathematical-premise
  thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties, Harvard CMSA revision"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "§3.3, printed pp. 41–44, especially (3.59)–(3.61) and Theorems 3.11–3.12. The coefficient comparison and connecting-map identification are proved locally below, not imported as an external premise."
    - title: "Pierre Deligne, Théorie de Hodge II, Publications Mathématiques de l’IHÉS 40 (1971)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
      locator: "§4.2.1–§4.2.5, printed pp. 43–45, especially the added-in-proof footnote on p. 45: geometric variations, holomorphic Hodge filtration and Griffiths transversality; the filtration itself is not generally flat."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\pi:\mathcal X\to S$ be a smooth proper holomorphic submersion over a smooth complex manifold. Assume each fibre is compact Kähler, the Hodge numbers in degree $k$ are locally constant, and the relative holomorphic de Rham filtration is locally free and commutes with restriction to fibres. Then $R^k\pi_*\mathbb C$ is a finite-rank local system, its associated flat holomorphic bundle has the Gauss–Manin connection $\nabla$, and the Hodge filtration is holomorphic and satisfies
$$\nabla F^p\subseteq\Omega_S^1\otimes F^{p-1}.$$
A flat rational polarization additionally requires projective/ample data or an independently supplied polarization.

## Statement references

[[def-gts-polarized-variation-of-hodge-structure-and-period-map]]

[[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]

[[def-compact-kahler-manifold-and-hodge-polarization-conventions]]

[Voisin, §3.3](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)

## Facts & Assumptions

**Given:** Full AC; a smooth proper holomorphic submersion $\pi:\mathcal X\to S$ with compact Kähler fibres; locally constant Hodge numbers; and locally free relative de Rham filtration with base change.

[A1] Full AC is [[def-axiom-of-choice]], inherited through the compact elliptic Hodge suppliers.

[F1] A polarized variation requires the integral/rational local system, its associated flat holomorphic bundle and connection, a holomorphic Hodge filtration by subbundles, fibrewise pure Hodge structures, Griffiths transversality, and a flat rational bilinear form polarizing every fibre ([[def-gts-polarized-variation-of-hodge-structure-and-period-map]]). Omitting the polarization gives the underlying variation of Hodge structure. This theorem constructs the local system, connection and transverse filtration; it calls them polarized only if the additional flat polarization is supplied.

[F2] For every compact Kähler fibre, the Hodge-to-de Rham spectral sequence degenerates at $E_1$ and its Hodge filtration agrees with the holomorphic-degree filtration ([[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]).

[F3] Every smooth manifold admits a smooth partition of unity subordinate to an open cover ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]); applying it to local positive definite metrics patches them to a smooth Riemannian metric.

[F4] A smooth nonautonomous vector field has unique local solutions, with smooth dependence on the initial data ([[thm-fundamental-theorem-for-nonautonomous-smooth-odes]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]). The maximal solution domain is open ([[prop-the-maximal-solution-domain-is-open]]).

[F5] The local Dolbeault lemma gives exact smooth resolutions of holomorphic bundles, by applying its coordinate formula to each coefficient in a holomorphic frame ([[thm-dolbeault-lemma-polydisc]]). Smooth-function-module sheaves are acyclic on every open subset ([[thm-smooth-function-module-sheaves-are-acyclic]]). Under AC, abelian sheaves have injective resolutions, and an acyclic resolution computes right derived functors ([[thm-abelian-sheaves-have-enough-injectives]], [[thm-acyclic-resolution-theorem-for-right-derived-functors]]). Finite double-complex comparisons use the bounded filtered-complex spectral sequence ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

[F6] On a fixed compact boundaryless Riemannian manifold, the formally symmetric Laplace-type operator has a finite smooth kernel, harmonic projection $\Pi$, and Green inverse $G$ with $\Delta G=G\Delta=1-\Pi$ on smooth forms. The inverse is bounded $H^r\to H^{r+2}$ for every nonnegative integer $r$, and is continuous in the smooth topology ([[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]). The compact Kähler Hodge supplier [F2] applies this to the de Rham Laplacian.

[F7] Integration identifies smooth de Rham cohomology naturally with singular cohomology under countable choice ([[thm-de-rham-theorem]]); applying its real comparison to real and imaginary parts gives the complex comparison. Full AC [A1] supplies the needed choice principles.

## Proof

**Proof technique:** smooth local trivialization, an explicit fine de Rham–Dolbeault resolution and fixed-fibre Green contraction, followed by the filtered connecting map.

1.1 Use [F3] to patch coordinate metrics to a smooth positive definite metric on $\mathcal X$. The orthogonal complement of $\ker d\pi$ is a smooth horizontal subbundle, and $d\pi$ restricts to an isomorphism from it to $\pi^*TS$. For a smooth base path $\gamma:[0,1]\to S$, horizontal lifting is therefore a smooth time-dependent ODE in submersion coordinates. Local existence, uniqueness and parameter dependence are exactly [F4]. A lift cannot end at an interior time $b$: its graph lies in the compact set $\pi^{-1}(\gamma([0,1]))$, and finitely many local ODE neighborhoods of this set provide a common continuation interval around any putative finite endpoint. Equivalently, take a convergent subsequence of states as $t\uparrow b$, choose an ODE neighborhood of the limit state, and continue from a sufficiently late state across $b$; uniqueness glues that continuation to the original lift. The same argument works backwards and at both ends of the interval, after smoothly extending $\gamma$ slightly. Choose a coordinate ball $B$ with compact closure in a larger ball about $s_0$. Lifting the radial paths $s_0+u(s-s_0)$ gives a map $X_{s_0}\times B\to\pi^{-1}(B)$ smooth in $(x,s)$ by [F4]; compactness supplies finitely many parameter neighborhoods covering the whole lifting interval. Lifting the reversed radial path gives its smooth inverse. Thus this map is a smooth fibre trivialization. If the initial fibre is empty, reverse lifting would send any point of a neighboring fibre into that empty fibre, so the whole trivialized preimage is empty and its cohomology local system has rank zero. For a homotopy of paths with fixed endpoints, the same parameter argument gives a homotopy of fibre maps. Changes between trivializations consequently act locally constantly on cohomology. The smooth de Rham complex resolves the constant complex sheaf: the real coordinate radial homotopy proves local exactness, and its smooth terms are acyclic on every open set by [F5]. Its terms are acyclic on every inverse image and hence have zero higher direct images: their derived-image stalks are filtered colimits of those open-set cohomology groups. The acyclic-resolution theorem [F5] therefore computes the higher direct image with this complex. Over a smaller product $X_{s_0}\times V$ with $V$ a coordinate ball, contraction of $V$ to its centre induces the usual cochain homotopy on smooth forms, so [F7] identifies these groups with $H^k(X_{s_0};\mathbb C)$. The fibre cohomology groups have finite dimension by [F2], so $R^k\pi_*\mathbb C$ is a finite-rank local system. Tensoring its locally constant transition matrices with $\mathcal O_S$ gives a holomorphic bundle $\mathcal H$; differentiation of coefficient functions in a flat frame defines its flat connection. [A1, F1, F2, F3, F4, F5, F7, given, construct]

2.1 The relative holomorphic de Rham complex resolves $\pi^{-1}\mathcal O_S$, rather than the constant sheaf on $\mathcal X$. Indeed, submersion coordinates $(s,w)$ identify $\pi$ locally with projection; the homotopy $w\mapsto uw$, $0\le u\le1$, and integration of its contraction give $d_wh+hd_w=1-\operatorname{ev}_{w=0}$ on relative forms. The integral preserves holomorphic dependence on $(s,w)$, so positive-degree closed relative forms are locally exact and degree-zero closed relative functions are precisely holomorphic functions of $s$. This is a local resolution; to compute its proper direct image we now give the coefficient comparison explicitly. [given, step 1.1, construct]

3.1 Let $\mathcal A_{\mathcal X}^{a,b}$ be the sheaf of smooth complex differential forms of type $(a,b)$, with differential $d=\partial+\bar\partial$. For $r=1,2$, let $L^r\mathcal A$ be the differential ideal generated by wedges of $r$ pulled-back holomorphic base one-forms; on a base chart it is generated by $ds_{i_1}\wedge\cdots\wedge ds_{i_r}$. It is differential-stable since the $ds_i$ are closed. Put $\mathcal Q=\mathcal A/L^1\mathcal A$. The Dolbeault resolution of each holomorphic bundle $\Omega^a_{\mathcal X/S}$ identifies its $b$th term with $\mathcal A^{a,b}/L^1\mathcal A^{a,b}$: a local holomorphic submersion chart supplies a holomorphic frame for the quotient cotangent bundle, and [F5] applies coefficientwise. Its column cohomology is the relative holomorphic $a$-form sheaf in degree zero and zero in positive degree. Consequently its finite total complex is $\mathcal Q$, with induced differential $d$, and the inclusion $\Omega^\bullet_{\mathcal X/S}\to\mathcal Q$ is a quasi-isomorphism by the bounded double-complex comparison in [F5]. The same argument resolves $\Omega^\bullet_{\mathcal X}/L^2$ by $\mathcal A/L^2\mathcal A$, compatibly with their kernel and quotient complexes. Every smooth term of these quotient bundles is a smooth-function-module sheaf. It is acyclic on every open inverse image $\pi^{-1}(V)$ by [F5]. These terms are therefore $\pi_*$-acyclic: for an injective resolution of such a sheaf $\mathcal B$, the stalk of $R^j\pi_*\mathcal B$ is $\varinjlim_{s\in V}H^j(\pi^{-1}(V),\mathcal B)$, since a stalk is the filtered colimit of section groups and filtered colimits of vector spaces are exact. Restriction of an injective sheaf to an open set remains injective, because extension by zero is its exact left adjoint; thus those section complexes compute precisely these groups. Their positive groups vanish. Applying the acyclic-resolution and bounded double-complex comparisons of [F5] now shows that $\pi_*\mathcal Q$ computes $R\pi_*\pi^{-1}\mathcal O_S$, and also the hyperdirect image of the relative holomorphic de Rham complex. No constructibility or coherent-direct-image theorem has been used. [F5, given, step 2.1, algebra, construct]

4.1 Fix a sufficiently small base polydisc $B$ and the smooth trivialization $\pi^{-1}(B)\simeq M\times B$ from step 1.1. It preserves $s$, hence also the ideal generated by the $ds_i$, even though it need not preserve the fibre complex structure. In smooth product coordinates every class in $\mathcal Q$ has a unique expansion in vertical real differentials $dy$ and antiholomorphic base differentials $d\bar s$, and its differential is $D=d_M+\bar\partial_B$ with the total-complex sign. More explicitly, for vertical degree $a$, $D(\alpha\wedge\beta)=d_M\alpha\wedge\beta+(-1)^a\alpha\wedge\bar\partial_B\beta$. Fix one metric on the compact fibre $M$, and apply [F6] to its de Rham Laplacian. On smooth fibre forms the identity $\langle\Delta u,u\rangle=\|d_Mu\|^2+\|d_M^*u\|^2$ shows that harmonic forms are closed and coclosed. Since $d_M\Delta=\Delta d_M$, uniqueness of the inverse on the harmonic complement gives $d_MG=Gd_M$: their difference is harmonic, while both terms are orthogonal to every harmonic form by integration by parts. Hence, with $h=d_M^*G$, one has $d_Mh+hd_M=1-\Pi$. Extend $h,\Pi$ coefficientwise to jointly smooth forms on $M\times B$. This extension preserves joint smoothness and commutes with every base derivative: compactness identifies a smooth family with a smooth map into $C^\infty(M)$ in all derivative seminorms, and the bounds in [F6] make $G$, and hence $h$, continuous in those seminorms. Applying a continuous linear map to the difference quotients and their Taylor remainders commutes with each parameter derivative; iteration proves the assertion for every mixed derivative. With the displayed total-complex sign, the two $\bar\partial_B$ cross terms in $Dh+hD$ cancel. Thus $Dh+hD=1-\Pi$ on sections over every open subset of $B$. The complex $\pi_*\mathcal Q|_B$ retracts onto $\bigoplus_a\mathcal H^a(M)\otimes\mathcal A_B^{0,\bullet}[-a]$, with differential $\bar\partial_B$ on each shifted summand. This is a contraction of actual smooth complexes; no unproved parameter-dependent Green operator is required. [A1, F2, F6, given, step 1.1, step 3.1, algebra, construct]

5.1 By the local Dolbeault lemma [F5], the last complex has cohomology sheaves $\mathcal H^k(M)\otimes\mathcal O_B$ in total degree $k$. The harmonic projection and [F7] identify $\mathcal H^k(M)$ with $H^k(M;\mathbb C)$. This proves the full coefficient comparison
$$R^k\pi_*\pi^{-1}\mathcal O_S\simeq (R^k\pi_*\mathbb C)\otimes_{\mathbb C}\mathcal O_S\simeq R^k\pi_*\Omega^\bullet_{\mathcal X/S}.$$
The map is the natural multiplication map: a locally constant cohomology class represented by a closed fibre form $\alpha$ and a holomorphic function $f(s)$ are sent to the class of $f(s)\alpha$ in $\pi_*\mathcal Q$. Its $D$-closedness follows from $d_M\alpha=0$ and $\bar\partial_Bf=0$. It agrees with the morphism induced by $\mathbb C\to\pi^{-1}\mathcal O_S$ followed by multiplication by $f$; the two resolutions in steps 2.1–3.1 compute that same sheaf morphism. It is therefore independent of the chosen metric and trivialization and glues on overlaps. The Hodge filtration here is the image of the hyperdirect image of the holomorphically truncated relative complex. Its differential is $\pi^{-1}\mathcal O_S$-linear, so these image sheaves are holomorphic $\mathcal O_S$-submodules of the now identified holomorphic bundle $\mathcal H$. By the exact local-freeness and fibre-base-change hypothesis in the Statement, they have their stated locally free fibres; [F2] identifies those fibres with the Hodge filtration. Their inclusions have constant fibre rank, so a nonzero maximal holomorphic minor supplies a local holomorphic complement. They are therefore holomorphic subbundles $F^p\mathcal H$. This uses the given filtration hypothesis and does not assume the comparison it was needed to prove. The empty-fibre case has zero complexes and zero bundle; for a zero-dimensional nonempty fibre the contraction has only degree zero. [F2, F5, F7, given, step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 Filter the absolute holomorphic de Rham complex by holomorphic base degree, $L^r\Omega^m_{\mathcal X}=\pi^*\Omega_S^r\wedge\Omega^{m-r}_{\mathcal X}$. There is an exact sequence of complexes
$$0\to\pi^*\Omega_S^1\otimes\Omega_{\mathcal X/S}^{\bullet-1}\to\Omega^\bullet_{\mathcal X}/L^2\to\Omega^\bullet_{\mathcal X/S}\to0.$$
The kernel has the usual minus sign on its relative differential, since $d(ds\wedge\alpha)=-ds\wedge d\alpha$. Step 3.1 gives a compatible exact sequence of acyclic smooth total resolutions. On its product model from step 4.1 the quotient differential is $d_M+\bar\partial_B$, while the middle complex additionally retains the terms with exactly one $ds_i$. A class of $\mathcal H$ is represented by $\sum_\nu f_\nu(s)\alpha_\nu(y)$ with $\alpha_\nu$ fixed harmonic forms and $f_\nu$ holomorphic, by step 5.1. Lift precisely that smooth form to the middle complex. Its differential is $\sum_{i,\nu}ds_i\wedge(\partial_{s_i}f_\nu)\alpha_\nu$. Thus the connecting map, identifying the kernel with base one-forms written first, is exactly $\sum_{i,\nu}ds_i\otimes(\partial_{s_i}f_\nu)[\alpha_\nu]$. Finite local freeness of $\Omega_S^1$ justifies taking this tensor through the direct image, by writing it as a finite direct sum on the base chart. Independence of the lift follows because changing the lift adds a kernel cochain and changes its differential by a kernel boundary. By step 5.1 the $[\alpha_\nu]$ are flat cohomology frames, so this is the flat Gauss–Manin connection from step 1.1. It obeys $\nabla(fu)=df\otimes u+f\nabla u$ and has zero curvature because the coefficient derivatives commute. In particular, the connecting map is not claimed to be $\mathcal O_S$-linear. [F5, F6, F7, given, step 1.1, step 3.1, step 4.1, step 5.1, algebra]

7.1 The holomorphic-degree truncation $F^p\Omega^m$ is zero for $m<p$ and equals $\Omega^m$ for $m\ge p$. The sequence in step 6.1 restricts to an exact sequence with quotient $F^p\Omega^\bullet_{\mathcal X/S}$ and kernel $\pi^*\Omega_S^1\otimes F^{p-1}\Omega_{\mathcal X/S}^{\bullet-1}$; a local holomorphic splitting of the submersion cotangent sequence checks surjectivity and the kernel in each degree. This filtration counts holomorphic degree, not the added antiholomorphic degree in its Dolbeault resolution. The differential preserves the filtered complexes. Their connecting maps therefore send the image filtration $F^p\mathcal H$ into $\Omega_S^1\otimes F^{p-1}\mathcal H$. The degree shift in the kernel turns its degree $k+1$ into degree $k$ in the unshifted relative complex. Step 6.1 identifies this same unfiltered connecting map with $\nabla$, proving $\nabla F^p\subseteq\Omega_S^1\otimes F^{p-1}$. For $p\le0$ the full complex is used, and for $p$ above the fibre holomorphic dimension its image is zero. None of these constructions selects a rational polarization; that still requires the additional flat polarization in the Statement. [F2, F5, given, step 5.1, step 6.1, algebra] ∎

## Remarks

The theorem states the constant-Hodge-number and relative-base-change hypotheses explicitly. For a smooth projective family the exact local-system and polarization supplier is [[lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations]]; that projective result is not extended here to arbitrary compact Kähler families.
