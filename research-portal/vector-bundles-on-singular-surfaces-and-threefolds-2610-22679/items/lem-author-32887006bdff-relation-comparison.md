---
id: lem-author-32887006bdff-relation-comparison
kind: lemma
title: The source Chern classes are the supplied projective-relation classes
status: published
domain: mathematics
deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - thm-author-32887006bdff-non-a1-whitney-input
  - def-motivic-chern-classes
  - lem-chern-relation-uniqueness
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-free-sheaf-finite-rank
  - prop-motivic-projective-bundle-formula
  - math:def-projective-bundle-scheme
  - math:def-relative-projective-space-standard-charts
  - math:thm-jacobian-criterion-smooth-morphism
  - math:thm-smooth-morphisms-stable-base-change-composition
dependency_roles:
  lem-author-32887006bdff-em-p1-model: mathematical-premise
  lem-author-32887006bdff-actual-orientation: mathematical-premise
  thm-author-32887006bdff-non-a1-whitney-input: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  lem-chern-relation-uniqueness: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  prop-motivic-projective-bundle-formula: mathematical-premise
  math:def-projective-bundle-scheme: mathematical-premise
  math:def-relative-projective-space-standard-charts: mathematical-premise
  math:thm-jacobian-criterion-smooth-morphism: mathematical-premise
  math:thm-smooth-morphisms-stable-base-change-composition: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 20
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory (author PDF
        dated April 14, 2025)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Definition 4.4.1 and Lemma 4.4.3, printed pp. 30–31; sections 2.1.1 and
        2.1.5, p. 14
      statement: Definition 4.4.1 uniquely defines positive-rank Chern coefficients by
        the quotient-projective relation, with zeroth coefficient one, and
        defines their total polynomial. Lemma 4.4.3 supplies filtered and
        Whitney identities; those identities are not needed for this coefficient
        comparison.
      hypotheses: A linearly oriented motivic ring spectrum over a qcqs derived base
        satisfying PBF; a bundle of constant rank at least one. The local model
        and orientation suppliers meet these conditions on smooth qcqs schemes
        over the stated classical base. Rank-zero and above-rank extensions are
        local conventions.
      reading_limits: "Historical source-reading record retained from the preceding
        repair: In this repair read the live author PDF title/date,
        §§2.1.1–2.1.5, Definition 4.4.1 and Lemma 4.4.3 with its complete proof
        across printed pp. 30–31. The screenshot request failed; no new visual
        check is claimed. Model, orientation and coefficient uniqueness are used
        through their supplied interfaces; their deeper chains and the source's
        cited splitting trick are not reconstructed. Current downstream
        maintenance read the current declared supplier contracts and the
        complete assigned body; it did not freshly retrieve or inspect this
        external PDF and claims no additional source-proof reading."
formulation_deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - thm-author-32887006bdff-non-a1-whitney-input
  - def-motivic-chern-classes
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-free-sheaf-finite-rank
  - prop-motivic-projective-bundle-formula
argument_deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - thm-author-32887006bdff-non-a1-whitney-input
  - def-motivic-chern-classes
  - lem-chern-relation-uniqueness
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-free-sheaf-finite-rank
  - prop-motivic-projective-bundle-formula
  - math:def-projective-bundle-scheme
  - math:def-relative-projective-space-standard-charts
  - math:thm-jacobian-criterion-smooth-morphism
  - math:thm-smooth-morphisms-stable-base-change-composition
---

## Statement
Assume the Axiom of Choice and the compatible universe and site-size bounds of the supplied motivic constructions. Let $k$ be any field, $S$ a quasi-compact quasi-separated $k$-scheme, $Y$ a smooth qcqs $S$-scheme, and $V$ a finite locally free sheaf of constant rank $r\geq0$ on $Y$. Write $H^{a,b}(Y)=H^{a,b}_{\mathrm{mot}}(Y,\mathbb Z)$. For $r>0$, the Chern coefficients of Annala–Iwasa Definition 4.4.1 agree with the supplied coefficients $c_i(V)$ under the natural identifications $\mathcal E_S^{2i,i}(Y)\cong H^{2i,i}(Y)$, for $0\leq i\leq r$.

Extend the source-side polynomial locally by $\widetilde c_i(V)=0$ for $i>r$ and by $\widetilde c_t(0)=1$ for the rank-zero bundle. With these explicitly declared extensions, $\widetilde c_i(V)=c_i(V)$ for every $i\geq0$ and every constant rank. The rank-zero extension is a local convention, not a prescription in Definition 4.4.1. For a line, the first coefficient is the original additive EM orientation and all higher coefficients are zero. No smoothness of $S$ over $k$ is required.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]], and the compatible universe and site-size bounds of the supplied constructions. This discharges the foundational hypotheses of the supplied model, orientation, coefficient-uniqueness and projective geometry inputs [F1]–[F5] in steps 1.1–2.1. The size bounds are separate standing assumptions, not consequences of Choice.

[F1] For positive rank, [[thm-author-32887006bdff-non-a1-whitney-input]] supplies the source quotient-projective relation, with $\widetilde c_0=1$. For the stated qcqs $k$-base $S$ and smooth qcqs $Y/S$, [[lem-author-32887006bdff-em-p1-model]] and [[lem-author-32887006bdff-actual-orientation]] identify its groups, products, quotient tautological class and actual first class with those of the supplied EM theory; its additivity is supplied explicitly in [F5].

[F2] [[def-motivic-chern-classes]] and [[lem-chern-relation-uniqueness]] give the unique positive-rank coefficients of the supplied quotient-projective relation, and separately prescribe the rank-zero series $1$ and zero coefficients above rank. The supplied definition applies to every qcqs $k$-scheme, including $Y$.

[F3] [[math:def-quasi-compact-and-quasi-separated-scheme]] fixes qcqs for the underlying schemes $S$ and $Y$; [[math:def-smooth-morphism-schemes]] fixes smoothness of $Y\to S$. [[math:def-locally-free-sheaf-finite-rank]] fixes finite locally free sheaves, constant rank and line bundles (rank one), including that a rank-zero sheaf is zero. Being a $k$-scheme means having its specified structural morphism to $\operatorname{Spec}k$; the structural morphism of $Y$ is its composite through $S$.

[F4] [[math:def-projective-bundle-scheme]] supplies the quotient projective bundle, its tautological quotient and its local models $\mathbb P^{r-1}_U$ on bundle frames. [[math:def-relative-projective-space-standard-charts]] supplies the affine polynomial charts and $\mathbb P^0_U=U$. Under [A1], [[math:thm-jacobian-criterion-smooth-morphism]] makes a finitely presented polynomial chart smooth by taking no equations and the empty Jacobian minor equal to one. [[math:thm-smooth-morphisms-stable-base-change-composition]] supplies smoothness of the composite with $Y\to S$.

[F5] [[prop-motivic-projective-bundle-formula]] supplies the actual EM additively oriented bigraded theory on qcqs $k$-schemes, with its natural unital pullbacks, products and quotient-tautological PBF. Its projective-bundle contract includes qcqs closure. In particular its original line class satisfies $c_1(L\otimes M)=c_1(L)+c_1(M)$. This adds no smoothness hypothesis on $S$ or $Y$ over $k$.

## External input
Reference 0 records the source's positive-rank coefficient definition and its hypotheses. Its defining relation is supplied through [F1]; the local model and orientation verify its applicability. The comparison below is a local reindexing and uniqueness argument. No proof of the source's PBF or Whitney theorem is claimed here, and no rank-zero convention is attributed to that definition.

## Proof
**Given:** $k,S,Y,V$ as stated, with constant rank $r$, the assumptions [A1], and the explicitly extended source-side coefficients.

**Goal:** Identify the actual coefficients, their signs and their zero-rank extension.

1.1 The underlying scheme $Y$ is qcqs by hypothesis, and its composite structural morphism in [F3] makes it a $k$-scheme; thus both constructions apply. For $r>0$, [F4] gives polynomial affine charts for $\pi:\mathbb P_Y(V)\to Y$. These are finitely presented with an empty equation list and Jacobian minor one, so the criterion in [F4] makes $\pi$ smooth locally at every point. Its composite to $S$ is smooth by [F4], and its total scheme is qcqs by [F5]. Hence this projective bundle is an allowed test object for [F1]. For $r>0$ the source relation is $\sum_{j=0}^r(-1)^j\xi^j\pi^*\widetilde c_{r-j}(V)=0$, where $\pi$ classifies rank-one quotients and $\xi$ is the first class of its tautological quotient line. Multiplying by $(-1)^r$ and setting $i=r-j$ gives $\xi^r+\sum_{i=1}^r(-1)^i\pi^*\widetilde c_i(V)\xi^{r-i}=0$. The actual orientation and quotient line agree by [F1], including after evaluation on this projective bundle, which is again smooth qcqs over $S$. Coefficient uniqueness in [F2] gives $\widetilde c_i(V)=c_i(V)$ for $1\leq i\leq r$, and the zeroth coefficients are both the unit. [A1, F1, F2, F3, F4, F5, given]

2.1 For $r=1$, [F4] identifies every framed projective bundle with $\mathbb P^0_U=U$, so its structural map is locally the identity and hence globally an isomorphism. In those frames its tautological quotient is the identity on $V$, so the quotient line is $V$; the relation is $\xi-c_1(V)=0$. Thus the first coefficient is the original EM line class, additive under tensor product by [F5]. For every positive rank, the explicitly extended source polynomial and the supplied convention both have zero coefficients above rank. For rank zero, both series are $1$ by the declared local extension and [F2], without applying a relation on an empty projective bundle. This proves agreement in every nonnegative degree and rank, together with the line normalization. [A1, F1, F2, F3, F4, F5, step 1.1] ∎
