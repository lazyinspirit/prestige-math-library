---
id: prop-rational-motivic-degeneration
kind: proposition
title: Rational third-edge comparison
status: published
domain: mathematics
deps:
  - prop-motivic-graded-spectral-sequence
  - def-third-edge-map
  - lem-third-graded-isomorphism
  - prop-rational-weight-splitting-input
  - lem-author-9f61e4df2141-split-image-filtration
  - thm-author-14463ef2f4e5-finite-valuative-dimension
  - def-article-conventions
  - math:lem-dimension-nonempty-open-subset
  - math:def-axiom-of-choice
dependency_roles:
  prop-motivic-graded-spectral-sequence: mathematical-premise
  def-third-edge-map: mathematical-premise
  lem-third-graded-isomorphism: mathematical-premise
  prop-rational-weight-splitting-input: mathematical-premise
  lem-author-9f61e4df2141-split-image-filtration: mathematical-premise
  thm-author-14463ef2f4e5-finite-valuative-dimension: mathematical-premise
  def-article-conventions: mathematical-premise
  math:lem-dimension-nonempty-open-subset: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 14, proof of Proposition 6.2 and Remark 6.3; p. 13, Proposition 6.1
      statement: The proof uses rational degeneration to identify the rational third
        edge with the third image-filtration group; the subsequent remark
        applies the comparison to a curve complement.
      hypotheses: The proposition concerns a normal affine threefold over an
        algebraically closed field; the remark uses the hypotheses of
        Proposition 6.1, an affine threefold and an integral curve in its smooth
        locus.
      reading_limits: The cited statements and proof paragraph were read in the
        supplied article text. The rational splitting is used through the
        completed external-input supplier, not reconstructed here.
dependency_level: 22
---

## Statement
Assume the Axiom of Choice. Let $X$ be a Noetherian scheme of Krull dimension $3$ over a field $k$. Let $F^q_{\mathrm{mot}}K(X)$ denote stage $q$ of the Elmanto–Morrow motivic filtration of nonconnective $K$-theory and put
$$F^q_{\mathrm{mot}}K_0(X)=\operatorname{im}\bigl(\pi_0F^q_{\mathrm{mot}}K(X)\to K_0(X)\bigr).$$
The associated motivic spectral sequence degenerates after tensoring its terms and differentials with $\mathbb Q$. Moreover its actual third edge homomorphism induces an isomorphism
$$\epsilon_3\otimes\mathbb Q:\ H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)\otimes_{\mathbb Z}\mathbb Q\xrightarrow{\ \cong\ }F^3_{\mathrm{mot}}K_0(X)\otimes_{\mathbb Z}\mathbb Q.$$
Here $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-six cohomology of the weight-three motivic complex; $\epsilon_3$ is the inverse of the actual third-stage projection followed by the stage-to-$K_0$ map restricted to its image. Rational degeneration means that every differential on every page from $E_2$ onward becomes zero after tensoring with $\mathbb Q$.

In particular, this applies to the normal affine threefolds over algebraically closed fields in Proposition 6.2 of the article. It also applies to $X\setminus T$ under Proposition 6.1's hypotheses: $X$ is an affine finite-type threefold over an algebraically closed field and $T$ is a closed integral curve contained in its smooth locus. No normality assumption is needed for this rational comparison on the complement.

## Facts & Assumptions

**Given:** Choice, a Noetherian dimension-three scheme $X$ over a field $k$, and the actual motivic tower and third edge map described above.

**Goal:** Prove rational degeneration and that the rationalization of the actual edge map is an isomorphism, including the two article applications.

[F1] [[thm-author-14463ef2f4e5-finite-valuative-dimension]] gives finite valuative dimension for a Noetherian finite-dimensional scheme under Choice. Such a scheme is quasi-compact and quasi-separated. The structure map over $k$ factors through the prime field, which is $\mathbb Q$ in characteristic zero and $\mathbb F_p$ in characteristic $p$.

[F2] Under the qcqs, prime-field and finite-valuative-dimension hypotheses, [[prop-rational-weight-splitting-input]] supplies an equivalence of the actual rationalized augmented tower with a direct-sum tail tower and supplies degeneration of its spectral sequence. This is an imported splitting; its construction is not reconstructed here. [[lem-author-9f61e4df2141-split-image-filtration]] states that every tail inclusion has a retraction and identifies the successive image quotients with the corresponding graded homotopy groups.

[F3] [[lem-third-graded-isomorphism]] identifies the actual third-stage-to-cofiber map, followed by the specified graded comparison, with an isomorphism $p_3:\pi_0F^3_{\mathrm{mot}}K(X)\to H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. [[def-third-edge-map]] defines $\epsilon_3$ as $p_3^{-1}$ followed by the actual map to the image subgroup. [[prop-motivic-graded-spectral-sequence]] supplies the actual graded and spectral-sequence identifications.

[F4] [[def-article-conventions]] makes affine schemes in the article finite type over the base field. Over an algebraically closed field, [[math:lem-dimension-nonempty-open-subset]] says that a nonempty open subset of an irreducible classical variety has the same dimension. Passing to the reduced structure does not change the underlying topological space or its chain dimension.

## Proof

1.1 The given Noetherian scheme is qcqs and has finite valuative dimension by [F1]. Its map to $\operatorname{Spec}k$ also makes it a scheme over the appropriate prime field. Thus the rational filtered splitting in [F2] applies. Its stated spectral-sequence consequence, with the actual page identification of [F3], proves rational degeneration. [F1, F2, F3, given]

2.1 Let $A=\pi_0F^3_{\mathrm{mot}}K(X)$, $B=K_0(X)$, and let $u:A\to B$ be the stage-to-$K$ homomorphism. The augmented tower equivalence in [F2] identifies the rationalized stage-three map with a tail inclusion. That inclusion has a retraction, so $u\otimes\mathbb Q$ is injective: rationalization of spectra induces tensoring of homotopy groups with $\mathbb Q$. [F2, step 1.1]

3.1 By definition, $F^3_{\mathrm{mot}}K_0(X)=\operatorname{im}u$. The rational numbers are flat over $\mathbb Z$, so tensoring the exact sequence $0\to\ker u\to A\to\operatorname{im}u\to0$ with $\mathbb Q$ remains exact. Step 2.1 makes $(\ker u)\otimes\mathbb Q=0$; hence $A\otimes\mathbb Q\to F^3_{\mathrm{mot}}K_0(X)\otimes\mathbb Q$ is an isomorphism. This uses the actual image subgroup, not merely an abstract group isomorphic to it. [F3, step 2.1, algebra]

4.1 By [F3], $p_3$ is an isomorphism and $\epsilon_3$ is its inverse followed by $u$ with codomain restricted to $\operatorname{im}u$. Tensoring this composite with $\mathbb Q$ and applying step 3.1 proves the displayed edge isomorphism. [F3, step 3.1]

5.1 An affine finite-type scheme over a field is Noetherian. For the first article application its dimension is three by hypothesis, so steps 1.1 through 4.1 apply. For the complement, $U=X\setminus T$ is an open subscheme of the Noetherian threefold and is Noetherian of dimension at most three. Choose an irreducible component of $X_{\mathrm{red}}$ of dimension three. The closed integral curve $T$ has dimension one and cannot contain that component, so its intersection with $U$ is a nonempty open subset. By [F4], this intersection has dimension three; its chains are also chains in $U$. Consequently $\dim U=3$. It is a scheme over the same field, and steps 1.1 through 4.1 apply to it without normality. [F4, given, step 4.1] ∎
