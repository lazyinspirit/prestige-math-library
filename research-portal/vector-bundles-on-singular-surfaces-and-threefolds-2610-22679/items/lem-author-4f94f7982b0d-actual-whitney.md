---
id: lem-author-4f94f7982b0d-actual-whitney
kind: lemma
title: Actual exact-sequence Whitney and filtered-root formula on singular qcqs
  schemes
status: published
domain: mathematics
deps:
  - lem-author-4f94f7982b0d-em-p1-model
  - lem-author-4f94f7982b0d-actual-orientation
  - math:def-axiom-of-choice
  - lem-author-4f94f7982b0d-relation-comparison
  - thm-author-4f94f7982b0d-non-a1-whitney-input
  - def-motivic-chern-classes
  - math:def-field
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-exact-sequence-sheaves
  - math:def-locally-free-sheaf-finite-rank
  - math:def-kernel-cokernel-image-sheaves
  - math:def-derived-scheme-and-cotangent-complex
  - math:def-grothendieck-universe-closure-convention
  - math:def-smooth-morphism-schemes
  - thm-author-4f716d60801a-derived-enhancement-input
dependency_roles:
  lem-author-4f94f7982b0d-em-p1-model: mathematical-premise
  lem-author-4f94f7982b0d-actual-orientation: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-4f94f7982b0d-relation-comparison: mathematical-premise
  thm-author-4f94f7982b0d-non-a1-whitney-input: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-exact-sequence-sheaves: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-kernel-cokernel-image-sheaves: mathematical-premise
  math:def-derived-scheme-and-cotangent-complex: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated April 14, 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Section 2.1.1–2.1.5, printed page 14; Definition 4.4.1 and Lemma
        4.4.3(ii)–(iii), printed pages 30–31
      source_sha256: ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261
      reading_limits: For this proposal, read the cached author PDF dated April 14,
        2025 (the recorded SHA256 matches), its title page, printed p. 14 and
        Definition 4.4.1 and the complete Lemma 4.4.3 with its proof on pp.
        30–31. Visually inspected pp. 14, 30 and 31; opened the live author PDF
        and checked the date and corresponding extracted passages. The splitting
        trick and upstream motivic machinery remain imported through the
        declared suppliers. Read the current model, orientation, comparison and
        derived-enhancement bodies for the stated application, without auditing
        their upstream chains. No general equivalence of derived geometric or
        unbounded module models is used or claimed.
      statement: Definition 4.4.1 specifies positive-rank Chern coefficients by the
        quotient-projective relation. Lemma 4.4.3(ii) gives the line-quotient
        filtration product, and (iii) gives Whitney multiplication for a fiber
        sequence. Coefficients above rank and the zero-bundle polynomial are
        local conventions.
      hypotheses: A qcqs derived base S; a homotopy-commutative linearly oriented
        motivic ring spectrum satisfying the actual class-power PBF; Y smooth
        and qcqs over S; constant bundle ranks, positive for the cited
        definition. Here S=Y=X. The declared model, orientation, comparison and
        local fiber calculation discharge the application hypotheses.
proof_strategy: direct
dependency_level: 21
---

## Statement
Assume the Axiom of Choice and the fixed site-size and universe bounds of the supplied motivic constructions. Let $X$ be any qcqs $k$-scheme over a field, and let $0\to V^{\prime}\to V\to V^{\prime\prime}\to0$ be an exact sequence of constant-rank finite locally free sheaves. Then $c_t(V)=c_t(V^{\prime})c_t(V^{\prime\prime})$. If $V$ has a filtration by subbundles with line quotients $L_s$, then $c_t(V)=\prod_s(1+c_1(L_s)t)$. These refer to the supplied projective-relation classes, not to an assumed Chern polynomial of a K-zero equality.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the stated size bounds. Use [[math:def-grothendieck-universe-closure-convention]] with compatible Grothendieck universes $U\in V\in W$, $\omega\in U$, containing the scheme and site data, and with the larger universes accommodating the categories of the supplied constructions. Their existence is assumed separately from Choice. These are the inherited foundational hypotheses of the EM model, comparison, Chern constructions and derived enhancement used in steps 1.1–3.1.

[F1] [[thm-author-4f94f7982b0d-non-a1-whitney-input]] supplies Definition 4.4.1 and Lemma 4.4.3(ii)–(iii) for a homotopy-commutative linearly oriented non-A¹ motivic ring spectrum with PBF over any qcqs derived base $S$, evaluated on $Y\in\mathrm{Sm}_S$.

[F2] [[lem-author-4f94f7982b0d-relation-comparison]] supplies the actual EM class comparison for a field $k$, qcqs $k$-base $S$ and smooth qcqs $S$-scheme $Y$, under [A1]. Its source-side conventions are zero coefficients above rank and $\widetilde c_t(0)=1$. [[def-motivic-chern-classes]] gives the corresponding supplied zero-bundle convention and invariance under bundle isomorphism.

[F3] [[lem-author-4f94f7982b0d-em-p1-model]] supplies, for every qcqs $k$-base $S$, the actual homotopy-commutative non-$\mathbb A^1$ motivic ring spectrum $\mathcal E_S$ with its product-preserving diagonal identifications on smooth qcqs $S$-schemes. [[lem-author-4f94f7982b0d-actual-orientation]] supplies the linear orientation on this same model, its actual EM first Chern class, and the source class-power projective-bundle formula. These, rather than class comparison alone, discharge the model hypotheses of [F1].

[F4] The formulation uses fields and schemes over a base as in [[math:def-field]] and [[math:def-scheme-over-base]]; a $k$-scheme has a structure morphism to $\operatorname{Spec}k$. Its geometric and sheaf hypotheses use [[math:def-quasi-compact-and-quasi-separated-scheme]], [[math:def-exact-sequence-sheaves]] and [[math:def-locally-free-sheaf-finite-rank]]. Thus qcqs means quasi-compact and quasi-separated; exactness is exactness of $\mathcal O_X$-module sheaves; a rank-$r$ bundle is locally $\mathcal O_X^{\oplus r}$, with rank zero giving the zero sheaf. The image and cokernel sheaves are the sheafifications of the sectionwise image and cokernel, as in [[math:def-kernel-cokernel-image-sheaves]]; thus a sheaf epimorphism has local lifts of sections. Here a subbundle filtration means a finite chain $0=V_0\subset V_1\subset\cdots\subset V_r=V$ with each quotient $L_s=V_s/V_{s-1}$ locally free of rank one and each $0\to V_{s-1}\to V_s\to L_s\to0$ exact. In particular each $V_s$ has constant rank $s$, by the local splitting argument in step 2.1.

[F5] [[math:def-derived-scheme-and-cotangent-complex]] supplies the constant, discrete realization of an ordinary scheme. Only that realization of $X$ is used here. Ordinary smooth morphisms use [[math:def-smooth-morphism-schemes]]. The source-specific input [F1] explicitly permits $S=Y=X$ with its smooth identity map in its native derived geometry. We use that specialization, without asserting a comparison of categories of nonclassical derived schemes or a claim about all smooth derived objects.

[F6] [[thm-author-4f716d60801a-derived-enhancement-input]] supplies the stable derived category of module sheaves, quasi-isomorphisms detected by cohomology sheaves, and the cochain cone as an actual cofiber. For degree-zero sheaves and an injection $i:V'\to V$, that cone is $[V'\xrightarrow{i}V]$ in degrees $-1,0$. Stability identifies a cofiber sequence with a fiber sequence. The source's native vector bundles and fiber condition are as specified by [F1]. Realize an ordinary bundle there by its local free modules and the same transition matrices over the discrete structure sheaf; maps and their zero composites use the same local matrices. The fiber condition is checked below by the local split projection itself. This uses no identification of entire unbounded module categories.

## Proof
**Given:** A field $k$, the qcqs $k$-scheme $X$, the exact sequence or filtration, the Axiom of Choice and the stated bounds.

**Goal:** Apply the full source theorem within its real hypotheses.

1.1 Use [F5] to take $S=X$ with its discrete structure sheaf and $Y=X$ with the identity map. This is the identity object allowed by [F1] in its smooth qcqs site. The model of [F3] is evaluated here on the ordinary scheme $X$, so no smoothness of $X$ over $k$ is required. By [F3] it is homotopy-commutative and linearly oriented with the actual PBF. Its diagonal identifications preserve products, and [F2] identifies its projective-relation coefficients with the supplied Chern classes. [A1, F1, F2, F3, F4, F5, given, construct]

2.1 Write $i:V'\to V$ and $q:V\to V''$ for the exact-sequence maps. The sequence is locally split: near any point choose a trivialization of $V''$ and locally lift each of its finitely many basis sections through the sheaf epimorphism $q$; intersecting the finitely many neighbourhoods gives a section $s$ of $q$. The map $(a,b)\mapsto i(a)+s(b)$ identifies $V'\oplus V''$ with $V$ there: subtracting $s q(v)$ puts a section $v$ in $\ker q=\operatorname{im}i$, uniquely since $i$ is injective. In [F6], the map $\operatorname{Cone}(i)=[V'\xrightarrow{i}V]\to V''$ induced by $q$ is a quasi-isomorphism: its degree-$-1$ cohomology is $\ker i=0$, its degree-zero cohomology is $\operatorname{coker}i=V''$, and its other cohomology vanishes. Thus this sheaf-complex triangle is a cofiber and hence fiber sequence. To check the native source condition as well, $qi=0$ gives the map $V'\to\operatorname{fib}(q)$; on each splitting open it is the equivalence $V'\simeq\operatorname{fib}(V'\oplus V''\to V'')$ of quasicoherent module sheaves. Equivalences of those sheaf objects are local, so this is a source fiber sequence. When both end terms have positive rank, apply part (iii) of [F1] and transport the equality through [F2]. If an end term has rank zero, [F4] identifies it with the zero sheaf and exactness makes the other map an isomorphism; invariance under isomorphism and $c_t(0)=1$ give the same identity, including the all-zero case. [A1, F1, F2, F4, F6, step 1.1]

3.1 For a positive-rank filtered bundle, apply part (ii) of [F1] to the filtration of [F4], whose successive exact sequences give source fiber sequences by step 2.1, to obtain the displayed root factorization, again using [F2]. The geometric splitting trick underlying this implication is imported through that lemma, not inferred from a mere flag or K-zero equality. For the zero bundle the empty filtration has empty product $1=c_t(0)$, so the formula includes rank zero explicitly. [A1, F1, F2, F4, F6, step 1.1, step 2.1] ∎
