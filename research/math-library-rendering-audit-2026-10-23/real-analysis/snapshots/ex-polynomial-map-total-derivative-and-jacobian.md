---
id: ex-polynomial-map-total-derivative-and-jacobian
kind: example
title: "The polynomial map $(x,y)\\mapsto(1+x+2y+x^2,\\,2x+3y+xy)$ and its Jacobian"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-continuous-partial-derivatives-imply-total-differentiability, def-jacobian-matrix-and-gradient, lem-derivative-of-a-power, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Example

Let $F(x,y)=(1+x+2y+x^2,\,2x+3y+xy)$. Then $F$ is totally differentiable everywhere and

$$DF(x,y)=JF(x,y)=\begin{pmatrix}1+2x&2\\2+y&3+x\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The polynomial map $F:\mathbb R^2\to\mathbb R^2$.

[L1] The function $x\mapsto x^n$ is differentiable everywhere with derivative $nx^{n-1}$ for positive natural $n$ ([[lem-derivative-of-a-power]]).

[L2] Continuous partial derivatives imply total differentiability with Jacobian derivative ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

## Verification

**Proof technique:** direct.

1.1 The four partial derivatives are $1+2x$, $2$, $2+y$, and $3+x$, by [L1] and derivative algebra. [L1, L2]

2.1 These polynomial partial derivatives are continuous everywhere, so [L2] gives total differentiability and identifies the derivative with the displayed Jacobian. [step 1.1, L2, algebra]

3.1 Directly, the increment remainder is $(h_1^2,h_1h_2)$, whose norm divided by $\|(h_1,h_2)\|_2$ tends to zero, agreeing with step 2.1. [step 1.1, step 2.1] ∎
