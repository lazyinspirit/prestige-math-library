---
id: ex-sl2-reducible-and-generic-verma-modules
kind: example
title: "Reducible and generic sl2 Verma modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-verma-irreducibility-criterion-from-shapovalov-determinants, ex-sl2-verma-action-in-the-pbw-basis]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Mrudul Thatte, Category O: Verma's Thesis, Example 4.3"
      url: "https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf"
---

## Example

$M(\lambda)$ for $\mathfrak{sl}_2$ is reducible exactly when $\lambda=m\in\mathbb Z_{\ge0}$; then $f^{m+1}v_m$ is a singular vector.  When $\lambda\notin\mathbb Z_{\ge0}$ it is simple.

## Facts & Assumptions

**Given:** The criterion [[cor-verma-irreducibility-criterion-from-shapovalov-determinants]] and the action formula [[ex-sl2-verma-action-in-the-pbw-basis]].

## Verification

**Proof technique:** direct.

1.1 The only positive root has coroot pairing $\langle\lambda+\rho,\alpha^\vee\rangle=\lambda+1$, so the criterion says reducible precisely for $\lambda\in\mathbb Z_{\ge0}$. [given, algebra]

2.1 For $\lambda=m$, the action formula gives $ef^{m+1}v_m=(m+1)(m-(m+1)+1)f^mv_m=0$; its weight is below $m$, so it is the indicated nonzero singular vector. [given, algebra] ∎
