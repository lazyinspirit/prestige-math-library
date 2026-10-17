---
id: lem-local-root-from-uniformly-small-residual
kind: lemma
title: "A small residual gives a nearby root under a uniform inverse and Lipschitz bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-c-one-map-and-local-inverse
  - def-invertible-euclidean-linear-map
  - def-metric-ball
  - def-euclidean-inner-product
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-banach-fixed-point
  - thm-complete-subspace-iff-closed
  - thm-mean-value-inequality-for-total-derivatives
  - thm-euclidean-space-complete
  - thm-metric-open-set-algebra
  - thm-operator-norm-is-the-largest-singular-value
  - thm-chain-rule-for-total-derivatives
proof_strategy: contraction
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2, equations (90)–(93): vector Newton linearization; the quantitative residual-ball argument is proved here"
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $F:U\to\mathbb R^n$ be $C^1$ with Jacobian $J=DF$. Take $x_0\in U$ such that $A:=J(x_0)$ is invertible, and let $\beta>0$ be any bound with $\|A^{-1}\|_{\rm op}\le\beta$. Suppose $\epsilon:=\|F(x_0)\|_2>0$, set $r:=2\beta\epsilon$, and assume the open ball $B_2(x_0,2r)$ lies in $U$ and

$$\|J(x)-J(y)\|_{\rm op}\le L\|x-y\|_2\qquad(x,y\in B_2(x_0,2r))$$

for some $L\ge0$ with $\beta Lr\le\tfrac12$. Then $F$ has exactly one zero $x_*$ in the closed ball $\overline B_2(x_0,r)$, and

$$\|x_*-x_0\|_2\le2\beta\|F(x_0)\|_2.$$

If $F(x_0)=0$, then $x_0$ itself is a zero; this separate case makes no local uniqueness assertion.

## Facts & Assumptions

**Given:** The domain, $C^1$ map, invertible Jacobian $A=J(x_0)$, residual norm $\epsilon>0$, inverse bound $\|A^{-1}\|_{\rm op}\le\beta$, radius $r=2\beta\epsilon$, and derivative-Lipschitz bound in the Statement.

[F1] [[def-c-one-map-and-local-inverse]]: a $C^1$ map is totally differentiable and its derivative is continuous.

[F2] [[def-invertible-euclidean-linear-map]]: $A$ has a two-sided inverse $A^{-1}$.

[F3] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex open set, a uniform derivative-operator bound implies the corresponding Lipschitz bound for the map.

[F4] [[def-metric-ball]], [[thm-metric-open-set-algebra]], [[thm-euclidean-space-complete]], and the choice-free closed-subspace direction of [[thm-complete-subspace-iff-closed]]: a closed Euclidean ball is a nonempty complete metric space.

[F5] [[thm-banach-fixed-point]]: a contraction from a nonempty complete metric space to itself has a unique fixed point.

[F6] [[thm-operator-norm-is-the-largest-singular-value]]: the maximum defining the finite-dimensional Euclidean operator norm exists. By [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], $\|Bw\|_2\le\|B\|_{\rm op}\|w\|_2$, and the definition gives submultiplicativity.

[F7] [[thm-chain-rule-for-total-derivatives]]: for the composition $y\mapsto A^{-1}F(y)$, its derivative is $A^{-1}J(y)$.



## Proof

**Proof technique:** contraction.

1.1 Since $\beta>0$ and $\epsilon>0$, $r=2\beta\epsilon>0$. On $B_2(x_0,2r)$ define $\Phi(y):=y-A^{-1}F(y)$. By [F1] and [F7], $D\Phi(y)=I-A^{-1}J(y)=A^{-1}(A-J(y))$. Since $A=J(x_0)$, [F6] and the Lipschitz hypothesis give $\|D\Phi(y)\|_{\rm op}\le\beta L\|y-x_0\|_2\le\beta Lr\le\tfrac12$ for $y\in\overline B_2(x_0,r)$. [given, F1, F2, F6, F7, algebra]

2.1 On the open convex ball $B_2(x_0,r)$, step 1.1 gives $\|D\Phi(y)\|_{\rm op}\le\beta L\|y-x_0\|_2\le\beta Lr\le\tfrac12$. Applying [F3] on this open ball shows that $\Phi$ is $1/2$-Lipschitz there. Since $\Phi$ is continuous on $B_2(x_0,2r)$ by [F1], approximation by interior points extends the same inequality to every pair in $\overline B_2(x_0,r)$. [given, F1, F3, step 1.1]

3.1 At the center, $\|\Phi(x_0)-x_0\|_2=\|A^{-1}F(x_0)\|_2\le\|A^{-1}\|_{\rm op}\|F(x_0)\|_2\le\beta\epsilon=r/2$ by [F6]. For every $y\in\overline B_2(x_0,r)$, step 2.1 therefore gives $\|\Phi(y)-x_0\|_2\le\|\Phi(y)-\Phi(x_0)\|_2+\|\Phi(x_0)-x_0\|_2\le r/2+r/2=r$. Thus $\Phi$ maps the closed ball into itself. [given, step 2.1, F6, algebra]

4.1 The ball is nonempty and complete by [F4], so [F5] gives a unique fixed point $x_*\in\overline B_2(x_0,r)$. The fixed-point equation is $A^{-1}F(x_*)=0$; invertibility in [F2] yields $F(x_*)=0$. The ball membership gives the stated distance, and any zero in the ball is a fixed point of $\Phi$, so it equals $x_*$. [F2, F4, F5, step 3.1] ∎

