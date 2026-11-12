---
id: lem-nisnevich-line-bundle-torsors
kind: lemma
title: Units and Picard groups in Nisnevich degree zero and one
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-nisnevich-covering-interface
  - def-derived-sections-on-sites
  - math:def-picard-group-scheme
  - lem-author-8e1c0251ef0d-units-sheaf
  - lem-author-8e1c0251ef0d-frame-transitions
  - lem-author-8e1c0251ef0d-torsor-cocycle
  - lem-author-8e1c0251ef0d-cocycle-morphism
  - lem-author-8e1c0251ef0d-tensor-transitions
  - lem-author-8e1c0251ef0d-fpqc-descent-input
  - lem-author-8e1c0251ef0d-h1-torsor-input
  - math:def-scheme
  - math:def-module-on-ringed-space
  - math:def-invertible-sheaf
  - math:def-locally-free-sheaf-finite-rank
  - math:def-quasi-coherent-module-scheme
  - math:def-pullback-module-ringed-spaces
  - math:lem-pullback-qc-module-quasi-coherent
  - math:def-sheaf-tensor-product
  - math:thm-universal-property-of-module-tensor-products
  - math:lem-etale-stable-base-change-composition
  - math:lem-points-of-scheme-fibre-product-residue-tensors
  - lem-author-a44f2061570d-site-derived-input
  - lem-author-a44f2061570d-evaluation-left-exact
  - math:thm-first-isomorphism-theorem-in-an-abelian-category
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  math:def-picard-group-scheme: mathematical-premise
  lem-author-8e1c0251ef0d-units-sheaf: mathematical-premise
  lem-author-8e1c0251ef0d-frame-transitions: mathematical-premise
  lem-author-8e1c0251ef0d-torsor-cocycle: mathematical-premise
  lem-author-8e1c0251ef0d-cocycle-morphism: mathematical-premise
  lem-author-8e1c0251ef0d-tensor-transitions: mathematical-premise
  lem-author-8e1c0251ef0d-fpqc-descent-input: mathematical-premise
  lem-author-8e1c0251ef0d-h1-torsor-input: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-invertible-sheaf: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-quasi-coherent-module-scheme: mathematical-premise
  math:def-pullback-module-ringed-spaces: mathematical-premise
  math:lem-pullback-qc-module-quasi-coherent: mathematical-premise
  math:def-sheaf-tensor-product: mathematical-premise
  math:thm-universal-property-of-module-tensor-products: mathematical-premise
  math:lem-etale-stable-base-change-composition: mathematical-premise
  math:lem-points-of-scheme-fibre-product-residue-tensors: mathematical-premise
  lem-author-a44f2061570d-site-derived-input: mathematical-premise
  lem-author-a44f2061570d-evaluation-left-exact: mathematical-premise
  math:thm-first-isomorphism-theorem-in-an-abelian-category: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 11
sources:
  references:
    - title: The Stacks Project, First cohomology and torsors
      url: https://stacks.math.columbia.edu/tag/03AG
      locator: Definition 21.4.1; Lemma 21.4.3, statement and converse construction in
        its proof
      statement: "For an abelian sheaf G on a site, the inverse of the canonical
        torsor-to-H1 bijection uses an injective embedding G into I and Q=I/G: a
        class is represented by a global section q of Q and its inverse torsor
        is the sheaf of local lifts of q to I."
      hypotheses: A site and an abelian sheaf G. Here the site is the specified small
        Nisnevich site, its terminal object is X, and Choice and the fixed
        universe bounds are retained.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read Definition 21.4.1 and the entire statement and displayed
        proof of Lemma 21.4.3 on the live tagged page. The source omits
        verification that its two constructions are inverse; this remains part
        of the imported classification. No group-law assertion is attributed to
        the lemma: compatibility with addition is proved locally below using a
        nonnegative resolution. No reconstruction of enough injectives or of the
        classification is claimed. Current consumer maintenance read the item
        and current supplier interfaces; no fresh primary-source or page-image
        reading or independent acceptance is claimed."
formulation_deps:
  - math:def-axiom-of-choice
  - def-nisnevich-covering-interface
  - def-derived-sections-on-sites
  - math:def-picard-group-scheme
  - lem-author-8e1c0251ef0d-units-sheaf
  - lem-author-8e1c0251ef0d-frame-transitions
  - lem-author-8e1c0251ef0d-fpqc-descent-input
  - math:def-scheme
  - math:def-module-on-ringed-space
  - math:def-invertible-sheaf
  - math:def-locally-free-sheaf-finite-rank
  - math:def-quasi-coherent-module-scheme
  - math:def-pullback-module-ringed-spaces
  - math:def-sheaf-tensor-product
argument_deps:
  - math:def-axiom-of-choice
  - def-nisnevich-covering-interface
  - def-derived-sections-on-sites
  - math:def-picard-group-scheme
  - lem-author-8e1c0251ef0d-units-sheaf
  - lem-author-8e1c0251ef0d-frame-transitions
  - lem-author-8e1c0251ef0d-torsor-cocycle
  - lem-author-8e1c0251ef0d-cocycle-morphism
  - lem-author-8e1c0251ef0d-tensor-transitions
  - lem-author-8e1c0251ef0d-fpqc-descent-input
  - lem-author-8e1c0251ef0d-h1-torsor-input
  - math:def-scheme
  - math:def-module-on-ringed-space
  - math:def-invertible-sheaf
  - math:def-locally-free-sheaf-finite-rank
  - math:def-quasi-coherent-module-scheme
  - math:def-pullback-module-ringed-spaces
  - math:lem-pullback-qc-module-quasi-coherent
  - math:def-sheaf-tensor-product
  - math:thm-universal-property-of-module-tensor-products
  - math:lem-etale-stable-base-change-composition
  - math:lem-points-of-scheme-fibre-product-residue-tensors
  - lem-author-a44f2061570d-site-derived-input
  - lem-author-a44f2061570d-evaluation-left-exact
  - math:thm-first-isomorphism-theorem-in-an-abelian-category
---

## Statement
Assume the Axiom of Choice and the fixed universe bounds in [[def-derived-sections-on-sites]]. For a scheme $X$, use its small Nisnevich site, taken as a sufficiently small full subcategory of étale $X$-schemes containing $X$ and closed under the fibre products and Zariski refinements used below. Let $\mathbb G_m$ be the sheaf assigning $U$ the group $\Gamma(U,\mathcal O_U)^\times$. Then

$$H^0_{\mathrm{Nis}}(X,\mathbb G_m)=\Gamma(X,\mathcal O_X)^\times,\qquad H^1_{\mathrm{Nis}}(X,\mathbb G_m)\cong\operatorname{Pic}(X).$$

The second identification sends a line bundle to its frame torsor, with inverse obtained by descent from local frames. A line bundle is a Zariski locally free $\mathcal O_X$-module of rank one; $\operatorname{Pic}(X)$ is the group of its isomorphism classes under tensor product.

## Facts & Assumptions

[A1] The stated Choice assumption supplies the set-indexed choice of torsor sections and local lifts in steps 2.3 and 2.4 and is inherited by the selected derived-sections model, scheme pullback theorem and étale stability theorem. [[math:def-axiom-of-choice]]

**Given:** The scheme $X$, its specified small Nisnevich site, the Axiom of Choice, and the stated size bounds. Scheme and scheme-module meanings are those of [[math:def-scheme]] and [[math:def-module-on-ringed-space]].

**Goal:** Identify degrees zero and one, including the frame-torsor inverse.

[F1] Nisnevich families and their residue-field-preserving lifts, scheme fibre products, and Zariski covers have the meanings in [[def-nisnevich-covering-interface]]. Étale morphisms are stable under base change and composition under the stated Choice assumption, by [[math:lem-etale-stable-base-change-composition]]. Points of $U\times_T V$ over $u,v$ with common image $t$ correspond to primes of $\kappa(u)\otimes_{\kappa(t)}\kappa(v)$, with the corresponding residue fields, by [[math:lem-points-of-scheme-fibre-product-residue-tensors]].

[F2] The structure presheaf is a sheaf for a covering-family site whose category is full in schemes over its terminal scheme, whose coverings refine Zariski coverings, and whose specified covering families are fpqc. The covering-family presentation and its associated Grothendieck topology have the same sheaves. Jointly surjective étale families are fpqc; quasi-coherent modules have effective and fully faithful fpqc descent, with canonical functorial pullback data, and finite local freeness descends. These are the precise interfaces of [[lem-author-8e1c0251ef0d-fpqc-descent-input]].

[F3] Units of a ring sheaf form a sheaf of abelian groups, including over the empty scheme, by [[lem-author-8e1c0251ef0d-units-sheaf]]. The cohomology notation uses [[def-derived-sections-on-sites]]. Under its Choice and size hypotheses, [[lem-author-a44f2061570d-site-derived-input]] supplies the abelian category of sheaves and a nonnegative injective resolution computing the same K-injective derived evaluation. Evaluation is additive, preserves kernels, and preserves initial exact sequences $0\to A\to B\to C$ by [[lem-author-a44f2061570d-evaluation-left-exact]].

[F4] First cohomology classifies torsors by [[lem-author-8e1c0251ef0d-h1-torsor-input]]. Its External input records the inverse by local lifts in an injective embedding; the precise imported construction is also recorded in External input below. Frames, torsor cocycles and change of sections, equal-transition torsor isomorphisms, and tensor transitions are supplied respectively by [[lem-author-8e1c0251ef0d-frame-transitions]], [[lem-author-8e1c0251ef0d-torsor-cocycle]], [[lem-author-8e1c0251ef0d-cocycle-morphism]], and [[lem-author-8e1c0251ef0d-tensor-transitions]]. These abstract site statements apply after the module-sheaf construction in step 2.2.

[F5] The Picard group is the tensor-product group of line-bundle isomorphism classes, by [[math:def-picard-group-scheme]]. Invertible sheaves are the rank-one locally free scheme modules, and are quasi-coherent, by [[math:def-invertible-sheaf]]. Finite locally free modules have a well-defined locally constant rank, as in [[math:def-locally-free-sheaf-finite-rank]].

[F6] Quasi-coherent scheme modules and their morphisms have the meaning in [[math:def-quasi-coherent-module-scheme]]. Scheme-module pullback is $f^*N=\mathcal O_U\otimes_{f^{-1}\mathcal O_X}f^{-1}N$, by [[math:def-pullback-module-ringed-spaces]]. Under Choice, it preserves quasi-coherence and, on affine charts with ring map $A\to B$, is computed by $B\otimes_A M$, by [[math:lem-pullback-qc-module-quasi-coherent]]. The scheme tensor sheaf is the sheafification of sectionwise tensors, by [[math:def-sheaf-tensor-product]]; balanced pairings and elementary-tensor formulas use [[math:thm-universal-property-of-module-tensor-products]]. In particular the maps $b\otimes(a_1,\ldots,a_r)\mapsto(ba_1,\ldots,ba_r)$ and $(b_1,\ldots,b_r)\mapsto\sum_j b_j\otimes e_j$ are mutually inverse, giving $B\otimes_A A^r\cong B^r$.

[F7] In an abelian category, the quotient by the kernel of a morphism canonically identifies with its image, by [[math:thm-first-isomorphism-theorem-in-an-abelian-category]]. Quotients here mean categorical cokernels of the subobject inclusions; in particular $I/G$ is a sheaf quotient, not a presheaf quotient on sections.

## External input

The [Stacks torsor-classification lemma](https://stacks.math.columbia.edu/tag/03AG), Lemma 21.4.3 and its converse construction, supplies the inverse used in [F4]: for an injective embedding $G\hookrightarrow I$ and quotient sheaf $Q=I/G$, a class represented by a global section $q$ of $Q$ has as inverse the sheaf of local lifts of $q$ to $I$. This is the inverse of the canonical bijection, including the inverse verification omitted in the source. Reference 0 records the hypotheses and reading limits. The classification is imported; the degree-zero calculation and compatibility with tensor products are local deductions below.

## Proof

1.1 The Nisnevich families give the covering-family presentation required by [F2]. Identity maps are Zariski covers and hence Nisnevich by [F1]. Composing two families preserves the required lifts, since the two residue-field isomorphisms compose, and étaleness is preserved by [F1]. For base change along $V\to T$, choose a point $v$ over $t$ and a Nisnevich lift $u$ of $t$. Then $\kappa(u)\otimes_{\kappa(t)}\kappa(v)\cong\kappa(v)$, so [F1] supplies a point of $U\times_T V$ over $v$ with the same residue field; the tensor isomorphism is the multiplication map with inverse $b\mapsto1\otimes b$. Étaleness is preserved by base change. Closure of the chosen category under the fibre products makes these coverings available there. The associated topology is therefore the specified Nisnevich topology. Every specified family is jointly surjective and étale, hence fpqc by [F2]; Zariski refinements, fullness and the terminal object are among the stated site hypotheses. Thus [F2] makes the structure presheaf a sheaf, and [F3] makes its units the abelian sheaf $G=\mathbb G_m$. [A1, F1, F2, F3, F6]

2.1 For any abelian sheaf $F$, [F3] gives an exact resolution $0\to F\to I^0\xrightarrow{d^0}I^1\to\cdots$ concentrated in nonnegative degrees and computing the stated derived evaluation. Left exactness gives $F(X)\cong\ker(d^0(X))$. Since the evaluated resolution has zero term in degree $-1$, this kernel is its zeroth cohomology. Hence $H^0_{\mathrm{Nis}}(X,F)\cong F(X)$ canonically. Apply this to the sheaf $G$ of step 1.1, for which $G(X)=\Gamma(X,\mathcal O_X)^\times$. This proves the degree-zero equality in the statement under its derived conventions. [F3, step 1.1]

2.2 Let $L$ be a line bundle on $X$. It is quasi-coherent by [F5]. Define $N_L(U)=\Gamma(U,f_U^*L)$ for $f_U:U\to X$ in the site, with restrictions given by pullback of sections and the canonical composition comparisons of [F2]. These comparisons are coherent, so the restrictions are functorial; [F6] makes every pullback quasi-coherent. A section of a scheme module $M$ on $U$ is equivalently a module map $\mathcal O_U\to M$: the map associated to $s$ sends $a$ to $as$, and its inverse takes the image of $1$. For a Nisnevich family over $U$, compatible sections of $f_U^*L$ are therefore morphisms between the canonical descent data of $\mathcal O_U$ and $f_U^*L$. Full faithfulness in [F2] glues these to a unique such map on $U$, hence a unique section. Thus $N_L$ is a sheaf on the specified site by the presentation of step 1.1; its scalar action and restrictions make it a sheaf of modules over the structure sheaf. A Zariski trivialization of $L$, pulled back to this site, identifies $N_L$ with its structure sheaf: on affine charts this is the rank-one case of [F6], and the maps agree with restriction and glue. Such trivializations are Nisnevich covers by [F1], including after passage to a slice. The frame lemma in [F4] now applies to $N_L$ and gives its $G$-torsor of frames. A scheme-module isomorphism induces an equivariant frame isomorphism by pullback and composition, so the construction is defined on line-bundle classes. [F1, F2, F4, F5, F6, step 1.1, construct]

2.3 Conversely, let $P$ be a $G$-torsor. Its local nonemptiness over the terminal object and step 1.1 give a Nisnevich family $U_i\to X$ on which it has sections; use [A1] to choose sections $s_i$. By [F4] their transition units satisfy $s_j=g_{ij}s_i$ and $g_{ij}g_{jk}=g_{ik}$. On each $U_i$ take $M_i=\mathcal O_{U_i}e_i$. In the descent convention of [F2], define $\varphi_{ij}:p_i^*M_i\to p_j^*M_j$ by $\varphi_{ij}(e_i)=g_{ij}^{-1}e_j$. On triple fibre products the cocycle equation makes the two composite maps agree. Equivalently the descended frames obey $e_j=g_{ij}e_i$. These are quasi-coherent module descent data. [A1, F1, F2, F4, F5, step 1.1, choose, construct]

2.4 For the group law, take one nonnegative injective resolution $0\to G\to I^0\xrightarrow{d^0}I^1\xrightarrow{d^1}I^2\to\cdots$ as in [F3], and put $Q=I^0/G$. Exactness and [F7] identify $Q$ canonically with $\ker(d^1)$, with $I^0\to Q$ induced by $d^0$. Kernel preservation in [F3] therefore identifies $Q(X)$ with $\ker(d^1(X))$. Consequently the map $Q(X)\to H^1_{\mathrm{Nis}}(X,G)=\ker(d^1(X))/\operatorname{im}(d^0(X))$ is a surjective group homomorphism. By the imported inverse in [F4] and External input, the class of $q\in Q(X)$ corresponds to the torsor $P_q$ of local lifts of $q$ to $I^0$. For $q,r\in Q(X)$, choose lifts $t_i,u_i$ on a common Nisnevich covering refinement. Then $t_i+u_i$ lift $q+r$, and their overlap differences are $(t_j-t_i)+(u_j-u_i)$. Writing the abelian group $G=\mathbb G_m$ multiplicatively, these are the products of the transition units of $P_q$ and $P_r$. This computes addition using the resolution itself, rather than importing an unstated group-law assertion about the torsor bijection. [A1, F1, F3, F4, F7, step 1.1, algebra, choose]

3.1 The family of step 2.3 is fpqc by [F1] and [F2]. Effective descent gives a quasi-coherent module $L$ with those canonical pullbacks and transition maps, and finite local freeness descends by [F2]. To check rank one, fix $x\in X$, take a local affine chart on which $L$ is free of some finite rank $r$, and a point $u\in U_i$ above $x$. Take an affine neighbourhood of $u$ inside the inverse image of that chart. The affine pullback formula and coordinate isomorphism in [F6] show that $f_i^*L$ has rank $r$ there. It also has rank one there because $f_i^*L\cong M_i$. Well-definedness of rank in [F5] gives $r=1$. This pointwise argument makes no simultaneous choice of points; if $X$ is empty the condition is vacuous. Thus $L$ is a line bundle. [F1, F2, F5, F6, step 2.3]

4.1 Apply step 2.2 to the descended $L$. Its chosen frames and the $s_i$ have the same transitions, so the equal-transition lemma in [F4] gives an equivariant isomorphism from its frame torsor to $P$. Conversely, starting with a line bundle and its Zariski frames, full faithfulness of descent in [F2] identifies the descended module with the original one. To compare choices, refine two trivializing families by their pairwise fibre products, which still cover by step 1.1. On this common refinement, the change-of-section formula in [F4] gives the scalar basis changes intertwining the descent data; full faithfulness descends these to an isomorphism. Likewise an equivariant torsor isomorphism transports chosen sections and their transitions, giving the same descended line-bundle class. Thus line-bundle classes and torsor classes are in bijection, with precisely the asserted inverse. [F1, F2, F4, step 1.1, step 2.2, step 3.1]

5.1 Let $L,M$ be the line bundles corresponding to $P_q,P_r$ under step 4.1, and use the corresponding local frames. The tensor-frame calculation in [F4] says that the tensor frames have the products of the two transition units. This calculation applies to the scheme tensor product: [F6] gives on affine trivializing charts the bilinear pairing of pulled-back sections into the pullback of $L\otimes_{\mathcal O_X}M$, sending $(ae_i,bf_i)$ to $ab(e_i\otimes f_i)$. These formulas agree on overlaps, since changing frames multiplies both sides by the same two units. They define the pairing globally, and the site-tensor universal property in [F4] identifies the site tensor with $N_{L\otimes M}$: locally the resulting map sends a tensor frame to a frame, and its local inverses agree on overlaps and glue. Hence the frame torsor of $L\otimes M$ has exactly the transitions computed for $P_{q+r}$ in step 2.4. The equal-transition isomorphism in [F4] identifies these torsors. Since every cohomology class has such a representative, step 4.1 now gives compatibility of the bijection with the two group laws. [F4, F5, F6, step 2.2, step 4.1, step 2.4, algebra]

6.1 The unit line bundle has the trivial frame torsor by [F4]. With the group structure of [F5], step 5.1 proves the asserted group isomorphism, and step 4.1 gives its frame-descent inverse. Step 2.1 gives the degree-zero identification. All constructions retain the stated Choice and size hypotheses, and no regularity, quasi-compactness or finite-type condition on $X$ has been introduced. [A1, F3, F4, F5, step 2.1, step 4.1, step 5.1] ∎
