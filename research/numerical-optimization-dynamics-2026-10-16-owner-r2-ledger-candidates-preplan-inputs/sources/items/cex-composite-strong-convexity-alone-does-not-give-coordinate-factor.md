---
id: cex-composite-strong-convexity-alone-does-not-give-coordinate-factor
kind: counterexample
title: "Strong convexity of the composite alone does not give the stated coordinate factor"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-randomized-coordinate-proximal-descent
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §3.7"
      url: "https://arxiv.org/html/1502.04759v1"
---

## Statement refuted

The claim that $F=f+\sum_i g_i$ being $\mu$-strongly convex by itself implies the contraction factor $1-\mu/(nL_{\max})$ for the randomized proximal coordinate update is false when the curvature comes only from the nonsmooth-separable term.

## Witness

Take $n=2$, $f=0$, $g_1(u)=g_2(u)=\tfrac12u^2$, common positive majorizers $L_1=L_2=L_{\max}=1$, and $x^0=(1,1)$. Then $F(x)=\tfrac12(x_1^2+x_2^2)$ is globally $\mu=1$ strongly convex and has minimum $F^*=0$.

## Facts & Assumptions

**Given:** The update rule of [[alg-randomized-coordinate-proximal-descent]] for the stated two-block objective.

[F1] [[alg-randomized-coordinate-proximal-descent]]: with $M_i=L_{\max}$ the selected block minimizes $g_i(u)+\tfrac12(u-x_i)^2$ when $f=0$.

[A1] The common model majorizers are $M_1=M_2=1$, and the two coordinates are sampled uniformly.

## Proof

1.1 For either selected coordinate the model is $q(u)=\tfrac12u^2+\tfrac12(u-1)^2=(u-\tfrac12)^2+\tfrac14$, so its unique minimizer is $u=1/2$. The other coordinate remains $1$. Thus every one-step outcome has objective gap $\tfrac12((1/2)^2+1)=5/8$, and the expected gap is also $5/8$. [A1, F1, given, algebra]

2.1 The claimed factor would give $(1-\mu/(nL_{\max}))(F(x^0)-F^*)=(1-1/2)\cdot1=1/2$, which is strictly smaller than $5/8$. Hence composite strong convexity alone does not imply that factor. The positive-rate theorem on this page assumes the smooth term $f$ itself is $\mu$-strongly convex. [step 1.1, given, algebra] ∎

