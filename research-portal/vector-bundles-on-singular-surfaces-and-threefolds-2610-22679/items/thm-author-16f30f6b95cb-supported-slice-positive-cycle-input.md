---
id: thm-author-16f30f6b95cb-supported-slice-positive-cycle-input
kind: theorem
title: External supported slice projection with positive generic coefficient
status: published
domain: mathematics
deps: []
dependency_roles: {}
external_input: true
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Bruno Kahn and Marc Levine, Motives of Azumaya algebras, JIMJ 9 (2010),
        481–599, published final PDF
      url: https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf
      locator: Notation p.487; Proposition 2.2.2 p.496 and compatible tower diagram
        p.498; Lemmas 2.3.1–2.3.2 pp.499–500; Definition 3.1.5 p.503.
      statement: Over a perfect field, coniveau and slice tower comparisons are
        isomorphisms of towers natural for smooth maps. For closed support W of
        codimension at least q, the actual augmentation (f_q E)_W(Y)→E_W(Y) is
        an equivalence. Definition 3.1.5 defines the supported leading map as
        its inverse on pi0 followed by the slice projection to (s_q E)_W(Y). The
        q-th supported slice is detected by its codimension-q generic points.
      hypotheses: Part I works over a perfect field; Sm/k in this published source
        means smooth quasi-projective finite-type k-schemes. W is any closed
        subset, not required smooth. For the augmentation codim W≥q; generic
        detection in weight q uses the generic points of W of codimension
        exactly q. In the application only affine open neighborhoods of the
        generic point of C are used.
      reading_limits: Read actual published final PDF pp.487,494–500 and complete
        Definition 3.1.5 on p.503, including displayed proof context and
        augmentation diagrams. The coniveau moving-lemma and slice constructions
        referenced there are imported, not reconstructed; no full-paper reading
        is claimed.
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
      reading_limits: Read the complete displayed definitions, the commutative
        diagrams and proof of Theorem 3.2.4, and the complete
        statements/displayed proofs of Lemmas 6.2.1 and 6.4.1–6.4.3. The
        referenced well-connectedness and moving-lemma foundations are not
        locally reconstructed. The current perfect-spectrum pi0 comparison is
        supplied by the already authored devissage/model contracts, not invented
        as a new abstract isomorphism here.
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
      reading_limits: Read the complete indicated coefficient/face passage and Theorem
        6.5.5 statement and displayed proof. Its general Azumaya and
        motive-theoretic applications are not imported. No invalid old
        rank-trivialization display is reproduced or used.
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
      reading_limits: Read actual section8.3, Theorem9.0.3 statement and accompanying
        Remark9.0.4 plus pp.44–45 model conventions. The proof of Theorem9.0.3
        in section9.1 is imported, not reconstructed. The separate v1
        Corollary4.2.4 proof-display error is retained as a finding, not used as
        a locally valid proof step. No claim to have read its 2008 published
        version.
dependency_level: 0
---

## Statement
Let $k$ be perfect, let $V$ be a smooth quasi-projective finite-type $k$-scheme, and let $W\subset V$ be integral closed support of codimension $q$. In classical slice K-theory the actual stage augmentation $\epsilon_q:(f_qK)_W(V)\to K_W(V)$ is an equivalence. Set
$$\psi_W=\pi_0\bigl((f_qK)_W(V)\to(s_qK)_W(V)\bigr)\circ(\pi_0\epsilon_q)^{-1}.$$
The canonical slice-to-cycle comparison identifies the generic coefficient of $\psi_W$ with
$$K_0^W(V)\longrightarrow G_0(W)\longrightarrow K_0(k(W))\xrightarrow{\dim}\mathbb Z.$$
The first arrow is the coherent Euler/devissage comparison, the second is actual generic restriction, and dimension sends $[k(W)]$ to $+1$. This statement includes support: the q-th supported slice restricts equivalently to its codimension-q generic-point coefficient. It does not identify a supported class with its possibly zero image in the ambient Chow group.

## Source contract

**Given:** Exactly the perfect-field, smooth quasi-projective ambient and integral codimension-q support hypotheses above.

**Goal:** Import the exact actual supported projection and its positive cycle normalization.

[F1] Kahn–Levine Proposition 2.2.2 gives the compatible coniveau/slice towers; Lemmas 2.3.1–2.3.2 give the supported augmentation equivalence and generic detection. Definition 3.1.5 defines precisely $\psi_W$.

[F2] Their Definitions 3.1.9–3.1.15, Theorem 3.2.4 and Lemma 6.4.2 identify the slice-cycle map with the support-pair K-to-G map and generic restriction constructed explicitly in Lemma 6.2.1.

[F3] Section 5.9 identifies $K_0(F)$ with $\mathbb Z$ by dimension, compatible with the Serre face convention. In the ordinary case no reduced-norm scaling or negative generator is inserted.

## External input
Import the restricted package [F1]–[F3], assembled from the displayed source constructions and commuting diagrams with exactly their hypotheses. It supplies a map and its coefficient, not an inference from equality of groups. Its application to a smooth ambient that is not quasi-projective is made only after restricting to an affine neighborhood of the generic point and using the local detection lemma; quasi-projectivity is not added as a global hypothesis. The full coniveau, purity and moving-lemma constructions are substantial external inputs and are not locally rebuilt.

The S1 coniveau/slice construction is connected to the P1-stable KGL tower by the actual augmentation-adjoint comparison of Levine section8.3/Theorem9.0.3, as specified in the dedicated reference; this stabilization is an imported map-level input, not an identification inferred from the equality of cohomology groups.
