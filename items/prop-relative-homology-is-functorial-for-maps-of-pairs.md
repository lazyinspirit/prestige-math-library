---
id: prop-relative-homology-is-functorial-for-maps-of-pairs
kind: proposition
title: "Functoriality of relative homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-singular-homology, def-induced-singular-chain-map, lem-induced-singular-chain-maps-commute-with-boundaries]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

A continuous map of pairs $f:(X,A)\to(Y,B)$, meaning $f(A)\subseteq B$,
induces $f_*:H_n(X,A;G)\to H_n(Y,B;G)$ for every $n$. Identity maps and
composites induce identity maps and composites.

## Facts & Assumptions

**Given:** A continuous $f:X\to Y$ with $f(A)\subseteq B$.

## Proof

**Proof technique:** direct.

1.1 The induced singular-chain map sends $C_n(A;G)$ into $C_n(B;G)$, hence $[c]\mapsto[f_\#c]$ defines a quotient-chain map. [given, construct]

2.1 It commutes with the quotient boundaries, so it maps cycles to cycles and boundaries to boundaries and hence descends to homology. The chain-level identity and composition laws persist after quotienting. [step 1.1, algebra] ∎
