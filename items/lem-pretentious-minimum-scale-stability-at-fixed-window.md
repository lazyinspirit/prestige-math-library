---
dependency_level: 4
id: lem-pretentious-minimum-scale-stability-at-fixed-window
kind: lemma
title: Pretentious minimum scale stability at fixed window
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-short-interval-prime-sum-calculus
- lem-halasz-minimal-distance-is-well-defined
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals; local adapted proof with explicit endpoint and parameter corrections
    url: https://arxiv.org/pdf/2607.15574v1
---

## Statement

For $X\ge Y\ge3$ and a $1$-bounded multiplicative $f$, define $M_X(f;z)=\min_{|t|\le X}\sum_{p\le z}(1-\Re(f(p)p^{-it}))/p$ for $3\le z\le X$. Thus the same fixed frequency window $[-X,X]$ is used at both scales. Then

$$0\le M_X(f;X)-M_X(f;Y)\le\log\frac{\log X}{\log Y}+O(1).$$


In particular, if $Y\ge\exp((\log X)^\beta)$ with $0<\beta<1$, the upper bound is $(1-\beta)\log\log X+O(1)$.

## Statement references

[[lem-short-interval-prime-sum-calculus]]

[[lem-halasz-minimal-distance-is-well-defined]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local supplier [[lem-short-interval-prime-sum-calculus]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[lem-halasz-minimal-distance-is-well-defined]] gives its stated result under its stated hypotheses.

## Proof

1.1 The lower bound holds because all added prime terms are nonnegative. The finite continuous prime sum attains its minimum on the compact interval; call a minimizer $t_Y$. Set $U=1/\log Y$. Choose either $I=[t_Y,t_Y+U]$ or $I=[t_Y-U,t_Y]$ contained in $[-X,X]$; at least one is contained, since $U\le X$. For $t\in I$, the contribution of primes up to $Y$ changes by at most $|t-t_Y|\sum_{p\le Y}(\log p)/p\ll1$, using $|e^{ia}-1|\le|a|$ and [F1]. [given, F1, F2, algebra]

2.1 On the other hand, the absolute average of $p^{-it}$ over $I$ is at most $2/(U\log p)$. Therefore the average over $I$ of the distance contribution of $Y<p\le X$ is at most $\sum_{Y<p\le X}1/p+(2/U)\sum_{p>Y}1/(p\log p)\le\log(\log X/\log Y)+O(1)$ by [F1]. A continuous function has some value no greater than its integral average (otherwise its positive difference from that average has a positive minimum on the compact interval). At that value the full prime distance has the claimed upper bound. Taking the minimum over the full window completes the proof. In particular, if $Y\ge\exp((\log X)^\beta)$, the loss is at most $(1-\beta)\log\log X+O(1)$, uniformly for $0<\beta<1$. [given, F1, F2, step 1.1, algebra] ∎
