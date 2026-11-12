---
title: Smooth rank, first Chern, determinant and supported positive leading cycle
status: published
research_item: lem-smooth-leading-cycle-normalization
dependency_level: 21
sources:
  references:
    - title: Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes, v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: §3.1 (3.1)–(3.2), pp.12–13; Theorem 3.5(1),(2),(8), Remark 3.6,
        pp.14–16; Construction 4.36, p.32; Theorem 6.1(2), Remark 6.3, Corollary
        6.4 and footnote 12, pp.44–45.
      statement: The cdh tower has natural graded terms Z(j)_cdh[2j] and cdh descent.
        The actual motivic-to-cdh map is a regular-Noetherian equivalence.
        Remark 3.6 identifies the cdh tower with the KGL slice tower.
      hypotheses: Prime field F; qcqs F-schemes; j>=0. Equivalence requires regular
        Noetherian schemes, without finite generation over F. Classical
        applications here use a fixed perfect extension k/F.
      reading_limits: "Historical incoming reading record, not fresh reading credit
        for this repair: Read these primary versioned PDF passages, including
        the comparison statements and footnote. Deep comparison proofs are
        imported. Remark 3.6 and Theorem 3.5 cite then-in-preparation work; its
        proof is not supplied by EM v1. Corollary 6.4 alone is not an
        arbitrary-extension-field comparison."
    - title: Kahn–Levine, Motives of Azumaya algebras, published final author PDF
      url: https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf
      locator: Lemmas 2.3.1–2.3.2, pp.499–500; Definition 3.1.5, p.503; Lemma 6.2.1,
        p.535; Lemmas 6.3.4/6.4.2, pp.538–539; Theorem 6.5.5 and proof,
        pp.542–543.
      statement: The actual supported inverse-augmentation slice projection uses the
        cycle map induced by coherent generic restriction. In the ordinary A=k
        case the generic field coefficient is dimension with its positive
        residue-field generator; the cycle maps respect open restriction.
      hypotheses: Perfect field; smooth quasi-projective ambient; integral
        codimension-q support, not necessarily smooth. Apply only to an affine
        generic neighbourhood. The current perfect-K interpretation is supplied
        separately by the declared supported comparison.
      reading_limits: "Historical incoming reading record, not fresh reading credit
        for this repair: Read the listed map definitions, restriction diagrams
        and theorem statements/proofs in the live primary PDF extraction. The
        full moving/purity arguments and current-model comparison are not
        reconstructed here. This is a generated-item repair, without a new
        author-defect assessment."
    - title: Marc Levine, The homotopy coniveau tower, arXiv:math/0510334v1
      url: https://arxiv.org/pdf/math/0510334v1
      locator: Theorem 4.1.1 and Corollary 4.1.5, pp.20–23; Theorem 6.4.2 and §6.5,
        pp.36–38; Example 8.2.2(3), pp.45–46; §8.3 and Theorem 9.0.3/Remark
        9.0.4, pp.46–47.
      statement: The classical cycle and coniveau models are comparisons of
        presheaf/sheaf objects, with actual open restriction; their ordinary
        Eilenberg–Mac Lane realization supplies the shifted classical
        coefficients. The stable coniveau-to-slice comparison is
        augmentation-adjoint.
      hypotheses: Smooth separated finite-type schemes; fixed perfect base for the
        stable slice comparison. Use fibrant/Ω-spectrum models as in §8.3. The
        finite-perfect-field stable case is covered by Remark 9.0.4.
      reading_limits: "Historical incoming reading record, not fresh reading credit
        for this repair: Read the displayed naturality and complex-model
        passages, the cycle proof and the stabilization statements in the
        primary versioned PDF extraction. Moving, purity and model-category
        foundations remain imported; no new nonseparated source theorem is
        attributed to Levine."
    - title: The Stacks Project, Lemma 29.41.7, tag 0B3H
      url: https://stacks.math.columbia.edu/tag/0B3H
      locator: Lemma 29.41.7, statement and one-line proof.
      statement: A finite-type quasi-affine morphism is quasi-projective in the
        relatively ample sense.
      hypotheses: Quasi-affine finite-type morphism; applied to an affine finite-type
        k-scheme over Spec k.
      reading_limits: "Historical incoming reading record, not fresh reading credit
        for this repair: Read the current lemma and its cited-proof sentence.
        The antecedent ample-line theorem is imported. Convert to the local
        immersion convention using the next reference."
    - title: The Stacks Project, Lemma 29.41.6, tag 01VZ
      url: https://stacks.math.columbia.edu/tag/01VZ
      locator: Lemma 29.41.6, statement and proof.
      statement: Local quasi-projectivity is equivalent to H-quasi-projectivity over
        an open cover of the base. Over an affine base a quasi-projective scheme
        has an immersion into finite-dimensional projective space.
      hypotheses: Morphisms of schemes; apply over the affine one-point field base.
        Finite type makes the immersion quasi-compact here.
      reading_limits: "Historical incoming reading record, not fresh reading credit
        for this repair: Read the complete statement and short proof. The cited
        ample-line and immersion construction is imported; only the affine-base
        conversion is used."
---

PDF p. 9: Determinant normalization; PDF p. 10: Smooth rank and first Chern normalization; PDF p. 16: Final supported generic-length paragraph

## Prerequisites

- [lem-author-16f30f6b95cb-lowweight-zero-projection-rank](item-lem-author-16f30f6b95cb-lowweight-zero-projection-rank)
- [lem-author-16f30f6b95cb-lowweight-first-chern-and-k-one-determinant](item-lem-author-16f30f6b95cb-lowweight-first-chern-and-k-one-determinant)
- [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)
- [thm-author-16f30f6b95cb-supported-slice-positive-cycle-input](item-thm-author-16f30f6b95cb-supported-slice-positive-cycle-input)
- [lem-author-16f30f6b95cb-curve-supported-bloch-bottom](item-lem-author-16f30f6b95cb-curve-supported-bloch-bottom)
- [lem-author-16f30f6b95cb-supported-euler-generic-coordinate](item-lem-author-16f30f6b95cb-supported-euler-generic-coordinate)
- [lem-author-16f30f6b95cb-positive-generic-cycle-detection](item-lem-author-16f30f6b95cb-positive-generic-cycle-detection)
- [lem-author-16f30f6b95cb-augmented-filtered-support-transport](item-lem-author-16f30f6b95cb-augmented-filtered-support-transport)
- [lem-author-16f30f6b95cb-supported-second-stage-inverse](item-lem-author-16f30f6b95cb-supported-second-stage-inverse)
- [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)
- [prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage)
- [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-adjudicate-f6007757a8ac-raw-simplicial-descent](item-lem-adjudicate-f6007757a8ac-raw-simplicial-descent)
- [lem-adjudicate-37c8a46c3b6b-open-natural-cycle-layers](item-lem-adjudicate-37c8a46c3b6b-open-natural-cycle-layers)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-repeated-root-and-separable-polynomial](https://alphabetamath.cc/item/def-repeated-root-and-separable-polynomial)
- [math:cor-factor-theorem-over-a-commutative-ring](https://alphabetamath.cc/item/cor-factor-theorem-over-a-commutative-ring)
- [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism)
- [lem-adjudicate-3b3fcff266fc-smooth-relative-slice-transport](item-lem-adjudicate-3b3fcff266fc-smooth-relative-slice-transport)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [` Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes, v1 · §3.1 (3.1)–(3.2), pp.12–13; Theorem 3.5(1),(2),(8), Remark 3.6, pp.14–16; Construction 4.36, p.32; Theorem 6.1(2), Remark 6.3, Corollary 6.4 and footnote 12, pp.44–45. `](https://arxiv.org/pdf/2309.08463v1)
- [` Kahn–Levine, Motives of Azumaya algebras, published final author PDF · Lemmas 2.3.1–2.3.2, pp.499–500; Definition 3.1.5, p.503; Lemma 6.2.1, p.535; Lemmas 6.3.4/6.4.2, pp.538–539; Theorem 6.5.5 and proof, pp.542–543. `](https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf)
- [` Marc Levine, The homotopy coniveau tower, arXiv:math/0510334v1 · Theorem 4.1.1 and Corollary 4.1.5, pp.20–23; Theorem 6.4.2 and §6.5, pp.36–38; Example 8.2.2(3), pp.45–46; §8.3 and Theorem 9.0.3/Remark 9.0.4, pp.46–47. `](https://arxiv.org/pdf/math/0510334v1)
- [` The Stacks Project, Lemma 29.41.7, tag 0B3H · Lemma 29.41.7, statement and one-line proof. `](https://stacks.math.columbia.edu/tag/0B3H)
- [` The Stacks Project, Lemma 29.41.6, tag 01VZ · Lemma 29.41.6, statement and proof. `](https://stacks.math.columbia.edu/tag/01VZ)


## Statement
Assume AC and the compatible universe and Nisnevich-site size bounds of the supplied constructions, and use the specified perfect-complex nonconnective K-spectrum and its actual EM motivic filtration. For a smooth finite-type scheme $X$ over a field $k$, the weight-zero projection is the locally constant rank function. The first-stage projection gives
$$\widetilde K_0(X)=\pi_0F^1K(X)\longrightarrow H^{2,1}(X)=\operatorname{Pic}(X),\quad x\longmapsto c_1(x)=\det(x),$$
and
$$K_1(X)=\pi_1F^1K(X)\longrightarrow H^{1,1}(X)=\Gamma(X,\mathcal O_X)^\times,\quad z\longmapsto\det(z).$$
Here reduced $K_0$ means the kernel of the locally constant rank map, component by component; determinant on perfect complexes uses its alternating graded-line convention.

For the supported assertion let $k$ be perfect (in particular the article's algebraically closed field qualifies), let $U$ be smooth of finite type and pure dimension three over $k$, and let $i:C\hookrightarrow U$ be an integral codimension-two closed curve. Neither smoothness nor normality of $C$, nor global quasi-projectivity of $U$, is required. Write
$$K_C(U)=\operatorname{fib}(K(U)\to K(U\setminus C)),\quad F^j_CK(U)=\operatorname{fib}(F^jK(U)\to F^jK(U\setminus C)).$$
The actual augmentation $\epsilon_2:F^2_CK(U)\to K_C(U)$ is an equivalence, and the supported layer is canonically
$$\pi_0\operatorname{gr}^2_CK(U)=H_C^{4,2}(U)=H_0z_C^2(U,\bullet)=\mathbb Z[C].$$
This is the supported cycle group, not the image of $[C]$ in ambient Chow cohomology. For $\xi\in\pi_0F^2_CK(U)$ let $E$ denote its augmented class in the actual supported $K_0$, using support-category localization. Then its specified stage-to-layer projection is
$$p_2(\xi)=\left(\sum_n(-1)^n\ell_{\mathcal O_{U,\eta}} H^n(E)_\eta\right)[C],\qquad \eta=\operatorname{generic}(C).$$
The notation for a virtual class $E$ means the additive extension of this formula from supported perfect complexes. Equivalently $p_2\circ(\pi_0\epsilon_2)^{-1}$ on supported $K_0$ is alternating generic length times the positive cycle. In particular $i_*\mathcal O_C[0]$ maps to $+[C]$, and every closed-point-supported class maps to zero.

## Facts & Assumptions

**Given:** AC, the stated universe and site-size bounds, the smooth scheme/field hypotheses in each part, and the current augmented tower, support and K-model contracts. The supported part uses a perfect field only; it does not extend the imported classical supported comparison to an imperfect field.

**Goal:** Normalize the actual maps, including the domain and positive generator of the supported weight-two projection.

[A1] The stated Choice and size assumptions are inherited from the determinant and weight-one suppliers in [F1] at step 1.1. They cover the enhanced K-model, the compatible big Nisnevich stack comparison, and the specified small-site frame-torsor and derived-sections constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-16f30f6b95cb-lowweight-zero-projection-rank](item-lem-author-16f30f6b95cb-lowweight-zero-projection-rank) and [lem-author-16f30f6b95cb-lowweight-first-chern-and-k-one-determinant](item-lem-author-16f30f6b95cb-lowweight-first-chern-and-k-one-determinant) identify the actual weight-zero and weight-one maps, using the canonical EM comparisons and the actual determinant map supplied before the Postnikov identification. The determinant input now specifies true/enhanced cofiber coherence and its Waldhausen-to-current-model bridge; arbitrary ordinary-triangle-diagram functoriality is not used.

[F2] [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison) supplies the actual augmented EM-to-cdh equivalence on regular Noetherian schemes and its absolute KGL-slice interpretation. Its direct classical-to-EM assertion is on smooth schemes over the prime field; it does not alone identify the relative-$k$ tower for arbitrary $k$. [lem-author-16f30f6b95cb-augmented-filtered-support-transport](item-lem-author-16f30f6b95cb-augmented-filtered-support-transport) transports specified augmented comparisons to support fibers and their maps. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex) supplies the compatible supported Bloch localization fiber.

[F3] [lem-author-16f30f6b95cb-curve-supported-bloch-bottom](item-lem-author-16f30f6b95cb-curve-supported-bloch-bottom) computes the supported layers in weights zero and one and the positive degree-zero cycle in weight two. [lem-author-16f30f6b95cb-supported-second-stage-inverse](item-lem-author-16f30f6b95cb-supported-second-stage-inverse) therefore supplies the actual equivalence $\epsilon_2$ and target, without using any later second-stage article consumer.

[F4] [thm-author-16f30f6b95cb-supported-slice-positive-cycle-input](item-thm-author-16f30f6b95cb-supported-slice-positive-cycle-input) supplies the actual supported inverse-augmentation slice projection and its generic coefficient on a smooth quasi-projective scheme over a perfect field. Its coefficient is restriction to $G_0(k(\eta))=\mathbb Z$ by dimension, with positive residue-field generator.

[F5] [lem-author-16f30f6b95cb-supported-euler-generic-coordinate](item-lem-author-16f30f6b95cb-supported-euler-generic-coordinate), [prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage) and [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) identify that coefficient in the current support-spectrum model with alternating generic length. [lem-author-16f30f6b95cb-positive-generic-cycle-detection](item-lem-author-16f30f6b95cb-positive-generic-cycle-detection) makes this coefficient a detection of the full supported degree-zero map. [def-cohomology-with-support](item-def-cohomology-with-support) fixes the layer shift $\pi_0\operatorname{gr}^2_C=H_C^{4,2}$.

[F6] [lem-adjudicate-37c8a46c3b6b-open-natural-cycle-layers](item-lem-adjudicate-37c8a46c3b6b-open-natural-cycle-layers) supplies the missing actual open-natural graded comparison for every nonnegative weight over the perfect field, including the shift and the original raw Bloch model. It applies simultaneously to $U$ and $U\setminus C$, before taking their restriction fiber. The raw unit is the one in [lem-adjudicate-f6007757a8ac-raw-simplicial-descent](item-lem-adjudicate-f6007757a8ac-raw-simplicial-descent); that unit alone would not construct a motivic comparison. The exact source-version qualification of [F2], including EM v1 Remark3.6’s then-in-preparation input, remains binding.


[F7] The field, structure morphism, smoothness, finite-type, perfectness, integral closed support and open complement use [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field), [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes) and [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes). A curve has dimension one; pure dimension three means every irreducible component has dimension three, using [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space). Codimension two means $\dim\mathcal O_{U,\eta}=2$, with ring dimension as in [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring). The point $\eta$ has closure $|C|$, as in [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset). The geometric clauses in [F5] verify regularity, Noetherianity, qcqs and quasi-compact open complements, so the current support-localization hypotheses hold without separatedness. For the parenthetical algebraically closed case, [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field) gives a root of each irreducible nonconstant polynomial, and [math:cor-factor-theorem-over-a-commutative-ring](https://alphabetamath.cc/item/cor-factor-theorem-over-a-commutative-ring) makes that polynomial linear. A linear polynomial has no repeated root by [math:def-repeated-root-and-separable-polynomial](https://alphabetamath.cc/item/def-repeated-root-and-separable-polynomial), proving perfectness in the stated definition.

[F8] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines perfect objects, their cohomology sheaves and support. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) fixes the current category-defined K-spectrum and its homotopy groups; the fiber identification is the actual localization in [F5]. [def-motivic-filtration](item-def-motivic-filtration), [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) and [def-stable-spectra-interface](item-def-stable-spectra-interface) fix the actual augmented tower, graded cofibers, spectral fibers, suspensions and homotopy groups. [def-motivic-cohomology](item-def-motivic-cohomology) and [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization) fix the motivic complexes and coherent realization, with the layer/cohomology indexing of [F5]. [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme) defines Picard groups by invertible sheaves under tensor product; the actual determinant operation and its graded-line signs are supplied by [F1]. Units $\Gamma(X,\mathcal O_X)^\times$ are globally invertible sections. Length $\ell_R(M)$ counts factors in a finite composition series, with zero length for the zero module, as in [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module); its finiteness here is supplied by [F5]. Use the universe closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), with existence and compatible enlargements assumed as in the Statement.

[F9] By [math:def-scheme](https://alphabetamath.cc/item/def-scheme), every point of $U$, in particular $\eta$, has an affine open neighbourhood. An affine open neighbourhood carries its restricted structure sheaf, as in [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme). The perfect field and source hypotheses of [F4] are retained. References 3–4 in External input imply that a finite-type affine scheme over $k$ is quasi-projective in the finite-projective-space immersion convention of [math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism); no global quasi-projectivity of $U$ is inferred.

[F10] [lem-adjudicate-3b3fcff266fc-smooth-relative-slice-transport](item-lem-adjudicate-3b3fcff266fc-smooth-relative-slice-transport) supplies the missing relative-$k$ augmented comparison on the smooth open pair. It uses smooth adjunction and the canonical effective-cover base-change maps for $V\to\operatorname{Spec}k$ and $V\setminus C\to\operatorname{Spec}k$, rather than asserting that $k$ is smooth of finite type over its prime field. Its graded map is the represented-spectrum leg of the fixed cycle comparison in [F6]. Thus its supported augmentation and layer-projection squares use that same ordinary positive cycle normalization.

## Proof

1.1 Apply [F1] to $X$. It proves the rank formula and the identifications of the first-stage degree-zero and degree-one groups, then identifies their actual projection with the determinant/Picard map and its unit map. The Chern sign is fixed there by $1-[\mathcal O(-1)]\mapsto+c_1(\mathcal O(1))$; it is not chosen from an abstract isomorphism with Picard groups. This proves the first three assertions, with all their field hypotheses. For $U,C$, apply the actual open-natural graded comparison in [F6], together with the augmented tower transport in [F2], to $U$ and its open complement and take their restriction fiber. [F3] makes the supported weights zero and one zero. The cofiber sequences for the two successive supported transitions therefore identify $F^2_CK$ with $F^0_CK=K_C$ by the actual augmentation. The same comparison gives the target $\mathbb Z[C]$ with the shift stated in [F5]. This proves the precise domain and target of $p_2$, independently of its as yet uncomputed coefficient. [F1, F2, F3, F5, F6, F7, F8, A1, given]

2.1 By [F9], choose an affine open neighbourhood $V\subset U$ of $\eta$. By [F7] and [F9] it is smooth quasi-projective over the perfect field; $C\cap V$ is integral of codimension two, although it may be singular. Apply [F4] on this pair. Apply [F10] to $V$ and its smooth finite-type open complement $V\setminus C$. It identifies the current augmented tower with the relative-$k$ KGL tower by the canonical smooth-pullback map, and its induced graded comparison is [F6]'s fixed cycle comparison. Use [F4]'s augmentation-adjoint classical stabilization and canonical same-complex classical-to-current comparison on this pair. Its underlying degree-zero support comparison is the specified $c_{C\cap V}$: both underlying maps are induced by the canonical sheaf-complex K-theory maps, followed by $K\to KH$ on the regular ambient and its complement. Hence [F4]'s actual inverse-augmentation projection is the transport of the current map of step 1.1 restricted to $V$. The transition, augmentation and layer-projection squares commute, including their fixed cycle target; equality of abstract graded groups is not used for this conclusion. Thus its positive generic coefficient on the augmented class is the actual K-to-G generic restriction followed by dimension. By [F5] that generic coordinate equals the finite alternating length sum in the Statement, in the current K-model. Neither this coordinate nor its sign changes on restricting from $U$ to $V$. By [F3] restriction on the bottom supported cycle target sends $[C]$ to $[C\cap V]$ and is an isomorphism. Equality of the coefficient after this restriction therefore proves the displayed formula on $U$, by [F5]'s detection lemma. The length of the residue-field stalk of $i_*\mathcal O_C[0]$ is one and its cohomological degree is zero; closed-point-supported stalks vanish at $\eta$. This proves the positive and zero tests. All asserted formulas are now proved for the actual projection and its inverse-augmentation version. [F2, F3, F4, F5, F6, F7, F8, F9, F10, step 1.1] ∎

## External input
Reference 0 records the actual EM-to-cdh comparison and its absolute KGL-slice interpretation in [F2], with its source-version limitation. The relative-$k$ augmented identification needed in step 2.1 is supplied separately by [F10], whose source-checked smooth-base-change map also induces [F6]'s represented-spectrum layer comparison. References 1–2 record the classical supported projection and its augmentation-adjoint stabilization used through [F4]. Their current-model interpretation uses the declared local support and Euler suppliers. For the separated classical leg of [F6], use this same ordinary cycle realization. Kahn–Levine Lemma 6.4.2 compares the K-to-G and cycle maps by its commuting square, and the construction in Theorem 6.5.5 uses those cycle maps to identify the slice with the classical coefficient. Levine Theorem 6.4.2 uses the same generic $K_0$-to-integer coordinate. Thus [F4] and [F6] use the standard restriction-to-generic-point maps with the positive ordinary-field dimension normalization; an arbitrary isomorphism of cycle groups would not justify the sign.

Reference 3 supplies finite-type quasi-affine implies quasi-projective, and reference 4 converts this over $\operatorname{Spec}k$ to the finite-projective-space immersion convention. An affine finite-type $k$-scheme is quasi-affine over $k$ by the identity open immersion into itself. Finite type over the field supplies quasi-compactness, so this is the quasi-projectivity needed at the generic neighbourhood in step 2.1. Deep moving, purity and comparison results remain imported; the two-step composition above is locally proved.

## Source and review limits
The assigned current body was read in full. The declared supplier interfaces were inspected for the objects, hypotheses and operations used in the Statement, [A1] and [F1]–[F10], and the two proof steps. The full current scheme and affine-open definitions were read: the former supplies the existence of an affine neighbourhood at $\eta$, while the latter supplies its restricted structure sheaf. The current generic-coordinate supplier's geometric checks were also read for the regularity, Noetherianity and support-localization applications in [F5] and [F7]. The field definitions and factor theorem were read for [F7]'s algebraically-closed-to-perfect argument. The repaired prerequisite inventory records the geometric and field inputs separately and carries their actual suppliers into the proof applications.

The Statement remains byte-for-byte unchanged. The four direct consumers were inspected at their current interfaces and occurrences of this supplier: the first-projection lemma uses the smooth first-stage degree-zero normalization; the nonadditivity remark uses the rank-kernel identification; the supported second-stage and generic-kernel lemmas use the unchanged augmentation and positive generic-length formula. No changed mathematical interface requires a consumer edit. The six-field literature records and their explicitly historical reading limits are retained; no fresh primary literature reading is claimed in this repair. Coverage and the historical report pages remain unchanged. This is a generated-content repair proposal, with no independent acceptance or publication stamp.
