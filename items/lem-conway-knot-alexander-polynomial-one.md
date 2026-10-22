---
id: lem-conway-knot-alexander-polynomial-one
kind: lemma
title: "The Conway knot has normalized Alexander polynomial one"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - def-piccirillo-conway-pair
  - lem-conway-seifert-surface-and-matrix
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - cor-knot-alexander-normalization-symmetry-and-genus-bound
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Introduction, printed pp. 582–583 (PDF pp. 1–2); Alexander-polynomial-one scope"
    - title: "Freedman and Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/id/eprint/4789/2/FreedmanQuinn-TopologyOf4Manifolds-Reformatted2013.pdf"
      locator: "§11.9, Theorem 11.11 and proof, reformatted PDF pp. 238–239 (printed pp. 224–225); the Z-slice criterion in a contractible 4-manifold"
---

## Statement

Assume the Axiom of Choice. Let $\Delta_C^\#(t)$ be the unique unit associate
of the knot Alexander generator that is symmetric under $t\mapsto t^{-1}$
and has $\Delta_C^\#(1)=1$. Then
$$\Delta_C^\#(t)=1.$$

## Statement references

[Piccirillo, Introduction](https://arxiv.org/pdf/1808.02923)

[Freedman–Quinn, Theorem 11.11](https://archive.mpim-bonn.mpg.de/id/eprint/4789/2/FreedmanQuinn-TopologyOf4Manifolds-Reformatted2013.pdf)

## Facts & Assumptions

**Given:** Full AC and the fixed Conway diagram and Alexander-polynomial normalization.

[A1] The Axiom of Choice, written AC, is [[def-axiom-of-choice]]. It supplies countable choice through [[thm-choice-implies-dependent-implies-countable-choice]].

[F1] [[lem-conway-seifert-surface-and-matrix]] constructs the actual embedded disk-and-band surface and an integral homology basis for the selected Conway diagram with the displayed matrix $V$, by a direct diagram transcription, local push-off counts and an explicit unimodular basis change.

[F2] [[thm-seifert-determinant-is-the-knot-alexander-polynomial]] identifies the normalized Alexander polynomial with the determinant of a Seifert matrix up to a unit $\pm t^m$ in $\mathbb Z[t,t^{-1}]$.

[F3] [[cor-knot-alexander-normalization-symmetry-and-genus-bound]]: every knot Alexander generator has a unique symmetric unit associate taking value $1$ at $t=1$.

## Proof

**Proof technique:** direct.

1.1 Let $V$ be the matrix in [F1] and form $A(t)=V-tV^T$. Fraction-free Bareiss elimination uses, at stage $k$, the update $$ a_{ij}^{(k+1)}= \frac{a_{kk}^{(k)}a_{ij}^{(k)}-a_{ik}^{(k)}a_{kj}^{(k)}} {a_{k-1,k-1}^{(k-1)}}\qquad (i,j>k), $$ with initial divisor $1$. The successive pivots are $$ t-1,\quad 1-t+t^2,\quad -t+t^2,\quad t^2,\quad t-t^2+t^3-t^4,\quad t-2t^2+3t^3-2t^4+t^5. $$ At the seventh pivot exchange rows $7$ and $8$ once; the pivot is $t^2-t^3+t^4$ and the final Bareiss entry is $-t^4$. The one row exchange reverses the determinant sign, so $\det A(t)=t^4$. The recurrence has exact polynomial divisions at every stage; the finite pivot and exact-division certificate is recorded in the batch contract. [F1, algebra]

2.1 The monomial $t^4$ is a unit in $\mathbb Z[t,t^{-1}]$. By [F2], the Alexander generator is associated to $1$. The polynomial $1$ is symmetric and takes value $1$ at $t=1$, so uniqueness in [F3] gives $\Delta_C^\#(t)=1$. [A1, F2, F3, step 1.1, algebra] ∎
