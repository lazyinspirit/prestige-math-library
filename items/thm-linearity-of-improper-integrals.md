---
id: thm-linearity-of-improper-integrals
kind: theorem
title: "Linearity of convergent improper integrals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint, def-mixed-improper-integral,
       thm-linearity-of-the-integral, thm-algebra-of-function-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 8.3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

If the improper integrals of $f$ and $g$ converge over the same one-ended interval and $r,s\in\mathbb R$, then
$$\int(rf+sg)=r\int f+s\int g.$$
The same formula holds for mixed improper integrals when every singular-end piece of both integrals converges separately.

## Facts & Assumptions

**Given:** Convergent improper integrals of $f$ and $g$ on the indicated domain, and scalars $r,s$.

[L1] Proper Riemann integration is linear ([[thm-linearity-of-the-integral]]).

[L2] Finite linear combinations pass through finite real limits ([[thm-algebra-of-function-limits]]).

[L3] Mixed convergence is defined separately on every singular piece ([[def-mixed-improper-integral]]).

## Proof

**Proof technique:** direct.

1.1 On every compact truncation, [L1] gives $\int(rf+sg)=r\int f+s\int g$. Taking the appropriate one-sided or infinite limit and applying [L2] proves the formula on a one-ended interval. [L1, L2]

2.1 For a mixed integral, apply step 1.1 to every separately convergent piece and then add the finitely many resulting identities as required by [L3]. No assertion is made when either side would contain an indeterminate difference of divergent quantities. [L3, step 1.1] ∎
