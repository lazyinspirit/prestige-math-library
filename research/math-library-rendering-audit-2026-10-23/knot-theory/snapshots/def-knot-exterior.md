---
id: def-knot-exterior
kind: definition
title: "Knot exterior"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-normal-and-conormal-bundles-of-an-embedded-submanifold
  - def-tubular-neighbourhood-of-an-embedded-submanifold
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Section 4.1, compact exterior convention"
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "Theorem 3.44 and Corollary 3.45, pp. 254-256"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Assume countable choice, as required for the smooth normal-bundle structure in the tubular-neighbourhood interface. Let $K:S^1\to S^3$ be a smooth oriented knot and let $\nu(K)=TS^3|_K/TK$ be its quotient normal bundle. Equip $\nu(K)$ with a chosen smooth fibre norm $\|\cdot\|$. Let $\Phi:\Omega\to S^3$ be a tubular-neighbourhood map from an open neighbourhood $\Omega$ of the zero section in $\nu(K)$ that restricts to the inclusion of $K$. For $\epsilon>0$, define the closed disk subbundle
$$
D_\epsilon\nu(K):=\{v\in\nu(K):\|v\|\le\epsilon\}.
$$
Choose $\epsilon$ so that $D_\epsilon\nu(K)\subseteq\Omega$, and set $N(K)=\Phi(D_\epsilon\nu(K))$. The fibre norm, tubular map, and radius are part of the chosen tubular data. The **exterior** of this chosen tube is
$$
E_K:=S^3\setminus\operatorname{int}_{S^3}N(K).
$$
Retain its boundary $T_K:=\partial E_K=\partial N(K)$, orient $E_K$ by restriction of the fixed orientation of $S^3$, and orient $T_K$ as the boundary of $E_K$. The choice of tubular map and radius is part of the input to this definition.

## Definition references

[Cattabriga and Francaviglia, §4.1](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Hatcher, Theorem 3.44 and Corollary 3.45](https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf)
