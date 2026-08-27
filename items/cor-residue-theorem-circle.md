---
id: cor-residue-theorem-circle
kind: corollary
title: "A positively oriented circle integral is the sum of the enclosed residues"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-residue-theorem-null-homologous-cycle,
       thm-winding-number-circle-traversed-k-times]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3, Corollary 2.3"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: null
---

## Statement

Let $C(a,r)$ be a positively oriented circle, and let $f$ be meromorphic on a
neighbourhood of the closed disc $\overline{D(a,r)}$ with no pole on the circle.
Then

$\int_{C(a,r)}f(z)\,dz=2\pi i\sum_{|b-a|<r}\operatorname{Res}(f,b),$

the sum being over the poles of $f$ inside the circle.

## Facts & Assumptions

**Given:** A positively oriented circle $C(a,r)$ and a meromorphic $f$ on a neighbourhood of $\overline{D(a,r)}$ with no pole on the circle.

[L1] The residue theorem holds for an admissible cycle ([[thm-residue-theorem-null-homologous-cycle]]).

[L2] A positively oriented circle has index $1$ at interior points and $0$ at exterior points ([[thm-winding-number-circle-traversed-k-times]]).

## Proof

**Proof technique:** direct.

1.1 The circle $C(a,r)$ is null-homologous in any open set containing the closed [given, L1] disc it bounds, so applies to it. [L1]

2.1 By [L2], every pole $b$ with $|b-a|<r$ contributes the factor [step 1.1, L2] ∎ $n(C(a,r),b)=1$, while every pole outside the circle contributes the factor $0$. Substituting those indices into gives the formula. [L1]
