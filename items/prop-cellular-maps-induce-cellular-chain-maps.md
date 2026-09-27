---
id: prop-cellular-maps-induce-cellular-chain-maps
kind: proposition
title: Cellular maps induce cellular chain maps
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cellular-homology, def-skeleta-cw-subcomplex-and-relative-cw-complex, thm-cellular-homology-computes-singular-homology, def-axiom-of-choice]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

For every abelian group $G$, a cellular map $f:X\to Y$, meaning
$f(X^n)\subseteq Y^n$, induces a chain map
$C_*^{\mathrm{cell}}(X;G)\to C_*^{\mathrm{cell}}(Y;G)$.
Assuming the Axiom of Choice, its map on cellular homology corresponds to
$f_*$ on singular homology under the natural cellular comparison for arbitrary
CW complexes. If $X$ and $Y$ are finite CW complexes, this compatibility holds
without the Axiom of Choice.

## Facts & Assumptions

**Given:** An abelian group $G$ and a cellular map $f:X\to Y$. Assume the
Axiom of Choice only for the arbitrary-CW singular-homology comparison.

## Proof

**Proof technique:** direct.

1.1 The restrictions $f:(X^n,X^{n-1})\to(Y^n,Y^{n-1})$ induce maps of relative groups, hence maps on cellular chains. [given]

2.1 Naturality of pair connecting maps makes these maps commute with the differentials, without a choice assumption. Under the Axiom of Choice, [[thm-cellular-homology-computes-singular-homology]] compares cellular and singular homology naturally for arbitrary CW complexes, so the induced maps agree with $f_*$. For finite $X$ and $Y$, use the finite skeletal exact-sequence calculations in that theorem, followed by finitely many skeletal stabilization isomorphisms: above the last cell dimension each space equals its final skeleton, so no infinite colimit is needed. Every pair and inclusion map in these finite calculations commutes with $f$, giving the same compatibility without choice. [step 1.1] ∎
