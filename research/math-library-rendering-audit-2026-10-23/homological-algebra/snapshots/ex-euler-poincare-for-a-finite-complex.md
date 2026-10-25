---
id: ex-euler-poincare-for-a-finite-complex
kind: example
title: "Euler-Poincare for a finite complex"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-euler-poincare-formula-for-finite-free-complexes,
       thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: frontier-24
---

## Example

Consider the split exact three-term complex
$$0\to\mathbb Z\xrightarrow{i}\mathbb Z\oplus\mathbb Z\xrightarrow{p}\mathbb Z\to0,$$
with $i(a)=(a,0)$ and $p(a,b)=b$. Then
$$\chi(C)=1-2+1=0=\sum_n(-1)^n\operatorname{rank}(H_n(C)).$$

## Facts & Assumptions

**Given:** The split exact complex just displayed.

[L1] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

[L2] The Euler-Poincare formula holds for bounded complexes of finite-rank free abelian groups with finite-rank free homology ([[thm-euler-poincare-formula-for-finite-free-complexes]]).

## Verification

**Proof technique:** direct.

1.1 The complex is split exact, hence acyclic, so every homology group is zero. Its chain groups have ranks $1$, $2$, and $1$. Therefore $$\chi(C)=1-2+1=0,$$ while the alternating sum of homology ranks is also $0$. [L1, given, algebra]

2.1 This agrees with the theorem [L2], so the example is a direct Euler-Poincare computation in a finite free complex. [L2, step 1.1] ∎
