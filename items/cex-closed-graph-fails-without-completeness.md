---
id: cex-closed-graph-fails-without-completeness
kind: counterexample
title: "A closed everywhere-defined graph need not be bounded without completeness"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-open-mapping-fails-without-completeness, def-graph-of-a-linear-operator]
proof_strategy: direct
verification: {precheck: pass}
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Example 2.22", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---
## Statement refuted
Without completeness, a linear operator with closed everywhere-defined graph need not be bounded.
## Facts & Assumptions
**Given:** $I:(c_{00},\|\cdot\|_\infty)\to(c_{00},\|\cdot\|_1)$.
## Counterexample
**Proof technique:** direct.

1.1 The equal-coordinate vectors from [[cex-open-mapping-fails-without-completeness]] show that $I$ is unbounded. [given]

1.2 If $x_k\to x$ in sup norm and $x_k\to y$ in $\ell^1$ norm, then every coordinate converges to both $x_j$ and $y_j$, hence $x=y$. [given]

2.1 Thus the graph is closed in the product norm ([[def-graph-of-a-linear-operator]]), while step 1.1 shows the operator is unbounded. [step 1.1, step 1.2] ∎
