---
id: lem-author-ec13f1db88a5-all-perfect-factorization
kind: lemma
title: Canonical first motivic class on every perfect K zero class
status: published
domain: mathematics
deps:
  - lem-author-ec13f1db88a5-perfect-determinant
  - lem-author-ec13f1db88a5-rank-zero-stage
  - lem-author-ec13f1db88a5-global-picard-projection
  - lem-author-ec13f1db88a5-bundle-comparison
  - prop-motivic-weight-one
  - def-nonconnective-k-spectrum-interface
  - math:def-axiom-of-choice
  - def-derived-sections-on-sites
  - lem-author-dcdf962edbda-qcqs-site
  - math:def-quasi-compact-and-quasi-separated-scheme
  - def-vector-bundle-classes
  - math:def-module-on-ringed-space
  - math:def-sheaf-on-topological-space
  - math:ex-pullback-free-module
  - def-exterior-determinant-bundles
  - thm-author-3a003d7b5208-nonconnective-k-zero-input
  - def-motivic-filtration
  - def-decreasing-filtered-spectrum
  - def-motivic-cohomology
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-ec13f1db88a5-perfect-determinant: mathematical-premise
  lem-author-ec13f1db88a5-rank-zero-stage: mathematical-premise
  lem-author-ec13f1db88a5-global-picard-projection: mathematical-premise
  lem-author-ec13f1db88a5-bundle-comparison: mathematical-premise
  prop-motivic-weight-one: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  def-vector-bundle-classes: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:ex-pullback-free-module: mathematical-premise
  def-exterior-determinant-bundles: mathematical-premise
  thm-author-3a003d7b5208-nonconnective-k-zero-input: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-decreasing-filtered-spectrum: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 25
formulation_deps:
  - lem-author-ec13f1db88a5-perfect-determinant
  - lem-author-ec13f1db88a5-rank-zero-stage
  - lem-author-ec13f1db88a5-global-picard-projection
  - lem-author-ec13f1db88a5-bundle-comparison
  - prop-motivic-weight-one
  - def-nonconnective-k-spectrum-interface
  - math:def-axiom-of-choice
  - def-derived-sections-on-sites
  - lem-author-dcdf962edbda-qcqs-site
  - math:def-quasi-compact-and-quasi-separated-scheme
  - def-vector-bundle-classes
  - def-exterior-determinant-bundles
  - def-motivic-filtration
  - def-decreasing-filtered-spectrum
  - def-motivic-cohomology
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-ec13f1db88a5-perfect-determinant
  - lem-author-ec13f1db88a5-rank-zero-stage
  - lem-author-ec13f1db88a5-global-picard-projection
  - lem-author-ec13f1db88a5-bundle-comparison
  - prop-motivic-weight-one
  - def-nonconnective-k-spectrum-interface
  - math:def-axiom-of-choice
  - def-derived-sections-on-sites
  - lem-author-dcdf962edbda-qcqs-site
  - math:def-quasi-compact-and-quasi-separated-scheme
  - def-vector-bundle-classes
  - math:def-module-on-ringed-space
  - math:def-sheaf-on-topological-space
  - math:ex-pullback-free-module
  - def-exterior-determinant-bundles
  - thm-author-3a003d7b5208-nonconnective-k-zero-input
  - def-motivic-filtration
  - def-decreasing-filtered-spectrum
  - def-motivic-cohomology
  - math:def-grothendieck-universe-closure-convention
sources:
  references:
    - title: Daniel Kasprowski and Christoph Winges, Algebraic K-theory of stable
        infinity-categories via binary complexes
      url: https://arxiv.org/pdf/1805.06175v2
      locator: Section 2.1 opening paragraph (printed p. 2), formula (2.6) (p. 3), and
        Section 2.2 opening paragraph before Lemma 2.12 (p. 4).
      statement: The cofiber Grothendieck group of the idempotent completion of a
        small stable infinity-category is its degree-zero nonconnective K-group.
        For an idempotent-complete category, this gives the object-class
        presentation with cofiber relations.
      hypotheses: The category is small and stable; omitting completion requires
        idempotent completeness. Apply to an equivalent small presentation of
        the supplied perfect category, with its specified nonconnective functor.
      reading_limits: Freshly read these passages in the versioned primary PDF text,
        including the stated comparison and functor identification. Used the
        existing local K-zero supplier for the natural object-class interface.
        The underlying comparison and completion proofs were not reconstructed.
---

## Statement
Assume the Axiom of Choice and the fixed compatible site-size and universe bounds of the specified perfect K-theory, derived-section and weight-one constructions. For every field $k$ and qcqs $X/k$, the actual first EM layer defines a natural homomorphism $c_1^{\rm perf}:K_0(X)\to H^{2,1}_{\rm mot}(X,\mathbb Z)$ as follows. Let $r(\alpha)$ be the locally constant Euler rank, and let $s(r)$ be the virtual trivial-bundle class of that rank, formed on its finite clopen rank partition. Let $\widetilde\alpha$ be the unique element of $\pi_0\operatorname{Fil}^1K(X)$ mapping to $\alpha-s(r(\alpha))$. Set $c_1^{\rm perf}(\alpha)=\pi_0q_1(\widetilde\alpha)$, using the actual weight-one identification. Then $c_1^{\rm perf}(\alpha)=\gamma_X(\det_X\alpha)$ for every perfect class. It agrees with the existing first class on actual and virtual vector-bundle classes under their canonical map to perfect K zero.

The size data consist of universes containing the schemes and perfect-category enhancements in use, the chosen small Nisnevich sites used for derived sections of units, and a suitably small skeleton of the qcqs schemes over the prime field in those universes for the big-site low-layer comparisons. All these categories and their sheaves are interpreted in a sufficiently large ambient universe. These are the supplied size conventions; the assertion retains every field and every qcqs scheme.

## Statement references
[[math:def-axiom-of-choice]]

[[def-nonconnective-k-spectrum-interface]]

[[def-derived-sections-on-sites]]

[[lem-author-dcdf962edbda-qcqs-site]]

[[prop-motivic-weight-one]]

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]]. The compatible site and universe data are those of [[def-derived-sections-on-sites]], [[lem-author-dcdf962edbda-qcqs-site]] and [[def-nonconnective-k-spectrum-interface]], with the weight-one site bounds of [[prop-motivic-weight-one]]. Universes have the closure convention of [[math:def-grothendieck-universe-closure-convention]]; their existence is assumed separately from Choice. Choose the bounds compatibly with the rank-zero and global Picard suppliers, including their nested ambient universes. These premises are used through [F1]–[F2], [F4] and [F6] in steps 1.1–2.1. The finite clopen rank-section construction itself uses only finite data.

[F1] [[lem-author-ec13f1db88a5-rank-zero-stage]] supplies the natural Euler-rank homomorphism and identifies the actual first-stage zeroth homotopy group injectively with its kernel, giving the unique lift. [[lem-author-ec13f1db88a5-global-picard-projection]] identifies the actual $q_1$ map with determinant on that rank-zero space.

[F2] [[lem-author-ec13f1db88a5-perfect-determinant]] supplies the natural homomorphism $\det_X$ on all perfect classes, agreeing with exterior determinant on bundles. [[prop-motivic-weight-one]] supplies the natural isomorphism $\gamma_X$. [[lem-author-ec13f1db88a5-bundle-comparison]] matches actual and virtual bundle first classes.

[F3] A qcqs scheme is quasi-compact and quasi-separated as in [[math:def-quasi-compact-and-quasi-separated-scheme]]; quasi-compactness means every open cover has a finite subcover. Write $\operatorname{LC}(X,\mathbb Z)$ for the group of integer-valued functions constant on some neighbourhood of each point, with pointwise addition and pullback by composition. A subset is clopen when it and its complement are open. An $\mathcal O_X$-module is a sheaf with sectionwise module operations compatible with restriction, as in [[math:def-module-on-ringed-space]]. Compatible sections glue uniquely, including on the empty open set, by [[math:def-sheaf-on-topological-space]]. These same axioms glue compatible module maps by gluing the image of each section.

[F4] [[def-vector-bundle-classes]] defines bundles as finite locally free sheaves and their object classes $[E]$ in the specified perfect $K_0(X)$, under [A1]. [[thm-author-3a003d7b5208-nonconnective-k-zero-input]] supplies the natural object-class presentation of that $K_0$ by cofiber relations, on an equivalent small stable idempotent-complete perfect category. In particular the split sequence $E\to E\oplus F\to F$ gives $[E\oplus F]=[E]+[F]$. The cofiber of the split inclusion is $F$: the pushout $(E\oplus F)\sqcup_E0$ discards its $E$-summand, leaving $F$, by the direct-sum mapping property.

[F5] [[def-exterior-determinant-bundles]] supplies the Picard tensor law and the exterior determinant, including $\Lambda^0(0)=\mathcal O$ and the standard top wedge trivializing $\det(\mathcal O^n)$. Apply these on the open constant-rank pieces. For a scheme morphism $f:Y\to X$, [[math:ex-pullback-free-module]] supplies the canonical $f^*\mathcal O_X^n\cong\mathcal O_Y^n$, also for $n=0$ and on restricted open sources. The derived pullback of [[def-nonconnective-k-spectrum-interface]] on a locally free sheaf in degree zero is represented by these ordinary free pullbacks on its local charts.

[F6] [[def-motivic-filtration]] specifies the actual Elmanto–Morrow tower, with stage zero identified with $K$. The graded object and its projection are the cofiber construction of [[def-decreasing-filtered-spectrum]]; here $q_1:\operatorname{Fil}^1K\to\operatorname{gr}^1K$. The integral target groups have the definition of [[def-motivic-cohomology]]. The actual weight-one identification used to read $\pi_0q_1$ in $H^{2,1}_{\rm mot}$ is the one in [F1]–[F2], with the same field, sites and universes.

## External input
The degree-zero object-class presentation in [F4] is used through the declared K-zero supplier. Its source is [Kasprowski–Winges, §2.1 and the opening of §2.2](https://arxiv.org/pdf/1805.06175v2), recorded in reference 0. The category in [F4] satisfies its smallness, stability and idempotent-completeness hypotheses by the supplied perfect K-theory model. The rank-section construction and its application to the actual first layer below are local deductions, rather than imported proofs of this whole lemma.

## Proof
**Given:** A field $k$, a qcqs $k$-scheme $X$, Choice, the stated site-size and universe bounds, and $\alpha\in K_0(X)$ in the supplied perfect model.

**Goal:** Justify the definition on all classes and prove the formula.

1.1 For $r\in\operatorname{LC}(X,\mathbb Z)$, its value fibers $U_n=r^{-1}(n)$ are open, and their complements are unions of the other fibers, so they are clopen. They cover $X$ and have a finite subcover by [F3]; since they are disjoint, only finitely many are nonempty. For any clopen $U$, define an $\mathcal O_X$-module $E_U$ on an open $V\subseteq X$ by $E_U(V)=\mathcal O_X(V\cap U)$, with the usual restrictions and scalar action through $\mathcal O_X(V)\to\mathcal O_X(V\cap U)$. The sheaf and module axioms follow directly from [F3]. On $U$ it is $\mathcal O_U$ and on its open complement it is zero, hence it is finite locally free, with those ranks, by [F4]. Define $s_X(r)=\sum_{n:U_n\ne\varnothing}n[E_{U_n}]$ in the group of [F4]; negative integers mean group inverses. If $U$ is partitioned into finitely many disjoint clopen $V_j$, restriction gives an isomorphism $E_U\cong\bigoplus_j E_{V_j}$: a section over $V\cap U$ is uniquely its compatible family on the disjoint cover $V\cap V_j$, and finite products and finite sums of section modules coincide. Thus [F4] makes the class independent of such refinements. The common finite refinement by intersections of value fibers proves $s_X(r+t)=s_X(r)+s_X(t)$, and the zero coefficient gives $s_X(0)=0$. The local rank of $E_{U_n}$ and [F1] give $\operatorname{rank}s_X(r)=r$. For $f:Y\to X$, [F5] identifies the pullback of $E_U$ with $E_{f^{-1}U}$ on the disjoint open cover by $f^{-1}U$ and its complement, so these identifications glue uniquely by [F3]; [F4] then gives $f^*s_X(r)=s_Y(r\circ f)$. Finally the determinant of $E_U$ has the generator $1$ on $U$ and the empty-wedge generator on its complement by [F2] and [F5]. They glue to a global trivialization on this disjoint cover. The determinant homomorphism therefore gives $\det_Xs_X(r)=0$ in $\operatorname{Pic}(X)$, including negative coefficients. On empty $X$, the sum is empty and all these identities hold in the zero groups. This constructs the stated natural additive rank section without any global presentation of $\alpha$ by bundles. [A1, F1, F2, F3, F4, F5, construct]

2.1 The class $\alpha-s_X(r(\alpha))$ has rank zero by step 1.1. By [F1] it has the unique stated first-stage lift $\widetilde\alpha$. The inverse of the injective stage map onto its kernel is a natural group homomorphism: applying any pullback to the lift gives the unique lift of the pulled-back class, and adding lifts gives the unique lift of the sum. With [F6], the actual spectrum map $q_1$ and its weight-one identification therefore define the stated natural homomorphism $c_1^{\rm perf}$ without choosing a representative of $\alpha$. By [F1], its value is $\gamma_X(\det_X(\alpha-s_X(r(\alpha))))$. The determinant homomorphism of [F2] and its vanishing on the rank section in step 1.1 identify this with $\gamma_X(\det_X\alpha)$. On actual and virtual bundle classes, this is their existing first coefficient by [F2]. The comparison thus uses the actual EM projection and its original orientation, rather than defining a new map by the desired equality. [A1, F1, F2, F6, step 1.1] ∎
