---
id: def-intersection-lattice-of-a-four-manifold-with-boundary
kind: definition
title: Intersection lattice of a four-manifold with rational-homology-sphere boundary
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-integral-intersection-lattice-of-a-simply-connected-four-manifold
  - thm-poincare-lefschetz-duality
  - def-axiom-of-choice
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
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: §3.3, Poincaré–Lefschetz duality for manifolds with boundary and cup-product pairing, printed pp. 252–255
---

## Definition

Assume the Axiom of Choice. Let $W$ be a compact connected oriented smooth four-manifold whose boundary $M$ is a rational homology three-sphere, meaning $H_*(M;\mathbb Q)\cong H_*(S^3;\mathbb Q)$. The boundary intersection lattice has underlying group $L_W=H_2(W;\mathbb Z)/\operatorname{Tor}H_2(W;\mathbb Z)$. Poincaré–Lefschetz duality identifies each $x\in H_2(W;\mathbb Z)$ with a class $\alpha_x\in H^2(W,M;\mathbb Z)$. Define $Q_W(\bar x,\bar y)=\langle\alpha_x\smile\alpha_y,[W,M]\rangle$, where $\smile$ is the relative cup product and $[W,M]\in H_4(W,M;\mathbb Z)$ is the relative orientation class; equivalently, this is the signed intersection number of interior two-cycle representatives. Its rank is $b_2(W)=\dim_{\mathbb Q}H_2(W;\mathbb Q)$. A nondegenerate positive-definite $Q_W$ is called a positive-definite filling lattice. It is not required to be unimodular; the boundary linking form can make its determinant have absolute value greater than one.

## Definition references

[[def-integral-intersection-lattice-of-a-simply-connected-four-manifold|Integral intersection pairing convention on a closed four-manifold]]

[[thm-poincare-lefschetz-duality|Poincaré–Lefschetz duality for an oriented manifold with boundary]]

