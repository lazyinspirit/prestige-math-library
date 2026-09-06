---
id: cor-pointwise-limit-of-bounded-operators-is-bounded
kind: corollary
title: "A pointwise limit of bounded operators is bounded with the liminf norm bound"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-uniform-boundedness-principle, def-bounded-linear-operator, def-operator-norm]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Buhler--Salamon, Functional Analysis, Theorem 2.5"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume DC. Let $X$ be Banach, $Y$ normed, and $T_n:X\to Y$ bounded linear ([[def-bounded-linear-operator]]). If $T_nx\to Tx$ in $Y$ for every $x\in X$, then $T$ is bounded linear and

$$\|T\|\le\liminf_{n\to\infty}\|T_n\|,$$

with the operator norm of [[def-operator-norm]].

## Facts & Assumptions

**Given:** DC and $X,Y,(T_n),T$ with pointwise convergence as in the statement.

## Proof

**Proof technique:** direct.

1.1 Pointwise convergence makes $(T_nx)_n$ bounded for each $x$. Thus [[thm-uniform-boundedness-principle]] gives $M:=\sup_n\|T_n\|<\infty$. [given]

2.1 Passing $T_n(x+y)=T_nx+T_ny$ and $T_n(\lambda x)=\lambda T_nx$ to limits shows that $T$ is linear. [step 1.1]

2.2 For each $x$, continuity of the norm gives $\|Tx\|=\lim_n\|T_nx\|\le M\|x\|$, so $T$ is bounded. [step 1.1]

3.1 If $\liminf_n\|T_n\|=\infty$, the asserted bound is immediate. Otherwise select a subsequence whose norms tend to the finite liminf. The preceding inequality along that subsequence gives $\|Tx\|\le(\liminf_n\|T_n\|)\|x\|$ for every $x$, hence the asserted norm bound. [step 2.2] ∎
