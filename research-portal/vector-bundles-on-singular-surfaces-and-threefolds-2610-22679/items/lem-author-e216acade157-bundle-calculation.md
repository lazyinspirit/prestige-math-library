---
id: lem-author-e216acade157-bundle-calculation
kind: lemma
title: The reduced universal bundle calculation identifies the second projection
status: published
domain: mathematics
deps:
  - lem-author-e216acade157-split-determinant-fiber
  - lem-flag-tower-line-quotients
  - lem-flag-tower-cohomology-detection
  - prop-filtration-product-projection
  - prop-chern-whitney-identities
  - lem-author-3cde9692a7e9-actual-total-cartan
  - prop-first-chern-determinant
  - lem-reduced-bundle-class-identities
  - math:def-axiom-of-choice
  - lem-author-ec13f1db88a5-rank-zero-stage
  - thm-author-d026a7b99ace-universal-chern-space
  - def-scheme-perfect-complexes
  - def-nonconnective-k-spectrum-interface
  - thm-author-3a003d7b5208-nonconnective-k-zero-input
  - math:thm-hilbert-basis-theorem
  - lem-adjudicate-fa9c7180089a-polynomial-spectrum-dimension
  - math:lem-chain-dimension-open-cover
dependency_roles:
  lem-author-e216acade157-split-determinant-fiber: mathematical-premise
  lem-flag-tower-line-quotients: mathematical-premise
  lem-flag-tower-cohomology-detection: mathematical-premise
  prop-filtration-product-projection: mathematical-premise
  prop-chern-whitney-identities: mathematical-premise
  lem-author-3cde9692a7e9-actual-total-cartan: mathematical-premise
  prop-first-chern-determinant: mathematical-premise
  lem-reduced-bundle-class-identities: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-ec13f1db88a5-rank-zero-stage: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  thm-author-3a003d7b5208-nonconnective-k-zero-input: mathematical-premise
  math:thm-hilbert-basis-theorem: mathematical-premise
  lem-adjudicate-fa9c7180089a-polynomial-spectrum-dimension: mathematical-premise
  math:lem-chain-dimension-open-cover: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 28
formulation_deps:
  - math:def-axiom-of-choice
  - lem-author-e216acade157-split-determinant-fiber
  - lem-author-ec13f1db88a5-rank-zero-stage
  - prop-filtration-product-projection
  - thm-author-d026a7b99ace-universal-chern-space
  - prop-chern-whitney-identities
  - lem-reduced-bundle-class-identities
  - def-scheme-perfect-complexes
  - def-nonconnective-k-spectrum-interface
  - lem-flag-tower-line-quotients
  - lem-author-3cde9692a7e9-actual-total-cartan
argument_deps:
  - lem-author-e216acade157-split-determinant-fiber
  - lem-flag-tower-line-quotients
  - lem-flag-tower-cohomology-detection
  - prop-filtration-product-projection
  - prop-chern-whitney-identities
  - lem-author-3cde9692a7e9-actual-total-cartan
  - prop-first-chern-determinant
  - lem-reduced-bundle-class-identities
  - math:def-axiom-of-choice
  - lem-author-ec13f1db88a5-rank-zero-stage
  - thm-author-d026a7b99ace-universal-chern-space
  - def-scheme-perfect-complexes
  - def-nonconnective-k-spectrum-interface
  - thm-author-3a003d7b5208-nonconnective-k-zero-input
  - math:thm-hilbert-basis-theorem
  - lem-adjudicate-fa9c7180089a-polynomial-spectrum-dimension
  - math:lem-chain-dimension-open-cover
sources:
  references:
    - title: The Stacks Project, Noetherian schemes
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Definition 28.5.1; Lemmas 28.5.2–28.5.5, Section 28.5 (Tag 01OU)
      statement: Noetherian means locally Noetherian and quasi-compact. Every affine
        open of a locally Noetherian scheme has Noetherian coordinate ring; open
        subschemes remain locally Noetherian. Locally Noetherian schemes are
        quasi-separated, and Noetherian schemes have Noetherian underlying
        spaces.
      hypotheses: The affine-open and quasi-separated assertions assume locally
        Noetherian schemes. The global topological assertion assumes Noetherian
        schemes. Applied to Y and to the finite affine chart covers constructed
        in step 1.1.
      reading_limits: Read the live primary HTML Definition 28.5.1 and Lemmas
        28.5.2–28.5.5, including their displayed arguments. Their cited
        commutative-algebra and topology foundations are imported, not
        reconstructed. No claim of reading other lemmas on the page is needed
        for this application.
    - title: The Stacks Project, Grassmannians
      url: https://stacks.math.columbia.edu/tag/089R
      locator: Section 27.22, Lemma 27.22.1 and its proof; Definition 27.22.2
      statement: For 0<k<N, the functor of rank N-k locally free quotients of the
        trivial rank N bundle is represented by a scheme with a finite cover by
        affine k(N-k)-space over Z. Base change defines the Grassmannian over
        any scheme, carrying its universal quotient.
      hypotheses: Interior ranks satisfy 0<k<N; the rank-r quotient convention here is
        r=N-k. Base change is to the stated field-scheme Y. The endpoint
        quotient ranks zero and N are handled directly as Y with its unique
        quotient.
      reading_limits: Read the live primary HTML quotient functor, the full chart
        construction and covering argument in Lemma 27.22.1, and Definition
        27.22.2. Used only for representability, universal quotients, base
        change and the finite polynomial chart cover; no motivic comparison
        theorem is imported from this page.
---

## Statement
Assume the Axiom of Choice and the compatible site-size and universe bounds required by the supplied perfect K-theory, motivic and derived-section constructions. Put $S=\Omega^\infty\operatorname{Fil}^1K$ and $T=\Omega^\infty\operatorname{Fil}^2K$. For a vector bundle $V$ of locally constant rank $n$ on a noetherian finite-dimensional field-scheme $Y$, let $v\in\pi_0S(Y)$ be the unique first-stage lift of the rank-zero perfect class $[V]-n$, and put $\widetilde\delta(V)=r(v)\in\pi_0T(Y)$. Here $n$ denotes the class of the trivial bundle of rank $n$ on each clopen rank stratum. Its underlying perfect class is $\delta(V)=[V]-[\det V]-(n-1)$. For the actual second stage projection $Q:T\to A=\Omega^\infty(\mathbb Z(2)_{\rm mot}[4])$ and actual second Chern map $C_2:\Omega^\infty K\to A$,
$$Q(\widetilde\delta(V))=-c_2(V)=-c_2(\delta(V)).$$
The equalities are in $\pi_0A(Y)=H^{4,2}_{\rm mot}(Y,\mathbb Z)$; $c_2(\delta(V))$ means evaluation of the actual perfect operation $C_2$ on that perfect class. The assertion holds for actual universal bundles on finite Grassmannians over $Y$, naturally under their transition maps.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the compatible site-size and universe bounds in the Statement. They are inherited through the determinant-fiber, first-Chern and flag constructions in [F1]–[F2] at steps 1.1–3.1 and the actual perfect Cartan and universal-operation comparisons in [F3]–[F4] at step 4.1. The same bounds contain the perfect-category presentations in [F5].

[F0] A field-scheme has a specified structure map to the spectrum of a field. Noetherian means quasi-compact with an affine cover by rings whose ideals are finitely generated; finite dimension bounds the lengths of strict chains of nonempty irreducible closed subsets, with empty-space dimension $-\infty$. A vector bundle is a finite locally free module and a line bundle has rank one, as in [[lem-flag-tower-line-quotients]]. Use $K_0(Y)=\pi_0K(Y)$ for perfect-complex K-theory, with bundle $V$ represented by $V[0]$ and $1=[\mathcal O_Y]$; multiplication on bundle classes is tensor product, as in [[lem-reduced-bundle-class-identities]]. The notation $\det V$ is the top exterior power on each rank stratum, with $\det0=\mathcal O_Y$. A clopen stratum is both open and closed; local constancy and quasi-compactness make the rank partition finite. Products and cohomology groups use the actual graded targets in [[prop-filtration-product-projection]], and the Chern coefficients and formal variable $t$ have the conventions in [[prop-chern-whitney-identities]].

[F1] [[lem-author-e216acade157-split-determinant-fiber]] supplies the determinant retraction $r:S\to T$ for $S=\Omega^\infty\operatorname{Fil}^1K$ and $T=\Omega^\infty\operatorname{Fil}^2K$, and injectivity of $\pi_0T\to K_0$. [[prop-filtration-product-projection]] supplies the actual stage product and its projection square on every qcqs field-scheme; $Q$ is the zeroth-space map of its actual weight-two projection $p_2$, hence induces an additive map on components; only this stage-level assertion is used, without the additional hypotheses of its image-group square. The line lift $\kappa(L)$ has first projection $c_1(L)$ by that section and [[prop-first-chern-determinant]].

[F2] [[lem-flag-tower-line-quotients]] gives a flag pullback with a filtration by line quotients; [[lem-flag-tower-cohomology-detection]] detects equality in every cohomological degree and nonnegative motivic weight on this tower; only bidegree $(4,2)$ is used below. It does not assert that the filtration splits globally. [[prop-chern-whitney-identities]] identifies its Chern roots.

[F3] [[lem-author-3cde9692a7e9-actual-total-cartan]] supplies actual perfect Cartan in this noetherian finite-dimensional scope. [[lem-reduced-bundle-class-identities]] supplies the reduced-class ring identities on every qcqs scheme over any field under Choice and its size bounds. On each constant-rank component of the flag tower, apply those identities to partial direct sums of the line quotients. The exact flag sequences identify the final direct-sum class with the pulled-back bundle class. The scope check is supplied in [F6] and proved in step 1.1. The calculation below spells out both the ring expansion and its actual stage lifts.

[F4] [[lem-author-ec13f1db88a5-rank-zero-stage]] identifies the first-stage components with the kernel of Euler rank on perfect $K_0$, naturally under every qcqs pullback. This supplies existence and uniqueness of the lift $v$ before applying $r$. [[thm-author-d026a7b99ace-universal-chern-space]] supplies the actual pointed operations on global perfect K-spaces by composition with the canonical sheafification unit, retaining the specified bundle Chern classes and their stabilization. In particular, $C_2([V])=c_2(V)$, the positive operations vanish on every trivial-rank class, and on a line their total series is $1+c_1(L)t$. These are the same operations used in [F3].

[F5] [[def-scheme-perfect-complexes]] supplies the stable idempotent-complete category of perfect objects inside the sheaf-derived category. [[def-nonconnective-k-spectrum-interface]] fixes its BGT nonconnective K-theory and coherent tensor and pullback operations, using equivalent small presentations in the chosen universes. [[thm-author-3a003d7b5208-nonconnective-k-zero-input]] identifies its degree-zero group with the group on object classes modulo cofiber-sequence relations. For a short exact sequence of bundles, the cone of the first map has the quotient as its only cohomology sheaf: the degree minus-one kernel is zero and the degree-zero cokernel is that quotient. The natural map from this cone to the quotient is a quasi-isomorphism. Thus it is a cofiber sequence of perfect objects and gives the required equality in this actual perfect $K_0$. No global presentation of arbitrary perfect classes by bundle differences is used.

[F6] Source reference 0 supplies the Noetherian affine-open, quasi-separated and topological facts. [[math:thm-hilbert-basis-theorem]] makes polynomial chart rings Noetherian; [[lem-adjudicate-fa9c7180089a-polynomial-spectrum-dimension]] computes their scheme dimensions, with one extra dimension per variable. [[math:lem-chain-dimension-open-cover]] computes dimension on a Noetherian open cover. The flag supplier [F2] constructs finite projective-bundle towers, locally projective spaces over a trivializing base open. Source reference 1 supplies the finite affine-space chart cover and universal quotient of each finite Grassmannian; its quotient rank is $N-k$, so for rank $n$ use $k=N-n$. At endpoint ranks zero and $N$ the representing scheme is the base itself, since the quotient is respectively zero or an isomorphism.

## External input
Source reference 0 supplies only the stated Noetherian-scheme facts; source reference 1 supplies only the quotient Grassmannian construction and its finite affine charts. Their hypotheses and reading limits are recorded in sources.references. The dimension/scope argument and bundle calculation below are local compositions with the declared suppliers, not imported proofs of this item.

## Proof
**Given:** $Y,V$ as stated, with the actual maps and finite clopen rank decomposition.

**Goal:** Compute both actual operations on the reduced determinant-trivial class.

1.1 By source reference 0 in [F6], $Y$ is qcqs, every affine open has Noetherian coordinate ring, and its topology is Noetherian. Choose a finite affine cover refining a bundle trivializing cover. Each nonempty affine has dimension at most $\dim Y$ by the open-cover dimension result. Over it a positive-rank projective bundle has finitely many affine charts with coordinate ring $R[t_1,\ldots,t_m]$. Repeated Hilbert basis and polynomial-spectrum dimension give Noetherian charts of dimension $\dim\operatorname{Spec}R+m$; empty charts cause no exception. Their finite cover makes the total scheme Noetherian, and open-cover dimension bounds its dimension. Repeat through the finite tower and its finitely many clopen rank components. Likewise, source reference 1 gives each finite Grassmannian a finite cover over these base affines by polynomial charts of fixed finite dimension; the same argument makes it Noetherian finite-dimensional. Endpoint ranks give $Y$ itself. Thus every use of the noetherian finite-dimensional perfect Cartan interface below is in its stated scope. [A1, F0, F2, F6, construct]

2.1 By [F4], the rank-zero class $[V]-n$ has the stated unique first-stage lift, naturally under pullback. The expression for $\delta(V)$ follows from the formula for $r$. It has rank zero and its determinant is canonically trivial. Under [A1], construct the detecting flag tower in [F2] on each constant-rank clopen stratum. On one such tower put $l_s=[L_s]$, $D_s=\bigotimes_{i\leq s}L_i$ and $R_s=\sum_{i\leq s}l_i-[D_s]-(s-1)$. Exact flag sequences give these perfect $K_0$ class equalities without globally split sequences. For $s\geq2$, the line-product identity in [F3], or direct distributivity, gives $([L_s]-1)([D_{s-1}]-1)=[D_s]-[L_s]-[D_{s-1}]+1$, hence $R_s=R_{s-1}-([L_s]-1)([D_{s-1}]-1)$ and $R_1=0$. Define $\widetilde R_s=r(\sum_{i\leq s}\kappa(L_i))$. Its argument has underlying class $\sum_{i\leq s}l_i-s$ and determinant $D_s$, so $\widetilde R_s$ has underlying class $R_s$. Let $P_s$ be the actual second-stage product of $\kappa(L_s)$ and $\kappa(D_{s-1})$. Its underlying class is the product in the recursion. Injectivity of the second-stage augmentation in [F1] gives $\widetilde R_1=0$ and $\widetilde R_s=\widetilde R_{s-1}-P_s$. At $s=n$ the same injectivity identifies $\widetilde R_n$ with the pullback of $\widetilde\delta(V)$. This comparison uses no additivity of $r$. [F0, F1, F2, F3, F4, F5, A1, step 1.1, algebra]

3.1 Write $x_i=c_1(L_i)$. The multiplicative projection square and additivity of the actual second-stage map give by induction $Q(\widetilde\delta(V))=-\sum_{s=2}^n x_s\Big(\sum_{i<s}x_i\Big)=-\sum_{i<j}x_ix_j=-c_2(V).$ For rank two this is exactly $([L_1]-1)([L_2]-1)=-\delta(V)$; the displayed recursion is the full rank induction. Additivity of line $c_1$ identifies $c_1(D_{s-1})$ with the indicated sum. Rank zero and rank one give zero. Detection in [F2] descends the equality; finite clopen reduction handles varying rank. [F1, F2, step 2.1, A1]

4.1 By [F4], the perfect operations agree with the bundle classes on $V$ and $\det V$ and vanish on every trivial-rank class. Put $a=c_1(V)=c_1(\det V)$. Actual perfect Cartan gives $c_t(\delta(V))=c_t(V)(1+at)^{-1},$ since a trivial virtual rank has Chern series one. Its $t^2$ coefficient is $c_2(V)-a^2+a^2=c_2(V)$. This uses actual perfect Cartan, not a global bundle presentation of arbitrary classes. All constructions commute with pullback, so they apply to the actual universal bundles on each finite Grassmannian. [F3, F4, step 2.1, step 3.1, A1] ∎
