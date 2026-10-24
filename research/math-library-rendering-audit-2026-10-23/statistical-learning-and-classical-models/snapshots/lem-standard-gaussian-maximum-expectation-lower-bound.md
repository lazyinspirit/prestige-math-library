---
id: lem-standard-gaussian-maximum-expectation-lower-bound
kind: lemma
title: The maximum of independent standard normals has expectation of order at least the square root of log dimension
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-standard-normal-and-normal-laws]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "AC supplies the finite Gaussian family; no DC or countable choice is used."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, §1.4"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Assume AC. There is an integer $m_0$ such that for every $m\ge m_0$ and independent standard-normal random variables $G_1,\ldots,G_m$,
$$\mathbb E\max_{1\le i\le m}G_i\ge\frac14\sqrt{\log m}.$$

## Statement references

[Rigollet and Hütter, §1.4, maximal inequalities](https://arxiv.org/pdf/2310.19244v1)

## Facts & Assumptions

**Given:** AC and independent standard-normal random variables $G_1,\ldots,G_m$.

[F1] A standard normal has density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$, which is decreasing for $x\ge0$ ([[def-standard-normal-and-normal-laws]]).

[A1] AC supplies the finite independent Gaussian family ([[def-axiom-of-choice]]).

## Proof

1.1 Put $t_m=\tfrac12\sqrt{\log m}$ and $q_m=\mathbb P(G_1\ge t_m)$. Since $\phi$ decreases on $[0,\infty)$, $q_m\ge\phi(t_m+1/(t_m+1))/(t_m+1)\ge e^{-t_m^2/2-t_m-1/2}/(\sqrt{2\pi}(t_m+1))$; the last inequality follows from $t_m/(t_m+1)\le t_m$ and $1/(2(t_m+1)^2)\le1/2$. Hence $m q_m\to\infty$. [A1, F1, algebra]

2.1 Let $M_m=\max_iG_i$. Independence gives $\mathbb P(M_m<t_m)=(1-q_m)^m\le e^{-m q_m}\to0$ and $\mathbb E[G_1\mathbf1_{\{M_m<t_m\}}]=\mathbb E[G_1\mathbf1_{\{G_1<t_m\}}](1-q_m)^{m-1}\ge-(1-q_m)^{m-1}/\sqrt{2\pi}$. Splitting at $M_m=t_m$ yields $\mathbb E M_m\ge t_m(1-(1-q_m)^m)-(1-q_m)^{m-1}/\sqrt{2\pi}\ge t_m/2=\frac14\sqrt{\log m}$ for all sufficiently large $m$. [F1, step 1.1, given, algebra] ∎

## Source notes

The cited notes give maximal-inequality context. The stated lower bound is derived here from a direct Gaussian-tail lower estimate and independence.
