---
id: cor-volume-under-a-continuous-graph-over-a-jordan-base
kind: corollary
title: 'The volume under a nonnegative continuous graph over a compact Jordan base is its integral'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-solid-between-continuous-graphs-fubini-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §3.2"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Statement

Let $D\subseteq\mathbb R^m$ be compact and Jordan measurable and let $g:D\to[0,\infty)$ be continuous. Then $U_g:=\{(u,t):u\in D,0\le t\le g(u)\}$ is compact and Jordan measurable, and

$$\operatorname{cont}(U_g)=\int_Dg(u)\,du.$$

## Facts & Assumptions

**Given:** The set $D$, the nonnegative continuous function $g$, and the constant integrand $H=1$ on $U_g$.

[F1] If $D\subseteq\mathbb R^m$ is compact and Jordan measurable and $\alpha,\beta:D\to\mathbb R$ are continuous with $\alpha\le\beta$, then $K=\{(u,t):u\in D,\ \alpha(u)\le t\le\beta(u)\}$ is compact and Jordan measurable and every continuous $H:K\to\mathbb R$ satisfies $\int_KH=\int_D\bigl(\int_{\alpha(u)}^{\beta(u)}H(u,t)\,dt\bigr)du$ ([[thm-solid-between-continuous-graphs-fubini-formula]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] with lower graph $0$, upper graph $g$, and integrand $H=1$. This includes the empty base and the identically zero graph. [given, F1]

2.1 With $H=1$ the left side of the formula in [F1] is $\int_{U_g}1=\operatorname{cont}(U_g)$ and the inner integral is $\int_0^{g(u)}1\,dt=g(u)$, so that formula becomes $\operatorname{cont}(U_g)=\int_Dg$. [step 1.1, F1, algebra] ∎
