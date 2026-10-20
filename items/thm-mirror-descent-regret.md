---
id: thm-mirror-descent-regret
kind: theorem
title: A corrected regret bound for agile mirror descent
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-online-mirror-descent
  - def-mirror-map-and-bregman-divergence
  - def-static-dynamic-and-strongly-adaptive-regret
  - def-convex-subset-of-euclidean-space
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - def-subgradient-and-subdifferential
  - thm-differentiable-convex-functions-and-gradient-inequality
  - lem-mirror-descent-bregman-projection-exists
  - lem-bregman-three-point-identity
  - lem-bregman-divergence-nonnegative
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-heine-borel-rn
  - thm-euclidean-semicontinuous-extreme-value-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.3.2, Algorithm 14, Theorem 5.6 and complete displayed proof, PDF pp. 100–103 (printed pp. 78–81); the final coefficient in the printed theorem is refuted by the one-round witness in the batch notes."
    - title: "Peter Bartlett, Stat 260/CS 294-102: Learning in Sequential Decision Problems, mirror-descent lecture notes"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf"
      locator: "Slides 28–30, mirror-descent theorem and complete Bregman-potential proof, with an unhalved initial term."
    - title: "Francesco Orabona, Online Mirror Descent II: Regret and Mirror Version"
      url: "https://parameterfree.com/2019/10/01/online-mirror-descent-ii-regret-and-mirror-version/"
      locator: "Full OMD one-step Bregman proof and constant-step regret derivation, lines 113–132."
verification:
  precheck: n/a
---

## Statement

Let $d\ge1$ and let $(K,U,R)$ be a mirror regularizer on $K\subseteq\mathbb R^d$, with $K$ nonempty, bounded, closed, and convex, $U$ open and convex, positive-definite Hessian on $U$, and $R$ $m$-strongly convex on $K$ for some $m>0$. Let $T\ge1$ be an integer and $\eta>0$. Let $x_1\in K\cap U$ minimize $R$ on $K$. For every $t=1,\ldots,T$, suppose $x_t,x_{t+1}\in K\cap U$, $y_{t+1}\in U$, and

$$\nabla R(y_{t+1})=\nabla R(x_t)-\eta g_t,\qquad x_{t+1}\in\arg\min_{x\in K}B_R(x\|y_{t+1}).$$

For each $t$, let either $f_t$ be differentiable and convex on an open convex set containing $K$ with $g_t=\nabla f_t(x_t)$, or let $f_t$ be convex on a convex set containing $K$ with $f_t(u)\ge f_t(x_t)+\langle g_t,u-x_t\rangle$ for every $u\in K$. Define the pointwise regret by $R_T(u):=\sum_{t=1}^T(f_t(x_t)-f_t(u))$. For each $t$, there exists $z_t$ on the segment $[x_t,y_{t+1}]$ such that

$$2B_R(y_{t+1}\|x_t)=\|x_t-y_{t+1}\|_{z_t}^2.$$

For every comparator $u\in K$,

$$R_T(u)\le\frac{R(u)-R(x_1)}{\eta}+\frac{\eta}{2}\sum_{t=1}^T\|g_t\|_{*,z_t}^2.$$

The range diameter $D_R^2:=\max_{x,y\in K}(R(x)-R(y))$ is finite, and $D_R:=\sqrt{D_R^2}$. If $D_R>0$, $G_R>0$, and $\|g_t\|_{*,z_t}\le G_R$ for all $t$, then $\eta=D_R/(G_R\sqrt T)$ gives $R_T(u)\le\tfrac32D_RG_R\sqrt T$. Minimizing the corrected right-hand expression over $\eta>0$ instead gives $\eta=\sqrt2D_R/(G_R\sqrt T)$ and $R_T(u)\le\sqrt2D_RG_R\sqrt T$.

## Statement references

[[alg-online-mirror-descent]]: defines the agile dual update, the Bregman projection, the full-information timing, and the optional supplied-subgradient branch.

[[def-mirror-map-and-bregman-divergence]]: defines $B_R$, the local primal/dual Hessian norms, and strong convexity on $K$.

[[def-static-dynamic-and-strongly-adaptive-regret]]: defines pointwise regret against a fixed comparator $u\in K$.

[[def-convex-subset-of-euclidean-space]]: convexity of $K$ supplies the segments used in the minimizer and projection arguments.

[[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: defines convexity of the loss functions.

[[def-euclidean-inner-product]]: defines the pairings and Euclidean norms in the local Hessian calculations.

[[def-jacobian-matrix-and-gradient]]: defines each loss gradient as its standard-coordinate partial-derivative vector.

[[thm-differentiable-convex-functions-and-gradient-inequality]]: the smooth loss case gives the supporting inequality used in the proof.

[[def-subgradient-and-subdifferential]]: defines the supplied supporting vector in the nonsmooth case.

[[lem-bregman-three-point-identity]]: provides the algebraic identity that converts the dual step into a potential difference.

[[lem-bregman-divergence-nonnegative]]: provides the nonnegative potential terms used when telescoping.

[[lem-mirror-descent-bregman-projection-exists]]: establishes existence/uniqueness and the projection variational and Pythagorean inequalities.

[[thm-multivariable-taylor-formula-with-lagrange-remainder]]: supplies the intermediate Hessian point $z_t$ on each update segment.

## Facts & Assumptions

**Given:** The mirror regularizer, horizon, step size, iterates, update equations, loss conditions, and comparator in the Statement.

[A1] At every round $x_t,x_{t+1}\in K\cap U$, $y_{t+1}\in U$, the agile gradient identity holds, and $x_{t+1}$ minimizes $B_R(\cdot\|y_{t+1})$ on $K$.

[A2] The initial point $x_1\in K\cap U$ minimizes $R$ on $K$.

[A3] At each round, either the differentiable convex gradient condition or the explicitly stated supporting-subgradient condition holds for every comparator in $K$.

[A4] $D_R>0$, $G_R>0$, and $\|g_t\|_{*,z_t}\le G_R$ for every $t$ when the tuned corollaries are invoked.

[F1] [[def-mirror-map-and-bregman-divergence]]: $B_R(a\|b)=R(a)-R(b)-\langle\nabla R(b),a-b\rangle$; for $z\in U$, $H_R(z)$ is positive definite and $\|v\|_z^2=v^\top H_R(z)v$, $\|h\|_{*,z}^2=h^\top H_R(z)^{-1}h$.

[F2] [[lem-bregman-three-point-identity]]: $\langle a-b,\nabla R(c)-\nabla R(b)\rangle=B_R(a\|b)-B_R(a\|c)+B_R(b\|c)$ for $a\in K\cup U$ and $b,c\in U$.

[F3] [[lem-bregman-divergence-nonnegative]]: $B_R(a\|b)\ge0$ for $a,b\in U$, and $B_R(a\|b)\ge\frac m2\|a-b\|_2^2$ for $a\in K$, $b\in K\cap U$.

[F4] [[alg-online-mirror-descent]]: $\nabla R(y_{t+1})=\nabla R(x_t)-\eta g_t$ and $x_{t+1}$ is the Bregman minimizer.

[F5] [[lem-mirror-descent-bregman-projection-exists]]: for every $u\in K$, $B_R(u\|y_{t+1})\ge B_R(u\|x_{t+1})+B_R(x_{t+1}\|y_{t+1})$.

[F6] [[thm-differentiable-convex-functions-and-gradient-inequality]]: if $f_t$ is differentiable and convex on an open convex domain containing $K$, then $f_t(x_t)-f_t(u)\le\langle\nabla f_t(x_t),x_t-u\rangle$.

[F7] [[def-subgradient-and-subdifferential]]: in the supplied-subgradient branch, $f_t(x_t)-f_t(u)\le\langle g_t,x_t-u\rangle$ for every $u\in K$ by the stated supporting inequality.

[F8] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: for $R\in C^2(U)$ and $x_t,y_{t+1}\in U$, some $\theta_t\in(0,1)$ gives the second-order Taylor formula at $x_t$ along $y_{t+1}-x_t$.

[F9] [[def-static-dynamic-and-strongly-adaptive-regret]]: pointwise regret against $u$ is $\sum_t(f_t(x_t)-f_t(u))$.

[F10] [[thm-heine-borel-rn]]: closed bounded subsets of $\mathbb R^d$ are compact.

[F11] [[thm-euclidean-semicontinuous-extreme-value-theorem]]: a continuous real-valued function on a nonempty compact Euclidean set attains both its minimum and maximum.

[F12] [[def-convex-subset-of-euclidean-space]]: for $x,y\in K$ and $s\in[0,1]$, $(1-s)x+sy\in K$.

[F13] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: a loss is convex when its value on a segment is at most the corresponding affine combination of endpoint values.

[F14] [[def-euclidean-inner-product]]: the Euclidean pairing is $\langle v,w\rangle=\sum_i v_iw_i$ and its norm is induced by that inner product.

[F15] [[def-jacobian-matrix-and-gradient]]: $\nabla f_t(x_t)$ is the standard-coordinate vector of partial derivatives.

## Proof

1.1 In either loss case [F6] or [F7] gives $f_t(x_t)-f_t(u)\le\langle g_t,x_t-u\rangle$ for every $u\in K$; the loss convexity convention is [F13], and gradients are the vectors in [F15]. [given, A3, F6, F7, F13, F15, cases]

1.2 Apply [F8] to $R$ along the segment from $x_t$ to $y_{t+1}$. If $x_t\ne y_{t+1}$ it gives $z_t=x_t+\theta_t(y_{t+1}-x_t)\in U$ and $B_R(y_{t+1}\|x_t)=\tfrac12(x_t-y_{t+1})^\top H_R(z_t)(x_t-y_{t+1})$; if the two points coincide, choose $z_t=x_t$ and both sides are zero. Thus the stated intermediate-point identity holds. [given, F1, F8, cases, choose, algebra]

1.3 Put $d_t=x_t-y_{t+1}$. Expanding the two Bregman terms by [F1] gives $B_R(x_t\|y_{t+1})+B_R(y_{t+1}\|x_t)=\langle\nabla R(x_t)-\nabla R(y_{t+1}),d_t\rangle=\eta\langle g_t,d_t\rangle$ by [A1]. [given, A1, F1, algebra]

1.4 By [F10], $K$ is compact; by [F1], $R$ is continuous there; hence [F11] gives $M=\max_KR$ and $m_0=\min_KR$. Every difference $R(x)-R(y)$ is at most $M-m_0$, and points attaining $M$ and $m_0$ attain this difference, so $D_R^2=M-m_0$ is finite and nonnegative. [given, F1, F10, F11, choose, algebra]

2.1 Let $A=H_R(z_t)$, $a=\|g_t\|_{*,z_t}$, and $b=\|d_t\|_{z_t}$. For every real $\lambda$, positive definiteness gives $0\le(d_t-\lambda A^{-1}g_t)^\top A(d_t-\lambda A^{-1}g_t)=b^2-2\lambda\langle g_t,d_t\rangle+\lambda^2a^2$, with the pairing from [F14]. If $a>0$, substitute $\lambda=\langle g_t,d_t\rangle/a^2$ to get $\langle g_t,d_t\rangle^2\le a^2b^2$; if $a=0$, positive definiteness of $A^{-1}$ forces $g_t=0$. In either case $\langle g_t,d_t\rangle\le ab$. By steps 1.2 and 1.3, $B_R(x_t\|y_{t+1})=\eta\langle g_t,d_t\rangle-b^2/2\le\eta ab-b^2/2\le\eta^2a^2/2$, the last inequality following from $(b-\eta a)^2\ge0$. [step 1.2, step 1.3, F1, F14, algebra, cases]

3.1 Use [F2] with $a=u$, $b=x_t$, and $c=y_{t+1}$, together with [A1], to write $\eta\langle g_t,x_t-u\rangle=B_R(u\|x_t)-B_R(u\|y_{t+1})+B_R(x_t\|y_{t+1})$. Apply [F5] to the middle potential and [F3] to $B_R(x_{t+1}\|y_{t+1})$; then apply step 2.1. With step 1.1 this gives $\eta(f_t(x_t)-f_t(u))\le B_R(u\|x_t)-B_R(u\|x_{t+1})+\frac{\eta^2}{2}\|g_t\|_{*,z_t}^2$. [step 1.1, step 2.1, A1, F2, F3, F4, F5, algebra]

4.1 Sum step 3.1 over $t$. The Bregman terms telescope, and [F3] gives $B_R(u\|x_{T+1})\ge0$ because $u\in K$ and $x_{T+1}\in K\cap U$. Divide by $\eta>0$ to obtain $R_T(u)\le B_R(u\|x_1)/\eta+(\eta/2)\sum_{t=1}^T\|g_t\|_{*,z_t}^2$. [step 3.1, F3, F9, algebra]

5.1 For fixed $u\in K$, [F12] puts the segment $x_1+s(u-x_1)$ in $K$, and $R$ has a minimum at $s=0$. Since $x_1\in U$, the right derivative is $\langle\nabla R(x_1),u-x_1\rangle\ge0$. The Bregman identity gives $R(u)-R(x_1)=B_R(u\|x_1)+\langle\nabla R(x_1),u-x_1\rangle\ge B_R(u\|x_1)$. Substitute in step 4.1 to prove the pointwise bound. [given, A2, F1, F9, F12, step 4.1, algebra]

6.1 For every $u\in K$, $R(u)-R(x_1)\le D_R^2$. Under [A4], step 5.1 gives $R_T(u)\le D_R^2/\eta+\eta TG_R^2/2$. Substituting $\eta=D_R/(G_R\sqrt T)$ gives $\tfrac32D_RG_R\sqrt T$. For arbitrary $\eta>0$, the difference between $D_R^2/\eta+\eta TG_R^2/2$ and $\sqrt2D_RG_R\sqrt T$ is $\left(D_R/\sqrt\eta-G_R\sqrt{T\eta/2}\right)^2\ge0$. Equality holds when $D_R^2/\eta=\eta TG_R^2/2$, that is, $\eta=\sqrt2D_R/(G_R\sqrt T)$. This proves the optimized corrected bound. [step 1.4, step 5.1, A4, algebra] ∎


## Remarks

The unhalved initial potential and the $\eta/2$ local-norm term are essential. The original planned $\eta/4$ term and $[R(u)-R(x_1)]/(2\eta)$ initial term, together with its $D_RG_R\sqrt T$ corollary at $\eta=D_R/(G_R\sqrt T)$, are false. Their exact original clause and a complete admissible one-round refutation are preserved in `fs-mirror-descent-halved-regret-constants`. The corrected $\sqrt2D_RG_R\sqrt T$ optimized constant here is attained by that quadratic witness at $\eta=1$.

## Remarks references

[[fs-mirror-descent-halved-regret-constants]].
