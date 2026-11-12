---
id: lem-adjudicate-a8be8a17c858-negative-model-coefficients
kind: lemma
title: Negative coefficients of the actual EM projective-line model
status: published
domain: mathematics
deps:
  - lem-author-32887006bdff-em-p1-model
  - thm-author-32887006bdff-em-graded-input
  - thm-author-32887006bdff-p1-spectrum-input
  - math:def-axiom-of-choice
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - def-stable-spectra-interface
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-author-32887006bdff-em-p1-model: mathematical-premise
  thm-author-32887006bdff-em-graded-input: mathematical-premise
  thm-author-32887006bdff-p1-spectrum-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-adjudicate-c387df8ff29b-non-a1-spectrum-framework: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Elmanto and Morrow, Motivic cohomology of equicharacteristic schemes,
        arXiv 2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 5.3, map (5.2) and preceding negative-weight convention,
        printed p. 34; Theorem 5.24(1), map (5.15) and proof, pp. 43–44
      statement: The actual projective-space class-power map is an equivalence. At
        target weight zero and projective dimension one, the zero
        negative-weight summand leaves precisely the pullback equivalence
        Z(0)_mot(Y) -> Z(0)_mot(P^1_Y).
      hypotheses: Y is a qcqs scheme over the prime field F=Q or F_p; target weight
        j>=0 and projective dimension r>=0. Here j=0 and r=1. Restrict along the
        prime subfield of the given field as in the graded supplier.
      reading_limits: "Historical reading record retained from the incoming generated
        item: This repair read the primary v1 PDF text: map (5.2), its
        zero-weight convention, Theorem 5.3, and Theorem 5.24 with its printed
        proof. The trace and projective-bundle foundations remain imported
        through the declared supplier; no reconstruction is claimed. Current
        consumer maintenance read the generated item and its supplier contracts;
        no fresh primary-source or page-image reading, or independent
        acceptance, is claimed."
    - title: Annala and Iwasa, Motivic spectra and universality of K-theory, author
        PDF dated April 14, 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Adjunction 1.3.12 and Lemma 1.3.13, pp. 9–10; §§2.1–2.2.10, pp. 14–15,
        especially Notations 2.2.7–2.2.9
      statement: P^1 suspension is the level shift; its inverse is P^1 cotensor.
        Suspension is left adjoint to degree-zero evaluation. The printed
        cohomology convention uses mapping spaces in degrees 2q-p>=0;
        coefficient change supplies the spectrum-valued setting used here.
      hypotheses: Use the source framework over a qcqs base, coefficients presentably
        tensored over its Zariski stack category, and the supplied restriction
        to the smooth qcqs S-site. The all-integer convention here uses the
        explicit spectrum-valued lift, not negative homotopy groups of a mapping
        space.
      reading_limits: "Historical reading record retained from the incoming generated
        item: This repair read these primary PDF passages, including the shift
        proof and coefficient-change paragraph. Higher-category foundations
        remain imported through the declared framework and spectrum supplier.
        The all-integer application below is local; no new fundamental-stability
        theorem is asserted. Current consumer maintenance read the generated
        item and its supplier contracts; no fresh primary-source or page-image
        reading, or independent acceptance, is claimed."
    - title: Jacob Lurie, Higher Topos Theory, author-hosted PDF
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 5.1.2.2 and Corollary 5.1.2.3, pp. 318–319 (and dual
        limits); Lemma 5.1.5.2, pp. 324–325; Definition 6.2.2.6 and Proposition
        6.2.2.7, p. 579
      statement: Functor-category limits are objectwise; the represented presheaf
        corepresents evaluation into spaces. Sheaves for a Grothendieck topology
        form a left exact reflective localization of space-valued presheaves.
      hypotheses: The site is small in the fixed universe. The Yoneda assertion is for
        space-valued presheaves; the local spectral application uses the
        separately supplied ordinary stabilization adjunction and applies the
        assertion to every shifted zeroth-space sheaf. No hypercompletion
        assertion is needed.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the primary PDF statements of the pointwise assertion and its
        corollary, the full evaluation lemma and proof, and the sheaf definition
        and localization statement. Import their categorical foundations; no
        reconstruction of straightening or sheafification is claimed. Current
        consumer maintenance read the generated item and its supplier contracts;
        no fresh primary-source or page-image reading, or independent
        acceptance, is claimed."
dependency_level: 19
formulation_deps:
  - lem-author-32887006bdff-em-p1-model
  - thm-author-32887006bdff-em-graded-input
  - thm-author-32887006bdff-p1-spectrum-input
  - math:def-axiom-of-choice
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - def-stable-spectra-interface
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-32887006bdff-em-p1-model
  - thm-author-32887006bdff-em-graded-input
  - thm-author-32887006bdff-p1-spectrum-input
  - math:def-axiom-of-choice
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - def-stable-spectra-interface
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. Let $S$ be a qcqs scheme over a field. Write $\mathcal C_S=\mathrm{Sm}^{\mathrm{qcqs}}_S$ for the bounded category of smooth $S$-schemes whose underlying schemes are qcqs, with $S$-morphisms and the Zariski topology, and put $\mathcal V_S=\operatorname{Shv}_{\mathrm{Zar}}(\mathcal C_S;\mathrm{Sp})$. Use the supplied non-$\mathbb A^1$ coefficient action and projective-line stabilization on this site. The pointed projective line is $(\mathbb P^1_S,\infty_S)$.

Let $\mathcal E_S$ be the actual space-valued EM projective-line model and let $\widehat{\mathcal E}_S\in\mathrm{Sp}_{\mathbb P^1}(\mathcal V_S)$ be its specified spectrum-valued lift: its nonnegative levels are $A_n(Y)=H(\mathbb Z(n)_{\mathrm{mot}}(Y)[2n])$, and applying the ordinary zeroth-space functor levelwise gives $\mathcal E_S$. Here $H$ denotes Eilenberg–Mac Lane realization. For $Y\in\mathcal C_S$, let $h_Y(U)=\operatorname{Hom}_S(U,Y)$ be its represented sheaf, let $h_{Y,+}$ adjoin a disjoint basepoint, and put $B_Y=\Sigma^\infty h_{Y,+}\in\mathcal V_S$, where $\Sigma^\infty$ is ordinary circle stabilization. Define the actual coefficient groups in every integer degree by the mapping spectrum convention
$$\mathcal E_S^{a,b}(Y)=\pi_{2b-a}\operatorname{Map}^{\mathrm{Sp}}_{\mathrm{Sp}_{\mathbb P^1}(\mathcal V_S)}(\Sigma^\infty_{\mathbb P^1}B_Y,\Sigma_{\mathbb P^1}^{b}\widehat{\mathcal E}_S).$$
The symbol $\operatorname{Map}^{\mathrm{Sp}}$ means a mapping spectrum, not a mapping space. In degrees $2b-a\geq0$ this agrees with the space-valued convention by coefficient adjunction; negative homotopy degrees use the specified spectrum-valued extension.

For every smooth qcqs $S$-scheme $Y$, every integer $a$ and every integer $b<0$, these actual coefficient groups vanish:
$$\mathcal E_S^{a,b}(Y)=0.$$
This is vanishing for the represented model itself, not merely a convention setting negative motivic complexes to zero. No dimension or Noetherian hypothesis is imposed on $S$.

## Facts & Assumptions

**Given:** $S,Y,a,b$, Choice and the compatible site and universe bounds as stated.

**Goal:** Compute the negative twists of the actual coefficient model at level zero.

[A1] [[math:def-axiom-of-choice]] is assumed when invoking the actual model, graded formula and coefficient constructions below. [[math:def-grothendieck-universe-closure-convention]] specifies the inherited compatible universe convention; their existence, including the suppliers' stipulated size bounds, is assumed separately from Choice. No further selection principle is used in the local calculation.

[F1] [[lem-author-32887006bdff-em-p1-model]] constructs the actual coefficient-valued $\Omega$-$\mathbb P^1$ spectrum with nonnegative levels $A_n=H(\mathbb Z(n)_{\mathrm{mot}}[2n])$, before applying the ordinary zeroth-space functor. This is the lift $\widehat{\mathcal E}_S$ used here; its restrictions and products are those of the actual complexes. No arbitrary inverse to the zeroth-space functor is being chosen.

[F2] The actual projective-line formula of [[thm-author-32887006bdff-em-graded-input]] at weight zero says that pullback $A_0(Y)\to A_0(\mathbb P^1_Y)$ is an equivalence. Its composite with restriction to infinity is identity by functoriality. The zero negative-complex convention removes the other summand of this weight-zero formula; this is not yet an assertion about negative twists of the represented model.

[F3] [[thm-author-32887006bdff-p1-spectrum-input]] supplies the suspension/evaluation adjunction and the shift rule in spectrum-valued coefficients. For $m\geq1$, the degree-zero coefficient sheaf of $\Sigma_{\mathbb P^1}^{-m}\widehat{\mathcal E}_S$ is $\Omega_{\mathbb P^1}^{m}A_0$.

[F4] [[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework]] supplies the pointed projective line, coefficient categories, cotensor and stabilization conventions used after the model supplier's restriction to $\mathcal C_S$. Thus $(\Omega_{\mathbb P^1}A)(Y)=\operatorname{fib}(A(\mathbb P^1_Y)\to A(Y))$, with the arrow induced by infinity. [[def-stable-spectra-interface]] specifies the homotopy fiber, zero spectrum and all-integer homotopy groups. The pointwise-limit input in [F6] shows that these formulas also determine the coefficient sheaf. For a coefficient sheaf $A$, ordinary suspension and the sheafification and Yoneda inputs in [F6] give $\operatorname{Map}^{\mathrm{Sp}}_{\mathcal V_S}(B_Y,A)\simeq A(Y)$: the free represented generator is evaluated at $\mathrm{id}_Y$, with the same property after each sphere shift. Together with [F3] this is the evaluation interpretation of the displayed coefficient convention.

[F5] [[math:def-quasi-compact-and-quasi-separated-scheme]] fixes the qcqs conditions on $S$ and the underlying test schemes, and [[math:def-smooth-morphism-schemes]] fixes smoothness of $Y\to S$. The graded supplier restricts its actual complexes from qcqs schemes over the prime subfield to precisely these test schemes, including $\mathbb P^1_Y$, with no finite-generation condition on the given field.

[F6] Reference 2 imports space-valued Yoneda evaluation, objectwise functor-category limits and the sheafification adjunction. Sheaf descent is a limit condition, so objectwise limits of sheaves remain sheaves. To apply Yoneda to spectra, use the ordinary suspension/zeroth-space adjunction of [F3]–[F4] on every integer shift of a coefficient sheaf: maps out of $B_Y$ are then evaluated on the corresponding shifted zeroth-space sheaf. This yields the mapping-spectrum evaluation in [F4], not just a bijection on components.

## External input
Reference 0 records the actual weight-zero projective-line equivalence used through [F2]. Reference 1 records the shift and coefficient conventions used through [F3]–[F4]. Reference 2 supplies the precise categorical premises for the local spectral Yoneda application in [F6]. Their substantial foundations remain imported through the declared suppliers. The deduction of negative-twist vanishing below is local.

## Proof

1.1 Under [A1], [F2] makes restriction $A_0(\mathbb P^1_Y)\to A_0(Y)$ inverse to the pullback equivalence, so its homotopy fiber is zero. By [F4] this fiber is $(\Omega_{\mathbb P^1}A_0)(Y)$. The calculation is natural on the entire site specified in [F5], and sheaf limits are objectwise; hence $\Omega_{\mathbb P^1}A_0=0$ as an actual coefficient sheaf. This uses the nonnegative level of the specified lift in [F1]. [A1, F1, F2, F4, F5, F6, given]

2.1 Write $b=-m$ with $m\geq1$. By [F3] the degree-zero coefficient sheaf of $\Sigma_{\mathbb P^1}^{b}\widehat{\mathcal E}_S$ is $\Omega_{\mathbb P^1}^{m}A_0$. The cotensor is a right adjoint, so preserves the terminal zero sheaf; iterating step 1.1 gives zero for this coefficient sheaf. Suspension/evaluation and the represented-generator identification in [F4] identify the mapping spectrum in the Statement with its value on $Y$, hence with the zero spectrum. All its integer homotopy groups vanish by [F4], including degree $2b-a$ for every $a$. Thus the actual negative twists have the stated coefficient vanishing, with no dimension or Noetherian assumption on $S$. [F1, F3, F4, F5, F6, step 1.1] ∎
