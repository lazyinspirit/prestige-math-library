---
title: External supported slice projection with positive generic coefficient
status: published
research_item: thm-author-16f30f6b95cb-supported-slice-positive-cycle-input
dependency_level: 18
sources:
  references:
    - title: Bruno Kahn and Marc Levine, Motives of Azumaya algebras, JIMJ 9 (2010),
        481–599, published final PDF
      url: https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf
      locator: Notation p.487; §§1.1–1.2 pp.487–490; Proposition 2.2.2 p.496; Lemmas
        2.3.1–2.3.2 pp.499–500; Definition 3.1.5 p.503.
      statement: The source defines the Nisnevich/A1-local motivic S1 category, its
        T-effective right-adjoint covers f_q and cofibers s_q. Over a perfect
        field, coniveau and slice tower comparisons are isomorphisms of towers
        natural for smooth maps. For closed support W of codimension at least q,
        the actual augmentation (f_q E)_W(Y)→E_W(Y) is an equivalence.
        Definition 3.1.5 defines the supported leading map as its inverse on pi0
        followed by the slice projection to (s_q E)_W(Y). The q-th supported
        slice is detected by its codimension-q generic points.
      hypotheses: Part I works over a perfect field; Sm/k in this published source
        means smooth quasi-projective finite-type k-schemes. W is any closed
        subset, not required smooth. For the augmentation codim W≥q; generic
        detection in weight q uses the generic points of W of codimension
        exactly q. In the application only affine open neighborhoods of the
        generic point of C are used.
      reading_limits: "Historical reading scope retained from the incoming record.
        This maintenance pass checks the current item and supplier interfaces;
        it claims no fresh primary-source reading or independent acceptance.
        Previously recorded source-reading scope: Read actual published final
        PDF pp.487,494–500 and complete Definition 3.1.5 on p.503, including
        displayed proof context and augmentation diagrams. The coniveau
        moving-lemma and slice constructions referenced there are imported, not
        reconstructed; no full-paper reading is claimed. Current repair
        rechecked the application-critical statements and map constructions in
        the primary PDF text; no new full-paper reading or reconstruction of
        foundational results is claimed."
    - title: Kahn–Levine, published construction of the cycle map and its K/G
        comparison
      url: https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf
      locator: Definitions 3.1.9–3.1.15 pp.505–507; Theorem 3.2.4 and its complete
        proof pp.508–510; Lemma 6.2.1 p.535; Lemmas 6.4.1–6.4.3 pp.539–540.
      statement: The source constructs supported cycle maps by restriction to the
        codimension-q generic points. Its K-to-G natural transformation is
        defined on support pairs and commutes with these cycle maps. For
        ordinary K-theory (Azumaya algebra A=k), the slice-cycle map is an
        equivalence and its degree-zero coefficient is the restriction from
        G0(W) to G0(k(w)). This identifies the actual inverse-augmentation slice
        projection, not merely its abstract target group.
      hypotheses: Specialize the source Azumaya algebra to A=k. The ambient scheme is
        smooth quasi-projective over the perfect field, W is closed support and
        may be singular. q≥0. The comparison is through the actual K_W→G_W
        morphisms on the category of support pairs.
      reading_limits: "Historical reading scope retained from the incoming record.
        This maintenance pass checks the current item and supplier interfaces;
        it claims no fresh primary-source reading or independent acceptance.
        Previously recorded source-reading scope: Read the complete displayed
        definitions, the commutative diagrams and proof of Theorem 3.2.4, and
        the complete statements/displayed proofs of Lemmas 6.2.1 and
        6.4.1–6.4.3. The referenced well-connectedness and moving-lemma
        foundations are not locally reconstructed. Current repair rechecked the
        application-critical statements and map constructions in the primary PDF
        text; no new full-paper reading or reconstruction of foundational
        results is claimed. The present model comparison is now a declared
        dependency, with its actual inclusion/approximation maps and
        coherent-generator proof."
    - title: Kahn–Levine, positive cycle coefficient and face convention
      url: https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf
      locator: Section 5.9, printed pp.531–532, before Lemma 5.9.1; for orientation
        context Theorem 6.5.5 and its proof pp.542–543.
      statement: For A=k, K0(F) is canonically Z by the dimension function, so a
        one-dimensional F-vector space represents the positive cycle generator.
        Face pullbacks agree with Serre intersection multiplicities. The slice
        identification is built from these actual cycle maps, not an independent
        generator choice.
      hypotheses: Ordinary K-theory A=k; residue fields F; admissible cycles for the
        face statement. The slice theorem uses a perfect base field. No
        normality of the supported subvariety is imposed.
      reading_limits: "Historical reading scope retained from the incoming record.
        This maintenance pass checks the current item and supplier interfaces;
        it claims no fresh primary-source reading or independent acceptance.
        Previously recorded source-reading scope: Read the complete indicated
        coefficient/face passage and Theorem 6.5.5 statement and displayed
        proof. Its general Azumaya and motive-theoretic applications are not
        imported. No invalid old rank-trivialization display is reproduced or
        used. Current repair rechecked the application-critical statements and
        map constructions in the primary PDF text; no new full-paper reading or
        reconstruction of foundational results is claimed."
    - title: Marc Levine, The homotopy coniveau tower, arXiv math/0510334v1
      url: https://arxiv.org/pdf/math/0510334v1
      locator: Section8.3 pp.46–47, equation(8.3.1); Theorem9.0.3 and Remark9.0.4
        p.47; model conventions pp.44–45
      statement: The stable homotopy coniveau tower is built termwise from the S1
        coniveau towers with coherent P1-loop bonding maps. Its actual
        augmentation-adjoint map phi_p E→f_p E is an isomorphism over a perfect
        field. For Bott-periodic K this transports the supported coniveau/slice
        projection to the KGL slice tower used by the canonical EM bridge;
        applying support fibers preserves the actual augmentation and
        projection.
      hypotheses: Perfect field, E in SH(k); the construction uses a fibrant
        P1-Omega-spectrum. K is its usual Bott-periodic KGL realization, whose
        termwise K-space convention is the classical slice K convention in the
        EM comparison. Remark9.0.4 explicitly handles finite perfect fields
        through axiomA3; no infinite-field strengthening is inserted.
      reading_limits: "Historical reading scope retained from the incoming record.
        This maintenance pass checks the current item and supplier interfaces;
        it claims no fresh primary-source reading or independent acceptance.
        Previously recorded source-reading scope: Read actual section8.3,
        Theorem9.0.3 statement and accompanying Remark9.0.4 plus pp.44–45 model
        conventions. The proof of Theorem9.0.3 in section9.1 is imported, not
        reconstructed. The separate v1 Corollary4.2.4 proof-display error is
        retained as a finding, not used as a locally valid proof step. No claim
        to have read its 2008 published version. Current repair rechecked the
        application-critical statements and map constructions in the primary PDF
        text; no new full-paper reading or reconstruction of foundational
        results is claimed."
---

PDF p. 16: Supported leading weight two

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage)
- [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-adjudicate-ddc29c563c8f-supported-classical-current-comparison](item-lem-adjudicate-ddc29c563c8f-supported-classical-current-comparison)
- [` Bruno Kahn and Marc Levine, Motives of Azumaya algebras, JIMJ 9 (2010), 481–599, published final PDF · Notation p.487; §§1.1–1.2 pp.487–490; Proposition 2.2.2 p.496; Lemmas 2.3.1–2.3.2 pp.499–500; Definition 3.1.5 p.503. `](https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf)
- [` Kahn–Levine, published construction of the cycle map and its K/G comparison · Definitions 3.1.9–3.1.15 pp.505–507; Theorem 3.2.4 and its complete proof pp.508–510; Lemma 6.2.1 p.535; Lemmas 6.4.1–6.4.3 pp.539–540. `](https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf)
- [` Kahn–Levine, positive cycle coefficient and face convention · Section 5.9, printed pp.531–532, before Lemma 5.9.1; for orientation context Theorem 6.5.5 and its proof pp.542–543. `](https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf)
- [` Marc Levine, The homotopy coniveau tower, arXiv math/0510334v1 · Section8.3 pp.46–47, equation(8.3.1); Theorem9.0.3 and Remark9.0.4 p.47; model conventions pp.44–45 `](https://arxiv.org/pdf/math/0510334v1)


## Statement
Assume the Axiom of Choice and fixed compatible site and universe bounds for the supplied K-theory realizations. Let $k$ be perfect, let $V$ be a smooth quasi-projective finite-type $k$-scheme, and let $i:W\hookrightarrow V$ be an integral closed subscheme with generic point $\eta$. Here codimension means $q=\dim\mathcal O_{V,\eta}$, using Krull dimension, and $k(W)=\kappa(\eta)$ is its residue field; thus $q\geq0$.

Use $K^{\mathrm{cl}}$ for classical K-theory and $K^{\mathrm{cur}}$ for the specified nonconnective perfect-complex K-theory. For any spectrum-valued theory $E$, put $E_W(V)=\operatorname{fib}(E(V)\to E(V\setminus W))$. The current category-defined supported spectrum is identified with this fiber by its actual localization map. Let $f_q$ be the classical motivic $T$-effective cover and $s_q=\operatorname{cofib}(f_{q+1}\to f_q)$, with $T=(\mathbb P^1,\infty)$ and the source's Nisnevich/A1-local conventions. In classical slice K-theory the actual stage augmentation
$$\epsilon_q:(f_qK^{\mathrm{cl}})_W(V)\longrightarrow K^{\mathrm{cl}}_W(V)$$
is an equivalence. Set
$$\psi^{\mathrm{cl}}_W=\pi_0\bigl((f_qK^{\mathrm{cl}})_W(V)\to(s_qK^{\mathrm{cl}})_W(V)\bigr)\circ(\pi_0\epsilon_q)^{-1}.$$
Let $c_W:\pi_0K^{\mathrm{cl}}_W(V)\xrightarrow{\sim}K_0^W(V)$ be the canonical comparison induced by localization of the same sheaf complexes, where $K_0^W(V)=\pi_0K^{\mathrm{cur}}_W(V)$. For the transported projection $\psi_W=\psi^{\mathrm{cl}}_Wc_W^{-1}$, the canonical slice-to-cycle comparison identifies its generic coefficient with
$$K_0^W(V)\xrightarrow{\beta_{\mathrm{cur}}}G_0(W)\longrightarrow K_0(k(W))\xrightarrow{\dim}\mathbb Z.$$
Here $G_0(W)$ is the coherent-sheaf Grothendieck group with short exact relations, $\beta_{\mathrm{cur}}$ is the coherent-cohomology Euler/ideal-power dévissage map, the next arrow is generic restriction, and dimension sends $[k(W)]$ to $+1$. This statement includes support: the $q$-th supported slice restricts equivalently to its codimension-$q$ generic-point coefficient. It does not identify a supported class with its possibly zero image in the ambient Chow group. Neither smoothness nor normality of $W$ is required.

## Statement references
[math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)

[math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)

[math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[prop-perfect-k-localization-input](item-prop-perfect-k-localization-input)

[prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage)

[lem-adjudicate-ddc29c563c8f-supported-classical-current-comparison](item-lem-adjudicate-ddc29c563c8f-supported-classical-current-comparison)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions
**Given:** AC, the fixed compatible site and universe bounds, and exactly the perfect-field, smooth quasi-projective ambient and integral codimension-$q$ support hypotheses above. Choice and size bounds are inherited from the selected local model suppliers, not additional geometric hypotheses attributed to Kahn–Levine.

**Goal:** Import the actual supported projection and its positive cycle normalization, and specify its canonical current-model interpretation.

[F1] Kahn–Levine §§1.1–1.2 define the slice objects used here. Proposition 2.2.2 gives the compatible coniveau/slice towers; Lemmas 2.3.1–2.3.2 give the supported augmentation equivalence and generic detection. Definition 3.1.5 defines precisely $\psi^{\mathrm{cl}}_W$.

[F2] Their Definitions 3.1.9–3.1.15, Theorem 3.2.4 and Lemma 6.4.2 identify the slice-cycle map with the classical support-pair K-to-G map and generic restriction constructed explicitly in Lemma 6.2.1.

[F3] Section 5.9 identifies $K_0(F)$ with $\mathbb Z$ by dimension, compatible with the Serre face convention. In the ordinary case no reduced-norm scaling or negative generator is inserted.

[F4] [lem-adjudicate-ddc29c563c8f-supported-classical-current-comparison](item-lem-adjudicate-ddc29c563c8f-supported-classical-current-comparison) constructs $c_W$ from the canonical categorical maps and proves $\beta_{\mathrm{cur}}c_W=\beta_{\mathrm{cl}}$, including open and generic restriction compatibility. [prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage) gives the current Euler/ideal-power map; [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) identifies the current support category with the actual restriction fiber. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) specifies that model; [def-stable-spectra-interface](item-def-stable-spectra-interface) fixes its spectral notation. The [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed size bounds discharge these local constructions.

## External input
Import the restricted classical package [F1]–[F3] with the exact hypotheses and reading limits in the first three references. It supplies the actual inverse-augmentation map and its generic coefficient, rather than an inference from equality of groups. The current interpretation uses the explicit local comparison [F4]: composing the classical coefficient with $c_W^{-1}$ gives $\dim\circ\mathrm{res}_\eta\circ\beta_{\mathrm{cur}}$. Thus the imported classical theorem and the locally proved model comparison have separate provenance; no new literature proof of the whole current-model application is claimed.

The $S^1$ coniveau/slice construction is connected to the $\mathbb P^1$-stable KGL tower by Levine §8.3 and Theorem 9.0.3, as specified in the fourth reference. Here KGL denotes the Bott-periodic motivic K-theory spectrum. That augmentation-adjoint stabilization is a separate imported map-level input, with the perfect-field and fibrant-spectrum hypotheses recorded there. It does not replace the classical-to-current sheaf-complex comparison [F4].

The full coniveau, purity and moving-lemma constructions remain substantial imported inputs. Any application to a smooth ambient which is not quasi-projective must first restrict to an affine neighborhood of the support's generic point and separately prove detection on the intended global target. The present theorem does not assert that extra global extension. In particular no global quasi-projectivity assumption is imposed on such a consumer merely by this local application.

## Proof
1.1 Apply [F1] to the stated perfect-field, smooth quasi-projective pair and its integral codimension-$q$ support. It gives the actual augmentation equivalence and the inverse-augmentation projection $\psi^{\mathrm{cl}}_W$ in the displayed order, together with equivalence on restricting its supported slice to the codimension-$q$ generic point. By [F2], the coefficient of this very projection is the classical support-pair K-to-G map $\beta_{\mathrm{cl}}$, followed by coherent generic restriction. By [F3], the latter field group has its dimension normalization, sending the residue-field class to $+1$. Thus the classical coefficient is $\dim\circ\mathrm{res}_\eta\circ\beta_{\mathrm{cl}}$, without assuming smoothness or normality of $W$. [F1, F2, F3, given]

2.1 The ambient hypotheses also meet [F4], with the Choice and size assumptions already in Given. Its actual comparison $c_W$ is an isomorphism on the supported degree-zero domain and satisfies $\beta_{\mathrm{cur}}c_W=\beta_{\mathrm{cl}}$. Compose the map identified in step 1.1 with $c_W^{-1}$, as required by the definition of $\psi_W$. The resulting coefficient is $\dim\circ\mathrm{res}_\eta\circ\beta_{\mathrm{cl}}c_W^{-1}=\dim\circ\mathrm{res}_\eta\circ\beta_{\mathrm{cur}}$, which is precisely the displayed current Euler/generic-dimension composite. The support target and its positive normalization are those in step 1.1; no passage to ambient Chow cohomology occurs. This proves the stated current-model interpretation by a local composition of the imported classical result and the proved comparison helper. [F4, step 1.1] ∎
