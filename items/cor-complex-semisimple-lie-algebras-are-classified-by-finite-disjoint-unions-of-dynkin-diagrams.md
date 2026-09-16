---
id: cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams
kind: corollary
title: Semisimple algebras and disjoint unions of diagrams
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cartan-killing-classification-of-complex-simple-lie-algebras, thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 23, Theorem 23.7 and its consequences"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §11, consequences of the classification, printed pp. 202-203"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Finite-dimensional complex semisimple Lie
algebras are classified up to isomorphism by finite disjoint unions of
connected finite-type Dynkin diagrams, with multiplicity: a semisimple
algebra corresponds to the multiset of connected diagrams of its simple
ideals.

## Facts & Assumptions

**Given:** A finite-dimensional complex semisimple Lie algebra $\mathfrak g$.

[A1] AC is assumed and is used through the Cartan-Killing classification ([[def-axiom-of-choice]]).

[L1] A finite-dimensional complex semisimple Lie algebra is the direct sum of its simple ideals, with the set of simple ideals uniquely determined up to order ([[thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]]).

[L2] Finite-dimensional complex simple Lie algebras are classified up to isomorphism by the connected finite-type Dynkin diagrams ([[thm-cartan-killing-classification-of-complex-simple-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] write $\mathfrak g=\mathfrak g_1\oplus\cdots\oplus\mathfrak g_m$ as the direct sum of its simple ideals; each $\mathfrak g_j$ is a finite-dimensional complex simple Lie algebra, so by [L2] it has a connected finite-type Dynkin diagram, well defined up to isomorphism, and the multiset of diagrams depends only on the isomorphism class of $\mathfrak g$ since the simple ideals are unique up to order. [L1, L2, algebra]

1.2 Conversely, a finite multiset of connected finite-type diagrams determines a semisimple algebra up to isomorphism: take the direct sum of the simple Lie algebras attached to the diagrams by [L2]; any two semisimple algebras with the same multiset of simple-ideal diagrams are isomorphic by [L1] and [L2]. [L1, L2, algebra]

2.1 Steps 1.1 and 1.2 give inverse assignments between isomorphism classes of finite-dimensional complex semisimple Lie algebras and finite multisets of connected finite-type Dynkin diagrams, which is the asserted classification with multiplicity. [step 1.1, step 1.2, A1, algebra] ∎
