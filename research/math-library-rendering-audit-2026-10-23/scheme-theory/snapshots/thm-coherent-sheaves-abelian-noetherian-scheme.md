---
id: thm-coherent-sheaves-abelian-noetherian-scheme
kind: theorem
title: "Coherent sheaves on a locally Noetherian scheme"
status: published
origin: pipeline
deps:
  - def-coherent-module-scheme
  - thm-kernels-cokernels-qc-modules
  - def-locally-noetherian-and-noetherian-scheme
  - thm-finite-generation-and-finite-presentation-over-a-noetherian-ring
  - def-axiom-of-choice
  - def-finite-type-finite-presentation-module-sheaf
  - def-quasi-coherent-module-scheme
  - def-kernel-cokernel-image-sheaves
  - thm-localisation-of-modules-is-exact
  - lem-associated-sheaf-sections-basic-open
  - lem-associated-sheaf-restriction-affine-open
  - lem-zero-in-a-localised-module
  - def-localisation-of-a-module
  - def-generated-cyclic-finitely-generated-and-free-modules
  - lem-finite-modules-over-noetherian-rings-are-noetherian
  - def-noetherian-module
  - thm-noetherian-ring-quotients-and-localisations
  - def-affine-scheme-spectrum
  - lem-spectrum-localization-open-immersion
  - cor-affine-scheme-quasi-compact
  - thm-affine-quasi-coherent-equivalence
  - def-associated-sheaf-module-affine-scheme
  - def-restriction-sheaf-open-subspace
  - def-exact-sequence-sheaves
justified_by: []
landmark: true
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
    - title: "The Stacks Project, Cohomology of Schemes §30.9"
      url: "https://stacks.math.columbia.edu/tag/01XY"
    - title: "The Stacks Project, Properties of Schemes, §§28.20, 28.26"
      url: "https://stacks.math.columbia.edu/download/properties.pdf"
pipeline_run: frontier-36-complete
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice, inherited through the quasi-coherent interfaces
([[def-axiom-of-choice]]). Let $X$ be a locally Noetherian scheme
([[def-locally-noetherian-and-noetherian-scheme]]). Then:

1. A quasi-coherent $\mathcal O_X$-module is coherent
   ([[def-coherent-module-scheme]]) if and only if it is of finite type
   ([[def-finite-type-finite-presentation-module-sheaf]]).
2. For every morphism $\varphi:\mathcal F\to\mathcal G$ of coherent
   $\mathcal O_X$-modules the kernel, image and cokernel of $\varphi$ are
   coherent, and finite direct sums of coherent modules are coherent.
3. Extensions: if $0\to\mathcal F\to\mathcal E\to\mathcal G\to0$ is a short
   exact sequence of quasi-coherent $\mathcal O_X$-modules
   ([[def-exact-sequence-sheaves]]) with $\mathcal F$ and $\mathcal G$
   coherent, then $\mathcal E$ is coherent. Thus $\operatorname{Coh}(X)$ is
   closed under extensions inside $\operatorname{QCoh}(X)$.

The equivalence in (1) is the theorem's essential content: the relation
kernel condition in the definition of coherence is automatic for finite type
quasi-coherent modules over a locally Noetherian base, but not over an
arbitrary base.

## Facts & Assumptions

**Given:** A locally Noetherian scheme $X$; for the coherence test in claim (1)
an open $U\subseteq X$, an integer $n\ge0$ and a morphism
$\tau:\mathcal O_U^n\to\mathcal F|_U$; for claim (2) a morphism
$\varphi:\mathcal F\to\mathcal G$ of coherent $\mathcal O_X$-modules; for
claim (3) a short exact sequence $0\to\mathcal F\to\mathcal E\to\mathcal G
\to0$ of quasi-coherent $\mathcal O_X$-modules with $\mathcal F,\mathcal G$
coherent.

[F1] Coherence ([[def-coherent-module-scheme]]): a quasi-coherent
$\mathcal F$ of finite type is coherent when for every open $U\subseteq X$
and every morphism $\tau:\mathcal O_U^n\to\mathcal F|_U$, $n\ge0$ finite, the
kernel sheaf $\ker\tau$ is of finite type; it suffices to test affine
$U=\operatorname{Spec}A$ with $\mathcal F|_U\cong\widetilde M$ and $M$
finitely generated, in which case $\tau$ is induced by an $A$-linear map
$\psi:A^n\to M$ and $\ker\tau=\widetilde{(\ker\psi)}$. Coherence is local on
$X$ and invariant under isomorphism, a coherent module is of finite type by
definition, and the zero module is coherent.

[F2] Finite type ([[def-finite-type-finite-presentation-module-sheaf]]): the
condition is local on $X$ and invariant under isomorphism; equivalently $X$
is covered by affine opens $U$ admitting finitely many sections generating
$\mathcal F|_U$; restrictions to open subschemes are of finite type; the zero
module and the free modules $\mathcal O_X^n$ are of finite type; and on an
affine $U=\operatorname{Spec}A$ with $\mathcal F|_U\cong\widetilde M$ the
module $M$ is finitely generated exactly when $\mathcal F|_U$ admits a finite
generating family of sections.

[F3] Localisation and restriction
([[thm-localisation-of-modules-is-exact]],
[[lem-associated-sheaf-sections-basic-open]],
[[def-associated-sheaf-module-affine-scheme]],
[[lem-zero-in-a-localised-module]], [[def-localisation-of-a-module]],
[[def-restriction-sheaf-open-subspace]]): localisation of modules is exact, so
for an $A$-linear $\psi:M\to N$ one has
$\ker\widetilde\psi=\widetilde{(\ker\psi)}$,
$\operatorname{im}\widetilde\psi=\widetilde{(\operatorname{im}\psi)}$ and
$\operatorname{coker}\widetilde\psi=\widetilde{(\operatorname{coker}\psi)}$;
$\widetilde M(D(f))=M_f$ with restriction the canonical localisation; an
element of $M_f$ is zero exactly when some power of $f$ kills a numerator
(so if $(N/N')_{g_i}=0$ for elements $g_1,\ldots,g_k$ generating the unit
ideal, then $N/N'=0$); and restriction of sheaves to an open subscheme is
exact, so a short exact sequence restricts to a short exact sequence. Kernel
sheaves are computed objectwise, so $(\ker\tau)|_V=\ker(\tau|_V)$
([[def-kernel-cokernel-image-sheaves]]).

[F4] Noetherian module facts
([[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]],
[[lem-finite-modules-over-noetherian-rings-are-noetherian]],
[[def-noetherian-module]],
[[def-generated-cyclic-finitely-generated-and-free-modules]]): over a
Noetherian commutative ring a finitely generated module is Noetherian and
finitely presented; a Noetherian module has every submodule finitely
generated; a quotient of a finitely generated module is finitely generated,
generated by the images of any generating family; and in a short exact
sequence of modules whose outer terms are finitely generated the middle term
is finitely generated, since lifts of finitely many generators of the
quotient together with generators of the submodule generate the middle term.

[F5] Localisations of Noetherian rings are Noetherian
([[thm-noetherian-ring-quotients-and-localisations]]).

[F6] Locally Noetherian ([[def-locally-noetherian-and-noetherian-scheme]]):
$X$ has an affine open cover by spectra of Noetherian rings.

[F7] Distinguished opens and quasi-compactness
([[def-affine-scheme-spectrum]],
[[lem-spectrum-localization-open-immersion]],
[[cor-affine-scheme-quasi-compact]]): the distinguished opens $D(f)$ form a
basis of $\operatorname{Spec}A$, $D(f)=\operatorname{Spec}A_f$, and
$\operatorname{Spec}A$ is quasi-compact, so every open cover of it has a
finite subcover.

[F8] Quasi-coherent kernels, cokernels and biproducts
([[thm-kernels-cokernels-qc-modules]],
[[def-quasi-coherent-module-scheme]]): kernels, images and cokernels of
morphisms of quasi-coherent modules are quasi-coherent, $\operatorname{QCoh}(X)$
is an abelian subcategory of $\operatorname{Mod}(\mathcal O_X)$ closed under
finite biproducts, and the restriction of a quasi-coherent module to an open
subscheme is quasi-coherent.

[F9] Affine equivalence ([[thm-affine-quasi-coherent-equivalence]]): for an
affine scheme $V=\operatorname{Spec}B$ the functors $M\mapsto\widetilde M$
and $\Gamma(V,-)$ are quasi-inverse equivalences between $B$-modules and
quasi-coherent $\mathcal O_V$-modules; hence $\widetilde{(-)}$ is exact and
full, the comparison $\kappa_{\mathcal H}:\widetilde{\Gamma(V,\mathcal H)}
\to\mathcal H$ is an isomorphism for quasi-coherent $\mathcal H$, and
morphisms of quasi-coherent $\mathcal O_V$-modules correspond bijectively to
$B$-linear maps of their modules of global sections.

[F10] Restriction of associated sheaves to affine opens
([[lem-associated-sheaf-restriction-affine-open]]): for a commutative ring
$A$, an $A$-module $M$ and an affine open subscheme $W=\operatorname{Spec}C
\subseteq\operatorname{Spec}A$ there is a canonical isomorphism
$(\widetilde M)|_W\cong\widetilde{(C\otimes_AM)}$, natural in $M$.

[F11] The Axiom of Choice as inherited from the associated-sheaf existence
theorem, the affine equivalence and the gluing machinery
([[def-axiom-of-choice]]).

**Proof technique:** direct; pass to Noetherian affine charts and use that
finitely generated modules over a Noetherian ring have finitely generated
submodules, then glue the local conclusions.





## Proof

1.1 Noetherian affine charts inside any open: let $x\in X$ and let $U\subseteq X$ be an open neighbourhood of $x$. By [F6] there is an affine open $W=\operatorname{Spec}A\ni x$ with $A$ Noetherian; the set $W\cap U$ is an open neighbourhood of $x$ in $W$, so by the basis property of distinguished opens [F7] there is $f\in A$ with $x\in D(f)\subseteq W\cap U$. Then $D(f)=\operatorname{Spec}A_f\subseteq U$ is affine and $A_f$ is Noetherian by [F5]. [F5, F6, F7]

1.2 Finite type is detected on every affine chart: let $V=\operatorname{Spec}B\subseteq X$ be affine and let $\mathcal F$ be of finite type. Since $\mathcal F$ is quasi-coherent, [F9] gives $\mathcal F|_V\cong\widetilde N$ with $N=\Gamma(V,\mathcal F|_V)$. For $x\in V$ choose by [F2] an affine open $U_x\subseteq X$ with $\mathcal F|_{U_x}\cong\widetilde{M_x}$ and $M_x$ finitely generated, and by [F7] choose $g_x\in B$ with $x\in D_V(g_x)\subseteq U_x\cap V$; then $D_V(g_x)$ is an affine open subscheme of $U_x$ with coordinate ring $B_{g_x}$, so [F10] gives $\mathcal F|_{D_V(g_x)}\cong\widetilde{(B_{g_x}\otimes_{O(U_x)}M_x)}$ with a finitely generated module, while $(\widetilde N)|_{D_V(g_x)}\cong\widetilde{(N_{g_x})}$ by [F3]; hence $N_{g_x}$ is finitely generated over $B_{g_x}$. Since $V=D_V(g_1)\cup\cdots\cup D_V(g_k)$ for finitely many $g_i\in B$ with $(g_1,\dots,g_k)=B$ by quasi-compactness [F7], and each $N_{g_i}$ is finitely generated, choose finitely many elements of $N$ whose images generate each $N_{g_i}$ and let $N'\subseteq N$ be the submodule they generate; then $(N/N')_{g_i}=0$ for all $i$, so $N/N'=0$ by the localisation criterion of [F3], and $N=N'$ is finitely generated. [F2, F3, F7, F9, F10]

1.3 Claim 1, forward direction: by definition a coherent module is quasi-coherent of finite type, so coherent implies finite type. [F1]

2.1 Claim 1, converse: let $\mathcal F$ be quasi-coherent of finite type, let $U\subseteq X$ be open, $n\ge0$ and $\tau:\mathcal O_U^n\to\mathcal F|_U$; we show that $\ker\tau$ is of finite type. By step 1.1 the open $U$ is covered by affine charts $V=\operatorname{Spec}B\subseteq U$ with $B$ Noetherian; on such a chart $\mathcal F|_V=\widetilde N$ with $N$ finitely generated by step 1.2, and $\tau|_V$ is induced by a $B$-linear map $\psi:B^n\to N$ with $\ker(\tau|_V)=\widetilde{(\ker\psi)}$ [F1, F9]. As $B$ is Noetherian, the finite free module $B^n$ is Noetherian, so its submodule $\ker\psi$ is finitely generated [F4], so $\ker(\tau|_V)$ is of finite type [F3]. Kernel sheaves restrict to open subschemes and finite type is local on $X$ [F3, F2], so $\ker\tau$ is of finite type over the cover of $U$ by these charts; as this holds for every $(U,n,\tau)$, $\mathcal F$ is coherent [F1]. [F1, F2, F3, F4, F9, step 1.1, step 1.2]

3.1 Claim 2, kernels, images and cokernels: let $\varphi:\mathcal F\to\mathcal G$ be a morphism of coherent modules. By [F8] the sheaves $\ker\varphi$, $\operatorname{im}\varphi$ and $\operatorname{coker}\varphi$ are quasi-coherent. Cover $X$ by Noetherian affine charts $V=\operatorname{Spec}B$ (step 1.1); on each of them $\mathcal F|_V=\widetilde M$ and $\mathcal G|_V=\widetilde N$ with $M,N$ finitely generated (step 1.2), and $\varphi|_V=\widetilde\psi$ for a unique $B$-linear map $\psi:M\to N$ [F9]; by exactness of $\widetilde{(-)}$ the sheaves $\ker(\varphi|_V)$, $\operatorname{im}(\varphi|_V)$ and $\operatorname{coker}(\varphi|_V)$ are the associated sheaves of $\ker\psi$, $\operatorname{im}\psi$ and $\operatorname{coker}\psi$ [F3]. Since $B$ is Noetherian and $M$ finitely generated, $\ker\psi$ is finitely generated, and $\operatorname{im}\psi$, $\operatorname{coker}\psi$ are quotients of finitely generated modules, hence finitely generated [F4]; therefore the three sheaves are of finite type on the covering charts and hence of finite type [F2], and being quasi-coherent they are coherent by step 2.1. [F2, F3, F4, F8, F9, step 1.1, step 1.2, step 2.1]

3.2 Claim 3, extensions: let $0\to\mathcal F\to\mathcal E\to\mathcal G\to0$ be exact with $\mathcal F,\mathcal G$ coherent and $\mathcal E$ quasi-coherent. Cover $X$ by Noetherian affine charts $V=\operatorname{Spec}B$ (step 1.1); restriction to the open subscheme $V$ is exact, so $0\to\widetilde M\to\mathcal E|_V\to\widetilde N\to0$ is exact with $\mathcal F|_V=\widetilde M$, $\mathcal G|_V=\widetilde N$ and $M,N$ finitely generated (steps 1.2, [F3]). Since $\mathcal E|_V$ is quasi-coherent [F8] and $V$ is affine, [F9] gives $\mathcal E|_V\cong\widetilde P$ with $P=\Gamma(V,\mathcal E|_V)$; the functor $\Gamma(V,-)$ is an equivalence between quasi-coherent $\mathcal O_V$-modules and $B$-modules, hence exact, so applying it to $0\to\widetilde M\to\widetilde P\to\widetilde N\to0$ yields the exact sequence $0\to M\to P\to N\to0$ [F9]. With $M$ and $N$ finitely generated, $P$ is finitely generated: lift finitely many generators of $N$ to $P$ and add generators of $M$ [F4]. Therefore $\mathcal E|_V$ is of finite type on every chart of the cover, so $\mathcal E$ is of finite type [F2]; being quasi-coherent by hypothesis, $\mathcal E$ is coherent by step 2.1. [F2, F3, F4, F8, F9, step 1.1, step 1.2, step 2.1]

4.1 Claim 2, finite direct sums: for coherent $\mathcal F,\mathcal G$ the biproduct $\mathcal F\oplus\mathcal G$ is quasi-coherent [F8], and on a Noetherian affine chart as in step 3.1 it is $\widetilde{(M\oplus N)}$ with $M\oplus N$ finitely generated [F3, F9], hence is of finite type by locality [F2]; by step 2.1 it is coherent. [F2, F3, F8, F9, step 3.1, step 2.1]

5.1 Choice accounting: the arguments use the family of all Noetherian affine charts, which is determined by the data, together with finite subcovers and finite generating sets extracted from the given modules and morphisms; no chart, generator family or isomorphism is selected by an infinite simultaneous choice, so the only Axiom of Choice is the inherited one recorded in [F11]. [F2, F6, F11, step 1.1, step 1.2] ∎
