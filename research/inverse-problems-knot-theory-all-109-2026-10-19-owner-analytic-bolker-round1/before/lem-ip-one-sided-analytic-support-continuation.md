---
id: lem-ip-one-sided-analytic-support-continuation
kind: lemma
title: "One-sided support forces its analytic conormal wavefront"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-distributions-conormal-kernels-and-cotangent-relation
  - def-ip-analytic-wavefront-fbi-transform
  - lem-ip-analytic-cutoff-sequence-and-fbi-invariance
  - def-real-analytic-germ-in-several-variables
  - def-support-of-a-distribution
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§6.1, Theorem 6.1, printed pp. 42–43; the proof is referred to Hörmander."
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§8, Theorems 8.2–8.3 and the complete flat-hyperplane proof, printed pp. 52–58."
proof_strategy: direct
---

## Statement

Let $X$ be a real-analytic manifold, let $x_0\in X$, and let $\Sigma$ be a $C^2$ hypersurface through $x_0$, meaning that in a smooth local chart it is the graph of a $C^2$ function with nonzero conormal $\nu_0\in T^*_{x_0}X$. Let $f\in\mathcal D'(X)$ vanish on one side of $\Sigma$ in a neighborhood of $x_0$, meaning that in such a chart its restriction is zero on either the strict epigraph or strict subgraph of that defining function. If either $(x_0,\nu_0)\notin\operatorname{WF}_A(f)$ or $(x_0,-\nu_0)\notin\operatorname{WF}_A(f)$, then $f=0$ in a neighborhood of $x_0$.

## Statement references

[[def-ip-analytic-wavefront-fbi-transform|Gaussian FBI definition of analytic wavefront]]

[[def-ip-distributions-conormal-kernels-and-cotangent-relation|Distribution support and local pairing]]

[[lem-ip-analytic-cutoff-sequence-and-fbi-invariance|Cutoff and chart/packet invariance]]

[[def-support-of-a-distribution|Distribution support]]

## Facts & Assumptions

**Given:** The real-analytic manifold $X$, a $C^2$ hypersurface $\Sigma$ through $x_0$, a distribution $f$, one-sided vanishing, and the stated analytic-wavefront hypothesis.

[F1] [[def-ip-distributions-conormal-kernels-and-cotangent-relation]]: distributions are continuous functionals on compactly supported smooth densities, so localization to a chart is defined.

[F2] [[def-support-of-a-distribution]]: the support is the complement of the largest open set on which the distribution vanishes.

## Proof

**Given:** The data in the statement.

The following steps prove the geometric reduction to a one-sided support-conormal assertion; they do not prove that analytic assertion.

1.1 If $f=0$ on some neighborhood of $x_0$, the conclusion already holds. Otherwise every neighborhood of $x_0$ meets $\operatorname{supp}f$, so $x_0\in\operatorname{supp}f$ by [F2]. [given, F2]

1.2 Choose a smooth chart in which $\Sigma=\{x_n=\psi(x')\}$, with $\psi$ of class $C^2$, and shrink it so the side on which $f$ vanishes is, for example, $x_n<\psi(x')$. Then the localized support is contained in the closed epigraph $x_n\ge\psi(x')$, and the graph conormal $dx_n-D\psi(x_0')\,dx'$ is a supporting conormal at the contact point. Reversing the inequality reverses this conormal and does not change the alternative in the statement. This proves the geometric reduction; the analytic support-conormal implication remains open in this carrier. [F1, F2, given] ∎

## Unresolved supplier check

The required one-sided support-conormal implication is not proved by steps 1.1–1.2. The full $C^2$ hypersurface claim is preserved above.

- Exact gap: prove that if a distribution is supported in the closure of one side of a $C^2$ graph and the contact point is in its support, then at least the corresponding oriented conormal belongs to $\operatorname{WF}_A(f)$, using the Gaussian FBI definition on a real-analytic manifold.
- Source status: MST §6.1, Theorem 6.1 states the full $C^2$ conclusion but sends its proof to Hörmander. Sjöstrand §8 proves the flat-hyperplane support theorem by a Gaussian FBI maximum-principle argument; the inspected proof does not establish the $C^2$ graph case or justify flattening it by an analytic coordinate change.
- Affected claim: this lemma, and therefore thm-ip-local-support-from-one-sided-vanishing.
- Proposed supplier and placement: a local C²-graph FBI/Laplace support estimate on the A page, immediately before this lemma, with a proof that controls the nonlinear graph error and both orientations. This supplier is not asserted or invented here.
