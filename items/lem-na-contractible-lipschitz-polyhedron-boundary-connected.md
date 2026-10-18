---
id: lem-na-contractible-lipschitz-polyhedron-boundary-connected
kind: lemma
title: The boundary of a bounded contractible Lipschitz polyhedron is connected
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    thm-topological-collaring-for-manifold-boundaries,
    thm-poincare-lefschetz-duality,
    thm-long-exact-sequence-of-a-pair-in-singular-homology,
    thm-homotopic-maps-induce-equal-maps-in-singular-cohomology,
    def-singular-chain-complex-and-singular-homology,
    def-singular-cohomology-with-coefficients,
    def-axiom-of-choice,
    thm-heine-borel-rn
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ralf Hiptmair and Clemens Pechstein, Regular Decompositions of Vector
        Fields—Continuous, Discrete, and Structure-Preserving
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf
      locator: Section 2.2, second Betti number and boundary components; the full
        topological derivation is local below.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume AC. A nonempty bounded contractible Lipschitz polyhedron $\Omega\subset\mathbb R^3$ has nonempty connected boundary. In particular the connected-boundary clause of the regular-decomposition theorem follows from the domain assumptions in the discrete-compactness theorem.

## Facts & Assumptions


**Given:** AC and $\Omega$. Use real coefficients in all homology groups.

[F1] [[thm-topological-collaring-for-manifold-boundaries]] gives a compact topological manifold with boundary a collar and proves its interior inclusion a homotopy equivalence.

[F2] [[thm-poincare-lefschetz-duality]] says $H^p(M;\mathbb R)\cong H_{3-p}(M,\partial M;\mathbb R)$ for a compact oriented three-manifold. Its AC assumption is retained.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] supplies exactness, [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] supplies cohomology homotopy invariance, and the chain/cochain conventions are [[def-singular-chain-complex-and-singular-homology]] and [[def-singular-cohomology-with-coefficients]]. The needed degree-zero and point calculations are given below for the actual real coefficients; no integral-coefficient-only or B-page example is imported as a supplier.

## Proof


1.1 Put $M=\overline\Omega$. It is compact by boundedness and closedness. Near each boundary point a Lipschitz graph chart $x_3=\phi(x')$ straightens $M$ by the explicit homeomorphism $(x',x_3)\mapsto(x',x_3-\phi(x'))$ to a closed halfspace neighborhood. Interior points use Euclidean balls. These charts show that $M$ is a Hausdorff second-countable three-manifold with topological boundary exactly $\partial\Omega$ and interior exactly $\Omega$. Its orientation is the standard Euclidean orientation on its interior; this is precisely the orientation convention for manifolds with boundary in [F2]. By [F1], $\Omega\hookrightarrow M$ is a homotopy equivalence. Contractibility of $\Omega$, [F3], and factorization through a point give $H^2(M;\mathbb R)=0$: the point has one singular simplex in each degree, and its real cochain differentials are successively zero and identity, so its positive cohomology is zero. Also $M$ is path connected: its interior is path connected by contractibility, and a half-chart path joins any boundary point to its interior. The augmentation identifies $H_0(M;\mathbb R)$ with $\mathbb R$, because any difference of points is the boundary of a path and every zero-chain of coefficient sum zero is a finite linear combination of such differences. The boundary is nonempty: a ray from any interior point eventually leaves the bounded set and its first exit point is a boundary point. [F1, F3, construct, F2]

2.1 By [F2], $H_1(M,\partial M;\mathbb R)=0$. The exact sequence in [F3] then makes $H_0(\partial M;\mathbb R)\to H_0(M;\mathbb R)$ injective. The boundary is a two-manifold by the graph charts, hence locally path connected, so its connected components are path components. If there were two, choose one point in each. Their difference is nonzero in $H_0(\partial M;\mathbb R)$: the sum of coefficients on the first path component defines a linear functional on zero-chains which kills every one-simplex boundary, yet sends this difference to one. Its image in $H_0(M;\mathbb R)$ is zero since the two points are joined by a path in $M$, contradicting injectivity. Therefore the nonempty boundary is connected. No finite-element incidence matrix is used to infer this continuum topological claim. [F2, F3, step 1.1, algebra] ∎
