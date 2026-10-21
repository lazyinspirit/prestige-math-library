---
id: def-standard-normal-and-normal-laws
kind: definition
title: Standard normal and normal laws
deps: ["lem-normal-density-has-total-mass-one", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "def-probability-measure", "def-law-or-distribution-of-a-random-element", "lem-law-of-a-random-element-is-a-probability-measure", "cor-continuous-functions-are-borel-measurable", "def-dirac-measure", "def-axiom-of-choice"]
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-standard-normal-and-normal-laws.json
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Example 1.6.11, p.34; local normalization from the earlier published Gaussian integral'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: pipeline
---

## Definition

Assume AC. Define $\gamma(E)=\int_E e^{-x^2/2}/\sqrt{2\pi}\,dx$ for Borel E in $\mathbb R$. The normal-density normalization lemma and the theorem on indefinite integrals of nonnegative measurable functions show that this defines a probability measure; denote it $N(0,1)$. For $m\in\mathbb R$ and $\sigma\ge0$, define $N(m,\sigma^2)$ as the law of $x\mapsto m+\sigma x$ on $(\mathbb R,\mathcal B,\gamma)$. This affine map is continuous: for $\sigma$>0 choose $\delta$=$\varepsilon$/$\sigma$, and for $\sigma$=0 it is constant. Its inverse images of opens are open, so it is Borel measurable. The theorem that a random element has a probability law shows that this pushforward is a probability measure. When $\sigma$=0, the preimage of E is all of R if m belongs to E and empty otherwise, so $N(m,0)=\delta_m$, the Dirac measure at that point.

## Definition references

[[lem-normal-density-has-total-mass-one]]

[[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

[[lem-law-of-a-random-element-is-a-probability-measure]]

[[def-dirac-measure]]

