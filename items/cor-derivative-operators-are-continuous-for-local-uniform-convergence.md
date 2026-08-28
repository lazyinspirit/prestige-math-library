---
id: cor-derivative-operators-are-continuous-for-local-uniform-convergence
kind: corollary
title: "Every derivative operator is continuous for locally uniform convergence on holomorphic functions"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-local-uniform-convergence-dictionary-on-plane-domains, thm-weierstrass-convergence-holomorphic-functions]
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

## Statement

For every natural number $k$, including $k=0$, the operator
$$D^k:H(\Omega)\to H(\Omega),\qquad D^k(f)=f^{(k)},$$
is continuous for local uniform convergence on a plane domain $\Omega$.

## Facts & Assumptions

**Given:** A sequence $f_n\to f$ locally uniformly in $H(\Omega)$.

[L1] A locally uniform limit of holomorphic functions is holomorphic, and every derivative order converges locally uniformly as well ([[thm-weierstrass-convergence-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Fact [L1] gives $f_n^{(k)}\to f^{(k)}$ locally uniformly on $\Omega$ for every natural $k$. [L1, given]

2.1 This is exactly continuity of the operator $D^k$, and the case $k=0$ is included because $D^0$ is the identity. [given] ∎
