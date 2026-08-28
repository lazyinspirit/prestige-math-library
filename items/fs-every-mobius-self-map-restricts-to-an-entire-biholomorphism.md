---
id: fs-every-mobius-self-map-restricts-to-an-entire-biholomorphism
kind: false-statement
title: "FALSE: every Möbius self-map of the Riemann sphere restricts to an entire biholomorphism of the complex plane"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-entire-biholomorphisms-are-affine, thm-mobius-transformations-biholomorphic-sphere]
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
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

Every Möbius self-map of the Riemann sphere restricts to an entire biholomorphism
$\mathbb C\to\mathbb C$.

## Facts & Assumptions

**Given:** The Möbius map $M(z)=1/z$.

[L1] Every Möbius transformation is a sphere biholomorphism ([[thm-mobius-transformations-biholomorphic-sphere]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] makes $M(z)=1/z$ a biholomorphic self-map of the sphere. [L1, given]

2.1 As a sphere map, $M$ is defined at $0$ and satisfies $M(0)=\infty$. Therefore its restriction to the finite plane does not even take values in $\mathbb C$, so it is not an entire map $\mathbb C\to\mathbb C$, let alone an entire biholomorphism. [given] ∎
