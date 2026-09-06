---
id: def-depth-with-respect-to-an-ideal
title: Depth with respect to an ideal
kind: definition
status: draft
origin: pipeline
deps: [def-regular-sequence-on-a-module]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Definition

Let $R$ be a commutative ring, $I\subseteq R$ an ideal, and $M$ a finite
$R$-module. If $IM\ne M$, define
$$\operatorname{depth}_I(M)=\sup\{r\in\mathbf N : \text{there is an }M\text{-regular sequence of length }r\text{ in }I\}.$$ 
If $IM=M$, set $\operatorname{depth}_I(M)=\infty$. In particular, the
zero module has depth $\infty$. For a local ring $(R,\mathfrak m)$, write
$\operatorname{depth}(M)$ for $\operatorname{depth}_{\mathfrak m}(M)$.
