---
id: "cex-chacon-correlation-subsequence-prevents-mixing"
kind: "counterexample"
title: "Chacon correlation subsequence prevents mixing"
deps: ["def-chacon-three-cut-one-spacer-towers", "lem-chacon-tower-height-correlations-obstruct-mixing", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Katok–Thouvenot Theorem 5.12 p.697; normalized fixed-level computation
      url: https://akatok.s3.amazonaws.com/pub/KT-spectral.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

The normalized Chacon transformation is strongly mixing.

## Facts & Assumptions

[F1] For Chacon, $A=[0,2/9)$ has measure $2/9$ and $\mu(A\cap T^{-h_r}A)\ge2/27$ for all $r\ge1$ [[lem-chacon-tower-height-correlations-obstruct-mixing]]. The heights satisfy $h_r=(3^{r+1}-1)/2\to\infty$ [[def-chacon-three-cut-one-spacer-towers]].

[F2] Assume AC, as in F1 [[def-axiom-of-choice]].

## Counterexample

**Given:** The Chacon probability system under AC.

1.1 Use the fixed pair $(A,A)$ from F1. The product of its measures is $(2/9)^2=4/81$, while its correlations at the stated heights are at least $2/27=6/81$. Their difference is therefore at least $6/81-4/81=2/81>0$ for every $r\ge1$. [F1, F2]

2.1 A sequence tending to zero must eventually have absolute value below $1/81$ on every subsequence whose indices tend to infinity. The correlations minus their product violate this necessary condition along $h_r$. Thus the strong-mixing conclusion refuted by F1 fails, without any need to assert that the correlations have a subsequential limit. The witness set is fixed, not chosen anew at each height. [F1, step 1.1] ∎
