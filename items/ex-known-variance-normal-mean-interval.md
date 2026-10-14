---
id: ex-known-variance-normal-mean-interval
kind: example
title: Known-variance normal mean interval
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-axiom-of-choice
  - thm-intermediate-value
  - thm-continuity-from-below-for-measures
  - def-confidence-set-and-coverage
  - def-pivot
  - thm-pivot-inversion-exact-coverage
  - def-standard-normal-and-normal-laws
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Anna Mikusheva, MIT 14.381, Lecture 11: Confidence Sets, §2, PDF pp. 1–3"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/6a7fdee0c759b8ac985bf28a553acb24_MIT14_381F18_lec11.pdf"
    - title: "Karl B. Gregory, USC STAT 713, Lecture 14: Confidence Intervals and Sets, slide 8, PDF p. 10"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_14_slides_annotated.pdf"
---

## Example

Assume AC as in the library's construction of the normal laws. Observe one
real-valued $Y\sim N(\mu,\sigma^2)$, where $\mu\in\mathbb R$, the known
standard deviation $\sigma>0$, and $0<\alpha<1$. Define
$\Phi(t)=\int_{-\infty}^t e^{-u^2/2}/\sqrt{2\pi}\,du$, and let
$z_{1-\alpha/2}$ be its
$(1-\alpha/2)$-quantile. Then
$[Y-z_{1-\alpha/2}\sigma,\;Y+z_{1-\alpha/2}\sigma]$
has exact confidence level $1-\alpha$.

## Facts & Assumptions

**Given:** AC; an experiment indexed by $\mu\in\mathbb R$ with $Y\sim N(\mu,\sigma^2)$, fixed known $\sigma>0$, and $0<\alpha<1$.

[A1] [[def-axiom-of-choice]]: assume the axiom of choice, as required by the normal-law definition used here.

[F1] [[def-standard-normal-and-normal-laws]]: $N(\mu,\sigma^2)$ is the law of an affine image of a standard normal variable, whose density is positive on $\mathbb R$.

[F2] [[def-pivot]]: a parameter-indexed family of measurable maps is a pivot when its pushforward law is the same at every parameter.

[F3] [[def-confidence-set-and-coverage]]: the confidence set is measured by the probability that it contains the true parameter.

[F4] [[thm-pivot-inversion-exact-coverage]]: an acceptance set of pivot probability $1-\alpha$ yields exact coverage $1-\alpha$.

[F5] [[thm-intermediate-value]]: a continuous real function on a closed interval takes every value between its endpoint values.

[F6] [[thm-continuity-from-below-for-measures]]: for increasing measurable sets, the measure of their union is the supremum of their measures.

## Verification

1.1 Let $G$ have the standard normal law. Its density is $\phi(u)=e^{-u^2/2}/\sqrt{2\pi}$, positive everywhere and bounded above by $1/\sqrt{2\pi}$, with total mass one by [F1]. Thus $\Phi(t)=P(G\le t)$ satisfies $0<\Phi(b)-\Phi(a)=\int_a^b\phi(u)\,du\le(b-a)/\sqrt{2\pi}$ for every $a<b$, proving strict increase and continuity. The events $\{G\le m\}$ and $\{G>-m\}$ increase to the whole space as integer $m\to\infty$; [F6] gives $\Phi(m)\to1$ and $P(G>-m)\to1$, hence $\Phi(-m)\to0$. Choose finite endpoints bracketing $1-\alpha/2$; [F5] gives a quantile between them, and strict increase gives uniqueness. [given, A1, F1, F5, F6, algebra]

2.1 The standard normal density is symmetric and has no atoms. Therefore $\Phi(-z_{1-\alpha/2})=\alpha/2$, and the probability of $[-z_{1-\alpha/2},z_{1-\alpha/2}]$ is $1-\alpha$. [given, F1, step 1.1, algebra]

3.1 For every candidate mean $\eta$, $q_\eta(y)=(y-\eta)/\sigma$ is measurable and has standard normal law under $P_\eta$, so it is a pivot. The event $\eta\in[y-z\sigma,y+z\sigma]$ is exactly $-z\le q_\eta(y)\le z$; applying [F4] and [F3] gives exact coverage $1-\alpha$ for every $\eta$. [given, F2, F3, F4, step 2.1, algebra] ∎
