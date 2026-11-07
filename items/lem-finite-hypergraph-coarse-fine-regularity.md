---
id: lem-finite-hypergraph-coarse-fine-regularity
kind: lemma
title: "Coarse and fine regularity from bounded energy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - lem-finite-hypergraph-randomness-structure-dichotomy
  - lem-finite-coordinate-projection-and-energy-pythagoras
  - def-finite-partite-hypergraph-system-and-coordinate-algebras
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "§2 Lemma 2.6 and its complete iteration, printed pp. 11–12."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 456–460 (PDF pp. 476–480), energy-increment iteration framework; the all-order recurrence is proved locally."
---

## Statement

Let $\mathcal H_d$ be a finite $d$-uniform pattern and let $\mathcal B_e\subseteq\mathcal A_e$ be finite top algebras of complexity at most an integer $m\ge1$. Let $F:\mathbb N_{\ge1}\to\mathbb N_{\ge1}$ be increasing with $F(n)\ge n+1$, and let $\epsilon>0$. There is an integer $M\ge F(m)$, bounded by the explicit finite recurrence in the Proof, and for each $f\in\partial\mathcal H_d$ there are finite algebras
$$\mathcal C_f\subseteq\mathcal C'_f\subseteq\mathcal A_f$$
such that $\operatorname{complex}(\mathcal C_f)\le M$, every top event $E\in\mathcal B_e$ satisfies
$$\mathcal E_{\bigvee_{f\in\partial e}\mathcal C'_f}(E)-\mathcal E_{\bigvee_{f\in\partial e}\mathcal C_f}(E)\le\epsilon^2,$$
and
$$\Delta_e(E\mid(\mathcal C'_f)_{f\in\partial e})\le\frac1{F(M)}.$$
No complexity bound on the fine algebras is asserted.

## Statement references

[Tao, §2 Lemma 2.6](https://arxiv.org/pdf/math/0503572v2)

[Tao and Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** A finite $d$-uniform pattern, top face algebras of complexity at most an integer $m\ge1$, an increasing integer growth function $F(n)\ge n+1$, and $\epsilon>0$.

[F1] The dichotomy returns either a fine refinement with all discrepancies at most a chosen $\delta$ and all energy gains at most $\epsilon^2$, or a refinement with one gain at least $\epsilon^2$; its complexity increase is finite and explicit ([[lem-finite-hypergraph-randomness-structure-dichotomy]]).

[F2] Every top-event energy lies in $[0,1]$ ([[lem-finite-coordinate-projection-and-energy-pythagoras]]).

[F3] Each top algebra of complexity at most $m$ has at most $2^{2^m}$ events ([[lem-finite-coordinate-projection-and-energy-pythagoras]]).

## Proof

1.1 Put $T=|\mathcal H_d|2^{2^m}$ and initialize every coarse algebra $\mathcal C_f^{(0)}$ to the trivial algebra. Let $M_0=F(m)$. At round $r$, let $M_r$ bound the current coarse complexities and be at least $F(m)$, set $\delta_r=1/F(M_r)$, and apply [F1] with this tolerance. If the randomness alternative occurs, retain the current coarse algebras and its fine refinements, and stop. If the structure alternative occurs, replace each coarse algebra by the returned refinement; its complexity is at most $M_{r+1}=M_r+\lceil T F(M_r)^2\rceil+1$, because the dichotomy's finite iteration bound is at most $\lceil T/\delta_r^2\rceil+1$. [given, F1, F3, construct]

2.1 Each structure round increases the sum of the energies of the finite family of all top events by at least $\epsilon^2$. That sum is between $0$ and $T$ by [F2] and [F3], so there are at most $\lceil T/\epsilon^2\rceil$ structure rounds. Define the finite recurrence by iterating $M_{r+1}$ from $M_0$ for $R=\lceil T/\epsilon^2\rceil+1$ rounds. A randomness round must occur by then. [step 1.1, F2, F3, algebra]

3.1 At the terminal randomness round, the coarse complexities are bounded by its current $M_r$, the energy gaps are at most $\epsilon^2$, and the discrepancies are at most $\delta_r=1/F(M_r)$. Taking $M=M_r$ proves the Statement and gives the stated recurrence bound. If $\mathcal H_d$ is empty, all conditions are vacuous and the trivial face algebras with $M=F(m)$ suffice. [step 1.1, step 2.1, F1, algebra] ∎
