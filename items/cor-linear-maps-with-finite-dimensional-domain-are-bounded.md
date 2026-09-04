---
id: cor-linear-maps-with-finite-dimensional-domain-are-bounded
kind: corollary
title: "A linear map from a finite-dimensional normed space is bounded"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-coordinate-map-for-a-finite-dimensional-normed-space, def-linear-map,
       def-bounded-linear-operator, def-linear-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-29
---

## Statement

Let $X$ and $Y$ be normed spaces over the same scalar field, and assume $X$
admits an ordered basis of finite length. Then every linear map $S:X\to Y$ is a
bounded linear operator in the sense of [[def-bounded-linear-operator]].

## Facts & Assumptions

**Given:** Normed spaces $X$ and $Y$, a linear map $S:X\to Y$, and an ordered
basis $e:n\to X$.

[L1] The basis map $T:\mathbb K^n\to X$ is a topological isomorphism
([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

[L2] A bounded linear operator is a linear map satisfying one global norm bound
([[def-bounded-linear-operator]]).

[L3] Linearity means $S(au+bv)=aS(u)+bS(v)$
([[def-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 Let $T:\mathbb K^n\to X$ be the basis map from [L1]. Since $T^{-1}$ is bounded, there is $B>0$ such that $$\|T^{-1}x\|_1\le B\|x\| \qquad (x\in X).$$ [L1, choose]

1.2 Put $M:=\sum_{j<n}\|S(e_j)\|$, a finite real. If $x=\sum_{j<n}a_je_j=T(a_0,\dots,a_{n-1})$, then by [L3] $$Sx=\sum_{j<n}a_jS(e_j),$$ so $$\|Sx\|\le\sum_{j<n}|a_j|\,\|S(e_j)\|\le M\sum_{j<n}|a_j|=M\|T^{-1}x\|_1.$$ [L3, given, algebra]

2.1 Combining steps 1.1 and 1.2 gives $$\|Sx\|\le MB\|x\| \qquad (x\in X).$$ Therefore $S$ is bounded, and with [L3] this makes $S$ a bounded linear operator by [L2]. [L2, L3, step 1.1, step 1.2] ∎
