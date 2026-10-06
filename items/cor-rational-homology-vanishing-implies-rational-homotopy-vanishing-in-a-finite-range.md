---
id: cor-rational-homology-vanishing-implies-rational-homotopy-vanishing-in-a-finite-range
kind: corollary
title: "Finite-range rational homology vanishing implies rational homotopy vanishing"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - lem-rationalization-is-exact-and-commutes-with-singular-homology
  - lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy
  - def-axiom-of-choice
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem 4.32, printed pp.366–369; the finite torsion induction is proved in local the rational homology-vanishing corollary"
verification:
  precheck: pass
---

## Statement

Assume AC. If Y is simply connected and H_j(Y;Q)=0 for 0<j≤D, then π_j(Y)⊗Q=0 for 2≤j≤D.

## Facts & Assumptions

**Given:** AC; a simply connected space $Y$ and $D\ge2$ with $H_j(Y;\mathbb Q)=0$ for $0<j\le D$.

[F1] The rational first-Hurewicz-after-killing-lower-torsion-homotopy lemma identifies $\pi_j(Y)\otimes\mathbb Q$ with $H_j(Y;\mathbb Q)$ for $2\le j\le D$ when the lower homotopy groups are torsion, and rationalization is exact ([[lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy]], [[lem-rationalization-is-exact-and-commutes-with-singular-homology]]).

[F2] Torsion groups have vanishing rationalization by [F1]; AC is inherited from the rationalization and rational first-Hurewicz suppliers, including their Eilenberg–Mac Lane and representing-map choices. The weak CW approximation itself is choice-free ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Induct on j. For j=2, the rational first-Hurewicz lemma identifies rational homotopy with the zero rational homology. At the next j, all previous homotopy groups are torsion by the rationalization lemma, so the rational first-Hurewicz lemma again applies. [given, F1]

2.1 Finite induction proves the assertion. This implication is valid for arbitrary simply connected spaces because the rational first-Hurewicz lemma includes their weak CW replacement. [step 1.1, F1, F2] ∎
