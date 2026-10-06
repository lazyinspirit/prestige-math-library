---
id: ex-plancherel-measure-on-partitions-of-three
kind: example
title: "The Plancherel measure on partitions of three"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [def-plancherel-measure-on-partitions, def-partition-young-diagram-and-conjugate-partition, thm-standard-polytabloid-basis, thm-hook-length-formula, prop-plancherel-weights-sum-to-one]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Dan Romik, The Surprising Mathematics of Longest Increasing Subsequences, Cambridge University Press 2015; author-hosted manuscript of 20 August 2014 (363 pp.)"
      url: "https://danromik.com/resources/books/the-surprising-mathematics-of-longest-increasing-subsequences.pdf"
      locator: "§1.8-§1.9, printed pp. 24-30 (Plancherel weights and the hook-length formula)"
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "§5, printed p. 25 (the measure $M_n(\\lambda)=\\dim^2\\lambda/n!$)"
---

## Example

For $n=3$ the partitions are $(3)$, $(2,1)$ and $(1^3)$, with $f^{(3)}=f^{(1^3)}=1$ and $f^{(2,1)}=2$; hence
$$P_3(3)=P_3(1^3)=\frac{1}{6},\qquad P_3(2,1)=\frac{4}{6}=\frac23,$$
and $\tfrac16+\tfrac46+\tfrac16=1$, recovering [[prop-plancherel-weights-sum-to-one]] in the smallest non-uniform case.

## Facts & Assumptions

**Given:** the Plancherel weights $P_n(\lambda)=(f^\lambda)^2/n!$ with $f^\lambda$ the number of standard $\lambda$-tableaux ([[def-plancherel-measure-on-partitions]], [[thm-standard-polytabloid-basis]]).

[F1] The partitions of $3$ are $(3)$, $(2,1)$ and $(1^3)$, where $(1^3)$ is the column $(1,1,1)$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] For every $n\ge0$ and $\lambda\vdash n$, $f^\lambda=n!/\prod_{x\in[\lambda]}h(x)$ with the empty product equal to $1$; in particular $f^{(3)}=3!/(3\cdot2\cdot1)=1$ and $f^{(1^3)}=3!/(3\cdot2\cdot1)=1$ ([[thm-hook-length-formula]]).

[F3] The shape $(2,1)$ has hook lengths $3$ in the top-left box, $1$ in the top-right box and $1$ in the bottom box, so $f^{(2,1)}=3!/(3\cdot1\cdot1)=2$; explicitly its standard tableaux are the ones with first row $(1,2)$ and second row $(3)$, and with first row $(1,3)$ and second row $(2)$ ([[thm-hook-length-formula]], [[thm-standard-polytabloid-basis]]).

[F4] The Plancherel weights of any order sum to one ([[prop-plancherel-weights-sum-to-one]]).

## Verification

**Proof technique:** direct.

1.1 The three shapes: by [F1] the partitions of $3$ are exactly $(3)$, $(2,1)$ and $(1^3)$, and [F2] and [F3] give $f^{(3)}=1$, $f^{(2,1)}=2$ and $f^{(1^3)}=1$; in particular each $f^\lambda$ is a positive integer and the standard-tableau counts are as displayed. [given, F1, F2, F3]

2.1 The weights: by definition of the Plancherel measure $P_3(\lambda)=(f^\lambda)^2/3!$ with $3!=6$, step 1.1 gives $P_3(3)=1/6$, $P_3(2,1)=4/6=2/3$ and $P_3(1^3)=1/6$; summing, $1/6+4/6+1/6=6/6=1$. [given, step 1.1, algebra]

3.1 Conclusion: the computed weights are the values displayed in the Example, their sum is one as predicted by [F4], and the middle shape carries four times the weight of either extreme shape, so $n=3$ is the smallest case exhibiting non-uniformity of the Plancherel weights. [given, F4, step 2.1, algebra] ∎ 