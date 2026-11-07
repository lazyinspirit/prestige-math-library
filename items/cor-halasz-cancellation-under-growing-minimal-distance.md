---
dependency_level: 6
id: cor-halasz-cancellation-under-growing-minimal-distance
kind: corollary
title: "Cancellation when the minimizing pretentious distance grows"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps:
  - thm-halasz-mean-value-bound
  - def-halasz-minimal-pretentious-distance
  - thm-exponential-beats-every-polynomial
proof_strategy: direct
sources:
  scraped: []
  references: []
---

## Statement

Let $f:\mathbb Z_{>0}\to\mathbb C$ satisfy $f(1)=1$,
$f(mn)=f(m)f(n)$ for coprime positive integers $m,n$, and $|f(n)|\le1$ for
all $n\ge1$. Let $T:[3,\infty)\to[1,\infty)$ satisfy
$T(x)\to\infty$ as $x\to\infty$, and suppose the minimum

$$ M(f;x,T(x)):=\min_{|t|\le T(x)}\sum_{p\le x}\frac{1-\operatorname{Re}(f(p)p^{-it})}{p},\qquad p^{-it}:=\exp(-it\log p), $$

tends to $+\infty$ as $x\to\infty$. Then

$$ \frac1x\sum_{n\le x}f(n)\longrightarrow0\qquad(x\to\infty). $$

## Statement references

[[thm-halasz-mean-value-bound]]

[[def-halasz-minimal-pretentious-distance]]


## Facts & Assumptions

**Given:** $f,T(x)$ as in the Statement; $T(x)\to\infty$ and $M(f;x,T(x))\to\infty$.

[F1] The full quantitative bound holds for every real $x\ge3$ and $T\ge1$ ([[thm-halasz-mean-value-bound]]).

[F2] Exponential growth dominates every fixed polynomial ([[thm-exponential-beats-every-polynomial]]).

## Proof

1.1 Write $m(x):=M(f;x,T(x))$. Since $m(x)\to\infty$, [F2] gives $(1+m(x))e^{-m(x)}\to0$. Also $1/T(x)\to0$ by hypothesis. Finally put $u=\log\log x\to\infty$; then $\log\log x/\log x=u/e^u\to0$ by [F2]. [given, F2, algebra]

2.1 Apply [F1] with the admissible parameter $T=T(x)$ at each $x\ge3$. Its absolute constant is independent of $x$ and $T(x)$, and all three terms on its right tend to zero by step 1.1. Hence the modulus of $x^{-1}\sum_{n\le x}f(n)$ tends to zero, which is precisely the asserted complex convergence. [F1, step 1.1, algebra] ∎
