---
id: fs-mirror-descent-halved-regret-constants
kind: false-statement
title: Halving both terms in the agile mirror-descent regret bound
status: published
origin: session
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-online-mirror-descent
  - def-mirror-map-and-bregman-divergence
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition, Theorem 5.6 and full displayed proof"
      url: https://arxiv.org/pdf/1909.05207
    - title: "Peter Bartlett, Stat 260/CS 294-102: Learning in Sequential Decision Problems, mirror-descent lecture notes, slides 28–30"
      url: https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
---

## Statement

Let $d\ge1$, let $K\subseteq\mathbb R^d$ be nonempty, bounded, closed and convex with nonempty interior, and let $U$ be an open convex set containing $\operatorname{int}K$, with $K\subseteq\overline U$. Let $R$ be continuous on $K$, twice continuously differentiable with positive-definite Hessian on $U$, and strongly convex on $K$. Initialize $x_1\in K\cap U$ at a minimizer of $R$ on $K$. For an integer $T\ge1$ and a constant $\eta>0$, run the well-defined agile update
$$ \nabla R(y_{t+1})=\nabla R(x_t)-\eta g_t,\qquad x_{t+1}\in\arg\min_{x\in K}B_R(x\|y_{t+1}), $$
with $x_t,x_{t+1}\in K\cap U$, $y_{t+1}\in U$, and $g_t=\nabla f_t(x_t)$ for differentiable convex losses on an open convex neighborhood of $K$. Define $B_R(x\|y)=R(x)-R(y)-\langle\nabla R(y),x-y\rangle$. For each $t$, choose an intermediate point $z_t\in[x_t,y_{t+1}]$ satisfying $2B_R(y_{t+1}\|x_t)=(x_t-y_{t+1})^\top\nabla^2R(z_t)(x_t-y_{t+1})$ and put $\|g_t\|_{*,t}^2=g_t^\top[\nabla^2R(z_t)]^{-1}g_t$.

The following two assertions hold for every comparator $u\in K$:

1. The pointwise regret $R_T(u)=\sum_{t=1}^T(f_t(x_t)-f_t(u))$ satisfies
$$ R_T(u)\le\frac\eta4\sum_{t=1}^T\|g_t\|_{*,t}^2+\frac{R(u)-R(x_1)}{2\eta}. $$
2. If $D_R^2=\max_{x,y\in K}(R(x)-R(y))$, $D_R=\sqrt{D_R^2}>0$, and $G_R>0$ bounds $\|g_t\|_{*,t}$, then the choice $\eta=D_R/(G_R\sqrt T)$ gives
$$ R_T(u)\le D_RG_R\sqrt T. $$

## Statement references

[[alg-online-mirror-descent|Agile mirror descent and its well-defined update conditions]]

[[def-mirror-map-and-bregman-divergence|Bregman divergence and local Hessian norms]]

[Hazan, Theorem 5.6 and displayed proof, PDF pages 101–103](https://arxiv.org/pdf/1909.05207)

## Facts & Assumptions

**Given:** The two universal assertions and all their hypotheses in the Statement.

[F1] [[alg-online-mirror-descent]]: the initial decision minimizes $R$ on $K$; the agile step solves $\nabla R(y)=\nabla R(x)-\eta g$ and then minimizes $B_R(\cdot\|y)$ over $K$.

[F2] [[def-mirror-map-and-bregman-divergence]]: the oriented divergence is $R(x)-R(y)-\langle\nabla R(y),x-y\rangle$, and the local dual squared norm is $g^\top[\nabla^2R(z)]^{-1}g$.

## Refutation

1.1 Set $d=T=1$, $K=[0,1]$, $U=\mathbb R$, $R(x)=x^2/2$, $x_1=0$, $f_1(x)=-x$, $g_1=-1$, and comparator $u=1$. The interval is nonempty, bounded, closed and convex with nonempty interior; $U$ is open and convex. The regularizer is continuous and $C^2$ on $\mathbb R$, with Hessian $1$. The identity $R((1-\lambda)x+\lambda y)=(1-\lambda)R(x)+\lambda R(y)-\lambda(1-\lambda)(x-y)^2/2$ proves $1$-strong convexity, and $0$ uniquely minimizes $R$ on $K$. The loss is differentiable and affine, hence convex, with gradient $-1$ everywhere. All regularizer, initialization and loss hypotheses hold. [given, construct, algebra]

2.1 For any $0<\eta\le1$, [F1] gives $y_2=\eta$, since $\nabla R(x)=x$. By [F2], $B_R(x\|y)=(x-y)^2/2$, which has its unique minimum on $K$ at $x_2=y_2=\eta$. Thus every update is well-defined and the required iterates lie in $K\cap U$. Also $2B_R(y_2\|x_1)=\eta^2=(x_1-y_2)^2\nabla^2R(z)$ for every $z$ on the segment, and $\|g_1\|_{*,1}=1$. Taking $G_R=1$ is admissible. [step 1.1, F1, F2, algebra]

3.1 The one-round regret against $u=1$ is $f_1(0)-f_1(1)=1$, independently of the internal post-round iterate. At $\eta=1$, the first assertion's right side is $1/4+(R(1)-R(0))/2=1/4+1/4=1/2$. Thus its claimed inequality would be $1\le1/2$, which is false. [step 1.1, step 2.1, algebra]

3.2 The maximum difference of regularizer values on $[0,1]$ is $R(1)-R(0)=1/2$, so $D_R=1/\sqrt2$. The second assertion's prescribed step is $\eta=D_R/(G_R\sqrt T)=1/\sqrt2$, which belongs to $(0,1]$ and therefore gives a valid trajectory by step 2.1. Its claimed regret bound is $D_RG_R\sqrt T=1/\sqrt2<1$, whereas the regret is still $1$. This separately refutes the tuned assertion. [step 1.1, step 2.1, algebra]

4.1 Both original conclusions fail under their stated hypotheses. The same witness also shows sharpness of the corrected constants: at $\eta=1$ the unhalved potential bound is $(R(1)-R(0))/\eta+(\eta/2)\|g_1\|_{*,1}^2=1$, and the optimized corrected expression $\sqrt2D_RG_R\sqrt T$ is also $1$. Thus retaining the full correct bound resolves the false constants without losing the comparator, local-norm or optimized-rate conclusions. [step 3.1, step 3.2, algebra] ∎

## Remarks

The original canonical ML-67 clause is retained verbatim in the repair packet's `original-false-clause.md`, with its exact substring hash and controlling-plan source recorded in `original-clause-record.json`. The local positive theorem supplies a complete proof with the initial term divided by $\eta$ and the accumulated local-norm term multiplied by $\eta/2$. At the original prescribed step its valid rate is $3D_RG_R\sqrt T/2$; optimizing gives $\sqrt2D_RG_R\sqrt T$. This refutation does not alter any update rule or assert an AdaGrad convergence rate.
