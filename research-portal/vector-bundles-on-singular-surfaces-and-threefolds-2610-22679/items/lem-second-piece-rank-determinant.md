---
id: lem-second-piece-rank-determinant
kind: lemma
title: Rank and determinant on the second piece
status: draft
domain: mathematics
deps:
  - def-motivic-filtration
  - lem-filtered-stage-exact-sequence
  - lem-author-ec13f1db88a5-rank-zero-stage
  - lem-author-ec13f1db88a5-global-picard-projection
  - prop-first-chern-determinant
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-filtration: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  lem-author-ec13f1db88a5-rank-zero-stage: mathematical-premise
  lem-author-ec13f1db88a5-global-picard-projection: mathematical-premise
  prop-first-chern-determinant: mathematical-premise
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
      locator: PDF p. 3, Notation and conventions; pp. 8-10, Lemmas 4.1 and 5.2; p.
        11, opening of the proof of Lemma 5.3
      reading_limits: Read extracted text of these supplied v1 PDF pages and p. 7,
        Lemma 2.9. The proof below uses the current full-qcqs rank and Picard
        supplier contracts; their deep construction proofs were not
        reconstructed or independently judged.
dependency_level: 24
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds required by the low-weight and perfect K-theory constructions. Let $k$ be an algebraically closed field and let $X$ be a normal quasi-compact quasi-separated $k$-scheme. For every $\alpha\in F^2_{\mathrm{mot}}K_0(X)$, the composites
$$F^2_{\mathrm{mot}}K_0(X)\longrightarrow K_0(X)\xrightarrow{p_0}H^{0,0}_{\mathrm{mot}}(X,\mathbb Z),\qquad F^2_{\mathrm{mot}}K_0(X)\longrightarrow F^1_{\mathrm{mot}}K_0(X)\xrightarrow{p_1}H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$$
vanish. Consequently $\alpha$ has rank zero and $c_1^{\mathrm{perf}}(\alpha)=0$. If in addition $\alpha=[V]-[W]$ for vector bundles $V,W$ on $X$, then $V$ and $W$ have equal rank at every point and their determinant line bundles are isomorphic. In particular these assertions hold on normal finite-type $k$-schemes.

Here $K_0(X)$ is the zeroth homotopy group of nonconnective K-theory of perfect complexes, and $F^j_{\mathrm{mot}}K_0(X)$ is the image of the $j$th motivic filtration stage in it. A perfect complex is locally quasi-isomorphic to a bounded complex of finite-rank vector bundles; its rank is the locally constant Euler characteristic of its derived fibers. A vector bundle is a finite locally free sheaf, and its determinant is its top exterior power on each constant-rank locus. Normal means that all local rings are integrally closed domains. Quasi-compact means every open cover has a finite subcover; quasi-separated means intersections of quasi-compact open subsets are quasi-compact. Finite type over $k$ means a finite affine cover by spectra of finitely generated $k$-algebras.

The map $p_0$ is the actual zeroth stage-to-graded projection, using $F^0_{\mathrm{mot}}K(X)=K(X)$. The first-stage augmentation identifies $\pi_0F^1_{\mathrm{mot}}K(X)$ injectively with $F^1_{\mathrm{mot}}K_0(X)$ on every qcqs field-scheme. The map $p_1$ here is the actual first stage-to-graded projection transported through this identification. Thus its construction applies throughout the stated qcqs scope and agrees with the existing finite-type projection convention. The first Chern class is the actual rank-reduced first-layer class, equivalently the perfect determinant followed by the actual weight-one Picard isomorphism. Choice means every family of nonempty sets has a choice function; the size bounds specify the sites and ambient universes of the cited constructions.

## Facts & Assumptions
**Given:** The field $k$, scheme $X$, Choice, site and universe bounds, and $\alpha\in F^2_{\mathrm{mot}}K_0(X)$ as stated.

**Goal:** Prove both projection composites vanish, then deduce rank zero and vanishing first Chern class, with the stated consequences for any bundle-difference representation.

[F1] The decreasing motivic filtration has compatible stage maps to $K(X)$, with stage zero identified with $K(X)$, and nested image groups. For each stage, exactness makes the kernel of its stage-to-graded map on $\pi_0$ the image of the next stage. [[def-motivic-filtration]] [[lem-filtered-stage-exact-sequence]]

[F2] On every qcqs scheme over a field, the actual weight-zero map is the locally constant Euler rank on perfect $K_0$. The first-stage augmentation is injective on $\pi_0$ and identifies its image with the rank-zero subgroup of $K_0$. [[lem-author-ec13f1db88a5-rank-zero-stage]]

[F3] On the qcqs Nisnevich site over a field, the actual map from the rank-zero K-space to the weight-one Picard stack is the perfect-complex determinant map. On components it retains global determinant line classes, including on nonaffine schemes. [[lem-author-ec13f1db88a5-global-picard-projection]]

[F4] Under Choice and the stated bounds, on every qcqs field-scheme one has $c_1^{\mathrm{perf}}=\gamma_X\det_X$, with $\gamma_X:\operatorname{Pic}(X)\xrightarrow{\sim}H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ the actual weight-one orientation. This class agrees with the actual bundle and virtual-bundle first Chern classes. In particular, on a bundle difference its determinant is the Picard class of $\det V\otimes(\det W)^{-1}$. The Picard group consists of isomorphism classes of line bundles under tensor product. [[prop-first-chern-determinant]]

[F5] The assumed Choice and size bounds are used when invoking the filtration and perfect rank/Picard constructions; choosing a single lift of a given image element below does not itself require arbitrary-index choice. [[math:def-axiom-of-choice]]



**Proof technique:** Transport only the first-stage map through the full-qcqs rank-fiber identification, apply consecutive stage exactness, and then use the actual determinant comparison.

## Proof
1.1 Invoke the filtration and rank/Picard constructions under [F5]. By [F2], the first-stage augmentation is an isomorphism onto its image group, so composing its inverse with the actual first stage-to-graded map defines $p_1$ on $F^1_{\mathrm{mot}}K_0(X)$. This uses the injective first-stage augmentation on the stated qcqs scheme, without applying a finite-type comparison outside its hypotheses. Whenever the finite-type projection convention applies, both definitions use the inverse of the same augmentation and the same stage map, so they agree. [F1, F2, F3, F5, given]

2.1 Choose a lift $a\in\pi_0F^2_{\mathrm{mot}}K(X)$ of $\alpha$, which exists by the image-group definition. Let $b$ be its image in $\pi_0F^1_{\mathrm{mot}}K(X)$ and let $c$ be the image of $b$ in $\pi_0F^0_{\mathrm{mot}}K(X)=K_0(X)$. Compatible augmentations give $c=\alpha$. The element $b$ is the unique first-stage representative of $\alpha$ by [F2]. [F1, F2, step 1.1, given]

3.1 The first stage-to-graded map sends $b$ to zero because it comes from stage two. The zeroth stage-to-graded map sends $c$ to zero because it comes from stage one. These are exactly the adjacent-stage kernels in [F1]. By the transport in step 1.1 and the augmentation compatibility in step 2.1, this proves $p_1(\alpha)=0$ and $p_0(\alpha)=0$, hence both displayed composites vanish. [F1, step 1.1, step 2.1]

4.1 By [F2], $p_0(\alpha)=0$ says that $\alpha$ has pointwise Euler rank zero. By [F3] the value of the actual first-layer map on its unique first-stage representative $b$ is $\gamma_X(\det_X\alpha)$, which is $c_1^{\mathrm{perf}}(\alpha)$ by [F4]. Step 3.1 makes that value zero. Thus the rank and first-Chern conclusions hold for arbitrary perfect classes in the second image group. [F2, F3, F4, step 2.1, step 3.1]

5.1 If $\alpha=[V]-[W]$, additivity of Euler rank and step 4.1 give equal ranks of $V$ and $W$ at every point. By [F4], $\gamma_X([\det V\otimes(\det W)^{-1}])=c_1^{\mathrm{perf}}(\alpha)=0$. Injectivity of $\gamma_X$ makes this Picard class zero, equivalently $\det V\cong\det W$. Normal finite-type schemes over $k$ are qcqs, so the original finite-type special case is included. This proves every assertion. [F4, step 4.1, given] ∎

The article's original normal qcqs scope is retained, including nonseparated schemes. No global bundle-difference representation or resolution property is assumed. The final assertion applies only when a representation is supplied. The original article's blanket representation premise remains a source proof defect; the rank and determinant conclusions do not require it. This proof uses the actual full-qcqs rank and Picard interfaces instead of extending the finite-type smooth-locus comparison by assertion. Their underlying constructions are used as supplier premises, without new acceptance or audit claims.

## Scope and reading limits
The article's original normal qcqs scope is retained, including nonseparated schemes. No global bundle-difference representation or resolution property is assumed. The final assertion applies only when a representation is supplied. The original article's blanket representation premise remains a source proof defect; the rank and determinant conclusions do not require it. This proof uses the actual full-qcqs rank and Picard interfaces instead of extending the finite-type smooth-locus comparison by assertion. Their underlying constructions are used as supplier premises, without new acceptance or audit claims.
