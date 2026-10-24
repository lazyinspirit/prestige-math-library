---
id: ex-zero-dimensional-rings-cohen-macaulay
title: A zero-dimensional local ring is Cohen--Macaulay
kind: example
status: published
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
---
## Example

Let $k$ be a field and $A=k[\varepsilon]/(\varepsilon^2)$. This nonreduced local Artinian ring
is Cohen--Macaulay of dimension $0$.

## Facts & Assumptions

**Given:** $k$ is a field and $\varepsilon^2=0$ in $A$.

[F1] A Noetherian local ring is Cohen--Macaulay when its depth equals its dimension ([[def-cohen-macaulay-local-module-and-ring]]).

## Verification

**Proof technique:** direct.

1.1 Every element is uniquely $a+b\varepsilon$ with $a,b\in k$. It is a unit when $a\ne0$, with inverse $a^{-1}-ba^{-2}\varepsilon$; when $a=0$ it lies in $(\varepsilon)$. Thus $(\varepsilon)$ is the unique maximal ideal. Any nonzero ideal contained in $(\varepsilon)$ contains $b\varepsilon$ for some $b\ne0$ and hence contains $\varepsilon$, so the ideals are exactly $0$, $(\varepsilon)$ and $A$. Consequently $A$ is Artinian and Noetherian, and it is nonreduced because $\varepsilon\ne0$ but $\varepsilon^2=0$. [given, algebra]

2.1 Every prime ideal contains the nilpotent element $\varepsilon$, so the unique prime is $(\varepsilon)$ and $\dim A=0$. Every element of $(\varepsilon)$ annihilates the nonzero element $\varepsilon$, hence no element of the maximal ideal is $A$-regular and $\operatorname{depth}A=0$. Therefore $A$ is Cohen--Macaulay by [F1]. [step 1.1, F1, algebra] ∎
