---
id: thm-author-4f716d60801a-affine-derived-input
kind: theorem
title: External affine derived and perfect comparisons
status: published
domain: mathematics
deps:
  - math:def-perfect-complex-over-a-ring
  - math:def-axiom-of-choice
dependency_roles:
  math:def-perfect-complex-over-a-ring: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: The Stacks Project, Derived Categories of Schemes
      url: https://stacks.math.columbia.edu/tag/06Z0
      locator: Lemma 36.3.5
      statement: For an affine scheme X = Spec(A), associated sheaf induces an
        equivalence from D(A) to the full derived subcategory with
        quasi-coherent cohomology, with inverse derived global sections.
      hypotheses: A is a commutative unital ring; complexes may be unbounded.
      reading_limits: Inspected the statement and the displayed beginning of the
        proof; the unbounded derived comparison and its prerequisites are
        imported, not reconstructed.
    - title: The Stacks Project, Derived Categories of Schemes
      url: https://stacks.math.columbia.edu/tag/08EB
      locator: Lemma 36.10.7
      statement: For X = Spec(A), the associated derived object of an A-complex is
        perfect exactly when the A-complex is perfect.
      hypotheses: A is a commutative unital ring; ring-perfect means having a bounded
        finitely generated projective representative in D(A).
      reading_limits: Read the statement and its short proof reference. The referenced
        pseudo-coherence and Tor-amplitude arguments are not reconstructed.
dependency_level: 0
---

## Statement
Assume the Axiom of Choice. Let $A$ be a commutative unital ring and $X=\operatorname{Spec}A$. Degreewise associated sheaf induces an equivalence $D(A)\to D_{\mathrm{qc}}(X)$, where the target is the full subcategory of $D(\mathcal O_X)$ whose cohomology sheaves are quasi-coherent. The associated object of an $A$-complex is locally perfect if and only if the complex is isomorphic in $D(A)$ to a bounded complex of finitely generated projective modules.

## Source contract
**Given:** $A$ and $X$ as above, and possibly unbounded complexes.

**Goal:** Record the classical affine comparison and its perfection criterion.

[F1] The cited Stacks Lemma 36.3.5 gives the derived equivalence.

[F2] The cited Stacks Lemma 36.10.7 gives the perfection criterion; the ring convention is that of [[math:def-perfect-complex-over-a-ring]].

## External input
Import [F1] and [F2] with the stated reading limits. This item asserts a classical derived equivalence; the enhanced comparison is established separately for the actual induced functor.
