---
id: lem-partial-negative-weight-crossing-time
kind: lemma
title: Correct finite-time bound for partial-homogeneity zero crossing
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Let $M\ge0$, $\eta>0$, $L\ge0$, $\epsilon>0$, and let $w:[t_0,t_0+2M/\eta]\to[-M,0]$ and $\theta:[t_0,t_0+2M/\eta]\to\mathbb R^q$ be absolutely continuous until the first time $w$ reaches zero. Assume $w(t_0)\in[-M,0]$, $\theta(t_0)=\theta_0$, and, almost everywhere before the crossing,

$$w'(t)\ge\eta/2,\qquad q'(t)\le |w(t)|(\epsilon+Lq(t)),\qquad q(t)=|\theta(t)-\theta_0|.$$

Then $w$ reaches zero at some $\tau\le t_0+2M/\eta$. At the first such time,

$$q(\tau)\le \begin{cases}\dfrac{\epsilon}{L}\bigl(e^{LM^2/\eta}-1\bigr),&L>0,\\[4pt]\dfrac{\epsilon M^2}{\eta},&L=0.\end{cases}$$

Thus the crossing remains in $|\theta-\theta_0|<r_0$ whenever the displayed bound is less than $r_0$. The crossing-time bound depends on the initial negative-weight magnitude $M$.

## Statement references

[Chizat and Bach, Lemma C.18 and its proof, Appendix C.4.2](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** The differential inequalities and initial data in the Statement.

[A1] The functions $w$ and $\theta$ are absolutely continuous on each interval before the first zero of $w$.

## Proof

**Given:** $M,\eta,L,\epsilon,w,\theta$ as in the Statement.

1.1 Suppose first that $M>0$ and $w$ has not reached zero by $t_0+2M/\eta$. Integrating $w'\ge\eta/2$ gives $w(t_0+2M/\eta)\ge w(t_0)+M\ge0$, contradicting the assumed strict negativity before the first crossing. Hence the first crossing time $\tau$ exists and satisfies the stated bound. If $M=0$, then $w(t_0)=0$ and $\tau=t_0$. [given, A1, algebra]

2.1 On $[t_0,\tau]$, $w$ is strictly increasing with $w'\ge\eta/2$, so it is an admissible absolutely continuous time change. Its inverse satisfies $dt/dw\le2/\eta$. If $L>0$, set $p=\epsilon+Lq$. The inequality for $q$ gives $dp/dw\le(2L/\eta)|w|p$, and integration from $w(t_0)$ to $0$ yields $p(\tau)\le\epsilon e^{LM^2/\eta}$. Rearranging gives $q(\tau)\le\epsilon(e^{LM^2/\eta}-1)/L$. If $L=0$, direct integration gives $q(\tau)\le(2\epsilon/\eta)\int_{w(t_0)}^0|s|ds=\epsilon w(t_0)^2/\eta\le\epsilon M^2/\eta$. The same bounds hold with zero right-hand side when $M=0$. [A1, step 1.1, algebra] ∎

## Source note

Chizat and Bach's printed proof claims a common crossing time $T<2/\eta$ for every $w_0\in[-M,0]$. Integrating $w'\ge\eta/2$ gives the correct worst-case bound $2M/\eta$. The estimate above proves hitting at an actual time $\tau$ and the corresponding $\theta$-displacement bound; it does not assert $w(T)=0$ at one fixed time for all initial weights.
