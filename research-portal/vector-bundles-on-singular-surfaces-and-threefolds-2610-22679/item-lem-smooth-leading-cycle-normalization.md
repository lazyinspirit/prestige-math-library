---
title: Smooth rank, first Chern, determinant and supported positive leading cycle
status: draft
research_item: lem-smooth-leading-cycle-normalization
dependency_level: 18
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

[F2] [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison) supplies the actual natural augmented filtered bridge to classical slice K-theory, with its exact arbitrary-field source-coverage qualification. [lem-author-16f30f6b95cb-augmented-filtered-support-transport](item-lem-author-16f30f6b95cb-augmented-filtered-support-transport) transports its support fibers, projections and augmentations. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex) supplies the compatible supported Bloch localization fiber.

[F3] [lem-author-16f30f6b95cb-curve-supported-bloch-bottom](item-lem-author-16f30f6b95cb-curve-supported-bloch-bottom) computes the supported layers in weights zero and one and the positive degree-zero cycle in weight two. [lem-author-16f30f6b95cb-supported-second-stage-inverse](item-lem-author-16f30f6b95cb-supported-second-stage-inverse) therefore supplies the actual equivalence $\epsilon_2$ and target, without using any later second-stage article consumer.

[F4] [thm-author-16f30f6b95cb-supported-slice-positive-cycle-input](item-thm-author-16f30f6b95cb-supported-slice-positive-cycle-input) supplies the actual supported inverse-augmentation slice projection and its generic coefficient on a smooth quasi-projective scheme over a perfect field. Its coefficient is restriction to $G_0(k(\eta))=\mathbb Z$ by dimension, with positive residue-field generator.

[F5] [lem-author-16f30f6b95cb-supported-euler-generic-coordinate](item-lem-author-16f30f6b95cb-supported-euler-generic-coordinate), [prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage) and [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) identify that coefficient in the current support-spectrum model with alternating generic length. [lem-author-16f30f6b95cb-positive-generic-cycle-detection](item-lem-author-16f30f6b95cb-positive-generic-cycle-detection) makes this coefficient a detection of the full supported degree-zero map. [def-cohomology-with-support](item-def-cohomology-with-support) fixes the layer shift $\pi_0\operatorname{gr}^2_C=H_C^{4,2}$.

[F6] [lem-adjudicate-f6007757a8ac-raw-simplicial-descent](item-lem-adjudicate-f6007757a8ac-raw-simplicial-descent) proves the canonical raw-to-Zariski-derived-sections unit on possibly nonseparated smooth finite-type schemes. Apply the natural graded comparison of [F2] on the affine Zariski basis and pass to derived sheaf sections; the actual unit identifies those sections with the original raw Bloch complexes. This gives the same open-restriction-compatible graded comparison globally. The exact source-version qualification of [F2], including EM v1 Remark3.6’s then-in-preparation input, remains binding.

## Proof

1.1 Apply [F1] to $X$. It proves the rank formula and the identifications of the first-stage degree-zero and degree-one groups, then identifies their actual projection with the determinant/Picard map and its unit map. The Chern sign is fixed there by $1-[\mathcal O(-1)]\mapsto+c_1(\mathcal O(1))$; it is not chosen from an abstract isomorphism with Picard groups. This proves the first three assertions, with all their field hypotheses. [F1, given, A1]

1.2 For $U,C$, apply the natural graded comparison in [F2], with the raw global interpretation justified in [F6], to $U$ and its open complement and take their restriction fiber. [F3] makes the supported weights zero and one zero. The cofiber sequences for the two successive supported transitions therefore identify $F^2_CK$ with $F^0_CK=K_C$ by the actual augmentation. The same comparison gives the target $\mathbb Z[C]$ with the shift stated in [F5]. This proves the precise domain and target of $p_2$, independently of its as yet uncomputed coefficient. [F2, F3, F5, F6, given]

2.1 Choose an affine open neighbourhood $V\subset U$ of $\eta$. It is smooth quasi-projective over the perfect field; $C\cap V$ is integral of codimension two, although it may be singular. Apply [F4] on this pair. By [F2] its actual inverse-augmentation slice map is the transport of the current map of step 1.2 restricted to $V$: the transition, augmentation and layer-projection squares commute. Thus its positive generic coefficient on the augmented class is the actual K-to-G generic restriction followed by dimension. [F2, F4, step 1.2]

3.1 By [F5] that generic coordinate equals the finite alternating length sum in the Statement, in the current K-model. Neither this coordinate nor its sign changes on restricting from $U$ to $V$. By [F3] restriction on the bottom supported cycle target sends $[C]$ to $[C\cap V]$ and is an isomorphism. Equality of the coefficient after this restriction therefore proves the displayed formula on $U$, by [F5]'s detection lemma. The length of the residue-field stalk of $i_*\mathcal O_C[0]$ is one and its cohomological degree is zero; closed-point-supported stalks vanish at $\eta$. This proves the positive and zero tests. All asserted formulas are now proved for the actual projection and its inverse-augmentation version. [F3, F5, step 1.2, step 2.1] ∎

## Focused source-reading limits
The supporting normalization was checked in the published Kahn–Levine final PDF, printed p.487, Proposition2.2.2 p.496, Lemmas2.3.1–2.3.2 pp.499–500, Definition3.1.5 p.503, Definitions3.1.9–3.1.15 pp.505–507, Theorem3.2.4 and proof pp.508–510, section5.9 pp.531–532, Lemma6.2.1 p.535, Lemmas6.4.1–6.4.3 pp.539–540, and Theorem6.5.5 and proof pp.542–543. The maps are restriction-to-support/generic-coefficient maps with ordinary $A=k$ dimension normalization. Only the affine generic neighbourhood is required to be quasi-projective. The stable augmentation comparison was checked in Levine arXiv:math/0510334v1, model conventions pp.44–45, section8.3 and Theorem9.0.3/Remark9.0.4 pp.46–47; its deep proof is imported. EM arXiv:2309.08463v1 was checked at section3.1, Theorem3.5 and Remark3.6, Constructions4.34/4.36, Theorem6.1, Remark6.3, Corollary6.4/proof and footnote12. In particular no published proof of the then-in-preparation comparison is claimed. This reading concerns application-critical passages and their hypotheses, not full-paper or whole-library review. The article's original locations on pp.9,10,16 and all existing coverage are retained.
