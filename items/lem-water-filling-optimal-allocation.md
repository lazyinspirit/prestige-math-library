---
id: lem-water-filling-optimal-allocation
kind: lemma
title: Water-filling maximizes the finite parallel Gaussian allocation objective
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-algebra-of-derivatives, thm-chain-rule, thm-intermediate-value, cor-second-derivative-characterises-convexity]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the allocation is finite-dimensional.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.4, Theorem 20.14"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §17.3.2, Theorem 17.7"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Statement

Let $L\ge1$, let $\lambda_1,\ldots,\lambda_L>0$, and let $P\ge0$. For allocations $p_j\ge0$ with $\sum_jp_j\le P$, set
$$F(p_1,\ldots,p_L):=\frac12\sum_{j=1}^L\ln\left(1+\frac{p_j}{\lambda_j}\right).$$
If $P=0$, the maximum is $0$ at $p_j=0$. If $P>0$, there is a unique $T>\min_j\lambda_j$ solving
$$\sum_{j=1}^L(T-\lambda_j)^+=P,$$
and the maximum is attained at $p_j^*=(T-\lambda_j)^+$. Its value is
$$C_L(P)=\frac12\sum_{j=1}^L\ln^+\left(\frac{T}{\lambda_j}\right),$$
where $u^+=\max(u,0)$ and $\ln^+(u)=\max(\ln u,0)$. The value function $C_L$ is nondecreasing and concave on $[0,\infty)$.

## Facts & Assumptions

**Given:** A finite list of positive noise variances $\lambda_j$ and total power budget $P\ge0$.

[F1] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: $\ln'(x)=1/x$ for $x>0$.

[F2] [[thm-intermediate-value]]: a continuous function whose endpoint values straddle a target takes that value.

[F3] [[cor-second-derivative-characterises-convexity]]: a twice-differentiable function on an open interval with nonnegative second derivative is convex. Applying this to $-f$ gives concavity when $f''\le0$. The tangent bound will be derived directly from concavity below.

[F4] [[thm-algebra-of-derivatives]] gives the sum, scalar, product and quotient derivative rules; [[thm-chain-rule]] supplies the derivative of a composition at points where both derivatives are defined.

## Proof

1.1 For $P=0$, feasibility forces every $p_j=0$, so the maximum is $0$. Suppose $P>0$, put $a=\min_j\lambda_j$, and define $g(T)=\sum_j(T-\lambda_j)^+$. For real $u,v$, considering whether each is nonnegative gives $|u^+-v^+|\le|u-v|$; hence $|g(T)-g(S)|\le L|T-S|$, proving continuity, including at the breakpoints. We have $g(a)=0$ and $g(a+P)\ge P$ because a branch with $\lambda_j=a$ contributes $P$. By [F2] on $[a,a+P]$, a solution exists; it lies above $a$ since $P>0$. If $a<S<T$, that same branch grows by $T-S>0$ and all other terms are nondecreasing, so $g(T)>g(S)$ and the solution is unique. [F2, given, cases, algebra]

2.1 Put $p_j^*=(T-\lambda_j)^+$. Then $\sum_jp_j^*=P$. Extend $f_j(p)=\frac12\ln(1+p/\lambda_j)$ to the open interval $p>-\lambda_j$. Its affine inner function has positive value and derivative $1/\lambda_j$, so [F1] and the chain rule in [F4] give $f_j'(p)=1/(2(\lambda_j+p))$; the quotient rule gives $f_j''(p)=-1/(2(\lambda_j+p)^2)<0$. Thus [F3] applied to $-f_j$ proves concavity on this open interval. For any $a,b$ in it and $0<t<1$, concavity gives $f_j(a+t(b-a))\ge(1-t)f_j(a)+tf_j(b)$. Subtracting $f_j(a)$, dividing by $t$, and taking $t\downarrow0$ yields $f_j(b)-f_j(a)\le f_j'(a)(b-a)$. This proves the tangent bound also when $a=0$, which is an interior point of the extended domain. On an active branch $f_j'(p_j^*)=1/(2T)$; on an inactive branch $p_j^*=0$ and $f_j'(0)=1/(2\lambda_j)\le1/(2T)$. Summing the tangent bounds gives, for every feasible $p$, $\sum_j[f_j(p_j)-f_j(p_j^*)]\le(2T)^{-1}(\sum_jp_j-P)\le0$. Thus $p^*$ is globally optimal. [F1, F3, F4, step 1.1, given, algebra]

3.1 Substitution of $p_j^*$ yields $F(p^*)=\frac12\sum_j\ln^+(T/\lambda_j)$. The feasible sets are nested as $P$ grows, so $C_L$ is nondecreasing. If $P_0,P_1\ge0$ and $p^{(0)},p^{(1)}$ are maximizing allocations, then $\theta p^{(0)}+(1-\theta)p^{(1)}$ is feasible at $\theta P_0+(1-\theta)P_1$. Concavity of each $f_j$ gives $C_L(\theta P_0+(1-\theta)P_1)\ge\theta C_L(P_0)+(1-\theta)C_L(P_1)$, including $P_i=0$ by step 1.1. [step 1.1, step 2.1, given, algebra] ∎
