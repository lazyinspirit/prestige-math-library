---
id: thm-author-3af31ead36fb-serre-module-input
kind: theorem
title: Serre free-summand theorem for modules
status: draft
domain: mathematics
external_input: true
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "The Stacks Project, More on Algebra, Section 15.129: Splitting off a
        free module"
      url: https://stacks.math.columbia.edu/tag/0GVC
      locator: Theorem 15.129.5 (tag 0GVC), statement and displayed proof
      statement: If the maximal spectrum of a ring is noetherian of finite dimension e
        and a finitely presented module has, at every maximal ideal, a free
        localized direct summand of rank greater than e, then the module is
        isomorphic to the ring plus a complementary module.
      hypotheses: Noetherian finite-dimensional maximal spectrum; finite presentation;
        the stated localized free-summand rank bound at every maximal ideal.
      reading_limits: The theorem statement and its short displayed proof were read.
        The proof invokes Proposition 15.129.4 and other lemmas; their proofs
        were not reconstructed here. The original Serre paper was not read.
dependency_level: 0
---

## Statement
Let $A$ be a commutative unital ring whose maximal spectrum $\Omega$, with its subspace topology, is noetherian of finite dimension $e$. Let $M$ be a finitely presented $A$-module. Suppose that for every maximal ideal $\mathfrak m$, the localization $M_{\mathfrak m}$ has a free direct summand of rank greater than $e$. Then $M\cong A\oplus M'$ for some $A$-module $M'$. The dimension of a topological space is the supremum of the lengths of strict chains of irreducible closed subsets.

## External input
This is Theorem 15.129.5 of the cited Stacks Project section. It is imported as an established result; its underlying dimension-avoidance argument is not reconstructed in this item.

## Facts & Assumptions

**Given:** A ring $A$, maximal spectrum $\Omega$, integer $e$, and module $M$ satisfying the hypotheses in the statement.

**Goal:** Obtain a free rank-one direct summand of $M$.

[F1] The cited external theorem asserts exactly this conclusion under the displayed hypotheses.

## Proof

1.1 The given noetherianity, finite dimension, finite presentation, and local free-summand bounds are precisely the hypotheses of the imported theorem. [F1, given]

2.1 Applying that theorem yields an $A$-module $M'$ and an isomorphism $M\cong A\oplus M'$. This is an application of the external input, not a local reconstruction of its proof. [F1, step 1.1] ∎
