---
id: thm-linearity-of-improper-integrals
kind: theorem
title: "Linearity of convergent improper integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint, def-mixed-improper-integral,
       thm-linearity-of-the-integral, def-limits-at-infinity,
       def-one-sided-limits, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
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

[L2] Infinite and one-sided endpoint limits use the usual epsilon definitions ([[def-limits-at-infinity]], [[def-one-sided-limits]]).

[L3] Mixed convergence is defined separately on every singular piece ([[def-mixed-improper-integral]]).

## Proof

**Proof technique:** direct.

1.1 On every compact truncation, [L1] gives $\int(rf+sg)=r\int f+s\int g$. Let the two truncation integrals tend to $A$ and $B$. Given $\varepsilon>0$, [L2] makes their respective errors smaller than $\varepsilon/(2(1+|r|))$ and $\varepsilon/(2(1+|s|))$ sufficiently near the end. The triangle inequality then makes the error of the linear combination from $rA+sB$ smaller than $\varepsilon$. This proves the formula on every one-ended interval, including $r=0$ or $s=0$. [L1, L2]

2.1 For a mixed integral, apply step 1.1 to every separately convergent piece and then add the finitely many resulting identities as required by [L3]. No assertion is made when either side would contain an indeterminate difference of divergent quantities. [L3, step 1.1] ∎
