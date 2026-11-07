---
id: lem-finite-hypergraph-bad-atom-mass-bound
kind: lemma
title: "Bad hypergraph atoms have small total mass"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-good-atoms-in-a-finite-hypergraph-hierarchy
  - def-finite-coordinate-conditional-expectation-energy-and-discrepancy
  - thm-finite-hypergraph-regularity-in-all-face-orders
  - lem-finite-coordinate-projection-and-energy-pythagoras
  - thm-finite-union-bound
  - thm-markov-inequality
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "§3 Lemma 3.3 and complete proof, printed pp. 16–17; the fixed-power threshold form is proved locally."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 461–462 (PDF pp. 481–482), contextual higher-order framework only; the atom-mass estimate is reconstructed locally."
---

## Statement

Fix a face $e\in\mathcal H_j$ and an atom $A_e$ of its coarse algebra $\mathcal B_e$. Let $B_{e,A_e}$ be the union of all intersections $\bigcap_{f\subsetneq e}A_f$, with $A_f$ ranging over atoms of the corresponding coarse face algebras, for which either the conditional-density inequality or the localized-energy inequality in the good-atom definition fails. Then
$$\mathbb E(1_{A_e}1_{B_{e,A_e}}) \le\frac1{L(M_j)}+\frac1{F(M_j)}.$$
Consequently, summing this bound over atoms of a fixed coarse face algebra costs at most its number of atoms times the displayed bound.

## Statement references

[Tao, §3 Lemma 3.3](https://arxiv.org/pdf/math/0503572v2)

[Tao and Van H. Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** A regularity hierarchy, a good-atom definition with thresholds $L(M_j)$ and $F(M_j)$, a face $e\in\mathcal H_j$, and a coarse atom $A_e$.

[F1] Goodness requires conditional density at least $1/L(M_j)$ and localized squared coarse-to-fine error at most $1/F(M_j)$ times the lower-support mass ([[def-good-atoms-in-a-finite-hypergraph-hierarchy]]).

[F2] The regularity hierarchy bounds each event energy gap by $1/F(M_j)^2$ ([[thm-finite-hypergraph-regularity-in-all-face-orders]]).

[F3] Conditional averaging preserves means, and the squared coarse-to-fine conditional-average difference equals the energy gap ([[lem-finite-coordinate-projection-and-energy-pythagoras]]).

[F4] The finite union bound controls the mass of a union by the sum of the masses ([[thm-finite-union-bound]]).

[F5] On a finite probability space, a nonnegative random variable $Z$ satisfies $\mathbb P(Z\ge t)\le\mathbb E[Z]/t$ for $t>0$ ([[thm-markov-inequality]]).

## Proof

1.1 The intersections of the selected facet atoms partition the skeleton support into disjoint pieces. On each piece where the conditional density fails, its mass inside $A_e$ is less than $1/L(M_j)$ times the piece's mass. Summing over these disjoint facet pieces gives total $A_e$-mass at most $1/L(M_j)$; empty skeleton pieces contribute zero. [given, F1, algebra]

1.2 Let $\mathcal D=\bigvee_{f\subsetneq e}\mathcal B_f$ and let $Z=\mathbb E(|b_e|^2\mid\mathcal D)$. Every nonempty lower-atom intersection $T=\bigcap_{f\subsetneq e}A_f$ is an atom of $\mathcal D$, so $Z$ is the average of $|b_e|^2$ on $T$; empty intersections have zero mass and cannot fail the test. Thus the localized-energy test fails exactly on those nonempty $T$ where $Z>1/F(M_j)$. Markov's inequality, mean preservation and [F2] give $\mathbb P(Z>1/F(M_j))\le F(M_j)\mathbb E[Z]=F(M_j)\mathbb E(|b_e|^2)\le1/F(M_j)$. [F1, F2, F3, F5]

2.1 The union of density-failing and energy-failing pieces has $A_e$-mass at most the sum of the two bounds from steps 1.1 and 1.2, by [F4]. This is the claimed estimate; summing it over atoms gives the stated atom-count cost. [step 1.1, step 1.2, F4, algebra] ∎
