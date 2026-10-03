---
id: thm-projectives-in-category-o-have-verma-flags
kind: theorem
title: "Projectives in category O have finite Verma flags"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-verma-flag-and-its-multiplicities
  - lem-direct-summands-of-verma-filtered-objects-are-verma-filtered
  - lem-finite-dimensional-tensors-reach-every-block-simple
  - lem-finite-length-objects-decompose-into-indecomposables
  - lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags
  - prop-projective-covers-in-o-are-indecomposable-and-unique
  - thm-category-o-has-enough-projectives
  - thm-every-category-o-object-has-finite-length
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9, Theorem 1.4 and its proof"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
      locator: "§1, Theorem 1.4 with proof via Lemmas 1.5-1.7, printed pp. 1-3 (full text read at harvest)"
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Sec. 20.2"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§20.2, standard filtrations of projectives, printed pp. 101-103 (full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every projective object
of $\mathcal O$ has a finite Verma flag
([[def-verma-flag-and-its-multiplicities]]).

More precisely, each projective cover $P(\mu)$ produced by
[[thm-category-o-has-enough-projectives]] is a direct summand of the
projective object $\operatorname{pr}_C(E\otimes M(\lambda))$ of
[[lem-finite-dimensional-tensors-reach-every-block-simple]], which is a
direct summand of $E\otimes M(\lambda)$; a general projective object has
finite length, hence is a finite direct sum of indecomposable projectives,
each of which is a projective cover of its simple head.

## Facts & Assumptions

**Given:** The Axiom of Choice, the projective covers $P(\mu)\twoheadrightarrow L(\mu)$ produced by the enough-projectives theorem, and an arbitrary projective object $P\in\mathcal O$.

[F1] The cover $P(\mu)$ is (isomorphic to) a direct summand of the projective object $\operatorname{pr}_C(E\otimes M(\lambda))$ of [[lem-finite-dimensional-tensors-reach-every-block-simple]], and $\operatorname{pr}_C(E\otimes M(\lambda))$ is a direct summand of $E\otimes M(\lambda)$ in the block decomposition ([[lem-finite-dimensional-tensors-reach-every-block-simple]], [[thm-category-o-has-enough-projectives]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]]).

[F2] $E\otimes M(\lambda)$ is Verma-filtered, and every direct summand of a Verma-filtered object of $\mathcal O$ is Verma-filtered ([[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]], [[lem-direct-summands-of-verma-filtered-objects-are-verma-filtered]]).

[F3] Every object of $\mathcal O$ has finite length and is a finite direct sum of indecomposable objects; an indecomposable projective is a projective cover of its simple head ([[thm-every-category-o-object-has-finite-length]], [[lem-finite-length-objects-decompose-into-indecomposables]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]]).

## Proof

**Proof technique:** direct: each projective cover is a direct summand of a tensored Verma, and a general projective splits into finitely many such covers.

1.1 By [F1] each $P(\mu)$ is a direct summand of $\operatorname{pr}_C(E\otimes M(\lambda))$, which is in turn a direct summand of $E\otimes M(\lambda)$. [F1, given]

2.1 By [F2] the object $E\otimes M(\lambda)$ is Verma-filtered; both $\operatorname{pr}_C(E\otimes M(\lambda))$ and its direct summand $P(\mu)$ are direct summands of a Verma-filtered object and hence Verma-filtered by [F2]. So every projective cover $P(\mu)$ has a finite Verma flag. [F2, step 1.1]

3.1 Let $P\in\mathcal O$ be projective. By [F3] it has finite length and decomposes as a finite direct sum $P=P_1\oplus\cdots\oplus P_n$ of indecomposables; each $P_i$ is projective and indecomposable, hence a projective cover of its simple head $L(\mu_i)$ by [F3], hence isomorphic to $P(\mu_i)$ by uniqueness of projective covers, so each $P_i$ is Verma-filtered by step 2.1. A finite direct sum of Verma-filtered objects is Verma-filtered, by concatenating the flags along the summands; hence $P$ has a finite Verma flag. [F3, step 2.1] ∎

## Remarks

The statement of this theorem is only the existence of a finite flag; the
sharper restriction on the labels occurring in a flag of $P(\lambda)$ is proved
in [[cor-projective-standard-labels-lie-above-the-head]], after BGG
reciprocity, so that the proof here does not assume reciprocity.
