---
id: lem-author-4f94f7982b0d-actual-whitney
kind: lemma
title: Actual exact-sequence Whitney and filtered-root formula on singular qcqs
  schemes
status: draft
domain: mathematics
deps:
  - lem-author-4f94f7982b0d-em-p1-model
  - lem-author-4f94f7982b0d-actual-orientation
  - math:def-axiom-of-choice
  - lem-author-4f94f7982b0d-relation-comparison
  - thm-author-4f94f7982b0d-non-a1-whitney-input
  - def-motivic-chern-classes
dependency_roles:
  lem-author-4f94f7982b0d-em-p1-model: mathematical-premise
  lem-author-4f94f7982b0d-actual-orientation: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-4f94f7982b0d-relation-comparison: mathematical-premise
  thm-author-4f94f7982b0d-non-a1-whitney-input: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
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
      reading_limits: Read the dated title page, section 2.1 on page 14, Definition
        4.4.1 and Lemma 4.4.3 with its complete proof on pages 30–31. The
        geometric splitting argument and upstream spectrum machinery are
        imported through the existing suppliers, not reconstructed here. The
        actual model, orientation and class-comparison supplier arguments were
        inspected for this application; no independent acceptance of them is
        asserted.
proof_strategy: direct
dependency_level: 18
---

## Statement
Assume the Axiom of Choice and the fixed site-size and universe bounds of the supplied motivic constructions. Let $X$ be any qcqs $k$-scheme over a field, and let $0\to V^{\prime}\to V\to V^{\prime\prime}\to0$ be an exact sequence of constant-rank finite locally free sheaves. Then $c_t(V)=c_t(V^{\prime})c_t(V^{\prime\prime})$. If $V$ has a filtration by subbundles with line quotients $L_s$, then $c_t(V)=\prod_s(1+c_1(L_s)t)$. These refer to the supplied projective-relation classes, not to an assumed Chern polynomial of a K-zero equality.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the stated size bounds. These discharge the foundational hypotheses of the EM comparison and Chern constructions used in steps 1.1–3.1.

[F1] [[thm-author-4f94f7982b0d-non-a1-whitney-input]] supplies Lemma4.4.3(ii)–(iii) for a homotopy-commutative linearly oriented non-A¹ motivic ring spectrum with PBF over any qcqs derived base $S$, evaluated on $Y\in\mathrm{Sm}_S$.

[F2] [[lem-author-4f94f7982b0d-relation-comparison]] supplies the actual EM class comparison for a field $k$, qcqs $k$-base $S$ and smooth qcqs $S$-scheme $Y$, under [A1]. Its source-side conventions are zero coefficients above rank and $\widetilde c_t(0)=1$. [[def-motivic-chern-classes]] gives the corresponding supplied zero-bundle convention and invariance under bundle isomorphism.

[F3] [[lem-author-4f94f7982b0d-em-p1-model]] supplies, for every qcqs $k$-base $S$, the actual homotopy-commutative non-$\mathbb A^1$ motivic ring spectrum $\mathcal E_S$ with its product-preserving diagonal identifications on smooth qcqs $S$-schemes. [[lem-author-4f94f7982b0d-actual-orientation]] supplies the linear orientation on this same model, its actual EM first Chern class, and the source class-power projective-bundle formula. These, rather than class comparison alone, discharge the model hypotheses of [F1].

## Proof
**Given:** A field $k$, the qcqs $k$-scheme $X$, the exact sequence or filtration, the Axiom of Choice and the stated bounds.

**Goal:** Apply the full source theorem within its real hypotheses.

1.1 Take the source base to be $S=X$, regarded as a classical derived scheme, and take $Y=X$ with the identity smooth map. Smooth derived schemes over a classical base are classical, so the EM restriction used in the model is defined on this smooth site. No assertion that $X$ is smooth over $k$ is needed. By [F3] the model is a homotopy-commutative linearly oriented motivic ring spectrum with the actual PBF. The diagonal identifications preserve its products, and [F2] identifies the projective-relation coefficients with the supplied Chern classes. [A1, F1, F2, F3, given, construct]

2.1 The exact sequence is locally split since its quotient is locally free. Its associated sheaf-complex triangle is therefore a fiber sequence of vector bundles as required by [F1]. When both end terms have positive rank, apply part (iii) and transport the equality through [F2]. If an end term has rank zero, it is the zero sheaf and the other map is an isomorphism; isomorphism invariance and the convention $c_t(0)=1$ prove the same identity, including the case in which all terms are zero. This proves Whitney in the required non-A¹ theory. [A1, F1, F2, step 1.1]

3.1 For a positive-rank filtered bundle, apply part (ii) of [F1] to the filtration to obtain the displayed root factorization, again using [F2]. The geometric splitting trick underlying this implication is imported through that lemma, not inferred from a mere flag or K-zero equality. For the zero bundle the empty filtration has empty product $1=c_t(0)$, so the formula includes rank zero explicitly. [A1, F1, F2, step 1.1, step 2.1] ∎
