---
id: thm-neural-operator-discretization-invariance
kind: theorem
title: "Neural operators are discretization-invariant"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-discretization-invariant-operator-family
  - def-neural-operator
  - alg-neural-operator-mesh-discretization
  - lem-neural-operator-kernel-riemann-sums-uniform-on-compact-inputs
provenance:
  statement: literature-derived
  proof: incomplete
proof_strategy: direct
verification:
  precheck: blocked
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "Theorem 8, Appendix E, PDF pp. 92–93"
---

## Statement

Let $D\subset\mathbb R^d$ and $D'\subset\mathbb R^{d'}$ be bounded domains. Let $A$ and $U$ be real Banach function spaces on $D$ and $D'$ that embed continuously into $C(\bar D)$ and $C(\bar D')$, respectively. Let $\sigma_1,\sigma_2,\sigma_3:\mathbb R\to\mathbb R$ be continuous, and let $G:A\to U$ be any $N$-layer neural operator in the function-space class defined by the neural-operator construction. Then compatible finite-dimensional Riemann-sum realizations of $G$, using the same parameters at each refinement, converge to $G$ uniformly on every compact input set in the output-space norm $U$.

## Statement references
[Kovachki et al., Theorem 8 and Appendix E: discretization-invariant neural-operator realizations](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** The domains, function spaces, continuous activations, operator class, and compatible Riemann-sum refinements in the Statement.

[F1] The kernel-layer Riemann sums converge uniformly in the output variable for compact subsets of continuous inputs in the supremum norm (local result [[lem-neural-operator-kernel-riemann-sums-uniform-on-compact-inputs]]).

[F2] The finite-dimensional realizations use the mesh, tags, cell weights, and shared continuum parameters specified in [[alg-neural-operator-mesh-discretization]].

## Proof

**Proof strategy:** layerwise compact-uniform approximation and composition.

1.1 For the first integral layer, [F1] gives uniform convergence in $C(\bar D')$ on compact input sets after the required Riemann sums are substituted. [given, F1]

1.2 To continue through the composition, one must establish that each discretized intermediate layer maps the relevant compact input sets into bounded subsets of the correct Banach space, and that the quadrature error tends to zero in the norm of the next layer's input space. The mesh definition [F2] supplies compatible tags, cell weights, and shared parameters, but it does not supply those norm bounds. The proved local lemma [F1] gives only the supremum norm; continuous embedding $U\hookrightarrow C(\bar D')$ does not reverse that estimate. [given, F1, F2]

## Unresolved proof obligation

The full claim is not proved here. The missing step is an induction in the stated $A$ and $U$ norms for all admissible Banach function spaces, including the composition and final-layer bounds from Appendix E. The compact-uniform $C^0$ kernel estimate alone does not establish those $U$-norm estimates. This item is escalated until that induction is written and checked.
