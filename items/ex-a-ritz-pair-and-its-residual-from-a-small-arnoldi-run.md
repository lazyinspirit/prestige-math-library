---
id: ex-a-ritz-pair-and-its-residual-from-a-small-arnoldi-run
kind: example
title: "A Ritz pair from Arnoldi has a residual given by the last Hessenberg column entry"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-ritz-residual-formula-for-an-arnoldi-ritz-pair]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Example

Continue the Arnoldi run from the previous example, where

$$H_2=\begin{pmatrix}2&1\\1&2\end{pmatrix},\qquad h_{3,2}=1.$$

Take the unit eigenvector
$y=\frac1{\sqrt2}(1,1)^\mathsf T$ of $H_2$ with eigenvalue $\theta=3$. Then the
Ritz vector is

$$u=Q_2y=\frac1{\sqrt2}(e_1+e_2),$$

and its residual is

$$Au-\theta u=\frac1{\sqrt2}e_3,$$

whose norm is $1/\sqrt2$.

## Facts & Assumptions

**Given:** The Arnoldi data
$H_2=\begin{pmatrix}2&1\\1&2\end{pmatrix}$,
$h_{3,2}=1$,
$v_3=e_3$,
and $y=\frac1{\sqrt2}(1,1)^\mathsf T$.

[L1] For an Arnoldi Ritz pair,
$Au-\theta u=h_{m+1,m}(e_m^\ast y)v_{m+1}$
([[prop-ritz-residual-formula-for-an-arnoldi-ritz-pair]]).

## Verification
**Proof technique:** direct.

1.1 One has $H_2y=3y$, so $\theta=3$ is a Ritz value and $u=Q_2y=\frac1{\sqrt2}(e_1+e_2)$ is the associated Ritz vector. Also $e_2^\ast y=1/\sqrt2$. [algebra]

2.1 Applying [L1] with $m=2$ gives $Au-\theta u=h_{3,2}(e_2^\ast y)v_3 =1\cdot \frac1{\sqrt2}\,e_3$. Therefore $\|Au-\theta u\|_2=1/\sqrt2$. [L1, step 1.1, algebra] ∎