---
id: lem-uhlenbeck-compactness-and-removable-singularities
kind: lemma
title: Uhlenbeck compactness and removable singularities for self-dual connections
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-asd-moduli-fredholm-index-and-lattice-setup
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: §§III.1–III.2, printed pp. 295–302; compactness, bubbling, and removable singularities
---

## Statement

Let $X$ be a closed oriented Riemannian four-manifold, let $P$ be a fixed principal $SU(2)$-bundle with charge $k=-\langle c_2(P),[X]\rangle$, and let $(A_j)$ be smooth connections satisfying $F_{A_j}^-=0$ and $\sup_j\int_X|F_{A_j}|^2\,d\mathrm{vol}<\infty$. Then a subsequence, bundle isomorphisms, and a finite set $S\subset X$ exist such that the transported connections converge in local Sobolev gauge on compact subsets of $X\setminus S$ to a self-dual connection on a possibly lower-charge bundle of charge $k_\infty$. For each $p\in S$ there is a positive integer bubble charge $m_p$, and $k=k_\infty+\sum_{p\in S}m_p$. The limiting connection extends smoothly across every puncture after gauge transformation, and the compactified moduli space is obtained by adjoining the lower-charge limits together with the finite bubble points and their integer charge labels.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, §§III.1–III.2](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

**Given:** A fixed closed Riemannian four-manifold, fixed bundle, self-dual connections in the sign convention $F_A^-=0$, and a uniform curvature-energy bound.

[F1] The self-duality equation and curvature convention are fixed by the local gauge setup. [[def-asd-moduli-fredholm-index-and-lattice-setup]]

[L1] `lem-uhlenbeck-small-energy-gauge-and-bubble-compactness` is a proposed A-page supplier for gauge extraction, concentration bounds, and energy quantization; it is not currently supplied.

[L2] `lem-asd-removable-singularity-and-energy-quantization` is a proposed A-page supplier for smooth extension and charge accounting at each puncture; it is not currently supplied.

## Proof

**Given:** The sign-fixed equation [F1], fixed bundle, and curvature-energy bound in the statement.

1.1 The hypotheses place the sequence in the compact four-dimensional self-dual problem with bounded Yang–Mills energy. [given, F1]

1.2 The subsequence extraction and finite bubbling set require [L1], while smooth extension and exact charge loss require [L2]. These conclusions do not follow from the energy bound alone, so the proof stops before asserting compactness. [L1, L2, step 1.1]

## Unresolved proof obligations

The required proof includes the small-energy gauge theorem, curvature concentration estimates, extraction of finitely many bubbles, charge/energy quantization, convergence in gauges, and removable-singularity regularity. Donaldson's article explicitly builds on Uhlenbeck's results and its appendix is only an outline; no complete proof body or exact analytic sublemma suppliers exist in this batch. The statement is retained at the theorem interface needed for the compactification, but the item is escalated until the full compactness and extension argument is locally supplied.
