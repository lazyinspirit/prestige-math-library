---
id: thm-dirichlet-divergence-transfer
kind: theorem
title: "A Dirichlet-type transfer criterion for divergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dirichlet-test-for-improper-integrals,
       def-improper-integral-at-infinity,
       def-absolute-and-conditional-improper-convergence,
       thm-algebra-of-derivatives, def-limits-at-infinity,
       def-continuity-real,
       cor-integrability-of-absolute-values-products-and-lattice-operations]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Exercise 8.3.17"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $u$ be continuous on $[a,\infty)$ and suppose $\int_a^\infty u$ diverges. Let $v>0$ be differentiable, satisfy $v(x)\to\infty$, and suppose
$$\int_a^\infty\frac{|v'(x)|}{v(x)^2}\,dx$$
converges. Then $\int_a^\infty u(x)v(x)\,dx$ diverges.

## Facts & Assumptions

**Given:** Functions $u,v$ satisfying the statement.

[L1] The reciprocal rule gives $(1/v)'=-v'/v^2$ ([[thm-algebra-of-derivatives]]).

[L2] The differentiable-multiplier clause of Dirichlet's test applies to a continuous function with bounded truncation primitive ([[thm-dirichlet-test-for-improper-integrals]]).

[L3] Convergence of an improper integral makes its truncation primitive bounded.

## Proof

**Proof technique:** contradiction.

1.1 Suppose $\int_a^\infty uv$ converges. Then its truncation primitive is bounded by [L3], and $uv$ is continuous. Put $g=1/v$. Positivity and $v\to\infty$ give $g\to0$, while [L1] and the hypothesis give absolute convergence of $\int g'$.

2.1 Apply [L2] with the continuous function $uv$ and multiplier $g$. It yields convergence of $\int(uv)g=\int u$, contradicting the hypothesis. Hence $\int uv$ diverges. ∎
