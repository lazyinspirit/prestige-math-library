---
id: lem-tdmath-concave-affine-maximizer-and-hessian
kind: lemma
title: Concave supporting bound, affine maxima, and Hessian sign
domain: mathematics
library: mathematics
status: draft
origin: pipeline
proof_strategy: direct
deps: [cor-mean-value-theorem, def-convex-subset-of-euclidean-space, def-total-derivative-in-euclidean-space, thm-chain-rule-for-total-derivatives]
dependency_roles:
  cor-mean-value-theorem: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization
      url: https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf
---

## Statement

Let $U\subseteq\mathbb R^d$ be open and convex, and let $f:U\to\mathbb R$ be differentiable and concave, meaning $f((1-t)x+ty)\ge(1-t)f(x)+tf(y)$ for $x,y\in U$ and $0\le t\le1$. Then

$$f(y)\le f(x)+Df(x)(y-x)\qquad(x,y\in U).$$

Let $A:\mathbb R^d\to\mathbb R^k$ be linear, $b\in\mathbb R^k$, and $x_*\in U$ satisfy $Ax_*=b$ and $Df(x_*)h=0$ for every $h\in\ker A$. Then $x_*$ is a global maximum of $f$ on $F=U\cap\{x:Ax=b\}$. If $f$ is strictly concave on $F$, meaning the concavity inequality is strict for distinct $x,y\in F$ and $0<t<1$, this maximum is unique. If $f\in C^2(U)$, then its Hessian bilinear form $D^2f(x)=D(Df)(x)$ is negative semidefinite at every $x\in U$: $D^2f(x)[h,h]\le0$ for every $h\in\mathbb R^d$. Concavity alone does not assert strict curvature.

## Facts & Assumptions

**Given:** The open convex domain, differentiability and concavity; the linear affine constraints and stationarity for the maximum clause; strict concavity or $C^2$ regularity only for their respective further clauses.

[F1] [[def-convex-subset-of-euclidean-space]]: every segment between points of $U$ stays in $U$.

[F2] [[def-total-derivative-in-euclidean-space]]: $f(x+h)=f(x)+Df(x)h+o(\|h\|)$ at every $x\in U$.

[F3] [[thm-chain-rule-for-total-derivatives]]: composition with the affine line $t\mapsto x+th$ yields the usual first and second derivatives when $f$ is $C^2$.

[F4] [[cor-mean-value-theorem]]: a function continuous on a closed interval and differentiable inside it has an interior derivative equal to its endpoint secant slope.

## Proof

1.1 For $x,y\in U$ and $0<t<1$, [F1] keeps $x+t(y-x)$ in $U$, and concavity gives $f(x+t(y-x))\ge(1-t)f(x)+tf(y)$. Thus $f(y)-f(x)\le(f(x+t(y-x))-f(x))/t$. By [F2] the right side tends to $Df(x)(y-x)$ as $t\downarrow0$, proving the supporting inequality. [given, F1, F2, algebra]

1.2 If $x_*,y\in F$, then $A(y-x_*)=0$, so $y-x_*\in\ker A$ and stationarity gives $Df(x_*)(y-x_*)=0$. Step 1.1 yields $f(y)\le f(x_*)$. For two distinct maximizers, their midpoint is feasible by linearity and [F1], while strict concavity on $F$ would give a strictly greater midpoint value. Hence the global maximum is unique under that further hypothesis. [given, F1, step 1.1, algebra]

2.1 Assume $f\in C^2(U)$. For any $x\in U$ and vector $h$, openness permits $x\pm th$ for small $|t|$. Concavity at their midpoint gives $f(x+th)+f(x-th)-2f(x)\le0$. Divide by $t^2>0$ and let $t\to0$; the one-variable second-order expansion of the $C^2$ function $t\mapsto f(x+th)$ gives limit $D^2f(x)[h,h]$ by [F3]. Thus $D^2f(x)[h,h]\le0$ for every $h$. To justify that expansion explicitly, put $R(t)=g(t)-g(0)-g'(0)t-\tfrac12g''(0)t^2$. Differentiability of $g'$ gives $R'(s)=o(|s|)$; [F4] on the interval between $0$ and $t$ yields $R(t)=tR'(\xi_t)=o(t^2)$, since $|\xi_t|\le|t|$. Apply this for both signs of $t$. [given, F3, F4, algebra] ∎
