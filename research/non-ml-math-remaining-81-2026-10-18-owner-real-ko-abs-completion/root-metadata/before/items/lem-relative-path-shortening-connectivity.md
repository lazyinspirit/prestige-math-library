---
id: lem-relative-path-shortening-connectivity
kind: lemma
title: Relative path-shortening connectivity from index bounds
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- lem-symmetric-pole-polygons-have-clean-energy-critical-manifolds
- lem-relative-morse-bott-crossing-by-negative-normal-bundles
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory
      (2021), expanded local argument
    url: https://arxiv.org/pdf/2011.14368v3
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 2
---

## Statement

Assume AC. Let $P$ be $\mathrm{SO}(p)$ or a Clifford centriole with normalized trace metric and indicated antipodal pole pair in one component. In a fixed endpoint-path component suppose every geodesic which is not energy-minimizing in that component has index at least $d+1$. Then the inclusion of constant-speed minimizing geodesics into the $H^1$ path space, and into the continuous compact-open path space, is $d$-connected: every map of a finite CW pair $(K,A)$ with $\dim K\le d$, taking $A$ to the minima, deforms relative to $A$ into the minima.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed; it implies the countable-choice assumptions in the differential-geometric suppliers. No stronger choice principle is introduced. ([[def-axiom-of-choice]]).

[F1] Bounded short-edge polygon energies have compact sublevels, finitely many clean critical manifolds, and the same geodesic index as the path energy. ([[lem-symmetric-pole-polygons-have-clean-energy-critical-manifolds]]).

[F2] Critical manifolds with negative normal rank greater than the parameter dimension can be bypassed relatively; a small clean minimum neighborhood retracts onto its minimum locus. ([[lem-relative-morse-bott-crossing-by-negative-normal-bundles]]).

## Proof

**Proof technique:** direct construction.

**Given:** The data and hypotheses in the Statement.

1.1 For a continuous compact family $K\to C^0([0,1],P)$, joint continuity on $K\times[0,1]$ gives a uniform mesh whose edges lie in convex balls. Replace each edge by its unique shortest geodesic and interpolate pointwise using the short geodesic joining the old and new values. With a sufficiently fine mesh this fixes all constant-speed minimizing geodesics, so fixes the prescribed map on $A$. The resulting polygon energy has a finite bound $c$ by compactness. Refine the mesh by a multiple until $n>c/r^2$, where $r$ is a convexity radius. This refinement changes neither the polygon paths nor their energy, and places the family in the compact polygon sublevel of [F1]. [A1, F1, construct]


2.1 The same operations preserve $H^1$ and depend continuously in its topology. On a convex coordinate ball they are compositions with smooth maps whose first two derivatives are bounded on a compact neighborhood. The one-dimensional estimate $\|u\|_{C^0}\le C\|u\|_{H^1}$ and the chain rule give continuity: the derivative difference is bounded by a constant times the $H^1$ difference plus the $C^0$ difference times a bounded $L^2$ derivative. The estimate follows by writing $u(t)=u(s)+\int_s^t u'$ and choosing $s$ with $|u(s)|\le\|u\|_{L^2}$. Compact $H^1$ families therefore have a uniform convex mesh. On an interval of length $1/n$, Cauchy–Schwarz gives $n\operatorname{dist}(x_{j-1},x_j)^2\le\int|\gamma'|^2$, so their polygon energies stay bounded. [step 1.1, algebra]


3.1 Apply [F1] and [F2] in increasing order of the finitely many critical values below $c$, with regular levels between them. Every nonminimum handle has negative rank at least $d+1$, so the family can bypass it relative to $A$. It reaches a small minimum neighborhood, whose normal contraction takes it to the minimum locus and fixes $A$. The endpoint path component and its minimum energy are retained throughout. This proves the claimed finite-CW relative connectivity in both topologies, without any assertion of a global deformation retraction or continuously convergent infinite-time flow. [F1, F2, step 1.1, step 2.1, construct] ∎
