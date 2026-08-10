---
id: cor-abel-test-for-improper-integrals
kind: corollary
title: "Abel's test for improper integrals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dirichlet-test-for-improper-integrals,
       thm-linearity-of-improper-integrals,
       def-improper-integral-at-infinity, def-monotone-function,
       def-limits-at-infinity, def-complete-ordered-field,
       def-bounded-set,
       cor-integrability-of-absolute-values-products-and-lattice-operations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Theorem 8.3.8"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Suppose $\int_a^\infty f$ converges and $g:[a,\infty)\to\mathbb R$ is bounded, monotone, and locally Riemann integrable. Then $\int_a^\infty fg$ converges. The analogous assertion holds at every other one-sided singular end.

## Facts & Assumptions

**Given:** A convergent improper integral of $f$ and a bounded monotone multiplier $g$.

[L1] A bounded monotone function has a finite limit at the relevant end ([[def-complete-ordered-field]], [[def-bounded-set]], [[def-monotone-function]]).

[L2] Convergence of $\int f$ makes its truncation primitive bounded.

[L3] Dirichlet's test applies to a nonnegative monotone multiplier tending to zero ([[thm-dirichlet-test-for-improper-integrals]]).

[L4] Convergent improper integrals are linear ([[thm-linearity-of-improper-integrals]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $g(x)\to L$ for some finite $L$. If $g$ is nonincreasing, put $h=g-L$; if it is nondecreasing, put $h=L-g$. In either case $h\ge0$, $h$ is nonincreasing toward the singular end, and $h\to0$. [L1]

2.1 The primitive of $f$ is bounded by [L2], so [L3] makes $\int fh$ converge. Since $fg=Lf\pm fh$, linearity [L4] and convergence of $\int f$ prove convergence of $\int fg$. The oriented endpoint variants are identical. [L2, L3, L4] ∎
