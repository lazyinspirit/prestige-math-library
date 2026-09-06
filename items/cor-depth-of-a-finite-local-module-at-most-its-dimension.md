---
id: cor-depth-of-a-finite-local-module-at-most-its-dimension
title: A finite local module has depth at most its dimension
kind: corollary
status: draft
origin: pipeline
deps: [lem-depth-at-a-prime-bounded-by-local-dimension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

If $(R,\mathfrak m)$ is Noetherian local and $0\ne M$ is a finite
$R$-module, then
$$\operatorname{depth}_R(M)\le\dim_R(M):=\dim\operatorname{Supp}_R(M).$$

## Facts & Assumptions

**Given:** $\mathfrak m\in\operatorname{Supp}_R(M)$ because $M\ne0$ is finite.

## Proof

**Proof technique:** direct.

1.1 Apply `lem-depth-at-a-prime-bounded-by-local-dimension` at $\mathfrak p=\mathfrak m$. [given]

2.1 Localization at the maximal ideal changes neither $R$, $M$, nor the support dimension, giving the displayed inequality. [step 1.1, algebra] ∎
