---
id: thm-kernels-cokernels-qc-modules
kind: theorem
title: Kernels and cokernels of quasi-coherent modules
status: published
origin: pipeline
deps:
  - def-kernel-cokernel-image-sheaves
  - thm-exactness-of-sheaves-stalkwise
  - thm-affine-quasi-coherent-equivalence
  - thm-localisation-of-modules-is-exact
  - lem-associated-sheaf-stalk-localization
  - thm-quasi-coherence-check-affine-cover
  - def-quasi-coherent-module-scheme
  - def-associated-sheaf-module-affine-scheme
  - def-abelian-subcategory-and-exact-embedding
  - thm-abelian-sheaves-form-abelian-category
  - def-biproduct
  - thm-localisation-of-modules-commutes-with-quotients-and-sums
  - def-sheafification
  - def-restriction-sheaf-open-subspace
  - def-affine-scheme-spectrum
  - lem-spectrum-localization-open-immersion
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
pipeline_run: frontier-36-complete
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice, inherited from the affine equivalence
([[def-axiom-of-choice]]). Let $X$ be a scheme
([[def-scheme]]) and let $\varphi:\mathcal F\to\mathcal G$ be a morphism of
quasi-coherent $\mathcal O_X$-modules
([[def-quasi-coherent-module-scheme]]), with kernel, image and cokernel sheaves
$\ker\varphi$, $\operatorname{im}\varphi$ and $\operatorname{coker}\varphi$
([[def-kernel-cokernel-image-sheaves]]).

Then:

1. $\ker\varphi$, $\operatorname{im}\varphi$ and
   $\operatorname{coker}\varphi$ are quasi-coherent $\mathcal O_X$-modules;
   more precisely, on an affine open $U=\operatorname{Spec}A\subseteq X$ with
   $\mathcal F|_U\cong\widetilde M$, $\mathcal G|_U\cong\widetilde N$ and
   corresponding $A$-linear map $u:M\to N$, there are canonical isomorphisms
   $$\ker(\varphi|_U)\cong\widetilde{(\ker u)},\qquad \operatorname{im}(\varphi|_U)\cong\widetilde{(\operatorname{im}u)},\qquad \operatorname{coker}(\varphi|_U)\cong\widetilde{(\operatorname{coker}u)}$$
   ([[def-associated-sheaf-module-affine-scheme]]).
2. $\operatorname{QCoh}(X)$ is an abelian subcategory of the category
   $\mathrm{Mod}(\mathcal O_X)$ of $\mathcal O_X$-modules, and the inclusion is
   an exact embedding ([[def-abelian-subcategory-and-exact-embedding]]).
3. No quasi-separatedness hypothesis on $X$ is used.

## Facts & Assumptions

**Given:** A scheme $X$; a morphism $\varphi:\mathcal F\to\mathcal G$ of
quasi-coherent $\mathcal O_X$-modules; in the affine situation an affine open
$U=\operatorname{Spec}A\subseteq X$, isomorphisms
$\mathcal F|_U\cong\widetilde M$, $\mathcal G|_U\cong\widetilde N$, and the
$A$-linear map $u:M\to N$ corresponding to $\varphi|_U$.

[F1] Kernel, image and cokernel sheaves: $\ker\varphi$ is the objectwise kernel
subsheaf, $\operatorname{im}\varphi$ and $\operatorname{coker}\varphi$ are the
sheafifications of the objectwise image and cokernel presheaves
([[def-kernel-cokernel-image-sheaves]], [[def-sheafification]]). These
constructions are local: for an open $U\subseteq X$ one has
$\ker(\varphi|_U)\cong(\ker\varphi)|_U$,
$\operatorname{im}(\varphi|_U)\cong(\operatorname{im}\varphi)|_U$ and
$\operatorname{coker}(\varphi|_U)\cong(\operatorname{coker}\varphi)|_U$,
because the objectwise constructions and sheafification are compatible with
restriction to an open subspace
([[def-restriction-sheaf-open-subspace]]).

[F2] A sequence of sheaves of abelian groups is exact if and only if it is
exact on every stalk ([[thm-exactness-of-sheaves-stalkwise]]); this applies to
sheaves of modules through their underlying sheaves of abelian groups.

[F3] Affine equivalence: for an affine scheme $U=\operatorname{Spec}A$ the
functor $M\mapsto\widetilde M$ is fully faithful, so every morphism
$\widetilde M\to\widetilde N$ is $\widetilde u$ for a unique $A$-linear map
$u:M\to N$, and every quasi-coherent $\mathcal O_U$-module is canonically
$\widetilde{\Gamma(U,-)}$
([[thm-affine-quasi-coherent-equivalence]]).

[F4] Localisation of modules is exact: localising a short exact sequence at a
prime gives a short exact sequence, and localisation commutes with kernels,
images and cokernels of $A$-linear maps
([[thm-localisation-of-modules-is-exact]]).

[F5] The stalk of an associated sheaf is the localisation,
$(\widetilde M)_{\mathfrak p}\cong M_{\mathfrak p}$, naturally in $M$
([[lem-associated-sheaf-stalk-localization]]).

[F6] Quasi-coherence over an affine cover: an $\mathcal O_X$-module
$\mathcal H$ is quasi-coherent if and only if there is an affine open cover
$X=\bigcup_iU_i$ with every $\mathcal H|_{U_i}$ an associated sheaf
([[thm-quasi-coherence-check-affine-cover]],
[[def-quasi-coherent-module-scheme]]); the distinguished opens form a basis of
an affine scheme, with $D(f)=\operatorname{Spec}A_f$ affine
([[def-affine-scheme-spectrum]], [[lem-spectrum-localization-open-immersion]]).

[F7] $\mathrm{Mod}(\mathcal O_X)$ is an abelian category
([[thm-abelian-sheaves-form-abelian-category]]); finite biproducts in it are
the finite direct sums of $\mathcal O_X$-modules ([[def-biproduct]]).

[F8] An abelian subcategory of an abelian category is a full subcategory closed
under the kernels and cokernels of its morphisms, computed in the ambient
category, and under finite biproducts
([[def-abelian-subcategory-and-exact-embedding]]).

[F9] Localisation commutes with finite direct sums: for $f\in A$ there is a
canonical isomorphism $(M\oplus N)_f\cong M_f\oplus N_f$
([[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

[F10] The Axiom of Choice as inherited through the associated-sheaf and affine
equivalence machinery ([[def-axiom-of-choice]]).

**Proof technique:** direct; on an affine chart the associated-sheaf functor is
exact by exactness of localisation, and both exactness and quasi-coherence are
checked stalkwise or on affine covers, with no separation hypothesis.



## Proof

1.1 The affine chart: let $U=\operatorname{Spec}A\subseteq X$ be affine with $\mathcal F|_U\cong\widetilde M$, $\mathcal G|_U\cong\widetilde N$, and let $u:M\to N$ be the $A$-linear map with $\varphi|_U$ corresponding to $\widetilde u$ under the full faithfulness of [F3]. The two sequences of $A$-modules $$0\longrightarrow\ker u\longrightarrow M\longrightarrow\operatorname{im}u\longrightarrow0,\qquad 0\longrightarrow\operatorname{im}u\longrightarrow N\longrightarrow\operatorname{coker}u\longrightarrow0$$ are exact, and localising them at a prime $\mathfrak p$ remains exact by [F4]; under the stalk identifications $(\widetilde M)_{\mathfrak p}=M_{\mathfrak p}$, $(\widetilde N)_{\mathfrak p}=N_{\mathfrak p}$ and $(\widetilde K)_{\mathfrak p}=K_{\mathfrak p}$ of [F5], and the naturality of these identifications, the stalk sequences of the sheaf maps $\widetilde{(\ker u)}\to\widetilde M\to\widetilde{(\operatorname{im}u)}$ and $\widetilde{(\operatorname{im}u)}\to\widetilde N\to\widetilde{(\operatorname{coker}u)}$ are exact at every prime, so by [F2] the sequences of $\mathcal O_U$-modules $$0\longrightarrow\widetilde{(\ker u)}\longrightarrow\widetilde M\xrightarrow{\ \widetilde u\ }\widetilde N\longrightarrow\widetilde{(\operatorname{coker}u)}\longrightarrow0$$ and the intermediate image sequence are exact. Consequently $\ker(\varphi|_U)\cong\widetilde{(\ker u)}$, $\operatorname{im}(\varphi|_U)\cong\widetilde{(\operatorname{im}u)}$ and $\operatorname{coker}(\varphi|_U)\cong\widetilde{(\operatorname{coker}u)}$ canonically. [F2, F3, F4, F5, given]

2.1 The affine isomorphisms are restrictions of the global sheaves: by the locality of [F1], restricting the global kernel, image and cokernel gives the kernel, image and cokernel of $\varphi|_U$; combined with step 1.1 this yields the three displayed isomorphisms of claim (1) on every affine open $U$ on which $\mathcal F$ and $\mathcal G$ are both associated. [F1, step 1.1]

3.1 Global quasi-coherence: for $x\in X$ choose affine opens $U_{\mathcal F}\ni x$ and $U_{\mathcal G}\ni x$ on which $\mathcal F$ and $\mathcal G$ are associated, respectively; then $U_{\mathcal F}\cap U_{\mathcal G}$ is an open neighbourhood of $x$ in the affine scheme $U_{\mathcal F}$ and hence contains a distinguished open $D(f)\ni x$ by [F6], on which both are associated. Therefore the family of all affine opens on which both are associated covers $X$, and on each such member step 2.1 exhibits $\ker\varphi$, $\operatorname{im}\varphi$ and $\operatorname{coker}\varphi$ as associated sheaves; by the affine cover criterion [F6] all three are quasi-coherent, which is claim (1). [F6, step 2.1]

4.1 The abelian subcategory: the zero sheaf is quasi-coherent, since it is $\widetilde 0$ on every affine chart, and the binary biproduct of quasi-coherent modules is quasi-coherent: on an affine chart with $\mathcal F|_U\cong\widetilde M$, $\mathcal G|_U\cong\widetilde N$ the objectwise direct sum has sections $\widetilde M(D(f))\oplus\widetilde N(D(f))=M_f\oplus N_f\cong(M\oplus N)_f$ on distinguished opens, compatibly with restriction by [F9], so it is $\widetilde{(M\oplus N)}$ on the covering family of common affine charts and hence quasi-coherent by [F6]. Since $\mathrm{Mod}(\mathcal O_X)$ is abelian by [F7] and $\operatorname{QCoh}(X)$ is a full subcategory closed under kernels, cokernels and finite biproducts computed in $\mathrm{Mod}(\mathcal O_X)$, the definition [F8] makes $\operatorname{QCoh}(X)$ an abelian subcategory and the inclusion a full additive exact embedding; images are kernels of cokernels, so they are covered as well. This is claim (2). [F6, F7, F8, F9, step 3.1]

5.1 No separation hypothesis: steps 1.1 to 4.1 use only affine charts, localisations, and the local definition of quasi-coherence; intersecting two affine charts and passing to a distinguished open is always possible in an affine scheme, and no statement about intersections of affine opens being affine, quasi-compactness or quasi-separatedness of $X$ is invoked. This is claim (3). [F6, step 3.1, step 4.1]

6.1 Choice accounting: the covering family used in steps 3.1 and 4.1 is the family of all affine opens on which the relevant sheaves are associated, which is determined by the data, so no chart or module is selected; the map $u$ of step 1.1 is the unique map corresponding to $\varphi|_U$ under the affine equivalence, and all identifications are the canonical ones of [F3] and [F5]. Hence the only use of the Axiom of Choice is the inherited one recorded in the Statement through [F10]. [F3, F5, F10, step 1.1, step 3.1, step 4.1] ∎
