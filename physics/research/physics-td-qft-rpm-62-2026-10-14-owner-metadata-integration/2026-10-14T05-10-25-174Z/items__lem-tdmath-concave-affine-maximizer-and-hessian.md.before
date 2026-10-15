---
id: lem-tdmath-concave-affine-maximizer-and-hessian
kind: lemma
title: Concave supporting bound, affine maxima, and Hessian sign
domain: mathematics
library: mathematics
status: draft
origin: pipeline
proof_strategy: direct
deps: [thm-continuous-partial-derivatives-imply-total-differentiability, cor-mean-value-theorem, def-convex-subset-of-euclidean-space, def-total-derivative-in-euclidean-space, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives]
dependency_roles:
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization, §1.5
      url: https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf
---

## Statement

Let $U\subseteq\mathbb R^d$, $d\ge1$, be open, and let $f:U\to\mathbb R$ be differentiable. For $x,y\in U$, suppose the whole segment $[x,y]$ lies in $U$ and its concavity inequality holds:

$$f(x+t(y-x))\ge(1-t)f(x)+tf(y)\qquad(0\le t\le1).$$

Then the supporting bound is $f(y)\le f(x)+Df(x)(y-x)$. In particular this bound holds for every $x,y$ in any convex subset of $U$ on which $f$ is concave. No global convexity of $U$ is assumed.

Let $A:\mathbb R^d\to\mathbb R^k$ be linear, $b\in\mathbb R^k$, and $F=U\cap\{x:Ax=b\}$. Suppose $x_*\in F$, $Df(x_*)h=0$ for every $h\in\ker A$, and for every $y\in F$ the segment $[x_*,y]$ lies in $U$ and has the displayed concavity inequality. Then $x_*$ is a global maximum of $f$ on $F$. If $F$ is convex and $f|_F$ is strictly concave, meaning the inequality is strict for distinct endpoints and $0<t<1$, the maximum is unique.

For the curvature clause, suppose $f\in C^2(U)$ and fix $x\in U$. If, for every $h\in\mathbb R^d$, all sufficiently small $|t|$ satisfy $x\pm th\in U$ and

$$f(x+th)+f(x-th)\le2f(x),$$

then the Hessian bilinear form $D^2f(x)=D(Df)(x)$ satisfies $D^2f(x)[h,h]\le0$ for every $h$. This condition holds whenever $f$ is concave on a neighborhood of $x$. Thus a $C^2$ function concave on an open convex region has negative-semidefinite Hessian there. Concavity alone does not assert strict curvature.

## Facts & Assumptions

**Given:** The open domain, differentiability, and the stated admissible segments and concavity inequalities; affine constraints and stationarity for the maximum clause; strict concavity or $C^2$ regularity only for their respective further clauses.

[F1] [[def-convex-subset-of-euclidean-space]]: every segment between points of a convex set stays in that set.

[F2] [[def-total-derivative-in-euclidean-space]]: $f(x+h)=f(x)+Df(x)h+o(\|h\|)$ at each point of differentiability.

[F3] [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-chain-rule-for-total-derivatives]] and [[def-ck-euclidean-maps-and-diffeomorphisms]]: continuous first and second coordinate partials give total derivatives of $f$ and its vector of first partials; thus a $C^2$ function restricted to the line $t\mapsto x+th$ is $C^2$, with second derivative $D^2f(x+th)[h,h]$.

[F4] [[cor-mean-value-theorem]]: a real function continuous on a closed interval and differentiable inside it has an interior derivative equal to its endpoint secant slope.

## Proof

1.1 For an admissible pair $x,y$ and $0<t<1$, the given concavity inequality yields $f(y)-f(x)\le(f(x+t(y-x))-f(x))/t$. By [F2] the right side tends to $Df(x)(y-x)$ as $t\downarrow0$, proving the supporting bound. The convex-region specialization follows from [F1] and the concavity inequality on that region; it does not require any other segment of $U$ to be admissible. [given, F1, F2, algebra]

2.1 For $y\in F$, linearity gives $A(y-x_*)=0$, so stationarity yields $Df(x_*)(y-x_*)=0$. The assumed segment from $x_*$ to $y$ permits step 1.1, hence $f(y)\le f(x_*)$, proving global maximality. If $F$ is convex and two distinct points maximize $f$, their midpoint lies in $F$ by [F1], while strict concavity would give a strictly larger midpoint value. Thus the maximum is unique under the further hypothesis. [given, F1, step 1.1, algebra]

3.1 Under the $C^2$ and local midpoint hypotheses, fix $h$ and put $g(t)=f(x+th)$ near zero. By [F3], $g''(0)=D^2f(x)[h,h]$. Define $R(t)=g(t)-g(0)-g'(0)t-\tfrac12g''(0)t^2$. Differentiability of $g'$ gives $R'(s)=o(|s|)$; [F4] on the interval between $0$ and $t$ gives $R(t)=tR'(\xi_t)=o(t^2)$, since $|\xi_t|\le|t|$. Therefore $(g(t)+g(-t)-2g(0))/t^2\to g''(0)$. Its numerator is nonpositive by hypothesis, so $D^2f(x)[h,h]\le0$. Concavity on a neighborhood implies that midpoint hypothesis on every sufficiently short centered segment; this proves all Hessian claims without strengthening the domain assumptions. [given, F1, F3, F4, algebra] ∎
