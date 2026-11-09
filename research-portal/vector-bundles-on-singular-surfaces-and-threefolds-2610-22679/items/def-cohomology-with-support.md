---
id: def-cohomology-with-support
kind: definition
title: Motivic and filtered K theory with support
status: draft
domain: mathematics
deps:
  - def-article-conventions
  - def-motivic-filtration
  - def-motivic-cohomology
  - def-supported-complex-indexing
  - lem-eilenberg-maclane-shift-index
  - lem-filtered-support-exactness
  - def-stable-spectra-interface
  - def-scheme-sites-and-sheafification
  - math:def-axiom-of-choice
dependency_roles:
  def-article-conventions: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  def-supported-complex-indexing: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  lem-filtered-support-exactness: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct-proof
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 6, Definition 2.7
      reading_limits: Definition 2.7 was read in the supplied article text. The
        definition below makes its open-complement and spectral-indexing
        conventions explicit; no comparison theorem for a separately constructed
        quotient evaluation is claimed.
dependency_level: 13
---

## Definition
Fix a field $k$ and the category $\mathrm{Sch}_k$ of quasi-compact quasi-separated $k$-schemes from [[def-article-conventions]], together with the Axiom of Choice and the size conventions of the cited interfaces. Let $X$ be an object of this category, let $Y$ be a closed subset of $X$ equipped with its reduced induced closed-subscheme structure, and put $U=X\setminus Y$. The reduced structure has the same underlying closed subset and has no nonzero nilpotent local sections.

For the quotient notation, let $h_X(T)=\operatorname{Hom}_k(T,X)$ and let $h_U(T)$ be the subset of maps whose image lies in $U$, for $T\in\mathrm{Sch}_k$. On a size-bounded big Nisnevich site with these objects, let $\mathbb Z[h_X]$ and $\mathbb Z[h_U]$ denote the sheafifications of the presheaves of free abelian groups on these sets. Define the **quotient sheaf** $\mathbb Z[X/U]$ as the cokernel of $\mathbb Z[h_U]\to\mathbb Z[h_X]$, regarded when needed as a complex concentrated in degree zero. Here a cokernel is the quotient of the target sheaf by the image sheaf. This notation records the pair $(X,U)$; the support objects below are defined directly as fibers.

The supplied functors are defined on qcqs schemes. To cover an arbitrary open $U$, use the following explicit extension convention. For any such open $W\subseteq X$, let $\mathcal Q(W)$ be the poset of quasi-compact open subsets of $W$. For $j\geq0$, put
$$F^jK(W):=\operatorname*{holim}_{V\in\mathcal Q(W)^{\mathrm{op}}}F^j_{\mathrm{mot}}K(V),\qquad K(W):=\operatorname*{holim}_{V\in\mathcal Q(W)^{\mathrm{op}}}K(V),$$
and, writing $C_j(V)=\mathbb Z(j)_{\mathrm{mot}}(V)$ and $HC_j(V)$ for its Eilenberg–Mac Lane spectrum,
$$M_j(W):=\operatorname*{holim}_{V\in\mathcal Q(W)^{\mathrm{op}}}HC_j(V).$$
The arrows in each inverse diagram are restrictions. Homotopy limits are limits in the stable category of spectra. When $W$ is qcqs, its identity open is terminal in $\mathcal Q(W)$, and these expressions recover the supplied values. For arbitrary $W$, these formulas specify an extension; they do not assert its comparison with any independently constructed theory on non-qcqs schemes.

Define the **filtered support spectrum**, the **K-theory support fiber**, and the **motivic support spectrum** by
$$F^j_{\mathrm{mot}}K(X/U):=\operatorname{fib}(F^jK(X)\to F^jK(U)),\quad K(X/U):=\operatorname{fib}(K(X)\to K(U)),$$
$$M_j(X/U):=\operatorname{fib}(M_j(X)\to M_j(U)).$$
A fiber is the homotopy pullback of the displayed map along the map from the zero spectrum. The compatible stage-to-zero maps give a map $F^j_{\mathrm{mot}}K(X/U)\to K(X/U)$. For every integer $i$ define
$$F^j_{\mathrm{mot}}K_{i,Y}(X):=\operatorname{im}\bigl(\pi_iF^j_{\mathrm{mot}}K(X/U)\to\pi_iK(X/U)\bigr).$$
The image is the subgroup consisting of values of this homomorphism. Define supported motivic cohomology for every integer $a$ by
$$H^{a,j}_{\mathrm{mot},Y}(X,\mathbb Z):=\pi_{-a}M_j(X/U).$$
Equivalently, define the shifted support spectrum $\mathbb Z(j)^{\mathrm{shift}}_{\mathrm{mot}}(X/U):=M_j(X/U)[2j]$. With this explicitly shifted meaning,
$$H^{2j-i,j}_{\mathrm{mot},Y}(X,\mathbb Z)=\pi_i\bigl(\mathbb Z(j)^{\mathrm{shift}}_{\mathrm{mot}}(X/U)\bigr).$$
The support-to-global maps are the first arrows of the defining fiber sequences. The image groups obtained after applying those maps are separate from the supported groups defined here.

## Facts & Assumptions
**Given:** $k$, $X$, $Y$, $U$, $j\geq0$, and integers $i,a$ as above, with the stated choice and size conventions.

**Goal:** Justify the quotient notation, the support fibers and their maps, the image group, and the displayed indexing without assuming injectivity or a comparison with an independently constructed quotient evaluation.

[F1] [[def-scheme-sites-and-sheafification]] supplies the site and sheafification conventions; [[def-article-conventions]] specifies qcqs schemes and their category.

[F2] The already assumed Axiom of Choice, [[math:def-axiom-of-choice]], discharges the explicit Choice hypothesis when invoking the perfect-complex $K$-theory and filtration interface in [[def-motivic-filtration]]. That interface supplies the coherent restriction maps and stage-to-$K$ maps on qcqs schemes. [[def-motivic-cohomology]] supplies the complex-valued restriction functor and identifies global $H^{a,j}$ with $H^a(C_j)$.

[F3] [[def-stable-spectra-interface]] supplies homotopy limits, fibers, suspension and the abelian groups $\pi_i$. [[lem-filtered-support-exactness]] gives the stagewise support construction for a coherent filtered restriction diagram.

[F4] [[lem-eilenberg-maclane-shift-index]] gives $\pi_iHC\cong H^{-i}(C)$ and $\pi_i(E[2j])\cong\pi_{i-2j}E$ in the stated convention. [[def-supported-complex-indexing]] distinguishes unshifted support from its $2j$-shift.

## Justification
1.1 The subfunctor $h_U\subseteq h_X$ is stable under precomposition, so the induced map of free abelian presheaves and its sheafification are defined; the cokernel defines the stated quotient sheaf. Every open subset of a scheme is the union of its affine open subsets, and each affine open is quasi-compact. Since $X$ is quasi-separated, a quasi-compact open $V\subseteq X$ is quasi-separated as well; hence each $V\in\mathcal Q(W)$ belongs to $\mathrm{Sch}_k$. The restriction maps in [F2] therefore form the indicated coherent inverse diagrams, whose homotopy limits exist by [F3]. If $W$ itself is quasi-compact, its membership in $\mathcal Q(W)$ makes it initial in the opposite indexing category, so the limit is its supplied value. [F1, F2, F3, given]

2.1 Inclusions of open subsets induce restriction maps between these limits, and the coherent maps from filtration stages to $K$ induce a map of the two restriction arrows. Taking fibers produces the displayed support spectra and the map between them; the two sequences are fiber sequences by definition. The induced homomorphism on $\pi_i$ has a well-defined image subgroup. This is the stagewise construction of [F3], applied to the restriction diagram with the stated extension convention. [F2, F3, step 1.1]

3.1 By [F4], the shifted support spectrum has $\pi_i(M_j(X/U)[2j])\cong\pi_{i-2j}M_j(X/U)$, which is the definition of $H^{2j-i,j}_{\mathrm{mot},Y}(X,\mathbb Z)$. For a qcqs global scheme, the same indexing lemma identifies $\pi_{-a}M_j(X)$ with $H^a(C_j(X))$; hence the first fiber arrow induces the degree-preserving support-to-global map. The construction does not require that the supported image map be injective. This justifies the definitions and their stated maps. [F2, F3, F4, step 2.1] ∎

## Source notation and scope
The article prints $H^{2j-i,j}_{\mathrm{mot},Y}(X,\mathbb Z):=\pi_i(\mathbb Z(j)_{\mathrm{mot}}(X/U))$ at Definition 2.7. The formula above specifies a $2j$-shift on the spectrum occurring on the right so that it is compatible with the cohomological convention of [[def-motivic-cohomology]]. The unshifted realization instead has $\pi_i=H^{-i}$; the printed notation alone does not specify the comparison between these two conventions. The quotient sheaf and fiber definitions retain the article's pair and fiber sequences, but no identification of the displayed fibers with an independently defined evaluation on that sheaf is asserted here. In particular, $K(X/U)$ is not identified here with the K-theory of the category of perfect complexes supported on $Y$; such an identification needs a localization input with its own hypotheses.
