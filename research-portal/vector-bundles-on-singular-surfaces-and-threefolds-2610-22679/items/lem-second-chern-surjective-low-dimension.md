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
  - def-motivic-filtration
  - def-motivic-cohomology
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-integral-closure-and-integrally-closed-domain
dependency_roles:
  prop-motivic-graded-spectral-sequence: mathematical-premise
  lem-low-filtration-homotopy: mathematical-premise
  lem-high-filtration-vanishing: mathematical-premise
  prop-second-projection-chern: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:lem-field-is-noetherian: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-noetherian-open-subsets-are-quasi-compact: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-integral-closure-and-integrally-closed-domain: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
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
      reading_limits: Historical reading scope retained from the incoming record. This
        maintenance pass checks the current item and supplier interfaces; it
        claims no fresh primary-source reading or independent acceptance. For
        this repair, read the frozen article extraction at PDF p. 12, proof of
        Theorem A, and p. 17, proof of Theorem B. These passages assert the
        affine applications and use the second-stage exact sequence and Lemma
        4.2. The retained normal finite-type nonaffine scope is a local
        consequence of the declared current supplier statements, rather than a
        verbatim article theorem. Read the current graded-triangle, low-stage,
        high-stage, second-projection and stage-exactness bodies and the
        formulation and geometric supplier interfaces used below. Their deep
        constructions and proofs are used through those contracts; no new
        reconstruction or acceptance is claimed.
dependency_level: 31
formulation_deps:
  - math:def-axiom-of-choice
  - def-motivic-filtration
  - def-motivic-cohomology
  - prop-second-projection-chern
  - math:def-integral-closure-and-integrally-closed-domain
argument_deps:
  - prop-motivic-graded-spectral-sequence
  - lem-low-filtration-homotopy
  - lem-high-filtration-vanishing
  - prop-second-projection-chern
  - lem-filtered-stage-exact-sequence
  - math:def-axiom-of-choice
  - def-motivic-filtration
  - def-motivic-cohomology
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:def-quasi-compact-and-quasi-separated-scheme
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

[F1] For a qcqs $k$-scheme, the actual weight-two graded triangle is $F^3_{\mathrm{mot}}K(X)\to F^2_{\mathrm{mot}}K(X)\to\mathbb Z(2)_{\mathrm{mot}}(X)[4]$, with degree-zero graded homotopy group $H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$. Its associated stage sequence is exact. [[prop-motivic-graded-spectral-sequence]] [[lem-filtered-stage-exact-sequence]]

[F2] For a normal qcqs scheme over the given algebraically closed field, under Choice and the compatible size bounds, the canonical map $\pi_0F^2_{\mathrm{mot}}K(X)\to F^2_{\mathrm{mot}}K_0(X)$ is an isomorphism. [[lem-low-filtration-homotopy]]

[F3] For a Noetherian finite-dimensional scheme of dimension $d$ over a field, under Choice and its compatible foundational conventions, $\pi_jF^i_{\mathrm{mot}}K(X)=0$ when $i\geq d$ and $j<0$. This is vanishing of stage groups, not just their images. [[lem-high-filtration-vanishing]]

[F4] For a normal qcqs scheme over the given algebraically closed field, with Choice and the compatible size bounds, the actual second-stage projection descends to the homomorphism $p_2$ on the image filtration, and $p_2(\alpha)=-c_2(\alpha)$ for every $\alpha$ in that image. [[prop-second-projection-chern]]

[F5] [[math:def-axiom-of-choice]] specifies the assumed Choice principle. The fixed bounds are chosen compatibly for all the constructions in [F1]–[F4], including the universe enlargements, smallness and pointed-space conventions stated in [[lem-high-filtration-vanishing]]. Existence of the required universes is assumed separately from Choice. Choice is inherited by the cited motivic constructions and by the topological inputs in [F8]; the elementwise surjectivity argument requires no selection of an entire family of representatives.

[F6] A field is Noetherian, and every commutative finite-type algebra over a Noetherian commutative ring is Noetherian. [[math:lem-field-is-noetherian]] [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]

[F7] A finite affine open cover by spectra of Noetherian rings makes a scheme Noetherian. A scheme is qcqs when its underlying space is quasi-compact and every intersection of two affine opens is quasi-compact; quasi-compact means that every open cover has a finite subcover. [[math:def-locally-noetherian-and-noetherian-scheme]] [[math:def-quasi-compact-and-quasi-separated-scheme]]

[F8] Under Choice, the spectrum of a Noetherian ring is a Noetherian topological space, and every open subset of such a space is quasi-compact, including the empty subset. [[math:thm-noetherian-ring-has-noetherian-spectrum]] [[math:lem-noetherian-open-subsets-are-quasi-compact]]

[F9] The specified tower on perfect-complex nonconnective $K$-theory, its augmentation and its image filtration are those of [[def-motivic-filtration]]. The actual weight-two complex and its degree-four cohomology are those of [[def-motivic-cohomology]]. The normality, finite-type, dimension and algebraic-closedness conventions used here are stated inline in the Statement; no bundle representative of a perfect $K_0$ class is assumed. The integrally closed domain condition in that normality convention uses [[math:def-integral-closure-and-integrally-closed-domain]].

## Proof

**Proof technique:** Verify the geometric hypotheses on a finite affine cover, apply the second-stage exact sequence, and transport its projection to the image filtration.

1.1 By the finite-type hypothesis choose a finite affine open cover $X=\bigcup_{a=1}^n U_a$ with $U_a=\operatorname{Spec}A_a$ and each $A_a$ a finitely generated $k$-algebra. The field $k$ is Noetherian and each $A_a$ is Noetherian by [F6]; hence $X$ is Noetherian by [F7]. For every open subset $W\subseteq X$, each $W\cap U_a$ is quasi-compact by [F8]. Any open cover of $W$ restricts to an open cover of each $W\cap U_a$; take a finite subcover on each of the finitely many charts and combine them to obtain a finite subcover of $W$. Thus every open subset of $X$ is quasi-compact. In particular $X$ and every intersection of two affine opens are quasi-compact, so $X$ is qcqs by [F7]. The Noetherian and qcqs hypotheses of [F1]–[F4] are now discharged, with the compatible conventions in [F5] and the same tower in [F9]. Since $3\geq d$ and $-1<0$, [F3] gives $\pi_{-1}F^3_{\mathrm{mot}}K(X)=0$. This proves the asserted obstruction-group vanishing. [F1, F2, F3, F4, F5, F6, F7, F8, F9, given, choose]

2.1 By [F1] the sequence $\pi_0F^2_{\mathrm{mot}}K(X)\to H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)\to\pi_{-1}F^3_{\mathrm{mot}}K(X)$ is exact. Its last group is zero by step 1.1, so its first map is surjective. By [F2], the canonical stage-to-image map is an isomorphism; by [F4], composing it with $p_2$ gives precisely that graded projection. Thus $p_2$ is surjective on $F^2_{\mathrm{mot}}K_0(X)$. For any target class $a$, choose $\alpha$ with $p_2(\alpha)=-a$. The identity $p_2(\alpha)=-c_2(\alpha)$ in [F4] then gives $c_2(\alpha)=a$. Hence $c_2$ is surjective as well, proving every stated assertion. [F1, F2, F4, F5, F9, step 1.1, choose] ∎
