---
id: thm-vector-bundles-locally-free-sheaves-equivalence
kind: theorem
title: Finite locally free sheaves and geometric vector bundles
status: published
origin: pipeline
deps:
  - def-vector-bundle-scheme
  - def-locally-free-sheaf-finite-rank
  - def-module-on-ringed-space
  - def-quasi-coherent-module-scheme
  - lem-dual-locally-free-and-base-change
  - def-symmetric-algebra-qc-module
  - lem-symmetric-algebra-qc-and-base-change
  - def-affine-local-quasi-coherent-algebra
  - lem-relative-spec-glues-affine-algebras
  - thm-affine-morphism-relative-spec-characterization
  - thm-affine-scheme-ring-anti-equivalence
  - thm-affine-quasi-coherent-equivalence
  - cor-affine-qc-sheaf-determined-global-sections
  - def-scheme-over-base
  - def-morphism-of-schemes
  - def-direct-image-sheaf
  - def-locally-ringed-space
  - def-sheaf-on-topological-space
  - def-category
  - def-functor-and-contravariant-functor
  - def-natural-isomorphism
  - def-equivalence-and-adjoint-equivalence-of-categories
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Constructions of Schemes §27.6"
      url: "https://stacks.math.columbia.edu/tag/01M1"
pipeline_run: frontier-36-complete
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $X$ be a scheme ([[def-scheme-over-base]]) and assume the Axiom of Choice,
inherited from the associated-sheaf, gluing and relative-spectrum machinery
([[def-axiom-of-choice]], [[def-vector-bundle-scheme]]). Write
$\operatorname{FLF}(X)$ for the category of finite locally free
$\mathcal O_X$-modules ([[def-locally-free-sheaf-finite-rank]]) and
$\operatorname{GVB}(X)$ for the category of geometric vector bundles over $X$
of locally constant finite rank with the linear morphisms of
[[def-vector-bundle-scheme]]. Then:

1. **(Functor.)** The assignment
   $\mathbb V:\mathcal E\mapsto\mathbb V(\mathcal E)=
   \operatorname{Spec}_X\operatorname{Sym}(\mathcal E^\vee)$ is a covariant
   functor $\operatorname{FLF}(X)\to\operatorname{GVB}(X)$: a morphism
   $\alpha:\mathcal E\to\mathcal F$ induces
   $\alpha^\vee:\mathcal F^\vee\to\mathcal E^\vee$ and then
   $\operatorname{Sym}(\alpha^\vee):
   \operatorname{Sym}(\mathcal F^\vee)\to\operatorname{Sym}(\mathcal E^\vee)$,
   and $\mathbb V(\alpha):\mathbb V(\mathcal E)\to\mathbb V(\mathcal F)$ is
   the X-morphism with that graded comorphism. Ranks are preserved.
2. **(Inverse.)** The **sheaf of sections** functor
   $\Phi:\operatorname{GVB}(X)\to\operatorname{FLF}(X)$, given on objects by
   $\Phi(V,\mathcal A)=\mathcal A_1^\vee$ (dual of the degree-one part of the
   relative coordinate algebra) and on morphisms by
   $\Phi(\varphi)=(\varphi^\sharp_1)^\vee$, is a quasi-inverse of $\mathbb V$:
   the evaluation isomorphisms
   $\varepsilon_{\mathcal E}:\Phi\mathbb V(\mathcal E)=
   (\mathcal E^\vee)^\vee\to\mathcal E$ and the multiplication isomorphisms
   $\eta_{(V,\mathcal A)}:(V,\mathcal A)\to
   \mathbb V(\Phi(V,\mathcal A))=
   \operatorname{Spec}_X\operatorname{Sym}(\mathcal A_1)$ are natural.
   Hence $\mathbb V$ is an equivalence of categories with inverse the sheaf of
   sections, and it identifies the ranks of the two sides.
3. **(Conventions.)** Equivalently,
   $\mathcal F\mapsto\operatorname{Spec}_X\operatorname{Sym}(\mathcal F)$ is
   the contravariant coordinate-module convention: it equals
   $\mathbb V(\mathcal F^\vee)$, a morphism $\alpha:\mathcal F\to\mathcal G$
   induces $\operatorname{Spec}_X\operatorname{Sym}(\mathcal G)\to
   \operatorname{Spec}_X\operatorname{Sym}(\mathcal F)$, and its
   quasi-inverse recovers $\mathcal F$ as the degree-one part
   $\operatorname{Sym}^1$ of the coordinate algebra.

## Facts & Assumptions

**Given:** A scheme $X$; the Axiom of Choice; the categories
$\operatorname{FLF}(X)$ of finite locally free $\mathcal O_X$-modules with
$\mathcal O_X$-linear maps and $\operatorname{GVB}(X)$ of geometric vector
bundles over $X$ with the linear morphisms of [[def-vector-bundle-scheme]].

[F1] Geometric vector bundles ([[def-vector-bundle-scheme]]): a geometric
vector bundle over $X$ is an affine $X$-scheme $\pi:V\to X$ with a normalised
grading $\mathcal A=\bigoplus_{d\ge0}\mathcal A_d$ on $\mathcal A=\pi_*\mathcal
O_V$ such that a cover by opens $U$ carries graded isomorphisms
$\mathcal A|_U\cong\operatorname{Sym}(\mathcal O_U^r)$; its rank is the locally
constant function with $\mathcal A_1|_U\cong\mathcal O_U^r$ on such charts;
morphisms are the $X$-morphisms whose comorphism is graded; for finite locally
free $\mathcal E$ the total space is
$\mathbb V(\mathcal E)=\operatorname{Spec}_X\operatorname{Sym}(\mathcal
E^\vee)$, with $\mathbb V(0)=X$ and
$\mathbb V(\mathcal O_X^r)\cong\mathbf A^r_X$.

[F2] Finite locally free modules ([[def-locally-free-sheaf-finite-rank]],
[[def-module-on-ringed-space]], [[def-quasi-coherent-module-scheme]]): an
$\mathcal O_X$-module is locally free of rank $r$ near a point when it is
isomorphic there to $\mathcal O_X^r$; the rank is well defined and locally
constant, a locally free sheaf is quasi-coherent, and rank $0$ means the zero
sheaf. A quasi-coherent module on an affine scheme is module-associated.

[F3] Duals ([[lem-dual-locally-free-and-base-change]]): for finite locally
free $\mathcal E$ the dual $\mathcal E^\vee=\mathcal H
om_{\mathcal O_X}(\mathcal E,\mathcal O_X)$ is finite locally free of the same
rank, with $\mathcal E^\vee|_U\cong\mathcal O_U^r$ on every chart
$\mathcal E|_U\cong\mathcal O_U^r$; the evaluation
$\operatorname{ev}:\mathcal E\to\mathcal E^{\vee\vee}$ is an isomorphism, and
duality is a contravariant functor compatible with restriction.

[F4] Symmetric algebras ([[def-symmetric-algebra-qc-module]]):
$\operatorname{Sym}(\mathcal F)$ is a quasi-coherent graded commutative
$\mathcal O_X$-algebra with $\operatorname{Sym}^0(\mathcal F)=\mathcal O_X$,
$\operatorname{Sym}^1(\mathcal F)=\mathcal F$, generated in degree one; every
$\mathcal O_X$-linear map $\mathcal F\to\mathcal C$ into a sheaf of commutative
$\mathcal O_X$-algebras extends uniquely to an $\mathcal O_X$-algebra map
$\operatorname{Sym}(\mathcal F)\to\mathcal C$, so a graded algebra map out of
$\operatorname{Sym}(\mathcal F)$ is determined by its degree-one part; on an
affine $U=\operatorname{Spec}R$ with $\mathcal F|_U\cong\widetilde M$ one has
$\operatorname{Sym}(\mathcal F)|_U\cong(\operatorname{Sym}_R M)^{\sim}$; and
$\operatorname{Sym}(\mathcal O_X^r)\cong\mathcal O_X[T_1,\dots,T_r]$ with all
$T_i$ of degree one.

[F5] Restriction of symmetric algebras
([[lem-symmetric-algebra-qc-and-base-change]]): for an open subscheme
$W\subseteq X$ there is a canonical isomorphism
$\operatorname{Sym}(\mathcal F)|_W\cong\operatorname{Sym}(\mathcal F|_W)$ of
graded $\mathcal O_W$-algebras, compatible with inclusions, and
$\operatorname{Sym}(\mathcal O_X^r)\cong\mathcal O_X[T_1,\dots,T_r]$ with
generators in degree one.

[F6] Relative spectra ([[lem-relative-spec-glues-affine-algebras]],
[[def-affine-local-quasi-coherent-algebra]]): for an affine-locally
module-associated sheaf $\mathcal A$ of commutative unital
$\mathcal O_X$-algebras there is a relative spectrum
$\pi:\operatorname{Spec}_X\mathcal A\to X$ with
$\pi^{-1}(U)\cong\operatorname{Spec}\Gamma(U,\mathcal A)$ for every affine
$U\subseteq X$, principal-open inverse images given by localization, canonical
restriction isomorphisms for open subschemes, and uniqueness up to canonical
isomorphism.

[F7] Relative coordinate algebra
([[thm-affine-morphism-relative-spec-characterization]]): the structure
morphism $\pi:\operatorname{Spec}_X\mathcal A\to X$ of [F6] is affine and
$\pi_*\mathcal O\cong\mathcal A$; conversely every affine $X$-scheme is the
relative spectrum of its own affine-locally module-associated pushforward
algebra.

[F8] Chart compatibility of a relative spectrum
([[lem-relative-spec-glues-affine-algebras]]): for affine opens $W\subseteq U$
the chart $\operatorname{Spec}\Gamma(W,\mathcal A)$ of [F6] is the restriction
of the chart $\operatorname{Spec}\Gamma(U,\mathcal A)$ with transition induced
by the restriction map $\Gamma(U,\mathcal A)\to\Gamma(W,\mathcal A)$, which is
localization when $W$ is a principal open.

[F9] Affine anti-equivalence ([[thm-affine-scheme-ring-anti-equivalence]]):
$\varphi\mapsto\operatorname{Spec}(\varphi)$ is a natural bijection
$\operatorname{Hom}_{\rm CRing}(A,B)\cong
\operatorname{Hom}_{\rm LRS}(\operatorname{Spec}B,\operatorname{Spec}A)$;
hence morphisms of affine schemes are determined by their comorphisms, and
Spec is contravariantly functorial.

[F10] Determination on affine charts
([[thm-affine-quasi-coherent-equivalence]],
[[cor-affine-qc-sheaf-determined-global-sections]]): on an affine scheme $U$
the assignment $\psi\mapsto\psi_U$ is a bijection from morphisms of
quasi-coherent $\mathcal O_U$-modules to maps of their global sections, and a
morphism of quasi-coherent sheaves is determined by its global section map.

[F11] Morphisms, sheaves and gluing ([[def-morphism-of-schemes]],
[[def-direct-image-sheaf]], [[def-locally-ringed-space]],
[[def-sheaf-on-topological-space]]): a morphism of schemes has a comorphism
$f^\sharp:\mathcal O_Y\to f_*\mathcal O_X$; the structure sheaf satisfies the
sheaf axiom, so compatible local data glue; a morphism of schemes is
determined by its restrictions to an open cover of its source, and a morphism
of sheaves that is an isomorphism on the members of an open cover is an
isomorphism.

[F12] X-schemes ([[def-scheme-over-base]]): an $X$-scheme is a scheme with a
morphism to $X$, and an $X$-morphism commutes with the structure morphisms;
relative spectra are $X$-schemes by construction.

[F13] Categories and equivalences ([[def-category]],
[[def-functor-and-contravariant-functor]], [[def-natural-isomorphism]],
[[def-equivalence-and-adjoint-equivalence-of-categories]]): a functor
preserves identities and composition; a natural isomorphism is an invertible
natural transformation; functors $F:\mathcal C\to\mathcal D$ and
$G:\mathcal D\to\mathcal C$ are quasi-inverse when there are natural
isomorphisms $1_{\mathcal C}\Rightarrow GF$ and
$FG\Rightarrow1_{\mathcal D}$, and then each is an equivalence of categories.

[F14] The Axiom of Choice is used only as it is inherited through the
associated-sheaf, gluing, symmetric-algebra and relative-spectrum
constructions cited in [F1] and [F4] to [F7]; no further selection is made
below ([[def-axiom-of-choice]]).

**Proof technique:** direct; construct the two functors on all charts and
glue, then exhibit the unit and counit isomorphisms.



## Proof

1.1 Setting. The finite locally free $\mathcal O_X$-modules with $\mathcal O_X$-linear maps form a category, and a finite locally free $\mathcal O_X$-module is quasi-coherent with a well-defined locally constant rank by [F2]; the geometric vector bundles over $X$ with the morphisms of [F1] form a category by [F1] and [F13]. Fix the inherited Axiom of Choice as recorded in [F14]. [F1, F2, F13, F14]

1.2 Chart dictionary. Let $(V,\mathcal A)$ be a geometric vector bundle with structure morphism $\pi_V$, let $U=\operatorname{Spec}R\subseteq X$ be affine with a graded isomorphism $\mathcal A|_U\cong\operatorname{Sym}(\mathcal O_U^r)$ of the bundle data, and let $D(s)\subseteq U$ be a principal open; then $\pi_V^{-1}(U)\cong\operatorname{Spec}\Gamma(U,\mathcal A) \cong\operatorname{Spec}R[T_1,\dots,T_r]=\mathbf A^r_U$ as $U$-schemes, the chart of $D(s)$ is the restriction with transition the localization $R[T_1,\dots,T_r]\to R[T_1,\dots,T_r]_s$, and the degree-one part is $\mathcal A_1|_U\cong\mathcal O_U^r$. For the total space of a finite locally free $\mathcal E$ the same chart reads $\pi^{-1}(U)\cong\operatorname{Spec}\Gamma(U,\operatorname{Sym}(\mathcal E^\vee))\cong\operatorname{Spec}R[T_1,\dots,T_r]$ whenever $\mathcal E|_U\cong\mathcal O_U^r$. [F1, F3, F4, F5, F6, F8]

1.3 The functor $\Phi$. For a geometric vector bundle $(V,\mathcal A)$ the degree-one part $\mathcal A_1$ is finite locally free of rank equal to the rank of the bundle by [F1] and [F2]; put $\Phi(V,\mathcal A):=\mathcal A_1^\vee$, finite locally free of the same rank by [F3]. For a morphism $\varphi:(V,\mathcal A)\to(W,\mathcal B)$ with graded comorphism $\varphi^\sharp:\mathcal B\to\mathcal A$, put $\Phi(\varphi):=(\varphi^\sharp_1)^\vee:\mathcal A_1^\vee\to\mathcal B_1^\vee$, an $\mathcal O_X$-linear map of finite locally free modules [F3]. Identities and composites are preserved: $\Phi(\mathrm{id})=\mathrm{id}$, and for a second morphism $\omega:(W,\mathcal B)\to(Z,\mathcal C)$ one has $(\omega\circ\varphi)^\sharp_1=\varphi^\sharp_1\circ\omega^\sharp_1$, whose transpose is $(\omega^\sharp_1)^\vee\circ(\varphi^\sharp_1)^\vee= \Phi(\omega)\circ\Phi(\varphi)$. Hence $\Phi$ is a covariant functor $\operatorname{GVB}(X)\to\operatorname{FLF}(X)$ preserving ranks. [F1, F2, F3, F13]

2.1 Induced morphism from a graded algebra map. Let $\mathcal A,\mathcal B$ be graded $\mathcal O_X$-algebras that are locally polynomial in the sense that their relative coordinate algebras admit the charts of step 1.2 for the same covering opens; then every graded $\mathcal O_X$-algebra map $\psi:\mathcal B\to\mathcal A$ induces an $X$-morphism $\Psi(\psi):\operatorname{Spec}_X\mathcal A\to \operatorname{Spec}_X\mathcal B$ with comorphism $\psi$. Construction: cover $X$ by the affine opens $U=\operatorname{Spec}R$ over which both algebras are graded free of ranks $s$ and $r$; the global sections map $\psi(U):R[T_1,\dots,T_s]\to R[T_1,\dots,T_r]$ is an $R$-algebra map by [F10] under the chart identifications of [F6], giving the $U$-morphism $\operatorname{Spec}(\psi(U))$ between the charts by [F9]. These chart morphisms glue: for a principal open $D(t)\subseteq U$ the restriction of $\psi(U)$ is $\psi(D(t))$ by [F10], so $\operatorname{Spec}(\psi(D(t)))$ is the restriction of $\operatorname{Spec}(\psi(U))$ to the subchart by [F8] and [F9]; hence all chart morphisms agree on overlaps after refining by affine opens, and they glue to an $X$-morphism $\Psi(\psi)$ because the source is covered by the charts and its structure sheaf is a sheaf [F11]. The comorphism of $\Psi(\psi)$ restricts to $\psi(U)$ on each chart, whence it equals $\psi$ [F10, F11]. [F4, F5, F6, F8, F9, F10, F11, F12]

3.1 Uniqueness and functoriality of $\Psi$. If $\varphi,\varphi':\operatorname{Spec}_X\mathcal A\to \operatorname{Spec}_X\mathcal B$ are $X$-morphisms with the same comorphism $\psi:\mathcal B\to\mathcal A$, then on each chart $U$ of step 2.1 the restrictions are morphisms of the affine schemes $\operatorname{Spec}\Gamma(U,\mathcal A)\to \operatorname{Spec}\Gamma(U,\mathcal B)$ with the same global section map $\psi(U)$, hence equal by [F9]; the charts cover the source, so $\varphi=\varphi'$ by [F11]. Therefore the comorphism assignment $\Theta:\varphi\mapsto\varphi^\sharp$ is a bijection from the set of grading-preserving $X$-morphisms $\operatorname{Spec}_X\mathcal A\to\operatorname{Spec}_X\mathcal B$ onto the graded $\mathcal O_X$-algebra maps $\mathcal B\to\mathcal A$, with two-sided inverse $\Psi$ by step 2.1. Finally $\Psi(\psi\circ\psi')=\Psi(\psi')\circ\Psi(\psi)$ for graded maps $\psi:\mathcal B\to\mathcal A$ and $\psi':\mathcal C\to\mathcal B$: both sides are $X$-morphisms $\operatorname{Spec}_X\mathcal A\to \operatorname{Spec}_X\mathcal C$ with comorphism $\psi\circ\psi'$, and such a morphism is unique; likewise $\Psi(\mathrm{id})=\mathrm{id}$. [F9, F11, F13, step 2.1]

4.1 The functor $\mathbb V$. For a morphism $\alpha:\mathcal E\to\mathcal F$ of finite locally free modules the transpose $\alpha^\vee:\mathcal F^\vee\to\mathcal E^\vee$ is $\mathcal O_X$-linear [F3], and $\operatorname{Sym}(\alpha^\vee)$ is a graded $\mathcal O_X$-algebra map by [F4]; define $\mathbb V(\alpha):=\Psi(\operatorname{Sym}(\alpha^\vee)): \mathbb V(\mathcal E)\to\mathbb V(\mathcal F)$, the morphism of step 2.1, which has graded comorphism and hence is a morphism of geometric vector bundles [F1]. Then $\mathbb V(\mathrm{id}_{\mathcal E})=\mathrm{id}$ and $\mathbb V(\beta\circ\alpha)=\mathbb V(\beta)\circ\mathbb V(\alpha)$ for composable $\alpha,\beta$, because $(\beta\circ\alpha)^\vee=\alpha^\vee\circ\beta^\vee$ and Sym preserves composition, and the comorphism determines the morphism by step 3.1. With the object assignment of [F1] this is a covariant functor $\operatorname{FLF}(X)\to\operatorname{GVB}(X)$, and $\mathbb V(\mathcal E)$ has rank $\operatorname{rk}\mathcal E$ by [F1] and [F3]. [F1, F3, F4, F13, step 2.1, step 3.1]

4.2 The unit isomorphism. Let $(V,\mathcal A)$ be a geometric vector bundle. The multiplication map $\mu:\operatorname{Sym}(\mathcal A_1)\to\mathcal A$ is a graded $\mathcal O_X$-algebra map [F4], and it is an isomorphism: on a chart $U$ with $\mathcal A|_U\cong\operatorname{Sym}(\mathcal O_U^r)$ one has $\mathcal A_1|_U\cong\mathcal O_U^r$ and $\mu|_U$ is the identity of $\operatorname{Sym}(\mathcal O_U^r)$ under this identification [F1, F5], and a morphism of sheaves that is an isomorphism on the members of a cover is an isomorphism [F11]. Under the canonical identification $\operatorname{Sym}((\mathcal A_1^\vee)^\vee)\cong \operatorname{Sym}(\mathcal A_1)$ induced by the evaluation isomorphism $\operatorname{ev}:\mathcal A_1\to(\mathcal A_1^\vee)^\vee$ of [F3], the morphism $\eta_{(V,\mathcal A)}:=\Psi(\mu):(V,\mathcal A)\to \mathbb V(\Phi(V,\mathcal A))$ is an isomorphism of geometric vector bundles with inverse $\Psi(\mu^{-1})$ [step 2.1, F1], and it is natural in $(V,\mathcal A)$: for a morphism $\varphi:(V,\mathcal A)\to(W,\mathcal B)$ with comorphism $\psi$, the two composites $\mathbb V\Phi(\varphi)\circ \eta_V$ and $\eta_W\circ\varphi$ are $X$-morphisms $(V,\mathcal A)\to\mathbb V(\Phi(W,\mathcal B))$ whose comorphisms $\operatorname{Sym}(\mathcal B_1)\to\mathcal A$ are algebra maps agreeing on the degree-one generators, where both send $b\in\mathcal B_1$ to $\psi(b)=\psi_1(b)\in\mathcal A_1$ [F4], so they are equal by the uniqueness of step 3.1. [F1, F3, F4, F5, F11, step 2.1, step 3.1]

5.1 The counit isomorphism. For a finite locally free $\mathcal E$ one has $\Phi(\mathbb V(\mathcal E))= ((\operatorname{Sym}(\mathcal E^\vee))_1)^\vee=(\mathcal E^\vee)^\vee$ by [F4] and step 1.3, and $\varepsilon_{\mathcal E}:=\operatorname{ev}_{\mathcal E}^{-1}: (\mathcal E^\vee)^\vee\to\mathcal E$ is an isomorphism of $\mathcal O_X$-modules by [F3]. It is natural: for $\alpha:\mathcal E\to\mathcal F$ the identity $(\alpha^\vee)^\vee\circ\operatorname{ev}_{\mathcal E}= \operatorname{ev}_{\mathcal F}\circ\alpha$, checked by evaluating functionals on sections, gives $\varepsilon_{\mathcal F}\circ\Phi\mathbb V(\alpha)= \alpha\circ\varepsilon_{\mathcal E}$, where $\Phi\mathbb V(\alpha)= (\alpha^\vee)^\vee$ by steps 4.1 and 1.3. [F3, F4, step 4.1, step 1.3]

5.2 The contravariant convention. For finite locally free $\mathcal F$ the symmetric algebra $\operatorname{Sym}(\mathcal F)$ is affine-locally module-associated by [F2] and the affine model of [F4], so $\mathbb W(\mathcal F):=\operatorname{Spec}_X\operatorname{Sym}(\mathcal F)$ is a geometric vector bundle by [F6] and [F7]. The evaluation isomorphism $\operatorname{ev}:\mathcal F\to\mathcal F^{\vee\vee}$ of [F3] induces $\operatorname{Sym}(\mathcal F)\cong \operatorname{Sym}(\mathcal F^{\vee\vee})= \operatorname{Sym}((\mathcal F^\vee)^\vee)$, and relative spectra of isomorphic locally polynomial graded algebras are canonically isomorphic by step 3.1 applied to the algebra isomorphism and its inverse; hence $\mathbb W(\mathcal F)\cong\mathbb V(\mathcal F^\vee)$, and a morphism $\alpha:\mathcal F\to\mathcal G$ induces $\mathbb W(\mathcal G)\to\mathbb W(\mathcal F)$ as in step 4.1, so $\mathbb W$ is the contravariant coordinate-module convention. Its quasi-inverse is given by the degree-one coordinate part: for a geometric vector bundle $(V,\mathcal A)$ the multiplication isomorphism of step 4.2 identifies $(V,\mathcal A)$ with $\operatorname{Spec}_X\operatorname{Sym}(\mathcal A_1) =\mathbb W(\mathcal A_1)$, so $\mathcal F=\operatorname{Sym}^1$ is recovered [F4, step 4.2]. [F2, F3, F4, F6, F7, step 3.1, step 4.1, step 4.2]

6.1 Equivalence. By steps 4.2 and 5.1 the functors $\Phi$ and $\mathbb V$ are quasi-inverse: $\eta:1_{\operatorname{GVB}(X)}\Rightarrow \mathbb V\Phi$ of step 4.2 and $\varepsilon:\Phi\mathbb V\Rightarrow1_{\operatorname{FLF}(X)}$ of step 5.1 are natural isomorphisms. Hence $\Phi:\operatorname{GVB}(X)\to \operatorname{FLF}(X)$ is an equivalence of categories with quasi-inverse $\mathbb V$, equivalently $\mathbb V$ is an equivalence with quasi-inverse the sheaf of sections $\Phi$ [F13]; ranks correspond by steps 1.2, 4.1 and 1.3. [F13, step 4.1, step 1.3, step 4.2, step 5.1]

6.2 Full faithfulness. For finite locally free $\mathcal E,\mathcal F$ the comorphism bijection of step 3.1, applied to $\mathcal A=\operatorname{Sym}(\mathcal E^\vee)$ and $\mathcal B=\operatorname{Sym}(\mathcal F^\vee)$, identifies morphisms $\mathbb V(\mathcal E)\to\mathbb V(\mathcal F)$ of geometric vector bundles with graded algebra maps $\operatorname{Sym}(\mathcal F^\vee)\to \operatorname{Sym}(\mathcal E^\vee)$, which by the universal property of [F4] correspond bijectively to $\mathcal O_X$-linear maps $\mathcal F^\vee\to\mathcal E^\vee=(\operatorname{Sym}(\mathcal E^\vee))_1$, that is, by the double dual isomorphism of [F3], to $\mathcal O_X$-linear maps $\mathcal E\to\mathcal F$; the resulting bijection sends $\alpha$ to $\mathbb V(\alpha)$ by step 4.1, with inverse $\varphi\mapsto\varepsilon_{\mathcal F}\circ(\varphi^\sharp_1)^\vee\circ \operatorname{ev}_{\mathcal E}$. Indeed for $\alpha$ the composite is $\alpha$ by the naturality identity of step 5.1, and for $\varphi$ the induced map $\alpha$ satisfies $\alpha^\vee=\varphi^\sharp_1$ because double transposition returns the original map, so $\operatorname{Sym}(\alpha^\vee)=\varphi^\sharp$ since a graded algebra map out of $\operatorname{Sym}(\mathcal F^\vee)$ is determined by its degree-one part, and hence $\mathbb V(\alpha)=\varphi$ by step 3.1. [F3, F4, step 3.1, step 4.1, step 5.1]

7.1 Choice accounting. The Axiom of Choice is used only through the associated-sheaf, gluing, symmetric-algebra and relative-spectrum constructions inherited in [F1] and [F4] to [F7], as recorded in [F14]; the constructions of this proof range over the families of all affine charts on which the algebras are graded free and of all module morphisms, and select no simultaneous family of charts, generators or isomorphisms. The rank of each side is determined independently of charts by [F2], so the equivalence and the rank correspondence are stated in the inherited AC theory. [F2, F14] ∎
