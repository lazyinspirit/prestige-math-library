---
id: lem-locally-bounded-holomorphic-families-are-locally-equicontinuous
kind: lemma
title: "Locally bounded holomorphic families are locally equicontinuous"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-locally-bounded-family-on-a-plane-domain, def-locally-equicontinuous-family-on-a-plane-domain, lem-cauchy-estimates-on-concentric-subdiscs, thm-cauchy-integral-formula-circle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Every locally bounded family of holomorphic functions on a plane domain is
locally equicontinuous.

## Facts & Assumptions

**Given:** A locally bounded family $\mathcal F$ of holomorphic functions on a plane domain $\Omega$.

[L1] Cauchy estimates bound derivatives on a smaller concentric disc from a common bound on a larger one ([[lem-cauchy-estimates-on-concentric-subdiscs]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in\Omega$. Local boundedness gives a closed disc $\overline D(a,R)\subseteq\Omega$ and a common bound $|f|\le M$ there for every $f\in\mathcal F$. Applying [L1] to the inner disc $\overline D(a,R/2)$ gives the uniform derivative bound $|f'(z)|\le4M/R$ on that smaller disc. [L1, given]

2.1 The smaller closed disc is convex, so integrating $f'$ along the line segment from $w$ to $z$ yields $|f(z)-f(w)|\le(4M/R)|z-w|$ for every $f\in\mathcal F$. This is the local equicontinuity estimate. [given, algebra] ∎
