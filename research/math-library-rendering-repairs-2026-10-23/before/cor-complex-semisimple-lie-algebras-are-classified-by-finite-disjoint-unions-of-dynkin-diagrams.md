---
id: cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams
kind: corollary
title: Semisimple algebras and disjoint unions of diagrams
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cartan-killing-classification-of-complex-simple-lie-algebras, thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals, prop-ideals-and-quotients-of-semisimple-lie-algebras, def-axiom-of-choice]
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
verification:
  audited: 2026-09-22
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

[L1] A finite-dimensional complex semisimple Lie algebra is a finite direct sum of simple ideals ([[thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]]).

[L2] Finite-dimensional complex simple Lie algebras are classified up to isomorphism by the connected finite-type Dynkin diagrams ([[thm-cartan-killing-classification-of-complex-simple-lie-algebras]]).

[L3] Relative to any decomposition of a semisimple algebra into simple ideals, every ideal is the sum of a subfamily of the simple factors ([[prop-ideals-and-quotients-of-semisimple-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 The simple-ideal decomposition is unique up to order. Indeed, given decompositions $\mathfrak g=\bigoplus_{i=1}^m\mathfrak g_i=\bigoplus_{j=1}^n\mathfrak h_j$, [L3] writes each ideal $\mathfrak g_i$ as a sum of a subfamily of the $\mathfrak h_j$. Simplicity and nonzeroness force that subfamily to consist of exactly one factor, so $\mathfrak g_i=\mathfrak h_j$ for a unique $j$. Distinct $i$ give distinct $j$, and every $\mathfrak h_j$ occurs because the $\mathfrak g_i$ span $\mathfrak g$. Thus $m=n$ and the two families agree after a permutation. [L1, L3, algebra]

1.2 Conversely, a finite multiset of connected finite-type diagrams determines a semisimple algebra up to isomorphism: take the direct sum of the simple Lie algebras attached to the diagrams by [L2]; any two semisimple algebras with the same multiset of simple-ideal diagrams are isomorphic factor by factor by [L2]. [L1, L2, algebra]

2.1 By [L1] write $\mathfrak g=\mathfrak g_1\oplus\cdots\oplus\mathfrak g_m$ as a direct sum of simple ideals. Each $\mathfrak g_j$ is a finite-dimensional complex simple Lie algebra, so by [L2] it has a connected finite-type Dynkin diagram, well defined up to isomorphism, and step 1.1 makes the resulting multiset depend only on the isomorphism class of $\mathfrak g$. [L1, L2, step 1.1, algebra]

3.1 Steps 1.2 and 2.1 give inverse assignments between isomorphism classes of finite-dimensional complex semisimple Lie algebras and finite multisets of connected finite-type Dynkin diagrams, which is the asserted classification with multiplicity. [step 1.2, step 2.1, A1, algebra] ∎
