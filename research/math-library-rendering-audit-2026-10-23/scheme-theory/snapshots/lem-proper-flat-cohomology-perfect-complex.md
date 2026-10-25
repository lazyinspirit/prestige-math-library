---
id: lem-proper-flat-cohomology-perfect-complex
kind: lemma
title: "Finite projective complex for proper flat coherent cohomology"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-proper-morphism
  - def-locally-finite-type-and-finite-type-morphism
  - def-quasi-compact-and-quasi-separated-morphism
  - def-quasi-compact-and-quasi-separated-scheme
  - def-scheme
  - def-affine-open-subscheme
  - def-affine-scheme-spectrum
  - thm-separatedness-gluing-overlap-criterion
  - def-separated-morphism-schemes
  - cor-affine-scheme-quasi-compact
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-open-cover
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - def-sheaf-cohomology-derived-global-sections
  - lem-flat-sheaf-sections-flat-over-base
  - thm-direct-sums-and-direct-summands-preserve-flatness
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - thm-universal-property-of-module-direct-sums
  - def-quasi-coherent-module-scheme
  - def-higher-direct-image-sheaf
  - lem-higher-direct-image-affine-localization
  - thm-proper-pushforward-coherent
  - def-associated-sheaf-module-affine-scheme
  - def-coherent-module-scheme
  - def-finite-type-finite-presentation-module-sheaf
  - thm-affine-quasi-coherent-equivalence
  - lem-associated-sheaf-sections-basic-open
  - lem-distinguished-open-refinement-at-a-point
  - thm-localisation-of-modules-commutes-with-quotients-and-sums
  - lem-zero-in-a-localised-module
  - thm-finite-generation-and-finite-presentation-over-a-noetherian-ring
  - lem-finite-modules-over-noetherian-rings-are-noetherian
  - def-noetherian-module
  - cor-finite-flat-noetherian-modules-are-projective
  - lem-generated-submodule-as-finite-linear-combinations
  - def-generated-cyclic-finitely-generated-and-free-modules
  - def-base-change-morphism-schemes
  - def-pullback-module-ringed-spaces
  - lem-fibre-product-open-restriction
  - thm-affine-fibre-product-tensor-ring
  - lem-pullback-qc-module-quasi-coherent
  - thm-associativity-of-balanced-tensor-products
  - lem-separated-stable-under-base-change
  - lem-separated-stable-under-composition
  - cor-affine-schemes-separated
  - lem-base-change-quasi-compact-morphisms
  - lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms
  - def-tensor-product-total-complex-of-chain-complexes
  - def-quasi-isomorphism
  - cor-every-module-admits-a-projective-resolution
  - lem-projective-modules-are-flat-over-an-arbitrary-ring
  - def-tor-by-resolving-the-left-module
  - thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes
  - def-canonical-truncation-of-a-complex
  - def-cohomology-object-of-a-cochain-complex
  - thm-finite-flat-modules-over-local-rings-are-free
  - thm-noetherian-ring-quotients-and-localisations
  - thm-locally-free-locus-finite-presentation-open
  - def-locally-free-sheaf-finite-rank
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Lemma 30.22.1"
      url: "https://stacks.math.columbia.edu/tag/07VK"
    - title: "The Stacks Project, More on Algebra, Lemma 15.60.7 (bounded above flat complexes are K-flat)"
      url: "https://stacks.math.columbia.edu/tag/064K"
    - title: "The Stacks Project, More on Algebra, Lemma 15.66.5 (finite free replacement of a bounded above complex)"
      url: "https://stacks.math.columbia.edu/tag/064U"
    - title: "The Stacks Project, More on Algebra, Lemma 15.68.2 (flatness of the cokernel at the truncation degree)"
      url: "https://stacks.math.columbia.edu/tag/0653"
    - title: "The Stacks Project, More on Algebra, Lemma 15.76.2 (perfect complexes)"
      url: "https://stacks.math.columbia.edu/tag/0658"
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.26.2 (sections of a flat sheaf over affine opens)"
      url: "https://stacks.math.columbia.edu/tag/01U4"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice
([[def-axiom-of-choice]], [[def-dependent-choice]]), inherited from the
resolution and Tor criteria cited below. Let $A$ be a Noetherian commutative
ring, let $f:X\to\operatorname{Spec}A$ be a proper morphism
([[def-proper-morphism]]) and let $\mathcal F$ be a coherent
$\mathcal O_X$-module ([[def-coherent-module-scheme]]) that is flat over
$\operatorname{Spec}A$, meaning that for every $x\in X$ the stalk
$\mathcal F_x$ is a flat module over the local ring
$\mathcal O_{\operatorname{Spec}A,f(x)}$
([[def-flat-and-faithfully-flat-modules-and-ring-maps]],
[[lem-flat-sheaf-sections-flat-over-base]]).

Then there are an integer $r\ge0$ and a bounded complex $K^\bullet$ of finite
projective $A$-modules, concentrated in degrees $0,\dots,r$ and finite free in
all positive degrees, such that for every ring map $A\to A'$ and every
$q\in\mathbb Z$ there is a canonical isomorphism
$$H^q(K^\bullet\otimes_AA')\;\cong\;H^q(X_{A'},\mathcal F_{A'}),$$
where $X_{A'}:=X\times_{\operatorname{Spec}A}\operatorname{Spec}A'$ with
projection $p:X_{A'}\to X$ ([[def-base-change-morphism-schemes]]) and
$\mathcal F_{A'}:=p^*\mathcal F$ ([[def-pullback-module-ringed-spaces]]). The
isomorphisms are natural in the ring map $A\to A'$ and compatible with
composition of ring maps.

The complex can be made finite free locally on $\operatorname{Spec}A$: after
localising at any prime of $A$, and after restricting to a suitable Zariski
open cover of $\operatorname{Spec}A$, it becomes a bounded complex of finite
free modules.

The empty source $X=\varnothing$ (with the empty affine cover), the zero sheaf
$\mathcal F=0$, the one-member case $r=0$, the zero ring $A=0$, the base change
$A'=0$, the degrees $q<0$ and the range $q>r$ are included.

## Facts & Assumptions
**Given:** The Axiom of Choice and the Axiom of Dependent Choice, a Noetherian commutative ring $A$, a proper morphism $f:X\to\operatorname{Spec}A$, a coherent $\mathcal O_X$-module $\mathcal F$ whose stalks are flat over the corresponding local rings of $\operatorname{Spec}A$, and, wherever base change is discussed, a ring map $A\to A'$.

[F1] Properness unpacked: a proper morphism is separated, of finite type and universally closed; a morphism of finite type is quasi-compact; a quasi-compact morphism pulls quasi-compact open subsets back to quasi-compact open subsets; $\operatorname{Spec}A$ is quasi-compact; and every point of a scheme has an affine open neighbourhood. Hence $X$ is quasi-compact and admits a finite affine open cover $U_0,\dots,U_r$. ([[def-proper-morphism]], [[def-locally-finite-type-and-finite-type-morphism]], [[def-quasi-compact-and-quasi-separated-morphism]], [[cor-affine-scheme-quasi-compact]], [[def-scheme]], [[def-affine-open-subscheme]])

[F2] Affine intersections: for affine opens $U,V$ of $X$ lying over one and the same affine open of $\operatorname{Spec}A$, separatedness of $f$ implies that $U\cap V$ is affine (the full converse criterion also requires surjectivity of the tensor-to-sections map for every such pair); by induction every intersection of a nonempty finite family $U_I=\bigcap_{i\in I}U_i$ of members of a finite affine open cover is affine, with ring of global sections $B_I:=\mathcal O_X(U_I)$, and an intersection with empty underlying set is the affine scheme $\operatorname{Spec}0$. ([[thm-separatedness-gluing-overlap-criterion]], [[def-separated-morphism-schemes]], [[def-affine-scheme-spectrum]])

[F3] Ordered Čech complex and its cohomology: for an ordered cover $\mathcal U=(U_0,\dots,U_r)$ of a space and a sheaf of abelian groups $\mathcal G$ one has $C^p(\mathcal U,\mathcal G)=\prod_{i_0<\cdots<i_p}\mathcal G(U_{i_0}\cap\cdots\cap U_{i_p})$ with the alternating sum differential, $C^p=0$ for $p<0$ and for $p>r$, and $\delta^{p+1}\delta^p=0$; a morphism of sheaves induces a map of complexes, and $\check H^p$ is the cohomology of this complex. For a quasi-compact separated scheme, a finite affine open cover and a quasi-coherent module, every finite intersection of cover members is affine and the canonical comparison $\check H^p(\mathcal U,\mathcal G)\to H^p(X,\mathcal G)$ is an isomorphism for every $p\ge0$. ([[def-cech-cochain-complex-open-cover]], [[def-cech-cohomology-open-cover]], [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[def-sheaf-cohomology-derived-global-sections]])

[F4] Flatness of sections over affine opens: for a quasi-coherent $\mathcal G$ on a morphism $g:Y\to S$ that is flat over $S$ and affine opens $U\subseteq Y$, $V\subseteq S$ with $g(U)\subseteq V$, the module $\mathcal G(U)$ is flat over $\mathcal O_S(V)$; in particular the sections $\mathcal F(U_I)$ of the coherent $\mathcal F$ over the affine opens $U_I$ are flat $A$-modules. A finite direct sum of flat modules is flat, and a finite direct product of modules is canonically a direct sum. Flatness of a module means exactness of tensoring with it. ([[lem-flat-sheaf-sections-flat-over-base]], [[thm-direct-sums-and-direct-summands-preserve-flatness]], [[def-flat-and-faithfully-flat-modules-and-ring-maps]], [[thm-universal-property-of-module-direct-sums]])

[F5] Higher direct images: for a quasi-compact separated $f$ and a quasi-coherent $\mathcal F$, each $R^qf_*\mathcal F$ is quasi-coherent and for an affine open $V=\operatorname{Spec}B\subseteq S$ there is a canonical isomorphism $(R^qf_*\mathcal F)|_V\cong\widetilde{H^q(f^{-1}V,\mathcal F)}$ with the associated sheaf of the $B$-module $H^q(f^{-1}V,\mathcal F)$; and for $f$ proper over the locally Noetherian $\operatorname{Spec}A$ with $\mathcal F$ coherent, each $R^qf_*\mathcal F$ is a coherent $\mathcal O_{\operatorname{Spec}A}$-module. ([[def-higher-direct-image-sheaf]], [[lem-higher-direct-image-affine-localization]], [[thm-proper-pushforward-coherent]], [[def-associated-sheaf-module-affine-scheme]])

[F6] Finite type versus finite generation on an affine scheme: for a Noetherian ring $B$ and a $B$-module $N$ the associated sheaf $\widetilde N$ on $\operatorname{Spec}B$ is of finite type if and only if $N$ is finitely generated. Finite type supplies a finite cover of $\operatorname{Spec}B$ by distinguished opens $D(b_i)$ with $N_{b_i}$ finitely generated; generators of $N_{b_i}$ are of the form $x/b_i^{k}$ with $x\in N$, the $b_i$ generate the unit ideal, and a submodule of $N$ whose localisations at all the $b_i$ vanish is zero, so those numerators generate $N$. A coherent module is of finite type, and over a Noetherian ring a finitely generated module is finitely presented. ([[def-finite-type-finite-presentation-module-sheaf]], [[def-coherent-module-scheme]], [[thm-affine-quasi-coherent-equivalence]], [[def-associated-sheaf-module-affine-scheme]], [[lem-associated-sheaf-sections-basic-open]], [[lem-distinguished-open-refinement-at-a-point]], [[thm-localisation-of-modules-commutes-with-quotients-and-sums]], [[lem-zero-in-a-localised-module]], [[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]])

[F7] Noetherian module facts: over a Noetherian ring, submodules and quotients of finitely generated modules are finitely generated, finitely generated modules are Noetherian, and a finitely generated flat module is finite projective because it is finitely presented. ([[lem-finite-modules-over-noetherian-rings-are-noetherian]], [[def-noetherian-module]], [[cor-finite-flat-noetherian-modules-are-projective]], [[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]])

[F8] Finitely generated modules are quotients of finite free modules: if $N$ is generated by $n_1,\dots,n_s$, the $A$-linear map $A^s\to N$ with $e_j\mapsto n_j$ is surjective, where $A^s$ is the direct sum of $s$ copies of $A$ and the elements of $N$ are finite $A$-linear combinations of the generators. A finite free module is finite projective and flat. ([[lem-generated-submodule-as-finite-linear-combinations]], [[def-generated-cyclic-finitely-generated-and-free-modules]], [[thm-universal-property-of-module-direct-sums]], [[lem-projective-modules-are-flat-over-an-arbitrary-ring]])

[F9] Base change of the geometry: for the ring map $A\to A'$ put $S'=\operatorname{Spec}A'$, $X_{A'}:=X\times_{\operatorname{Spec}A}S'$ with projection $p:X_{A'}\to X$, and $\mathcal F_{A'}:=p^*\mathcal F$. For an open $U\subseteq X$ the open subscheme $p^{-1}(U)$ represents $U\times_{\operatorname{Spec}A}S'$; for the affine open $U_I=\operatorname{Spec}B_I$ this is $\operatorname{Spec}(B_I\otimes_AA')$, so the $p^{-1}(U_i)$ form a finite affine open cover of $X_{A'}$ and their intersections are $p^{-1}(U_I)$. Separatedness survives base change, so $X_{A'}\to S'$ is separated, and it is quasi-compact; composing with the affine morphism $S'\to\operatorname{Spec}\mathbb Z$ exhibits $X_{A'}$ as a quasi-compact separated scheme. ([[def-base-change-morphism-schemes]], [[def-pullback-module-ringed-spaces]], [[lem-fibre-product-open-restriction]], [[thm-affine-fibre-product-tensor-ring]], [[lem-separated-stable-under-base-change]], [[lem-separated-stable-under-composition]], [[cor-affine-schemes-separated]], [[lem-base-change-quasi-compact-morphisms]], [[cor-affine-scheme-quasi-compact]], [[def-quasi-compact-and-quasi-separated-scheme]])

[F10] Base change of quasi-coherent modules: the pullback of a quasi-coherent module is quasi-coherent; if $f:Y\to Z$ is a morphism of schemes, $U=\operatorname{Spec}B\subseteq Y$, $V=\operatorname{Spec}C\subseteq Z$ are affine opens with $f(U)\subseteq V$ and $\mathcal G|_V\cong\widetilde M$, then $f^*\mathcal G|_U\cong\widetilde{(B\otimes_CM)}$, the associated sheaf of the base change of $M$; and for an affine $U$ one has $\Gamma(U,\widetilde N)\cong N$ and $(B\otimes_CM)\cong C\text{-base change of }M$. ([[lem-pullback-qc-module-quasi-coherent]], [[thm-affine-quasi-coherent-equivalence]], [[def-associated-sheaf-module-affine-scheme]], [[thm-associativity-of-balanced-tensor-products]])

[F11] Flat complexes preserve quasi-isomorphisms: over any ring, tensoring a bounded above acyclic complex with a bounded above complex of flat modules gives an acyclic total complex, so a bounded above flat complex preserves quasi-isomorphisms between bounded above complexes in the other variable; the tensor total complex has the Koszul differential and a module is a complex concentrated in degree zero. Every module admits a projective resolution, and projective modules are flat. ([[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]], [[def-tensor-product-total-complex-of-chain-complexes]], [[def-quasi-isomorphism]], [[cor-every-module-admits-a-projective-resolution]], [[lem-projective-modules-are-flat-over-an-arbitrary-ring]])

[F12] Tor and the flatness criterion: for a module $N$ with a supplied projective resolution $P_\bullet\to N$ one has $\operatorname{Tor}_1^R(N,M)=H_1(P_\bullet\otimes_RM)$, the homology at $P_1\otimes_RM$; and a module $M$ is flat if and only if $\operatorname{Tor}_1^R(N,M)=0$ for every module $N$ over the commutative ring $R$, the projective-resolution data being supplied. ([[def-tor-by-resolving-the-left-module]], [[thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes]])

[F13] Canonical truncation: the truncation $\tau^{\ge n}X$ of a cochain complex has $(\tau^{\ge n}X)^n=\operatorname{coker}(d^{n-1})$, agrees with $X$ in degrees $>n$, vanishes below $n$, and receives the natural quotient map $X\to\tau^{\ge n}X$; cohomology objects are the kernel modulo image of the differentials. ([[def-canonical-truncation-of-a-complex]], [[def-cohomology-object-of-a-cochain-complex]])

[F14] Local freeness: a finite flat module over a Noetherian local ring is free ([[thm-finite-flat-modules-over-local-rings-are-free]]), and localisations of a Noetherian ring are Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]); for a finitely presented quasi-coherent module on a scheme the locus of points at which the stalk is free of a fixed rank is open and is contained in an open neighbourhood on which the module is free of that rank ([[thm-locally-free-locus-finite-presentation-open]], [[def-locally-free-sheaf-finite-rank]]).

[F15] The Axiom of Choice and the Axiom of Dependent Choice are the choice principles named in the statement. ([[def-axiom-of-choice]], [[def-dependent-choice]])

## Proof

**Proof technique:** direct: present the cohomology as the cohomology of a bounded Čech complex with flat terms, verify that base change of the coefficients commutes with the Čech complex and with its comparison map to sheaf cohomology, replace the flat complex by a bounded-above finite free complex by the classical descending syzygy construction over the Noetherian ring, show that this replacement is compatible with arbitrary coefficient change by the flat tensor criterion, and truncate to a bounded complex of finite projective modules with the degree-zero term shown flat by a Tor computation.

1.1 Setup and the cover. Since $f$ is proper it is separated and of finite type by [F1], hence quasi-compact, and $\operatorname{Spec}A$ is quasi-compact, so $X=f^{-1}(\operatorname{Spec}A)$ is quasi-compact; as affine opens form a basis there are an integer $r\ge0$ and a finite affine open cover $X=U_0\cup\cdots\cup U_r$, with the empty cover and $r=0$ allowed when $X=\varnothing$. [F1]

1.2 The intersections. For every nonempty finite subset $I\subseteq\{0,\dots,r\}$ the intersection $U_I:=\bigcap_{i\in I}U_i$ is affine, say $U_I=\operatorname{Spec}B_I$ with $B_I=\mathcal O_X(U_I)$; an intersection that is empty is the affine scheme $\operatorname{Spec}0$. Every $U_I$ is an affine open subscheme of $X$ mapping into the affine base $\operatorname{Spec}A$. [F2]

1.3 Flatness of the Čech terms. The coherent module $\mathcal F$ is quasi-coherent and its stalks are flat over the local rings of $\operatorname{Spec}A$, so [F4] applied to the affine open $U_I$ over the affine base gives that $\mathcal F(U_I)$ is a flat $A$-module. The degree-$p$ term $K^p:=\prod_{i_0<\cdots<i_p}\mathcal F(U_{i_0}\cap\cdots\cap U_{i_p})$ of the ordered Čech complex is a finite product of flat $A$-modules, hence a finite direct sum of flat modules, hence flat by [F4]. [F2, F4]

1.4 The Čech complex is bounded and flat. Put $K^\bullet:=C^\bullet(\mathcal U,\mathcal F)$ with $\mathcal U=(U_0,\dots,U_r)$; by [F3] its differential squares to zero, $K^p=0$ for $p<0$ and for $p>r$ because there are no increasing $(p+1)$-tuples in $\{0,\dots,r\}$, and each $K^p$ is a flat $A$-module by 1.3. Thus $K^\bullet$ is a bounded complex of flat $A$-modules concentrated in degrees $0,\dots,r$. [F3, 1.3]

1.5 The complex computes the cohomology of $X$. The scheme $X$ is quasi-compact and separated by [F1], the cover $\mathcal U$ is finite affine with all finite intersections affine by 1.2, and $\mathcal F$ is quasi-coherent, so [F3] gives a canonical isomorphism $\check H^q(\mathcal U,\mathcal F)\to H^q(X,\mathcal F)$, that is, $H^q(K^\bullet)\cong H^q(X,\mathcal F)$ for every $q\ge0$. [F1, F3, 1.2, 1.4]

1.6 Finiteness of the cohomology modules. Since $f$ is proper, $A$ is Noetherian and $\mathcal F$ is coherent, [F5] gives $R^qf_*\mathcal F\cong\widetilde{H^q(X,\mathcal F)}$ for the affine open $\operatorname{Spec}A$ and shows that $R^qf_*\mathcal F$ is a coherent sheaf on $\operatorname{Spec}A$; by [F6] it is of finite type, so the module $H^q(X,\mathcal F)$ is finitely generated, and by 1.5 each $H^q(K^\bullet)$ is a finitely generated $A$-module, while $H^q(K^\bullet)=0$ for $q\notin[0,r]$. [F5, F6, 1.5, 1.4]

1.7 The base-changed geometry. Fix a ring map $A\to A'$ and put $S'=\operatorname{Spec}A'$, $X_{A'}:=X\times_{\operatorname{Spec}A}S'$, with projection $p:X_{A'}\to X$, and $\mathcal F_{A'}:=p^*\mathcal F$. For $I\subseteq\{0,\dots,r\}$ put $U'_I:=p^{-1}(U_I)$; by [F9] $U'_I$ represents $U_I\times_{\operatorname{Spec}A}S'\cong\operatorname{Spec}(B_I\otimes_AA')$, so it is affine with ring $B_I\otimes_AA'$ and $U'_{i_0}\cap\cdots\cap U'_{i_p}=U'_{i_0\cdots i_p}$ for increasing tuples. The $U'_0,\dots,U'_r$ cover $X_{A'}$, since $p^{-1}$ commutes with unions and $U_0\cup\cdots\cup U_r=X$, so they form a finite affine open cover of $X_{A'}$. [F9, 1.2]

1.8 Base change of the sections. For every $I$ there is a canonical isomorphism $\Phi_I:\mathcal F(U_I)\otimes_AA'\to\mathcal F_{A'}(U'_I)$: the affine open $U_I=\operatorname{Spec}B_I$ satisfies $\mathcal F|_{U_I}\cong\widetilde{\mathcal F(U_I)}$ because $\mathcal F$ is quasi-coherent, so [F10] applied to the morphism $p$ and the affine opens $U'_I\subseteq X_{A'}$, $U_I\subseteq X$ gives $p^*\mathcal F|_{U'_I}\cong\widetilde{(B_I\otimes_AA')\otimes_{B_I}\mathcal F(U_I)}$, and since $\Gamma(U'_I,\widetilde N)\cong N$ and $(B_I\otimes_AA')\otimes_{B_I}\mathcal F(U_I)\cong\mathcal F(U_I)\otimes_AA'$ by [F10], taking global sections yields $\Phi_I$. [F10, 1.2]

1.9 Compatibility with restrictions and the base-changed complex. The isomorphisms $\Phi_I$ of 1.8 are compatible with restriction: for $I\subseteq J$ the square with the restriction maps $\mathcal F(U_I)\to\mathcal F(U_J)$ and $\mathcal F_{A'}(U'_I)\to\mathcal F_{A'}(U'_J)$ commutes, because both composites are obtained by applying the affine equivalence and the base change $(-)\otimes_AA'$ to the same restriction map, and these constructions are natural in the open subscheme. Consequently the $\Phi_I$, one for each increasing tuple, assemble into an isomorphism of complexes $K^\bullet\otimes_AA'\cong C^\bullet(\mathcal U',\mathcal F_{A'})$, where $\mathcal U'=(U'_0,\dots,U'_r)$ and the differentials on both sides are the componentwise alternating sums of restriction maps. [F3, F10, 1.8]

1.10 The base-changed complex computes the base-changed cohomology. The scheme $X_{A'}$ is quasi-compact and separated by [F9], the cover $\mathcal U'$ is finite affine with affine intersections by 1.7, and $\mathcal F_{A'}=p^*\mathcal F$ is quasi-coherent by [F10], so [F3] gives a canonical isomorphism $H^q(C^\bullet(\mathcal U',\mathcal F_{A'}))\cong H^q(X_{A'},\mathcal F_{A'})$ for every $q\ge0$. Combined with 1.9 there are canonical isomorphisms $H^q(K^\bullet\otimes_AA')\cong H^q(X_{A'},\mathcal F_{A'})$ for every ring map $A\to A'$; they are natural in $A'$, because the section isomorphisms of 1.8, their assembly in 1.9 and the comparison map of [F3] are all built from pullbacks and restrictions and commute with composition of ring maps. [F3, F9, F10, 1.7, 1.8, 1.9]

1.11 The descending construction: the invariant. For a partial complex $\tilde F$ concentrated in degrees $\ge n$ with finite free terms write $Z^n(\tilde F)=\ker(\tilde F^n\to\tilde F^{n+1})$. We construct, by descending induction on $n\le r+1$, partial complexes $F^{\ge n}$ with $F^i$ a finite free $A$-module for $n\le i\le r$ and $F^i=0$ for $i>r$, together with maps $\alpha^i:F^i\to K^i$ commuting with the differentials, such that $H^i(\alpha)$ is an isomorphism for every $i>n$ and surjective for $i=n$. The stage $n=r+1$ is the zero complex, the invariant being vacuous and $H^{r+1}$ being zero on both sides. [F8, 1.6]

1.12 The extension step: killing the kernel of $H^n(\alpha)$. Suppose the invariant of 1.11 holds at stage $n$. The module $H^n(F^{\ge n})=Z^n(F)/\operatorname{im}(d^{n-1})$ (with $F^{n-1}=0$) is a subquotient of the finitely generated free module $F^n$, hence finitely generated over the Noetherian ring $A$ by [F7], and so is the kernel of $H^n(\alpha):H^n(F)\to H^n(K)$; choose finitely many generators of this kernel, lift them to cycles $x_1,\dots,x_s\in Z^n(F)$, and let $F^{n-1}_0:=A^s\to Z^n(F)\subseteq F^n$ send $e_j\mapsto x_j$, a surjection onto their span. Each $x_j$ maps to a boundary in $K^n$ because its class lies in the kernel of $H^n(\alpha)$, so choose $y_j\in K^{n-1}$ with $d_K^{n-1}y_j=\alpha^n(x_j)$ and set $\alpha^{n-1}_0(e_j):=y_j$; then $\alpha^n d^{n-1}_0=d_K^{n-1}\alpha^{n-1}_0$, so $\alpha$ is a map of complexes on the extended partial complex, and the extension makes $H^n(\alpha)$ an isomorphism while leaving $H^i(\alpha)$ unchanged for $i>n$. [F7, F8, 1.11]

1.13 The extension step: making $H^{n-1}(\alpha)$ surjective. In the extended partial complex of 1.12 the cokernel of $H^{n-1}(\alpha):H^{n-1}(F)\to H^{n-1}(K)$ is a quotient of the finitely generated module $H^{n-1}(K)$ (1.6), hence finitely generated by [F7]; choose finitely many generators and cycles $z_1,\dots,z_t\in Z^{n-1}(K)$ representing them, and replace $F^{n-1}$ by $F^{n-1}\oplus A^t$, the new basis vectors mapping to $0$ in $F^n$ and to $z_j$ in $K^{n-1}$. The differentials still commute with the $\alpha$'s, since $d_Kz_j=0$, the homology $H^n(\alpha)$ remains an isomorphism because the image of $d^{n-1}$ in $F^n$ is unchanged, and $H^{n-1}(\alpha)$ becomes surjective because the classes of the $z_j$ generate its cokernel; hence the invariant of 1.11 holds at stage $n-1$. [F7, F8, 1.6, 1.11, 1.12]

1.14 The finite free replacement. The induction of 1.11-1.13 yields a complex $F^\bullet$ of finite free $A$-modules with $F^i=0$ for $i>r$, each degree being fixed after finitely many steps, together with a map of complexes $\alpha:F^\bullet\to K^\bullet$. For every $i\le r$ the stage $n=i-1$ exhibits $H^i(\alpha)$ as an isomorphism, and for $i>r$ both sides vanish; hence $\alpha$ is a quasi-isomorphism. [1.4, 1.11, 1.12, 1.13]

1.15 Tensoring the replacement with an arbitrary module. For every $A$-module $M$ the map $\alpha\otimes_A\operatorname{id}_M:F^\bullet\otimes_AM\to K^\bullet\otimes_AM$ is a quasi-isomorphism: choose a projective resolution $Q_\bullet\to M$; the complexes $F^\bullet$ and $K^\bullet$ are bounded above with flat terms and $Q_\bullet$ is bounded above with projective, hence flat, terms, so the three maps $F^\bullet\otimes Q_\bullet\to K^\bullet\otimes Q_\bullet$, $F^\bullet\otimes Q_\bullet\to F^\bullet\otimes M$ and $K^\bullet\otimes Q_\bullet\to K^\bullet\otimes M$ are quasi-isomorphisms by [F11]; these maps form a commutative square, so $H^q(\alpha\otimes M)$ is conjugate to the isomorphism $H^q(F\otimes Q)\to H^q(K\otimes Q)$ and is itself an isomorphism for every $q\in\mathbb Z$. [F11, 1.14]

1.16 The replacement is compatible with coefficient change. Taking $M=A'$ in 1.15, for every ring map $A\to A'$ the induced maps $H^q(F^\bullet\otimes_AA')\to H^q(K^\bullet\otimes_AA')$ are isomorphisms, canonical in the sense that they are induced by the single map of complexes $\alpha$ and hence natural in $A'$; composing with the isomorphism of 1.10 expresses $H^q(F^\bullet\otimes_AA')$ canonically and naturally in terms of $H^q(X_{A'},\mathcal F_{A'})$. [1.10, 1.15]

1.17 Truncation of the replacement. Let $E^\bullet:=\tau^{\ge0}F^\bullet$ be the canonical truncation of [F13], so that $E^i=0$ for $i<0$, $E^0=\operatorname{Coker}(F^{-1}\to F^0)$ and $E^i=F^i$ for $i>0$; then $E^\bullet$ is concentrated in degrees $0,\dots,r$, its positive-degree terms are finite free, and $E^0$ is finitely generated as a quotient of the finitely generated module $F^0$. The natural map $\pi:F^\bullet\to E^\bullet$ is the quotient in degree $0$, the identity in positive degrees and zero in negative degrees. It is a quasi-isomorphism: in degree $0$ the differential induced on $E^0$ has kernel $\ker(d_F^0)/\operatorname{im}(d_F^{-1})$, so $H^0(E)=H^0(F)$, and cohomology in positive degrees is unchanged. In negative degrees $E$ vanishes and $H^i(F)=H^i(K)=0$ by 1.14 and 1.4. [F13, F7, 1.4, 1.14]

1.18 Flatness of the truncation term. For every $A$-module $M$ the complex $\cdots\to F^{-2}\to F^{-1}\to F^0\to E^0\to0$ is a projective resolution of $E^0$, because $E^0=\operatorname{Coker}(d^{-1})$ and $H^i(F)=0$ for all $i<0$; hence by [F12] the module $\operatorname{Tor}_1^A(E^0,M)$ is the homology at $F^{-1}\otimes_AM$ of the complex $F^\bullet\otimes_AM$, namely $H^{-1}(F^\bullet\otimes_AM)$, and $\alpha\otimes M$ is a quasi-isomorphism by 1.15 while $K^\bullet\otimes_AM$ is concentrated in degrees $0,\dots,r$, so $H^{-1}(F^\bullet\otimes_AM)\cong H^{-1}(K^\bullet\otimes_AM)=0$. Therefore $\operatorname{Tor}_1^A(E^0,M)=0$ for every $M$, and [F12] makes $E^0$ a flat $A$-module. [F12, 1.4, 1.15]

1.19 The truncation term is finite projective. The module $E^0$ is finitely generated (1.17) over the Noetherian ring $A$, hence finitely presented by [F6], and it is flat by 1.18; therefore it is a finite projective $A$-module by [F7]. [F6, F7, 1.17, 1.18]

2.1 The complex and its base-change property. The complex $E^\bullet$ is a bounded complex of finite projective $A$-modules, concentrated in degrees $0,\dots,r$ and finite free in all positive degrees. Since $K^{-1}=0$ and $\alpha:F\to K$ is a chain map, $\alpha^0d_F^{-1}=d_K^{-1}\alpha^{-1}=0$. Thus $\alpha^0$ factors through $E^0=\operatorname{Coker}(d_F^{-1})$ and, together with $\alpha^i$ for $i>0$, gives a direct chain map $\gamma:E^\bullet\to K^\bullet$ with $\alpha=\gamma\pi$. Steps 1.14 and 1.17 make $\gamma$ a quasi-isomorphism. For every $A$-module $M$, both $F$ and $E$ are bounded above complexes of flat modules, the latter by 1.19. Apply the projective-resolution comparison from step 1.15 to the quasi-isomorphism $\pi$, using [F11] on both complexes, to see that $\pi\otimes_AM$ is a quasi-isomorphism; step 1.15 already proves the same for $\alpha\otimes_AM$. Since $\alpha\otimes_AM=(\gamma\otimes_AM)(\pi\otimes_AM)$, two-out-of-three makes $\gamma\otimes_AM$ a quasi-isomorphism. Taking $M=A'$ and composing with 1.10 gives canonical isomorphisms $H^q(E^\bullet\otimes_AA')\cong H^q(X_{A'},\mathcal F_{A'})$ for all $q\in\mathbb Z$, natural in $A'$ and compatible with composition of ring maps. For the local-freeness clause, fix a prime $\mathfrak p\subseteq A$: the ring $A_{\mathfrak p}$ is Noetherian and $E^0_{\mathfrak p}$ is a finite flat module over this Noetherian local ring, hence free by [F14]; moreover $\widetilde{E^0}$ is finitely presented, so by [F14] every point of $\operatorname{Spec}A$ has an affine open neighbourhood $V$ on which $\widetilde{E^0}|_V$ is free of finite rank, and then $E^\bullet\otimes_A\mathcal O(V)$ is a bounded complex of finite free $\mathcal O(V)$-modules. [F11, F14, 1.4, 1.10, 1.14, 1.15, 1.17, 1.19]

3.1 Boundaries and choice accounting. If $X=\varnothing$ the cover is empty, $K^\bullet=0$ by [F3], the construction of 1.11-1.14 returns $E^\bullet=0$, and for every $A'$ the scheme $X_{A'}$ is empty with zero sheaf, so both sides of the isomorphism vanish and the claims hold with $r=0$. If $\mathcal F=0$ then $K^\bullet=0$ and $E^\bullet=0$ for the same reason. A one-member cover, $r=0$, is included: then $K^\bullet=K^0=\mathcal F(U_0)$ is a single flat module in degree $0$ with finitely generated cohomology and the induction starts at $n=1$, producing $E^\bullet$ concentrated in degree $0$. The zero ring $A=0$ is Noetherian and $\operatorname{Spec}0=\varnothing$, so $X=\varnothing$ and the empty case applies, and for $A'=0$ the scheme $X_{A'}$ is empty and $K^\bullet\otimes_AA'=0$. For $q<0$ both sides vanish by 1.9 and 1.10, and for $q>r$ the complex $K^\bullet\otimes_AA'$ is concentrated in degrees $0,\dots,r$, so its cohomology vanishes and by 1.10 so does $H^q(X_{A'},\mathcal F_{A'})$. The Axiom of Choice [F15] is used for the finite affine cover, the affine equivalence and associated sheaves of [F6] and [F10], the finite free covers of finitely generated modules in [F8], and the projective resolutions of [F11]; the Axiom of Dependent Choice [F15] is used for the Tor and projective-resolution criteria [F11, F12] and for the descending recursion of 1.11-1.13, which makes finitely many choices at each of countably many stages. [F3, F6, F8, F10, F11, F12, F15, 1.4, 1.9, 1.10, 1.11, 1.13, 1.14, 2.1] ∎
