---
id: ex-ratio-delta-method
kind: example
title: "A ratio transformation"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [thm-first-and-second-order-delta-method-for-random-vectors]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Example

Give $\Omega=\{-1,1\}^2$ equal mass $1/4$ at each point, and let $Z=(Z_1,Z_2)$ be the coordinate vector. Put $\theta=(1,2)$, $T_n=\theta+n^{-1/2}Z$ for $n\ge1$, and define $g(x,y)=x/y$ for $y\ne0$ and $g(x,0)=0$. The denominator of $g(T_n)$ is positive for every $n$. The first-order delta method gives
$$\sqrt n\left(\frac{T_{n,1}}{T_{n,2}}-\frac12\right)\Rightarrow \frac12Z_1-\frac14Z_2.$$
The limit takes the values $1/4,3/4,-3/4,-1/4$ with equal probability and has variance $5/16$.

## Facts & Assumptions

**Given:** The four-point probability law and sequence in the example.

[A1] $\Omega=\{-1,1\}^2$ has full sigma-field and assigns mass $1/4$ to each point; the coordinate variables $Z_1,Z_2$ are independent Rademacher variables.

[F1] [[thm-first-and-second-order-delta-method-for-random-vectors]]: if $r_n>0$ is deterministic with $r_n\to\infty$, $r_n(T_n-\theta)\Rightarrow Z$, and the Borel map $g$ has derivative $A$ at $\theta$ with first-order remainder $o(\|h\|)$, then $r_n(g(T_n)-g(\theta))\Rightarrow AZ$.

## Verification

**Given:** The finite four-point law, $r_n=\sqrt n$, $\theta=(1,2)$, and the ratio map $g$ in the example.

1.1 By [A1], $Z_2\in\{-1,1\}$, so $T_{n,2}=2+Z_2/\sqrt n\ge1$ for every $n\ge1$. For $|v|<1$, the exact remainder after subtracting the linear map is $g(1+u,2+v)-\frac12-(u/2-v/4)=-(2u-v)v/[2(4+2v)]$, whose absolute value is bounded by a constant times $u^2+v^2$. Thus the derivative at $(1,2)$ is $(u,v)\mapsto u/2-v/4$. Also $\sqrt n(T_n-\theta)=Z$ exactly. [A1, given, algebra]

2.1 Apply [F1] with this derivative to obtain the stated limit. [F1, step 1.1, given]

3.1 By [A1], the four equiprobable values of $\frac12Z_1-\frac14Z_2$ are $1/4,3/4,-3/4,-1/4$. Their mean is zero and their second moment is $(1+9+9+1)/64=5/16$, which is the stated variance. [A1, given, step 2.1, algebra] ∎
