---
id: thm-critical-rank-cancellation
kind: theorem
title: Critical-rank cancellation used in the article
status: draft
domain: mathematics
deps:
  - def-vector-bundle-classes
  - lem-k-zero-stable-equivalence
  - lem-author-7dc5154c7a6f-cancellation-interface
  - thm-author-7dc5154c7a6f-suslin-module-input
  - math:def-axiom-of-choice
dependency_roles:
  def-vector-bundle-classes: mathematical-premise
  lem-k-zero-stable-equivalence: mathematical-premise
  lem-author-7dc5154c7a6f-cancellation-interface: mathematical-premise
  thm-author-7dc5154c7a6f-suslin-module-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: pp. 2, 12, 17; Sus77
    - title: Manoj Kumar Keshari, Cancellation problem for projective modules over
        affine algebras
      url: https://arxiv.org/pdf/0708.2961v1
      locator: "p. 1, Introduction: definition of cancellative and Theorem 1.1(i); p.
        16, reference [20]"
      statement: "Over a finite-type affine algebra A of dimension d over an
        algebraically closed field, every finite projective A-module of constant
        rank at least d is cancellative: a common finite free stabilization can
        be removed."
      hypotheses: A commutative unital affine algebra over an algebraically closed
        field of arbitrary characteristic, finite Krull dimension d; finitely
        generated projective modules of constant rank r >= d. No smoothness,
        normality, reducedness or invertibility of d! is assumed in Theorem
        1.1(i).
      reading_limits: Read the p. 1 definition and Theorem 1.1(i), and p. 16
        bibliography [20], in the downloaded arXiv v1 PDF. Also read indexed
        text of the author-hosted
        https://www.math.iitb.ac.in/~keshari/laurent.pdf introduction, whose
        Suslin reference is numbered [21]. Direct downloads of that host timed
        out. Suslin 1977 original proof was not read or reconstructed; the exact
        theorem is imported from this authoritative subsequent statement.
dependency_level: 14
---

## Statement
Assume AC and the universes of the article\'s K-theory construction. Let $k$ be an algebraically closed field of arbitrary characteristic and $X=\operatorname{Spec}A$ a nonempty affine finite-type $k$-scheme of dimension $d$. For any two vector bundles $E,F$ of the same constant rank $r\geq d$, $E\cong F$ if and only if $[E]=[F]$ in the article\'s perfect spectral $K_0(X)$. In particular this applies to rank $d$ on every normal affine surface or threefold in the article. Here $[E]$ is the perfect-K-theory object class, and the affine comparison identifies it with the vector-bundle Grothendieck class; no coherent-sheaf G-zero identification is used.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The precise module cancellation input applies in every characteristic to this affine algebra and ranks at least d. [[thm-author-7dc5154c7a6f-suslin-module-input]]

[F2] The local application lemma proves the K-zero/isomorphism equivalence whenever the corresponding constant-rank projective modules are cancellative. [[lem-author-7dc5154c7a6f-cancellation-interface]]

[F3] The affine perfect/bundle comparison and stable-equivalence supplier fix the actual class map. [[def-vector-bundle-classes]], [[lem-k-zero-stable-equivalence]]

## Proof

1.1 A finite-type algebra over a field is noetherian, so the local affine K-zero application applies to $X$. The imported cancellation theorem makes every constant-rank-$r$ projective module cancellative since $r\geq d$. Thus [F2] gives the desired equivalence for $E,F$, using the class convention in [F3]. [F1, F2, F3, given]

2.1 A normal affine surface or threefold in the article is an affine finite-type scheme over the same algebraically closed field, and its critical rank is respectively $d=2$ or $d=3$. Substitution $r=d$ yields exactly the original assertion. Isomorphic bundles always have equal object classes, so both directions have been retained. [F1, F2, step 1.1] ∎

## Source notes
The original article invokes Sus77 on pp. 2, 12 and 17 (https://arxiv.org/abs/2610.22679v1). Its rank-d normal settings are preserved as special cases of the broader precise sourced theorem. The proof is a local application of an imported theorem; no proof acceptance is asserted.
