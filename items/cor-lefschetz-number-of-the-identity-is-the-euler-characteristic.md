---
id: cor-lefschetz-number-of-the-identity-is-the-euler-characteristic
kind: corollary
title: "The Lefschetz number of the identity is the Euler characteristic"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-algebraic-lefschetz-number, def-euler-characteristic-of-a-compact-manifold, prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions, cor-lefschetz-number-is-homotopy-invariant, thm-lefschetz-hopf-index-formula, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed p. 120 (L(identity)=I(diagonal,diagonal)=Euler characteristic)"
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §6, printed p. 15 (if f is homotopic to the identity then L(f)=chi(M))"
dependency_level: 12
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $M$ be a closed smooth $n$-manifold.
Then
$$L(\mathrm{id}_M)=\chi(M),$$
the Euler characteristic of [[def-euler-characteristic-of-a-compact-manifold]].
Consequently every smooth self-map of a closed smooth manifold homotopic to the
identity has Lefschetz number $\chi(M)$.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$.

[F1] $L(f)=\sum_{i=0}^n(-1)^i\operatorname{tr}(f_*:H_i(M;\mathbb Q)\to H_i(M;\mathbb Q))$, and the identity map induces the identity on homology ([[def-algebraic-lefschetz-number]]).

[F2] $\chi(M)=\sum_{i=0}^n(-1)^i\dim_{\mathbb Q}H_i(M;\mathbb Q)$, a finite sum because the rational homology is finite-dimensional and vanishes above degree $n$ ([[def-euler-characteristic-of-a-compact-manifold]], [[prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions]] clause (i)).

[L1] Homotopic maps have equal Lefschetz numbers ([[cor-lefschetz-number-is-homotopy-invariant]]), and on the scope of [[thm-lefschetz-hopf-index-formula]] the Lefschetz number equals the geometric index sum of a smooth map with isolated fixed points.

## Proof

1.1 The identity's traces. By [F1] the induced map $(\mathrm{id}_M)_*$ is the identity of $H_i(M;\mathbb Q)$ for each $i$, so $\operatorname{tr}((\mathrm{id}_M)_*)=\dim_{\mathbb Q}H_i(M;\mathbb Q)$; therefore $L(\mathrm{id}_M)=\sum_i(-1)^i\dim_{\mathbb Q}H_i(M;\mathbb Q)$, the same finite alternating sum that defines $\chi(M)$ in [F2]. Hence $L(\mathrm{id}_M)=\chi(M)$. [given, F1, F2]

2.1 Maps homotopic to the identity. If $f$ is smooth and homotopic to $\mathrm{id}_M$, then $L(f)=L(\mathrm{id}_M)=\chi(M)$ by [L1] and step 1.1. When in addition $\dim M\ge1$ and $f$ has isolated fixed points, the same number is the geometric index sum $I(f)$, which is how the identity's Lefschetz number is recovered geometrically by a small perturbation of the identity. For nonempty $M$ with $n\ge1$, every point is fixed by $\mathrm{id}_M$ and no point is isolated, so its geometric index sum is not defined directly. If $M=\varnothing$ and $n\ge1$, the identity has no fixed points and $I(\mathrm{id}_M)=0=L(\mathrm{id}_M)=\chi(M)$. [step 1.1, L1] ∎
