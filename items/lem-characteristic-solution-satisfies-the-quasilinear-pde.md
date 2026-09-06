---
id: lem-characteristic-solution-satisfies-the-quasilinear-pde
kind: lemma
title: "The inverse-projected characteristic graph satisfies the quasilinear PDE"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-local-quasilinear-cauchy-problem-by-characteristics, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Statement

The function $u=Z\circ\Psi^{-1}$ constructed in
[[thm-local-quasilinear-cauchy-problem-by-characteristics]] satisfies
$a(x,u(x))\cdot Du(x)=b(x,u(x))$ on its local domain.

## Facts & Assumptions

**Given:** The local inverse-projected graph and its characteristic identities $X_s=a(X,Z)$ and $Z_s=b(X,Z)$.

## Proof

**Proof technique:** direct.

1.1 The identity $u(X(s,y))=Z(s,y)$ differentiates in $s$ to $Du(X)\cdot X_s=Z_s$. [given, algebra]

2.1 Substitute the two characteristic identities to get $Du(X)\cdot a(X,Z)=b(X,Z)$. [step 1.1, given, algebra]

3.1 Since $X=\Psi(s,y)$ ranges over the local domain and $Z=u(X)$, this is $a(x,u(x))\cdot Du(x)=b(x,u(x))$ for every $x$ there. [step 2.1, given] ∎
