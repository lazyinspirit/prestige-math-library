---
id: cex-n-times-z-is-not-normal-near-zero
kind: counterexample
title: "The family nz is not normal on any domain containing zero"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-normal-holomorphic-families-are-locally-bounded]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Statement refuted

The family $f_n(z)=nz$ is normal on every plane domain containing $0$.

## Facts & Assumptions

**Given:** A plane domain $\Omega$ containing $0$ and the functions $f_n(z)=nz$.

[L1] Normal holomorphic families are locally bounded ([[thm-normal-holomorphic-families-are-locally-bounded]]).

## Counterexample

**Proof technique:** direct.

1.1 Choosing a closed disc $\overline D(0,r)\subseteq\Omega$, the point $r/2$ satisfies $|f_n(r/2)|=nr/2\to\infty$. So the family is not locally bounded near the zero point. [given, choose, algebra]

2.1 Fact [L1] makes local boundedness necessary for normality, so this family is not normal on any domain containing $0$. [L1, given] ∎
