---
id: cex-convex-function-with-empty-subdifferential-at-a-boundary-point
kind: counterexample
title: '$x\mapsto-\sqrt{1-\|x\|_2^2}$ has empty subdifferential on the unit-sphere boundary'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, def-subgradient-and-subdifferential, thm-convex-functions-have-subgradients-at-interior-points, thm-cauchy-schwarz-and-the-euclidean-norm, def-p-norms-on-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "CUHK ENGG 5501 Convex Analysis notes"
      url: "https://www.se.cuhk.edu.hk/~manchoso/2425/engg5501/2-cvxanal.pdf"
pipeline_run: null
---

## Statement refuted

Every convex real-valued function on a closed convex domain has a subgradient at every domain point.

## Facts & Assumptions

**Given:** Let $B=\{x\in\mathbb R^n:\|x\|_2\le1\}$ for $n\ge1$ ([[def-p-norms-on-rn]]) and define $f(x)=-\sqrt{1-\|x\|_2^2}$ on $B$, with convexity as in [[def-convex-and-strictly-convex-functions-on-euclidean-sets]].

[F1] A vector $v$ is a subgradient of $f$ at $a$ when $f(y)\ge f(a)+\langle v,y-a\rangle$ for every $y$ in the domain ([[def-subgradient-and-subdifferential]]).

[L1] A convex function has nonempty subdifferential at every interior point of its domain ([[thm-convex-functions-have-subgradients-at-interior-points]]).

[L2] The Euclidean norm is a norm on $\mathbb R^n$ and satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Counterexample

**Proof technique:** direct.

1.1 Put $s_x=\sqrt{1-\|x\|_2^2}$. The lifted vectors $(x,s_x)$ have norm one in $\mathbb R^{n+1}$. By the triangle inequality in [L2], the convex combination $((1-t)x+ty,(1-t)s_x+ts_y)$ has norm at most one, so its nonnegative last coordinate is at most $s_{(1-t)x+ty}$. Negating gives the convexity inequality for $f$ on the whole closed ball. [L2, given, algebra]

2.1 Fix a unit vector $u$ and suppose $v$ satisfied [F1] at $u$. Testing $y=\alpha u$ for $0\le\alpha<1$ gives $$\langle v,u\rangle\ge\frac{\sqrt{1-\alpha^2}}{1-\alpha}=\sqrt{\frac{1+\alpha}{1-\alpha}}.$$ The right side is unbounded as $\alpha$ approaches $1$, impossible for the fixed vector $v$. Hence $\partial f(u)=\varnothing$. [step 1.1, F1, algebra]

3.1 Step 2.1 applies to every sphere point, while [L1] gives nonempty subdifferentials at every interior point. Thus the interior hypothesis in the existence theorem is sharp. [step 2.1, L1] ∎
