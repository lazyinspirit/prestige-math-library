---
id: ex-the-exhaustion-metric-on-the-unit-disc
kind: example
title: "The exhaustion metric is explicit on the unit disc"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compact-exhaustion-metric-on-function-space, lem-canonical-compact-exhaustion-of-a-plane-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
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

## Example

For the unit disc $\mathbb D$, the canonical exhaustion is
$$K_n=\{z\in\mathbb D:|z|\le1-1/n\}\qquad(n\ge1),$$
so $K_1=\{0\}$ and for the functions $f(z)=z$, $g(z)=0$ the exhaustion metric is
$$d_K(f,g)=\sum_{n\ge1}2^{-n}(1-1/n).$$

## Facts & Assumptions

**Given:** The unit disc $\mathbb D$ and the functions $f(z)=z$ and $g(z)=0$.

[L1] The exhaustion metric is defined from the canonical compact exhaustion ([[def-compact-exhaustion-metric-on-function-space]], [[lem-canonical-compact-exhaustion-of-a-plane-domain]]).

## Verification

**Proof technique:** direct.

1.1 In $\mathbb D$, the boundary distance is $1-|z|$, so the canonical condition $\operatorname{dist}(z,\partial\mathbb D)\ge1/n$ is exactly $|z|\le1-1/n$. Thus $K_n=\{|z|\le1-1/n\}$ and in particular $K_1=\{0\}$. [L1, given, algebra]

2.1 On $K_n$, the difference $|f(z)-g(z)|=|z|$ has supremum $1-1/n$, which is already at most $1$. Substituting into the definition from [L1] gives $d_K(f,g)=\sum_{n\ge1}2^{-n}(1-1/n)$. [L1, given, algebra] ∎
