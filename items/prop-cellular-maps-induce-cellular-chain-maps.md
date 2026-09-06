---
id: prop-cellular-maps-induce-cellular-chain-maps
kind: proposition
title: Cellular maps induce cellular chain maps
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cellular-homology, def-skeleta-cw-subcomplex-and-relative-cw-complex, thm-cellular-homology-computes-singular-homology]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

For every abelian group $G$, a cellular map $f:X\to Y$, meaning
$f(X^n)\subseteq Y^n$, induces a chain map
$C_*^{\mathrm{cell}}(X;G)\to C_*^{\mathrm{cell}}(Y;G)$ compatible with the
singular-homology maps.

## Facts & Assumptions

**Given:** An abelian group $G$ and a cellular map $f:X\to Y$.

## Proof

**Proof technique:** direct.

1.1 The restrictions $f:(X^n,X^{n-1})\to(Y^n,Y^{n-1})$ induce maps of relative groups, hence maps on cellular chains. [given]

2.1 Naturality of pair connecting maps makes these maps commute with the differentials. Under [[thm-cellular-homology-computes-singular-homology]], they are induced by the same maps of pairs, hence agree with $f_*$ on singular homology. [step 1.1] ∎
