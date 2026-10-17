---
id: thm-total-derivative-computes-directional-and-partial-derivatives
kind: theorem
title: "A total derivative computes every directional derivative, and its matrix is the Jacobian"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-total-derivative-in-euclidean-space, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, lem-euclidean-linear-maps-have-matrices-and-are-bounded]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  repair: research/numerical-optimization-dynamics-2026-10-16-owner-step2-preclaimed-published-receipts-CONTINUED-ROOT-1035-v1/thm-total-derivative-computes-directional-and-partial-derivatives.repair.json
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Statement

If $f:U\to\mathbb R^n$ is totally differentiable at $a$, then $D_vf(a)$ exists for every $v\in\mathbb R^m$ and equals $Df(a)v$. In particular $\partial_jf(a)=Df(a)e_j$, and the matrix of $Df(a)$ is $Jf(a)$.

## Facts & Assumptions

**Given:** A total derivative $Df(a)$ and a direction $v\in\mathbb R^m$.

[L1] In the total-derivative definition, the normalized remainder tends to zero as $h$ tends to zero ([[def-total-derivative-in-euclidean-space]]).

[L2] The directional derivative is the derivative of $t\mapsto f(a+tv)$ at zero, and partial derivatives use standard-basis directions ([[def-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, the line map has only the zero value, so its directional derivative is the zero vector by the zero-target case of [L2], and this is $Df(a)v$. Every column identity then has zero rows. The case of a zero-dimensional source has only $v=0$ and no partial directions; it is covered by the zero-direction argument below. For the remaining nonzero-direction argument assume $n\ge1$. [given, L1, L2, algebra]

1.2 If $v=0$, then $(f(a+tv)-f(a))/t=0=Df(a)0$ for every $t\ne0$, so [L2] gives $D_0f(a)=Df(a)0$. For the remaining case assume $v\ne0$. For sufficiently small $t\ne0$, openness of $U$ gives $a+tv\in U$ and $tv\ne0$. Write $f(a+tv)-f(a)=tDf(a)v+r(tv)$, where $\|r(tv)\|_2/\|tv\|_2\to0$ by [L1]. [L1, L2, algebra]

2.1 Dividing by $t$ gives $(f(a+tv)-f(a))/t=Df(a)v+r(tv)/t$, and $\|r(tv)/t\|_2=\|v\|_2\,\|r(tv)\|_2/\|tv\|_2\to0$; hence [L2] yields $D_vf(a)=Df(a)v$. [step 1.2, L2, algebra]

3.1 Taking $v=e_j$ identifies the $j$th column of the matrix of $Df(a)$ with the vector of $j$th partial derivatives, which is precisely the Jacobian. [step 1.2, step 2.1] ∎
