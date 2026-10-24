---
id: thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra
kind: theorem
title: "Cartan subalgebras are conjugate in a complex semisimple Lie algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. Any two Cartan subalgebras of a finite-dimensional complex semisimple Lie algebra are conjugate under the identity component of the automorphism group of $\mathfrak g$.

## Facts & Assumptions

**Given:** The Axiom of Choice and two Cartan subalgebras $\mathfrak h_1,\mathfrak h_2$ of a finite-dimensional complex semisimple Lie algebra $\mathfrak g$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]].

[F1] Under [A1], two Cartan subalgebras are conjugate by an inner automorphism in the connected adjoint group ([[thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate]]).

## Proof

**Proof technique:** direct.

1.1 By [A1, F1], an element of the connected adjoint group carries $\mathfrak h_1$ to $\mathfrak h_2$ by its adjoint automorphism. [A1, F1]

2.1 The continuous image of a connected group is connected and contains the identity. Therefore its adjoint automorphisms lie in the identity component of $\operatorname{Aut}(\mathfrak g)$, proving the claim. [step 1.1] ∎
