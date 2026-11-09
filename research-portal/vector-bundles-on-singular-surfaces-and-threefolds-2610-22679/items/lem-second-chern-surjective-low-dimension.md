---
id: lem-second-chern-surjective-low-dimension
kind: lemma
title: Second Chern surjectivity in dimensions two and three
status: published
domain: mathematics
deps:
  - prop-motivic-graded-spectral-sequence
  - lem-low-filtration-homotopy
  - lem-high-filtration-vanishing
  - prop-second-projection-chern
  - lem-filtered-stage-exact-sequence
  - math:def-axiom-of-choice
dependency_roles:
  prop-motivic-graded-spectral-sequence: mathematical-premise
  lem-low-filtration-homotopy: mathematical-premise
  lem-high-filtration-vanishing: mathematical-premise
  prop-second-projection-chern: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
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
      locator: PDF p. 12, proof of Theorem A; p. 17, proof of Theorem B
      statement: The second projection, and consequently the second Chern class, is
        surjective in the respective surface and threefold applications.
      hypotheses: The normal affine surfaces and threefolds over an algebraically
        closed field in the respective theorems.
      reading_limits: The indicated passages in the supplied extracted article text
        were read. The proof below uses the named completed supplier contracts;
        it does not reconstruct their proofs.
dependency_level: 28
---

## Statement
Assume the Axiom of Choice and the fixed site and universe size bounds required by the motivic filtration and its low-stage comparison. Let $k$ be an algebraically closed field and let $X$ be a normal finite-type $k$-scheme of Krull dimension $2$ or $3$. Then both homomorphisms
$$p_2,c_2:F^2_{\mathrm{mot}}K_0(X)\longrightarrow H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$$
are surjective. The obstruction group $\pi_{-1}F^3_{\mathrm{mot}}K(X)$ in the stage exact sequence is zero. In particular, these conclusions apply to the normal affine surfaces and threefolds in the article's main theorems.

Here normal means that every local ring is an integrally closed domain, finite type means that $X$ has a finite affine cover by spectra of finitely generated $k$-algebras, and Krull dimension is the supremum of the lengths of chains of irreducible closed subsets. An algebraically closed field is a field in which every nonconstant polynomial in one variable has a root. Choice means that every family of nonempty sets has a choice function; the size bounds fix the small sites and ambient universes used for derived sections.

The spectrum $K(X)$ is the specified nonconnective K-theory spectrum of perfect complexes, and $K_0(X)=\pi_0K(X)$. A perfect complex is a complex locally quasi-isomorphic to a bounded complex of finite-rank locally free sheaves. The decreasing motivic tower has stages $F^r_{\mathrm{mot}}K(X)$ mapping compatibly to $K(X)$; $F^r_{\mathrm{mot}}K_0(X)$ is the image of the induced map on $\pi_0$. The target is degree-four cohomology of the weight-two motivic complex on $X$. The map $p_2$ is the homomorphism induced on that image by the actual second-stage graded projection, and $c_2$ is the actual second Chern operation on perfect K-theory restricted to this image. Their existence and the identity $p_2=-c_2$ under these hypotheses are supplied by the second-projection proposition.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, a normal finite-type $k$-scheme $X$ of dimension $d\in\{2,3\}$, Choice, and the stated site and universe size bounds.

**Goal:** Prove the stated obstruction-group vanishing and the surjectivity of the actual $p_2$ and $c_2$.

[F1] The actual weight-two graded triangle is $F^3_{\mathrm{mot}}K(X)\to F^2_{\mathrm{mot}}K(X)\to\mathbb Z(2)_{\mathrm{mot}}(X)[4]$, whose degree-zero homotopy group is $H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$. Its associated stage sequence is exact. [[prop-motivic-graded-spectral-sequence]] [[lem-filtered-stage-exact-sequence]]

[F2] Under the given field, normality, finite-type, Choice and size hypotheses, the canonical map $\pi_0F^2_{\mathrm{mot}}K(X)\to F^2_{\mathrm{mot}}K_0(X)$ is an isomorphism. [[lem-low-filtration-homotopy]]

[F3] For a Noetherian finite-dimensional scheme of dimension $d$ over a field, Choice gives $\pi_jF^i_{\mathrm{mot}}K(X)=0$ when $i\geq d$ and $j<0$. [[lem-high-filtration-vanishing]]

[F4] Under the given normal finite-type and choice hypotheses, the actual second-stage projection descends to $p_2$ on the image filtration, and $p_2(\alpha)=-c_2(\alpha)$ for every $\alpha$ in that image. [[prop-second-projection-chern]]

[F5] [[math:def-axiom-of-choice]] states the Choice assumption used in the stage-vanishing and low-stage comparisons in [F2]–[F3].

## Proof

**Proof technique:** Apply the exact sequence of the second graded stage, then transfer the resulting surjection to the image filtration.

1.1 A finite-type scheme over a field is Noetherian. Since $3\geq d$ and $-1<0$, [F3] gives $\pi_{-1}F^3_{\mathrm{mot}}K(X)=0$. This is vanishing of the stage group itself. [F3, F5, given]

2.1 The exact sequence in [F1] contains the actual maps $\pi_0F^2_{\mathrm{mot}}K(X)\to H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)\to\pi_{-1}F^3_{\mathrm{mot}}K(X)$. The last group is zero by step 1.1, so exactness makes the first map surjective. [F1, step 1.1]

3.1 By [F2], every element of $F^2_{\mathrm{mot}}K_0(X)$ has a unique stage representative. By [F4], $p_2$ applied to that image is the graded projection of the representative. Thus the surjection in step 2.1 is exactly $p_2$ after the isomorphism of [F2], proving $p_2$ surjective. [F2, F4, step 2.1]

4.1 For any target class $a$, step 3.1 supplies $\alpha$ with $p_2(\alpha)=-a$. The identity in [F4] then gives $c_2(\alpha)=a$. Hence $c_2$ is also surjective, and all stated assertions follow. [F4, step 1.1, step 3.1] ∎
