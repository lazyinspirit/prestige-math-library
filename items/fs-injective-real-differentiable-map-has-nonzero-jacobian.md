---
id: fs-injective-real-differentiable-map-has-nonzero-jacobian
kind: false-statement
title: "FALSE: every injective real-differentiable planar map has nonzero Jacobian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-injective-holomorphic-derivative-nonzero, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability, lem-derivative-of-a-power, def-injection-surjection-bijection]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Remark 1.11"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

Every injective differentiable map $F:\mathbb R^2\to\mathbb R^2$ has nonzero Jacobian determinant at every point.

## Facts & Assumptions

**Given:** The map $F(x,y)=(x^3,y)$, the definition of injectivity ([[def-injection-surjection-bijection]]), the Jacobian-matrix convention ([[def-jacobian-matrix-and-gradient]]), and total differentiability from continuous partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L1] The derivative of $x\mapsto x^3$ is $x\mapsto3x^2$ ([[lem-derivative-of-a-power]]).

[L2] An injective holomorphic map on a complex domain has nowhere-zero derivative and is biholomorphic onto its open image ([[cor-injective-holomorphic-derivative-nonzero]]).

## Refutation

**Proof technique:** direct.

1.1 If $F(x,y)=F(u,v)$, then $y=v$ and $0=x^3-u^3=(x-u)((x+u/2)^2+3u^2/4)$. The second factor is nonnegative and vanishes only when $x=u=0$, so in every case $x=u$. Thus $F$ is injective. [given, algebra]

1.2 By [L1], the derivative matrix is $$DF(x,y)=\begin{pmatrix}3x^2&0\\0&1\end{pmatrix},$$ so $F$ is differentiable and $\det DF(x,y)=3x^2$. [L1, given, algebra]

2.1 On the entire vertical axis $x=0$, the determinant in step 1.2 is zero even though step 1.1 shows that $F$ is injective. Hence the real-differentiable statement is false; [L2] shows the contrasting conclusion that does hold for injective holomorphic maps. [step 1.1, step 1.2, L2] ∎
