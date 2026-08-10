---
id: cor-limit-comparison-test-for-improper-integrals
kind: corollary
title: "Limit comparison for positive improper integrals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-comparison-test-for-improper-integrals, def-limits-at-infinity,
       def-one-sided-limits, lem-sign-preservation-near-a-limit,
       lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Theorem 3.4.7"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $f,g\ge0$ eventually toward a singular end, with $g>0$ there, and suppose
$$\lim\frac{f(x)}{g(x)}=L$$
at that end for a finite $L>0$. Then the improper integrals of $f$ and $g$ either both converge or both diverge. The statement applies to infinite and finite one-sided endpoints.

If $L=0$, convergence of $\int g$ still implies convergence of $\int f$; if the ratio tends to $+\infty$, convergence of $\int f$ implies convergence of $\int g$.

## Facts & Assumptions

**Given:** Eventually positive functions with the stated quotient limit.

[L1] A function with positive limit is eventually trapped between positive bounds around that limit ([[lem-sign-preservation-near-a-limit]]).

[L2] Eventual pointwise comparison transfers convergence ([[thm-comparison-test-for-improper-integrals]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], tolerance $L/2$ gives $L/2<f/g<3L/2$ sufficiently near the singular end. Thus $(L/2)g\le f\le(3L/2)g$. Applying [L2] in both directions proves the equivalence. [L1, L2]

2.1 If $L=0$, eventually $f/g\le1$, so $f\le g$. If $f/g\to+\infty$, eventually $g\le f$. The one-way conclusions again follow from [L2]. [L2] ∎
