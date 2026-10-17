---
id: lem-sylvester-separation-controls-the-frobenius-error
kind: lemma
title: "Positive Sylvester separation bounds the inverse operator norm"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-sylvester-operator-and-separation-number
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Statement

For the Sylvester operator $\mathcal S_{A,B}$ of [[def-sylvester-operator-and-separation-number]], if $\operatorname{sep}(A,-B)>0$, then every $X\in F^{m\times n}$ satisfies

$$
\|X\|_F\le \frac{\|AX+XB\|_F}{\operatorname{sep}(A,-B)}.
$$

## Facts & Assumptions

**Given:** $F\in\{\mathbb R,\mathbb C\}$, $A\in F^{m\times m}$, $B\in F^{n\times n}$, and $\operatorname{sep}(A,-B)>0$.

[F1] [[def-sylvester-operator-and-separation-number]]: $\operatorname{sep}(A,-B)=\min_{\|Y\|_F=1}\|AY+YB\|_F$.

## Proof


1.1 If $X=0$, the claimed inequality is equality. If $X\ne0$, set $Y=X/\|X\|_F$, so $\|Y\|_F=1$ and $\mathcal S_{A,B}(Y)=\mathcal S_{A,B}(X)/\|X\|_F$ by linearity. [given, choose, algebra]

2.1 By [F1], $\operatorname{sep}(A,-B)\le\|\mathcal S_{A,B}(Y)\|_F=\|\mathcal S_{A,B}(X)\|_F/\|X\|_F$. Positivity of the separation permits multiplication and division by it, giving the desired bound. [F1, step 1.1, algebra] ∎
