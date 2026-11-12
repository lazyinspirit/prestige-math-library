---
id: prop-first-chern-determinant
kind: proposition
title: First Chern class factors through determinant
status: published
domain: mathematics
deps:
  - def-nonconnective-k-spectrum-interface
  - prop-motivic-weight-one
  - lem-author-ec13f1db88a5-perfect-determinant
  - lem-author-ec13f1db88a5-all-perfect-factorization
  - lem-author-ec13f1db88a5-bundle-comparison
  - math:def-axiom-of-choice
  - lem-determinants-of-short-exact-sequences
  - def-exterior-determinant-bundles
  - math:def-field
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-locally-free-sheaf-finite-rank
  - math:def-picard-group-scheme
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  prop-motivic-weight-one: mathematical-premise
  lem-author-ec13f1db88a5-perfect-determinant: mathematical-premise
  lem-author-ec13f1db88a5-all-perfect-factorization: mathematical-premise
  lem-author-ec13f1db88a5-bundle-comparison: mathematical-premise
  lem-determinants-of-short-exact-sequences: mathematical-premise
  def-exterior-determinant-bundles: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-picard-group-scheme: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
formulation_deps:
  - def-nonconnective-k-spectrum-interface
  - prop-motivic-weight-one
  - lem-author-ec13f1db88a5-perfect-determinant
  - lem-author-ec13f1db88a5-all-perfect-factorization
  - lem-author-ec13f1db88a5-bundle-comparison
  - math:def-axiom-of-choice
  - def-exterior-determinant-bundles
  - math:def-field
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-locally-free-sheaf-finite-rank
  - math:def-picard-group-scheme
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - def-nonconnective-k-spectrum-interface
  - prop-motivic-weight-one
  - lem-author-ec13f1db88a5-perfect-determinant
  - lem-author-ec13f1db88a5-all-perfect-factorization
  - lem-author-ec13f1db88a5-bundle-comparison
  - math:def-axiom-of-choice
  - lem-determinants-of-short-exact-sequences
  - def-exterior-determinant-bundles
  - math:def-field
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-locally-free-sheaf-finite-rank
  - math:def-picard-group-scheme
  - math:def-grothendieck-universe-closure-convention
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Proposition 3.2 and its proof, printed p. 8
      statement: The first motivic Chern class factors through determinant and the
        weight-one Picard isomorphism; the displayed argument treats line
        bundles and then split bundle classes.
      hypotheses: The article uses perfect-complex K theory on qcqs schemes over its
        algebraically closed base field. The arbitrary-field all-perfect
        formulation here is supplied by the declared local factorization lemma,
        retaining Choice and compatible size bounds.
      reading_limits: Read Proposition 3.2 and its proof in the frozen article text in
        this assignment. The local argument below composes the declared current
        suppliers; no fresh reconstruction of their external foundations or
        PDF-image verification is claimed.
proof_strategy: direct
dependency_level: 26
---

## Statement
Assume the Axiom of Choice and the fixed compatible site-size and universe bounds required by the supplied perfect K-theory, derived-section and weight-one constructions. Let $k$ be any field and $X$ any qcqs $k$-scheme. For the specified perfect-complex spectral $K_0(X)$, the first motivic Chern class is the actual rank-reduced first-layer map constructed by rank reduction, and it factors naturally as
$$K_0(X)\xrightarrow{\det_X}\operatorname{Pic}(X)\xrightarrow{\gamma_X\,\sim}H^{2,1}_{\rm mot}(X,\mathbb Z).$$
The first arrow is the extended perfect-complex determinant and the second is the actual EM weight-one orientation. For a line-filtered bundle its determinant is the tensor product of the line factors and the first classes add. On actual and virtual vector-bundle classes this agrees with their supplied projective-relation and total-series first coefficients. No global equality of vector-bundle K zero with perfect K zero is assumed.

## Statement references
[[lem-author-ec13f1db88a5-all-perfect-factorization]]

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the compatible site-size and universe bounds in the Statement. The universes satisfy the closure convention of [[math:def-grothendieck-universe-closure-convention]]; their existence is a separate assumption from Choice. Retain exactly the compatible small sites, scheme categories and ambient universes specified in [[lem-author-ec13f1db88a5-all-perfect-factorization]]. These assumptions are inherited through [F1]–[F3] at steps 1.1–2.1.

[F0] The field $k$ has the meaning of [[math:def-field]]. A $k$-scheme is a scheme with a structure map to $\operatorname{Spec}k$, and a $k$-morphism commutes with these maps, as in [[math:def-scheme-over-base]]. Quasi-compact and quasi-separated have the meaning of [[math:def-quasi-compact-and-quasi-separated-scheme]]. A vector bundle is a finite locally free $\mathcal O_X$-module and a line bundle has rank one, as in [[math:def-locally-free-sheaf-finite-rank]]. A line filtration means a finite filtration $0=E_0\subset E_1\subset\cdots\subset E_m=E$ by subbundles whose successive quotients $L_i=E_i/E_{i-1}$ are line bundles. Thus each $0\to E_{i-1}\to E_i\to L_i\to0$ is a short exact sequence of vector bundles. Use $K_0(X)=\pi_0K(X)$ for the perfect-complex spectrum and its contravariant pullbacks in [[def-nonconnective-k-spectrum-interface]].

[F1] [[lem-author-ec13f1db88a5-perfect-determinant]] constructs the natural determinant homomorphism on exactly the specified perfect $K_0$ and identifies its value on a bundle with its exterior determinant.

[F2] [[lem-author-ec13f1db88a5-all-perfect-factorization]] supplies the actual rank-reduced first-layer class on every perfect class and the displayed factorization, with its well-defined rank reduction and unique first-stage lift. [[prop-motivic-weight-one]] identifies its second arrow $\gamma_X$ as the natural group isomorphism from $\operatorname{Pic}(X)$ to $H^{2,1}_{\rm mot}(X,\mathbb Z)$. Here the target is degree-two cohomology of its specified weight-one motivic complex. In particular $\gamma_X$ sends tensor products of line classes to sums and the trivial line to zero.

[F3] [[lem-author-ec13f1db88a5-bundle-comparison]] identifies the existing projective-relation first class and the virtual total-series first coefficient with $\gamma_X(\det E)$ on actual bundles and with the corresponding determinant expression on virtual bundle classes. It makes no surjectivity assertion from vector-bundle K zero to perfect K zero.

[F4] [[lem-determinants-of-short-exact-sequences]] supplies the canonical isomorphism $\det E_i\cong\det E_{i-1}\otimes\det L_i$ for the short exact sequences in [F0], naturally under pullback on arbitrary schemes. Only its arbitrary-scheme isomorphism is used; its separate locally Noetherian Grothendieck-group assertion is not used.

[F5] [[def-exterior-determinant-bundles]] defines $\det E=\Lambda^rE$ on each constant-rank locus, with $\det 0=\mathcal O_X$ and $\Lambda^1L=L$ canonically. [[math:def-picard-group-scheme]] defines the abelian group of line-bundle isomorphism classes with tensor product, identity $[\mathcal O_X]$ and inverse $[L^\vee]$. Consequently determinant equalities below are equalities of Picard classes; they do not require choices of line representatives.

## Proof
**Given:** $k,X$, the compatible foundational assumptions and a perfect class as stated, with the constructions in [F0]–[F5].

**Goal:** Establish the full qcqs arbitrary-field proposition and its existing-class and line-filtration compatibility.

1.1 Use [F1] for the first arrow and the canonical orientation of [F2] for the second. By [F2] their composite is exactly $c_1^{\rm perf}$ defined from the actual first EM layer, on every class of the specified $K_0$. Its rank reduction and unique lift are supplied by [F2], so no global bundle representative is required. Both arrows are natural homomorphisms. This proves the factorization throughout the stated qcqs arbitrary-field scope. [F0, F1, F2, A1]

2.1 By [F3], the class of step 1.1 agrees with the existing actual and virtual bundle first coefficients. For a line filtration as in [F0], start with $\det E_0=\mathcal O_X$ from [F5] and iterate [F4]. Since $\det L_i=\Lambda^1L_i=L_i$ by [F5], this gives $\det E\cong\bigotimes_{i=1}^m L_i$, including the empty filtration with empty tensor product $\mathcal O_X$. Apply the homomorphism $\gamma_X$ of [F2] to obtain $c_1(E)=\sum_{i=1}^m\gamma_X([L_i])=\sum_{i=1}^m c_1(L_i)$, using [F3] on $E$ and the $L_i$. For $m=0$ both sides are zero. The pullback compatibilities in [F1]–[F4] give the asserted naturality, without an equality of vector-bundle and perfect K zero. [F0, F1, F2, F3, F4, F5, step 1.1, A1] ∎
