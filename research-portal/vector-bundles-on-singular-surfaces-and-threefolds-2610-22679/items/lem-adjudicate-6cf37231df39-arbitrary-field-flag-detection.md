---
id: lem-adjudicate-6cf37231df39-arbitrary-field-flag-detection
kind: lemma
title: Flag detection over an arbitrary field by prime-field restriction
status: published
domain: mathematics
deps:
  - thm-author-ab0a6fc202cb-elmanto-morrow-projective-input
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-flag-tower-line-quotients
  - def-motivic-cohomology
  - math:def-axiom-of-choice
  - math:def-prime-subfield
  - math:thm-prime-subfield-classification
  - def-nisnevich-covering-interface
  - math:prop-finite-biproducts-of-complexes-are-computed-degreewise
  - def-scheme-sites-and-sheafification
dependency_roles:
  thm-author-ab0a6fc202cb-elmanto-morrow-projective-input: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  lem-flag-tower-line-quotients: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-prime-subfield: mathematical-premise
  math:thm-prime-subfield-classification: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  math:prop-finite-biproducts-of-complexes-are-computed-degreewise: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes,
        arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Prime-field convention p.2; Theorem 1.1 opening p.3; Section 2.1 p.11;
        negative-weight convention following (5.2) p.34; projectivization
        convention and Theorem 5.24(2) p.43; proof conclusion p.44 (printed
        pages).
      statement: The prime-field motivic complexes are derived Nisnevich sheaves on
        qcqs schemes. The actual projective-bundle formula is an equivalence,
        with pullback the index-zero summand.
      hypotheses: Prime field Q or F_p, qcqs scheme, nonnegative weight, finite
        locally free bundle of constant positive rank. Source uses line
        subbundles; apply to the dual for the quotient convention.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read these passages in the primary versioned PDF text during this
        repair. Checked the stated hypotheses, line-subbundle convention and
        zero extension against their uses here. No visual inspection or
        reconstruction of the substantial motivic and projective-bundle proofs
        is claimed. Those premises are supplied through the named local inputs;
        prime-field restriction, composition and finite-clopen detection below
        are local deductions. Current maintenance read the assigned consumer and
        its exact declared supplier interfaces; no fresh primary-source or
        page-image reading, reconstruction or independent acceptance is claimed
        for this reference."
dependency_level: 9
formulation_deps:
  - thm-author-ab0a6fc202cb-elmanto-morrow-projective-input
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-flag-tower-line-quotients
  - def-motivic-cohomology
  - math:def-axiom-of-choice
  - math:def-prime-subfield
  - math:thm-prime-subfield-classification
  - def-nisnevich-covering-interface
  - def-scheme-sites-and-sheafification
argument_deps:
  - thm-author-ab0a6fc202cb-elmanto-morrow-projective-input
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-flag-tower-line-quotients
  - def-motivic-cohomology
  - math:def-axiom-of-choice
  - math:def-prime-subfield
  - math:thm-prime-subfield-classification
  - def-nisnevich-covering-interface
  - math:prop-finite-biproducts-of-complexes-are-computed-degreewise
  - def-scheme-sites-and-sheafification
---

## Statement
Assume the Axiom of Choice and the fixed site-size and universe bounds of the actual motivic complexes. Let $k$ be any field and $X$ any qcqs $k$-scheme. For finitely many finite locally free sheaves on $X$, the simultaneous line-quotient flag tower $q:Y\to X$, constructed on the finite common clopen rank partition, detects integral motivic cohomology:
$$q^*:H^{a,b}_{\mathrm{mot}}(X,\mathbb Z)\longrightarrow H^{a,b}_{\mathrm{mot}}(Y,\mathbb Z)$$
is injective for every $a\in\mathbb Z$ and $b\geq0$. No algebraic closure, finite-type, noetherian or dimension assumption is required. With the source zero extension in weights $b<0$, detection in those weights is vacuous.

## External input
Reference 0 records the source premises used through [F1] and [F2]: existence and Nisnevich sheafhood of the actual prime-field complexes, the projective-bundle equivalence in its line-subbundle convention, and the negative-weight zero extension. Their substantial proofs are imported through the declared suppliers. The detection argument below is locally authored.

## Facts & Assumptions
[F1] The prime-field complexes and their restrictions to field-schemes are homotopy-coherent derived Nisnevich sheaves, and cohomology is evaluated on these actual complexes. The target is the stable derived enhancement with homotopy category $D(\mathbb Z)$; the sheaf condition is its covering-sieve limit condition, including the empty cover and hence the zero value on the empty scheme. [[lem-author-b747b28c359f-elmanto-morrow-complexes]], [[def-motivic-cohomology]]

[F2] The actual projective-bundle equivalence for qcqs prime-field schemes has pullback as its zero summand. Its supplied dualization identifies the line-subbundle projectivization of $G^\vee$ with the line-quotient projectivization of $G$, preserving the projection and tautological $\mathcal O(1)$. In this quotient convention the actual pullback has a retraction in $D(\mathbb Z)$. The same supplier records the source zero extension in negative weights. [[thm-author-ab0a6fc202cb-elmanto-morrow-projective-input]]

[F3] A vector bundle is a finite locally free module sheaf; a line bundle has rank one. The simultaneous line-quotient flag construction is a finite composite of positive-rank projective bundles on each common rank stratum. On qcqs $X$ the common rank partition is finite and clopen, its strata and all intermediate stages are qcqs, and the finite union of their towers is qcqs. A clopen stratum is an open-and-closed subscheme. Rank-zero bundles require no stage. [[lem-flag-tower-line-quotients]]

[F4] The prime subfield is the intersection of all subfields of a field. It is canonically isomorphic to $\mathbb Q$ or $\mathbb F_p$ according to characteristic. [[math:def-prime-subfield]], [[math:thm-prime-subfield-classification]]

[F5] The sieve, topology and size conventions are those of [[def-scheme-sites-and-sheafification]], with the actual universes and qcqs categories fixed by [F1]. Every Zariski open covering family is Nisnevich: its maps are etale and every covered point has a residue-field-preserving lift. The empty family covers the empty scheme. [[def-nisnevich-covering-interface]]

[F6] Finite biproducts of complexes are computed degreewise and cohomology preserves them; use the chain statement with degrees reversed for cochains. The coordinate inclusions and projections retain their biproduct identities after localization to $D(\mathbb Z)$. Thus their image is also the finite categorical product there. [[math:prop-finite-biproducts-of-complexes-are-computed-degreewise]]

[A1] Assume Choice, meaning every family of nonempty sets has a choice function. It is inherited through the flag construction and the derived sheaf evaluations. Retain the fixed universe-existence and site-size assumptions of [F1], using the site terminology of [F5]; the finite coordinate calculations below require no additional choice assumption. [[math:def-axiom-of-choice]]

## Proof
**Given:** $k,X$, the finite bundle family, Choice and the size bounds in the statement.

**Goal:** Supply detection in the arbitrary-field scope used by the actual second-stage comparison.

1.1 By [F4], identify the prime subfield $F\subseteq k$ with $\mathbb Q$ or $\mathbb F_p$. Forgetting to $F$ changes neither the underlying qcqs scheme nor its vector bundles and projective bundles, and [F1] identifies the restricted motivic functor and pullback with their prime-field values. For a positive constant-rank bundle $G$, use the dualization identification supplied by [F2]; it sends an invertible quotient of $G$ to the locally split dual line in $G^\vee$ and preserves $\mathcal O(1)$. The projective-bundle equivalence $\Phi$ then has the actual quotient-projective pullback as its zero summand. If $i_0,p_0$ are the zero-coordinate inclusion and projection, $\Phi i_0=\pi^*$ and $(p_0\Phi^{-1})\pi^*=1$ by [F6]. Applying the cohomology functor of [F1] gives a left inverse to $\pi^*$ on every degree and nonnegative weight. For constant ranks, [F3] makes the simultaneous tower finite with qcqs intermediate stages, so apply this argument at each stage and compose its injective pullbacks. Rank-zero cases give the identity tower. [F1, F2, F3, F4, F6, A1]

2.1 For varying ranks write $X=\coprod_\alpha X_\alpha$ for the finite clopen common rank partition and $Y=\coprod_\alpha Y_\alpha$ for its towers, as supplied by [F3]. These are admissible Nisnevich covers by [F5]. Put $P(T)=\mathbb Z(b)_{\mathrm{mot}}(T)$ for $b\geq0$. The covering-sieve limit of [F1] identifies $P(X)$ with $\prod_\alpha P(X_\alpha)$: on the subcategory of arrows factoring through $X_\alpha$, a cone is determined by its map to $P(X_\alpha)$ and all further restrictions; arrows factoring through two distinct components have empty domain, and $P(\varnothing)=0$ makes their compatibility spaces contractible. Thus such coherent cones are exactly tuples of component cones. The same argument applies to $Y$. These identifications are restriction maps, so naturality makes $q^*$ the product of the component pullbacks. The coherent finite product gives a product in $D(\mathbb Z)$, since taking components of its mapping-space universal property preserves products. It therefore agrees with the degreewise biproduct in [F6], whose cohomology is the product of the cohomologies (kernels and images of its coordinate differential are coordinatewise). Hence on cohomology $q^*$ is the finite product of the injective maps in step 1.1 and is injective. This includes the empty scheme, whose value is zero. Only qcqs, finite local freeness and the inherited assumptions have been used; no algebraic closure, finite-type, noetherian or dimension assumption entered. For $b<0$ both sides are zero by the source extension in [F2], proving the remaining assertion. [F1, F2, F3, F5, F6, A1, step 1.1] ∎
