---
id: cex-composite-strong-convexity-alone-does-not-give-coordinate-factor
kind: counterexample
title: "Strong convexity of the composite alone does not give the stated coordinate factor"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-randomized-coordinate-proximal-descent
  - def-proper-closed-convex-function-on-rn
  - def-euclidean-inner-product
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

[F2] [[def-proper-closed-convex-function-on-rn]]: each block penalty must have nonempty finite domain, closed epigraph, and satisfy the convexity inequality.

[A1] The common model majorizers are $M_1=M_2=1$, the two coordinates are sampled uniformly, and the run executes at least one update with no stopping tolerance.

## Proof

1.1 Each $g_i(u)=u^2/2$ is finite and its epigraph $\{(u,t):u^2/2\le t\}$ is closed; hence it is proper under [F2]. The identity $g_i((1-s)u+sv)=(1-s)g_i(u)+sg_i(v)-s(1-s)(u-v)^2/2$ proves convexity. The same identity summed over coordinates shows $F(x)=\frac12\|x\|_2^2$ is globally $\mu=1$ strongly convex, with unique minimum at $x^*=(0,0)$. Since $f=0$ has zero gradient, $L_i=1$ are valid positive block-gradient bounds and $M_i=L_{\max}=1$. For either selected coordinate the model is $q(u)=\tfrac12u^2+\tfrac12(u-1)^2=(u-\tfrac12)^2+\tfrac14$, so its unique minimizer is $u=1/2$. The other coordinate remains $1$. Thus every one-step outcome has objective gap $\tfrac12((1/2)^2+1)=5/8$, and the expected gap is also $5/8$. [A1, F1, F2, given, algebra]

2.1 The claimed factor would give $(1-\mu/(nL_{\max}))(F(x^0)-F^*)=(1-1/2)\cdot1=1/2$, which is strictly smaller than $5/8$. Hence composite strong convexity alone does not imply that factor. The positive-rate theorem on this page assumes the smooth term $f$ itself is $\mu$-strongly convex. [step 1.1, given, algebra] ∎

