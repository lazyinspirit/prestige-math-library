---
id: ex-lagrange-multipliers-with-two-constraints
kind: example
title: 'Two constraints on a sphere-plane circle, where one multiplier solution is only a local maximum'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lagrange-multipliers-for-regular-level-set-constraints, def-euclidean-submersions-and-immersions, lem-matrix-rank-detected-by-nonzero-minors, def-jacobian-matrix-and-gradient, def-euclidean-local-extrema-and-critical-points, def-p-norms-on-rn, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
justified_by: []
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
    - title: 'University of Toronto MAT237 notes, Section 2.8, Example 5'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.8.html'
pipeline_run: null
---

## Example

Let $G(x,y,z)=(x^2+y^2+z^2,z)$, let $c=(2,1)$, and let $M=G^{-1}(c)$, the unit circle in the plane $z=1$. The derivative $DG$ is surjective at every point of $M$, so the two-constraint multiplier rule applies there, and its equation $\nabla f=DG^{\mathsf T}\lambda$ for the objective $f(x,y,z)=xy+xz+yz$ has exactly four solutions on $M$:
$$P_1=\Bigl(\tfrac1{\sqrt2},\tfrac1{\sqrt2},1\Bigr),\quad P_2=(0,-1,1),\quad P_3=(-1,0,1),\quad P_4=\Bigl(-\tfrac1{\sqrt2},-\tfrac1{\sqrt2},1\Bigr).$$

On $M$ the objective has maximum $\tfrac12+\sqrt2$, attained only at $P_1$, and minimum $-1$, attained exactly at $P_2$ and $P_3$. The fourth solution has $f(P_4)=\tfrac12-\sqrt2$, which is neither of those values, and it is nevertheless a **strict local maximum of $f$ on $M$**: $f(p)<f(P_4)$ for every $p\in M$ with $0<\lVert p-P_4\rVert_2<\sqrt{2-\sqrt2}$.

So the multiplier equation does not, by itself, separate a global extremum from a merely local one. Every one of its solutions here is a local extremum of $f$ on $M$, and three of the four are global; deciding which is which took a separate argument.

## Facts & Assumptions

**Given:** The maps $f(x,y,z)=xy+xz+yz$ and $G(x,y,z)=(x^2+y^2+z^2,z)$ on $\mathbb R^3$, the value $c=(2,1)$, and $M=G^{-1}(c)$. Extrema on $M$ are constrained extrema, comparing $f$ only at points of $M$: a point $a\in M$ is a **local extremum of $f$ on $M$** when for some $r>0$ either $f(p)\le f(a)$ for every $p\in M$ with $\lVert p-a\rVert_2<r$, or $f(p)\ge f(a)$ for every such $p$; it is a **strict local maximum of $f$ on $M$** when for some $r>0$, $f(p)<f(a)$ for every $p\in M$ with $0<\lVert p-a\rVert_2<r$. This is the sense of "local maximum or minimum of $f$ subject to $G(x)=c$" in [L3]; [L4] is the unconstrained notion, comparing $f$ at every nearby point of the open set on which it is defined.

[L1] A polynomial in one real variable is differentiable with the derivative computed by the power, sum and product rules, so each partial derivative of $f$ and of the components of $G$ is again a polynomial and hence continuous; a map whose partial derivatives exist near a point and are continuous there is totally differentiable there, with derivative the Jacobian matrix ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-jacobian-matrix-and-gradient]]).

[L2] A $C^1$ map is a submersion at a point when its derivative there is surjective, and a matrix has rank at least $r$ exactly when some $r$-rowed minor is nonzero ([[def-euclidean-submersions-and-immersions]], [[lem-matrix-rank-detected-by-nonzero-minors]]).

[L3] If $a$ is a local maximum or minimum of a $C^1$ objective $f$ subject to $G(x)=c$ with $G$ of class $C^1$, and $DG(a)$ is surjective, then there is a unique $\lambda$ with $\nabla f(a)=DG(a)^{\mathsf T}\lambda$; the condition is necessary and not sufficient ([[thm-lagrange-multipliers-for-regular-level-set-constraints]]).

[L4] For $U\subseteq\mathbb R^m$ open, $a\in U$ and $f:U\to\mathbb R$, the point $a$ is a local minimum when some Euclidean neighbourhood $V$ of $a$ satisfies $f(a)\le f(x)$ for every $x\in U\cap V$, and a strict local minimum when the inequality is strict for $x\ne a$; local and strict local maxima reverse these inequalities ([[def-euclidean-local-extrema-and-critical-points]]). The Euclidean norm is $\lVert x\rVert_2=(\sum_{k<n}|x_k|^2)^{1/2}$ ([[def-p-norms-on-rn]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $f$ and $G$ are $C^1$, with $\nabla f(x,y,z)=(y+z,x+z,x+y)$ and with the two rows of $JG(x,y,z)$ equal to $(2x,2y,2z)$ and $(0,0,1)$. [given, L1]

1.2 A point lies in $M$ exactly when $z=1$ and $x^2+y^2=1$. Writing $s=x+y$ on $M$ gives $s^2=x^2+y^2+2xy=1+2xy$, so $xy=(s^2-1)/2$ and $f=xy+z(x+y)=(s^2+2s-1)/2$; moreover $2xy\le x^2+y^2=1$ because $(x-y)^2\ge0$, so $s^2\le2$ and $-\sqrt2\le s\le\sqrt2$. [given, algebra]

1.3 For $p=(x,y,1)\in M$ and $P_4=(-\tfrac1{\sqrt2},-\tfrac1{\sqrt2},1)$, expanding gives $\lVert p-P_4\rVert_2^2=(x+\tfrac1{\sqrt2})^2+(y+\tfrac1{\sqrt2})^2=(x^2+y^2)+\sqrt2(x+y)+1=2+\sqrt2\,s$. So on $M$ the distance to $P_4$ determines $s$ and increases with it. [given, L4, algebra]

2.1 At a point of $M$ the two-rowed minor of $JG$ from columns $1,3$ is $2x$ and the minor from columns $2,3$ is $2y$, and $x^2+y^2=1$ forces $(x,y)\ne(0,0)$, so one of them is nonzero and $JG$ has rank $2$. By [L2], $DG$ is surjective at every point of $M$. [step 1.1, step 1.2, L2, algebra]

2.2 By step 1.2, on $M$ the value of $f$ at a point with $x+y=s$ is $(s^2+2s-1)/2$, and $\tfrac{s^2+2s-1}2-(-1)=\tfrac{(s+1)^2}2\ge0$ with equality exactly when $s=-1$, while $\tfrac{(\sqrt2)^2+2\sqrt2-1}2-\tfrac{s^2+2s-1}2=\tfrac{(\sqrt2-s)(\sqrt2+s+2)}2\ge0$ for $-\sqrt2\le s\le\sqrt2$, with equality exactly when $s=\sqrt2$. Hence $f\ge-1$ on $M$, with equality exactly at the points where $s=-1$, and $f\le\tfrac12+\sqrt2$ on $M$, with equality exactly at the points where $s=\sqrt2$. [step 1.2, algebra]

2.3 By step 1.2 and step 1.3, a point of $M$ with $0<\lVert p-P_4\rVert_2<\sqrt{2-\sqrt2}$ has $0<2+\sqrt2\,s<2-\sqrt2$, that is $-\sqrt2<s<-1$; and $\tfrac{s^2+2s-1}2-\tfrac{(-\sqrt2)^2+2(-\sqrt2)-1}2=\tfrac{(s+\sqrt2)(s+2-\sqrt2)}2<0$ there, because $s+\sqrt2>0$ while $s+2-\sqrt2<1-\sqrt2<0$. [step 1.2, step 1.3, algebra]

3.1 On $M$, $s=\sqrt2$ forces $2xy=s^2-1=1=x^2+y^2$, hence $(x-y)^2=0$ and $x=y=\tfrac1{\sqrt2}$; and $s=-1$ forces $2xy=s^2-1=0$, hence $\{x,y\}=\{0,-1\}$. Both loci are therefore nonempty, so by step 2.2 the bounds are attained: the maximum of $f$ on $M$ is $\tfrac12+\sqrt2$, only at $P_1=(\tfrac1{\sqrt2},\tfrac1{\sqrt2},1)$, and the minimum is $-1$, exactly at $P_2=(0,-1,1)$ and $P_3=(-1,0,1)$. [step 1.2, step 2.2, algebra]

3.2 By step 2.1 and [L3], every local extremum of $f$ on $M$ satisfies $\nabla f=DG^{\mathsf T}\lambda$ for a unique $\lambda=(\lambda_1,\lambda_2)$; by step 1.1 this reads $y+1=2\lambda_1x$, $x+1=2\lambda_1y$ and $x+y=2\lambda_1+\lambda_2$, the last of which only determines $\lambda_2$. Subtracting the second equation from the first gives $(y-x)(1+2\lambda_1)=0$. [given, step 1.1, step 2.1, L3, algebra]

3.3 By step 1.2 and step 2.3, $f(P_4)=\tfrac{(-\sqrt2)^2+2(-\sqrt2)-1}2=\tfrac12-\sqrt2$, and $f(p)<f(P_4)$ for every $p\in M$ with $0<\lVert p-P_4\rVert_2<\sqrt{2-\sqrt2}$. So $P_4$ is a strict local maximum of $f$ on $M$, with $r=\sqrt{2-\sqrt2}$. [given, step 1.2, step 2.3, L4, algebra]

4.1 If $y=x$, then $x^2+y^2=1$ gives $x=y=\pm\tfrac1{\sqrt2}$ and $s=\pm\sqrt2$, so the point is $P_1$ or $P_4$, and both satisfy the equations of step 3.2 with $\lambda_1=(x+1)/(2x)$, which is defined because $x\ne0$. If instead $\lambda_1=-\tfrac12$, the first equation gives $x+y=-1$, so $s=-1$, and by step 3.1 the points are $P_2$ and $P_3$, which satisfy all three equations with $\lambda_1=-\tfrac12$. The two cases cannot both hold, since $x=y$ and $x+y=-1$ give $x^2+y^2=\tfrac12\ne1$. So $P_1,P_2,P_3,P_4$ are exactly the solutions of the multiplier equation on $M$. [step 1.2, step 3.1, step 3.2, algebra]

5.1 By step 3.1 the maximum and the minimum of $f$ on $M$ are attained at $P_1$, $P_2$ and $P_3$, each of which is among the four solutions of step 4.1, as [L3] requires. By step 3.3 the remaining solution $P_4$ is a strict local maximum whose value $\tfrac12-\sqrt2$ is neither the maximum nor the minimum, because $-1<\tfrac12-\sqrt2<\tfrac12+\sqrt2$ follows from $1<\sqrt2<\tfrac32$. So the multiplier equation is satisfied at a point that is a local but not a global extremum, and satisfying it does not decide which. [step 3.1, step 3.3, step 4.1, L3, algebra] ∎
