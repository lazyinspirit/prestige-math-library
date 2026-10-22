---
id: lem-qftx-finite-cross-wick-covariance
kind: lemma
title: Cross-covariance of finite Gaussian Wick powers
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
proof_strategy: direct
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-axiom-of-choice
  - def-qft-finite-wick-normal-powers
  - lem-qft-finite-gaussian-wick-moments
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qft-finite-wick-normal-powers: mathematical-premise
  lem-qft-finite-gaussian-wick-moments: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Barry Simon, The P(φ)₂ Euclidean (Quantum) Field Theory, Chapter I, §1.1 (publisher preview)"
      url: "https://api.pageplace.de/preview/DT0400.9781400868759_A26063613/preview-9781400868759_A26063613.pdf"
      locator: "PDF pp. 24–33, printed pp. 4–13: Gaussian random variables, the Wick generating function, and Theorem 1.3 on the covariance of two Wick powers. The coefficient argument is reproduced locally for the stated finite Gaussian interface."
    - title: "Stephen J. Summers, A Perspective on Constructive Quantum Field Theory, §3.1"
      url: "https://arxiv.org/pdf/1203.3991"
      locator: "PDF pp. 10–12: Wick ordering for the Euclidean free field and its role in P(φ)₂; the finite Gaussian identity is proved locally here."
---

## Statement

Assume the Axiom of Choice. Let $(X,Y)$ have a centered, possibly degenerate, jointly Gaussian law with covariance matrix $\begin{pmatrix}\sigma^2&c\\c&\tau^2\end{pmatrix}$, where $\sigma^2,\tau^2\ge0$ and the matrix is positive semidefinite. Define $:X^n:_{\sigma^2}$ and $:Y^m:_{\tau^2}$ by the finite covariance Wick-power generating identity. For all integers $n,m\ge0$,

$$\mathbb E\bigl[:X^n:_{\sigma^2}:Y^m:_{\tau^2}\bigr]=\begin{cases}n!c^n,&n=m,\\0,&n\ne m,\end{cases}$$

with $c^0:=1$.

## Statement references

[[def-qft-finite-wick-normal-powers]]

[[lem-qft-finite-gaussian-wick-moments]]

## Facts & Assumptions

**Given:** Assume the Axiom of Choice. Let $(X,Y)$ have the centered Gaussian law and covariance matrix in the Statement, and fix $n,m\ge0$.

[A1] The Axiom of Choice is the stated hypothesis of the finite Gaussian suppliers. [[def-axiom-of-choice]]

[F1] For every finite list of centered jointly Gaussian linear coordinates, each moment is the finite sum over pairings of covariance factors; this includes singular covariance matrices. [[lem-qft-finite-gaussian-wick-moments]]

[F2] The formal generating identities are $\exp(sX-\sigma^2s^2/2)=\sum_{j\ge0}:X^j:_{\sigma^2}s^j/j!$ and $\exp(tY-\tau^2t^2/2)=\sum_{k\ge0}:Y^k:_{\tau^2}t^k/k!$. [[def-qft-finite-wick-normal-powers]]

## Proof

**Proof technique:** formal coefficient extraction from the finite Gaussian pairing formula.

**Given:** [A1], [F1], [F2], and the finite centered Gaussian vector $(X,Y)$.

1.1 In the formal power-series ring $\mathbb R\llbracket s,t\rrbracket$, set $M(s,t)=\sum_{a,b\ge0}\mathbb E[X^aY^b]s^at^b/(a!b!)$. By [F1], a pairing with $j$ $X$-self-pairs, $k$ $Y$-self-pairs, and $\ell$ cross-pairs can occur only when $a=2j+\ell$ and $b=2k+\ell$. The number of such pairings is $a!b!/(2^j j!\,2^k k!\,\ell!)$: choose the $\ell$ cross-indices on each side, match them in $\ell!$ ways, then pair the remaining indices on each side. Thus coefficient-by-coefficient $M(s,t)=\exp(\sigma^2s^2/2)\exp(cst)\exp(\tau^2t^2/2)$. This is an identity of formal series, so no moment-generating-function convergence is assumed. [A1, F1, given, algebra]

2.1 Multiplying the series in step 1.1 by $\exp(-\sigma^2s^2/2)\exp(-\tau^2t^2/2)$ leaves $\exp(cst)=\sum_{r\ge0}c^r s^rt^r/r!$. By [F2], the coefficient of $s^nt^m$ on the multiplied left side is $\mathbb E[:X^n:_{\sigma^2}:Y^m:_{\tau^2}]/(n!m!)$. The right side has zero coefficient when $n\ne m$ and coefficient $c^n/n!$ when $n=m$, giving the claimed formula. For $n=m=0$ the constant coefficient is $1$, including when $c=0$. [F2, step 1.1, algebra] ∎
