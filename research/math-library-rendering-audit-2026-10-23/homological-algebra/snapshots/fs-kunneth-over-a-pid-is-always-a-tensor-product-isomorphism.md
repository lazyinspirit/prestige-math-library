---
id: fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism
title: "Kunneth over a PID is not always a tensor-product isomorphism"
kind: false-statement
status: published
origin: pipeline
deps: []
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

The assertion that Kunneth over a PID has no Tor correction is false.

## Refutation

**Given:** two copies $C,D$ of the two-term free complex
$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to0$.

1.1 Both $C$ and $D$ have $H_0\cong\mathbb Z/2$ and $H_1=0$. The total tensor complex has groups $\mathbb Z$ in degree two, $\mathbb Z^2$ in degree one, and $\mathbb Z$ in degree zero, with differentials $d_2(k)=(-2k,2k)$ and $d_1(a,b)=2(a+b)$. [given, algebra]

2.1 Thus $\ker d_1=\{(k,-k):k\in\mathbb Z\}$ and $H_1(C\otimes_{\mathbb Z}D)=\ker d_1/\operatorname{im}d_2\cong\mathbb Z/2$. But $\bigoplus_{p+q=1}H_pC\otimes_{\mathbb Z}H_qD=0$, so the cross product cannot be a tensor-product isomorphism in degree one. [step 1.1, algebra] ∎
