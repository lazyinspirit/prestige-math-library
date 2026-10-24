---
id: lem-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-simply-connected
kind: lemma
title: "Milnor sphere bundles are simply connected"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-milnor-sphere-bundle-m-h-j, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-higher-dimensional-spheres-are-simply-connected, cor-euclidean-spheres-are-path-connected, thm-numerable-fiber-bundles-are-hurewicz-fibrations, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 2
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 402-403, the sphere bundle S^3 -> M_{h,j} -> S^4 and its simple connectivity"
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 4.2, the long exact homotopy sequence of a fibration, printed pp. 376-378"
---

## Statement

Assume the Axiom of Choice as inherited from the bundle-to-fibration supplier.
For all integers $h,j$, the Milnor sphere bundle $M_{h,j}$ of
[[def-milnor-sphere-bundle-m-h-j]] is path-connected and simply connected; in
particular this holds for the bundles with Euler number $\pm1$ used to
construct homotopy seven-spheres.

## Facts & Assumptions

**Given:** Integers $h,j$ and the smooth $S^3$-bundle $S^3\to M_{h,j}\to S^4$ of [[def-milnor-sphere-bundle-m-h-j]].

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L1] The two product charts of this bundle admit a support-subordinate finite partition on $S^4$ (choose radial chart cutoffs and normalize their positive sum), so it is numerable. Under AC it is a Hurewicz, hence Serre, fibration ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]), so there is a long exact sequence of homotopy groups $\cdots\to\pi_1(S^3)\to\pi_1(M_{h,j})\to\pi_1(S^4)\to\pi_0(S^3)\to\pi_0(M_{h,j})\to\pi_0(S^4)\to0$ ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[L2] For $n\ge2$ the sphere $S^n$ is path-connected ([[cor-euclidean-spheres-are-path-connected]]) and simply connected ([[thm-higher-dimensional-spheres-are-simply-connected]]); in particular $\pi_1(S^3)=\pi_1(S^4)=0$ and $\pi_0(S^3)=\pi_0(S^4)=0$, the latter meaning a single path component.

## Proof

**Proof technique:** direct.

1.1 By [L1] the fibration $S^3\to M_{h,j}\to S^4$ gives the exact segment $\pi_1(S^3)\to\pi_1(M_{h,j})\to\pi_1(S^4)$; both outer groups vanish by [L2], so exactness forces $\pi_1(M_{h,j})=0$. [L1, L2, A1, given]

2.1 Exactness of the pointed-set component sequence shows that every component of $M_{h,j}$ mapping to the base component lies in the image of $\pi_0(S^3)$. The base has only that component, and the fibre has only one component, so $M_{h,j}$ has only one path component. [step 1.1, L1, L2]

3.1 A path-connected space with trivial fundamental group is simply connected, so $M_{h,j}$ is simply connected; nothing in the argument depends on $h+j$, so it applies in particular when the Euler number is $\pm1$. [step 2.1] ∎
