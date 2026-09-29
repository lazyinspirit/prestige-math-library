---
id: cor-upper-semicontinuity-cohomology-dimension
kind: corollary
title: "Upper semicontinuity of fibre cohomology dimensions"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-nakayama-generators-modulo-an-ideal
  - def-affine-open-subscheme
  - def-affine-scheme-spectrum
  - def-associated-sheaf-module-affine-scheme
  - def-axiom-of-choice
  - def-base-change-map-cohomology
  - def-base-change-morphism-schemes
  - def-coherent-module-scheme
  - def-cohomology-object-of-a-cochain-complex
  - def-dependent-choice
  - def-dimension
  - def-fibre-of-module-at-point
  - def-finite-type-finite-presentation-module-sheaf
  - def-finitely-presented-module-and-algebra
  - def-fitting-ideal-sheaf
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-generated-cyclic-finitely-generated-and-free-modules
  - def-higher-direct-image-sheaf
  - def-jacobson-radical-of-a-ring
  - def-kernel-cokernel-image-sheaves
  - def-locally-finite-presentation-morphism
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-free-sheaf-finite-rank
  - def-local-ring
  - def-module-homomorphism-kernel-image-and-cokernel
  - def-projective-module
  - def-proper-morphism
  - def-pullback-module-ringed-spaces
  - def-quasi-coherent-module-scheme
  - def-quasi-compact-and-quasi-separated-morphism
  - def-quotient-module
  - def-quotient-vector-space-and-canonical-projection
  - def-rank-and-nullity
  - def-residue-field-scheme-point
  - def-scheme
  - def-sheaf-cohomology-derived-global-sections
  - def-tensor-product-total-complex-of-chain-complexes
  - def-topological-space
  - def-upper-semicontinuous-real-map-on-a-topological-space
  - lem-associated-sheaf-stalk-localization
  - lem-base-change-composition
  - lem-base-change-locally-finite-type-presentation
  - lem-cohomology-functoriality-sheaf-and-space
  - lem-fibre-product-open-restriction
  - lem-higher-direct-image-affine-localization
  - lem-proper-flat-fp-cohomology-perfect-complex
  - lem-proper-stable-base-change
  - lem-pullback-qc-module-quasi-coherent
  - prop-quotient-vector-space-operations-and-projection
  - thm-affine-quasi-coherent-equivalence
  - thm-associativity-of-balanced-tensor-products
  - thm-cohomology-and-base-change
  - thm-fitting-ideals-control-rank-loci
  - thm-locally-free-locus-finite-presentation-open
  - thm-localisation-of-modules-is-tensor-product
  - thm-nakayama-lemma
  - thm-projective-module-characterizations
  - thm-rank-nullity
  - thm-right-exactness-of-tensor-products
  - thm-splitting-lemma-for-modules
  - thm-tensor-products-commute-with-arbitrary-direct-sums
  - thm-unit-isomorphisms-for-module-tensor-products
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Derived Categories of Schemes, Lemma 36.32.1 (Tag 0BDN)"
      url: "https://stacks.math.columbia.edu/tag/0BDN"
    - title: "The Stacks Project, Derived Categories of Schemes, Lemma 36.31.1 (Tag 0BDI)"
      url: "https://stacks.math.columbia.edu/tag/0BDI"
    - title: "The Stacks Project, Derived Categories of Schemes, Sections 36.30-36.32"
      url: "https://stacks.math.columbia.edu/download/perfect.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice
([[def-axiom-of-choice]], [[def-dependent-choice]]), inherited from the
perfect-complex construction cited below. Let $f:X\to S$ be a proper morphism
of finite presentation ([[def-proper-morphism]],
[[def-locally-finite-presentation-morphism]]) with $S$ an arbitrary scheme,
and let $\mathcal F$ be a coherent $\mathcal O_X$-module
([[def-coherent-module-scheme]]) that is flat over $S$: for every $x\in X$ the
stalk $\mathcal F_x$ is a flat module over the local ring
$\mathcal O_{S,f(x)}$ ([[def-flat-and-faithfully-flat-modules-and-ring-maps]],
[[def-local-ring]]). By [F2] such an $\mathcal F$ is finitely presented.

For $s\in S$ let $\kappa(s)$ be the residue field
([[def-residue-field-scheme-point]]), let
$$X_s:=X\times_S\operatorname{Spec}\kappa(s)$$
be the fibre of $f$ over $s$ with projection $g_s:X_s\to X$
([[def-base-change-morphism-schemes]]), and let
$\mathcal F_s:=g_s^*\mathcal F$ ([[def-pullback-module-ringed-spaces]]). Then
for every integer $q\ge0$ the function
$$h^q:S\longrightarrow\mathbb N,\qquad h^q(s):=\dim_{\kappa(s)}H^q(X_s,\mathcal F_s),$$
is finite-valued, and, regarded as a real-valued function via the inclusion
$\mathbb N\subseteq\mathbb R$, it is **upper semicontinuous** in the sense of
[[def-upper-semicontinuous-real-map-on-a-topological-space]]: for every
$a\in\mathbb R$ the strict sublevel set
$\{s\in S:h^q(s)<a\}$ is open in $S$, equivalently every superlevel set
$\{s\in S:h^q(s)\ge a\}$ is closed. Equivalently, and this is the form proved
below, every point $s_0\in S$ has an open neighbourhood $W\subseteq S$ with
$h^q(s)\le h^q(s_0)$ for all $s\in W$.

The empty source $X=\varnothing$, the zero sheaf $\mathcal F=0$, the empty base
$S=\varnothing$, the degree $q=0$, a perfect complex concentrated in degree
$0$, an affine or non-Noetherian base $S$ and the case $X_s=\varnothing$ for
some or all $s$ are included. No Noetherianness, projectivity, flatness of $f$
or finite-dimensionality hypothesis beyond the stated ones is imposed, and no
hypothesis at all is imposed on the cohomology and base-change maps of
[[thm-cohomology-and-base-change]]: coherence of $\mathcal F$ enters only
through the finite presentation supplied by [F2].

## Facts & Assumptions
**Given:** The Axiom of Choice and the Axiom of Dependent Choice, a proper morphism of finite presentation $f:X\to S$ with $S$ arbitrary, a coherent $\mathcal O_X$-module $\mathcal F$ flat over $S$, an integer $q\ge0$, and a point $s_0\in S$.

[F1] Properness, finite presentation and affine charts: a proper morphism is separated, of finite type and universally closed; a morphism of finite type is quasi-compact; every point of a scheme has an affine open neighbourhood, so there is an affine open $U=\operatorname{Spec}A\subseteq S$ containing $s_0$; the points of $U$ are the primes $\mathfrak m\subseteq A$, with residue field $\kappa(\mathfrak m)\cong A_{\mathfrak m}/\mathfrak m A_{\mathfrak m}$; the open subscheme $X_U:=f^{-1}U$ represents the fibre product $X\times_SU$, its structure morphism $X_U\to U$ is proper, and base change of a locally finitely presented morphism is again locally of finite presentation, so $X_U\to U$ is proper of finite presentation. ([[def-proper-morphism]], [[def-locally-finite-type-and-finite-type-morphism]], [[def-quasi-compact-and-quasi-separated-morphism]], [[def-locally-finite-presentation-morphism]], [[def-scheme]], [[def-affine-scheme-spectrum]], [[def-residue-field-scheme-point]], [[def-affine-open-subscheme]], [[lem-fibre-product-open-restriction]], [[lem-proper-stable-base-change]], [[lem-base-change-locally-finite-type-presentation]])

[F2] Coherence implies finite presentation: a coherent $\mathcal O_X$-module is quasi-coherent of finite type, and the kernel of every morphism $\mathcal O_U^n\to\mathcal F|_U$ is of finite type; hence on an affine open $\operatorname{Spec}B$ with $\mathcal F|_{\operatorname{Spec}B}\cong\widetilde M$ and $M$ finitely generated, the kernel of a surjection $B^n\to M$ is finitely generated and $M$ is finitely presented, so $\mathcal F$ is finitely presented; restrictions of coherent modules to open subschemes are coherent. ([[def-coherent-module-scheme]], [[def-finite-type-finite-presentation-module-sheaf]], [[def-quasi-coherent-module-scheme]], [[def-kernel-cokernel-image-sheaves]], [[def-finitely-presented-module-and-algebra]], [[thm-affine-quasi-coherent-equivalence]])

[F3] The universal perfect complex: for the commutative ring $A$, the proper morphism of finite presentation $X_U\to\operatorname{Spec}A$ and the finitely presented module $\mathcal F_U:=\mathcal F|_{X_U}$ that is flat over $A$ (each stalk flat over the corresponding base local ring), there are an integer $r\ge0$ and a bounded complex $K^\bullet$ of finitely generated projective $A$-modules, concentrated in degrees $0,\dots,r$ and finite free in positive degrees, with canonical isomorphisms $\theta_{A'}:H^q(K^\bullet\otimes_AA')\cong H^q((X_U)_{A'},(\mathcal F_U)_{A'})$ for every $A$-algebra $A'$ and every $q\in\mathbb Z$, natural in $A'$; here $K^\bullet\otimes_AA'$ is the termwise tensor complex and $H^q$ is the cohomology object of a cochain complex. The Axiom of Choice and the Axiom of Dependent Choice are inherited from this supplier. ([[lem-proper-flat-fp-cohomology-perfect-complex]], [[def-tensor-product-total-complex-of-chain-complexes]], [[def-cohomology-object-of-a-cochain-complex]], [[def-base-change-morphism-schemes]], [[def-pullback-module-ringed-spaces]], [[def-axiom-of-choice]], [[def-dependent-choice]])

[F4] Open restriction commutes with base change: for a morphism $f:X\to S$, an open $U\subseteq S$ and the open subscheme $X_U=f^{-1}U$ representing $X\times_SU$, and for every $S$-scheme $T$ whose structure morphism to $S$ factors through $U$, there is a canonical identification $X\times_ST\cong X_U\times_UT$ compatible with the projections; consequently, for $s\in U$ the fibre of $f$ at $s$ is canonically identified with the fibre of $f_U:X_U\to U$ at $s$, and under this identification the pullback of $\mathcal F$ to the fibre of $f$ corresponds to the pullback of $\mathcal F_U$ to the fibre of $f_U$, by the composition rule $f^*g^*\cong(g\circ f)^*$ for pullbacks of modules. ([[lem-fibre-product-open-restriction]], [[lem-base-change-composition]], [[def-base-change-morphism-schemes]], [[def-pullback-module-ringed-spaces]])

[F5] Cohomology is invariant under isomorphism: if a morphism of schemes is an isomorphism and the coefficient sheaves on source and target correspond under the pullback along it, then the pullback maps of sheaf cohomology along the isomorphism and along an inverse are mutually inverse, by the compatibility with composition and the identity clause of the variance of sheaf cohomology. ([[lem-cohomology-functoriality-sheaf-and-space]], [[def-sheaf-cohomology-derived-global-sections]])

[F6] Fibres of associated sheaves and quotients of finitely generated modules: let $A$ be a commutative ring, $N$ a finitely generated $A$-module and $\mathfrak p\subseteq A$ a prime with $\mathcal O_{\operatorname{Spec}A,\mathfrak p}=A_{\mathfrak p}$; then the canonical maps $(\widetilde N)_{\mathfrak p}\to N_{\mathfrak p}$ and $N_{\mathfrak p}\to N\otimes_AA_{\mathfrak p}$ are isomorphisms, and the fibre $\widetilde N(\mathfrak p)=(\widetilde N)_{\mathfrak p}\otimes_{A_{\mathfrak p}}\kappa(\mathfrak p)$ is canonically isomorphic to $N\otimes_A\kappa(\mathfrak p)$ through the associativity and unit isomorphisms for tensor products. A quotient module of a finitely generated module is finitely generated: the images of any generating family generate the quotient. ([[lem-associated-sheaf-stalk-localization]], [[def-fibre-of-module-at-point]], [[thm-localisation-of-modules-is-tensor-product]], [[thm-associativity-of-balanced-tensor-products]], [[thm-unit-isomorphisms-for-module-tensor-products]], [[def-associated-sheaf-module-affine-scheme]], [[def-affine-scheme-spectrum]], [[def-generated-cyclic-finitely-generated-and-free-modules]], [[def-quotient-module]])

[F7] Rank-nullity over a field and cokernels of linear maps: for a linear map $T:V\to W$ of vector spaces over a field with $V$ finite-dimensional, $\dim V=\dim\ker T+\operatorname{rank}T$ where $\operatorname{rank}T=\dim\operatorname{im}T$, and if $T$ is surjective then $W$ is finite-dimensional with $\dim W=\dim V-\dim\ker T$; dimensions of quotient spaces enter the proof only through this identity applied to surjections. For an $R$-module homomorphism $f:M\to N$ the cokernel is the quotient module $\operatorname{coker}f=N/\operatorname{im}f$, and the canonical projection $N\to\operatorname{coker}f$ is a surjective homomorphism with kernel $\operatorname{im}f$; over a field this is the quotient map of the vector space $N$ by its subspace $\operatorname{im}f$, so the surjective form above applies with $V=N$ and $W=\operatorname{coker}f$. ([[thm-rank-nullity]], [[def-rank-and-nullity]], [[def-dimension]], [[def-module-homomorphism-kernel-image-and-cokernel]], [[def-quotient-module]], [[def-quotient-vector-space-and-canonical-projection]], [[prop-quotient-vector-space-operations-and-projection]])

[F8] Finitely generated projective modules: a finitely generated module is a quotient of a finite free module; a surjection onto a projective module splits, so a finitely generated projective module is a direct summand of a finite free module, hence finitely generated and finitely presented; over a local ring $(R,\mathfrak n)$, a finitely generated module $N$ whose residue classes generate $N/\mathfrak nN$ is generated by lifts of those classes, and if $R^m\to N$ is a split surjection with kernel $N'$ then the induced surjection $R^m/\mathfrak nR^m\to N/\mathfrak nN$ is an isomorphism only if $N'=\mathfrak nN'$, so $N'=0$ and $N\cong R^m$ is free. The implication from projectivity to the splitting uses the Axiom of Choice. ([[def-generated-cyclic-finitely-generated-and-free-modules]], [[thm-splitting-lemma-for-modules]], [[thm-projective-module-characterizations]], [[def-projective-module]], [[thm-nakayama-lemma]], [[cor-nakayama-generators-modulo-an-ideal]], [[def-jacobson-radical-of-a-ring]], [[def-local-ring]], [[def-finitely-presented-module-and-algebra]], [[def-axiom-of-choice]])

[F9] The free locus and the fibre dimension: let $P$ be a finitely generated projective $A$-module with associated sheaf $\widetilde P$ on $\operatorname{Spec}A$; for $\rho\ge0$ the locus $Z_\rho=\{\mathfrak p\in\operatorname{Spec}A:\widetilde P_{\mathfrak p}\cong\mathcal O_{\operatorname{Spec}A,\mathfrak p}^{\ \rho}\}$ is open and $\widetilde P$ is locally free of rank $\rho$ on it. For the prime $\mathfrak p$, the stalk is $\widetilde P_{\mathfrak p}\cong P_{\mathfrak p}$ and the fibre is $\widetilde P(\mathfrak p)\cong P\otimes_A\kappa(\mathfrak p)$ by [F6]; on $Z_\rho$ this fibre is $\kappa(\mathfrak p)^\rho$, so the function $\mathfrak p\mapsto\dim_{\kappa(\mathfrak p)}(P\otimes_A\kappa(\mathfrak p))$ is constant with value $\rho$ on $Z_\rho$. ([[thm-locally-free-locus-finite-presentation-open]], [[def-locally-free-sheaf-finite-rank]], [[def-fibre-of-module-at-point]], [[lem-associated-sheaf-stalk-localization]], [[thm-affine-quasi-coherent-equivalence]], [[def-associated-sheaf-module-affine-scheme]], [[thm-localisation-of-modules-is-tensor-product]], [[thm-associativity-of-balanced-tensor-products]], [[thm-unit-isomorphisms-for-module-tensor-products]], [[thm-tensor-products-commute-with-arbitrary-direct-sums]])

[F10] Fitting ideals control fibre dimensions: let $\mathcal G$ be a quasi-coherent $\mathcal O_X$-module of finite type on a scheme $X$, with Fitting ideal sheaves $\operatorname{Fitt}_r(\mathcal G)\subseteq\mathcal O_X$ and fibre $\mathcal G(x)=\mathcal G_x\otimes\kappa(x)$; then for every $r\ge0$ the locus $D(\operatorname{Fitt}_r(\mathcal G))=\{x\in X:\dim_{\kappa(x)}\mathcal G(x)\le r\}$ is open in $X$. In particular, for a finitely generated module $N$ over a commutative ring $A$ and a prime $\mathfrak p\subseteq A$, the set of primes $\mathfrak p'$ with $\dim_{\kappa(\mathfrak p')}(N\otimes_A\kappa(\mathfrak p'))\le\dim_{\kappa(\mathfrak p)}(N\otimes_A\kappa(\mathfrak p))$ is an open neighbourhood of $\mathfrak p$ in $\operatorname{Spec}A$, the fibre of $\widetilde N$ being $N\otimes_A\kappa(\mathfrak p')$ by [F6]. ([[thm-fitting-ideals-control-rank-loci]], [[def-fitting-ideal-sheaf]], [[def-fibre-of-module-at-point]], [[def-finite-type-finite-presentation-module-sheaf]])

[F11] Upper semicontinuity and openness: a map $g:T\to\mathbb R$ on a topological space is upper semicontinuous exactly when every strict sublevel set $\{t:g(t)<a\}$ is open, equivalently when every superlevel set $\{g(t)\ge a\}$ is closed; the underlying topological space of a scheme is a topological space, and an arbitrary union of open sets is open, so a subset of a topological space that contains an open neighbourhood of each of its points is open. ([[def-upper-semicontinuous-real-map-on-a-topological-space]], [[def-topological-space]], [[def-scheme]])

[F12] Cohomology and base change (used only in the comparison of 1.10): for the family of the statement, a point $s\in S$ and $q\ge0$, the cohomology and base-change map is the $\kappa(s)$-linear map $\varphi^q_s:(R^qf_*\mathcal F)(s)\to H^q(X_s,\mathcal F_s)$ out of the fibre of the higher direct image sheaf ([[def-base-change-map-cohomology]], [[def-higher-direct-image-sheaf]], [[def-fibre-of-module-at-point]], [[def-pullback-module-ringed-spaces]], [[def-residue-field-scheme-point]]). If $\varphi^q_s$ and $\varphi^{q-1}_s$ are surjective (the second condition being automatic for $q=0$), then $R^qf_*\mathcal F$ is locally free of finite rank in a neighbourhood of $s$, and there is an affine open neighbourhood $U\subseteq S$ of $s$ such that for every morphism $h:T\to U$, with $g_T:X_T\to X$ the projection, the base-change map $h^*(R^qf_*\mathcal F|_U)\to R^qf_{T*}(g_T^*\mathcal F)$ is an isomorphism of $\mathcal O_T$-modules; for $T=\operatorname{Spec}\kappa(u)$ with $u\in U$ the left side has global sections the fibre $(R^qf_*\mathcal F)(u)$, by the affine localisation of higher direct images and the pullback formula for associated sheaves, and the right side has global sections $H^q(X_u,\mathcal F_u)$, so the fibre of the finite locally free sheaf $R^qf_*\mathcal F$ at $u$ is identified with $H^q(X_u,\mathcal F_u)$ and its dimension is the rank. ([[thm-cohomology-and-base-change]], [[lem-higher-direct-image-affine-localization]], [[lem-pullback-qc-module-quasi-coherent]], [[thm-affine-quasi-coherent-equivalence]], [[def-associated-sheaf-module-affine-scheme]], [[def-locally-free-sheaf-finite-rank]], [[def-base-change-morphism-schemes]], [[lem-fibre-product-open-restriction]])

[F13] The Axiom of Choice and the Axiom of Dependent Choice are the choice principles named in the statement. ([[def-axiom-of-choice]], [[def-dependent-choice]])

## Proof

**Proof technique:** direct: restrict to an affine chart of the base, let the universal perfect complex compute every fibre's cohomology, express each fibre cohomology dimension over its residue field by rank-nullity as a difference of fibre term dimensions and differential ranks, observe that the term dimensions are constant on the open free loci while the cokernel fibre dimensions are upper semicontinuous by Fitting ideals, and conclude that the cohomology dimension does not increase on a neighbourhood of each point.

1.1 The affine chart and its data. Fix $s_0\in S$ and choose by [F1] an affine open $U=\operatorname{Spec}A\subseteq S$ containing $s_0$; write $\mathfrak m_0\subseteq A$ for the corresponding prime, put $X_U:=f^{-1}U\cong X\times_SU$ and $\mathcal F_U:=\mathcal F|_{X_U}$. By [F1] the morphism $f_U:X_U\to U$ is proper of finite presentation; by [F2] the restriction $\mathcal F_U$ is coherent and finitely presented, conditions that are local on the source and pass to open subschemes; and $\mathcal F_U$ is flat over $A$, because for $x\in X_U$ one has $(\mathcal F_U)_x=\mathcal F_x$ and $\mathcal O_{U,f_U(x)}=\mathcal O_{S,f(x)}$. Fix $q\ge0$ for the rest of the proof. [F1, F2, given]

1.2 The universal complex on the chart. By 1.1 the hypotheses of [F3] hold for the proper finitely presented morphism $f_U$ and the finitely presented module $\mathcal F_U$ flat over $A$, so there are an integer $r\ge0$ and a bounded complex $K^\bullet$ of finitely generated projective $A$-modules, concentrated in degrees $0,\dots,r$ and finite free in positive degrees, with canonical isomorphisms $\theta_{A'}:H^q(K^\bullet\otimes_AA')\cong H^q((X_U)_{A'},(\mathcal F_U)_{A'})$ for every $A$-algebra $A'$ and every $q\in\mathbb Z$. [F3, 1.1]

1.3 The fibre cohomology computed by the complex. Let $\mathfrak p\in U$, with residue field $\kappa(\mathfrak p)$ and $s:=\mathfrak p\in S$. By [F4] the fibre $X_s=X\times_S\operatorname{Spec}\kappa(s)$ is canonically identified with the fibre $(X_U)_{\kappa(\mathfrak p)}=X_U\times_U\operatorname{Spec}\kappa(\mathfrak p)$ of $f_U$ at $\mathfrak p$, carrying $\mathcal F_s$ to $(\mathcal F_U)_{\kappa(\mathfrak p)}$; by [F5] the cohomology groups correspond, so $H^q(X_s,\mathcal F_s)\cong H^q((X_U)_{\kappa(\mathfrak p)},(\mathcal F_U)_{\kappa(\mathfrak p)})$ as $\kappa(\mathfrak p)$-vector spaces for every $q$. Composing with $\theta_{\kappa(\mathfrak p)}$ of 1.2 applied to the $A$-algebra $\kappa(\mathfrak p)$ gives, for every $q\ge0$, $$h^q(\mathfrak p)=\dim_{\kappa(\mathfrak p)}H^q(K^\bullet\otimes_A\kappa(\mathfrak p)),$$ where $K^\bullet\otimes_A\kappa(\mathfrak p)$ is the termwise tensor complex over the field $\kappa(\mathfrak p)$. [F3, F4, F5, 1.2]

1.4 The fibre complex and its dimensions. Put $C^\bullet:=K^\bullet\otimes_A\kappa(\mathfrak p)$, write $d^j_{\mathfrak p}:C^j\to C^{j+1}$ for its differentials, and put $e_j(\mathfrak p):=\dim_{\kappa(\mathfrak p)}C^j$; then $C^j=0$ and $e_j(\mathfrak p)=0$ for $j\notin\{0,\dots,r\}$. Each $e_j(\mathfrak p)$ is a natural number: $K^j$ is finitely generated, hence a quotient of a finite free $A$-module $A^n$, so $C^j$ is a quotient of the finite-dimensional space $\kappa(\mathfrak p)^n$, and [F7] gives $\dim_{\kappa(\mathfrak p)}C^j<\infty$. Applying the first identity of [F7] to $d^q_{\mathfrak p}$ and to $d^{q-1}_{\mathfrak p}$, and the surjective identity of [F7] to the canonical projection $\ker d^q_{\mathfrak p}\to H^q(C^\bullet)=\ker d^q_{\mathfrak p}/\operatorname{im}d^{q-1}_{\mathfrak p}$ with kernel $\operatorname{im}d^{q-1}_{\mathfrak p}$, gives $$h^q(\mathfrak p)=\dim_{\kappa(\mathfrak p)}\ker d^q_{\mathfrak p}-\operatorname{rank}d^{q-1}_{\mathfrak p}=e_q(\mathfrak p)-\operatorname{rank}d^q_{\mathfrak p}-\operatorname{rank}d^{q-1}_{\mathfrak p},$$ where $\operatorname{rank}d^j_{\mathfrak p}$ is the rank of the $\kappa(\mathfrak p)$-linear map $d^j_{\mathfrak p}$; in particular $h^q(s)$ is a natural number for every $s\in U$. [F6, F7, 1.3]

1.5 Cokernels and the rank identity. For every $j\in\mathbb Z$ let $N^j:=\operatorname{coker}(d^j:K^j\to K^{j+1})=K^{j+1}/\operatorname{im}(d^j)$ be the cokernel of the differential of $K^\bullet$; it is a finitely generated $A$-module, because $K^{j+1}$ is finitely generated and $N^j$ is a quotient of it, by [F6]. Tensoring the right-exact sequence $K^j\xrightarrow{d^j}K^{j+1}\to N^j\to0$ with $\kappa(\mathfrak p)$ yields an exact sequence $C^j\xrightarrow{d^j_{\mathfrak p}}C^{j+1}\to N^j\otimes_A\kappa(\mathfrak p)\to0$, so $N^j\otimes_A\kappa(\mathfrak p)\cong\operatorname{coker}(d^j_{\mathfrak p})$; by [F6] the fibre at $\mathfrak p$ of the associated sheaf $\widetilde{N^j}$ on $\operatorname{Spec}A$ is $\widetilde{N^j}(\mathfrak p)\cong N^j\otimes_A\kappa(\mathfrak p)$. Applying the surjective form of [F7] to the canonical projection $C^{j+1}\to\operatorname{coker}(d^j_{\mathfrak p})$, whose kernel is $\operatorname{im}(d^j_{\mathfrak p})$, gives $$\operatorname{rank}d^j_{\mathfrak p}=e_{j+1}(\mathfrak p)-\dim_{\kappa(\mathfrak p)}\left(N^j\otimes_A\kappa(\mathfrak p)\right),$$ valid for every $j$ and every $\mathfrak p\in U$, with both sides equal to $0$ when $j\ge r$ (where $K^{j+1}=0$ and $N^j=0$) and when $j<0$ (where $K^j=0$, $d^j=0$ and $N^j=K^{j+1}$ with $\operatorname{rank}d^j_{\mathfrak p}=0$). [F6, F7, 1.4]

1.6 Constant term dimensions on an open neighbourhood. By [F8] each $K^j$ is finitely generated projective, hence finitely presented, and by [F6] and [F9] the loci $Z_j(\rho)=\{\mathfrak p\in U:\widetilde{K^j}_{\mathfrak p}\cong\mathcal O_{U,\mathfrak p}^{\ \rho}\}$ are open and the fibre dimension $e_j(\mathfrak p)$ is constant with value $\rho$ on $Z_j(\rho)$. Since $K^j_{\mathfrak m_0}$ is free over the local ring $A_{\mathfrak m_0}$ by [F8], with $e_j:=e_j(\mathfrak m_0)$ one has $\mathfrak m_0\in Z_j(e_j)$; hence $$V:=\bigcap_{j=0}^{r}Z_j(e_j)$$ is an open neighbourhood of $\mathfrak m_0$ in $U$, and for every $\mathfrak p\in V$ and every $j\in\{0,\dots,r\}$ one has $e_j(\mathfrak p)=e_j$, while $e_j(\mathfrak p)=0$ for $j\notin\{0,\dots,r\}$. [F6, F8, F9, 1.4]

1.7 Upper semicontinuity of the cokernel fibre dimensions. Fix $j\in\mathbb Z$ and put $d_j:=\dim_{\kappa(\mathfrak m_0)}(N^j\otimes_A\kappa(\mathfrak m_0))$, the fibre dimension of $\widetilde{N^j}$ at $\mathfrak m_0$; the module $N^j$ is finitely generated by 1.5, so $\widetilde{N^j}$ is quasi-coherent of finite type on $U$ and [F10] shows that $$W_j:=\{\mathfrak p\in U:\dim_{\kappa(\mathfrak p)}(N^j\otimes_A\kappa(\mathfrak p))\le d_j\}=\{\mathfrak p\in U:\dim_{\kappa(\mathfrak p)}\widetilde{N^j}(\mathfrak p)\le d_j\}$$ is open in $U$ and contains $\mathfrak m_0$. On the open set $V\cap W_j$, using 1.5, 1.6 and the constancy of $e_{j+1}$ on $V$, $$\operatorname{rank}d^j_{\mathfrak p}=e_{j+1}-\dim_{\kappa(\mathfrak p)}(N^j\otimes_A\kappa(\mathfrak p))\ge e_{j+1}-d_j=\operatorname{rank}d^j_{\mathfrak m_0}.$$ [F6, F10, 1.5, 1.6]

1.8 The cohomology dimension does not increase near $s_0$. Set $W:=V\cap W_q\cap W_{q-1}$, an open subset of $U$ containing $\mathfrak m_0$. For every $\mathfrak p\in W$, combining 1.4 with the inequalities of 1.7 for $j=q$ and $j=q-1$ gives $$h^q(\mathfrak p)=e_q-\operatorname{rank}d^q_{\mathfrak p}-\operatorname{rank}d^{q-1}_{\mathfrak p}\le e_q-\operatorname{rank}d^q_{\mathfrak m_0}-\operatorname{rank}d^{q-1}_{\mathfrak m_0}=h^q(\mathfrak m_0).$$ Since $W\subseteq U\subseteq S$ is open in $S$ and contains the point $s_0$ corresponding to $\mathfrak m_0$, this exhibits for $s_0$ an open neighbourhood on which $h^q$ does not exceed its value at $s_0$. [1.4, 1.7]

1.9 Upper semicontinuity. The point $s_0\in S$ was arbitrary in 1.1-1.8, so every point of $S$ has an open neighbourhood on which $h^q$ does not exceed its value at that point. Let $a\in\mathbb R$ and put $A_a:=\{s\in S:h^q(s)<a\}$; for every $s\in A_a$ the neighbourhood just produced is contained in $A_a$, because $h^q(t)\le h^q(s)<a$ for every $t$ in it. Hence $A_a=\bigcup\{O\subseteq S\text{ open}:O\subseteq A_a\}$: the inclusion from right to left is clear, and the converse holds because each $s\in A_a$ lies in an open $O\subseteq A_a$. By the union axiom of [F11] this arbitrary union of open sets is open, so $A_a$ is open and equivalently each superlevel set $\{h^q\ge a\}$ is closed; regarded as a real-valued function, $h^q$ is therefore upper semicontinuous on $S$. [F11, 1.8]

1.10 Comparison with the base-change hypotheses (context, not used above). If at $s_0$ the maps $\varphi^q_{s_0}$ and $\varphi^{q-1}_{s_0}$ of [F12] are surjective -- for $q=0$ the second condition is automatic -- then [F12] supplies an open neighbourhood of $s_0$ on which $R^qf_*\mathcal F$ is locally free of finite rank and every base change of $R^qf_*\mathcal F$ is an isomorphism, and the base change to $\operatorname{Spec}\kappa(u)$ identifies the fibre of $R^qf_*\mathcal F$ at a nearby point $u$ with $H^q(X_u,\mathcal F_u)$; the function $h^q$ is then constant, equal to that rank, on a neighbourhood of $s_0$. The argument of 1.1-1.9 assumes no such surjectivity and covers the points where the base-change maps fail to be isomorphisms: this is exactly the content of the corollary, and it is the reason the fibre cohomology is computed from the universal complex of 1.2 rather than from $R^qf_*\mathcal F$. [F12, 1.2, 1.8, 1.9]

2.1 Boundaries and choice. If $X=\varnothing$ then every fibre $X_s$ is empty, all groups $H^q(X_s,\mathcal F_s)$ vanish by the empty-sum convention of the cohomology functor, and $h^q\equiv0$ is constant; the same conclusion holds if $\mathcal F=0$ or if the complex of 1.2 is the zero complex, and in the latter case $r=0$, $K^0=0$ and every $e_j=0$, so that $V=W_j=U$ in 1.6 and 1.7. If $S=\varnothing$ then $h^q$ has empty domain, every strict sublevel set is empty and therefore open, and the pointwise form of the statement is vacuous. A fibre $X_s=\varnothing$ at a point is included: by the comparison of 1.3 the complex $K^\bullet\otimes_A\kappa(\mathfrak p)$ has vanishing cohomology, and 1.4 still computes $h^q(\mathfrak p)=0$. The zero ring $A=0$ does not occur here, because $\mathfrak m_0$ is a prime of $A$ and $\operatorname{Spec}0=\varnothing$; the case $q=0$ is included in 1.4 with $d^{-1}_{\mathfrak p}=0$, and the case $q>r$ is included with $e_q=0$ and $\operatorname{rank}d^{q-1}_{\mathfrak p}=0$. The Axiom of Choice is consumed through [F3] in 1.2 and through [F8] and [F9] in 1.6, and the Axiom of Dependent Choice is inherited from [F3]; the Fitting loci of [F10] in 1.7 and the sets $V\cap W_j$ are determined by the given data and the fixed point $\mathfrak m_0$, and no further selection of points, presentations or minors is made. [F3, F8, F9, F10, F13, 1.2, 1.4, 1.6, 1.7] ∎
