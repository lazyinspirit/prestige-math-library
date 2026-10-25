---
id: def-integral-intersection-lattice-of-a-simply-connected-four-manifold
kind: definition
title: Integral intersection lattice of a simply connected four-manifold
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-middle-dimensional-intersection-form
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: Theorem 1 and §I.2, printed pp. 280–282
---

## Definition

Let $X$ be a closed connected oriented smooth four-manifold. Its integral intersection lattice is the abelian group $L_X=H_2(X;\mathbb Z)/\operatorname{Tor}H_2(X;\mathbb Z)$ with the integer-valued symmetric bilinear pairing $Q_X(\bar x,\bar y)=\langle \operatorname{PD}^{-1}(x)\smile\operatorname{PD}^{-1}(y),[X]\rangle$. Here $\operatorname{Tor}$ is the subgroup of elements of finite order, $[X]\in H_4(X;\mathbb Z)$ is the orientation class, and $\operatorname{PD}:H^2(X;\mathbb Z)\to H_2(X;\mathbb Z)$ is the Poincaré duality isomorphism. The rank is $b_2(X)=\dim_{\mathbb Q}H_2(X;\mathbb Q)$. The lattice is positive definite when $Q_X(x,x)>0$ for every nonzero $x\in L_X$; it is unimodular when a Gram matrix in an integral basis has determinant $1$ or $-1$.

## Definition references

[[def-middle-dimensional-intersection-form|Integral middle-dimensional intersection pairing and orientation convention]]
