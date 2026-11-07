---
id: lem-square-summable-l2-functions-converge-almost-everywhere-to-zero
kind: lemma
title: Square-summable L2 functions converge almost everywhere to zero
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - cor-first-borel-cantelli-lemma-for-events
  - thm-finite-and-countable-subadditivity-of-measures
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Proof of Theorem 3.1, §3.1, summable squared L2 norms and almost-everywhere convergence"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Proof of Theorem 3.1, §3.1, summable squared L2 norms and almost-everywhere convergence; full relevant passage inspected"
---

## Statement

Let $(\Omega,\Sigma,\mathbb P)$ be a probability space and let $f_j:\Omega\to\mathbb C$ be measurable for every $j\ge1$. If $\sum_{j=1}^\infty\int_\Omega|f_j|^2\,d\mathbb P<\infty$, then $f_j(\omega)\to0$ for $\mathbb P$-almost every $\omega$.

## Statement references

[Bergelson–Moreira, proof of Theorem 3.1](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)

## Facts & Assumptions

**Given:** A probability space, measurable complex functions $(f_j)$, and $\sum_j\int|f_j|^2d\mathbb P<\infty$.

[F1] If events $E_j$ satisfy $\sum_j\mathbb P(E_j)<\infty$, then $\mathbb P(E_j\text{ infinitely often})=0$; no independence is required ([[cor-first-borel-cantelli-lemma-for-events]]).

[F2] A countable union of measurable null sets is null by countable subadditivity ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Proof

1.1 For each integer $m\ge1$ let $E_{j,m}=\{\omega:|f_j(\omega)|>1/m\}$. Pointwise, $m^{-2}\mathbf 1_{E_{j,m}}\le|f_j|^2$, so $\sum_j\mathbb P(E_{j,m})\le m^2\sum_j\int|f_j|^2d\mathbb P<\infty$. [given, algebra]

1.2 Apply [F1] for each fixed $m$. Outside a null set, only finitely many $E_{j,m}$ occur. By [F2], the union of these exceptional null sets over integers $m\ge1$ is null; outside it, for each $m$ eventually $|f_j|\le1/m$, which implies $f_j\to0$. [F1, F2, algebra]

2.1 The exceptional set in step 1.2 has probability zero, so the stated almost-everywhere convergence follows. [step 1.2] ∎
