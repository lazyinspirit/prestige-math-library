---
id: prop-swan-bertini-point-section
kind: proposition
title: Bertini functional with finite smooth zero locus
status: published
domain: mathematics
deps:
  - def-vector-bundle-classes
  - lem-regular-section-parameter-family
  - lem-affine-coherent-global-generation
  - lem-surjection-kernel-bundle
  - lem-author-fc2380accb47-normal-smooth-strata
  - lem-author-fc2380accb47-coordinate-first-jets
  - lem-author-fc2380accb47-nontransverse-incidence
  - lem-author-fc2380accb47-simultaneous-good-parameters
  - lem-author-fc2380accb47-finite-etale-zero-fibers
  - math:def-axiom-of-choice
  - def-article-conventions
  - math:def-weil-divisor-normal-noetherian-scheme
  - math:def-smooth-morphism-schemes
  - math:def-coherent-module-scheme
  - math:def-noetherian-ring-and-module
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-coherent-sheaves-abelian-noetherian-scheme
  - math:def-sheaf-hom
  - math:def-kernel-cokernel-image-sheaves
  - math:def-exact-sequence-sheaves
  - math:def-restriction-sheaf-open-subspace
  - math:def-finite-morphism-schemes
  - math:def-etale-morphism-schemes
dependency_roles:
  def-vector-bundle-classes: mathematical-premise
  lem-regular-section-parameter-family: mathematical-premise
  lem-affine-coherent-global-generation: mathematical-premise
  lem-surjection-kernel-bundle: mathematical-premise
  lem-author-fc2380accb47-normal-smooth-strata: mathematical-premise
  lem-author-fc2380accb47-coordinate-first-jets: mathematical-premise
  lem-author-fc2380accb47-nontransverse-incidence: mathematical-premise
  lem-author-fc2380accb47-simultaneous-good-parameters: mathematical-premise
  lem-author-fc2380accb47-finite-etale-zero-fibers: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-article-conventions: mathematical-premise
  math:def-weil-divisor-normal-noetherian-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-coherent-module-scheme: mathematical-premise
  math:def-noetherian-ring-and-module: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:thm-coherent-sheaves-abelian-noetherian-scheme: mathematical-premise
  math:def-sheaf-hom: mathematical-premise
  math:def-kernel-cokernel-image-sheaves: mathematical-premise
  math:def-exact-sequence-sheaves: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  math:def-finite-morphism-schemes: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Theorem6.7 proof, printed p.15, first Bertini application
      reading_limits: For this repair, read the full extracted text of frozen PDF
        pages 15 and 18, including Theorem 6.7 and the KM82 bibliography entry.
        KM82 section 3 was not obtained or read. No new original-author defect
        or acceptance of the article proof is asserted.
      statement: The first part of the proof of Theorem 6.7 constructs a functional on
        a rank-three bundle with finitely many smooth closed zeros, its finitely
        generated kernel, and the exact off-zero sequence with globally
        generated kernel restriction. This is the article claim decomposed here,
        not the source of the replacement first-jet proof.
      hypotheses: The article assumes a normal affine threefold over an algebraically
        closed field and applies the construction to its rank-three
        representative with first and second Chern classes zero. The locally
        authored supplier argument here does not require those Chern or
        determinant conditions.
    - title: The Stacks Project, method of first-order bad incidence
      url: https://stacks.math.columbia.edu/tag/0FD4
      locator: Situation33.47.2 and Lemma33.47.3, complete proof
      reading_limits: Read Situation 33.47.2 and the complete statement and displayed
        proof of Lemma 33.47.3 at tag 0FD4 in this repair. Upstream references
        were not reconstructed. The rank-three jet, determinant, avoidance and
        finite-etale arguments are supplied by the declared local interfaces.
      statement: A generated invertible sheaf whose associated projective map is an
        immersion has generally smooth zero divisors on a smooth field scheme;
        the proof bounds the projected bad first-order incidence. This is
        methodological context only, not the rank-three assertion used as a
        premise.
      hypotheses: "Situation 33.47.2: a field, a scheme over it, an invertible sheaf
        and a finite-dimensional section family; Lemma 33.47.3 additionally
        assumes smoothness, generation and the immersion property. These are the
        source theorem hypotheses, not an asserted application to the rank-three
        bundle."
formulation_deps:
  - def-vector-bundle-classes
  - lem-regular-section-parameter-family
  - math:def-axiom-of-choice
  - def-article-conventions
  - math:def-weil-divisor-normal-noetherian-scheme
  - math:def-smooth-morphism-schemes
  - math:def-coherent-module-scheme
  - math:def-sheaf-hom
  - math:def-kernel-cokernel-image-sheaves
  - math:def-exact-sequence-sheaves
  - math:def-restriction-sheaf-open-subspace
  - math:def-finite-morphism-schemes
  - math:def-etale-morphism-schemes
  - math:def-noetherian-ring-and-module
  - math:def-locally-noetherian-and-noetherian-scheme
argument_deps:
  - def-vector-bundle-classes
  - lem-regular-section-parameter-family
  - lem-affine-coherent-global-generation
  - lem-surjection-kernel-bundle
  - lem-author-fc2380accb47-normal-smooth-strata
  - lem-author-fc2380accb47-coordinate-first-jets
  - lem-author-fc2380accb47-nontransverse-incidence
  - lem-author-fc2380accb47-simultaneous-good-parameters
  - lem-author-fc2380accb47-finite-etale-zero-fibers
  - math:def-axiom-of-choice
  - def-article-conventions
  - math:def-weil-divisor-normal-noetherian-scheme
  - math:def-smooth-morphism-schemes
  - math:def-coherent-module-scheme
  - math:def-noetherian-ring-and-module
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-coherent-sheaves-abelian-noetherian-scheme
  - math:def-sheaf-hom
  - math:def-kernel-cokernel-image-sheaves
  - math:def-exact-sequence-sheaves
  - math:def-restriction-sheaf-open-subspace
  - math:def-finite-morphism-schemes
  - math:def-etale-morphism-schemes
dependency_level: 14
---

## Statement
Assume AC. Let $X$ be a normal affine threefold of finite type over an algebraically closed field $k$ of arbitrary characteristic, and let $P$ be a rank-three vector bundle on $X$. There is a functional $s:P\to\mathcal O_X$ whose scheme-theoretic zero locus $S=V(\operatorname{im}s)$ is a finite smooth $k$-scheme contained in $X_{\mathrm{sm}/k}$. Thus $S$ is a finite set of distinct reduced $k$-rational closed points, possibly empty. No Chern-class or determinant hypothesis on $P$ is needed for this assertion; it therefore applies to the particular $P$ in Theorem6.7. Threefold may be read as pure dimension three or, more generally, a normal scheme of dimension three; the construction below treats lower-dimensional clopen components as an additional avoidance locus.

Let $Q=\ker s$. It is coherent, and there is a surjection $\mathcal O_X^m\twoheadrightarrow Q$ for some finite $m$. On $U=X\setminus S$, the restriction $Q|_U$ is a rank-two vector bundle, its displayed generators restrict to a surjection $\mathcal O_U^m\twoheadrightarrow Q|_U$, and
$$0\longrightarrow Q|_U\longrightarrow P|_U\xrightarrow{s|_U}\mathcal O_U\longrightarrow0$$
is exact. Hence $Q|_U$ is generated by global sections on $U$, even though $U$ need not be affine.

## Facts & Assumptions
**Given:** AC, the normal affine finite-type threefold and bundle above. A functional on $P$ is a section of its dual $P^\vee$; its zero ideal is locally generated by its three coefficients.

**Goal:** Produce the actual functional in every characteristic and establish the kernel properties used in the article.

[F1] [[lem-author-fc2380accb47-normal-smooth-strata]] provides $X_3$, the union of the three-dimensional clopen integral components, $W=(X_3)_{\mathrm{sm}/k}$ and its reduced closed complement $D$ of dimension at most two. [[lem-author-fc2380accb47-coordinate-first-jets]] constructs the finite indexed family of sections of $E=P^\vee$ spanning first jets on $W$ from finite algebra generators and finite global generators of $E$.

[F2] [[lem-author-fc2380accb47-nontransverse-incidence]] bounds the bad derivative incidence by $N-1$ in an $N$-parameter family. [[lem-author-fc2380accb47-simultaneous-good-parameters]] supplies a nonempty parameter open avoiding it and the incidence over $D$, and a $k$-rational parameter in that open. [[lem-author-fc2380accb47-finite-etale-zero-fibers]] proves that the actual selected zero scheme is finite étale and is a finite disjoint union of copies of $\operatorname{Spec}k$ in $W$, including the empty case.

[F3] [[lem-surjection-kernel-bundle]] gives local splitting, the rank-two kernel and the off-zero exact sequence. [[lem-affine-coherent-global-generation]] gives finite global generators of a coherent sheaf on a Noetherian affine scheme under AC and preserves the generating surjection on every open restriction. Only the finite locally free definition of a rank-three bundle in [[def-vector-bundle-classes]] is used here; its K-theory, isomorphism-class set and universe assertions are not invoked. [[lem-regular-section-parameter-family]] constructs the actual coefficient zero ideals and identifies parameter fibers with zero subschemes.

[F4] [[def-article-conventions]] fixes the algebraically closed base field, $k$-schemes, affine finite type $X=\operatorname{Spec}A$ with $A=k[f_1,\ldots,f_d]$, and chain dimension. Pure dimension three means every irreducible component has dimension three; clopen means both open and closed. Normality means every local ring is an integrally closed domain, using only that convention from [[math:def-weil-divisor-normal-noetherian-scheme]] after Noetherianity is established below. Smoothness means smoothness of the structure morphism to $\operatorname{Spec}k$ in [[math:def-smooth-morphism-schemes]], and $X_{\mathrm{sm}/k}$ is the set where that morphism is smooth. Finite means affine with module-finite coordinate algebra over each affine base open, as in [[math:def-finite-morphism-schemes]]; over $k$ this is a finite-dimensional coordinate algebra. Étale means smooth of relative dimension zero, as in [[math:def-etale-morphism-schemes]]. A $k$-rational point has residue field $k$; reduced means there are no nonzero nilpotent local sections.

[F5] A ring is Noetherian when every ideal is finitely generated, as in [[math:def-noetherian-ring-and-module]]. [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] applies to a finite-type algebra over a Noetherian commutative ring. A scheme with a finite affine cover by spectra of Noetherian rings is Noetherian, as in [[math:def-locally-noetherian-and-noetherian-scheme]]. Coherence has the quasi-coherent, finite-type and finite relation-kernel meaning in [[math:def-coherent-module-scheme]]. Under AC, [[math:thm-coherent-sheaves-abelian-noetherian-scheme]] identifies finite-type quasi-coherent sheaves with coherent sheaves on a locally Noetherian scheme and makes kernels of morphisms of coherent sheaves coherent. In particular its criterion applies to finite locally free sheaves: on affine frame charts they are associated to finite free modules.

[F6] The dual is $P^\vee=\mathcal Hom_{\mathcal O_X}(P,\mathcal O_X)$ using [[math:def-sheaf-hom]]. A local basis of $P$ gives the dual basis by evaluation, so the dual is also finite locally free of rank three. Kernels are sectionwise kernels and images are sheafified sectionwise images, as in [[math:def-kernel-cokernel-image-sheaves]]. The zero subscheme of a functional is the coefficient-ideal subscheme of [F3]; an invertible change of frame preserves that ideal. Exactness means equality of image and kernel sheaves, as in [[math:def-exact-sequence-sheaves]]. Restriction to an open $U$ has $(\mathcal F|_U)(V)=\mathcal F(V)$ for $V\subseteq U$ open, as in [[math:def-restriction-sheaf-open-subspace]], with $\mathcal O_U=\mathcal O_X|_U$. A finite family generates if its induced map from the finite free sheaf is surjective on stalks, the convention in [F3].

[A1] AC is the axiom that every family of nonempty sets has a choice function, as in [[math:def-axiom-of-choice]]. It is retained at the affine-generation, coherence and geometric-supplier invocations above. The finite local dual-basis calculation and the restrictions below require no additional arbitrary-index choice.

## Proof
1.1 Write $X=\operatorname{Spec}A$ with $A=k[f_1,\ldots,f_d]$ by [F4]. The only ideals of the field $k$ are $0$ and $k$, both finitely generated, so $k$ is Noetherian. The finite-type algebra corollary in [F5] gives that $A$ is Noetherian, and the single affine chart $X$ is a finite Noetherian affine cover, so $X$ is Noetherian. The finite locally free sheaves $P$, $\mathcal O_X$ and $E=P^\vee$ are coherent by the criterion in [F5] and the dual frames in [F6]. Thus affine generation in [F3] applies to $E$ under [A1]. Use [F1] to form $W,D$ and multiply these finite global generators by the fixed algebra generators to obtain the first-jet-spanning family. The nontransverse-incidence bound and simultaneous-good-parameter result in [F2] give a $k$-rational parameter outside the closures of both bad incidences. By [F3] its section of $P^\vee$ is an actual functional $s$ with the asserted coefficient zero scheme. The finite-étale-zero-fiber result in [F2] makes this scheme finite étale and a finite disjoint union of copies of $\operatorname{Spec}k$ in $W\subset X_{\mathrm{sm}/k}$. By [F4] it is finite and smooth; its points are distinct, reduced, rational and closed, as asserted by [F2]. This includes an empty zero scheme and avoidance of all lower-dimensional components, with no Chern, determinant or characteristic hypothesis added. [A1, F1, F2, F3, F4, F5, F6, given]

2.1 Both source and target of $s$ are coherent by step 1.1, so the coherent-kernel theorem in [F5] gives coherence of the sectionwise kernel $Q=\ker s$. Affine generation in [F3], under [A1], gives a finite surjection $\mathcal O_X^m\twoheadrightarrow Q$. Put $U=X\setminus S$. The off-zero assertion of the kernel-bundle supplier in [F3], using the coefficient zero ideal of [F6], gives surjectivity of $s|_U$ and the exact sequence with rank-two kernel. Explicitly, at each point of $U$ a coefficient has nonzero residue, and on its nonvanishing open it is a unit and gives a local right inverse of $s$. Restriction preserves the kernel because both restriction and kernels are computed on the same sections by [F6]. Finally the restriction assertion of affine generation in [F3] gives $\mathcal O_U^m\twoheadrightarrow Q|_U$. Its standard basis images are global sections on $U$ and hence generate there, whether or not $U$ is affine. Together with step 1.1 this proves every assertion. [A1, F3, F5, F6, step 1.1] ∎

## Source/application note
The article's first Bertini application and kernel assertions are in [Theorem 6.7, printed p. 15](https://arxiv.org/abs/2610.22679v1); its bibliography on printed p. 18 identifies KM82. That cited section 3 was not read. The replacement proof composes the declared first-jet, determinant-incidence, avoidance and finite-étale suppliers. [Stacks, Situation 33.47.2 and Lemma 33.47.3](https://stacks.math.columbia.edu/tag/0FD4) provides methodological context for projecting bad first-order incidence for an invertible sheaf; its line-bundle theorem is not applied to the rank-three bundle. No second, rank-two irreducible-curve Bertini claim is made here. The present repair adds the Noetherian/coherence bridge and exact formulation interfaces to generated content, and asserts no defect of the article's authors.
